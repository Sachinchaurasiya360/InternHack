import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";

const connectionString = process.env["DATABASE_URL"] ?? "";
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

const API_URL = "https://api.gsocorganizations.dev/organizations.json";

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

interface RawOrg {
  name: string;
  url: string;
  image_url: string;
  image_background_color: string;
  description: string;
  category: string;
  topics: string[];
  technologies: string[];
  years: Record<string, { projects_url: string; num_projects: number; projects: unknown[] }>;
  contact_email: string;
  mailing_list: string;
  ideas_url: string;
  guide_url: string;
}

async function main() {
  console.log("Fetching GSoC organizations from API...");
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error(`API returned ${response.status}`);

  const data: RawOrg[] = await response.json();
  console.log(`Fetched ${data.length} organizations`);

  let created = 0;
  let updated = 0;

  for (const org of data) {
    const slug = slugify(org.name);
    const yearsParticipated = Object.keys(org.years).map(Number).sort();
    const totalProjects = Object.values(org.years).reduce((sum, y) => sum + (y.num_projects || 0), 0);

    await prisma.gsocOrganization.upsert({
      where: { slug },
      create: {
        name: org.name,
        slug,
        url: org.url,
        imageUrl: org.image_url || null,
        imageBgColor: org.image_background_color || null,
        description: org.description,
        category: org.category,
        topics: org.topics || [],
        technologies: org.technologies || [],
        yearsParticipated,
        totalProjects,
        projectsData: org.years as unknown as Record<string, unknown>,
        contactEmail: org.contact_email || null,
        mailingList: org.mailing_list || null,
        ideasUrl: org.ideas_url || null,
        guideUrl: org.guide_url || null,
      },
      update: {
        name: org.name,
        url: org.url,
        imageUrl: org.image_url || null,
        imageBgColor: org.image_background_color || null,
        description: org.description,
        category: org.category,
        topics: org.topics || [],
        technologies: org.technologies || [],
        yearsParticipated,
        totalProjects,
        projectsData: org.years as unknown as Record<string, unknown>,
        contactEmail: org.contact_email || null,
        mailingList: org.mailing_list || null,
        ideasUrl: org.ideas_url || null,
        guideUrl: org.guide_url || null,
      },
    });

    // Check if it was a create or update based on existing record
    created++;
  }

  console.log(`Done! Processed ${created} organizations.`);
  await prisma.$disconnect();
}

main().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
