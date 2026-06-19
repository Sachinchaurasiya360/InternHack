import { z } from "zod";

export const createLogSchema = z.object({
  contactName: z.string().min(1),
  company: z.string().min(1),
  role: z.string().min(1),
  channel: z.enum(["linkedin", "email", "other"]),
  templateId: z.number().optional(),
  notes: z.string().optional(),
  sentAt: z.coerce.date().optional(),
});

export const updateLogSchema = z.object({
  status: z.enum(["sent", "replied", "ghosted", "referral_given", "rejected"]).optional(),
  notes: z.string().optional(),
  followUpDate: z.coerce.date().optional(),
});