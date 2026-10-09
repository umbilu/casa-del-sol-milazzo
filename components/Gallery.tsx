import React, { useState, useEffect, useCallback } from 'react';
import { GalleryImage } from '../types.ts';

const IMAGES: GalleryImage[] = [
  { url: '/images/interni/terrazzo.jpg', alt: 'Terrazzino con Vista Mare', category: 'La Casa' },
  { url: '/images/interni/salotto.jpg', alt: 'Salotto Confortevole', category: 'La Casa' },
  { url: '/images/interni/20250830_112025.jpg', alt: 'Camera da Letto Matrimoniale', category: 'La Casa' },
  { url: '/images/interni/20250830_112506.jpg', alt: 'Cucina Attrezzata', category: 'La Casa' },
  { url: '/images/interni/bagno.jpg', alt: 'Bagno Moderno', category: 'La Casa' },
  { url: '/images/interni/20250830_110757.jpg', alt: 'Soggiorno Luminoso', category: 'La Casa' },
  { url: '/images/interni/20250830_112056.jpg', alt: 'Dettagli e Finiture', category: 'La Casa' },
  { url: '/images/interni/20250830_112643.jpg', alt: 'Zona Relax', category: 'La Casa' },
  { url: '/images/interni/20250830_112645.jpg', alt: 'Spazi Accoglienti', category: 'La Casa' },
  { url: '/images/interni/20250830_112815.jpg', alt: 'Arredi e Comfort', category: 'La Casa' },
  { url: '/images/interni/20250830_113247.jpg', alt: 'Vista Interna', category: 'La Casa' },
  { url: '/images/interni/20250830_113259.jpg', alt: 'Ambiente Solare', category: 'La Casa' },
  { url: '/images/interni/camerapranzo.jpg', alt: 'Sala da Pranzo', category: 'La Casa' },
  { url: '/images/interni/doccia.jpg', alt: 'Dettaglio Doccia', category: 'La Casa' },
];

const INITIAL_COUNT = 6;

const Gallery: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const displayedImages = showAll ? IMAGES : IMAGES.slice(0, INITIAL_COUNT);

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => setSelectedImageIndex(null);

  const showNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % IMAGES.length);
    }
  }, [selectedImageIndex]);

  const showPrev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + IMAGES.length) % IMAGES.length);
    }
  }, [selectedImageIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, showNext, showPrev]);

  return (
    <section id="immagini" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        {/* Header compatto ed elegante */}
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <span className="text-xs font-semibold tracking-widest uppercase text-amber-600 block mb-2">
            Gli Spazi
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-3">
            La Nostra Galleria
          </h2>
          <div className="w-12 h-0.5 bg-amber-500 mx-auto mb-4"></div>
          <p className="text-slate-500 text-sm md:text-base font-light">
            Uno sguardo agli ambienti curati e luminosi di Casa del Sol.
          </p>
        </div>

        {/* Griglia foto compatta (aspect 4/3) */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          {displayedImages.map((img, index) => (
            <div
              key={index}
              onClick={() => openLightbox(index)}
              className="group relative aspect-[4/3] overflow-hidden bg-slate-100 cursor-pointer rounded-xl border border-slate-200/70 shadow-sm hover:shadow-md hover:border-slate-300 transition-all"
            >
              <img
                src={img.url}
                alt={img.alt}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 md:p-4">
                <div className="flex items-center justify-between w-full text-white text-xs md:text-sm font-medium">
                  <span className="truncate pr-2">{img.alt}</span>
                  <span className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-expand text-[10px]"></i>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pulsante Mostra Tutte / Meno */}
        <div className="mt-8 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-semibold border border-slate-200 text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm active:scale-95"
          >
            <span>
              {showAll
                ? 'Mostra meno foto'
                : `Mostra tutte le foto (${IMAGES.length})`}
            </span>
            <i className={`fas fa-chevron-${showAll ? 'up' : 'down'} text-xs text-slate-400`}></i>
          </button>
        </div>
      </div>

      {/* Lightbox a tutto schermo */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10 animate-fade-in"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            className="absolute top-6 right-6 text-white/80 hover:text-white text-2xl w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            onClick={closeLightbox}
            aria-label="Chiudi"
          >
            <i className="fas fa-times"></i>
          </button>

          <div className="flex w-full h-full items-center justify-between max-w-6xl mx-auto">
            {/* Prev button */}
            <button
              className="text-white/70 hover:text-white transition-colors p-3 rounded-full hover:bg-white/10"
              onClick={showPrev}
              aria-label="Foto precedente"
            >
              <i className="fas fa-chevron-left text-2xl md:text-3xl"></i>
            </button>

            {/* Immagine attiva */}
            <div
              className="flex-1 flex flex-col items-center justify-center px-2 md:px-6 max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={IMAGES[selectedImageIndex].url}
                alt={IMAGES[selectedImageIndex].alt}
                className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl"
              />
              <div className="mt-5 text-center">
                <p className="text-white font-serif text-lg md:text-xl font-medium">
                  {IMAGES[selectedImageIndex].alt}
                </p>
                <div className="mt-1 text-xs text-slate-400 tracking-wider">
                  {selectedImageIndex + 1} di {IMAGES.length}
                </div>
              </div>
            </div>

            {/* Next button */}
            <button
              className="text-white/70 hover:text-white transition-colors p-3 rounded-full hover:bg-white/10"
              onClick={showNext}
              aria-label="Foto successiva"
            >
              <i className="fas fa-chevron-right text-2xl md:text-3xl"></i>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;