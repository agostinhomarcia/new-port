"use client";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <div
        className="relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: "url('/herobg.png')" }}
      >
        {/* Imagens nos Cantos da Tela */}
        <Image
          src="/web.png"
          alt="Globo Girando"
          width={100}
          height={100}
          className="absolute top-10 left-4 m-4 animate-spin-slow"
        />
        <Image
          src="/web2.png"
          alt="Globo Girando"
          width={100}
          height={100}
          className="absolute top-10 right-4 m-4 animate-spin-slow"
        />
        <Image
          src="/creator.png"
          alt="Globo Girando"
          width={100}
          height={100}
          className="absolute bottom-10 left-4 m-4 animate-spin-slow"
        />
        <Image
          src="/mobile.png"
          alt="Globo Girando"
          width={100}
          height={100}
          className="absolute bottom-10 right-4 m-4 animate-spin-slow"
        />

        {/* Conteúdo Principal */}
        <div className="text-center text-white bg-black bg-opacity-60 p-8 rounded-lg animated-text">
          <div className="flex justify-center mb-8">
            {/* Imagem do Globo Girando */}
            <Image
              src="/web.png"
              alt="Globo Girando"
              width={250}
              height={250}
              className="animate-spin-slow"
            />
          </div>
          <h1 className="text-5xl font-bold mb-4">Olá, Eu sou a Márcia</h1>
          <p className="text-2xl font-semibold">
            Desenvolvedora Front-End | Criadora de Interfaces Incríveis |
            Entusiasta de UX/UI
          </p>
          <p className="mt-4 text-lg">
            Transformando ideias em experiências digitais incríveis.
          </p>
        </div>
      </div>
    </>
  );
}
