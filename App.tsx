import React from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Gallery from './components/Gallery.tsx';
import Description from './components/Description.tsx';
import PointsOfInterest from './components/PointsOfInterest.tsx';
import DayTrips from './components/DayTrips.tsx';
import ContactForm from './components/ContactForm.tsx';
import WhatsAppButton from './components/WhatsAppButton.tsx';
import { SITE } from './site.ts';

const FOOTER_LINKS = [
  { name: 'La Casa', href: '#descrizione' },
  { name: 'Dintorni', href: '#punti-interesse' },
  { name: 'Gite', href: '#gite' },
  { name: 'Foto', href: '#immagini' },
  { name: 'Contatti', href: '#contatti' },
];

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Description />
        <PointsOfInterest />
        <DayTrips />
        <Gallery />
        <ContactForm />
      </main>

      <WhatsAppButton />

      <footer className="bg-surface border-t border-line-soft">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-14">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div>
              <img
                src="/images/logocasadelsoltrasp.png"
                srcSet="/images/logocasadelsoltrasp.png 1x, /images/logocasadelsoltrasp@2x.png 2x"
                alt="Casa del Sol Milazzo"
                width={587}
                height={239}
                className="h-12 w-auto"
              />
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
                Il tuo angolo di paradiso nel borgo antico di Milazzo. Vivi la magia della Sicilia tra storia e mare.
              </p>
              <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-ink">
                <i className="fas fa-star text-coral text-xs"></i>
                <span>Appartamento indipendente · Borgo Antico</span>
              </div>
            </div>

            {/* Esplora */}
            <div>
              <h3 className="text-sm font-bold text-ink">Esplora</h3>
              <ul className="mt-4 space-y-2.5">
                {FOOTER_LINKS.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-sm text-muted hover:text-ink transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contatti */}
            <div>
              <h3 className="text-sm font-bold text-ink">Contatti</h3>
              <ul className="mt-4 space-y-2.5 text-sm text-muted">
                <li>
                  <a href={`tel:${SITE.phoneRaw}`} className="flex items-center gap-2.5 hover:text-ink transition-colors">
                    <i className="fas fa-phone text-xs w-4 text-brand"></i>
                    {SITE.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${SITE.email}`} className="flex items-center gap-2.5 hover:text-ink transition-colors">
                    <i className="fas fa-envelope text-xs w-4 text-brand"></i>
                    {SITE.email}
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <i className="fas fa-location-dot text-xs w-4 mt-1 text-brand"></i>
                  <span>{SITE.address}</span>
                </li>
              </ul>
            </div>

            {/* Prenotazione */}
            <div>
              <h3 className="text-sm font-bold text-ink">Soggiorno</h3>
              <ul className="mt-4 space-y-2.5 text-sm text-muted">
                <li>
                  <span className="font-medium text-ink">Check-in:</span> {SITE.checkIn}
                </li>
                <li>
                  <span className="font-medium text-ink">Check-out:</span> {SITE.checkOut}
                </li>
              </ul>
              <a href="#contatti" className="btn btn-primary btn-sm mt-5">
                Verifica disponibilità
              </a>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-line flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted">
            <p>© {new Date().getFullYear()} {SITE.name} {SITE.city}. Tutti i diritti riservati.</p>
            <p className="flex items-center gap-1.5">
              Realizzato con
              <i className="fas fa-sun text-coral"></i>
              in Sicilia
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
