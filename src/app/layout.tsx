import type { Metadata } from "next";
import Link from "next/link";
 
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
      <body>
        <div>
          <nav>
            <Link href="/">Introdução</Link>
            <Link href="/orbitas-planetarias">Órbitas Planetárias e Instabilidade</Link>
            <Link href="/cronologia-eventos">Cronologia dos Eventos</Link>
            <Link href="/calculo">Cálculo</Link>
          </nav>
          <main>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
