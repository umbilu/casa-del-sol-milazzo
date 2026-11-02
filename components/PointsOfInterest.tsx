
import React from 'react';

const POI_DATA = [
  { name: 'Castello di Milazzo', dist: '200 m', detail: 'a piedi', icon: 'fa-chess-rook' },
  { name: 'Borgo Antico', dist: '150 m', detail: 'a piedi', icon: 'fa-landmark' },
  { name: 'Baia del Tono e Spiaggia di Ponente', dist: '3 km', detail: 'in auto', icon: 'fa-umbrella-beach' },
  { name: 'Capo di Milazzo (Piscina di Venere)', dist: '6 km', detail: 'in auto', icon: 'fa-water' },
];

const PointsOfInterest: React.FC = () => {
  return (
    <section id="punti-interesse" className="border-y border-line-soft bg-surface py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Tutto a portata di mano</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">Punti di interesse</h2>
          <p className="mt-4 text-base font-light leading-relaxed text-muted md:text-lg">
            Casa del Sol si trova nel cuore del borgo antico. Ecco le distanze dai luoghi che rendono unica Milazzo.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {POI_DATA.map((poi) => (
            <div key={poi.name} className="card card-hover group flex flex-col p-6">
              <span className="icon-tile h-12 w-12 rounded-full transition-colors group-hover:bg-brand group-hover:text-white">
                <i className={`fas ${poi.icon} text-lg`}></i>
              </span>
              <h3 className="mt-5 text-base font-semibold leading-snug text-ink">{poi.name}</h3>
              <p className="mt-2 flex items-baseline gap-1.5">
                <span className="text-xl font-bold tracking-tight text-coral">{poi.dist}</span>
                <span className="text-sm text-muted">{poi.detail}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PointsOfInterest;
