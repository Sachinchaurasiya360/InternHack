import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import XLSX from "xlsx";
import path from "path";
import { fileURLToPath } from "url";
import "dotenv/config";

const connectionString = process.env["DATABASE_URL"] ?? "";
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function titleCase(str: string): string {
  return str
    .trim()
    .split(/\s+/)
    .map((w) => {
      if (w === "IIT" || w === "BHU" || w === "NIT") return w;
      return w.charAt(0).toUpperCase() + w.slice(1).toLowerCase();
    })
    .join(" ");
}

async function main() {
  const xlsxPath = path.resolve(__dirname, "../../../.claude/1584 Professors IIT.xlsx");
  const workbook = XLSX.readFile(xlsxPath);
  const sheet = workbook.Sheets[workbook.SheetNames[0]!]!;
  const rows = XLSX.utils.sheet_to_json<{
    "S no": number;
    "College Name": string;
    "College Type": string;
    Department: string;
    Name: string;
    "Area of interest": string;
    "Mail Id": string;
  }>(sheet);

  const data = rows.map((r) => ({
    collegeName: titleCase(String(r["College Name"] ?? "")),
    collegeType: String(r["College Type"] ?? "").trim(),
    department: String(r["Department"] ?? "").trim(),
    name: String(r["Name"] ?? "").trim(),
    areaOfInterest: r["Area of interest"] ? String(r["Area of interest"]).trim() : null,
    email: r["Mail Id"] ? String(r["Mail Id"]).trim() : null,
  }));

  // Clear existing
  await prisma.iitProfessor.deleteMany();

  // Batch insert
  const result = await prisma.iitProfessor.createMany({ data });
  console.log(`Seeded ${result.count} IIT professors`);

  await prisma.$disconnect();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
