
import React from 'react';
import { Amenity } from '../types.ts';

const AMENITIES: Amenity[] = [
  { icon: 'fa-wind', label: 'Aria Condizionata' },
  { icon: 'fa-tshirt', label: 'Lavatrice' },
  { icon: 'fa-soap', label: 'Biancheria Inclusa' },
  { icon: 'fa-mountain-sun', label: 'Terrazzini Vista Mare' },
  { icon: 'fa-car', label: 'Parcheggio Riservato' },
  { icon: 'fa-door-open', label: 'Entrata Indipendente' },
  { icon: 'fa-utensils', label: 'Cucina Attrezzata' },
  { icon: 'fa-shower', label: 'Set Bagno Completo' },
];

const Description: React.FC = () => {
  return (
    <section id="descrizione" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Text Side */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-slate-900">Il Tuo Rifugio nel Borgo Antico</h2>
            <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
              <p>
                La **Casa del Sol** è la scelta ideale per chi desidera vivere l'autenticità di Milazzo senza rinunciare alla tranquillità. Situata nel cuore del **borgo antico**, la casa gode di una posizione privilegiata, protetta dal rumore cittadino ma a pochi passi dalle principali attrazioni storiche.
              </p>
              <p>
                I nostri ospiti possono usufruire di un **parcheggio riservato** all'interno della struttura, un plus fondamentale per esplorare la zona in totale libertà. L'appartamento è dotato di ogni comfort moderno per farvi sentire come a casa vostra.
              </p>
              <div className="grid grid-cols-2 gap-y-4 pt-6">
                {AMENITIES.map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600">
                      <i className={`fas ${item.icon}`}></i>
                    </div>
                    <span className="font-medium text-slate-800">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Feature Card */}
          <div className="lg:w-1/2 w-full">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-orange-600 rounded-full -z-10 opacity-20 animate-pulse"></div>
              <div className="bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 relative z-10">
                <div className="mb-8 flex items-center space-x-4">
                  <div className="p-3 bg-orange-600 rounded-xl text-white">
                    <i className="fas fa-info-circle text-2xl"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900">Informazioni Utili</h4>
                    <p className="text-slate-500 text-sm">Cosa troverai al tuo arrivo</p>
                  </div>
                </div>

                <p className="text-slate-600 mb-6">
                  L'appartamento è corredato di tutto il necessario per bagno e cucina. Troverete biancheria pulita, terrazzini con uno splendido scorcio di mare e la massima disponibilità per accogliervi al meglio.
                </p>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <h5 className="font-bold text-slate-800 mb-2 flex items-center">
                    <i className="fas fa-check-circle text-green-500 mr-2"></i>
                    Highlight della Casa
                  </h5>
                  <ul className="text-sm text-slate-600 space-y-2">
                    <li>• Posizione silenziosa ed esclusiva</li>
                    <li>• Facile accesso al Castello di Milazzo</li>
                    <li>• Vista suggestiva e atmosfera siciliana</li>
                  </ul>
                </div>

                <a
                  href="#contatti"
                  className="w-full mt-8 bg-orange-600 text-white py-4 rounded-xl font-bold hover:bg-orange-700 transition-all flex items-center justify-center space-x-2"
                >
                  <span>Chiedi Informazioni</span>
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-400 rounded-full -z-10 opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Description;
