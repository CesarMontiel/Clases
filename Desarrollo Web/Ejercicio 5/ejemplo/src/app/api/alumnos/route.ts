import { type Alumno } from "@/logica/libs/types";

const listaAlumnos: Alumno[] = [
  { id: 1, nombre: "Ana García", edad: 20 },
  { id: 2, nombre: "Carlos Rodríguez", edad: 22 },
  { id: 3, nombre: "María López", edad: 19 },
  { id: 4, nombre: "Juan Martínez", edad: 21 },
  { id: 5, nombre: "Elena Fernández", edad: 23 },
  { id: 6, nombre: "Pedro Sánchez", edad: 20 },
  { id: 7, nombre: "Laura González", edad: 18 },
  { id: 8, nombre: "David Ruiz", edad: 24 },
  { id: 9, nombre: "Carmen Díaz", edad: 22 },
  { id: 10, nombre: "Miguel Torres", edad: 19 }
];

export async function GET() {
  return Response.json(listaAlumnos);
}

export async function POST(req: Request) {
  const nuevoAlumno = await req.json();

  const id = listaAlumnos.length > 0 ? listaAlumnos.at(-1)!.id + 1 : 1;

  const alumno: Alumno = {
    id,
    nombre: nuevoAlumno.nombre,
    edad: nuevoAlumno.edad,
  };

  listaAlumnos.push(alumno);

  return Response.json(alumno, { status: 201 });
}

export { listaAlumnos };