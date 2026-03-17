import { Router } from "express";
import { EmailCampaignController } from "./email-campaign.controller.js";
import { authMiddleware } from "../../middleware/auth.middleware.js";
import { requireRole } from "../../middleware/role.middleware.js";

const controller = new EmailCampaignController();
export const emailCampaignRouter = Router();

// All routes require authenticated student
const auth = [authMiddleware, requireRole("STUDENT")] as const;

emailCampaignRouter.post("/chat", ...auth, (req, res, next) => controller.chat(req, res, next));
emailCampaignRouter.post("/preview", ...auth, (req, res, next) => controller.preview(req, res, next));
emailCampaignRouter.post("/", ...auth, (req, res, next) => controller.create(req, res, next));
emailCampaignRouter.get("/", ...auth, (req, res, next) => controller.list(req, res, next));
emailCampaignRouter.get("/:id", ...auth, (req, res, next) => controller.get(req, res, next));
emailCampaignRouter.post("/:id/start", ...auth, (req, res, next) => controller.start(req, res, next));
emailCampaignRouter.post("/:id/pause", ...auth, (req, res, next) => controller.pause(req, res, next));
emailCampaignRouter.post("/:id/resume", ...auth, (req, res, next) => controller.resume(req, res, next));
emailCampaignRouter.delete("/:id", ...auth, (req, res, next) => controller.delete(req, res, next));
