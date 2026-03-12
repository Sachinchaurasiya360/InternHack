import { prisma } from "../../database/db.js";
import { Prisma } from "@prisma/client";

interface CacheEntry {
  data: unknown;
  expiresAt: number;
}

export class TrendsService {
  private cache = new Map<string, CacheEntry>();
  private TTL = 30 * 60 * 1000; // 30 minutes

  private getCached(key: string) {
    const entry = this.cache.get(key);
    if (entry && entry.expiresAt > Date.now()) return entry.data;
    return null;
  }

  private setCache(key: string, data: unknown) {
    this.cache.set(key, { data, expiresAt: Date.now() + this.TTL });
  }

  // GET /api/trends/overview
  async getOverview() {
    const cached = this.getCached("overview");
    if (cached) return cached;

    const [totalJobs, totalScrapedJobs] = await Promise.all([
      prisma.job.count({ where: { status: "PUBLISHED" } }),
      prisma.scrapedJob.count({ where: { status: "ACTIVE" } }),
    ]);

    // Top city from job.location
    const jobs = await prisma.job.findMany({
      where: { status: "PUBLISHED" },
      select: { location: true },
    });

    const cityCounts = new Map<string, number>();
    for (const j of jobs) {
      const city = j.location.trim();
      if (city) cityCounts.set(city, (cityCounts.get(city) ?? 0) + 1);
    }
    let topCity = "N/A";
    let topCityCount = 0;
    for (const [city, count] of cityCounts) {
      if (count > topCityCount) {
        topCity = city;
        topCityCount = count;
      }
    }

    // Top skill from job.tags (unnest)
    const topSkillRows = await prisma.$queryRaw<
      { skill: string; count: bigint }[]
    >(
      Prisma.sql`SELECT skill, COUNT(*) as count
        FROM (SELECT unnest(tags) as skill FROM job WHERE status = 'PUBLISHED') t
        GROUP BY skill ORDER BY count DESC LIMIT 1`,
    );
    const topSkill =
      topSkillRows.length > 0 ? topSkillRows[0]!.skill : "N/A";

    // Avg salary — parse numeric values from free-text salary strings
    const salaryRows = await prisma.job.findMany({
      where: { status: "PUBLISHED" },
      select: { salary: true },
    });
    const numericSalaries = salaryRows
      .map((r) => parseSalaryToLPA(r.salary))
      .filter((v): v is number => v !== null);
    const avgSalary =
      numericSalaries.length > 0
        ? Math.round(
            (numericSalaries.reduce((a, b) => a + b, 0) /
              numericSalaries.length) *
              10,
          ) / 10
        : 0;

    const data = { totalJobs, totalScrapedJobs, topCity, topSkill, avgSalary };
    this.setCache("overview", data);
    return data;
  }

  // GET /api/trends/skills
  async getTopSkills() {
    const cached = this.getCached("skills");
    if (cached) return cached;

    // Demand: tags from both job and scrapedJob tables
    const demandRows = await prisma.$queryRaw<
      { skill: string; count: bigint }[]
    >(
      Prisma.sql`
        SELECT skill, COUNT(*) as count FROM (
          SELECT unnest(tags) as skill FROM job WHERE status = 'PUBLISHED'
          UNION ALL
          SELECT unnest(tags) as skill FROM "scrapedJob" WHERE status = 'ACTIVE'
        ) t
        GROUP BY skill ORDER BY count DESC LIMIT 20`,
    );

    // Supply: skills from user table where role = STUDENT
    const supplyRows = await prisma.$queryRaw<
      { skill: string; count: bigint }[]
    >(
      Prisma.sql`
        SELECT skill, COUNT(*) as count
        FROM (SELECT unnest(skills) as skill FROM "user" WHERE role = 'STUDENT') t
        GROUP BY skill ORDER BY count DESC`,
    );

    const supplyMap = new Map<string, number>();
    for (const r of supplyRows) {
      supplyMap.set(r.skill.toLowerCase(), Number(r.count));
    }

    const skills = demandRows.map((r) => ({
      name: r.skill,
      demandCount: Number(r.count),
      supplyCount: supplyMap.get(r.skill.toLowerCase()) ?? 0,
    }));

    const data = { skills };
    this.setCache("skills", data);
    return data;
  }

  // GET /api/trends/locations
  async getTopLocations() {
    const cached = this.getCached("locations");
    if (cached) return cached;

    const jobs = await prisma.job.findMany({
      where: { status: "PUBLISHED" },
      select: { location: true },
    });

    const cityCounts = new Map<string, number>();
    for (const j of jobs) {
      const city = j.location.trim();
      if (city) cityCounts.set(city, (cityCounts.get(city) ?? 0) + 1);
    }

    const locations = [...cityCounts.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 15)
      .map(([city, jobCount]) => ({ city, jobCount }));

    const data = { locations };
    this.setCache("locations", data);
    return data;
  }

  // GET /api/trends/salaries
  async getSalaryInsights() {
    const cached = this.getCached("salaries");
    if (cached) return cached;

    const salaryRows = await prisma.job.findMany({
      where: { status: "PUBLISHED" },
      select: { salary: true },
    });

    const ranges = [
      { range: "0-5 LPA", min: 0, max: 5 },
      { range: "5-10 LPA", min: 5, max: 10 },
      { range: "10-20 LPA", min: 10, max: 20 },
      { range: "20-50 LPA", min: 20, max: 50 },
      { range: "50+ LPA", min: 50, max: Infinity },
    ];

    const buckets = ranges.map((r) => ({ range: r.range, count: 0 }));

    for (const row of salaryRows) {
      const lpa = parseSalaryToLPA(row.salary);
      if (lpa === null) continue;
      for (let i = 0; i < ranges.length; i++) {
        const r = ranges[i]!;
        if (lpa >= r.min && lpa < r.max) {
          buckets[i]!.count++;
          break;
        }
      }
    }

    const data = { salaries: buckets };
    this.setCache("salaries", data);
    return data;
  }

  // GET /api/trends/timeline
  async getTimeline() {
    const cached = this.getCached("timeline");
    if (cached) return cached;

    const twelveMonthsAgo = new Date();
    twelveMonthsAgo.setMonth(twelveMonthsAgo.getMonth() - 12);
    twelveMonthsAgo.setDate(1);
    twelveMonthsAgo.setHours(0, 0, 0, 0);

    const jobRows = await prisma.$queryRaw<
      { month: string; count: bigint }[]
    >(
      Prisma.sql`
        SELECT to_char("createdAt", 'YYYY-MM') as month, COUNT(*) as count
        FROM job
        WHERE status = 'PUBLISHED' AND "createdAt" >= ${twelveMonthsAgo}
        GROUP BY month ORDER BY month`,
    );

    const scrapedRows = await prisma.$queryRaw<
      { month: string; count: bigint }[]
    >(
      Prisma.sql`
        SELECT to_char("createdAt", 'YYYY-MM') as month, COUNT(*) as count
        FROM "scrapedJob"
        WHERE "createdAt" >= ${twelveMonthsAgo}
        GROUP BY month ORDER BY month`,
    );

    // Build a map of all months in the last 12 months
    const jobMap = new Map<string, number>();
    for (const r of jobRows) jobMap.set(r.month, Number(r.count));

    const scrapedMap = new Map<string, number>();
    for (const r of scrapedRows) scrapedMap.set(r.month, Number(r.count));

    const timeline: { month: string; jobCount: number; scrapedCount: number }[] = [];
    const now = new Date();
    for (let i = 11; i >= 0; i--) {
      const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
      const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
      timeline.push({
        month: key,
        jobCount: jobMap.get(key) ?? 0,
        scrapedCount: scrapedMap.get(key) ?? 0,
      });
    }

    const data = { timeline };
    this.setCache("timeline", data);
    return data;
  }

  // GET /api/trends/supply
  async getSkillSupply() {
    const cached = this.getCached("supply");
    if (cached) return cached;

    const rows = await prisma.$queryRaw<
      { skill: string; count: bigint }[]
    >(
      Prisma.sql`
        SELECT skill, COUNT(*) as count
        FROM (SELECT unnest(skills) as skill FROM "user" WHERE role = 'STUDENT') t
        GROUP BY skill ORDER BY count DESC LIMIT 20`,
    );

    const skills = rows.map((r) => ({
      name: r.skill,
      userCount: Number(r.count),
    }));

    const data = { skills };
    this.setCache("supply", data);
    return data;
  }
}

// ── Salary parser helper ──
// Handles free-text strings like "5-10 LPA", "10 LPA", "8,00,000", "INR 12L", etc.
function parseSalaryToLPA(salary: string): number | null {
  if (!salary) return null;
  const s = salary.toLowerCase().replace(/,/g, "").trim();

  // Pattern: "X-Y LPA" or "X - Y lpa" → take midpoint
  const rangeMatch = s.match(
    /(\d+(?:\.\d+)?)\s*[-–to]+\s*(\d+(?:\.\d+)?)\s*(?:lpa|lakhs?|l)/,
  );
  if (rangeMatch) {
    const low = parseFloat(rangeMatch[1]!);
    const high = parseFloat(rangeMatch[2]!);
    return (low + high) / 2;
  }

  // Pattern: "X LPA" or "X lakhs" or "XL"
  const singleLPA = s.match(/(\d+(?:\.\d+)?)\s*(?:lpa|lakhs?|l\b)/);
  if (singleLPA) return parseFloat(singleLPA[1]!);

  // Pattern: raw number that looks like annual (e.g. 800000 → 8 LPA)
  const rawNum = s.match(/(\d+(?:\.\d+)?)/);
  if (rawNum) {
    const val = parseFloat(rawNum[1]!);
    if (val >= 100000) return val / 100000; // convert to LPA
    if (val >= 1000) return val / 1000; // e.g. "800k"
    if (val > 0 && val <= 200) return val; // already in LPA
  }

  return null;
}
