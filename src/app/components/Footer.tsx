"use client";
import Link from "next/link";
import {
  FaLinkedin,
  FaGithub,
  FaArrowUp,
  FaEnvelope,
  FaCode,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-400 py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <FaCode className="text-green-500" />
            Sobre
          </h3>
          <p className="text-gray-300 leading-relaxed">
            Desenvolvedora FrontEnd apaixonada por criar soluções inovadoras e
            intuitivas. Transformando ideias em experiências digitais que fazem
            a diferença.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-white mb-4">Links Úteis</h3>
          <ul className="space-y-3">
            <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
              <Link
                href="/about"
                className="hover:text-green-500 transition-colors duration-300 flex items-center gap-2"
              >
                <FaExternalLinkAlt className="text-green-500" size={12} />
                Sobre Mim
              </Link>
            </motion.li>
            <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
              <Link
                href="/projects"
                className="hover:text-green-500 transition-colors duration-300 flex items-center gap-2"
              >
                <FaExternalLinkAlt className="text-green-500" size={12} />
                Projetos
              </Link>
            </motion.li>
            <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
              <Link
                href="/contact"
                className="hover:text-green-500 transition-colors duration-300 flex items-center gap-2"
              >
                <FaExternalLinkAlt className="text-green-500" size={12} />
                Contato
              </Link>
            </motion.li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-white mb-4">Conecte-se</h3>
          <div className="flex flex-col space-y-4">
            <motion.div whileHover={{ scale: 1.05 }} className="group">
              <Link
                href="https://www.linkedin.com/in/marcia-agostinho-developer/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-green-500 transition-colors duration-300"
              >
                <FaLinkedin className="text-2xl group-hover:text-green-500" />
                <span>LinkedIn</span>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="group">
              <Link
                href="https://github.com/agostinhomarcia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-green-500 transition-colors duration-300"
              >
                <FaGithub className="text-2xl group-hover:text-green-500" />
                <span>GitHub</span>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="group">
              <Link
                href="mailto:marciafrontend@gmail.com"
                className="flex items-center gap-3 hover:text-green-500 transition-colors duration-300"
              >
                <FaEnvelope className="text-2xl group-hover:text-green-500" />
                <span>Email</span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="container mx-auto px-6 mt-12">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 mt-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Márcia. Todos os direitos reservados.
        </p>
        <motion.button
          onClick={scrollToTop}
          className="mt-4 md:mt-0 flex items-center gap-2 text-gray-400 hover:text-green-500 transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaArrowUp />
          <span>Voltar ao Topo</span>
        </motion.button>
      </div>
    </footer>
  );
}
