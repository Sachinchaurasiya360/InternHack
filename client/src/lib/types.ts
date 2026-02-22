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
