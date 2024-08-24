"use client";

import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-300 p-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Meus Projetos
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Projeto 1 */}
        <motion.div
          className="bg-white shadow-md rounded-lg p-6"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/project1.png"
            alt="Projeto 1"
            className="w-full h-48 object-cover rounded-md mb-4"
            width={150}
            height={150}
          />
          <h2 className="text-2xl font-bold mb-2">DarkBeats</h2>
          <p className="text-gray-600 mb-4">Descrição do Projeto 1.</p>
          <div className="flex space-x-4">
            <Link
              href=" https://dark-theta.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              <FaExternalLinkAlt size={24} />
            </Link>
            <Link
              href="https://github.com/agostinhomarcia/Dark"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              <FaGithub size={24} />
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link
              href="https://symphonious-nougat-674f67.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              <FaExternalLinkAlt size={24} />
            </Link>
            <Link
              href="https://agostinhomarcia.github.io/projeto-burguer/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              <FaGithub size={24} />
            </Link>
          </div>
        </motion.div>

        {/* Projeto 2 */}
        <motion.div
          className="bg-white shadow-md rounded-lg p-6"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/project2.png" // Substitua com o caminho da imagem real
            alt="Projeto 2"
            className="w-full h-48 object-cover rounded-md mb-4"
            width={150}
            height={150}
          />
          <h2 className="text-2xl font-bold mb-2">FSW Barber</h2>
          <p className="text-gray-600 mb-4">Descrição do Projeto 2.</p>
          <div className="flex space-x-4">
            <Link
              href="https://fsw-barber-lilac.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              <FaExternalLinkAlt size={24} />
            </Link>
            <Link
              href="https://github.com/agostinhomarcia/Fsw-Barber"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              <FaGithub size={24} />
            </Link>
          </div>
        </motion.div>

        {/* Adicione mais cartões de projeto conforme necessário */}
      </div>
    </div>
  );
}
