/**
 * Unified seed file for InternHack
 *
 * Seeds 5-10 records in each major section so the app is usable
 * right after setup. Run from the server directory:
 *
 *   npm run seed
 *
 * All upserts are idempotent, safe to run multiple times.
 */

import "dotenv/config";
import {
  PrismaClient,
  JobStatus,
  InterviewSource,
  InterviewDifficulty,
  InterviewOutcome,
  ReviewStatus,
} from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { hashPassword } from "../../utils/password.utils.js";

const connectionString = process.env["DATABASE_URL"] ?? "";
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

// ─── Helpers ──────────────────────────────────────────────────────────
function log(section: string, count: number) {
  console.log(`  ✓ ${section}: ${count} records`);
}

// ─── 1. Users (Admin + Recruiter + Students) ─────────────────────────
async function seedUsers() {
  const password = await hashPassword("Test@1234");

  const users = [
    {
      name: "Admin User",
      email: "admin@internhack.xyz",
      password,
      role: "ADMIN" as const,
      isVerified: true,
    },
    {
      name: "Demo Recruiter",
      email: "recruiter@internhack.xyz",
      password,
      role: "RECRUITER" as const,
      isVerified: true,
      company: "TechCorp",
      designation: "Hiring Manager",
    },
    {
      name: "Aarav Sharma",
      email: "aarav@example.com",
      password,
      role: "STUDENT" as const,
      isVerified: true,
      college: "IIT Delhi",
      graduationYear: 2026,
      skills: ["JavaScript", "React", "Node.js"],
      bio: "Full-stack developer passionate about web technologies",
      location: "Delhi",
    },
    {
      name: "Priya Patel",
      email: "priya@example.com",
      password,
      role: "STUDENT" as const,
      isVerified: true,
      college: "NIT Trichy",
      graduationYear: 2025,
      skills: ["Python", "Django", "Machine Learning"],
      bio: "Data science enthusiast with a love for ML",
      location: "Chennai",
    },
    {
      name: "Rohan Gupta",
      email: "rohan@example.com",
      password,
      role: "STUDENT" as const,
      isVerified: true,
      college: "BITS Pilani",
      graduationYear: 2026,
      skills: ["Java", "Spring Boot", "AWS"],
      bio: "Backend developer interested in distributed systems",
      location: "Hyderabad",
    },
    {
      name: "Sneha Reddy",
      email: "sneha@example.com",
      password,
      role: "STUDENT" as const,
      isVerified: true,
      college: "IIIT Hyderabad",
      graduationYear: 2025,
      skills: ["TypeScript", "React", "PostgreSQL", "Docker"],
      bio: "Full-stack dev and open source contributor",
      location: "Hyderabad",
    },
    {
      name: "Arjun Mehta",
      email: "arjun@example.com",
      password,
      role: "STUDENT" as const,
      isVerified: true,
      college: "VIT Vellore",
      graduationYear: 2027,
      skills: ["C++", "DSA", "Competitive Programming"],
      bio: "Competitive programmer and algorithm enthusiast",
      location: "Pune",
    },
    {
      name: "Neha Kapoor",
      email: "premium@example.com",
      password,
      role: "STUDENT" as const,
      isVerified: true,
      college: "IIT Bombay",
      graduationYear: 2025,
      skills: ["React", "TypeScript", "System Design", "Node.js"],
      bio: "Full-stack developer. Premium account for testing subscription-gated features.",
      location: "Mumbai",
      subscriptionPlan: "MONTHLY" as const,
      subscriptionStatus: "ACTIVE" as const,
    },
  ];

  let created = 0;
  for (const u of users) {
    const existing = await prisma.user.findUnique({ where: { email: u.email } });
    if (!existing) {
      const user = await prisma.user.create({ data: u });
      if (u.role === "ADMIN") {
        await prisma.adminProfile.create({
          data: { userId: user.id, tier: "SUPER_ADMIN", isActive: true },
        });
      }
      created++;
    }
  }
  log("Users", created);
  return created;
}

// ─── 2. DSA Topics & Problems ─────────────────────────────────────────
async function seedDsa() {
  const topics = [
    { name: "Arrays", slug: "arrays", description: "Array manipulation and traversal problems", orderIndex: 1 },
    { name: "Strings", slug: "strings", description: "String processing and pattern matching", orderIndex: 2 },
    { name: "Linked List", slug: "linked-list", description: "Singly and doubly linked list operations", orderIndex: 3 },
    { name: "Binary Search", slug: "binary-search", description: "Divide and conquer search techniques", orderIndex: 4 },
    { name: "Stack & Queue", slug: "stack-queues", description: "LIFO and FIFO data structure problems", orderIndex: 5 },
    { name: "Binary Trees", slug: "binary-trees", description: "Tree traversal and manipulation", orderIndex: 6 },
    { name: "Graphs", slug: "graphs", description: "Graph traversal, shortest path, and connectivity", orderIndex: 7 },
    { name: "Dynamic Programming", slug: "dynamic-programming", description: "Optimal substructure and overlapping subproblems", orderIndex: 8 },
  ];

  let topicCount = 0;
  for (const t of topics) {
    const existing = await prisma.dsaTopic.findUnique({ where: { slug: t.slug } });
    if (!existing) {
      await prisma.dsaTopic.create({ data: t });
      topicCount++;
    }
  }

  const problems = [
    { title: "Two Sum", slug: "two-sum", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/two-sum/", tags: ["arrays", "hashing"], companies: ["Google", "Amazon", "Meta"] },
    { title: "Best Time to Buy and Sell Stock", slug: "best-time-to-buy-sell-stock", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/", tags: ["arrays", "dynamic-programming"], companies: ["Amazon", "Microsoft"] },
    { title: "Valid Parentheses", slug: "valid-parentheses", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/valid-parentheses/", tags: ["stack", "strings"], companies: ["Google", "Amazon", "Bloomberg"] },
    { title: "Merge Two Sorted Lists", slug: "merge-two-sorted-lists", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/merge-two-sorted-lists/", tags: ["linked-list"], companies: ["Amazon", "Apple", "Microsoft"] },
    { title: "Maximum Subarray", slug: "maximum-subarray", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/maximum-subarray/", tags: ["arrays", "dynamic-programming"], companies: ["Amazon", "Microsoft", "LinkedIn"] },
    { title: "3Sum", slug: "3sum", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/3sum/", tags: ["arrays", "two-pointers"], companies: ["Meta", "Amazon", "Bloomberg"] },
    { title: "Binary Tree Level Order Traversal", slug: "binary-tree-level-order-traversal", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/binary-tree-level-order-traversal/", tags: ["binary-tree", "bfs"], companies: ["Amazon", "Microsoft"] },
    { title: "Number of Islands", slug: "number-of-islands", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/number-of-islands/", tags: ["graph", "bfs", "dfs"], companies: ["Amazon", "Google", "Microsoft"] },
    { title: "Longest Increasing Subsequence", slug: "longest-increasing-subsequence", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/longest-increasing-subsequence/", tags: ["dynamic-programming", "binary-search"], companies: ["Google", "Amazon"] },
    { title: "Trapping Rain Water", slug: "trapping-rain-water", difficulty: "Hard", leetcodeUrl: "https://leetcode.com/problems/trapping-rain-water/", tags: ["arrays", "two-pointers", "stack"], companies: ["Google", "Amazon", "Goldman Sachs"] },
  ];

  let problemCount = 0;
  for (const p of problems) {
    const existing = await prisma.dsaProblem.findUnique({ where: { slug: p.slug } });
    if (!existing) {
      await prisma.dsaProblem.create({ data: p });
      problemCount++;
    }
  }
  log("DSA Topics", topicCount);
  log("DSA Problems", problemCount);
}

// ─── 3. Aptitude Categories, Topics & Questions ───────────────────────
async function seedAptitude() {
  const categories = [
    { name: "Aptitude", slug: "aptitude", description: "Quantitative aptitude questions", orderIndex: 1 },
    { name: "Logical Reasoning", slug: "logical-reasoning", description: "Logical and analytical reasoning", orderIndex: 2 },
    { name: "Verbal Ability", slug: "verbal-ability", description: "English verbal ability and comprehension", orderIndex: 3 },
  ];

  const topicsByCategory: Record<string, { name: string; slug: string; description: string; orderIndex: number }[]> = {
    aptitude: [
      { name: "Profit and Loss", slug: "profit-and-loss", description: "Cost price, selling price, profit and loss", orderIndex: 1 },
      { name: "Percentage", slug: "percentage", description: "Percentage calculations and conversions", orderIndex: 2 },
      { name: "Time and Work", slug: "time-and-work", description: "Work, efficiency and time calculations", orderIndex: 3 },
    ],
    "logical-reasoning": [
      { name: "Number Series", slug: "number-series", description: "Identify patterns in number sequences", orderIndex: 1 },
      { name: "Blood Relations", slug: "blood-relations", description: "Family relationship puzzles", orderIndex: 2 },
      { name: "Coding-Decoding", slug: "coding-decoding", description: "Letter/number code pattern problems", orderIndex: 3 },
    ],
    "verbal-ability": [
      { name: "Synonyms", slug: "synonyms", description: "Words with similar meanings", orderIndex: 1 },
      { name: "Antonyms", slug: "antonyms", description: "Words with opposite meanings", orderIndex: 2 },
      { name: "Sentence Correction", slug: "sentence-correction", description: "Grammar and sentence structure", orderIndex: 3 },
    ],
  };

  const questionsByTopic: Record<string, { question: string; optionA: string; optionB: string; optionC: string; optionD: string; correctAnswer: string; explanation: string }[]> = {
    "profit-and-loss": [
      { question: "A shopkeeper buys an article for ₹500 and sells it for ₹600. What is the profit percentage?", optionA: "10%", optionB: "15%", optionC: "20%", optionD: "25%", correctAnswer: "C", explanation: "Profit = 600-500 = 100. Profit% = (100/500)*100 = 20%" },
      { question: "If selling price is double the cost price, the profit percent is?", optionA: "50%", optionB: "100%", optionC: "150%", optionD: "200%", correctAnswer: "B", explanation: "SP=2*CP. Profit = CP. Profit% = (CP/CP)*100 = 100%" },
    ],
    percentage: [
      { question: "What is 25% of 200?", optionA: "25", optionB: "40", optionC: "50", optionD: "75", correctAnswer: "C", explanation: "25/100 * 200 = 50" },
      { question: "If a number is increased by 20% and then decreased by 20%, what is the net change?", optionA: "No change", optionB: "4% decrease", optionC: "4% increase", optionD: "2% decrease", correctAnswer: "B", explanation: "Net effect = -20*20/100 = -4% decrease" },
    ],
    "time-and-work": [
      { question: "A can do a work in 10 days and B in 15 days. In how many days will they finish together?", optionA: "5 days", optionB: "6 days", optionC: "7 days", optionD: "8 days", correctAnswer: "B", explanation: "Combined rate = 1/10 + 1/15 = 5/30 = 1/6. Time = 6 days" },
      { question: "If 5 workers can build a wall in 10 days, how many days will 10 workers take?", optionA: "3 days", optionB: "4 days", optionC: "5 days", optionD: "6 days", correctAnswer: "C", explanation: "Workers * Days = constant. 5*10 = 10*x, x = 5 days" },
    ],
    "number-series": [
      { question: "What comes next: 2, 6, 12, 20, 30, ?", optionA: "38", optionB: "40", optionC: "42", optionD: "44", correctAnswer: "C", explanation: "Differences: 4,6,8,10,12. Pattern: n*(n+1). Next = 6*7 = 42" },
      { question: "Find the next: 1, 1, 2, 3, 5, 8, ?", optionA: "11", optionB: "12", optionC: "13", optionD: "14", correctAnswer: "C", explanation: "Fibonacci sequence. 5+8 = 13" },
    ],
    "blood-relations": [
      { question: "Pointing to a man, a woman said 'His mother is the only daughter of my mother.' How is the woman related to the man?", optionA: "Mother", optionB: "Grandmother", optionC: "Sister", optionD: "Aunt", correctAnswer: "A", explanation: "Only daughter of my mother = the woman herself. So the man is her son." },
    ],
    "coding-decoding": [
      { question: "If APPLE is coded as ELPPA, how is MANGO coded?", optionA: "OGNAM", optionB: "OBNAM", optionC: "OGMAN", optionD: "ONAGM", correctAnswer: "A", explanation: "The word is reversed. MANGO → OGNAM" },
    ],
    synonyms: [
      { question: "Choose the synonym of 'Abundant':", optionA: "Scarce", optionB: "Plentiful", optionC: "Rare", optionD: "Meager", correctAnswer: "B", explanation: "Abundant means existing in large quantities, synonym is plentiful." },
    ],
    antonyms: [
      { question: "Choose the antonym of 'Benevolent':", optionA: "Kind", optionB: "Generous", optionC: "Malevolent", optionD: "Charitable", correctAnswer: "C", explanation: "Benevolent means well-meaning. Malevolent means having evil intent." },
    ],
    "sentence-correction": [
      { question: "Choose the correct sentence:", optionA: "He don't know nothing", optionB: "He doesn't know anything", optionC: "He don't know anything", optionD: "He doesn't knows anything", correctAnswer: "B", explanation: "'Doesn't' is correct for third person singular, and 'anything' avoids double negative." },
    ],
  };

  let catCount = 0;
  let topicCount = 0;
  let qCount = 0;

  for (const cat of categories) {
    let dbCat = await prisma.aptitudeCategory.findUnique({ where: { slug: cat.slug } });
    if (!dbCat) {
      dbCat = await prisma.aptitudeCategory.create({ data: cat });
      catCount++;
    }

    const topics = topicsByCategory[cat.slug] || [];
    for (const topic of topics) {
      let dbTopic = await prisma.aptitudeTopic.findUnique({ where: { slug: topic.slug } });
      if (!dbTopic) {
        dbTopic = await prisma.aptitudeTopic.create({
          data: { ...topic, categoryId: dbCat.id },
        });
        topicCount++;
      }

      const questions = questionsByTopic[topic.slug] || [];
      for (const q of questions) {
        const existing = await prisma.aptitudeQuestion.findFirst({
          where: { topicId: dbTopic.id, question: q.question },
        });
        if (!existing) {
          await prisma.aptitudeQuestion.create({
            data: { ...q, topicId: dbTopic.id },
          });
          qCount++;
        }
      }
    }
  }

  log("Aptitude Categories", catCount);
  log("Aptitude Topics", topicCount);
  log("Aptitude Questions", qCount);
}

// ─── 4. Companies ─────────────────────────────────────────────────────
async function seedCompanies() {
  // We need an admin user to set as createdById
  const admin = await prisma.user.findFirst({ where: { role: "ADMIN" } });
  if (!admin) {
    console.log("  ⚠ Skipping companies, no admin user found");
    return;
  }

  const companies = [
    { name: "TechCorp India", slug: "techcorp-india", description: "Leading IT services company specializing in cloud solutions and digital transformation.", industry: "IT Services", size: "ENTERPRISE" as const, city: "Bangalore", state: "Karnataka", website: "https://techcorp.example.com", technologies: ["Java", "AWS", "React", "Kubernetes"], hiringStatus: true, foundedYear: 2005 },
    { name: "DataWave Analytics", slug: "datawave-analytics", description: "AI and data analytics startup building next-gen business intelligence tools.", industry: "Data Analytics", size: "STARTUP" as const, city: "Hyderabad", state: "Telangana", website: "https://datawave.example.com", technologies: ["Python", "TensorFlow", "Spark", "PostgreSQL"], hiringStatus: true, foundedYear: 2020 },
    { name: "CloudNine Solutions", slug: "cloudnine-solutions", description: "Cloud infrastructure provider offering managed DevOps and serverless solutions.", industry: "Cloud Computing", size: "MEDIUM" as const, city: "Pune", state: "Maharashtra", website: "https://cloudnine.example.com", technologies: ["AWS", "Terraform", "Go", "Docker"], hiringStatus: true, foundedYear: 2017 },
    { name: "FinEdge Technologies", slug: "finedge-technologies", description: "Fintech company building payment gateways and digital banking solutions.", industry: "Fintech", size: "LARGE" as const, city: "Mumbai", state: "Maharashtra", website: "https://finedge.example.com", technologies: ["Node.js", "React", "PostgreSQL", "Redis"], hiringStatus: true, foundedYear: 2015 },
    { name: "GreenByte Software", slug: "greenbyte-software", description: "Sustainability-focused tech company building carbon tracking and ESG platforms.", industry: "CleanTech", size: "SMALL" as const, city: "Chennai", state: "Tamil Nadu", website: "https://greenbyte.example.com", technologies: ["Python", "Django", "Vue.js", "MongoDB"], hiringStatus: false, foundedYear: 2021 },
    { name: "CyberShield Security", slug: "cybershield-security", description: "Cybersecurity firm offering threat detection, penetration testing, and compliance services.", industry: "Cybersecurity", size: "MEDIUM" as const, city: "Delhi", state: "Delhi", website: "https://cybershield.example.com", technologies: ["Python", "Go", "Rust", "Elasticsearch"], hiringStatus: true, foundedYear: 2018 },
    { name: "EduTech Pro", slug: "edutech-pro", description: "EdTech startup building adaptive learning platforms for K-12 and higher education.", industry: "Education Technology", size: "STARTUP" as const, city: "Bangalore", state: "Karnataka", website: "https://edutechpro.example.com", technologies: ["React", "Node.js", "MongoDB", "AI/ML"], hiringStatus: true, foundedYear: 2022 },
    { name: "HealthBridge Systems", slug: "healthbridge-systems", description: "Healthcare IT company building EHR systems and telemedicine platforms.", industry: "Healthcare IT", size: "LARGE" as const, city: "Noida", state: "Uttar Pradesh", website: "https://healthbridge.example.com", technologies: ["Java", "Spring Boot", "Angular", "PostgreSQL"], hiringStatus: true, foundedYear: 2012 },
    // extra testcases added to match seedInterviewExperiences()
    { name: "Google", slug: "google", description: "Global technology company specializing in internet services, cloud computing, AI, and digital advertising products.", industry: "Technology", size: "ENTERPRISE" as const, city: "Bangalore", state: "Karnataka", website: "https://google.com", technologies: ["Go", "C++", "Python", "Kubernetes", "TensorFlow"], hiringStatus: true, foundedYear: 1998 },
    { name: "Microsoft", slug: "microsoft", description: "Multinational technology corporation developing software, cloud computing platforms, and AI-powered productivity solutions.", industry: "Technology", size: "ENTERPRISE" as const, city: "Hyderabad", state: "Telangana", website: "https://microsoft.com", technologies: ["C#", ".NET", "Azure", "TypeScript", "React"], hiringStatus: true, foundedYear: 1975 },
    { name: "Amazon", slug: "amazon", description: "Global e-commerce and cloud computing company known for AWS, logistics innovation, and scalable distributed systems.", industry: "E-Commerce", size: "ENTERPRISE" as const, city: "Hyderabad", state: "Telangana", website: "https://amazon.com", technologies: ["Java", "AWS", "DynamoDB", "React", "Node.js"], hiringStatus: true, foundedYear: 1994 },
    { name: "Flipkart", slug: "flipkart", description: "Indian e-commerce giant providing online shopping, digital payments, and supply chain technology solutions.", industry: "E-Commerce", size: "LARGE" as const, city: "Bangalore", state: "Karnataka", website: "https://flipkart.com", technologies: ["Java", "Spring Boot", "React", "Kafka", "Redis"], hiringStatus: true, foundedYear: 2007 },
    { name: "Adobe", slug: "adobe", description: "Software company known for creative tools, digital media products, and experience cloud solutions.", industry: "Software", size: "LARGE" as const, city: "Noida", state: "Uttar Pradesh", website: "https://adobe.com", technologies: ["Java", "C++", "React", "Adobe Experience Cloud", "Python"], hiringStatus: true, foundedYear: 1982 },
    { name: "Atlassian", slug: "atlassian", description: "Enterprise software company building collaboration and productivity tools like Jira, Confluence, and Trello.", industry: "Software", size: "LARGE" as const, city: "Bangalore", state: "Karnataka", website: "https://atlassian.com", technologies: ["Java", "Kotlin", "React", "AWS", "PostgreSQL"], hiringStatus: true, foundedYear: 2002 },
  ];

  let count = 0;
  for (const c of companies) {
    const existing = await prisma.company.findUnique({ where: { slug: c.slug } });
    if (!existing) {
      await prisma.company.create({ data: { ...c, createdById: admin.id, isApproved: true } });
      count++;
    }
  }
  log("Companies", count);
}

// ─── 5. Badges ────────────────────────────────────────────────────────
async function seedBadges() {
  const badges = [
    { name: "First Steps", slug: "first-steps", description: "Applied to your first job", category: "MILESTONE" as const, criteria: { type: "first_application" } },
    { name: "Job Hunter", slug: "job-hunter", description: "Applied to 5 jobs", category: "CAREER" as const, criteria: { type: "job_apply", params: { count: 5 } } },
    { name: "Persistent", slug: "persistent", description: "Applied to 10 jobs", category: "CAREER" as const, criteria: { type: "job_apply", params: { count: 10 } } },
    { name: "Committed", slug: "committed", description: "Applied to 25 jobs", category: "CAREER" as const, criteria: { type: "job_apply", params: { count: 25 } } },
    { name: "Relentless", slug: "relentless", description: "Applied to 50 jobs", category: "CAREER" as const, criteria: { type: "job_apply", params: { count: 50 } } },
    { name: "Century", slug: "century-apply", description: "Applied to 100 jobs", category: "MILESTONE" as const, criteria: { type: "job_apply", params: { count: 100 } } },
    { name: "Storyteller", slug: "storyteller", description: "Shared your first interview experience", category: "CONTRIBUTION" as const, criteria: { type: "interview_share", params: { count: 1 } } },
    { name: "Mentor", slug: "mentor", description: "Shared 5 interview experiences", category: "CONTRIBUTION" as const, criteria: { type: "interview_share", params: { count: 5 } } },
    { name: "Community Pillar", slug: "community-pillar", description: "Shared 20 interview experiences", category: "CONTRIBUTION" as const, criteria: { type: "interview_share", params: { count: 20 } } },
    { name: "Skill Verified", slug: "skill-verified", description: "Passed your first skill test", category: "SKILL" as const, criteria: { type: "skill_test_pass", params: { count: 1 } } },
    { name: "Problem Solver", slug: "problem-solver", description: "Solved 10 DSA problems", category: "SKILL" as const, criteria: { type: "dsa_solve", params: { count: 10 } } },
    { name: "DSA Warrior", slug: "dsa-warrior", description: "Solved 50 DSA problems", category: "SKILL" as const, criteria: { type: "dsa_solve", params: { count: 50 } } },
    { name: "Code Ninja", slug: "code-ninja", description: "Solved 100 DSA problems", category: "MILESTONE" as const, criteria: { type: "dsa_solve", params: { count: 100 } } },
    { name: "Profile Pro", slug: "profile-pro", description: "Completed your entire profile", category: "MILESTONE" as const, criteria: { type: "profile_complete" } },
    { name: "Quiz Master", slug: "quiz-master", description: "Answered 100 aptitude questions correctly", category: "QUIZ" as const, criteria: { type: "aptitude_correct", params: { count: 100 } } },
    { name: "Contributor", slug: "contributor", description: "Made your first approved company contribution", category: "CONTRIBUTION" as const, criteria: { type: "contribution_approved", params: { count: 1 } } },
  ];

  let count = 0;
  for (const b of badges) {
    const existing = await prisma.badge.findUnique({ where: { slug: b.slug } });
    if (!existing) {
      await prisma.badge.create({ data: { ...b, isActive: true } });
      count++;
    }
  }
  log("Badges", count);
}

// ─── 6. Skill Tests ──────────────────────────────────────────────────
async function seedSkillTests() {
  const tests = [
    {
      skillName: "javascript",
      title: "JavaScript Fundamentals",
      description: "Test your knowledge of core JavaScript concepts.",
      difficulty: "INTERMEDIATE" as const,
      timeLimitSecs: 1800,
      passThreshold: 75,
      questions: [
        { question: "Which keyword declares a block-scoped variable?", options: ["var", "const", "function", "global"], correctIndex: 1, explanation: "const declares a block-scoped constant variable." },
        { question: "What is the output of typeof NaN?", options: ["number", "NaN", "undefined", "object"], correctIndex: 0, explanation: "NaN is still of type number in JavaScript." },
        { question: "Which array method returns a new filtered array?", options: ["forEach()", "map()", "some()", "filter()"], correctIndex: 3, explanation: "filter() returns a new array with elements that match the condition." },
        { question: "What does Promise.all() return?", options: ["A single resolved value", "A promise of array results", "An iterator", "Undefined"], correctIndex: 1, explanation: "Promise.all returns a promise that resolves with an array of results." },
        { question: "Which operator merges objects and arrays?", options: ["...", "++", "&&", "||"], correctIndex: 0, explanation: "The spread operator (...) copies array and object values." },
        { question: "How do you define a function expression?", options: ["function foo() {}", "const foo = function() {}", "let foo := {}", "function: foo() {}"], correctIndex: 1, explanation: "A function expression assigns a function to a variable." },
        { question: "What is event bubbling?", options: ["Events captured before target", "Events propagate outward from target", "Events cancel automatically", "Events only per element"], correctIndex: 1, explanation: "Event bubbling sends event propagation from child to ancestor elements." },
        { question: "Which method converts JSON text to an object?", options: ["JSON.stringify()", "JSON.parse()", "JSON.convert()", "JSON.toObject()"], correctIndex: 1, explanation: "JSON.parse converts JSON-formatted strings to JavaScript objects." },
        { question: "What is the result of '5' + 3?", options: ["8", "53", "NaN", "TypeError"], correctIndex: 1, explanation: "String concatenation coerces 3 to '3', producing '53'." },
        { question: "Which of these is a truthy value?", options: ["0", "''", "null", "[]"], correctIndex: 3, explanation: "An empty array is truthy in JavaScript." },
        { question: "What does the map() method return?", options: ["Same array", "New array", "Boolean", "Number"], correctIndex: 1, explanation: "map() returns a new array after applying a callback." },
        { question: "How do you create a promise that resolves immediately?", options: ["new Promise((res) => res())", "Promise.resolve()", "resolvePromise()", "Promise.start()"], correctIndex: 1, explanation: "Promise.resolve returns a promise already resolved with a value." },
        { question: "What does Array.isArray([]) return?", options: ["true", "false", "undefined", "Error"], correctIndex: 0, explanation: "Array.isArray identifies arrays and returns true." },
        { question: "Which keyword checks for strict equality?", options: ["==", "=", "===", "!=="], correctIndex: 2, explanation: "=== checks both value and type for equality." },
        { question: "What is a pure function?", options: ["Modifies external state", "Always returns same output for same input", "Always asynchronous", "Uses loops"], correctIndex: 1, explanation: "Pure functions produce consistent output and no side effects." },
        { question: "What is the value of 2 + true?", options: ["2", "3", "NaN", "true"], correctIndex: 1, explanation: "true coerces to 1 in numeric addition." },
        { question: "Which built-in type are functions?", options: ["function", "object", "callable", "method"], correctIndex: 1, explanation: "In JavaScript, functions are objects." },
        { question: "What does 'use strict' enable?", options: ["Legacy features", "Bug-prone mode", "Strict mode with safer syntax", "Faster loops"], correctIndex: 2, explanation: "Strict mode adds restrictions to catch common errors." },
        { question: "Which method delays execution to the next event loop tick?", options: ["setTimeout(fn, 0)", "delay(fn)", "nextTick(fn)", "setImmediate(fn)"], correctIndex: 0, explanation: "setTimeout(fn, 0) queues callback to run after current stack clears." },
        { question: "What is the output of Boolean([])?", options: ["true", "false", "undefined", "Error"], correctIndex: 0, explanation: "An empty array is truthy." },
      ],
    },
    {
      skillName: "python",
      title: "Python Basics",
      description: "Cover Python fundamentals, data structures, and functions.",
      difficulty: "INTERMEDIATE" as const,
      timeLimitSecs: 1800,
      passThreshold: 75,
      questions: [
        { question: "What is the result of 3 * 'a'?", options: ["'aaa'", "Error", "3a", "['a','a','a']"], correctIndex: 0, explanation: "Multiplying a string by 3 repeats it." },
        { question: "Which collection preserves insertion order?", options: ["set", "dict", "tuple", "list"], correctIndex: 1, explanation: "Dictionaries preserve insertion order since Python 3.7." },
        { question: "What is the difference between list and tuple?", options: ["tuple is mutable", "list is immutable", "tuple is immutable", "list has fixed size"], correctIndex: 2, explanation: "Tuples are immutable while lists are mutable." },
        { question: "How do you define a function in Python?", options: ["func foo():", "define foo():", "def foo():", "function foo()"], correctIndex: 2, explanation: "def is used to define functions." },
        { question: "What does the 'elif' keyword do?", options: ["Starts a loop", "Defines a function", "Adds another if condition", "Ends an if statement"], correctIndex: 2, explanation: "elif provides an additional conditional branch." },
        { question: "What is a list comprehension?", options: ["A code block for loops", "A single-line way to build lists", "A string formatting method", "A decorator"], correctIndex: 1, explanation: "List comprehensions build lists in a compact syntax." },
        { question: "Which keyword is used for exception handling?", options: ["except", "catch", "handle", "error"], correctIndex: 0, explanation: "except catches exceptions in Python." },
        { question: "How do you open a file for writing?", options: ["open('file','r')", "open('file','w')", "open('file','x')", "open('file','rw')"], correctIndex: 1, explanation: "'w' opens a file for writing, creating or truncating it." },
        { question: "What does len('abc') return?", options: ["2", "3", "4", "Error"], correctIndex: 1, explanation: "len returns the number of characters." },
        { question: "Which method adds an item to the end of a list?", options: ["add()", "append()", "insert()", "extend()"], correctIndex: 1, explanation: "append adds one item to the end." },
        { question: "What does dict.get('key') return if missing?", options: ["Error", "None", "0", "''"], correctIndex: 1, explanation: "get returns None by default when key is missing." },
        { question: "What type is returned by input() in Python?", options: ["int", "str", "float", "bool"], correctIndex: 1, explanation: "input always returns a string." },
        { question: "Which statement creates a generator expression?", options: ["[x for x in range(5)]", "(x for x in range(5))", "{x for x in range(5)}", "<x for x in range(5)>"], correctIndex: 1, explanation: "Parentheses create a generator expression." },
        { question: "How do you make a variable global inside a function?", options: ["use global", "use local", "use static", "use external"], correctIndex: 0, explanation: "global declares a variable as module-level within a function." },
        { question: "What does 'None' represent in Python?", options: ["Zero", "Empty string", "No value", "False"], correctIndex: 2, explanation: "None indicates absence of a value." },
        { question: "Which keyword defines a class?", options: ["struct", "class", "object", "type"], correctIndex: 1, explanation: "class defines a class in Python." },
        { question: "What is the output of bool('False')?", options: ["True", "False", "Error", "None"], correctIndex: 0, explanation: "Non-empty strings are truthy." },
        { question: "What does the strip() method do?", options: ["Removes whitespace", "Converts to uppercase", "Splits text", "Replaces text"], correctIndex: 0, explanation: "strip() removes whitespace from both ends." },
        { question: "Which builtin sorts a list in place?", options: ["sorted()", "sort()", "order()", "arrange()"], correctIndex: 1, explanation: "list.sort() sorts the list in place." },
        { question: "How do you import the math module?", options: ["import math", "using math", "from math import *", "require('math')"], correctIndex: 0, explanation: "import math is the standard import syntax." },
      ],
    },
    {
      skillName: "react",
      title: "React Essentials",
      description: "Measure your understanding of React hooks, state, and component design.",
      difficulty: "INTERMEDIATE" as const,
      timeLimitSecs: 1800,
      passThreshold: 75,
      questions: [
        { question: "What does useState return?", options: ["An object", "A state value and setter", "A boolean", "A hook instance"], correctIndex: 1, explanation: "useState returns a state value and a function to update it." },
        { question: "When does useEffect run with an empty dependency array?", options: ["Every render", "Only on mount", "Only on unmount", "Never"], correctIndex: 1, explanation: "An empty array makes useEffect run once after the first render." },
        { question: "What is JSX?", options: ["A CSS framework", "A JavaScript syntax extension for markup", "A debugging tool", "A router library"], correctIndex: 1, explanation: "JSX lets you write HTML-like syntax in JavaScript." },
        { question: "What is the role of keys in a list?", options: ["Control styling", "Identify list items for reconciliation", "Enable routing", "Provide accessibility"], correctIndex: 1, explanation: "Keys help React update list items efficiently." },
        { question: "How do you create a memoized callback?", options: ["useMemo", "useCallback", "useRef", "useState"], correctIndex: 1, explanation: "useCallback memoizes a function instance." },
        { question: "What does useMemo do?", options: ["Memoizes values", "Changes state", "Creates refs", "Handles events"], correctIndex: 0, explanation: "useMemo memoizes a computed value between renders." },
        { question: "Which hook gives direct DOM access?", options: ["useState", "useEffect", "useRef", "useMemo"], correctIndex: 2, explanation: "useRef stores a mutable reference to a DOM node." },
        { question: "What pattern returns early in a component?", options: ["Conditional rendering", "High-order component", "Render prop", "Context API"], correctIndex: 0, explanation: "Conditional rendering returns different JSX based on logic." },
        { question: "What is a controlled input?", options: ["An input managed by state", "An input with no value", "Only used in forms", "A disabled input"], correctIndex: 0, explanation: "Controlled inputs keep value in React state." },
        { question: "What is a fragment?", options: ["A styling helper", "A way to group elements without extra DOM nodes", "A router component", "A state hook"], correctIndex: 1, explanation: "Fragments group JSX children without adding an extra wrapper." },
        { question: "Which API shares data across the component tree?", options: ["Redux", "Context", "useState", "useEffect"], correctIndex: 1, explanation: "Context provides values to deeply nested components." },
        { question: "How do you pass JSX as a child?", options: ["Using props", "Using children", "Using state", "Using hooks"], correctIndex: 1, explanation: "children is the standard prop for nested JSX content." },
        { question: "What is the significance of useEffect cleanup?", options: ["Improves styling", "Avoids memory leaks", "Creates more renders", "Updates state"], correctIndex: 1, explanation: "Cleanup runs before the effect re-runs or component unmounts." },
        { question: "What React feature enables server rendering?", options: ["React Native", "Next.js", "React DOM", "React Router"], correctIndex: 1, explanation: "Next.js is commonly used for server-side rendering with React." },
        { question: "What does lifting state up mean?", options: ["Using more hooks", "Moving state to a common parent", "Writing more components", "Using refs"], correctIndex: 1, explanation: "State is lifted to a parent component for shared access." },
        { question: "Which hook is used for subscribing to external data?", options: ["useState", "useEffect", "useMemo", "useReducer"], correctIndex: 1, explanation: "useEffect handles subscriptions and side effects." },
        { question: "What is a React portal?", options: ["A router", "A way to render children into a DOM node outside the parent", "A hook", "A state helper"], correctIndex: 1, explanation: "Portals render components into a different DOM subtree." },
        { question: "How does React compare state for rerenders?", options: ["Deep compare", "Shallow compare", "No compare", "DOM compare"], correctIndex: 1, explanation: "React performs a shallow comparison on state updates." },
        { question: "What is the correct way to update state based on previous state?", options: ["setCount(count + 1)", "setCount(prev => prev + 1)", "setCount(() => count + 1)", "setCount(() => count)"], correctIndex: 1, explanation: "The functional update uses the previous state value safely." },
        { question: "What is a hook rule?", options: ["Hooks must be called conditionally", "Hooks can run in loops", "Hooks must be called at the top level", "Hooks can only be nested"], correctIndex: 2, explanation: "Hooks must be called at the top level of a component or custom hook." },
      ],
    },
    {
      skillName: "sql",
      title: "SQL Intermediate",
      description: "Practice intermediate SQL logic, joins, grouping, and query reading.",
      difficulty: "INTERMEDIATE" as const,
      timeLimitSecs: 2700,
      passThreshold: 75,
      questions: [
        { question: "Which SQL clause filters rows after grouping?", options: ["WHERE", "HAVING", "GROUP BY", "ORDER BY"], correctIndex: 1, explanation: "HAVING filters groups after aggregation." },
        { question: "What does INNER JOIN return?", options: ["All rows from both tables", "Only matching rows", "Rows from left table", "Rows from right table"], correctIndex: 1, explanation: "INNER JOIN returns rows that match in both tables." },
        { question: "How do you select distinct values?", options: ["SELECT UNIQUE", "SELECT DISTINCT", "SELECT DIFFERENT", "SELECT ONLY"], correctIndex: 1, explanation: "DISTINCT removes duplicate rows from query results." },
        { question: "Which keyword sorts results?", options: ["SORT BY", "ORDER BY", "GROUP BY", "FILTER"], correctIndex: 1, explanation: "ORDER BY sorts query results." },
        { question: "What is the default join type?", options: ["LEFT JOIN", "INNER JOIN", "RIGHT JOIN", "FULL JOIN"], correctIndex: 1, explanation: "INNER JOIN is the default join behavior when a join is implied." },
        { question: "What does COUNT(*) count?", options: ["Non-null values only", "All rows", "Only distinct values", "Columns"], correctIndex: 1, explanation: "COUNT(*) counts all rows, including null values." },
        { question: "How do you add a new column to a table?", options: ["ADD COLUMN", "ALTER TABLE ... ADD", "CREATE COLUMN", "MODIFY TABLE"], correctIndex: 1, explanation: "ALTER TABLE ... ADD adds a new column." },
        { question: "Which SQL statement updates existing rows?", options: ["INSERT", "UPDATE", "MODIFY", "REPLACE"], correctIndex: 1, explanation: "UPDATE changes values in existing rows." },
        { question: "What does GROUP BY do?", options: ["Filters rows", "Aggregates rows by key", "Sorts rows", "Joins tables"], correctIndex: 1, explanation: "GROUP BY groups rows using one or more columns." },
        { question: "Which function returns the maximum value?", options: ["MIN()", "MAX()", "AVG()", "SUM()"], correctIndex: 1, explanation: "MAX returns the largest value in a column." },
        { question: "What is a correlated subquery?", options: ["Subquery with aggregation", "Subquery that references outer query columns", "Subquery in a UNION", "Subquery in a view"], correctIndex: 1, explanation: "Correlated subqueries depend on values from the outer query." },
        { question: "How do you remove duplicate rows from results?", options: ["USE DISTINCT", "USE UNIQUE", "USE CLEAN", "USE DIFFERENT"], correctIndex: 0, explanation: "DISTINCT removes duplicates." },
        { question: "Which operator combines results of two SELECT statements?", options: ["JOIN", "UNION", "MERGE", "INTERSECT"], correctIndex: 1, explanation: "UNION combines results from multiple SELECT queries." },
        { question: "What does LEFT JOIN preserve?", options: ["Only matching rows", "All rows from left table", "All rows from right table", "No rows"], correctIndex: 1, explanation: "LEFT JOIN preserves all rows from the left table." },
        { question: "How do you rename a column in the query output?", options: ["AS", "ALIAS", "RENAME", "LABEL"], correctIndex: 0, explanation: "AS assigns an alias to a column." },
        { question: "Query exercise: Which value appears when using COUNT(DISTINCT city) on cities [Delhi, Delhi, Mumbai]?", options: ["1", "2", "3", "Error"], correctIndex: 1, explanation: "DISTINCT counts unique cities only." },
        { question: "Query exercise: If orders table has 5 rows and status = 'done' matches 2 rows, what does SELECT COUNT(*) FROM orders WHERE status = 'done' return?", options: ["0", "2", "3", "5"], correctIndex: 1, explanation: "COUNT(*) returns the number of rows matching the WHERE clause." },
        { question: "Query exercise: What is the result of SELECT COALESCE(NULL, 'X', 'Y')?", options: ["NULL", "X", "Y", "Error"], correctIndex: 1, explanation: "COALESCE returns the first non-null value." },
        { question: "What does the LIKE operator do?", options: ["Performs arithmetic", "Searches text patterns", "Joins tables", "Groups rows"], correctIndex: 1, explanation: "LIKE checks strings against a pattern." },
      ],
    },
    {
      skillName: "typescript",
      title: "TypeScript Intermediate",
      description: "Check your TypeScript skills with typing, interfaces, and generics.",
      difficulty: "INTERMEDIATE" as const,
      timeLimitSecs: 1800,
      passThreshold: 75,
      questions: [
        { question: "What keyword declares an interface?", options: ["type", "interface", "class", "struct"], correctIndex: 1, explanation: "interface declares a type contract in TypeScript." },
        { question: "Which type allows any value?", options: ["unknown", "any", "never", "object"], correctIndex: 1, explanation: "any disables type checking for that variable." },
        { question: "What does readonly do?", options: ["Makes variable constant", "Prevents property reassignment", "Allows mutations", "Removes type checks"], correctIndex: 1, explanation: "readonly prevents assignment to a property after creation." },
        { question: "How do you declare a generic function?", options: ["function id<T>(value: T): T", "function <T> id(value): T", "generic function id<T>(value)", "function id(value: T)"], correctIndex: 0, explanation: "Generics declare parameterized types using <T>." },
        { question: "What is the difference between type and interface?", options: ["type can alias primitives", "interface cannot extend", "type is runtime only", "interface is deprecated"], correctIndex: 0, explanation: "type aliases can describe primitives, unions, and tuples." },
        { question: "What does the never type represent?", options: ["No possible value", "Any value", "Null or undefined", "Strings only"], correctIndex: 0, explanation: "never indicates code paths that never return normally." },
        { question: "Which syntax makes a property optional?", options: ["name?", "?name", "optional name", "name*"], correctIndex: 0, explanation: "The ? marker makes a property optional." },
        { question: "Which type checks are erased at runtime?", options: ["TypeScript types", "JavaScript values", "Enums", "Classes"], correctIndex: 0, explanation: "TypeScript types are compile-time only." },
        { question: "What does union type string | number mean?", options: ["Either string or number", "Both string and number", "Only string", "Only number"], correctIndex: 0, explanation: "Union types allow one of multiple types." },
        { question: "Which keyword narrows types with control flow?", options: ["typeof", "instanceof", "in", "All of the above"], correctIndex: 3, explanation: "typeof, instanceof, and in can all narrow types." },
        { question: "What is the return type of a function with no return?", options: ["void", "undefined", "never", "null"], correctIndex: 0, explanation: "Functions without a return are typed as void." },
        { question: "How do you define a tuple type?", options: ["[string, number]", "(string, number)", "tuple<string, number>", "{string, number}"], correctIndex: 0, explanation: "Tuple types use square brackets with fixed element types." },
        { question: "Which utility type makes all props optional?", options: ["Partial<T>", "Required<T>", "Readonly<T>", "Pick<T>"], correctIndex: 0, explanation: "Partial makes every property optional." },
        { question: "What is a type guard?", options: ["A runtime function that narrows types", "A CSS helper", "A generic constraint", "A type alias"], correctIndex: 0, explanation: "Type guards narrow union types at runtime." },
        { question: "Which type describes any object?", options: ["object", "Object", "any", "unknown"], correctIndex: 0, explanation: "The object type describes non-primitive objects." },
        { question: "What does keyof T return?", options: ["Union of property names", "The number of keys", "A mapped type", "A tuple"], correctIndex: 0, explanation: "keyof returns a union of an object's property names." },
        { question: "What does typeof x === 'string' do in TypeScript?", options: ["Narrow x to string", "Define a new type", "Create a string", "Throw an error"], correctIndex: 0, explanation: "typeof checks runtime type and narrows the variable." },
        { question: "How do you extend an interface?", options: ["interface A extends B", "interface A implements B", "type A = B", "interface A uses B"], correctIndex: 0, explanation: "extends adds properties from another interface." },
        { question: "Which type represents a function that never returns?", options: ["never", "void", "undefined", "null"], correctIndex: 0, explanation: "never is used for functions that do not return." },
        { question: "What is the output type of Promise<string>?", options: ["string", "Promise<string>", "any", "unknown"], correctIndex: 1, explanation: "Promise<string> represents a promise that resolves to a string." },
      ],
    },
  ];

  let testCount = 0;
  for (const t of tests) {
    const existing = await prisma.skillTest.findFirst({
      where: { skillName: t.skillName, difficulty: t.difficulty },
    });
    if (!existing) {
      const { questions, ...testData } = t;
      const test = await prisma.skillTest.create({ data: testData });
      for (let i = 0; i < questions.length; i++) {
        await prisma.skillTestQuestion.create({
          data: {
            testId: test.id,
            question: questions[i].question,
            options: questions[i].options,
            correctIndex: questions[i].correctIndex,
            explanation: questions[i].explanation,
            orderIndex: i,
          },
        });
      }
      testCount++;
    }
  }
  log("Skill Tests (with questions)", testCount);
}

// ─── 7. Hackathons ───────────────────────────────────────────────────
async function seedHackathons() {
  const hackathons = [
    { name: "HackIndia 2026", organizer: "HackIndia Foundation", description: "India's largest student hackathon with 10,000+ participants building solutions for social impact.", prizePool: "₹10,00,000", startDate: "2026-06-15", endDate: "2026-06-17", location: "Bangalore, India", locationType: "In-Person", tags: ["AI", "Web3", "Social Impact"], tracks: ["Healthcare", "Education", "Sustainability"], eligibility: "Open to all college students", status: "upcoming", ecosystem: "General", highlights: ["10,000+ participants", "50+ sponsors", "Mentorship from industry leaders"] },
    { name: "DevHacks Global", organizer: "DevHacks Community", description: "A 48-hour online hackathon focused on developer tools and open source.", prizePool: "$25,000", startDate: "2026-07-20", endDate: "2026-07-22", location: "Online", locationType: "Virtual", tags: ["DevTools", "Open Source", "API"], tracks: ["Developer Experience", "AI/ML Tools", "Infrastructure"], eligibility: "Open to all developers", status: "upcoming", ecosystem: "Open Source", highlights: ["Global participation", "Open source focus"] },
    { name: "FinHack 2026", organizer: "FinTech Association of India", description: "Build next-gen fintech solutions for digital payments, lending, and insurance.", prizePool: "₹5,00,000", startDate: "2026-05-01", endDate: "2026-05-03", location: "Mumbai, India", locationType: "Hybrid", tags: ["Fintech", "Blockchain", "Payments"], tracks: ["Digital Lending", "InsurTech", "Payments"], eligibility: "Students and early-career professionals", status: "upcoming", ecosystem: "Fintech", highlights: ["Banking APIs access", "Mentors from top fintechs"] },
    { name: "AI Builder Sprint", organizer: "AI Builders Club", description: "Weekend sprint to prototype AI-powered applications using LLMs and vision models.", prizePool: "$10,000", startDate: "2026-08-10", endDate: "2026-08-11", location: "Online", locationType: "Virtual", tags: ["AI", "LLM", "Computer Vision"], tracks: ["Generative AI", "AI Agents", "Multimodal"], eligibility: "Open to all", status: "upcoming", ecosystem: "AI/ML", highlights: ["Free API credits", "Demo day with VCs"] },
    { name: "GreenCode Hack", organizer: "Climate Tech Network", description: "Hackathon for building climate-tech and sustainability solutions.", prizePool: "₹3,00,000", startDate: "2026-09-05", endDate: "2026-09-07", location: "Delhi, India", locationType: "In-Person", tags: ["CleanTech", "IoT", "Sustainability"], tracks: ["Carbon Tracking", "Renewable Energy", "Waste Management"], eligibility: "College students across India", status: "upcoming", ecosystem: "Climate", highlights: ["Partnership with UNDP", "Incubation opportunities"] },
  ];

  let count = 0;
  for (const h of hackathons) {
    const existing = await prisma.hackathon.findFirst({ where: { name: h.name } });
    if (!existing) {
      await prisma.hackathon.create({ data: h });
      count++;
    }
  }
  log("Hackathons", count);
}

// ─── 8. Open Source Repos ─────────────────────────────────────────────
async function seedOpensourceRepos() {
  const repos = [
    { name: "react", owner: "facebook", description: "The library for web and native user interfaces.", language: "JavaScript", techStack: ["React", "JSX", "Fiber"], difficulty: "ADVANCED" as const, domain: "WEB" as const, stars: 220000, forks: 45000, openIssues: 900, url: "https://github.com/facebook/react", tags: ["frontend", "ui", "library"] },
    { name: "next.js", owner: "vercel", description: "The React Framework for the Web.", language: "TypeScript", techStack: ["React", "Node.js", "Webpack"], difficulty: "INTERMEDIATE" as const, domain: "WEB" as const, stars: 120000, forks: 26000, openIssues: 2500, url: "https://github.com/vercel/next.js", tags: ["framework", "ssr", "fullstack"] },
    { name: "langchain", owner: "langchain-ai", description: "Build context-aware reasoning applications with LLMs.", language: "Python", techStack: ["Python", "LLM", "RAG"], difficulty: "INTERMEDIATE" as const, domain: "AI" as const, stars: 90000, forks: 14000, openIssues: 1200, url: "https://github.com/langchain-ai/langchain", tags: ["ai", "llm", "agents"] },
    { name: "kubernetes", owner: "kubernetes", description: "Production-Grade Container Orchestration.", language: "Go", techStack: ["Go", "Docker", "etcd"], difficulty: "ADVANCED" as const, domain: "DEVOPS" as const, stars: 108000, forks: 39000, openIssues: 2000, url: "https://github.com/kubernetes/kubernetes", tags: ["containers", "orchestration", "cloud-native"] },
    { name: "flutter", owner: "flutter", description: "Google's UI toolkit for building natively compiled applications.", language: "Dart", techStack: ["Dart", "Skia", "C++"], difficulty: "INTERMEDIATE" as const, domain: "MOBILE" as const, stars: 163000, forks: 27000, openIssues: 12000, url: "https://github.com/flutter/flutter", tags: ["mobile", "cross-platform", "ui"] },
    { name: "prisma", owner: "prisma", description: "Next-generation ORM for Node.js and TypeScript.", language: "TypeScript", techStack: ["TypeScript", "Rust", "PostgreSQL"], difficulty: "BEGINNER" as const, domain: "WEB" as const, stars: 39000, forks: 1500, openIssues: 3000, url: "https://github.com/prisma/prisma", tags: ["orm", "database", "typescript"] },
    { name: "scikit-learn", owner: "scikit-learn", description: "Machine learning in Python.", language: "Python", techStack: ["Python", "NumPy", "Cython"], difficulty: "INTERMEDIATE" as const, domain: "AI" as const, stars: 59000, forks: 25000, openIssues: 2300, url: "https://github.com/scikit-learn/scikit-learn", tags: ["ml", "data-science", "python"] },
    { name: "pandas", owner: "pandas-dev", description: "Flexible and powerful data analysis / manipulation library for Python.", language: "Python", techStack: ["Python", "Cython", "NumPy"], difficulty: "INTERMEDIATE" as const, domain: "DATA" as const, stars: 40000, forks: 16000, openIssues: 3000, url: "https://github.com/pandas-dev/pandas", tags: ["data-analysis", "pandas", "python"] },
  ];

  let count = 0;
  for (const r of repos) {
    const existing = await prisma.opensourceRepo.findFirst({
      where: { owner: r.owner, name: r.name },
    });
    if (!existing) {
      await prisma.opensourceRepo.create({ data: r });
      count++;
    }
  }
  log("Open Source Repos", count);
}

// ─── 9. Government Internships ────────────────────────────────────────
async function seedGovInternships() {
  const internships = [
    { name: "ISRO Space Science Internship", category: "Research", timeline: "May - July (10 weeks)", organizer: "ISRO", domain: "Space Science & Engineering", stipend: "₹10,000/month", eligibility: "B.Tech/M.Tech students in relevant branches", reality: "Hands-on research experience at ISRO centres. Competitive selection.", applyUrl: "https://www.isro.gov.in/InternshipAndProjects.html" },
    { name: "DRDO Summer Internship", category: "Research", timeline: "June - August (8 weeks)", organizer: "DRDO", domain: "Defence Technology", stipend: "₹10,000-15,000/month", eligibility: "Engineering students with 7.0+ CGPA", reality: "Lab-based research in defence technologies. NDAs required.", applyUrl: "https://drdo.gov.in/drdo/en/search/node?keys=Internship" },
    { name: "NITI Aayog Internship", category: "Policy", timeline: "Rolling (6-8 weeks)", organizer: "NITI Aayog", domain: "Public Policy & Economics", stipend: "Unpaid", eligibility: "Graduate/Postgraduate students", reality: "Policy research and report writing. Certificate provided.", applyUrl: "https://niti.gov.in/internship" },
    { name: "Indian Academy of Sciences (IASc) SRFP", category: "Research", timeline: "May - July (8 weeks)", organizer: "Indian Academy of Sciences", domain: "Science & Engineering", stipend: "₹5,000/month + travel", eligibility: "2nd/3rd year B.Sc/B.E students", reality: "Research under top faculty at premier institutions.", applyUrl: "https://www.ias.ac.in" },
    { name: "SEBI Legal Internship", category: "Legal", timeline: "Rolling (4 weeks)", organizer: "SEBI", domain: "Securities & Finance Law", stipend: "Unpaid (certificate provided)", eligibility: "Law students (3rd year onwards)", reality: "Exposure to securities regulation. Limited seats.", applyUrl: "https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doLegalIntership2022=yes" },
    { name: "Ministry of Electronics and IT (MeitY)", category: "Technology", timeline: "Summer (8 weeks)", organizer: "MeitY", domain: "Digital Governance & IT", stipend: "₹10,000/month", eligibility: "B.Tech/MCA students", reality: "Work on e-governance projects and digital India initiatives.", applyUrl: "https://intern.meity.gov.in" },
  ];

  let count = 0;
  for (const i of internships) {
    const existing = await prisma.govInternship.findFirst({ where: { name: i.name } });
    if (!existing) {
      await prisma.govInternship.create({ data: i });
      count++;
    }
  }
  log("Government Internships", count);
}

// ─── 10. Jobs ─────────────────────────────────────────────────────────
async function seedJobs() {
  const recruiter = await prisma.user.findFirst({ where: { role: "RECRUITER" } });
  if (!recruiter) {
    console.log("  ⚠ Skipping jobs, no recruiter user found");
    return;
  }

  const jobs = [
    {
      title: "Frontend Developer Intern",
      description: "Join TechCorp's frontend team and work on real-world React applications. You'll build responsive UIs, collaborate with designers, and ship features to thousands of users.\n\nResponsibilities:\n- Build and maintain React components\n- Implement designs from Figma mockups\n- Write unit tests and participate in code reviews\n\nRequirements:\n- Proficiency in React and TypeScript\n- Familiarity with TailwindCSS or any CSS framework\n- Understanding of REST APIs",
      location: "Bangalore, India",
      salary: "₹20,000 – ₹25,000/month",
      company: "TechCorp India",
      status: JobStatus.PUBLISHED,
      tags: ["React", "TypeScript", "Frontend", "Internship"],
      deadline: new Date("2026-07-31"),
      recruiterId: recruiter.id,
    },
    {
      title: "Backend Engineer (Node.js)",
      description: "DataWave Analytics is looking for a backend engineer to build scalable APIs and data pipelines.\n\nResponsibilities:\n- Design and implement RESTful APIs with Express/Node.js\n- Optimize PostgreSQL queries and database schemas\n- Integrate third-party APIs and manage background jobs\n\nRequirements:\n- 0–2 years experience with Node.js\n- Good understanding of SQL databases\n- Experience with Docker is a plus",
      location: "Hyderabad, India",
      salary: "₹6 – ₹10 LPA",
      company: "DataWave Analytics",
      status: JobStatus.PUBLISHED,
      tags: ["Node.js", "PostgreSQL", "Backend", "API"],
      deadline: new Date("2026-08-15"),
      recruiterId: recruiter.id,
    },
    {
      title: "Full Stack Developer",
      description: "CloudNine Solutions is hiring a full-stack developer to work on their next-gen SaaS product.\n\nResponsibilities:\n- Build end-to-end features across React frontend and Express backend\n- Manage infrastructure on AWS (S3, EC2, Lambda)\n- Participate in sprint planning and technical design discussions\n\nRequirements:\n- Strong React + Node.js skills\n- Familiarity with cloud services (AWS/GCP/Azure)\n- Experience with CI/CD pipelines",
      location: "Pune, India",
      salary: "₹8 – ₹14 LPA",
      company: "CloudNine Solutions",
      status: JobStatus.PUBLISHED,
      tags: ["React", "Node.js", "AWS", "Full Stack"],
      deadline: new Date("2026-08-30"),
      recruiterId: recruiter.id,
    },
    {
      title: "Data Science Intern",
      description: "Work on cutting-edge machine learning models at DataWave Analytics.\n\nResponsibilities:\n- Explore and clean large datasets\n- Build and evaluate ML models using scikit-learn and TensorFlow\n- Present findings to the product team\n\nRequirements:\n- Strong Python skills\n- Knowledge of pandas, numpy, and ML basics\n- Statistics fundamentals",
      location: "Remote",
      salary: "₹15,000 – ₹20,000/month",
      company: "DataWave Analytics",
      status: JobStatus.PUBLISHED,
      tags: ["Python", "Machine Learning", "Data Science", "Internship"],
      deadline: new Date("2026-07-15"),
      recruiterId: recruiter.id,
    },
    {
      title: "DevOps Engineer",
      description: "CyberShield Security needs a DevOps engineer to own their cloud infrastructure and CI/CD pipelines.\n\nResponsibilities:\n- Maintain and scale Kubernetes clusters on AWS EKS\n- Automate deployments with Terraform and GitHub Actions\n- Monitor system health and set up alerting\n\nRequirements:\n- Experience with Docker and Kubernetes\n- Familiarity with Terraform or similar IaC tools\n- Linux administration skills",
      location: "Delhi, India",
      salary: "₹10 – ₹16 LPA",
      company: "CyberShield Security",
      status: JobStatus.PUBLISHED,
      tags: ["DevOps", "Kubernetes", "AWS", "Terraform"],
      deadline: new Date("2026-09-01"),
      recruiterId: recruiter.id,
    },
    {
      title: "Android Developer",
      description: "Build EduTech Pro's mobile learning app used by 100,000+ students across India.\n\nResponsibilities:\n- Develop features in Kotlin for Android\n- Integrate REST APIs and handle offline caching\n- Optimize app performance and battery usage\n\nRequirements:\n- Kotlin proficiency\n- Experience with Jetpack Compose or XML layouts\n- Understanding of MVVM architecture",
      location: "Bangalore, India",
      salary: "₹7 – ₹12 LPA",
      company: "EduTech Pro",
      status: JobStatus.PUBLISHED,
      tags: ["Android", "Kotlin", "Mobile", "Jetpack Compose"],
      deadline: new Date("2026-08-20"),
      recruiterId: recruiter.id,
    },
    {
      title: "Product Manager Intern",
      description: "FinEdge Technologies is looking for a PM intern to help shape the roadmap for their digital banking product.\n\nResponsibilities:\n- Conduct user research and competitive analysis\n- Write product requirements documents (PRDs)\n- Work closely with engineering and design teams\n\nRequirements:\n- Strong analytical and communication skills\n- Familiarity with fintech or consumer apps\n- Prior internship in product or business roles is a plus",
      location: "Mumbai, India",
      salary: "₹25,000 – ₹30,000/month",
      company: "FinEdge Technologies",
      status: JobStatus.PUBLISHED,
      tags: ["Product Management", "Fintech", "Internship", "Business"],
      deadline: new Date("2026-07-20"),
      recruiterId: recruiter.id,
    },
    {
      title: "UI/UX Designer",
      description: "HealthBridge Systems needs a designer to craft intuitive experiences for their telemedicine platform.\n\nResponsibilities:\n- Create wireframes, prototypes, and high-fidelity designs in Figma\n- Conduct usability testing and incorporate feedback\n- Maintain the design system and component library\n\nRequirements:\n- Proficiency in Figma\n- Portfolio demonstrating UI/UX work\n- Understanding of accessibility standards (WCAG)",
      location: "Noida, India",
      salary: "₹6 – ₹10 LPA",
      company: "HealthBridge Systems",
      status: JobStatus.PUBLISHED,
      tags: ["UI/UX", "Figma", "Design", "Healthcare"],
      deadline: new Date("2026-08-10"),
      recruiterId: recruiter.id,
    },
    {
      title: "Machine Learning Engineer",
      description: "Build and deploy production ML systems at DataWave Analytics.\n\nResponsibilities:\n- Train, evaluate, and deploy ML models at scale\n- Build data pipelines with Apache Spark\n- Collaborate with data scientists to productionize models\n\nRequirements:\n- Strong Python and ML fundamentals\n- Experience with TensorFlow or PyTorch\n- Familiarity with MLOps tools (MLflow, Kubeflow)",
      location: "Hyderabad, India",
      salary: "₹12 – ₹20 LPA",
      company: "DataWave Analytics",
      status: JobStatus.PUBLISHED,
      tags: ["Python", "Machine Learning", "MLOps", "TensorFlow"],
      deadline: new Date("2026-09-15"),
      recruiterId: recruiter.id,
    },
    {
      title: "Security Analyst Intern",
      description: "Get hands-on experience in cybersecurity at CyberShield Security.\n\nResponsibilities:\n- Assist with vulnerability assessments and penetration testing\n- Monitor security alerts and investigate incidents\n- Document security findings and remediation steps\n\nRequirements:\n- Basic knowledge of networking (TCP/IP, DNS, HTTP)\n- Familiarity with OWASP Top 10\n- Interest in ethical hacking and security tools",
      location: "Delhi, India",
      salary: "₹18,000 – ₹22,000/month",
      company: "CyberShield Security",
      status: JobStatus.PUBLISHED,
      tags: ["Cybersecurity", "Penetration Testing", "Internship", "Security"],
      deadline: new Date("2026-07-25"),
      recruiterId: recruiter.id,
    },
  ];

  let count = 0;
  for (const j of jobs) {
    const existing = await prisma.job.findFirst({
      where: { title: j.title, company: j.company },
    });
    if (!existing) {
      await prisma.job.create({ data: j });
      count++;
    }
  }
  log("Jobs", count);
}

// ─── 12. Funding Signals ──────────────────────────────────────────────
async function seedFundingSignals() {
  const signals = [
    {
      companyName: "Sarvam AI",
      companyWebsite: "https://www.sarvam.ai",
      fundingRound: "Series A",
      fundingAmount: "$41M",
      amountUsd: BigInt(41_000_000),
      announcedAt: new Date("2026-04-10"),
      hqLocation: "Bangalore, India",
      industry: "Artificial Intelligence",
      description: "Sarvam AI raised $41M to build large language models for Indian languages, enabling AI applications across Hindi, Tamil, Telugu, and other regional languages.",
      sourceUrl: "https://techcrunch.com/2026/04/10/sarvam-ai-series-a",
      source: "techcrunch",
      sourceId: "sarvam-ai-series-a-2026",
      investors: ["Peak XV Partners", "Lightspeed Venture Partners", "Microsoft"],
      tags: ["AI", "NLP", "India", "Language Models"],
      careersUrl: "https://www.sarvam.ai/careers",
      hiringSignal: true,
      status: "ACTIVE" as const,
    },
    {
      companyName: "Krutrim",
      companyWebsite: "https://www.krutrim.com",
      fundingRound: "Series B",
      fundingAmount: "$120M",
      amountUsd: BigInt(120_000_000),
      announcedAt: new Date("2026-03-22"),
      hqLocation: "Bangalore, India",
      industry: "Artificial Intelligence",
      description: "Ola's AI venture Krutrim secured $120M to accelerate development of India-focused AI infrastructure and cloud services.",
      sourceUrl: "https://economictimes.indiatimes.com/krutrim-series-b",
      source: "economic-times",
      sourceId: "krutrim-series-b-2026",
      investors: ["Tiger Global", "Matrix Partners India"],
      tags: ["AI", "Cloud", "Infrastructure", "India"],
      careersUrl: "https://www.krutrim.com/careers",
      hiringSignal: true,
      status: "ACTIVE" as const,
    },
    {
      companyName: "Perfios",
      companyWebsite: "https://www.perfios.com",
      fundingRound: "Pre-IPO",
      fundingAmount: "$80M",
      amountUsd: BigInt(80_000_000),
      announcedAt: new Date("2026-03-05"),
      hqLocation: "Bangalore, India",
      industry: "Fintech",
      description: "Perfios, a B2B fintech SaaS company, raised $80M in a pre-IPO round to expand its financial data analytics platform to Southeast Asia and the Middle East.",
      sourceUrl: "https://inc42.com/perfios-pre-ipo",
      source: "inc42",
      sourceId: "perfios-pre-ipo-2026",
      investors: ["Warburg Pincus", "Teachers' Venture Growth"],
      tags: ["Fintech", "SaaS", "B2B", "Financial Data"],
      careersUrl: "https://www.perfios.com/careers",
      hiringSignal: true,
      status: "ACTIVE" as const,
    },
    {
      companyName: "Navi Technologies",
      companyWebsite: "https://navi.com",
      fundingRound: "Debt Round",
      fundingAmount: "₹500 Cr",
      amountUsd: BigInt(60_000_000),
      announcedAt: new Date("2026-02-18"),
      hqLocation: "Bangalore, India",
      industry: "Fintech",
      description: "Navi Technologies raised ₹500 crore in a debt round to grow its insurance and lending products across Tier 2 and Tier 3 Indian cities.",
      sourceUrl: "https://entrackr.com/navi-technologies-debt-2026",
      source: "entrackr",
      sourceId: "navi-technologies-debt-2026",
      investors: ["Navi Internal", "Debt Syndicate"],
      tags: ["Fintech", "Insurance", "Lending", "India"],
      careersUrl: "https://navi.com/careers",
      hiringSignal: false,
      status: "ACTIVE" as const,
    },
    {
      companyName: "Unacademy",
      companyWebsite: "https://unacademy.com",
      fundingRound: "Series F",
      fundingAmount: "$50M",
      amountUsd: BigInt(50_000_000),
      announcedAt: new Date("2026-01-30"),
      hqLocation: "Bangalore, India",
      industry: "EdTech",
      description: "Unacademy raised $50M to expand its offline centres and invest in AI-powered personalised learning for competitive exam preparation.",
      sourceUrl: "https://techcrunch.com/2026/01/30/unacademy-series-f",
      source: "techcrunch",
      sourceId: "unacademy-series-f-2026",
      investors: ["General Atlantic", "Tiger Global", "SoftBank"],
      tags: ["EdTech", "AI", "Education", "India"],
      careersUrl: "https://unacademy.com/careers",
      hiringSignal: true,
      status: "ACTIVE" as const,
    },
    {
      companyName: "Zetwerk",
      companyWebsite: "https://www.zetwerk.com",
      fundingRound: "Series G",
      fundingAmount: "$210M",
      amountUsd: BigInt(210_000_000),
      announcedAt: new Date("2026-01-15"),
      hqLocation: "Bangalore, India",
      industry: "Manufacturing / B2B",
      description: "Zetwerk, the B2B manufacturing marketplace, raised $210M to expand global supply chain capabilities and grow its US and Southeast Asia operations.",
      sourceUrl: "https://inc42.com/zetwerk-series-g",
      source: "inc42",
      sourceId: "zetwerk-series-g-2026",
      investors: ["Greenoaks Capital", "D1 Capital Partners", "Sequoia India"],
      tags: ["Manufacturing", "B2B", "Supply Chain", "Global"],
      careersUrl: "https://www.zetwerk.com/careers",
      hiringSignal: true,
      status: "ACTIVE" as const,
    },
    {
      companyName: "InVideo",
      companyWebsite: "https://invideo.io",
      fundingRound: "Series C",
      fundingAmount: "$35M",
      amountUsd: BigInt(35_000_000),
      announcedAt: new Date("2026-04-02"),
      hqLocation: "Mumbai, India",
      industry: "AI / Creative Tools",
      description: "InVideo raised $35M to scale its AI-powered video creation platform used by over 25 million creators and businesses worldwide.",
      sourceUrl: "https://techcrunch.com/2026/04/02/invideo-series-c",
      source: "techcrunch",
      sourceId: "invideo-series-c-2026",
      investors: ["Tiger Global", "Sequoia India", "RTP Global"],
      tags: ["AI", "Video", "Creator Tools", "SaaS"],
      careersUrl: "https://invideo.io/careers",
      hiringSignal: true,
      status: "ACTIVE" as const,
    },
    {
      companyName: "Rapido",
      companyWebsite: "https://rapido.bike",
      fundingRound: "Series E",
      fundingAmount: "$200M",
      amountUsd: BigInt(200_000_000),
      announcedAt: new Date("2026-03-12"),
      hqLocation: "Bangalore, India",
      industry: "Mobility / Logistics",
      description: "Rapido raised $200M to expand its bike taxi and auto-rickshaw platform to 100+ new cities and double down on its logistics offering.",
      sourceUrl: "https://entrackr.com/rapido-series-e-2026",
      source: "entrackr",
      sourceId: "rapido-series-e-2026",
      investors: ["Swiggy", "WestBridge Capital", "Shell Ventures"],
      tags: ["Mobility", "Logistics", "Gig Economy", "India"],
      careersUrl: "https://rapido.bike/careers",
      hiringSignal: true,
      status: "ACTIVE" as const,
    },
    {
      companyName: "Healthians",
      companyWebsite: "https://www.healthians.com",
      fundingRound: "Series D",
      fundingAmount: "$65M",
      amountUsd: BigInt(65_000_000),
      announcedAt: new Date("2026-02-05"),
      hqLocation: "Gurugram, India",
      industry: "HealthTech",
      description: "Healthians raised $65M to expand its at-home diagnostics and preventive health platform to 500 cities across India.",
      sourceUrl: "https://inc42.com/healthians-series-d",
      source: "inc42",
      sourceId: "healthians-series-d-2026",
      investors: ["IIFL AMC", "Assets Care & Reconstruction Enterprise", "Qualcomm Ventures"],
      tags: ["HealthTech", "Diagnostics", "D2C", "India"],
      careersUrl: "https://www.healthians.com/careers",
      hiringSignal: true,
      status: "ACTIVE" as const,
    },
    {
      companyName: "Lemnisk",
      companyWebsite: "https://www.lemnisk.co",
      fundingRound: "Series B",
      fundingAmount: "$15M",
      amountUsd: BigInt(15_000_000),
      announcedAt: new Date("2026-04-18"),
      hqLocation: "Bangalore, India",
      industry: "MarTech / AI",
      description: "Lemnisk raised $15M to grow its AI-driven customer data platform (CDP) serving banks, insurance companies, and large enterprises across Asia.",
      sourceUrl: "https://yourstory.com/lemnisk-series-b-2026",
      source: "yourstory",
      sourceId: "lemnisk-series-b-2026",
      investors: ["Chiratae Ventures", "Bharat Innovation Fund"],
      tags: ["MarTech", "AI", "CDP", "Enterprise SaaS"],
      careersUrl: "https://www.lemnisk.co/careers",
      hiringSignal: true,
      status: "ACTIVE" as const,
    },
    {
      companyName: "Supertails",
      companyWebsite: "https://supertails.com",
      fundingRound: "Series B",
      fundingAmount: "$20M",
      amountUsd: BigInt(20_000_000),
      announcedAt: new Date("2026-03-28"),
      hqLocation: "Bangalore, India",
      industry: "D2C / PetTech",
      description: "Supertails raised $20M to expand its omnichannel pet care platform including vet teleconsultations, premium pet food, and pet supplies.",
      sourceUrl: "https://entrackr.com/supertails-series-b-2026",
      source: "entrackr",
      sourceId: "supertails-series-b-2026",
      investors: ["Fireside Ventures", "Saama Capital"],
      tags: ["D2C", "PetCare", "Omnichannel", "HealthTech"],
      careersUrl: "https://supertails.com/careers",
      hiringSignal: false,
      status: "ACTIVE" as const,
    },
    {
      companyName: "Agnikul Cosmos",
      companyWebsite: "https://www.agnikul.in",
      fundingRound: "Series B",
      fundingAmount: "$30M",
      amountUsd: BigInt(30_000_000),
      announcedAt: new Date("2026-04-25"),
      hqLocation: "Chennai, India",
      industry: "Space Tech",
      description: "Agnikul Cosmos raised $30M after successfully launching India's first privately developed semi-cryogenic rocket engine, to build its Agnibaan launch vehicle.",
      sourceUrl: "https://techcrunch.com/2026/04/25/agnikul-series-b",
      source: "techcrunch",
      sourceId: "agnikul-series-b-2026",
      investors: ["pi Ventures", "Mayfield India", "ISRO Startup Fund"],
      tags: ["SpaceTech", "Deep Tech", "Rockets", "India"],
      careersUrl: "https://www.agnikul.in/careers",
      hiringSignal: true,
      status: "ACTIVE" as const,
    },
  ];

  let count = 0;
  for (const s of signals) {
    const existing = await prisma.fundingSignal.findUnique({
      where: { source_sourceId: { source: s.source, sourceId: s.sourceId } },
    });
    if (!existing) {
      await prisma.fundingSignal.create({ data: s });
      count++;
    }
  }
  log("Funding Signals", count);
}

// ─── 13. Interview Experiences ────────────────────────────────────────
async function seedInterviewExperiences() {
  const student = await prisma.user.findFirst({ where: { role: "STUDENT" } });
  if (!student) {
    console.log("  ⚠ Skipping interview experiences, no student user found");
    return;
  }

  const companies = await prisma.company.findMany({ select: { id: true, name: true } });
  const companyMap = Object.fromEntries(companies.map((c) => [c.name, c.id]));

  const experiences = [
    {
      companyName: "Google",
      role: "Software Engineer Intern",
      experienceYears: 0,
      interviewYear: 2026,
      interviewMonth: 2,
      source: "PORTAL" as const,
      difficulty: "HARD" as const,
      outcome: "SELECTED" as const,
      offered: true,
      ctcLpa: 45.0,
      totalRounds: 4,
      overallRating: 5,
      tips: "Focus heavily on DSA — graphs, trees, and dynamic programming. Practice on LeetCode medium/hard. Communicate your thought process clearly.",
      rounds: [
        { name: "Online Assessment", questions: ["2 coding problems: sliding window + graph BFS", "Time: 90 mins"] },
        { name: "Technical Round 1", questions: ["LRU Cache implementation", "Clone a graph with random pointers"] },
        { name: "Technical Round 2", questions: ["Design a rate limiter", "Serialize and deserialize a binary tree"] },
        { name: "Googleyness & Leadership", questions: ["Tell me about a time you disagreed with your team", "How do you prioritize tasks under pressure?"] },
      ],
      prepResources: [
        { title: "LeetCode Top Interview 150", url: "https://leetcode.com/studyplan/top-interview-150/" },
        { title: "System Design Primer", url: "https://github.com/donnemartin/system-design-primer" },
      ],
      status: "APPROVED" as const,
      upvotes: 42,
      views: 380,
    },
    {
      companyName: "Microsoft",
      role: "SDE Intern",
      experienceYears: 0,
      interviewYear: 2026,
      interviewMonth: 1,
      source: "ON_CAMPUS" as const,
      difficulty: "MEDIUM" as const,
      outcome: "SELECTED" as const,
      offered: true,
      ctcLpa: 28.0,
      totalRounds: 3,
      overallRating: 4,
      tips: "Microsoft focuses on OOP, problem solving, and communication. Be very clear about your approach. They value how you think, not just the final answer.",
      rounds: [
        { name: "Coding Round 1", questions: ["Longest Substring Without Repeating Characters", "Find all anagrams in a string"] },
        { name: "Coding Round 2", questions: ["Implement a stack with getMin() in O(1)", "Detect cycle in a linked list"] },
        { name: "HR + Managerial", questions: ["Why Microsoft?", "Describe a challenging project you worked on"] },
      ],
      prepResources: [
        { title: "Cracking the Coding Interview", url: "https://www.crackingthecodinginterview.com/" },
        { title: "GeeksforGeeks Microsoft SDE Sheet", url: "https://www.geeksforgeeks.org/microsoft-sde-sheet/" },
      ],
      status: "APPROVED" as const,
      upvotes: 31,
      views: 240,
    },
    {
      companyName: "Amazon",
      role: "SDE-1",
      experienceYears: 0,
      interviewYear: 2025,
      interviewMonth: 11,
      source: "PORTAL" as const,
      difficulty: "MEDIUM" as const,
      outcome: "SELECTED" as const,
      offered: true,
      ctcLpa: 32.0,
      totalRounds: 4,
      overallRating: 4,
      tips: "Amazon is all about Leadership Principles. Prepare STAR stories for each LP. Coding is standard LeetCode medium. Don't ignore behavioural rounds.",
      rounds: [
        { name: "Online Assessment", questions: ["2 coding problems + work style survey", "Time: 105 mins"] },
        { name: "Technical Round 1", questions: ["Top K frequent elements", "Meeting rooms II"] },
        { name: "Technical Round 2 + LP", questions: ["Design an order management system (LLD)", "Tell me about a time you delivered under a tight deadline"] },
        { name: "Bar Raiser", questions: ["Deep dive into a past project", "Ownership and Dive Deep LP questions"] },
      ],
      prepResources: [
        { title: "Amazon Leadership Principles Guide", url: "https://www.amazon.jobs/content/en/our-workplace/leadership-principles" },
        { title: "NeetCode 150", url: "https://neetcode.io/practice" },
      ],
      status: "APPROVED" as const,
      upvotes: 58,
      views: 510,
    },
    {
      companyName: "Flipkart",
      role: "SDE Intern",
      experienceYears: 0,
      interviewYear: 2026,
      interviewMonth: 3,
      source: "ON_CAMPUS" as const,
      difficulty: "MEDIUM" as const,
      outcome: "SELECTED" as const,
      offered: true,
      ctcLpa: 20.0,
      totalRounds: 3,
      overallRating: 4,
      tips: "Flipkart campus interviews focus on core CS fundamentals — OS, DBMS, networking, along with DSA. Review OOPS thoroughly.",
      rounds: [
        { name: "Online Test", questions: ["MCQs on CS fundamentals", "2 coding questions"] },
        { name: "Technical Interview 1", questions: ["Binary search variations", "Segment trees", "SQL query optimization"] },
        { name: "Technical Interview 2 + HR", questions: ["Low-level design: design a parking lot", "Why Flipkart?"] },
      ],
      prepResources: [
        { title: "InterviewBit Flipkart Prep", url: "https://www.interviewbit.com/flipkart-interview-questions/" },
        { title: "DBMS Notes for Interviews", url: "https://www.geeksforgeeks.org/dbms-interview-questions/" },
      ],
      status: "APPROVED" as const,
      upvotes: 22,
      views: 195,
    },
    {
      companyName: "Adobe",
      role: "MTS Intern",
      experienceYears: 0,
      interviewYear: 2026,
      interviewMonth: 2,
      source: "REFERRAL" as const,
      difficulty: "MEDIUM" as const,
      outcome: "SELECTED" as const,
      offered: true,
      ctcLpa: 18.0,
      totalRounds: 3,
      overallRating: 4,
      tips: "Adobe values product thinking alongside coding. Be ready to discuss how you'd improve their products. Coding is medium-difficulty but they test CS depth.",
      rounds: [
        { name: "Online Assessment", questions: ["String manipulation problem", "Graph connectivity problem"] },
        { name: "Technical Round", questions: ["Implement a custom HashMap", "Merge k sorted arrays", "Virtual functions in C++"] },
        { name: "Hiring Manager Round", questions: ["Project walkthrough", "How would you improve Adobe Photoshop's performance?"] },
      ],
      prepResources: [
        { title: "Adobe SDE Interview Experiences", url: "https://leetcode.com/discuss/interview-experience/?currentPage=1&orderBy=hot&query=adobe" },
        { title: "CS Fundamentals Revision", url: "https://www.geeksforgeeks.org/last-minute-notes-dbms/" },
      ],
      status: "APPROVED" as const,
      upvotes: 17,
      views: 148,
    },
    {
      companyName: "Atlassian",
      role: "Software Engineer",
      experienceYears: 1,
      interviewYear: 2025,
      interviewMonth: 10,
      source: "LINKEDIN" as const,
      difficulty: "HARD" as const,
      outcome: "REJECTED" as const,
      offered: false,
      totalRounds: 4,
      overallRating: 3,
      tips: "Atlassian's process is thorough. The system design round is tough — be ready to go very deep. They also have a culture add round which catches many people off guard.",
      rounds: [
        { name: "Recruiter Screen", questions: ["Background review", "Motivations and availability"] },
        { name: "Coding Round", questions: ["Medium array problem", "Graph cycle detection with weighted edges"] },
        { name: "System Design", questions: ["Design Jira's notification system at scale"] },
        { name: "Values Interview", questions: ["Tell me about a time you had to balance speed vs. quality", "How do you handle conflict within a team?"] },
      ],
      prepResources: [
        { title: "Atlassian Interview Prep", url: "https://www.atlassian.com/company/careers/resources/interviewing" },
        { title: "Grokking System Design", url: "https://www.educative.io/courses/grokking-modern-system-design-interview" },
      ],
      status: "APPROVED" as const,
      upvotes: 29,
      views: 267,
    },
  ];

  let count = 0;
  for (const e of experiences) {
    const existing = await prisma.interviewExperience.findFirst({
      where: {
        companyId: companyMap[e.companyName]!,
        role: e.role,
        userId: student.id,
      },
    });
    if (!existing) {
      await prisma.interviewExperience.create({
        data: {
          role: e.role,
          experienceYears: e.experienceYears,
          interviewYear: e.interviewYear,
          interviewMonth: e.interviewMonth,
          source: e.source,
          difficulty: e.difficulty,
          outcome: e.outcome,
          offered: e.offered,
          ctcLpa: e.ctcLpa,
          totalRounds: e.totalRounds,
          overallRating: e.overallRating,
          tips: e.tips,
          status: e.status,
          upvotes: e.upvotes,
          views: e.views,
          companyId: companyMap[e.companyName]!,
          userId: student.id,
          rounds: e.rounds,
          prepResources: e.prepResources,
        },
      });
      count++;
    }
  }
  log("Interview Experiences", count);
}

// ─── 14. YC Companies ─────────────────────────────────────────────────
async function seedYCCompanies() {
  const companies = [
    {
      ycId: 10001,
      name: "Stripe",
      slug: "stripe",
      oneLiner: "Payment infrastructure for the internet.",
      longDescription: "Stripe is a technology company that builds economic infrastructure for the internet. Businesses of every size — from new startups to public companies — use our software to accept payments and manage their businesses online.",
      batch: "Winter 2010",
      batchShort: "W10",
      status: "Active",
      website: "https://stripe.com",
      allLocations: "San Francisco, CA, USA",
      teamSize: 8000,
      industry: "Fintech",
      subindustry: "Payments",
      tags: ["payments", "api", "fintech", "developer-tools"],
      industries: ["Fintech / Banking"],
      regions: ["United States of America"],
      stage: "Growth",
      isHiring: true,
      topCompany: true,
      ycUrl: "https://www.ycombinator.com/companies/stripe",
      launchedAt: new Date("2010-01-01"),
      founders: [{ name: "Patrick Collison", title: "CEO" }, { name: "John Collison", title: "President" }],
    },
    {
      ycId: 10002,
      name: "Airbnb",
      slug: "airbnb",
      oneLiner: "Book unique homes and experiences all over the world.",
      longDescription: "Airbnb is an online marketplace that connects people who want to rent out their homes with people who are looking for accommodations in that locale.",
      batch: "Winter 2009",
      batchShort: "W09",
      status: "Active",
      website: "https://www.airbnb.com",
      allLocations: "San Francisco, CA, USA",
      teamSize: 6000,
      industry: "Travel",
      subindustry: "Home Sharing",
      tags: ["marketplace", "travel", "hospitality"],
      industries: ["Consumer", "Travel, Leisure and Tourism"],
      regions: ["United States of America"],
      stage: "Public",
      isHiring: true,
      topCompany: true,
      ycUrl: "https://www.ycombinator.com/companies/airbnb",
      launchedAt: new Date("2008-08-01"),
      founders: [{ name: "Brian Chesky", title: "CEO" }, { name: "Joe Gebbia", title: "CPO" }],
    },
    {
      ycId: 10003,
      name: "OpenAI",
      slug: "openai",
      oneLiner: "AI research and deployment company.",
      longDescription: "OpenAI is an AI research and deployment company. Our mission is to ensure that artificial general intelligence benefits all of humanity. We build safe and beneficial AI systems like GPT-4, DALL-E, and ChatGPT.",
      batch: "Winter 2015",
      batchShort: "W15",
      status: "Active",
      website: "https://openai.com",
      allLocations: "San Francisco, CA, USA",
      teamSize: 1500,
      industry: "Artificial Intelligence",
      subindustry: "Large Language Models",
      tags: ["ai", "llm", "gpt", "research"],
      industries: ["B2B", "Artificial Intelligence"],
      regions: ["United States of America"],
      stage: "Growth",
      isHiring: true,
      topCompany: true,
      ycUrl: "https://www.ycombinator.com/companies/openai",
      launchedAt: new Date("2015-12-11"),
      founders: [{ name: "Sam Altman", title: "CEO" }, { name: "Greg Brockman", title: "President" }],
    },
    {
      ycId: 10004,
      name: "Razorpay",
      slug: "razorpay",
      oneLiner: "Payment solutions for businesses in India.",
      longDescription: "Razorpay is a full-stack financial services company in India offering payment gateway, payroll, banking, lending, and more to businesses of all sizes.",
      batch: "Winter 2015",
      batchShort: "W15",
      status: "Active",
      website: "https://razorpay.com",
      allLocations: "Bangalore, KA, India",
      teamSize: 3000,
      industry: "Fintech",
      subindustry: "Payments",
      tags: ["payments", "fintech", "india", "api"],
      industries: ["Fintech / Banking"],
      regions: ["India"],
      stage: "Growth",
      isHiring: true,
      topCompany: true,
      ycUrl: "https://www.ycombinator.com/companies/razorpay",
      launchedAt: new Date("2014-10-01"),
      founders: [{ name: "Harshil Mathur", title: "CEO" }, { name: "Shashank Kumar", title: "CTO" }],
    },
    {
      ycId: 10005,
      name: "Brex",
      slug: "brex",
      oneLiner: "The financial stack for global companies.",
      longDescription: "Brex builds financial software and services for startups and enterprises, including corporate cards, expense management, business accounts, and travel booking.",
      batch: "Winter 2017",
      batchShort: "W17",
      status: "Active",
      website: "https://brex.com",
      allLocations: "San Francisco, CA, USA",
      teamSize: 1200,
      industry: "Fintech",
      subindustry: "Corporate Cards",
      tags: ["fintech", "corporate-cards", "expense-management", "saas"],
      industries: ["Fintech / Banking", "B2B"],
      regions: ["United States of America"],
      stage: "Growth",
      isHiring: true,
      topCompany: false,
      ycUrl: "https://www.ycombinator.com/companies/brex",
      launchedAt: new Date("2017-01-01"),
      founders: [{ name: "Henrique Dubugras", title: "CEO" }, { name: "Pedro Franceschi", title: "CTO" }],
    },
    {
      ycId: 10006,
      name: "GitLab",
      slug: "gitlab",
      oneLiner: "The DevSecOps platform.",
      longDescription: "GitLab is a complete DevSecOps platform built from the ground up as a single application. It provides source code management, CI/CD, security scanning, and more in one interface.",
      batch: "Winter 2015",
      batchShort: "W15",
      status: "Active",
      website: "https://about.gitlab.com",
      allLocations: "Remote",
      teamSize: 2000,
      industry: "Developer Tools",
      subindustry: "DevOps",
      tags: ["devops", "git", "ci-cd", "open-source"],
      industries: ["B2B", "Developer Tools"],
      regions: ["Global"],
      stage: "Public",
      isHiring: true,
      topCompany: true,
      ycUrl: "https://www.ycombinator.com/companies/gitlab",
      launchedAt: new Date("2011-10-08"),
      founders: [{ name: "Sid Sijbrandij", title: "CEO" }, { name: "Dmitriy Zaporozhets", title: "CTO" }],
    },
    {
      ycId: 10007,
      name: "Meesho",
      slug: "meesho",
      oneLiner: "India's most affordable online shopping destination.",
      longDescription: "Meesho is an Indian social commerce platform that enables small businesses and individuals to start their online stores via social media. It's one of India's largest e-commerce platforms serving Tier 2+ cities.",
      batch: "Summer 2016",
      batchShort: "S16",
      status: "Active",
      website: "https://meesho.com",
      allLocations: "Bangalore, KA, India",
      teamSize: 4000,
      industry: "E-Commerce",
      subindustry: "Social Commerce",
      tags: ["ecommerce", "india", "d2c", "social-commerce"],
      industries: ["Consumer", "E-Commerce"],
      regions: ["India"],
      stage: "Growth",
      isHiring: true,
      topCompany: true,
      ycUrl: "https://www.ycombinator.com/companies/meesho",
      launchedAt: new Date("2015-12-01"),
      founders: [{ name: "Vidit Aatrey", title: "CEO" }, { name: "Sanjeev Barnwal", title: "CTO" }],
    },
    {
      ycId: 10008,
      name: "PaperFlite",
      slug: "paperflite",
      oneLiner: "Content management and distribution platform for sales teams.",
      longDescription: "PaperFlite helps sales and marketing teams organize, distribute, and track content. It gives real-time insights on how prospects engage with sales collateral.",
      batch: "Summer 2020",
      batchShort: "S20",
      status: "Active",
      website: "https://www.paperflite.com",
      allLocations: "Chennai, TN, India",
      teamSize: 80,
      industry: "SaaS",
      subindustry: "Sales Enablement",
      tags: ["saas", "sales-enablement", "content-management"],
      industries: ["B2B", "Sales"],
      regions: ["India", "United States of America"],
      stage: "Early",
      isHiring: true,
      topCompany: false,
      ycUrl: "https://www.ycombinator.com/companies/paperflite",
      launchedAt: new Date("2017-01-01"),
      founders: [{ name: "Vinoth Pandi Rajan", title: "CEO" }],
    },
  ];

  let count = 0;
  for (const c of companies) {
    const existing = await prisma.ycCompany.findUnique({ where: { ycId: c.ycId } });
    if (!existing) {
      await prisma.ycCompany.create({ data: c });
      count++;
    }
  }
  log("YC Companies", count);
}

// ─── 15. IIT Professors ───────────────────────────────────────────────
async function seedProfessors() {
  const professors = [
    { collegeName: "IIT Bombay", collegeType: "IIT", department: "Computer Science & Engineering", name: "Prof. Supratik Chakraborty", areaOfInterest: "Formal Methods, SAT Solving, Program Analysis", email: "supratik@cse.iitb.ac.in" },
    { collegeName: "IIT Bombay", collegeType: "IIT", department: "Computer Science & Engineering", name: "Prof. Ganesh Ramakrishnan", areaOfInterest: "Machine Learning, NLP, Information Extraction", email: "ganesh@cse.iitb.ac.in" },
    { collegeName: "IIT Bombay", collegeType: "IIT", department: "Computer Science & Engineering", name: "Prof. Soumen Chakrabarti", areaOfInterest: "Web Mining, Information Retrieval, Knowledge Graphs", email: "soumen@cse.iitb.ac.in" },
    { collegeName: "IIT Delhi", collegeType: "IIT", department: "Computer Science & Engineering", name: "Prof. Naveen Garg", areaOfInterest: "Algorithms, Graph Theory, Approximation Algorithms", email: "naveen@cse.iitd.ac.in" },
    { collegeName: "IIT Delhi", collegeType: "IIT", department: "Computer Science & Engineering", name: "Prof. Subhashis Banerjee", areaOfInterest: "Computer Vision, Robotics, Machine Learning", email: "suban@cse.iitd.ac.in" },
    { collegeName: "IIT Delhi", collegeType: "IIT", department: "Computer Science & Engineering", name: "Prof. Maya Ramanath", areaOfInterest: "Knowledge Graphs, Semantic Web, Databases", email: "maya@cse.iitd.ac.in" },
    { collegeName: "IIT Madras", collegeType: "IIT", department: "Computer Science & Engineering", name: "Prof. Balaraman Ravindran", areaOfInterest: "Reinforcement Learning, Graph Neural Networks, AI", email: "ravi@cse.iitm.ac.in" },
    { collegeName: "IIT Madras", collegeType: "IIT", department: "Computer Science & Engineering", name: "Prof. C. Chandra Sekhar", areaOfInterest: "Pattern Recognition, Speech Processing, Neural Networks", email: "chandra@cse.iitm.ac.in" },
    { collegeName: "IIT Madras", collegeType: "IIT", department: "Computer Science & Engineering", name: "Prof. Mitesh Khapra", areaOfInterest: "Deep Learning, NLP, AI for Indic Languages", email: "miteshk@cse.iitm.ac.in" },
    { collegeName: "IIT Kanpur", collegeType: "IIT", department: "Computer Science & Engineering", name: "Prof. Sandeep Kumar Shukla", areaOfInterest: "Cyber Security, Embedded Systems, Hardware Security", email: "sandeeps@cse.iitk.ac.in" },
    { collegeName: "IIT Kanpur", collegeType: "IIT", department: "Computer Science & Engineering", name: "Prof. Arnab Bhattacharya", areaOfInterest: "Database Systems, Data Mining, Spatial Databases", email: "arnabb@cse.iitk.ac.in" },
    { collegeName: "IIT Kharagpur", collegeType: "IIT", department: "Computer Science & Engineering", name: "Prof. Sudeshna Sarkar", areaOfInterest: "Natural Language Processing, Information Retrieval", email: "sudeshna@cse.iitkgp.ac.in" },
    { collegeName: "IIT Kharagpur", collegeType: "IIT", department: "Computer Science & Engineering", name: "Prof. Pabitra Mitra", areaOfInterest: "Machine Learning, Data Science, Remote Sensing", email: "pabitra@cse.iitkgp.ac.in" },
    { collegeName: "IIT Roorkee", collegeType: "IIT", department: "Computer Science & Engineering", name: "Prof. Partha Pratim Roy", areaOfInterest: "Document Analysis, Computer Vision, Deep Learning", email: "partha.roy@cs.iitr.ac.in" },
    { collegeName: "IIT Roorkee", collegeType: "IIT", department: "Computer Science & Engineering", name: "Prof. Durga Toshniwal", areaOfInterest: "Data Mining, Big Data, IoT", email: "durgatoshniwal@cs.iitr.ac.in" },
    { collegeName: "IIT Hyderabad", collegeType: "IIT", department: "Computer Science & Engineering", name: "Prof. Vineeth N. Balasubramanian", areaOfInterest: "Deep Learning, Explainable AI, Computer Vision", email: "vineethnb@ai.iith.ac.in" },
    { collegeName: "IIT Hyderabad", collegeType: "IIT", department: "Computer Science & Engineering", name: "Prof. Srijith P. K.", areaOfInterest: "Probabilistic Machine Learning, NLP, Bayesian Methods", email: "srijith@cse.iith.ac.in" },
    { collegeName: "IIIT Hyderabad", collegeType: "IIIT", department: "Computer Science & Engineering", name: "Prof. P. J. Narayanan", areaOfInterest: "Computer Vision, Graphics, HPC", email: "pjn@iiit.ac.in" },
    { collegeName: "IIIT Hyderabad", collegeType: "IIIT", department: "Computer Science & Engineering", name: "Prof. Manish Singh", areaOfInterest: "Algorithms, Combinatorics, Complexity Theory", email: "msingh@iiit.ac.in" },
    { collegeName: "IISc Bangalore", collegeType: "IISc", department: "Computer Science & Automation", name: "Prof. V. Vinay", areaOfInterest: "Algorithms, Complexity, Combinatorics", email: null },
    { collegeName: "IISc Bangalore", collegeType: "IISc", department: "Computer Science & Automation", name: "Prof. Chiranjib Bhattacharyya", areaOfInterest: "Machine Learning, Optimization, Kernel Methods", email: "chiru@csa.iisc.ac.in" },
    { collegeName: "IISc Bangalore", collegeType: "IISc", department: "Computer Science & Automation", name: "Prof. Shalabh Bhatnagar", areaOfInterest: "Reinforcement Learning, Stochastic Optimization, AI", email: "shalabh@iisc.ac.in" },
    { collegeName: "NIT Trichy", collegeType: "NIT", department: "Computer Science & Engineering", name: "Prof. N. Krishnan", areaOfInterest: "Image Processing, Computer Vision, Deep Learning", email: "nkrishnan@nitt.edu" },
    { collegeName: "NIT Trichy", collegeType: "NIT", department: "Computer Science & Engineering", name: "Prof. S. P. Victor", areaOfInterest: "Data Mining, Cloud Computing, Big Data", email: "spvictor@nitt.edu" },
    { collegeName: "BITS Pilani", collegeType: "BITS", department: "Computer Science & Information Systems", name: "Prof. Navneet Goyal", areaOfInterest: "Machine Learning, Data Analytics, Bioinformatics", email: "navneet@pilani.bits-pilani.ac.in" },
  ];

  let count = 0;
  for (const p of professors) {
    const existing = await prisma.iitProfessor.findFirst({
      where: { name: p.name, collegeName: p.collegeName },
    });
    if (!existing) {
      await prisma.iitProfessor.create({ data: p });
      count++;
    }
  }
  log("IIT Professors", count);
}

// ─── 12. Blog Posts ───────────────────────────────────────────────────
async function seedBlogPosts() {
  const admin = await prisma.user.findFirst({ where: { role: "ADMIN" } });
  if (!admin) {
    console.log("  ⚠ Skipping blog posts, no admin user found");
    return;
  }

  const posts = [
    { title: "How to Ace Your First Technical Interview", slug: "ace-first-technical-interview", content: "Technical interviews can be daunting, but with the right preparation strategy, you can walk in with confidence. Start by mastering the fundamentals of data structures and algorithms. Practice on LeetCode, focusing on the top 100 problems. During the interview, always think out loud and communicate your approach before coding.", excerpt: "A complete guide to preparing for and succeeding in your first technical interview.", category: "INTERVIEW_TIPS" as const, tags: ["interview", "dsa", "career"], status: "PUBLISHED" as const, readingTime: 8, publishedAt: new Date("2026-03-15") },
    { title: "Top 10 Skills Every Fresher Needs in 2026", slug: "top-skills-freshers-2026", content: "The tech landscape in 2026 demands a diverse skill set. Beyond coding, employers want strong communication, problem-solving abilities, and familiarity with AI tools. Cloud computing (AWS/Azure), full-stack development, and data literacy round out the must-haves for new graduates entering the workforce.", excerpt: "Essential skills that employers are looking for in fresh graduates this year.", category: "CAREER_ADVICE" as const, tags: ["skills", "freshers", "career"], status: "PUBLISHED" as const, readingTime: 6, publishedAt: new Date("2026-03-20") },
    { title: "Writing a Resume That Gets Past ATS Systems", slug: "resume-past-ats-systems", content: "Applicant Tracking Systems scan your resume before any human sees it. Use standard section headers (Education, Experience, Skills), include keywords from the job description, and avoid fancy formatting. Stick to common fonts and PDF format. Quantify your achievements with numbers wherever possible.", excerpt: "Practical tips for crafting an ATS-friendly resume that stands out.", category: "RESUME_TIPS" as const, tags: ["resume", "ats", "job-search"], status: "PUBLISHED" as const, readingTime: 5, publishedAt: new Date("2026-03-25") },
    { title: "Understanding Salary Negotiation for New Grads", slug: "salary-negotiation-new-grads", content: "Many new graduates accept the first offer without negotiating. Research market rates on Glassdoor and Levels.fyi. Consider the total compensation package including stock options, bonuses, and benefits. Practice your negotiation pitch and always get offers in writing.", excerpt: "A beginner-friendly guide to negotiating your first salary package.", category: "SALARY_GUIDE" as const, tags: ["salary", "negotiation", "freshers"], status: "PUBLISHED" as const, readingTime: 7, publishedAt: new Date("2026-04-01") },
    { title: "The Rise of AI in Software Development", slug: "rise-of-ai-software-development", content: "AI is transforming how we write, test, and deploy code. Tools like GitHub Copilot and Claude Code are boosting developer productivity by 30-50%. Understanding how to leverage AI assistants while maintaining code quality and security is becoming a critical skill for modern developers.", excerpt: "How AI tools are reshaping the software development landscape.", category: "TECH_TRENDS" as const, tags: ["ai", "development", "tools"], status: "PUBLISHED" as const, readingTime: 6, publishedAt: new Date("2026-04-03") },
  ];

  let count = 0;
  for (const p of posts) {
    const existing = await prisma.blogPost.findUnique({ where: { slug: p.slug } });
    if (!existing) {
      await prisma.blogPost.create({ data: { ...p, authorId: admin.id } });
      count++;
    }
  }
  log("Blog Posts", count);
}

async function seedGsocOrgs() {
  const orgs = [
    {
      name: "Apache Software Foundation",
      slug: "apache",
      url: "https://apache.org",
      description: "The Apache Software Foundation provides support for the Apache community of open-source software projects.",
      category: "Software Foundation",
      technologies: ["Java", "Python", "C++", "Scala"],
      yearsParticipated: [2021, 2022, 2023, 2024],
      totalProjects: 100,
      projectsData: [
        { year: 2024, title: "Apache Kafka Stream Processing", studentName: "Rahul Sharma" },
        { year: 2024, title: "Apache Flink Optimization", studentName: "Priya Patel" },
        { year: 2023, title: "Apache Spark ML Pipeline", studentName: "Arjun Singh" },
        { year: 2023, title: "Apache Cassandra Driver", studentName: "Sneha Kumar" },
        { year: 2022, title: "Apache Hadoop YARN", studentName: "Vikram Nair" },
        { year: 2021, title: "Apache Beam Runner", studentName: "Ananya Roy" },
      ],
      ideasUrl: "https://community.apache.org/gsoc.html",
      guideUrl: "https://community.apache.org/gsoc/guide.html",
    },
    {
      name: "Python Software Foundation",
      slug: "python",
      url: "https://python.org",
      description: "The Python Software Foundation (PSF) is a non-profit organization devoted to the Python programming language.",
      category: "Programming Languages",
      technologies: ["Python", "C", "Rust"],
      yearsParticipated: [2021, 2022, 2023, 2024],
      totalProjects: 80,
      projectsData: [
        { year: 2024, title: "CPython Memory Profiler", studentName: "Amit Kumar" },
        { year: 2024, title: "PyPI Security Enhancements", studentName: "Sanya Gupta" },
        { year: 2023, title: "Django Async Support", studentName: "Rohan Joshi" },
        { year: 2023, title: "Numpy BLAS Integration", studentName: "Ishita Rao" },
        { year: 2022, title: "Pandas Performance Tuning", studentName: "Karan Singh" },
      ],
      ideasUrl: "https://wiki.python.org/moin/SummerOfCode/2024",
      guideUrl: "https://wiki.python.org/moin/SummerOfCode/ContributorGuide",
    },
  ];

  let count = 0;
  for (const org of orgs) {
    const existing = await prisma.gsocOrganization.findUnique({ where: { slug: org.slug } });
    if (!existing) {
      await prisma.gsocOrganization.create({ data: org });
      count++;
    } else {
      await prisma.gsocOrganization.update({
        where: { slug: org.slug },
        data: org,
      });
    }
  }
  log("GSoC Organizations", count);
}

// ─── Main ─────────────────────────────────────────────────────────────
async function main() {
  console.log("\n🌱 Seeding InternHack database...\n");

  await seedUsers();
  await seedDsa();
  await seedAptitude();
  await seedCompanies();
  await seedBadges();
  await seedSkillTests();
  await seedHackathons();
  await seedOpensourceRepos();
  await seedGovInternships();
  await seedJobs();
  await seedFundingSignals();
  await seedInterviewExperiences();
  await seedYCCompanies();
  await seedProfessors();
  await seedBlogPosts();
  await seedGsocOrgs();
  console.log("\n✅ Seed complete!\n");
}

main()
  .catch((err) => {
    console.error("❌ Seed failed:", err);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
