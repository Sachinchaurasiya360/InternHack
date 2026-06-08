import type { Request, Response, NextFunction } from "express";
import { SolutionReviewService } from "./solution-review.service.js";
import { submitReviewSchema } from "./solution-review.validation.js";

const service = new SolutionReviewService();

export class SolutionReviewController {
  async submit(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const userId = req.user!.id;
      const parsed = submitReviewSchema.parse(req.body);
      const result = await service.submitReview(userId, parsed);
      res.status(201).json(result);
    } catch (err) {
      next(err);
    }
  }

  async history(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const userId = req.user!.id;
      const history = await service.getHistory(userId);
      res.json({ reviews: history });
    } catch (err) {
      next(err);
    }
  }

  async detail(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const userId = req.user!.id;
      const id = Number(req.params.id);
      if (isNaN(id)) {
        res.status(400).json({ error: "Invalid review ID" });
        return;
      }
      const record = await service.getReviewDetail(id, userId);
      if (!record) {
        res.status(404).json({ error: "Review not found" });
        return;
      }
      res.json(record);
    } catch (err) {
      next(err);
    }
  }
}
