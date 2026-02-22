import "dotenv/config";
import { prisma } from "./db.js";
import { hashPassword } from "../utils/password.utils.js";

async function seedAdmin() {
  const email = process.env["ADMIN_EMAIL"] || "1mrsachinchaurasiya@gmail.com";
  const password = process.env["ADMIN_PASSWORD"] || "Admin@123";
  const name = process.env["ADMIN_NAME"] || "Super Admin";

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    console.log(`Admin already exists: ${email}`);
    process.exit(0);
  }

  const hashedPassword = await hashPassword(password);

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      role: "ADMIN",
    },
  });

  await prisma.adminProfile.create({
    data: {
      userId: user.id,
      tier: "SUPER_ADMIN",
      isActive: true,
    },
  });

  console.log(`Super Admin created successfully!`);
  console.log(`Email: ${email}`);
  console.log(`Password: ${password}`);
  process.exit(0);
}

seedAdmin().catch((err) => {
  console.error("Failed to seed admin:", err);
  process.exit(1);
});
