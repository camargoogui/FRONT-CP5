import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "Worlds In Collision",
    default: "Worlds In Collision",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased h-screen w-full bg-gradient-to-r from-black to-indigo-900 text-slate-200">
        <div className="flex flex-col items-center border-b-4 border-cyan-500 shadow-lg">
          <nav className="w-full flex justify-center gap-8 py-6 text-xl text-cyan-400 uppercase tracking-wide font-mono">
            <Link href="/" className="hover:text-cyan-200 transition duration-300">Introdução</Link>
            <Link href="/orbitas-planetarias" className="hover:text-cyan-200 transition duration-300">Órbitas Planetárias e Instabilidade</Link>
            <Link href="/cronologia-eventos" className="hover:text-cyan-200 transition duration-300">Cronologia dos Eventos</Link>
            <Link href="/calculo" className="hover:text-cyan-200 transition duration-300">Cálculo</Link>
          </nav>
          <main className="w-full px-6 py-4">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
