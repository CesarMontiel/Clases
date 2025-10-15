import { Alumno } from "@/logica/libs/types";

interface AlumnoRowProps {
    alumno: Alumno;
    onEdit?: (alumno: Alumno) => void;
    onDelete?: (id: number) => void;
}

export default function AlumnoRow({ alumno, onEdit, onDelete }: AlumnoRowProps) {
    return (
        <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {alumno.id}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {alumno.nombre}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {alumno.edad} años
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <div className="flex space-x-2">
                    {onEdit && (
                        <button
                            onClick={() => onEdit(alumno)}
                            className="text-blue-600 hover:text-blue-900 transition-colors duration-200 px-3 py-1 rounded border border-blue-300 hover:bg-blue-50"
                        >
                            Editar
                        </button>
                    )}
                    {onDelete && (
                        <button
                            onClick={() => onDelete(alumno.id)}
                            className="text-red-600 hover:text-red-900 transition-colors duration-200 px-3 py-1 rounded border border-red-300 hover:bg-red-50"
                        >
                            Eliminar
                        </button>
                    )}
                </div>
            </td>
        </tr>
    );
}