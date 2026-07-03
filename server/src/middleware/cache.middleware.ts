import type { Request, Response, NextFunction } from "express";
import NodeCache from "node-cache";
import { getCacheConfig } from "../config/cache-config.js";

// Initialize cache with reasonable defaults for automatic cleanup
export const appCache = new NodeCache({ stdTTL: 300, checkperiod: 60 });

/**
 * Cache middleware with endpoint-specific TTL configuration.
 * Different endpoints have different cache freshness requirements:
 * - Real-time data (leaderboard): 60 seconds
 * - User-specific data: 5 minutes
 * - Rarely changing data (FAQs): 24 hours
 */
export const cacheMiddleware = (ttl?: number, keyPrefix?: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (req.method !== "GET") {
      return next();
    }

    // Use explicit TTL/key if provided (backward-compat), otherwise use config
    const cacheConfig = ttl !== undefined
      ? { ttl, key: keyPrefix ?? "cache", private: false }
      : getCacheConfig(req.originalUrl || req.url);

    // Don't cache private (user-specific) endpoints unless authenticated
    if (cacheConfig.private && !req.user) {
      return next();
    }

    // Include user ID in cache key for authenticated requests to prevent
    // data leakage between users with identical endpoints but different auth context
    let key = cacheConfig.key;
    if (req.user?.id) {
      key += `:user:${req.user.id}`;
    }
    key += `:${req.originalUrl || req.url}`;

    const cachedResponse = appCache.get(key);

    if (cachedResponse !== undefined) {
      res.setHeader("X-Cache", "HIT");
      return res.json(cachedResponse);
    }

    const originalJson = res.json;
    res.json = function (data) {
      if (res.statusCode >= 200 && res.statusCode < 300 && !res.locals["skipCache"]) {
        appCache.set(key, data, cacheConfig.ttl);
      }
      res.setHeader("X-Cache", "MISS");
      return originalJson.call(this, data);
    };

    next();
  };
};

export const clearCache = (pattern: string) => {
  const keys = appCache.keys();
  const matchedKeys = keys.filter((key) => key.startsWith(pattern));
  if (matchedKeys.length > 0) {
    appCache.del(matchedKeys);
    console.log(`[Cache] Cleared ${matchedKeys.length} keys matching: ${pattern}`);
  }
};
