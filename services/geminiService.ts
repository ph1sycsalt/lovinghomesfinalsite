import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || '';

// Initialize only if key exists to avoid runtime crashes on init, though we assume valid env
let ai: GoogleGenAI | null = null;
if (API_KEY) {
  ai = new GoogleGenAI({ apiKey: API_KEY });
}

export const generateConciergeResponse = async (userMessage: string): Promise<string> => {
  if (!ai) return "I'm having trouble connecting to my brain right now. Please try again later.";

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: `You are the AI Concierge for Loving Homes, a luxury dog hotel in Hong Kong. 
        Your tone is sophisticated, warm, and slightly playful (occasionally using dog puns).
        You are helpful and knowledgeable about our services: Luxury Boarding, Spa Grooming, Elite Training, and Adventure Treks.
        
        Key Info:
        - Location: Hong Kong (Premium quiet district)
        - Vibe: Minimalist luxury, organic, calm.
        - Contact email: 3172abraham@scss.sc.ke
        
        Keep responses concise (under 50 words) and elegant.`,
      }
    });

    return response.text || "Woof! I missed that. Could you say it again?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I seem to be chasing my tail. Please try again in a moment.";
  }
};
