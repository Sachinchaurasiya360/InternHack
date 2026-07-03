import { Router } from "express";
import type { Request, Response } from "express";
import { prisma } from "../../database/db.js";
import { contactSchema } from "./contact.validation.js";
import { contactLimiter } from "../../middleware/rate-limit.middleware.js";
import { sendEmail } from "../../utils/email.utils.js";

const ADMIN_ALERT_EMAIL = process.env["ADMIN_ALERT_EMAIL"] ?? "mrsachinchaurasiya@gmail.com";

export const contactRouter = Router();

contactRouter.post("/", contactLimiter, async (req: Request, res: Response) => {
  try {
    const parsed = contactSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ message: "Validation failed", errors: parsed.error.issues });
    }
    await prisma.contactSubmission.create({ data: parsed.data });
    sendEmail({
      to: ADMIN_ALERT_EMAIL,
      subject: `New contact form submission: ${parsed.data.subject}`,
      html: `<p><strong>Name:</strong> ${parsed.data.name}</p>
<p><strong>Email:</strong> ${parsed.data.email}</p>
<p><strong>Subject:</strong> ${parsed.data.subject}</p>
<p><strong>Message:</strong></p>
<p>${parsed.data.message}</p>`,
    });
    return res.status(201).json({ message: "Message sent successfully" });
  } catch {
    return res.status(500).json({ message: "Failed to send message" });
  }
});
