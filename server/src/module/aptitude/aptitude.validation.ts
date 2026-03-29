import { z } from "zod";

export const submitAnswerSchema = z.object({
  body: z.object({
    answer: z.string().min(1, "Answer is required"),
  }),
  params: z.object({
    id: z.string().regex(/^\d+$/, "Invalid question ID"),
  }),
});

export const topicSlugSchema = z.object({
  params: z.object({
    slug: z.string().min(1, "Topic slug is required"),
  }),
});

export const companyNameSchema = z.object({
  params: z.object({
    name: z.string().min(1, "Company name is required"),
  }),
});
