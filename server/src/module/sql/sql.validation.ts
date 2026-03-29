import { z } from "zod";

export const saveProgressSchema = z.object({
  exerciseId: z.union([z.string(), z.number()]).transform(String),
  solved: z.boolean(),
  code: z.string().optional(),
});
