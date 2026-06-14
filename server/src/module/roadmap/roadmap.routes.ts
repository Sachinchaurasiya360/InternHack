import { Router } from "express";
import { authMiddleware, optionalAuthMiddleware } from "../../middleware/auth.middleware.js";
import { aiRoadmapLimiter } from "../../middleware/rate-limit.middleware.js";
import { cacheMiddleware } from "../../middleware/cache.middleware.js";
import { usageLimit } from "../../middleware/usage-limit.middleware.js";
import {
  downloadCertificate,
  getPublicCertificate,
  getPublicCertificateMeta,
  getMyCertificates,
  downloadPdf,
  enroll,
  getCommunityRoadmaps,
  getMyEnrollmentAnalytics,
  getMyEnrollmentByRoadmapSlug,
  getMyEnrollment,
  deleteMyEnrollment,
  getMyEnrollments,
  getMyEnrollmentsAnalyticsBatch,
  getRoadmap,
  getRoadmaps,
  getTopic,
  patchTopicProgress,
  postAiGenerate,
  postRecomputePace,
  updateRoadmap,
  postRegenerateSection,
  toggleShare,
} from "./roadmap.controller.js";

export const roadmapRouter = Router();

roadmapRouter.post("/ai/generate", authMiddleware, aiRoadmapLimiter, usageLimit("ROADMAP_GENERATION", "monthly"), postAiGenerate);
roadmapRouter.get("/me/enrollments", authMiddleware, getMyEnrollments);
roadmapRouter.get("/me/enrollments/analytics/batch", authMiddleware, getMyEnrollmentsAnalyticsBatch);
roadmapRouter.get("/me/enrollments/:id/analytics", authMiddleware, getMyEnrollmentAnalytics);
roadmapRouter.get("/me/enrollments/:id", authMiddleware, getMyEnrollment);
roadmapRouter.delete("/me/enrollments/:id", authMiddleware, deleteMyEnrollment);
roadmapRouter.get("/me/enrollments/:id/pdf", authMiddleware, downloadPdf);
roadmapRouter.get("/me/enrollments/:id/certificate", authMiddleware, downloadCertificate);
roadmapRouter.patch(
  "/me/enrollments/:id/topics/:topicId",
  authMiddleware,
  patchTopicProgress,
);
roadmapRouter.patch(
  "/:slug",
  authMiddleware,
  updateRoadmap,
);
roadmapRouter.post(
  "/me/enrollments/:id/recompute-pace",
  authMiddleware,
  postRecomputePace,
);

roadmapRouter.get("/", optionalAuthMiddleware, getRoadmaps);
roadmapRouter.get("/community", getCommunityRoadmaps);
roadmapRouter.get("/me/certificates", authMiddleware, getMyCertificates);
roadmapRouter.get("/certificates/:slug/:enrollmentId/meta", optionalAuthMiddleware, getPublicCertificateMeta);
roadmapRouter.get("/certificates/:slug/:enrollmentId", optionalAuthMiddleware, getPublicCertificate);
roadmapRouter.get("/:slug/enrollment", authMiddleware, getMyEnrollmentByRoadmapSlug);
roadmapRouter.get("/:slug", optionalAuthMiddleware, cacheMiddleware(600, "roadmap"), getRoadmap);
roadmapRouter.get("/:slug/topics/:topicSlug", optionalAuthMiddleware, getTopic);
roadmapRouter.post("/:slug/enroll", authMiddleware, enroll);
roadmapRouter.post("/:slug/sections/:sectionId/regenerate", authMiddleware, aiRoadmapLimiter, postRegenerateSection);
roadmapRouter.patch("/:slug/share", authMiddleware, toggleShare);