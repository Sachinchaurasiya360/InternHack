import type { Request, Response, NextFunction } from "express";
import { prisma } from "../../database/db.js";
import { getPlanTier } from "../../config/usage-limits.js";
import { jobAgentService } from "./job-agent.service.js";
import { chatMessageSchema } from "./job-agent.validation.js";
import type { UsageAction } from "@prisma/client";

export class JobAgentController {
  private async checkPremium(userId: number): Promise<boolean> {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { subscriptionPlan: true, subscriptionStatus: true, subscriptionEndDate: true },
    });
    if (!user) return false;
    return getPlanTier(user.subscriptionPlan, user.subscriptionStatus, user.subscriptionEndDate) === "PREMIUM";
  }

  private static FREE_MESSAGE_LIMIT = 2;

  chat = async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) { res.status(401).json({ message: "Authentication required" }); return; }

      const isPremium = await this.checkPremium(req.user.id);

      // Free users get 2 messages per conversation
      if (!isPremium) {
        const conv = await prisma.jobAgentConversation.findFirst({
          where: { userId: req.user.id, isActive: true },
          orderBy: { updatedAt: "desc" },
        });
        const msgCount = conv ? (conv.messages as any[]).filter((m: any) => m.role === "user").length : 0;
        if (msgCount >= JobAgentController.FREE_MESSAGE_LIMIT) {
          res.status(403).json({
            message: `You've used your ${JobAgentController.FREE_MESSAGE_LIMIT} free messages. Upgrade to Premium for unlimited AI chat.`,
            upgradeUrl: "/student/checkout",
            freeLimit: true,
          });
          return;
        }
      }

      const parsed = chatMessageSchema.safeParse(req.body);
      if (!parsed.success) {
        res.status(400).json({ message: "Validation failed", errors: parsed.error.flatten() });
        return;
      }
      const result = await jobAgentService.chat(req.user.id, parsed.data.message);

      await prisma.usageLog.create({
        data: { userId: req.user.id, action: "AI_JOB_CHAT" as UsageAction },
      });

      res.json(result);
    } catch (err) { next(err); }
  };

  getConversation = async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) { res.status(401).json({ message: "Authentication required" }); return; }
      const conv = await jobAgentService.getConversation(req.user.id);
      res.json(conv || { messages: [] });
    } catch (err) { next(err); }
  };

  resetConversation = async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) { res.status(401).json({ message: "Authentication required" }); return; }
      await jobAgentService.resetConversation(req.user.id);
      res.json({ success: true });
    } catch (err) { next(err); }
  };
}

export const jobAgentController = new JobAgentController();
