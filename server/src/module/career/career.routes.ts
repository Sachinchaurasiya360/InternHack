import { Router } from "express";
import { CareerController } from "./career.controller.js";
import { CareerService } from "./career.service.js";
import { authMiddleware, optionalAuthMiddleware } from "../../middleware/auth.middleware.js";
import { requireRole } from "../../middleware/role.middleware.js";

const careerService = new CareerService();
const careerController = new CareerController(careerService);

export const careerRouter = Router();

// Student-protected routes (must come before /:slug to avoid param conflict)
careerRouter.post("/enroll", authMiddleware, requireRole("STUDENT"), (req, res, next) => careerController.enroll(req, res, next));
careerRouter.delete("/enroll/:careerId", authMiddleware, requireRole("STUDENT"), (req, res, next) => careerController.unenroll(req, res, next));
careerRouter.get("/my-paths", authMiddleware, requireRole("STUDENT"), (req, res, next) => careerController.getMyPaths(req, res, next));
careerRouter.get("/my-paths/:slug", authMiddleware, requireRole("STUDENT"), (req, res, next) => careerController.getMyPathDetail(req, res, next));
careerRouter.post("/skills/:skillId/toggle", authMiddleware, requireRole("STUDENT"), (req, res, next) => careerController.toggleSkill(req, res, next));

// Public routes
careerRouter.get("/", (req, res, next) => careerController.listCareers(req, res, next));
careerRouter.get("/:slug", optionalAuthMiddleware, (req, res, next) => careerController.getCareerBySlug(req, res, next));
