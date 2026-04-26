import cron from "node-cron";
import type { Prisma } from "@prisma/client";
import { prisma } from "../../database/db.js";
import { BaseSignalSource } from "./sources/base.source.js";
import type { FundingSignalData } from "./sources/base.source.js";
import { YcLaunchesSource } from "./sources/yc-launches.source.js";
import { TechCrunchSource } from "./sources/techcrunch.source.js";
import { HnHiringSource } from "./sources/hn-hiring.source.js";

interface SignalsQuery {
  page: number;
  limit: number;
  search?: string | undefined;
  source?: string | undefined;
  round?: string | undefined;
  industry?: string | undefined;
  kind?: "funding" | "hiring" | "all" | undefined;
  status?: "ACTIVE" | "STALE" | "ARCHIVED" | "ALL" | undefined;
  hiringOnly?: boolean | undefined;
  minAmountUsd?: bigint | undefined;
  sort?: "recent" | "amount" | undefined;
}

export interface SignalManualInput {
  companyName: string;
  companyWebsite?: string | null | undefined;
  logoUrl?: string | null | undefined;
  fundingRound?: string | null | undefined;
  fundingAmount?: string | null | undefined;
  amountUsd?: bigint | null | undefined;
  announcedAt?: Date | undefined;
  hqLocation?: string | null | undefined;
  industry?: string | null | undefined;
  description?: string | null | undefined;
  sourceUrl: string;
  investors?: string[] | undefined;
  tags?: string[] | undefined;
  careersUrl?: string | null | undefined;
  hiringSignal?: boolean | undefined;
}

export interface SignalManualUpdate {
  companyName?: string | null | undefined;
  companyWebsite?: string | null | undefined;
  logoUrl?: string | null | undefined;
  fundingRound?: string | null | undefined;
  fundingAmount?: string | null | undefined;
  amountUsd?: bigint | null | undefined;
  announcedAt?: Date | undefined;
  hqLocation?: string | null | undefined;
  industry?: string | null | undefined;
  description?: string | null | undefined;
  sourceUrl?: string | undefined;
  investors?: string[] | undefined;
  tags?: string[] | undefined;
  careersUrl?: string | null | undefined;
  hiringSignal?: boolean | undefined;
  status?: "ACTIVE" | "STALE" | "ARCHIVED" | undefined;
}

const MANUAL_SOURCE = "manual";

export class SignalsService {
  private sources: BaseSignalSource[] = [];
  private cronJob: cron.ScheduledTask | null = null;
  private isRunning = false;

  constructor() {
    this.sources = [
      new YcLaunchesSource(),
      new TechCrunchSource(),
      new HnHiringSource(),
    ];
  }

  startCron(schedule = "0 */6 * * *") {
    if (this.cronJob) this.cronJob.stop();
    this.cronJob = cron.schedule(schedule, () => {
      void this.ingestAll();
    });
    console.log(`[Signals] Cron scheduled: ${schedule}`);
  }

  stopCron() {
    if (this.cronJob) {
      this.cronJob.stop();
      this.cronJob = null;
      console.log("[Signals] Cron stopped");
    }
  }

  async ingestAll(): Promise<{
    results: Array<{
      source: string;
      signalsFound: number;
      signalsCreated: number;
      signalsUpdated: number;
      error?: string | undefined;
      duration: number;
    }>;
  }> {
    if (this.isRunning) {
      console.log("[Signals] Already running, skipping...");
      return { results: [] };
    }
    this.isRunning = true;
    console.log("[Signals] Starting ingest run...");

    const SOURCE_TIMEOUT = 3 * 60 * 1000;
    const results: Array<{
      source: string;
      signalsFound: number;
      signalsCreated: number;
      signalsUpdated: number;
      error?: string | undefined;
      duration: number;
    }> = [];

    for (const src of this.sources) {
      const startTime = Date.now();
      try {
        const timeoutPromise = new Promise<never>((_r, reject) =>
          setTimeout(() => reject(new Error("Source timeout exceeded")), SOURCE_TIMEOUT),
        );
        const result = await Promise.race([src.fetch(), timeoutPromise]);
        const { created, updated } = await this.upsertSignals(result.source, result.signals);
        const duration = Date.now() - startTime;

        results.push({
          source: result.source,
          signalsFound: result.signals.length,
          signalsCreated: created,
          signalsUpdated: updated,
          error: result.error,
          duration,
        });

        await prisma.fundingSignalLog.create({
          data: {
            source: result.source,
            status: result.error ? "PARTIAL" : "SUCCESS",
            signalsFound: result.signals.length,
            signalsCreated: created,
            signalsUpdated: updated,
            error: result.error ?? null,
            duration,
          },
        });

        console.log(
          `[Signals] ${result.source}: found=${String(result.signals.length)}, created=${String(created)}, updated=${String(updated)}, duration=${String(duration)}ms`,
        );
      } catch (err) {
        const duration = Date.now() - startTime;
        const message = err instanceof Error ? err.message : "Unknown error";
        results.push({
          source: src.source,
          signalsFound: 0,
          signalsCreated: 0,
          signalsUpdated: 0,
          error: message,
          duration,
        });
        await prisma.fundingSignalLog.create({
          data: {
            source: src.source,
            status: "FAILURE",
            signalsFound: 0,
            signalsCreated: 0,
            signalsUpdated: 0,
            error: message,
            duration,
          },
        });
        console.error(`[Signals] ${src.source} failed:`, message);
      }
    }

    try {
      await this.markStaleSignals();
    } catch (err) {
      console.error("[Signals] Failed to mark stale signals:", err);
    } finally {
      this.isRunning = false;
      console.log("[Signals] Ingest run completed");
    }
    return { results };
  }

  private async upsertSignals(
    source: string,
    signals: FundingSignalData[],
  ): Promise<{ created: number; updated: number }> {
    if (signals.length === 0) return { created: 0, updated: 0 };

    const dedupedMap = new Map<string, FundingSignalData>();
    for (const s of signals) dedupedMap.set(s.sourceId, s);
    const uniqueSignals = Array.from(dedupedMap.values());

    const sourceIds = uniqueSignals.map((s) => s.sourceId);
    const existing = await prisma.fundingSignal.findMany({
      where: { source, sourceId: { in: sourceIds } },
      select: { id: true, sourceId: true },
    });
    const existingMap = new Map(existing.map((e) => [e.sourceId, e.id]));

    let created = 0;
    let updated = 0;

    const BATCH_SIZE = 15;
    for (let i = 0; i < uniqueSignals.length; i += BATCH_SIZE) {
      const batch = uniqueSignals.slice(i, i + BATCH_SIZE);
      const ops: Promise<unknown>[] = [];

      for (const s of batch) {
        const existingId = existingMap.get(s.sourceId);
        const data = {
          companyName: s.companyName,
          companyWebsite: s.companyWebsite ?? null,
          logoUrl: s.logoUrl ?? null,
          fundingRound: s.fundingRound ?? null,
          fundingAmount: s.fundingAmount ?? null,
          amountUsd: s.amountUsd ?? null,
          announcedAt: s.announcedAt,
          hqLocation: s.hqLocation ?? null,
          industry: s.industry ?? null,
          description: s.description ?? null,
          sourceUrl: s.sourceUrl,
          investors: s.investors ?? [],
          tags: s.tags ?? [],
          careersUrl: s.careersUrl ?? null,
          hiringSignal: s.hiringSignal ?? false,
          metadata: (s.metadata as Prisma.InputJsonValue) ?? {},
        };

        if (existingId) {
          ops.push(
            prisma.fundingSignal.update({
              where: { id: existingId },
              data: { ...data, status: "ACTIVE", lastSeenAt: new Date() },
            }),
          );
          updated++;
        } else {
          ops.push(
            prisma.fundingSignal.create({
              data: { ...data, source, sourceId: s.sourceId, status: "ACTIVE" },
            }),
          );
          created++;
        }
      }
      await Promise.all(ops);
    }
    return { created, updated };
  }

  /** Mark signals not seen in 14 days as STALE */
  private async markStaleSignals() {
    const cutoff = new Date(Date.now() - 14 * 24 * 60 * 60 * 1000);
    await prisma.fundingSignal.updateMany({
      where: { lastSeenAt: { lt: cutoff }, status: "ACTIVE" },
      data: { status: "STALE" },
    });
  }

  async getSignals(query: SignalsQuery) {
    const where: Prisma.fundingSignalWhereInput = {};

    const status = query.status ?? "ACTIVE";
    if (status !== "ALL") where.status = status;

    if (query.search) {
      where.OR = [
        { companyName: { contains: query.search, mode: "insensitive" } },
        { description: { contains: query.search, mode: "insensitive" } },
      ];
    }
    if (query.source) where.source = query.source;
    if (query.round) where.fundingRound = { contains: query.round, mode: "insensitive" };
    if (query.industry) where.industry = { contains: query.industry, mode: "insensitive" };
    if (query.hiringOnly) where.hiringSignal = true;
    if (query.minAmountUsd !== undefined) where.amountUsd = { gte: query.minAmountUsd };

    // kind=funding: rows that carry funding data (amount or round)
    // kind=hiring: hiring-only signals (HN posts etc.) with no funding info
    if (query.kind === "funding") {
      where.AND = [
        ...(Array.isArray(where.AND) ? where.AND : where.AND ? [where.AND] : []),
        {
          OR: [
            { fundingAmount: { not: null } },
            { amountUsd: { not: null } },
            { fundingRound: { not: null } },
          ],
        },
        { source: { not: "hn-hiring" } },
      ];
    } else if (query.kind === "hiring") {
      where.hiringSignal = true;
      where.fundingAmount = null;
      where.amountUsd = null;
    }

    const orderBy: Prisma.fundingSignalOrderByWithRelationInput =
      query.sort === "amount" ? { amountUsd: "desc" } : { announcedAt: "desc" };

    const skip = (query.page - 1) * query.limit;
    const [rows, total] = await Promise.all([
      prisma.fundingSignal.findMany({ where, skip, take: query.limit, orderBy }),
      prisma.fundingSignal.count({ where }),
    ]);

    return {
      signals: rows.map((r) => ({ ...r, amountUsd: r.amountUsd?.toString() ?? null })),
      pagination: {
        page: query.page,
        limit: query.limit,
        total,
        totalPages: Math.ceil(total / query.limit),
      },
    };
  }

  async getSignalById(id: number) {
    const row = await prisma.fundingSignal.findUnique({ where: { id } });
    if (!row) return null;
    return { ...row, amountUsd: row.amountUsd?.toString() ?? null };
  }

  async getStats() {
    const [totalActive, totalStale, bySource, recentLogs] = await Promise.all([
      prisma.fundingSignal.count({ where: { status: "ACTIVE" } }),
      prisma.fundingSignal.count({ where: { status: "STALE" } }),
      prisma.fundingSignal.groupBy({
        by: ["source"],
        where: { status: "ACTIVE" },
        _count: true,
      }),
      prisma.fundingSignalLog.findMany({ orderBy: { createdAt: "desc" }, take: 20 }),
    ]);
    return {
      totalActive,
      totalStale,
      bySource: bySource.map((s) => ({ source: s.source, count: s._count })),
      recentLogs,
    };
  }

  getSources() {
    const auto = this.sources.map((s) => ({ id: s.source, name: s.displayName }));
    return [...auto, { id: MANUAL_SOURCE, name: "Manual entry" }];
  }

  async createManual(input: SignalManualInput) {
    const sourceId = `manual-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
    const row = await prisma.fundingSignal.create({
      data: {
        companyName: input.companyName,
        companyWebsite: input.companyWebsite ?? null,
        logoUrl: input.logoUrl ?? null,
        fundingRound: input.fundingRound ?? null,
        fundingAmount: input.fundingAmount ?? null,
        amountUsd: input.amountUsd ?? null,
        announcedAt: input.announcedAt ?? new Date(),
        hqLocation: input.hqLocation ?? null,
        industry: input.industry ?? null,
        description: input.description ?? null,
        sourceUrl: input.sourceUrl,
        source: MANUAL_SOURCE,
        sourceId,
        investors: input.investors ?? [],
        tags: input.tags ?? [],
        careersUrl: input.careersUrl ?? null,
        hiringSignal: input.hiringSignal ?? false,
        status: "ACTIVE",
      },
    });
    return { ...row, amountUsd: row.amountUsd?.toString() ?? null };
  }

  async updateSignal(id: number, input: SignalManualUpdate) {
    const data: Prisma.fundingSignalUpdateInput = {};
    if (input.companyName !== undefined && input.companyName !== null) {
      data.companyName = input.companyName;
    }
    if (input.companyWebsite !== undefined) data.companyWebsite = input.companyWebsite;
    if (input.logoUrl !== undefined) data.logoUrl = input.logoUrl;
    if (input.fundingRound !== undefined) data.fundingRound = input.fundingRound;
    if (input.fundingAmount !== undefined) data.fundingAmount = input.fundingAmount;
    if (input.amountUsd !== undefined) data.amountUsd = input.amountUsd;
    if (input.announcedAt !== undefined) data.announcedAt = input.announcedAt;
    if (input.hqLocation !== undefined) data.hqLocation = input.hqLocation;
    if (input.industry !== undefined) data.industry = input.industry;
    if (input.description !== undefined) data.description = input.description;
    if (input.sourceUrl !== undefined) data.sourceUrl = input.sourceUrl;
    if (input.investors !== undefined) data.investors = input.investors;
    if (input.tags !== undefined) data.tags = input.tags;
    if (input.careersUrl !== undefined) data.careersUrl = input.careersUrl;
    if (input.hiringSignal !== undefined) data.hiringSignal = input.hiringSignal;
    if (input.status !== undefined) data.status = input.status;

    const row = await prisma.fundingSignal.update({ where: { id }, data });
    return { ...row, amountUsd: row.amountUsd?.toString() ?? null };
  }

  async deleteSignal(id: number) {
    await prisma.fundingSignal.delete({ where: { id } });
  }

  /**
   * Remove obvious noise rows: very short descriptions from auto-ingest sources
   * that likely got misparsed as a company. Admin-triggered, reversible only via
   * re-ingest.
   */
  async cleanupNoise(): Promise<{ removed: number }> {
    const result = await prisma.fundingSignal.deleteMany({
      where: {
        source: { not: MANUAL_SOURCE },
        OR: [
          { companyName: { contains: "?" } },
          { companyName: { contains: "!" } },
          { companyName: { contains: "What is" } },
          { companyName: { contains: "This is" } },
          { companyName: { contains: "http" } },
          {
            AND: [
              { fundingAmount: null },
              { amountUsd: null },
              { hiringSignal: false },
            ],
          },
        ],
      },
    });
    return { removed: result.count };
  }

  async getRecentLogs(limit = 30) {
    return prisma.fundingSignalLog.findMany({
      orderBy: { createdAt: "desc" },
      take: limit,
    });
  }
}
