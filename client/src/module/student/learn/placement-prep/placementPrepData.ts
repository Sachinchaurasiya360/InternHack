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

export interface SyllabusGroup {
  type: TaskType;
  label: string;
  topics: string[];
}

export interface PlacementPrepPlan {
  id: string;
  title: string;
  description: string;
  durationDays: number;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  targetRole: string;
  targetTier: string;
  syllabus: SyllabusGroup[];
  days: PrepDay[];
}

// ─────────────────────────────────────────────────────────
// Content pools — every entry links to a real, working route.
// ─────────────────────────────────────────────────────────

interface PoolItem {
  title: string;
  description: string;
  refId: string;
  link: string;
}

const DSA_POOL: PoolItem[] = [
  { title: "Arrays: Two Sum", description: "Solve the classic Two Sum problem using hashing in O(n) time.", refId: "two-sum", link: "/learn/dsa/problem/two-sum" },
  { title: "Arrays: Best Time to Buy & Sell Stock", description: "Solve the single-pass stock trading problem.", refId: "best-time-to-buy-sell-stock", link: "/learn/dsa/problem/best-time-to-buy-sell-stock" },
  { title: "Stacks: Valid Parentheses", description: "Solve bracket matching using a stack data structure.", refId: "valid-parentheses", link: "/learn/dsa/problem/valid-parentheses" },
  { title: "Linked Lists: Merge Two Sorted Lists", description: "Merge two sorted singly linked lists in place.", refId: "merge-two-sorted-lists", link: "/learn/dsa/problem/merge-two-sorted-lists" },
  { title: "Arrays: Maximum Subarray", description: "Implement Kadane's algorithm for the largest contiguous sum.", refId: "maximum-subarray", link: "/learn/dsa/problem/maximum-subarray" },
  { title: "Arrays: 3Sum Triplets", description: "Solve 3Sum in O(n^2) using sorting and two pointers.", refId: "3sum", link: "/learn/dsa/problem/3sum" },
  { title: "Trees: Level Order Traversal", description: "Traverse a binary tree level by level using a queue.", refId: "binary-tree-level-order-traversal", link: "/learn/dsa/problem/binary-tree-level-order-traversal" },
  { title: "Graphs: Number of Islands", description: "Count connected land regions using DFS/BFS.", refId: "number-of-islands", link: "/learn/dsa/problem/number-of-islands" },
  { title: "DP: Longest Increasing Subsequence", description: "Find the longest strictly increasing subsequence.", refId: "longest-increasing-subsequence", link: "/learn/dsa/problem/longest-increasing-subsequence" },
  { title: "Two Pointers: Trapping Rain Water", description: "Compute trapped rainwater with two pointers or a monotonic stack.", refId: "trapping-rain-water", link: "/learn/dsa/problem/trapping-rain-water" },
  { title: "Topic Sheet: Arrays", description: "Work through the full arrays problem set, easy to hard.", refId: "arrays", link: "/learn/dsa/arrays" },
  { title: "Topic Sheet: Strings", description: "Drill string manipulation, pattern matching, and parsing problems.", refId: "strings", link: "/learn/dsa/strings" },
  { title: "Topic Sheet: Linked List", description: "Practice reversal, cycle detection, and merge variations.", refId: "linked-list", link: "/learn/dsa/linked-list" },
  { title: "Topic Sheet: Binary Search", description: "Master search-space reduction and boundary conditions.", refId: "binary-search", link: "/learn/dsa/binary-search" },
  { title: "Topic Sheet: Stacks & Queues", description: "Solve monotonic stack and queue-based simulation problems.", refId: "stack-queues", link: "/learn/dsa/stack-queues" },
  { title: "Topic Sheet: Binary Trees", description: "Cover traversals, balancing, and tree-construction problems.", refId: "binary-trees", link: "/learn/dsa/binary-trees" },
  { title: "Topic Sheet: Graphs", description: "Practice BFS/DFS, topological sort, and shortest-path problems.", refId: "graphs", link: "/learn/dsa/graphs" },
  { title: "Topic Sheet: Dynamic Programming", description: "Work through 1D and 2D DP problem patterns.", refId: "dynamic-programming", link: "/learn/dsa/dynamic-programming" },
];

const APTITUDE_POOL: PoolItem[] = [
  { title: "Aptitude: Percentage", description: "Learn and practice percentage conversions and word problems.", refId: "percentage", link: "/learn/aptitude/percentage/practice" },
  { title: "Aptitude: Profit and Loss", description: "Master cost price, selling price, and discount formulas.", refId: "profit-and-loss", link: "/learn/aptitude/profit-and-loss/practice" },
  { title: "Aptitude: Simple Interest", description: "Practice principal, rate, and time based interest problems.", refId: "simple-interest", link: "/learn/aptitude/simple-interest/practice" },
  { title: "Aptitude: Compound Interest", description: "Solve compounding period and effective-rate problems.", refId: "compound-interest", link: "/learn/aptitude/compound-interest/practice" },
  { title: "Aptitude: Ratio and Proportion", description: "Practice dividing quantities and comparing ratios.", refId: "ratio-and-proportion", link: "/learn/aptitude/ratio-and-proportion/practice" },
  { title: "Aptitude: Partnership", description: "Solve profit-sharing problems based on capital and time.", refId: "partnership", link: "/learn/aptitude/partnership/practice" },
  { title: "Aptitude: Time and Work", description: "Solve combined work rate and efficiency word problems.", refId: "time-and-work", link: "/learn/aptitude/time-and-work/practice" },
  { title: "Aptitude: Time and Distance", description: "Practice speed, distance, and relative-motion problems.", refId: "time-and-distance", link: "/learn/aptitude/time-and-distance/practice" },
  { title: "Aptitude: Pipes and Cisterns", description: "Solve inlet/outlet rate combination problems.", refId: "pipes-and-cistern", link: "/learn/aptitude/pipes-and-cistern/practice" },
  { title: "Aptitude: Boats and Streams", description: "Practice upstream/downstream speed problems.", refId: "boats-and-streams", link: "/learn/aptitude/boats-and-streams/practice" },
  { title: "Aptitude: Problems on Trains", description: "Solve relative speed problems involving trains.", refId: "problems-on-trains", link: "/learn/aptitude/problems-on-trains/practice" },
  { title: "Aptitude: Averages", description: "Practice weighted averages and combined-group problems.", refId: "average", link: "/learn/aptitude/average/practice" },
  { title: "Aptitude: Permutation and Combination", description: "Solve arrangement and selection counting problems.", refId: "permutation-and-combination", link: "/learn/aptitude/permutation-and-combination/practice" },
  { title: "Aptitude: Probability", description: "Practice classical probability and conditional events.", refId: "probability", link: "/learn/aptitude/probability/practice" },
  { title: "Aptitude: Progressions", description: "Solve arithmetic and geometric progression problems.", refId: "progressions", link: "/learn/aptitude/progressions/practice" },
  { title: "Aptitude: HCF and LCM", description: "Practice factor, multiple, and divisibility problems.", refId: "problems-on-hcf-and-lcm", link: "/learn/aptitude/problems-on-hcf-and-lcm/practice" },
  { title: "Aptitude: Problems on Ages", description: "Solve age-ratio and age-difference word problems.", refId: "ages", link: "/learn/aptitude/ages/practice" },
  { title: "Aptitude: Calendar", description: "Practice day-of-the-week and leap-year calculations.", refId: "calendar", link: "/learn/aptitude/calendar/practice" },
  { title: "Aptitude: Clock", description: "Solve angle-between-hands and clock-alignment problems.", refId: "clock", link: "/learn/aptitude/clock/practice" },
  { title: "Aptitude: Number Series", description: "Identify patterns and find the missing term.", refId: "number-series", link: "/learn/aptitude/number-series/practice" },
  { title: "Reasoning: Blood Relations", description: "Solve family-tree and relationship reasoning puzzles.", refId: "blood-relations", link: "/learn/aptitude/blood-relations/practice" },
  { title: "Reasoning: Direction Sense", description: "Practice direction and distance-tracking puzzles.", refId: "direction-sense-test", link: "/learn/aptitude/direction-sense-test/practice" },
  { title: "Reasoning: Seating Arrangement", description: "Solve linear and circular seating-arrangement puzzles.", refId: "seating-arrangement", link: "/learn/aptitude/seating-arrangement/practice" },
  { title: "Reasoning: Coding and Decoding", description: "Practice letter and number pattern encoding puzzles.", refId: "coding-and-decoding", link: "/learn/aptitude/coding-and-decoding/practice" },
  { title: "Reasoning: Syllogism", description: "Solve statement-and-conclusion logical deduction sets.", refId: "syllogism", link: "/learn/aptitude/syllogism/practice" },
  { title: "Reasoning: Data Sufficiency", description: "Practice deciding whether given data is enough to answer.", refId: "data-sufficiency", link: "/learn/aptitude/data-sufficiency/practice" },
];

const CORE_POOL: PoolItem[] = [
  { title: "Core: JavaScript Fundamentals", description: "Review scopes, execution contexts, closures, and async patterns.", refId: "javascript", link: "/learn/javascript" },
  { title: "Core: HTML Elements & Forms", description: "Brush up on semantic HTML structures and form validation.", refId: "html", link: "/learn/html" },
  { title: "Core: CSS Layout", description: "Revise Grid, Flexbox, and responsive layout techniques.", refId: "css", link: "/learn/css" },
  { title: "Core: TypeScript Essentials", description: "Practice types, interfaces, generics, and union types.", refId: "typescript", link: "/learn/typescript" },
  { title: "Core: React Fundamentals", description: "Review hooks, state management, and component patterns.", refId: "react", link: "/learn/react" },
  { title: "Core: Node.js & REST APIs", description: "Revise Express routing, middleware, and request handling.", refId: "nodejs", link: "/learn/nodejs" },
  { title: "Core: Python Basics", description: "Practice data structures, comprehensions, and OOP in Python.", refId: "python", link: "/learn/python" },
  { title: "Core: SQL Querying", description: "Revise SELECT, JOINs, GROUP BY, and window functions.", refId: "sql", link: "/learn/sql" },
  { title: "Core: Data Analytics Basics", description: "Revise NumPy and Pandas arrays, dataframes, and manipulation.", refId: "data-analytics", link: "/learn/data-analytics" },
  { title: "Core: Blockchain Fundamentals", description: "Learn smart contracts, DeFi primitives, and chain fundamentals.", refId: "blockchain", link: "/learn/blockchain" },
  { title: "Core: FastAPI Basics", description: "Build REST endpoints and validate requests with Pydantic.", refId: "fastapi", link: "/learn/fastapi" },
  { title: "Core: Flask Basics", description: "Review routing, templating, and request lifecycle in Flask.", refId: "flask", link: "/learn/flask" },
  { title: "Core: Django Basics", description: "Revise models, views, and the Django ORM.", refId: "django", link: "/learn/django" },
];

const SYSTEM_DESIGN_POOL: PoolItem[] = [
  { title: "System Design: What is System Design?", description: "Understand the HLD vs LLD lens before diving into components.", refId: "what-is-system-design", link: "/learn/system-design/level-1/what-is-system-design" },
  { title: "System Design: Back-of-Envelope Estimation", description: "Practice sizing traffic, storage, and bandwidth for a design.", refId: "back-of-envelope", link: "/learn/system-design/level-1/back-of-envelope" },
  { title: "System Design: Vertical vs Horizontal Scaling", description: "Compare scaling strategies and when each one breaks down.", refId: "scaling", link: "/learn/system-design/level-2/scaling" },
  { title: "System Design: Load Balancing", description: "Learn load balancer algorithms and health-check strategies.", refId: "load-balancing", link: "/learn/system-design/level-2/load-balancing" },
  { title: "System Design: Caching 101", description: "Study cache placement, eviction policies, and invalidation.", refId: "caching", link: "/learn/system-design/level-2/caching" },
  { title: "System Design: SQL vs NoSQL", description: "Compare data models and pick the right store for the workload.", refId: "sql-vs-nosql", link: "/learn/system-design/level-3/sql-vs-nosql" },
  { title: "System Design: Sharding & Partitioning", description: "Learn how to split data across nodes without hot spots.", refId: "sharding", link: "/learn/system-design/level-3/sharding" },
  { title: "System Design: The CAP Theorem", description: "Understand the consistency/availability/partition trade-off.", refId: "cap-theorem", link: "/learn/system-design/level-4/cap-theorem" },
  { title: "System Design: Message Queues 101", description: "Learn queue semantics, backpressure, and delivery guarantees.", refId: "message-queues", link: "/learn/system-design/level-5/message-queues" },
  { title: "System Design: Rate Limiting", description: "Study token-bucket and sliding-window limiter designs.", refId: "rate-limiting", link: "/learn/system-design/level-5/rate-limiting" },
  { title: "System Design: Circuit Breakers", description: "Learn failure isolation patterns for distributed calls.", refId: "circuit-breakers", link: "/learn/system-design/level-6/circuit-breakers" },
  { title: "System Design: Design TinyURL", description: "Design short-code generation and the redirect hot path.", refId: "design-tinyurl", link: "/learn/system-design/level-8/design-tinyurl" },
  { title: "System Design: Design Twitter Feed", description: "Design a hybrid push/pull timeline fan-out.", refId: "design-twitter-feed", link: "/learn/system-design/level-8/design-twitter-feed" },
  { title: "System Design: Design Uber Dispatch", description: "Design geohash matching and a live dispatch loop.", refId: "design-uber", link: "/learn/system-design/level-8/design-uber" },
  { title: "System Design: Design WhatsApp", description: "Design connection handling and message delivery states.", refId: "design-whatsapp", link: "/learn/system-design/level-8/design-whatsapp" },
  { title: "System Design: Design a Rate Limiter", description: "Design a distributed limiter with sharded counters.", refId: "design-rate-limiter", link: "/learn/system-design/level-8/design-rate-limiter" },
];

const INTERVIEW_POOL: PoolItem[] = [
  { title: "Interview: JavaScript", description: "Closures, hoisting, the event loop, and tricky output questions.", refId: "javascript-interview", link: "/learn/interview/javascript-interview" },
  { title: "Interview: React", description: "Hooks, reconciliation, state management, and performance patterns.", refId: "react-interview", link: "/learn/interview/react-interview" },
  { title: "Interview: Node.js", description: "Event loop, streams, clustering, and REST API design.", refId: "nodejs-interview", link: "/learn/interview/nodejs-interview" },
  { title: "Interview: TypeScript", description: "Type inference, generics, and structural typing questions.", refId: "typescript-interview", link: "/learn/interview/typescript-interview" },
  { title: "Interview: Python", description: "Data structures, decorators, and memory-model questions.", refId: "python-interview", link: "/learn/interview/python-interview" },
  { title: "Interview: SQL & Database", description: "Query optimization, normalization, and transaction questions.", refId: "sql-database-interview", link: "/learn/interview/sql-database-interview" },
  { title: "Interview: System Design Basics", description: "Warm up on HLD framing before the full system-design track.", refId: "system-design-interview", link: "/learn/interview/system-design-interview" },
  { title: "Interview: Behavioral & HR", description: "Situational and leadership questions, STAR-method answers.", refId: "behavioral-interview", link: "/learn/interview/behavioral-interview" },
  { title: "Interview: HTML & CSS", description: "Box model, specificity, and rendering-pipeline questions.", refId: "html-css-interview", link: "/learn/interview/html-css-interview" },
  { title: "Interview: Git & DevOps", description: "Branching strategies, rebasing, and CI/CD pipeline questions.", refId: "git-devops-interview", link: "/learn/interview/git-devops-interview" },
  { title: "Interview: FastAPI", description: "Dependency injection, async endpoints, and validation questions.", refId: "fastapi-interview", link: "/learn/interview/fastapi-interview" },
  { title: "Interview: Docker & Containers", description: "Image layers, networking, and container lifecycle questions.", refId: "docker-containers", link: "/learn/interview/docker-containers" },
  { title: "Interview: Kubernetes", description: "Pods, services, and orchestration troubleshooting questions.", refId: "kubernetes-orchestration", link: "/learn/interview/kubernetes-orchestration" },
  { title: "Interview: AWS & Cloud", description: "Core AWS services and cloud-architecture fundamentals.", refId: "aws-cloud-fundamentals", link: "/learn/interview/aws-cloud-fundamentals" },
  { title: "Interview: Redis & Caching", description: "Cache invalidation, eviction, and data-structure questions.", refId: "redis-caching", link: "/learn/interview/redis-caching" },
  { title: "Interview: Web Security", description: "OWASP top risks, JWT, XSS, and CSRF questions.", refId: "web-security", link: "/learn/interview/web-security" },
  { title: "Interview: Database Design", description: "Schema design, normalization, and indexing trade-offs.", refId: "database-design", link: "/learn/interview/database-design" },
  { title: "Interview: Open Source", description: "Questions on contribution workflow and collaboration.", refId: "open-source-interview", link: "/learn/interview/open-source-interview" },
];

const EXAM_POOL_SERVICE: PoolItem[] = [
  { title: "Mock Exam: TCS NQT", description: "Attempt the National Qualifier Test: numerical, verbal, reasoning, and coding.", refId: "tcs-nqt", link: "/learn/exam-prep/tcs-nqt/mock" },
  { title: "Mock Exam: Wipro Elite NLTH", description: "Attempt aptitude, English, logical ability, and coding sections.", refId: "wipro", link: "/learn/exam-prep/wipro/mock" },
  { title: "Mock Exam: Accenture Assessment", description: "Attempt cognitive ability, technical MCQs, coding, and communication.", refId: "accenture", link: "/learn/exam-prep/accenture/mock" },
  { title: "Mock Exam: Cognizant GenC", description: "Attempt logical, verbal, quantitative, and automata coding sections.", refId: "cognizant", link: "/learn/exam-prep/cognizant/mock" },
  { title: "Mock Exam: HCL TechBee", description: "Attempt quantitative aptitude, technical MCQs, and programming.", refId: "hcl", link: "/learn/exam-prep/hcl/mock" },
  { title: "Mock Exam: AMCAT", description: "Attempt English, logical ability, quantitative ability, and domain knowledge.", refId: "amcat", link: "/learn/exam-prep/amcat/mock" },
];

const EXAM_POOL_PRODUCT: PoolItem[] = [
  { title: "Mock Exam: Infosys InfyTQ", description: "Attempt reasoning, maths, verbal ability, and pseudo-code sections.", refId: "infosys", link: "/learn/exam-prep/infosys/mock" },
  { title: "Mock Exam: Capgemini", description: "Attempt game-based aptitude, pseudo-code, English, and essay writing.", refId: "capgemini", link: "/learn/exam-prep/capgemini/mock" },
  { title: "Mock Exam: Cognizant GenC", description: "Attempt logical, verbal, quantitative, and automata coding sections.", refId: "cognizant", link: "/learn/exam-prep/cognizant/mock" },
  { title: "Mock Exam: Deloitte Assessment", description: "Attempt verbal, quantitative, logical, and technical MCQ sections.", refId: "deloitte", link: "/learn/exam-prep/deloitte/mock" },
  { title: "Mock Exam: Wipro Elite NLTH", description: "Attempt aptitude, English, logical ability, and coding sections.", refId: "wipro", link: "/learn/exam-prep/wipro/mock" },
  { title: "Mock Exam: Accenture Assessment", description: "Attempt cognitive ability, technical MCQs, coding, and communication.", refId: "accenture", link: "/learn/exam-prep/accenture/mock" },
];

const EXAM_POOL_PREMIUM: PoolItem[] = [
  { title: "Mock Exam: JP Morgan Code for Good", description: "Attempt a 90-minute coding challenge plus aptitude section.", refId: "jpmorgan", link: "/learn/exam-prep/jpmorgan/mock" },
  { title: "Mock Exam: Goldman Sachs New Analyst", description: "Attempt coding challenge, aptitude & reasoning, and behavioral sections.", refId: "goldman", link: "/learn/exam-prep/goldman/mock" },
  { title: "Mock Exam: Deloitte Assessment", description: "Attempt verbal, quantitative, logical, and technical MCQ sections.", refId: "deloitte", link: "/learn/exam-prep/deloitte/mock" },
  { title: "Mock Exam: eLitmus pH Test", description: "Attempt problem solving, English verbal, and quantitative aptitude.", refId: "elitmus", link: "/learn/exam-prep/elitmus/mock" },
  { title: "Mock Exam: AMCAT", description: "Attempt English, logical ability, quantitative ability, and domain knowledge.", refId: "amcat", link: "/learn/exam-prep/amcat/mock" },
  { title: "Mock Exam: Infosys InfyTQ", description: "Attempt reasoning, maths, verbal ability, and pseudo-code sections.", refId: "infosys", link: "/learn/exam-prep/infosys/mock" },
];

function createPicker(pool: PoolItem[]) {
  let i = 0;
  return (): PoolItem => pool[i++ % pool.length];
}

function makeTask(item: PoolItem, type: TaskType, id: string): PrepTask {
  return { id, title: item.title, description: item.description, type, refId: item.refId, link: item.link };
}

// ─────────────────────────────────────────────────────────
// 30-Day Crash Course — dense, 2 tasks/day, service-tier mocks
// ─────────────────────────────────────────────────────────
function build30Day(): PrepDay[] {
  const dsa = createPicker(DSA_POOL);
  const apt = createPicker(APTITUDE_POOL);
  const core = createPicker(CORE_POOL);
  const interview = createPicker(INTERVIEW_POOL);
  const exam = createPicker(EXAM_POOL_SERVICE);

  const examDays = [10, 20];
  const interviewDays = [15, 25];

  return Array.from({ length: 30 }, (_, i) => {
    const day = i + 1;
    const tasks: PrepTask[] = [];

    if (day % 2 === 1) {
      tasks.push(makeTask(dsa(), "dsa", `30d-d${day}-dsa`));
      tasks.push(makeTask(apt(), "aptitude", `30d-d${day}-apt`));
    } else {
      tasks.push(makeTask(core(), "core", `30d-d${day}-core`));
      tasks.push(makeTask(apt(), "aptitude", `30d-d${day}-apt`));
    }

    if (day === 30) {
      tasks.push(makeTask(exam(), "exam", `30d-d${day}-exam`));
      tasks.push(makeTask(interview(), "interview", `30d-d${day}-int`));
    } else if (examDays.includes(day)) {
      tasks.push(makeTask(exam(), "exam", `30d-d${day}-exam`));
    } else if (interviewDays.includes(day)) {
      tasks.push(makeTask(interview(), "interview", `30d-d${day}-int`));
    }

    return {
      day,
      title: `Day ${day}: ${day <= 10 ? "Foundation" : day <= 20 ? "Acceleration" : "Final Sprint"}`,
      tasks,
    };
  });
}

// ─────────────────────────────────────────────────────────
// 60-Day Thorough Prep — balanced, adds System Design from day 41
// ─────────────────────────────────────────────────────────
function build60Day(): PrepDay[] {
  const dsa = createPicker(DSA_POOL);
  const apt = createPicker(APTITUDE_POOL);
  const core = createPicker(CORE_POOL);
  const interview = createPicker(INTERVIEW_POOL);
  const sysDesign = createPicker(SYSTEM_DESIGN_POOL);
  const exam = createPicker(EXAM_POOL_PRODUCT);

  const examDays = [15, 30, 45];
  const interviewDays = [20, 35, 50, 55];

  return Array.from({ length: 60 }, (_, i) => {
    const day = i + 1;
    const tasks: PrepTask[] = [];
    const mod = day % 3;

    if (mod === 1) {
      tasks.push(makeTask(dsa(), "dsa", `60d-d${day}-dsa`));
      tasks.push(makeTask(apt(), "aptitude", `60d-d${day}-apt`));
    } else if (mod === 2) {
      tasks.push(makeTask(core(), "core", `60d-d${day}-core`));
      tasks.push(makeTask(apt(), "aptitude", `60d-d${day}-apt`));
    } else {
      tasks.push(makeTask(dsa(), "dsa", `60d-d${day}-dsa`));
      tasks.push(makeTask(core(), "core", `60d-d${day}-core`));
    }

    if (day > 40) {
      tasks.push(makeTask(sysDesign(), "core", `60d-d${day}-sd`));
    }

    if (day === 60) {
      tasks.push(makeTask(exam(), "exam", `60d-d${day}-exam`));
      tasks.push(makeTask(interview(), "interview", `60d-d${day}-int`));
    } else if (examDays.includes(day)) {
      tasks.push(makeTask(exam(), "exam", `60d-d${day}-exam`));
    } else if (interviewDays.includes(day)) {
      tasks.push(makeTask(interview(), "interview", `60d-d${day}-int`));
    }

    return {
      day,
      title: `Day ${day}: ${day <= 20 ? "Foundation" : day <= 40 ? "Core Deep-Dive" : "Placement Ready"}`,
      tasks,
    };
  });
}

// ─────────────────────────────────────────────────────────
// 90-Day Campus King — comprehensive, heavy System Design + interview grind from day 61
// ─────────────────────────────────────────────────────────
function build90Day(): PrepDay[] {
  const dsa = createPicker(DSA_POOL);
  const apt = createPicker(APTITUDE_POOL);
  const core = createPicker(CORE_POOL);
  const interview = createPicker(INTERVIEW_POOL);
  const sysDesign = createPicker(SYSTEM_DESIGN_POOL);
  const exam = createPicker(EXAM_POOL_PREMIUM);

  const examDays = [20, 40, 60, 75];

  return Array.from({ length: 90 }, (_, i) => {
    const day = i + 1;
    const tasks: PrepTask[] = [];
    const mod = day % 4;

    if (mod === 1) {
      tasks.push(makeTask(dsa(), "dsa", `90d-d${day}-dsa`));
      tasks.push(makeTask(apt(), "aptitude", `90d-d${day}-apt`));
    } else if (mod === 2) {
      tasks.push(makeTask(core(), "core", `90d-d${day}-core`));
      tasks.push(makeTask(dsa(), "dsa", `90d-d${day}-dsa2`));
    } else if (mod === 3) {
      tasks.push(makeTask(apt(), "aptitude", `90d-d${day}-apt2`));
      tasks.push(makeTask(core(), "core", `90d-d${day}-core2`));
    } else {
      tasks.push(makeTask(interview(), "interview", `90d-d${day}-int`));
    }

    if (day > 30) {
      tasks.push(makeTask(sysDesign(), "core", `90d-d${day}-sd`));
    }
    if (day > 60) {
      tasks.push(makeTask(interview(), "interview", `90d-d${day}-int2`));
    }

    if (day === 90) {
      tasks.push(makeTask(exam(), "exam", `90d-d${day}-exam`));
      tasks.push(makeTask(interview(), "interview", `90d-d${day}-intfinal`));
    } else if (examDays.includes(day)) {
      tasks.push(makeTask(exam(), "exam", `90d-d${day}-exam`));
    }

    return {
      day,
      title: `Day ${day}: ${day <= 30 ? "Bootcamp Core" : day <= 60 ? "Deep-Dive Algorithms" : "Advanced & FAANG Mocking"}`,
      tasks,
    };
  });
}

export const PREP_PLANS: PlacementPrepPlan[] = [
  {
    id: "30-day",
    title: "30-Day Crash Course",
    description: "Ideal for urgent placements. Cover core DSA, high-weightage Aptitude, key Web subjects, and target Service-based & mid-tier product companies.",
    durationDays: 30,
    difficulty: "Beginner",
    targetRole: "SDE-1 / QA / Analyst",
    targetTier: "Service & Mid-size (TCS, Wipro, Accenture)",
    syllabus: [
      { type: "dsa", label: "DSA Patterns", topics: ["Arrays & Two Pointers", "Strings & Stacks", "Linked Lists", "Trees & Graphs"] },
      { type: "aptitude", label: "Aptitude & Reasoning", topics: ["Percentages, P&L, Time & Work", "Number Series", "Blood Relations, Coding-Decoding"] },
      { type: "core", label: "Core Subjects", topics: ["JavaScript", "HTML & CSS", "SQL", "TypeScript"] },
      { type: "interview", label: "Interview Prep", topics: ["Behavioral Trainer", "Technical Fundamentals"] },
      { type: "exam", label: "Company Mocks", topics: ["TCS NQT", "Wipro Elite NLTH", "Accenture Assessment"] },
    ],
    days: build30Day(),
  },
  {
    id: "60-day",
    title: "60-Day Thorough Prep",
    description: "A solid, balanced route. Cover standard DSA patterns, logical & verbal aptitude, core framework lessons, System Design basics, and company mock tests.",
    durationDays: 60,
    difficulty: "Intermediate",
    targetRole: "SDE / Frontend / Backend Dev",
    targetTier: "Product Companies (Infosys, Capgemini, Cognizant)",
    syllabus: [
      { type: "dsa", label: "DSA Patterns", topics: ["Full array/string/linked-list sheets", "Binary Search & Trees", "Graphs & Dynamic Programming"] },
      { type: "aptitude", label: "Aptitude & Reasoning", topics: ["12+ Quantitative topics", "Logical Reasoning", "Data Sufficiency"] },
      { type: "core", label: "Core Subjects", topics: ["JavaScript, TypeScript, React", "Node.js & SQL", "Python & Data Analytics"] },
      { type: "core", label: "System Design", topics: ["Scaling & Load Balancing", "Caching", "SQL vs NoSQL, Sharding"] },
      { type: "interview", label: "Interview Prep", topics: ["4 mock interview rounds", "Behavioral & Technical tracks"] },
      { type: "exam", label: "Company Mocks", topics: ["Infosys InfyTQ", "Capgemini", "Cognizant GenC", "Accenture"] },
    ],
    days: build60Day(),
  },
  {
    id: "90-day",
    title: "90-Day Campus King",
    description: "The ultimate roadmap for FAANG and high-paying product startups. Complete deep-dives in advanced algorithms, System Design, daily mock interviews, and tier-1 company mocks.",
    durationDays: 90,
    difficulty: "Advanced",
    targetRole: "SDE / Software Architect",
    targetTier: "Tier-1 & FAANG (Goldman Sachs, JP Morgan)",
    syllabus: [
      { type: "dsa", label: "DSA Patterns", topics: ["Every core pattern sheet", "Advanced problem drilling", "Repeat cycles for mastery"] },
      { type: "aptitude", label: "Aptitude & Reasoning", topics: ["Full quant + logical rotation", "Data sufficiency & puzzles"] },
      { type: "core", label: "Core Subjects", topics: ["Frontend (JS/TS/React/HTML/CSS)", "Backend (Node, Python, SQL)", "Blockchain & Data Analytics"] },
      { type: "core", label: "System Design", topics: ["CAP theorem & consensus", "Messaging & rate limiting", "6 end-to-end case studies"] },
      { type: "interview", label: "Interview Prep", topics: ["All 18 interview tracks", "Daily mocks from Day 61"] },
      { type: "exam", label: "Company Mocks", topics: ["JP Morgan Code for Good", "Goldman Sachs", "Deloitte", "eLitmus"] },
    ],
    days: build90Day(),
  },
];
