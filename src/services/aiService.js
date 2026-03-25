import { GoogleGenerativeAI } from '@google/generative-ai';

// Retrieve the API key from environment variables
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

// Initialize the Gemini API client
const genAI = new GoogleGenerativeAI(API_KEY || 'MISSING_KEY');

export const generateTripItinerary = async (tripData) => {
    if (!API_KEY) {
        console.warn("Missing VITE_GEMINI_API_KEY in environment variables.");
        // Provide a fallback or throw an error based on your preference
    }

    const { destination, budget, style, duration = 3, travelers = 2 } = tripData;

    const systemInstruction = `You are an expert travel planner integrated into a full stack web app.
The app collects structured trip data from a form and sends it to you as JSON.
You MUST respond ONLY in valid JSON that matches the response schema below.
Do not include explanations, markdown, or extra text outside the JSON.

Trip request from the frontend:
- Destination city/country: ${destination}
- Number of days (integer): ${duration}
- Number of travelers: ${travelers}
- Budget level: ${budget}
- Travel style: ${style}

Your tasks:
1. Create a realistic, optimized, day-by-day trip itinerary that fits the dates, duration, budget, and travel style.
2. For each day, provide 3-6 activities with time slots, neighborhood, short descriptions, and rough cost levels.
3. Suggest a suitable area or neighborhood to stay in with reasoning.
4. Include practical tips like local transport, safety, and weather.
5. If info is uncertain, make reasonable, clearly-marked assumptions instead of leaving things blank.

Output format (must be valid JSON matching this exact structure):
{
  "destination": "String",
  "summary": { "title": "String", "overview": "String" },
  "stay_recommendation": {
    "area_name": "String",
    "why": "String",
    "alternative_areas": [ { "area_name": "String", "why": "String" } ]
  },
  "itinerary": [
    {
      "day": "Number",
      "date": "String",
      "theme": "String",
      "notes": "String",
      "items": [
        {
          "time_block": "String",
          "name": "String",
          "area": "String",
          "description": "String",
          "cost_level": "free | low | medium | high",
          "must_book_ahead": "Boolean",
          "google_maps_search_query": "String"
        }
      ]
    }
  ],
  "logistics": {
    "local_transport": {
      "summary": "String",
      "options": [ { "mode": "String", "when_to_use": "String", "typical_cost_note": "String" } ]
    },
    "airport_or_arrival": { "main_hub": "String", "to_city_center": "String" }
  },
  "tips": {
    "safety": ["String"],
    "culture_etiquette": ["String"],
    "money_and_booking": ["String"],
    "weather_and_packing": ["String"]
  },
  "assumptions": ["String"]
}

Rules:
- ALWAYS return the complete JSON object with all top-level keys present.
- Do NOT add any extra top-level keys.
- Use realistic, destination-appropriate suggestions (no made-up places).
- Keep descriptions concise but helpful so they render well in cards on a web UI.`;

    try {
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
        
        const result = await model.generateContent({
            contents: [{ role: "user", parts: [{ text: "Generate the trip itinerary JSON." }] }],
            systemInstruction: { role: "system", parts: [{ text: systemInstruction }]},
            generationConfig: {
                responseMimeType: "application/json",
            }
        });

        const responseText = result.response.text();
        return JSON.parse(responseText);
    } catch (error) {
        console.error("Error generating trip:", error);
        throw error;
    }
};
