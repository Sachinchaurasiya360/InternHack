import { Router } from "express";
import type { Request, Response } from "express";
import { prisma } from "../../database/db.js";
import { contactSchema } from "./contact.validation.js";
import { contactLimiter } from "../../middleware/rate-limit.middleware.js";
import { sendEmail } from "../../utils/email.utils.js";
import { escapeHtml } from "../../utils/email-templates.js";

const ADMIN_EMAIL = () => process.env.ADMIN_EMAIL || process.env.EMAIL_FROM || "";

export const contactRouter = Router();

contactRouter.post("/", contactLimiter, async (req: Request, res: Response) => {
  try {
    const parsed = contactSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ message: "Validation failed", errors: parsed.error.issues });
    }
    await prisma.contactSubmission.create({ data: parsed.data });

    const adminEmail = ADMIN_EMAIL();
    if (adminEmail) {
      const { name, email, subject, message } = parsed.data;
      const safeName = escapeHtml(name);
      const safeEmail = escapeHtml(email);
      const safeSubject = escapeHtml(subject);
      const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");
      const emailSubject = subject.replace(/[\r\n]+/g, " ").trim();

      sendEmail({
        to: adminEmail,
        subject: `[Contact Form] ${emailSubject}`,
        html: `<p><strong>Name:</strong> ${safeName}</p>
<p><strong>Email:</strong> ${safeEmail}</p>
<p><strong>Subject:</strong> ${safeSubject}</p>
<p><strong>Message:</strong></p>
<p>${safeMessage}</p>`,
      }).catch((err) => console.error("Failed to send admin notification:", err));
    }

    return res.status(201).json({ message: "Message sent successfully" });
  } catch {
    return res.status(500).json({ message: "Failed to send message" });
  }
});
