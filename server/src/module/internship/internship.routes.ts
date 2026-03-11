import { Router } from "express";
import { InternshipController } from "./internship.controller.js";

const controller = new InternshipController();
export const internshipRouter = Router();

internshipRouter.get("/stats", (_req, res, next) => controller.stats(_req, res, next));
internshipRouter.get("/", (req, res, next) => controller.list(req, res, next));
