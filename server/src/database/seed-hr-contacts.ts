import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { PDFParse } from "pdf-parse";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import "dotenv/config";

const connectionString = process.env["DATABASE_URL"] ?? "";
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ── Types ──

interface HrRow {
  name: string;
  designation: string | null;
  linkedinUrl: string | null;
  companyName: string | null;
  companyWebsite: string | null;
  companyLinkedin: string | null;
  companyFacebook: string | null;
  companyTwitter: string | null;
  location: string | null;
  niche: string | null;
}

// ── URL classifiers ──

function isLinkedinProfile(url: string) {
  return /linkedin\.com\/in\//i.test(url);
}
function isLinkedinCompany(url: string) {
  return /linkedin\.com\/company\//i.test(url);
}
function isFacebook(url: string) {
  return /facebook\.com/i.test(url);
}
function isTwitter(url: string) {
  return /twitter\.com/i.test(url);
}
function isUrl(s: string) {
  return /^https?:\/\//i.test(s);
}

// ── Slugify ──

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .substring(0, 80);
}

// ── Parser ──

function parseLine(line: string): HrRow | null {
  const trimmed = line.trim();

  // Remove leading row number
  const withoutNum = trimmed.replace(/^\d+\s+/, "");
  if (!withoutNum) return null;

  // Split by tab
  const parts = withoutNum.split("\t").map((s) => s.trim()).filter(Boolean);
  if (parts.length < 2) return null;

  const name = parts[0] ?? "";
  if (!name || name === "Name") return null; // skip header

  let designation: string | null = null;
  let linkedinUrl: string | null = null;
  let companyName: string | null = null;
  let companyWebsite: string | null = null;
  let companyLinkedin: string | null = null;
  let companyFacebook: string | null = null;
  let companyTwitter: string | null = null;
  let location: string | null = null;
  let niche: string | null = null;

  // Flatten all parts into tokens by splitting on http boundaries
  // (URLs often run into adjacent text without tabs)
  const tokens: string[] = [];
  for (const part of parts.slice(1)) {
    // Split on URL boundaries: keep text before URL and URLs separate
    const urlSplit = part.split(/(https?:\/\/[^\s\t]*)/i);
    for (const chunk of urlSplit) {
      const c = chunk.trim();
      if (c) tokens.push(c);
    }
  }

  // Pass 1: Extract all URLs and person LinkedIn
  const urls: string[] = [];
  const textTokens: string[] = [];
  for (const token of tokens) {
    if (isUrl(token)) {
      urls.push(token);
      if (!linkedinUrl && isLinkedinProfile(token)) {
        linkedinUrl = token;
      } else if (!companyLinkedin && isLinkedinCompany(token)) {
        companyLinkedin = token;
      } else if (!companyFacebook && isFacebook(token)) {
        companyFacebook = token;
      } else if (!companyTwitter && isTwitter(token)) {
        companyTwitter = token;
      } else if (!companyWebsite && !isLinkedinProfile(token) && !isLinkedinCompany(token) && !isFacebook(token) && !isTwitter(token)) {
        companyWebsite = token;
      }
    } else {
      textTokens.push(token);
    }
  }

  // Pass 2: Classify text tokens
  // Order from PDF: Job Title, [Company Name], [Status], [Applied], [Location], [Niche]
  // First text token = designation
  // Location = matches "City, India" or "India" pattern
  // Niche = last text token (not location, not designation)
  // Company name = the text token between designation and location/niche

  if (textTokens.length >= 1) {
    designation = textTokens[0]!;
  }

  // Find location token (contains "India" or common location patterns)
  let locationIdx = -1;
  for (let i = textTokens.length - 1; i >= 1; i--) {
    const t = textTokens[i]!;
    if (/india/i.test(t) && (t.includes(",") || t.trim().length < 40)) {
      location = t;
      locationIdx = i;
      break;
    }
  }

  // Niche is the last text token after location, or last token if no location
  if (locationIdx >= 0 && locationIdx < textTokens.length - 1) {
    niche = textTokens[textTokens.length - 1]!;
  } else if (locationIdx < 0 && textTokens.length >= 4) {
    // Sometimes location is missing; niche is still last
    const last = textTokens[textTokens.length - 1]!;
    if (!last.includes(",") && last.length > 5) {
      niche = last;
    }
  }

  // Company name: first text token after designation that isn't location/niche/status-like
  const skipTokens = new Set(["Status", "Applied done", "Applied", "Done", ""]);
  for (let i = 1; i < textTokens.length; i++) {
    const t = textTokens[i]!;
    if (t === location || t === niche) continue;
    if (skipTokens.has(t)) continue;
    // skip "India" standalone
    if (/^india$/i.test(t.trim())) continue;
    companyName = t;
    break;
  }

  if (!name) return null;

  return {
    name,
    designation,
    linkedinUrl,
    companyName,
    companyWebsite,
    companyLinkedin,
    companyFacebook,
    companyTwitter,
    location,
    niche,
  };
}

// ── Main ──

async function main() {
  const pdfPath = path.resolve(__dirname, "../../../.claude/1800+ IT-HR  @AL.pdf");
  if (!fs.existsSync(pdfPath)) {
    console.error("PDF not found at:", pdfPath);
    process.exit(1);
  }

  const buf = fs.readFileSync(pdfPath);
  const uint8 = new Uint8Array(buf);
  const parser = new PDFParse(uint8);
  const result = await parser.getText();
  const allText = (result as { pages: { text: string }[] }).pages.map((p) => p.text).join("\n");

  const lines = allText.split("\n").filter((l) => l.trim());
  console.log(`[Seed] Found ${lines.length} non-empty lines in PDF`);

  // Parse all rows
  const rows: HrRow[] = [];
  let skipped = 0;
  for (const line of lines) {
    const row = parseLine(line);
    if (row) {
      rows.push(row);
    } else {
      skipped++;
    }
  }
  console.log(`[Seed] Parsed ${rows.length} HR contacts, skipped ${skipped} lines`);

  // ── Pass 1: Seed itHrContact (email campaign module depends on this) ──
  const hrData = rows.map((r) => ({
    name: r.name,
    email: null as string | null,
    company: r.companyName,
    designation: r.designation,
    phone: null as string | null,
    linkedinUrl: r.linkedinUrl,
    source: "PDF",
  }));

  await prisma.itHrContact.deleteMany();
  const hrResult = await prisma.itHrContact.createMany({ data: hrData });
  console.log(`[Seed] Seeded ${hrResult.count} IT HR contacts`);

  // ── Pass 2: Build unique companies ──
  const companyMap = new Map<string, {
    name: string;
    website: string | null;
    linkedin: string | null;
    facebook: string | null;
    twitter: string | null;
    city: string;
    state: string;
    niche: string;
    contacts: { name: string; designation: string | null; linkedinUrl: string | null }[];
  }>();

  for (const row of rows) {
    if (!row.companyName) continue;
    const key = row.companyName.toLowerCase().trim();
    if (!companyMap.has(key)) {
      // Extract city from location (e.g. "Bengaluru, India" → "Bengaluru")
      let city = "India";
      if (row.location) {
        const parts = row.location.split(",").map((s) => s.trim());
        if (parts[0] && parts[0] !== "India") city = parts[0];
      }

      companyMap.set(key, {
        name: row.companyName,
        website: row.companyWebsite,
        linkedin: row.companyLinkedin,
        facebook: row.companyFacebook,
        twitter: row.companyTwitter,
        city,
        state: "India",
        niche: row.niche || "Information Technology & Services",
        contacts: [],
      });
    }

    // Fill in missing company details from subsequent rows
    const entry = companyMap.get(key)!;
    if (!entry.website && row.companyWebsite) entry.website = row.companyWebsite;
    if (!entry.linkedin && row.companyLinkedin) entry.linkedin = row.companyLinkedin;
    if (!entry.facebook && row.companyFacebook) entry.facebook = row.companyFacebook;
    if (!entry.twitter && row.companyTwitter) entry.twitter = row.companyTwitter;
    if (entry.city === "India" && row.location) {
      const parts = row.location.split(",").map((s) => s.trim());
      if (parts[0] && parts[0] !== "India") entry.city = parts[0];
    }

    entry.contacts.push({
      name: row.name,
      designation: row.designation,
      linkedinUrl: row.linkedinUrl,
    });
  }

  console.log(`[Seed] Found ${companyMap.size} unique companies`);

  // Get or create admin user (same pattern as seed-pune-companies.ts)
  let admin = await prisma.user.findFirst({ where: { role: "ADMIN" } });
  if (!admin) {
    admin = await prisma.user.upsert({
      where: { email: "admin@internhack.com" },
      update: {},
      create: {
        name: "Admin User",
        email: "admin@internhack.com",
        password: "$2a$10$EqHuL3qAJkLk6qvXkZzGxeJ5N5k7f7/Z2k3a5w1Q9Hj7KjzXMRWHi",
        role: "ADMIN",
      },
    });
  }

  // ── Pass 3: Fetch existing company slugs in one query ──
  const allEntries = Array.from(companyMap.values());
  const allSlugs = allEntries.map((e) => slugify(e.name)).filter(Boolean);
  const existingCompanies = await prisma.company.findMany({
    where: { slug: { in: allSlugs } },
    select: { id: true, slug: true },
  });
  const existingSlugMap = new Map(existingCompanies.map((c) => [c.slug, c.id]));

  // Build arrays for batch creation
  const companiesToCreate: {
    name: string;
    slug: string;
    description: string;
    industry: string;
    size: "STARTUP";
    city: string;
    state: string;
    website: string | null;
    socialLinks: Record<string, string>;
    isApproved: boolean;
    createdById: number;
  }[] = [];

  const slugToEntry = new Map<string, typeof allEntries[0]>();

  for (const entry of allEntries) {
    const slug = slugify(entry.name);
    if (!slug) continue;
    slugToEntry.set(slug, entry);

    if (!existingSlugMap.has(slug)) {
      const socialLinks: Record<string, string> = {};
      if (entry.linkedin) socialLinks.linkedin = entry.linkedin;
      if (entry.facebook) socialLinks.facebook = entry.facebook;
      if (entry.twitter) socialLinks.twitter = entry.twitter;

      companiesToCreate.push({
        name: entry.name,
        slug,
        description: `${entry.name} is a company in the ${entry.niche} sector.`,
        industry: entry.niche,
        size: "STARTUP",
        city: entry.city,
        state: entry.state,
        website: entry.website,
        socialLinks,
        isApproved: true,
        createdById: admin.id,
      });
    }
  }

  // Batch create companies
  if (companiesToCreate.length > 0) {
    await prisma.company.createMany({ data: companiesToCreate, skipDuplicates: true });
  }
  console.log(`[Seed] Companies — created: ${companiesToCreate.length}, already existed: ${existingSlugMap.size}`);

  // Fetch all company IDs (existing + newly created)
  const allCompanies = await prisma.company.findMany({
    where: { slug: { in: allSlugs } },
    select: { id: true, slug: true },
  });
  const slugToId = new Map(allCompanies.map((c) => [c.slug, c.id]));

  // ── Pass 4: Batch create contacts ──
  // Get existing contacts in one query
  const companyIds = Array.from(slugToId.values());
  const existingContacts = await prisma.companyContact.findMany({
    where: { companyId: { in: companyIds } },
    select: { companyId: true, name: true },
  });
  const existingContactKeys = new Set(existingContacts.map((c) => `${c.companyId}::${c.name}`));

  const contactsToCreate: {
    companyId: number;
    name: string;
    designation: string;
    linkedinUrl: string | null;
    isPublic: boolean;
  }[] = [];

  for (const [slug, entry] of slugToEntry) {
    const companyId = slugToId.get(slug);
    if (!companyId) continue;

    for (const contact of entry.contacts) {
      const key = `${companyId}::${contact.name}`;
      if (existingContactKeys.has(key)) continue;
      existingContactKeys.add(key); // prevent duplicates within same batch

      contactsToCreate.push({
        companyId,
        name: contact.name,
        designation: contact.designation || "HR",
        linkedinUrl: contact.linkedinUrl,
        isPublic: true,
      });
    }
  }

  if (contactsToCreate.length > 0) {
    await prisma.companyContact.createMany({ data: contactsToCreate, skipDuplicates: true });
  }
  console.log(`[Seed] Company contacts created: ${contactsToCreate.length}`);

  await prisma.$disconnect();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
