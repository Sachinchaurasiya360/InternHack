import { Router } from "express";
import { BadgeController } from "./badge.controller.js";
import { BadgeService } from "./badge.service.js";
import { authMiddleware } from "../../middleware/auth.middleware.js";
import { requireRole } from "../../middleware/role.middleware.js";

const badgeService = new BadgeService();
const badgeController = new BadgeController(badgeService);

export const badgeRouter = Router();

// ==================== PUBLIC ROUTES (no auth) ====================

// GET / - list active badges
badgeRouter.get("/", (req, res, next) => badgeController.listBadges(req, res, next));

// GET /student/:id - student's earned badges
badgeRouter.get("/student/:id", (req, res, next) => badgeController.getStudentBadgesById(req, res, next));

// ==================== STUDENT ROUTES ====================

// GET /my - my earned badges
badgeRouter.get("/my", authMiddleware, requireRole("STUDENT"), (req, res, next) => badgeController.getMyBadges(req, res, next));

// POST /check - trigger badge check
badgeRouter.post("/check", authMiddleware, requireRole("STUDENT"), (req, res, next) => badgeController.checkBadges(req, res, next));

// ==================== ADMIN ROUTES ====================

// GET /admin - list all badges with pagination
badgeRouter.get("/admin", authMiddleware, requireRole("ADMIN"), (req, res, next) => badgeController.listAllBadges(req, res, next));

// POST /admin - create badge
badgeRouter.post("/admin", authMiddleware, requireRole("ADMIN"), (req, res, next) => badgeController.createBadge(req, res, next));

// PUT /admin/:id - update badge
badgeRouter.put("/admin/:id", authMiddleware, requireRole("ADMIN"), (req, res, next) => badgeController.updateBadge(req, res, next));

// DELETE /admin/:id - delete badge
badgeRouter.delete("/admin/:id", authMiddleware, requireRole("ADMIN"), (req, res, next) => badgeController.deleteBadge(req, res, next));
