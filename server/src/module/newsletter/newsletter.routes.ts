import { Router } from "express";
import type { Request, Response } from "express";
import { prisma } from "../../database/db.js";
import { authMiddleware } from "../../middleware/auth.middleware.js";
import { requireRole } from "../../middleware/role.middleware.js";
import { subscribeSchema, subscriberListQuerySchema, subscriberIdSchema } from "./newsletter.validation.js";

export const newsletterRouter = Router();

// Public - subscribe
newsletterRouter.post("/subscribe", async (req: Request, res: Response) => {
  try {
    const parsed = subscribeSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ message: "Valid email is required" });
    }
    const { email } = parsed.data;
    const existing = await prisma.newsletterSubscriber.findUnique({ where: { email } });
    if (existing) {
      return res.status(200).json({ message: "Already subscribed" });
    }
    await prisma.newsletterSubscriber.create({ data: { email } });
    return res.status(201).json({ message: "Subscribed successfully" });
  } catch {
    return res.status(500).json({ message: "Failed to subscribe" });
  }
});

// Admin - list subscribers
newsletterRouter.get(
  "/subscribers",
  authMiddleware,
  requireRole("ADMIN"),
  async (req: Request, res: Response) => {
    try {
      const qParsed = subscriberListQuerySchema.safeParse(req.query);
      const { page, limit } = qParsed.success ? qParsed.data : { page: 1, limit: 50 };
      const [subscribers, total] = await Promise.all([
        prisma.newsletterSubscriber.findMany({
          orderBy: { createdAt: "desc" },
          skip: (page - 1) * limit,
          take: limit,
        }),
        prisma.newsletterSubscriber.count(),
      ]);
      return res.status(200).json({ subscribers, total, page, limit });
    } catch {
      return res.status(500).json({ message: "Failed to fetch subscribers" });
    }
  },
);

// Admin - delete subscriber
newsletterRouter.delete(
  "/subscribers/:id",
  authMiddleware,
  requireRole("ADMIN"),
  async (req: Request, res: Response) => {
    try {
      const idParsed = subscriberIdSchema.safeParse(req.params);
      if (!idParsed.success) return res.status(400).json({ message: "Invalid subscriber ID" });
      await prisma.newsletterSubscriber.delete({ where: { id: idParsed.data.id } });
      return res.status(200).json({ message: "Subscriber removed" });
    } catch {
      return res.status(404).json({ message: "Subscriber not found" });
    }
  },
);
