import type { Request, Response, NextFunction } from "express";
import type { BehavioralService } from "./behavioral.service.js";
import { evaluateStarSchema } from "./behavioral.validation.js";
import { prisma } from "../../database/db.js";
import { isPremiumUser } from "../../utils/premium.utils.js";
import type { UsageAction } from "@prisma/client";

export class BehavioralController {
  constructor(private readonly behavioralService: BehavioralService) {}

  async evaluate(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user) {
        res.status(401).json({ message: "Authentication required" });
        return;
      }

      const parsed = evaluateStarSchema.safeParse(req.body);
      if (!parsed.success) {
        res.status(400).json({ message: "Validation failed", errors: parsed.error.flatten() });
        return;
      }

      const isPremium = await isPremiumUser(req.user.id);
      const evaluation = await this.behavioralService.evaluate(parsed.data);

      await prisma.usageLog.create({
        data: { userId: req.user.id, action: "MOCK_INTERVIEW" as UsageAction },
      });

      res.json({ evaluation, isPremium });
    } catch (err) {
      next(err);
    }
  }
}
