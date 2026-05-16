import { GoogleGenerativeAI } from "@google/generative-ai";
import { prisma } from "../../database/db.js";
import { executeCode, LANGUAGE_IDS } from "../../utils/judge0.utils.js";

interface TestCaseResult {
  input: string;
  expected: string;
  actual: string;
  passed: boolean;
  label: string | null;
  timeMs: number;
  memoryKb: number;
  statusId: number;
  statusDescription: string;
  stderr: string | null;
  compileOutput: string | null;
}

// In-memory cache for aggregation queries that scan all problems (companies/patterns).
// These change rarely (only when admin seeds new problems), so a 10-min TTL is safe.
const AGG_CACHE_TTL = 10 * 60 * 1000;
let companiesCache: { data: { name: string; count: number }[]; expiresAt: number } | null = null;
let patternsCache: { data: { name: string; count: number }[]; expiresAt: number } | null = null;

export class DsaService {
  async listTopics(studentId?: number, sheet?: string, difficulty?: string[], search?: string) {
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
      for (const pid of problemIdsByTopic.get(t.slug) || []) returnedProblemIds.add(pid);
    }

    return {
      uniqueProblems: returnedProblemIds.size,
      topics: filteredTopics
        .map((t) => ({
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
    if (companiesCache && companiesCache.expiresAt > Date.now()) {
      return companiesCache.data;
    }

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

    const result = Array.from(countMap.entries())
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count);

    companiesCache = { data: result, expiresAt: Date.now() + AGG_CACHE_TTL };
    return result;
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

  // ── Test case generation (cached permanently) ──

  async getOrGenerateTestCases(problemId: number) {
    const existing = await prisma.dsaTestCase.findMany({
      where: { problemId },
      orderBy: { orderIndex: "asc" },
    });
    if (existing.length > 0) return existing;

    const problem = await prisma.dsaProblem.findUnique({ where: { id: problemId } });
    if (!problem) throw new Error("Problem not found");
    if (!problem.description) throw new Error("Cannot generate test cases, problem has no description");

    const testCases = await this.generateTestCasesWithAI(problem);

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

  private async generateTestCasesWithAI(problem: {
    title: string;
    description: string | null;
    examples: string | null;
    constraints: string | null;
    difficulty: string;
  }): Promise<{ input: string; expected: string; label: string }[]> {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY ?? "");
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });

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

Return ONLY a JSON array, no markdown fences:
[{"input":"...","expected":"...","label":"Basic case 1"},...]`;

    const result = await model.generateContent(prompt);
    const text = result.response.text().trim();

    let cleaned = text;
    if (cleaned.startsWith("```")) {
      cleaned = cleaned.replace(/^```(?:json)?\n?/, "").replace(/\n?```$/, "");
    }

    try {
      const parsed = JSON.parse(cleaned);
      if (!Array.isArray(parsed) || parsed.length === 0) {
        throw new Error("AI returned empty or non-array result");
      }
      return parsed.map((tc: Record<string, unknown>) => ({
        input: String(tc.input ?? ""),
        expected: String(tc.expected ?? ""),
        label: String(tc.label ?? "Test case"),
      }));
    } catch {
      const arrMatch = cleaned.match(/\[[\s\S]*\]/);
      if (arrMatch) {
        const parsed = JSON.parse(arrMatch[0]);
        return parsed.map((tc: Record<string, unknown>) => ({
          input: String(tc.input ?? ""),
          expected: String(tc.expected ?? ""),
          label: String(tc.label ?? "Test case"),
        }));
      }
      throw new Error("Failed to parse AI-generated test cases");
    }
  }

  // ── Code execution ──

  async executeCodeAgainstTestCases(
    studentId: number,
    problemId: number,
    language: string,
    code: string,
  ) {
    const languageId = LANGUAGE_IDS[language];
    if (!languageId) throw new Error(`Unsupported language: ${language}`);

    const testCases = await this.getOrGenerateTestCases(problemId);
    if (testCases.length === 0) throw new Error("No test cases available");

    const results: TestCaseResult[] = [];
    let maxTime = 0;
    let maxMemory = 0;

    for (const tc of testCases) {
      try {
        const result = await executeCode(code, languageId, tc.input);

        const actualOutput = (result.stdout ?? "").trim();
        const expectedOutput = tc.expected.trim();
        const passed = actualOutput === expectedOutput;

        const timeMs = result.time ? Math.round(parseFloat(result.time) * 1000) : 0;
        const memoryKb = result.memory ?? 0;
        if (timeMs > maxTime) maxTime = timeMs;
        if (memoryKb > maxMemory) maxMemory = memoryKb;

        results.push({
          input: tc.input,
          expected: expectedOutput,
          actual: actualOutput,
          passed,
          label: tc.label,
          timeMs,
          memoryKb,
          statusId: result.status.id,
          statusDescription: result.status.description,
          stderr: result.stderr,
          compileOutput: result.compile_output,
        });

        // On compile/runtime error, stop early
        if (result.status.id !== 3 && result.status.id !== 4) {
          for (let i = results.length; i < testCases.length; i++) {
            const skipped = testCases[i]!;
            results.push({
              input: skipped.input,
              expected: skipped.expected.trim(),
              actual: "",
              passed: false,
              label: skipped.label,
              timeMs: 0,
              memoryKb: 0,
              statusId: -1,
              statusDescription: "Not executed",
              stderr: null,
              compileOutput: null,
            });
          }
          break;
        }
      } catch (err: unknown) {
        results.push({
          input: tc.input,
          expected: tc.expected.trim(),
          actual: "",
          passed: false,
          label: tc.label,
          timeMs: 0,
          memoryKb: 0,
          statusId: -1,
          statusDescription: err instanceof Error ? err.message : "Execution failed",
          stderr: null,
          compileOutput: null,
        });
      }
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
        memoryKb: maxMemory,
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

    // Log usage for rate limiting
    await prisma.usageLog.create({
      data: { userId: studentId, action: "CODE_RUN" },
    });

    return { passed: passedCount, total: testCases.length, allPassed, results, submissionId: submission.id };
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
}
