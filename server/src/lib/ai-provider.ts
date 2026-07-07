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
  /** Send a prompt alongside a base64-encoded inline file (e.g. PDF). Optional — only multimodal providers implement this. */
  generateWithInlinePdf?(pdfBase64: string, prompt: string): Promise<AIProviderResponse>;
}
