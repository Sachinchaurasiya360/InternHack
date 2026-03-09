import { prisma } from "../../database/db.js";

export class DsaService {
  async listTopics(studentId?: number, sheet?: string, difficulty?: string[]) {
    const problemWhere: Record<string, unknown> = {};
    if (sheet) problemWhere.sheets = { has: sheet };
    if (difficulty?.length) problemWhere.difficulty = { in: difficulty };

    const hasProblemFilter = Object.keys(problemWhere).length > 0;

    const topics = await prisma.dsaTopic.findMany({
      orderBy: { orderIndex: "asc" },
      include: {
        subTopics: {
          include: {
            problems: hasProblemFilter
              ? { where: problemWhere, select: { id: true } }
              : { select: { id: true } },
          },
        },
      },
    });

    const topicsWithCounts = topics
      .map((t) => {
        const problemCount = t.subTopics.reduce((sum, st) => sum + st.problems.length, 0);
        const problemIds = t.subTopics.flatMap((st) => st.problems.map((p) => p.id));
        return {
          id: t.id,
          name: t.name,
          slug: t.slug,
          description: t.description,
          orderIndex: t.orderIndex,
          problemCount,
          solvedCount: 0,
          _problemIds: problemIds,
        };
      })
      .filter((t) => t.problemCount > 0);

    if (studentId) {
      const solved = await prisma.studentDsaProgress.findMany({
        where: { studentId, solved: true },
        select: { problemId: true },
      });
      const solvedIds = new Set(solved.map((s) => s.problemId));

      for (const t of topicsWithCounts) {
        t.solvedCount = t._problemIds.filter((id) => solvedIds.has(id)).length;
      }
    }

    return topicsWithCounts.map(({ _problemIds, ...rest }) => rest);
  }

  async getTopicBySlug(slug: string, studentId?: number) {
    const topic = await prisma.dsaTopic.findUnique({
      where: { slug },
      include: {
        subTopics: {
          orderBy: { orderIndex: "asc" },
          include: {
            problems: {
              orderBy: { orderIndex: "asc" },
            },
          },
        },
      },
    });
    if (!topic) throw new Error("Topic not found");

    let solvedMap = new Map<number, { notes: string | null }>();
    let bookmarkedIds = new Set<number>();

    if (studentId) {
      const progress = await prisma.studentDsaProgress.findMany({
        where: {
          studentId,
          problem: { subTopic: { topicId: topic.id } },
        },
        select: { problemId: true, solved: true, notes: true },
      });
      for (const p of progress) {
        if (p.solved) solvedMap.set(p.problemId, { notes: p.notes });
        else if (p.notes) solvedMap.set(p.problemId, { notes: p.notes });
      }

      const bookmarks = await prisma.dsaBookmark.findMany({
        where: {
          studentId,
          problem: { subTopic: { topicId: topic.id } },
        },
        select: { problemId: true },
      });
      bookmarkedIds = new Set(bookmarks.map((b) => b.problemId));
    }

    const subTopics = topic.subTopics.map((st) => ({
      id: st.id,
      name: st.name,
      orderIndex: st.orderIndex,
      problems: st.problems.map((p) => {
        const progressData = solvedMap.get(p.id);
        return {
          id: p.id,
          title: p.title,
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
          solved: solvedMap.has(p.id) && (progressData !== undefined),
          notes: progressData?.notes ?? null,
          bookmarked: bookmarkedIds.has(p.id),
        };
      }),
    }));

    const totalProblems = subTopics.reduce((sum, st) => sum + st.problems.length, 0);
    const totalSolved = subTopics.reduce(
      (sum, st) => sum + st.problems.filter((p) => p.solved).length,
      0,
    );

    return {
      id: topic.id,
      name: topic.name,
      slug: topic.slug,
      description: topic.description,
      orderIndex: topic.orderIndex,
      totalProblems,
      totalSolved,
      subTopics,
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
        // Keep the record if there are notes, just mark unsolved
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

    // Create progress entry with notes only (not solved)
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
      include: {
        problem: {
          include: {
            subTopic: {
              include: { topic: { select: { name: true, slug: true } } },
            },
          },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    // Get solved status
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
      difficulty: b.problem.difficulty,
      leetcodeUrl: b.problem.leetcodeUrl,
      gfgUrl: b.problem.gfgUrl,
      tags: b.problem.tags,
      companies: b.problem.companies,
      sheets: b.problem.sheets,
      topicName: b.problem.subTopic.topic.name,
      topicSlug: b.problem.subTopic.topic.slug,
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

  async getCompanyProblems(company: string, studentId?: number) {
    const problems = await prisma.dsaProblem.findMany({
      where: { companies: { has: company } },
      include: {
        subTopic: {
          include: { topic: { select: { name: true, slug: true } } },
        },
      },
      orderBy: { difficulty: "asc" },
    });

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

    return problems.map((p) => ({
      id: p.id,
      title: p.title,
      difficulty: p.difficulty,
      leetcodeUrl: p.leetcodeUrl,
      gfgUrl: p.gfgUrl,
      tags: p.tags,
      companies: p.companies,
      hints: p.hints,
      sheets: p.sheets,
      topicName: p.subTopic.topic.name,
      topicSlug: p.subTopic.topic.slug,
      solved: solvedIds.has(p.id),
      bookmarked: bookmarkedIds.has(p.id),
    }));
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

  async getPatternProblems(pattern: string, studentId?: number) {
    const problems = await prisma.dsaProblem.findMany({
      where: { tags: { has: pattern } },
      include: {
        subTopic: {
          include: { topic: { select: { name: true, slug: true } } },
        },
      },
      orderBy: { difficulty: "asc" },
    });

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

    return problems.map((p) => ({
      id: p.id,
      title: p.title,
      difficulty: p.difficulty,
      leetcodeUrl: p.leetcodeUrl,
      gfgUrl: p.gfgUrl,
      tags: p.tags,
      companies: p.companies,
      hints: p.hints,
      sheets: p.sheets,
      topicName: p.subTopic.topic.name,
      topicSlug: p.subTopic.topic.slug,
      solved: solvedIds.has(p.id),
      bookmarked: bookmarkedIds.has(p.id),
    }));
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
