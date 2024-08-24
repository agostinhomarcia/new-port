"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaLaptopCode } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center text-white text-2xl font-bold"
        >
          <FaLaptopCode size={35} className="mr-2" />
        </Link>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full md:flex md:items-center md:w-auto mt-4 md:mt-0`}
        >
          <div className="flex flex-col md:flex-row md:ml-auto text-center">
            <Link
              href="/about"
              className="text-gray-300 hover:text-white block mt-2 md:mt-0 md:mr-4"
            >
              Sobre
            </Link>
            <Link
              href="/projects"
              className="text-gray-300 hover:text-white block mt-2 md:mt-0 md:mr-4"
            >
              Projetos
            </Link>
            <Link
              href="/contact"
              className="text-gray-300 hover:text-white block mt-2 md:mt-0 md:mr-4"
            >
              Contato
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
