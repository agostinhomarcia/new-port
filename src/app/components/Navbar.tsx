import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-bold">
          Meu Portfólio
        </Link>
        <div className="flex space-x-4">
          <Link href="/about" className="text-gray-300 hover:text-white">
            Sobre Mim
          </Link>
          <Link href="/contact" className="text-gray-300 hover:text-white">
            Contato
          </Link>
        </div>
      </div>
    </nav>
  );
}
