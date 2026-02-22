import { Router } from "express";
import { UploadController } from "./upload.controller.js";
import { authMiddleware } from "../../middleware/auth.middleware.js";
import { uploadSingle, uploadResume, uploadImage } from "../../middleware/upload.middleware.js";

const uploadController = new UploadController();

export const uploadRouter = Router();

uploadRouter.use(authMiddleware);

// Generic uploads (used by ATS etc.)
uploadRouter.post("/resume", uploadResume, (req, res) => uploadController.uploadFile(req, res));
uploadRouter.post("/attachment", uploadSingle, (req, res) => uploadController.uploadFile(req, res));

// Profile-specific uploads
uploadRouter.post("/profile-pic", uploadImage, (req, res) => uploadController.uploadProfilePic(req, res));
uploadRouter.post("/profile-resume", uploadResume, (req, res) => uploadController.uploadProfileResume(req, res));
uploadRouter.delete("/profile-resume", (req, res) => uploadController.deleteProfileResume(req, res));
