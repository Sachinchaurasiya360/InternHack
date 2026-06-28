export type EmploymentStatus = "ONBOARDING" | "ACTIVE" | "ON_LEAVE" | "ON_PROBATION" | "NOTICE_PERIOD" | "EXITED" | "ALUMNI";
export type EmploymentType = "FULL_TIME" | "PART_TIME" | "CONTRACT" | "INTERN" | "FREELANCER";
export type LeaveType = "CASUAL" | "SICK" | "EARNED" | "MATERNITY" | "PATERNITY" | "COMPENSATORY" | "UNPAID" | "BEREAVEMENT";
export type LeaveRequestStatus = "PENDING" | "APPROVED" | "REJECTED" | "CANCELLED";
export type AttendanceStatus = "PRESENT" | "ABSENT" | "HALF_DAY" | "ON_LEAVE" | "HOLIDAY" | "WEEKEND" | "WORK_FROM_HOME";
export type PayrollStatus = "DRAFT" | "PROCESSING" | "APPROVED" | "PAID" | "CANCELLED";
export type ReviewCycle = "QUARTERLY" | "HALF_YEARLY" | "ANNUAL";
export type HRReviewStatus = "DRAFT" | "SELF_REVIEW" | "MANAGER_REVIEW" | "CALIBRATION" | "COMPLETED";
export type TaskPriority = "LOW" | "MEDIUM" | "HIGH" | "URGENT";
export type TaskStatus = "TODO" | "IN_PROGRESS" | "IN_REVIEW" | "DONE" | "CANCELLED";
export type InterviewType = "PHONE" | "VIDEO" | "IN_PERSON" | "PANEL" | "TECHNICAL" | "HR";
export type InterviewStatus = "SCHEDULED" | "CONFIRMED" | "COMPLETED" | "CANCELLED" | "NO_SHOW" | "RESCHEDULED";
export type OnboardingItemStatus = "NOT_STARTED" | "IN_PROGRESS" | "COMPLETED" | "OVERDUE";
export type ReimbursementStatus = "DRAFT" | "SUBMITTED" | "MANAGER_APPROVED" | "FINANCE_APPROVED" | "PAID" | "REJECTED";
export type WorkflowStatus = "ACTIVE" | "PAUSED" | "COMPLETED" | "CANCELLED";

export interface HRDepartment {
  id: number;
  name: string;
  slug: string;
  description?: string;
  parentId?: number;
  headId?: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  _count?: { employees: number };
  parent?: { id: number; name: string };
  head?: { id: number; firstName: string; lastName: string };
  children?: HRDepartment[];
}

export interface HREmployee {
  id: number;
  userId?: number;
  employeeCode: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  dateOfBirth?: string;
  gender?: string;
  bloodGroup?: string;
  profilePic?: string;
  departmentId: number;
  department?: { id: number; name: string };
  designation: string;
  employmentType: EmploymentType;
  status: EmploymentStatus;
  joiningDate: string;
  confirmationDate?: string;
  exitDate?: string;
  reportingManagerId?: number;
  reportingManager?: { id: number; firstName: string; lastName: string };
  address?: { line1?: string; line2?: string; city?: string; state?: string; zip?: string; country?: string };
  emergencyContact?: { name?: string; relation?: string; phone?: string };
  bankDetails?: { bankName?: string; accountNo?: string; ifsc?: string };
  currentSalary?: { basic?: number; hra?: number; da?: number; special?: number; gross?: number; net?: number };
  directReports?: { id: number; firstName: string; lastName: string; designation: string }[];
  createdAt: string;
  updatedAt: string;
}

export interface LeaveRequest {
  id: number;
  employeeId: number;
  employee?: { id: number; firstName: string; lastName: string; designation: string; department?: { name: string } };
  leaveType: LeaveType;
  startDate: string;
  endDate: string;
  totalDays: number;
  reason: string;
  status: LeaveRequestStatus;
  approverId?: number;
  approver?: { id: number; firstName: string; lastName: string };
  approverNote?: string;
  approvedAt?: string;
  createdAt: string;
  updatedAt: string;
}

export interface LeaveBalance {
  id: number;
  employeeId: number;
  leaveType: LeaveType;
  year: number;
  allocated: number;
  used: number;
  pending: number;
  carryForward: number;
}

export interface LeavePolicy {
  id: number;
  leaveType: LeaveType;
  name: string;
  annualAllocation: number;
  maxCarryForward: number;
  minConsecutiveDays: number;
  maxConsecutiveDays?: number;
  requiresApproval: boolean;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Holiday {
  id: number;
  name: string;
  date: string;
  isOptional: boolean;
  location?: string;
  year: number;
  createdAt: string;
}

export interface AttendanceRecord {
  id: number;
  employeeId: number;
  employee?: { id: number; firstName: string; lastName: string; designation: string };
  date: string;
  status: AttendanceStatus;
  checkIn?: string;
  checkOut?: string;
  workHours?: number;
  overtime?: number;
  isLate: boolean;
  lateMinutes?: number;
  notes?: string;
  isRegularized: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface PayrollRecord {
  id: number;
  employeeId: number;
  employee?: { id: number; firstName: string; lastName: string; designation: string; department?: { name: string } };
  month: number;
  year: number;
  status: PayrollStatus;
  basicSalary: number;
  hra: number;
  da: number;
  specialAllow: number;
  bonus: number;
  otherEarnings: number;
  grossEarnings: number;
  pf: number;
  esi: number;
  profTax: number;
  tds: number;
  loanEmi: number;
  otherDeduct: number;
  totalDeductions: number;
  netPay: number;
  payslipUrl?: string;
  paidAt?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ContractorPayment {
  id: number;
  employeeId: number;
  employee?: { id: number; firstName: string; lastName: string };
  invoiceNumber?: string;
  amount: number;
  currency: string;
  description: string;
  periodStart: string;
  periodEnd: string;
  status: PayrollStatus;
  paidAt?: string;
  createdAt: string;
  updatedAt: string;
}

export interface PerformanceReview {
  id: number;
  employeeId: number;
  employee?: { id: number; firstName: string; lastName: string; designation: string; department?: { name: string } };
  reviewerId: number;
  reviewer?: { id: number; firstName: string; lastName: string };
  cycle: ReviewCycle;
  period: string;
  status: HRReviewStatus;
  selfRating?: number;
  managerRating?: number;
  finalRating?: number;
  selfComments?: string;
  managerComments?: string;
  goals?: unknown;
  strengths?: string;
  improvements?: string;
  promotionRecommended: boolean;
  completedAt?: string;
  createdAt: string;
  updatedAt: string;
}

export interface HRTask {
  id: number;
  title: string;
  description?: string;
  assigneeId: number;
  assignee?: { id: number; firstName: string; lastName: string };
  creatorId: number;
  creator?: { id: number; firstName: string; lastName: string };
  priority: TaskPriority;
  status: TaskStatus;
  dueDate?: string;
  labels: string[];
  parentTaskId?: number;
  comments?: unknown;
  completedAt?: string;
  createdAt: string;
  updatedAt: string;
}

export interface HRInterview {
  id: number;
  applicationId: number;
  application?: { id: number; job?: { title: string }; user?: { name: string; email: string } };
  type: InterviewType;
  scheduledAt: string;
  durationMinutes: number;
  meetingLink?: string;
  location?: string;
  status: InterviewStatus;
  interviewerIds: number[];
  feedback?: unknown;
  candidateNotes?: string;
  cancelReason?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Reimbursement {
  id: number;
  employeeId: number;
  employee?: { id: number; firstName: string; lastName: string; designation: string };
  category: string;
  amount: number;
  currency: string;
  description: string;
  receiptUrls: string[];
  status: ReimbursementStatus;
  approverNote?: string;
  paidAt?: string;
  createdAt: string;
  updatedAt: string;
}

export interface OnboardingChecklist {
  id: number;
  employeeId: number;
  employee?: { id: number; firstName: string; lastName: string; designation: string };
  status: OnboardingItemStatus;
  items: { title: string; completed: boolean; note?: string }[];
  startDate: string;
  targetDate: string;
  completedAt?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ComplianceDocument {
  id: number;
  name: string;
  category: string;
  description?: string;
  documentUrl?: string;
  expiryDate?: string;
  isRequired: boolean;
  assignedTo: number[];
  acknowledgedBy: number[];
  createdAt: string;
  updatedAt: string;
}

export interface WorkflowDefinition {
  id: number;
  name: string;
  description?: string;
  triggerEvent: string;
  steps: unknown;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface WorkflowInstance {
  id: number;
  definitionId: number;
  definition?: { id: number; name: string };
  entityType: string;
  entityId: number;
  currentStep: number;
  status: WorkflowStatus;
  stepHistory: unknown;
  createdAt: string;
  updatedAt: string;
}

export interface CustomRole {
  id: number;
  name: string;
  description?: string;
  permissions: string[];
  isSystem: boolean;
  createdAt: string;
  updatedAt: string;
  _count?: { userRoles: number };
}

export interface UserRoleAssignment {
  id: number;
  userId: number;
  roleId: number;
  assignedAt: string;
  user?: { id: number; name: string; email: string };
  role?: { id: number; name: string };
}

export interface HRDashboardData {
  totalEmployees: number;
  activeEmployees: number;
  onLeaveToday: number;
  pendingLeaveRequests: number;
  pendingReimbursements: number;
  openTasks: number;
  newHiresThisMonth: number;
  upcomingInterviews: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}
