import { Router } from "express";
import { prisma } from "../../database/db.js";
import { opensourceListQuerySchema, repoIdSchema } from "./opensource.validation.js";

export const opensourceRouter = Router();

// Public: list repos with optional filters
opensourceRouter.get("/", async (req, res, next) => {
  try {
    const parsed = opensourceListQuerySchema.safeParse(req.query);
    if (!parsed.success) {
      res.status(400).json({ message: "Invalid query parameters", errors: parsed.error.flatten().fieldErrors });
      return;
    }
    const { page, limit, search, language, difficulty, domain, sortBy, sortOrder } = parsed.data;

    const where: Record<string, unknown> = {};
    if (language) where["language"] = { equals: language, mode: "insensitive" };
    if (difficulty) where["difficulty"] = difficulty;
    if (domain) where["domain"] = domain;
    if (search) {
      where["OR"] = [
        { name: { contains: search, mode: "insensitive" } },
        { owner: { contains: search, mode: "insensitive" } },
        { description: { contains: search, mode: "insensitive" } },
        { tags: { hasSome: [search] } },
      ];
    }

    const skip = (page - 1) * limit;
    const [repos, total] = await Promise.all([
      prisma.opensourceRepo.findMany({
        where,
        skip,
        take: limit,
        orderBy: { [sortBy]: sortOrder },
      }),
      prisma.opensourceRepo.count({ where }),
    ]);

    res.json({
      repos,
      pagination: { page, limit, total, totalPages: Math.ceil(total / limit) },
    });
  } catch (err) {
    next(err);
  }
});

// Public: get single repo
opensourceRouter.get("/:id", async (req, res, next) => {
  try {
    const parsed = repoIdSchema.safeParse(req.params);
    if (!parsed.success) { res.status(400).json({ message: "Invalid repo ID" }); return; }
    const { id } = parsed.data;

    const repo = await prisma.opensourceRepo.findUnique({ where: { id } });
    if (!repo) { res.status(404).json({ message: "Repository not found" }); return; }

    res.json({ repo });
  } catch (err) {
    next(err);
  }
});
