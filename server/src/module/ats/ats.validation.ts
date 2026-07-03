import { z } from "zod";

const S3_BUCKET = process.env["AWS_S3_BUCKET"] || "";

function isAllowedUrl(url: string): boolean {
  if (url.startsWith("/uploads/")) return true;
  if (!S3_BUCKET) return url.startsWith("https://");
  try {
    const parsed = new URL(url);
    if (parsed.protocol !== "https:") return false;
    return (
      parsed.hostname === `${S3_BUCKET}.s3.amazonaws.com` ||
      (parsed.hostname.startsWith(`${S3_BUCKET}.s3.`) &&
        parsed.hostname.endsWith(".amazonaws.com"))
    );
  } catch {
    return false;
  }
}

export const scoreResumeSchema = z.object({
  resumeUrl: z
    .string()
    .min(1, "Resume URL is required")
    .refine(isAllowedUrl, "Resume URL must be an S3 URL or local upload path"),
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
