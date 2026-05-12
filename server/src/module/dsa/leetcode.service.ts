import { prisma } from '../../database/db.js';

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
        const response = await fetch('https://leetcode.com/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query,
                variables: { username: leetcodeUsername },
            }),
        });

        const data = await response.json() as any;

        if (!data?.data?.matchedUser) {
            return [];
        }

        return data.data.matchedUser.recentAcSubmissionList || [];
    } catch (error) {
        console.error('LeetCode Fetch Error:', error);
        throw new Error('Failed to fetch data from LeetCode');
    }
};

export const syncLeetCodeSolvedProblems = async (userId: number, leetcodeUsername: string) => {
    // 1. Fetch from LeetCode
    const recentSubmissions = await fetchLeetCodeSolvedProblems(leetcodeUsername);

    if (!recentSubmissions || recentSubmissions.length === 0) {
        return { syncedCount: 0, totalFetched: 0 };
    }

    // 2. Extract unique titleSlugs
    const titleSlugs = [...new Set(recentSubmissions.map((s: any) => s.titleSlug as string))];

    // 3. Find matching problems in our database by leetcodeSlug
    const matchingProblems = await prisma.dsaProblem.findMany({
        where: {
            leetcodeSlug: { in: titleSlugs },
        },
        select: { id: true },
    });

    if (matchingProblems.length === 0) {
        return { syncedCount: 0, totalFetched: titleSlugs.length };
    }

    // 4. Upsert solved progress for each matched problem in parallel
    const upsertPromises = matchingProblems.map((problem) =>
        prisma.studentDsaProgress.upsert({
            where: {
                studentId_problemId: {
                    studentId: userId,
                    problemId: problem.id,
                },
            },
            update: {
                solved: true,
                solvedAt: new Date(),
                source: 'LEETCODE',
            },
            create: {
                studentId: userId,
                problemId: problem.id,
                solved: true,
                solvedAt: new Date(),
                source: 'LEETCODE',
            },
        })
    );

    // Execute all database updates in parallel
    await Promise.all(upsertPromises);

    return {
        syncedCount: matchingProblems.length,
        totalFetched: titleSlugs.length,
    };
};
