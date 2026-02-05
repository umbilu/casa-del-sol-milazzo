
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const navLinks = [
    { name: 'Home', href: '#presentazione' },
    { name: 'Dettagli', href: '#descrizione' },
    { name: 'Dintorni', href: '#punti-interesse' },
    { name: 'Gite', href: '#gite' },
    { name: 'Foto', href: '#immagini' },
    { name: 'Contatti', href: '#contatti' },
  ];

  return (
    <nav className="fixed w-full z-50 transition-all duration-300 bg-white shadow-md py-3">
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <img
            src="/images/interni/logocasadelsoltrasp.png"
            alt="Casa del Sol Logo"
            className="h-10 md:h-12 w-auto object-contain"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-medium transition-colors hover:text-yellow-500 text-[#00628B]"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contatti"
            className="text-white px-6 py-2 rounded-full font-semibold transition-transform active:scale-95 shadow-lg"
            style={{ backgroundColor: '#00628B' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#004d6d'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#00628B'}
          >
            Prenota
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-2xl focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-[#00628B]`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white absolute top-full left-0 w-full shadow-xl animate-fade-in">
          <div className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-800 text-lg font-medium border-b border-slate-100 pb-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contatti"
              className="text-white text-center py-3 rounded-lg font-bold"
              style={{ backgroundColor: '#00628B' }}
              onClick={() => setIsMenuOpen(false)}
            >
              Prenota Ora
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
