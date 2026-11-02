
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="presentazione" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/milazzo.jpeg"
          alt="Sicilia Landscape"
          className="w-full h-full object-cover brightness-[0.55]"
        />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl">
        <span className="font-semibold tracking-widest uppercase mb-4 block animate-fade-in" style={{ color: '#F5A623' }}>Benvenuti in Sicilia</span>
        <div className="flex justify-center mb-8 animate-fade-in-up">
          <img
            src="/images/logocasadelsoltrasp.png"
            srcSet="/images/logocasadelsoltrasp.png 1x, /images/logocasadelsoltrasp@2x.png 2x"
            alt="Casa del Sol - Holiday Apartment Milazzo"
            width={587}
            height={239}
            className="w-full max-w-[280px] sm:max-w-[380px] md:max-w-[460px] lg:max-w-[520px] h-auto object-contain"
            style={{
              filter: 'drop-shadow(0px 4px 16px rgba(255, 255, 255, 0.45)) drop-shadow(0px 8px 24px rgba(0, 0, 0, 0.6))',
            }}
          />
          <h1 className="sr-only">Casa del Sol - Holiday Apartment Milazzo</h1>
        </div>
        <p className="text-lg md:text-xl text-slate-100 mb-10 max-w-3xl mx-auto font-light leading-relaxed animate-fade-in-up delay-100">
          Se siete alla ricerca di un alloggio nella meravigliosa Città di Milazzo, Casa del Sol offre un appartamento con entrata indipendente all'interno di un palazzo residenziale. Lontani dal caos della città ma a pochi minuti dal centro, è situato nel borgo antico a pochi passi dal castello.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-200">
          <a href="#descrizione" className="text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl" style={{ backgroundColor: '#00628B' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#004d6d'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#00628B'}>
            Scopri la Casa
          </a>
          <a href="#punti-interesse" className="border-2 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm" style={{ borderColor: '#5DADE2' }}>
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
