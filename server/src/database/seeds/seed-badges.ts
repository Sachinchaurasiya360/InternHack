/**
 * seed-badges.ts
 *
 * Seeds the 16 core badges into the database.
 * Safe to re-run — uses upsert by slug so existing records are not duplicated.
 *
 * Run from the server directory:
 *   npm run seed:badges
 */

import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const connectionString = process.env["DATABASE_URL"] ?? "";
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

const badges = [
  { name: "First Steps", slug: "first-steps", description: "Applied to your first job", category: "MILESTONE" as const, criteria: { type: "first_application" } },
  { name: "Job Hunter", slug: "job-hunter", description: "Applied to 5 jobs", category: "CAREER" as const, criteria: { type: "job_apply", params: { count: 5 } } },
  { name: "Persistent", slug: "persistent", description: "Applied to 10 jobs", category: "CAREER" as const, criteria: { type: "job_apply", params: { count: 10 } } },
  { name: "Committed", slug: "committed", description: "Applied to 25 jobs", category: "CAREER" as const, criteria: { type: "job_apply", params: { count: 25 } } },
  { name: "Relentless", slug: "relentless", description: "Applied to 50 jobs", category: "CAREER" as const, criteria: { type: "job_apply", params: { count: 50 } } },
  { name: "Century", slug: "century-apply", description: "Applied to 100 jobs", category: "MILESTONE" as const, criteria: { type: "job_apply", params: { count: 100 } } },
  { name: "Storyteller", slug: "storyteller", description: "Shared your first interview experience", category: "CONTRIBUTION" as const, criteria: { type: "interview_share", params: { count: 1 } } },
  { name: "Mentor", slug: "mentor", description: "Shared 5 interview experiences", category: "CONTRIBUTION" as const, criteria: { type: "interview_share", params: { count: 5 } } },
  { name: "Community Pillar", slug: "community-pillar", description: "Shared 20 interview experiences", category: "CONTRIBUTION" as const, criteria: { type: "interview_share", params: { count: 20 } } },
  { name: "Skill Verified", slug: "skill-verified", description: "Passed your first skill test", category: "SKILL" as const, criteria: { type: "skill_test_pass", params: { count: 1 } } },
  { name: "Problem Solver", slug: "problem-solver", description: "Solved 10 DSA problems", category: "SKILL" as const, criteria: { type: "dsa_solve", params: { count: 10 } } },
  { name: "DSA Warrior", slug: "dsa-warrior", description: "Solved 50 DSA problems", category: "SKILL" as const, criteria: { type: "dsa_solve", params: { count: 50 } } },
  { name: "Code Ninja", slug: "code-ninja", description: "Solved 100 DSA problems", category: "MILESTONE" as const, criteria: { type: "dsa_solve", params: { count: 100 } } },
  { name: "Profile Pro", slug: "profile-pro", description: "Completed your entire profile", category: "MILESTONE" as const, criteria: { type: "profile_complete" } },
  { name: "Quiz Master", slug: "quiz-master", description: "Answered 100 aptitude questions correctly", category: "QUIZ" as const, criteria: { type: "aptitude_correct", params: { count: 100 } } },
  { name: "Contributor", slug: "contributor", description: "Made your first approved company contribution", category: "CONTRIBUTION" as const, criteria: { type: "contribution_approved", params: { count: 1 } } },
];

async function seedBadges() {
  console.log("Seeding badges...");
  let created = 0;
  let skipped = 0;

  for (const badge of badges) {
    const existing = await prisma.badge.findUnique({ where: { slug: badge.slug } });
    if (!existing) {
      await prisma.badge.create({ data: { ...badge, isActive: true } });
      created++;
    } else {
      skipped++;
    }
  }

  console.log(`  Done: ${created} created, ${skipped} already exist`);
}

seedBadges()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
