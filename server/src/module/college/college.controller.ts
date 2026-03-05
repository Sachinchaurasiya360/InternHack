import type { Request, Response, NextFunction } from "express";
import { CollegeService } from "./college.service.js";
import {
  listCollegesSchema,
  submitCollegeReviewSchema,
  compareCollegesSchema,
  getCutoffsSchema,
} from "./college.validation.js";

export class CollegeController {
  constructor(private service: CollegeService) {}

  async listColleges(req: Request, res: Response, next: NextFunction) {
    try {
      const result = listCollegesSchema.safeParse(req.query);
      if (!result.success) {
        return res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });
      }
      const data = await this.service.listColleges(result.data);
      res.json(data);
    } catch (err) {
      next(err);
    }
  }

  async getFilterStats(_req: Request, res: Response, next: NextFunction) {
    try {
      const data = await this.service.getFilterStats();
      res.json(data);
    } catch (err) {
      next(err);
    }
  }

  async getStates(_req: Request, res: Response, next: NextFunction) {
    try {
      const data = await this.service.getStatesWithCounts();
      res.json(data);
    } catch (err) {
      next(err);
    }
  }

  async getCollegeBySlug(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await this.service.getCollegeBySlug(req.params["slug"]!);
      res.json(data);
    } catch (err) {
      if (err instanceof Error && err.message === "College not found") {
        return res.status(404).json({ message: "College not found" });
      }
      next(err);
    }
  }

  async getCollegeCourses(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await this.service.getCollegeCourses(req.params["slug"]!);
      res.json(data);
    } catch (err) {
      if (err instanceof Error && err.message === "College not found") {
        return res.status(404).json({ message: "College not found" });
      }
      next(err);
    }
  }

  async getCollegePlacements(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await this.service.getCollegePlacements(req.params["slug"]!);
      res.json(data);
    } catch (err) {
      if (err instanceof Error && err.message === "College not found") {
        return res.status(404).json({ message: "College not found" });
      }
      next(err);
    }
  }

  async getCollegeCutoffs(req: Request, res: Response, next: NextFunction) {
    try {
      const parsed = getCutoffsSchema.safeParse(req.query);
      if (!parsed.success) {
        return res.status(400).json({ message: "Validation failed", errors: parsed.error.flatten() });
      }
      const data = await this.service.getCollegeCutoffs(req.params["slug"]!, parsed.data);
      res.json(data);
    } catch (err) {
      if (err instanceof Error && err.message === "College not found") {
        return res.status(404).json({ message: "College not found" });
      }
      next(err);
    }
  }

  async getCollegeReviews(req: Request, res: Response, next: NextFunction) {
    try {
      const sort = req.query["sort"] ? String(req.query["sort"]) : "latest";
      const data = await this.service.getCollegeReviews(req.params["slug"]!, sort);
      res.json(data);
    } catch (err) {
      if (err instanceof Error && err.message === "College not found") {
        return res.status(404).json({ message: "College not found" });
      }
      next(err);
    }
  }

  async submitReview(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user) return res.status(401).json({ message: "Authentication required" });

      const parsed = submitCollegeReviewSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ message: "Validation failed", errors: parsed.error.flatten() });
      }

      const data = await this.service.submitReview(req.params["slug"]!, req.user.id, parsed.data);
      res.status(201).json({ message: "Review submitted for approval", data });
    } catch (err) {
      if (err instanceof Error) {
        if (err.message === "College not found") return res.status(404).json({ message: err.message });
        if (err.message.includes("already submitted")) return res.status(409).json({ message: err.message });
      }
      next(err);
    }
  }

  async compareColleges(req: Request, res: Response, next: NextFunction) {
    try {
      const parsed = compareCollegesSchema.safeParse(req.query);
      if (!parsed.success) {
        return res.status(400).json({ message: "Validation failed", errors: parsed.error.flatten() });
      }
      const data = await this.service.compareColleges(parsed.data.ids);
      res.json(data);
    } catch (err) {
      if (err instanceof Error && err.message.includes("2 to 4")) {
        return res.status(400).json({ message: err.message });
      }
      next(err);
    }
  }

  async getCollegesByExam(req: Request, res: Response, next: NextFunction) {
    try {
      const listParams = listCollegesSchema.safeParse(req.query);
      if (!listParams.success) {
        return res.status(400).json({ message: "Validation failed", errors: listParams.error.flatten() });
      }

      const exam = await this.service.getExamBySlug(req.params["examSlug"]!);
      const data = await this.service.getCollegesByExam(req.params["examSlug"]!, listParams.data);
      res.json({ exam, ...data });
    } catch (err) {
      if (err instanceof Error && err.message === "Exam not found") {
        return res.status(404).json({ message: "Exam not found" });
      }
      next(err);
    }
  }
}
