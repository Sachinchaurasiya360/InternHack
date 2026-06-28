import { Router } from "express";
import { PerformanceController } from "./performance.controller.js";
import { PerformanceService } from "./performance.service.js";
import { authMiddleware } from "../../middleware/auth.middleware.js";
import { requirePermission } from "../../middleware/permission.middleware.js";

const performanceService = new PerformanceService();
const performanceController = new PerformanceController(performanceService);

export const performanceRouter = Router();

performanceRouter.use(authMiddleware);

performanceRouter.post("/reviews", requirePermission("PERFORMANCE_MANAGE", "HR_ADMIN"), (req, res) => performanceController.createReview(req, res));
performanceRouter.get("/reviews/my", requirePermission("PERFORMANCE_VIEW", "HR_READ"), (req, res) => performanceController.getMyReviews(req, res));
performanceRouter.get("/reviews/team", requirePermission("PERFORMANCE_MANAGE", "HR_READ"), (req, res) => performanceController.getTeamReviews(req, res));
performanceRouter.get("/reviews/:id", requirePermission("PERFORMANCE_VIEW", "HR_READ"), (req, res) => performanceController.getById(req, res));
performanceRouter.put("/reviews/:id", requirePermission("PERFORMANCE_VIEW", "PERFORMANCE_MANAGE"), (req, res) => performanceController.update(req, res));
performanceRouter.patch("/reviews/:id/submit", requirePermission("PERFORMANCE_VIEW", "PERFORMANCE_MANAGE"), (req, res) => performanceController.submitReview(req, res));
