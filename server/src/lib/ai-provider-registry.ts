import type { AIProviderType, AIServiceType } from "@prisma/client";
import { prisma } from "../database/db.js";
import type { AIProvider } from "./ai-provider.js";
import { GeminiProvider } from "./providers/gemini.provider.js";
import { GroqProvider } from "./providers/groq.provider.js";
import { OpenRouterProvider } from "./providers/openrouter.provider.js";
import { CodestralProvider } from "./providers/codestral.provider.js";

// ── In-memory cache: one provider instance per service ──

interface ServiceEntry {
  configId: number;
  provider: AIProvider;
  modelName: string;
}

const serviceCache = new Map<AIServiceType, ServiceEntry>();
const INIT_RETRY_DELAYS_MS = [500, 1_500, 3_000];

function wait(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

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
    default:
     
      console.warn(`[AI] Unsupported provider "${type}", falling back to Gemini`);
      return new GeminiProvider("gemini-flash-lite-latest");
  }
}

/** Load all service configs from DB into memory. Call once at server startup. */
export async function initServiceProviders(): Promise<void> {
  let lastError: unknown;
  for (let attempt = 0; attempt <= INIT_RETRY_DELAYS_MS.length; attempt++) {
    try {
      const configs = await prisma.aiServiceConfig.findMany();
      serviceCache.clear();
      for (const cfg of configs) {
        serviceCache.set(cfg.service, {
          configId: cfg.id,
          provider: createProvider(cfg.provider, cfg.modelName),
          modelName: cfg.modelName,
        });
      }
      console.log(`[AI] Loaded ${configs.length} service provider configs`);
      return;
    } catch (err) {
      lastError = err;
      const retryDelay = INIT_RETRY_DELAYS_MS[attempt];
      if (retryDelay === undefined) break;
      console.warn(
        `[AI] Failed to load service provider configs; retrying in ${retryDelay}ms`,
      );
      await wait(retryDelay);
    }
  }

  throw lastError;
}

/** Get the cached provider for a service. Falls back to Gemini if not in cache. */
export function getProviderForService(service: AIServiceType): AIProvider {
  const entry = serviceCache.get(service);
  if (entry) return entry.provider;
  // Fallback, should not happen after seed + init
  return new GeminiProvider("gemini-flash-lite-latest");
}

/** Get the DB config ID for a service (used by logger). */
export function getServiceConfigId(service: AIServiceType): number | null {
  return serviceCache.get(service)?.configId ?? null;
}

/** Get the configured model name for a service (used by logger). */
export function getServiceModelName(service: AIServiceType): string | null {
  return serviceCache.get(service)?.modelName ?? null;
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
