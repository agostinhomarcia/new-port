// src/components/Footer.tsx
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-gray-400">
          © 2024 Márcia. Todos os direitos reservados.
        </p>
        <div className="flex space-x-4">
          <Link
            href="https://www.linkedin.com/in/seu-perfil"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FaLinkedin size={24} />
          </Link>
          <Link
            href="https://github.com/seu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FaGithub size={24} />
          </Link>
          {/* Adicione mais ícones de redes sociais aqui se necessário */}
        </div>
      </div>
    </footer>
  );
}
