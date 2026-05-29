import { prisma } from "./src/database/db.js";
import { hashPassword } from "./src/utils/password.utils.js";
import { generateToken } from "./src/utils/jwt.utils.js";

const hashedPassword = await hashPassword("TestPass123!");
const user = await prisma.user.upsert({
  where: { email: "dev@internhack.local" },
  update: {},
  create: {
    email: "dev@internhack.local",
    name: "Dev User",
    password: hashedPassword,
    role: "STUDENT",
    isVerified: true,
  },
});

const token = generateToken({
  id: user.id,
  email: user.email,
  role: user.role,
  tokenVersion: user.tokenVersion,
});

console.log("\n✅ Dev user created/updated");
console.log(`Email: ${user.email}`);
console.log(`ID: ${user.id}`);
console.log(`\n🔑 JWT Token:\n${token}\n`);
console.log("📝 How to use:");
console.log("1. Start the app: cd /workspaces/InternHack/server && npm run dev");
console.log("2. In another terminal: cd /workspaces/InternHack/client && npm run dev");
console.log("3. In browser devtools Console, run:");
console.log(`   localStorage.setItem('token', '${token}')`);
console.log("4. Refresh the page and you'll be logged in");
console.log("5. Navigate to the Roadmap section");

process.exit(0);
