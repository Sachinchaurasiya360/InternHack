import { Router } from "express";
import { CompanyController } from "./company.controller.js";
import { CompanyService } from "./company.service.js";
import { authMiddleware } from "../../middleware/auth.middleware.js";
import { requireRole } from "../../middleware/role.middleware.js";

const companyService = new CompanyService();
const companyController = new CompanyController(companyService);

export const companyRouter = Router();

// Public routes
companyRouter.get("/cities", (req, res, next) => companyController.getCities(req, res, next));
companyRouter.get("/", (req, res, next) => companyController.listCompanies(req, res, next));
companyRouter.get("/:slug", (req, res, next) => companyController.getCompanyBySlug(req, res, next));
companyRouter.get("/:slug/reviews", (req, res, next) => companyController.getCompanyReviews(req, res, next));

// Student routes (authenticated)
companyRouter.post("/:slug/reviews", authMiddleware, requireRole("STUDENT"), (req, res, next) => companyController.submitReview(req, res, next));
companyRouter.post("/contribute", authMiddleware, requireRole("STUDENT"), (req, res, next) => companyController.contributeCompany(req, res, next));
companyRouter.post("/:slug/contribute/edit", authMiddleware, requireRole("STUDENT"), (req, res, next) => companyController.suggestEdit(req, res, next));
companyRouter.post("/:slug/contribute/contact", authMiddleware, requireRole("STUDENT"), (req, res, next) => companyController.addContact(req, res, next));
