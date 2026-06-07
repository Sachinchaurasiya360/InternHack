import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
    try {
        const users = await prisma.user.findMany({ take: 1 });
        console.log("DB connection successful, users:", users.length);
    }
    catch (e) {
        console.error("DB connection error:", e);
    }
    finally {
        await prisma.$disconnect();
    }
}
main();
//# sourceMappingURL=test-db.js.map