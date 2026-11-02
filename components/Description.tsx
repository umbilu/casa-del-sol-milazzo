
import React from 'react';
import { Amenity } from '../types.ts';
import { SITE, whatsappUrl } from '../site.ts';

const HIGHLIGHTS = [
  { icon: 'fa-car', title: 'Parcheggio riservato', desc: 'Posto auto interno alla struttura' },
  { icon: 'fa-door-open', title: 'Entrata indipendente', desc: 'Massima privacy e autonomia' },
  { icon: 'fa-mountain-sun', title: 'Terrazzini vista mare', desc: 'Scorci sul borgo e sul mare' },
  { icon: 'fa-shield-heart', title: 'Tranquillità nel borgo', desc: 'Silenzio a due passi dal Castello' },
];

const AMENITIES: Amenity[] = [
  { icon: 'fa-wind', label: 'Aria condizionata' },
  { icon: 'fa-tshirt', label: 'Lavatrice' },
  { icon: 'fa-soap', label: 'Biancheria inclusa' },
  { icon: 'fa-mountain-sun', label: 'Terrazzini vista mare' },
  { icon: 'fa-car', label: 'Parcheggio riservato' },
  { icon: 'fa-door-open', label: 'Entrata indipendente' },
  { icon: 'fa-utensils', label: 'Cucina attrezzata' },
  { icon: 'fa-shower', label: 'Set bagno completo' },
];

const Description: React.FC = () => {
  return (
    <section id="descrizione" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-10 lg:grid-cols-3 lg:gap-16">
          {/* Colonna principale */}
          <div className="lg:col-span-2">
            <span className="eyebrow">La struttura</span>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-ink md:text-4xl lg:text-[42px]">
              Il tuo rifugio nel borgo antico
            </h2>
            <p className="mt-4 max-w-2xl text-lg font-light leading-relaxed text-muted">
              Un appartamento accogliente e luminoso nel cuore storico di Milazzo, ideale per chi cerca
              relax, comodità e autentica atmosfera siciliana.
            </p>

            {/* Punti salienti */}
            <div className="mt-10 grid gap-6 border-t border-line-soft pt-8 sm:grid-cols-2">
              {HIGHLIGHTS.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <span className="icon-tile flex-shrink-0">
                    <i className={`fas ${item.icon} text-lg`}></i>
                  </span>
                  <div>
                    <h3 className="text-[15px] font-semibold text-ink">{item.title}</h3>
                    <p className="mt-0.5 text-sm leading-snug text-muted">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Descrizione */}
            <div className="mt-10 border-t border-line-soft pt-8">
              <h3 className="text-xl font-bold tracking-tight text-ink">Comfort moderno e tranquillità esclusiva</h3>
              <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-muted md:text-base">
                <p>
                  La <strong className="font-semibold text-ink">Casa del Sol</strong> è la scelta perfetta per vivere
                  l'essenza di Milazzo senza rinunciare alla quiete. Situata in un palazzo residenziale nel cuore del
                  borgo antico, la casa è riparata dai rumori del centro ma vicinissima ai principali punti d'interesse
                  e al Castello.
                </p>
                <p>
                  La presenza del <strong className="font-semibold text-ink">parcheggio riservato</strong> all'interno
                  della struttura rappresenta una comodità preziosa nel borgo antico, consentendovi di esplorare Milazzo
                  e la costa in assoluta serenità. L'
                  <strong className="font-semibold text-ink">entrata indipendente</strong> garantisce inoltre la
                  massima libertà e riservatezza.
                </p>
                <p>
                  L'appartamento offre ambienti curati, una cucina attrezzata per ogni esigenza, biancheria completa e
                  intimi terrazzini con vista mare da cui assaporare il fascino e i colori della Sicilia.
                </p>
              </div>
            </div>

            {/* Servizi */}
            <div className="mt-10 border-t border-line-soft pt-8">
              <h3 className="text-xl font-bold tracking-tight text-ink">Servizi e dotazioni</h3>
              <div className="mt-5 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                {AMENITIES.map((item) => (
                  <div key={item.label} className="flex items-center gap-3 text-[15px] text-ink">
                    <i className={`fas ${item.icon} w-5 text-center text-base text-brand`}></i>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-start gap-2.5 rounded-2xl bg-surface p-4 text-sm text-muted">
                <i className="fas fa-circle-check mt-0.5 text-emerald-600"></i>
                <span>Appartamento pronto all'uso, con dotazioni complete per bagno e cucina.</span>
              </div>
            </div>
          </div>

          {/* Card prenotazione (sticky) */}
          <aside className="lg:col-span-1">
            <div className="lg:sticky lg:top-28">
              <div className="rounded-2xl border border-line bg-white p-6 shadow-card">
                <p className="text-sm font-semibold uppercase tracking-wider text-coral-dark">Prenotazione diretta</p>
                <h3 className="mt-2 text-2xl font-bold tracking-tight text-ink">Soggiorna da noi</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Miglior tariffa garantita, senza commissioni di portali esterni.
                </p>

                <div className="mt-5 space-y-2">
                  <a href="#contatti" className="btn btn-primary w-full">
                    Verifica disponibilità
                  </a>
                  <a
                    href={whatsappUrl('Ciao! Vorrei verificare la disponibilità per un soggiorno a Casa del Sol a Milazzo.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline w-full"
                  >
                    <i className="fab fa-whatsapp text-base text-[#25D366]"></i>
                    Scrivici su WhatsApp
                  </a>
                </div>

                <dl className="mt-6 space-y-3 border-t border-line-soft pt-5 text-sm">
                  <div className="flex items-center justify-between gap-4">
                    <dt className="text-muted">Check-in</dt>
                    <dd className="font-medium text-ink">{SITE.checkIn}</dd>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <dt className="text-muted">Check-out</dt>
                    <dd className="font-medium text-ink">{SITE.checkOut}</dd>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <dt className="text-muted">Posizione</dt>
                    <dd className="text-right font-medium text-ink">Borgo Antico</dd>
                  </div>
                </dl>

                <p className="mt-5 flex items-center gap-2 text-xs text-muted">
                  <i className="fas fa-shield-heart text-coral"></i>
                  Assistenza diretta dei proprietari
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Description;
