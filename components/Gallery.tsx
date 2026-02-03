import React, { useState, useEffect, useCallback } from 'react';
import { GalleryImage } from '../types.ts';

const IMAGES: GalleryImage[] = [
  { url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200', alt: 'Ingresso Casa del Sol', category: 'La Casa' },
  { url: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1200', alt: 'Interni Accoglienti', category: 'La Casa' },
  { url: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80&w=1200', alt: 'Vista Terrazzini', category: 'La Casa' },
  { url: 'https://images.unsplash.com/photo-1544013583-1d9333f2824b?auto=format&fit=crop&q=80&w=1200', alt: 'Castello di Milazzo', category: 'Dintorni' },
  { url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1200', alt: 'Spiaggia di Ponente', category: 'Dintorni' },
  { url: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&q=80&w=1200', alt: 'Borgo di Milazzo', category: 'Dintorni' },
  { url: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=1200', alt: 'Dettagli Siciliani', category: 'La Casa' },
  { url: 'https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?auto=format&fit=crop&q=80&w=1200', alt: 'Atmosfera Mediterranea', category: 'Dintorni' },
  { url: 'https://images.unsplash.com/photo-1519449556851-5720b33024e7?auto=format&fit=crop&q=80&w=1200', alt: 'Scorcio di Mare', category: 'Dintorni' },
];

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState('Tutti');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const categories = ['Tutti', 'La Casa', 'Dintorni'];

  const filteredImages = filter === 'Tutti'
    ? IMAGES
    : IMAGES.filter(img => img.category === filter);

  const openLightbox = (imgUrl: string) => {
    const index = IMAGES.findIndex(img => img.url === imgUrl);
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
    <section id="immagini" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">La Nostra Galleria</h2>
          <div className="w-16 h-1 bg-orange-600 mx-auto mb-4"></div>
          <p className="text-slate-500 max-w-lg mx-auto text-sm md:text-base italic">
            Atmosfere mediterranee a pochi passi dal mare.
          </p>
        </div>

        {/* Categorie Semplici */}
        <div className="flex justify-center flex-wrap gap-6 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-xs font-bold tracking-widest uppercase transition-all ${
                filter === cat
                  ? 'text-orange-600 scale-110'
                  : 'text-slate-300 hover:text-slate-500'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Griglia Quadrata */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4">
          {filteredImages.map((img, index) => (
            <div 
              key={index} 
              onClick={() => openLightbox(img.url)}
              className="group relative aspect-square overflow-hidden bg-slate-100 cursor-pointer rounded-sm"
            >
              <img
                src={img.url}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                <div className="w-8 h-8 md:w-12 md:h-12 border border-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                   <i className="fas fa-plus text-white text-xs md:text-base"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Minimalista */}
      {selectedImageIndex !== null && (
        <div 
          className="fixed inset-0 z-[100] bg-white flex items-center justify-center p-4 md:p-12 animate-fade-in"
          onClick={closeLightbox}
        >
          <button className="absolute top-8 right-8 text-slate-900 text-3xl hover:rotate-90 transition-transform" onClick={closeLightbox}>
            <i className="fas fa-times font-light"></i>
          </button>

          <div className="flex w-full h-full items-center justify-between">
            <button className="text-slate-300 hover:text-orange-600 transition-colors hidden md:block" onClick={showPrev}>
              <i className="fas fa-chevron-left text-4xl"></i>
            </button>
            
            <div className="flex-1 flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
              <img
                src={IMAGES[selectedImageIndex].url}
                alt={IMAGES[selectedImageIndex].alt}
                className="max-w-full max-h-[75vh] object-contain"
              />
              <p className="mt-8 text-slate-800 font-serif text-lg tracking-wide">{IMAGES[selectedImageIndex].alt}</p>
              <div className="mt-2 text-xs text-slate-400 uppercase tracking-widest">{selectedImageIndex + 1} / {IMAGES.length}</div>
            </div>

            <button className="text-slate-300 hover:text-orange-600 transition-colors hidden md:block" onClick={showNext}>
              <i className="fas fa-chevron-right text-4xl"></i>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;