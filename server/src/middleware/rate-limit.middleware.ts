import rateLimit from "express-rate-limit";

// Rate limiting for AI roadmap generation to prevent abuse and API quota drains
export const aiRoadmapLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour window
  max: 5, // Limit each IP or User to 5 requests per window
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: (req) => {
    // Prefer user ID if authenticated, fallback to IP
    const defaultIp = req.ip || "unknown_ip";
    const user = (req as any).user;
    if (user && user.id) {
      return `user_${user.id}`;
    }
    return defaultIp;
  },
  message: { 
    message: "Too many AI roadmap generation requests. Please try again later."
  },
});
