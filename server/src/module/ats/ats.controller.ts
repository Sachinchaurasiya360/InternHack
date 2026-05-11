import type { Request, Response, NextFunction } from "express";
import type { AtsService } from "./ats.service.js";
import { scoreResumeSchema } from "./ats.validation.js";
import { prisma } from "../../database/db.js";
import { DAILY_LIMITS, getPlanTier } from "../../config/usage-limits.js";
import { sendEmail } from "../../utils/email.utils.js";
import { atsScoreReportHtml } from "../../utils/email-templates.js";

// Only email the report when the score row was just created; cached hits
// (re-scoring the same resume+JD within the service's 24h window) reuse the
// same row so we don't want to spam the student's inbox.
const FRESH_SCORE_WINDOW_MS = 30_000;

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

      const isFresh =
        Date.now() - new Date(score.createdAt).getTime() < FRESH_SCORE_WINDOW_MS;
      let emailQueued = false;
      if (isFresh) {
        emailQueued = true;
        // Fire-and-forget: don't block the response on Resend latency.
        void this.sendScoreReportEmail(req.user.id, score).catch((err) => {
          console.error("[ATS] failed to send score report email:", err);
        });
      }

      res.json({ message: "Resume scored successfully", score, usage, emailQueued });
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

  private async sendScoreReportEmail(
    studentId: number,
    score: {
      overallScore: number;
      categoryScores: unknown;
      suggestions: unknown;
      keywordAnalysis: unknown;
      jobTitle: string | null;
    },
  ): Promise<void> {
    const user = await prisma.user.findUnique({
      where: { id: studentId },
      select: { email: true, name: true },
    });
    if (!user?.email) return;

    const categoryScores = (score.categoryScores ?? {}) as Record<string, number>;
    const suggestions = Array.isArray(score.suggestions)
      ? (score.suggestions.filter((s): s is string => typeof s === "string"))
      : [];
    const ka = (score.keywordAnalysis ?? {}) as { found?: unknown; missing?: unknown };
    const keywordAnalysis = {
      found: Array.isArray(ka.found) ? ka.found.filter((s): s is string => typeof s === "string") : [],
      missing: Array.isArray(ka.missing) ? ka.missing.filter((s): s is string => typeof s === "string") : [],
    };

    const html = atsScoreReportHtml({
      name: user.name ?? "there",
      overallScore: score.overallScore,
      categoryScores,
      suggestions,
      keywordAnalysis,
      jobTitle: score.jobTitle,
    });

    const subject = `Your resume scored ${score.overallScore}/100 on InternHack`;
    await sendEmail({ to: user.email, subject, html });
  }

  async getScoreHistory(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user) {
        res.status(401).json({ message: "Authentication required" });
        return;
      }
      const history = await this.atsService.getScoreHistory(req.user.id);
      res.json({ history });
    } catch (err) {
      next(err);
    }
  }
}
