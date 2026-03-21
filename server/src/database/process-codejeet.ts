import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const COMPANIES_DIR = path.join(__dirname, "companies");
const PROBLEMS_DIR = path.join(__dirname, "problems");
const OUTPUT_FILE = path.join(__dirname, "codejeet-data.json");

interface CsvRow {
  id: string;
  url: string;
  title: string;
  difficulty: string;
  acceptance: string;
  frequency: string;
}

interface ProblemJson {
  id: string;
  title: string;
  slug: string;
  difficulty: string;
  category: string;
  content_markdown: string;
  question: string;
  examples: string;
  constraints: string;
  topics: string[];
  total_accepted: number;
  total_submissions: number;
  acceptance_rate: string;
  similar_questions: { title: string; slug: string; difficulty: string; url: string }[];
  hints: string[];
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
  similarQuestions: { title: string; slug: string; difficulty: string; url: string }[];
  hints: string[];
  isPremium: boolean;
}

function parseCsv(content: string): CsvRow[] {
  const lines = content.trim().split("\n");
  if (lines.length < 2) return [];
  // Skip header
  return lines.slice(1).map((line) => {
    // Handle CSV with possible commas in titles (though these CSVs seem simple)
    const parts = line.split(",");
    // ID,URL,Title,Difficulty,Acceptance %,Frequency %
    // URL always starts with https:// so we can find it
    const id = parts[0];
    const url = parts[1];
    // Title might contain commas, so find difficulty which is Easy/Medium/Hard
    // Work backwards: last two are frequency and acceptance
    const frequency = parts[parts.length - 1];
    const acceptance = parts[parts.length - 2];
    const difficulty = parts[parts.length - 3];
    // Title is everything between URL and difficulty
    const title = parts.slice(2, parts.length - 3).join(",");
    return { id, url, title, difficulty, acceptance, frequency };
  });
}

function extractSlugFromUrl(url: string): string {
  // https://leetcode.com/problems/two-sum -> two-sum
  const match = url.match(/\/problems\/([^/]+)/);
  return match ? match[1] : "";
}

function getCompanyNameFromFile(filename: string): string {
  // adobe.csv -> adobe
  return path.basename(filename, ".csv");
}

async function main() {
  console.log("Processing codejeet data...");

  // Step 1: Read all company CSVs and build slug -> companies mapping
  const companyFiles = fs.readdirSync(COMPANIES_DIR).filter((f) => f.endsWith(".csv"));
  console.log(`Found ${companyFiles.length} company CSV files`);

  const slugToCompanies = new Map<string, Set<string>>();

  for (const file of companyFiles) {
    const company = getCompanyNameFromFile(file);
    const content = fs.readFileSync(path.join(COMPANIES_DIR, file), "utf-8");
    const rows = parseCsv(content);

    for (const row of rows) {
      const slug = extractSlugFromUrl(row.url);
      if (!slug) continue;
      if (!slugToCompanies.has(slug)) {
        slugToCompanies.set(slug, new Set());
      }
      slugToCompanies.get(slug)!.add(company);
    }
  }

  console.log(`Mapped ${slugToCompanies.size} unique problem slugs to companies`);

  // Step 2: Read all problem JSONs
  const problemFiles = fs.readdirSync(PROBLEMS_DIR).filter((f) => f.endsWith(".json"));
  console.log(`Found ${problemFiles.length} problem JSON files`);

  const problems: MergedProblem[] = [];
  let skipped = 0;

  for (const file of problemFiles) {
    try {
      const content = fs.readFileSync(path.join(PROBLEMS_DIR, file), "utf-8");
      const p: ProblemJson = JSON.parse(content);

      const leetcodeId = parseInt(p.id, 10);
      if (isNaN(leetcodeId)) {
        skipped++;
        continue;
      }

      const companies = Array.from(slugToCompanies.get(p.slug) || []).sort();
      const isPremium = !p.content_markdown || p.content_markdown.trim() === "";

      problems.push({
        leetcodeId,
        title: p.title,
        slug: p.slug,
        difficulty: p.difficulty,
        category: p.category || "Algorithms",
        leetcodeUrl: `https://leetcode.com/problems/${p.slug}/`,
        description: p.content_markdown || "",
        examples: p.examples || "",
        constraints: p.constraints || "",
        topics: p.topics || [],
        companies,
        totalAccepted: p.total_accepted || 0,
        totalSubmissions: p.total_submissions || 0,
        acceptanceRate: p.acceptance_rate || "",
        similarQuestions: p.similar_questions || [],
        hints: p.hints || [],
        isPremium,
      });
    } catch {
      skipped++;
    }
  }

  // Sort by leetcode ID
  problems.sort((a, b) => a.leetcodeId - b.leetcodeId);

  // Collect unique topics for dsaTopic generation
  const topicCounts = new Map<string, number>();
  for (const p of problems) {
    for (const t of p.topics) {
      topicCounts.set(t, (topicCounts.get(t) || 0) + 1);
    }
  }

  const topics = Array.from(topicCounts.entries())
    .map(([name, count]) => ({
      name,
      slug: name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
      count,
    }))
    .sort((a, b) => b.count - a.count);

  // Stats
  const withCompanies = problems.filter((p) => p.companies.length > 0).length;
  const premium = problems.filter((p) => p.isPremium).length;
  const diffCounts = { Easy: 0, Medium: 0, Hard: 0 };
  for (const p of problems) {
    if (p.difficulty in diffCounts) diffCounts[p.difficulty as keyof typeof diffCounts]++;
  }

  console.log("\n--- Stats ---");
  console.log(`Total problems: ${problems.length}`);
  console.log(`Skipped: ${skipped}`);
  console.log(`With companies: ${withCompanies}`);
  console.log(`Premium (no description): ${premium}`);
  console.log(`Easy: ${diffCounts.Easy}, Medium: ${diffCounts.Medium}, Hard: ${diffCounts.Hard}`);
  console.log(`Unique topics: ${topics.length}`);
  console.log(`Top 10 topics: ${topics.slice(0, 10).map((t) => `${t.name}(${t.count})`).join(", ")}`);

  // Write output
  const output = { problems, topics };
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(output, null, 2));
  console.log(`\nWritten to ${OUTPUT_FILE} (${(fs.statSync(OUTPUT_FILE).size / 1024 / 1024).toFixed(1)} MB)`);
}

main().catch(console.error);
