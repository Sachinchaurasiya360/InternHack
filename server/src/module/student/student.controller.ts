import type { Request, Response, NextFunction } from "express";
import { StudentService } from "./student.service.js";
import { updateApplicationNotesSchema } from "./student.validation.js";
import { createLogger } from "../../utils/logger.js";

const logger = createLogger("StudentController");

export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  async getMyApplications(req: Request, res: Response) {
    try {
      if (!req.user) return res.status(401).json({ message: "Authentication required" });

      const externalApplications = await this.studentService.getMyExternalApplications(req.user.id);
      return res.status(200).json({ applications: [], externalApplications });
    } catch (error) {
      logger.error("Failed to get applications", error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async applyToExternalJob(req: Request, res: Response) {
    try {
      if (!req.user) return res.status(401).json({ message: "Authentication required" });

      const adminJobId = parseInt(String(req.params["adminJobId"]), 10);
      if (isNaN(adminJobId)) return res.status(400).json({ message: "Invalid job ID" });

      const application = await this.studentService.applyToExternalJob(req.user.id, adminJobId);
      const usage = req.usageInfo ? { used: req.usageInfo.used + 1, limit: req.usageInfo.limit } : undefined;

      return res.status(201).json({ message: "Applied successfully", application, usage });
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "External job not found") return res.status(404).json({ message: error.message });
        if (error.message === "This job has expired") return res.status(400).json({ message: error.message });
        if (error.message === "Already applied to this job") return res.status(409).json({ message: error.message });
      }
      logger.error("Failed to apply to external job", error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async deleteExternalApplication(req: Request, res: Response) {
    try {
      if (!req.user) return res.status(401).json({ message: "Authentication required" });

      const applicationId = parseInt(String(req.params["applicationId"]), 10);
      if (isNaN(applicationId) || applicationId <= 0) {
        return res.status(400).json({ message: "Invalid application ID" });
      }

      const result = await this.studentService.deleteExternalApplication(applicationId, req.user.id);
      return res.status(200).json({ message: "External application removed", ...result });
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "External application not found") return res.status(404).json({ message: error.message });
        if (error.message === "Not authorized") return res.status(403).json({ message: error.message });
      }
      logger.error("Failed to delete external application", error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getExternalApplicationStatus(req: Request, res: Response) {
    try {
      if (!req.user) return res.status(401).json({ message: "Authentication required" });

      const adminJobId = parseInt(String(req.params["adminJobId"]), 10);
      if (isNaN(adminJobId)) return res.status(400).json({ message: "Invalid job ID" });

      const status = await this.studentService.getExternalApplicationStatus(req.user.id, adminJobId);
      return res.status(200).json({ applied: !!status, application: status });
    } catch (error) {
      logger.error("Failed to get external application status", error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async updateExternalApplicationNotes(req: Request, res: Response) {
    try {
      if (!req.user) return res.status(401).json({ message: "Authentication required" });

      const applicationId = parseInt(String(req.params["applicationId"]), 10);
      if (isNaN(applicationId)) return res.status(400).json({ message: "Invalid application ID" });

      const result = updateApplicationNotesSchema.safeParse(req.body);
      if (!result.success) return res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });

      const updated = await this.studentService.updateExternalApplicationNotes(applicationId, req.user.id, result.data.notes);
      return res.status(200).json({ notes: updated.studentNotes ?? "", updatedAt: updated.updatedAt });
    } catch (error) {
      if (error instanceof Error && error.message === "External application not found") {
        return res.status(404).json({ message: error.message });
      }
      logger.error("Failed to update external application notes", error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
