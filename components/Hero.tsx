
import React from 'react';

const FACTS = [
  { icon: 'fa-car', label: 'Parcheggio privato' },
  { icon: 'fa-door-open', label: 'Entrata indipendente' },
  { icon: 'fa-mountain-sun', label: 'Terrazzini vista mare' },
  { icon: 'fa-wind', label: 'Aria condizionata' },
];

const Hero: React.FC = () => {
  return (
    <section id="presentazione" className="relative">
      <div className="mx-auto max-w-7xl md:px-8">
        <div className="relative flex min-h-[calc(100svh-80px)] items-center justify-center overflow-hidden py-2 md:mt-2 md:min-h-[calc(100svh-88px)] md:rounded-3xl">
          {/* Immagine di sfondo */}
          <img
            src="/images/milazzo.jpeg"
            alt="Veduta di Milazzo e del suo borgo antico"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/75"></div>

          {/* Contenuto */}
          <div className="relative z-10 flex w-full max-w-4xl flex-col items-center px-5 text-center text-white">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] backdrop-blur-md animate-fade-in">
              <span className="h-1.5 w-1.5 rounded-full bg-coral"></span>
              Milazzo · Sicilia
            </span>

            <img
              src="/images/logocasadelsolmilazzo-trasp.png"
              srcSet="/images/logocasadelsolmilazzo-trasp.png 1x, /images/logocasadelsolmilazzo-trasp@2x.png 2x"
              alt="Casa del Sol - Holiday Apartment Milazzo"
              width={200}
              height={204}
              className="mt-3 h-[360px] w-auto max-h-[calc(100svh-362px)] object-contain sm:h-[420px] md:h-[480px] md:max-h-[calc(100svh-390px)] animate-fade-in-up"
              style={{ filter: 'drop-shadow(0 6px 22px rgba(0,0,0,0.55)) drop-shadow(0 0 36px rgba(255,255,255,0.18))' }}
            />
            <h1 className="sr-only">Casa del Sol - Appartamento vacanze nel borgo antico di Milazzo</h1>

            <p className="mt-4 max-w-2xl text-base font-light leading-relaxed text-white/90 sm:text-lg md:text-xl animate-fade-in-up delay-100">
              Un appartamento con entrata indipendente nel cuore del borgo antico, lontano dal caos ma a pochi passi dal Castello e dal mare.
            </p>

            <div className="mt-5 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row animate-fade-in-up delay-200">
              <a
                href="#descrizione"
                className="btn btn-lg w-full border border-white/40 bg-white/10 text-white backdrop-blur-md hover:bg-white/20 sm:w-auto"
              >
                Scopri la casa
              </a>
              <a
                href="#punti-interesse"
                className="btn btn-lg w-full border border-white/40 bg-white/10 text-white backdrop-blur-md hover:bg-white/20 sm:w-auto"
              >
                Esplora i dintorni
                <i className="fas fa-arrow-right text-xs"></i>
              </a>
            </div>

            {/* Fatti rapidi */}
            <div className="mt-7 hidden flex-wrap items-center justify-center gap-2 sm:flex animate-fade-in delay-300">
              {FACTS.map((fact) => (
                <span
                  key={fact.label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-3.5 py-2 text-xs font-medium text-white/90 backdrop-blur-md"
                >
                  <i className={`fas ${fact.icon} text-[11px] text-white/70`}></i>
                  {fact.label}
                </span>
              ))}
            </div>

            {/* Indicatore scroll */}
            <a
              href="#descrizione"
              className="mt-4 hidden flex-col items-center gap-1.5 text-white/70 transition-colors hover:text-white md:flex"
              aria-label="Scorri alla descrizione"
            >
              <span className="text-[10px] font-medium uppercase tracking-[0.2em]">Scopri</span>
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30">
                <i className="fas fa-chevron-down text-xs animate-bounce"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
