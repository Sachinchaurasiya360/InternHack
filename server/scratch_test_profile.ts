import 'dotenv/config';
import { prisma } from "./src/database/db.ts";

async function main() {
  // Ensure a test user exists
  let user = await prisma.user.findFirst({ where: { email: 'test@example.com' } });
  if (!user) {
    user = await prisma.user.create({
      data: {
        name: 'Test User',
        email: 'test@example.com',
        password: 'hashedpassword', // Assume password hashed elsewhere
        role: 'STUDENT',
      },
    });
    console.log('Created test user with id', user.id);
  }

  const service = new TeammateService();
  const profileData = {
    preferredRole: 'Developer',
    availability: 'Full-time',
    experienceLevel: 'Intermediate',
    skills: ['JavaScript', 'Node.js'],
    techStack: ['React', 'Express'],
  };

  const profile = await service.createProfile(user.id, profileData);
  console.log('Created/updated profile:', profile);
}

main()
  .catch((e) => {
    console.error('Error:', e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
