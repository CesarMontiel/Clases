import { Alumno } from "@/logica/libs/types";

export class AlumnoAPI {
    private readonly API_BASE = "http://localhost:3000/api/alumnos";

    async getAlumnos(): Promise<Alumno[]> {
        const res = await fetch(this.API_BASE, { cache: "no-store" });
        if (!res.ok) throw new Error("Error al obtener los alumnos");
        return res.json();
    }

    async getAlumnoPorId(id: number): Promise<Alumno> {
        const res = await fetch(`${this.API_BASE}/${id}`, { cache: "no-store" });
        if (!res.ok) throw new Error("Alumno no encontrado");
        return res.json();
    }

    async crearAlumno(nuevo: Omit<Alumno, "id">): Promise<Alumno> {
        const res = await fetch(this.API_BASE, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(nuevo),
        });
        if (!res.ok) throw new Error("Error al crear alumno");
        return res.json();
    }

    async actualizarAlumno(id: number, cambios: Partial<Alumno>): Promise<Alumno> {
        const res = await fetch(`${this.API_BASE}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(cambios),
        });
        if (!res.ok) throw new Error("Error al actualizar alumno");
        return res.json();
    }

    async eliminarAlumno(id: number): Promise<void> {
        const res = await fetch(`${this.API_BASE}/${id}`, { method: "DELETE" });
        if (!res.ok) throw new Error("Error al eliminar alumno");
    }
}

// Instancia singleton para mantener compatibilidad si es necesario
export const alumnoAPI = new AlumnoAPI();