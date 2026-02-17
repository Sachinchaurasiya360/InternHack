import type { Request, Response, NextFunction } from "express";
import type { CareerService } from "./career.service.js";
import { enrollSchema } from "./career.validation.js";

export class CareerController {
  constructor(private readonly careerService: CareerService) {}

  async listCareers(_req: Request, res: Response, next: NextFunction) {
    try {
      const careers = await this.careerService.listCareers();
      res.json({ careers });
    } catch (err) {
      next(err);
    }
  }

  async getCareerBySlug(req: Request, res: Response, next: NextFunction) {
    try {
      const slug = String(req.params["slug"] ?? "");
      if (!slug) {
        res.status(400).json({ message: "Slug is required" });
        return;
      }

      const career = await this.careerService.getCareerBySlug(slug);

      // If authenticated student, include enrollment status
      let enrolled = false;
      if (req.user) {
        enrolled = await this.careerService.isEnrolled(req.user.id, career.id);
      }

      res.json({ career, enrolled });
    } catch (err) {
      if (err instanceof Error && err.message === "Career not found") {
        res.status(404).json({ message: err.message });
        return;
      }
      next(err);
    }
  }

  async enroll(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user) {
        res.status(401).json({ message: "Authentication required" });
        return;
      }

      const result = enrollSchema.safeParse(req.body);
      if (!result.success) {
        res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });
        return;
      }

      const enrollment = await this.careerService.enrollStudent(req.user.id, result.data.careerId);
      res.status(201).json({ message: "Enrolled successfully", enrollment });
    } catch (err) {
      if (err instanceof Error) {
        if (err.message === "Career not found") {
          res.status(404).json({ message: err.message });
          return;
        }
        if (err.message === "Already enrolled in this career path") {
          res.status(409).json({ message: err.message });
          return;
        }
      }
      next(err);
    }
  }

  async unenroll(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user) {
        res.status(401).json({ message: "Authentication required" });
        return;
      }

      const careerId = parseInt(String(req.params["careerId"]), 10);
      if (isNaN(careerId)) {
        res.status(400).json({ message: "Invalid career ID" });
        return;
      }

      const result = await this.careerService.unenrollStudent(req.user.id, careerId);
      res.json(result);
    } catch (err) {
      if (err instanceof Error && err.message === "Not enrolled in this career path") {
        res.status(404).json({ message: err.message });
        return;
      }
      next(err);
    }
  }

  async getMyPaths(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user) {
        res.status(401).json({ message: "Authentication required" });
        return;
      }

      const paths = await this.careerService.getMyPaths(req.user.id);
      res.json({ paths });
    } catch (err) {
      next(err);
    }
  }

  async getMyPathDetail(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user) {
        res.status(401).json({ message: "Authentication required" });
        return;
      }

      const slug = String(req.params["slug"] ?? "");
      if (!slug) {
        res.status(400).json({ message: "Slug is required" });
        return;
      }

      const detail = await this.careerService.getMyPathDetail(req.user.id, slug);
      res.json(detail);
    } catch (err) {
      if (err instanceof Error) {
        if (err.message === "Career not found") {
          res.status(404).json({ message: err.message });
          return;
        }
        if (err.message === "Not enrolled in this career path") {
          res.status(403).json({ message: err.message });
          return;
        }
      }
      next(err);
    }
  }

  async toggleSkill(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user) {
        res.status(401).json({ message: "Authentication required" });
        return;
      }

      const skillId = parseInt(String(req.params["skillId"]), 10);
      if (isNaN(skillId)) {
        res.status(400).json({ message: "Invalid skill ID" });
        return;
      }

      const result = await this.careerService.toggleSkill(req.user.id, skillId);
      res.json(result);
    } catch (err) {
      if (err instanceof Error) {
        if (err.message === "Skill not found") {
          res.status(404).json({ message: err.message });
          return;
        }
        if (err.message === "Not enrolled in this career path") {
          res.status(403).json({ message: err.message });
          return;
        }
      }
      next(err);
    }
  }
}
