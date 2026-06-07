import { GoogleGenerativeAI } from "@google/generative-ai";

export const EMBEDDING_VECTOR_SIZE = 768;

let genAI: GoogleGenerativeAI | null = null;

function getGenAI(): GoogleGenerativeAI {
  if (!genAI) {
    const apiKey = process.env["GEMINI_API_KEY"];
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY is not set — embedding generation will fail");
    }
    genAI = new GoogleGenerativeAI(apiKey);
  }
  return genAI;
}

export async function generateEmbedding(text: string): Promise<number[]> {
  const model = getGenAI().getGenerativeModel({ model: "gemini-embedding-2" });
  const result = await model.embedContent({
    content: { role: "user", parts: [{ text }] },
    outputDimensionality: EMBEDDING_VECTOR_SIZE,
  } as Parameters<typeof model.embedContent>[0] & { outputDimensionality?: number });
  return result.embedding.values;
}
