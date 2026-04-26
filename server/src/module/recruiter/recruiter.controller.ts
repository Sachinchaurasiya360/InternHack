import type { Request, Response } from "express";
import { RecruiterService } from "./recruiter.service.js";
import { createLogger } from "../../utils/logger.js";
import {
  createRoundSchema,
  updateRoundSchema,
  reorderRoundsSchema,
  updateApplicationStatusSchema,
  evaluateSubmissionSchema,
  applicationFilterSchema,
  talentSearchSchema,
  saveCandidateSchema,
} from "./recruiter.validation.js";

const logger = createLogger("RecruiterController");

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
      logger.error("Failed to create round", error);
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
      logger.error("Failed to get rounds", error);
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
      logger.error("Failed to update round", error);
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
      logger.error("Failed to delete round", error);
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
      logger.error("Failed to reorder rounds", error);
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
      logger.error("Failed to get applications", error);
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
      logger.error("Failed to get application detail", error);
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
      logger.error("Failed to update application status", error);
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
      logger.error("Failed to advance application", error);
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
      logger.error("Failed to get submission", error);
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
      logger.error("Failed to evaluate submission", error);
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
      logger.error("Failed to get dashboard", error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async searchTalent(req: Request, res: Response) {
    try {
      if (!req.user) return res.status(401).json({ message: "Authentication required" });

      const result = talentSearchSchema.safeParse(req.query);
      if (!result.success) return res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });

      const data = await this.recruiterService.searchTalent(result.data);
      return res.status(200).json(data);
    } catch (error) {
      logger.error("Failed to search talent", error);
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
      logger.error("Failed to get job analytics", error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  // ==================== SAVED CANDIDATES ====================

  async getSavedCandidates(req: Request, res: Response) {
    try {
      if (!req.user) return res.status(401).json({ message: "Authentication required" });
      const saved = await this.recruiterService.getSavedCandidates(req.user.id);
      return res.status(200).json({ saved });
    } catch (error) {
      logger.error("Failed to get saved candidates", error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getSavedIds(req: Request, res: Response) {
    try {
      if (!req.user) return res.status(401).json({ message: "Authentication required" });
      const ids = await this.recruiterService.getSavedIds(req.user.id);
      return res.status(200).json({ ids });
    } catch (error) {
      logger.error("Failed to get saved IDs", error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async saveCandidate(req: Request, res: Response) {
    try {
      if (!req.user) return res.status(401).json({ message: "Authentication required" });

      const studentId = parseInt(String(req.params["studentId"]), 10);
      if (isNaN(studentId)) return res.status(400).json({ message: "Invalid student ID" });

      const result = saveCandidateSchema.safeParse(req.body ?? {});
      if (!result.success) return res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });

      const saved = await this.recruiterService.saveCandidate(req.user.id, studentId, result.data.notes);
      return res.status(200).json({ message: "Candidate saved", saved });
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "Student not found") return res.status(404).json({ message: error.message });
      }
      logger.error("Failed to save candidate", error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async unsaveCandidate(req: Request, res: Response) {
    try {
      if (!req.user) return res.status(401).json({ message: "Authentication required" });

      const studentId = parseInt(String(req.params["studentId"]), 10);
      if (isNaN(studentId)) return res.status(400).json({ message: "Invalid student ID" });

      await this.recruiterService.unsaveCandidate(req.user.id, studentId);
      return res.status(200).json({ message: "Candidate removed" });
    } catch (error) {
      logger.error("Failed to unsave candidate", error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
