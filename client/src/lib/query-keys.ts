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
    statusByJob: (jobId: string | number) =>
      ["applications", "status-by-job", jobId] as const,
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

  // Admin
  admin: {
    dashboard: () => ["admin", "dashboard"] as const,
    users: (params?: Record<string, string | number>) =>
      ["admin", "users", params] as const,
    subscribers: () => ["admin", "subscribers"] as const,
    aiConfig: () => ["admin", "ai-config"] as const,
    aiStats: (range: string) => ["admin", "ai-stats", range] as const,
    errorLogs: (params?: Record<string, string | number>) =>
      ["admin", "error-logs", params] as const,
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
    myRequests: () => ["opensource", "my-requests"] as const,
    allRequests: (params?: Record<string, string | number>) =>
      ["opensource", "all-requests", params] as const,
  },

  // Blog
  blog: {
    list: (params?: Record<string, string | number>) =>
      ["blog", "list", params] as const,
    detail: (slug: string) => ["blog", "detail", slug] as const,
    featured: () => ["blog", "featured"] as const,
    related: (slug: string) => ["blog", "related", slug] as const,
    byTags: (tags: string) => ["blog", "by-tags", tags] as const,
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

  // Internships
  internships: {
    list: (params?: Record<string, string | number>) =>
      ["internships", "list", params] as const,
    stats: () => ["internships", "stats"] as const,
  },

  // Professors
  professors: {
    list: (params?: Record<string, string | number>) =>
      ["professors", "list", params] as const,
    stats: () => ["professors", "stats"] as const,
  },

  // Badges
  badges: {
    all: () => ["badges", "all"] as const,
    my: () => ["badges", "my"] as const,
    student: (id: number) => ["badges", "student", id] as const,
    admin: (params?: Record<string, string | number>) => ["badges", "admin", params] as const,
  },

  // Talent Pools
  talentPools: {
    list: () => ["talent-pools", "list"] as const,
    detail: (poolId: number) => ["talent-pools", "detail", poolId] as const,
  },

  // Campus Drives
  campusDrives: {
    recruiter: (params?: Record<string, string | number>) => ["campus-drives", "recruiter", params] as const,
    detail: (id: number) => ["campus-drives", "detail", id] as const,
    registrations: (id: number) => ["campus-drives", "registrations", id] as const,
    eligible: (params?: Record<string, string | number>) => ["campus-drives", "eligible", params] as const,
    my: () => ["campus-drives", "my"] as const,
  },

  // HR Contacts
  hrContacts: {
    list: (params?: Record<string, string | number>) =>
      ["hr-contacts", "list", params] as const,
    stats: () => ["hr-contacts", "stats"] as const,
  },

  // Email Campaigns
  emailCampaigns: {
    list: () => ["email-campaigns", "list"] as const,
    detail: (id: number) => ["email-campaigns", "detail", id] as const,
  },

  // Job Feed (InternHack AI)
  jobFeed: {
    feed: (page: number) => ["job-feed", "feed", page] as const,
    preferences: () => ["job-feed", "preferences"] as const,
    saved: () => ["job-feed", "saved"] as const,
    stats: () => ["job-feed", "stats"] as const,
  },
  jobAgent: {
    conversation: () => ["job-agent", "conversation"] as const,
  },

  // DSA Practice
  dsa: {
    topics: (filter?: string) => ["dsa", "topics", filter] as const,
    topic: (slug: string, page?: number, filters?: Record<string, string | undefined>) => ["dsa", "topic", slug, page, filters] as const,
    problem: (slug: string) => ["dsa", "problem", slug] as const,
    progress: () => ["dsa", "progress"] as const,
    bookmarks: () => ["dsa", "bookmarks"] as const,
    companies: () => ["dsa", "companies"] as const,
    company: (name: string, page?: number) => ["dsa", "company", name, page] as const,
    patterns: () => ["dsa", "patterns"] as const,
    pattern: (name: string, page?: number) => ["dsa", "pattern", name, page] as const,
    sheets: () => ["dsa", "sheets"] as const,
    submissions: (problemId: number) => ["dsa", "submissions", problemId] as const,
  },
};
