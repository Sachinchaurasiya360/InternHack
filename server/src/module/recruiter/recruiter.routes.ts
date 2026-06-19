import { Router } from "express";
import { RecruiterController } from "./recruiter.controller.js";
import { RecruiterService } from "./recruiter.service.js";
import { authMiddleware } from "../../middleware/auth.middleware.js";
import { requireRole } from "../../middleware/role.middleware.js";

const recruiterService = new RecruiterService();
const recruiterController = new RecruiterController(recruiterService);

export const recruiterRouter = Router();

// All routes require authentication and RECRUITER role
recruiterRouter.use(authMiddleware, requireRole("RECRUITER"));

// Round management
recruiterRouter.post("/jobs/:jobId/rounds", (req, res, next) => recruiterController.createRound(req, res, next));
recruiterRouter.get("/jobs/:jobId/rounds", (req, res, next) => recruiterController.getRounds(req, res, next));
recruiterRouter.put("/jobs/:jobId/rounds/:roundId", (req, res, next) => recruiterController.updateRound(req, res, next));
recruiterRouter.delete("/jobs/:jobId/rounds/:roundId", (req, res, next) => recruiterController.deleteRound(req, res, next));
recruiterRouter.patch("/jobs/:jobId/rounds/reorder", (req, res, next) => recruiterController.reorderRounds(req, res, next));

// Application management
recruiterRouter.get("/jobs/:jobId/applications", (req, res, next) => recruiterController.getApplications(req, res, next));
recruiterRouter.get("/applications/:applicationId", (req, res, next) => recruiterController.getApplicationDetail(req, res, next));
recruiterRouter.patch("/applications/:applicationId/status", (req, res, next) => recruiterController.updateApplicationStatus(req, res, next));
recruiterRouter.patch("/applications/:applicationId/advance", (req, res, next) => recruiterController.advanceApplication(req, res, next));

// Evaluation
recruiterRouter.get("/applications/:applicationId/rounds/:roundId", (req, res, next) => recruiterController.getSubmission(req, res, next));
recruiterRouter.put("/applications/:applicationId/rounds/:roundId/evaluate", (req, res, next) => recruiterController.evaluateSubmission(req, res, next));

// Talent Search
recruiterRouter.get("/talent-search", (req, res, next) => recruiterController.searchTalent(req, res, next));

// Dashboard & Analytics
recruiterRouter.get("/dashboard", (req, res, next) => recruiterController.getDashboard(req, res, next));
recruiterRouter.get("/jobs/:jobId/analytics", (req, res, next) => recruiterController.getJobAnalytics(req, res, next));

// Saved Candidates
recruiterRouter.get("/saved-candidates", (req, res, next) => recruiterController.getSavedCandidates(req, res, next));
recruiterRouter.get("/saved-candidates/ids", (req, res, next) => recruiterController.getSavedIds(req, res, next));
recruiterRouter.post("/saved-candidates/:studentId", (req, res, next) => recruiterController.saveCandidate(req, res, next));
recruiterRouter.delete("/saved-candidates/:studentId", (req, res, next) => recruiterController.unsaveCandidate(req, res, next));
