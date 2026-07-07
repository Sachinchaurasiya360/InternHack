import type { Request, Response, NextFunction } from "express";
import type { AtsService } from "./ats.service.js";
import { applySuggestionsSchema, scoreResumeSchema, guestScoreResumeSchema } from "./ats.validation.js";
import { hashGuestIp } from "../../utils/guest-ip.utils.js";
import { prisma } from "../../database/db.js";
import { DAILY_LIMITS, getPlanTier } from "../../config/usage-limits.js";
import { sendEmail } from "../../utils/email.utils.js";
import { atsScoreReportHtml } from "../../utils/email-templates.js";
import { isPremiumUser } from "../../utils/premium.utils.js";

export class AtsController {
  constructor(private readonly atsService: AtsService) {}

  async scoreResumeGuest(req: Request, res: Response, next: NextFunction) {
    try {
      const ipHash = hashGuestIp(req);
      const result = guestScoreResumeSchema(ipHash).safeParse(req.body);
      if (!result.success) {
        res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });
        return;
      }

      // Check daily guest limit before initiating costly AI processing
      const today = new Date();
      today.setUTCHours(0, 0, 0, 0);
      const usageLog = await prisma.guestUsage.findUnique({
        where: { ipHash_date: { ipHash, date: today } },
      });
      if (usageLog && usageLog.count >= 2) {
        res.status(429).json({
          message: "Daily guest limit reached. Create a free account for more ATS scores.",
        });
        return;
      }

      const score = await this.atsService.scoreResumeGuest(ipHash, result.data);

      // Increment usage count only after successful analysis
      const updatedLog = await prisma.guestUsage.upsert({
        where: { ipHash_date: { ipHash, date: today } },
        update: { count: { increment: 1 } },
        create: { ipHash, date: today, count: 1 },
      });

      res.json({
        message: "Resume scored successfully",
        score,
        guest: true,
        usage: { used: updatedLog.count, limit: 2 },
      });
    } catch (err) {
      if (err instanceof Error) {
        if (err.message.includes("Could not extract")) {
          res.status(400).json({ message: err.message });
          return;
        }
        if (err.message.includes("Invalid resume URL") || err.message.includes("does not belong")) {
          res.status(403).json({ message: err.message });
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

      const usage = req.usageInfo
        ? { used: req.usageInfo.used + 1, limit: req.usageInfo.limit }
        : undefined;

      // Fire-and-forget: don't block the response on Resend latency.
      void this.sendScoreReportEmail(req.user.id, score).catch((err) => {
        console.error("[ATS] failed to send score report email:", err);
      });

      res.json({ message: "Resume scored successfully", score, usage, emailQueued: true });
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

  async applySuggestions(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user) {
        res.status(401).json({ message: "Authentication required" });
        return;
      }

      const isPremium = await isPremiumUser(req.user.id);
      if (!isPremium) {
        res.status(403).json({ message: "Premium subscription required to apply AI suggestions" });
        return;
      }

      const result = applySuggestionsSchema.safeParse(req.body);
      if (!result.success) {
        res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });
        return;
      }

      const response = await this.atsService.applySuggestions(req.user.id, result.data);

      res.json(response);
    } catch (err) {
      console.error("ATS apply suggestions error:", err);

      if (err instanceof Error) {
        if (err.message.includes("429")) {
          res.status(429).json({ message: "AI usage limit reached. Please try again later." });
          return;
        }
        if (err.message.includes("Could not extract")) {
          res.status(400).json({ message: err.message });
          return;
        }
        if (err.message.includes("ENOENT")) {
          res.status(404).json({ message: "Resume file not found. Please upload again." });
          return;
        }
      }

      res.status(500).json({ message: "Failed to improve resume. Please try again." });
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
}
