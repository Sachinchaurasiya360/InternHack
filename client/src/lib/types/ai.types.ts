export type AIProviderType = "GEMINI" | "GROQ" | "OPENROUTER" | "CODESTRAL" | "CLAUDE";
export type AIServiceType = "ATS_SCORE" | "COVER_LETTER" | "RESUME_GEN" | "LATEX_CHAT" | "EMAIL_CHAT";

export interface AIServiceConfig {
  id: number;
  service: AIServiceType;
  provider: AIProviderType;
  modelName: string;
  updatedAt: string;
}

export interface AIRequestStats {
  byProvider: { provider: AIProviderType; count: number; avgLatencyMs: number }[];
  byService: { service: AIServiceType; count: number }[];
  totalRequests: number;
  avgLatencyMs: number;
  errorCount: number;
  errorRate: number;
}

// LaTeX Chat
export interface LatexChatMessage {
  role: "user" | "assistant";
  content: string;
  updatedLatex?: string;
}

export interface LatexChatResponse {
  reply: string;
  updatedLatex?: string;
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
}
