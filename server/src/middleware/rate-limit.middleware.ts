import rateLimit from "express-rate-limit";
import { createRateLimitStore } from "../utils/rate-limit-store.js";

// Rate limiting for AI roadmap generation to prevent abuse and API quota drains
export const aiRoadmapLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour window
  max: 5, // Limit each IP or User to 5 requests per window
  standardHeaders: true,
  legacyHeaders: false,
  store: createRateLimitStore("ai-roadmap"),
  keyGenerator: (req) => {
    if (req.user?.id) {
      return `user_${req.user.id}`;
    }
    return req.ip || "unknown_ip";
  },
  message: { 
    message: "Too many AI roadmap generation requests. Please try again later."
  },
});

export const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  store: createRateLimitStore("contact"),
  keyGenerator: (req) => {
    return req.ip || "unknown_ip";
  },
  message: {
    message: "Too many contact submissions. Please try again later."
  },
});

export const githubSyncLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  store: createRateLimitStore("github-sync"),
  keyGenerator: (req) => {
    if (req.user?.id) {
      return `user_${req.user.id}`;
    }
    return req.ip || "unknown_ip";
  },
  message: {
    message: "Too many GitHub sync requests. Please try again later."
  },
});
