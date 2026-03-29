import { z } from "zod";

export const leetcodeCalendarSchema = z.object({
  username: z.string().min(1).max(50, "Username too long"),
});

export const leetcodeCalendarQuerySchema = z.object({
  year: z.coerce.number().int().min(2015).max(2030).optional(),
});
