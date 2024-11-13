"use client";
import { FormEvent } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const handleWhatsAppSend = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)
      .value;

    const whatsappMessage = `Nome: ${name}%0AEmail: ${email}%0AMensagem: ${message}`;
    const whatsappURL = `https://w.app/Uh6sCc?text=${whatsappMessage}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center p-4"
      style={{
        backgroundImage:
          "url('https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNnhkYnJxdXNmbDF6eGRvY2VmMzU0YnVhYnozNWF4dHNmd2tnZXZ1byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/khypV3097OzEpT8oco/giphy-downsized-large.gif')",
      }}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      <motion.div
        className="min-h-screen w-full max-w-5xl flex items-center justify-center p-8 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-white/10 backdrop-blur-md shadow-xl rounded-lg p-8 max-w-lg w-full">
          <motion.h1
            className="text-4xl font-bold text-center text-white mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Entre em Contato
          </motion.h1>

          <form onSubmit={handleWhatsAppSend} className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <label
                htmlFor="name"
                className="block text-sm font-medium text-white mb-2"
              >
                Nome
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="w-full p-3 bg-white/10 border border-white/20 rounded-lg 
                         text-white placeholder-gray-300
                         focus:ring-2 focus:ring-green-500 focus:border-transparent
                         transition duration-200"
                placeholder="Seu nome completo"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white mb-2"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="w-full p-3 bg-white/10 border border-white/20 rounded-lg 
                         text-white placeholder-gray-300
                         focus:ring-2 focus:ring-green-500 focus:border-transparent
                         transition duration-200"
                placeholder="seu@email.com"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <label
                htmlFor="message"
                className="block text-sm font-medium text-white mb-2"
              >
                Mensagem
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                required
                className="w-full p-3 bg-white/10 border border-white/20 rounded-lg 
                         text-white placeholder-gray-300
                         focus:ring-2 focus:ring-green-500 focus:border-transparent
                         transition duration-200"
                placeholder="Sua mensagem aqui..."
              />
            </motion.div>

            <motion.button
              type="submit"
              className="w-full bg-green-500 text-white py-3 px-6 rounded-lg
                       font-medium hover:bg-green-600 
                       transform hover:scale-105
                       transition duration-200
                       flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Enviar via WhatsApp
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
