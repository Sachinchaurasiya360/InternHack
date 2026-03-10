export const queryKeys = {
  // Jobs
  jobs: {
    all: ["jobs"] as const,
    list: (params?: Record<string, string | number>) =>
      ["jobs", "list", params] as const,
    detail: (id: string | number) => ["jobs", "detail", id] as const,
  },

  // Applications
  applications: {
    all: ["applications"] as const,
    mine: () => ["applications", "mine"] as const,
    progress: (id: string | number) =>
      ["applications", "progress", id] as const,
  },

  // ATS
  ats: {
    all: ["ats"] as const,
    history: () => ["ats", "history"] as const,
    detail: (id: string | number) => ["ats", "detail", id] as const,
    usage: () => ["ats", "usage"] as const,
  },

  // Companies
  companies: {
    all: ["companies"] as const,
    list: (params?: Record<string, string | number>) =>
      ["companies", "list", params] as const,
    cities: () => ["companies", "cities"] as const,
    detail: (id: string | number) => ["companies", "detail", id] as const,
    reviews: (id: string | number) =>
      ["companies", "reviews", id] as const,
  },

  // Careers
  careers: {
    all: ["careers"] as const,
    list: () => ["careers", "list"] as const,
    detail: (slug: string) => ["careers", "detail", slug] as const,
    myPaths: () => ["careers", "my-paths"] as const,
    progress: (slug: string) => ["careers", "progress", slug] as const,
  },

  // Admin
  admin: {
    dashboard: () => ["admin", "dashboard"] as const,
    users: (params?: Record<string, string | number>) =>
      ["admin", "users", params] as const,
    subscribers: () => ["admin", "subscribers"] as const,
  },

  // Profile
  profile: {
    me: () => ["profile", "me"] as const,
  },

  // Stats
  stats: {
    landing: () => ["stats", "landing"] as const,
  },

  // Recruiter
  recruiter: {
    talentSearch: (params?: Record<string, string | number>) =>
      ["recruiter", "talent-search", params] as const,
  },

  // Quiz
  quiz: {
    forSkill: (skillId: string | number) => ["quiz", "skill", skillId] as const,
    myAttempts: () => ["quiz", "my-attempts"] as const,
  },

  // GSoC
  gsoc: {
    list: (params?: Record<string, string | number>) =>
      ["gsoc", "list", params] as const,
    detail: (slug: string) => ["gsoc", "detail", slug] as const,
    stats: () => ["gsoc", "stats"] as const,
  },

  // YC Companies
  yc: {
    list: (params?: Record<string, string | number>) =>
      ["yc", "list", params] as const,
    detail: (slug: string) => ["yc", "detail", slug] as const,
    stats: () => ["yc", "stats"] as const,
  },

  // Open Source
  opensource: {
    all: ["opensource"] as const,
    list: (params?: Record<string, string | number>) =>
      ["opensource", "list", params] as const,
    detail: (id: number) => ["opensource", "detail", id] as const,
  },

  // Blog
  blog: {
    list: (params?: Record<string, string | number>) =>
      ["blog", "list", params] as const,
    detail: (slug: string) => ["blog", "detail", slug] as const,
    featured: () => ["blog", "featured"] as const,
    admin: (params?: Record<string, string | number>) =>
      ["blog", "admin", params] as const,
  },

  // Aptitude
  aptitude: {
    categories: () => ["aptitude", "categories"] as const,
    topic: (slug: string) => ["aptitude", "topic", slug] as const,
    companies: () => ["aptitude", "companies"] as const,
    company: (name: string) => ["aptitude", "company", name] as const,
    progress: () => ["aptitude", "progress"] as const,
  },

  // Skill Tests
  skillTests: {
    list: (params?: Record<string, string | number>) =>
      ["skill-tests", "list", params] as const,
    detail: (id: number) => ["skill-tests", "detail", id] as const,
    myAttempts: () => ["skill-tests", "my-attempts"] as const,
    myVerified: () => ["skill-tests", "my-verified"] as const,
    studentVerified: (studentId: number) =>
      ["skill-tests", "student-verified", studentId] as const,
  },

  // SQL Practice
  sql: {
    progress: () => ["sql", "progress"] as const,
  },

  // DSA Practice
  dsa: {
    topics: (filter?: string) => ["dsa", "topics", filter] as const,
    topic: (slug: string) => ["dsa", "topic", slug] as const,
    progress: () => ["dsa", "progress"] as const,
    bookmarks: () => ["dsa", "bookmarks"] as const,
    companies: () => ["dsa", "companies"] as const,
    company: (name: string) => ["dsa", "company", name] as const,
    patterns: () => ["dsa", "patterns"] as const,
    pattern: (name: string) => ["dsa", "pattern", name] as const,
    sheets: () => ["dsa", "sheets"] as const,
  },
};
