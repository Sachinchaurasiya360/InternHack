import { z } from "zod";

const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export const roadmapSlugParam = z.object({
  slug: z.string().regex(SLUG_RE, "Invalid roadmap slug"),
});

export const topicSlugParam = z.object({
  slug: z.string().regex(SLUG_RE),
  topicSlug: z.string().regex(SLUG_RE),
});

export const enrollmentIdParam = z.object({
  id: z.coerce.number().int().positive(),
});

export const enrollmentTopicParams = z.object({
  id: z.coerce.number().int().positive(),
  topicId: z.coerce.number().int().positive(),
});

const DAY = z.enum(["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"]);

export const enrollSchema = z.object({
  hoursPerWeek: z.number().int().min(2).max(40),
  preferredDays: z.array(DAY).min(1).max(7),
  experienceLevel: z.enum(["NEW", "SOME", "EXPERIENCED"]),
  goal: z.enum(["JOB_READY", "SIDE_PROJECT", "SCHOOL", "CURIOUS"]),
});
export type EnrollInput = z.infer<typeof enrollSchema>;

export const updateProgressSchema = z.object({
  status: z.enum(["NOT_STARTED", "IN_PROGRESS", "COMPLETED", "SKIPPED"]).optional(),
  bookmarked: z.boolean().optional(),
  notes: z.string().max(5000).optional(),
}).refine(
  (v) => v.status !== undefined || v.bookmarked !== undefined || v.notes !== undefined,
  { message: "Provide at least one field" },
);

export const recomputePaceSchema = z.object({
  hoursPerWeek: z.number().int().min(2).max(40),
});

export const listQuerySchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(50).default(20),
  level: z.enum(["BEGINNER", "INTERMEDIATE", "ADVANCED", "ALL_LEVELS"]).optional(),
});

export const aiGenerateSchema = z.object({
  goalDescription: z.string().min(10, "Tell us a bit more about your goal").max(500),
  experienceLevel: z.enum(["NEW", "SOME", "EXPERIENCED"]),
  background: z.enum(["CS_STUDENT", "SELF_TAUGHT", "CAREER_SWITCHER", "HOBBYIST", "WORKING_PRO"]),
  goal: z.enum(["JOB_READY", "SIDE_PROJECT", "SCHOOL", "CURIOUS"]),
  hoursPerWeek: z.number().int().min(2).max(40),
  preferredDays: z.array(z.enum(["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"])).min(1).max(7),
  knownSkills: z.array(z.string().max(40)).max(20).default([]),
  mustInclude: z.array(z.string().max(40)).max(20).default([]),
  avoid: z.array(z.string().max(40)).max(20).default([]),
});
export type AiGenerateInput = z.infer<typeof aiGenerateSchema>;
