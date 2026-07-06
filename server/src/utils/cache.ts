interface CacheEntry {
  val: string;
  exp: number;
}

const store = new Map<string, CacheEntry>();
const MAX_ENTRIES = 10_000;
const SWEEP_INTERVAL_MS = 60_000;

function sweepExpired(): void {
  const now = Date.now();
  for (const [key, entry] of store) {
    if (now > entry.exp) store.delete(key);
  }
}

const sweepTimer = setInterval(sweepExpired, SWEEP_INTERVAL_MS);
if (sweepTimer.unref) sweepTimer.unref();

export async function cacheGet<T>(key: string): Promise<T | null> {
  const entry = store.get(key);
  if (!entry || Date.now() > entry.exp) {
    store.delete(key);
    return null;
  }
  return JSON.parse(entry.val) as T;
}

export async function cacheSet(key: string, value: unknown, ttlSeconds: number): Promise<void> {
  if (store.size >= MAX_ENTRIES && !store.has(key)) {
    sweepExpired();
    if (store.size >= MAX_ENTRIES) return;
  }
  store.set(key, { val: JSON.stringify(value), exp: Date.now() + ttlSeconds * 1000 });
}

export async function cacheDel(key: string): Promise<void> {
  store.delete(key);
}

export async function cacheDelPattern(prefix: string): Promise<void> {
  for (const key of store.keys()) {
    if (key.startsWith(prefix)) store.delete(key);
  }
}
