import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../app/styles/globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Márcia Agostinho - FullStack Developer",
  description:
    "Portfolio de Márcia Agostinho, desenvolvedora FullStack especializada em criar soluções inovadoras e intuitivas para web e mobile.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
