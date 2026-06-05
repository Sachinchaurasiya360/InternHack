import { QdrantClient } from "@qdrant/js-client-rest";
import crypto from "crypto";
import { createLogger } from "../utils/logger.js";
import type { AiGenerateInput } from "../module/roadmap/roadmap.validation.js";
import { generateEmbedding } from "./embedding.js";
import { SEMANTIC_CACHE_CONFIG } from "../config/semantic-cache.config.js";

const logger = createLogger("SemanticCache");

let client: QdrantClient | null = null;
let collectionName: string = SEMANTIC_CACHE_CONFIG.defaultCollectionName;

// ── Feature flag ──────────────────────────────────────────────────────────

export function isSemanticCacheEnabled(): boolean {
  return process.env["SEMANTIC_CACHE_ENABLED"] === "true";
}

// ── Initialization ────────────────────────────────────────────────────────

export async function initSemanticCache(): Promise<void> {
  if (!isSemanticCacheEnabled()) {
    logger.info("Semantic cache disabled (SEMANTIC_CACHE_ENABLED != true)");
    return;
  }

  const url = process.env["QDRANT_URL"];
  if (!url) {
    logger.warn("SEMANTIC_CACHE_ENABLED is true but QDRANT_URL is not set — cache will be skipped");
    return;
  }

  collectionName = process.env["QDRANT_COLLECTION_NAME"] ?? SEMANTIC_CACHE_CONFIG.defaultCollectionName;

  try {
    if (!process.env["QDRANT_API_KEY"]) {
      logger.warn("QDRANT_API_KEY is not set — requests to Qdrant Cloud will likely return 401");
    }
    client = new QdrantClient({
      url,
      apiKey: process.env["QDRANT_API_KEY"] || undefined,
    });

    // Ensure collection exists
    const { collections } = await client.getCollections();
    const exists = collections.some((c) => c.name === collectionName);

    if (!exists) {
      await client.createCollection(collectionName, {
        vectors: { size: SEMANTIC_CACHE_CONFIG.vectorSize, distance: "Cosine" },
      });
      logger.info(`Created Qdrant collection "${collectionName}"`);
    }

    logger.info(`Semantic cache initialized (collection: "${collectionName}")`);
  } catch (err) {
    logger.error("Failed to initialize semantic cache — cache will be skipped", err);
    client = null;
  }
}

// ── Build cache key ───────────────────────────────────────────────────────

export function buildCacheKey(input: AiGenerateInput): string {
  const parts = [
    input.goalDescription.trim().toLowerCase(),
    input.experienceLevel.toLowerCase(),
    input.background.toLowerCase(),
    input.goal.toLowerCase(),
    String(input.hoursPerWeek),
    [...input.preferredDays].sort().join(",").toLowerCase(),
    [...input.knownSkills].filter(Boolean).sort().join(",").toLowerCase(),
    [...input.mustInclude].filter(Boolean).sort().join(",").toLowerCase(),
    [...input.avoid].filter(Boolean).sort().join(",").toLowerCase(),
  ];
  return parts.join(" | ");
}

// ── Search + Embed (single embedding call) ────────────────────────────────

export interface SearchAndEmbedResult {
  result: unknown | null;
  embedding: number[];
}

/**
 * Embed the cache key text and search Qdrant for a semantically similar entry.
 * Always returns the embedding so it can be reused for storing on a cache miss.
 */
export async function searchAndEmbed(text: string): Promise<SearchAndEmbedResult> {
  if (!client) {
    return { result: null, embedding: [] };
  }

  const embedding = await generateEmbedding(text);

  try {
    const cutoff = new Date(
      Date.now() - SEMANTIC_CACHE_CONFIG.ttlDays * 24 * 60 * 60 * 1000
    ).toISOString();

    const hits = await client.search(collectionName, {
      vector: embedding,
      limit: 1,
      score_threshold: SEMANTIC_CACHE_CONFIG.similarityThreshold,
      filter: {
        must: [
          {
            key: "createdAt",
            range: { gte: cutoff },
          },
        ],
      },
    });

    if (hits.length > 0 && hits[0]) {
      const payload = hits[0].payload as Record<string, unknown> | undefined;
      if (payload && typeof payload["result"] === "string") {
        try {
          const parsed = JSON.parse(payload["result"] as string);
          logger.info("Semantic cache hit", { score: hits[0].score });
          return { result: parsed, embedding };
        } catch {
          logger.warn("Cached payload is not valid JSON — treating as miss");
        }
      }
    }
  } catch (err) {
    logger.error("Qdrant search failed — treating as cache miss", err);
  }

  return { result: null, embedding };
}

// ── Store in cache ────────────────────────────────────────────────────────

/**
 * Store a result in Qdrant using a pre-computed embedding (from searchAndEmbed).
 */
export async function storeInCache(
  embedding: number[],
  result: unknown,
): Promise<void> {
  if (!client) return;

  try {
    await client.upsert(collectionName, {
      wait: false,
      points: [
        {
          id: crypto.randomUUID(),
          vector: embedding,
          payload: {
            service: "AI_ROADMAP_GENERATION",
            result: JSON.stringify(result),
            createdAt: new Date().toISOString(),
          },
        },
      ],
    });
    logger.info("Stored result in semantic cache");
  } catch (err) {
    logger.error("Failed to store in semantic cache", err);
  }
}
