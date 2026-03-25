import "dotenv/config";
import { prisma } from "./db.js";
import type { AIServiceType, AIProviderType } from "@prisma/client";

const services: { service: AIServiceType; provider: AIProviderType; modelName: string }[] = [
  { service: "ATS_SCORE", provider: "GEMINI", modelName: "gemini-2.5-flash-lite" },
  { service: "COVER_LETTER", provider: "GEMINI", modelName: "gemini-2.5-flash-lite" },
  { service: "RESUME_GEN", provider: "GEMINI", modelName: "gemini-2.5-flash-lite" },
  { service: "LATEX_CHAT", provider: "GEMINI", modelName: "gemini-2.5-flash-lite" },
  { service: "EMAIL_CHAT", provider: "GEMINI", modelName: "gemini-2.5-flash-lite" },
];

async function seedAIProviders() {
  for (const s of services) {
    await prisma.aiServiceConfig.upsert({
      where: { service: s.service },
      create: s,
      update: { provider: s.provider, modelName: s.modelName },
    });
  }
  console.log(`Seeded ${services.length} AI service configs (all default to Gemini)`);
}

seedAIProviders()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
