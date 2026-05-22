import { Router } from "express";
import { AuthController } from "./auth.controller.js";
import { AuthService } from "./auth.service.js";
import { authMiddleware } from "../../middleware/auth.middleware.js";
import rateLimit from "express-rate-limit";

const createOtpRateLimit = (max: number, message: string) => rateLimit({
  windowMs: 15 * 60 * 1000,
  max,
  message: { message },
  standardHeaders: true,
  legacyHeaders: false,
});

const verifyEmailRateLimit = createOtpRateLimit(5, "Too many attempts, please try again after 15 minutes");
const resendOtpRateLimit = createOtpRateLimit(3, "Too many resend attempts, please try again after 15 minutes");

const authService = new AuthService();
const authController = new AuthController(authService);

export const authRouter = Router();

authRouter.post("/register", (req, res) => authController.register(req, res));
authRouter.post("/login", (req, res) => authController.login(req, res));
authRouter.post("/google", (req, res) => authController.googleAuth(req, res));
authRouter.post("/verify-email", verifyEmailRateLimit, (req, res) => authController.verifyEmail(req, res));
authRouter.post("/resend-otp", resendOtpRateLimit, (req, res) => authController.resendOtp(req, res));
authRouter.post("/forgot-password", (req, res) => authController.forgotPassword(req, res));
authRouter.post("/reset-password", (req, res) => authController.resetPassword(req, res));
authRouter.post("/logout", (req, res) => authController.logout(req, res));
authRouter.get("/me", authMiddleware, (req, res) => authController.getProfile(req, res));
authRouter.put("/me", authMiddleware, (req, res) => authController.updateProfile(req, res));
authRouter.post("/import-github", authMiddleware, (req, res) => authController.importGitHub(req, res));
authRouter.get("/profile/:id", authMiddleware, (req, res) => authController.getPublicProfile(req, res));
