import { rateLimit, ipKeyGenerator } from "express-rate-limit";

// Rate limiting for AI roadmap generation to prevent abuse and API quota drains
export const aiRoadmapLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour window
  max: 5, // Limit each IP or User to 5 requests per window
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: (req) => {
    // Prefer user ID if authenticated, fallback to IP
    if (req.user?.id) {
      return `user_${req.user.id}`;
    }
    return ipKeyGenerator(req.ip || "unknown_ip");
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
  keyGenerator: (req) => {
    return ipKeyGenerator(req.ip || "unknown_ip");
  },
  message: {
    message: "Too many contact submissions. Please try again later."
  },
});

export const authIpKeyGenerator = (req: any): string => {
  return ipKeyGenerator(req.ip || "unknown_ip");
};

export const authIpLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: authIpKeyGenerator,
  message: {
    message: "Too many login attempts from this network, please try again later"
  },
});

export const authEmailKeyGenerator = (req: any): string => {
  const email = req.body && typeof req.body === "object" && typeof req.body.email === "string"
    ? req.body.email.trim().toLowerCase()
    : "";
  return email ? `email:${email}` : `ip:${ipKeyGenerator(req.ip || "unknown_ip")}`;
};

export const authEmailSkip = (req: any): boolean => {
  const isLoginOrForgotPassword = req.originalUrl.includes("login") || req.originalUrl.includes("forgot-password") || req.originalUrl.includes("reset-password");
  if (!isLoginOrForgotPassword) return true;
  const email = req.body && typeof req.body === "object" && typeof req.body.email === "string" ? req.body.email : "";
  return !email;
};

export const authEmailLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: authEmailKeyGenerator,
  message: {
    message: "Too many login attempts for this account, please try again later"
  },
  skip: authEmailSkip,
});

