import React from 'react';

const ContactForm: React.FC = () => {
  const phoneNumber = "+39 347 123 4567";
  const rawPhone = "393471234567";
  const email = "info@casadelsolmilazzo.it";
  const whatsappUrl = `https://wa.me/${rawPhone}?text=${encodeURIComponent("Ciao! Vorrei verificare la disponibilità per un soggiorno a Casa del Sol a Milazzo.")}`;

  const DIRECT_BENEFITS = [
    {
      icon: 'fa-tags',
      title: 'Miglior Tariffa Garantita',
      desc: 'Nessun costo di intermediazione o commissione di portali esterni.'
    },
    {
      icon: 'fa-car',
      title: 'Posto Auto Riservato',
      desc: 'Parcheggio privato incluso all\'interno della struttura nel borgo.'
    },
    {
      icon: 'fa-clock',
      title: 'Flessibilità & Accoglienza',
      desc: 'Orari di check-in concordabili e massima disponibilità per ogni esigenza.'
    },
    {
      icon: 'fa-compass',
      title: 'Consigli Locali & Supporto',
      desc: 'Siamo a tua disposizione per consigli su spiagge, ristoranti ed escursioni.'
    }
  ];

  return (
    <section id="contatti" className="py-20 lg:py-28 bg-slate-50 border-t border-slate-200/60 relative">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        {/* Intestazione */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-amber-600 block mb-2">
            Disponibilità & Prenotazioni
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight mb-4">
            Prenota il tuo Soggiorno
          </h2>
          <div className="w-20 h-0.5 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed font-light">
            Siamo a tua disposizione per verificare le date disponibili, trovare la soluzione ideale e darti il benvenuto nella meravigliosa cornice di Milazzo.
          </p>
        </div>

        {/* 3 Canali di prenotazione rapida */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Canale WhatsApp */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all flex flex-col justify-between text-center relative overflow-hidden group">
            <div className="absolute top-3 right-3 bg-emerald-50 text-emerald-700 text-[11px] font-semibold px-2.5 py-1 rounded-full border border-emerald-100">
              Risposta Rapida
            </div>
            <div>
              <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-3xl group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                <i className="fab fa-whatsapp"></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">WhatsApp</h3>
              <p className="text-sm text-slate-500 mb-6 font-light">
                Contattaci subito in chat per date disponibili, preventivi e risposte rapide.
              </p>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-6 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-sm active:scale-95"
            >
              <span>Chatta su WhatsApp</span>
              <i className="fas fa-arrow-right text-xs"></i>
            </a>
          </div>

          {/* Canale Telefono */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-sky-200 transition-all flex flex-col justify-between text-center group">
            <div>
              <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-sky-50 text-[#00628B] flex items-center justify-center text-2xl group-hover:bg-[#00628B] group-hover:text-white transition-colors">
                <i className="fas fa-phone-alt"></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Chiamata Diretta</h3>
              <p className="text-sm text-slate-500 mb-6 font-light">
                Preferisci parlare a voce? Chiamaci per informazioni dettagliate sul soggiorno.
              </p>
              <div className="font-serif text-lg font-bold text-slate-900 mb-6">
                {phoneNumber}
              </div>
            </div>
            <a
              href={`tel:${rawPhone}`}
              className="w-full py-3.5 px-6 rounded-xl border-2 border-[#00628B] text-[#00628B] hover:bg-[#00628B] hover:text-white font-semibold text-sm transition-all flex items-center justify-center gap-2 active:scale-95"
            >
              <span>Chiama Ora</span>
              <i className="fas fa-phone text-xs"></i>
            </a>
          </div>

          {/* Canale Email */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between text-center group">
            <div>
              <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-slate-100 text-slate-700 flex items-center justify-center text-2xl group-hover:bg-slate-800 group-hover:text-white transition-colors">
                <i className="fas fa-envelope"></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Scrivi una Email</h3>
              <p className="text-sm text-slate-500 mb-6 font-light">
                Ideale per richieste di lunghi soggiorni, famiglie o preventivi dedicati.
              </p>
              <div className="text-sm font-semibold text-slate-700 mb-6 truncate px-2">
                {email}
              </div>
            </div>
            <a
              href={`mailto:${email}?subject=Richiesta%20Informazioni%20Casa%20del%20Sol`}
              className="w-full py-3.5 px-6 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-sm active:scale-95"
            >
              <span>Invia una Email</span>
              <i className="fas fa-paper-plane text-xs"></i>
            </a>
          </div>
        </div>

        {/* Vantaggi della Prenotazione Diretta */}
        <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200/80 shadow-sm">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2">
              Perché prenotare direttamente con noi?
            </h3>
            <p className="text-sm text-slate-500 font-light">
              Garantiamo massima trasparenza, assistenza diretta e le migliori condizioni per il tuo soggiorno.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DIRECT_BENEFITS.map((benefit, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-4">
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center text-lg mb-3">
                  <i className={`fas ${benefit.icon}`}></i>
                </div>
                <h4 className="font-bold text-slate-900 text-base mb-1.5">{benefit.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed font-light">{benefit.desc}</p>
              </div>
            ))}
          </div>

          {/* Dettagli pratici check-in */}
          <div className="mt-10 pt-8 border-t border-slate-100 flex flex-wrap justify-center items-center gap-6 md:gap-12 text-xs md:text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <i className="fas fa-key text-amber-600"></i>
              <span><strong>Check-in:</strong> dalle 15:00 (concordabile)</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-sign-out-alt text-amber-600"></i>
              <span><strong>Check-out:</strong> entro le 10:30</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-map-marker-alt text-amber-600"></i>
              <span>Borgo Antico di Milazzo (ME), Sicilia</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
