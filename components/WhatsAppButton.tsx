
import React from 'react';

const WhatsAppButton: React.FC = () => {
  const phoneNumber = "393471234567"; // Sostituisci con il tuo numero reale
  const message = encodeURIComponent("Ciao! Vorrei ricevere informazioni sulla disponibilità di Casa del Sol a Milazzo.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end group">
      {/* Tooltip opzionale */}
      <div className="bg-white text-slate-800 px-4 py-2 rounded-lg shadow-xl mb-3 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-slate-100 mr-2">
        Chatta con noi!
      </div>
      
      {/* Pulsante Flottante */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center text-3xl shadow-[0_10px_25px_-5px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform duration-300 active:scale-95 group"
        aria-label="Contattaci su WhatsApp"
      >
        {/* Effetto Pulse */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>
        
        <i className="fab fa-whatsapp relative z-10"></i>
      </a>
    </div>
  );
};

export default WhatsAppButton;
