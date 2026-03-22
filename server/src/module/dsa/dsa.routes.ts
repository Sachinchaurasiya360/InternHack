import { Router } from "express";
import { DsaController } from "./dsa.controller.js";
import { DsaService } from "./dsa.service.js";
import { authMiddleware, optionalAuthMiddleware } from "../../middleware/auth.middleware.js";
import { requireRole } from "../../middleware/role.middleware.js";
import { usageLimit } from "../../middleware/usage-limit.middleware.js";

const dsaService = new DsaService();
const dsaController = new DsaController(dsaService);

export const dsaRouter = Router();

// Student-protected routes
dsaRouter.post("/problems/:problemId/toggle", authMiddleware, requireRole("STUDENT"), (req, res, next) => dsaController.toggleProblem(req, res, next));
dsaRouter.put("/problems/:problemId/notes", authMiddleware, requireRole("STUDENT"), (req, res, next) => dsaController.updateNotes(req, res, next));
dsaRouter.post("/problems/:problemId/bookmark", authMiddleware, requireRole("STUDENT"), (req, res, next) => dsaController.toggleBookmark(req, res, next));
dsaRouter.get("/bookmarks", authMiddleware, requireRole("STUDENT"), (req, res, next) => dsaController.getBookmarks(req, res, next));
dsaRouter.get("/my-progress", authMiddleware, requireRole("STUDENT"), (req, res, next) => dsaController.getMyProgress(req, res, next));
dsaRouter.post("/problems/:problemId/execute", authMiddleware, requireRole("STUDENT"), usageLimit("CODE_RUN"), (req, res, next) => dsaController.executeCode(req, res, next));
dsaRouter.get("/problems/:problemId/submissions", authMiddleware, requireRole("STUDENT"), (req, res, next) => dsaController.getSubmissionHistory(req, res, next));

// Public routes (with optional auth)
dsaRouter.get("/topics", optionalAuthMiddleware, (req, res, next) => dsaController.listTopics(req, res, next));
dsaRouter.get("/sheets", optionalAuthMiddleware, (req, res, next) => dsaController.getSheetStats(req, res, next));
dsaRouter.get("/companies", optionalAuthMiddleware, (req, res, next) => dsaController.getCompanies(req, res, next));
dsaRouter.get("/companies/:company", optionalAuthMiddleware, (req, res, next) => dsaController.getCompanyProblems(req, res, next));
dsaRouter.get("/patterns", optionalAuthMiddleware, (req, res, next) => dsaController.getPatterns(req, res, next));
dsaRouter.get("/patterns/:pattern", optionalAuthMiddleware, (req, res, next) => dsaController.getPatternProblems(req, res, next));
dsaRouter.get("/problems/:slug", optionalAuthMiddleware, (req, res, next) => dsaController.getProblemBySlug(req, res, next));
dsaRouter.get("/topics/:slug", optionalAuthMiddleware, (req, res, next) => dsaController.getTopicBySlug(req, res, next));
