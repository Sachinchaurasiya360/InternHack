import { Router } from "express";

import { authMiddleware } from "../../middleware/auth.middleware.js";
import { requireRole } from "../../middleware/role.middleware.js";

import { TeammateController } from "./teammate.controller.js";
import { TeammateService } from "./teammate.service.js";

const teammateService =
  new TeammateService();

const teammateController =
  new TeammateController(
    teammateService,
  );

export const teammateRouter =
  Router();

teammateRouter.get(
  "/",
  (req, res, next) =>
    teammateController.getProfiles(
      req,
      res,
      next,
    ),
);

teammateRouter.post(
  "/profile",
  authMiddleware,
  requireRole("STUDENT"),
  (req, res, next) =>
    teammateController.createProfile(
      req,
      res,
      next,
    ),
);

teammateRouter.post(
  "/invite",
  authMiddleware,
  requireRole("STUDENT"),
  (req, res, next) =>
    teammateController.sendInvitation(
      req,
      res,
      next,
    ),
);