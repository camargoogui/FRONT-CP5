/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

export default async function Home() {
  const searchTerm = 'planetary models';
  const nasaImageResponse = await fetch(`https://images-api.nasa.gov/search?q=${searchTerm}&media_type=image`);
  const nasaImageData = await nasaImageResponse.json();
  const nasaImageUrl = nasaImageData.collection.items[1].links[0].href;

  return (
    <section className="flex flex-col items-center p-8 gap-12 bg-slate-900 text-slate-50">
      <h1 className="cosmic-title">Introdução ao Worlds in Collision</h1>
      <div className="cosmic-container">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <p className="text-lg text-justify md:w-1/2">
            No livro &quot;Worlds in Collision&quot;, publicado em 1950, Immanuel Velikovsky propôs diversas teorias controversas envolvendo eventos cósmicos que, segundo ele, teriam afetado a Terra no passado. Ele sugeriu que certos fenômenos astronômicos descritos em textos antigos poderiam ser explicados por eventos cataclísmicos, como colisões ou passagens próximas de corpos celestes, incluindo Vênus e Marte.
          </p>
          <Image src="/img/immanuel_velikovsky.jpg" alt="Immanuel Velikovsky" width={400} height={500} className="rounded-lg shadow-lg" />
        </div>
      </div>
      <div className="cosmic-container">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <img src={nasaImageUrl} alt="Imagem relacionada a modelos planetários" width={1200} height={800} className="rounded-2xl shadow-lg" />
          <p className="text-lg text-justify md:w-1/2">
            Embora Velikovsky tenha utilizado várias referências históricas e mitológicas para sustentar suas ideias, ele também levantou questões sobre os cálculos e modelos astronômicos tradicionais.
          </p>
        </div>
      </div>
    </section>
  );
}
