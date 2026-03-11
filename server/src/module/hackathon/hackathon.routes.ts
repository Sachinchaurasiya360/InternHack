import { Router } from "express";
import type { Request, Response } from "express";
import { prisma } from "../../database/db.js";

export const hackathonRouter = Router();

// Public: list all hackathons (with optional filters)
hackathonRouter.get("/", async (req: Request, res: Response) => {
  try {
    const { status, ecosystem, search } = req.query;
    const where: Record<string, unknown> = {};
    if (status && typeof status === "string") where["status"] = status;
    if (ecosystem && typeof ecosystem === "string") where["ecosystem"] = ecosystem;
    if (search && typeof search === "string") {
      where["OR"] = [
        { name: { contains: search, mode: "insensitive" } },
        { organizer: { contains: search, mode: "insensitive" } },
      ];
    }
    const hackathons = await prisma.hackathon.findMany({
      where,
      orderBy: { startDate: "asc" },
    });
    res.json({ hackathons });
  } catch {
    res.status(500).json({ message: "Failed to fetch hackathons" });
  }
});
