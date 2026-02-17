import type { Request, Response } from "express";
import { StudentService } from "./student.service.js";
import { applyToJobSchema, submitRoundSchema } from "./student.validation.js";

export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  async applyToJob(req: Request, res: Response) {
    try {
      if (!req.user) return res.status(401).json({ message: "Authentication required" });

      const jobId = parseInt(String(req.params["jobId"]), 10);
      if (isNaN(jobId)) return res.status(400).json({ message: "Invalid job ID" });

      const result = applyToJobSchema.safeParse(req.body);
      if (!result.success) return res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });

      const application = await this.studentService.applyToJob(jobId, req.user.id, result.data);
      return res.status(201).json({ message: "Application submitted successfully", application });
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "Job not found") return res.status(404).json({ message: error.message });
        if (error.message === "Job is not accepting applications") return res.status(400).json({ message: error.message });
        if (error.message === "Application deadline has passed") return res.status(400).json({ message: error.message });
        if (error.message === "Already applied to this job") return res.status(409).json({ message: error.message });
      }
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getMyApplications(req: Request, res: Response) {
    try {
      if (!req.user) return res.status(401).json({ message: "Authentication required" });

      const applications = await this.studentService.getMyApplications(req.user.id);
      return res.status(200).json({ applications });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getApplicationDetail(req: Request, res: Response) {
    try {
      if (!req.user) return res.status(401).json({ message: "Authentication required" });

      const applicationId = parseInt(String(req.params["applicationId"]), 10);
      if (isNaN(applicationId)) return res.status(400).json({ message: "Invalid application ID" });

      const application = await this.studentService.getApplicationDetail(applicationId, req.user.id);
      return res.status(200).json({ application });
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "Application not found") return res.status(404).json({ message: error.message });
        if (error.message === "Not authorized") return res.status(403).json({ message: error.message });
      }
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async withdrawApplication(req: Request, res: Response) {
    try {
      if (!req.user) return res.status(401).json({ message: "Authentication required" });

      const applicationId = parseInt(String(req.params["applicationId"]), 10);
      if (isNaN(applicationId)) return res.status(400).json({ message: "Invalid application ID" });

      const application = await this.studentService.withdrawApplication(applicationId, req.user.id);
      return res.status(200).json({ message: "Application withdrawn", application });
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "Application not found") return res.status(404).json({ message: error.message });
        if (error.message === "Not authorized") return res.status(403).json({ message: error.message });
        if (error.message === "Already withdrawn") return res.status(400).json({ message: error.message });
      }
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getRoundInfo(req: Request, res: Response) {
    try {
      if (!req.user) return res.status(401).json({ message: "Authentication required" });

      const applicationId = parseInt(String(req.params["applicationId"]), 10);
      const roundId = parseInt(String(req.params["roundId"]), 10);
      if (isNaN(applicationId) || isNaN(roundId)) return res.status(400).json({ message: "Invalid ID" });

      const data = await this.studentService.getRoundInfo(applicationId, roundId, req.user.id);
      return res.status(200).json(data);
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "Application not found" || error.message === "Round not found") return res.status(404).json({ message: error.message });
        if (error.message === "Not authorized") return res.status(403).json({ message: error.message });
      }
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async submitRound(req: Request, res: Response) {
    try {
      if (!req.user) return res.status(401).json({ message: "Authentication required" });

      const applicationId = parseInt(String(req.params["applicationId"]), 10);
      const roundId = parseInt(String(req.params["roundId"]), 10);
      if (isNaN(applicationId) || isNaN(roundId)) return res.status(400).json({ message: "Invalid ID" });

      const result = submitRoundSchema.safeParse(req.body);
      if (!result.success) return res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });

      const submission = await this.studentService.submitRound(applicationId, roundId, req.user.id, result.data);
      return res.status(200).json({ message: "Round submitted successfully", submission });
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "Application not found" || error.message === "Round not found") return res.status(404).json({ message: error.message });
        if (error.message === "Not authorized") return res.status(403).json({ message: error.message });
      }
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
