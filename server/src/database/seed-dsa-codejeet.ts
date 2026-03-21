import "dotenv/config";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_FILE = path.join(__dirname, "codejeet-data.json");

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL ?? "" });
const prisma = new PrismaClient({ adapter });

interface SimilarQuestion {
  title: string;
  slug: string;
  difficulty: string;
  url: string;
}

interface MergedProblem {
  leetcodeId: number;
  title: string;
  slug: string;
  difficulty: string;
  category: string;
  leetcodeUrl: string;
  description: string;
  examples: string;
  constraints: string;
  topics: string[];
  companies: string[];
  totalAccepted: number;
  totalSubmissions: number;
  acceptanceRate: string;
  similarQuestions: SimilarQuestion[];
  hints: string[];
  isPremium: boolean;
}

interface TopicEntry {
  name: string;
  slug: string;
  count: number;
}

interface CodejeetData {
  problems: MergedProblem[];
  topics: TopicEntry[];
}

async function main() {
  console.log("Loading codejeet data...");
  const raw = fs.readFileSync(DATA_FILE, "utf-8");
  const data: CodejeetData = JSON.parse(raw);
  console.log(`Loaded ${data.problems.length} problems, ${data.topics.length} topics`);

  // Clear existing data
  console.log("Clearing existing DSA data...");
  await prisma.$executeRawUnsafe('DELETE FROM "dsaBookmark"');
  await prisma.$executeRawUnsafe('DELETE FROM "studentDsaProgress"');
  await prisma.$executeRawUnsafe('DELETE FROM "dsaProblem"');
  await prisma.$executeRawUnsafe('DELETE FROM "dsaTopic"');
  console.log("Cleared.");

  // Seed topics
  console.log("Seeding topics...");
  const topicData = data.topics.map((t, i) => ({
    name: t.name,
    slug: t.slug,
    description: `${t.count} problems`,
    orderIndex: i + 1,
  }));

  await prisma.dsaTopic.createMany({ data: topicData });
  console.log(`Created ${topicData.length} topics`);

  // Seed problems in batches (Prisma createMany has limits)
  console.log("Seeding problems...");
  const BATCH_SIZE = 500;
  let created = 0;

  for (let i = 0; i < data.problems.length; i += BATCH_SIZE) {
    const batch = data.problems.slice(i, i + BATCH_SIZE);
    const records = batch.map((p) => ({
      title: p.title,
      slug: p.slug,
      difficulty: p.difficulty,
      leetcodeId: p.leetcodeId,
      leetcodeUrl: p.leetcodeUrl,
      tags: p.topics.map((t) => t.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")),
      companies: p.companies,
      hints: p.hints,
      description: p.description || null,
      examples: p.examples || null,
      constraints: p.constraints || null,
      acceptanceRate: p.acceptanceRate || null,
      totalAccepted: p.totalAccepted || null,
      totalSubmissions: p.totalSubmissions || null,
      similarQuestions: p.similarQuestions,
      category: p.category || null,
      isPremium: p.isPremium,
      sheets: [],
    }));

    await prisma.dsaProblem.createMany({ data: records });
    created += batch.length;
    console.log(`  ${created} / ${data.problems.length}`);
  }

  console.log(`\nDone! Seeded ${created} problems and ${topicData.length} topics.`);
  await prisma.$disconnect();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
