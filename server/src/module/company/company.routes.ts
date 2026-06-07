import { Router } from "express";
import { CompanyController } from "./company.controller.js";
import { CompanyService } from "./company.service.js";
import { authMiddleware, optionalAuthMiddleware } from "../../middleware/auth.middleware.js";
import { requireRole } from "../../middleware/role.middleware.js";
import { cacheMiddleware } from "../../middleware/cache.middleware.js";

const companyService = new CompanyService();
const companyController = new CompanyController(companyService);

export const companyRouter = Router();

// Public routes (optional auth for tier-based limits)
// /cities: static, rarely changes — heavy cache
companyRouter.get("/cities", cacheMiddleware(3600, "companies:cities"), (req, res, next) => companyController.getCities(req, res, next));
// /: tier-sensitive — service handles caching internally (tier baked into cache key)
companyRouter.get("/", optionalAuthMiddleware, (req, res, next) => companyController.listCompanies(req, res, next));
// /:slug: company detail — heavy cache (approved companies rarely change)
companyRouter.get("/:slug", cacheMiddleware(3600, "companies:detail"), (req, res, next) => companyController.getCompanyBySlug(req, res, next));
// /:slug/reviews: reviews added by users — shorter TTL
companyRouter.get("/:slug/reviews", cacheMiddleware(300, "companies:reviews"), (req, res, next) => companyController.getCompanyReviews(req, res, next));

// Student routes (authenticated)
companyRouter.post("/:slug/reviews", authMiddleware, requireRole("STUDENT"), (req, res, next) => companyController.submitReview(req, res, next));
companyRouter.post("/contribute", authMiddleware, requireRole("STUDENT"), (req, res, next) => companyController.contributeCompany(req, res, next));
companyRouter.post("/:slug/contribute/edit", authMiddleware, requireRole("STUDENT"), (req, res, next) => companyController.suggestEdit(req, res, next));
companyRouter.post("/:slug/contribute/contact", authMiddleware, requireRole("STUDENT"), (req, res, next) => companyController.addContact(req, res, next));
