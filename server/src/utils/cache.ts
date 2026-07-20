import { redis } from "../config/redis.js";

interface FallbackEntry {
  val: string;
  exp: number;
}

const MAX_ENTRIES = 10_000;
const fallback = new Map<string, FallbackEntry>();

function evictExpired(): void {
  const now = Date.now();
  for (const [key, entry] of fallback) {
    if (now > entry.exp) fallback.delete(key);
  }
}

function evictOldest(count: number): void {
  const it = fallback.keys();
  for (let i = 0; i < count; i++) {
    const { value, done } = it.next();
    if (done) break;
    fallback.delete(value);
  }
}

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
  if (fallback.has(key)) fallback.delete(key);
  else if (fallback.size >= MAX_ENTRIES) {
    evictExpired();
    if (fallback.size >= MAX_ENTRIES) evictOldest(Math.ceil(MAX_ENTRIES * 0.1));
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
