import Image from 'next/image';
import EventosAstronomicos from '/public/img/eventos-astronomicos.jpg';

export default function PlanetaryCollisions() {
  return (
    <section className="">
      <h1 className="">Cronologia dos Eventos</h1>

      <div className="">
        <div className="">
          <p className="">
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
            className=""
          />
        </div>
      </div>
    </section>
  );
}
