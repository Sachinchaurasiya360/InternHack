import { GoogleGenerativeAI } from "@google/generative-ai";

export const EMBEDDING_VECTOR_SIZE = 768;

const genAI = new GoogleGenerativeAI(process.env["GEMINI_API_KEY"]!);

export async function generateEmbedding(text: string): Promise<number[]> {
  const model = genAI.getGenerativeModel({ model: "gemini-embedding-001" });
  const result = await model.embedContent({
    content: { role: "user", parts: [{ text }] },
    outputDimensionality: EMBEDDING_VECTOR_SIZE,
  } as Parameters<typeof model.embedContent>[0] & { outputDimensionality?: number });
  return result.embedding.values;
}
