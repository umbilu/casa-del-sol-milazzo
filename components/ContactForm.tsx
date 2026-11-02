import React from 'react';
import { SITE, whatsappUrl } from '../site.ts';

const DIRECT_BENEFITS = [
  {
    icon: 'fa-tags',
    title: 'Miglior tariffa garantita',
    desc: 'Nessun costo di intermediazione o commissione di portali esterni.',
  },
  {
    icon: 'fa-car',
    title: 'Posto auto riservato',
    desc: 'Parcheggio privato incluso all\'interno della struttura nel borgo.',
  },
  {
    icon: 'fa-clock',
    title: 'Flessibilità e accoglienza',
    desc: 'Orari di check-in concordabili e massima disponibilità per ogni esigenza.',
  },
  {
    icon: 'fa-compass',
    title: 'Consigli locali e supporto',
    desc: 'Siamo a tua disposizione per spiagge, ristoranti ed escursioni.',
  },
];

const ContactForm: React.FC = () => {
  return (
    <section id="contatti" className="border-t border-line-soft bg-surface py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {/* Intestazione */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Disponibilità e prenotazioni</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">Prenota il tuo soggiorno</h2>
          <p className="mt-4 text-base font-light leading-relaxed text-muted md:text-lg">
            Siamo a tua disposizione per verificare le date disponibili, trovare la soluzione ideale e darti il
            benvenuto nella meravigliosa cornice di Milazzo.
          </p>
        </div>

        {/* Canali di contatto */}
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {/* WhatsApp */}
          <div className="card card-hover flex flex-col p-6 text-center">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-2xl text-[#25D366]">
              <i className="fab fa-whatsapp"></i>
            </span>
            <h3 className="mt-4 text-lg font-bold tracking-tight text-ink">WhatsApp</h3>
            <p className="mt-1.5 flex-1 text-sm font-light leading-relaxed text-muted">
              Contattaci subito in chat per date disponibili, preventivi e risposte rapide.
            </p>
            <a
              href={whatsappUrl('Ciao! Vorrei verificare la disponibilità per un soggiorno a Casa del Sol a Milazzo.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary mt-5 w-full"
            >
              Chatta su WhatsApp
              <i className="fas fa-arrow-right text-xs"></i>
            </a>
          </div>

          {/* Telefono */}
          <div className="card card-hover flex flex-col p-6 text-center">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-light text-xl text-brand">
              <i className="fas fa-phone"></i>
            </span>
            <h3 className="mt-4 text-lg font-bold tracking-tight text-ink">Chiamata diretta</h3>
            <p className="mt-1.5 flex-1 text-sm font-light leading-relaxed text-muted">
              Preferisci parlare a voce? Chiamaci per informazioni dettagliate sul soggiorno.
            </p>
            <p className="mt-4 text-base font-semibold text-ink">{SITE.phoneDisplay}</p>
            <a href={`tel:${SITE.phoneRaw}`} className="btn btn-outline mt-3 w-full">
              Chiama ora
              <i className="fas fa-phone text-xs"></i>
            </a>
          </div>

          {/* Email */}
          <div className="card card-hover flex flex-col p-6 text-center">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-surface text-xl text-ink">
              <i className="fas fa-envelope"></i>
            </span>
            <h3 className="mt-4 text-lg font-bold tracking-tight text-ink">Scrivi una email</h3>
            <p className="mt-1.5 flex-1 text-sm font-light leading-relaxed text-muted">
              Ideale per richieste di lunghi soggiorni, famiglie o preventivi dedicati.
            </p>
            <p className="mt-4 truncate px-2 text-sm font-semibold text-ink">{SITE.email}</p>
            <a
              href={`mailto:${SITE.email}?subject=${encodeURIComponent('Richiesta informazioni Casa del Sol')}`}
              className="btn btn-ghost mt-3 w-full border border-line"
            >
              Invia una email
              <i className="fas fa-paper-plane text-xs"></i>
            </a>
          </div>
        </div>

        {/* Vantaggi prenotazione diretta */}
        <div className="mt-6 rounded-3xl border border-line bg-white p-6 md:p-10">
          <div className="mx-auto max-w-xl text-center">
            <h3 className="text-2xl font-bold tracking-tight text-ink">Perché prenotare direttamente con noi?</h3>
            <p className="mt-2 text-sm font-light leading-relaxed text-muted">
              Massima trasparenza, assistenza diretta e le migliori condizioni per il tuo soggiorno.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {DIRECT_BENEFITS.map((benefit) => (
              <div key={benefit.title} className="flex flex-col items-center text-center">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-coral/10 text-coral">
                  <i className={`fas ${benefit.icon}`}></i>
                </span>
                <h4 className="mt-3 text-[15px] font-semibold text-ink">{benefit.title}</h4>
                <p className="mt-1 text-xs leading-relaxed text-muted">{benefit.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-line-soft pt-6 text-sm text-muted">
            <span className="flex items-center gap-2">
              <i className="fas fa-key text-brand"></i>
              <span><strong className="font-semibold text-ink">Check-in:</strong> {SITE.checkIn}</span>
            </span>
            <span className="flex items-center gap-2">
              <i className="fas fa-right-from-bracket text-brand"></i>
              <span><strong className="font-semibold text-ink">Check-out:</strong> {SITE.checkOut}</span>
            </span>
            <span className="flex items-center gap-2">
              <i className="fas fa-location-dot text-brand"></i>
              <span>{SITE.address}</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
