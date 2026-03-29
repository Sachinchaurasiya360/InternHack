import { Router } from "express";
import { prisma } from "../../database/db.js";
import type { Request, Response } from "express";
import * as cheerio from "cheerio";
import { ycListQuerySchema, ycSlugSchema } from "./yc.validation.js";
import { createLogger } from "../../utils/logger.js";

const logger = createLogger("YCRoutes");

const router = Router();

// ── Scrape helpers ──────────────────────────────────────────

interface Founder {
  name: string;
  title: string;
  bio?: string | undefined;
  imageUrl?: string | undefined;
  linkedin?: string | undefined;
  twitter?: string | undefined;
}

const THIRTY_DAYS_MS = 30 * 24 * 60 * 60 * 1000;

async function scrapeYCPage(slug: string) {
  const url = `https://www.ycombinator.com/companies/${slug}`;
  const res = await fetch(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      Accept: "text/html,application/xhtml+xml",
    },
    signal: AbortSignal.timeout(10_000),
  });
  if (!res.ok) return null;

  const html = await res.text();
  const $ = cheerio.load(html);

  // ── Extract founders ──────────────────────────────────────
  const founders: Founder[] = [];

  // Find the "Active Founders" section, then iterate ycdc-card-new cards within it
  let foundersParent: ReturnType<typeof $> | null = null;
  $("div").each((_i, el) => {
    const ownText = $(el).clone().children().remove().end().text().trim();
    if (ownText === "Active Founders" || ownText === "Founders") {
      foundersParent = $(el).closest("div").parent();
      return false; // break
    }
  });

  if (foundersParent) {
    (foundersParent as ReturnType<typeof $>).find(".ycdc-card-new").each((_i, el) => {
      const card = $(el);

      // Must contain an avatar image (not a company logo)
      const img = card.find('img[src*="bookface-images"][src*="avatar"]').first();
      if (!img.length) return;

      // Name is in .font-bold
      const nameEl = card.find(".font-bold").first();
      const name = nameEl.clone().children().remove().end().text().trim();
      if (!name || founders.some((f) => f.name === name)) return;

      // Title: the full card text starts with "Name TitleBio..."
      // Extract title by removing the name from the beginning
      const fullText = card.text().trim();
      const afterName = fullText.slice(name.length).trim();
      // Title ends where the bio begins (bio usually restarts with the founder's first name)
      const firstName = name.split(" ")[0]!;
      const titleEnd = afterName.indexOf(firstName);
      const title = titleEnd > 0 ? afterName.slice(0, titleEnd).trim() : afterName.slice(0, 40).trim();

      // Bio: the remaining text after title
      const bio = titleEnd > 0 ? afterName.slice(titleEnd).trim() : undefined;

      const linkedin = card.find('a[href*="linkedin.com/in"]').first().attr("href") || undefined;
      const twitter =
        card.find('a[href*="twitter.com"]').first().attr("href") ||
        card.find('a[href*="x.com"]').first().attr("href") ||
        undefined;

      founders.push({
        name,
        title: title || "Founder",
        bio: bio && bio.length > 20 ? bio : undefined,
        imageUrl: img.attr("src") || undefined,
        linkedin,
        twitter,
      });
    });
  }

  // Fallback: find ycdc-card-new with avatar images globally
  if (founders.length === 0) {
    $(".ycdc-card-new").each((_i, el) => {
      const card = $(el);
      const img = card.find('img[src*="bookface-images"][src*="avatar"]').first();
      if (!img.length) return;

      const nameEl = card.find(".font-bold").first();
      const name = nameEl.clone().children().remove().end().text().trim();
      if (!name || founders.some((f) => f.name === name)) return;

      const fullText = card.text().trim();
      const afterName = fullText.slice(name.length).trim();
      const firstName = name.split(" ")[0]!;
      const titleEnd = afterName.indexOf(firstName);
      const title = titleEnd > 0 ? afterName.slice(0, titleEnd).trim() : afterName.slice(0, 40).trim();
      const bio = titleEnd > 0 ? afterName.slice(titleEnd).trim() : undefined;

      founders.push({
        name,
        title: title || "Founder",
        bio: bio && bio.length > 20 ? bio : undefined,
        imageUrl: img.attr("src") || undefined,
        linkedin: card.find('a[href*="linkedin.com/in"]').first().attr("href") || undefined,
        twitter:
          card.find('a[href*="twitter.com"]').first().attr("href") ||
          card.find('a[href*="x.com"]').first().attr("href") ||
          undefined,
      });
    });
  }

  // ── Extract company social links ──────────────────────────
  // Use the company info card (ycdc-card-new with logos/ image, not avatars/)
  const socialLinks: Record<string, string> = {};
  const companyCard = $(".ycdc-card-new")
    .filter((_i, el) => $(el).find('img[src*="bookface-images"][src*="logos/"]').length > 0)
    .first();
  const socialScope = companyCard.length ? companyCard : $("body");

  const twitterLink = socialScope.find('a[href*="twitter.com"], a[href*="x.com"]').first().attr("href");
  if (twitterLink && !twitterLink.includes("/status/")) socialLinks["twitter"] = twitterLink;

  const linkedinLink = socialScope.find('a[href*="linkedin.com/company"]').first().attr("href");
  if (linkedinLink) socialLinks["linkedin"] = linkedinLink;

  const fbLink = socialScope.find('a[href*="facebook.com"]').first().attr("href");
  if (fbLink) socialLinks["facebook"] = fbLink;

  const cbLink = socialScope.find('a[href*="crunchbase.com"]').first().attr("href");
  if (cbLink) socialLinks["crunchbase"] = cbLink;

  const ghLink = socialScope.find('a[href*="github.com"]').first().attr("href");
  if (ghLink && !ghLink.includes("/issues/")) socialLinks["github"] = ghLink;

  return { founders, socialLinks };
}

function needsScrape(company: { scrapedAt: Date | null }): boolean {
  if (!company.scrapedAt) return true;
  return Date.now() - company.scrapedAt.getTime() > THIRTY_DAYS_MS;
}

// ── Routes ──────────────────────────────────────────────────

// GET /api/yc/stats - aggregate counts for filter dropdowns
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
    logger.error("Failed to fetch YC stats", err);
    res.status(500).json({ error: "Failed to fetch stats" });
  }
});

// GET /api/yc/companies - paginated list with filters
router.get("/companies", async (req: Request, res: Response) => {
  try {
    const parsed = ycListQuerySchema.safeParse(req.query);
    if (!parsed.success) { res.status(400).json({ message: "Invalid query parameters" }); return; }
    const { page, limit, search, batch, industry, status, isHiring, topCompany } = parsed.data;
    const skip = (page - 1) * limit;

    const where: Record<string, unknown> = {};

    if (search && search.length > 0) {
      where["OR"] = [
        { name: { contains: search, mode: "insensitive" } },
        { oneLiner: { contains: search, mode: "insensitive" } },
        { industry: { contains: search, mode: "insensitive" } },
        { tags: { hasSome: [search.toLowerCase()] } },
      ];
    }
    if (batch && batch.length > 0) where["batchShort"] = batch;
    if (industry && industry.length > 0) where["industry"] = industry;
    if (status && status.length > 0) where["status"] = status;
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
    logger.error("Failed to fetch YC companies", err);
    res.status(500).json({ error: "Failed to fetch companies" });
  }
});

// GET /api/yc/companies/:slug - single company detail (with on-demand scraping)
router.get("/companies/:slug", async (req: Request, res: Response) => {
  try {
    const slugParsed = ycSlugSchema.safeParse(req.params);
    if (!slugParsed.success) { res.status(400).json({ error: "Invalid slug" }); return; }
    const company = await prisma.ycCompany.findFirst({
      where: { slug: slugParsed.data.slug },
    });
    if (!company) {
      res.status(404).json({ error: "Company not found" });
      return;
    }

    // If not scraped yet or stale, scrape in background and update
    if (needsScrape(company)) {
      // Don't block the response - fire and forget, but also try to return fresh data
      try {
        const scraped = await scrapeYCPage(company.slug);
        if (scraped) {
          const updated = await prisma.ycCompany.update({
            where: { id: company.id },
            data: {
              founders: scraped.founders.length > 0 ? scraped.founders : undefined,
              socialLinks:
                Object.keys(scraped.socialLinks).length > 0 ? scraped.socialLinks : undefined,
              scrapedAt: new Date(),
            },
          });
          res.json(updated);
          return;
        }
      } catch (scrapeErr) {
        logger.error(`Scrape failed for ${company.slug}`, scrapeErr);
        // Mark as scraped to avoid retrying immediately
        await prisma.ycCompany
          .update({
            where: { id: company.id },
            data: { scrapedAt: new Date() },
          })
          .catch(() => {});
      }
    }

    res.json(company);
  } catch (err) {
    logger.error("Failed to fetch YC company detail", err);
    res.status(500).json({ error: "Failed to fetch company" });
  }
});

export const ycRouter = router;
