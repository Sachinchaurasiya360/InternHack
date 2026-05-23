import { Router } from "express";
import type { Request, Response } from "express";
import { prisma } from "../../database/db.js";
import { contactSchema } from "./contact.validation.js";

export const contactRouter = Router();

contactRouter.post("/", async (req: Request, res: Response) => {
  try {
    const parsed = contactSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ message: "Validation failed", errors: parsed.error.issues });
    }
    await prisma.contactSubmission.create({ data: parsed.data });
    return res.status(201).json({ message: "Message sent successfully" });
  } catch {
    return res.status(500).json({ message: "Failed to send message" });
  }
});
