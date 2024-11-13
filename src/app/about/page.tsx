"use client";

import { motion } from "framer-motion";
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
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center p-4"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjk5YmVoems1NHgycGpyazJiazEwaGVrYm4ydWhkd3o2bms4d3djZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/HBj0TxHeNBDVURw3jp/giphy.gif')",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <motion.div
        className="min-h-screen flex items-center justify-center p-4 md:p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col md:flex-row items-center bg-slate-900/60 backdrop-blur-sm p-6 md:p-8 rounded-lg shadow-2xl w-full max-w-5xl">
          {/* Coluna Esquerda: Imagem com Movimento */}
          <motion.div
            className="flex justify-center items-center mb-8 md:mb-0 md:w-1/2"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56">
              <Image
                src="/web.png"
                alt="Imagem Rotacionando"
                layout="fill"
                objectFit="cover"
                className="animate-spin-slow rounded-full border-4 border-green-500 shadow-lg shadow-green-500/50"
              />
              <div className="absolute inset-0 border-4 border-green-500/30 rounded-full animate-pulse"></div>
            </div>
          </motion.div>

          {/* Coluna Direita: Texto e Tecnologias */}
          <div className="text-center md:text-left md:w-1/2 md:pl-8">
            <motion.h1
              className="text-3xl md:text-4xl font-extrabold mb-4 text-white"
              {...fadeInUp}
            >
              Olá, eu sou a Márcia
            </motion.h1>

            <motion.div
              className="space-y-4 text-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <p className="leading-relaxed">
                Sou uma desenvolvedora FullStack com experiência sólida em
                front-end utilizando React, Next.js e React Native.
              </p>
              <p className="leading-relaxed">
                Tenho um grande entusiasmo por criar interfaces de usuário que
                são tanto esteticamente agradáveis quanto altamente funcionais.
              </p>
              <p className="leading-relaxed">
                Atualmente, estou expandindo minhas habilidades para o back-end
                com Node.js, integrando as melhores práticas de desenvolvimento.
              </p>
              <p className="leading-relaxed">
                Meu objetivo é transformar ideias em aplicações digitais
                inovadoras que proporcionem valor real aos usuários e aos
                negócios.
              </p>
            </motion.div>

            {/* Seção de Tecnologias */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold my-6 text-white">
                Tecnologias que utilizo
              </h2>
              <div className="grid grid-cols-4 sm:grid-cols-5 gap-6 text-4xl text-gray-300">
                {/* Front-end */}
                <motion.div
                  whileHover={{ scale: 1.2, color: "#E34F26" }}
                  className="transition-colors duration-300"
                >
                  <FaHtml5 title="HTML5" />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.2, color: "#1572B6" }}
                  className="transition-colors duration-300"
                >
                  <FaCss3Alt title="CSS3" />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.2, color: "#C4302B" }}
                  className="transition-colors duration-300"
                >
                  <FaSass title="Sass" />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.2, color: "#7B42BC" }}
                  className="transition-colors duration-300"
                >
                  <FaBootstrap title="Bootstrap" />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.2, color: "#2146C7" }}
                  className="transition-colors duration-300"
                >
                  <FaReact title="React" />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.2, color: "#007ACC" }}
                  className="transition-colors duration-300"
                >
                  <SiNextdotjs title="Next.js" />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.2, color: "#339933" }}
                  className="transition-colors duration-300"
                >
                  <SiTypescript title="TypeScript" />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.2, color: "#F7DF1E" }}
                  className="transition-colors duration-300"
                >
                  <SiJavascript title="JavaScript" />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.2, color: "#326CE5" }}
                  className="transition-colors duration-300"
                >
                  <SiTailwindcss title="Tailwind CSS" />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.2, color: "#FF6B6B" }}
                  className="transition-colors duration-300"
                >
                  <SiStyledcomponents title="Styled Components" />
                </motion.div>

                {/* Back-end */}
                <motion.div
                  whileHover={{ scale: 1.2, color: "#339933" }}
                  className="transition-colors duration-300"
                >
                  <FaNodeJs title="Node.js" />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.2, color: "#1572B6" }}
                  className="transition-colors duration-300"
                >
                  <FaDocker title="Docker" />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.2, color: "#4479A1" }}
                  className="transition-colors duration-300"
                >
                  <SiPostgresql title="PostgreSQL" />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.2, color: "#5180EC" }}
                  className="transition-colors duration-300"
                >
                  <SiMongodb title="MongoDB" />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.2, color: "#4479A1" }}
                  className="transition-colors duration-300"
                >
                  <SiMysql title="MySQL" />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.2, color: "#E14C24" }}
                  className="transition-colors duration-300"
                >
                  <SiGraphql title="GraphQL" />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.2, color: "#800000" }}
                  className="transition-colors duration-300"
                >
                  <FaDatabase title="SQL" />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.2, color: "#2146C7" }}
                  className="transition-colors duration-300"
                >
                  <SiPrisma title="Prisma" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
