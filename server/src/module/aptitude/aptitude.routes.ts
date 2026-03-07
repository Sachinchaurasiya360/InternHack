import { Router } from "express";
import { AptitudeController } from "./aptitude.controller.js";
import { AptitudeService } from "./aptitude.service.js";
import { authMiddleware, optionalAuthMiddleware } from "../../middleware/auth.middleware.js";
import { requireRole } from "../../middleware/role.middleware.js";

const service = new AptitudeService();
const controller = new AptitudeController(service);

export const aptitudeRouter = Router();

// Student-protected routes
aptitudeRouter.post("/questions/:id/answer", authMiddleware, requireRole("STUDENT"), (req, res, next) => controller.submitAnswer(req, res, next));
aptitudeRouter.get("/progress", authMiddleware, requireRole("STUDENT"), (req, res, next) => controller.getProgress(req, res, next));

// Public routes (with optional auth for progress tracking)
aptitudeRouter.get("/categories", optionalAuthMiddleware, (req, res, next) => controller.getCategories(req, res, next));
aptitudeRouter.get("/topics/:slug", optionalAuthMiddleware, (req, res, next) => controller.getTopicQuestions(req, res, next));
aptitudeRouter.get("/companies", optionalAuthMiddleware, (req, res, next) => controller.getCompanies(req, res, next));
aptitudeRouter.get("/companies/:name", optionalAuthMiddleware, (req, res, next) => controller.getCompanyQuestions(req, res, next));
