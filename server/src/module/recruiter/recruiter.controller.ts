import type { Request, Response } from "express";
import { RecruiterService } from "./recruiter.service.js";
import {
  createRoundSchema,
  updateRoundSchema,
  reorderRoundsSchema,
  updateApplicationStatusSchema,
  evaluateSubmissionSchema,
  applicationFilterSchema,
} from "./recruiter.validation.js";

export class RecruiterController {
  constructor(private readonly recruiterService: RecruiterService) {}

  // ==================== ROUND MANAGEMENT ====================

  async createRound(req: Request, res: Response) {
    try {
      if (!req.user) return res.status(401).json({ message: "Authentication required" });

      const jobId = parseInt(String(req.params["jobId"]), 10);
      if (isNaN(jobId)) return res.status(400).json({ message: "Invalid job ID" });

      const result = createRoundSchema.safeParse(req.body);
      if (!result.success) return res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });

      const round = await this.recruiterService.createRound(jobId, req.user.id, result.data);
      return res.status(201).json({ message: "Round created successfully", round });
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "Job not found") return res.status(404).json({ message: error.message });
        if (error.message === "Not authorized") return res.status(403).json({ message: error.message });
      }
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getRounds(req: Request, res: Response) {
    try {
      if (!req.user) return res.status(401).json({ message: "Authentication required" });

      const jobId = parseInt(String(req.params["jobId"]), 10);
      if (isNaN(jobId)) return res.status(400).json({ message: "Invalid job ID" });

      const rounds = await this.recruiterService.getRounds(jobId, req.user.id);
      return res.status(200).json({ rounds });
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "Job not found") return res.status(404).json({ message: error.message });
        if (error.message === "Not authorized") return res.status(403).json({ message: error.message });
      }
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async updateRound(req: Request, res: Response) {
    try {
      if (!req.user) return res.status(401).json({ message: "Authentication required" });

      const jobId = parseInt(String(req.params["jobId"]), 10);
      const roundId = parseInt(String(req.params["roundId"]), 10);
      if (isNaN(jobId) || isNaN(roundId)) return res.status(400).json({ message: "Invalid ID" });

      const result = updateRoundSchema.safeParse(req.body);
      if (!result.success) return res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });

      const round = await this.recruiterService.updateRound(jobId, roundId, req.user.id, result.data);
      return res.status(200).json({ message: "Round updated successfully", round });
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "Job not found" || error.message === "Round not found") return res.status(404).json({ message: error.message });
        if (error.message === "Not authorized") return res.status(403).json({ message: error.message });
      }
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async deleteRound(req: Request, res: Response) {
    try {
      if (!req.user) return res.status(401).json({ message: "Authentication required" });

      const jobId = parseInt(String(req.params["jobId"]), 10);
      const roundId = parseInt(String(req.params["roundId"]), 10);
      if (isNaN(jobId) || isNaN(roundId)) return res.status(400).json({ message: "Invalid ID" });

      await this.recruiterService.deleteRound(jobId, roundId, req.user.id);
      return res.status(200).json({ message: "Round deleted successfully" });
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "Job not found" || error.message === "Round not found") return res.status(404).json({ message: error.message });
        if (error.message === "Not authorized") return res.status(403).json({ message: error.message });
      }
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async reorderRounds(req: Request, res: Response) {
    try {
      if (!req.user) return res.status(401).json({ message: "Authentication required" });

      const jobId = parseInt(String(req.params["jobId"]), 10);
      if (isNaN(jobId)) return res.status(400).json({ message: "Invalid job ID" });

      const result = reorderRoundsSchema.safeParse(req.body);
      if (!result.success) return res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });

      const rounds = await this.recruiterService.reorderRounds(jobId, req.user.id, result.data.rounds);
      return res.status(200).json({ message: "Rounds reordered successfully", rounds });
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "Job not found") return res.status(404).json({ message: error.message });
        if (error.message === "Not authorized") return res.status(403).json({ message: error.message });
      }
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  // ==================== APPLICATION MANAGEMENT ====================

  async getApplications(req: Request, res: Response) {
    try {
      if (!req.user) return res.status(401).json({ message: "Authentication required" });

      const jobId = parseInt(String(req.params["jobId"]), 10);
      if (isNaN(jobId)) return res.status(400).json({ message: "Invalid job ID" });

      const filter = applicationFilterSchema.parse(req.query);
      const data = await this.recruiterService.getApplications(jobId, req.user.id, filter);
      return res.status(200).json(data);
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "Job not found") return res.status(404).json({ message: error.message });
        if (error.message === "Not authorized") return res.status(403).json({ message: error.message });
      }
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getApplicationDetail(req: Request, res: Response) {
    try {
      if (!req.user) return res.status(401).json({ message: "Authentication required" });

      const applicationId = parseInt(String(req.params["applicationId"]), 10);
      if (isNaN(applicationId)) return res.status(400).json({ message: "Invalid application ID" });

      const application = await this.recruiterService.getApplicationDetail(applicationId, req.user.id);
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

  async updateApplicationStatus(req: Request, res: Response) {
    try {
      if (!req.user) return res.status(401).json({ message: "Authentication required" });

      const applicationId = parseInt(String(req.params["applicationId"]), 10);
      if (isNaN(applicationId)) return res.status(400).json({ message: "Invalid application ID" });

      const result = updateApplicationStatusSchema.safeParse(req.body);
      if (!result.success) return res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });

      const application = await this.recruiterService.updateApplicationStatus(applicationId, req.user.id, result.data.status);
      return res.status(200).json({ message: "Application status updated", application });
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "Application not found") return res.status(404).json({ message: error.message });
        if (error.message === "Not authorized") return res.status(403).json({ message: error.message });
      }
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async advanceApplication(req: Request, res: Response) {
    try {
      if (!req.user) return res.status(401).json({ message: "Authentication required" });

      const applicationId = parseInt(String(req.params["applicationId"]), 10);
      if (isNaN(applicationId)) return res.status(400).json({ message: "Invalid application ID" });

      const application = await this.recruiterService.advanceApplication(applicationId, req.user.id);
      return res.status(200).json({ message: "Application advanced to next round", application });
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "Application not found") return res.status(404).json({ message: error.message });
        if (error.message === "Not authorized") return res.status(403).json({ message: error.message });
        if (error.message === "No rounds defined for this job") return res.status(400).json({ message: error.message });
      }
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  // ==================== EVALUATION ====================

  async getSubmission(req: Request, res: Response) {
    try {
      if (!req.user) return res.status(401).json({ message: "Authentication required" });

      const applicationId = parseInt(String(req.params["applicationId"]), 10);
      const roundId = parseInt(String(req.params["roundId"]), 10);
      if (isNaN(applicationId) || isNaN(roundId)) return res.status(400).json({ message: "Invalid ID" });

      const submission = await this.recruiterService.getSubmission(applicationId, roundId, req.user.id);
      return res.status(200).json({ submission });
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "Application not found") return res.status(404).json({ message: error.message });
        if (error.message === "Not authorized") return res.status(403).json({ message: error.message });
      }
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async evaluateSubmission(req: Request, res: Response) {
    try {
      if (!req.user) return res.status(401).json({ message: "Authentication required" });

      const applicationId = parseInt(String(req.params["applicationId"]), 10);
      const roundId = parseInt(String(req.params["roundId"]), 10);
      if (isNaN(applicationId) || isNaN(roundId)) return res.status(400).json({ message: "Invalid ID" });

      const result = evaluateSubmissionSchema.safeParse(req.body);
      if (!result.success) return res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });

      const submission = await this.recruiterService.evaluateSubmission(
        applicationId,
        roundId,
        req.user.id,
        result.data.evaluationScores,
        result.data.recruiterNotes,
      );
      return res.status(200).json({ message: "Submission evaluated successfully", submission });
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "Application not found") return res.status(404).json({ message: error.message });
        if (error.message === "Not authorized") return res.status(403).json({ message: error.message });
      }
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  // ==================== DASHBOARD & ANALYTICS ====================

  async getDashboard(req: Request, res: Response) {
    try {
      if (!req.user) return res.status(401).json({ message: "Authentication required" });

      const data = await this.recruiterService.getDashboard(req.user.id);
      return res.status(200).json(data);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getJobAnalytics(req: Request, res: Response) {
    try {
      if (!req.user) return res.status(401).json({ message: "Authentication required" });

      const jobId = parseInt(String(req.params["jobId"]), 10);
      if (isNaN(jobId)) return res.status(400).json({ message: "Invalid job ID" });

      const data = await this.recruiterService.getJobAnalytics(jobId, req.user.id);
      return res.status(200).json(data);
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "Job not found") return res.status(404).json({ message: error.message });
        if (error.message === "Not authorized") return res.status(403).json({ message: error.message });
      }
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
