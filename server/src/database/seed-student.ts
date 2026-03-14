import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seedStudent() {

  const student = await prisma.user.upsert({
    where: { email: "test@internhack.com" },
    update: { password: "$2b$10$YmqK0.rfu0X4aPAkG9LUJeifyR9sGzTx3j5RYjfonyQF5W/eW9e9u" },
    create: {
      name: "Test Student",
      email: "test@internhack.com",
      password: "$2b$10$YmqK0.rfu0X4aPAkG9LUJeifyR9sGzTx3j5RYjfonyQF5W/eW9e9u", // "admin123"
      role: "STUDENT",
      isVerified: true,
      bio: "CS student passionate about full-stack development",
      college: "IIT Bombay",
      graduationYear: 2026,
      skills: ["React", "TypeScript", "Node.js", "Python", "PostgreSQL"],
      linkedinUrl: "https://linkedin.com/in/teststudent",
      githubUrl: "https://github.com/teststudent",
      location: "Mumbai",
      jobStatus: "Actively Looking",
    },
  });

  console.log(`Student seeded: ${student.email} / test@123`);
}

seedStudent()
  .catch((e) => {
    console.error("Seed failed:", e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
