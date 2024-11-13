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
  FaGithub,
  FaLinkedin,
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
        <div className="flex flex-col md:flex-row items-center gap-12 bg-slate-900/60 backdrop-blur-sm p-8 rounded-lg shadow-2xl">
          {/* Coluna da Esquerda - Foto e Informações Principais */}
          <div className="md:w-1/3">
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* Foto de Perfil com Animação */}
              <div className="relative w-48 h-48 mx-auto">
                <Image
                  src="/web.png"
                  alt="Márcia Agostinho"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full border-4 border-green-500/50 animate-spin-slow"
                />
                {/* Círculo decorativo pulsante */}
                <div className="absolute inset-0 rounded-full border-4 border-green-500/20 animate-pulse"></div>
              </div>

              {/* Links Sociais */}
              <div className="flex justify-center gap-4 mt-6">
                <motion.a
                  href="https://github.com/agostinhomarcia"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="text-gray-300 hover:text-green-500 transition-colors"
                >
                  <FaGithub size={24} />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/marcia-agostinho-developer/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="text-gray-300 hover:text-green-500 transition-colors"
                >
                  <FaLinkedin size={24} />
                </motion.a>
              </div>
            </motion.div>
          </div>

          <div className="md:w-2/3">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.h1
                className="text-3xl md:text-4xl font-bold text-white"
                {...fadeInUp}
              >
                Olá, eu sou a Márcia 👋
              </motion.h1>

              <div className="space-y-4 text-gray-300">
                <p className="leading-relaxed text-lg">
                  Desenvolvedora Frontend apaixonada por criar experiências
                  digitais únicas. Especializada em React, Next.js e React
                  Native, transformo conceitos em interfaces elegantes e
                  funcionais que cativam usuários.
                </p>

                <p className="leading-relaxed text-lg">
                  Com sólida experiência em desenvolvimento web, combino
                  criatividade e técnica para construir aplicações responsivas e
                  performáticas. Meu foco está em criar interfaces intuitivas
                  que proporcionam a melhor experiência possível aos usuários.
                </p>

                <p className="leading-relaxed text-lg">
                  Apaixonada por UI/UX, dedico-me a criar designs modernos e
                  acessíveis, sempre atenta aos detalhes e às últimas tendências
                  em desenvolvimento frontend. Busco constantemente aprimorar
                  minhas habilidades para entregar soluções inovadoras.
                </p>

                <p className="leading-relaxed text-lg">
                  Minha abordagem combina código limpo, componentização
                  inteligente e otimização de performance, resultando em
                  projetos escaláveis e de fácil manutenção. Estou sempre em
                  busca de novos desafios que me permitam criar experiências
                  digitais memoráveis.
                </p>
              </div>

              {/* Tags de Tecnologias */}
              <div className="flex flex-wrap gap-2 mt-6">
                {[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "React Native",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-green-500/10 text-green-500 rounded-full border border-green-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
