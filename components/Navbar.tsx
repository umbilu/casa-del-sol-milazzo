
import React, { useState } from 'react';
import { SITE } from '../site.ts';

const NAV_LINKS = [
  { name: 'Home', href: '#presentazione' },
  { name: 'La Casa', href: '#descrizione' },
  { name: 'Dintorni', href: '#punti-interesse' },
  { name: 'Gite', href: '#gite' },
  { name: 'Foto', href: '#immagini' },
  { name: 'Contatti', href: '#contatti' },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative z-50 bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-5 md:px-8">
        {/* Logo */}
        <a href="#presentazione" className="flex flex-shrink-0 items-center" aria-label="Casa del Sol Milazzo — Home">
          <img
            src="/images/logocasadelsoltrasp.png"
            srcSet="/images/logocasadelsoltrasp.png 1x, /images/logocasadelsoltrasp@2x.png 2x"
            alt="Casa del Sol Logo"
            width={587}
            height={239}
            className="h-10 w-auto md:h-11"
          />
        </a>

        {/* Menu desktop */}
        <div className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="rounded-full px-4 py-2.5 text-[15px] font-medium text-ink transition-colors hover:bg-surface"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Azioni desktop */}
        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={`tel:${SITE.phoneRaw}`}
            className="rounded-full px-4 py-2.5 text-[15px] font-semibold text-ink transition-colors hover:bg-surface"
          >
            <i className="fas fa-phone mr-2 text-xs text-brand"></i>
            {SITE.phoneDisplay}
          </a>
          <a href="#contatti" className="btn btn-primary btn-sm">
            Prenota
          </a>
        </div>

        {/* Toggle mobile */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition-colors hover:bg-surface lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Chiudi il menu' : 'Apri il menu'}
        >
          <i className={`fas ${isMenuOpen ? 'fa-xmark' : 'fa-bars'} text-lg`}></i>
        </button>
      </div>

      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="border-t border-line-soft bg-white animate-fade-in lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="rounded-xl px-4 py-3 text-base font-medium text-ink transition-colors hover:bg-surface"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="mt-3 grid gap-2 border-t border-line-soft pt-4">
              <a href={`tel:${SITE.phoneRaw}`} className="btn btn-outline w-full">
                <i className="fas fa-phone text-xs"></i>
                {SITE.phoneDisplay}
              </a>
              <a
                href="#contatti"
                className="btn btn-primary w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                Prenota ora
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
