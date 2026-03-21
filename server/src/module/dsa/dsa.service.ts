import { prisma } from "../../database/db.js";

export class DsaService {
  async listTopics(studentId?: number, sheet?: string, difficulty?: string[]) {
    const topics = await prisma.dsaTopic.findMany({
      orderBy: { orderIndex: "asc" },
    });

    // Build problem filter
    const baseWhere: Record<string, unknown> = {};
    if (sheet) baseWhere.sheets = { has: sheet };
    if (difficulty?.length) baseWhere.difficulty = { in: difficulty };

    const results = [];

    for (const topic of topics) {
      const problemWhere = { ...baseWhere, tags: { has: topic.slug } };
      const problemCount = await prisma.dsaProblem.count({ where: problemWhere });
      if (problemCount < 10) continue;

      let solvedCount = 0;
      if (studentId) {
        solvedCount = await prisma.studentDsaProgress.count({
          where: { studentId, solved: true, problem: problemWhere },
        });
      }

      results.push({
        id: topic.id,
        name: topic.name,
        slug: topic.slug,
        description: topic.description,
        orderIndex: topic.orderIndex,
        problemCount,
        solvedCount,
      });
    }

    return results;
  }

  async getTopicBySlug(slug: string, studentId?: number, page = 1, limit = 50, difficulty?: string, search?: string) {
    const topic = await prisma.dsaTopic.findUnique({ where: { slug } });
    if (!topic) throw new Error("Topic not found");

    const problemWhere: Record<string, unknown> = { tags: { has: slug } };
    if (difficulty && difficulty !== "All") problemWhere.difficulty = difficulty;
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
    let totalSolved = 0;

    if (studentId) {
      const pIds = problems.map((p) => p.id);
      const [progress, bookmarks, solvedTotal] = await Promise.all([
        prisma.studentDsaProgress.findMany({
          where: { studentId, problemId: { in: pIds } },
          select: { problemId: true, solved: true, notes: true },
        }),
        prisma.dsaBookmark.findMany({
          where: { studentId, problemId: { in: pIds } },
          select: { problemId: true },
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
    const problem = await prisma.dsaProblem.findUnique({ where: { id: problemId } });
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
          await prisma.studentDsaProgress.delete({ where: { id: existing.id } });
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
    const problem = await prisma.dsaProblem.findUnique({ where: { id: problemId } });
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
    const problem = await prisma.dsaProblem.findUnique({ where: { id: problemId } });
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
    const progress = await prisma.studentDsaProgress.findMany({
      where: { studentId, problemId: { in: problemIds } },
      select: { problemId: true, solved: true },
    });
    const solvedIds = new Set(progress.filter((p) => p.solved).map((p) => p.problemId));

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
      createdAt: b.createdAt,
    }));
  }

  async getCompanies() {
    const problems = await prisma.dsaProblem.findMany({
      where: { companies: { isEmpty: false } },
      select: { companies: true },
    });

    const countMap = new Map<string, number>();
    for (const p of problems) {
      for (const c of p.companies) {
        countMap.set(c, (countMap.get(c) || 0) + 1);
      }
    }

    return Array.from(countMap.entries())
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count);
  }

  async getCompanyProblems(company: string, studentId?: number, page = 1, limit = 50) {
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

  async getPatterns() {
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

    return Array.from(countMap.entries())
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count);
  }

  async getPatternProblems(pattern: string, studentId?: number, page = 1, limit = 50) {
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

  async getMyProgress(studentId: number) {
    const allProblems = await prisma.dsaProblem.findMany({
      select: { id: true, difficulty: true },
    });

    const solved = await prisma.studentDsaProgress.findMany({
      where: { studentId, solved: true },
      select: { problemId: true },
    });
    const solvedIds = new Set(solved.map((s) => s.problemId));

    const stats = { easy: { total: 0, solved: 0 }, medium: { total: 0, solved: 0 }, hard: { total: 0, solved: 0 } };

    for (const p of allProblems) {
      const key = p.difficulty.toLowerCase() as "easy" | "medium" | "hard";
      if (stats[key]) {
        stats[key].total++;
        if (solvedIds.has(p.id)) stats[key].solved++;
      }
    }

    return {
      totalProblems: allProblems.length,
      totalSolved: solvedIds.size,
      byDifficulty: stats,
    };
  }
}
