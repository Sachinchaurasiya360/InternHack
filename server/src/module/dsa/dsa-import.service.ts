import { randomUUID } from "node:crypto";
import { prisma } from "../../database/db.js";

// ── Types ──────────────────────────────────────────────────────────────────

interface LcSubmission {
  titleSlug: string;
  timestamp: string; // Unix epoch string
}

interface PendingImport {
  userId: number;
  source: "LEETCODE_USERNAME" | "CSV";
  username: string | undefined;
  rows: Array<{ problemId: number; solvedAt: Date }>;
  expiresAt: number;
}

interface PreviewItem {
  problemId: number;
  title: string;
  difficulty: string;
  slug: string;
  solvedAt: string | null;
}

// ── In-memory token store (15-min TTL) ─────────────────────────────────────
const pendingImports = new Map<string, PendingImport>();

function evictExpired() {
  const now = Date.now();
  for (const [k, v] of pendingImports) {
    if (v.expiresAt < now) pendingImports.delete(k);
  }
}

// ── LeetCode GraphQL helpers ───────────────────────────────────────────────

const LC_GQL = "https://leetcode.com/graphql";
const LC_HEADERS = {
  "Content-Type": "application/json",
  "User-Agent": "InternHack-App/1.0",
};

async function fetchLcProfile(username: string): Promise<{
  exists: boolean;
  isPrivate: boolean;
  submissions: LcSubmission[];
}> {
  // Query 1: verify the user exists
  const profileRes = await fetch(LC_GQL, {
    method: "POST",
    headers: LC_HEADERS,
    body: JSON.stringify({
      query: `
        query userPublicProfile($username: String!) {
          matchedUser(username: $username) {
            username
            submitStatsGlobal {
              acSubmissionNum { difficulty count }
            }
          }
        }
      `,
      variables: { username },
    }),
    signal: AbortSignal.timeout(12_000),
  });

  if (!profileRes.ok) {
    throw Object.assign(new Error("LEETCODE_DOWN"), { code: "LEETCODE_DOWN" });
  }

  const profileJson = (await profileRes.json()) as {
    data?: { matchedUser?: { username: string } | null };
    errors?: unknown[];
  };

  if (!profileJson.data?.matchedUser) {
    return { exists: false, isPrivate: false, submissions: [] };
  }

  // Query 2: fetch recent AC submissions (limit 100 — public API ceiling)
  const subRes = await fetch(LC_GQL, {
    method: "POST",
    headers: LC_HEADERS,
    body: JSON.stringify({
      query: `
        query recentAcSubmissions($username: String!, $limit: Int!) {
          recentAcSubmissionList(username: $username, limit: $limit) {
            titleSlug
            timestamp
          }
        }
      `,
      variables: { username, limit: 100 },
    }),
    signal: AbortSignal.timeout(12_000),
  });

  if (!subRes.ok) {
    throw Object.assign(new Error("LEETCODE_DOWN"), { code: "LEETCODE_DOWN" });
  }

  const subJson = (await subRes.json()) as {
    data?: { recentAcSubmissionList?: LcSubmission[] | null };
    errors?: unknown[];
  };

  const rawList = subJson.data?.recentAcSubmissionList;

  // null list → private profile (user exists but submissions hidden)
  if (rawList === null || rawList === undefined) {
    return { exists: true, isPrivate: true, submissions: [] };
  }

  // Deduplicate by titleSlug (keep earliest timestamp = first AC)
  const seen = new Map<string, LcSubmission>();
  for (const s of rawList) {
    const prev = seen.get(s.titleSlug);
    if (!prev || Number(s.timestamp) < Number(prev.timestamp)) {
      seen.set(s.titleSlug, s);
    }
  }

  return { exists: true, isPrivate: false, submissions: Array.from(seen.values()) };
}

// ── Problem catalog helpers ────────────────────────────────────────────────

async function loadCatalog() {
  const problems = await prisma.dsaProblem.findMany({
    select: { id: true, leetcodeId: true, slug: true, title: true, difficulty: true },
  });

  const byLcId = new Map<number, typeof problems[0]>();
  const bySlug = new Map<string, typeof problems[0]>();
  const byNormTitle = new Map<string, typeof problems[0]>();
  const byId = new Map<number, typeof problems[0]>();

  for (const p of problems) {
    if (p.leetcodeId) byLcId.set(p.leetcodeId, p);
    bySlug.set(p.slug, p);
    byNormTitle.set(normalizeTitle(p.title), p);
    byId.set(p.id, p);
  }

  return { byLcId, bySlug, byNormTitle, byId };
}

function normalizeTitle(t: string) {
  return t.toLowerCase().replace(/[^a-z0-9]/g, "");
}

function matchSubmission(
  sub: { titleSlug: string; normTitle?: string; lcId?: number },
  catalog: Awaited<ReturnType<typeof loadCatalog>>,
) {
  if (sub.lcId) {
    const hit = catalog.byLcId.get(sub.lcId);
    if (hit) return hit;
  }
  const bySlug = catalog.bySlug.get(sub.titleSlug);
  if (bySlug) return bySlug;
  if (sub.normTitle) return catalog.byNormTitle.get(sub.normTitle) ?? null;
  return null;
}

// ── Rate-limit helper ──────────────────────────────────────────────────────

const MAX_IMPORTS_PER_DAY = 3;

async function checkRateLimit(userId: number) {
  const since = new Date();
  since.setHours(0, 0, 0, 0);
  const count = await prisma.leetcodeImportLog.count({
    where: { userId, importedAt: { gte: since } },
  });
  if (count >= MAX_IMPORTS_PER_DAY) {
    throw Object.assign(new Error("RATE_LIMIT"), { code: "RATE_LIMIT" });
  }
}

// ── Build preview response ─────────────────────────────────────────────────

async function buildPreview(
  userId: number,
  rows: Array<{ problemId: number; solvedAt: Date }>,
  catalog: Awaited<ReturnType<typeof loadCatalog>>,
  submissionsMap: Map<string, LcSubmission>,
  source: "LEETCODE_USERNAME" | "CSV",
  username?: string,
) {
  // Deduplicate rows by problemId to prevent duplicate stats from skewed/duplicate CSV rows
  const uniqueRowsMap = new Map<number, typeof rows[0]>();
  for (const r of rows) {
    if (!uniqueRowsMap.has(r.problemId)) {
      uniqueRowsMap.set(r.problemId, r);
    }
  }
  const uniqueRows = Array.from(uniqueRowsMap.values());
  const matchedCount = uniqueRows.length;

  // Find already-solved problem IDs for this user
  const existingSolved = await prisma.studentDsaProgress.findMany({
    where: { studentId: userId, solved: true, problemId: { in: uniqueRows.map((r) => r.problemId) } },
    select: { problemId: true },
  });
  const solvedSet = new Set(existingSolved.map((s: { problemId: number }) => s.problemId));

  const newRows = uniqueRows.filter((r) => !solvedSet.has(r.problemId));

  // Last import info
  const lastImport = await prisma.leetcodeImportLog.findFirst({
    where: { userId },
    orderBy: { importedAt: "desc" },
    select: { importedAt: true, username: true, source: true },
  });

  // Build preview items (first 50 for display)
  const preview: PreviewItem[] = newRows.slice(0, 50).map((r) => {
    const problem = catalog.byId.get(r.problemId)!;
    return {
      problemId: r.problemId,
      title: problem?.title ?? "Unknown",
      difficulty: problem?.difficulty ?? "Unknown",
      slug: problem?.slug ?? "",
      solvedAt: r.solvedAt.toISOString(),
    };
  });

  // Store token
  const token = randomUUID();
  evictExpired();
  pendingImports.set(token, {
    userId,
    source,
    username: username ?? undefined,
    rows: newRows,
    expiresAt: Date.now() + 15 * 60 * 1000,
  });

  return {
    matched: matchedCount,
    unmatched: submissionsMap.size - matchedCount,
    alreadySolved: solvedSet.size,
    newSolves: newRows.length,
    token,
    preview,
    lastImport: lastImport
      ? { importedAt: lastImport.importedAt.toISOString(), username: lastImport.username, source: lastImport.source }
      : null,
  };
}

// ── Public service methods ─────────────────────────────────────────────────

export class DsaImportService {
  // ── LeetCode username import preview ──────────────────────────────────────
  async previewLeetcodeImport(userId: number, username: string) {
    await checkRateLimit(userId);

    let lcResult: Awaited<ReturnType<typeof fetchLcProfile>>;
    try {
      lcResult = await fetchLcProfile(username);
    } catch (err: unknown) {
      const code = (err as { code?: string }).code;
      if (code === "LEETCODE_DOWN") {
        throw Object.assign(new Error("LEETCODE_DOWN"), { code: "LEETCODE_DOWN" });
      }
      throw err;
    }

    if (!lcResult.exists) {
      throw Object.assign(new Error("USER_NOT_FOUND"), { code: "USER_NOT_FOUND" });
    }
    if (lcResult.isPrivate) {
      throw Object.assign(new Error("PRIVATE_PROFILE"), { code: "PRIVATE_PROFILE" });
    }

    const catalog = await loadCatalog();
    const submissionsMap = new Map(lcResult.submissions.map((s) => [s.titleSlug, s]));

    const rows: Array<{ problemId: number; solvedAt: Date }> = [];
    for (const sub of lcResult.submissions) {
      const hit = matchSubmission({ titleSlug: sub.titleSlug, normTitle: normalizeTitle(sub.titleSlug.replace(/-/g, " ")) }, catalog);
      if (hit) {
        rows.push({
          problemId: hit.id,
          solvedAt: sub.timestamp ? new Date(Number(sub.timestamp) * 1000) : new Date(),
        });
      }
    }

    return buildPreview(userId, rows, catalog, submissionsMap, "LEETCODE_USERNAME", username);
  }

  // ── CSV import preview ────────────────────────────────────────────────────
  async previewCsvImport(userId: number, csvContent: string) {
    await checkRateLimit(userId);

    const rows: Array<{ problemId: number; solvedAt: Date }> = [];
    const unmatchedCount = { value: 0 };
    const submissionsMap = new Map<string, LcSubmission>();
    const catalog = await loadCatalog();

    const lines = csvContent.split(/\r?\n/).filter((l) => l.trim());
    if (lines.length < 2) throw Object.assign(new Error("INVALID_CSV"), { code: "INVALID_CSV" });

    // Detect header columns (case-insensitive)
    const header = lines[0]!.split(",").map((h) => h.replace(/"/g, "").trim().toLowerCase());
    const slugIdx = header.findIndex((h) => ["slug", "titleslug", "question slug", "title slug"].includes(h));
    const titleIdx = header.findIndex((h) => ["title", "question title", "question name"].includes(h));
    const tsIdx = header.findIndex((h) => ["timestamp", "date", "solved at", "solvedat"].includes(h));
    const statusIdx = header.findIndex((h) => ["status", "state"].includes(h));

    if (slugIdx === -1 && titleIdx === -1) {
      throw Object.assign(new Error("INVALID_CSV"), { code: "INVALID_CSV" });
    }

    for (let i = 1; i < lines.length; i++) {
      const cols = parseCSVLine(lines[i]!);

      // Skip non-accepted rows if status column exists
      if (statusIdx !== -1) {
        const status = cols[statusIdx]?.toLowerCase() ?? "";
        if (!["ac", "accepted", "done"].includes(status)) continue;
      }

      const slug = slugIdx !== -1 ? (cols[slugIdx] ?? "").trim().toLowerCase() : "";
      const title = titleIdx !== -1 ? (cols[titleIdx] ?? "").trim() : "";
      const tsRaw = tsIdx !== -1 ? (cols[tsIdx] ?? "") : "";

      let solvedAt = new Date();
      if (tsRaw) {
        const parsed = isNaN(Number(tsRaw)) ? new Date(tsRaw) : new Date(Number(tsRaw) * 1000);
        if (!isNaN(parsed.getTime())) solvedAt = parsed;
      }

      const hit = matchSubmission({
        titleSlug: slug || normalizeTitle(title).replace(/[^a-z0-9]/g, "-"),
        normTitle: normalizeTitle(title),
      }, catalog);

      if (hit) {
        rows.push({ problemId: hit.id, solvedAt });
        submissionsMap.set(slug || title, { titleSlug: slug, timestamp: String(solvedAt.getTime() / 1000) });
      } else {
        unmatchedCount.value++;
        submissionsMap.set(`unmatched-${i}`, { titleSlug: slug, timestamp: "" });
      }
    }

    return buildPreview(userId, rows, catalog, submissionsMap, "CSV");
  }

  // ── Confirm & bulk insert ──────────────────────────────────────────────────
  async confirmImport(userId: number, token: string) {
    await checkRateLimit(userId);
    evictExpired();
    const pending = pendingImports.get(token);
    if (!pending) throw Object.assign(new Error("TOKEN_EXPIRED"), { code: "TOKEN_EXPIRED" });
    if (pending.userId !== userId) throw Object.assign(new Error("TOKEN_EXPIRED"), { code: "TOKEN_EXPIRED" });

    pendingImports.delete(token);

    if (pending.rows.length === 0) {
      return { imported: 0, skipped: 0, importedAt: new Date().toISOString() };
    }

    const result = await prisma.$transaction(async (tx) => {
      const created = await tx.studentDsaProgress.createMany({
        data: pending.rows.map((r) => ({
          studentId: userId,
          problemId: r.problemId,
          solved: true,
          solvedAt: r.solvedAt,
        })),
        skipDuplicates: true,
      });

      await tx.leetcodeImportLog.create({
        data: {
          userId,
          username: pending.username ?? null,
          source: pending.source,
          matched: pending.rows.length,
          imported: created.count,
        },
      });

      return created;
    });

    return {
      imported: result.count,
      skipped: pending.rows.length - result.count,
      importedAt: new Date().toISOString(),
    };
  }

  // ── Last import status (for the UI banner) ────────────────────────────────
  async getImportStatus(userId: number) {
    const last = await prisma.leetcodeImportLog.findFirst({
      where: { userId },
      orderBy: { importedAt: "desc" },
      select: { importedAt: true, username: true, source: true, matched: true, imported: true },
    });
    return { lastImport: last ?? null };
  }
}

// ── Utility: simple CSV line parser (handles quoted fields) ───────────────
function parseCSVLine(line: string): string[] {
  const result: string[] = [];
  let cur = "";
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i]!;
    if (ch === '"') {
      if (inQuotes && line[i + 1] === '"') { cur += '"'; i++; }
      else inQuotes = !inQuotes;
    } else if (ch === "," && !inQuotes) {
      result.push(cur.trim());
      cur = "";
    } else {
      cur += ch;
    }
  }
  result.push(cur.trim());
  return result;
}
