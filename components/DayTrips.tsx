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
    <section id="gite" className="py-24 bg-slate-50 border-y border-slate-200/60">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-slate-900">Gite Fuori Porta</h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Partendo da Milazzo puoi organizzare splendide escursioni in ogni stagione, spaziando tra siti archeologici, borghi medievali e le Isole Eolie.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TRIPS_DATA.map((trip, index) => (
            <div
              key={index}
              className="p-8 bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 bg-slate-50 rounded-xl shadow-sm flex items-center justify-center text-orange-600 text-2xl mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                  <i className={`fas ${trip.icon}`}></i>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">{trip.name}</h3>
                <p className="text-orange-600 font-bold text-base mb-3">{trip.dist}</p>
                <p className="text-sm text-slate-600 leading-relaxed font-light">{trip.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-slate-500 italic mt-12">
          * I collegamenti marittimi per le Isole Eolie (Liberty Lines e Siremar) partono regolarmente dal porto di Milazzo anche durante la stagione invernale.
        </p>
      </div>
    </section>
  );
};

export default DayTrips;
