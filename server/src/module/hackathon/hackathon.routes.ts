import { Router } from "express";
import { authMiddleware } from "../../middleware/auth.middleware.js";
import { requireRole } from "../../middleware/role.middleware.js";
import { HackathonController } from "./hackathon.controller.js";
import { HackathonService } from "./hackathon.service.js";

const hackathonService = new HackathonService();
const hackathonController = new HackathonController(hackathonService);

export const hackathonRouter = Router();

hackathonRouter.get("/", (req, res) => hackathonController.listHackathons(req, res));

hackathonRouter.get(
  "/my",
  authMiddleware,
  requireRole("STUDENT"),
  (req, res) => hackathonController.myParticipations(req, res),
);

hackathonRouter.post(
  "/:id/participate",
  authMiddleware,
  requireRole("STUDENT"),
  (req, res) => hackathonController.participate(req, res),
);

hackathonRouter.delete(
  "/:id/participate",
  authMiddleware,
  requireRole("STUDENT"),
  (req, res) => hackathonController.removeParticipation(req, res),
);
