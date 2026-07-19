import { prisma } from "../../database/db.js";
import { getProviderForService } from "../../lib/ai-provider-registry.js";
import { logAIRequest } from "../../lib/ai-request-logger.js";
import {
  codeReviewResponseSchema,
  type CodeReviewResponse,
} from "./dsa.validation.js";
import { getApproaches } from "./dsa-approaches.data.js";

interface TestCaseResult {
  input: string;
  expected: string;
  actual: string;
  passed: boolean;
  label: string | null;
  timeMs: number;
  error?: string | null;
}

// In-memory cache for aggregation queries that scan all problems (companies/patterns).
// These change rarely (only when admin seeds new problems), so a 10-min TTL is safe.
const AGG_CACHE_TTL = 10 * 60 * 1000;

// Maximum number of custom labels a student may attach to a single problem.
const MAX_LABELS_PER_PROBLEM = 5;
let companiesCache: {
  data: { name: string; count: number }[];
  expiresAt: number;
} | null = null;
let patternsCache: {
  data: { name: string; count: number }[];
  expiresAt: number;
} | null = null;

export class DsaService {
  async listTopics(
    studentId?: number,
    sheet?: string,
    difficulty?: string[],
    search?: string,
  ) {
    // Fetch topics + all problem tags in just 2-3 queries (not N per topic)
    const baseWhere: Record<string, unknown> = {};
    if (sheet) baseWhere.sheets = { has: sheet };
    if (difficulty?.length) baseWhere.difficulty = { in: difficulty };

    const [topics, problems] = await Promise.all([
      prisma.dsaTopic.findMany({ orderBy: { orderIndex: "asc" } }),
      prisma.dsaProblem.findMany({
        where: baseWhere,
        select: { id: true, tags: true },
      }),
    ]);

    // Count problems per topic slug in memory
    const countMap = new Map<string, number>();
    const problemIdsByTopic = new Map<string, number[]>();
    for (const p of problems) {
      for (const tag of p.tags) {
        countMap.set(tag, (countMap.get(tag) || 0) + 1);
        if (!problemIdsByTopic.has(tag)) problemIdsByTopic.set(tag, []);
        problemIdsByTopic.get(tag)!.push(p.id);
      }
    }

    // Get solved counts in one query
    let solvedByTopic = new Map<string, number>();
    if (studentId) {
      const solved = await prisma.studentDsaProgress.findMany({
        where: { studentId, solved: true },
        select: { problemId: true },
      });
      const solvedIds = new Set(solved.map((s) => s.problemId));

      for (const [slug, pIds] of problemIdsByTopic) {
        const count = pIds.filter((id) => solvedIds.has(id)).length;
        if (count > 0) solvedByTopic.set(slug, count);
      }
    }

    const needle = search?.trim().toLowerCase();
    const filteredTopics = topics
      .filter((t) => (countMap.get(t.slug) || 0) >= 10)
      .filter((t) => !needle || t.name.toLowerCase().includes(needle));

    // uniqueProblems should reflect the problems covered by the *returned* topics
    // so the client can compute a consistent overall percentage regardless of filters.
    const returnedProblemIds = new Set<number>();
    for (const t of filteredTopics) {
      for (const pid of problemIdsByTopic.get(t.slug) || [])
        returnedProblemIds.add(pid);
    }

    return {
      uniqueProblems: returnedProblemIds.size,
      topics: filteredTopics.map((t) => ({
        id: t.id,
        name: t.name,
        slug: t.slug,
        description: t.description,
        orderIndex: t.orderIndex,
        problemCount: countMap.get(t.slug) || 0,
        solvedCount: solvedByTopic.get(t.slug) || 0,
      })),
    };
  }

  async getTopicBySlug(
    slug: string,
    studentId?: number,
    page = 1,
    limit = 50,
    difficulty?: string,
    search?: string,
  ) {
    const topic = await prisma.dsaTopic.findUnique({ where: { slug } });
    if (!topic) throw new Error("Topic not found");

    const problemWhere: Record<string, unknown> = { tags: { has: slug } };
    if (difficulty && difficulty !== "All")
      problemWhere.difficulty = difficulty;
    if (search) problemWhere.title = { contains: search, mode: "insensitive" };

    const [problems, totalProblems] = await Promise.all([
      prisma.dsaProblem.findMany({
        where: problemWhere,
        orderBy: [{ difficulty: "asc" }, { title: "asc" }],
        skip: (page - 1) * limit,
        take: limit,
      }),
      prisma.dsaProblem.count({ where: problemWhere }),
    ]);

    let solvedMap = new Map<number, { notes: string | null }>();
    let bookmarkedIds = new Set<number>();
    let labelsMap = new Map<number, string[]>();
    let totalSolved = 0;

    if (studentId) {
      const pIds = problems.map((p) => p.id);
      const [progress, bookmarks, labels, solvedTotal] = await Promise.all([
        prisma.studentDsaProgress.findMany({
          where: { studentId, problemId: { in: pIds } },
          select: { problemId: true, solved: true, notes: true },
        }),
        prisma.dsaBookmark.findMany({
          where: { studentId, problemId: { in: pIds } },
          select: { problemId: true },
        }),
        prisma.dsaProblemLabel.findMany({
          where: { userId: studentId, problemId: { in: pIds } },
          orderBy: { createdAt: "asc" },
          select: { problemId: true, label: true },
        }),
        prisma.studentDsaProgress.count({
          where: { studentId, solved: true, problem: { tags: { has: slug } } },
        }),
      ]);

      for (const p of progress) {
        if (p.solved) solvedMap.set(p.problemId, { notes: p.notes });
        else if (p.notes) solvedMap.set(p.problemId, { notes: p.notes });
      }
      bookmarkedIds = new Set(bookmarks.map((b) => b.problemId));
      for (const l of labels) {
        const arr = labelsMap.get(l.problemId);
        if (arr) arr.push(l.label);
        else labelsMap.set(l.problemId, [l.label]);
      }
      totalSolved = solvedTotal;
    }

    return {
      id: topic.id,
      name: topic.name,
      slug: topic.slug,
      description: topic.description,
      orderIndex: topic.orderIndex,
      totalProblems,
      totalSolved,
      totalPages: Math.ceil(totalProblems / limit),
      page,
      problems: problems.map((p) => {
        const progressData = solvedMap.get(p.id);
        return {
          id: p.id,
          title: p.title,
          slug: p.slug,
          difficulty: p.difficulty,
          leetcodeUrl: p.leetcodeUrl,
          gfgUrl: p.gfgUrl,
          articleUrl: p.articleUrl,
          videoUrl: p.videoUrl,
          hackerrankUrl: p.hackerrankUrl,
          codechefUrl: p.codechefUrl,
          tags: p.tags,
          companies: p.companies,
          hints: p.hints,
          sheets: p.sheets,
          acceptanceRate: p.acceptanceRate,
          solved: !!progressData,
          notes: progressData?.notes ?? null,
          bookmarked: bookmarkedIds.has(p.id),
          labels: labelsMap.get(p.id) ?? [],
        };
      }),
    };
  }

  async getProblemBySlug(slug: string, studentId?: number) {
    const problem = await prisma.dsaProblem.findUnique({ where: { slug } });
    if (!problem) throw new Error("Problem not found");

    let solved = false;
    let bookmarked = false;
    let notes: string | null = null;

    if (studentId) {
      const [progress, bookmark] = await Promise.all([
        prisma.studentDsaProgress.findUnique({
          where: { studentId_problemId: { studentId, problemId: problem.id } },
        }),
        prisma.dsaBookmark.findUnique({
          where: { studentId_problemId: { studentId, problemId: problem.id } },
        }),
      ]);
      solved = progress?.solved ?? false;
      notes = progress?.notes ?? null;
      bookmarked = !!bookmark;
    }

    return {
      id: problem.id,
      title: problem.title,
      slug: problem.slug,
      difficulty: problem.difficulty,
      leetcodeId: problem.leetcodeId,
      leetcodeUrl: problem.leetcodeUrl,
      gfgUrl: problem.gfgUrl,
      articleUrl: problem.articleUrl,
      videoUrl: problem.videoUrl,
      hackerrankUrl: problem.hackerrankUrl,
      codechefUrl: problem.codechefUrl,
      tags: problem.tags,
      companies: problem.companies,
      hints: problem.hints,
      sheets: problem.sheets,
      description: problem.description,
      examples: problem.examples,
      constraints: problem.constraints,
      acceptanceRate: problem.acceptanceRate,
      totalAccepted: problem.totalAccepted,
      totalSubmissions: problem.totalSubmissions,
      similarQuestions: problem.similarQuestions,
      category: problem.category,
      isPremium: problem.isPremium,
      solved,
      bookmarked,
      notes,
    };
  }

  async toggleProblem(studentId: number, problemId: number) {
    const problem = await prisma.dsaProblem.findUnique({
      where: { id: problemId },
    });
    if (!problem) throw new Error("Problem not found");

    const existing = await prisma.studentDsaProgress.findUnique({
      where: { studentId_problemId: { studentId, problemId } },
    });

    if (existing) {
      if (existing.solved) {
        if (existing.notes) {
          await prisma.studentDsaProgress.update({
            where: { id: existing.id },
            data: { solved: false },
          });
        } else {
          await prisma.studentDsaProgress.delete({
            where: { id: existing.id },
          });
        }
        return { problemId, solved: false };
      }
      const updated = await prisma.studentDsaProgress.update({
        where: { id: existing.id },
        data: { solved: true, solvedAt: new Date() },
      });
      return { problemId, solved: updated.solved };
    }

    await prisma.studentDsaProgress.create({
      data: { studentId, problemId, solved: true },
    });
    return { problemId, solved: true };
  }

  async updateNotes(studentId: number, problemId: number, notes: string) {
    const problem = await prisma.dsaProblem.findUnique({
      where: { id: problemId },
    });
    if (!problem) throw new Error("Problem not found");

    const trimmed = notes.trim();

    const existing = await prisma.studentDsaProgress.findUnique({
      where: { studentId_problemId: { studentId, problemId } },
    });

    if (existing) {
      const updated = await prisma.studentDsaProgress.update({
        where: { id: existing.id },
        data: { notes: trimmed || null },
      });
      return { problemId, notes: updated.notes };
    }

    const created = await prisma.studentDsaProgress.create({
      data: { studentId, problemId, solved: false, notes: trimmed || null },
    });
    return { problemId, notes: created.notes };
  }

  async toggleBookmark(studentId: number, problemId: number) {
    const problem = await prisma.dsaProblem.findUnique({
      where: { id: problemId },
    });
    if (!problem) throw new Error("Problem not found");

    const existing = await prisma.dsaBookmark.findUnique({
      where: { studentId_problemId: { studentId, problemId } },
    });

    if (existing) {
      await prisma.dsaBookmark.delete({ where: { id: existing.id } });
      return { problemId, bookmarked: false };
    }

    await prisma.dsaBookmark.create({ data: { studentId, problemId } });
    return { problemId, bookmarked: true };
  }

  async getBookmarks(studentId: number) {
    const bookmarks = await prisma.dsaBookmark.findMany({
      where: { studentId },
      include: { problem: true },
      orderBy: { createdAt: "desc" },
    });

    const problemIds = bookmarks.map((b) => b.problemId);
    const [progress, labels] = await Promise.all([
      prisma.studentDsaProgress.findMany({
        where: { studentId, problemId: { in: problemIds } },
        select: { problemId: true, solved: true },
      }),
      prisma.dsaProblemLabel.findMany({
        where: { userId: studentId, problemId: { in: problemIds } },
        orderBy: { createdAt: "asc" },
        select: { problemId: true, label: true },
      }),
    ]);
    const solvedIds = new Set(
      progress.filter((p) => p.solved).map((p) => p.problemId),
    );
    const labelsMap = new Map<number, string[]>();
    for (const l of labels) {
      const arr = labelsMap.get(l.problemId);
      if (arr) arr.push(l.label);
      else labelsMap.set(l.problemId, [l.label]);
    }

    return bookmarks.map((b) => ({
      id: b.id,
      problemId: b.problemId,
      title: b.problem.title,
      slug: b.problem.slug,
      difficulty: b.problem.difficulty,
      leetcodeUrl: b.problem.leetcodeUrl,
      gfgUrl: b.problem.gfgUrl,
      tags: b.problem.tags,
      companies: b.problem.companies,
      sheets: b.problem.sheets,
      acceptanceRate: b.problem.acceptanceRate,
      solved: solvedIds.has(b.problemId),
      labels: labelsMap.get(b.problemId) ?? [],
      createdAt: b.createdAt,
    }));
  }

  // ── Custom problem labels (tagging) ──

  async addLabel(studentId: number, problemId: number, rawLabel: string) {
    const label = rawLabel.trim();
    if (!label) {
      throw Object.assign(new Error("Label cannot be empty"), { status: 400 });
    }

    const problem = await prisma.dsaProblem.findUnique({
      where: { id: problemId },
      select: { id: true },
    });
    if (!problem)
      throw Object.assign(new Error("Problem not found"), { status: 404 });

    // Enforce the per-problem cap. Idempotent: re-adding an existing label is a
    // no-op and must not count against the limit, so check for it first.
    const existing = await prisma.dsaProblemLabel.findUnique({
      where: {
        userId_problemId_label: { userId: studentId, problemId, label },
      },
    });
    if (existing) {
      return {
        problemId,
        label,
        labels: await this.getLabelsForProblem(studentId, problemId),
      };
    }

    const count = await prisma.dsaProblemLabel.count({
      where: { userId: studentId, problemId },
    });
    if (count >= MAX_LABELS_PER_PROBLEM) {
      throw Object.assign(
        new Error(
          `You can add at most ${MAX_LABELS_PER_PROBLEM} labels per problem`,
        ),
        { status: 422 },
      );
    }

    await prisma.dsaProblemLabel.create({
      data: { userId: studentId, problemId, label },
    });

    return {
      problemId,
      label,
      labels: await this.getLabelsForProblem(studentId, problemId),
    };
  }

  async removeLabel(studentId: number, problemId: number, rawLabel: string) {
    const label = rawLabel.trim();

    await prisma.dsaProblemLabel.deleteMany({
      where: { userId: studentId, problemId, label },
    });

    return {
      problemId,
      label,
      labels: await this.getLabelsForProblem(studentId, problemId),
    };
  }

  // Returns every label the student has created, grouped by problemId, so the
  // client can hydrate label chips and the filter control in a single request.
  async getMyLabels(studentId: number) {
    const rows = await prisma.dsaProblemLabel.findMany({
      where: { userId: studentId },
      orderBy: { createdAt: "asc" },
      select: { problemId: true, label: true },
    });

    const byProblem: Record<number, string[]> = {};
    const distinct = new Set<string>();
    for (const r of rows) {
      (byProblem[r.problemId] ??= []).push(r.label);
      distinct.add(r.label);
    }

    return { byProblem, allLabels: Array.from(distinct).sort() };
  }

  private async getLabelsForProblem(
    studentId: number,
    problemId: number,
  ): Promise<string[]> {
    const rows = await prisma.dsaProblemLabel.findMany({
      where: { userId: studentId, problemId },
      orderBy: { createdAt: "asc" },
      select: { label: true },
    });
    return rows.map((r) => r.label);
  }

  async reportProblem({
    userId,
    problemId,
    reason,
    message,
  }: {
    userId: number;
    problemId: number;
    reason: string;
    message?: string;
  }) {
    return prisma.dsaProblemReport.create({
      data: {
        userId,
        problemId,
        reason,
        message,
      },
    });
  }

  async getCompanies(studentId?: number) {
    if (companiesCache && companiesCache.expiresAt > Date.now() && !studentId) {
      return companiesCache.data;
    }

    const problems = await prisma.dsaProblem.findMany({
      where: { companies: { isEmpty: false } },
      select: { id: true, companies: true },
    });

    const countMap = new Map<string, number>();
    const problemIdsByCompany = new Map<string, number[]>();
    for (const p of problems) {
      for (const c of p.companies) {
        countMap.set(c, (countMap.get(c) || 0) + 1);
        if (!problemIdsByCompany.has(c)) problemIdsByCompany.set(c, []);
        problemIdsByCompany.get(c)!.push(p.id);
      }
    }

    let solvedByCompany = new Map<string, number>();
    if (studentId) {
      const solved = await prisma.studentDsaProgress.findMany({
        where: { studentId, solved: true },
        select: { problemId: true },
      });
      const solvedIds = new Set(solved.map((s) => s.problemId));
      for (const [company, pIds] of problemIdsByCompany) {
        solvedByCompany.set(company, pIds.filter((id) => solvedIds.has(id)).length);
      }
    }

    const result = Array.from(countMap.entries())
      .map(([name, count]) => ({ name, count, solved: solvedByCompany.get(name) ?? 0 }))
      .sort((a, b) => b.count - a.count);

    if (!studentId) companiesCache = { data: result, expiresAt: Date.now() + AGG_CACHE_TTL };
    return result;
  }

  async getCompanyProblems(
    company: string,
    studentId?: number,
    page = 1,
    limit = 50,
  ) {
    const where = { companies: { has: company } };

    const [problems, total] = await Promise.all([
      prisma.dsaProblem.findMany({
        where,
        orderBy: { difficulty: "asc" },
        skip: (page - 1) * limit,
        take: limit,
      }),
      prisma.dsaProblem.count({ where }),
    ]);

    let solvedMap = new Map<number, { notes: string | null }>();
    let bookmarkedIds = new Set<number>();
    if (studentId) {
      const pIds = problems.map((p) => p.id);
      const [progress, bookmarks] = await Promise.all([
        prisma.studentDsaProgress.findMany({
          where: { studentId, problemId: { in: pIds } },
          select: { problemId: true, solved: true, notes: true },
        }),
        prisma.dsaBookmark.findMany({
          where: { studentId, problemId: { in: pIds } },
          select: { problemId: true },
        }),
      ]);
      for (const p of progress) {
        if (p.solved) solvedMap.set(p.problemId, { notes: p.notes });
        else if (p.notes) solvedMap.set(p.problemId, { notes: p.notes });
      }
      bookmarkedIds = new Set(bookmarks.map((b) => b.problemId));
    }

    return {
      problems: problems.map((p) => {
        const progressData = solvedMap.get(p.id);
        return {
          id: p.id,
          title: p.title,
          slug: p.slug,
          difficulty: p.difficulty,
          leetcodeUrl: p.leetcodeUrl,
          gfgUrl: p.gfgUrl,
          articleUrl: p.articleUrl,
          videoUrl: p.videoUrl,
          hackerrankUrl: p.hackerrankUrl,
          codechefUrl: p.codechefUrl,
          tags: p.tags,
          companies: p.companies,
          hints: p.hints,
          sheets: p.sheets,
          acceptanceRate: p.acceptanceRate,
          solved: !!progressData,
          notes: progressData?.notes ?? null,
          bookmarked: bookmarkedIds.has(p.id),
        };
      }),
      total,
      totalPages: Math.ceil(total / limit),
      page,
    };
  }

  async getCompanyTrackStats(company: string, studentId?: number) {
    const problems = await prisma.dsaProblem.findMany({
      where: { companies: { has: company } },
      select: { id: true, difficulty: true },
    });

    const diffCount = { Easy: 0, Medium: 0, Hard: 0 };
    for (const p of problems) {
      const d = p.difficulty as keyof typeof diffCount;
      if (d in diffCount) diffCount[d]++;
    }

    let solvedIds = new Set<number>();
    if (studentId) {
      const solved = await prisma.studentDsaProgress.findMany({
        where: { studentId, solved: true, problemId: { in: problems.map((p) => p.id) } },
        select: { problemId: true },
      });
      solvedIds = new Set(solved.map((s) => s.problemId));
    }

    const diffSolved = { Easy: 0, Medium: 0, Hard: 0 };
    for (const p of problems) {
      if (solvedIds.has(p.id)) {
        const d = p.difficulty as keyof typeof diffCount;
        if (d in diffSolved) diffSolved[d]++;
      }
    }

    return {
      company,
      total: problems.length,
      solved: solvedIds.size,
      difficultyBreakdown: {
        Easy: { total: diffCount.Easy, solved: diffSolved.Easy },
        Medium: { total: diffCount.Medium, solved: diffSolved.Medium },
        Hard: { total: diffCount.Hard, solved: diffSolved.Hard },
      },
    };
  }

  async getPatterns() {
    if (patternsCache && patternsCache.expiresAt > Date.now()) {
      return patternsCache.data;
    }

    const problems = await prisma.dsaProblem.findMany({
      where: { tags: { isEmpty: false } },
      select: { tags: true },
    });

    const countMap = new Map<string, number>();
    for (const p of problems) {
      for (const t of p.tags) {
        countMap.set(t, (countMap.get(t) || 0) + 1);
      }
    }

    const result = Array.from(countMap.entries())
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count);

    patternsCache = { data: result, expiresAt: Date.now() + AGG_CACHE_TTL };
    return result;
  }

  async getPatternProblems(
    pattern: string,
    studentId?: number,
    page = 1,
    limit = 50,
  ) {
    const where = { tags: { has: pattern } };

    const [problems, total] = await Promise.all([
      prisma.dsaProblem.findMany({
        where,
        orderBy: { difficulty: "asc" },
        skip: (page - 1) * limit,
        take: limit,
      }),
      prisma.dsaProblem.count({ where }),
    ]);

    let solvedIds = new Set<number>();
    let bookmarkedIds = new Set<number>();
    if (studentId) {
      const pIds = problems.map((p) => p.id);
      const [progress, bookmarks] = await Promise.all([
        prisma.studentDsaProgress.findMany({
          where: { studentId, problemId: { in: pIds }, solved: true },
          select: { problemId: true },
        }),
        prisma.dsaBookmark.findMany({
          where: { studentId, problemId: { in: pIds } },
          select: { problemId: true },
        }),
      ]);
      solvedIds = new Set(progress.map((p) => p.problemId));
      bookmarkedIds = new Set(bookmarks.map((b) => b.problemId));
    }

    return {
      problems: problems.map((p) => ({
        id: p.id,
        title: p.title,
        slug: p.slug,
        difficulty: p.difficulty,
        leetcodeUrl: p.leetcodeUrl,
        gfgUrl: p.gfgUrl,
        tags: p.tags,
        companies: p.companies,
        hints: p.hints,
        sheets: p.sheets,
        acceptanceRate: p.acceptanceRate,
        solved: solvedIds.has(p.id),
        bookmarked: bookmarkedIds.has(p.id),
      })),
      total,
      totalPages: Math.ceil(total / limit),
      page,
    };
  }

  async getSheetStats(studentId?: number) {
    const allProblems = await prisma.dsaProblem.findMany({
      select: { id: true, sheets: true },
    });

    const sheets = ["a2z", "blind75", "neetcode150"];
    const sheetProblems = new Map<string, number[]>();
    for (const s of sheets) {
      sheetProblems.set(s, []);
    }

    for (const p of allProblems) {
      for (const s of p.sheets) {
        sheetProblems.get(s)?.push(p.id);
      }
    }

    let solvedIds = new Set<number>();
    if (studentId) {
      const solved = await prisma.studentDsaProgress.findMany({
        where: { studentId, solved: true },
        select: { problemId: true },
      });
      solvedIds = new Set(solved.map((s) => s.problemId));
    }

    return sheets.map((name) => {
      const ids = sheetProblems.get(name) || [];
      return {
        name,
        total: ids.length,
        solved: ids.filter((id) => solvedIds.has(id)).length,
      };
    });
  }

  async getLists(studentId?: number) {
    const allProblems = await prisma.dsaProblem.findMany({
      select: { id: true, sheets: true },
    });

    const sheets = ["blind75", "neetcode150", "internhack100", "faang100"];
    const sheetProblems = new Map<string, number[]>();
    for (const s of sheets) {
      sheetProblems.set(s, []);
    }

    for (const p of allProblems) {
      for (const s of p.sheets) {
        sheetProblems.get(s)?.push(p.id);
      }
    }

    let solvedIds = new Set<number>();
    if (studentId) {
      const solved = await prisma.studentDsaProgress.findMany({
        where: { studentId, solved: true },
        select: { problemId: true },
      });
      solvedIds = new Set(solved.map((s) => s.problemId));
    }

    const listMeta: Record<
      string,
      { title: string; description: string; estimatedHours: number }
    > = {
      blind75: {
        title: "Blind 75",
        description:
          "The most referenced DSA problem list for FAANG interview prep. Covers arrays, strings, trees, graphs, and more.",
        estimatedHours: 75,
      },
      neetcode150: {
        title: "NeetCode 150",
        description:
          "Expanded version of Blind 75. Covers LeetCode's essential problem set grouped by patterns.",
        estimatedHours: 150,
      },
      internhack100: {
        title: "InternHack 100",
        description:
          "InternHack's own curated list — handpicked problems that cover every must-know DSA concept.",
        estimatedHours: 100,
      },
      faang100: {
        title: "FAANG Hot 100",
        description:
          "The 100 most frequently asked DSA problems at Facebook, Amazon, Apple, Netflix, and Google.",
        estimatedHours: 100,
      },
    };

    return sheets.map((name) => {
      const ids = sheetProblems.get(name) || [];
      const meta = listMeta[name];
      return {
        slug: name,
        title: meta.title,
        description: meta.description,
        total: ids.length,
        solved: ids.filter((id) => solvedIds.has(id)).length,
        estimatedHours: meta.estimatedHours,
      };
    });
  }

  async getListProblems(
    list: string,
    studentId?: number,
    page = 1,
    limit = 50,
  ) {
    const where = { sheets: { has: list } };

    const [problems, total] = await Promise.all([
      prisma.dsaProblem.findMany({
        where,
        orderBy: { difficulty: "asc" },
        skip: (page - 1) * limit,
        take: limit,
      }),
      prisma.dsaProblem.count({ where }),
    ]);

    let solvedIds = new Set<number>();
    let bookmarkedIds = new Set<number>();
    if (studentId) {
      const pIds = problems.map((p) => p.id);
      const [progress, bookmarks] = await Promise.all([
        prisma.studentDsaProgress.findMany({
          where: { studentId, problemId: { in: pIds }, solved: true },
          select: { problemId: true },
        }),
        prisma.dsaBookmark.findMany({
          where: { studentId, problemId: { in: pIds } },
          select: { problemId: true },
        }),
      ]);
      solvedIds = new Set(progress.map((p) => p.problemId));
      bookmarkedIds = new Set(bookmarks.map((b) => b.problemId));
    }

    return {
      problems: problems.map((p) => ({
        id: p.id,
        title: p.title,
        slug: p.slug,
        difficulty: p.difficulty,
        leetcodeUrl: p.leetcodeUrl,
        gfgUrl: p.gfgUrl,
        tags: p.tags,
        companies: p.companies,
        sheets: p.sheets,
        acceptanceRate: p.acceptanceRate,
        solved: solvedIds.has(p.id),
        bookmarked: bookmarkedIds.has(p.id),
      })),
      total,
      totalPages: Math.ceil(total / limit),
      page,
    };
  }

  async getMyProgress(studentId: number) {
    const allProblems = await prisma.dsaProblem.findMany({
      select: { id: true, difficulty: true, slug: true },
    });

    const solved = await prisma.studentDsaProgress.findMany({
      where: { studentId, solved: true },
      select: { problemId: true },
    });
    const solvedIds = new Set(solved.map((s) => s.problemId));

    const stats = {
      easy: { total: 0, solved: 0 },
      medium: { total: 0, solved: 0 },
      hard: { total: 0, solved: 0 },
    };

    for (const p of allProblems) {
      const key = p.difficulty.toLowerCase() as "easy" | "medium" | "hard";
      if (stats[key]) {
        stats[key].total++;
        if (solvedIds.has(p.id)) stats[key].solved++;
      }
    }

    // solvedSlugs is used by the Placement Prep Plans dashboard to auto-complete daily DSA tasks matching solved slugs
    const solvedSlugs = allProblems.filter((p) => solvedIds.has(p.id)).map((p) => p.slug);

    return {
      totalProblems: allProblems.length,
      totalSolved: solvedIds.size,
      byDifficulty: stats,
      solvedSlugs,
    };
  }

  // ── Analytics ───────────────────────────────────────────────────────

  async getAnalytics(studentId: number) {
    const progress = await this.getMyProgress(studentId);

    const allProblems = await prisma.dsaProblem.findMany({
      select: { id: true, difficulty: true, tags: true },
    });
    const solved = await prisma.studentDsaProgress.findMany({
      where: { studentId, solved: true },
      select: { problemId: true, solvedAt: true },
    });
    const solvedIds = new Set(solved.map((s) => s.problemId));

    const topicAccuracy: Record<string, { total: number; solved: number }> = {};
    for (const p of allProblems) {
      for (const tag of p.tags) {
        if (!topicAccuracy[tag]) topicAccuracy[tag] = { total: 0, solved: 0 };
        topicAccuracy[tag].total++;
        if (solvedIds.has(p.id)) topicAccuracy[tag].solved++;
      }
    }

    const now = new Date();
    const twelveWeeksAgo = new Date(now);
    twelveWeeksAgo.setDate(twelveWeeksAgo.getDate() - 84);

    const weeklyCounts = new Map<string, number>();
    for (let i = 0; i < 12; i++) {
      const weekStart = new Date(now);
      weekStart.setDate(weekStart.getDate() - weekStart.getDay() - i * 7);
      const key = weekStart.toISOString().slice(0, 10);
      weeklyCounts.set(key, 0);
    }

    for (const s of solved) {
      const d = new Date(s.solvedAt);
      const dayOfWeek = d.getDay();
      const weekStart = new Date(d);
      weekStart.setDate(d.getDate() - dayOfWeek);
      const key = weekStart.toISOString().slice(0, 10);
      if (weeklyCounts.has(key)) {
        weeklyCounts.set(key, (weeklyCounts.get(key) || 0) + 1);
      }
    }

    const weeklyTrend = Array.from(weeklyCounts.entries())
      .sort((a, b) => a[0].localeCompare(b[0]))
      .map(([weekStart, count]) => ({ weekStart, count }));

    const sixMonthsAgo = new Date(now);
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
    const monthlyCounts = new Map<string, number>();

    for (const s of solved) {
      const d = new Date(s.solvedAt);
      if (d >= sixMonthsAgo) {
        const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
        monthlyCounts.set(key, (monthlyCounts.get(key) || 0) + 1);
      }
    }

    const monthlyTrend = Array.from(monthlyCounts.entries())
      .sort((a, b) => a[0].localeCompare(b[0]))
      .map(([month, count]) => ({ month, count }));

    return {
      byDifficulty: progress.byDifficulty,
      topicAccuracy: Object.entries(topicAccuracy)
        .map(([topic, data]) => ({ topic, ...data, percentage: data.total > 0 ? Math.round((data.solved / data.total) * 100) : 0 }))
        .sort((a, b) => a.percentage - b.percentage),
      weeklyTrend,
      monthlyTrend,
      totalSolved: progress.totalSolved,
      totalProblems: progress.totalProblems,
    };
  }

  // ── Test case generation (cached permanently) ──

  async getOrGenerateTestCases(problemId: number) {
    const existing = await prisma.dsaTestCase.findMany({
      where: { problemId },
      orderBy: { orderIndex: "asc" },
    });
    if (existing.length > 0) return existing;

    const problem = await prisma.dsaProblem.findUnique({
      where: { id: problemId },
    });
    if (!problem) throw new Error("Problem not found");
    if (!problem.description)
      throw new Error("Cannot generate test cases, problem has no description");

    const generated = await this.generateTestCasesWithAI(problem);
    const testCases = await this.verifyTestCasesWithAI(problem, generated);

    return Promise.all(
      testCases.map((tc, idx) =>
        prisma.dsaTestCase.create({
          data: {
            problemId,
            input: tc.input,
            expected: tc.expected,
            label: tc.label || null,
            orderIndex: idx,
          },
        }),
      ),
    );
  }

  /** Parses a JSON array of `{input, expected, label}` out of a raw AI response, tolerating markdown fences/surrounding prose. */
  private parseTestCaseArray(text: string): { input: string; expected: string; label: string }[] {
    let cleaned = text.trim();
    if (cleaned.startsWith("```")) {
      cleaned = cleaned.replace(/^```(?:json)?\n?/, "").replace(/\n?```$/, "");
    }

    let parsed: unknown;
    try {
      parsed = JSON.parse(cleaned);
    } catch {
      const arrMatch = cleaned.match(/\[[\s\S]*\]/);
      if (!arrMatch) throw new Error("Failed to parse AI-generated test cases");
      parsed = JSON.parse(arrMatch[0]);
    }
    if (!Array.isArray(parsed) || parsed.length === 0) {
      throw new Error("AI returned empty or non-array result");
    }
    return parsed.map((tc: Record<string, unknown>) => ({
      input: String(tc.input ?? ""),
      expected: String(tc.expected ?? ""),
      label: String(tc.label ?? "Test case"),
    }));
  }

  private async generateTestCasesWithAI(problem: {
    title: string;
    description: string | null;
    examples: string | null;
    constraints: string | null;
    difficulty: string;
  }): Promise<{ input: string; expected: string; label: string }[]> {
    const provider = getProviderForService("DSA_TESTCASE_GEN");

    const prompt = `You are a competitive programming test case generator.

PROBLEM: ${problem.title}

DESCRIPTION:
${problem.description ?? ""}

${problem.examples ? `EXAMPLES:\n${problem.examples}` : ""}

${problem.constraints ? `CONSTRAINTS:\n${problem.constraints}` : ""}

DIFFICULTY: ${problem.difficulty}

Generate exactly 6 test cases. Include:
- 2 basic cases from the examples
- 2 edge cases (empty input, single element, minimum values, etc.)
- 2 larger cases within constraints

RULES:
1. "input" = exact stdin string (values on separate lines or space-separated as typical for competitive programming)
2. "expected" = exact stdout output (trimmed, no trailing whitespace)
3. For array inputs: first line = n (size), second line = space-separated elements
4. For string inputs: just the string on one line
5. For arrays as output: space-separated values on one line
6. For booleans: output "true" or "false"
7. For the 2 basic cases, copy the "expected" value verbatim from the EXAMPLES block above, do not recompute it
8. For the 4 invented cases (edge/larger), work through the problem's logic step by step before writing "expected" — these are the ones most likely to be wrong

Return ONLY a JSON array, no markdown fences:
[{"input":"...","expected":"...","label":"Basic case 1"},...]`;

    const response = await provider.generateText(prompt);
    try {
      const testCases = this.parseTestCaseArray(response.text);
      logAIRequest("DSA_TESTCASE_GEN", response, true);
      return testCases;
    } catch (err) {
      logAIRequest("DSA_TESTCASE_GEN", response, false, "Failed to parse AI-generated test cases");
      throw err;
    }
  }

  /**
   * Second, independent pass: re-derives each test case's expected output from
   * scratch and corrects it if it disagrees with the first pass. Generation
   * asks the model to invent edge/larger cases and state their answers in the
   * same breath, which is exactly the setup where it hallucinates a wrong
   * answer (e.g. forced-decode problems); a fresh pass with no memory of how
   * "expected" was produced catches those. Falls back to the original cases
   * if verification fails or comes back malformed, so a flaky AI call never
   * blocks test case generation.
   */
  private async verifyTestCasesWithAI(
    problem: {
      title: string;
      description: string | null;
      examples: string | null;
      constraints: string | null;
      difficulty: string;
    },
    testCases: { input: string; expected: string; label: string }[],
  ): Promise<{ input: string; expected: string; label: string }[]> {
    const provider = getProviderForService("DSA_TESTCASE_GEN");

    const prompt = `You are an independent verifier for a competitive programming judge. You did not write the test cases below — check each one from scratch.

PROBLEM: ${problem.title}

DESCRIPTION:
${problem.description ?? ""}

${problem.constraints ? `CONSTRAINTS:\n${problem.constraints}` : ""}

For each test case, work through the problem's logic step by step against its "input", and determine the true correct output. If the given "expected" value is wrong, replace it with the correct one. Never change "input" or "label".

TEST CASES:
${JSON.stringify(testCases)}

Return ONLY a JSON array with exactly ${testCases.length} items in the same order, same shape as the input:
[{"input":"...","expected":"...","label":"..."},...]`;

    try {
      const response = await provider.generateText(prompt);
      const verified = this.parseTestCaseArray(response.text);
      if (verified.length !== testCases.length) {
        throw new Error("Verifier returned a different number of test cases");
      }
      logAIRequest("DSA_TESTCASE_GEN", response, true);
      // Trust the verifier only for "expected" — keep the original input/label
      // so a drifting verifier can't corrupt what's actually being tested.
      return testCases.map((tc, i) => ({ ...tc, expected: verified[i]?.expected ?? tc.expected }));
    } catch (err) {
      console.warn("[DSA] Test case verification failed, using unverified cases:", err);
      return testCases;
    }
  }

  // ── Code execution ──
  // Code runs entirely in the student's browser (Web Worker for JS, Pyodide
  // for Python — see client/src/module/student/dsa/lib/dsa-runner.ts). The
  // server never executes untrusted code; it only knows the stdin/expected
  // pairs (getTestCasesForRun withholds `expected` until after submission)
  // and authoritatively compares the client-reported actual output.

  /** Test cases to run against, without the expected output (withheld until after submission). */
  async getTestCasesForRun(problemId: number) {
    const testCases = await this.getOrGenerateTestCases(problemId);
    return testCases.map((tc) => ({ id: tc.id, input: tc.input, label: tc.label }));
  }

  async submitExecutionResults(
    studentId: number,
    problemId: number,
    language: string,
    code: string,
    clientResults: { testCaseId: number; actual: string; timeMs: number; error?: string }[],
  ) {
    const testCases = await prisma.dsaTestCase.findMany({
      where: { problemId },
      orderBy: { orderIndex: "asc" },
    });
    if (testCases.length === 0) throw new Error("No test cases available");

    const byTestCaseId = new Map(clientResults.map((r) => [r.testCaseId, r]));

    const results: TestCaseResult[] = [];
    let maxTime = 0;

    for (const tc of testCases) {
      const clientResult = byTestCaseId.get(tc.id);
      const expectedOutput = tc.expected.trim();

      if (!clientResult) {
        results.push({
          input: tc.input,
          expected: expectedOutput,
          actual: "",
          passed: false,
          label: tc.label,
          timeMs: 0,
          error: "Not executed",
        });
        continue;
      }

      const actualOutput = clientResult.actual.trim();
      const passed = !clientResult.error && actualOutput === expectedOutput;
      if (clientResult.timeMs > maxTime) maxTime = clientResult.timeMs;

      results.push({
        input: tc.input,
        expected: expectedOutput,
        actual: actualOutput,
        passed,
        label: tc.label,
        timeMs: clientResult.timeMs,
        error: clientResult.error ?? null,
      });
    }

    const passedCount = results.filter((r) => r.passed).length;
    const allPassed = passedCount === testCases.length;

    const submission = await prisma.dsaSubmission.create({
      data: {
        studentId,
        problemId,
        language,
        code,
        passed: passedCount,
        total: testCases.length,
        allPassed,
        timeMs: maxTime,
        memoryKb: 0,
        results: JSON.stringify(results),
      },
    });

    // Auto-mark solved when all pass
    if (allPassed) {
      await prisma.studentDsaProgress.upsert({
        where: { studentId_problemId: { studentId, problemId } },
        update: { solved: true, solvedAt: new Date() },
        create: { studentId, problemId, solved: true },
      });
    }

    // Track engagement — fire-and-forget, never blocks the submission response
    void prisma.contentView
      .create({
        data: {
          userId: studentId,
          contentType: "DSA",
          contentId: String(problemId),
          timeSpentMs: maxTime,
          completed: allPassed,
        },
      })
      .catch(() => {
        /* swallow — analytics must never break submissions */
      });

    return {
      passed: passedCount,
      total: testCases.length,
      allPassed,
      results,
      submissionId: submission.id,
    };
  }

  // ── Submission history ──

  async getSubmissionHistory(studentId: number, problemId: number) {
    return prisma.dsaSubmission.findMany({
      where: { studentId, problemId },
      orderBy: { createdAt: "desc" },
      take: 20,
      select: {
        id: true,
        language: true,
        code: true,
        passed: true,
        total: true,
        allPassed: true,
        timeMs: true,
        memoryKb: true,
        createdAt: true,
      },
    });
  }

  async getActivity(studentId: number, year: number) {
    const startDate = new Date(Date.UTC(year, 0, 1));
    const endDate = new Date(Date.UTC(year + 1, 0, 1));

    const progress = await prisma.studentDsaProgress.findMany({
      where: {
        studentId,
        solved: true,
        solvedAt: {
          gte: startDate,
          lt: endDate,
        },
      },
      select: {
        solvedAt: true,
      },
    });

    const activityMap = new Map<string, number>();

    for (const p of progress) {
      const date = p.solvedAt.toISOString().split("T")[0];
      if (date) {
        activityMap.set(date, (activityMap.get(date) || 0) + 1);
      }
    }

    return Array.from(activityMap.entries())
      .map(([date, count]) => ({ date, count }))
      .sort((a, b) => a.date.localeCompare(b.date));
  }

  async getDailyProblem(userId?: number) {
    const today = new Date().toISOString().slice(0, 10);

    const problems = await prisma.dsaProblem.findMany();

    if (!problems.length) {
      throw new Error("No DSA problems found");
    }

    const seed = today
      .split("-")
      .join("")
      .split("")
      .reduce((a, b) => a + Number(b), 0);

    const selected = problems[seed % problems.length];

    let solvedToday = false;

    if (userId) {
      const todayStart = new Date(today + "T00:00:00.000Z");
      const tomorrowStart = new Date(todayStart.getTime() + 86_400_000);

      const submission = await prisma.dsaSubmission.findFirst({
        where: {
          studentId: userId,
          problemId: selected.id,
          createdAt: {
            gte: todayStart,
            lt: tomorrowStart,
          },
        },
      });

      solvedToday = !!submission;
    }

    return {
      problem: selected,
      date: today,
      solvedToday,
    };
  }

  async getUserDsaStreak(userId: number) {
    const today = new Date().toISOString().slice(0, 10);

    const submissions = await prisma.dsaSubmission.findMany({
      where: { studentId: userId },
      select: { createdAt: true },
      orderBy: { createdAt: "desc" },
    });

    const uniqueDays = new Set<string>();
    for (const s of submissions) {
      uniqueDays.add(s.createdAt.toISOString().slice(0, 10));
    }

    const sortedDays = Array.from(uniqueDays).sort().reverse();

    let currentStreak = 0;
    let longestStreak = 0;
    let tempStreak = 0;

    const todayDate = new Date(today);

    for (const dayStr of sortedDays) {
      const dayDate = new Date(dayStr + "T00:00:00Z");
      const diffDays = Math.round(
        (todayDate.getTime() - dayDate.getTime()) / (1000 * 60 * 60 * 24),
      );

      if (diffDays === currentStreak) {
        currentStreak++;
      } else {
        break;
      }
    }

    const allDays = [...uniqueDays].sort();
    for (let i = 0; i < allDays.length; i++) {
      if (i === 0) {
        tempStreak = 1;
      } else {
        const prev = new Date(allDays[i - 1] + "T00:00:00Z");
        const curr = new Date(allDays[i] + "T00:00:00Z");
        const diff = Math.round(
          (curr.getTime() - prev.getTime()) / (1000 * 60 * 60 * 24),
        );
        if (diff === 1) {
          tempStreak++;
        } else {
          tempStreak = 1;
        }
      }
      longestStreak = Math.max(longestStreak, tempStreak);
    }

    return {
      currentStreak,
      longestStreak,
      solvedToday: uniqueDays.has(today),
      lastSolvedDate: sortedDays[0] || null,
      activeDays: sortedDays.slice(0, 30),
    };
  }

  private static HINT_TEMPLATES: Record<string, string[]> = {
    conceptual: [
      "Think about what data structure naturally maps to this problem. What operations are you performing on the input?",
      "Consider the constraints — what is the expected time complexity? O(n), O(n log n), or O(n²)?",
      "This problem can be reduced to a classic algorithm. Think about which one.",
      "Try to express the problem in terms of simpler sub-problems. What would make the problem trivial?",
      "What information do you need to track as you process the input? Can you use a hash map for O(1) lookups?",
    ],
    algorithmic: [
      "Consider using the two-pointer technique — one fast, one slow — to traverse the input in a single pass.",
      "A sliding window approach might work here. Expand the window when the condition holds, shrink it when it doesn't.",
      "Try sorting the input first — many problems become straightforward once the data is ordered.",
      "Think about using a monotonic stack to track the nearest greater/smaller element.",
      "A binary search over the answer space could work if the problem has a monotonic property.",
      "Consider using BFS for shortest-path problems or DFS when you need to explore all possibilities.",
      "Use a prefix sum or running sum to avoid recalculating subarray totals repeatedly.",
      "This can be solved with dynamic programming — define dp[i] as the optimal solution for the first i elements.",
    ],
    code: [
      "Start by setting up your edge cases: empty input, single element, already sorted, etc.",
      "Initialize your result variable and iterate through the input. Update the result as you go.",
      "Use early termination — if you find the answer before processing all input, return immediately.",
      "Consider using a min-heap or max-heap to keep track of the k largest/smallest elements.",
      "For recursion, define your base case first, then the recursive step. Use memoization for overlapping subproblems.",
      "Use a set to track visited elements and avoid duplicates. This is especially useful for graph/cycle detection.",
      "If using binary search, remember to update left = mid + 1 and right = mid - 1, not left = mid.",
      "For linked list problems, use a dummy head node to simplify edge cases involving the head.",
    ],
  };

  async generateHint(
    userId: number,
    problemId: number,
    level: "conceptual" | "algorithmic" | "code",
  ) {
    const problem = await prisma.dsaProblem.findUnique({
      where: { id: problemId },
      select: {
        id: true,
        title: true,
        tags: true,
        difficulty: true,
        hints: true,
      },
    });
    if (!problem) throw new Error("Problem not found");

    const templates =
      DsaService.HINT_TEMPLATES[level] ?? DsaService.HINT_TEMPLATES.conceptual;
    const seed =
      problemId + level.charCodeAt(0) + (problem.tags[0]?.length ?? 0);
    const idx = seed % templates.length;
    const baseHint = templates[idx];

    const tagContext =
      problem.tags.length > 0
        ? ` This problem relates to: ${problem.tags.join(", ")}.`
        : "";

    const hint = `${baseHint}${tagContext} (level: ${level})`;



    return {
      hint,
      level,
      problemId,
      problemTitle: problem.title,
      difficulty: problem.difficulty,
      hintIndex: idx,
    };
  }

  async getSimilarProblems(id: number, limit = 3) {
    const current = await prisma.dsaProblem.findUnique({
      where: { id },
      select: { tags: true },
    });
    if (!current) throw new Error("Problem not found");
    if (current.tags.length === 0) return [];

    const similar = await prisma.dsaProblem.findMany({
      where: {
        tags: { hasSome: current.tags },
        id: { not: id },
      },
      select: {
        id: true,
        title: true,
        slug: true,
        difficulty: true,
        tags: true,
      },
    });

    // Sort by difficulty: Easy → Medium → Hard, then by title
    const difficultyOrder: Record<string, number> = {
      Easy: 1,
      Medium: 2,
      Hard: 3,
    };
    similar.sort((a, b) => {
      const da = difficultyOrder[a.difficulty] ?? 4;
      const db = difficultyOrder[b.difficulty] ?? 4;
      if (da !== db) return da - db;
      return a.title.localeCompare(b.title);
    });

    return similar.slice(0, limit);
  }

  async getApproaches(slug: string) {
    return getApproaches(slug);
  }

  // ── AI Code Review ──

  async generateCodeReview(
    submissionId: number,
    studentId: number,
  ): Promise<CodeReviewResponse> {
    // 1. Fetch submission and verify ownership
    const submission = await prisma.dsaSubmission.findUnique({
      where: { id: submissionId },
    });
    if (!submission) throw new Error("Submission not found");
    if (submission.studentId !== studentId)
      throw new Error("Not authorized to review this submission");

    // 2. Fetch problem context
    const problem = await prisma.dsaProblem.findUnique({
      where: { id: submission.problemId },
      select: {
        title: true,
        description: true,
        constraints: true,
        difficulty: true,
        tags: true,
      },
    });
    if (!problem) throw new Error("Problem not found");

    // 3. Call AI via provider registry
    const provider = getProviderForService("DSA_CODE_REVIEW");
    const prompt = this.buildCodeReviewPrompt(submission, problem);
    const response = await provider.generateText(prompt);

    // 4. Parse and validate
    try {
      const parsed = this.parseCodeReviewResponse(response.text);
      // 5. Log success
      logAIRequest("DSA_CODE_REVIEW", response, true, undefined, studentId);



      return parsed;
    } catch (err) {
      logAIRequest(
        "DSA_CODE_REVIEW",
        response,
        false,
        err instanceof Error ? err.message : "Parse failed",
        studentId,
      );
      throw err;
    }
  }

  private buildCodeReviewPrompt(
    submission: {
      code: string;
      language: string;
      passed: number;
      total: number;
      allPassed: boolean;
    },
    problem: {
      title: string;
      description: string | null;
      constraints: string | null;
      difficulty: string;
      tags: string[];
    },
  ): string {
    return `You are an expert DSA code reviewer. Analyze the following student submission and provide structured feedback.

PROBLEM: ${problem.title}
DIFFICULTY: ${problem.difficulty}
TAGS: ${problem.tags.join(", ")}

${problem.description ? `DESCRIPTION:\n${problem.description}` : ""}

${problem.constraints ? `CONSTRAINTS:\n${problem.constraints}` : ""}

STUDENT'S CODE (${submission.language}):
\`\`\`${submission.language}
${submission.code}
\`\`\`

TEST RESULTS: ${submission.passed}/${submission.total} passed${submission.allPassed ? " (All passed)" : ""}

Analyze the code and respond with ONLY valid JSON (no markdown formatting, no code blocks, no explanation) in this exact structure:
{
  "timeComplexity": "<Big-O time complexity with brief justification, e.g. 'O(n log n) — sorting dominates'>",
  "spaceComplexity": "<Big-O space complexity with brief justification, e.g. 'O(n) — hash map stores at most n entries'>",
  "readability": {
    "score": <number 1-10>,
    "feedback": "<specific readability feedback: variable naming, structure, comments, etc.>"
  },
  "edgeCases": [
    "<edge case the solution might miss or handles well, be specific to this problem>",
    "<another edge case>"
  ],
  "suggestions": [
    "<specific, actionable improvement suggestion>",
    "<another suggestion>"
  ]
}

Rules:
1. Be specific to THIS problem and THIS code — avoid generic advice
2. If all tests passed, focus on optimization and code quality
3. If tests failed, prioritize correctness issues
4. Provide 2-4 edge cases and 2-5 suggestions
5. For readability score: 1-3 = poor, 4-6 = decent, 7-8 = good, 9-10 = excellent`;
  }

  private parseCodeReviewResponse(responseText: string): CodeReviewResponse {
    let jsonStr = responseText.trim();

    // Strip markdown code fences if present
    const jsonMatch = jsonStr.match(/```(?:json)?\s*([\s\S]*?)```/);
    if (jsonMatch?.[1]) {
      jsonStr = jsonMatch[1].trim();
    }

    // Strip trailing commas before ] or } (common AI quirk)
    jsonStr = jsonStr.replace(/,\s*([\]}])/g, "$1");

    let parsed: unknown;
    try {
      parsed = JSON.parse(jsonStr);
    } catch {
      // Try to extract just the JSON object if there's surrounding text
      const objMatch = jsonStr.match(/\{[\s\S]*\}/);
      if (objMatch) {
        const cleaned = objMatch[0].replace(/,\s*([\]}])/g, "$1");
        parsed = JSON.parse(cleaned);
      } else {
        parsed = {};
      }
    }

    // Validate with Zod
    const result = codeReviewResponseSchema.safeParse(parsed);
    if (result.success) {
      return result.data;
    }

    // Fallback: return a best-effort response from the raw parsed data
    const obj = parsed as Record<string, unknown>;
    return {
      timeComplexity:
        typeof obj["timeComplexity"] === "string"
          ? obj["timeComplexity"]
          : "Unable to determine",
      spaceComplexity:
        typeof obj["spaceComplexity"] === "string"
          ? obj["spaceComplexity"]
          : "Unable to determine",
      readability: {
        score:
          typeof (obj["readability"] as Record<string, unknown>)?.["score"] ===
          "number"
            ? Math.max(
                1,
                Math.min(
                  10,
                  Math.round(
                    (obj["readability"] as Record<string, unknown>)[
                      "score"
                    ] as number,
                  ),
                ),
              )
            : 5,
        feedback:
          typeof (obj["readability"] as Record<string, unknown>)?.[
            "feedback"
          ] === "string"
            ? ((obj["readability"] as Record<string, unknown>)[
                "feedback"
              ] as string)
            : "No feedback available",
      },
      edgeCases: Array.isArray(obj["edgeCases"])
        ? obj["edgeCases"].filter((s): s is string => typeof s === "string")
        : [],
      suggestions: Array.isArray(obj["suggestions"])
        ? obj["suggestions"].filter((s): s is string => typeof s === "string")
        : [],
    };
  }
}
