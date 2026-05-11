import { Router } from "express";
import { authMiddleware, optionalAuthMiddleware } from "../../middleware/auth.middleware.js";
import { authMiddleware } from "../../middleware/auth.middleware.js";
import { aiRoadmapLimiter } from "../../middleware/rate-limit.middleware.js";
import {
  downloadPdf,
  enroll,
  getMyEnrollment,
  getMyEnrollments,
  getRoadmap,
  getRoadmaps,
  getTopic,
  patchTopicProgress,
  postAiGenerate,
  postRecomputePace,
} from "./roadmap.controller.js";

export const roadmapRouter = Router();

// ── AI generation (registered BEFORE /:slug to avoid conflicts) ──────────
roadmapRouter.post("/ai/generate", authMiddleware, aiRoadmapLimiter, postAiGenerate);

// ── Authenticated "me" routes (also BEFORE /:slug) ────────────────────────
roadmapRouter.get("/me/enrollments", authMiddleware, getMyEnrollments);
roadmapRouter.get("/me/enrollments/:id", authMiddleware, getMyEnrollment);
roadmapRouter.get("/me/enrollments/:id/pdf", authMiddleware, downloadPdf);
roadmapRouter.patch(
  "/me/enrollments/:id/topics/:topicId",
  authMiddleware,
  patchTopicProgress,
);
roadmapRouter.post(
  "/me/enrollments/:id/recompute-pace",
  authMiddleware,
  postRecomputePace,
);

// ── Public ────────────────────────────────────────────────────────────────
roadmapRouter.get("/", getRoadmaps);
roadmapRouter.get("/:slug", optionalAuthMiddleware, getRoadmap);
roadmapRouter.get("/:slug/topics/:topicSlug", optionalAuthMiddleware, getTopic);


// ── Auth: enrollment ──────────────────────────────────────────────────────
roadmapRouter.post("/:slug/enroll", authMiddleware, enroll);
