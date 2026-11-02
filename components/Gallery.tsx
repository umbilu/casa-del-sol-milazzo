import React, { useState, useEffect, useCallback } from 'react';
import { GalleryImage } from '../types.ts';

const IMAGES: GalleryImage[] = [
  { url: '/images/interni/terrazzo.jpg', alt: 'Terrazzino con vista mare', category: 'La Casa' },
  { url: '/images/interni/salotto.jpg', alt: 'Salotto confortevole', category: 'La Casa' },
  { url: '/images/interni/20250830_112025.jpg', alt: 'Camera da letto matrimoniale', category: 'La Casa' },
  { url: '/images/interni/20250830_112506.jpg', alt: 'Cucina attrezzata', category: 'La Casa' },
  { url: '/images/interni/bagno.jpg', alt: 'Bagno moderno', category: 'La Casa' },
  { url: '/images/interni/20250830_110757.jpg', alt: 'Soggiorno luminoso', category: 'La Casa' },
  { url: '/images/interni/20250830_112056.jpg', alt: 'Dettagli e finiture', category: 'La Casa' },
  { url: '/images/interni/20250830_112643.jpg', alt: 'Zona relax', category: 'La Casa' },
  { url: '/images/interni/20250830_112645.jpg', alt: 'Spazi accoglienti', category: 'La Casa' },
  { url: '/images/interni/20250830_112815.jpg', alt: 'Arredi e comfort', category: 'La Casa' },
  { url: '/images/interni/20250830_113247.jpg', alt: 'Vista interna', category: 'La Casa' },
  { url: '/images/interni/20250830_113259.jpg', alt: 'Ambiente solare', category: 'La Casa' },
  { url: '/images/interni/camerapranzo.jpg', alt: 'Sala da pranzo', category: 'La Casa' },
  { url: '/images/interni/doccia.jpg', alt: 'Dettaglio doccia', category: 'La Casa' },
];

const INITIAL_COUNT = 5;

const Gallery: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const displayedImages = showAll ? IMAGES : IMAGES.slice(0, INITIAL_COUNT);

  const openLightbox = (index: number) => setSelectedImageIndex(index);
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

  // Blocca lo scroll della pagina quando il lightbox è aperto
  useEffect(() => {
    document.body.style.overflow = selectedImageIndex !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [selectedImageIndex]);

  return (
    <section id="immagini" className="border-t border-line-soft py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="eyebrow">Gli spazi</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">Foto della casa</h2>
            <p className="mt-3 text-base font-light leading-relaxed text-muted">
              Uno sguardo agli ambienti curati e luminosi di Casa del Sol.
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted">
            <i className="fas fa-camera text-brand"></i>
            <span>{IMAGES.length} foto</span>
          </div>
        </div>

        {/* Mosaico (anteprima) */}
        {!showAll ? (
          <div className="relative mt-8">
            <div className="grid grid-cols-2 gap-2.5 md:h-[520px] md:grid-cols-4 md:grid-rows-2 md:gap-3">
              {displayedImages.map((img, index) => (
                <button
                  type="button"
                  key={img.url}
                  onClick={() => openLightbox(index)}
                  className={`group relative overflow-hidden rounded-xl bg-surface md:rounded-2xl ${
                    index === 0
                      ? 'col-span-2 aspect-[16/10] md:row-span-2 md:aspect-auto'
                      : 'aspect-square md:aspect-auto'
                  }`}
                  aria-label={`Apri foto: ${img.alt}`}
                >
                  <img
                    src={img.url}
                    alt={img.alt}
                    loading={index === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <span className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10"></span>
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-xl border border-ink bg-white px-4 py-2.5 text-sm font-semibold text-ink shadow-pill transition-colors hover:bg-surface md:bottom-5 md:right-5"
            >
              <i className="fas fa-grip text-xs"></i>
              Mostra tutte le foto
            </button>
          </div>
        ) : (
          /* Griglia completa */
          <div className="mt-8 grid grid-cols-2 gap-2.5 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
            {displayedImages.map((img, index) => (
              <button
                type="button"
                key={img.url}
                onClick={() => openLightbox(index)}
                className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-surface md:rounded-2xl"
                aria-label={`Apri foto: ${img.alt}`}
              >
                <img
                  src={img.url}
                  alt={img.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <span className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10"></span>
              </button>
            ))}
          </div>
        )}

        {showAll && (
          <div className="mt-8 text-center">
            <button type="button" onClick={() => setShowAll(false)} className="btn btn-outline btn-sm">
              <i className="fas fa-chevron-up text-xs"></i>
              Mostra meno foto
            </button>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 animate-fade-in md:p-8"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Galleria fotografica"
        >
          <button
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:right-6 md:top-6"
            onClick={closeLightbox}
            aria-label="Chiudi"
          >
            <i className="fas fa-xmark text-lg"></i>
          </button>

          <button
            className="absolute left-2 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:left-6"
            onClick={showPrev}
            aria-label="Foto precedente"
          >
            <i className="fas fa-chevron-left"></i>
          </button>

          <div
            className="flex max-h-full w-full max-w-5xl flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={IMAGES[selectedImageIndex].url}
              alt={IMAGES[selectedImageIndex].alt}
              className="max-h-[74vh] w-auto max-w-full rounded-xl object-contain md:rounded-2xl"
            />
            <div className="mt-4 flex items-center gap-3 text-sm text-white/80">
              <span>{IMAGES[selectedImageIndex].alt}</span>
              <span className="text-white/30">·</span>
              <span className="tabular-nums">{selectedImageIndex + 1} / {IMAGES.length}</span>
            </div>
          </div>

          <button
            className="absolute right-2 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:right-6"
            onClick={showNext}
            aria-label="Foto successiva"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
