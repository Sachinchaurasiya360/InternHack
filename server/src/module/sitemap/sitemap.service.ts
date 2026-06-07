import { prisma } from "../../database/db.js";

const SITE_URL = "https://www.internhack.xyz";

interface SitemapUrl {
  loc: string;
  lastmod?: string;
  changefreq: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority: number;
}

// ── Static learn routes ─────────────────────────────────────────
const LEARN_LANGUAGES = [
  "javascript", "html", "css", "typescript", "react",
  "python", "nodejs", "django", "flask", "fastapi", "blockchain",
];

const LEARN_EXTRAS = [
  "/learn/sql", "/learn/sql/playground",
  "/learn/dsa", "/learn/dsa/companies", "/learn/dsa/patterns",
  "/learn/aptitude", "/learn/aptitude/companies",
  "/learn/interview",
];

// ── In-memory cache (1 hour) ────────────────────────────────────
let cache: { xml: string; expiresAt: number } | null = null;
const CACHE_TTL = 60 * 60 * 1000; // 1 hour

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function toIsoDate(d: Date): string {
  return d.toISOString().split("T")[0]!;
}

function buildUrl(entry: SitemapUrl): string {
  let xml = `  <url>\n    <loc>${escapeXml(entry.loc)}</loc>\n`;
  if (entry.lastmod) xml += `    <lastmod>${entry.lastmod}</lastmod>\n`;
  xml += `    <changefreq>${entry.changefreq}</changefreq>\n`;
  xml += `    <priority>${entry.priority.toFixed(1)}</priority>\n`;
  xml += `  </url>`;
  return xml;
}

export class SitemapService {
  async generateSitemap(): Promise<string> {
    // Return cached version if fresh
    if (cache && cache.expiresAt > Date.now()) {
      return cache.xml;
    }

    const now = toIsoDate(new Date());
    const urls: SitemapUrl[] = [];

    // ── 1. Static pages ──────────────────────────────────────────
    const staticPages: SitemapUrl[] = [
      { loc: `${SITE_URL}/`, changefreq: "weekly", priority: 1.0, lastmod: now },
      { loc: `${SITE_URL}/jobs`, changefreq: "daily", priority: 0.9, lastmod: now },
      { loc: `${SITE_URL}/internships`, changefreq: "weekly", priority: 0.8, lastmod: now },
      { loc: `${SITE_URL}/external-jobs`, changefreq: "daily", priority: 0.7, lastmod: now },
      { loc: `${SITE_URL}/companies`, changefreq: "weekly", priority: 0.8, lastmod: now },
      { loc: `${SITE_URL}/ats-score`, changefreq: "monthly", priority: 0.9, lastmod: now },
      { loc: `${SITE_URL}/grants`, changefreq: "weekly", priority: 0.7, lastmod: now },
      { loc: `${SITE_URL}/opensource`, changefreq: "weekly", priority: 0.7, lastmod: now },
      { loc: `${SITE_URL}/blog`, changefreq: "daily", priority: 0.8, lastmod: now },
      { loc: `${SITE_URL}/for-recruiters`, changefreq: "monthly", priority: 0.6, lastmod: now },
      { loc: `${SITE_URL}/learn`, changefreq: "weekly", priority: 0.9, lastmod: now },
      { loc: `${SITE_URL}/roadmaps`, changefreq: "weekly", priority: 0.9, lastmod: now },
      { loc: `${SITE_URL}/login`, changefreq: "monthly", priority: 0.3 },
      { loc: `${SITE_URL}/register`, changefreq: "monthly", priority: 0.4 },
      { loc: `${SITE_URL}/terms`, changefreq: "yearly", priority: 0.2 },
      { loc: `${SITE_URL}/privacy`, changefreq: "yearly", priority: 0.2 },
      { loc: `${SITE_URL}/contact`, changefreq: "yearly", priority: 0.3 },
    ];
    urls.push(...staticPages);

    // ── 2. Learn language pages ──────────────────────────────────
    for (const lang of LEARN_LANGUAGES) {
      urls.push({
        loc: `${SITE_URL}/learn/${lang}`,
        changefreq: "monthly",
        priority: 0.8,
      });
    }
    for (const extra of LEARN_EXTRAS) {
      urls.push({
        loc: `${SITE_URL}${extra}`,
        changefreq: "monthly",
        priority: 0.7,
      });
    }

    // ── 2b. Programmatic SEO landing pages ─────────────────────
    const LANDING_SLUGS = [
      "frontend-remote", "backend-remote", "fullstack-remote",
      "react-remote", "python-remote", "devops-remote",
      "data-science-remote", "mobile-bangalore", "ai-remote",
      "java-pune", "backend-bangalore", "frontend-bangalore",
      "frontend-mumbai", "backend-hyderabad", "cloud-remote",
    ];
    for (const s of LANDING_SLUGS) {
      urls.push({
        loc: `${SITE_URL}/jobs/t/${s}`,
        changefreq: "weekly",
        priority: 0.6,
      });
    }

    // ── 3. Published jobs ────────────────────────────────────────
    const jobs = await prisma.job.findMany({
      where: { status: "PUBLISHED" },
      select: { id: true, updatedAt: true },
      orderBy: { updatedAt: "desc" },
      take: 5000,
    });
    for (const job of jobs) {
      urls.push({
        loc: `${SITE_URL}/jobs/${job.id}`,
        lastmod: toIsoDate(job.updatedAt),
        changefreq: "weekly",
        priority: 0.7,
      });
    }

    // ── 4. Published blog posts ──────────────────────────────────
    const posts = await prisma.blogPost.findMany({
      where: { status: "PUBLISHED" },
      select: { slug: true, updatedAt: true },
      orderBy: { updatedAt: "desc" },
      take: 5000,
    });
    for (const post of posts) {
      urls.push({
        loc: `${SITE_URL}/blog/${post.slug}`,
        lastmod: toIsoDate(post.updatedAt),
        changefreq: "weekly",
        priority: 0.7,
      });
    }

    // ── 5. Approved companies ────────────────────────────────────
    const companies = await prisma.company.findMany({
      where: { isApproved: true },
      select: { slug: true, updatedAt: true },
      orderBy: { updatedAt: "desc" },
      take: 5000,
    });
    for (const c of companies) {
      urls.push({
        loc: `${SITE_URL}/companies/${c.slug}`,
        lastmod: toIsoDate(c.updatedAt),
        changefreq: "weekly",
        priority: 0.6,
      });
    }

    // ── 6. YC companies ──────────────────────────────────────────
    const ycCompanies = await prisma.ycCompany.findMany({
      select: { slug: true, updatedAt: true },
      orderBy: { updatedAt: "desc" },
      take: 5000,
    });
    for (const yc of ycCompanies) {
      urls.push({
        loc: `${SITE_URL}/yc/${yc.slug}`,
        lastmod: toIsoDate(yc.updatedAt),
        changefreq: "monthly",
        priority: 0.5,
      });
    }

    // ── 7. DSA topics ────────────────────────────────────────────
    const dsaTopics = await prisma.dsaTopic.findMany({
      select: { slug: true },
    });
    for (const t of dsaTopics) {
      urls.push({
        loc: `${SITE_URL}/learn/dsa/${t.slug}`,
        changefreq: "monthly",
        priority: 0.6,
      });
    }

    // ── 7b. Published roadmaps (detail + topic deep-dives) ───────
    const roadmaps = await prisma.roadmap.findMany({
      where: { isPublished: true },
      select: {
        slug: true,
        updatedAt: true,
        sections: {
          select: {
            topics: { select: { slug: true } },
          },
        },
      },
    });
    for (const r of roadmaps) {
      urls.push({
        loc: `${SITE_URL}/roadmaps/${r.slug}`,
        lastmod: toIsoDate(r.updatedAt),
        changefreq: "weekly",
        priority: 0.8,
      });
      for (const section of r.sections) {
        for (const topic of section.topics) {
          urls.push({
            loc: `${SITE_URL}/roadmaps/${r.slug}/topics/${topic.slug}`,
            lastmod: toIsoDate(r.updatedAt),
            changefreq: "monthly",
            priority: 0.6,
          });
        }
      }
    }

    // ── 8. Aptitude topics ───────────────────────────────────────
    const aptTopics = await prisma.aptitudeTopic.findMany({
      select: { slug: true },
    });
    for (const t of aptTopics) {
      urls.push({
        loc: `${SITE_URL}/learn/aptitude/${t.slug}`,
        changefreq: "monthly",
        priority: 0.6,
      });
      urls.push({
        loc: `${SITE_URL}/learn/aptitude/${t.slug}/practice`,
        changefreq: "monthly",
        priority: 0.5,
      });
    }

    // ── Build XML ────────────────────────────────────────────────
    const xml = [
      '<?xml version="1.0" encoding="UTF-8"?>',
      '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
      ...urls.map(buildUrl),
      "</urlset>",
    ].join("\n");

    cache = { xml, expiresAt: Date.now() + CACHE_TTL };
    return xml;
  }
}
