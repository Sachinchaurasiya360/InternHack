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
recruiterRouter.post("/jobs/:jobId/rounds", (req, res) => recruiterController.createRound(req, res));
recruiterRouter.get("/jobs/:jobId/rounds", (req, res) => recruiterController.getRounds(req, res));
recruiterRouter.put("/jobs/:jobId/rounds/:roundId", (req, res) => recruiterController.updateRound(req, res));
recruiterRouter.delete("/jobs/:jobId/rounds/:roundId", (req, res) => recruiterController.deleteRound(req, res));
recruiterRouter.patch("/jobs/:jobId/rounds/reorder", (req, res) => recruiterController.reorderRounds(req, res));

// Application management
recruiterRouter.get("/jobs/:jobId/applications", (req, res) => recruiterController.getApplications(req, res));
recruiterRouter.get("/applications/:applicationId", (req, res) => recruiterController.getApplicationDetail(req, res));
recruiterRouter.patch("/applications/:applicationId/status", (req, res) => recruiterController.updateApplicationStatus(req, res));
recruiterRouter.patch("/applications/:applicationId/advance", (req, res) => recruiterController.advanceApplication(req, res));

// Evaluation
recruiterRouter.get("/applications/:applicationId/rounds/:roundId", (req, res) => recruiterController.getSubmission(req, res));
recruiterRouter.put("/applications/:applicationId/rounds/:roundId/evaluate", (req, res) => recruiterController.evaluateSubmission(req, res));

// Dashboard & Analytics
recruiterRouter.get("/dashboard", (req, res) => recruiterController.getDashboard(req, res));
recruiterRouter.get("/jobs/:jobId/analytics", (req, res) => recruiterController.getJobAnalytics(req, res));
