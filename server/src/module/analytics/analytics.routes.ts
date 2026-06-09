import { Router } from "express";
import { trackContentView, getLearnAnalytics, getUnderperformingItems } from "./analytics.controller.js";
import { optionalAuthMiddleware, authMiddleware } from "../../middleware/auth.middleware.js";
import { requireRole } from "../../middleware/role.middleware.js";

const router = Router();

router.post("/track", optionalAuthMiddleware, trackContentView);
router.get("/learn-analytics", authMiddleware, requireRole("ADMIN"), getLearnAnalytics);
router.get("/underperforming", authMiddleware, requireRole("ADMIN"), getUnderperformingItems);

export default router;
