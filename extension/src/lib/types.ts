export type SiteType = "LINKEDIN" | "WORKDAY" | "GREENHOUSE" | "LEVER" | "ASHBY" | "INDEED" | "GENERIC";

export interface ExtensionProfile {
  user: {
    id: number;
    name: string;
    email: string;
    contactNo: string | null;
    bio: string | null;
    college: string | null;
    graduationYear: number | null;
    skills: string[];
    linkedinUrl: string | null;
    githubUrl: string | null;
    portfolioUrl: string | null;
    leetcodeUrl: string | null;
    location: string | null;
    projects: unknown;
    resumes: string[];
  };
  applicationProfile?: {
    preferredName?: string | null;
    legalName?: string | null;
    phoneCountryCode?: string | null;
    address?: Record<string, unknown>;
    education?: unknown[];
    experience?: unknown[];
    workAuthorization?: Record<string, unknown>;
    demographics?: Record<string, unknown>;
    availability?: Record<string, unknown>;
    salaryExpectations?: Record<string, unknown>;
    links?: Record<string, unknown>;
    customFields?: Record<string, unknown>;
    autofillSettings?: Record<string, unknown>;
    privacySettings?: Record<string, unknown>;
  } | null;
}

export interface NormalizedProfile {
  firstName: string;
  lastName: string;
  fullName: string;
  email: string;
  phone: string;
  location: string;
  linkedinUrl: string;
  githubUrl: string;
  portfolioUrl: string;
  leetcodeUrl: string;
  school: string;
  graduationYear: string;
  skills: string;
  resumeUrl: string;
  bio: string;
  customFields: Record<string, string>;
}

export type FieldKind =
  | "firstName"
  | "lastName"
  | "fullName"
  | "email"
  | "phone"
  | "location"
  | "linkedinUrl"
  | "githubUrl"
  | "portfolioUrl"
  | "leetcodeUrl"
  | "school"
  | "graduationYear"
  | "skills"
  | "resumeUrl"
  | "bio"
  | "customQuestion"
  | "unknown";

export interface FieldMapping {
  element: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
  kind: FieldKind;
  confidence: number;
  label: string;
}

export interface JobContext {
  company: string;
  role: string;
  location?: string | null;
  jobUrl?: string | null;
  applicationUrl?: string | null;
  jobDescription?: string | null;
  siteType: SiteType;
  host: string;
}

export interface Adapter {
  siteType: SiteType;
  detect(): boolean;
  extractJobContext(): JobContext;
  findFields(): FieldMapping[];
}

