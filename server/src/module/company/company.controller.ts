import type { Request, Response, NextFunction } from "express";
import type { CompanyService } from "./company.service.js";
import {
  listCompaniesSchema,
  submitReviewSchema,
  contributeCompanySchema,
  suggestEditSchema,
  addContactSchema,
} from "./company.validation.js";

export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  async listCompanies(req: Request, res: Response, next: NextFunction) {
    try {
      const result = listCompaniesSchema.safeParse(req.query);
      if (!result.success) {
        res.status(400).json({ message: "Invalid query parameters", errors: result.error.flatten() });
        return;
      }

      const data = await this.companyService.listCompanies(result.data as Parameters<CompanyService["listCompanies"]>[0]);
      res.json(data);
    } catch (err) {
      next(err);
    }
  }

  async getCompanyBySlug(req: Request, res: Response, next: NextFunction) {
    try {
      const slug = String(req.params["slug"] || "");
      if (!slug) {
        res.status(400).json({ message: "Slug is required" });
        return;
      }

      const company = await this.companyService.getCompanyBySlug(slug);
      res.json({ company });
    } catch (err) {
      if (err instanceof Error && err.message === "Company not found") {
        res.status(404).json({ message: err.message });
        return;
      }
      next(err);
    }
  }

  async getCompanyReviews(req: Request, res: Response, next: NextFunction) {
    try {
      const slug = String(req.params["slug"] || "");
      if (!slug) {
        res.status(400).json({ message: "Slug is required" });
        return;
      }

      const sort = (req.query["sort"] as string) || "latest";
      const reviews = await this.companyService.getCompanyReviews(slug, sort);
      res.json({ reviews });
    } catch (err) {
      if (err instanceof Error && err.message === "Company not found") {
        res.status(404).json({ message: err.message });
        return;
      }
      next(err);
    }
  }

  async getCities(req: Request, res: Response, next: NextFunction) {
    try {
      const cities = await this.companyService.getCitiesWithCounts();
      res.json({ cities });
    } catch (err) {
      next(err);
    }
  }

  async submitReview(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user) {
        res.status(401).json({ message: "Authentication required" });
        return;
      }

      const slug = String(req.params["slug"] || "");
      if (!slug) {
        res.status(400).json({ message: "Slug is required" });
        return;
      }

      const result = submitReviewSchema.safeParse(req.body);
      if (!result.success) {
        res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });
        return;
      }

      const review = await this.companyService.submitReview(slug, req.user.id, result.data);
      res.status(201).json({ message: "Review submitted for moderation", review });
    } catch (err) {
      if (err instanceof Error) {
        if (err.message === "Company not found") {
          res.status(404).json({ message: err.message });
          return;
        }
        if (err.message.includes("already submitted")) {
          res.status(409).json({ message: err.message });
          return;
        }
      }
      next(err);
    }
  }

  async contributeCompany(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user) {
        res.status(401).json({ message: "Authentication required" });
        return;
      }

      const result = contributeCompanySchema.safeParse(req.body);
      if (!result.success) {
        res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });
        return;
      }

      const contribution = await this.companyService.contributeCompany(req.user.id, result.data as Parameters<CompanyService["contributeCompany"]>[1]);
      res.status(201).json({ message: "Company submitted for admin review", contribution });
    } catch (err) {
      next(err);
    }
  }

  async suggestEdit(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user) {
        res.status(401).json({ message: "Authentication required" });
        return;
      }

      const slug = String(req.params["slug"] || "");
      if (!slug) {
        res.status(400).json({ message: "Slug is required" });
        return;
      }

      const result = suggestEditSchema.safeParse(req.body);
      if (!result.success) {
        res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });
        return;
      }

      const contribution = await this.companyService.suggestEdit(slug, req.user.id, result.data.changes as Record<string, unknown>, result.data.reason);
      res.status(201).json({ message: "Edit suggestion submitted for review", contribution });
    } catch (err) {
      if (err instanceof Error && err.message === "Company not found") {
        res.status(404).json({ message: err.message });
        return;
      }
      next(err);
    }
  }

  async addContact(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user) {
        res.status(401).json({ message: "Authentication required" });
        return;
      }

      const slug = String(req.params["slug"] || "");
      if (!slug) {
        res.status(400).json({ message: "Slug is required" });
        return;
      }

      const result = addContactSchema.safeParse(req.body);
      if (!result.success) {
        res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });
        return;
      }

      const contribution = await this.companyService.addContactContribution(slug, req.user.id, result.data as Parameters<CompanyService["addContactContribution"]>[2]);
      res.status(201).json({ message: "Contact submitted for review", contribution });
    } catch (err) {
      if (err instanceof Error && err.message === "Company not found") {
        res.status(404).json({ message: err.message });
        return;
      }
      next(err);
    }
  }
}
