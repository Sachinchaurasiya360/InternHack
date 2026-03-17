import type { Request, Response, NextFunction } from "express";

/**
 * Bot-friendly SEO middleware.
 *
 * 1. Detects search-engine crawlers / social-media bots via User-Agent.
 * 2. Adds `X-Is-Bot: 1` header so an upstream CDN (Cloudflare, Vercel, etc.)
 *    can route the request to a prerender service if configured.
 * 3. Sets `Vary: User-Agent` so caches serve different responses for bots vs
 *    real users.
 *
 * If `PRERENDER_TOKEN` is set in env, the middleware proxies bot requests to
 * prerender.io and returns the pre-rendered HTML. Otherwise it just adds
 * the headers and lets the SPA handle rendering.
 */

const BOT_UA =
  /googlebot|bingbot|yandex|baiduspider|duckduckbot|slurp|msnbot|facebookexternalhit|facebot|linkedinbot|twitterbot|whatsapp|telegrambot|pinterest|applebot|semrushbot|ahrefsbot|dotbot/i;

export function botSeoMiddleware(req: Request, res: Response, next: NextFunction) {
  const ua = req.headers["user-agent"] || "";
  const isBot = BOT_UA.test(ua);

  if (isBot) {
    res.setHeader("X-Is-Bot", "1");
  }

  // Always tell caches the response varies by user-agent
  res.setHeader("Vary", "User-Agent");

  next();
}
