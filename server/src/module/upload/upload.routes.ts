import { Router } from "express";
import { UploadController } from "./upload.controller.js";
import { authMiddleware } from "../../middleware/auth.middleware.js";

const uploadController = new UploadController();

export const uploadRouter = Router();

// Protect all upload routes
uploadRouter.use(authMiddleware);

// NEW: Route to generate pre-signed URL for direct client-to-S3 uploads
uploadRouter.post("/presigned-url", (req, res) => uploadController.getPresignedUrl(req, res));

// UPDATED: Profile-specific endpoints (No more multer middleware!)
// These now expect a JSON body like: { "fileUrl": "https://..." }
uploadRouter.post("/profile-pic", (req, res) => uploadController.uploadProfilePic(req, res));
uploadRouter.post("/cover-image", (req, res) => uploadController.uploadCoverImage(req, res));
uploadRouter.post("/profile-resume", (req, res) => uploadController.uploadProfileResume(req, res));
uploadRouter.delete("/profile-resume", (req, res) => uploadController.deleteProfileResume(req, res));