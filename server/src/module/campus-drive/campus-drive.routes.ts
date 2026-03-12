import { Router } from "express";
import { CampusDriveController } from "./campus-drive.controller.js";
import { CampusDriveService } from "./campus-drive.service.js";
import { authMiddleware } from "../../middleware/auth.middleware.js";
import { requireRole } from "../../middleware/role.middleware.js";

const campusDriveService = new CampusDriveService();
const campusDriveController = new CampusDriveController(campusDriveService);

export const campusDriveRouter = Router();

// All routes require authentication and RECRUITER role
campusDriveRouter.use(authMiddleware, requireRole("RECRUITER"));

// CRUD
campusDriveRouter.post("/", (req, res) => campusDriveController.createDrive(req, res));
campusDriveRouter.get("/my", (req, res) => campusDriveController.getMyDrives(req, res));
campusDriveRouter.get("/:id", (req, res) => campusDriveController.getDriveById(req, res));
campusDriveRouter.put("/:id", (req, res) => campusDriveController.updateDrive(req, res));
campusDriveRouter.delete("/:id", (req, res) => campusDriveController.deleteDrive(req, res));

// Status management
campusDriveRouter.patch("/:id/status", (req, res) => campusDriveController.updateDriveStatus(req, res));

// Registrations management
campusDriveRouter.get("/:id/registrations", (req, res) => campusDriveController.getDriveRegistrations(req, res));
campusDriveRouter.patch("/:id/registrations/:regId/status", (req, res) => campusDriveController.updateRegistrationStatus(req, res));
