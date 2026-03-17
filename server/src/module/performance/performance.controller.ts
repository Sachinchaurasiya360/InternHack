import type { Request, Response } from "express";
import type { PerformanceService } from "./performance.service.js";
import { createReviewSchema, updateReviewSchema, submitReviewSchema, reviewQuerySchema } from "./performance.validation.js";

export class PerformanceController {
  constructor(private readonly performanceService: PerformanceService) {}

  async createReview(req: Request, res: Response) {
    try {
      const result = createReviewSchema.safeParse(req.body);
      if (!result.success) return res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });

      const review = await this.performanceService.createReview(result.data);
      return res.status(201).json({ message: "Review created", review });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getMyReviews(req: Request, res: Response) {
    try {
      const employeeId = Number(req.query["employeeId"]);
      if (isNaN(employeeId)) return res.status(400).json({ message: "employeeId required" });

      const query = reviewQuerySchema.parse(req.query);
      const data = await this.performanceService.getMyReviews(employeeId, query);
      return res.json(data);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getTeamReviews(req: Request, res: Response) {
    try {
      const reviewerId = Number(req.query["reviewerId"]);
      if (isNaN(reviewerId)) return res.status(400).json({ message: "reviewerId required" });

      const query = reviewQuerySchema.parse(req.query);
      const data = await this.performanceService.getTeamReviews(reviewerId, query);
      return res.json(data);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const id = Number(req.params["id"]);
      if (isNaN(id)) return res.status(400).json({ message: "Invalid review ID" });

      const review = await this.performanceService.getById(id);
      return res.json({ review });
    } catch (error) {
      if (error instanceof Error && error.message === "Review not found")
        return res.status(404).json({ message: error.message });
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const id = Number(req.params["id"]);
      if (isNaN(id)) return res.status(400).json({ message: "Invalid review ID" });

      const result = updateReviewSchema.safeParse(req.body);
      if (!result.success) return res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });

      const review = await this.performanceService.update(id, result.data);
      return res.json({ message: "Review updated", review });
    } catch (error) {
      if (error instanceof Error && error.message === "Review not found")
        return res.status(404).json({ message: error.message });
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async submitReview(req: Request, res: Response) {
    try {
      const id = Number(req.params["id"]);
      if (isNaN(id)) return res.status(400).json({ message: "Invalid review ID" });

      const result = submitReviewSchema.safeParse(req.body);
      if (!result.success) return res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });

      const review = await this.performanceService.submitReview(id, result.data.status);
      return res.json({ message: "Review submitted", review });
    } catch (error) {
      if (error instanceof Error && error.message === "Review not found")
        return res.status(404).json({ message: error.message });
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
