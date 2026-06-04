import { z } from "zod";
import { MAX_WORK_HOURS } from "./attendance.constants.js";

export const checkInSchema = z.object({
  employeeId: z.number().int().positive(),
  notes: z.string().max(500).optional(),
});

export const checkOutSchema = z.object({
  employeeId: z.number().int().positive(),
  notes: z.string().max(500).optional(),
});

export const regularizeSchema = z.object({
  employeeId: z.number().int().positive(),
  date: z.string().datetime(),
  checkIn: z.string().datetime(),
  checkOut: z.string().datetime(),
  notes: z.string().min(1, "Reason for regularization is required").max(500),
}).refine((data) => new Date(data.date) <= new Date(), {
  message: "Date must not be in the future",
}).superRefine((data, ctx) => {
  const workHours = (new Date(data.checkOut).getTime() - new Date(data.checkIn).getTime()) / 3600000;
  if (workHours <= 0) {
    ctx.addIssue({ code: z.ZodIssueCode.custom, message: "checkOut must be after checkIn", path: ["checkOut"] });
  }
  if (workHours > MAX_WORK_HOURS) {
    ctx.addIssue({ code: z.ZodIssueCode.custom, message: `Work hours must not exceed ${MAX_WORK_HOURS}`, path: ["checkOut"] });
  }
}).refine((data) => new Date(data.checkIn) <= new Date() && new Date(data.checkOut) <= new Date(), {
  message: "Attendance times cannot be in the future",
  path: ["checkOut"],
});

export const attendanceQuerySchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().max(100).default(31),
  employeeId: z.coerce.number().int().positive().optional(),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  status: z.enum(["PRESENT", "ABSENT", "HALF_DAY", "ON_LEAVE", "HOLIDAY", "WEEKEND", "WORK_FROM_HOME"]).optional(),
});
