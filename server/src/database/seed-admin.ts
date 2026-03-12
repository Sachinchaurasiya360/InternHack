import "dotenv/config";
import { prisma } from "./db.js";
import { hashPassword } from "../utils/password.utils.js";

async function seedAdmin() {
  const email = process.env["ADMIN_EMAIL"] || "1mrsachinchaurasiya@gmail.com";
  const password = process.env["ADMIN_PASSWORD"] || "Admin@123";
  const name = process.env["ADMIN_NAME"] || "Super Admin";

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    // Ensure admin is always verified
    if (!existing.isVerified) {
      await prisma.user.update({ where: { id: existing.id }, data: { isVerified: true } });
      console.log(`Admin verified: ${email}`);
    } else {
      console.log(`Admin already exists: ${email}`);
    }
  } else {
    const hashedPassword = await hashPassword(password);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: "ADMIN",
        isVerified: true,
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
  }

  // ── Seed Recruiter ──
  const recruiterEmail = "recruiter@internhack.xyz";
  const recruiterPassword = "Recruiter@123";

  const existingRecruiter = await prisma.user.findUnique({ where: { email: recruiterEmail } });
  if (existingRecruiter) {
    console.log(`Recruiter already exists: ${recruiterEmail}`);
  } else {
    const hashedPassword = await hashPassword(recruiterPassword);

    await prisma.user.create({
      data: {
        name: "Demo Recruiter",
        email: recruiterEmail,
        password: hashedPassword,
        role: "RECRUITER",
        isVerified: true,
        company: "InternHack",
        designation: "Hiring Manager",
      },
    });

    console.log(`Recruiter created successfully!`);
    console.log(`Email: ${recruiterEmail}`);
    console.log(`Password: ${recruiterPassword}`);
  }

  process.exit(0);
}

seedAdmin().catch((err) => {
  console.error("Failed to seed:", err);
  process.exit(1);
});
