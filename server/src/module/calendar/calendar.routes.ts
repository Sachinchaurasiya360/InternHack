import { Router } from "express";
import { authMiddleware } from "../../middleware/auth.middleware.js";
import { requireRole } from "../../middleware/role.middleware.js";
import { calendarController } from "./calendar.controller.js";

const router = Router();

router.use(authMiddleware, requireRole("STUDENT"));

router.get("/opportunities", calendarController.getOpportunities);
router.get("/opportunities/export.ics", calendarController.exportIcs);

export { router as calendarRouter };
