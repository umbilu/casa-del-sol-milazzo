
import React from 'react';
import { Amenity } from '../types.ts';

const HIGHLIGHTS = [
  {
    icon: 'fa-car',
    title: 'Parcheggio Riservato',
    desc: 'Posto auto interno alla struttura',
  },
  {
    icon: 'fa-door-open',
    title: 'Entrata Indipendente',
    desc: 'Massima privacy e autonomia',
  },
  {
    icon: 'fa-mountain-sun',
    title: 'Terrazzini Vista Mare',
    desc: 'Scorci panoramici sul borgo e sul mare',
  },
  {
    icon: 'fa-shield-heart',
    title: 'Tranquillità nel Borgo',
    desc: 'Posizione silenziosa a pochi passi dal Castello',
  },
];

const AMENITIES: Amenity[] = [
  { icon: 'fa-wind', label: 'Aria Condizionata' },
  { icon: 'fa-tshirt', label: 'Lavatrice' },
  { icon: 'fa-soap', label: 'Biancheria Inclusa' },
  { icon: 'fa-mountain-sun', label: 'Terrazzini Vista Mare' },
  { icon: 'fa-car', label: 'Parcheggio Riservato' },
  { icon: 'fa-door-open', label: 'Entrata Indipendente' },
  { icon: 'fa-utensils', label: 'Cucina Attrezzata' },
  { icon: 'fa-shower', label: 'Set Bagno Completo' },
];

const Description: React.FC = () => {
  return (
    <section id="descrizione" className="py-20 lg:py-24 bg-slate-50 border-y border-slate-200/60">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        {/* Intestazione lineare */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-amber-600 block mb-2">
            La Struttura
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight mb-4">
            Il Tuo Rifugio nel Borgo Antico
          </h2>
          <div className="w-16 h-0.5 bg-amber-500 mb-6"></div>
          <p className="text-lg text-slate-600 leading-relaxed font-light">
            Un appartamento accogliente e luminoso nel cuore storico di Milazzo, ideale per chi cerca relax, comodità e autentica atmosfera siciliana.
          </p>
        </div>

        {/* 4 Card lineari con i punti salienti */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-14">
          {HIGHLIGHTS.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-sm hover:border-slate-300 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-[#00628B] mb-3">
                <i className={`fas ${item.icon}`}></i>
              </div>
              <h3 className="font-semibold text-slate-900 text-base mb-1">{item.title}</h3>
              <p className="text-sm text-slate-500 leading-snug">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Sezione contenuti a due colonne pulite */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Testo descrittivo */}
          <div className="lg:col-span-7 space-y-5 text-slate-600 text-base md:text-lg leading-relaxed">
            <h3 className="text-xl font-serif font-bold text-slate-900 tracking-tight">
              Comfort moderno e tranquillità esclusiva
            </h3>
            <p>
              La <strong className="font-semibold text-slate-800">Casa del Sol</strong> è la scelta perfetta per vivere l'essenza di Milazzo senza rinunciare alla quiete. Situata in un palazzo residenziale nel cuore del borgo antico, la casa è riparata dai rumori del centro ma vicinissima ai principali punti d'interesse e al Castello.
            </p>
            <p>
              La presenza del <strong className="font-semibold text-slate-800">parcheggio riservato</strong> all'interno della struttura rappresenta una comodità preziosa nel borgo antico, consentendovi di esplorare Milazzo e la costa in assoluta serenità. L'<strong className="font-semibold text-slate-800">entrata indipendente</strong> garantisce inoltre la massima libertà e riservatezza.
            </p>
            <p>
              L'appartamento offre ambienti curati, una cucina attrezzata per ogni esigenza, biancheria completa e intimi terrazzini con vista mare da cui assaporare il fascino e i colori della Sicilia.
            </p>

            <div className="pt-2">
              <a
                href="#contatti"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#00628B] hover:text-[#004d6d] transition-colors group"
              >
                <span>Hai domande o desideri verificare la disponibilità? Scrivici</span>
                <i className="fas fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
              </a>
            </div>
          </div>

          {/* Servizi & Dotazioni - Box lineare e pulito */}
          <div className="lg:col-span-5 bg-white p-6 md:p-7 rounded-2xl border border-slate-200/80 shadow-sm">
            <h3 className="text-lg font-serif font-bold text-slate-900 mb-5 pb-3 border-b border-slate-100 flex items-center justify-between">
              <span>Servizi & Dotazioni</span>
              <span className="text-xs font-sans font-medium text-slate-500 uppercase tracking-wider">Inclusi</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {AMENITIES.map((item, idx) => (
                <div key={idx} className="flex items-center space-x-3 py-1">
                  <div className="w-8 h-8 rounded-md bg-slate-50 border border-slate-100 flex items-center justify-center text-[#00628B] flex-shrink-0">
                    <i className={`fas ${item.icon} text-sm`}></i>
                  </div>
                  <span className="text-sm font-medium text-slate-700">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-slate-100 flex items-start gap-2.5 text-xs text-slate-500">
              <i className="fas fa-circle-check text-emerald-600 mt-0.5"></i>
              <span>Appartamento pronto all'uso con dotazioni complete per bagno e cucina.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Description;
