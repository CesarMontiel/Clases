import Image from "next/image";
import UsuarioCard from "@/components/UsuarioCard";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      Estos son mis usuarios
      <UsuarioCard nombre="Juan" edad={80} />
      <UsuarioCard nombre="Ana" edad={25} />
      <UsuarioCard nombre="Pedro" edad={40} />
      <UsuarioCard nombre="María" edad={30} />
      <UsuarioCard nombre="Luis" edad={50} />
      <UsuarioCard nombre="Carmen" edad={35} />
    </div>
  );
}
