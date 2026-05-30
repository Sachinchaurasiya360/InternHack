import { Router } from "express";
import rateLimit from "express-rate-limit";
import { createRateLimitStore } from "../../utils/rate-limit-store.js";
import { UploadController } from "./upload.controller.js";
import { authMiddleware } from "../../middleware/auth.middleware.js";
import { usageLimit } from "../../middleware/usage-limit.middleware.js";

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
  store: createRateLimitStore("upload"),
});

import { validateBody, presignRequestSchema } from "./upload.validation.js";

const presignedUsageLimit = (req: any, res: any, next: any) => {
  if (req.body && req.body.folder === "resumes") {
    return usageLimit("GENERATE_RESUME")(req, res, next);
  }
  next();
};

// NEW: Route to generate pre-signed URL for direct client-to-S3 uploads
uploadRouter.post(
  "/presigned-url",
  presignedUrlRateLimit,
  validateBody(presignRequestSchema),
  presignedUsageLimit,
  (req, res) => uploadController.getPresignedUrl(req, res)
);

// UPDATED: Profile-specific endpoints (No more multer middleware!)
// These now expect a JSON body like: { "fileUrl": "https://..." }
uploadRouter.post("/profile-pic", (req, res) => uploadController.uploadProfilePic(req, res));
uploadRouter.post("/cover-image", (req, res) => uploadController.uploadCoverImage(req, res));
uploadRouter.post("/profile-resume", usageLimit("GENERATE_RESUME"), (req, res) => uploadController.uploadProfileResume(req, res));
uploadRouter.delete("/profile-resume", (req, res) => uploadController.deleteProfileResume(req, res));