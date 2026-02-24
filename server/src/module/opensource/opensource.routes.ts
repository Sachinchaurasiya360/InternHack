import { Router } from "express";
import { prisma } from "../../database/db.js";

export const opensourceRouter = Router();

// Public: list repos with optional filters
opensourceRouter.get("/", async (req, res, next) => {
  try {
    const page = Math.max(1, parseInt(String(req.query["page"] || "1"), 10));
    const limit = Math.min(100, Math.max(1, parseInt(String(req.query["limit"] || "20"), 10)));
    const search = req.query["search"] as string | undefined;
    const language = req.query["language"] as string | undefined;
    const difficulty = req.query["difficulty"] as string | undefined;
    const domain = req.query["domain"] as string | undefined;
    const sortBy = (req.query["sortBy"] as string) || "stars";
    const sortOrder = (req.query["sortOrder"] as string) || "desc";

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
    const id = parseInt(String(req.params["id"]), 10);
    if (isNaN(id)) { res.status(400).json({ message: "Invalid repo ID" }); return; }

    const repo = await prisma.opensourceRepo.findUnique({ where: { id } });
    if (!repo) { res.status(404).json({ message: "Repository not found" }); return; }

    res.json({ repo });
  } catch (err) {
    next(err);
  }
});
