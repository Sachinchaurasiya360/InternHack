import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Blocks,
  BookOpen,
  Brain,
  Code2,
  Coffee,
  Database,
  FileCode2,
  GraduationCap,
  Layers,
  Palette,
  Server,
  Terminal,
  Zap,
} from "lucide-react";

export type TrackCategory = "practice" | "frontend" | "backend" | "data" | "web3";
export type TrackKind = "practice" | "lesson";

export interface Track {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
  borderHover: string;
  path: string;
  kind: TrackKind;
  category: TrackCategory;
  /** Static fallback label (e.g. "Topic-wise", "188 Exercises"). Lesson counts come from lesson-counts.ts. */
  stat: string;
  /** If present, used as the glob key prefix in lesson-counts.ts to compute a live lesson count. */
  lessonCountKey?: string;
}

export const TRACKS: Track[] = [
  // ── Practice ──
  {
    id: "interview",
    title: "Interview Preparation",
    description:
      "Interview questions curated by FAANG engineers - JS, React, Node, Python, SQL, system design, behavioral & more.",
    icon: GraduationCap,
    color: "text-violet-500",
    bgColor: "bg-violet-50 dark:bg-violet-900/30",
    borderHover: "hover:border-violet-200 dark:hover:border-violet-800",
    path: "interview",
    kind: "practice",
    category: "practice",
    stat: "300 Questions",
  },
  {
    id: "dsa",
    title: "DSA",
    description:
      "3,300+ problems handpicked by industry engineers - arrays, trees, graphs, DP, and company-wise question banks.",
    icon: BookOpen,
    color: "text-indigo-500",
    bgColor: "bg-indigo-50 dark:bg-indigo-900/30",
    borderHover: "hover:border-indigo-200 dark:hover:border-indigo-800",
    path: "dsa",
    kind: "practice",
    category: "practice",
    stat: "Topic-wise",
  },
  {
    id: "aptitude",
    title: "Aptitude",
    description:
      "Quantitative, logical reasoning, and verbal ability - company-wise question banks and practice sets.",
    icon: Brain,
    color: "text-purple-500",
    bgColor: "bg-purple-50 dark:bg-purple-900/30",
    borderHover: "hover:border-purple-200 dark:hover:border-purple-800",
    path: "aptitude",
    kind: "practice",
    category: "practice",
    stat: "Topic-wise",
  },

  // ── Frontend ──
  {
    id: "html",
    title: "HTML",
    description:
      "Learn HTML from the ground up - elements, forms, semantic markup, accessibility, and interview essentials.",
    icon: FileCode2,
    color: "text-orange-500",
    bgColor: "bg-orange-50 dark:bg-orange-900/30",
    borderHover: "hover:border-orange-200 dark:hover:border-orange-800",
    path: "html",
    kind: "lesson",
    category: "frontend",
    stat: "Lessons",
    lessonCountKey: "html",
  },
  {
    id: "css",
    title: "CSS",
    description:
      "Master CSS - selectors, flexbox, grid, animations, responsive design, and modern layout techniques.",
    icon: Palette,
    color: "text-blue-500",
    bgColor: "bg-blue-50 dark:bg-blue-900/30",
    borderHover: "hover:border-blue-200 dark:hover:border-blue-800",
    path: "css",
    kind: "lesson",
    category: "frontend",
    stat: "Lessons",
    lessonCountKey: "css",
  },
  {
    id: "javascript",
    title: "JavaScript",
    description:
      "Master every concept from beginner to advanced - closures, async, prototypes, and interview essentials.",
    icon: Code2,
    color: "text-yellow-500",
    bgColor: "bg-yellow-50 dark:bg-yellow-900/30",
    borderHover: "hover:border-yellow-200 dark:hover:border-yellow-800",
    path: "javascript",
    kind: "lesson",
    category: "frontend",
    stat: "Lessons",
    lessonCountKey: "javascript",
  },
  {
    id: "typescript",
    title: "TypeScript",
    description:
      "Type annotations, generics, advanced types, utility types, and TS with React - from basics to interview prep.",
    icon: FileCode2,
    color: "text-cyan-500",
    bgColor: "bg-cyan-50 dark:bg-cyan-900/30",
    borderHover: "hover:border-cyan-200 dark:hover:border-cyan-800",
    path: "typescript",
    kind: "lesson",
    category: "frontend",
    stat: "Lessons",
    lessonCountKey: "typescript",
  },
  {
    id: "react",
    title: "React",
    description:
      "Components, hooks, state management, routing, data fetching, and performance - from JSX to interview prep.",
    icon: Code2,
    color: "text-rose-500",
    bgColor: "bg-rose-50 dark:bg-rose-900/30",
    borderHover: "hover:border-rose-200 dark:hover:border-rose-800",
    path: "react",
    kind: "lesson",
    category: "frontend",
    stat: "Lessons",
    lessonCountKey: "react",
  },

  // ── Backend ──
  {
    id: "nodejs",
    title: "Node.js & Express",
    description:
      "Server-side JavaScript - Node core, Express, REST APIs, middleware, authentication, and databases.",
    icon: Server,
    color: "text-green-600",
    bgColor: "bg-green-50 dark:bg-green-900/30",
    borderHover: "hover:border-green-200 dark:hover:border-green-800",
    path: "nodejs",
    kind: "lesson",
    category: "backend",
    stat: "Lessons",
    lessonCountKey: "nodejs",
  },
  {
    id: "python",
    title: "Python",
    description:
      "Learn Python from basics to advanced - data structures, OOP, decorators, and interview essentials.",
    icon: Terminal,
    color: "text-sky-500",
    bgColor: "bg-sky-50 dark:bg-sky-900/30",
    borderHover: "hover:border-sky-200 dark:hover:border-sky-800",
    path: "python",
    kind: "lesson",
    category: "backend",
    stat: "Lessons",
    lessonCountKey: "python",
  },
  {
    id: "fastapi",
    title: "FastAPI",
    description:
      "Build modern APIs with FastAPI - routing, Pydantic models, dependency injection, auth, and async database integration.",
    icon: Zap,
    color: "text-green-500",
    bgColor: "bg-green-50 dark:bg-green-900/30",
    borderHover: "hover:border-green-200 dark:hover:border-green-800",
    path: "fastapi",
    kind: "lesson",
    category: "backend",
    stat: "Lessons",
    lessonCountKey: "fastapi",
  },
  {
    id: "flask",
    title: "Flask",
    description:
      "Master Flask - routing, Jinja2 templates, blueprints, SQLAlchemy, authentication, and REST API development.",
    icon: Coffee,
    color: "text-teal-500",
    bgColor: "bg-teal-50 dark:bg-teal-900/30",
    borderHover: "hover:border-teal-200 dark:hover:border-teal-800",
    path: "flask",
    kind: "lesson",
    category: "backend",
    stat: "Lessons",
    lessonCountKey: "flask",
  },
  {
    id: "django",
    title: "Django",
    description:
      "Learn Django end-to-end - models, views, templates, admin, DRF, authentication, middleware, and deployment.",
    icon: Layers,
    color: "text-emerald-500",
    bgColor: "bg-emerald-50 dark:bg-emerald-900/30",
    borderHover: "hover:border-emerald-200 dark:hover:border-emerald-800",
    path: "django",
    kind: "lesson",
    category: "backend",
    stat: "Lessons",
    lessonCountKey: "django",
  },

  // ── Data ──
  {
    id: "sql",
    title: "SQL Practice",
    description:
      "Interactive SQL exercises that run in your browser - SELECT, JOIN, subqueries, window functions, and more.",
    icon: Database,
    color: "text-blue-500",
    bgColor: "bg-blue-50 dark:bg-blue-900/30",
    borderHover: "hover:border-blue-200 dark:hover:border-blue-800",
    path: "sql",
    kind: "lesson",
    category: "data",
    stat: "188 Exercises",
  },
  {
    id: "data-analytics",
    title: "Data Analytics & Science",
    description: "NumPy, Pandas, visualization, statistics, EDA, and machine learning basics with Python.",
    icon: BarChart3,
    color: "text-teal-500",
    bgColor: "bg-teal-50 dark:bg-teal-900/30",
    borderHover: "hover:border-teal-200 dark:hover:border-teal-800",
    path: "data-analytics",
    kind: "lesson",
    category: "data",
    stat: "Lessons",
    lessonCountKey: "data-analytics",
  },

  // ── Web3 ──
  {
    id: "blockchain",
    title: "Blockchain",
    description:
      "Smart contract projects from beginner to advanced - ERC-20, NFTs, DeFi, DAOs, ZK proofs, and more.",
    icon: Blocks,
    color: "text-violet-500",
    bgColor: "bg-violet-50 dark:bg-violet-900/30",
    borderHover: "hover:border-violet-200 dark:hover:border-violet-800",
    path: "blockchain",
    kind: "lesson",
    category: "web3",
    stat: "35 Projects",
  },
];

export const CATEGORY_LABEL: Record<TrackCategory, string> = {
  practice: "Practice",
  frontend: "Frontend",
  backend: "Backend",
  data: "Data & SQL",
  web3: "Web3",
};

export const CATEGORY_ORDER: TrackCategory[] = ["practice", "frontend", "backend", "data", "web3"];
