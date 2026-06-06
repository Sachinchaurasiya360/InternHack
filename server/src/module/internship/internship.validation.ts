import { z } from "zod";

export const internshipListQuerySchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(50).default(24),
  search: z.string().optional(),
  category: z.string().optional(),
});

export const createGovInternshipSchema = z.object({
  name: z.string().min(1, "Name is required"),
  category: z.string().min(1, "Category is required"),
  timeline: z.string().min(1, "Timeline is required"),
  organizer: z.string().min(1, "Organizer is required"),
  domain: z.string().min(1, "Domain is required"),
  stipend: z.string().min(1, "Stipend is required").max(500),
  eligibility: z.string().min(1, "Eligibility is required"),
  reality: z.string().min(1, "Reality is required"),
  applyUrl: z.string().url("Must be a valid URL").regex(/^https?:\/\//i, "Must be a valid http(s) URL").optional().nullable(),
});

export const updateGovInternshipSchema = createGovInternshipSchema.partial();
