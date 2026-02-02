
import React from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Gallery from './components/Gallery.tsx';
import Description from './components/Description.tsx';
import PointsOfInterest from './components/PointsOfInterest.tsx';
import DayTrips from './components/DayTrips.tsx';
import ContactForm from './components/ContactForm.tsx';
import DownloadSource from './components/DownloadSource.tsx';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-slate-50">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section (Presentazione) */}
      <Hero />

      {/* Amenities & Detailed Description (Descrizione) */}
      <Description />

      {/* Points of Interest */}
      <PointsOfInterest />

      {/* Day Trips (Gite Fuori Porta) */}
      <DayTrips />

      {/* Gallery Section (Immagini) */}
      <Gallery />

      {/* Contact & Booking (Contatti) */}
      <ContactForm />

      {/* Source Download Feature */}
      <DownloadSource />

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-white text-2xl font-serif font-bold mb-4">Casa del Sol <span className="text-yellow-500">Milazzo</span></h3>
          <p className="max-w-md mx-auto mb-8">
            Il tuo angolo di paradiso nel borgo antico di Milazzo. Vivi la magia della Sicilia tra storia e mare.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a href="#presentazione" className="hover:text-white transition-colors">Home</a>
            <a href="#descrizione" className="hover:text-white transition-colors">Dettagli</a>
            <a href="#punti-interesse" className="hover:text-white transition-colors">Dintorni</a>
            <a href="#gite" className="hover:text-white transition-colors">Gite</a>
            <a href="#immagini" className="hover:text-white transition-colors">Foto</a>
            <a href="#contatti" className="hover:text-white transition-colors">Contatti</a>
          </div>
          <p className="text-sm">
            © {new Date().getFullYear()} Casa del Sol. Tutti i diritti riservati. <br/>
            Realizzato con <i className="fas fa-sun text-yellow-500"></i> in Sicilia.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
