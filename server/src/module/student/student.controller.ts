import type { Request, Response, NextFunction } from "express";
import { StudentService } from "./student.service.js";
import { applyToJobSchema, submitRoundSchema } from "./student.validation.js";
import { prisma } from "../../database/db.js";
import { getPlanTier } from "../../config/usage-limits.js";
import { createLogger } from "../../utils/logger.js";

const logger = createLogger("StudentController");

export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  async applyToJob(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user) return res.status(401).json({ message: "Authentication required" });

      const jobId = parseInt(String(req.params["jobId"]), 10);
      if (isNaN(jobId)) return res.status(400).json({ message: "Invalid job ID" });

      const result = applyToJobSchema.safeParse(req.body);
      if (!result.success) return res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });

      const application = await this.studentService.applyToJob(jobId, req.user.id, result.data);

      await prisma.usageLog.create({ data: { userId: req.user.id, action: "JOB_APPLICATION" } });
      const usage = req.usageInfo ? { used: req.usageInfo.used + 1, limit: req.usageInfo.limit } : undefined;

      return res.status(201).json({ message: "Application submitted successfully", application, usage });
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "Job not found") return res.status(404).json({ message: error.message });
        if (error.message === "Job is not accepting applications") return res.status(400).json({ message: error.message });
        if (error.message === "Application deadline has passed") return res.status(400).json({ message: error.message });
        if (error.message === "You have already applied to this job") return res.status(409).json({ message: error.message });
      }
      next(error);
    }
  }

  async getMockInterviewInfo(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user) return res.status(401).json({ message: "Authentication required" });

      const startOfMonth = new Date();
      startOfMonth.setDate(1);
      startOfMonth.setHours(0, 0, 0, 0);

      // Fetch user plan and usage count in parallel.
      const [user, used] = await Promise.all([
        prisma.user.findUnique({
          where: { id: req.user.id },
          select: { subscriptionPlan: true, subscriptionStatus: true, subscriptionEndDate: true },
        }),
        prisma.usageLog.count({
          where: { userId: req.user.id, action: "MOCK_INTERVIEW", createdAt: { gte: startOfMonth } },
        }),
      ]);
      if (!user) return res.status(401).json({ message: "User not found" });

      const tier = getPlanTier(user.subscriptionPlan, user.subscriptionStatus, user.subscriptionEndDate);

      if (tier === "FREE") {
        return res.json({ allowed: false, tier, calendlyUrl: null, used: 0, limit: 0 });
      }

      return res.json({
        allowed: used < 1,
        tier,
        calendlyUrl: used < 1 ? process.env["CALENDLY_URL"] || null : null,
        used,
        limit: 1,
      });
    } catch (err) {
      next(err);
    }
  }

  async bookMockInterview(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user) return res.status(401).json({ message: "Authentication required" });

      const startOfMonth = new Date();
      startOfMonth.setDate(1);
      startOfMonth.setHours(0, 0, 0, 0);

      // Fetch user plan and usage count in parallel.
      const [user, used] = await Promise.all([
        prisma.user.findUnique({
          where: { id: req.user.id },
          select: { subscriptionPlan: true, subscriptionStatus: true, subscriptionEndDate: true },
        }),
        prisma.usageLog.count({
          where: { userId: req.user.id, action: "MOCK_INTERVIEW", createdAt: { gte: startOfMonth } },
        }),
      ]);
      if (!user) return res.status(401).json({ message: "User not found" });

      const tier = getPlanTier(user.subscriptionPlan, user.subscriptionStatus, user.subscriptionEndDate);
      if (tier === "FREE") return res.status(403).json({ message: "Upgrade to Premium to book mock interviews." });

      if (used >= 1) return res.status(429).json({ message: "Monthly mock interview limit reached.", used, limit: 1 });

      await prisma.usageLog.create({ data: { userId: req.user.id, action: "MOCK_INTERVIEW" } });

      return res.json({ message: "Mock interview booked successfully", used: used + 1, limit: 1 });
    } catch (err) {
      next(err);
    }
  }

  async getApplicationStatusByJob(req: Request, res: Response) {
    try {
      if (!req.user) return res.status(401).json({ message: "Authentication required" });

      const jobId = parseInt(String(req.params["jobId"]), 10);
      if (isNaN(jobId)) return res.status(400).json({ message: "Invalid job ID" });

      const application = await this.studentService.getApplicationStatusByJob(jobId, req.user.id);
      return res.status(200).json({ applied: !!application, application });
    } catch (error) {
      logger.error("Failed to get application status by job", error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getMyApplications(req: Request, res: Response) {
    try {
      if (!req.user) return res.status(401).json({ message: "Authentication required" });

      const [applications, externalApplications] = await Promise.all([
        this.studentService.getMyApplications(req.user.id),
        this.studentService.getMyExternalApplications(req.user.id),
      ]);
      return res.status(200).json({ applications, externalApplications });
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
      return res.status(201).json({ message: "Applied successfully", application });
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
      logger.error("Failed to get application detail", error);
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
      logger.error("Failed to withdraw application", error);
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
      logger.error("Failed to get round info", error);
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
      logger.error("Failed to submit round", error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

}
