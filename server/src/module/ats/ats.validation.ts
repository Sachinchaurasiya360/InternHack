import { z } from "zod";

const BUCKET = process.env["AWS_S3_BUCKET"] || "";
const REGION = process.env["AWS_REGION"] || "ap-south-1";
const expectedHost = `${BUCKET}.s3.${REGION}.amazonaws.com`;

export const scoreResumeSchema = z.object({
  resumeUrl: z
    .string()
    .min(1, "Resume URL is required")
    .refine(
      (url) => {
        if (url.startsWith("/uploads/")) return true;
        try {
          const parsed = new URL(url);
          return parsed.hostname === expectedHost;
        } catch {
          return false;
        }
      },
      "Resume URL must be a valid S3 URL or local upload path",
    ),
  jobTitle: z.string().max(200).optional(),
  jobDescription: z.string().max(5000).optional(),
});

export const applySuggestionsSchema = scoreResumeSchema.extend({
  suggestions: z.array(z.string()).min(1, "At least one suggestion is required"),
});
