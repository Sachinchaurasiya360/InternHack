# InternHack, Repo Map - A quick reference guide for contributors to understand the project structure and locate important files easily.

> Read this before any editing task. It tells you where things live so you don't need to explore the whole repo.

---
# Project Overview

InternHack is a full-stack AI-powered career platform that helps students with:

- Job discovery
- Resume analysis
- Mock interviews
- Skill development
- Recruiter hiring workflows

The project uses:
- React + Vite frontend
- Express + TypeScript backend
- PostgreSQL database
- Prisma ORM
- Google Gemini AI integration

## Stack

|| Layer | Technology |
|-------|-------------|
| **Frontend** | React 18, Vite 7, TailwindCSS 4 |
| **Backend** | Express 5, TypeScript 5 |
| **Database** | PostgreSQL + Prisma |
| **AI** | Google Gemini |
| **Authentication** | JWT + Google OAuth |
| **Storage** | AWS S3 |
| **State Management** | Zustand + React Query |
---

## Top-Level Structure

```
# Top-Level Project Structure

```bash
InternHack/
├── client/        # Frontend application
├── server/        # Backend API server
├── .github/       # GitHub workflows & templates
├── README.md      # Main documentation
├── CONTRIBUTING.md
├── REPO_MAP.md
└── skills.md
```

---

## Server, `server/src/`

### Entry & Database

| File | Purpose |
|---|---|
| `src/index.ts` | Starts the Express server, routes, CORS, and cron jobs |
| `src/database/db.ts` | Prisma database client setup |
| `src/database/prisma/schema.prisma` | Database models and enums |
| `src/database/prisma.config.ts` | Prisma configuration and DB connection |
| `src/database/prisma/migrations/` | Database migration files |

**Run migrations from:** `server/src/database/`

---

### Seed Scripts, `src/database/`

| File | Purpose |
|---|---|
| `seed.ts` | Main seed runner |
| `seed-admin.ts` | Creates Super Admin account |
| `seed-jobs.ts` | Adds sample job listings |
| `seed-colleges.ts` | Imports AICTE college data |
| `seed-exams.ts` | Adds exam records (JEE, NEET, CAT, etc.) |
| `seed-pune-companies.ts` | Adds Pune tech company data |
| `seed-gsoc.ts` | Imports GSoC organization data |
| `seed-aptitude.ts` | Adds aptitude topics and questions |
| `seed-badges.ts` | Adds badge definitions |
| `seed-dsa.ts` | Adds DSA topics and problems |
| `seed-opensource.ts` | Adds open-source repository data |
| `seed-skill-tests.ts` | Adds skill test questions |
| `seed-hackathons.ts` | Adds hackathon records |
| `seed-internships.ts` | Adds internship opportunities |
| `seed-professors.ts` | Imports professor/mentor records |
| `seed-yc.ts` | Imports Y Combinator startup data |

---

### Middleware, `src/middleware/`

| File | Purpose |
|---|---|
| `auth.middleware.ts` | Handles authentication and optional user login checks |
| `role.middleware.ts` | Restricts access based on user roles |
| `error.middleware.ts` | Global error handling middleware |
| `upload.middleware.ts` | Handles file, resume, and image uploads |
| `usage-limit.middleware.ts` | Checks daily usage limits based on user plan |

---

### Config, `src/config/`

| File | Purpose |
|---|---|
| `usage-limits.ts` | Defines daily usage limits for FREE and PREMIUM users |


### Modules, `src/module/<name>/`

Each module: `<name>.routes.ts` → `<name>.controller.ts` → `<name>.service.ts`

| Module | Route Prefix | Key Responsibility |
|---|---|---|
| `auth` | `/api/auth` | User registration, login, Google OAuth, email verification, password reset, and profile management |
| `job` | `/api/jobs` | Job creation, updates, publishing, and management |
| `recruiter` | `/api/recruiter` | Hiring rounds, candidate review, evaluations, and recruiter analytics |
| `student` | `/api/student` | Job applications, application tracking, and interview responses |
| `ats` | `/api/ats` | AI resume scoring, cover letter generation, resume optimization, and AI resume tools |
| `latex` | `/api/latex` | Resume PDF generation using LaTeX |
| `company` | `/api/companies` | Company profiles, reviews, contacts, and contributions |
| `scraper` | `/api/scraped-jobs` | External job scraping and job aggregation |
| `signals` | `/api/signals` | Hiring signals, funding updates, and recruitment trends from external platforms |

---

> **Note:** There is no `college` module. `seed-colleges.ts` loads AICTE data, but no CRUD module, routes, or client pages exist. College is only referenced as a string field on student profiles.
| `admin` | `/api/admin` | Platform management including users, jobs, companies, colleges, blogs, badges, and learning content |
| `upload` | `/api/upload` | File uploads using AWS S3 with local storage fallback |
| `newsletter` | `/api/newsletter` | Newsletter subscription and email management |
| `badge` | `/api/badges` | Badge creation, award system, and earned badges tracking |
| `skill-test` | `/api/skill-tests` | Skill assessments, test submissions, and verification |
| `payment` | `/api/payments` | Payment processing, order creation, and subscription updates |
| `yc` | `/api/yc` | Y Combinator startup directory and founder data scraping |
| `blog` | `/api/blog` | Blog management with public access and admin controls |
| `gsoc` | `/api/gsoc` | GSoC organization directory with filtering support |
| `opensource` | `/api/opensource` | Open-source repository listings and contribution workflows |
| `aptitude` | `/api/aptitude` | Aptitude quizzes, topics, company-based questions, and progress tracking |
| `dsa` | `/api/dsa` | DSA problem tracking, notes, bookmarks, and topic management |
| `hackathon` | `/api/hackathons` | Public hackathon listings and records |
| `internship` | `/api/internships` | Internship opportunities from government and public-sector sources |
| `campus-drive` | `/api/campus-drives` | Campus placement drive management for recruiters and students |
| `sql` | `/api/sql` | SQL practice progress tracking |
| `professor` | `/api/professors` | Professor and mentor directory |
| `email-campaign` | `/api/email-campaigns` | Email outreach campaigns with templates and tracking support |

---campaigns` | Email outreach campaigns to IIT professors with templates & tracking |

### ATS Sub-Module Detail, `src/module/ats/`

| File | Purpose |
|---|---|
| `ats.routes.ts` | All ATS routes (score, history, cover letter, latex-chat, optimize-jd, resume-gen) |
| `ats.service.ts` | Gemini ATS scoring logic |
| `ats.controller.ts` | ATS score endpoints |
| `ats.validation.ts` | Zod schemas for ATS inputs |
| `cover-letter.service.ts` | AI cover letter generation |
| `cover-letter.controller.ts` | Cover letter endpoint |
| `resume-gen.service.ts` | AI resume generation from profile data |
| `resume-gen.controller.ts` | Resume generation endpoint |
| `latex-chat.service.ts` | Gemini AI chat for LaTeX editing + JD optimization (XML tag response format) |
| `latex-chat.controller.ts` | `/latex-chat` and `/latex-optimize-jd` endpoints (premium-gated) |
| `latex-chat.validation.ts` | Zod schemas: `latexChatSchema`, `latexJDOptimizeSchema` |

### LaTeX Module, `src/module/latex/`

| File | Purpose |
|---|---|
| `latex.routes.ts` | `POST /compile` (student-only) |
| `latex.service.ts` | Compiles LaTeX → PDF; local `pdflatex` → online API fallback; supports supporting files (.cls, .sty) |
| `latex.controller.ts` | Compile endpoint controller |
| `latex.validation.ts` | Zod schema for compile input (source + supporting files) |

### Utilities, `src/utils/`

| File | Exports |
|---|---|
| `jwt.utils.ts` | `generateToken()`, `verifyToken()` |
| `password.utils.ts` | `hashPassword()`, `comparePassword()` |
| `s3.utils.ts` | `uploadToS3()`, `deleteFromS3()`, `getS3KeyFromUrl()`, `getBufferFromS3()` |
| `cookie.utils.ts` | `setTokenCookie()`, `clearTokenCookie()`, httpOnly JWT cookies |
| `file-validation.utils.ts` | `validateFileContent()`, checks magic bytes against MIME types |
| `email.utils.ts` | `sendEmail()`, transactional email via Resend SDK |
| `email-templates.ts` | `welcomeEmailHtml(name)`, `repoRequestSubmittedHtml()`, `repoRequestApprovedHtml()`, HTML email templates |

---

## Client, `client/src/`

### Core Files

| File | Purpose |
|---|---|
| `main.tsx` | App root, GoogleOAuthProvider, React Query, HelmetProvider |
| `App.tsx` | React Router routes + ProtectedRoute wrapping |
| `lib/axios.ts` | Axios instance, auto injects JWT, handles 401 logout |
| `lib/auth.store.ts` | Zustand auth store, persists to localStorage |
| `lib/theme.store.ts` | Zustand dark/light theme store |
| `lib/layout.store.ts` | Zustand immersive mode toggle (hides sidebar in lessons) |
| `lib/query-keys.ts` | React Query key factories by domain |
| `lib/types.ts` | TypeScript types mirroring backend models |

### Hooks, `src/hooks/`

| File | Purpose |
|---|---|
| `useFaceDetection.ts` | MediaPipe face detection via webcam; detects no-face / multiple-faces |
| `useProctoring.ts` | Full proctoring system, tab switches, focus, fullscreen, DevTools, face violations |

### Components, `src/components/`

| Component | Use |
|---|---|
| `ui/button.tsx` | Reusable Button (CVA variants: primary, secondary, mono, ghost, danger; modes: button, icon, link; `asChild` support) |
| `ui/textarea.tsx` | Textarea component |
| `Navbar.tsx`, `Footer.tsx` | Shared layout |
| `StudentSidebar.tsx` | Collapsible sidebar with `useStudentSidebar()` hook |
| `ProtectedRoute.tsx` | Route guard by role |
| `SEO.tsx` | Helmet-based SEO tags |
| `ErrorBoundary.tsx` | React error boundary |
| `LoadingScreen.tsx` | Full-page loading with motivational quotes |
| `ThemeProvider.tsx` | Dark/light theme initializer |
| `ProctoringCamera.tsx` | Webcam feed + face count display |
| `ImageCropModal.tsx` | Profile picture crop modal |
| `LoginGate.tsx` | Modal overlay prompting login |
| `DynamicFieldBuilder.tsx` | Build custom form field definitions (recruiter) |
| `DynamicFieldRenderer.tsx` | Render custom fields for user input (student) |
| `CollegeDiscoverySection.tsx` | Landing page college search |
| Landing page sections | `HeroSection`, `FeaturesSection`, `StatsSection`, `CTASection`, `HowItWorksSection`, `PricingSection`, `RecentJobs`, `GrantsSection`, `AIInterview`, `TestimonialsSection` |

### Page Modules, `src/module/`

#### Auth, `src/module/auth/`
| File | Purpose |
|---|---|
| `LoginPage.tsx` | Email/password + Google OAuth |
| `RegisterPage.tsx` | Registration (role toggle, company email enforced for recruiters) |
| `VerifyEmailPage.tsx` | Email verification with OTP/token |
| `ForgotPasswordPage.tsx` | Password reset request |

#### Student, `src/module/student/`

**ATS Tools, `ats/`**
| File | Purpose |
|---|---|
| `AtsLandingPage.tsx` | ATS hub with tool navigation |
| `AtsToolsNav.tsx` | Grid nav linking ATS tools |
| `AtsScorePage.tsx` | Upload resume, score it |
| `ResumeBuilderPage.tsx` | Template-based resume builder |
| `ResumeGeneratorPage.tsx` | AI-generated resume from profile |
| `CoverLetterPage.tsx` | AI cover letter generator |
| `LatexResumeEditor.tsx` | CodeMirror LaTeX editor + PDF preview + AI chat + supporting files + undo/redo |
| `LatexChatPanel.tsx` | Floating AI chat panel, Gemini chat, JD optimization, markdown rendering, premium gate |
| `useLatexAutoSave.ts` | Hook: debounced localStorage autosave for LaTeX code + supporting files |
| `PublicAtsPage.tsx` | Public-facing ATS wrapper |
| `resume-builder/templates/` | 6 templates: Classic, Compact, Creative, Minimal, Modern, Professional |
| `latex-templates.data.ts` | 14 LaTeX resume templates (Professional, Academic, Minimal, Two-Column, Deedy, Executive, Software Engineer, Modern Clean, Jake's, Sidebar, Classic Serif, Compact Tech, ATS Optimized, Bold Header) |

**Learning Hub, `learn/`**
| File | Purpose |
|---|---|
| `LearnHubPage.tsx` | Landing page listing all learning tracks |
| `LearnLayout.tsx` | Dual-mode layout: student sidebar or public navbar |

**Language Modules** (each has `LessonsPage`, `SectionPage`, `LessonDetailPage` + `data/lessons/*.json`)
- `javascript/`, JS lessons + `JsEditor`, `JsConsoleOutput`, `js-engine.ts`
- `html/`, HTML lessons + `HtmlEditor`
- `css/`, CSS lessons + `CssEditor`
- `typescript/`, TS lessons + `TsEditor`, `ts-engine.ts`
- `react/`, React lessons + `ReactEditor`, `react-engine.ts`
- `python/`, Python lessons + `PythonEditor`, `PythonConsoleOutput`, `python-engine.ts`
- `nodejs/`, Node.js lessons + `NodeEditor`
- `django/`, Django lessons (data only)
- `flask/`, Flask lessons (data only)
- `fastapi/`, FastAPI lessons (data only)

**Interview Preparation, `interview-prep/`**
| File | Purpose |
|---|---|
| `InterviewLessonsPage.tsx` | 10 sections overview with progress tracking |
| `InterviewSectionPage.tsx` | Question list per section with type/difficulty badges |
| `InterviewQuestionPage.tsx` | Full question detail, answer, code examples, notes, tips |
| `data/types.ts` | `InterviewQuestion`, `InterviewSection`, `InterviewProgress` types |
| `data/sections.ts` | 10 sections: JS, React, Node, TS, Python, SQL, System Design, Behavioral, HTML/CSS, Git/DevOps |
| `data/lessons/*.json` | 30 questions per section (300 total) with code examples, follow-ups, interview tips |

**SQL Playground, `sql/`**
| File | Purpose |
|---|---|
| `SqlPracticePage.tsx` | SQL practice with exercises |
| `SqlPlaygroundPage.tsx` | Free SQL sandbox |
| `SqlExercisePage.tsx` | Individual exercise with editor + results |
| `components/SqlEditor.tsx` | Monaco-based SQL editor |
| `lib/sql-engine.ts` | In-browser SQL execution |

**DSA, `dsa/`**
| File | Purpose |
|---|---|
| `DsaTopicsPage.tsx` | Browse DSA topics with solve progress |
| `DsaTopicDetailPage.tsx` | Topic problems, toggle solved, notes, bookmark |
| `DsaCompaniesPage.tsx` | Filter by company |
| `DsaPatternsPage.tsx` | Problems by algorithm pattern |
| `DsaBookmarksPage.tsx` | Bookmarked problems |

**Aptitude, `aptitude/`**
| File | Purpose |
|---|---|
| `AptitudeCategoriesPage.tsx` | Browse aptitude categories |
| `AptitudeTopicPage.tsx` | Quiz page per topic |
| `AptitudeCompaniesPage.tsx` | Company-specific question sets |

**Skill Verification, `skill-verification/`**
| File | Purpose |
|---|---|
| `SkillVerificationPage.tsx` | Browse skill tests with verified badge status |
| `SkillTestPage.tsx` | Proctored test UI, fullscreen, timed, proctor log |

**Mock Interview, `mock-interview/`**
| File | Purpose |
|---|---|
| `MockInterviewPage.tsx` | AI interview or expert Calendly booking |

**Open Source, `opensource/`**
| File | Purpose |
|---|---|

| `OpenSourceLandingPage.tsx` | Open source hub |
| `RepoDiscoveryPage.tsx` | Browse repos with filters + "Suggest a Repository" modal |
| `GSoCReposPage.tsx` | Browse GSoC orgs from DB |
| `FirstPRRoadmapPage.tsx` | First PR guide overview |
| `FirstPRSectionPage.tsx` | Step-by-step first PR section |
| `GSoCProposalPage.tsx` | GSoC proposal guide overview |
| `GSoCProposalStepPage.tsx` | GSoC proposal step detail |
| `ProgramTrackerPage.tsx` | Track open source programs (GSoC, LFX, etc.) |
| `OpenSourceAnalyticsPage.tsx` | Contribution analytics |
| `data/` | Static guide JSON content |

**Grants, `grants/`**
| File | Purpose |
|---|---|
| `GrantsPage.tsx` | Grants & opportunities listing |
| `GrantTrackerPage.tsx` | Personal grant tracker (localStorage) |
| `HackathonCalendarPage.tsx` | Hackathon calendar view |
| `ProjectIdeasPage.tsx` | Project ideas (blockchain/web3) |

**Other Student Pages**
| File | Purpose |
|---|---|
| `jobs/JobBrowsePage.tsx` | Browse/search jobs |
| `jobs/GovInternshipsPage.tsx` | Government internship listings |
| `campus/CampusDrivesPage.tsx` | Browse campus drives |
| `campus/CampusDriveDetailPage.tsx` | Drive details + register |
| `checkout/CheckoutPage.tsx` | Subscription upgrade via Razorpay |
| `profile/StudentProfilePage.tsx` | Edit profile |
| `profile/PublicProfilePage.tsx` | Public profile with skills + verified badges |
| `profile/GitHubImportModal.tsx` | Import profile data from GitHub |
| `badges/BadgesSection.tsx` | Earned badges display |
| `companies/EmailCampaignTab.tsx` | Email outreach campaigns to HR contacts |

#### Recruiter, `src/module/recruiter/`
| File | Purpose |
|---|---|
| `RecruiterDashboard.tsx` | Metrics overview |
| `RecruiterJobsList.tsx` | Manage posted jobs |
| `RecruiterLandingPage.tsx` | Public recruiter marketing page |
| `jobs/CreateJobPage.tsx` | Create job + custom fields |
| `jobs/EditJobPage.tsx` | Edit job |
| `applications/ApplicationsList.tsx` | View applicants |
| `applications/ApplicationDetail.tsx` | Applicant details |
| `applications/EvaluationForm.tsx` | Evaluate round submission |
| `rounds/RoundsManager.tsx` | Configure interview rounds |
| `analytics/JobAnalyticsPage.tsx` | Job performance analytics |
| `talent/TalentSearchPage.tsx` | Search student profiles |
| `talent/TalentPoolsPage.tsx` | Manage talent pools |
| `drives/DrivesListPage.tsx` | Campus drive listing |
| `drives/CreateDrivePage.tsx` | Create campus drive |
| `drives/DriveDetailPage.tsx` | Drive detail + registrations |

#### Admin, `src/module/admin/`
| File | Purpose |
|---|---|
| `AdminLoginPage.tsx` | Admin auth |
| `AdminDashboard.tsx` | Platform stats |
| `users/UsersListPage.tsx` | User management |
| `users/UserDetailPage.tsx` | User detail with ATS history |
| `jobs/AdminJobsListPage.tsx` | Job moderation |
| `companies/AdminCompaniesPage.tsx` | Company management |
| `reviews/AdminReviewsPage.tsx` | Company review approval |
| `contributions/AdminContributionsPage.tsx` | Contribution moderation |
| `activity/ActivityLogsPage.tsx` | Audit logs |
| `AdminSubscribersPage.tsx` | Newsletter subscribers |
| `AdminBadgesPage.tsx` | Badge CRUD |
| `blog/AdminBlogPage.tsx` | Blog list + publish/feature |
| `blog/AdminBlogEditor.tsx` | Rich blog editor |
| `dsa/AdminDsaPage.tsx` | DSA topics/problems CRUD |
| `aptitude/AdminAptitudePage.tsx` | Aptitude CRUD |
| `skill-tests/AdminSkillTestsPage.tsx` | Skill test CRUD |
| `hackathons/AdminHackathonsPage.tsx` | Hackathon CRUD |
| `repo-requests/AdminRepoRequestsPage.tsx` | Review/approve/reject student repo suggestions |

#### Blog, `src/module/blog/`
| File | Purpose |
|---|---|
| `BlogListPage.tsx` | Public blog listing with featured posts |
| `BlogPostPage.tsx` | Single blog post reader |

---

## Client Routes Summary

### Public Routes
| Path | Component |
|---|---|
| `/` | LandingPage |
| `/login`, `/register`, `/verify-email`, `/forgot-password` | Auth pages |
| `/jobs`, `/jobs/:id` | Job browse + detail |
| `/internships` | GovInternshipsPage |
| `/external-jobs` | ScrapedJobsPage |
| `/companies`, `/companies/:slug` | Company directory |
| `/yc/:slug` | YC company detail |
| `/ats-score` | PublicAtsPage |
| `/grants` | GrantsPage |
| `/opensource` | PublicOpenSourcePage |
| `/blog`, `/blog/:slug` | Blog |
| `/for-recruiters` | RecruiterLandingPage |
| `/learn/**` | Learning Hub (JS, HTML, CSS, TS, React, Python, Node, Django, Flask, FastAPI, SQL, DSA, Aptitude, Interview Prep) |
| `/test/:testId` | Proctored skill test (student-only) |

### Student Routes (`/student/...`)
| Path | Component |
|---|---|
| `applications`, `applications/:id` | My applications + progress |
| `jobs`, `jobs/:id`, `jobs/:id/apply` | Job browse + apply |
| `internships` | Gov internships |
| `companies`, `companies/:slug`, `companies/add` | Company directory + contribute |
| `ats`, `ats/score` | ATS tools |
| `ats/resume-generator`, `ats/templates`, `ats/cover-letter`, `ats/latex-editor` | Resume tools |
| `skill-verification` | Skill tests |
| `mock-interview` | Mock interview |
| `grants`, `grants/tracker`, `grants/hackathons` | Grants + hackathons |
| `opensource`, `opensource/gsoc`, `opensource/programs` | Open source tools |
| `opensource/first-pr`, `opensource/gsoc-proposal` | Guides (with sub-sections) |
| `opensource/analytics` | Contribution analytics |
| `campus-drives`, `campus-drives/:id` | Campus drives |
| `checkout` | Subscription upgrade |
| `profile` | Edit profile |

### Recruiter Routes (`/recruiters/...`)
| Path | Component |
|---|---|
| _(index)_ | RecruiterDashboard |
| `jobs`, `jobs/create`, `jobs/:id/edit` | Job CRUD |
| `jobs/:id/applications`, `jobs/:id/analytics` | Applications + analytics |
| `talent-search`, `talent-pools`, `talent-pools/:id` | Talent management |
| `campus-drives`, `campus-drives/new`, `campus-drives/:id` | Campus drives |

### Admin Routes (`/admin/...`)
| Path | Component |
|---|---|
| _(index)_ | AdminDashboard |
| `users`, `users/:id` | User management |
| `jobs` | Job moderation |
| `companies`, `reviews`, `contributions` | Company management |
| `activity` | Audit logs |
| `subscribers` | Newsletter |
| `dsa`, `aptitude`, `skill-tests` | Learning content CRUD |
| `hackathons`, `badges` | Event/badge CRUD |
| `blog`, `blog/editor`, `blog/editor/:id` | Blog management |
| `repo-requests` | Repo request review/approval |

---

## Auth Flow

```
### Authentication Flow

```text
JWT Token → Authorization Header (Bearer Token)
        ↓
authMiddleware() → Protected Routes
optionalAuthMiddleware() → Public Routes
        ↓
requireRole(STUDENT | RECRUITER | ADMIN)
```

- JWT tokens are stored in localStorage using the Zustand auth store.
- Axios automatically adds the token to API requests.
- Invalid or expired tokens return 401 Unauthorized and trigger automatic logout.

**Recruiter email enforcement:** 
Recruiters must register using a valid company email address.

Personal email providers such as:

- Gmail
- Yahoo
- Outlook
- Hotmail

are blocked during recruiter registration.

Validation is implemented in:

auth.validation.ts
auth.service.ts
RegisterPage.tsx

---

## Upload Flow

```
File buffer (multer memory storage)
         ↓
  uploadWithFallback()
         ↓
  Try S3 → if fails → saveLocally() to server/uploads/
         ↓
  Returns URL (S3 URL or /uploads/... path)
```

---

## Environment Variables

### Server (`server/.env`)
```
DATABASE_URL          # PostgreSQL connection string
JWT_SECRET            # JWT signing key
GOOGLE_CLIENT_ID      # Google OAuth
GEMINI_API_KEY        # Google Gemini for AI features
AWS_ACCESS_KEY_ID     # S3 uploads
AWS_SECRET_ACCESS_KEY
AWS_REGION
AWS_BUCKET_NAME
RAZORPAY_KEY_ID       # Razorpay payments
RAZORPAY_KEY_SECRET
RESEND_API_KEY        # Transactional emails
EMAIL_FROM            # Sender address
ALLOWED_ORIGINS       # CORS origins (comma-separated)
PORT                  # default 3000
SCRAPER_CRON          # default: 0 */6 * * *
SIGNALS_CRON          # default: 30 */6 * * * (funding signals ingest)
NODE_ENV
```

### Client (`client/.env`)
```
VITE_GOOGLE_CLIENT_ID
VITE_API_URL          # default: http://localhost:3000/api
```

---

## Common Edit Scenarios

| Task | Files to touch |
|---|---|
| Add/change API endpoint | `server/src/module/<name>/<name>.routes.ts` + `.controller.ts` + `.service.ts` |
| Add a DB column | `schema.prisma` → run migration from `server/src/database/` |
| Change validation rules | `server/src/module/<name>/<name>.validation.ts` |
| Change auth logic | `server/src/middleware/auth.middleware.ts` + `server/src/utils/jwt.utils.ts` |
| Fix upload logic | `server/src/module/upload/upload.controller.ts` + `server/src/utils/s3.utils.ts` |
| Change a client page | `client/src/module/<module>/<PageName>.tsx` |
| Add a new client route | `client/src/App.tsx` |
| Change global API config | `client/src/lib/axios.ts` |
| Change auth state | `client/src/lib/auth.store.ts` |
| Add React Query cache key | `client/src/lib/query-keys.ts` |
| Change shared types | `client/src/lib/types.ts` |
| Seed data | `server/src/database/seed-*.ts` |
| Add usage limits | `server/src/config/usage-limits.ts` + `usage-limit.middleware.ts` |
| Add premium-gated feature | Check subscription in controller (see `latex-chat.controller.ts` pattern) |