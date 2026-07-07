import { Router } from "express";
import { rateLimit } from "express-rate-limit";
import { UploadController } from "./upload.controller.js";
import { authMiddleware } from "../../middleware/auth.middleware.js";
import {
  validateBody,
  presignRequestSchema,
  guestPresignRequestSchema,
} from "./upload.validation.js";

const uploadController = new UploadController();

export const uploadRouter = Router();

const presignedUrlRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  message: { message: "Too many upload requests, please try again after 15 minutes" },
  standardHeaders: true,
  legacyHeaders: false,
});

const guestPresignedUrlRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  message: { message: "Too many guest upload requests, please try again after 15 minutes" },
  standardHeaders: true,
  legacyHeaders: false,
});

// Public guest upload (before auth middleware)
uploadRouter.post(
  "/guest-presigned-url",
  guestPresignedUrlRateLimit,
  validateBody(guestPresignRequestSchema),
  (req, res) => uploadController.getGuestPresignedUrl(req, res),
);

// Protect all remaining upload routes
uploadRouter.use(authMiddleware);

uploadRouter.post(
  "/presigned-url",
  presignedUrlRateLimit,
  validateBody(presignRequestSchema),
  (req, res) => uploadController.getPresignedUrl(req, res),
);

uploadRouter.post("/profile-pic", (req, res) => uploadController.uploadProfilePic(req, res));
uploadRouter.post("/cover-image", (req, res) => uploadController.uploadCoverImage(req, res));
uploadRouter.post("/profile-resume", (req, res) => uploadController.uploadProfileResume(req, res));
uploadRouter.delete("/profile-resume", (req, res) => uploadController.deleteProfileResume(req, res));
