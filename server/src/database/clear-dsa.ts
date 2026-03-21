import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL ?? "" });
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("Clearing DSA data...");

  const del1 = await prisma.$executeRawUnsafe('DELETE FROM "dsaBookmark"');
  console.log("Deleted bookmarks:", del1);

  const del2 = await prisma.$executeRawUnsafe('DELETE FROM "studentDsaProgress"');
  console.log("Deleted progress:", del2);

  const del3 = await prisma.$executeRawUnsafe('DELETE FROM "dsaProblem"');
  console.log("Deleted problems:", del3);

  const del4 = await prisma.$executeRawUnsafe('DELETE FROM "dsaSubTopic"');
  console.log("Deleted subtopics:", del4);

  const del5 = await prisma.$executeRawUnsafe('DELETE FROM "dsaTopic"');
  console.log("Deleted topics:", del5);

  console.log("Done!");
  await prisma.$disconnect();
}

main().catch(console.error);
