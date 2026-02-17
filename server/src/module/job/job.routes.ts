import { Router } from "express";
import { JobController } from "./job.controller.js";
import { JobService } from "./job.service.js";
import { authMiddleware } from "../../middleware/auth.middleware.js";
import { requireRole } from "../../middleware/role.middleware.js";

const jobService = new JobService();
const jobController = new JobController(jobService);

export const jobRouter = Router();

// Recruiter's own jobs (must be before /:id to avoid conflict)
jobRouter.get("/recruiter/my-jobs", authMiddleware, requireRole("RECRUITER"), (req, res) => jobController.getRecruiterJobs(req, res));

// Public routes
jobRouter.get("/", (req, res) => jobController.getJobs(req, res));
jobRouter.get("/:id", (req, res) => jobController.getJobById(req, res));

// Recruiter-only routes
jobRouter.post("/", authMiddleware, requireRole("RECRUITER"), (req, res) => jobController.createJob(req, res));
jobRouter.put("/:id", authMiddleware, requireRole("RECRUITER"), (req, res) => jobController.updateJob(req, res));
jobRouter.patch("/:id/status", authMiddleware, requireRole("RECRUITER"), (req, res) => jobController.updateJobStatus(req, res));
jobRouter.delete("/:id", authMiddleware, requireRole("RECRUITER"), (req, res) => jobController.deleteJob(req, res));
