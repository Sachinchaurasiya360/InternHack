import { EMBEDDING_VECTOR_SIZE } from "../lib/embedding.js";

export const SEMANTIC_CACHE_CONFIG = {
  vectorSize: EMBEDDING_VECTOR_SIZE,
  similarityThreshold: 0.95,
  defaultCollectionName: "ai_prompt_cache",
  ttlDays: parseInt(process.env["SEMANTIC_CACHE_TTL_DAYS"] ?? "30", 10),
} as const;
