import { Router } from "express";
import { PortfolioController } from "./portfolio.controller.js";

const controller = new PortfolioController();

export const portfolioRouter = Router();

portfolioRouter.get("/:slug", (req, res, next) => controller.getBySlug(req, res, next));
