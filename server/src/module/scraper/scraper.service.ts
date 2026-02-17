import cron from "node-cron";
import { prisma } from "../../database/db.js";
import type { BaseScraper } from "./scrapers/base.scraper.js";
import type { ScrapedJobData } from "./scrapers/base.scraper.js";
import { RemotiveScraper } from "./scrapers/remotive.scraper.js";
import { ArbeitnowScraper } from "./scrapers/arbeitnow.scraper.js";
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
      new RemotiveScraper(),
      new ArbeitnowScraper(),
    ];
  }

  /** Start the cron scheduler. Default: every 6 hours */
  startCron(schedule = "0 */6 * * *") {
    if (this.cronJob) {
      this.cronJob.stop();
    }

    this.cronJob = cron.schedule(schedule, () => {
      void this.runAllScrapers();
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

      try {
        const result = await scraper.scrape();
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

    // Mark jobs not seen in this run as potentially expired
    await this.markExpiredJobs();

    this.isRunning = false;
    console.log("[Scraper] Scrape run completed");

    return { results };
  }

  /** Upsert scraped jobs with deduplication */
  private async upsertJobs(
    source: string,
    jobs: ScrapedJobData[]
  ): Promise<{ created: number; updated: number }> {
    let created = 0;
    let updated = 0;

    for (const job of jobs) {
      const existing = await prisma.scrapedJob.findUnique({
        where: { source_sourceId: { source, sourceId: job.sourceId } },
      });

      if (existing) {
        await prisma.scrapedJob.update({
          where: { id: existing.id },
          data: {
            title: job.title,
            description: job.description,
            company: job.company,
            location: job.location,
            salary: job.salary ?? null,
            tags: job.tags,
            applicationUrl: job.applicationUrl,
            sourceUrl: job.sourceUrl ?? null,
            status: "ACTIVE",
            lastSeenAt: new Date(),
            metadata: (job.metadata as Prisma.InputJsonValue) ?? {},
          },
        });
        updated++;
      } else {
        await prisma.scrapedJob.create({
          data: {
            title: job.title,
            description: job.description,
            company: job.company,
            location: job.location,
            salary: job.salary ?? null,
            tags: job.tags,
            applicationUrl: job.applicationUrl,
            source,
            sourceId: job.sourceId,
            sourceUrl: job.sourceUrl ?? null,
            status: "ACTIVE",
            metadata: (job.metadata as Prisma.InputJsonValue) ?? {},
          },
        });
        created++;
      }
    }

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
    const where: Prisma.scrapedJobWhereInput = { status: "ACTIVE" };

    if (query.search) {
      where.OR = [
        { title: { contains: query.search, mode: "insensitive" } },
        { description: { contains: query.search, mode: "insensitive" } },
        { company: { contains: query.search, mode: "insensitive" } },
      ];
    }

    if (query.location) {
      where.location = { contains: query.location, mode: "insensitive" };
    }

    if (query.source) {
      where.source = query.source;
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
