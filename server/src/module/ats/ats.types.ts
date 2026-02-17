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
  missing: string[];
}

export interface AtsScoreResult {
  overallScore: number;
  categoryScores: AtsCategoryScores;
  suggestions: string[];
  keywordAnalysis: AtsKeywordAnalysis;
}

export interface ScoreResumeInput {
  resumeUrl: string;
  jobTitle?: string | undefined;
  jobDescription?: string | undefined;
}
