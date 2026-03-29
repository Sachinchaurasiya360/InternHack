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
    name: "appwrite",
    owner: "appwrite",
    description:
      "Open-source backend platform for building web, mobile, and Flutter apps - auth, databases, storage, functions, and messaging.",
    language: "TypeScript",
    techStack: ["Node.js", "Docker", "Redis", "MariaDB"],
    difficulty: "BEGINNER",
    domain: "WEB",
    issueTypes: ["good first issue", "bug", "feature request", "documentation"],
    stars: 46000,
    forks: 4100,
    openIssues: 800,
    url: "https://github.com/appwrite/appwrite",
    tags: ["backend", "baas", "self-hosted", "api"],
    highlights: [
      "Extremely welcoming to first-time contributors",
      "Clear contribution guide and mentoring",
      "Hacktoberfest-friendly every year",
    ],
    trending: true,
    lastUpdated: "2025-03-20",
  },
  {
    id: 2,
    name: "docusaurus",
    owner: "facebook",
    description:
      "Easy-to-maintain documentation websites - build, deploy, and keep beautiful docs with React and Markdown.",
    language: "TypeScript",
    techStack: ["React", "MDX", "Node.js", "Webpack"],
    difficulty: "BEGINNER",
    domain: "WEB",
    issueTypes: ["good first issue", "bug", "feature", "documentation"],
    stars: 57000,
    forks: 8600,
    openIssues: 350,
    url: "https://github.com/facebook/docusaurus",
    tags: ["docs", "react", "static-site", "markdown"],
    highlights: [
      "Great for first-time open source contributors",
      "Many good-first-issue labels available",
      "Used by hundreds of popular projects",
    ],
    trending: false,
    lastUpdated: "2025-03-18",
  },
  {
    id: 3,
    name: "mermaid",
    owner: "mermaid-js",
    description:
      "Generate diagrams and flowcharts from text - Markdown-inspired syntax for charts, Gantt diagrams, class diagrams, and more.",
    language: "JavaScript",
    techStack: ["D3.js", "DOMPurify", "Cytoscape.js"],
    difficulty: "INTERMEDIATE",
    domain: "WEB",
    issueTypes: ["good first issue", "bug", "enhancement", "documentation"],
    stars: 73000,
    forks: 6600,
    openIssues: 900,
    url: "https://github.com/mermaid-js/mermaid",
    tags: ["diagrams", "visualization", "markdown", "charts"],
    highlights: [
      "Well-structured codebase with clear modules",
      "Built-in to GitHub Markdown rendering",
      "Active maintainers who review PRs quickly",
    ],
    trending: true,
    lastUpdated: "2025-03-22",
  },
  {
    id: 4,
    name: "medusa",
    owner: "medusajs",
    description:
      "Open-source Shopify alternative - composable commerce engine for building digital commerce applications.",
    language: "TypeScript",
    techStack: ["Node.js", "Express", "PostgreSQL", "Redis"],
    difficulty: "INTERMEDIATE",
    domain: "WEB",
    issueTypes: ["good first issue", "bug", "feature request"],
    stars: 26000,
    forks: 2700,
    openIssues: 450,
    url: "https://github.com/medusajs/medusa",
    tags: ["ecommerce", "headless", "node", "api"],
    highlights: [
      "Well-documented contribution process",
      "Modular architecture easy to understand",
      "Growing community with active Discord",
    ],
    trending: true,
    lastUpdated: "2025-03-21",
  },
  {
    id: 5,
    name: "label-studio",
    owner: "HumanSignal",
    description:
      "Multi-type data labeling and annotation tool - label text, images, audio, video, and time series for your ML projects.",
    language: "Python",
    techStack: ["Django", "React", "PostgreSQL", "Docker"],
    difficulty: "INTERMEDIATE",
    domain: "AI",
    issueTypes: ["good first issue", "bug", "feature request", "documentation"],
    stars: 20000,
    forks: 2400,
    openIssues: 600,
    url: "https://github.com/HumanSignal/label-studio",
    tags: ["ml", "annotation", "data-labeling", "python"],
    highlights: [
      "Great entry point into AI/ML open source",
      "Python + React stack - accessible to many devs",
      "Friendly maintainers who guide new contributors",
    ],
    trending: false,
    lastUpdated: "2025-03-19",
  },
  {
    id: 6,
    name: "refine",
    owner: "refinedev",
    description:
      "React framework for building data-intensive CRUD applications - admin panels, dashboards, and internal tools in minutes.",
    language: "TypeScript",
    techStack: ["React", "Ant Design", "Material UI", "Chakra UI"],
    difficulty: "BEGINNER",
    domain: "WEB",
    issueTypes: ["good first issue", "bug", "enhancement", "documentation"],
    stars: 29000,
    forks: 2300,
    openIssues: 80,
    url: "https://github.com/refinedev/refine",
    tags: ["react", "crud", "admin-panel", "framework"],
    highlights: [
      "Beginner-friendly with excellent onboarding",
      "Clean TypeScript codebase",
      "Many issues labeled for first-time contributors",
    ],
    trending: false,
    lastUpdated: "2025-03-20",
  },
];
