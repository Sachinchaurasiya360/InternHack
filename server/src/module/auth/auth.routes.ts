import { Router } from "express";
import { AuthController } from "./auth.controller.js";
import { AuthService } from "./auth.service.js";
import { authMiddleware } from "../../middleware/auth.middleware.js";

const authService = new AuthService();
const authController = new AuthController(authService);

export const authRouter = Router();

authRouter.post("/register", (req, res) => authController.register(req, res));
authRouter.post("/login", (req, res) => authController.login(req, res));
authRouter.post("/google", (req, res) => authController.googleAuth(req, res));
authRouter.get("/me", authMiddleware, (req, res) => authController.getProfile(req, res));
