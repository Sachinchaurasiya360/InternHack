import { createUniqueProfileSlug } from "../../lib/slug.js";
import { prisma } from "../db.js";

async function main() {
  const users = await prisma.user.findMany({
    where: { profileSlug: null },
    select: { id: true, name: true }
  });

  console.log(`Found ${users.length} users to backfill.`);

  let processed = 0;
  for (let i = 0; i < users.length; i += 50) {
    const batch = users.slice(i, i + 50);
    const updates = await Promise.all(
      batch.map(async (u) => {
        const slug = await createUniqueProfileSlug(u.name, u.id, prisma);
        return prisma.user.update({
          where: { id: u.id },
          data: { profileSlug: slug },
        });
      })
    );
    processed += updates.length;
    console.log(`Processed ${processed} / ${users.length}`);
  }

  console.log("Done backfilling slugs.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
