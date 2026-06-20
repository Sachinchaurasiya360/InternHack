import { prisma } from "../../database/db.js";

export const fetchLeetCodeSolvedProblems = async (leetcodeUsername: string) => {
  const query = `
    query userPublicProfile($username: String!) {
      matchedUser(username: $username) {
        submitStats {
          acSubmissionNum {
            difficulty
            count
          }
        }
        recentAcSubmissionList(limit: 100) {
          title
          titleSlug
          timestamp
        }
      }
    }
  `;

  try {
    const response = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables: { username: leetcodeUsername },
      }),
    });

    const data = (await response.json()) as any;

    if (!data?.data?.matchedUser) {
      return [];
    }

    return data.data.matchedUser.recentAcSubmissionList || [];
  } catch (error) {
    console.error("LeetCode Fetch Error:", error);
    throw new Error("Failed to fetch data from LeetCode");
  }
};

export const syncLeetCodeSolvedProblems = async (
  userId: number,
  leetcodeUsername: string,
) => {
  // 1. Fetch from LeetCode
  const recentSubmissions = await fetchLeetCodeSolvedProblems(leetcodeUsername);

  if (!recentSubmissions || recentSubmissions.length === 0) {
    return { syncedCount: 0, totalFetched: 0 };
  }

  // 2. Extract unique titleSlugs and build a mapping of titleSlug -> earliest solve Date
  const titleSlugs: string[] = Array.from(
    new Set<string>(recentSubmissions.map((s: any) => s.titleSlug as string)),
  );

  const slugToSolveDateMap = new Map<string, Date>();
  for (const submission of recentSubmissions) {
    const slug = submission.titleSlug;
    if (!slug) continue;

    let solveDate = new Date();
    if (submission.timestamp) {
      const ts = typeof submission.timestamp === "number"
        ? submission.timestamp
        : parseInt(submission.timestamp, 10);
      if (!isNaN(ts)) {
        solveDate = new Date(ts * 1000);
      }
    }

    const existingDate = slugToSolveDateMap.get(slug);
    if (!existingDate || solveDate < existingDate) {
      slugToSolveDateMap.set(slug, solveDate);
    }
  }

  // 3. Find matching problems in our database by leetcodeSlug
  const matchingProblems = await prisma.dsaProblem.findMany({
    where: {
      leetcodeSlug: { in: titleSlugs },
    },
    select: { id: true, leetcodeSlug: true },
  });

  if (matchingProblems.length === 0) {
    return { syncedCount: 0, totalFetched: titleSlugs.length };
  }

  // 4. Find existing studentDsaProgress records for matching problems
  const existingProgress = await prisma.studentDsaProgress.findMany({
    where: {
      studentId: userId,
      problemId: { in: matchingProblems.map((p) => p.id) },
    },
    select: {
      problemId: true,
      solved: true,
      solvedAt: true,
    },
  });

  const existingProgressMap = new Map<number, { solved: boolean; solvedAt: Date }>();
  for (const progress of existingProgress) {
    existingProgressMap.set(progress.problemId, progress);
  }

  const problemsToCreate: typeof matchingProblems = [];
  const problemsToUpdate: typeof matchingProblems = [];

  for (const problem of matchingProblems) {
    const progress = existingProgressMap.get(problem.id);
    if (!progress) {
      problemsToCreate.push(problem);
    } else if (!progress.solved) {
      problemsToUpdate.push(problem);
    }
  }

  // Use bulk operations / transaction to avoid deadlocks and preserve timestamps
  if (problemsToCreate.length > 0) {
    await prisma.studentDsaProgress.createMany({
      data: problemsToCreate.map((problem) => {
        const solveDate = problem.leetcodeSlug
          ? (slugToSolveDateMap.get(problem.leetcodeSlug) || new Date())
          : new Date();
        return {
          studentId: userId,
          problemId: problem.id,
          solved: true,
          solvedAt: solveDate,
          source: "LEETCODE",
        };
      }),
      skipDuplicates: true,
    });
  }

  if (problemsToUpdate.length > 0) {
    await prisma.$transaction(
      problemsToUpdate.map((problem) => {
        const solveDate = problem.leetcodeSlug
          ? (slugToSolveDateMap.get(problem.leetcodeSlug) || new Date())
          : new Date();
        return prisma.studentDsaProgress.update({
          where: {
            studentId_problemId: {
              studentId: userId,
              problemId: problem.id,
            },
          },
          data: {
            solved: true,
            solvedAt: solveDate,
            source: "LEETCODE",
          },
        });
      }),
    );
  }

  return {
    syncedCount: matchingProblems.length,
    totalFetched: titleSlugs.length,
  };
};
