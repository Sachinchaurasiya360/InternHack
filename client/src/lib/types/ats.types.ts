// ATS Score
export interface AtsCategoryScores {
  formatting: number;
  keywords: number;
  experience: number;
  skills: number;
  education: number;
  impact: number;
}

export interface AtsKeywordAnalysis {
  found: string[];
  partial: string[];
  missing: string[];
}

export interface AtsScore {
  id: number;
  studentId: number;
  resumeUrl: string;
  jobTitle?: string;
  jobDescription?: string;
  overallScore: number;
  categoryScores: AtsCategoryScores;
  suggestions: string[];
  keywordAnalysis: AtsKeywordAnalysis;
  createdAt: string;
  updatedAt: string;
}

// Usage tracking
export interface UsageItem {
  action: "ATS_SCORE" | "COVER_LETTER" | "GENERATE_RESUME" | "DSA_EXECUTE";
  used: number;
  limit: number;
}

export interface UsageStats {
  tier: "FREE" | "PREMIUM";
  usage: UsageItem[];
}

// Cover Letter
export type CoverLetterTone = "professional" | "friendly" | "enthusiastic" | "technical" | "creative" | "formal" | "concise" | "startup";

export interface CoverLetterInput {
  jobDescription: string;
  jobTitle?: string;
  companyName?: string;
  keySkills?: string;
  tone: CoverLetterTone;
}
