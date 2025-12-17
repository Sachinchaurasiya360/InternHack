export type JobType = "INTERNSHIP" | "FULL_TIME" | "PART_TIME";

export type JobApplicationStatus =
  | "PENDING"
  | "REVIEWING"
  | "SHORTLISTED"
  | "INTERVIEWED"
  | "OFFERED"
  | "REJECTED"
  | "ACCEPTED"
  | "WITHDRAWN";

export interface CreateJobDto {
  title: string;
  description: string;
  company: string;
  location: string;
  type: JobType;
  salary?: string;
  duration: string;
  contactDetails?: string;
  applyLink?: string;
  requirements?: string;
  responsibilities?: string;
  benefits?: string;
}

export interface UpdateJobDto {
  title?: string;
  description?: string;
  company?: string;
  location?: string;
  type?: JobType;
  salary?: string;
  duration?: string;
  contactDetails?: string;
  applyLink?: string;
  requirements?: string;
  responsibilities?: string;
  benefits?: string;
  isActive?: boolean;
}

export interface JobResponse {
  id: string;
  title: string;
  description: string;
  company: string;
  location: string;
  type: JobType;
  salary?: string;
  duration: string;
  isActive: boolean;
  contactDetails?: string;
  applyLink?: string;
  requirements?: string;
  responsibilities?: string;
  benefits?: string;
  recruiterId: string;
  createdAt: Date;
  updatedAt: Date;
  _count?: {
    applications: number;
  };
}

export interface JobListFilters {
  type?: JobType;
  location?: string;
  company?: string;
  isActive?: boolean;
  search?: string;
}

export interface JobApplicationResponse {
  id: string;
  status: JobApplicationStatus;
  coverLetter?: string;
  createdAt: Date;
  updatedAt: Date;
  applicant: {
    id: string;
    name: string;
    email: string;
    resumeUrl?: string;
    skills: string[];
    collegeName?: string;
    graduationYear?: string;
  };
  job: {
    id: string;
    title: string;
    company: string;
  };
}

export interface RecruiterStats {
  totalJobs: number;
  activeJobs: number;
  totalApplications: number;
  pendingApplications: number;
  shortlistedApplications: number;
}
