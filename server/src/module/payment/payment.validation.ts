import { z } from "zod/v4";

export const createOrderSchema = z.object({
  plan: z.enum(["pro"]),
  billing: z.enum(["monthly", "yearly"]),
});
