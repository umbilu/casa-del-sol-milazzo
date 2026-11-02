import React from 'react';

interface DayTrip {
  name: string;
  dist: string;
  desc: string;
  icon: string;
}

const TRIPS_DATA: DayTrip[] = [
  {
    name: 'Tindari e Marinello',
    dist: '30 min in auto',
    desc: 'Celebre Santuario della Madonna Nera, Parco Archeologico con teatro greco e la riserva naturale dei laghetti di Marinello.',
    icon: 'fa-monument',
  },
  {
    name: 'Messina e lo Stretto',
    dist: '45 min in auto',
    desc: 'Città dello Stretto con il Duomo, l\'orologio astronomico più grande al mondo e il panorama spettacolare da Cristo Re.',
    icon: 'fa-church',
  },
  {
    name: 'Taormina',
    dist: '1h 15 min in auto',
    desc: 'La perla dello Jonio con il magnifico Teatro Greco-Romano, la passeggiata su Corso Umberto e la vista sull\'Etna.',
    icon: 'fa-sun',
  },
  {
    name: 'Montalbano Elicona e Borghi',
    dist: '1h in auto',
    desc: 'Tra i borghi medievali più belli d\'Italia, con il castello federiciano e i misteriosi Megaliti dell\'Argimusco.',
    icon: 'fa-chess-rook',
  },
  {
    name: 'Vulcano e Lipari',
    dist: 'Aliscafo dal porto',
    desc: 'Le isole più vicine, raggiungibili comodamente a piedi dal porto di Milazzo con corse veloci attive tutto l\'anno.',
    icon: 'fa-ship',
  },
  {
    name: 'Stromboli e Panarea',
    dist: 'Minicrociere dal porto',
    desc: 'Emozionanti tour giornalieri in barca con partenze dirette da Milazzo per ammirare la "Sciara del Fuoco" dal mare.',
    icon: 'fa-volcano',
  },
];

const DayTrips: React.FC = () => {
  return (
    <section id="gite" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Intorno a Milazzo</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">Gite fuori porta</h2>
          <p className="mt-4 text-base font-light leading-relaxed text-muted md:text-lg">
            Partendo da Milazzo puoi organizzare splendide escursioni in ogni stagione, tra siti archeologici, borghi
            medievali e le Isole Eolie.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {TRIPS_DATA.map((trip) => (
            <article
              key={trip.name}
              className="card card-hover group flex flex-col p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="icon-tile transition-colors group-hover:bg-brand group-hover:text-white">
                  <i className={`fas ${trip.icon} text-lg`}></i>
                </span>
                <span className="rounded-full bg-brand-light px-3 py-1 text-xs font-semibold text-brand">
                  {trip.dist}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-bold tracking-tight text-ink">{trip.name}</h3>
              <p className="mt-2 text-sm font-light leading-relaxed text-muted">{trip.desc}</p>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-xs leading-relaxed text-muted">
          <i className="fas fa-circle-info mr-1.5 text-brand"></i>
          I collegamenti marittimi per le Isole Eolie (Liberty Lines e Siremar) partono regolarmente dal porto di Milazzo
          anche durante la stagione invernale.
        </p>
      </div>
    </section>
  );
};

export default DayTrips;
