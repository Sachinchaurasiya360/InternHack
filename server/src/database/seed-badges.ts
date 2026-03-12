import { prisma } from "./db.js";

const DEFAULT_BADGES = [
  {
    name: "First Steps",
    slug: "first-steps",
    description: "Applied to your first job",
    category: "MILESTONE" as const,
    criteria: { type: "first_application" },
  },
  {
    name: "Career Explorer",
    slug: "career-explorer",
    description: "Completed a career roadmap",
    category: "CAREER" as const,
    criteria: { type: "career_complete" },
  },
  {
    name: "Quiz Whiz",
    slug: "quiz-whiz",
    description: "Passed your first quiz",
    category: "QUIZ" as const,
    criteria: { type: "quiz_pass", params: { count: 1 } },
  },
  {
    name: "Quiz Master",
    slug: "quiz-master",
    description: "Passed 5 quizzes",
    category: "QUIZ" as const,
    criteria: { type: "quiz_pass", params: { count: 5 } },
  },
  {
    name: "Skill Verified",
    slug: "skill-verified",
    description: "Passed your first skill test",
    category: "SKILL" as const,
    criteria: { type: "skill_test_pass", params: { count: 1 } },
  },
  {
    name: "Skill Champion",
    slug: "skill-champion",
    description: "Passed 5 skill tests",
    category: "SKILL" as const,
    criteria: { type: "skill_test_pass", params: { count: 5 } },
  },
  {
    name: "Problem Solver",
    slug: "problem-solver",
    description: "Solved 10 DSA problems",
    category: "SKILL" as const,
    criteria: { type: "dsa_solve", params: { count: 10 } },
  },
  {
    name: "DSA Warrior",
    slug: "dsa-warrior",
    description: "Solved 50 DSA problems",
    category: "SKILL" as const,
    criteria: { type: "dsa_solve", params: { count: 50 } },
  },
  {
    name: "Profile Pro",
    slug: "profile-pro",
    description: "Completed your entire profile",
    category: "MILESTONE" as const,
    criteria: { type: "profile_complete" },
  },
  {
    name: "Code Ninja",
    slug: "code-ninja",
    description: "Solved 100 DSA problems",
    category: "MILESTONE" as const,
    criteria: { type: "dsa_solve", params: { count: 100 } },
  },
];

export async function seedBadges() {
  let created = 0;
  for (const badge of DEFAULT_BADGES) {
    const existing = await prisma.badge.findUnique({ where: { slug: badge.slug } });
    if (!existing) {
      await prisma.badge.create({
        data: {
          name: badge.name,
          slug: badge.slug,
          description: badge.description,
          category: badge.category,
          criteria: badge.criteria,
          isActive: true,
        },
      });
      created++;
    }
  }
  console.log(`Seeded ${created} new badges (${DEFAULT_BADGES.length - created} already existed)`);
}

// Run directly with: npx tsx seed-badges.ts
if (process.argv[1]?.endsWith("seed-badges.ts")) {
  seedBadges()
    .then(() => process.exit(0))
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
}
