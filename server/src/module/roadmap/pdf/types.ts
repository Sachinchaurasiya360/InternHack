export type PdfTheme = "light" | "dark";

export interface RoadmapPdfInput {
  theme?: PdfTheme;
  user: { name: string };
  roadmap: {
    title: string;
    shortDescription: string;
    estimatedHours: number;
    outcomes: string[];
    prerequisites: string[];
  };
  enrollment: {
    hoursPerWeek: number;
    preferredDays: string[];
    startDate: Date;
    targetEndDate: Date;
    experienceLevel: string;
    goal: string;
  };
  weeklyPlan: { week: number; topicSlugs: string[]; totalHours: number }[];
  sections: {
    title: string;
    summary: string;
    orderIndex: number;
    topics: {
      slug: string;
      title: string;
      summary: string;
      contentMd?: string;
      estimatedHours: number;
      difficulty: number;
      miniProject: string | null;
      selfCheck: string | null;
      resources: { kind: string; title: string; url: string; source: string | null }[];
    }[];
  }[];
}

export interface CertificateInput {
  theme?: PdfTheme;
  userName: string;
  roadmapTitle: string;
  completedAt: Date;
}
