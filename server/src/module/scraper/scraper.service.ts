import cron from "node-cron";
import { prisma } from "../../database/db.js";
import { withAdvisoryLock } from "../../utils/cron-lock.js";
import type { BaseScraper } from "./scrapers/base.scraper.js";
import type { ScrapedJobData } from "./scrapers/base.scraper.js";
import { ArbeitnowScraper } from "./scrapers/arbeitnow.scraper.js";
import { AdzunaScraper } from "./scrapers/adzuna.scraper.js";
import { LinkedInScraper } from "./scrapers/linkedin.scraper.js";
import type { Prisma } from "@prisma/client";

interface ScrapedJobQuery {
  page: number;
  limit: number;
  search?: string | undefined;
  location?: string | undefined;
  source?: string | undefined;
  tags?: string | undefined;
}

export class ScraperService {
  private scrapers: BaseScraper[] = [];
  private cronJob: cron.ScheduledTask | null = null;
  private isRunning = false;

  constructor() {
    this.scrapers = [
      new ArbeitnowScraper(),
      new AdzunaScraper(),
      new LinkedInScraper(),
    ];
  }

  /** Start the cron scheduler. Default: every 6 hours */
  startCron(schedule = "0 */6 * * *") {
    if (this.cronJob) {
      this.cronJob.stop();
    }

    this.cronJob = cron.schedule(schedule, () => {
      void withAdvisoryLock("external-job-scraper", async () => {
        await this.runAllScrapers();
      });
    });

    console.log(`[Scraper] Cron scheduled: ${schedule}`);
  }

  stopCron() {
    if (this.cronJob) {
      this.cronJob.stop();
      this.cronJob = null;
      console.log("[Scraper] Cron stopped");
    }
  }

  /** Run the scrape pass once (used by the Vercel daily cron endpoint). */
  async runOnce() {
    return this.runAllScrapers();
  }

  /** Run all scrapers and upsert results */
  async runAllScrapers(): Promise<{
    results: Array<{
      source: string;
      jobsFound: number;
      jobsCreated: number;
      jobsUpdated: number;
      error?: string | undefined;
      duration: number;
    }>;
  }> {
    if (this.isRunning) {
      console.log("[Scraper] Already running, skipping...");
      return { results: [] };
    }

    this.isRunning = true;
    console.log("[Scraper] Starting scrape run...");

    const SCRAPER_TIMEOUT = 5 * 60 * 1000; // 5 minutes per scraper

    const results: Array<{
      source: string;
      jobsFound: number;
      jobsCreated: number;
      jobsUpdated: number;
      error?: string | undefined;
      duration: number;
    }> = [];

    for (const scraper of this.scrapers) {
      const startTime = Date.now();

      let timer: ReturnType<typeof setTimeout> | undefined;
      try {
        const timeoutPromise = new Promise<never>((_resolve, reject) => {
          timer = setTimeout(() => reject(new Error("Scraper timeout exceeded")), SCRAPER_TIMEOUT);
        });
        const result = await Promise.race([scraper.scrape(), timeoutPromise]);
        clearTimeout(timer);
        const { created, updated } = await this.upsertJobs(result.source, result.jobs);

        const duration = Date.now() - startTime;
        const logEntry = {
          source: result.source,
          jobsFound: result.jobs.length,
          jobsCreated: created,
          jobsUpdated: updated,
          error: result.error,
          duration,
        };

        results.push(logEntry);

        await prisma.scrapeLog.create({
          data: {
            source: result.source,
            status: result.error ? "PARTIAL" : "SUCCESS",
            jobsFound: result.jobs.length,
            jobsCreated: created,
            jobsUpdated: updated,
            error: result.error ?? null,
            duration,
          },
        });

        console.log(
          `[Scraper] ${result.source}: found=${String(result.jobs.length)}, created=${String(created)}, updated=${String(updated)}, duration=${String(duration)}ms`
        );
      } catch (err) {
        if (timer) clearTimeout(timer);
        const duration = Date.now() - startTime;
        const errorMsg = err instanceof Error ? err.message : "Unknown error";

        results.push({
          source: scraper.source,
          jobsFound: 0,
          jobsCreated: 0,
          jobsUpdated: 0,
          error: errorMsg,
          duration,
        });

        await prisma.scrapeLog.create({
          data: {
            source: scraper.source,
            status: "FAILURE",
            jobsFound: 0,
            jobsCreated: 0,
            jobsUpdated: 0,
            error: errorMsg,
            duration,
          },
        });

        console.error(`[Scraper] ${scraper.source} failed:`, errorMsg);
      }
    }

    try {
      // Mark jobs not seen in this run as potentially expired
      await this.markExpiredJobs();
    } catch (err) {
      console.error("[Scraper] Failed to mark expired jobs:", err);
    } finally {
      this.isRunning = false;
      console.log("[Scraper] Scrape run completed");
    }

    return { results };
  }

  /** Upsert scraped jobs with batch deduplication */
  private async upsertJobs(
    source: string,
    jobs: ScrapedJobData[]
  ): Promise<{ created: number; updated: number }> {
    if (jobs.length === 0) return { created: 0, updated: 0 };

    // Dedupe within this scrape run: scrapers occasionally emit the same sourceId
    // twice, which would collide on the (source, sourceId) unique constraint.
    // Keep the last occurrence so freshest payload wins.
    const dedupedMap = new Map<string, ScrapedJobData>();
    for (const job of jobs) dedupedMap.set(job.sourceId, job);
    const uniqueJobs = Array.from(dedupedMap.values());

    // Single bulk upsert: one INSERT ... ON CONFLICT DO UPDATE for the whole
    // source. The (source, sourceId) unique constraint drives the conflict, so
    // create + update + in-DB dedup all happen in one round-trip instead of one
    // query per job. `jsonb_to_recordset` expands the payload into rows; the
    // `xmax = 0` system-column trick lets RETURNING tell inserts from updates so
    // we still get accurate created/updated counts for the scrape log.
    const payload = JSON.stringify(
      uniqueJobs.map((job) => ({
        title: job.title,
        description: job.description,
        company: job.company,
        location: job.location,
        salary: job.salary ?? null,
        tags: job.tags ?? [],
        applicationUrl: job.applicationUrl,
        sourceId: job.sourceId,
        sourceUrl: job.sourceUrl ?? null,
        metadata: job.metadata ?? {},
      }))
    );

    const rows = await prisma.$queryRaw<{ inserted: boolean }[]>`
      INSERT INTO "scrapedJob"
        (title, description, company, location, salary, tags, "applicationUrl",
         source, "sourceId", "sourceUrl", status, metadata, "lastSeenAt", "updatedAt")
      SELECT
        d.title, d.description, d.company, d.location, d.salary, d.tags,
        d."applicationUrl", ${source}, d."sourceId", d."sourceUrl",
        'ACTIVE'::"ScrapedJobStatus", d.metadata, now(), now()
      FROM jsonb_to_recordset(${payload}::jsonb) AS d(
        title text, description text, company text, location text, salary text,
        tags text[], "applicationUrl" text, "sourceId" text, "sourceUrl" text,
        metadata jsonb
      )
      ON CONFLICT (source, "sourceId") DO UPDATE SET
        title = EXCLUDED.title,
        description = EXCLUDED.description,
        company = EXCLUDED.company,
        location = EXCLUDED.location,
        salary = EXCLUDED.salary,
        tags = EXCLUDED.tags,
        "applicationUrl" = EXCLUDED."applicationUrl",
        "sourceUrl" = EXCLUDED."sourceUrl",
        status = 'ACTIVE'::"ScrapedJobStatus",
        metadata = EXCLUDED.metadata,
        "lastSeenAt" = now(),
        "updatedAt" = now()
      RETURNING (xmax::text = '0') AS inserted;
    `;

    const created = rows.filter((r) => r.inserted).length;
    const updated = rows.length - created;

    return { created, updated };
  }

  /** Mark jobs not seen in the last 48 hours as expired */
  private async markExpiredJobs() {
    const cutoff = new Date(Date.now() - 48 * 60 * 60 * 1000);
    await prisma.scrapedJob.updateMany({
      where: {
        lastSeenAt: { lt: cutoff },
        status: "ACTIVE",
      },
      data: { status: "EXPIRED" },
    });
  }

  /** Get scraped jobs with pagination and filters */
  async getScrapedJobs(query: ScrapedJobQuery) {
    // Restrict adzuna rows to the IT category. Older rows (pre-tech-only
    // scraper) tagged with "Sales Jobs", "HR Jobs", etc. are excluded here
    // so users only see tech roles even before the 48h expiry sweep clears
    // them. Other sources (linkedin, arbeitnow) are tech-focused already.  
  const conditions: Prisma.scrapedJobWhereInput[] = [
  {
    OR: [
      { title: { contains: "developer", mode: "insensitive" } },
      { title: { contains: "engineer", mode: "insensitive" } },
      { title: { contains: "software", mode: "insensitive" } },
      { title: { contains: "frontend", mode: "insensitive" } },
      { title: { contains: "backend", mode: "insensitive" } },
      { title: { contains: "full stack", mode: "insensitive" } },
      { title: { contains: "python", mode: "insensitive" } },
      { title: { contains: "java", mode: "insensitive" } },
      { title: { contains: "react", mode: "insensitive" } }, 
    ],
  },
];
   

    if (query.search) {
      conditions.push({
        OR: [
          { title: { contains: query.search, mode: "insensitive" } },
          { description: { contains: query.search, mode: "insensitive" } },
          { company: { contains: query.search, mode: "insensitive" } },
        ],
      });
    }

    const where: Prisma.scrapedJobWhereInput = {
      status: "ACTIVE",
      AND: conditions,
    };

    if (query.location) {
      where.location = { contains: query.location, mode: "insensitive" };
    }

    if (query.source) {
      where.source = query.source;
    }

  if (query.tags) {
  const tagList = query.tags
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);

  if (tagList.length > 0) {
    conditions.push({
      OR: tagList.flatMap((tag) => [
        {
          title: {
            contains: tag,
            mode: "insensitive",
          },
        },
        {
          description: {
            contains: tag,
            mode: "insensitive",
          },
        },
      ]),
    });
  }
}

    const skip = (query.page - 1) * query.limit;

    const [jobs, total] = await Promise.all([
      prisma.scrapedJob.findMany({
        where,
        skip,
        take: query.limit,
        orderBy: { scrapedAt: "desc" },
      }),
      prisma.scrapedJob.count({ where }),
    ]);

    return {
      jobs,
      pagination: {
        page: query.page,
        limit: query.limit,
        total,
        totalPages: Math.ceil(total / query.limit),
      },
    };
  }

  /** Get a single scraped job by ID */
  async getScrapedJobById(id: number) {
    return prisma.scrapedJob.findUnique({ where: { id } });
  }

  /** Get scraping statistics */
  async getStats() {
    const [totalActive, totalExpired, bySource, recentLogs] = await Promise.all([
      prisma.scrapedJob.count({ where: { status: "ACTIVE" } }),
      prisma.scrapedJob.count({ where: { status: "EXPIRED" } }),
      prisma.scrapedJob.groupBy({
        by: ["source"],
        where: { status: "ACTIVE" },
        _count: true,
      }),
      prisma.scrapeLog.findMany({
        orderBy: { createdAt: "desc" },
        take: 20,
      }),
    ]);

    return {
      totalActive,
      totalExpired,
      bySource: bySource.map((s) => ({ source: s.source, count: s._count })),
      recentLogs,
    };
  }

  /** Get available sources */
  getSources() {
    return this.scrapers.map((s) => ({
      id: s.source,
      name: s.displayName,
    }));
  }
}
