
import React from 'react';

const POI_DATA = [
  { name: 'Castello di Milazzo', dist: '200 m', icon: 'fa-fort-awesome' },
  { name: 'Borgo Antico', dist: '150 m', icon: 'fa-landmark' },
  { name: 'Baia del Tono e Spiaggia di Ponente', dist: '3 km', icon: 'fa-umbrella-beach' },
  { name: 'Capo di Milazzo (Piscina di Venere)', dist: '6 km', icon: 'fa-water' },
];

const PointsOfInterest: React.FC = () => {
  return (
    <section id="punti-interesse" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-slate-900">Punti di Interesse</h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            La Casa del Sol si trova nel cuore del borgo antico. Ecco le distanze dai principali luoghi che rendono unica Milazzo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {POI_DATA.map((poi, index) => (
            <div key={index} className="p-8 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-orange-600 text-2xl mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                <i className={`fas ${poi.icon}`}></i>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{poi.name}</h3>
              <p className="text-orange-600 font-bold text-lg">{poi.dist}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PointsOfInterest;
