import Image from 'next/image';
import imgErro from '/public/img/404.jpg';

export default function NotFound() {
  return (
    <div>
      <Image
        src={imgErro}
        alt="Erro 404"
        width={500}
        height={500}
      />
      
      <div>
        <h1>Página Não Encontrada</h1>
        <p>
          A página que você está procurando não existe. Talvez o URL esteja incorreto ou a página tenha sido removida.
        </p>
      </div>
    </div>
  );
}
