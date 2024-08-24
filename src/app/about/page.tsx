"use client";

import Image from "next/image";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiJavascript } from "react-icons/si";

export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-500 p-4 md:p-8">
      <div className="flex flex-col md:flex-row items-center bg-gray-100 p-6 md:p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <div className="flex justify-center items-center mb-8 md:mb-0 md:w-1/2">
          <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48">
            <Image
              src="/web.png"
              alt="Imagem Rotacionando"
              layout="fill"
              objectFit="cover"
              className="animate-spin-slow rounded-full"
            />
          </div>
        </div>

        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            Olá, eu sou a Márcia
          </h1>
          <p className="text-gray-700 mb-6">
            Sou apaixonada por tecnologia e por isso resolvi me tornar
            programadora, realizando minha transição de carreira. Na
            programação, tenho sólidos conhecimentos de Front-end com
            tecnologias como: HTML, CSS e JavaScript, inclusive realizei alguns
            projetos utilizando essas tecnologias. Atualmente, estou estudando
            Back-end e realizando projetos de qualidade e alta performance com
            React, Node.js e banco de dados.
          </p>

          <h2 className="text-xl md:text-2xl font-bold mb-4">
            Tecnologias que utilizo
          </h2>
          <div className="flex justify-center md:justify-start space-x-4 text-3xl md:text-4xl text-gray-700">
            <FaReact
              title="React"
              className="hover:text-blue-500 transition-colors duration-300"
            />
            <SiNextdotjs
              title="Next.js"
              className="hover:text-black transition-colors duration-300"
            />
            <SiJavascript
              title="JavaScript"
              className="hover:text-yellow-500 transition-colors duration-300"
            />
            <FaNodeJs
              title="Node.js"
              className="hover:text-green-500 transition-colors duration-300"
            />
            <SiTailwindcss
              title="Tailwind CSS"
              className="hover:text-blue-400 transition-colors duration-300"
            />
          </div>
        </div>
      </div>

      {/* Segunda Imagem com Rotação - Div Separada no Lado Direito */}
      <div className="absolute right-0 hidden md:flex justify-center items-center w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48">
        <Image
          src="/web.png" // Caminho para a segunda imagem
          alt="Imagem Rotacionando"
          layout="fill"
          objectFit="cover"
          className="animate-spin-slow rounded-full"
        />
      </div>
    </div>
  );
}
