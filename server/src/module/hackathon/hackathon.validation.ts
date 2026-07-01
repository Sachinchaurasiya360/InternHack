import { z } from "zod";

export const upsertParticipationSchema = z.object({
  body: z.object({
    status: z.enum(["INTERESTED", "PARTICIPATING"], {
      required_error: "Status is required",
      invalid_type_error: "Status must be either INTERESTED or PARTICIPATING",
    }),
  }),
  params: z.object({
    id: z.string().regex(/^\d+$/, "Hackathon ID must be a numeric string"),
  }),
});

export const removeParticipationSchema = z.object({
  params: z.object({
    id: z.string().regex(/^\d+$/, "Hackathon ID must be a numeric string"),
  }),
});
