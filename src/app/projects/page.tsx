"use client";

import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-300 p-8">
      <motion.h1
        className="text-4xl font-bold text-center text-gray-800 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Meus Projetos
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {/* Projeto 1 */}
        <motion.div
          className="bg-white shadow-md rounded-lg p-6"
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.3)",
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="overflow-hidden rounded-md"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src="/project1.png"
              alt="Projeto 1"
              className="w-full h-48 object-cover"
              width={150}
              height={150}
            />
          </motion.div>
          <h2 className="text-2xl font-bold mb-2">DarkBeats</h2>
          <p className="text-gray-600 mb-4">Descrição do Projeto 1.</p>
          <div className="flex space-x-4">
            <Link
              href="https://dark-theta.vercel.app"
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
        </motion.div>

        {/* Projeto 2 - Sem Flip */}
        <motion.div
          className="bg-white shadow-md rounded-lg p-6"
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.3)",
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="overflow-hidden rounded-md"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src="/project2.png"
              alt="Projeto 2"
              className="w-full h-48 object-cover"
              width={150}
              height={150}
            />
          </motion.div>
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

        {/* Projeto 3 */}
        <motion.div
          className="bg-white shadow-md rounded-lg p-6"
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.3)",
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="overflow-hidden rounded-md"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src="/project3.png"
              alt="Projeto 1"
              className="w-full h-48 object-cover"
              width={150}
              height={150}
            />
          </motion.div>
          <h2 className="text-2xl font-bold mb-2">Burguer</h2>
          <p className="text-gray-600 mb-4">Descrição do Projeto 1.</p>
          <div className="flex space-x-4">
            <Link
              href="https://agostinhomarcia.github.io/projeto-burguer/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              <FaExternalLinkAlt size={24} />
            </Link>
            <Link
              href="https://github.com/agostinhomarcia/projeto-burguer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              <FaGithub size={24} />
            </Link>
          </div>
        </motion.div>
        {/* Projeto 4 */}
        <motion.div
          className="bg-white shadow-md rounded-lg p-6"
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.3)",
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="overflow-hidden rounded-md"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src="/project4.png"
              alt="Projeto 1"
              className="w-full h-48 object-cover"
              width={150}
              height={150}
            />
          </motion.div>
          <h2 className="text-2xl font-bold mb-2">Actual Printer</h2>
          <p className="text-gray-600 mb-4">Descrição do Projeto 1.</p>
          <div className="flex space-x-4">
            <Link
              href="https://actual-printer-vopq.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              <FaExternalLinkAlt size={24} />
            </Link>
            <Link
              href="https://github.com/agostinhomarcia/actual-printer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              <FaGithub size={24} />
            </Link>
          </div>
        </motion.div>
        {/* Projeto 5 */}
        <motion.div
          className="bg-white shadow-md rounded-lg p-6"
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.3)",
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="overflow-hidden rounded-md"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src="/project5.png"
              alt="Projeto 1"
              className="w-full h-48 object-cover"
              width={150}
              height={150}
            />
          </motion.div>
          <h2 className="text-2xl font-bold mb-2">Ecommerce</h2>
          <p className="text-gray-600 mb-4">Descrição do Projeto</p>
          <div className="flex space-x-4">
            <Link
              href="https://serene-bublanina-f2cd1c.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              <FaExternalLinkAlt size={24} />
            </Link>
            <Link
              href="https://github.com/agostinhomarcia/react-shopping-cart"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              <FaGithub size={24} />
            </Link>
          </div>
        </motion.div>

        {/* Projeto 6 */}
        <motion.div
          className="bg-white shadow-md rounded-lg p-6"
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.3)",
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="overflow-hidden rounded-md"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src="/project6.png"
              alt="Projeto 1"
              className="w-full h-48 object-cover"
              width={150}
              height={150}
            />
          </motion.div>
          <h2 className="text-2xl font-bold mb-2">Clinica Veterinária</h2>
          <p className="text-gray-600 mb-4">Descrição do Projeto</p>
          <div className="flex space-x-4">
            <Link
              href="https://candid-pasca-bb5390.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              <FaExternalLinkAlt size={24} />
            </Link>
            <Link
              href="https://github.com/agostinhomarcia/projeto-doguinho"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              <FaGithub size={24} />
            </Link>
          </div>
        </motion.div>

        {/* Projeto 7 */}
        <motion.div
          className="bg-white shadow-md rounded-lg p-6"
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.3)",
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="overflow-hidden rounded-md"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src="/project7.png"
              alt="Projeto 1"
              className="w-full h-48 object-cover"
              width={150}
              height={150}
            />
          </motion.div>
          <h2 className="text-2xl font-bold mb-2">Agencia Digital</h2>
          <p className="text-gray-600 mb-4">Descrição do Projeto</p>
          <div className="flex space-x-4">
            <Link
              href="https://digital-agency-rust.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              <FaExternalLinkAlt size={24} />
            </Link>
            <Link
              href="https://github.com/agostinhomarcia/digital-agency"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              <FaGithub size={24} />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
