import type { AIProviderType, AIServiceType } from "@prisma/client";
import { prisma } from "../database/db.js";
import type { AIProvider } from "./ai-provider.js";
import { GeminiProvider } from "./providers/gemini.provider.js";
import { GroqProvider } from "./providers/groq.provider.js";
import { OpenRouterProvider } from "./providers/openrouter.provider.js";
import { CodestralProvider } from "./providers/codestral.provider.js";
import { ClaudeProvider } from "./providers/claude.provider.js";

// ── In-memory cache: one provider instance per service ──

interface ServiceEntry {
  configId: number;
  provider: AIProvider;
  modelName: string;
}

const serviceCache = new Map<AIServiceType, ServiceEntry>();

function createProvider(type: AIProviderType, modelName: string): AIProvider {
  switch (type) {
    case "GEMINI":
      return new GeminiProvider(modelName);
    case "GROQ":
      return new GroqProvider(modelName);
    case "OPENROUTER":
      return new OpenRouterProvider(modelName);
    case "CODESTRAL":
      return new CodestralProvider(modelName);
    case "CLAUDE":
      return new ClaudeProvider(modelName);
  }
}

/** Load all service configs from DB into memory. Call once at server startup. */
export async function initServiceProviders(): Promise<void> {
  const configs = await prisma.aiServiceConfig.findMany();
  for (const cfg of configs) {
    serviceCache.set(cfg.service, {
      configId: cfg.id,
      provider: createProvider(cfg.provider, cfg.modelName),
      modelName: cfg.modelName,
    });
  }
  console.log(`[AI] Loaded ${configs.length} service provider configs`);
}

/** Get the cached provider for a service. Falls back to Gemini if not in cache. */
export function getProviderForService(service: AIServiceType): AIProvider {
  const entry = serviceCache.get(service);
  if (entry) return entry.provider;
  // Fallback, should not happen after seed + init
  return new GeminiProvider("gemini-2.5-flash-lite");
}

/** Get the DB config ID for a service (used by logger). */
export function getServiceConfigId(service: AIServiceType): number | null {
  return serviceCache.get(service)?.configId ?? null;
}

/** Switch a specific service to a different provider/model. Updates DB + refreshes cache. */
export async function switchServiceProvider(
  service: AIServiceType,
  providerType: AIProviderType,
  modelName: string,
): Promise<void> {
  const updated = await prisma.aiServiceConfig.update({
    where: { service },
    data: { provider: providerType, modelName },
  });
  serviceCache.set(service, {
    configId: updated.id,
    provider: createProvider(providerType, modelName),
    modelName,
  });
}
