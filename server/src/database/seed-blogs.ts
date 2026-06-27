import { PrismaClient } from "@prisma/client";

export async function seedBlogs(prisma: PrismaClient) {
  const admin = await prisma.user.findFirst({ where: { role: "ADMIN" } });
  if (!admin) {
    console.log("  ⚠ Skipping blog posts, no admin user found");
    return;
  }

  const posts = [
    {
      title: "Mastering DSA Interview Preparation",
      slug: "mastering-dsa-interview-preparation",
      content: "Data Structures and Algorithms (DSA) form the core of technical interviews at top tech companies. To master DSA, start by solidifying your understanding of fundamental data structures like Arrays, Linked Lists, Trees, and Graphs. Practice consistently on platforms like LeetCode or Codeforces. Focus on patterns rather than memorizing solutions, such as Two Pointers, Sliding Window, and Dynamic Programming. Consistency and a clear understanding of time and space complexity are key to success.",
      excerpt: "A comprehensive guide to preparing for DSA interviews, focusing on key patterns and consistent practice.",
      category: "INTERVIEW_TIPS" as const,
      tags: ["dsa", "interview", "preparation", "coding"],
      status: "PUBLISHED" as const,
      readingTime: 8,
      publishedAt: new Date("2026-06-25"),
    },
    {
      title: "System Design Interview Fundamentals",
      slug: "system-design-interview-fundamentals",
      content: "System design interviews test your ability to architect scalable and robust software systems. Begin by understanding the requirements and constraints of the system. Learn the trade-offs between different architectural choices, such as microservices vs. monoliths, SQL vs. NoSQL, and various caching strategies. Familiarize yourself with concepts like load balancing, sharding, and consistent hashing. A structured approach, starting from a high-level design and drilling down into specific components, will help you excel.",
      excerpt: "Essential concepts and strategies for tackling system design interviews with confidence.",
      category: "INTERVIEW_TIPS" as const,
      tags: ["system-design", "architecture", "interview"],
      status: "PUBLISHED" as const,
      readingTime: 10,
      publishedAt: new Date("2026-06-24"),
    },
    {
      title: "Behavioral Interview Success Guide",
      slug: "behavioral-interview-success-guide",
      content: "Behavioral interviews assess how you handle workplace situations and if you're a culture fit. Use the STAR method (Situation, Task, Action, Result) to structure your answers. Prepare stories for common themes like overcoming challenges, working in a team, and dealing with conflict. Be honest, highlight your learnings, and show enthusiasm for the role and the company. Remember, interpersonal skills are just as important as technical abilities.",
      excerpt: "How to use the STAR method and prepare for behavioral questions to showcase your soft skills.",
      category: "CAREER_ADVICE" as const,
      tags: ["behavioral", "soft-skills", "interview", "star-method"],
      status: "PUBLISHED" as const,
      readingTime: 7,
      publishedAt: new Date("2026-06-23"),
    },
    {
      title: "Resume Building Best Practices",
      slug: "resume-building-best-practices",
      content: "Your resume is your first impression. Keep it concise, ideally one page for freshers. Use a clean, ATS-friendly format. Highlight your technical skills, impactful projects, and relevant experience. Use action verbs and quantify your achievements (e.g., 'Improved API response time by 20%'). Tailor your resume to the specific job description by including relevant keywords. Don't forget to include links to your GitHub and LinkedIn profiles.",
      excerpt: "Best practices for creating a standout resume that highlights your skills and gets you noticed.",
      category: "RESUME_TIPS" as const,
      tags: ["resume", "career", "job-search"],
      status: "PUBLISHED" as const,
      readingTime: 6,
      publishedAt: new Date("2026-06-22"),
    },
    {
      title: "Frequently Asked HR Interview Questions",
      slug: "frequently-asked-hr-interview-questions",
      content: "HR interviews focus on your personality, motivation, and alignment with the company's values. Common questions include 'Tell me about yourself', 'Why do you want to join us?', and 'Where do you see yourself in 5 years?'. Prepare authentic and concise answers. Research the company beforehand to show genuine interest. Be prepared to discuss your strengths and areas for improvement confidently.",
      excerpt: "A guide to answering common HR interview questions authentically and confidently.",
      category: "INTERVIEW_TIPS" as const,
      tags: ["hr", "interview", "preparation"],
      status: "PUBLISHED" as const,
      readingTime: 5,
      publishedAt: new Date("2026-06-21"),
    },
    {
      title: "Coding Round Preparation Strategies",
      slug: "coding-round-preparation-strategies",
      content: "The coding round often involves solving algorithmic challenges under a time limit. Practice solving problems on a whiteboard or a plain text editor to simulate the interview environment. Focus on writing clean, readable, and well-commented code. Always test your code with edge cases before concluding. During the interview, communicate your thought process clearly; sometimes, a good approach is valued more than a perfect, bug-free solution.",
      excerpt: "Strategies for practicing and performing well in timed coding rounds.",
      category: "INTERVIEW_TIPS" as const,
      tags: ["coding", "interview", "dsa"],
      status: "PUBLISHED" as const,
      readingTime: 7,
      publishedAt: new Date("2026-06-20"),
    },
    {
      title: "Common Technical Interview Mistakes and How to Avoid Them",
      slug: "common-technical-interview-mistakes",
      content: "Many candidates make avoidable mistakes during technical interviews. Jumping straight into coding without fully understanding the problem is a common pitfall; always ask clarifying questions first. Another mistake is remaining silent while thinking; vocalizing your thoughts helps the interviewer guide you if you're stuck. Lastly, neglecting edge cases can lead to incomplete solutions. Practice mock interviews to identify and rectify these habits.",
      excerpt: "Identify and avoid common pitfalls in technical interviews to improve your chances of success.",
      category: "CAREER_ADVICE" as const,
      tags: ["interview", "mistakes", "tips"],
      status: "PUBLISHED" as const,
      readingTime: 6,
      publishedAt: new Date("2026-06-19"),
    },
  ];

  let count = 0;
  for (const p of posts) {
    const existing = await prisma.blogPost.findUnique({ where: { slug: p.slug } });
    if (!existing) {
      await prisma.blogPost.create({ data: { ...p, authorId: admin.id } });
      count++;
    }
  }
  
  console.log(`  ✓ Blog Posts: ${count} records`);
}
