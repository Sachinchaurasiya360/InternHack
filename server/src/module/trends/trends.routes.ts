import { Router } from "express";
import { TrendsController } from "./trends.controller.js";
import { TrendsService } from "./trends.service.js";

const trendsService = new TrendsService();
const trendsController = new TrendsController(trendsService);

export const trendsRouter = Router();

// All endpoints are public — no auth middleware
trendsRouter.get("/overview", (req, res) => trendsController.getOverview(req, res));
trendsRouter.get("/skills", (req, res) => trendsController.getTopSkills(req, res));
trendsRouter.get("/locations", (req, res) => trendsController.getTopLocations(req, res));
trendsRouter.get("/salaries", (req, res) => trendsController.getSalaryInsights(req, res));
trendsRouter.get("/timeline", (req, res) => trendsController.getTimeline(req, res));
trendsRouter.get("/supply", (req, res) => trendsController.getSkillSupply(req, res));
