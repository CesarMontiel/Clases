"use client";

import { useState, useEffect } from "react";
import { Alumno } from "@/logica/libs/types";
import { AlumnoService } from "@/logica/service/alumnos";
import AlumnoRow from "./AlumnoRow";

interface AlumnosTableProps {
    filtroEdadMinima?: number;
}

export default function AlumnosTable({ 
    filtroEdadMinima
}: AlumnosTableProps) {
    const [alumnos, setAlumnos] = useState<Alumno[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    
    const alumnoService = new AlumnoService();

    useEffect(() => {
        cargarAlumnos();
    }, [filtroEdadMinima]);

    const cargarAlumnos = async () => {
        try {
            setLoading(true);
            setError(null);
            const alumnosData = await alumnoService.obtenerAlumnos(filtroEdadMinima);
            setAlumnos(alumnosData);
        } catch (err) {
            setError(err instanceof Error ? err.message : "Error al cargar alumnos");
        } finally {
            setLoading(false);
        }
    };

    const handleEdit = (alumno: Alumno) => {
        console.log("Editar alumno:", alumno);
    };

    const handleDelete = async (id: number) => {
        if (confirm("¿Estás seguro de que quieres eliminar este alumno?")) {
            try {
                await alumnoService.eliminarAlumno(id);
                await cargarAlumnos(); 
            } catch (err) {
                setError(err instanceof Error ? err.message : "Error al eliminar alumno");
            }
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center p-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                <span className="ml-2 text-gray-600">Cargando alumnos...</span>
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-red-50 border border-red-200 rounded-md p-4">
                <div className="flex">
                    <div className="text-red-800">
                        <h3 className="text-sm font-medium">Error</h3>
                        <p className="text-sm mt-1">{error}</p>
                    </div>
                </div>
                <button
                    onClick={cargarAlumnos}
                    className="mt-3 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
                >
                    Reintentar
                </button>
            </div>
        );
    }

    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
                <p className="text-sm text-gray-600 mt-1">
                    {alumnos.length} alumno{alumnos.length !== 1 ? 's' : ''} 
                    {filtroEdadMinima && ` (mayores de ${filtroEdadMinima} años)`}
                </p>
            </div>
            
            {alumnos.length === 0 ? (
                <div className="text-center py-8">
                    <p className="text-gray-500">No hay alumnos para mostrar</p>
                    {filtroEdadMinima && (
                        <p className="text-sm text-gray-400 mt-2">
                            Intenta ajustar el filtro de edad
                        </p>
                    )}
                </div>
            ) : (
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    ID
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Nombre
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Edad
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Acciones
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {alumnos.map((alumno) => (
                                <AlumnoRow
                                    key={alumno.id}
                                    alumno={alumno}
                                    onEdit={handleEdit}
                                    onDelete={handleDelete}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
            
            <div className="px-6 py-3 bg-gray-50 border-t border-gray-200">
                <button
                    onClick={cargarAlumnos}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-200"
                >
                    Actualizar Lista
                </button>
            </div>
        </div>
    );
}