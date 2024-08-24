import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-400 p-4">
      <div className="bg-gray-300 shadow-md rounded-lg p-6 max-w-lg w-full">
        <Image
          src="/marcia.png"
          width={300}
          height={300}
          alt="Minha Foto"
          className="rounded-full mx-auto mb-4"
        />
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Olá, eu sou a Márcia
        </h1>
        <p className="text-gray-600 text-center">
          Sou um desenvolvedor front-end com experiência em React | Next.js |
          React Native . Tenho paixão por criar interfaces de usuário bonitas e
          funcionais.
        </p>
      </div>
    </div>
  );
}
