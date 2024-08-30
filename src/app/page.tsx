"use client";

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div
        className="relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center p-4"
        style={{
          backgroundImage:
            "url('https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjk5YmVoems1NHgycGpyazJiazEwaGVrYm4ydWhkd3o2bms4d3djZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/HBj0TxHeNBDVURw3jp/giphy.gif')",
        }}
      >
        <div className="absolute top-12 left-12 w-20 h-20 md:w-32 md:h-32">
          <Image
            src="/web.png"
            alt="Globo Girando"
            layout="fill"
            objectFit="contain"
            className="animate-spin-slow"
          />
        </div>
        <div className="absolute top-12 right-12 w-20 h-20 md:w-32 md:h-32">
          <Image
            src="/web2.png"
            alt="Globo Girando"
            layout="fill"
            objectFit="contain"
            className="animate-spin-slow"
          />
        </div>
        <div className="absolute bottom-12 left-12 w-20 h-20 md:w-32 md:h-32">
          <Image
            src="/mobile.png"
            alt="Globo Girando"
            layout="fill"
            objectFit="contain"
            className="animate-spin-slow"
          />
        </div>
        <div className="absolute bottom-12 right-12 w-20 h-20 md:w-32 md:h-32">
          <Image
            src="/creator.png"
            alt="Globo Girando"
            layout="fill"
            objectFit="contain"
            className="animate-spin-slow"
          />
        </div>
        <div className="text-center text-white bg-black bg-opacity-60 p-6 md:p-8 rounded-lg animated-text mt-16 max-w-xs md:max-w-lg">
          <div className="flex justify-center mb-8">
            <Image
              src="/web.png"
              alt="Globo Girando"
              width={100}
              height={100}
              className="animate-spin-slow"
            />
          </div>
          <h1 className="text-2xl md:text-4xl font-bold mb-4">
            Seja Bem Vindo
          </h1>
          <p className="text-lg md:text-2xl font-semibold">
            Desenvolvedora Front-End | Criadora de Interfaces Incríveis |
            Entusiasta de UX/UI
          </p>
          <p className="mt-4 text-sm md:text-lg">
            Transformando ideias em experiências digitais incríveis.
          </p>
        </div>
      </div>
    </>
  );
}
