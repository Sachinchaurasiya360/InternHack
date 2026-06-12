import { type Request, type Response, type NextFunction } from "express";
import { OpensourceStreakService } from "./opensource-streak.service.js";
import { tickStreakSchema } from "./opensource-streak.validation.js";

const service = new OpensourceStreakService();

export class OpensourceStreakController {
  async getStreak(req: Request, res: Response, next: NextFunction) {
    try {
      const streak = await service.getStreak(req.user!.id);
      res.json({ streak });
    } catch (err) {
      next(err);
    }
  }

  async tickStreak(req: Request, res: Response, next: NextFunction) {
    try {
      const parsed = tickStreakSchema.safeParse(req.body);
      if (!parsed.success) {
        res.status(400).json({
          message: "Validation failed",
          errors: parsed.error.flatten().fieldErrors,
        });
        return;
      }

      const streak = await service.tickStreak(req.user!.id, parsed.data.action);
      res.json({ streak });
    } catch (err) {
      next(err);
    }
  }
}
