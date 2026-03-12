import { Mistral } from "@mistralai/mistralai";
import type { AIProvider, AIProviderResponse } from "../ai-provider.js";

export class CodestralProvider implements AIProvider {
  readonly providerType = "CODESTRAL" as const;
  private client: Mistral;

  constructor(private modelName: string) {
    this.client = new Mistral({ apiKey: process.env["CODESTRAL_API_KEY"] ?? "" });
  }

  async generateText(prompt: string): Promise<AIProviderResponse> {
    const start = Date.now();
    const result = await this.client.chat.complete({
      model: this.modelName,
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
    });
    const text =
      typeof result.choices?.[0]?.message?.content === "string"
        ? result.choices[0].message.content
        : "";
    return {
      text,
      latencyMs: Date.now() - start,
      inputTokens: result.usage?.promptTokens,
      outputTokens: result.usage?.completionTokens,
    };
  }
}
