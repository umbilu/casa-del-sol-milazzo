
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="presentazione" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="{require('./src/images/milazzo.jpeg')}"
          alt="Sicilia Landscape"
          className="w-full h-full object-cover brightness-[0.55]"
        />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl">
        <span className="text-yellow-400 font-semibold tracking-widest uppercase mb-4 block animate-fade-in">Benvenuti in Sicilia</span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-serif font-bold mb-8 leading-tight animate-fade-in-up">
          La Casa del Sol vi da il benvenuto nella magica isola di Sicilia.
        </h1>
        <p className="text-lg md:text-xl text-slate-100 mb-10 max-w-3xl mx-auto font-light leading-relaxed animate-fade-in-up delay-100">
          Se siete alla ricerca di un alloggio nella meravigliosa Città di Milazzo, Casa del Sol offre un appartamento con entrata indipendente all'interno di un palazzo residenziale. Lontani dal caos della città ma a pochi minuti dal centro, è situato nel borgo antico a pochi passi dal castello.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-200">
          <a href="#descrizione" className="bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-700 transition-all shadow-xl">
            Scopri la Casa
          </a>
          <a href="#punti-interesse" className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm">
            Esplora i Dintorni
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#descrizione" className="text-white text-2xl">
          <i className="fas fa-chevron-down"></i>
        </a>
      </div>
    </section>
  );
};

export default Hero;
