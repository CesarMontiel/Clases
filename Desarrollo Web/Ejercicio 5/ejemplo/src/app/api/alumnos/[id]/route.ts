import { listaAlumnos } from "../route";

export async function GET(_req: Request, { params }: { params: { id: string } }) {
    const id = Number(params.id);
    const alumno = listaAlumnos.find(a => a.id === id);

    if (!alumno) {
        return Response.json({ error: "Alumno no encontrado" }, { status: 404 });
    }

    return Response.json(alumno);
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
    const id = Number(params.id);
    const datos = await req.json();

    const indice = listaAlumnos.findIndex(a => a.id === id);
    if (indice === -1) {
        return Response.json({ error: "Alumno no encontrado" }, { status: 404 });
    }

    listaAlumnos[indice] = { ...listaAlumnos[indice], ...datos };
    return Response.json(listaAlumnos[indice]);
}

export async function DELETE(_req: Request, { params }: { params: { id: string } }) {
    const id = Number(params.id);
    const indice = listaAlumnos.findIndex(a => a.id === id);

    if (indice === -1) {
        return Response.json({ error: "Alumno no encontrado" }, { status: 404 });
    }

    const eliminado = listaAlumnos.splice(indice, 1)[0];
    return Response.json({ mensaje: "Alumno eliminado", eliminado });
}