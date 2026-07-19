import { z } from "zod";

export const createTrackedGrantSchema = z.object({
  grantName: z.string().min(1).max(200),
  organization: z.string().min(1).max(200),
  deadline: z.string().nullable().optional(),
});

export const updateTrackedGrantSchema = z.object({
  status: z.enum(["INTERESTED", "PREPARING", "APPLIED", "ACCEPTED", "REJECTED"]).optional(),
  notes: z.string().max(2000).optional(),
  deadline: z.string().nullable().optional(),
});
