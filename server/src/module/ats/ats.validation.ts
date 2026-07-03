import { z } from "zod";

export const scoreResumeSchema = z.object({
  resumeUrl: z
    .string()
    .min(1, "Resume URL is required")
    .refine(
      (url) => url.startsWith("https://") || url.startsWith("/uploads/"),
      "Resume URL must be an S3 URL or local upload path",
    ),
  jobTitle: z.string().max(200).optional(),
  jobDescription: z.string().max(5000).optional(),
});

export const applySuggestionsSchema = scoreResumeSchema.extend({
  suggestions: z.array(z.string()).min(1, "At least one suggestion is required"),
});

export function guestScoreResumeSchema(ipHash: string) {
  const prefix = `guest-resumes/${ipHash}/`;
  return z.object({
    resumeUrl: z
      .string()
      .min(1, "Resume URL is required")
      .refine(
        (url) => {
          const normalized = url.split("?")[0] ?? url;
          return normalized.startsWith("https://") && normalized.includes(prefix);
        },
        "Resume URL must be a guest upload from this session",
      ),
    jobTitle: z.string().max(200).optional(),
    jobDescription: z.string().max(5000).optional(),
  });
}
