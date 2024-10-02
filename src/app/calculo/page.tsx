import CalculusInput from '@/components/calculo-logic';

export default function OrbitalCalculations() {
  return (
    <section className="flex flex-col items-center py-8 px-14 gap-12 bg-slate-900 text-slate-50">
      <h1 className="cosmic-title">CÁLCULO</h1>
      
      <div className="cosmic-container">
        <p className="text-lg text-justify">
        Embora Velikovsky tenha sido fortemente criticado por cientistas da época, suas ideias provocaram debates sobre a validade dos cálculos tradicionais na astronomia e a possibilidade de eventos cósmicos catastróficos no passado histórico da Terra. No entanto, suas teorias não foram apoiadas por observações astronômicas ou por modelos matemáticos aceitos pela comunidade científica.

        </p>
      </div>

      <div className="cosmic-container">
        <h2 className="text-2xl font-bold text-cyan-400">Simulação de Cálculo de Órbita</h2>
        <CalculusInput />
      </div>
    </section>
  );
}
