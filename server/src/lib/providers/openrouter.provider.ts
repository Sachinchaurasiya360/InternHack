import OpenAI from "openai";
import type { AIProvider, AIProviderResponse } from "../ai-provider.js";

export class OpenRouterProvider implements AIProvider {
  readonly providerType = "OPENROUTER" as const;
  private client: OpenAI;

  constructor(private modelName: string) {
    this.client = new OpenAI({
      baseURL: "https://openrouter.ai/api/v1",
      apiKey: process.env["OPENROUTER_API_KEY"] ?? "",
    });
  }

  async generateText(prompt: string): Promise<AIProviderResponse> {
    const start = Date.now();
    const completion = await this.client.chat.completions.create({
      model: this.modelName,
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
    });
    return {
      text: completion.choices[0]?.message?.content ?? "",
      latencyMs: Date.now() - start,
      inputTokens: completion.usage?.prompt_tokens,
      outputTokens: completion.usage?.completion_tokens,
    };
  }
}
