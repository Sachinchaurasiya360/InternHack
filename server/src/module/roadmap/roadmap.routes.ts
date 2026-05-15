import { Router } from "express";
import { authMiddleware, optionalAuthMiddleware } from "../../middleware/auth.middleware.js";
import { aiRoadmapLimiter } from "../../middleware/rate-limit.middleware.js";
import { cacheMiddleware } from "../../middleware/cache.middleware.js";
import {
  downloadCertificate,
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

roadmapRouter.post("/ai/generate", authMiddleware, aiRoadmapLimiter, postAiGenerate);
roadmapRouter.get("/me/enrollments", authMiddleware, getMyEnrollments);
roadmapRouter.get("/me/enrollments/:id", authMiddleware, getMyEnrollment);
roadmapRouter.get("/me/enrollments/:id/certificate", authMiddleware, downloadCertificate);
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

roadmapRouter.get("/", getRoadmaps);
roadmapRouter.get("/:slug", optionalAuthMiddleware, cacheMiddleware(600, "roadmap"), getRoadmap);
roadmapRouter.get("/:slug/topics/:topicSlug", optionalAuthMiddleware, getTopic);
roadmapRouter.post("/:slug/enroll", authMiddleware, enroll);
