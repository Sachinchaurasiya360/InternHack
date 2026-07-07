import { Router } from "express";
import { StudentController } from "./student.controller.js";
import { StudentService } from "./student.service.js";
import { authMiddleware } from "../../middleware/auth.middleware.js";
import { requireRole } from "../../middleware/role.middleware.js";
import { usageLimit } from "../../middleware/usage-limit.middleware.js";

const studentService = new StudentService();
const studentController = new StudentController(studentService);

export const studentRouter = Router();

// All routes require authentication and STUDENT role
studentRouter.use(authMiddleware, requireRole("STUDENT"));

// Applications (external/admin-posted jobs only; internal recruiter jobs removed)
studentRouter.get("/applications", (req, res) => studentController.getMyApplications(req, res));

// External job applications
studentRouter.post("/external-jobs/:adminJobId/apply", usageLimit("JOB_APPLICATION"), (req, res) => studentController.applyToExternalJob(req, res));
studentRouter.get("/external-jobs/:adminJobId/status", (req, res) => studentController.getExternalApplicationStatus(req, res));
studentRouter.patch("/external-applications/:applicationId/notes", (req, res) => studentController.updateExternalApplicationNotes(req, res));
studentRouter.delete("/external-applications/:applicationId", (req, res) => studentController.deleteExternalApplication(req, res));
