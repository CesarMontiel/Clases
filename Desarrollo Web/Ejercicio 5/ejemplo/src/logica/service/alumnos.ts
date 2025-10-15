import { Alumno } from "@/logica/libs/types";
import { AlumnoAPI } from "@/logica/api/alumnos";

export class AlumnoService {
    private alumnoAPI: AlumnoAPI;

    constructor() {
        this.alumnoAPI = new AlumnoAPI();
    }

    async obtenerAlumnos(mayoresDe?: number): Promise<Alumno[]> {
        const alumnos = await this.alumnoAPI.getAlumnos();
        if (mayoresDe) {
            return alumnos.filter(a => a.edad >= mayoresDe);
        }
        return alumnos;
    }

    async buscarPorId(id: number): Promise<Alumno> {
        return await this.alumnoAPI.getAlumnoPorId(id);
    }

    async registrarAlumno(datos: Omit<Alumno, "id">): Promise<Alumno> {
        if (!datos.nombre || datos.nombre.trim() === "") {
            throw new Error("El nombre del alumno es obligatorio");
        }

        if (datos.edad < 15) {
            throw new Error("El alumno debe tener al menos 15 años");
        }

        return await this.alumnoAPI.crearAlumno(datos);
    }

    async actualizarAlumno(id: number, cambios: Partial<Alumno>): Promise<Alumno> {
        if (cambios.edad && cambios.edad < 15) {
            throw new Error("La edad mínima permitida es 15 años");
        }
        return await this.alumnoAPI.actualizarAlumno(id, cambios);
    }

    async eliminarAlumno(id: number): Promise<void> {
        const alumno = await this.alumnoAPI.getAlumnoPorId(id);
        if (alumno.edad < 18) {
            throw new Error("No se pueden eliminar alumnos menores de edad");
        }

        return await this.alumnoAPI.eliminarAlumno(id);
    }
}

export const alumnoService = new AlumnoService();