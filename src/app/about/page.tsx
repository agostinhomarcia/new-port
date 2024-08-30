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
      className="relative min-h-screen flex flex-col items-center justify-center p-4"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjk5YmVoems1NHgycGpyazJiazEwaGVrYm4ydWhkd3o2bms4d3djZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/HBj0TxHeNBDVURw3jp/giphy.gif')",
        backgroundSize: "cover",
      }}
    >
      <div className="min-h-screen flex items-center justify-center p-4 md:p-8">
        <div className="flex flex-col md:flex-row items-center bg-slate-300 p-6 md:p-8 rounded-lg shadow-lg w-full max-w-5xl">
          {/* Coluna Esquerda: Imagem com Movimento */}
          <div className="flex justify-center items-center mb-8 md:mb-0 md:w-1/2">
            <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48">
              <Image
                src="/web.png" // Caminho para a imagem
                alt="Imagem Rotacionando"
                layout="fill"
                objectFit="cover"
                className="animate-spin-slow rounded-full border-4 border-blue-500"
              />
            </div>
          </div>

          {/* Coluna Direita: Texto e Tecnologias */}
          <div className="text-center md:text-left md:w-1/2">
            <h1 className="text-2xl md:text-3xl font-extrabold mb-4 text-gray-600">
              Olá, eu sou a Márcia
            </h1>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Sou uma desenvolvedora FullStack com experiência sólida em
              front-end utilizando React, Next.js e React Native.
              <br />
              Tenho um grande entusiasmo por criar interfaces de usuário que são
              tanto esteticamente agradáveis quanto altamente funcionais.
              <br />
              Atualmente, estou expandindo minhas habilidades para o back-end
              com Node.js, integrando as melhores práticas de desenvolvimento
              para entregar soluções completas e robustas.
              <br />
              Meu objetivo é transformar ideias em aplicações digitais
              inovadoras que proporcionem valor real aos usuários e aos
              negócios.
            </p>
            {/* Seção de Tecnologias */}
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-600">
              Tecnologias que utilizo
            </h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 text-4xl text-gray-700">
              {/* Front-end */}
              <FaHtml5 title="HTML5" className="hover:text-orange-500" />
              <FaCss3Alt title="CSS3" className="hover:text-blue-500" />
              <FaSass title="Sass" className="hover:text-pink-500" />
              <FaBootstrap
                title="Bootstrap"
                className="hover:text-purple-500"
              />
              <FaReact title="React" className="hover:text-blue-500" />
              <SiNextdotjs title="Next.js" className="hover:text-black" />
              <SiTypescript
                title="TypeScript"
                className="hover:text-blue-500"
              />
              <SiJavascript
                title="JavaScript"
                className="hover:text-yellow-500"
              />
              <SiTailwindcss
                title="Tailwind CSS"
                className="hover:text-blue-400"
              />
              <SiStyledcomponents
                title="Styled Components"
                className="hover:text-pink-300"
              />

              {/* Back-end */}
              <FaNodeJs title="Node.js" className="hover:text-green-500" />
              <FaDocker title="Docker" className="hover:text-blue-500" />
              <SiPostgresql
                title="PostgreSQL"
                className="hover:text-blue-600"
              />
              <SiMongodb title="MongoDB" className="hover:text-green-400" />
              <SiMysql title="MySQL" className="hover:text-blue-600" />
              <SiGraphql title="GraphQL" className="hover:text-pink-500" />
              <FaDatabase title="SQL" className="hover:text-gray-700" />
              <SiPrisma title="Prisma" className="hover:text-blue-600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
