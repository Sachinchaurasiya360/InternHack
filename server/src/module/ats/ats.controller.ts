import type { Request, Response, NextFunction } from "express";
import type { AtsService } from "./ats.service.js";
import { scoreResumeSchema } from "./ats.validation.js";
import { prisma } from "../../database/db.js";
import { DAILY_LIMITS, getPlanTier } from "../../config/usage-limits.js";

export class AtsController {
  constructor(private readonly atsService: AtsService) {}

  async scoreResume(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user) {
        res.status(401).json({ message: "Authentication required" });
        return;
      }

      const result = scoreResumeSchema.safeParse(req.body);
      if (!result.success) {
        res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });
        return;
      }

      const score = await this.atsService.scoreResume(req.user.id, result.data);

      await prisma.usageLog.create({ data: { userId: req.user.id, action: "ATS_SCORE" } });

      const usage = req.usageInfo
        ? { used: req.usageInfo.used + 1, limit: req.usageInfo.limit }
        : undefined;

      res.json({ message: "Resume scored successfully", score, usage });
    } catch (err) {
      if (err instanceof Error) {
        if (err.message.includes("Could not extract")) {
          res.status(400).json({ message: err.message });
          return;
        }
        if (err.message.includes("ENOENT")) {
          res.status(404).json({ message: "Resume file not found. Please upload again." });
          return;
        }
      }
      next(err);
    }
  }

  async getScoreHistory(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user) {
        res.status(401).json({ message: "Authentication required" });
        return;
      }

      const scores = await this.atsService.getScoreHistory(req.user.id);
      res.json({ scores });
    } catch (err) {
      next(err);
    }
  }

  async getScoreById(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user) {
        res.status(401).json({ message: "Authentication required" });
        return;
      }

      const scoreId = parseInt(String(req.params["scoreId"]), 10);
      if (isNaN(scoreId)) {
        res.status(400).json({ message: "Invalid score ID" });
        return;
      }

      const score = await this.atsService.getScoreById(scoreId, req.user.id);
      res.json({ score });
    } catch (err) {
      if (err instanceof Error) {
        if (err.message === "Score not found") {
          res.status(404).json({ message: err.message });
          return;
        }
        if (err.message === "Not authorized") {
          res.status(403).json({ message: err.message });
          return;
        }
      }
      next(err);
    }
  }

  async getUsageStats(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user) {
        res.status(401).json({ message: "Authentication required" });
        return;
      }

      const user = await prisma.user.findUnique({
        where: { id: req.user.id },
        select: { subscriptionPlan: true, subscriptionStatus: true, subscriptionEndDate: true },
      });

      if (!user) {
        res.status(401).json({ message: "User not found" });
        return;
      }

      const tier = getPlanTier(user.subscriptionPlan, user.subscriptionStatus, user.subscriptionEndDate);

      const startOfDay = new Date();
      startOfDay.setHours(0, 0, 0, 0);

      const counts = await prisma.usageLog.groupBy({
        by: ["action"],
        where: { userId: req.user.id, createdAt: { gte: startOfDay } },
        _count: { id: true },
      });

      const countMap = Object.fromEntries(
        counts.map((c) => [c.action, c._count.id]),
      );

      const usage = Object.entries(DAILY_LIMITS).map(([action, limits]) => ({
        action,
        used: (countMap[action] as number) ?? 0,
        limit: limits[tier],
      }));

      res.json({ tier, usage });
    } catch (err) {
      next(err);
    }
  }
}
