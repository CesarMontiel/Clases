type UsuarioCardProps = {
    nombre: string;
    edad: number;
}

export default function UsuarioCard({ nombre, edad }: UsuarioCardProps) {
    return (
        <div className="bg-amber-950">
            <h2>{nombre}</h2>
            <p>{edad}</p>
        </div>
    );
}
