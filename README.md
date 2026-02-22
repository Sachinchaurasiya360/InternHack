# InternHack

**Prepare. Practice. Placed.** — A full-stack career platform connecting students with job opportunities, guided career roadmaps, AI-powered resume tools, and recruiter dashboards.

Live at [internhack.xyz](https://www.internhack.xyz)

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 19, Vite 7, TailwindCSS 4, Framer Motion |
| Backend | Express 5, TypeScript 5, Prisma 7 |
| Database | PostgreSQL |
| AI | Google Gemini API |
| Auth | JWT + Google OAuth (Identity Services) |

---

## Features

### For Students

- **Job Board** — Browse curated job listings posted by recruiters with search, filters, and one-click applications.
- **External Jobs** — Aggregated job listings scraped from top platforms, auto-refreshed every 6 hours via cron.
- **Career Roadmaps** — 8+ guided career paths (Full-Stack, Frontend, Backend, Data Science, DevOps, UI/UX, Mobile, Cybersecurity) with phases, skills, resources, and tools. Enroll and track progress with skill checkboxes.
- **ATS Resume Scoring** — Upload a resume and job description. Gemini AI scores the match, highlights keyword gaps, and provides actionable improvement suggestions.
- **Application Tracking** — Track every application status from applied through multi-round hiring to offer/rejection.
- **Company Explorer** — Browse companies on the platform with reviews, ratings, contacts, and open positions.
- **Google Sign-In** — One-click authentication via Google OAuth.

### For Recruiters

- **Recruiter Dashboard** — Overview of posted jobs, total applications, and hiring pipeline at a glance.
- **Job Management** — Create, edit, publish, close, and archive job listings with dynamic custom fields.
- **Multi-Round Hiring** — Configure custom interview rounds (Coding, DSA, HR, System Design, etc.) with per-round submissions and evaluations.
- **Application Review** — View applicants, filter by status, advance/reject candidates through rounds, and mark final hiring decisions.
- **Resume Screening** — Review uploaded resumes and ATS compatibility scores for each applicant.

### For Admins

- **Platform Dashboard** — Real-time stats: total students, recruiters, jobs, applications, hiring counts.
- **User Management** — View, activate/deactivate, and delete user accounts.
- **Job Moderation** — Approve, reject, or remove job listings.
- **Company Management** — Add, approve, edit, and delete companies. Manage reviews and user contributions.
- **Activity Logs** — Full audit trail of admin actions across the platform.

### Platform-Wide

- **Google OAuth** — Seamless sign-in/sign-up with Google across all roles.
- **Automated Job Scraping** — Cron-based scraper fetches external jobs on a configurable schedule (default: every 6 hours).
- **Responsive Design** — Mobile-first UI with glassmorphism navbar, animated sections, and dark-themed footer.
- **Newsletter Subscribe** — Email subscription form in the footer.

---

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database
- Google Cloud Console project (for OAuth + Gemini API)

### Environment Variables

**Server** (`server/.env`):

```
DATABASE_URL=postgresql://user:pass@host:5432/dbname
JWT_SECRET=your-jwt-secret
GOOGLE_CLIENT_ID=your-google-client-id
GEMINI_API_KEY=your-gemini-api-key
SCRAPER_CRON=0 */6 * * *
PORT=3000
```

**Client** (`client/.env`):

```
VITE_GOOGLE_CLIENT_ID=your-google-client-id
VITE_API_URL=http://localhost:3000/api
```

### Installation

```bash
# Install server dependencies
cd server && npm install

# Generate Prisma client & push schema
npx prisma generate
npx prisma db push

# Seed career roadmaps
npm run seed

# Start dev server
npm run dev
```

```bash
# Install client dependencies (in a separate terminal)
cd client && npm install

# Start dev client
npm run dev
```

### Production Build

```bash
# Server
cd server && npm run build && npm start

# Client
cd client && npm run build
```

---

## API Overview

| Prefix | Module | Auth |
|--------|--------|------|
| `/api/auth` | Login, Register, Google OAuth | Public |
| `/api/jobs` | Job browsing and applications | Public / Student |
| `/api/recruiter` | Recruiter job management | Recruiter |
| `/api/student` | Applications, ATS, career progress | Student |
| `/api/careers` | Career roadmaps, enrollment, skill tracking | Public / Student |
| `/api/companies` | Company browsing, reviews, contributions | Public / Student |
| `/api/scraped-jobs` | External aggregated jobs | Public |
| `/api/ats` | ATS resume scoring | Student |
| `/api/upload` | File uploads (resumes) | Authenticated |
| `/api/admin` | Platform management | Admin |
| `/api/stats` | Public platform stats | Public |


integrate the s3 bucket where student can upload their resume into the resume section

