// DSA Practice
export interface DsaTopic {
  id: number;
  name: string;
  slug: string;
  description?: string;
  orderIndex: number;
  problemCount: number;
  solvedCount: number;
}

export interface DsaTopicsResponse {
  uniqueProblems: number;
  topics: DsaTopic[];
}

export interface DsaProblem {
  id: number;
  title: string;
  slug: string;
  difficulty: string;
  leetcodeUrl?: string;
  gfgUrl?: string;
  articleUrl?: string;
  videoUrl?: string;
  hackerrankUrl?: string;
  codechefUrl?: string;
  tags: string[];
  companies: string[];
  hints: string[];
  sheets: string[];
  acceptanceRate?: string;
  solved: boolean;
  notes?: string | null;
  bookmarked?: boolean;
  labels?: string[];
}

export interface DsaTopicDetail {
  id: number;
  name: string;
  slug: string;
  description?: string;
  orderIndex: number;
  totalProblems: number;
  totalSolved: number;
  totalPages: number;
  page: number;
  problems: DsaProblem[];
}

export interface SolutionStep {
  stepNumber: number;
  description: string;
  variables: Record<string, string>;
  highlightLine?: number;
  isKeyStep?: boolean;
}

export interface DsaProblemDetail {
  id: number;
  title: string;
  slug: string;
  difficulty: string;
  leetcodeId?: number;
  leetcodeUrl?: string;
  gfgUrl?: string;
  articleUrl?: string;
  videoUrl?: string;
  hackerrankUrl?: string;
  codechefUrl?: string;
  tags: string[];
  companies: string[];
  hints: string[];
  sheets: string[];
  description?: string;
  examples?: string;
  constraints?: string;
  acceptanceRate?: string;
  totalAccepted?: number;
  totalSubmissions?: number;
  similarQuestions?: {
    title: string;
    slug: string;
    difficulty: string;
    url: string;
  }[];
  category?: string;
  isPremium: boolean;
  solved: boolean;
  bookmarked: boolean;
  notes?: string | null;
  solutionSteps?: SolutionStep[] | null;
  solutionCode?: string | null;
}

export interface DsaProgress {
  totalProblems: number;
  totalSolved: number;
  byDifficulty: {
    easy: { total: number; solved: number };
    medium: { total: number; solved: number };
    hard: { total: number; solved: number };
  };
}

export interface DsaApproachEntry {
  title: string;
  complexity: string;
  content: string;
}

export interface DsaSimilarProblem {
  id: number;
  title: string;
  slug: string;
  difficulty: string;
  tags: string[];
}

export interface DsaCompany {
  name: string;
  count: number;
  solved: number;
}

export interface DsaPattern {
  name: string;
  count: number;
}

export interface DsaCompanyTrackStats {
  company: string;
  total: number;
  solved: number;
  difficultyBreakdown: Record<string, { total: number; solved: number }>;
}

export interface DsaSheetStats {
  name: string;
  total: number;
  solved: number;
}

export interface DsaList {
  slug: string;
  title: string;
  description: string;
  total: number;
  solved: number;
  estimatedHours: number;
}

export interface DsaBookmarkItem {
  id: number;
  problemId: number;
  title: string;
  slug: string;
  difficulty: string;
  leetcodeUrl?: string;
  gfgUrl?: string;
  tags: string[];
  companies: string[];
  sheets: string[];
  acceptanceRate?: string;
  solved: boolean;
  labels?: string[];
  createdAt: string;
}

// ── DSA custom problem labels (tagging) ──

export interface DsaMyLabelsResponse {
  /** Map of problemId → labels the student attached to that problem. */
  byProblem: Record<number, string[]>;
  /** Distinct, sorted list of every custom label the student has created. */
  allLabels: string[];
}

export interface DsaLabelMutationResponse {
  problemId: number;
  label: string;
  /** The problem's full label set after the mutation. */
  labels: string[];
}

export interface DsaSystemLabel {
  label: string;
  emoji: string;
}

/** System-suggested labels surfaced in the label dropdown. */
export const DSA_SYSTEM_LABELS: DsaSystemLabel[] = [
  { emoji: "⭐", label: "Important" },
  { emoji: "🔄", label: "Need Revisit" },
  { emoji: "💼", label: "Was Asked in Interview" },
  { emoji: "🏆", label: "Contest Problem" },
  { emoji: "✅", label: "Company-specific" },
];

/** Maximum labels a student may attach to one problem (mirrors the server cap). */
export const DSA_MAX_LABELS_PER_PROBLEM = 5;

export interface DsaCompanyProblem {
  id: number;
  title: string;
  slug: string;
  difficulty: string;
  leetcodeUrl?: string;
  gfgUrl?: string;
  articleUrl?: string;
  videoUrl?: string;
  hackerrankUrl?: string;
  codechefUrl?: string;
  tags: string[];
  companies: string[];
  hints: string[];
  sheets: string[];
  acceptanceRate?: string;
  solved: boolean;
  notes?: string | null;
  bookmarked: boolean;
}

export interface DsaPaginatedProblems {
  problems: DsaCompanyProblem[];
  total: number;
  totalPages: number;
  page: number;
}

// DSA Code Execution
export type DsaLanguage = "python" | "cpp" | "java";

export interface DsaTestCaseResult {
  input: string;
  expected: string;
  actual: string;
  passed: boolean;
  label: string | null;
  timeMs: number;
  memoryKb: number;
  statusId: number;
  statusDescription: string;
  stderr: string | null;
  compileOutput: string | null;
}

export interface DsaExecutionResult {
  passed: number;
  total: number;
  allPassed: boolean;
  results: DsaTestCaseResult[];
  submissionId: number;
}

export interface DsaCodeReview {
  timeComplexity: string;
  spaceComplexity: string;
  readability: {
    score: number;
    feedback: string;
  };
  edgeCases: string[];
  suggestions: string[];
}

export interface DsaStreak {
  currentStreak: number;
  longestStreak: number;
  solvedToday: boolean;
  lastSolvedDate: string | null;
  activeDays: string[];
}

export interface DsaTopicAccuracy {
  topic: string;
  total: number;
  solved: number;
  percentage: number;
}

export interface DsaWeeklyTrend {
  weekStart: string;
  count: number;
}

export interface DsaMonthlyTrend {
  month: string;
  count: number;
}

export interface DsaAnalytics {
  totalSolved: number;
  totalProblems: number;
  byDifficulty: {
    easy: { total: number; solved: number };
    medium: { total: number; solved: number };
    hard: { total: number; solved: number };
  };
  topicAccuracy: DsaTopicAccuracy[];
  weeklyTrend: DsaWeeklyTrend[];
  monthlyTrend: DsaMonthlyTrend[];
}

export interface DsaSubmissionSummary {
  id: number;
  language: DsaLanguage;
  code: string;
  passed: number;
  total: number;
  allPassed: boolean;
  timeMs: number | null;
  memoryKb: number | null;
  createdAt: string;
}

// LeetCode Import
export interface LeetcodeImportPreviewItem {
  problemId: number;
  title: string;
  difficulty: string;
  slug: string;
  solvedAt: string | null;
}

export interface LeetcodeImportPreview {
  matched: number;
  unmatched: number;
  alreadySolved: number;
  newSolves: number;
  token: string;
  preview: LeetcodeImportPreviewItem[];
  lastImport?: {
    importedAt: string;
    username: string | null;
    source: string;
  } | null;
}

export interface LeetcodeImportResult {
  imported: number;
  skipped: number;
  importedAt: string;
}

export interface LeetcodeImportStatus {
  lastImport: {
    importedAt: string;
    username: string | null;
    source: string;
    matched: number;
    imported: number;
  } | null;
}

// Aptitude Practice
export interface AptitudeCategory {
  id: number;
  name: string;
  slug: string;
  description?: string;
  topicCount: number;
  questionCount: number;
  answeredCount: number;
  topics: AptitudeTopic[];
}

export interface AptitudeTopic {
  id: number;
  name: string;
  slug: string;
  description?: string;
  questionCount: number;
  answeredCount: number;
  correctCount: number;
}

export interface AptitudeQuestion {
  id: number;
  question: string;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
  optionE?: string;
  correctAnswer?: string;
  explanation?: string;
  difficulty: string;
  companies: string[];
  answered: boolean;
  correct: boolean;
  topicName?: string;
  topicSlug?: string;
}

export type AptitudeDifficultyLevel = "EASY" | "MEDIUM" | "HARD";

export interface AptitudeTopicDetail {
  id: number;
  name: string;
  slug: string;
  description?: string;
  categoryName: string;
  categorySlug: string;
  totalQuestions: number;
  currentDifficulty?: AptitudeDifficultyLevel;
  page: number;
  totalPages: number;
  questions: AptitudeQuestion[];
}

export interface AptitudeAnswerResult {
  correct: boolean;
  correctAnswer: string;
  explanation?: string;
  currentDifficulty: AptitudeDifficultyLevel;
  previousDifficulty: AptitudeDifficultyLevel;
  difficultyChange: "increased" | "decreased" | null;
}

export interface AptitudeCompany {
  name: string;
  count: number;
}

export interface AptitudeCompanyQuestions {
  company: string;
  total: number;
  page: number;
  totalPages: number;
  questions: AptitudeQuestion[];
}

export interface AptitudeProgress {
  totalQuestions: number;
  totalAnswered: number;
  totalCorrect: number;
  currentStreak: number;
}

export interface AptitudeWeakAreaTopic {
  topicId: number;
  topicName: string;
  topicSlug: string;
  categoryName: string;
  categorySlug: string;
  answered: number;
  correct: number;
  accuracy: number;
  isWeak: boolean;
}

export interface AptitudeWeakAreas {
  totalAnswered: number;
  minimumAnswered: number;
  isReady: boolean;
  topics: AptitudeWeakAreaTopic[];
  focusRecommendations: AptitudeWeakAreaTopic[];
}
