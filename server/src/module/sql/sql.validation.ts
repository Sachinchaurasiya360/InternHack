import { z } from "zod";

export const saveProgressSchema = z.object({
  exerciseId: z
    .union([z.string(), z.number()])
    .transform(String)
    .refine((val) => val.length > 0, {
      message: "exerciseId cannot be empty",
    })
    .refine((val) => val.length <= 100, {
      message: "exerciseId must be 100 characters or fewer",
    })
    .refine((val) => /^[a-zA-Z0-9_-]+$/.test(val), {
      message:
        "exerciseId must contain only letters, numbers, hyphens, and underscores",
    }),

  solved: z.boolean(),

  code: z
    .string()
    .max(50000, "Code must be 50,000 characters or fewer")
    .optional(),
});