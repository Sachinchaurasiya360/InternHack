export interface OpenSourceRepo {
  id: number;
  name: string;
  owner: string;
  description: string;
  language: string;
  techStack: string[];
  difficulty: "BEGINNER" | "INTERMEDIATE" | "ADVANCED";
  domain: "AI" | "WEB" | "DEVOPS" | "MOBILE" | "BLOCKCHAIN" | "DATA" | "SECURITY" | "CLOUD" | "GAMING" | "OTHER";
  issueTypes: string[];
  stars: number;
  forks: number;
  openIssues: number;
  url: string;
  logo?: string;
  tags: string[];
  highlights: string[];
  trending: boolean;
  lastUpdated: string;
}

export const REPO_DOMAINS = [
  { key: "ALL", label: "All Domains", icon: "🌐" },
  { key: "WEB", label: "Web Dev", icon: "🌍" },
  { key: "AI", label: "AI / ML", icon: "🤖" },
  { key: "DEVOPS", label: "DevOps", icon: "⚙️" },
  { key: "MOBILE", label: "Mobile", icon: "📱" },
  { key: "DATA", label: "Data", icon: "📊" },
  { key: "SECURITY", label: "Security", icon: "🔒" },
  { key: "CLOUD", label: "Cloud", icon: "☁️" },
  { key: "BLOCKCHAIN", label: "Blockchain", icon: "⛓️" },
  { key: "GAMING", label: "Gaming", icon: "🎮" },
  { key: "OTHER", label: "Other", icon: "📦" },
] as const;

export const DIFFICULTY_OPTIONS = [
  { key: "ALL", label: "All Levels", color: "text-gray-400" },
  { key: "BEGINNER", label: "Beginner Friendly", color: "text-emerald-400" },
  { key: "INTERMEDIATE", label: "Intermediate", color: "text-amber-400" },
  { key: "ADVANCED", label: "Advanced", color: "text-rose-400" },
] as const;

export const SORT_OPTIONS = [
  { key: "stars", label: "Most Stars", order: "desc" },
  { key: "forks", label: "Most Forks", order: "desc" },
  { key: "openIssues", label: "Most Open Issues", order: "desc" },
  { key: "lastUpdated", label: "Recently Updated", order: "desc" },
  { key: "name", label: "Name A–Z", order: "asc" },
] as const;

export const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  Rust: "#dea584",
  Go: "#00ADD8",
  Java: "#b07219",
  "C++": "#f34b7d",
  Ruby: "#701516",
  Swift: "#F05138",
  Kotlin: "#A97BFF",
  Dart: "#00B4AB",
};

export const reposData: OpenSourceRepo[] = [
  {
    id: 1,
    name: "next.js",
    owner: "vercel",
    description:
      "The React Framework - Build full-stack web applications with server-side rendering, static generation, and more.",
    language: "TypeScript",
    techStack: ["React", "Node.js", "Webpack", "Turbopack"],
    difficulty: "INTERMEDIATE",
    domain: "WEB",
    issueTypes: ["good first issue", "bug", "feature request", "documentation"],
    stars: 127000,
    forks: 27000,
    openIssues: 2900,
    url: "https://github.com/vercel/next.js",
    tags: ["react", "ssr", "framework", "web"],
    highlights: [
      "One of the most popular React frameworks",
      "Actively maintained by Vercel",
      "Extensive documentation and learning resources",
    ],
    trending: true,
    lastUpdated: "2024-12-15",
  },
  {
    id: 2,
    name: "langchain",
    owner: "langchain-ai",
    description:
      "Build context-aware reasoning applications with LangChain - the framework for developing apps powered by language models.",
    language: "Python",
    techStack: ["OpenAI", "HuggingFace", "Pinecone", "ChromaDB"],
    difficulty: "INTERMEDIATE",
    domain: "AI",
    issueTypes: ["good first issue", "enhancement", "bug"],
    stars: 98000,
    forks: 15800,
    openIssues: 1350,
    url: "https://github.com/langchain-ai/langchain",
    tags: ["ai", "llm", "nlp", "python"],
    highlights: [
      "Leading LLM application framework",
      "Rapid growth and community",
      "Comprehensive docs and tutorials",
    ],
    trending: true,
    lastUpdated: "2024-12-14",
  },
  {
    id: 3,
    name: "kubernetes",
    owner: "kubernetes",
    description:
      "Production-Grade Container Orchestration - automate deploying, scaling, and managing containerized applications.",
    language: "Go",
    techStack: ["Docker", "etcd", "gRPC", "Prometheus"],
    difficulty: "ADVANCED",
    domain: "DEVOPS",
    issueTypes: ["good first issue", "kind/bug", "kind/feature"],
    stars: 112000,
    forks: 39000,
    openIssues: 2200,
    url: "https://github.com/kubernetes/kubernetes",
    tags: ["containers", "orchestration", "cloud-native", "devops"],
    highlights: [
      "Industry standard for container orchestration",
      "Massive contributor community",
      "CNCF graduated project",
    ],
    trending: false,
    lastUpdated: "2024-12-13",
  },
  {
    id: 4,
    name: "flutter",
    owner: "flutter",
    description:
      "Google's cross-platform UI toolkit for building natively compiled applications for mobile, web, and desktop.",
    language: "Dart",
    techStack: ["Dart", "Skia", "Impeller"],
    difficulty: "BEGINNER",
    domain: "MOBILE",
    issueTypes: ["good first contribution", "waiting for customer response", "p: webview"],
    stars: 167000,
    forks: 27500,
    openIssues: 12500,
    url: "https://github.com/flutter/flutter",
    tags: ["mobile", "cross-platform", "dart", "ui"],
    highlights: [
      "Beginner-friendly with great documentation",
      "Single codebase for iOS, Android, Web, Desktop",
      "Google-backed with rich widget library",
    ],
    trending: true,
    lastUpdated: "2024-12-15",
  },
  {
    id: 5,
    name: "vite",
    owner: "vitejs",
    description:
      "Next-generation frontend tooling - blazing fast dev server with instant HMR and optimized production builds.",
    language: "TypeScript",
    techStack: ["Rollup", "esbuild", "PostCSS"],
    difficulty: "BEGINNER",
    domain: "WEB",
    issueTypes: ["good first issue", "p3-minor-bug", "enhancement"],
    stars: 69000,
    forks: 6200,
    openIssues: 520,
    url: "https://github.com/vitejs/vite",
    tags: ["bundler", "dev-tools", "frontend", "web"],
    highlights: [
      "Extremely fast build tool",
      "Easy to contribute - well organized codebase",
      "Framework-agnostic",
    ],
    trending: false,
    lastUpdated: "2024-12-12",
  },
  {
    id: 6,
    name: "prisma",
    owner: "prisma",
    description:
      "Next-generation ORM for Node.js and TypeScript - type-safe database access with auto-generated query builder.",
    language: "TypeScript",
    techStack: ["Rust", "Node.js", "PostgreSQL", "MySQL", "SQLite"],
    difficulty: "INTERMEDIATE",
    domain: "DATA",
    issueTypes: ["good first issue", "bug/0-still-open", "kind/feature"],
    stars: 40000,
    forks: 1560,
    openIssues: 3100,
    url: "https://github.com/prisma/prisma",
    tags: ["orm", "database", "typescript", "node"],
    highlights: [
      "Modern type-safe ORM",
      "Great for TypeScript developers",
      "Active community and frequent releases",
    ],
    trending: false,
    lastUpdated: "2024-12-14",
  },
];
