import { z } from "zod";
import type { Request, Response, NextFunction } from "express";

// Helper function to validate S3 URLs from authorized bucket
const validateS3Url = (url: string): boolean => {
  const allowedBucket = process.env.AWS_S3_BUCKET || "internhack-uploads";
  const region = process.env.AWS_REGION || "ap-south-1";

  // Check if URL is from authorized S3 bucket
  const validPatterns = [
    `https://${allowedBucket}.s3.amazonaws.com/`,
    `https://${allowedBucket}.s3.${region}.amazonaws.com/`,
    `https://${allowedBucket}.s3-${region}.amazonaws.com/`,
  ];

  return validPatterns.some((pattern) => url.startsWith(pattern));
};

export const deleteResumeSchema = z.object({
  url: z.string().url("Valid resume URL is required"),
});

export const presignRequestSchema = z.object({
  fileName: z.string().min(1, "fileName is required"),
  fileType: z.string().min(1, "fileType is required"),
  folder: z.enum(["resumes", "profile-pics", "cover-images", "company-logos"], {
    message: "Invalid or unauthorized folder. Allowed: resumes, profile-pics, cover-images, company-logos",
  }),
});

export const guestPresignRequestSchema = z.object({
  fileName: z.string().min(1, "fileName is required"),
  fileType: z.literal("application/pdf", {
    message: "Only PDF resumes are allowed for guest uploads",
  }),
});
// Schema for uploading profile picture with S3 URL validation
export const uploadProfilePicSchema = z.object({
  fileUrl: z.string().url("Valid file URL required").refine(
    validateS3Url,
    "File must be from authorized S3 bucket"
  ),
});

// Schema for uploading cover image with S3 URL validation
export const uploadCoverImageSchema = z.object({
  fileUrl: z.string().url("Valid file URL required").refine(
    validateS3Url,
    "File must be from authorized S3 bucket"
  ),
});

// Schema for uploading resume with S3 URL validation
export const uploadResumeSchema = z.object({
  fileUrl: z.string().url("Valid file URL required").refine(
    validateS3Url,
    "File must be from authorized S3 bucket"
  ),
});

export const validateBody = (schema: z.ZodSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({
        message: "Validation failed",
        errors: result.error.issues.map((e) => e.message),
      });
    }
    req.body = result.data;
    next();
  };
};
