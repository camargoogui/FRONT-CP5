import Image from 'next/image';
import EventosAstronomicos from '/public/img/eventos-astronomicos.jpg';

export default function PlanetaryCollisions() {
  return (
    <section className="flex flex-col items-center py-8 px-14 gap-12 bg-slate-900 text-slate-50">
      <h1 className="cosmic-title">Cronologia dos Eventos</h1>

      <div className="cosmic-container">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <p className="text-lg text-justify md:w-1/2">
            Ele questionou a cronologia aceita de eventos históricos e astronômicos,
            propondo que certos eventos catastróficos ocorreram em tempos muito mais
            recentes do que a ciência convencional sugere. A ideia de que planetas
            poderiam ter mudado de órbita tão recentemente desafiava as teorias
            astronômicas da época, que se baseavam em cálculos de órbitas estáveis
            por milhões de anos.
          </p>

          <Image
            src={EventosAstronomicos}
            alt="Imagem de eventos astronômicos"
            width={800}
            height={600}
            className="rounded-xl shadow-lg max-w-full"
          />
        </div>
      </div>
    </section>
  );
}
