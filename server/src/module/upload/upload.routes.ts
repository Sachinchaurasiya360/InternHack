import { Router } from "express";
import { rateLimit } from "express-rate-limit";
import { UploadController } from "./upload.controller.js";
import { authMiddleware } from "../../middleware/auth.middleware.js";

const uploadController = new UploadController();

export const uploadRouter = Router();

// Protect all upload routes
uploadRouter.use(authMiddleware);

const presignedUrlRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 20, // Limit each IP to 20 presigned URL requests per window
  message: { message: "Too many upload requests, please try again after 15 minutes" },
  standardHeaders: true,
  legacyHeaders: false,
});

import { validateBody, presignRequestSchema, uploadProfilePicSchema, uploadCoverImageSchema, uploadResumeSchema, deleteResumeSchema } from "./upload.validation.js";


// NEW: Route to generate pre-signed URL for direct client-to-S3 uploads
uploadRouter.post(
  "/presigned-url",
  presignedUrlRateLimit,
  validateBody(presignRequestSchema),
  (req, res) => uploadController.getPresignedUrl(req, res)
);

// UPDATED: Profile-specific endpoints with S3 URL validation
// These expect a JSON body like: { "fileUrl": "https://authorized-bucket.s3..." }
uploadRouter.post(
  "/profile-pic",
  validateBody(uploadProfilePicSchema),
  (req, res) => uploadController.uploadProfilePic(req, res)
);

uploadRouter.post(
  "/cover-image",
  validateBody(uploadCoverImageSchema),
  (req, res) => uploadController.uploadCoverImage(req, res)
);

uploadRouter.post(
  "/profile-resume",
  validateBody(uploadResumeSchema),
  (req, res) => uploadController.uploadProfileResume(req, res)
);
uploadRouter.delete("/profile-resume", validateBody(deleteResumeSchema), (req, res) => uploadController.deleteProfileResume(req, res));
