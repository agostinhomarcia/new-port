import Link from "next/link";

export default function Home() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/herobg.png')" }}
    >
      <div
        className="text-center text-white bg-black bg-opacity-60 p-8 rounded-lg"
        style={{ animation: "fadeIn 1s ease-out" }}
      >
        <h1 className="text-5xl font-bold mb-4">Olá, Eu sou a Márcia</h1>
        <p className="text-2xl font-semibold">
          Desenvolvedora Front-End | Criadora de Interfaces Incríveis |
          Entusiasta de UX/UI
        </p>
        <p className="mt-4 text-lg">
          Transformando ideias em experiências digitais incríveis.
        </p>
        <Link
          href="/projects"
          className="mt-8 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition duration-300"
          style={{
            transform: "scale(1.05)",
            boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)",
          }}
        >
          Veja Meus Projetos
        </Link>
      </div>
      <div
        className="scroll-down-indicator"
        style={{
          animation: "bounce 2s infinite",
          fontSize: "24px",
          color: "white",
        }}
      >
        <span>⬇</span>
      </div>
    </div>
  );
}
