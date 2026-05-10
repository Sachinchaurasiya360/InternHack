import { Router } from "express";
import { prisma } from "../../database/db.js";
import { gsocListQuerySchema, gsocSlugSchema } from "./gsoc.validation.js";

export const gsocRouter = Router();

// Public: list organizations with filters & pagination
gsocRouter.get("/organizations", async (req, res, next) => {
  try {
    const parsed = gsocListQuerySchema.safeParse(req.query);
    if (!parsed.success) {
      res.status(400).json({ message: "Invalid query parameters", errors: parsed.error.flatten().fieldErrors });
      return;
    }
    const { page, limit, search, category, technology, year, topic, sortBy, sortOrder } = parsed.data;

    const where: Record<string, unknown> = {};

    if (category) where["category"] = category;
    if (technology) where["technologies"] = { hasSome: [technology] };
    if (year) where["yearsParticipated"] = { has: year };
    if (topic) where["topics"] = { hasSome: [topic] };

    if (search) {
      where["OR"] = [
        { name: { contains: search, mode: "insensitive" } },
        { description: { contains: search, mode: "insensitive" } },
        { topics: { hasSome: [search.toLowerCase()] } },
        { technologies: { hasSome: [search.toLowerCase()] } },
      ];
    }

    const skip = (page - 1) * limit;

    const [organizations, total] = await Promise.all([
      prisma.gsocOrganization.findMany({
        where,
        skip,
        take: limit,
        orderBy: { [sortBy]: sortOrder },
        select: {
          id: true,
          name: true,
          slug: true,
          url: true,
          imageUrl: true,
          imageBgColor: true,
          description: true,
          category: true,
          topics: true,
          technologies: true,
          yearsParticipated: true,
          totalProjects: true,
          contactEmail: true,
          mailingList: true,
          ideasUrl: true,
          guideUrl: true,
        },
      }),
      prisma.gsocOrganization.count({ where }),
    ]);

    res.json({
      organizations,
      pagination: { page, limit, total, totalPages: Math.ceil(total / limit) },
    });
  } catch (err) {
    next(err);
  }
});

// Public: get single organization by slug (with full project data)
gsocRouter.get("/organizations/:slug", async (req, res, next) => {
  try {
    const parsed = gsocSlugSchema.safeParse(req.params);
    if (!parsed.success) { res.status(400).json({ message: "Invalid slug" }); return; }
    const org = await prisma.gsocOrganization.findUnique({ where: { slug: parsed.data.slug } });
    if (!org) {
      res.status(404).json({ message: "Organization not found" });
      return;
    }
    res.json({ organization: org });
  } catch (err) {
    next(err);
  }
});

// Public: Exa-powered enrichment — GitHub repos + org-specific GSoC page (served from DB)
gsocRouter.get("/organizations/:slug/repos", async (req, res, next) => {
  try {
    const parsed = gsocSlugSchema.safeParse(req.params);
    if (!parsed.success) { res.status(400).json({ message: "Invalid slug" }); return; }

    const org = await prisma.gsocOrganization.findUnique({
      where: { slug: parsed.data.slug },
      select: { projectsData: true },
    });
    if (!org) { res.status(404).json({ message: "Organization not found" }); return; }

    const pd = (org.projectsData as Record<string, unknown> | null) ?? {};
    const githubRepos = (pd["_githubRepos"] as { title: string; url: string }[] | undefined) ?? [];
    const gsocPageUrl = (pd["_gsocPageUrl"] as string | null | undefined) ?? null;

    res.json({ githubRepos, gsocPageUrl });
  } catch (err) {
    next(err);
  }
});

// Public: stats for filters
gsocRouter.get("/stats", async (_req, res, next) => {
  try {
    const orgs = await prisma.gsocOrganization.findMany({
      select: {
        category: true,
        technologies: true,
        yearsParticipated: true,
        topics: true,
      },
    });

    const total = orgs.length;

    // Category counts
    const categoryMap = new Map<string, number>();
    for (const o of orgs) {
      categoryMap.set(o.category, (categoryMap.get(o.category) || 0) + 1);
    }
    const categories = Array.from(categoryMap.entries())
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count);

    // Year counts
    const yearMap = new Map<number, number>();
    for (const o of orgs) {
      for (const y of o.yearsParticipated) {
        yearMap.set(y, (yearMap.get(y) || 0) + 1);
      }
    }
    const years = Array.from(yearMap.entries())
      .map(([year, count]) => ({ year, count }))
      .sort((a, b) => b.year - a.year);

    // Top technologies
    const techMap = new Map<string, number>();
    for (const o of orgs) {
      for (const t of o.technologies) {
        techMap.set(t, (techMap.get(t) || 0) + 1);
      }
    }
    const technologies = Array.from(techMap.entries())
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 50);

    // Top topics
    const topicMap = new Map<string, number>();
    for (const o of orgs) {
      for (const t of o.topics) {
        topicMap.set(t, (topicMap.get(t) || 0) + 1);
      }
    }
    const topics = Array.from(topicMap.entries())
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 50);

    res.json({ total, categories, years, technologies, topics });
  } catch (err) {
    next(err);
  }
});
