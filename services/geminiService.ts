import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
Sei l'assistente virtuale di "Casa del Sol Milazzo", una splendida casa vacanze situata nel borgo antico di Milazzo, Sicilia, a pochi passi dal castello e dal mare.
Il tuo obiettivo è aiutare i potenziali ospiti a conoscere la casa e la zona di Milazzo.
Informazioni chiave:
- Nome: Casa del Sol.
- Posizione: Borgo Antico di Milazzo, vicino al Castello.
- Vista: Scorci suggestivi sul mare e sul borgo.
- Caratteristiche: Appartamento indipendente in un palazzo residenziale, zona silenziosa ed esclusiva.
- Servizi: WiFi, Aria condizionata, Lavatrice, Cucina attrezzata, Parcheggio riservato interno.
- Attività: Escursioni alle Isole Eolie (partenza dal porto), visita al Castello di Milazzo, Piscina di Venere al Capo.
- Tono: Accogliente, solare, professionale.
Rispondi sempre in Italiano. Se ti chiedono prezzi, di' che variano in base alla stagione e di usare il form di contatto sul sito.
`;

export const getConciergeResponse = async (userMessage: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    return response.text || "Mi dispiace, c'è stato un errore tecnico. Riprova tra poco!";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Al momento il mio servizio è limitato. Per favore, usa il modulo di contatto per scriverci direttamente!";
  }
};