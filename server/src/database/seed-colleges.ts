/**
 * Seed colleges from anburocky3/indian-colleges-data (AICTE dataset).
 * Fetches state-wise JSON files from GitHub, normalizes data, and inserts into the college table.
 *
 * Usage: npx tsx seed-colleges.ts
 *        npx tsx seed-colleges.ts --state "maharashtra"
 *        npx tsx seed-colleges.ts --limit 5000
 */

import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";

const connectionString = process.env["DATABASE_URL"] ?? "";
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

const GITHUB_API =
  "https://api.github.com/repos/anburocky3/indian-colleges-data/contents/data/states";

interface AICTECollege {
  aicte_id: string;
  institute_name: string;
  address?: string;
  district: string;
  institution_type?: string;
  programmes?: Array<{
    programme?: string;
    level?: string;
    course?: string;
    availability?: string;
    intake?: string;
  }>;
}

interface GitHubFile {
  name: string;
  download_url: string;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .substring(0, 200);
}

function stateFromFilename(filename: string): string {
  return filename
    .replace(".json", "")
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function mapCollegeType(raw?: string): "GOVERNMENT" | "PRIVATE" | "DEEMED" | "AUTONOMOUS" | "CENTRAL" | "STATE" {
  if (!raw) return "PRIVATE";
  const lower = raw.toLowerCase();
  if (lower.includes("central")) return "CENTRAL";
  if (lower.includes("government") || lower.includes("govt")) return "GOVERNMENT";
  if (lower.includes("deemed")) return "DEEMED";
  if (lower.includes("autonomous")) return "AUTONOMOUS";
  if (lower.includes("state")) return "STATE";
  return "PRIVATE";
}

function inferStreams(name: string, programmes?: AICTECollege["programmes"]): string[] {
  const streams = new Set<string>();
  const lower = name.toLowerCase();

  // Infer from programme data if available
  if (programmes?.length) {
    for (const p of programmes) {
      const prog = (p.programme ?? "").toLowerCase();
      if (prog.includes("engineering") || prog.includes("technology")) streams.add("Engineering");
      if (prog.includes("management") || prog.includes("mba")) streams.add("Management");
      if (prog.includes("pharmacy")) streams.add("Medical");
      if (prog.includes("architecture")) streams.add("Architecture");
      if (prog.includes("applied arts")) streams.add("Design");
      if (prog.includes("hotel") || prog.includes("catering")) streams.add("Hospitality");
    }
  }

  // Fallback: infer from name
  if (lower.includes("engineering") || lower.includes("technology") || lower.includes("polytechnic") || lower.includes("iit") || lower.includes("nit") || lower.includes("iiit")) {
    streams.add("Engineering");
  }
  if (lower.includes("medical") || lower.includes("mbbs") || lower.includes("dental") || lower.includes("pharmacy")) {
    streams.add("Medical");
  }
  if (lower.includes("management") || lower.includes("business") || lower.includes("mba") || lower.includes("iim")) {
    streams.add("Management");
  }
  if (lower.includes("law") || lower.includes("nlu") || lower.includes("juridical")) streams.add("Law");
  if (lower.includes("design") || lower.includes("nid") || lower.includes("nift") || lower.includes("fashion")) streams.add("Design");
  if (lower.includes("architecture")) streams.add("Architecture");
  if (lower.includes("arts") || lower.includes("humanities")) streams.add("Arts");
  if (lower.includes("science")) streams.add("Science");
  if (lower.includes("commerce")) streams.add("Commerce");
  if (lower.includes("education") || lower.includes("teacher")) streams.add("Education");
  if (lower.includes("agriculture") || lower.includes("agri")) streams.add("Agriculture");

  if (streams.size === 0) streams.add("Engineering");
  return [...streams];
}

function inferExams(streams: string[], type: string): string[] {
  const exams: string[] = [];
  if (streams.includes("Engineering")) {
    exams.push("JEE Main");
    if (type === "CENTRAL") exams.push("JEE Advanced");
    exams.push("GATE");
  }
  if (streams.includes("Medical")) exams.push("NEET UG");
  if (streams.includes("Management")) exams.push("CAT", "MAT");
  if (streams.includes("Law")) exams.push("CLAT");
  if (streams.includes("Design")) exams.push("UCEED");
  if (streams.includes("Architecture")) exams.push("NATA", "JEE Main");
  return [...new Set(exams)];
}

async function seedColleges() {
  const args = process.argv.slice(2);
  let filterState: string | null = null;
  let maxLimit = Infinity;

  for (let i = 0; i < args.length; i++) {
    if (args[i] === "--state" && args[i + 1]) filterState = args[i + 1]!.toLowerCase();
    if (args[i] === "--limit" && args[i + 1]) maxLimit = parseInt(args[i + 1]!, 10);
  }

  console.log("Fetching state file list from GitHub...\n");
  const listResp = await fetch(GITHUB_API, {
    headers: { "User-Agent": "InternHack-Seeder" },
  });
  if (!listResp.ok) throw new Error(`Failed to list state files: ${listResp.status} ${listResp.statusText}`);

  const stateFiles: GitHubFile[] = (await listResp.json()) as GitHubFile[];
  let filesToProcess = stateFiles.filter((f) => f.name.endsWith(".json"));

  if (filterState) {
    const slug = filterState.replace(/\s+/g, "-").toLowerCase();
    filesToProcess = filesToProcess.filter((f) => f.name.includes(slug));
    if (filesToProcess.length === 0) {
      console.log(`No state file found matching "${filterState}". Available states:`);
      stateFiles.forEach((f) => console.log(`  - ${stateFromFilename(f.name)}`));
      return;
    }
  }

  console.log(`Found ${filesToProcess.length} state files to process.\n`);

  let created = 0;
  let skipped = 0;
  let errors = 0;
  let totalProcessed = 0;

  for (const file of filesToProcess) {
    if (totalProcessed >= maxLimit) break;

    const stateName = stateFromFilename(file.name);
    console.log(`Processing: ${stateName}...`);

    const resp = await fetch(file.download_url, {
      headers: { "User-Agent": "InternHack-Seeder" },
    });
    if (!resp.ok) {
      console.log(`  Skipped (fetch error: ${resp.status})`);
      continue;
    }

    const colleges: AICTECollege[] = (await resp.json()) as AICTECollege[];

    for (const c of colleges) {
      if (totalProcessed >= maxLimit) break;
      totalProcessed++;

      const name = c.institute_name?.trim();
      if (!name) { skipped++; continue; }

      const slug = slugify(name);
      if (!slug) { skipped++; continue; }

      // Dedup check
      const existing = await prisma.college.findFirst({
        where: {
          OR: [
            { slug },
            { AND: [{ source: "AICTE" }, { sourceId: c.aicte_id }] },
          ],
        },
      });
      if (existing) { skipped++; continue; }

      const type = mapCollegeType(c.institution_type);
      const streams = inferStreams(name, c.programmes);
      const acceptedExams = inferExams(streams, type);

      try {
        await prisma.college.create({
          data: {
            name,
            slug,
            description: `${name} is an AICTE-approved institution located in ${c.district}, ${stateName}.`,
            type,
            state: stateName,
            city: c.district?.trim() || "Unknown",
            address: c.address?.trim() || null,
            streams,
            acceptedExams,
            isApproved: true,
            source: "AICTE",
            sourceId: c.aicte_id,
          },
        });
        created++;
      } catch {
        errors++;
      }
    }

    console.log(`  ${stateName}: done (running total — created: ${created}, skipped: ${skipped}, errors: ${errors})`);
  }

  console.log(`\nDone! Created: ${created}, Skipped: ${skipped}, Errors: ${errors}`);
  console.log(`Total processed: ${totalProcessed}`);
}

seedColleges()
  .catch((e) => {
    console.error("Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
