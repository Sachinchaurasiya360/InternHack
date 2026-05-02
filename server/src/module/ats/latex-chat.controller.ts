import type { Request, Response, NextFunction } from "express";
import type { LatexChatService } from "./latex-chat.service.js";
import { latexChatSchema, latexJDOptimizeSchema } from "./latex-chat.validation.js";
import { prisma } from "../../database/db.js";
import type { UsageAction } from "@prisma/client";
import { isPremiumUser } from "../../utils/premium.utils.js";

export class LatexChatController {
  constructor(private readonly chatService: LatexChatService) {}

  async chat(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user) {
        res.status(401).json({ message: "Authentication required" });
        return;
      }

      const isPremium = await isPremiumUser(req.user.id);
      if (!isPremium) {
        res.status(403).json({ message: "Premium subscription required to use AI Resume Assistant" });
        return;
      }

      const result = latexChatSchema.safeParse(req.body);
      if (!result.success) {
        res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });
        return;
      }

      const response = await this.chatService.chat(result.data, req.user.id);

      await prisma.usageLog.create({
        data: { userId: req.user.id, action: "GENERATE_RESUME" as UsageAction },
      });

      res.json(response);
    } catch (err) {
      next(err);
    }
  }

  async optimizeForJD(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user) {
        res.status(401).json({ message: "Authentication required" });
        return;
      }

      const isPremium = await isPremiumUser(req.user.id);
      if (!isPremium) {
        res.status(403).json({ message: "Premium subscription required to use AI Resume Assistant" });
        return;
      }

      const result = latexJDOptimizeSchema.safeParse(req.body);
      if (!result.success) {
        res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });
        return;
      }

      const response = await this.chatService.optimizeForJD(
        result.data.latexCode,
        result.data.jobDescription,
        req.user.id,
      );

      await prisma.usageLog.create({
        data: { userId: req.user.id, action: "GENERATE_RESUME" as UsageAction },
      });

      res.json(response);
    } catch (err) {
      next(err);
    }
  }
}
