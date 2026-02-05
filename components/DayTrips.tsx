
import React from 'react';

const DayTrips: React.FC = () => {
  return (
    <section id="gite" className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Gite Fuori Porta</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Partendo da Milazzo, puoi organizzare diverse gite ideali in ogni stagione, spaziando tra siti archeologici, borghi medievali e riserve naturali.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Section 1: History */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-yellow-500 text-slate-900 rounded-full flex items-center justify-center text-xl font-bold">
                <i className="fas fa-columns"></i>
              </div>
              <h3 className="text-xl font-serif font-bold">Storia e Archeologia</h3>
            </div>

            <div className="space-y-6">
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <h4 className="font-bold text-yellow-500 mb-2">Tindari e la Madonna Nera</h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  A 30 min di auto. Celebre meta di pellegrinaggio e Parco Archeologico di Tyndaris con teatro greco. Da non perdere i laghetti di Marinello.
                </p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <h4 className="font-bold text-yellow-500 mb-2">Messina</h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  A 45 min. Offre il Duomo con l'orologio astronomico più grande al mondo e il panorama mozzafiato dal Santuario di Cristo Re sullo Stretto.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2: Villages */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                <i className="fas fa-mountain"></i>
              </div>
              <h3 className="text-xl font-serif font-bold">Borghi e Paesaggi</h3>
            </div>

            <div className="space-y-6">
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <h4 className="font-bold text-orange-500 mb-2">San Marco d'Alunzio</h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Nel Parco dei Nebrodi, tra i Borghi più belli d'Italia. Famoso per le sue numerose chiese e i resti del castello normanno.
                </p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <h4 className="font-bold text-orange-500 mb-2">Montalbano Elicona</h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Noto per il castello federiciano e l'area dei Megaliti dell'Argimusco, definita la "Stonehenge siciliana".
                </p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <h4 className="font-bold text-orange-500 mb-2">Taormina</h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  A circa 1h 15 min. Meta classica per il Teatro Antico e Corso Umberto, suggestiva anche nel periodo invernale.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3: Sea */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold">
                <i className="fas fa-ship"></i>
              </div>
              <h3 className="text-xl font-serif font-bold">Escursioni Marittime</h3>
            </div>

            <div className="space-y-6">
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <h4 className="font-bold text-blue-400 mb-2">Vulcano e Lipari</h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Le isole più vicine, raggiungibili con aliscafi attivi tutto l'anno. Ideali per una passeggiata nel centro storico o tour panoramici.
                </p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <h4 className="font-bold text-blue-400 mb-2">Stromboli</h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Minicrociere giornaliere per ammirare la "Sciara del Fuoco" dal mare, compatibilmente con le condizioni meteo.
                </p>
              </div>
              <p className="text-xs text-slate-500 italic px-2">
                * I collegamenti regolari tramite Liberty Lines e Siremar restano attivi anche nel periodo invernale.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DayTrips;
