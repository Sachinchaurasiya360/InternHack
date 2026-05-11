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
      passThreshold: 70,
      questions: [
        { question: "What is the output of typeof null?", options: ["\"null\"", "\"object\"", "\"undefined\"", "\"boolean\""], correctIndex: 1, explanation: "typeof null returns \"object\", a known JavaScript quirk." },
        { question: "Which method creates a new array from calling a function on every element?", options: ["forEach()", "map()", "filter()", "reduce()"], correctIndex: 1, explanation: "map() creates a new array by calling a function on each element." },
        { question: "What does === check?", options: ["Value only", "Type only", "Value and type", "Reference only"], correctIndex: 2, explanation: "Strict equality checks both value and type without coercion." },
        { question: "What is a closure?", options: ["A way to close the browser", "A function with access to its outer scope", "A method to end a loop", "Error handling"], correctIndex: 1, explanation: "A closure retains access to variables from its enclosing scope." },
        { question: "What is the output of console.log(0.1 + 0.2 === 0.3)?", options: ["true", "false", "undefined", "NaN"], correctIndex: 1, explanation: "Due to floating-point precision, 0.1 + 0.2 !== exactly 0.3." },
      ],
    },
    {
      skillName: "python",
      title: "Python Programming",
      description: "Assess your Python skills covering data structures and OOP.",
      difficulty: "INTERMEDIATE" as const,
      timeLimitSecs: 1800,
      passThreshold: 70,
      questions: [
        { question: "What is the output of list('hello')?", options: ["['hello']", "['h','e','l','l','o']", "'hello'", "Error"], correctIndex: 1, explanation: "list() iterates over each character of the string." },
        { question: "Which data structure has unique keys?", options: ["List", "Tuple", "Dictionary", "Array"], correctIndex: 2, explanation: "Dictionaries have unique keys." },
        { question: "What does len([1, [2, 3], 4]) return?", options: ["3", "4", "5", "Error"], correctIndex: 0, explanation: "The list has 3 elements: 1, [2,3], and 4." },
        { question: "Which keyword is used for inheritance in Python?", options: ["extends", "inherits", "class Child(Parent)", "implements"], correctIndex: 2, explanation: "Python uses class Child(Parent) syntax for inheritance." },
        { question: "What does 'pass' do in Python?", options: ["Exits the loop", "Does nothing (placeholder)", "Skips iteration", "Returns None"], correctIndex: 1, explanation: "pass is a null statement used as a placeholder." },
      ],
    },
    {
      skillName: "react",
      title: "React Development",
      description: "Test your React knowledge including hooks and component patterns.",
      difficulty: "INTERMEDIATE" as const,
      timeLimitSecs: 1800,
      passThreshold: 70,
      questions: [
        { question: "What hook manages state in a functional component?", options: ["useEffect", "useState", "useRef", "useMemo"], correctIndex: 1, explanation: "useState returns a state variable and a setter function." },
        { question: "What is the virtual DOM?", options: ["A browser API", "A lightweight JS representation of the real DOM", "A CSS framework", "A testing tool"], correctIndex: 1, explanation: "React uses a virtual DOM to minimize expensive real DOM updates." },
        { question: "When does useEffect run by default?", options: ["Only on mount", "After every render", "Only on unmount", "Never"], correctIndex: 1, explanation: "Without a dependency array, useEffect runs after every render." },
        { question: "What is the purpose of keys in lists?", options: ["Styling", "Help React identify which items changed", "SEO", "Accessibility"], correctIndex: 1, explanation: "Keys help React efficiently update and reorder list items." },
        { question: "What does React.memo do?", options: ["Stores data", "Memoizes a component to prevent unnecessary re-renders", "Creates a memo pad UI", "Logs to console"], correctIndex: 1, explanation: "React.memo skips re-rendering if props haven't changed." },
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
    { name: "ISRO Space Science Internship", category: "Research", timeline: "May - July (10 weeks)", organizer: "ISRO", domain: "Space Science & Engineering", stipend: "₹10,000/month", eligibility: "B.Tech/M.Tech students in relevant branches", reality: "Hands-on research experience at ISRO centres. Competitive selection." },
    { name: "DRDO Summer Internship", category: "Research", timeline: "June - August (8 weeks)", organizer: "DRDO", domain: "Defence Technology", stipend: "₹10,000-15,000/month", eligibility: "Engineering students with 7.0+ CGPA", reality: "Lab-based research in defence technologies. NDAs required." },
    { name: "NITI Aayog Internship", category: "Policy", timeline: "Rolling (6-8 weeks)", organizer: "NITI Aayog", domain: "Public Policy & Economics", stipend: "Unpaid", eligibility: "Graduate/Postgraduate students", reality: "Policy research and report writing. Certificate provided." },
    { name: "Indian Academy of Sciences (IASc) SRFP", category: "Research", timeline: "May - July (8 weeks)", organizer: "Indian Academy of Sciences", domain: "Science & Engineering", stipend: "₹5,000/month + travel", eligibility: "2nd/3rd year B.Sc/B.E students", reality: "Research under top faculty at premier institutions." },
    { name: "SEBI Legal Internship", category: "Legal", timeline: "Rolling (4 weeks)", organizer: "SEBI", domain: "Securities & Finance Law", stipend: "Unpaid (certificate provided)", eligibility: "Law students (3rd year onwards)", reality: "Exposure to securities regulation. Limited seats." },
    { name: "Ministry of Electronics and IT (MeitY)", category: "Technology", timeline: "Summer (8 weeks)", organizer: "MeitY", domain: "Digital Governance & IT", stipend: "₹10,000/month", eligibility: "B.Tech/MCA students", reality: "Work on e-governance projects and digital India initiatives." },
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
      where: { companyName: e.companyName, role: e.role, userId: student.id },
    });
    if (!existing) {
      await prisma.interviewExperience.create({
        data: {
          ...e,
          companyId: companyMap[e.companyName] ?? null,
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

  console.log("\n✅ Seed complete!\n");
}

main()
  .catch((err) => {
    console.error("❌ Seed failed:", err);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
