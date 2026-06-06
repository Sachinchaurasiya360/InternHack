import { Redis } from "ioredis";

/**
 * Shared Redis client singleton.
 *
 * When REDIS_URL is set the client connects to the given Redis instance.
 * Otherwise the export is `null` and consumers fall back to in-memory stores.
 */
let redis: Redis | null = null;

const url = process.env["REDIS_URL"];

if (url) {
  redis = new Redis(url, {
    maxRetriesPerRequest: 3,
    enableReadyCheck: true,
    lazyConnect: false,
  });

  redis.on("connect", () => console.log("[Redis] Connected"));
  redis.on("error", (err: Error) => console.error("[Redis] Connection error:", err.message));
} else {
  console.warn("[Redis] ⚠ REDIS_URL not set — rate limiting will use per-process in-memory stores. This means rate limits are NOT shared across server instances behind a load balancer.");
}

export { redis };
