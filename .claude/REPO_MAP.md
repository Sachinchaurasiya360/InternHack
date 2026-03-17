# InternHack — Repo Map (Quick Reference)

> Read this before any editing task. It tells you where things live so you don't need to explore the whole repo.

---

## Stack

| Layer | Tech |
|---|---|
| Frontend | React 18, Vite 7, TailwindCSS 4, React Router 7, Framer Motion |
| Backend | Express 5, TypeScript 5, Prisma 7, Node Cron |
| Database | PostgreSQL (via Prisma + `@prisma/adapter-pg`) |
| Auth | JWT + Google OAuth, email verification (Resend) |
| AI | Google Gemini (`gemini-2.5-flash-lite`) — ATS scoring, cover letters, LaTeX chat, resume generation |
| Storage | AWS S3 (with local fallback to `server/uploads/`) |
| Payments | Razorpay (subscription plans) |
| State | Zustand (auth, theme, layout) + React Query (server state) |
| Proctoring | MediaPipe face detection + browser event monitoring |

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

**Run migrations from:** `server/src/database/` (not server root) — uses `prisma.config.ts`

### Seed Scripts — `src/database/`

| File | Purpose |
|---|---|
| `seed.ts` | General seed runner |
| `seed-admin.ts` | Seeds Super Admin account |
| `seed-jobs.ts` | Seeds 20 published job listings |
| `seed-colleges.ts` | Fetches AICTE college data from GitHub (state-wise JSON) |
| `seed-exams.ts` | Seeds entrance exams (JEE, NEET, CAT, etc.) |
| `seed-pune-companies.ts` | Seeds 49 Pune tech companies |
| `seed-gsoc.ts` | Fetches 520+ GSoC organizations from API |
| `seed-aptitude.ts` | Seeds aptitude categories, topics, and questions |
| `seed-badges.ts` | Seeds badge definitions |
| `seed-dsa.ts` | Seeds DSA topics and problems |
| `seed-opensource.ts` | Seeds open source repo records |
| `seed-skill-tests.ts` | Seeds skill test definitions and questions |
| `seed-hackathons.ts` | Seeds hackathon records |
| `seed-internships.ts` | Seeds government/public-sector internships |
| `seed-professors.ts` | Seeds professor/mentor records (reads XLSX) |
| `seed-yc.ts` | Fetches YC companies from yc-oss API, seeds via raw pg |
| `seed-hr-contacts.ts` | Parses 1800+ IT HR contacts from PDF, seeds `itHrContact`, creates companies & contacts |

### Middleware — `src/middleware/`

| File | Exports |
|---|---|
| `auth.middleware.ts` | `authMiddleware()`, `optionalAuthMiddleware()` |
| `role.middleware.ts` | `requireRole(role)` |
| `error.middleware.ts` | Global error handler |
| `upload.middleware.ts` | `uploadSingle()`, `uploadResume()`, `uploadImage()` |
| `usage-limit.middleware.ts` | `usageLimit(action)` — checks daily limits by plan tier, 429 on exceed |

### Config — `src/config/`

| File | Purpose |
|---|---|
| `usage-limits.ts` | `DAILY_LIMITS` per action per tier (FREE/PREMIUM), `getPlanTier()` |

### Modules — `src/module/<name>/`

Each module: `<name>.routes.ts` → `<name>.controller.ts` → `<name>.service.ts`

| Module | Route Prefix | Key Responsibility |
|---|---|---|
| `auth` | `/api/auth` | Register, login, Google OAuth, email verify, password reset, profile CRUD |
| `job` | `/api/jobs` | Job CRUD, status changes (public read, recruiter write) |
| `recruiter` | `/api/recruiter` | Rounds mgmt, application review, evaluation, analytics |
| `student` | `/api/student` | Apply, track applications, submit round responses |
| `ats` | `/api/ats` | AI resume scoring, score history, cover letters, AI LaTeX chat, JD optimization, resume generation |
| `latex` | `/api/latex` | Compile LaTeX to PDF (local pdflatex → online API fallback), supporting files |
| `company` | `/api/companies` | Company directory, reviews, contacts, contributions |
| `college` | `/api/colleges` | College discovery, search/filter, courses, placements, reviews, cutoffs |
| `scraper` | `/api/scraped-jobs` | External job aggregation, cron-based scraping |
| `admin` | `/api/admin` | Full platform management — users, jobs, companies, colleges, repos, DSA, aptitude, skill-tests, hackathons, blog, badges |
| `upload` | `/api/upload` | S3 uploads with local fallback |
| `newsletter` | `/api/newsletter` | Email subscription management |
| `badge` | `/api/badges` | Badge definitions, award logic, student earned badges |
| `skill-test` | `/api/skill-tests` | Proctored skill tests — browse, take, submit, verify |
| `payment` | `/api/payments` | Razorpay order creation & payment verification, subscription updates |
| `yc` | `/api/yc` | YC company directory with on-demand Cheerio scraping of founders |
| `blog` | `/api/blog` | Blog posts — public read, admin CRUD + publish/feature |
| `gsoc` | `/api/gsoc` | GSoC organization directory with filtering |
| `opensource` | `/api/opensource` | Open source repo directory with filtering |
| `aptitude` | `/api/aptitude` | Aptitude quiz system — categories, topics, companies, progress |
| `dsa` | `/api/dsa` | DSA problem tracker — topics, bookmarks, notes, patterns, companies |
| `hackathon` | `/api/hackathons` | Hackathon listings (public read) |
| `internship` | `/api/internships` | Government/public-sector internship listings |
| `campus-drive` | `/api/campus-drives` | Campus placement drive management (recruiter CRUD, student browse) |
| `sql` | `/api/sql` | SQL exercise progress persistence |
| `professor` | `/api/professors` | Professor/mentor directory |
| `hr-contact` | `/api/hr-contacts` | IT HR contact directory (1800+ contacts from PDF seed), stats, search |
| `email-campaign` | `/api/email-campaigns` | Email outreach campaigns to HR contacts with templates & tracking |

### ATS Sub-Module Detail — `src/module/ats/`

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

### LaTeX Module — `src/module/latex/`

| File | Purpose |
|---|---|
| `latex.routes.ts` | `POST /compile` (student-only) |
| `latex.service.ts` | Compiles LaTeX → PDF; local `pdflatex` → online API fallback; supports supporting files (.cls, .sty) |
| `latex.controller.ts` | Compile endpoint controller |
| `latex.validation.ts` | Zod schema for compile input (source + supporting files) |

### Utilities — `src/utils/`

| File | Exports |
|---|---|
| `jwt.utils.ts` | `generateToken()`, `verifyToken()` |
| `password.utils.ts` | `hashPassword()`, `comparePassword()` |
| `s3.utils.ts` | `uploadToS3()`, `deleteFromS3()`, `getS3KeyFromUrl()`, `getBufferFromS3()` |
| `cookie.utils.ts` | `setTokenCookie()`, `clearTokenCookie()` — httpOnly JWT cookies |
| `file-validation.utils.ts` | `validateFileContent()` — checks magic bytes against MIME types |
| `email.utils.ts` | `sendEmail()` — transactional email via Resend SDK |
| `email-templates.ts` | `welcomeEmailHtml(name)` — HTML email templates |

---

## Client — `client/src/`

### Core Files

| File | Purpose |
|---|---|
| `main.tsx` | App root — GoogleOAuthProvider, React Query, HelmetProvider |
| `App.tsx` | React Router routes + ProtectedRoute wrapping |
| `lib/axios.ts` | Axios instance — auto injects JWT, handles 401 logout |
| `lib/auth.store.ts` | Zustand auth store — persists to localStorage |
| `lib/theme.store.ts` | Zustand dark/light theme store |
| `lib/layout.store.ts` | Zustand immersive mode toggle (hides sidebar in lessons) |
| `lib/query-keys.ts` | React Query key factories by domain |
| `lib/types.ts` | TypeScript types mirroring backend models |

### Hooks — `src/hooks/`

| File | Purpose |
|---|---|
| `useFaceDetection.ts` | MediaPipe face detection via webcam; detects no-face / multiple-faces |
| `useProctoring.ts` | Full proctoring system — tab switches, focus, fullscreen, DevTools, face violations |

### Components — `src/components/`

| Component | Use |
|---|---|
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

### Page Modules — `src/module/`

#### Auth — `src/module/auth/`
| File | Purpose |
|---|---|
| `LoginPage.tsx` | Email/password + Google OAuth |
| `RegisterPage.tsx` | Registration (role toggle, company email enforced for recruiters) |
| `VerifyEmailPage.tsx` | Email verification with OTP/token |
| `ForgotPasswordPage.tsx` | Password reset request |

#### Student — `src/module/student/`

**ATS Tools — `ats/`**
| File | Purpose |
|---|---|
| `AtsLandingPage.tsx` | ATS hub with tool navigation |
| `AtsToolsNav.tsx` | Grid nav linking 6 ATS tools |
| `AtsScorePage.tsx` | Upload resume, score it |
| `AtsHistoryPage.tsx` | Previous ATS scores |
| `AtsScoreDetailPage.tsx` | Detailed score analysis |
| `ResumeBuilderPage.tsx` | Template-based resume builder |
| `ResumeGeneratorPage.tsx` | AI-generated resume from profile |
| `CoverLetterPage.tsx` | AI cover letter generator |
| `LatexResumeEditor.tsx` | CodeMirror LaTeX editor + PDF preview + AI chat + supporting files + undo/redo |
| `LatexChatPanel.tsx` | Floating AI chat panel — Gemini chat, JD optimization, markdown rendering, premium gate |
| `useLatexAutoSave.ts` | Hook: debounced localStorage autosave for LaTeX code + supporting files |
| `PublicAtsPage.tsx` | Public-facing ATS wrapper |
| `resume-builder/templates/` | 6 templates: Classic, Compact, Creative, Minimal, Modern, Professional |
| `latex-templates.data.ts` | 14 LaTeX resume templates (Professional, Academic, Minimal, Two-Column, Deedy, Executive, Software Engineer, Modern Clean, Jake's, Sidebar, Classic Serif, Compact Tech, ATS Optimized, Bold Header) |

**Learning Hub — `learn/`**
| File | Purpose |
|---|---|
| `LearnHubPage.tsx` | Landing page listing all learning tracks |
| `LearnLayout.tsx` | Dual-mode layout: student sidebar or public navbar |

**Language Modules** (each has `LessonsPage`, `SectionPage`, `LessonDetailPage` + `data/lessons/*.json`)
- `javascript/` — JS lessons + `JsEditor`, `JsConsoleOutput`, `js-engine.ts`
- `html/` — HTML lessons + `HtmlEditor`
- `css/` — CSS lessons + `CssEditor`
- `typescript/` — TS lessons + `TsEditor`, `ts-engine.ts`
- `react/` — React lessons + `ReactEditor`, `react-engine.ts`
- `python/` — Python lessons + `PythonEditor`, `PythonConsoleOutput`, `python-engine.ts`
- `nodejs/` — Node.js lessons + `NodeEditor`
- `django/` — Django lessons (data only)
- `flask/` — Flask lessons (data only)
- `fastapi/` — FastAPI lessons (data only)

**Interview Preparation — `interview-prep/`**
| File | Purpose |
|---|---|
| `InterviewLessonsPage.tsx` | 10 sections overview with progress tracking |
| `InterviewSectionPage.tsx` | Question list per section with type/difficulty badges |
| `InterviewQuestionPage.tsx` | Full question detail — answer, code examples, notes, tips |
| `data/types.ts` | `InterviewQuestion`, `InterviewSection`, `InterviewProgress` types |
| `data/sections.ts` | 10 sections: JS, React, Node, TS, Python, SQL, System Design, Behavioral, HTML/CSS, Git/DevOps |
| `data/lessons/*.json` | 30 questions per section (300 total) with code examples, follow-ups, interview tips |

**SQL Playground — `sql/`**
| File | Purpose |
|---|---|
| `SqlPracticePage.tsx` | SQL practice with exercises |
| `SqlPlaygroundPage.tsx` | Free SQL sandbox |
| `SqlExercisePage.tsx` | Individual exercise with editor + results |
| `components/SqlEditor.tsx` | Monaco-based SQL editor |
| `lib/sql-engine.ts` | In-browser SQL execution |

**DSA — `dsa/`**
| File | Purpose |
|---|---|
| `DsaTopicsPage.tsx` | Browse DSA topics with solve progress |
| `DsaTopicDetailPage.tsx` | Topic problems — toggle solved, notes, bookmark |
| `DsaCompaniesPage.tsx` | Filter by company |
| `DsaPatternsPage.tsx` | Problems by algorithm pattern |
| `DsaBookmarksPage.tsx` | Bookmarked problems |

**Aptitude — `aptitude/`**
| File | Purpose |
|---|---|
| `AptitudeCategoriesPage.tsx` | Browse aptitude categories |
| `AptitudeTopicPage.tsx` | Quiz page per topic |
| `AptitudeCompaniesPage.tsx` | Company-specific question sets |

**Skill Verification — `skill-verification/`**
| File | Purpose |
|---|---|
| `SkillVerificationPage.tsx` | Browse skill tests with verified badge status |
| `SkillTestPage.tsx` | Proctored test UI — fullscreen, timed, proctor log |

**Mock Interview — `mock-interview/`**
| File | Purpose |
|---|---|
| `MockInterviewPage.tsx` | AI interview or expert Calendly booking |

**Open Source — `opensource/`**
| File | Purpose |
|---|---|
| `OpenSourceLandingPage.tsx` | Open source hub |
| `RepoDiscoveryPage.tsx` | Browse repos with filters |
| `GSoCReposPage.tsx` | Browse GSoC orgs from DB |
| `FirstPRRoadmapPage.tsx` | First PR guide overview |
| `FirstPRSectionPage.tsx` | Step-by-step first PR section |
| `GSoCProposalPage.tsx` | GSoC proposal guide overview |
| `GSoCProposalStepPage.tsx` | GSoC proposal step detail |
| `ProgramTrackerPage.tsx` | Track open source programs (GSoC, LFX, etc.) |
| `OpenSourceAnalyticsPage.tsx` | Contribution analytics |
| `data/` | Static guide JSON content |

**Grants — `grants/`**
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

#### Recruiter — `src/module/recruiter/`
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

#### Admin — `src/module/admin/`
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

#### Blog — `src/module/blog/`
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
| `ats`, `ats/score`, `ats/history`, `ats/history/:scoreId` | ATS tools |
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

Token stored in localStorage via Zustand auth store. Axios auto-injects it. 401 triggers auto-logout.

**Recruiter email enforcement:** Recruiters must use company email (Gmail, Yahoo, Outlook etc. blocked). Validated in Zod schema (`auth.validation.ts`), Google OAuth flow (`auth.service.ts`), and client-side (`RegisterPage.tsx`). Blocklist: `PERSONAL_EMAIL_DOMAINS` exported from `auth.validation.ts`.

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