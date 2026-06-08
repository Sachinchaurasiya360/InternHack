import { redis } from "../config/redis.js";

interface FallbackEntry {
  val: string;
  exp: number;
}

const fallback = new Map<string, FallbackEntry>();

export async function cacheGet<T>(key: string): Promise<T | null> {
  if (redis) {
    const raw = await redis.get(key);
    return raw ? (JSON.parse(raw) as T) : null;
  }
  const entry = fallback.get(key);
  if (!entry || Date.now() > entry.exp) {
    fallback.delete(key);
    return null;
  }
  return JSON.parse(entry.val) as T;
}

export async function cacheSet(key: string, value: unknown, ttlSeconds: number): Promise<void> {
  const serialized = JSON.stringify(value);
  if (redis) {
    await redis.set(key, serialized, "EX", ttlSeconds);
    return;
  }
  fallback.set(key, { val: serialized, exp: Date.now() + ttlSeconds * 1000 });
}

export async function cacheDel(key: string): Promise<void> {
  if (redis) {
    await redis.del(key);
    return;
  }
  fallback.delete(key);
}

export async function cacheDelPattern(prefix: string): Promise<void> {
  if (redis) {
    let cursor = "0";
    do {
      const [next, keys] = await redis.scan(cursor, "MATCH", `${prefix}*`, "COUNT", 100);
      cursor = next;
      if (keys.length > 0) await redis.del(...keys);
    } while (cursor !== "0");
    return;
  }
  for (const key of fallback.keys()) {
    if (key.startsWith(prefix)) fallback.delete(key);
  }
}
