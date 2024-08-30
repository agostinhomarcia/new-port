"use client";

import Image from "next/image";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaBootstrap,
  FaDocker,
  FaDatabase,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiStyledcomponents,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiGraphql,
  SiPrisma,
} from "react-icons/si";

export default function About() {
  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center p-4"
      style={{
        backgroundImage:
          "url('https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjk5YmVoems1NHgycGpyazJiazEwaGVrYm4ydWhkd3o2bms4d3djZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/HBj0TxHeNBDVURw3jp/giphy.gif')",
      }}
    >
      <div className="min-h-screen flex items-center justify-center p-4 md:p-8">
        {/* Container Principal */}
        <div className="flex flex-col md:flex-row items-center bg-gray-100 p-6 md:p-8 rounded-lg shadow-lg w-full max-w-4xl">
          {/* Coluna Esquerda: Imagem com Movimento */}
          <div className="flex justify-center items-center mb-8 md:mb-0 md:w-1/2">
            <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48">
              <Image
                src="/web.png" // Caminho para a imagem
                alt="Imagem Rotacionando"
                layout="fill"
                objectFit="cover"
                className="animate-spin-slow rounded-full"
              />
            </div>
          </div>

          {/* Coluna Direita: Texto e Tecnologias */}
          <div className="text-center md:text-left md:w-1/2">
            <h1 className="text-2xl md:text-3xl font-bold mb-4">
              Olá, eu sou a Márcia
            </h1>
            <p className="text-gray-700 mb-6">
              Sou um desenvolvedor front-end com experiência em React | Next.js
              | React Native. Tenho paixão por criar interfaces de usuário
              bonitas e funcionais. Atualmente estou estudando Back-end com
              Node.Js.
            </p>

            {/* Seção de Tecnologias */}
            <h2 className="text-xl md:text-2xl font-bold mb-4">
              Tecnologias que utilizo
            </h2>
            <div className="flex justify-center md:justify-start flex-wrap gap-4 text-4xl text-gray-700">
              {/* Front-end */}
              <FaHtml5
                title="HTML5"
                className="hover:text-orange-500 transition-colors duration-300"
              />
              <FaCss3Alt
                title="CSS3"
                className="hover:text-blue-500 transition-colors duration-300"
              />
              <FaSass
                title="Sass"
                className="hover:text-pink-500 transition-colors duration-300"
              />
              <FaBootstrap
                title="Bootstrap"
                className="hover:text-purple-500 transition-colors duration-300"
              />
              <FaReact
                title="React"
                className="hover:text-blue-500 transition-colors duration-300"
              />
              <SiNextdotjs
                title="Next.js"
                className="hover:text-black transition-colors duration-300"
              />
              <SiTypescript
                title="TypeScript"
                className="hover:text-blue-500 transition-colors duration-300"
              />
              <SiJavascript
                title="JavaScript"
                className="hover:text-yellow-500 transition-colors duration-300"
              />
              <SiTailwindcss
                title="Tailwind CSS"
                className="hover:text-blue-400 transition-colors duration-300"
              />
              <SiStyledcomponents
                title="Styled Components"
                className="hover:text-pink-300 transition-colors duration-300"
              />

              {/* Back-end */}
              <FaNodeJs
                title="Node.js"
                className="hover:text-green-500 transition-colors duration-300"
              />
              <FaDocker
                title="Docker"
                className="hover:text-blue-500 transition-colors duration-300"
              />
              <SiPostgresql
                title="PostgreSQL"
                className="hover:text-blue-600 transition-colors duration-300"
              />
              <SiMongodb
                title="MongoDB"
                className="hover:text-green-400 transition-colors duration-300"
              />
              <SiMysql
                title="MySQL"
                className="hover:text-blue-600 transition-colors duration-300"
              />
              <SiGraphql
                title="GraphQL"
                className="hover:text-pink-500 transition-colors duration-300"
              />
              <FaDatabase
                title="SQL"
                className="hover:text-gray-700 transition-colors duration-300"
              />
              <SiPrisma
                title="Prisma"
                className="hover:text-blue-600 transition-colors duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
