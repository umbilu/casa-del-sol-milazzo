
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#presentazione' },
    { name: 'Dettagli', href: '#descrizione' },
    { name: 'Dintorni', href: '#punti-interesse' },
    { name: 'Gite', href: '#gite' },
    { name: 'Foto', href: '#immagini' },
    { name: 'Contatti', href: '#contatti' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <a href="#" className={`text-2xl font-serif font-bold transition-colors ${isScrolled ? 'text-orange-600' : 'text-white'}`}>
          Casa del <span className="text-yellow-400">Sol</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-medium transition-colors hover:text-yellow-500 ${isScrolled ? 'text-slate-700' : 'text-white'}`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contatti"
            className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-full font-semibold transition-transform active:scale-95 shadow-lg"
          >
            Prenota
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-2xl focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} ${isScrolled ? 'text-orange-900' : 'text-white'}`}></i>
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
              className="bg-orange-600 text-white text-center py-3 rounded-lg font-bold"
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
