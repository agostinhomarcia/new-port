"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBars,
  FaTimes,
  FaLaptopCode,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Controla o background do navbar ao rolar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Links de navegação
  const navLinks = [
    { href: "/about", label: "Sobre" },
    { href: "/projects", label: "Projetos" },
    { href: "/contact", label: "Contato" },
  ];

  // Animações
  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-900/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/"
              className="flex items-center space-x-2 text-white hover:text-green-500 transition-colors duration-300"
            >
              <FaLaptopCode size={35} className="text-green-500" />
              <span className="text-xl font-bold hidden sm:block">
                Márcia Dev
              </span>
            </Link>
          </motion.div>

          {/* Links de navegação - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Links principais */}
            <div className="flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm font-medium transition-colors duration-300 ${
                    pathname === link.href
                      ? "text-green-500"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {pathname === link.href && (
                    <motion.span
                      layoutId="underline"
                      className="absolute left-0 top-full block h-[2px] w-full bg-green-500"
                    />
                  )}
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Ícones de redes sociais */}
            <div className="flex items-center space-x-4">
              <motion.a
                href="https://github.com/agostinhomarcia"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                <FaGithub size={20} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/marcia-agostinho-developer/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                <FaLinkedin size={20} />
              </motion.a>
            </div>
          </div>

          {/* Botão do menu mobile */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={toggleMenu}
              className="text-white p-2 focus:outline-none"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Menu mobile */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="md:hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900/95 backdrop-blur-md mt-2 rounded-lg">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                      pathname === link.href
                        ? "text-green-500 bg-gray-800"
                        : "text-gray-300 hover:text-white hover:bg-gray-700"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                {/* Redes sociais no menu mobile */}
                <div className="flex space-x-4 px-3 py-2">
                  <a
                    href="https://github.com/agostinhomarcia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/marcia-agostinho-developer/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    <FaLinkedin size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
