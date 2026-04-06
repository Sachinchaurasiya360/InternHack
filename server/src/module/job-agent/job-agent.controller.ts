import type { Request, Response, NextFunction } from "express";
import { prisma } from "../../database/db.js";
import { jobAgentService } from "./job-agent.service.js";
import { chatMessageSchema } from "./job-agent.validation.js";
import type { UsageAction } from "@prisma/client";

export class JobAgentController {
  chat = async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) { res.status(401).json({ message: "Authentication required" }); return; }

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
