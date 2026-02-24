# InternHack — Repo Map (Quick Reference)

> Read this before any editing task. It tells you where things live so you don't need to explore the whole repo.

---

## Stack

| Layer | Tech |
|---|---|
| Frontend | React 18, Vite 7, TailwindCSS 4, React Router 7, Framer Motion |
| Backend | Express 5, TypeScript 5, Prisma 7, Node Cron |
| Database | PostgreSQL (via Prisma + `@prisma/adapter-pg`) |
| Auth | JWT + Google OAuth |
| AI | Google Gemini (ATS resume scoring) |
| Storage | AWS S3 |
| State | Zustand (auth) + React Query (server state) |

---

## Top-Level Structure

```
InternHack/
├── client/          # React + Vite frontend
├── server/          # Express + TypeScript backend
└── .claude/         # Claude config & this file
```

---

## Server — `server/src/`

### Entry & Database

| File | Purpose |
|---|---|
| `src/index.ts` | Express app init, route registration, CORS, cron startup |
| `src/database/db.ts` | Prisma client singleton (PrismaPg adapter) |
| `src/database/prisma/schema.prisma` | All Prisma models & enums |
| `src/database/prisma.config.ts` | Prisma config (schema path, DB url from env) |
| `src/database/prisma/migrations/` | Migration SQL files |
| `src/database/seed.ts` | Seeds career roadmap data |
| `src/database/seed-admin.ts` | Seeds admin accounts |

**Run migrations from:** `server/src/database/` (not server root) — uses `prisma.config.ts`

### Middleware — `src/middleware/`

| File | Exports |
|---|---|
| `auth.middleware.ts` | `authMiddleware()`, `optionalAuthMiddleware()` |
| `role.middleware.ts` | `requireRole(role)` |
| `error.middleware.ts` | Global error handler |
| `upload.middleware.ts` | `uploadSingle()`, `uploadResume()`, `uploadImage()` |

### Modules — `src/module/<name>/`

Each module: `<name>.routes.ts` → `<name>.controller.ts` → `<name>.service.ts`

| Module | Route Prefix | Key Responsibility |
|---|---|---|
| `auth` | `/api/auth` | Register, login, Google OAuth, profile CRUD |
| `job` | `/api/jobs` | Job CRUD, status changes (public read, recruiter write) |
| `recruiter` | `/api/recruiter` | Rounds mgmt, application review, evaluation, analytics |
| `student` | `/api/student` | Apply, track applications, submit round responses |
| `ats` | `/api/ats` | AI resume scoring via Gemini, score history |
| `career` | `/api/careers` | Career roadmaps, enroll, skill progress |
| `company` | `/api/companies` | Company directory, reviews, contacts, contributions |
| `scraper` | `/api/scraped-jobs` | External job aggregation, cron-based scraping |
| `admin` | `/api/admin` | Platform management, user/job/company moderation |
| `upload` | `/api/upload` | S3 resume/attachment/profile-pic uploads |
| `newsletter` | `/api/newsletter` | Email subscription management |

### Utilities — `src/utils/`

| File | Exports |
|---|---|
| `jwt.utils.ts` | `generateToken()`, `verifyToken()` |
| `password.utils.ts` | `hashPassword()`, `comparePassword()` |
| `s3.utils.ts` | `uploadToS3()`, `deleteFromS3()`, `getS3KeyFromUrl()` |

### Types — `src/types/`

| File | Contains |
|---|---|
| `custom-fields.types.ts` | `CustomFieldDefinition`, `EvaluationCriterion` |
| `express.d.ts` | Express Request extended with `user: { id, email, role }` |

---

## Database Models (schema.prisma)

### Core Enums

```
UserRole:           STUDENT | RECRUITER | ADMIN
JobStatus:          DRAFT | PUBLISHED | CLOSED | ARCHIVED
ApplicationStatus:  APPLIED | IN_PROGRESS | SHORTLISTED | REJECTED | HIRED | WITHDRAWN
RoundStatus:        PENDING | IN_PROGRESS | COMPLETED | SKIPPED
CompanySize:        STARTUP | SMALL | MEDIUM | LARGE | ENTERPRISE
ReviewStatus:       PENDING | APPROVED | REJECTED
ContributionStatus: PENDING | APPROVED | REJECTED
ContributionType:   NEW_COMPANY | EDIT_COMPANY | ADD_CONTACT | ADD_REVIEW
AdminTier:          SUPER_ADMIN | ADMIN | MODERATOR
SubscriptionPlan:   FREE | MONTHLY | YEARLY
SubscriptionStatus: ACTIVE | EXPIRED | CANCELLED
```

### Model → Key Fields Quick Ref

| Model | Key Fields |
|---|---|
| `user` | id, name, email(unique), password, role, isActive, contactNo, profilePic, **resumes(String[])**, company, designation, subscription*, bio, college, graduationYear, skills(String[]), linkedinUrl, githubUrl, portfolioUrl, location |
| `adminProfile` | id, userId(unique FK→user), tier, isActive |
| `adminActivityLog` | id, adminId(FK→user), action, targetType, targetId, details(JSON), ipAddress |
| `job` | id, title, description, location, salary, company, status, customFields(JSON), deadline, tags(String[]), recruiterId(FK→user) |
| `round` | id, jobId(FK), name, description, orderIndex(unique/job), instructions, customFields(JSON), evaluationCriteria(JSON) |
| `application` | id, jobId+studentId(unique), status, currentRoundId, customFieldAnswers(JSON), resumeUrl, coverLetter |
| `roundSubmission` | id, applicationId+roundId(unique), status, fieldAnswers(JSON), attachments(String[]), evaluationScores(JSON), recruiterNotes, submittedAt, evaluatedAt |
| `career` | id, title(unique), slug(unique), description, category, difficulty, iconUrl, avgSalary, demandLevel |
| `careerPhase` | id, careerId(FK), title, orderIndex(unique/career), durationWeeks |
| `careerSkill` | id, phaseId(FK), name, level |
| `careerResource` | id, phaseId(FK), title, url, type, free |
| `careerTool` | id, phaseId(FK), name, url, category |
| `studentCareer` | id, studentId+careerId(unique), status(EnrollmentStatus) |
| `studentSkillProgress` | id, studentId+skillId(unique), completed |
| `atsScore` | id, studentId(FK), resumeUrl, jobTitle, jobDescription, overallScore, categoryScores(JSON), suggestions(JSON), keywordAnalysis(JSON), rawResponse(JSON) |
| `scrapedJob` | id, title, company, location, applicationUrl, source+sourceId(unique), status(ScrapedJobStatus), metadata(JSON) |
| `scrapeLog` | id, source, status, jobsFound, jobsCreated, jobsUpdated, error, duration |
| `company` | id, name, slug(unique), logo, description, industry, size, city, state, officeLocations(JSON), technologies(String[]), hiringStatus, avgRating, reviewCount, isApproved, createdById(FK) |
| `companyReview` | id, companyId(FK), userId(FK), rating, title, content, pros, cons, interviewExperience, workCulture, salaryInsights, status |
| `companyContact` | id, companyId(FK), name, designation, email, phone, linkedinUrl, isPublic, addedById(FK) |
| `companyContribution` | id, userId(FK), type, companyId, data(JSON), status, adminNotes, reviewedById(FK) |
| `newsletterSubscriber` | id, email(unique) |

---

## Client — `client/src/`

### Core Files

| File | Purpose |
|---|---|
| `main.tsx` | App root — GoogleOAuthProvider, React Query, HelmetProvider |
| `App.tsx` | React Router routes + ProtectedRoute wrapping |
| `lib/axios.ts` | Axios instance — auto injects JWT, handles 401 logout |
| `lib/auth.store.ts` | Zustand auth store — persists to localStorage |
| `lib/query-keys.ts` | React Query key factories by domain |
| `lib/types.ts` | TypeScript types mirroring backend models |

### Components — `src/components/`

| Component | Use |
|---|---|
| `Navbar.tsx`, `Footer.tsx` | Shared layout |
| `ProtectedRoute.tsx` | Route guard by role |
| `DynamicFieldBuilder.tsx` | Build custom form field definitions (recruiter) |
| `DynamicFieldRenderer.tsx` | Render custom fields for user input (student) |
| `SEO.tsx` | Helmet-based SEO tags |
| `HeroSection`, `FeaturesSection`, `StatsSection`, `CTASection`, `HowItWorksSection`, `PricingSection`, `RecentJobs`, `GrantsSection`, `AIInterview` | Landing page sections |

### Page Modules — `src/`

#### Auth — `src/auth/`
- `LoginPage.tsx` — Email/password + Google OAuth
- `RegisterPage.tsx` — Registration

#### Student — `src/student/`
| File | Route |
|---|---|
| `StudentLayout.tsx` | Sidebar wrapper |
| `jobs/JobBrowsePage.tsx` | Browse/search jobs |
| `jobs/JobDetailPage.tsx` | Job detail + apply CTA |
| `applications/MyApplicationsPage.tsx` | Track own applications |
| `applications/ApplyPage.tsx` | Application form |
| `applications/ApplicationProgressPage.tsx` | Multi-round progress |
| `ats/AtsScorePage.tsx` | Upload resume, score it |
| `ats/AtsHistoryPage.tsx` | Previous ATS scores |
| `ats/AtsScoreDetailPage.tsx` | Detailed score analysis |
| `companies/CompanyListPage.tsx` | Browse companies |
| `companies/CompanyDetailPage.tsx` | Company + reviews + contacts |
| `companies/AddCompanyPage.tsx` | Contribute new company |
| `profile/StudentProfilePage.tsx` | Edit profile |
| `grants/GrantsPage.tsx` | Grants & opportunities |

#### Recruiter — `src/recruiter/`
| File | Purpose |
|---|---|
| `RecruiterDashboard.tsx` | Metrics overview |
| `RecruiterJobsList.tsx` | Manage posted jobs |
| `jobs/CreateJobPage.tsx` | Create job + custom fields |
| `jobs/EditJobPage.tsx` | Edit job |
| `applications/ApplicationsList.tsx` | View applicants |
| `applications/ApplicationDetail.tsx` | Applicant details |
| `applications/EvaluationForm.tsx` | Evaluate round submission |
| `rounds/RoundsManager.tsx` | Configure interview rounds |
| `rounds/RoundForm.tsx` | Create/edit round |
| `analytics/JobAnalyticsPage.tsx` | Job performance analytics |

#### Admin — `src/admin/`
| File | Purpose |
|---|---|
| `AdminLoginPage.tsx` | Admin auth |
| `AdminDashboard.tsx` | Platform stats |
| `users/UsersListPage.tsx` | User management |
| `jobs/AdminJobsListPage.tsx` | Job moderation |
| `companies/AdminCompaniesPage.tsx` | Company management |
| `reviews/AdminReviewsPage.tsx` | Review approval |
| `contributions/AdminContributionsPage.tsx` | Contribution moderation |
| `activity/ActivityLogsPage.tsx` | Audit logs |
| `careers/AdminCareersPage.tsx` | Career roadmap management |
| `AdminSubscribersPage.tsx` | Newsletter subscribers |

#### Career — `src/career/`
| File | Purpose |
|---|---|
| `CareerExplorePage.tsx` | Browse all career roadmaps |
| `CareerDetailPage.tsx` | Single career with phases |
| `MyCareerPathsPage.tsx` | Student enrolled careers |
| `CareerProgressPage.tsx` | Progress tracker per career |
| `components/CareerCard.tsx` | Career card component |
| `components/RoadmapTimeline.tsx` | Phase visualization |

#### Scraped Jobs — `src/scraped-jobs/`
- `ScrapedJobsPage.tsx` — External job listings
- `ScrapedJobDetailPage.tsx` — External job detail + apply link

---

## Environment Variables

### Server (`server/.env`)
```
DATABASE_URL          # PostgreSQL connection string
JWT_SECRET            # JWT signing key
GOOGLE_CLIENT_ID      # Google OAuth
GEMINI_API_KEY        # Google Gemini for ATS
AWS_ACCESS_KEY_ID     # S3 uploads
AWS_SECRET_ACCESS_KEY
AWS_REGION
PORT                  # default 3000
SCRAPER_CRON          # default: 0 */6 * * *
NODE_ENV
```

### Client (`client/.env`)
```
VITE_GOOGLE_CLIENT_ID
VITE_API_URL          # default: http://localhost:3000/api
```

---

## Auth Flow

```
JWT in Authorization: Bearer <token>
                       ↓
              authMiddleware (required)
         optionalAuthMiddleware (public routes)
                       ↓
              requireRole(STUDENT | RECRUITER | ADMIN)
```

Token stored in localStorage via Zustand auth store. Axios auto-injects it on every request. 401 response triggers auto-logout.

---

## Multi-Role Permissions Summary

| Feature | STUDENT | RECRUITER | ADMIN |
|---|---|---|---|
| Browse/apply jobs | ✓ | — | — |
| Post/manage jobs | — | ✓ | ✓ |
| Interview rounds | — | ✓ | — |
| Evaluate applications | — | ✓ | — |
| ATS resume scoring | ✓ | — | — |
| Career roadmaps | ✓ (enroll) | — | ✓ (manage) |
| Company explorer | ✓ (reviews) | — | ✓ (manage) |
| Platform moderation | — | — | ✓ |

---

## Common Edit Scenarios → Where to Go

| Task | Files to touch |
|---|---|
| Add/change API endpoint | `server/src/module/<name>/<name>.routes.ts` + `.controller.ts` + `.service.ts` |
| Add a DB column | `schema.prisma` → run migration from `server/src/database/` |
| Change validation rules | `server/src/module/<name>/<name>.validation.ts` |
| Change auth logic | `server/src/middleware/auth.middleware.ts` + `server/src/utils/jwt.utils.ts` |
| Fix upload logic | `server/src/middleware/upload.middleware.ts` + `server/src/utils/s3.utils.ts` |
| Change a client page | `client/src/<module>/<PageName>.tsx` |
| Add a new client route | `client/src/App.tsx` |
| Change global API config | `client/src/lib/axios.ts` |
| Change auth state | `client/src/lib/auth.store.ts` |
| Add React Query cache key | `client/src/lib/query-keys.ts` |
| Change shared types (client) | `client/src/lib/types.ts` |
| Seed data | `server/src/database/seed.ts` or `seed-admin.ts` |
| Cron/scraper config | `server/src/module/scraper/` |
