import Image from 'next/image';
import Venus from '/public/img/venus.jpg';

export default function CosmicImpact() {
  return (
    <section className="">
      <h1 className="">Órbitas Planetárias e Instabilidade</h1>

      
      <div className="">
        <div className="">
          <p className="">
            Velikovsky sugeriu que Vênus, Marte e outros corpos celestes poderiam ter passado perto da Terra, perturbando
            as órbitas planetárias de forma significativa. Isso implicava em uma instabilidade no sistema solar que não era
            compatível com os cálculos newtonianos de órbitas estáveis a longo prazo.
          </p>

          
          <Image
            src={Venus}
            alt="Imagem de Vênus"
            width={500}
            height={300}
            className=""
          />
        </div>
      </div>
    </section>
  );
}