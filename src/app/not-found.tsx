import Image from 'next/image';
import imgErro from '/public/img/404.jpg';

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-slate-900 text-slate-200">
      
      <Image
        src={imgErro}
        alt="Erro 404"
        width={500}
        height={500}
        className="rounded-lg shadow-lg"
      />

    
      <div className="mt-8 text-center">
        <h1 className="text-4xl font-bold text-cyan-400">Página Não Encontrada</h1>
        <p className="text-lg text-slate-300 mt-4">
          A página que você está procurando não existe. Talvez o URL esteja incorreto ou a página tenha sido removida.
        </p>
      </div>
    </div>
  );
}
