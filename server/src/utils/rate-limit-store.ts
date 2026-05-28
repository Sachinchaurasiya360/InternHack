import type { Store } from "express-rate-limit";
import { RedisStore } from "rate-limit-redis";
import { redis } from "../config/redis.js";

/**
 * Returns a RedisStore for express-rate-limit when REDIS_URL is configured,
 * or `undefined` to fall back to the default in-memory MemoryStore.
 *
 * The prefix isolates each limiter's counters so they don't collide in Redis.
 */
export function createRateLimitStore(prefix: string): Store | undefined {
  if (!redis) return undefined;

  return new RedisStore({
    // Using ioredis's `call` method for raw Redis commands
    sendCommand: (...args: string[]) => redis!.call(args[0], ...args.slice(1)) as any,
    prefix: `rl:${prefix}:`,
  });
}
