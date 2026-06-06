import type { Request, Response, NextFunction } from "express";
import type { CoachService } from "./coach.service.js";
import { coachSuggestSchema, coachSaveSchema } from "./coach.validation.js";

export class CoachController {
  constructor(private readonly coachService: CoachService) {}

  async suggest(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user) {
        res.status(401).json({ message: "Authentication required" });
        return;
      }

      const result = coachSuggestSchema.safeParse(req.body);
      if (!result.success) {
        res
          .status(400)
          .json({ message: "Validation failed", errors: result.error.flatten() });
        return;
      }

      const advice = await this.coachService.suggest(result.data, req.user.id);
      res.json({ advice });
    } catch (err) {
      next(err);
    }
  }

  async saveAdvice(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user) {
        res.status(401).json({ message: "Authentication required" });
        return;
      }

      const result = coachSaveSchema.safeParse(req.body);
      if (!result.success) {
        res
          .status(400)
          .json({ message: "Validation failed", errors: result.error.flatten() });
        return;
      }

      const saved = await this.coachService.saveAdvice(
        req.user.id,
        result.data.content,
        result.data.trigger,
        result.data.title,
      );
      res.status(201).json(saved);
    } catch (err) {
      next(err);
    }
  }

  async getSavedAdvice(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user) {
        res.status(401).json({ message: "Authentication required" });
        return;
      }

      const advice = await this.coachService.getSavedAdvice(req.user.id);
      res.json({ advice });
    } catch (err) {
      next(err);
    }
  }

  async deleteAdvice(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user) {
        res.status(401).json({ message: "Authentication required" });
        return;
      }

      const adviceId = Number(req.params["id"]);
      if (!adviceId || isNaN(adviceId)) {
        res.status(400).json({ message: "Invalid advice ID" });
        return;
      }

      await this.coachService.deleteAdvice(req.user.id, adviceId);
      res.json({ message: "Advice deleted" });
    } catch (err) {
      next(err);
    }
  }
}
