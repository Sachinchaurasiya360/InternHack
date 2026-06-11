// Skill Quiz
export interface Quiz {
  id: number;
  title: string;
  passThreshold: number;
  timeLimitSecs?: number;
  questions: QuizQuestion[];
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex?: number;
  explanation?: string;
}

export interface QuizAttempt {
  id: number;
  score: number;
  passed: boolean;
  createdAt: string;
  quiz: { title: string; skill: { name: string } };
}

// Skill Verification
export type TestDifficulty = "BEGINNER" | "INTERMEDIATE" | "ADVANCED";

export interface SkillTest {
  id: number;
  skillName: string;
  title: string;
  description?: string;
  difficulty: TestDifficulty;
  timeLimitSecs: number;
  passThreshold: number;
  isActive: boolean;
  _count?: { questions: number; attempts: number };
  createdAt: string;
}

export interface SkillTestQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex?: number;
  explanation?: string;
  orderIndex: number;
}

export interface VerifiedSkill {
  id: number;
  skillName: string;
  score: number;
  verifiedAt: string;
  token?: string;
}

export interface SkillTestWithQuestions extends SkillTest {
  questions: SkillTestQuestion[];
  existingVerification?: VerifiedSkill | null;
  questionsPerSession?: number;
  bestAttempt?: {
    id: number;
    score: number;
    passed: boolean;
  } | null;
}

export interface ProctorLog {
  tabSwitches: number;
  focusLosses: number;
  fullscreenExits: number;
  devtoolsAttempts: number;
  copyPasteAttempts: number;
  rightClickAttempts: number;
  faceViolations: { type: "NO_FACE" | "MULTIPLE_FACES"; timestamp: string; duration?: number }[];
  warnings: { type: string; message: string; timestamp: string }[];
  terminated: boolean;
  terminationReason: string | null;
  cameraEnabled: boolean;
  snapshotCount: number;
}

export interface SkillTestAttempt {
  id: number;
  testId: number;
  score: number;
  passed: boolean;
  proctorLog?: ProctorLog;
  proctoringScore?: number;
  autoTerminated?: boolean;
  startedAt: string;
  completedAt?: string;
  test: { title: string; skillName: string };
}

export interface GradedAnswer {
  questionId: number;
  selectedIndex: number;
  correct: boolean;
  explanation?: string | null;
}

export interface SkillTestSubmitResult {
  attempt: { id: number; score: number; passed: boolean };
  score: number;
  passed: boolean;
  correctCount: number;
  totalQuestions: number;
  gradedAnswers: GradedAnswer[];
  token?: string;
}

// Badges
export type BadgeCategory = "CAREER" | "QUIZ" | "SKILL" | "CONTRIBUTION" | "MILESTONE";

export interface Badge {
  id: number;
  name: string;
  slug: string;
  description: string;
  iconUrl?: string;
  category: BadgeCategory;
  criteria: Record<string, unknown>;
  isActive: boolean;
  createdAt: string;
}

export interface StudentBadge {
  id: number;
  studentId: number;
  badgeId: number;
  badge: Badge;
  earnedAt: string;
}
