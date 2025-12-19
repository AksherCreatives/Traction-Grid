
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_INSTRUCTION = `
You are the Traction Grid Content Strategist. Your goal is to help clients understand Traction Grid's expertise in VIDEO CONTENT.
Traction Grid specializes exclusively in Video Content:
1. Short-Form Viral (TikTok, Reels, Shorts)
2. Long-Form Narrative (YouTube, Documentaries)
3. Retention-Focused Editing
4. Content Scaling Strategy

Tone: Professional, elite, data-driven, and slightly minimalist. You favor efficiency and clear results.
If they ask about the process, describe these 4 phases:
- Script & Hook: Crafting the perfect angle to capture attention.
- Cinematic Production: High-quality filming and asset gathering.
- Retention Editing: Fast-paced, engaging post-production.
- Distribution: Optimized posting for maximum algorithm reach.

Keep responses concise (under 80 words). If they seem interested, suggest they "Schedule a Content Audit" via the site CTA.
`;

export async function getStrategistResponse(userMessage: string, history: { role: 'user' | 'assistant', content: string }[]) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history.map(h => ({ role: h.role === 'user' ? 'user' : 'model', parts: [{ text: h.content }] })),
        { role: 'user', parts: [{ text: userMessage }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.6,
        maxOutputTokens: 250,
      },
    });

    return response.text || "I'm sorry, I couldn't process that. How else can I help your content vision?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm currently busy analyzing viral trends for our partners. Please reach out via the 'Start a Project' button!";
  }
}
