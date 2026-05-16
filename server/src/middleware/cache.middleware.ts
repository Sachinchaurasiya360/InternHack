import type { Request, Response, NextFunction } from "express";
import NodeCache from "node-cache";

export const appCache = new NodeCache({ stdTTL: 300, checkperiod: 60 });

export const cacheMiddleware = (ttl: number = 300, keyPrefix: string = "cache") => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (req.method !== "GET") {
      return next();
    }
    const key = `${keyPrefix}:${req.originalUrl || req.url}`;
    const cachedResponse = appCache.get(key);

    if (cachedResponse !== undefined) {
      res.setHeader("X-Cache", "HIT");
      return res.json(cachedResponse);
    }

    const originalJson = res.json;
    res.json = function (data) {
      if (res.statusCode >= 200 && res.statusCode < 300 && !res.locals["skipCache"]) {
        appCache.set(key, data, ttl);
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
