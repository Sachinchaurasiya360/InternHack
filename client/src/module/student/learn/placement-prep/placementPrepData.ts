export type TaskType = "dsa" | "aptitude" | "core" | "interview" | "exam";

export interface PrepTask {
  id: string;
  title: string;
  description: string;
  type: TaskType;
  refId: string; // The slug, ID, or track-key of the resource
  link: string;  // Internal path to practice/learn
}

export interface PrepDay {
  day: number;
  title: string;
  tasks: PrepTask[];
}

export interface PlacementPrepPlan {
  id: string;
  title: string;
  description: string;
  durationDays: number;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  targetRole: string;
  targetTier: string;
  days: PrepDay[];
}

// Curated 30-Day Crash Course
const plan30Day: PrepDay[] = Array.from({ length: 30 }, (_, i) => {
  const day = i + 1;
  const tasks: PrepTask[] = [];

  if (day === 1) {
    tasks.push({
      id: "30d-d1-dsa",
      title: "Arrays: Two Sum",
      description: "Solve the classic Two Sum problem using hashing in O(n) time.",
      type: "dsa",
      refId: "two-sum",
      link: "/learn/dsa/problem/two-sum",
    });
    tasks.push({
      id: "30d-d1-apt",
      title: "Aptitude: Percentage Basics",
      description: "Learn and practice basic percentage conversions and questions.",
      type: "aptitude",
      refId: "percentage",
      link: "/learn/aptitude/percentage/practice",
    });
  } else if (day === 2) {
    tasks.push({
      id: "30d-d2-dsa",
      title: "Arrays: Best Time to Buy and Sell Stock",
      description: "Solve the single-pass stock trading problem.",
      type: "dsa",
      refId: "best-time-to-buy-sell-stock",
      link: "/learn/dsa/problem/best-time-to-buy-sell-stock",
    });
    tasks.push({
      id: "30d-d2-core",
      title: "Core: JavaScript Basics",
      description: "Review core JS: scopes, execution contexts, and closures.",
      type: "core",
      refId: "javascript",
      link: "/learn/javascript",
    });
  } else if (day === 3) {
    tasks.push({
      id: "30d-d3-apt",
      title: "Aptitude: Profit and Loss",
      description: "Master profit margins, cost price, selling price, and discount calculations.",
      type: "aptitude",
      refId: "profit-and-loss",
      link: "/learn/aptitude/profit-and-loss/practice",
    });
    tasks.push({
      id: "30d-d3-core",
      title: "Core: HTML Elements & Forms",
      description: "Brush up on semantic HTML structures and validation.",
      type: "core",
      refId: "html",
      link: "/learn/html",
    });
  } else if (day === 4) {
    tasks.push({
      id: "30d-d4-dsa",
      title: "Strings: Valid Parentheses",
      description: "Solve string matching using stack data structure.",
      type: "dsa",
      refId: "valid-parentheses",
      link: "/learn/dsa/problem/valid-parentheses",
    });
  } else if (day === 5) {
    tasks.push({
      id: "30d-d5-apt",
      title: "Aptitude: Time and Work",
      description: "Solve combined work rate and efficiency word problems.",
      type: "aptitude",
      refId: "time-and-work",
      link: "/learn/aptitude/time-and-work/practice",
    });
    tasks.push({
      id: "30d-d5-core",
      title: "Core: CSS Grid and Flexbox",
      description: "Quickly review grid layout and layout alignment options.",
      type: "core",
      refId: "css",
      link: "/learn/css",
    });
  } else if (day === 6) {
    tasks.push({
      id: "30d-d6-dsa",
      title: "Linked Lists: Merge Two Sorted Lists",
      description: "Solve merging of two sorted singly linked lists.",
      type: "dsa",
      refId: "merge-two-sorted-lists",
      link: "/learn/dsa/problem/merge-two-sorted-lists",
    });
  } else if (day === 7) {
    tasks.push({
      id: "30d-d7-dsa",
      title: "Arrays: Maximum Subarray",
      description: "Implement Kadane's algorithm to find the largest contiguous subarray sum.",
      type: "dsa",
      refId: "maximum-subarray",
      link: "/learn/dsa/problem/maximum-subarray",
    });
    tasks.push({
      id: "30d-d7-apt",
      title: "Aptitude: Number Series",
      description: "Identify patterns in number sequences and find missing terms.",
      type: "aptitude",
      refId: "number-series",
      link: "/learn/aptitude/number-series/practice",
    });
  } else if (day === 8) {
    tasks.push({
      id: "30d-d8-core",
      title: "Core: SQL SELECT & JOINs",
      description: "Revise SQL querying: filters, groupings, and join clauses.",
      type: "core",
      refId: "sql",
      link: "/learn/sql",
    });
  } else if (day === 9) {
    tasks.push({
      id: "30d-d9-apt",
      title: "Aptitude: Blood Relations",
      description: "Solve blood relations reasoning puzzles.",
      type: "aptitude",
      refId: "blood-relations",
      link: "/learn/aptitude/blood-relations/practice",
    });
  } else if (day === 10) {
    tasks.push({
      id: "30d-d10-dsa",
      title: "Arrays: 3Sum Triplet Sum",
      description: "Solve the 3Sum problem in O(n^2) using sorting and two pointers.",
      type: "dsa",
      refId: "3sum",
      link: "/learn/dsa/problem/3sum",
    });
  } else if (day === 11) {
    tasks.push({
      id: "30d-d11-apt",
      title: "Aptitude: Coding-Decoding",
      description: "Practice pattern encoding/decoding of letters and numbers.",
      type: "aptitude",
      refId: "coding-decoding",
      link: "/learn/aptitude/coding-decoding/practice",
    });
    tasks.push({
      id: "30d-d11-core",
      title: "Core: TypeScript Basics",
      description: "Types, Interfaces, and Union types in TypeScript.",
      type: "core",
      refId: "typescript",
      link: "/learn/typescript",
    });
  } else if (day === 12) {
    tasks.push({
      id: "30d-d12-dsa",
      title: "Trees: Level Order Traversal",
      description: "Perform level order traversal of binary trees using a Queue.",
      type: "dsa",
      refId: "binary-tree-level-order-traversal",
      link: "/learn/dsa/problem/binary-tree-level-order-traversal",
    });
  } else if (day === 13) {
    tasks.push({
      id: "30d-d13-apt",
      title: "Verbal: Synonyms & Antonyms",
      description: "Enhance vocabulary, practicing synonym-antonym pairings.",
      type: "aptitude",
      refId: "synonyms",
      link: "/learn/aptitude/verbal-ability",
    });
  } else if (day === 14) {
    tasks.push({
      id: "30d-d14-dsa",
      title: "Graphs: Number of Islands",
      description: "Solve the grid-island count problem using DFS/BFS traversal.",
      type: "dsa",
      refId: "number-of-islands",
      link: "/learn/dsa/problem/number-of-islands",
    });
    tasks.push({
      id: "30d-d14-core",
      title: "Core: React Hooks",
      description: "Review React state management: useState, useEffect, and custom hooks.",
      type: "core",
      refId: "react",
      link: "/learn/react",
    });
  } else if (day === 15) {
    tasks.push({
      id: "30d-d15-apt",
      title: "Verbal: Sentence Correction",
      description: "Identify and fix grammar/syntax errors in English phrases.",
      type: "aptitude",
      refId: "sentence-correction",
      link: "/learn/aptitude/verbal-ability",
    });
  } else if (day === 16) {
    tasks.push({
      id: "30d-d16-dsa",
      title: "DP: Longest Increasing Subsequence",
      description: "Find the longest subsequence that is strictly increasing.",
      type: "dsa",
      refId: "longest-increasing-subsequence",
      link: "/learn/dsa/problem/longest-increasing-subsequence",
    });
  } else if (day === 17) {
    tasks.push({
      id: "30d-d17-core",
      title: "Core: Node.js & REST APIs",
      description: "Revise Express routes, handlers, middleware, and request flow.",
      type: "core",
      refId: "nodejs",
      link: "/learn/nodejs",
    });
  } else if (day === 18) {
    tasks.push({
      id: "30d-d18-apt",
      title: "Aptitude: Profit and Loss Advanced",
      description: "Advanced problems, multiple discount chains, marked price formulas.",
      type: "aptitude",
      refId: "profit-and-loss",
      link: "/learn/aptitude/profit-and-loss/practice",
    });
  } else if (day === 19) {
    tasks.push({
      id: "30d-d19-dsa",
      title: "DSA: Trapping Rain Water",
      description: "Calculate trapped rainwater using two pointers or monotonic stacks.",
      type: "dsa",
      refId: "trapping-rain-water",
      link: "/learn/dsa/problem/trapping-rain-water",
    });
  } else if (day === 20) {
    tasks.push({
      id: "30d-d20-int",
      title: "Interview: Behavioral Trainer",
      description: "Practice answering situational/leadership questions in front of the AI trainer.",
      type: "interview",
      refId: "behavioral-interview",
      link: "/learn/interview/behavioral-interview/trainer",
    });
  } else if (day === 21) {
    tasks.push({
      id: "30d-d21-apt",
      title: "Aptitude: Time & Work Pipes",
      description: "Pipes and cisterns variations of work time formulas.",
      type: "aptitude",
      refId: "time-and-work",
      link: "/learn/aptitude/time-and-work/practice",
    });
  } else if (day === 22) {
    tasks.push({
      id: "30d-d22-core",
      title: "Core: Data Analytics Basics",
      description: "Revise NumPy and Pandas arrays, dataframes, and data manipulation.",
      type: "core",
      refId: "data-analytics",
      link: "/learn/data-analytics",
    });
  } else if (day === 23) {
    tasks.push({
      id: "30d-d23-dsa",
      title: "DSA: Binary Search Topic",
      description: "Practice various binary search problems on topic sheet.",
      type: "dsa",
      refId: "binary-search",
      link: "/learn/dsa/binary-search",
    });
  } else if (day === 24) {
    tasks.push({
      id: "30d-d24-int",
      title: "Interview: Technical Prep",
      description: "Read engineering questions curated by FAANG developers.",
      type: "interview",
      refId: "interview",
      link: "/learn/interview",
    });
  } else if (day === 25) {
    tasks.push({
      id: "30d-d25-exam",
      title: "Exam Prep: TCS NQT Mock",
      description: "Attempt the full TCS National Qualifier Test mock assessment.",
      type: "exam",
      refId: "tcs-nqt",
      link: "/learn/exam-prep/tcs-nqt/mock",
    });
  } else if (day === 26) {
    tasks.push({
      id: "30d-d26-dsa",
      title: "DSA: Quick Stack & Queue recap",
      description: "Attempt remaining stack/queue assignments.",
      type: "dsa",
      refId: "stack-queues",
      link: "/learn/dsa/stack-queues",
    });
  } else if (day === 27) {
    tasks.push({
      id: "30d-d27-apt",
      title: "Aptitude: Mixed Logical reasoning",
      description: "Re-run number series and blood relations practices.",
      type: "aptitude",
      refId: "logical-reasoning",
      link: "/learn/aptitude/companies",
    });
  } else if (day === 28) {
    tasks.push({
      id: "30d-d28-core",
      title: "Core: SQL Aggregate Revision",
      description: "Revise SQL GROUP BY, HAVING, and Window Functions.",
      type: "core",
      refId: "sql",
      link: "/learn/sql",
    });
  } else if (day === 29) {
    tasks.push({
      id: "30d-d29-exam",
      title: "Exam Prep: Wipro Elite Mock",
      description: "Solve Elite NLTH practice exam containing aptitude and coding.",
      type: "exam",
      refId: "wipro",
      link: "/learn/exam-prep/wipro/mock",
    });
  } else {
    tasks.push({
      id: "30d-d30-int",
      title: "Final Interview Prep",
      description: "Analyze readiness stats and complete final mock interview runs.",
      type: "interview",
      refId: "interview",
      link: "/learn/interview",
    });
  }

  return {
    day,
    title: `Day ${day}: ${day <= 10 ? "Foundation" : day <= 20 ? "Acceleration" : "Final Sprint"}`,
    tasks,
  };
});

// Curated 60-Day Thorough Prep
const plan60Day: PrepDay[] = Array.from({ length: 60 }, (_, i) => {
  const day = i + 1;
  const tasks: PrepTask[] = [];

  // Distribute tasks across 60 days
  if (day % 3 === 1) {
    tasks.push({
      id: `60d-d${day}-dsa`,
      title: day % 2 === 0 ? "DSA: Arrays Two Sum" : "DSA: Best Time to Sell Stock",
      description: "Solve a high-frequency array problem asked in FAANG interviews.",
      type: "dsa",
      refId: day % 2 === 0 ? "two-sum" : "best-time-to-buy-sell-stock",
      link: day % 2 === 0 ? "/learn/dsa/problem/two-sum" : "/learn/dsa/problem/best-time-to-buy-sell-stock",
    });
  } else if (day % 3 === 2) {
    tasks.push({
      id: `60d-d${day}-apt`,
      title: "Aptitude Topic Practice",
      description: "Maintain score accuracy in numerical and logical aptitude topics.",
      type: "aptitude",
      refId: day % 2 === 0 ? "percentage" : "profit-and-loss",
      link: day % 2 === 0 ? "/learn/aptitude/percentage/practice" : "/learn/aptitude/profit-and-loss/practice",
    });
  } else {
    tasks.push({
      id: `60d-d${day}-core`,
      title: "Core Subject Recap",
      description: "Review core programming logic and fundamentals.",
      type: "core",
      refId: day % 2 === 0 ? "javascript" : "sql",
      link: day % 2 === 0 ? "/learn/javascript" : "/learn/sql",
    });
  }

  // Include milestones
  if (day === 30) {
    tasks.push({
      id: "60d-d30-exam",
      title: "Mid-Term Exam: Infosys InfyTQ Mock",
      description: "Practice the 4-section assessment covering reasoning, maths, and pseudo-code.",
      type: "exam",
      refId: "infosys",
      link: "/learn/exam-prep/infosys/mock",
    });
  } else if (day === 60) {
    tasks.push({
      id: "60d-d60-exam",
      title: "Final Exam: Accenture Assessment",
      description: "Attempt the full cognitive, technical, and programming mock test.",
      type: "exam",
      refId: "accenture",
      link: "/learn/exam-prep/accenture/mock",
    });
  }

  return {
    day,
    title: `Day ${day}: ${day <= 20 ? "Foundation" : day <= 40 ? "Core Deep-Dive" : "Placement Ready"}`,
    tasks,
  };
});

// Curated 90-Day Campus King
const plan90Day: PrepDay[] = Array.from({ length: 90 }, (_, i) => {
  const day = i + 1;
  const tasks: PrepTask[] = [];

  // Balance 90 days with alternating activities
  if (day % 4 === 1) {
    tasks.push({
      id: `90d-d${day}-dsa`,
      title: "DSA Practice: " + (day % 3 === 0 ? "Maximum Subarray" : day % 3 === 1 ? "Number of Islands" : "Valid Parentheses"),
      description: "Master dynamic structures, recursion, and optimal layouts.",
      type: "dsa",
      refId: day % 3 === 0 ? "maximum-subarray" : day % 3 === 1 ? "number-of-islands" : "valid-parentheses",
      link: day % 3 === 0 ? "/learn/dsa/problem/maximum-subarray" : day % 3 === 1 ? "/learn/dsa/problem/number-of-islands" : "/learn/dsa/problem/valid-parentheses",
    });
  } else if (day % 4 === 2) {
    tasks.push({
      id: `90d-d${day}-apt`,
      title: "Aptitude Speed Test",
      description: "Solve time-bound aptitude topics with maximum speed.",
      type: "aptitude",
      refId: day % 2 === 0 ? "time-and-work" : "coding-decoding",
      link: day % 2 === 0 ? "/learn/aptitude/time-and-work/practice" : "/learn/aptitude/coding-decoding/practice",
    });
  } else if (day % 4 === 3) {
    tasks.push({
      id: `90d-d${day}-core`,
      title: "Fullstack Core Mastery",
      description: "Perfecting frontend frameworks and backend databases.",
      type: "core",
      refId: day % 2 === 0 ? "react" : "nodejs",
      link: day % 2 === 0 ? "/learn/react" : "/learn/nodejs",
    });
  } else {
    tasks.push({
      id: `90d-d${day}-int`,
      title: "Mock Interview & System Design",
      description: "Ace behaviorals and system design architectures.",
      type: "interview",
      refId: "interview",
      link: "/learn/interview",
    });
  }

  // Include milestones
  if (day === 30) {
    tasks.push({
      id: "90d-d30-exam",
      title: "Milestone: Capgemini Exam",
      description: "Complete full game-based aptitude and essay writing simulation.",
      type: "exam",
      refId: "capgemini",
      link: "/learn/exam-prep/capgemini/mock",
    });
  } else if (day === 60) {
    tasks.push({
      id: "90d-d60-exam",
      title: "Milestone: JP Morgan Code for Good Mock",
      description: "Attempt 2-hour coding and logical reasoning mock assessment.",
      type: "exam",
      refId: "jpmorgan",
      link: "/learn/exam-prep/jpmorgan/mock",
    });
  } else if (day === 90) {
    tasks.push({
      id: "90d-d90-exam",
      title: "Final Battle: Goldman Sachs Mock",
      description: "The ultimate 105-minute coding, aptitude, and behavioral challenge.",
      type: "exam",
      refId: "goldman",
      link: "/learn/exam-prep/goldman/mock",
    });
  }

  return {
    day,
    title: `Day ${day}: ${day <= 30 ? "Bootcamp Core" : day <= 60 ? "Deep-Dive Algorithms" : "Advanced & FAANG Mocking"}`,
    tasks,
  };
});

export const PREP_PLANS: PlacementPrepPlan[] = [
  {
    id: "30-day",
    title: "30-Day Crash Course",
    description: "Ideal for urgent placements. Cover core DSA, high-weightage Aptitude, key Web subjects, and target Service-based & mid-tier product companies.",
    durationDays: 30,
    difficulty: "Beginner",
    targetRole: "SDE-1 / QA / Analyst",
    targetTier: "Service & Mid-size (TCS, Wipro, Accenture)",
    days: plan30Day,
  },
  {
    id: "60-day",
    title: "60-Day Thorough Prep",
    description: "A solid, balanced route. Cover standard DSA patterns, logical & verbal aptitude, core framework lessons, and company mock tests.",
    durationDays: 60,
    difficulty: "Intermediate",
    targetRole: "SDE / Frontend / Backend Dev",
    targetTier: "Product Companies (Infosys, Capgemini, Cognizant)",
    days: plan60Day,
  },
  {
    id: "90-day",
    title: "90-Day Campus King",
    description: "The ultimate roadmap for FAANG and high-paying product startups. Complete deep-dives in advanced algorithms, system design, mock interviews, and tier-1 company mocks.",
    durationDays: 90,
    difficulty: "Advanced",
    targetRole: "SDE / Software Architect",
    targetTier: "Tier-1 & FAANG (Google, Amazon, Goldman Sachs)",
    days: plan90Day,
  },
];
