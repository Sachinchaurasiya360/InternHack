import type { AIProviderType } from "@prisma/client";

export interface AIProviderResponse {
  text: string;
  inputTokens?: number | undefined;
  outputTokens?: number | undefined;
  latencyMs: number;
}

export interface AIProvider {
  readonly providerType: AIProviderType;
  generateText(prompt: string): Promise<AIProviderResponse>;
}
