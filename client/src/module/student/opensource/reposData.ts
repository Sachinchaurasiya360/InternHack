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

