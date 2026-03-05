import { Router } from "express";
import { prisma } from "../../database/db.js";
import type { Request, Response } from "express";

const router = Router();

// GET /api/yc/stats — aggregate counts for filter dropdowns
router.get("/stats", async (_req: Request, res: Response) => {
  try {
    const [total, batchRows, industryRows, statusRows] = await Promise.all([
      prisma.ycCompany.count(),
      prisma.$queryRaw<{ batchShort: string; count: bigint }[]>`
        SELECT "batchShort", COUNT(*)::bigint AS count
        FROM "ycCompany"
        WHERE "batchShort" IS NOT NULL
        GROUP BY "batchShort"
        ORDER BY "batchShort" DESC
      `,
      prisma.$queryRaw<{ industry: string; count: bigint }[]>`
        SELECT "industry", COUNT(*)::bigint AS count
        FROM "ycCompany"
        WHERE "industry" IS NOT NULL
        GROUP BY "industry"
        ORDER BY count DESC
      `,
      prisma.$queryRaw<{ status: string; count: bigint }[]>`
        SELECT "status", COUNT(*)::bigint AS count
        FROM "ycCompany"
        WHERE "status" IS NOT NULL
        GROUP BY "status"
        ORDER BY count DESC
      `,
    ]);

    res.json({
      total,
      batches: batchRows.map((r) => ({ name: r.batchShort, count: Number(r.count) })),
      industries: industryRows.map((r) => ({ name: r.industry, count: Number(r.count) })),
      statuses: statusRows.map((r) => ({ name: r.status, count: Number(r.count) })),
    });
  } catch (err) {
    console.error("YC stats error:", err);
    res.status(500).json({ error: "Failed to fetch stats" });
  }
});

// GET /api/yc/companies — paginated list with filters
router.get("/companies", async (req: Request, res: Response) => {
  try {
    const page = Math.max(1, parseInt(req.query["page"] as string) || 1);
    const limit = Math.min(50, Math.max(1, parseInt(req.query["limit"] as string) || 24));
    const skip = (page - 1) * limit;

    const search = (req.query["search"] as string) || "";
    const batch = (req.query["batch"] as string) || "";
    const industry = (req.query["industry"] as string) || "";
    const status = (req.query["status"] as string) || "";
    const isHiring = req.query["isHiring"] as string;
    const topCompany = req.query["topCompany"] as string;

    const where: Record<string, unknown> = {};

    if (search) {
      where["OR"] = [
        { name: { contains: search, mode: "insensitive" } },
        { oneLiner: { contains: search, mode: "insensitive" } },
        { industry: { contains: search, mode: "insensitive" } },
        { tags: { hasSome: [search.toLowerCase()] } },
      ];
    }
    if (batch) where["batchShort"] = batch;
    if (industry) where["industry"] = industry;
    if (status) where["status"] = status;
    if (isHiring === "true") where["isHiring"] = true;
    if (topCompany === "true") where["topCompany"] = true;

    const [companies, total] = await Promise.all([
      prisma.ycCompany.findMany({
        where,
        orderBy: [{ topCompany: "desc" }, { name: "asc" }],
        skip,
        take: limit,
      }),
      prisma.ycCompany.count({ where }),
    ]);

    res.json({
      companies,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (err) {
    console.error("YC companies error:", err);
    res.status(500).json({ error: "Failed to fetch companies" });
  }
});

// GET /api/yc/companies/:slug — single company detail
router.get("/companies/:slug", async (req: Request, res: Response) => {
  try {
    const company = await prisma.ycCompany.findUnique({
      where: { slug: req.params["slug"] },
    });
    if (!company) {
      res.status(404).json({ error: "Company not found" });
      return;
    }
    res.json(company);
  } catch (err) {
    console.error("YC company detail error:", err);
    res.status(500).json({ error: "Failed to fetch company" });
  }
});

export const ycRouter = router;
