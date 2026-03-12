import { GoogleGenerativeAI } from "@google/generative-ai";
import type { AIProvider, AIProviderResponse } from "../ai-provider.js";

export class GeminiProvider implements AIProvider {
  readonly providerType = "GEMINI" as const;
  private genAI: GoogleGenerativeAI;

  constructor(private modelName: string) {
    const apiKey = process.env["GEMINI_API_KEY"] ?? "";
    this.genAI = new GoogleGenerativeAI(apiKey);
  }

  async generateText(prompt: string): Promise<AIProviderResponse> {
    const start = Date.now();
    const model = this.genAI.getGenerativeModel({ model: this.modelName });
    const result = await model.generateContent(prompt);
    const text = result.response.text();
    return {
      text,
      latencyMs: Date.now() - start,
      inputTokens: result.response.usageMetadata?.promptTokenCount,
      outputTokens: result.response.usageMetadata?.candidatesTokenCount,
    };
  }
}
