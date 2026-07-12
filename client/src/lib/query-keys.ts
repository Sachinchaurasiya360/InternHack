export const queryKeys = {
  // Hackathons
  hackathons: {
    all: ["hackathons"] as const,
    list: () => ["hackathons", "list"] as const,
    myParticipations: () => ["hackathons", "my-participations"] as const,
  },

  // Applications
  applications: {
    all: ["applications"] as const,
    mine: () => ["applications", "mine"] as const,
  },

  // ATS
  ats: {
    all: ["ats"] as const,
    usage: () => ["ats", "usage"] as const,
  },
  coverLetter: {
    history: () => ["cover-letter", "history"] as const,
    detail: (id: number) => ["cover-letter", "detail", id] as const,
  },

  // Companies
  companies: {
    all: ["companies"] as const,
    list: (params?: Record<string, string | number | undefined>) =>
      ["companies", "list", params] as const,
    cities: () => ["companies", "cities"] as const,
    detail: (id: string | number) => ["companies", "detail", id] as const,
    reviews: (id: string | number) => ["companies", "reviews", id] as const,
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

  // GSoC
  gsoc: {
    list: (params?: Record<string, string | number>) =>
      ["gsoc", "list", params] as const,
    detail: (slug: string) => ["gsoc", "detail", slug] as const,
    stats: () => ["gsoc", "stats"] as const,
    repos: (slug: string) => ["gsoc", "repos", slug] as const,
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
    list: (params?: Record<string, string | number | string[]>) =>
      ["opensource", "list", params] as const,
    detail: (id: number) => ["opensource", "detail", id] as const,
    myRequests: () => ["opensource", "my-requests"] as const,
    trend: (startDate?: string, endDate?: string) =>
      ["opensource", "trend", startDate, endDate] as const,
    hacktoberfest: () => ["opensource", "hacktoberfest"] as const,
    allRequests: (params?: Record<string, string | number>) =>
      ["opensource", "all-requests", params] as const,
    stats: () => ["opensource", "stats"] as const,
    bookmarks: () => ["opensource", "bookmarks"] as const,
  },

  // Blog
  blog: {
    list: (params?: Record<string, string | number>) =>
      ["blog", "list", params] as const,
    detail: (slug: string) => ["blog", "detail", slug] as const,
    featured: () => ["blog", "featured"] as const,
    related: (slug: string) => ["blog", "related", slug] as const,
    byTags: (tags: string) => ["blog", "by-tags", tags] as const,
  },

  // Aptitude
  aptitude: {
    categories: () => ["aptitude", "categories"] as const,
    topic: (slug: string) => ["aptitude", "topic", slug] as const,
    companies: () => ["aptitude", "companies"] as const,
    company: (name: string) => ["aptitude", "company", name] as const,
    progress: () => ["aptitude", "progress"] as const,
    weakAreas: () => ["aptitude", "weak-areas"] as const,
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

  // Scraped / external job aggregator
  scrapedJobs: {
    all: ["scraped-jobs"] as const,
    sources: () => ["scraped-jobs", "sources"] as const,
    list: (params?: Record<string, string | number | undefined>) =>
      ["scraped-jobs", "list", params] as const,
    detail: (id: string | number) => ["scraped-jobs", "detail", id] as const,
  },
  
  externalJobs: {
    list: (params?: Record<string, string | number | undefined>) =>
      ["external-job", "list", params] as const,
    detail: (slug: string) => ["external-job", slug] as const,
    similar: (id: string | number) => ["external-job-similar", id] as const,
    status: (id: string | number) => ["external-job-status", id] as const,
  },


  // Saved Candidates
  savedCandidates: {
    list: () => ["saved-candidates", "list"] as const,
    ids: () => ["saved-candidates", "ids"] as const,
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

  // Interview Experiences
  interviews: {
    all: ["interviews"] as const,
    list: (params?: Record<string, string | number | boolean>) =>
      ["interviews", "list", params] as const,
    detail: (id: number) => ["interviews", "detail", id] as const,
    companies: (params?: Record<string, string | number>) =>
      ["interviews", "companies", params] as const,
    companySummary: (slug: string) =>
      ["interviews", "company-summary", slug] as const,
    topQuestions: (slug: string) =>
      ["interviews", "top-questions", slug] as const,
  },

  // Funding Signals
  signals: {
    all: ["signals"] as const,
    list: (params?: Record<string, string | number | boolean | undefined>) =>
      ["signals", "list", params] as const,
    detail: (id: number) => ["signals", "detail", id] as const,
    sources: () => ["signals", "sources"] as const,
    stats: () => ["signals", "stats"] as const,
  },

  // DSA Practice
  dsa: {
    topics: (filter?: string) => ["dsa", "topics", filter] as const,
    topic: (
      slug: string,
      page?: number,
      filters?: Record<string, string | undefined>,
    ) => ["dsa", "topic", slug, page, filters] as const,
    problem: (slug: string) => ["dsa", "problem", slug] as const,
    progress: () => ["dsa", "progress"] as const,
    bookmarks: () => ["dsa", "bookmarks"] as const,
    labels: () => ["dsa", "labels"] as const,
    companies: () => ["dsa", "companies"] as const,
    company: (name: string, page?: number) =>
      ["dsa", "company", name, page] as const,
    companyTrackStats: (name: string) =>
      ["dsa", "company", name, "track-stats"] as const,
    sheets: () => ["dsa", "sheets"] as const,
    submissions: (problemId: number) =>
      ["dsa", "submissions", problemId] as const,
    testCases: (problemId: number) =>
      ["dsa", "testcases", problemId] as const,
    activity: (year: number) => ["dsa", "activity", year] as const,
    similar: (id: number) => ["dsa", "similar", id] as const,
    approaches: (slug: string) => ["dsa", "approaches", slug] as const,
  },
  // Roadmaps
  roadmaps: {
    all: ["roadmaps"] as const,
    list: (params?: Record<string, string | number>) =>
      ["roadmaps", "list", params] as const,
    detail: (slug: string) => ["roadmaps", "detail", slug] as const,
    enrollments: () => ["roadmaps", "enrollments"] as const,
    enrollmentDetail: (id: number) =>
      ["roadmaps", "enrollment-detail", id] as const,
    enrollmentAnalytics: (id: number) =>
      ["roadmaps", "enrollment-analytics", id] as const,
    topic: (slug: string, topicSlug: string) =>
      ["roadmaps", "topic", slug, topicSlug] as const,
    community: () => ["roadmaps", "community"] as const,
    studyBuddy: (roadmapId: number) =>
      ["roadmaps", "study-buddy", roadmapId] as const,
  },
  // Notes
  notes: {
    list: (filters?: Record<string, string | undefined>) => ["notes", "list", filters] as const,
    detail: (contentType: string, contentId: string | number) => ["notes", "detail", contentType, contentId] as const,
  },

  // Peer Mock Interview
  peerMockInterview: {
    preferences: () => ["peer-mock-interview", "preferences"] as const,
    upcoming: () => ["peer-mock-interview", "upcoming"] as const,
    matches: () => ["peer-mock-interview", "matches"] as const,
    history: (userId?: number) => ["peer-mock-interview", "history", userId] as const,
  },

  // Expert Mock Interview Sessions
  expertSession: {
    availableSlots: () => ["expert-session", "available-slots"] as const,
    status: (id: number) => ["expert-session", "status", id] as const,
    mySessions: () => ["expert-session", "my-sessions"] as const,
    adminAvailabilityBlocks: () => ["admin", "expert-session", "availability-blocks"] as const,
    adminBookings: () => ["admin", "expert-session", "bookings"] as const,
  },
};
