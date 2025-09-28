import { GoogleGenerativeAI } from '@google/generative-ai';
import { BreedResult } from '../types';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

if (!API_KEY) {
  // Fail fast instead of using an insecure fallback key
  throw new Error('VITE_GEMINI_API_KEY is missing. Please set it in your environment.');
}

const genAI = new GoogleGenerativeAI(API_KEY);

export class GeminiService {
  private model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

  async analyzeImage(imageFile: File): Promise<BreedResult> {
    try {
      const imageData = await this.fileToGenerativePart(imageFile);
      
      const prompt = `Analyze this image of a cattle or buffalo and identify the breed. Provide the response in the following JSON format:
{
  "breed": "exact breed name",
  "confidence": confidence_score_0_to_100,
  "animalType": "cattle" or "buffalo",
  "characteristics": ["list", "of", "key", "characteristics"],
  "productivity": "productivity information",
  "careTips": ["care", "tip", "1", "care tip 2"],
  "origin": "origin location/region",
  "avgWeight": "average weight range",
  "avgHeight": "average height range",
  "lifespan": "typical lifespan"
}

Focus on Indian cattle and buffalo breeds. If the image doesn't contain a clear cattle or buffalo, return an error message in the breed field.`;

      const result = await this.model.generateContent([prompt, imageData]);
      const response = await result.response;
      const text = response.text();

      // Extract and validate JSON from the model response
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      if (!jsonMatch) {
        throw new Error('Invalid response format from AI model');
      }

      let parsed: unknown;
      try {
        parsed = JSON.parse(jsonMatch[0]);
      } catch {
        throw new Error('AI response JSON parsing failed');
      }

      // Basic schema validation to avoid runtime errors
      const data = parsed as Partial<BreedResult> & { breed?: string; confidence?: number };
      if (!data || typeof data.breed !== 'string' || typeof data.confidence !== 'number') {
        throw new Error('AI response missing required fields');
      }

      if (data.breed.toLowerCase().includes('error') || data.breed.toLowerCase().includes('not found')) {
        throw new Error('Could not identify breed from the image');
      }

      // Provide sensible fallbacks for optional arrays/strings
      return {
        breed: data.breed,
        confidence: Math.max(0, Math.min(100, data.confidence)),
        animalType: (data.animalType === 'cattle' || data.animalType === 'buffalo') ? data.animalType : 'cattle',
        characteristics: Array.isArray(data.characteristics) ? data.characteristics : [],
        productivity: typeof data.productivity === 'string' ? data.productivity : '',
        careTips: Array.isArray(data.careTips) ? data.careTips : [],
        origin: typeof data.origin === 'string' ? data.origin : '',
        avgWeight: typeof data.avgWeight === 'string' ? data.avgWeight : '',
        avgHeight: typeof data.avgHeight === 'string' ? data.avgHeight : '',
        lifespan: typeof data.lifespan === 'string' ? data.lifespan : ''
      };
    } catch (error) {
      // Avoid leaking error details in production; provide user-friendly message
      throw new Error('Failed to analyze image. Please try again with a clearer photo.');
    }
  }

  private async fileToGenerativePart(file: File): Promise<any> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const base64Data = (reader.result as string).split(',')[1];
        resolve({
          inlineData: {
            data: base64Data,
            mimeType: file.type,
          },
        });
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }
}

export const geminiService = new GeminiService();