/**
 * Dati di contatto e informazioni condivise del sito.
 * Modifica qui per aggiornare telefono, email e link WhatsApp in ogni sezione.
 */
export const SITE = {
  name: 'Casa del Sol',
  city: 'Milazzo',
  phoneDisplay: '+39 347 123 4567',
  phoneRaw: '393471234567',
  email: 'info@casadelsolmilazzo.it',
  address: 'Borgo Antico di Milazzo (ME), Sicilia',
  checkIn: 'dalle 15:00 (concordabile)',
  checkOut: 'entro le 10:30',
} as const;

export const whatsappUrl = (message: string) =>
  `https://wa.me/${SITE.phoneRaw}?text=${encodeURIComponent(message)}`;
