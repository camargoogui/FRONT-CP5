import Image from 'next/image';
import Venus from '/public/img/venus.jpg';

export default function CosmicImpact() {
  return (
    <section className="flex flex-col items-center py-8 px-14 gap-12 bg-slate-900 text-slate-50">
      <h1 className="cosmic-title">Órbitas Planetárias e Instabilidade</h1>

      
      <div className="cosmic-container">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <p className="text-lg text-justify md:w-1/2">
            Velikovsky sugeriu que Vênus, Marte e outros corpos celestes poderiam ter passado perto da Terra, perturbando
            as órbitas planetárias de forma significativa. Isso implicava em uma instabilidade no sistema solar que não era
            compatível com os cálculos newtonianos de órbitas estáveis a longo prazo.
          </p>

          
          <Image
            src={Venus}
            alt="Imagem de Vênus"
            width={500}
            height={300}
            className="rounded-xl shadow-lg max-w-full"
          />
        </div>
      </div>
    </section>
  );
}