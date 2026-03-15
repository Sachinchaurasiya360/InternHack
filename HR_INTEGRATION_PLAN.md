# InternHack — HR System Integration Architecture Plan

> Full repository analysis + feature integration blueprint for extending the existing platform into a comprehensive HR management system.

---

## STEP 1 — Current Codebase Analysis

### 1.1 Folder Structure

```
InternHack/
├── client/                          # React 18 + Vite 7 frontend
│   └── src/
│       ├── App.tsx                   # All routes (public/student/recruiter/admin)
│       ├── main.tsx                  # Root: GoogleOAuth, ReactQuery, Helmet
│       ├── lib/
│       │   ├── axios.ts             # Axios instance, JWT auto-inject, 401 logout
│       │   ├── auth.store.ts        # Zustand auth store (localStorage)
│       │   ├── theme.store.ts       # Dark/light theme
│       │   ├── layout.store.ts      # Immersive mode toggle
│       │   ├── query-keys.ts        # React Query key factories
│       │   └── types.ts             # Client types mirroring server models
│       ├── components/
│       │   ├── Navbar.tsx, Footer.tsx
│       │   ├── StudentSidebar.tsx
│       │   ├── ProtectedRoute.tsx   # Role-based route guard
│       │   ├── DynamicFieldBuilder.tsx / DynamicFieldRenderer.tsx
│       │   └── ...
│       ├── hooks/
│       │   ├── useFaceDetection.ts
│       │   └── useProctoring.ts
│       └── module/
│           ├── auth/                # Login, Register, Verify, ForgotPassword
│           ├── student/             # 15+ sub-modules (ats, learn, dsa, etc.)
│           ├── recruiter/           # Dashboard, jobs, applications, talent, drives
│           ├── admin/               # Full platform management
│           ├── blog/                # Public blog
│           └── LandingPage/
│
├── server/                          # Express 5 + TypeScript 5
│   └── src/
│       ├── index.ts                 # App init, route registration, CORS, crons
│       ├── database/
│       │   ├── db.ts                # Prisma client singleton
│       │   ├── prisma/
│       │   │   ├── schema.prisma    # 40+ models, 20+ enums
│       │   │   └── migrations/
│       │   ├── prisma.config.ts
│       │   └── seed-*.ts            # 15+ seed scripts
│       ├── middleware/
│       │   ├── auth.middleware.ts    # JWT extraction + verification
│       │   ├── role.middleware.ts    # requireRole(STUDENT|RECRUITER|ADMIN)
│       │   ├── error.middleware.ts
│       │   ├── upload.middleware.ts  # Multer memory storage
│       │   └── usage-limit.middleware.ts
│       ├── config/
│       │   └── usage-limits.ts      # Daily limits per tier
│       ├── utils/
│       │   ├── jwt.utils.ts
│       │   ├── password.utils.ts
│       │   ├── s3.utils.ts
│       │   ├── email.utils.ts
│       │   └── ...
│       ├── lib/
│       │   └── ai-provider-registry.ts
│       ├── cron/
│       │   ├── scheduled-emails.ts
│       │   └── subscription-expiry.ts
│       └── module/                  # 22 modules, each: routes → controller → service
│           ├── auth/
│           ├── job/
│           ├── recruiter/
│           ├── student/
│           ├── ats/
│           ├── admin/
│           ├── company/
│           ├── payment/
│           └── ... (14 more)
│
└── .claude/                         # Claude config
```

### 1.2 Main Modules & Services

| Module | Route Prefix | Responsibility |
|--------|-------------|----------------|
| `auth` | `/api/auth` | Register, login, Google OAuth, email verify, password reset |
| `job` | `/api/jobs` | Job CRUD (public read, recruiter write) |
| `recruiter` | `/api/recruiter` | Rounds, applications, evaluation, analytics, talent |
| `student` | `/api/student` | Apply, track, submit round responses |
| `ats` | `/api/ats` | AI resume scoring, cover letters, LaTeX chat |
| `admin` | `/api/admin` | Full platform management |
| `company` | `/api/companies` | Company directory + reviews |
| `payment` | `/api/payments` | Razorpay subscriptions |
| `campus-drive` | `/api/campus-drives` | Campus placement drives |
| `skill-test` | `/api/skill-tests` | Proctored skill verification |
| `badge` | `/api/badges` | Badge definitions + awards |

### 1.3 Database Schema (Current — 40+ Models)

**Core Models:**
- `user` — Single model for STUDENT, RECRUITER, ADMIN (role enum)
- `job` — Job postings with custom fields
- `round` — Hiring rounds per job (ordered, with assessment questions)
- `application` — Student→Job (status pipeline: APPLIED→IN_PROGRESS→SHORTLISTED→REJECTED→HIRED)
- `roundSubmission` — Per-round submission with evaluation

**Recruiter-Specific Models:**
- `talentPool` / `talentPoolMember` — Recruiter talent pools
- `campusDrive` / `campusDriveRegistration` — Campus placement drives

**Student-Specific Models:**
- `atsScore` — AI resume scoring results
- `verifiedSkill` / `skillTestAttempt` — Proctored skill verification
- `studentDsaProgress` / `dsaBookmark` — DSA practice tracking
- `studentAptitudeProgress` — Aptitude quiz progress
- `studentSqlProgress` — SQL exercise progress
- `studentBadge` — Earned badges

**Platform Models:**
- `company` / `companyReview` / `companyContact` — Company directory
- `blogPost` — Blog system
- `payment` — Razorpay payments
- `adminProfile` / `adminActivityLog` — Admin system
- `usageLog` — Daily usage tracking
- `aiServiceConfig` / `aiRequestLog` — AI provider management

### 1.4 Authentication & Role System

**Current Roles:** `STUDENT | RECRUITER | ADMIN`

**Auth Flow:**
```
Client Login → JWT generated (id, email, role) → stored in httpOnly cookie + localStorage
                                                          ↓
Every Request → authMiddleware extracts JWT → verifyToken() → sets req.user
                                                          ↓
                requireRole("RECRUITER") → checks req.user.role → 403 if mismatch
```

**Admin Sub-Tiers:** `SUPER_ADMIN | ADMIN | MODERATOR` (via `adminProfile` model)

**Client Guard:** `<ProtectedRoute role="RECRUITER">` — Zustand auth store check + redirect

**Authorization Pattern:** Every service method additionally verifies ownership:
```typescript
if (job.recruiterId !== recruiterId) throw new Error("Not authorized");
```

### 1.5 Recruiter Module — Current Implementation

**Backend Routes (22 endpoints):**

| Category | Endpoints |
|----------|-----------|
| Rounds | `POST/GET/PUT/DELETE /recruiter/jobs/:jobId/rounds`, `PATCH .../reorder` |
| Applications | `GET /recruiter/jobs/:jobId/applications`, `GET/PATCH .../applications/:id` |
| Evaluation | `GET/PUT .../applications/:id/rounds/:roundId/evaluate` |
| Dashboard | `GET /recruiter/dashboard` |
| Analytics | `GET /recruiter/jobs/:jobId/analytics` |
| Talent | `GET /recruiter/talent-search` |
| Talent Pools | Full CRUD + member management (7 endpoints) |

**Job Management (via job module — 7 endpoints):**
- Create/update/delete jobs with custom fields
- Status lifecycle: DRAFT → PUBLISHED → CLOSED → ARCHIVED

**Dashboard Metrics:**
- Total/active jobs, total applications, hired count
- Status breakdown across all jobs
- Top 5 verified skills among candidates
- Recent 10 applications

**Job Analytics:**
- Per-job: application status breakdown
- Round-by-round funnel: total submissions, completed/in-progress/pending per round

**Talent Search:**
- Filter by: skills, verified skills, college, location, graduation year range, min ATS score, job status
- Returns: student profile + best ATS score + verified skill count

### 1.6 Frontend Page Structure

**Recruiter Pages (under `/recruiters/...`):**

| Page | Path | Purpose |
|------|------|---------|
| RecruiterDashboard | `/recruiters` | Metrics overview with stats cards, status charts, recent applications |
| RecruiterJobsList | `/recruiters/jobs` | Manage posted jobs with status toggles |
| CreateJobPage | `/recruiters/jobs/create` | 4-step wizard (basic → custom fields → rounds → review) |
| EditJobPage | `/recruiters/jobs/:id/edit` | Edit existing job |
| ApplicationsList | `/recruiters/jobs/:id/applications` | View/filter/advance applicants |
| ApplicationDetail | `/recruiters/applications/:id` | Full applicant view + evaluation |
| JobAnalyticsPage | `/recruiters/jobs/:id/analytics` | Funnel + status charts |
| TalentSearchPage | `/recruiters/talent-search` | Advanced talent discovery |
| TalentPoolsPage | `/recruiters/talent-pools` | Pool management |
| TalentPoolDetailPage | `/recruiters/talent-pools/:id` | Pool members |
| DrivesListPage | `/recruiters/campus-drives` | Campus drive listing |
| CreateDrivePage | `/recruiters/campus-drives/new` | Create campus drive |
| DriveDetailPage | `/recruiters/campus-drives/:id` | Drive detail + registrations |

### 1.7 State Management

- **Zustand Stores:** `auth.store.ts` (user, token, login/logout), `theme.store.ts`, `layout.store.ts`
- **React Query:** Server state caching with key factories in `query-keys.ts`
- **Axios Instance:** Auto JWT injection, 401 auto-logout, base URL from env

---

## STEP 2 — Integration Points

### 2.1 Key Principle: Extend, Don't Rebuild

The existing recruiter module already has job management, application pipeline, evaluation, talent search, and analytics. The HR features should be **additive extensions** that leverage existing infrastructure.

### 2.2 Files That Must Be Modified

#### Database
| File | Changes |
|------|---------|
| `server/src/database/prisma/schema.prisma` | Add 15+ new models, 10+ new enums, extend `user` model |

#### Server — Existing Module Extensions
| File | Changes |
|------|---------|
| `server/src/index.ts` | Register new route modules (hr, employee, leave, attendance, payroll, etc.) |
| `server/src/module/recruiter/recruiter.routes.ts` | Add interview scheduling, candidate pipeline stage endpoints |
| `server/src/module/recruiter/recruiter.controller.ts` | Add interview and pipeline controllers |
| `server/src/module/recruiter/recruiter.service.ts` | Add interview scheduling, pipeline analytics services |
| `server/src/middleware/role.middleware.ts` | Extend to support custom RBAC permissions |
| `server/src/middleware/auth.middleware.ts` | Add permission-level checks (not just role) |

#### Client — Existing Module Extensions
| File | Changes |
|------|---------|
| `client/src/App.tsx` | Add new routes for HR, employee, leave, payroll pages |
| `client/src/lib/types.ts` | Add new TypeScript interfaces for all HR entities |
| `client/src/lib/query-keys.ts` | Add key factories for new domains |
| `client/src/module/recruiter/RecruiterDashboard.tsx` | Extend with hiring pipeline metrics |
| `client/src/components/ProtectedRoute.tsx` | Support permission-based access (not just role) |

### 2.3 New Server Modules Required

| Module | Route Prefix | Purpose |
|--------|-------------|---------|
| `hr` | `/api/hr` | HR dashboard, workflows, compliance |
| `employee` | `/api/hr/employees` | Employee profiles, lifecycle, directory |
| `department` | `/api/hr/departments` | Department CRUD, org chart |
| `leave` | `/api/hr/leaves` | Leave requests, balances, policies |
| `attendance` | `/api/hr/attendance` | Check-in/out, attendance reports |
| `payroll` | `/api/hr/payroll` | Salary, payslips, tax calculations |
| `performance` | `/api/hr/performance` | Reviews, goals, KPIs |
| `task` | `/api/hr/tasks` | Task assignment, tracking |
| `reimbursement` | `/api/hr/reimbursements` | Expense claims, approvals |
| `compliance` | `/api/hr/compliance` | Document tracking, certifications |
| `hr-analytics` | `/api/hr/analytics` | HR dashboards, reports |
| `interview` | `/api/recruiter/interviews` | Interview scheduling, feedback |
| `onboarding` | `/api/hr/onboarding` | Onboarding checklists, document collection |
| `rbac` | `/api/rbac` | Role/permission management |

### 2.4 New Client Pages Required

| Area | Pages |
|------|-------|
| Recruiter Extension | Interview Calendar, Candidate Pipeline Board, Hiring Metrics Dashboard |
| HR Dashboard | Overview, Quick Actions, Alerts |
| Employee Management | Directory, Profile View/Edit, Org Chart |
| Leave Management | My Leaves, Team Leaves, Leave Calendar, Policy Config |
| Attendance | My Attendance, Team Attendance, Reports |
| Payroll | Payslips, Run Payroll, Tax Reports, Contractor Payments |
| Performance | My Reviews, Team Reviews, Goal Setting, KPI Dashboard |
| Task Management | Task Board, My Tasks, Team Tasks |
| Compliance | Documents, Certifications, Audit Trail |
| HR Analytics | Headcount, Turnover, Hiring Funnel, Compensation |
| RBAC Admin | Roles, Permissions, Custom Role Builder |

### 2.5 New Database Tables Required

15+ new tables (detailed in Step 6).

---

## STEP 3 — Feature Architecture

### 3.1 System Architecture Overview

```
┌─────────────────────────────────────────────────────────────────────┐
│                        CLIENT (React + Vite)                        │
│                                                                     │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐           │
│  │ Student  │  │Recruiter │  │   HR     │  │  Admin   │           │
│  │  Module  │  │  Module  │  │  Module  │  │  Module  │           │
│  └────┬─────┘  └────┬─────┘  └────┬─────┘  └────┬─────┘           │
│       │              │              │              │                 │
│  ┌────┴──────────────┴──────────────┴──────────────┴─────┐          │
│  │          Zustand (auth, theme) + React Query           │          │
│  └───────────────────────┬───────────────────────────────┘          │
│                          │ Axios (JWT auto-inject)                   │
└──────────────────────────┼──────────────────────────────────────────┘
                           │
                    ┌──────┴──────┐
                    │   Express   │
                    │   Server    │
                    └──────┬──────┘
                           │
          ┌────────────────┼────────────────┐
          │                │                │
    ┌─────┴──────┐  ┌─────┴──────┐  ┌─────┴──────┐
    │ Auth Layer │  │  RBAC      │  │ Rate Limit │
    │ (JWT)      │  │ Permission │  │ (express-  │
    │            │  │ Middleware │  │  rate-limit)│
    └─────┬──────┘  └─────┬──────┘  └─────┬──────┘
          │                │                │
    ┌─────┴────────────────┴────────────────┴─────┐
    │              Module Layer                     │
    │  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐│
    │  │Recruit │ │   HR   │ │Payroll │ │  RBAC  ││
    │  │  er    │ │ Module │ │ Module │ │ Module ││
    │  └───┬────┘ └───┬────┘ └───┬────┘ └───┬────┘│
    │      │          │          │            │     │
    │  routes → controller → service → prisma      │
    └─────────────────────┬───────────────────────┘
                          │
                    ┌─────┴──────┐
                    │  Prisma 7  │
                    │ PostgreSQL │
                    └────────────┘
```

### 3.2 New Role Architecture (Custom RBAC)

**Current:** 3 hardcoded roles (STUDENT, RECRUITER, ADMIN)

**Extended:** Keep existing roles + add permission-based access for HR features.

```
UserRole enum (unchanged):
  STUDENT | RECRUITER | ADMIN

New: customRole model
  - Links to permission sets
  - Assigned to users via userCustomRole junction

Permission Categories:
  HR_READ, HR_WRITE, HR_ADMIN
  EMPLOYEE_READ, EMPLOYEE_WRITE
  LEAVE_APPROVE, LEAVE_ADMIN
  PAYROLL_VIEW, PAYROLL_MANAGE
  PERFORMANCE_VIEW, PERFORMANCE_MANAGE
  ATTENDANCE_VIEW, ATTENDANCE_MANAGE
  RECRUITMENT_FULL (existing recruiter capabilities)
  COMPLIANCE_VIEW, COMPLIANCE_MANAGE
  ANALYTICS_VIEW, ANALYTICS_ADMIN
  RBAC_MANAGE
```

**Implementation Pattern:**
```typescript
// New middleware
function requirePermission(...permissions: string[]) {
  return async (req, res, next) => {
    const userPerms = await getUserPermissions(req.user.id);
    if (permissions.some(p => userPerms.includes(p))) return next();
    return res.status(403).json({ message: "Insufficient permissions" });
  };
}

// Usage: backwards compatible
router.get("/hr/employees", authMiddleware, requirePermission("EMPLOYEE_READ"), ...);
// Existing recruiter routes stay unchanged — requireRole("RECRUITER") still works
```

### 3.3 Employee Lifecycle Management

```
                     ┌──────────────┐
                     │  Candidate   │ (from recruitment pipeline)
                     └──────┬───────┘
                            │ HIRED
                     ┌──────┴───────┐
                     │  Onboarding  │
                     │  - Documents │
                     │  - IT Setup  │
                     │  - Training  │
                     └──────┬───────┘
                            │ COMPLETED
                     ┌──────┴───────┐
                     │    Active    │
                     │  - Attend.  │
                     │  - Leave    │
                     │  - Payroll  │
                     │  - Perf.    │
                     └──────┬───────┘
                            │
                   ┌────────┼────────┐
                   │        │        │
            ┌──────┴──┐ ┌──┴────┐ ┌─┴───────┐
            │ On Leave│ │Probat.│ │Transfer │
            └──────┬──┘ └──┬────┘ └─┬───────┘
                   │       │        │
                   └───────┼────────┘
                           │
                    ┌──────┴───────┐
                    │   Offboard   │
                    │  - Exit Int. │
                    │  - Handover  │
                    │  - Final Pay │
                    └──────┬───────┘
                           │
                    ┌──────┴───────┐
                    │    Alumni    │
                    └──────────────┘
```

### 3.4 HR Workflow Engine

Custom workflows for HR processes using a state-machine approach:

```typescript
interface WorkflowDefinition {
  id: string;
  name: string;           // "Leave Approval", "Expense Reimbursement"
  triggerEvent: string;    // "LEAVE_REQUEST_CREATED"
  steps: WorkflowStep[];
}

interface WorkflowStep {
  order: number;
  name: string;           // "Manager Approval"
  approverRole: string;   // permission or specific userId
  autoApproveAfterHours?: number;
  actions: { onApprove: string; onReject: string }; // next step or status
}
```

**Pre-built Workflows:**
1. Leave Approval: Employee → Manager → HR (optional for > 5 days)
2. Expense Reimbursement: Employee → Manager → Finance
3. Onboarding: HR creates → assign tasks → manager signs off
4. Performance Review: Self-assessment → Manager review → HR calibration
5. Offboarding: HR initiates → IT revoke → Manager handover → Finance final pay

---

## STEP 4 — Extended Recruiter Module

### 4.1 Enhanced Candidate Pipeline

**Current pipeline:** `APPLIED → IN_PROGRESS → SHORTLISTED → REJECTED → HIRED`

**Extended pipeline (add new enum values):**
```
APPLIED → SCREENING → PHONE_SCREEN → INTERVIEW → ASSESSMENT →
OFFER_PENDING → OFFER_SENT → OFFER_ACCEPTED → HIRED
                    ↘ OFFER_DECLINED
                    ↘ REJECTED (at any stage)
                    ↘ WITHDRAWN (by candidate)
```

### 4.2 Interview Scheduling & Feedback

**New endpoints (under existing recruiter router):**

```
POST   /recruiter/interviews                    # Schedule interview
GET    /recruiter/interviews                    # List all interviews
GET    /recruiter/interviews/:id                # Get interview details
PATCH  /recruiter/interviews/:id                # Update interview
DELETE /recruiter/interviews/:id                # Cancel interview
POST   /recruiter/interviews/:id/feedback       # Submit interviewer feedback
GET    /recruiter/applications/:id/interviews   # Get all interviews for application
```

**Interview model data:**
- applicationId, scheduledAt, durationMinutes
- type: PHONE | VIDEO | IN_PERSON | PANEL | TECHNICAL
- interviewerIds (array of user IDs)
- meetingLink (for video interviews)
- location (for in-person)
- status: SCHEDULED | CONFIRMED | COMPLETED | CANCELLED | NO_SHOW
- feedback: structured scores + notes per interviewer

### 4.3 Recruiter Dashboard Enhancements

**New dashboard sections:**

| Section | Data |
|---------|------|
| Hiring Pipeline | Kanban-style board showing candidates at each stage |
| Time-to-Hire | Average days from application to hire, by job |
| Upcoming Interviews | Next 7 days of scheduled interviews |
| Offer Tracker | Pending/sent/accepted/declined offers |
| Source Analytics | Where candidates are coming from |
| Diversity Metrics | Optional demographic breakdown |

### 4.4 Candidate Filtering & Search Enhancements

**New filter capabilities on TalentSearchPage:**

| Filter | Type | Description |
|--------|------|-------------|
| Pipeline Stage | Multi-select | Filter by current application status |
| Applied Date Range | Date range | When they applied |
| Interview Score | Min/Max | Based on interview feedback scores |
| Assessment Score | Min/Max | Based on round assessment scores |
| Source | Dropdown | Campus drive / direct / referral |
| Experience Level | Dropdown | Entry / Mid / Senior |
| Notice Period | Range | Days until available |

### 4.5 Resume Storage & Candidate Profiles

**Current:** Resumes stored in `user.resumes` (S3 URLs array) and `application.resumeUrl`.

**Enhancement:** Add a `candidateProfile` model that aggregates:
- All resumes across applications
- Interview history
- Assessment scores
- Recruiter notes and tags
- Timeline of all interactions

---

## STEP 5 — HR Management System

### 5.1 Employee Profiles

**employee model:**
- Links to existing `user` model (optional — some employees may not have platform accounts)
- Employment details: employeeId, department, designation, reportingManager
- Personal: dateOfBirth, bloodGroup, emergencyContact, address
- Employment: joiningDate, confirmationDate, employmentType (FULL_TIME, PART_TIME, CONTRACT, INTERN)
- Status: ONBOARDING, ACTIVE, ON_LEAVE, ON_PROBATION, NOTICE_PERIOD, EXITED

### 5.2 Onboarding Workflows

```
Onboarding Checklist:
├── Document Collection
│   ├── ID Proof
│   ├── Address Proof
│   ├── Education Certificates
│   ├── Previous Employment Letters
│   └── Bank Details
├── IT Setup
│   ├── Email Account
│   ├── Laptop/Device
│   ├── Software Access
│   └── Security Badge
├── HR Orientation
│   ├── Company Policies
│   ├── Benefits Enrollment
│   └── Org Chart Introduction
├── Team Introduction
│   ├── Manager Meeting
│   ├── Buddy Assignment
│   └── Team Lunch
└── Compliance
    ├── NDA Signing
    ├── Code of Conduct
    └── Safety Training
```

### 5.3 Leave Management

**Features:**
- Leave types: Casual, Sick, Earned/Privilege, Maternity/Paternity, Compensatory, Unpaid
- Leave balance tracking (annual allocation, carry-forward rules)
- Multi-level approval (manager → HR)
- Team calendar view (who's out)
- Holiday calendar (company + location-based)
- Leave policies configurable per department

### 5.4 Attendance Tracking

**Features:**
- Daily check-in/check-out (web-based)
- Work hours calculation
- Late/early tracking
- Overtime tracking
- Regularization requests (forgot to check in)
- Integration with leave system (auto-mark absent → leave deduction)
- Monthly/weekly attendance reports

### 5.5 Payroll Management

**Features:**
- Salary structure: Basic + HRA + DA + Special Allowance + Bonuses
- Deductions: PF, ESI, Professional Tax, TDS, Loan EMIs
- Monthly payroll processing with approval workflow
- Payslip generation (PDF)
- Tax computation (Old/New regime)
- Year-end Form 16 data
- Contractor payment management (separate payment cycles)
- Reimbursement processing

### 5.6 Performance Reviews

**Features:**
- Review cycles: Quarterly, Half-yearly, Annual
- Self-assessment + Manager assessment + Peer feedback (360°)
- Goal/OKR setting and tracking
- Rating scale: 1-5 with descriptors
- Performance improvement plans (PIP)
- Promotion/increment recommendations
- Historical performance data

### 5.7 Task Management

**Features:**
- Task creation with assignee, due date, priority, labels
- Status: TODO → IN_PROGRESS → REVIEW → DONE
- Subtasks
- Comments/activity log
- Team task board view
- My tasks dashboard
- Overdue alerts

### 5.8 Compliance Tracking

**Features:**
- Document expiry tracking (certifications, licenses)
- Policy acknowledgment tracking
- Mandatory training completion
- Audit trail for all HR actions
- Data retention policies
- GDPR/privacy compliance checklist

---

## STEP 6 — Database Schema Design

### 6.1 New Enums

```prisma
enum EmploymentStatus {
  ONBOARDING
  ACTIVE
  ON_LEAVE
  ON_PROBATION
  NOTICE_PERIOD
  EXITED
  ALUMNI
}

enum EmploymentType {
  FULL_TIME
  PART_TIME
  CONTRACT
  INTERN
  FREELANCER
}

enum LeaveType {
  CASUAL
  SICK
  EARNED
  MATERNITY
  PATERNITY
  COMPENSATORY
  UNPAID
  BEREAVEMENT
}

enum LeaveRequestStatus {
  PENDING
  APPROVED
  REJECTED
  CANCELLED
}

enum AttendanceStatus {
  PRESENT
  ABSENT
  HALF_DAY
  ON_LEAVE
  HOLIDAY
  WEEKEND
  WORK_FROM_HOME
}

enum PayrollStatus {
  DRAFT
  PROCESSING
  APPROVED
  PAID
  CANCELLED
}

enum ReviewCycle {
  QUARTERLY
  HALF_YEARLY
  ANNUAL
}

enum ReviewStatus_HR {
  DRAFT
  SELF_REVIEW
  MANAGER_REVIEW
  CALIBRATION
  COMPLETED
}

enum TaskPriority {
  LOW
  MEDIUM
  HIGH
  URGENT
}

enum TaskStatus {
  TODO
  IN_PROGRESS
  IN_REVIEW
  DONE
  CANCELLED
}

enum InterviewType {
  PHONE
  VIDEO
  IN_PERSON
  PANEL
  TECHNICAL
  HR
}

enum InterviewStatus {
  SCHEDULED
  CONFIRMED
  COMPLETED
  CANCELLED
  NO_SHOW
  RESCHEDULED
}

enum OnboardingStatus {
  NOT_STARTED
  IN_PROGRESS
  COMPLETED
  OVERDUE
}

enum ReimbursementStatus {
  DRAFT
  SUBMITTED
  MANAGER_APPROVED
  FINANCE_APPROVED
  PAID
  REJECTED
}

enum WorkflowStatus {
  ACTIVE
  PAUSED
  COMPLETED
  CANCELLED
}
```

### 6.2 New Models

```prisma
// ============================================================
// DEPARTMENT & ORG STRUCTURE
// ============================================================

model department {
  id          Int         @id @default(autoincrement())
  name        String      @unique
  slug        String      @unique
  description String?
  parentId    Int?
  parent      department? @relation("DepartmentHierarchy", fields: [parentId], references: [id])
  children    department[] @relation("DepartmentHierarchy")
  headId      Int?        // department head (employee id)
  isActive    Boolean     @default(true)
  createdAt   DateTime    @default(now())
  updatedAt   DateTime    @updatedAt

  employees   employee[]
  leavePolices departmentLeavePolicy[]

  @@index([parentId])
  @@index([isActive])
}

// ============================================================
// EMPLOYEE MODEL (extends user, adds employment data)
// ============================================================

model employee {
  id               Int              @id @default(autoincrement())
  userId           Int?             @unique  // link to platform user (optional)
  user             user?            @relation("EmployeeUser", fields: [userId], references: [id])
  employeeCode     String           @unique  // e.g., "EMP-001"
  firstName        String
  lastName         String
  email            String           @unique
  phone            String?
  dateOfBirth      DateTime?
  gender           String?
  bloodGroup       String?
  profilePic       String?

  // Employment details
  departmentId     Int
  department       department       @relation(fields: [departmentId], references: [id])
  designation      String
  employmentType   EmploymentType   @default(FULL_TIME)
  status           EmploymentStatus @default(ONBOARDING)
  joiningDate      DateTime
  confirmationDate DateTime?
  exitDate         DateTime?
  reportingManagerId Int?
  reportingManager employee?        @relation("ManagerReports", fields: [reportingManagerId], references: [id])
  directReports    employee[]       @relation("ManagerReports")

  // Personal details
  address          Json?            // {line1, line2, city, state, zip, country}
  emergencyContact Json?            // {name, relation, phone}
  bankDetails      Json?            // {bankName, accountNo, ifsc} — encrypted at rest
  documents        Json             @default("[]") // [{type, url, uploadedAt}]

  // Compensation
  currentSalary    Json?            // {basic, hra, da, special, gross, net}

  // Relations
  leaveRequests       leaveRequest[]         @relation("EmployeeLeaves")
  leaveBalances       leaveBalance[]         @relation("EmployeeLeaveBalances")
  attendanceRecords   attendanceRecord[]     @relation("EmployeeAttendance")
  payrollRecords      payrollRecord[]        @relation("EmployeePayroll")
  performanceReviews  performanceReview[]    @relation("EmployeeReviews")
  reviewsAsReviewer   performanceReview[]    @relation("ReviewerReviews")
  assignedTasks       hrTask[]               @relation("TaskAssignee")
  createdTasks        hrTask[]               @relation("TaskCreator")
  reimbursements      reimbursement[]        @relation("EmployeeReimbursements")
  onboardingChecklist onboardingChecklist?   @relation("EmployeeOnboarding")
  approvedLeaves      leaveRequest[]         @relation("LeaveApprover")

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@index([departmentId])
  @@index([status])
  @@index([reportingManagerId])
  @@index([employmentType])
  @@index([joiningDate])
}

// ============================================================
// CUSTOM RBAC
// ============================================================

model customRole {
  id          Int          @id @default(autoincrement())
  name        String       @unique  // "HR Manager", "Finance Admin"
  description String?
  permissions String[]     @default([]) // ["EMPLOYEE_READ","LEAVE_APPROVE",...]
  isSystem    Boolean      @default(false) // system roles can't be deleted
  createdAt   DateTime     @default(now())
  updatedAt   DateTime     @updatedAt

  userRoles userCustomRole[]
}

model userCustomRole {
  id       Int        @id @default(autoincrement())
  userId   Int
  user     user       @relation("UserCustomRoles", fields: [userId], references: [id], onDelete: Cascade)
  roleId   Int
  role     customRole @relation(fields: [roleId], references: [id], onDelete: Cascade)
  assignedAt DateTime @default(now())

  @@unique([userId, roleId])
  @@index([userId])
  @@index([roleId])
}

// ============================================================
// LEAVE MANAGEMENT
// ============================================================

model leavePolicy {
  id                Int      @id @default(autoincrement())
  leaveType         LeaveType
  name              String   // "Casual Leave"
  annualAllocation  Int      // days per year
  maxCarryForward   Int      @default(0)
  minConsecutiveDays Int     @default(1)
  maxConsecutiveDays Int?
  requiresApproval  Boolean  @default(true)
  isActive          Boolean  @default(true)
  createdAt         DateTime @default(now())
  updatedAt         DateTime @updatedAt

  departmentPolicies departmentLeavePolicy[]

  @@unique([leaveType])
}

model departmentLeavePolicy {
  id            Int          @id @default(autoincrement())
  departmentId  Int
  department    department   @relation(fields: [departmentId], references: [id], onDelete: Cascade)
  policyId      Int
  policy        leavePolicy  @relation(fields: [policyId], references: [id], onDelete: Cascade)
  overrideAllocation Int?    // department-specific override

  @@unique([departmentId, policyId])
}

model leaveBalance {
  id          Int       @id @default(autoincrement())
  employeeId  Int
  employee    employee  @relation("EmployeeLeaveBalances", fields: [employeeId], references: [id], onDelete: Cascade)
  leaveType   LeaveType
  year        Int
  allocated   Int       // total days allocated
  used        Int       @default(0)
  pending     Int       @default(0)  // days in pending requests
  carryForward Int      @default(0)

  @@unique([employeeId, leaveType, year])
  @@index([employeeId])
}

model leaveRequest {
  id           Int                @id @default(autoincrement())
  employeeId   Int
  employee     employee           @relation("EmployeeLeaves", fields: [employeeId], references: [id], onDelete: Cascade)
  leaveType    LeaveType
  startDate    DateTime
  endDate      DateTime
  totalDays    Float              // supports half-days (0.5)
  reason       String
  status       LeaveRequestStatus @default(PENDING)
  approverId   Int?
  approver     employee?          @relation("LeaveApprover", fields: [approverId], references: [id])
  approverNote String?
  approvedAt   DateTime?
  createdAt    DateTime           @default(now())
  updatedAt    DateTime           @updatedAt

  @@index([employeeId])
  @@index([status])
  @@index([startDate, endDate])
  @@index([approverId])
}

// ============================================================
// ATTENDANCE
// ============================================================

model attendanceRecord {
  id           Int              @id @default(autoincrement())
  employeeId   Int
  employee     employee         @relation("EmployeeAttendance", fields: [employeeId], references: [id], onDelete: Cascade)
  date         DateTime         @db.Date
  status       AttendanceStatus @default(PRESENT)
  checkIn      DateTime?
  checkOut     DateTime?
  workHours    Float?           // calculated from check-in/out
  overtime     Float?           // hours beyond standard
  isLate       Boolean          @default(false)
  lateMinutes  Int?
  notes        String?
  isRegularized Boolean         @default(false) // manual correction
  createdAt    DateTime         @default(now())
  updatedAt    DateTime         @updatedAt

  @@unique([employeeId, date])
  @@index([employeeId])
  @@index([date])
  @@index([status])
}

// ============================================================
// PAYROLL
// ============================================================

model payrollRecord {
  id            Int           @id @default(autoincrement())
  employeeId    Int
  employee      employee      @relation("EmployeePayroll", fields: [employeeId], references: [id], onDelete: Cascade)
  month         Int           // 1-12
  year          Int
  status        PayrollStatus @default(DRAFT)

  // Earnings
  basicSalary   Float
  hra           Float         @default(0)
  da            Float         @default(0)
  specialAllow  Float         @default(0)
  bonus         Float         @default(0)
  otherEarnings Float         @default(0)
  grossEarnings Float

  // Deductions
  pf            Float         @default(0)
  esi           Float         @default(0)
  profTax       Float         @default(0)
  tds           Float         @default(0)
  loanEmi       Float         @default(0)
  otherDeduct   Float         @default(0)
  totalDeductions Float

  netPay        Float
  payslipUrl    String?       // generated PDF
  paidAt        DateTime?
  createdAt     DateTime      @default(now())
  updatedAt     DateTime      @updatedAt

  @@unique([employeeId, month, year])
  @@index([employeeId])
  @@index([month, year])
  @@index([status])
}

// ============================================================
// PERFORMANCE MANAGEMENT
// ============================================================

model performanceReview {
  id            Int             @id @default(autoincrement())
  employeeId    Int
  employee      employee        @relation("EmployeeReviews", fields: [employeeId], references: [id], onDelete: Cascade)
  reviewerId    Int
  reviewer      employee        @relation("ReviewerReviews", fields: [reviewerId], references: [id])
  cycle         ReviewCycle
  period        String          // "Q1 2026", "H1 2026", "2025"
  status        ReviewStatus_HR @default(DRAFT)

  // Ratings
  selfRating      Float?       // 1-5
  managerRating   Float?       // 1-5
  finalRating     Float?       // after calibration
  selfComments    String?
  managerComments String?
  goals           Json         @default("[]") // [{title, target, achieved, weight}]
  strengths       String?
  improvements    String?
  promotionRecommended Boolean @default(false)

  completedAt   DateTime?
  createdAt     DateTime       @default(now())
  updatedAt     DateTime       @updatedAt

  @@index([employeeId])
  @@index([reviewerId])
  @@index([cycle, period])
  @@index([status])
}

// ============================================================
// TASK MANAGEMENT
// ============================================================

model hrTask {
  id           Int          @id @default(autoincrement())
  title        String
  description  String?
  assigneeId   Int
  assignee     employee     @relation("TaskAssignee", fields: [assigneeId], references: [id])
  creatorId    Int
  creator      employee     @relation("TaskCreator", fields: [creatorId], references: [id])
  priority     TaskPriority @default(MEDIUM)
  status       TaskStatus   @default(TODO)
  dueDate      DateTime?
  labels       String[]     @default([])
  parentTaskId Int?
  parentTask   hrTask?      @relation("SubTasks", fields: [parentTaskId], references: [id])
  subTasks     hrTask[]     @relation("SubTasks")
  comments     Json         @default("[]") // [{userId, text, createdAt}]
  completedAt  DateTime?
  createdAt    DateTime     @default(now())
  updatedAt    DateTime     @updatedAt

  @@index([assigneeId])
  @@index([creatorId])
  @@index([status])
  @@index([priority])
  @@index([dueDate])
}

// ============================================================
// REIMBURSEMENTS
// ============================================================

model reimbursement {
  id           Int                  @id @default(autoincrement())
  employeeId   Int
  employee     employee             @relation("EmployeeReimbursements", fields: [employeeId], references: [id], onDelete: Cascade)
  category     String               // "Travel", "Medical", "Food", "Equipment"
  amount       Float
  currency     String               @default("INR")
  description  String
  receiptUrls  String[]             @default([])
  status       ReimbursementStatus  @default(DRAFT)
  approverNote String?
  paidAt       DateTime?
  createdAt    DateTime             @default(now())
  updatedAt    DateTime             @updatedAt

  @@index([employeeId])
  @@index([status])
  @@index([createdAt])
}

// ============================================================
// INTERVIEW SCHEDULING (Recruiter Extension)
// ============================================================

model interview {
  id              Int             @id @default(autoincrement())
  applicationId   Int
  application     application     @relation("ApplicationInterviews", fields: [applicationId], references: [id], onDelete: Cascade)
  type            InterviewType   @default(VIDEO)
  scheduledAt     DateTime
  durationMinutes Int             @default(60)
  meetingLink     String?
  location        String?
  status          InterviewStatus @default(SCHEDULED)
  interviewerIds  Int[]           @default([])
  feedback        Json            @default("[]") // [{interviewerId, rating, strengths, weaknesses, notes, recommendation}]
  candidateNotes  String?         // notes sent to candidate
  cancelReason    String?
  createdAt       DateTime        @default(now())
  updatedAt       DateTime        @updatedAt

  @@index([applicationId])
  @@index([scheduledAt])
  @@index([status])
}

// ============================================================
// ONBOARDING
// ============================================================

model onboardingChecklist {
  id          Int              @id @default(autoincrement())
  employeeId  Int              @unique
  employee    employee         @relation("EmployeeOnboarding", fields: [employeeId], references: [id], onDelete: Cascade)
  status      OnboardingStatus @default(NOT_STARTED)
  items       Json             @default("[]") // [{category, task, isCompleted, completedAt, assignedTo}]
  startDate   DateTime         @default(now())
  targetDate  DateTime
  completedAt DateTime?
  createdAt   DateTime         @default(now())
  updatedAt   DateTime         @updatedAt
}

// ============================================================
// COMPLIANCE
// ============================================================

model complianceDocument {
  id           Int      @id @default(autoincrement())
  name         String
  category     String   // "Policy", "Certificate", "License", "Training"
  description  String?
  documentUrl  String?
  expiryDate   DateTime?
  isRequired   Boolean  @default(true)
  assignedTo   Int[]    @default([]) // employee IDs
  acknowledgedBy Int[]  @default([]) // employee IDs who acknowledged
  createdAt    DateTime @default(now())
  updatedAt    DateTime @updatedAt

  @@index([category])
  @@index([expiryDate])
}

// ============================================================
// HR WORKFLOW ENGINE
// ============================================================

model workflowDefinition {
  id          Int      @id @default(autoincrement())
  name        String   @unique
  description String?
  triggerEvent String  // "LEAVE_REQUEST", "REIMBURSEMENT", "ONBOARDING"
  steps       Json     // [{order, name, approverRole, autoApproveHours, onApprove, onReject}]
  isActive    Boolean  @default(true)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}

model workflowInstance {
  id              Int            @id @default(autoincrement())
  definitionId    Int
  definition      workflowDefinition @relation(fields: [definitionId], references: [id])
  entityType      String         // "LEAVE_REQUEST", "REIMBURSEMENT"
  entityId        Int            // ID of the entity being processed
  currentStep     Int            @default(0)
  status          WorkflowStatus @default(ACTIVE)
  stepHistory     Json           @default("[]") // [{step, action, actorId, timestamp, notes}]
  createdAt       DateTime       @default(now())
  updatedAt       DateTime       @updatedAt

  @@index([entityType, entityId])
  @@index([status])
}

// ============================================================
// CONTRACTOR PAYMENTS
// ============================================================

model contractorPayment {
  id            Int           @id @default(autoincrement())
  employeeId    Int           // employee with type=CONTRACT or FREELANCER
  invoiceNumber String?
  amount        Float
  currency      String        @default("INR")
  description   String
  periodStart   DateTime
  periodEnd     DateTime
  status        PayrollStatus @default(DRAFT)
  invoiceUrl    String?
  paidAt        DateTime?
  createdAt     DateTime      @default(now())
  updatedAt     DateTime      @updatedAt

  @@index([employeeId])
  @@index([status])
}

// ============================================================
// HOLIDAY CALENDAR
// ============================================================

model holiday {
  id          Int      @id @default(autoincrement())
  name        String
  date        DateTime @db.Date
  isOptional  Boolean  @default(false)
  location    String?  // null = all locations
  year        Int
  createdAt   DateTime @default(now())

  @@unique([name, date])
  @@index([year])
  @@index([date])
}
```

### 6.3 Modifications to Existing Models

**user model — add relation:**
```prisma
model user {
  // ... existing fields ...

  // ── HR relations (new) ──
  employeeProfile   employee?          @relation("EmployeeUser")
  customRoles       userCustomRole[]   @relation("UserCustomRoles")
}
```

**application model — add relation:**
```prisma
model application {
  // ... existing fields ...

  // ── Interview relation (new) ──
  interviews interview[] @relation("ApplicationInterviews")
}
```

### 6.4 Entity Relationship Diagram

```
┌──────────┐     ┌────────────┐     ┌──────────────┐
│   user   │────→│  employee  │←────│  department  │
└──────────┘     └─────┬──────┘     └──────────────┘
     │                 │
     │           ┌─────┼──────────────────────┐
     │           │     │                      │
     │     ┌─────┴──┐  ┌────────────┐  ┌─────┴────────┐
     │     │ leave  │  │ attendance │  │   payroll    │
     │     │Request │  │  Record    │  │   Record     │
     │     └────────┘  └────────────┘  └──────────────┘
     │           │
     │     ┌─────┴──────┐  ┌──────────────┐
     │     │performance │  │   hrTask     │
     │     │  Review    │  │              │
     │     └────────────┘  └──────────────┘
     │
     │     ┌────────────┐
     ├────→│customRole  │
     │     └────────────┘
     │
     │     ┌────────────┐     ┌──────────────┐
     ├────→│application │────→│  interview   │
     │     └────────────┘     └──────────────┘
     │
     │     ┌────────────────┐
     └────→│userCustomRole  │
           └────────────────┘

department ←─── departmentLeavePolicy ───→ leavePolicy
employee   ←─── leaveBalance
employee   ←─── reimbursement
employee   ←─── onboardingChecklist
employee   ←─── contractorPayment

workflowDefinition ←── workflowInstance
```

---

## STEP 7 — API Design

### 7.1 Employee Management

```
POST   /api/hr/employees              # Create employee
GET    /api/hr/employees              # List employees (paginated, filterable)
GET    /api/hr/employees/:id          # Get employee details
PUT    /api/hr/employees/:id          # Update employee
PATCH  /api/hr/employees/:id/status   # Change employment status
GET    /api/hr/employees/:id/timeline # Get employee lifecycle events
GET    /api/hr/org-chart              # Get org chart data
```

### 7.2 Department Management

```
POST   /api/hr/departments            # Create department
GET    /api/hr/departments            # List departments (tree structure)
GET    /api/hr/departments/:id        # Get department with employees
PUT    /api/hr/departments/:id        # Update department
DELETE /api/hr/departments/:id        # Delete (must be empty)
```

### 7.3 Leave Management

```
# Employee endpoints
POST   /api/hr/leaves                 # Submit leave request
GET    /api/hr/leaves/my              # My leave requests
GET    /api/hr/leaves/balance         # My leave balances
GET    /api/hr/leaves/calendar        # Team leave calendar

# Manager endpoints
GET    /api/hr/leaves/team            # Team leave requests
PATCH  /api/hr/leaves/:id/approve     # Approve leave
PATCH  /api/hr/leaves/:id/reject     # Reject leave

# Admin endpoints
GET    /api/hr/leaves/all             # All leave requests
POST   /api/hr/leaves/policies        # Create leave policy
PUT    /api/hr/leaves/policies/:id    # Update leave policy
POST   /api/hr/leaves/allocate        # Bulk allocate leave balances
GET    /api/hr/holidays               # Get holidays
POST   /api/hr/holidays               # Create holiday
```

### 7.4 Attendance Management

```
POST   /api/hr/attendance/check-in         # Check in
POST   /api/hr/attendance/check-out        # Check out
GET    /api/hr/attendance/my               # My attendance records
GET    /api/hr/attendance/today            # Today's status
POST   /api/hr/attendance/regularize       # Request regularization
GET    /api/hr/attendance/team             # Team attendance (manager)
GET    /api/hr/attendance/report           # Attendance report (HR)
```

### 7.5 Payroll Management

```
POST   /api/hr/payroll/run                 # Run payroll for month
GET    /api/hr/payroll/records             # Payroll records (filterable)
GET    /api/hr/payroll/:id                 # Single payroll record
PATCH  /api/hr/payroll/:id/approve         # Approve payroll
GET    /api/hr/payroll/payslip/:id         # Download payslip PDF
GET    /api/hr/payroll/my                  # My payslips

# Contractor payments
POST   /api/hr/contractor-payments         # Create payment
GET    /api/hr/contractor-payments         # List payments
PATCH  /api/hr/contractor-payments/:id     # Update/approve

# Reimbursements
POST   /api/hr/reimbursements             # Submit claim
GET    /api/hr/reimbursements/my          # My claims
GET    /api/hr/reimbursements/pending     # Pending for approval
PATCH  /api/hr/reimbursements/:id/approve # Approve
PATCH  /api/hr/reimbursements/:id/reject  # Reject
```

### 7.6 Performance Management

```
POST   /api/hr/performance/cycles          # Create review cycle
GET    /api/hr/performance/cycles          # List cycles
POST   /api/hr/performance/reviews         # Create review
GET    /api/hr/performance/reviews/my      # My reviews
GET    /api/hr/performance/reviews/team    # Team reviews (manager)
PUT    /api/hr/performance/reviews/:id     # Update review
PATCH  /api/hr/performance/reviews/:id/submit  # Submit review
GET    /api/hr/performance/goals           # Get goals
POST   /api/hr/performance/goals           # Set goals
```

### 7.7 Task Management

```
POST   /api/hr/tasks                       # Create task
GET    /api/hr/tasks/my                    # My tasks
GET    /api/hr/tasks/team                  # Team tasks
GET    /api/hr/tasks/:id                   # Task details
PUT    /api/hr/tasks/:id                   # Update task
PATCH  /api/hr/tasks/:id/status            # Update status
POST   /api/hr/tasks/:id/comments          # Add comment
```

### 7.8 Interview Scheduling (Recruiter Extension)

```
POST   /api/recruiter/interviews                     # Schedule
GET    /api/recruiter/interviews                     # List (filterable)
GET    /api/recruiter/interviews/:id                 # Details
PATCH  /api/recruiter/interviews/:id                 # Update
DELETE /api/recruiter/interviews/:id                 # Cancel
POST   /api/recruiter/interviews/:id/feedback        # Submit feedback
GET    /api/recruiter/interviews/calendar             # Calendar view
GET    /api/recruiter/applications/:id/interviews    # App interviews
```

### 7.9 RBAC Management

```
POST   /api/rbac/roles                    # Create custom role
GET    /api/rbac/roles                    # List roles
PUT    /api/rbac/roles/:id               # Update role permissions
DELETE /api/rbac/roles/:id               # Delete role
GET    /api/rbac/permissions             # List all available permissions
POST   /api/rbac/assign                  # Assign role to user
DELETE /api/rbac/revoke                  # Revoke role from user
GET    /api/rbac/users/:id/permissions   # Get user's effective permissions
```

### 7.10 HR Analytics

```
GET    /api/hr/analytics/headcount        # Headcount by dept, type, status
GET    /api/hr/analytics/turnover         # Monthly turnover rate
GET    /api/hr/analytics/hiring-funnel    # Recruitment funnel metrics
GET    /api/hr/analytics/leave-summary    # Leave utilization report
GET    /api/hr/analytics/attendance       # Attendance summary
GET    /api/hr/analytics/compensation     # Compensation distribution
GET    /api/hr/analytics/performance      # Performance rating distribution
GET    /api/hr/analytics/diversity        # Demographic breakdown
```

### 7.11 Compliance

```
GET    /api/hr/compliance/documents       # List compliance docs
POST   /api/hr/compliance/documents       # Create compliance doc
POST   /api/hr/compliance/acknowledge     # Acknowledge document
GET    /api/hr/compliance/expiring        # Documents expiring soon
GET    /api/hr/compliance/audit-trail     # HR action audit trail
```

### 7.12 Onboarding

```
POST   /api/hr/onboarding/:employeeId     # Create onboarding checklist
GET    /api/hr/onboarding/:employeeId     # Get checklist
PATCH  /api/hr/onboarding/:employeeId/items/:index  # Complete item
PATCH  /api/hr/onboarding/:employeeId/complete       # Mark complete
```

### 7.13 Workflows

```
GET    /api/hr/workflows                  # List workflow definitions
POST   /api/hr/workflows                  # Create workflow definition
PUT    /api/hr/workflows/:id              # Update workflow
GET    /api/hr/workflows/instances        # List active instances
PATCH  /api/hr/workflows/instances/:id/approve  # Approve current step
PATCH  /api/hr/workflows/instances/:id/reject   # Reject current step
```

---

## STEP 8 — UI Changes

### 8.1 Recruiter Dashboard Improvements

**Current:** Stats cards + status breakdown + recent applications

**Enhanced:**

```
┌─────────────────────────────────────────────────────┐
│  Recruiter Dashboard                                 │
│                                                       │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐      │
│  │Active│ │Total │ │Inter-│ │Offers│ │Hired │      │
│  │ Jobs │ │Appls │ │views │ │ Sent │ │      │      │
│  └──────┘ └──────┘ └──────┘ └──────┘ └──────┘      │
│                                                       │
│  ┌───────────────────────┐ ┌──────────────────────┐  │
│  │  Hiring Pipeline      │ │  Upcoming Interviews │  │
│  │  (Kanban Board)       │ │  (Calendar list)     │  │
│  │  Applied │ Screen │...│ │  Today: 3            │  │
│  │  ┌──┐    │ ┌──┐   │  │ │  Tomorrow: 2         │  │
│  │  │  │    │ │  │   │  │ │  This week: 8        │  │
│  │  └──┘    │ └──┘   │  │ └──────────────────────┘  │
│  └───────────────────────┘                            │
│                                                       │
│  ┌───────────────────────┐ ┌──────────────────────┐  │
│  │  Time-to-Hire Chart   │ │ Top Skills in Pool   │  │
│  │  (Bar/Line chart)     │ │ (Horizontal bars)    │  │
│  └───────────────────────┘ └──────────────────────┘  │
│                                                       │
│  ┌────────────────────────────────────────────────┐  │
│  │  Recent Applications (Table)                    │  │
│  └────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────┘
```

### 8.2 HR Admin Dashboard

**New page: `/hr` (requires HR permissions)**

```
┌─────────────────────────────────────────────────────┐
│  HR Dashboard                                        │
│                                                       │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐      │
│  │Total │ │Active│ │On    │ │Open  │ │Pend. │      │
│  │Empls │ │Today │ │Leave │ │Roles │ │Apprv │      │
│  └──────┘ └──────┘ └──────┘ └──────┘ └──────┘      │
│                                                       │
│  ┌───────────────────────┐ ┌──────────────────────┐  │
│  │  Quick Actions        │ │  Alerts & Reminders  │  │
│  │  • Run Payroll        │ │  • 3 leaves pending  │  │
│  │  • Add Employee       │ │  • 2 docs expiring   │  │
│  │  • View Attendance    │ │  • 1 probation due   │  │
│  └───────────────────────┘ └──────────────────────┘  │
│                                                       │
│  ┌───────────────────────┐ ┌──────────────────────┐  │
│  │  Dept. Headcount      │ │ Attendance Today     │  │
│  │  (Pie/Donut chart)    │ │ (Progress ring)      │  │
│  └───────────────────────┘ └──────────────────────┘  │
│                                                       │
│  ┌────────────────────────────────────────────────┐  │
│  │  Recent Activities (Timeline)                   │  │
│  └────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────┘
```

### 8.3 Employee Management Pages

```
/hr/employees              → Employee Directory (searchable table/grid)
/hr/employees/new          → Add Employee Form
/hr/employees/:id          → Employee Profile (tabs: Personal, Employment, Leaves, Attendance, Payroll, Performance)
/hr/employees/:id/edit     → Edit Employee
/hr/org-chart              → Interactive Org Chart
```

### 8.4 Leave Management Interface

```
/hr/leaves                 → Leave Dashboard (my balance, quick apply, upcoming holidays)
/hr/leaves/apply           → Apply Leave Form
/hr/leaves/history         → My Leave History
/hr/leaves/team            → Team Leave Calendar (manager view)
/hr/leaves/approvals       → Pending Approvals (manager/HR)
/hr/leaves/policies        → Leave Policy Config (HR admin)
```

### 8.5 Payroll Reports

```
/hr/payroll                → Payroll Dashboard (this month summary)
/hr/payroll/run            → Run Payroll Wizard (select month → review → approve)
/hr/payroll/records        → Payroll Records (filterable table)
/hr/payroll/payslips       → My Payslips (employee view)
/hr/payroll/contractors    → Contractor Payments
/hr/payroll/reimbursements → Reimbursement Claims
```

### 8.6 Analytics Dashboards

```
/hr/analytics              → Analytics Hub
/hr/analytics/headcount    → Headcount trends, dept breakdown
/hr/analytics/turnover     → Turnover rate, exit reasons
/hr/analytics/hiring       → Hiring funnel, time-to-hire, source effectiveness
/hr/analytics/leave        → Leave utilization across departments
/hr/analytics/attendance   → Attendance patterns, late trends
/hr/analytics/compensation → Salary distribution, band analysis
/hr/analytics/performance  → Rating distribution, top performers
```

### 8.7 Navigation Changes

**RecruiterLayout sidebar — add sections:**
```
Recruitment
  ├── Dashboard
  ├── Jobs
  ├── Applications
  ├── Interviews (NEW)
  ├── Talent Search
  ├── Talent Pools
  └── Campus Drives

HR Management (NEW — visible with HR permissions)
  ├── HR Dashboard
  ├── Employees
  ├── Departments
  ├── Leave Management
  ├── Attendance
  ├── Payroll
  ├── Performance
  ├── Tasks
  ├── Compliance
  ├── Analytics
  └── Settings (RBAC, Workflows, Policies)
```

---

## STEP 9 — Implementation Roadmap

### Phase 1 — Foundation (Week 1-2)

**Database & RBAC:**
1. Add new enums and models to `schema.prisma`
2. Run migration from `server/src/database/`
3. Implement `customRole`, `userCustomRole` models
4. Create `requirePermission()` middleware
5. Create RBAC management endpoints (`/api/rbac/*`)
6. Seed default roles: "HR Manager", "HR Admin", "Finance Admin", "Department Manager"

**Files to create/modify:**
```
MODIFY: server/src/database/prisma/schema.prisma
CREATE: server/src/middleware/permission.middleware.ts
CREATE: server/src/module/rbac/rbac.routes.ts
CREATE: server/src/module/rbac/rbac.controller.ts
CREATE: server/src/module/rbac/rbac.service.ts
CREATE: server/src/module/rbac/rbac.validation.ts
MODIFY: server/src/index.ts (register rbac routes)
MODIFY: client/src/lib/types.ts (add RBAC types)
```

### Phase 2 — Database Schema (Week 2-3)

1. Add `department`, `employee` models
2. Add `leavePolicy`, `leaveBalance`, `leaveRequest` models
3. Add `attendanceRecord` model
4. Add `payrollRecord`, `contractorPayment`, `reimbursement` models
5. Add `performanceReview`, `hrTask` models
6. Add `interview` model (recruiter extension)
7. Add `onboardingChecklist`, `complianceDocument` models
8. Add `workflowDefinition`, `workflowInstance` models
9. Add `holiday` model
10. Update `user` and `application` models with new relations
11. Run migration, verify

### Phase 3 — Backend Services (Week 3-6)

**Priority order (each follows routes → controller → service → validation pattern):**

1. **Department module** — CRUD, org chart query
2. **Employee module** — CRUD, status management, lifecycle
3. **Leave module** — Policies, balances, requests, approval workflow
4. **Attendance module** — Check-in/out, reports, regularization
5. **Interview module** — Scheduling, feedback (recruiter extension)
6. **Task module** — CRUD, status updates, team queries
7. **Performance module** — Review cycles, goals, ratings
8. **Payroll module** — Salary calculation, payslip generation, processing
9. **Reimbursement module** — Claims, approval workflow
10. **Onboarding module** — Checklist management
11. **Compliance module** — Document tracking, acknowledgments
12. **Workflow module** — Engine, instance management
13. **HR Analytics module** — Aggregation queries, report endpoints

**Files to create (per module — example for leave):**
```
CREATE: server/src/module/leave/leave.routes.ts
CREATE: server/src/module/leave/leave.controller.ts
CREATE: server/src/module/leave/leave.service.ts
CREATE: server/src/module/leave/leave.validation.ts
```

### Phase 4 — Frontend Pages (Week 6-10)

**Priority order:**

1. **HR Layout** — Sidebar, navigation, permission-based menu items
2. **Employee Directory** — List, search, filters, profile view
3. **Department Management** — CRUD, org chart visualization
4. **Leave Management** — Apply form, calendar, approval queue, balance display
5. **Attendance** — Check-in UI, daily/monthly reports
6. **Recruiter Dashboard Enhancement** — Kanban pipeline, interview calendar
7. **Interview Scheduling** — Calendar view, feedback forms
8. **Task Board** — Kanban-style task management
9. **Performance Reviews** — Self/manager assessment forms, goal tracking
10. **Payroll** — Run payroll wizard, payslip viewer, records table
11. **Reimbursements** — Claim form, approval queue
12. **HR Analytics** — Chart-based dashboards (use Recharts/Chart.js)
13. **Compliance** — Document list, acknowledgment tracking
14. **Onboarding** — Checklist progress view

**Files to create (per feature — example for leave):**
```
CREATE: client/src/module/hr/HRLayout.tsx
CREATE: client/src/module/hr/HRDashboard.tsx
CREATE: client/src/module/hr/leave/LeaveDashboard.tsx
CREATE: client/src/module/hr/leave/ApplyLeavePage.tsx
CREATE: client/src/module/hr/leave/LeaveHistoryPage.tsx
CREATE: client/src/module/hr/leave/LeaveApprovalsPage.tsx
CREATE: client/src/module/hr/leave/LeaveCalendarPage.tsx
CREATE: client/src/module/hr/leave/LeavePoliciesPage.tsx
MODIFY: client/src/App.tsx (add all HR routes)
MODIFY: client/src/lib/types.ts (add all HR types)
MODIFY: client/src/lib/query-keys.ts (add HR key factories)
```

### Phase 5 — RBAC Integration (Week 10-11)

1. Build RBAC admin UI (role builder, permission assignment)
2. Integrate `requirePermission()` into all new HR routes
3. Update `ProtectedRoute` component to check permissions
4. Add permission-based sidebar menu rendering
5. Create role assignment page in admin panel

**Files to create/modify:**
```
CREATE: client/src/module/hr/settings/RBACPage.tsx
CREATE: client/src/module/hr/settings/RoleBuilderPage.tsx
MODIFY: client/src/components/ProtectedRoute.tsx
MODIFY: client/src/module/recruiter/RecruiterLayout.tsx (or new HRLayout)
CREATE: client/src/hooks/usePermissions.ts
CREATE: client/src/lib/permission.store.ts (Zustand)
```

### Phase 6 — Analytics Dashboards (Week 11-12)

1. Implement all analytics aggregation queries
2. Build chart components (headcount, turnover, funnel, etc.)
3. Add export functionality (CSV/PDF)
4. Build real-time attendance dashboard
5. Performance rating heatmaps

**Libraries to add:**
- `recharts` (already likely in client deps) for charts
- `jspdf` or `@react-pdf/renderer` for PDF generation

---

## STEP 10 — Performance & Security

### 10.1 Avoiding N+1 Queries

```typescript
// BAD: N+1
const employees = await prisma.employee.findMany();
for (const emp of employees) {
  emp.department = await prisma.department.findUnique({ where: { id: emp.departmentId } });
}

// GOOD: Eager loading
const employees = await prisma.employee.findMany({
  include: { department: true, reportingManager: { select: { firstName: true, lastName: true } } }
});
```

### 10.2 Indexed Queries

All new models include `@@index` on frequently queried columns:
- `employeeId` on leave, attendance, payroll records
- `status` on requests, reviews, tasks
- `date` / `createdAt` for time-range queries
- Composite indexes for common filter combinations

### 10.3 Avoiding Inefficient Joins

```typescript
// For analytics, use Prisma groupBy instead of loading all records
const statusBreakdown = await prisma.leaveRequest.groupBy({
  by: ["status"],
  _count: { id: true },
  where: { employee: { departmentId } }
});
```

### 10.4 Access Control Safety

```typescript
// Every service method checks authorization
async getEmployeeDetails(employeeId: number, requesterId: number) {
  const requester = await this.getRequesterWithPermissions(requesterId);

  // Self-access always allowed
  if (requester.employeeId === employeeId) return this.fetchEmployee(employeeId);

  // Manager access
  const employee = await prisma.employee.findUnique({ where: { id: employeeId } });
  if (employee.reportingManagerId === requester.employeeId) return employee;

  // Permission-based access
  if (!requester.permissions.includes("EMPLOYEE_READ")) {
    throw new ForbiddenError("Insufficient permissions");
  }
  return employee;
}
```

### 10.5 Transaction Safety

```typescript
// Payroll processing — all-or-nothing
async runPayroll(month: number, year: number) {
  return prisma.$transaction(async (tx) => {
    const employees = await tx.employee.findMany({ where: { status: "ACTIVE" } });

    const records = employees.map(emp => ({
      employeeId: emp.id,
      month, year,
      ...this.calculateSalary(emp),
      status: "DRAFT"
    }));

    await tx.payrollRecord.createMany({ data: records });

    // Update leave deductions in same transaction
    await this.processLeaveDeductions(tx, month, year);

    return { count: records.length };
  });
}
```

### 10.6 Caching Strategy

```typescript
// In-memory cache for frequently read, rarely changed data
const CACHE = new Map<string, { data: unknown; expiresAt: number }>();
const TTL = 5 * 60 * 1000; // 5 minutes

// Cache candidates:
// - Department list (changes rarely)
// - Leave policies (changes rarely)
// - Holiday calendar (changes yearly)
// - Org chart (changes on employee updates — invalidate on change)

// DO NOT cache:
// - Attendance records (real-time)
// - Leave balances (changes frequently)
// - Payroll data (sensitive)
```

### 10.7 Sensitive Data Handling

```typescript
// Bank details — never return in list queries
const employee = await prisma.employee.findUnique({
  where: { id },
  select: {
    // ... all fields EXCEPT bankDetails
    bankDetails: requester.permissions.includes("PAYROLL_MANAGE") // only for payroll admins
  }
});

// Salary data — restrict to HR/Finance roles
// Payslips — only self or PAYROLL_MANAGE permission
```

### 10.8 Query Optimization Patterns

```typescript
// Attendance report — use raw query for date aggregation
const report = await prisma.$queryRaw`
  SELECT
    date_trunc('month', date) as month,
    COUNT(*) FILTER (WHERE status = 'PRESENT') as present_days,
    COUNT(*) FILTER (WHERE status = 'ABSENT') as absent_days,
    AVG(work_hours) as avg_hours
  FROM "attendanceRecord"
  WHERE "employeeId" = ${employeeId}
    AND date BETWEEN ${startDate} AND ${endDate}
  GROUP BY date_trunc('month', date)
  ORDER BY month
`;

// Use cursor-based pagination for large datasets
const employees = await prisma.employee.findMany({
  take: 20,
  skip: 1,
  cursor: { id: lastSeenId },
  orderBy: { id: "asc" }
});
```

---

## STEP 11 — Final Deliverable Summary

### 11.1 Architecture Overview

The HR system integrates into InternHack as an **extension of the recruiter module** + new HR modules, maintaining the existing `routes → controller → service` pattern. The system adds:

- **Custom RBAC** layer on top of existing role-based auth
- **Employee lifecycle** management from hiring through offboarding
- **HR operations** (leave, attendance, payroll, performance, tasks)
- **Workflow engine** for configurable approval processes
- **Analytics dashboards** for HR metrics

All existing functionality (student, recruiter, admin) remains untouched.

### 11.2 Database Schema

| Category | New Models | New Enums |
|----------|-----------|-----------|
| Organization | `department` | — |
| Employee | `employee`, `onboardingChecklist` | `EmploymentStatus`, `EmploymentType`, `OnboardingStatus` |
| RBAC | `customRole`, `userCustomRole` | — |
| Leave | `leavePolicy`, `departmentLeavePolicy`, `leaveBalance`, `leaveRequest` | `LeaveType`, `LeaveRequestStatus` |
| Attendance | `attendanceRecord` | `AttendanceStatus` |
| Payroll | `payrollRecord`, `contractorPayment`, `reimbursement` | `PayrollStatus`, `ReimbursementStatus` |
| Performance | `performanceReview` | `ReviewCycle`, `ReviewStatus_HR` |
| Tasks | `hrTask` | `TaskPriority`, `TaskStatus` |
| Recruitment | `interview` | `InterviewType`, `InterviewStatus` |
| Compliance | `complianceDocument` | — |
| Workflow | `workflowDefinition`, `workflowInstance` | `WorkflowStatus` |
| Calendar | `holiday` | — |

**Total: 20 new models, 14 new enums**

### 11.3 API Structure

| Domain | Endpoints | Auth |
|--------|-----------|------|
| RBAC | 8 | ADMIN only |
| Employee | 7 | HR permissions |
| Department | 5 | HR permissions |
| Leave | 12 | Employee self + manager + HR |
| Attendance | 7 | Employee self + manager + HR |
| Payroll | 9 | Finance/HR permissions |
| Performance | 8 | Employee self + manager + HR |
| Tasks | 7 | Employee + manager |
| Interview (recruiter ext) | 8 | RECRUITER role |
| HR Analytics | 8 | HR/ADMIN |
| Compliance | 5 | HR permissions |
| Onboarding | 4 | HR permissions |
| Workflows | 5 | HR/ADMIN |

**Total: ~93 new API endpoints**

### 11.4 File-Level Changes Summary

| Action | Count | Examples |
|--------|-------|---------|
| **New server modules** | 14 | leave, attendance, payroll, employee, department, rbac, performance, task, reimbursement, interview, onboarding, compliance, workflow, hr-analytics |
| **New server files** | ~56 | 4 files per module (routes, controller, service, validation) |
| **Modified server files** | 4 | `schema.prisma`, `index.ts`, `role.middleware.ts`, `recruiter.routes.ts` |
| **New client pages** | ~40 | HR dashboard, employee list/detail, leave pages, payroll pages, etc. |
| **New client components** | ~15 | HRLayout, HRSidebar, KanbanBoard, CalendarView, ChartWidgets |
| **Modified client files** | 5 | `App.tsx`, `types.ts`, `query-keys.ts`, `ProtectedRoute.tsx`, RecruiterLayout |
| **New hooks/stores** | 3 | `usePermissions.ts`, `permission.store.ts`, `useHRQueries.ts` |

### 11.5 Step-by-Step Implementation Roadmap

| Phase | Duration | Deliverables |
|-------|----------|-------------|
| **Phase 1** Foundation | Week 1-2 | RBAC system, permission middleware, role management API |
| **Phase 2** Database | Week 2-3 | All 20 new models, migrations, seed data |
| **Phase 3** Backend | Week 3-6 | All 14 backend modules (~93 endpoints) |
| **Phase 4** Frontend | Week 6-10 | All HR pages, recruiter enhancements, dashboards |
| **Phase 5** RBAC UI | Week 10-11 | Admin role builder, permission integration, menu gating |
| **Phase 6** Analytics | Week 11-12 | All analytics dashboards, charts, exports |

**Total estimated: 12 weeks for full implementation.**

---

*This document serves as the complete architecture blueprint. Each phase can be implemented incrementally without breaking existing functionality.*
