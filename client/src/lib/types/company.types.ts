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
