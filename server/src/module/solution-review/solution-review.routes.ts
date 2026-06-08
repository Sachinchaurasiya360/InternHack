import { Router } from "express";
import { SolutionReviewController } from "./solution-review.controller.js";
import { authMiddleware } from "../../middleware/auth.middleware.js";
import { requireRole } from "../../middleware/role.middleware.js";
import { usageLimit } from "../../middleware/usage-limit.middleware.js";

const controller = new SolutionReviewController();

export const solutionReviewRouter = Router();

solutionReviewRouter.post("/review", authMiddleware, requireRole("STUDENT"), usageLimit("SOLUTION_REVIEW"), (req, res, next) => controller.submit(req, res, next));
solutionReviewRouter.get("/history", authMiddleware, requireRole("STUDENT"), (req, res, next) => controller.history(req, res, next));
solutionReviewRouter.get("/:id", authMiddleware, requireRole("STUDENT"), (req, res, next) => controller.detail(req, res, next));
