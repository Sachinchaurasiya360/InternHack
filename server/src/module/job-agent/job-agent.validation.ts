import { z } from "zod";

export const chatMessageSchema = z.object({
  message: z.string().min(1).max(2000),
});

export const emailJobsSchema = z.object({
  jobIds: z.array(z.number().int().positive()).min(1).max(20),
  context: z.string().max(200).optional(),
});
