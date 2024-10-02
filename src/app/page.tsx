import Image from "next/image";
 
export default async function Home() {
 
  return (
    <section>
      <h1>Introdução ao Worlds in Collision</h1>
      <div>
        <div>
          <p>
            No livro &quot;Worlds in Collision&quot;, publicado em 1950, Immanuel Velikovsky propôs diversas teorias controversas envolvendo eventos cósmicos que, segundo ele, teriam afetado a Terra no passado. Ele sugeriu que certos fenômenos astronômicos descritos em textos antigos poderiam ser explicados por eventos cataclísmicos, como colisões ou passagens próximas de corpos celestes, incluindo Vênus e Marte.
          </p>
          <Image src="/img/immanuel_velikovsky.jpg" alt="Immanuel Velikovsky" width={400} height={500}/>
        </div>
      </div>
      <div>
        <div>
          <p>
            Embora Velikovsky tenha utilizado várias referências históricas e mitológicas para sustentar suas ideias, ele também levantou questões sobre os cálculos e modelos astronômicos tradicionais.
          </p>
        </div>
      </div>
    </section>
  );
}