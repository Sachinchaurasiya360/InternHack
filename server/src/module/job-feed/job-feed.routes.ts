import { Router } from "express";
import { authMiddleware } from "../../middleware/auth.middleware.js";
import { requireRole } from "../../middleware/role.middleware.js";
import { jobFeedController } from "./job-feed.controller.js";

const router = Router();

router.use(authMiddleware, requireRole("STUDENT"));

router.get("/",                          jobFeedController.getFeed);
router.get("/preferences",              jobFeedController.getPreferences);
router.put("/preferences",              jobFeedController.updatePreferences);
router.post("/:matchId/dismiss",        jobFeedController.dismiss);
router.post("/:matchId/save",           jobFeedController.save);
router.post("/:matchId/seen",           jobFeedController.markSeen);
router.get("/saved",                    jobFeedController.getSaved);
router.get("/stats",                    jobFeedController.getStats);

export { router as jobFeedRouter };
