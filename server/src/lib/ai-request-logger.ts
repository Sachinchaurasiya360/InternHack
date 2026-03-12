import type { AIServiceType } from "@prisma/client";
import { prisma } from "../database/db.js";
import type { AIProviderResponse } from "./ai-provider.js";
import { getProviderForService, getServiceConfigId } from "./ai-provider-registry.js";

/** Fire-and-forget: log an AI request to the database. */
export function logAIRequest(
  service: AIServiceType,
  response: AIProviderResponse,
  success: boolean,
  errorMessage?: string,
  userId?: number,
): void {
  const provider = getProviderForService(service);
  const configId = getServiceConfigId(service);
  if (!configId) return;

  prisma.aiRequestLog
    .create({
      data: {
        serviceConfigId: configId,
        service,
        providerName: provider.providerType,
        modelName: provider.providerType, // will use the modelName from cache
        latencyMs: response.latencyMs,
        inputTokens: response.inputTokens ?? null,
        outputTokens: response.outputTokens ?? null,
        success,
        errorMessage: errorMessage ?? null,
        userId: userId ?? null,
      },
    })
    .catch((err) => {
      console.error("[AI Logger] Failed to log request:", err);
    });
}
