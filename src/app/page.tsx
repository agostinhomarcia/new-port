"use client";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <div
        className="relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center p-4"
        style={{
          backgroundImage:
            "url('https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNDJpZnAycGVldGpyeGI1ZjBmc3pzb2ZjamEwNHg4ZHRiMHk4Z2d5ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/J9CjIT5f7XjjAzWCK6/giphy-downsized-large.gif')",
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
        <div className="text-center text-white bg-black bg-opacity-60 p-8 md:p-12 rounded-lg animated-text mt-16 max-w-4xl md:max-w-3xl">
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
            Márcia Agostinho
          </h1>
          <p className="text-lg md:text-2xl  font-semibold">
            FullStack Developer
          </p>
          <div className="text-left text-6xl">
            <p className="mt-4 text-lg md:text-xl">
              Transformando ideias em experiências digitais incríveis para
              grandes Empresas.
            </p>
            <p className="mt-4 text-lg md:text-xl">
              Especializada em transformar complexidade em simplicidade,
              trabalhando na concepção até a implementação final de uma forma
              clara e com foco no usuário final.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
