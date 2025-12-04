import { GoogleGenAI } from "@google/genai";

// Initialize Gemini Client
// Note: We use the Flash model for low latency responses suitable for UI interactions.
// We initialize lazily or handle missing key to prevent app crash if env var is missing.
let ai: GoogleGenAI | null = null;

try {
  if (process.env.API_KEY) {
    ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  } else {
    console.warn("Gemini API Key is missing. AI features will be disabled.");
  }
} catch (error) {
  console.error("Failed to initialize Gemini Client:", error);
}

/**
 * Generates a professional project brief based on user keywords.
 * This helps users articulate their needs better in the contact form.
 */
export const generateProjectBrief = async (keywords: string): Promise<string> => {
  if (!ai) {
    console.warn("Gemini API not initialized.");
    return `I am interested in discussing a project regarding: ${keywords}`;
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `You are a helpful assistant for a digital marketing agency called "Lagyan Media". 
      The user is a potential client who wants to book a service.
      They have provided these raw thoughts or keywords: "${keywords}".
      
      Please rewrite this into a professional, concise, and clear project inquiry message (max 3 sentences). 
      Focus on "Website Development", "Social Media", "Digital Marketing", or "Ecommerce" if mentioned.
      Do not include placeholders like "[Your Name]". Just the message body.`,
    });

    return response.text?.trim() || "I am interested in your services. Please contact me.";
  } catch (error) {
    console.error("Gemini generation error:", error);
    // Fallback in case of error
    return `I am interested in discussing a project regarding: ${keywords}`;
  }
};
