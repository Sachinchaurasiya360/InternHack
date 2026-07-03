import { z } from "zod";

export const createOrderSchema = z.object({
  plan: z.enum(["pro"]),
  billing: z.enum(["monthly", "yearly"]),
});
