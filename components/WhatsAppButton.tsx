
import React from 'react';
import { whatsappUrl } from '../site.ts';

const WhatsAppButton: React.FC = () => {
  const url = whatsappUrl('Ciao! Vorrei ricevere informazioni sulla disponibilità di Casa del Sol a Milazzo.');

  return (
    <div className="group fixed bottom-5 right-5 z-[60] flex flex-col items-end md:bottom-7 md:right-7">
      <span className="pointer-events-none mb-2 rounded-full bg-ink px-3.5 py-2 text-xs font-semibold text-white opacity-0 shadow-card transition-opacity duration-300 group-hover:opacity-100">
        Chatta con noi
      </span>

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-2xl text-white shadow-[0_8px_24px_-4px_rgba(37,211,102,0.55)] transition-transform duration-300 hover:scale-105 active:scale-95"
        aria-label="Contattaci su WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-20 animate-ping"></span>
        <i className="fab fa-whatsapp relative z-10"></i>
      </a>
    </div>
  );
};

export default WhatsAppButton;
