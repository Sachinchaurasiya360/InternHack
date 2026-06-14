import { Router } from "express";
import { AuthController } from "./auth.controller.js";
import { AuthService } from "./auth.service.js";
import { authMiddleware, optionalAuthMiddleware } from "../../middleware/auth.middleware.js";
import { usageLimit } from "../../middleware/usage-limit.middleware.js";
import rateLimit from "express-rate-limit";
import { createRateLimitStore } from "../../utils/rate-limit-store.js";
import {
  validateBody,
  registerSchema,
  loginSchema,
  googleAuthSchema,
  verifyEmailSchema,
  resendOtpSchema,
  forgotPasswordSchema,
  resetPasswordSchema,
  updateProfileSchema,
  importGitHubSchema,
  deleteAccountSchema,
} from "./auth.validation.js";

// ---------------------------------------------------------------------------
// Rate limiters
// ---------------------------------------------------------------------------

const createOtpRateLimit = (max: number, message: string, prefix: string) => rateLimit({
  windowMs: 15 * 60 * 1000,
  max,
  message: { message },
  standardHeaders: true,
  legacyHeaders: false,
  store: createRateLimitStore(prefix),
});

const verifyEmailRateLimit = createOtpRateLimit(5, "Too many attempts, please try again after 15 minutes", "verify-email");
const resendOtpRateLimit = createOtpRateLimit(3, "Too many resend attempts, please try again after 15 minutes", "resend-otp");

// Recovery endpoints are unauthenticated – stricter limits prevent OTP
// brute-forcing and SMTP quota exhaustion.
const forgotPasswordRateLimit = createOtpRateLimit(3, "Too many password reset requests, please try again after 15 minutes", "forgot-password");
const resetPasswordRateLimit = createOtpRateLimit(5, "Too many password reset attempts, please try again after 15 minutes", "reset-password");

// Profile enumeration protection: 10 requests per minute per IP
const publicProfileRateLimit = rateLimit({
  windowMs: 60 * 1000,
  max: 10,
  message: { message: "Too many requests, please slow down" },
  standardHeaders: true,
  legacyHeaders: false,
  store: createRateLimitStore("public-profile"),
});

// ---------------------------------------------------------------------------
// Routes
// ---------------------------------------------------------------------------

const authService = new AuthService();
const authController = new AuthController(authService);

export const authRouter = Router();

authRouter.post("/register", validateBody(registerSchema), (req, res) => authController.register(req, res));
authRouter.post("/login", validateBody(loginSchema), (req, res) => authController.login(req, res));
authRouter.post("/google", validateBody(googleAuthSchema), (req, res) => authController.googleAuth(req, res));
authRouter.post("/verify-email", verifyEmailRateLimit, validateBody(verifyEmailSchema), (req, res) => authController.verifyEmail(req, res));
authRouter.post("/resend-otp", resendOtpRateLimit, validateBody(resendOtpSchema), (req, res) => authController.resendOtp(req, res));
authRouter.post("/forgot-password", forgotPasswordRateLimit, validateBody(forgotPasswordSchema), (req, res) => authController.forgotPassword(req, res));
authRouter.post("/reset-password", resetPasswordRateLimit, validateBody(resetPasswordSchema), (req, res) => authController.resetPassword(req, res));
authRouter.post("/logout", (req, res) => authController.logout(req, res));
authRouter.get("/me", authMiddleware, (req, res) => authController.getProfile(req, res));
authRouter.put("/me", authMiddleware, validateBody(updateProfileSchema), (req, res) => authController.updateProfile(req, res));
authRouter.post("/import-github", authMiddleware, validateBody(importGitHubSchema), (req, res) => authController.importGitHub(req, res));
authRouter.get("/github-stats", authMiddleware, usageLimit("GITHUB_STATS"), (req, res) => authController.getGitHubStats(req, res));
authRouter.get("/profile/:identifier", optionalAuthMiddleware, publicProfileRateLimit, (req, res) => authController.getPublicProfile(req, res));
authRouter.delete("/account", authMiddleware, validateBody(deleteAccountSchema), (req, res) => authController.deleteAccount(req, res));
