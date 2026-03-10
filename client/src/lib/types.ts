export type UserRole = "STUDENT" | "RECRUITER" | "ADMIN";
export type JobStatus = "DRAFT" | "PUBLISHED" | "CLOSED" | "ARCHIVED";
export type ApplicationStatus = "APPLIED" | "IN_PROGRESS" | "SHORTLISTED" | "REJECTED" | "HIRED" | "WITHDRAWN";
export type RoundStatus = "PENDING" | "IN_PROGRESS" | "COMPLETED" | "SKIPPED";
export type FieldType = "TEXT" | "TEXTAREA" | "DROPDOWN" | "MULTI_SELECT" | "FILE_UPLOAD" | "BOOLEAN" | "NUMERIC" | "DATE" | "EMAIL" | "URL";
export type StudentJobStatus = "NO_OFFER" | "LOOKING" | "OPEN_TO_OFFER";

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  repoUrl?: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  description: string;
  date?: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  role: UserRole;
  contactNo?: string;
  profilePic?: string;
  coverImage?: string;
  resumes?: string[];
  company?: string;
  designation?: string;
  bio?: string;
  college?: string;
  graduationYear?: number;
  skills?: string[];
  location?: string;
  linkedinUrl?: string;
  githubUrl?: string;
  portfolioUrl?: string;
  jobStatus?: StudentJobStatus | null;
  projects?: ProjectItem[];
  achievements?: AchievementItem[];
  createdAt?: string;
  subscriptionPlan?: "FREE" | "MONTHLY" | "YEARLY";
  subscriptionStatus?: "ACTIVE" | "EXPIRED";
  subscriptionEndDate?: string;
}

export interface CustomFieldDefinition {
  id: string;
  label: string;
  fieldType: FieldType;
  required: boolean;
  placeholder?: string;
  options?: string[];
  validation?: {
    min?: number;
    max?: number;
    maxLength?: number;
    maxFileSize?: number;
    allowedTypes?: string[];
  };
}

export interface EvaluationCriterion {
  id: string;
  criterion: string;
  maxScore: number;
  weight?: number;
}

export interface Job {
  id: number;
  title: string;
  description: string;
  location: string;
  salary: string;
  company: string;
  status: JobStatus;
  customFields: CustomFieldDefinition[];
  deadline?: string;
  tags: string[];
  recruiterId: number;
  recruiter?: { id: number; name: string; company?: string; designation?: string };
  rounds?: Round[];
  _count?: { applications: number; rounds: number };
  createdAt: string;
  updatedAt: string;
}

export interface Round {
  id: number;
  jobId: number;
  name: string;
  description?: string;
  orderIndex: number;
  instructions?: string;
  customFields: CustomFieldDefinition[];
  evaluationCriteria: EvaluationCriterion[];
  _count?: { roundSubmissions: number };
  createdAt: string;
  updatedAt: string;
}

export interface Application {
  id: number;
  jobId: number;
  studentId: number;
  status: ApplicationStatus;
  currentRoundId?: number;
  customFieldAnswers: Record<string, unknown>;
  resumeUrl?: string;
  coverLetter?: string;
  job?: Job;
  student?: User;
  roundSubmissions?: RoundSubmission[];
  _count?: { roundSubmissions: number };
  createdAt: string;
  updatedAt: string;
}

export interface RoundSubmission {
  id: number;
  applicationId: number;
  roundId: number;
  status: RoundStatus;
  fieldAnswers: Record<string, unknown>;
  attachments: string[];
  evaluationScores?: Record<string, { score: number; comment?: string }>;
  recruiterNotes?: string;
  submittedAt?: string;
  evaluatedAt?: string;
  round?: Round;
  application?: Application;
  createdAt: string;
  updatedAt: string;
}

export interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

// Scraped Jobs
export type ScrapedJobStatus = "ACTIVE" | "EXPIRED" | "REMOVED";

export interface ScrapedJob {
  id: number;
  title: string;
  description: string;
  company: string;
  location: string;
  salary?: string;
  tags: string[];
  applicationUrl: string;
  source: string;
  sourceId: string;
  sourceUrl?: string;
  status: ScrapedJobStatus;
  scrapedAt: string;
  lastSeenAt: string;
  metadata: Record<string, unknown>;
  createdAt: string;
  updatedAt: string;
}

export interface ScrapedJobSource {
  id: string;
  name: string;
}

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
  action: "ATS_SCORE" | "COVER_LETTER" | "GENERATE_RESUME";
  used: number;
  limit: number;
}

export interface UsageStats {
  tier: "FREE" | "PREMIUM";
  usage: UsageItem[];
}

// Cover Letter
export type CoverLetterTone = "professional" | "friendly" | "enthusiastic";

export interface CoverLetterInput {
  jobDescription: string;
  jobTitle?: string;
  companyName?: string;
  keySkills?: string;
  tone: CoverLetterTone;
}

// Company Explorer
export type CompanySize = "STARTUP" | "SMALL" | "MEDIUM" | "LARGE" | "ENTERPRISE";
export type ReviewStatus = "PENDING" | "APPROVED" | "REJECTED";
export type ContributionStatus = "PENDING" | "APPROVED" | "REJECTED";
export type ContributionType = "NEW_COMPANY" | "EDIT_COMPANY" | "ADD_CONTACT" | "ADD_REVIEW";

export interface Company {
  id: number;
  name: string;
  slug: string;
  logo?: string;
  description: string;
  mission?: string;
  industry: string;
  size: CompanySize;
  city: string;
  state?: string;
  address?: string;
  officeLocations: string[];
  website?: string;
  socialLinks: Record<string, string>;
  technologies: string[];
  hiringStatus: boolean;
  foundedYear?: number;
  photos: string[];
  avgRating: number;
  reviewCount: number;
  isApproved: boolean;
  contacts?: CompanyContact[];
  _count?: { reviews: number };
  createdAt: string;
  updatedAt: string;
}

export interface CompanyReview {
  id: number;
  companyId: number;
  userId: number;
  rating: number;
  title: string;
  content: string;
  pros?: string;
  cons?: string;
  interviewExperience?: string;
  workCulture?: string;
  salaryInsights?: string;
  status: ReviewStatus;
  user?: { id: number; name: string; profilePic?: string };
  company?: { id: number; name: string; slug: string };
  createdAt: string;
  updatedAt: string;
}

export interface CompanyContact {
  id: number;
  companyId: number;
  name: string;
  designation: string;
  email?: string;
  phone?: string;
  linkedinUrl?: string;
  isPublic: boolean;
  createdAt: string;
}

export interface CompanyContribution {
  id: number;
  userId: number;
  type: ContributionType;
  companyId?: number;
  data: Record<string, unknown>;
  status: ContributionStatus;
  adminNotes?: string;
  user?: { id: number; name: string; email: string };
  createdAt: string;
}

export interface CityCount {
  city: string;
  count: number;
}

// Career Roadmap
export type CareerCategory = "ENGINEERING" | "DESIGN" | "DATA" | "PRODUCT" | "MARKETING" | "DEVOPS" | "SECURITY" | "OTHER";
export type CareerDifficulty = "BEGINNER" | "INTERMEDIATE" | "ADVANCED";
export type ResourceType = "ARTICLE" | "VIDEO" | "COURSE" | "BOOK" | "DOCUMENTATION" | "TUTORIAL";
export type SkillLevel = "BEGINNER" | "INTERMEDIATE" | "ADVANCED";
export type EnrollmentStatus = "ACTIVE" | "PAUSED" | "COMPLETED";

export interface Career {
  id: number;
  title: string;
  slug: string;
  description: string;
  category: CareerCategory;
  difficulty: CareerDifficulty;
  iconUrl?: string;
  avgSalary?: string;
  demandLevel?: string;
  _count?: { phases: number; enrollments: number };
  phases?: CareerPhase[];
  createdAt: string;
  updatedAt: string;
}

export interface CareerPhase {
  id: number;
  title: string;
  description?: string;
  orderIndex: number;
  durationWeeks?: number;
  skills: CareerSkill[];
  resources: CareerResource[];
  tools: CareerTool[];
}

export interface CareerSkill {
  id: number;
  name: string;
  level: SkillLevel;
  completed?: boolean;
  hasQuiz?: boolean;
  verifiedAt?: string | null;
}

export interface CareerResource {
  id: number;
  title: string;
  url: string;
  type: ResourceType;
  free: boolean;
}

export interface CareerTool {
  id: number;
  name: string;
  url?: string;
  category?: string;
}

export interface StudentCareerEnrollment {
  id: number;
  careerId: number;
  status: EnrollmentStatus;
  career: Career;
  progress: number;
  completedSkills: number;
  totalSkills: number;
}

// Admin Dashboard
export type AdminTier = "SUPER_ADMIN" | "ADMIN" | "MODERATOR";

export interface AdminDashboardData {
  totalStudents: number;
  totalRecruiters: number;
  totalJobs: number;
  activeJobs: number;
  totalApplications: number;
  hiredCount: number;
  statusBreakdown: Record<string, number>;
  recentUsers: { id: number; name: string; email: string; role: UserRole; isActive: boolean; createdAt: string }[];
  recentJobs: { id: number; title: string; company: string; status: JobStatus; createdAt: string; recruiter: { id: number; name: string }; _count: { applications: number } }[];
}

export interface AdminUser {
  id: number;
  name: string;
  email: string;
  role: UserRole;
  isActive: boolean;
  company?: string;
  designation?: string;
  contactNo?: string;
  createdAt: string;
  _count: { applications: number; postedJobs: number };
}

export interface ActivityLog {
  id: number;
  adminId: number;
  admin: { id: number; name: string; email: string };
  action: string;
  targetType: string;
  targetId: number;
  details: Record<string, unknown>;
  ipAddress?: string;
  createdAt: string;
}

// Talent Search
export interface TalentSearchResult {
  id: number;
  name: string;
  email: string;
  profilePic?: string;
  bio?: string;
  college?: string;
  graduationYear?: number;
  skills: string[];
  location?: string;
  linkedinUrl?: string;
  githubUrl?: string;
  portfolioUrl?: string;
  resumes: string[];
  jobStatus?: string | null;
  bestAtsScore: number | null;
  verifiedSkillCount: number;
  verifiedSkills: string[];
}

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

export interface SkillTestWithQuestions extends SkillTest {
  questions: SkillTestQuestion[];
  existingVerification?: VerifiedSkill | null;
  bestAttempt?: { id: number; score: number; passed: boolean } | null;
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

export interface VerifiedSkill {
  id: number;
  skillName: string;
  score: number;
  verifiedAt: string;
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
}

// GSoC Organizations
export interface GSoCOrganization {
  id: number;
  name: string;
  slug: string;
  url: string;
  imageUrl?: string;
  imageBgColor?: string;
  description: string;
  category: string;
  topics: string[];
  technologies: string[];
  yearsParticipated: number[];
  totalProjects: number;
  projectsData?: Record<string, {
    projects_url: string;
    num_projects: number;
    projects: {
      title: string;
      short_description: string;
      description: string;
      student_name: string;
      code_url: string;
      project_url: string;
    }[];
  }>;
  contactEmail?: string;
  mailingList?: string;
  ideasUrl?: string;
  guideUrl?: string;
}

export interface GSoCStats {
  total: number;
  categories: { name: string; count: number }[];
  years: { year: number; count: number }[];
  technologies: { name: string; count: number }[];
  topics: { name: string; count: number }[];
}

// YC Companies
export interface YCFounder {
  name: string;
  title: string;
  bio?: string;
  imageUrl?: string;
  linkedin?: string;
  twitter?: string;
}

export interface YCCompany {
  id: number;
  ycId: number;
  name: string;
  slug: string;
  oneLiner?: string;
  longDescription?: string;
  batch?: string;
  batchShort?: string;
  status?: string;
  website?: string;
  smallLogoUrl?: string;
  allLocations?: string;
  teamSize?: number;
  industry?: string;
  subindustry?: string;
  tags: string[];
  industries: string[];
  regions: string[];
  stage?: string;
  isHiring: boolean;
  topCompany: boolean;
  ycUrl?: string;
  launchedAt?: string;
  founders?: YCFounder[];
  socialLinks?: Record<string, string>;
  scrapedAt?: string;
}

export interface YCStats {
  total: number;
  batches: { name: string; count: number }[];
  industries: { name: string; count: number }[];
  statuses: { name: string; count: number }[];
}

// Open Source Repos
export type RepoDifficulty = "BEGINNER" | "INTERMEDIATE" | "ADVANCED";
export type RepoDomain = "AI" | "WEB" | "DEVOPS" | "MOBILE" | "BLOCKCHAIN" | "DATA" | "SECURITY" | "CLOUD" | "GAMING" | "OTHER";

export interface OpenSourceRepo {
  id: number;
  name: string;
  owner: string;
  description: string;
  language: string;
  techStack: string[];
  difficulty: RepoDifficulty;
  domain: RepoDomain;
  issueTypes: string[];
  stars: number;
  forks: number;
  openIssues: number;
  url: string;
  logo?: string;
  tags: string[];
  highlights: string[];
  trending: boolean;
  lastUpdated: string;
  createdAt: string;
  updatedAt: string;
}

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

export interface DsaSubTopic {
  id: number;
  name: string;
  orderIndex: number;
  problems: DsaProblem[];
}

export interface DsaProblem {
  id: number;
  title: string;
  difficulty: string;
  leetcodeUrl?: string;
  gfgUrl?: string;
  articleUrl?: string;
  videoUrl?: string;
  hackerrankUrl?: string;
  codechefUrl?: string;
  tags: string[];
  companies: string[];
  hints?: string;
  sheets: string[];
  solved: boolean;
  notes?: string | null;
  bookmarked?: boolean;
}

export interface DsaTopicDetail {
  id: number;
  name: string;
  slug: string;
  description?: string;
  orderIndex: number;
  totalProblems: number;
  totalSolved: number;
  subTopics: DsaSubTopic[];
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

export interface DsaCompany {
  name: string;
  count: number;
}

export interface DsaPattern {
  name: string;
  count: number;
}

export interface DsaSheetStats {
  name: string;
  total: number;
  solved: number;
}

export interface DsaBookmarkItem {
  id: number;
  problemId: number;
  title: string;
  difficulty: string;
  leetcodeUrl?: string;
  gfgUrl?: string;
  tags: string[];
  companies: string[];
  sheets: string[];
  topicName: string;
  topicSlug: string;
  solved: boolean;
  createdAt: string;
}

export interface DsaCompanyProblem {
  id: number;
  title: string;
  difficulty: string;
  leetcodeUrl?: string;
  gfgUrl?: string;
  tags: string[];
  companies: string[];
  hints?: string;
  sheets: string[];
  topicName: string;
  topicSlug: string;
  solved: boolean;
  bookmarked: boolean;
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

export interface AptitudeTopicDetail {
  id: number;
  name: string;
  slug: string;
  description?: string;
  categoryName: string;
  categorySlug: string;
  totalQuestions: number;
  page: number;
  totalPages: number;
  questions: AptitudeQuestion[];
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
}

// Blog
export type BlogCategory = "CAREER_ADVICE" | "INTERVIEW_TIPS" | "SALARY_GUIDE" | "INDUSTRY_INSIGHTS" | "RESUME_TIPS" | "TECH_TRENDS";
export type BlogStatus = "DRAFT" | "PUBLISHED";

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  category: BlogCategory;
  tags: string[];
  author: { id: number; name: string; profilePic?: string };
  status: BlogStatus;
  featuredImage?: string;
  readingTime: number;
  viewCount: number;
  isFeatured: boolean;
  publishedAt?: string;
  createdAt: string;
  updatedAt: string;
}

