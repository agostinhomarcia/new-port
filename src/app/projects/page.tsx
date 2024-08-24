"use client";

import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-300 p-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Meus Projetos
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-2">Projeto 1</h2>
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
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-2">Projeto 2</h2>
          <p className="text-gray-600 mb-4">Descrição do Projeto 2.</p>
          <div className="flex space-x-4">
            <Link
              href="https://cart-mks.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              <FaExternalLinkAlt size={24} />
            </Link>
            <Link
              href="https://github.com/seu-usuario/repositorio-projeto-2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              <FaGithub size={24} />
            </Link>
          </div>
        </div>

        {/* Adicione mais cartões de projeto conforme necessário */}
      </div>
    </div>
  );
}
