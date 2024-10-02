'use client';

import { useState } from 'react';

const G = 6.67430e-11; // Constante gravitacional
const massaTerra = 5.972e24; // Massa da Terra
const massaVenus = 4.867e24; // Massa de Vênus

function calcularEnergia(distancia: number, velocidade: number) {
  const dMetros = distancia * 1e9; // Converter para metros
  const vMetrosPorSegundo = velocidade * 1e3; // Converter para metros por segundo

  const energiaCinetica = 0.5 * massaVenus * vMetrosPorSegundo * vMetrosPorSegundo;
  const energiaPotencial = (G * massaTerra * massaVenus) / dMetros;

  const energiaTotal = energiaCinetica - energiaPotencial;

  if (energiaTotal < 0) return 'Órbita Elíptica';
  if (energiaTotal === 0) return 'Órbita Circular';
  return 'Órbita Hiperbólica';
}

export default function CalculusInput() {
  const [distancia, setDistancia] = useState(100); // Milhões de km
  const [velocidade, setVelocidade] = useState(20); // Km/s
  const [resultado, setResultado] = useState('');

  const calcular = () => {
    const resultado = calcularEnergia(distancia, velocidade);
    setResultado(resultado);
  };

  return (
    <div className="flex flex-col gap-4 p-4 bg-slate-800 rounded-lg shadow-lg max-w-md mx-auto">
      <div className="campo flex flex-col gap-2">
        <label htmlFor="distancia" className="text-cyan-400 font-semibold">Distância (milhões de km):</label>
        <input
          id="distancia"
          type="number"
          value={distancia}
          onChange={(e) => setDistancia(Number(e.target.value))}
          className="p-2 bg-slate-900 text-slate-50 rounded-md"
        />
      </div>
      <div className="campo flex flex-col gap-2">
        <label htmlFor="velocidade" className="text-cyan-400 font-semibold">Velocidade (km/s):</label>
        <input
          id="velocidade"
          type="number"
          value={velocidade}
          onChange={(e) => setVelocidade(Number(e.target.value))}
          className="p-2 bg-slate-900 text-slate-50 rounded-md"
        />
      </div>
      <button
        onClick={calcular}
        className="bg-cyan-500 text-slate-900 py-2 px-4 rounded-md font-bold transition hover:bg-cyan-400"
      >
        Calcular
      </button>
      {resultado && <p className="mt-4 text-lg text-cyan-200">Resultado: {resultado}</p>}
    </div>
  );
}
