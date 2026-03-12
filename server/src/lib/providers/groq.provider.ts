import Groq from "groq-sdk";
import type { AIProvider, AIProviderResponse } from "../ai-provider.js";

export class GroqProvider implements AIProvider {
  readonly providerType = "GROQ" as const;
  private client: Groq;

  constructor(private modelName: string) {
    this.client = new Groq({ apiKey: process.env["GROQ_API_KEY"] ?? "" });
  }

  async generateText(prompt: string): Promise<AIProviderResponse> {
    const start = Date.now();
    const completion = await this.client.chat.completions.create({
      model: this.modelName,
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
      max_tokens: 8192,
    });
    return {
      text: completion.choices[0]?.message?.content ?? "",
      latencyMs: Date.now() - start,
      inputTokens: completion.usage?.prompt_tokens,
      outputTokens: completion.usage?.completion_tokens,
    };
  }
}
