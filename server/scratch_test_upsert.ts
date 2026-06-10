import { prisma } from './src/database/db';

async function main() {
  try {
    const result = await prisma.teammateProfile.upsert({
      where: { userId: 999 },
      update: {},
      create: { userId: 999 },
    });
    console.log('Upsert success:', result);
  } catch (e) {
    console.error('Upsert error:', e);
  }
}

main();
