import { Router } from "express";
import { authMiddleware } from "../../middleware/auth.middleware.js";
import { requireRole } from "../../middleware/role.middleware.js";
import { applicationTrackerController } from "./application-tracker.controller.js";

const router = Router();

router.use(authMiddleware, requireRole("STUDENT"));

router.get("/", applicationTrackerController.list);
router.get("/stats", applicationTrackerController.stats);
router.post("/", applicationTrackerController.create);
router.patch("/:id", applicationTrackerController.update);
router.delete("/:id", applicationTrackerController.delete);
router.post("/:id/events", applicationTrackerController.addEvent);

export { router as applicationTrackerRouter };

