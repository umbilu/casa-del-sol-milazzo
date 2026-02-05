
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    date: '',
    messaggio: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Logic for sending email would go here
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contatti" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto bg-slate-900 rounded-[2rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          {/* Info Side */}
          <div className="lg:w-1/3 p-12 text-white flex flex-col justify-between" style={{ backgroundColor: '#00628B' }}>
            <div>
              <h2 className="text-2xl font-serif font-bold mb-6">Prenota il tuo Soggiorno</h2>
              <p className="mb-10" style={{ color: '#E3F2FD' }}>
                Siamo pronti ad accoglierti nella meravigliosa Milazzo. Scrivici per verificare la disponibilità o per qualsiasi domanda sulla Casa del Sol.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div>
                    <p className="text-sm opacity-70">Telefono</p>
                    <p className="font-bold">+39 347 123 4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <p className="text-sm opacity-70">Email</p>
                    <p className="font-bold">info@casadelsolmilazzo.it</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <i className="fab fa-whatsapp"></i>
                  </div>
                  <div>
                    <p className="text-sm opacity-70">WhatsApp</p>
                    <p className="font-bold">Disponibile 24/7</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/30 transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/30 transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-2/3 p-12 bg-white">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20 animate-fade-in">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-4xl mb-6">
                  <i className="fas fa-check"></i>
                </div>
                <h3 className="text-xl font-bold mb-2 text-slate-900">Richiesta Ricevuta!</h3>
                <p className="text-slate-500">Ti risponderemo al più presto con tutti i dettagli per la tua vacanza.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Nome Completo</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:outline-none"
                      onFocus={(e) => e.currentTarget.style.outline = '2px solid #5DADE2'}
                      onBlur={(e) => e.currentTarget.style.outline = 'none'}
                      placeholder="Il tuo nome"
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-600 focus:outline-none"
                      placeholder="latua@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Periodo o Numero Ospiti</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-600 focus:outline-none"
                    placeholder="Es: Prima settimana di Luglio, 2 persone"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Messaggio</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-600 focus:outline-none resize-none"
                    placeholder="Come possiamo aiutarti?"
                    value={formData.messaggio}
                    onChange={(e) => setFormData({ ...formData, messaggio: e.target.value })}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-4 text-white rounded-xl font-bold text-lg transition-all shadow-lg active:scale-95"
                  style={{ backgroundColor: '#00628B' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#004d6d'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#00628B'}
                >
                  Invia Messaggio
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
