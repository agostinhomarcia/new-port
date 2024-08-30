"use client";
import { FormEvent } from "react";

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
      <div className="min-h-screen w-full max-w-5xl flex items-center justify-center p-8">
        <div className="bg-slate-300 shadow-md rounded-lg p-6 max-w-lg w-full">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Entre em Contato
          </h1>
          <form onSubmit={handleWhatsAppSend} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Nome
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Mensagem
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Enviar via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
