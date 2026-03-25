import Anthropic from "@anthropic-ai/sdk";
import type { AIProvider, AIProviderResponse } from "../ai-provider.js";

export class ClaudeProvider implements AIProvider {
  readonly providerType = "CLAUDE" as const;
  private client: Anthropic;

  constructor(private modelName: string) {
    this.client = new Anthropic({ apiKey: process.env["CLAUDE_API"] ?? "" });
  }

  async generateText(prompt: string): Promise<AIProviderResponse> {
    const start = Date.now();
    const message = await this.client.messages.create({
      model: this.modelName,
      max_tokens: 4096,
      messages: [{ role: "user", content: prompt }],
    });

    const text = message.content
      .filter((b): b is Anthropic.TextBlock => b.type === "text")
      .map((b) => b.text)
      .join("");

    return {
      text,
      latencyMs: Date.now() - start,
      inputTokens: message.usage.input_tokens,
      outputTokens: message.usage.output_tokens,
    };
  }
}
