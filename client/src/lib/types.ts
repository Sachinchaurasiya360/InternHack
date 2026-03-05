export type UserRole = "STUDENT" | "RECRUITER" | "ADMIN";
export type JobStatus = "DRAFT" | "PUBLISHED" | "CLOSED" | "ARCHIVED";
export type ApplicationStatus = "APPLIED" | "IN_PROGRESS" | "SHORTLISTED" | "REJECTED" | "HIRED" | "WITHDRAWN";
export type RoundStatus = "PENDING" | "IN_PROGRESS" | "COMPLETED" | "SKIPPED";
export type FieldType = "TEXT" | "TEXTAREA" | "DROPDOWN" | "MULTI_SELECT" | "FILE_UPLOAD" | "BOOLEAN" | "NUMERIC" | "DATE" | "EMAIL" | "URL";

export interface User {
  id: number;
  name: string;
  email: string;
  role: UserRole;
  contactNo?: string;
  profilePic?: string;
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
  createdAt?: string;
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

// College Discovery
export type CollegeType = "GOVERNMENT" | "PRIVATE" | "DEEMED" | "AUTONOMOUS" | "CENTRAL" | "STATE";
export type DegreeLevel = "DIPLOMA" | "BACHELOR" | "MASTER" | "DOCTORAL" | "CERTIFICATE";
export type CourseMode = "FULL_TIME" | "PART_TIME" | "DISTANCE" | "ONLINE";
export type NaacGrade = "A_PLUS_PLUS" | "A_PLUS" | "A" | "B_PLUS_PLUS" | "B_PLUS" | "B" | "C" | "UNGRADED";
export type CollegeReviewStatus = "PENDING" | "APPROVED" | "REJECTED";

export interface College {
  id: number;
  name: string;
  slug: string;
  logo?: string;
  coverImage?: string;
  description: string;
  type: CollegeType;
  affiliation?: string;
  naacGrade?: NaacGrade;
  nirfRanking?: number;
  nirfYear?: number;
  website?: string;
  establishedYear?: number;
  campusSize?: string;
  state: string;
  city: string;
  address?: string;
  pincode?: string;
  totalStudents?: number;
  totalFaculty?: number;
  acceptedExams: string[];
  facilities: string[];
  streams: string[];
  socialLinks: Record<string, string>;
  photos: string[];
  avgRating: number;
  reviewCount: number;
  courses?: CollegeCourse[];
  placements?: CollegePlacement[];
  _count?: { reviews: number; courses: number };
  createdAt: string;
  updatedAt: string;
}

export interface CollegeCourse {
  id: number;
  collegeId: number;
  name: string;
  degree: string;
  degreeLevel: DegreeLevel;
  specialization?: string;
  stream: string;
  durationYears: number;
  mode: CourseMode;
  totalFees?: number;
  feesPerYear?: number;
  eligibility?: string;
  seats?: number;
  isPopular: boolean;
}

export interface CollegePlacement {
  id: number;
  collegeId: number;
  year: number;
  avgPackageLPA?: number;
  highestPackageLPA?: number;
  medianPackageLPA?: number;
  placementRate?: number;
  studentsPlaced?: number;
  totalStudents?: number;
  topRecruiters: string[];
  sectorWise?: Record<string, number>;
}

export interface CollegeCutoff {
  id: number;
  collegeId: number;
  courseId?: number;
  examId: number;
  year: number;
  category: string;
  gender?: string;
  openingRank?: number;
  closingRank?: number;
  openingScore?: number;
  closingScore?: number;
  round?: string;
  exam?: EntranceExam;
  course?: CollegeCourse;
}

export interface EntranceExam {
  id: number;
  name: string;
  slug: string;
  fullName?: string;
  type: string;
  conductingBody?: string;
  applicableStreams: string[];
}

export interface CollegeReview {
  id: number;
  collegeId: number;
  userId: number;
  overallRating: number;
  placementsRating?: number;
  infrastructureRating?: number;
  facultyRating?: number;
  campusLifeRating?: number;
  valueForMoneyRating?: number;
  title: string;
  content: string;
  pros?: string;
  cons?: string;
  courseStudied?: string;
  graduationYear?: number;
  status: CollegeReviewStatus;
  user?: { id: number; name: string; profilePic?: string };
  createdAt: string;
}

export interface CollegeFilterStats {
  total: number;
  states: { name: string; count: number }[];
  streams: { name: string; count: number }[];
  exams: { name: string; count: number }[];
  types: { name: string; count: number }[];
  naacGrades: { name: string; count: number }[];
}

export interface StateCount {
  state: string;
  count: number;
}

// YC Companies
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

