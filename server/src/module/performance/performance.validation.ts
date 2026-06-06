import { z } from "zod";

export const createReviewSchema = z.object({
  employeeId: z.number().int().positive(),
  reviewerId: z.number().int().positive(),
  cycle: z.enum(["QUARTERLY", "HALF_YEARLY", "ANNUAL"]),
  period: z.string().min(1, "Period is required").max(50),
  goals: z.array(z.object({
    title: z.string().min(1),
    target: z.string().optional(),
    achieved: z.string().optional(),
    weight: z.number().min(0).max(100).optional(),
  })).default([]),
}).refine((data) => {
  const sum = data.goals.reduce((acc, curr) => acc + (curr.weight ?? 0), 0);
  return sum <= 100;
}, {
  message: "Total goals weight cannot exceed 100%",
  path: ["goals"],
});

export const updateReviewSchema = z.object({
  selfRating: z.number().min(1).max(5).optional(),
  managerRating: z.number().min(1).max(5).optional(),
  finalRating: z.number().min(1).max(5).optional(),
  selfComments: z.string().max(2000).optional(),
  managerComments: z.string().max(2000).optional(),
  goals: z.array(z.object({
    title: z.string().min(1),
    target: z.string().optional(),
    achieved: z.string().optional(),
    weight: z.number().min(0).max(100).optional(),
  })).optional(),
  strengths: z.string().max(1000).optional(),
  improvements: z.string().max(1000).optional(),
  promotionRecommended: z.boolean().optional(),
}).refine((data) => {
  if (!data.goals) return true;
  const sum = data.goals.reduce((acc, g) => acc + (g.weight ?? 0), 0);
  return sum <= 100;
}, { message: "Sum of goal weights must not exceed 100%" });

export const submitReviewSchema = z.object({
  status: z.enum(["SELF_REVIEW", "MANAGER_REVIEW", "CALIBRATION", "COMPLETED"]),
});

export const reviewQuerySchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().max(100).default(20),
  cycle: z.enum(["QUARTERLY", "HALF_YEARLY", "ANNUAL"]).optional(),
  period: z.string().optional(),
  status: z.enum(["DRAFT", "SELF_REVIEW", "MANAGER_REVIEW", "CALIBRATION", "COMPLETED"]).optional(),
});
