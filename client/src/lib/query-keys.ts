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
};
