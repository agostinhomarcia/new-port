"use client";

import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Projects() {
  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center p-4"
      style={{
        backgroundImage:
          "url('https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDIxcDQwYXhzaHA1dDZqYTlhenYzeDQ0MDcycmR4ZXowYnAzbmFiYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/M2SKr24lAOOmnnnBP6/giphy.gif')",
      }}
    >
      <div className="min-h-screen p-8 container mx-auto">
        <motion.h1
          className="text-4xl font-bold text-center text-gray-100 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Meus Projetos
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <motion.div
            className="bg-gray-800/60 backdrop-blur-sm shadow-md rounded-lg p-6"
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
                src="/binance.png"
                alt="Binance Clone"
                className="w-full h-48 object-cover"
                width={150}
                height={150}
              />
            </motion.div>
            <h2 className="text-2xl font-bold mb-2 text-white">
              Crypto Exchange App
            </h2>
            <p className="text-gray-200 mb-4">
              Aplicativo Mobile de exchange de criptomoedas desenvolvida com
              React Native, inspirada na Binance.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/agostinhomarcia/binance"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-200 transition-colors duration-300 flex items-center gap-2"
              >
                <FaExternalLinkAlt size={24} />
                <span className="opacity-0 group-hover:opacity-100">
                  Visitar
                </span>
              </Link>
              <Link
                href="https://github.com/agostinhomarcia/binance"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                <FaGithub size={24} />
              </Link>
            </div>
          </motion.div>

          {/* Novo Projeto 2 */}
          <motion.div
            className="bg-gray-800/60 backdrop-blur-sm shadow-md rounded-lg p-6"
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
                src="/dashboard.png"
                alt="Dashboard"
                className="w-full h-48 object-cover"
                width={150}
                height={150}
              />
            </motion.div>
            <h2 className="text-2xl font-bold mb-2 text-white">
              Sistema de Gestão Empresarial
            </h2>
            <p className="text-gray-200 mb-4">
              Um sistema de gestão empresarial moderno construído com Next.js
              14, oferecendo uma interface intuitiva para gerenciamento de
              produtos, usuários e configurações do sistema.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://admin-dashboard-delta-sand-59.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-200 transition-colors duration-300 flex items-center gap-2"
              >
                <FaExternalLinkAlt size={24} />
                <span className="opacity-0 group-hover:opacity-100">
                  Visitar
                </span>
              </Link>
              <Link
                href="https://github.com/agostinhomarcia/-admin-dashboard"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                <FaGithub size={24} />
              </Link>
            </div>
          </motion.div>
          {/* Projeto 1 */}
          <motion.div
            className="bg-gray-800/60 backdrop-blur-sm shadow-md rounded-lg p-6"
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
                src="/companies.png"
                alt="Projeto 1"
                className="w-full h-48 object-cover"
                width={150}
                height={150}
              />
            </motion.div>
            <h2 className="text-2xl font-bold mb-2 text-white">BusinessFlow</h2>
            <p className="text-gray-200 mb-4">
              Sistema para Controle de Gestão de Empresas e Parceiros
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://companies-two-murex.vercel.app/login"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-200 transition-colors duration-300 flex items-center gap-2"
              >
                <FaExternalLinkAlt size={24} />
                <span className="opacity-0 group-hover:opacity-100">
                  Visitar
                </span>
              </Link>
              <Link
                href="https://github.com/agostinhomarcia/companies"
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
            className="bg-gray-800/60 backdrop-blur-sm shadow-md rounded-lg p-6"
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
                src="/pulse.png"
                alt="Projeto 2"
                className="w-full h-48 object-cover"
                width={150}
                height={150}
              />
            </motion.div>
            <h2 className="text-2xl font-bold mb-2 text-white">PeoplePulse</h2>
            <p className="text-gray-200 mb-4">
              Organize, conecte e potencialize suas interações, criando
              relacionamentos poderosos
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://contact-pied-two.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-200 transition-colors duration-300 flex items-center gap-2"
              >
                <FaExternalLinkAlt size={24} />
                <span className="opacity-0 group-hover:opacity-100">
                  Visitar
                </span>
              </Link>
              <Link
                href="https://github.com/agostinhomarcia/contact"
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
            className="bg-gray-800/60 backdrop-blur-sm shadow-md rounded-lg p-6"
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
                src="/driveNow.png"
                alt="Projeto 1"
                className="w-full h-48 object-cover"
                width={150}
                height={150}
              />
            </motion.div>
            <h2 className="text-2xl font-bold mb-2 text-white">DriveNow</h2>
            <p className="text-gray-200 mb-4">Reserve seu carro Agora!</p>
            <div className="flex space-x-4">
              <Link
                href="https://car-reservation-zeta.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-200 transition-colors duration-300 flex items-center gap-2"
              >
                <FaExternalLinkAlt size={24} />
                <span className="opacity-0 group-hover:opacity-100">
                  Visitar
                </span>
              </Link>
              <Link
                href="https://github.com/agostinhomarcia/car-reservation"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                <FaGithub size={24} />
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="bg-gray-800/60 backdrop-blur-sm shadow-md rounded-lg p-6"
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
                src="/dart.png"
                alt="Projeto 3"
                className="w-full h-48 object-cover"
                width={150}
                height={150}
              />
            </motion.div>
            <h2 className="text-2xl font-bold mb-2 text-white">DarkBeats</h2>
            <p className="text-gray-200 mb-4">Ecomerce de eletronicos</p>
            <div className="flex space-x-4">
              <Link
                href="https://dark-theta.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-200 transition-colors duration-300 flex items-center gap-2"
              >
                <FaExternalLinkAlt size={24} />
                <span className="opacity-0 group-hover:opacity-100">
                  Visitar
                </span>
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

          {/* Projeto 4*/}
          <motion.div
            className="bg-gray-800/60 backdrop-blur-sm shadow-md rounded-lg p-6"
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
                src="/fswBarber.png"
                alt="Projeto 4"
                className="w-full h-48 object-cover"
                width={150}
                height={150}
              />
            </motion.div>
            <h2 className="text-2xl font-bold mb-2 text-white">FSW Barber</h2>
            <p className="text-gray-200 mb-4">
              Gestão para Barbearias é um sistema completo para atender às
              necessidades de barbearias, salões de beleza e estúdios de
              tatuagem, facilitando o gerenciamento de serviços, agendamentos e
              interações com clientes.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://fsw-barber-lilac.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-200 transition-colors duration-300 flex items-center gap-2"
              >
                <FaExternalLinkAlt size={24} />
                <span className="opacity-0 group-hover:opacity-100">
                  Visitar
                </span>
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

          {/* Projeto 5 */}
          <motion.div
            className="bg-gray-800/60 backdrop-blur-sm shadow-md rounded-lg p-6"
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
                src="/burguer.png"
                alt="Projeto 5"
                className="w-full h-48 object-cover"
                width={150}
                height={150}
              />
            </motion.div>
            <h2 className="text-2xl font-bold mb-2 text-white">Burguer</h2>
            <p className="text-gray-200 mb-4">
              Sistema completo para sua lanchonete
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://agostinhomarcia.github.io/projeto-burguer/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-200 transition-colors duration-300 flex items-center gap-2"
              >
                <FaExternalLinkAlt size={24} />
                <span className="opacity-0 group-hover:opacity-100">
                  Visitar
                </span>
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
          {/* Projeto 6 */}
          <motion.div
            className="bg-gray-800/60 backdrop-blur-sm shadow-md rounded-lg p-6"
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
                src="/actual.png"
                alt="Projeto 6"
                className="w-full h-48 object-cover"
                width={150}
                height={150}
              />
            </motion.div>
            <h2 className="text-2xl font-bold mb-2 text-white">
              Actual Printer
            </h2>
            <p className="text-gray-200 mb-4">Descrição do Projeto 1.</p>
            <div className="flex space-x-4">
              <Link
                href="https://actual-printer-vopq.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-200 transition-colors duration-300 flex items-center gap-2"
              >
                <FaExternalLinkAlt size={24} />
                <span className="opacity-0 group-hover:opacity-100">
                  Visitar
                </span>
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
          {/* Projeto 7 */}
          <motion.div
            className="bg-gray-800/60 backdrop-blur-sm shadow-md rounded-lg p-6"
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
                src="/cart.png"
                alt="Projeto 7"
                className="w-full h-48 object-cover"
                width={150}
                height={150}
              />
            </motion.div>
            <h2 className="text-2xl font-bold mb-2 text-white">Cart</h2>
            <p className="text-gray-200 mb-4">
              Vitrine de produtos disponivéis, avaliações, carinho de compra,
              como soma total dos pedidos.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://serene-bublanina-f2cd1c.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-200 transition-colors duration-300 flex items-center gap-2"
              >
                <FaExternalLinkAlt size={24} />
                <span className="opacity-0 group-hover:opacity-100">
                  Visitar
                </span>
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

          {/* Projeto 8 */}
          <motion.div
            className="bg-gray-800/60 backdrop-blur-sm shadow-md rounded-lg p-6"
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
                src="/vet.png"
                alt="Projeto 8"
                className="w-full h-48 object-cover"
                width={150}
                height={150}
              />
            </motion.div>
            <h2 className="text-2xl font-bold mb-2 text-white">
              Clinica Veterinária
            </h2>
            <p className="text-gray-200 mb-4">
              Projeto de clínica veterinária com agendamento de consultas,
              localização, valores e serviços. Aqui seu pet fica mais é feliz
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://candid-pasca-bb5390.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-200 transition-colors duration-300 flex items-center gap-2"
              >
                <FaExternalLinkAlt size={24} />
                <span className="opacity-0 group-hover:opacity-100">
                  Visitar
                </span>
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
        </div>
      </div>
    </div>
  );
}
