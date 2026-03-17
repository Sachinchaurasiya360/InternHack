import type { InterviewSection } from "./types";

export const interviewSections: InterviewSection[] = [
  {
    id: "javascript-interview",
    title: "JavaScript Interview",
    description: "Closures, hoisting, event loop, prototypes, promises, and tricky output questions.",
    orderIndex: 0,
    level: "Intermediate",
  },
  {
    id: "react-interview",
    title: "React Interview",
    description: "Hooks, virtual DOM, reconciliation, state management, performance, and component patterns.",
    orderIndex: 1,
    level: "Intermediate",
  },
  {
    id: "nodejs-interview",
    title: "Node.js Interview",
    description: "Event loop, streams, clustering, middleware, REST API design, and error handling.",
    orderIndex: 2,
    level: "Intermediate",
  },
  {
    id: "typescript-interview",
    title: "TypeScript Interview",
    description: "Type system, generics, utility types, type guards, declaration merging, and advanced patterns.",
    orderIndex: 3,
    level: "Intermediate",
  },
  {
    id: "python-interview",
    title: "Python Interview",
    description: "GIL, decorators, generators, metaclasses, memory management, and Pythonic patterns.",
    orderIndex: 4,
    level: "Intermediate",
  },
  {
    id: "sql-database-interview",
    title: "SQL & Database Interview",
    description: "Joins, indexing, normalization, transactions, query optimization, and schema design.",
    orderIndex: 5,
    level: "Intermediate",
  },
  {
    id: "system-design-interview",
    title: "System Design Basics",
    description: "Load balancing, caching, databases, microservices, scaling, and common design problems.",
    orderIndex: 6,
    level: "Advanced",
  },
  {
    id: "behavioral-interview",
    title: "Behavioral & HR",
    description: "Tell me about yourself, strengths/weaknesses, conflict resolution, leadership, and STAR method.",
    orderIndex: 7,
    level: "Beginner",
  },
  {
    id: "html-css-interview",
    title: "HTML & CSS Interview",
    description: "Semantic HTML, box model, flexbox, grid, specificity, accessibility, and responsive design.",
    orderIndex: 8,
    level: "Beginner",
  },
  {
    id: "git-devops-interview",
    title: "Git & DevOps Interview",
    description: "Git branching, merge vs rebase, CI/CD, Docker basics, and deployment strategies.",
    orderIndex: 9,
    level: "Intermediate",
  },
];
