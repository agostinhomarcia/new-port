// src/components/Footer.tsx
import Link from "next/link";
import { FaLinkedin, FaGithub, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Seção 1: Sobre */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Sobre</h3>
          <p className="text-sm">
            Desenvolvedora FullStack apaixonada por criar soluções inovadoras e
            intuitivas. Transformando ideias em experiências digitais que fazem
            a diferença.
          </p>
        </div>

        {/* Seção 2: Links Rápidos */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Links Úteis</h3>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
            <li>
              <Link href="/about" className="hover:underline">
                Sobre Mim
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:underline">
                Projetos
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contato
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:underline">
                Política de Privacidade
              </Link>
            </li>
          </ul>
        </div>

        {/* Seção 3: Redes Sociais */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Siga-me</h3>
          <div className="flex space-x-4">
            <Link
              href="https://www.linkedin.com/in/marcia-agostinho-developer/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300"
            >
              <FaLinkedin size={28} />
            </Link>
            <Link
              href="https://github.com/agostinhomarcia"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300"
            >
              <FaGithub size={28} />
            </Link>
          </div>
        </div>
      </div>

      {/* Seção de Direitos Autorais e Voltar ao Topo */}
      <div className="mt-6 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">© 2024 Márcia. Todos os direitos reservados.</p>
        <a
          href="#"
          className="text-sm text-gray-400 hover:text-white transition-colors duration-300 flex items-center mt-4 md:mt-0 mr-10"
        >
          <FaArrowUp className="mr-2" /> {/* Ícone de Flecha */}
          Voltar ao Topo
        </a>
      </div>
    </footer>
  );
}
