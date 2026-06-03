# InternHack

**Prepare. Practice. Placed.**

## About InternHack
- AI-powered career and hiring platform
- Helps students prepare for placements and internships
- Provides resume scoring and job matching tools
- Offers mock interview practice and learning resources
- Supports job discovery and application tracking
- Enables recruiters to manage job postings and candidates
- Streamlines hiring workflows and interview processes
- Includes dedicated dashboards for students, recruiters, and admins
- Built to make hiring more accessible, efficient, and data-driven

Live at **[internhack.xyz](https://www.internhack.xyz)**

---

## AI Assistant Context Files

This repository includes AI assistant context files (`CLAUDE.md` and `.claude/`) for Claude Code users. These files provide project-specific context and code generation instructions for AI-assisted development and are **optional for contributors not using Claude Code**.

---

## Tech Stack

| Category | Technologies |
|----------|--------------|
| **Frontend** | React 18, Vite 7, TailwindCSS 4, React Router 7, Framer Motion, Zustand, React Query |
| **Backend** | Express 5, TypeScript 5, Prisma ORM |
| **Database** | PostgreSQL |
| **AI Integration** | Google Gemini (`gemini-2.5-flash`) |
| **Authentication** | JWT Authentication, Google OAuth |
| **Payments** | Dodo Payments |
| **Cloud Storage** | AWS S3 with Local Storage Fallback |
| **Email Services** | Resend |
| **Development Tools** | ESLint, Prettier, Nodemon, tsx |

---

## Features

### Features for Students

- **Job Board** — Browse recruiter-posted jobs with advanced search, filters, tags, and one-click applications.
- **External Job Listings** — Access curated opportunities aggregated from external platforms and updated regularly.
- **AI Job Agent** — AI-powered assistant that recommends jobs based on user profiles, skills, and interests.
- **ATS Resume Scorer** — Upload resumes and job descriptions to receive AI-generated compatibility scores and keyword gap analysis.
- **Cover Letter Generator** — Generate personalized cover letters tailored to specific job applications.
- **AI Resume Builder** — Create professional LaTeX-based resumes with AI-assisted content generation.
- **Mock Interviews** — Practice technical and behavioral interviews through AI-driven interview simulations.
- **Learning Hub** — Access 3,300+ DSA problems, SQL practice sets, aptitude questions, and 500+ lessons across multiple technologies.
- **Skill Assessments** — Participate in timed assessments with automated grading and verified skill badges.
- **Career Roadmaps** — Follow structured learning paths for Full-Stack, Frontend, Backend, Data Science, DevOps, and other domains.
- **Company Explorer** — Explore company reviews, ratings, salary insights, HR contacts, and active openings.
- **Application Tracker** — Monitor application progress from submission to interview rounds and final offers.
- **Open Source Guide** — Step-by-step guidance for understanding codebases and contributing to open-source projects.

### Features for Recruiters

- **Recruiter Dashboard** — Centralized overview of job postings, applications, and hiring pipelines.
- **Job Management** — Create and manage job postings with custom fields, interview workflows, and automated assessments.
- **Multi-Round Hiring Workflow** — Conduct coding, DSA, HR, and system design interview rounds with structured evaluations.
- **Application Review System** — Filter applicants, track candidate progress, and manage round-wise selection or rejection processes.
- **ATS Resume Analysis** — Access AI-generated ATS scores and resume evaluations for better candidate screening.
- **Talent Pool Management** — Save, organize, and manage promising candidates for future opportunities.
- **Campus Recruitment Drives** — Plan and manage campus hiring campaigns efficiently.

### Features for Admins

- **Admin Dashboard** — Monitor real-time platform statistics, user activity, and system performance.
- **User & Job Management** — Manage users, recruiters, job postings, companies, and platform reviews.
- **External Job Management** — Create, manage, and moderate curated external job listings.
- **AI Provider Management** — Configure and switch between multiple AI providers such as Gemini, Groq, and Claude.
- **Content Management System** — Manage DSA problems, aptitude questions, skill assessments, hackathons, blogs, and learning resources.
- **Activity & Error Logging** — Maintain detailed audit trails, activity logs, and system error monitoring.

---

## Getting Started

### Prerequisites

- **Node.js** 18+
- **PostgreSQL** database (local or hosted, [Neon](https://neon.tech), [Supabase](https://supabase.com), etc.)
- **Google Cloud Console** project (for OAuth client ID)
- **Gemini API Key** ([Get one free](https://aistudio.google.com/apikey))

### 1. Clone the repo

```bash
git clone https://github.com/Sachinchaurasiya360/InternHack.git
cd InternHack
```

### Docker Compose (alternative)

Requires [Docker Desktop](https://docs.docker.com/get-docker/) or Docker Engine plus Compose v2. You do **not** need a host-installed PostgreSQL or Node for this path. (**Redis is not used** by InternHack.) The API service image is defined in [`server/Dockerfile.dev`](server/Dockerfile.dev) for local dev only; production deploy continues to use [`server/dockerfile`](server/dockerfile).

From the repo root:

```bash
cp .env.example .env
# Set JWT_SECRET at minimum; add OAuth/AI keys as needed (see Environment Variables below).

docker compose up --build
```

Compose falls back to the same Postgres defaults as `.env.example` when variables are absent, but the API refuses to boot without **`JWT_SECRET`**, which your root `.env` must supply.

- Frontend **http://localhost:5173** — API **http://localhost:3000**
- Source trees are bind-mounted into the containers; `CHOKIDAR_USEPOLLING` helps file watching on Docker Desktop for macOS.
- On startup, the API container runs `prisma migrate deploy`, then `npm run dev`.
- The frontend service runs **Vite in dev mode** (`npm run dev`) for hot reload; production client builds (`cd client && npm run build`) are still separate from this Compose file.

Optional sample data:

```bash
docker compose exec server npm run seed
```

Uncomment the `postgres` `ports` section in `docker-compose.yml` if you need to reach Postgres from tools on your host defaulting to localhost.

To install Node and Postgres on your machine instead, follow the numbered steps below.

### 2. Set up environment variables

```bash
# Without Docker — per-package env files
cp server/.env.example server/.env
cp client/.env.example client/.env

# Docker Compose — single consolidated file at the repo root
cp .env.example .env
```

Fill values as described below (Compose uses `.env`; per-package copies use `server/.env` and `client/.env`).

### 3. Install dependencies

```bash
# Server
cd server && npm install

# Client (separate terminal)
cd client && npm install
```

### 4. Set up the database

```bash
# Go to server directory
cd server

# Generate Prisma client using prisma.config.ts
npx prisma generate --config src/database/prisma.config.ts

# Push schema to database
npx prisma db push --config src/database/prisma.config.ts
```


### 5. Seed initial data (optional)

```bash
# From server/
cd server

# Seed admin account (set ADMIN_EMAIL and ADMIN_PASSWORD in .env first)
npm run seed:admin

# Seed all sample data (DSA, aptitude, companies, etc.)
npm run seed
```

### 6. Start development servers

```bash
# Terminal 1, Server (runs on port 3000)
cd server && npm run dev

# Terminal 2, Client (runs on port 5173)
cd client && npm run dev
```

Open **http://localhost:5173** and you're in!

---

## Environment Variables

For Docker Compose, use the **repo root [`.env.example`](.env.example)** as the master template (`cp .env.example .env`).

### Server (`server/.env` or root `.env` with Compose)

| Variable | Required | Description |
|----------|----------|-------------|
| `DATABASE_URL` | Yes | PostgreSQL connection string |
| `JWT_SECRET` | Yes | Random secret for JWT signing (64+ chars recommended) |
| `GOOGLE_CLIENT_ID` | Yes | Google OAuth client ID |
| `GEMINI_API_KEY` | Yes | Google Gemini API key (free tier available) |
| `ALLOWED_ORIGINS` | Yes | Comma-separated allowed CORS origins |
| `VITE_API_URL` | No | API base URL (default: `http://localhost:3000/api`) |
| `AWS_REGION` | No | AWS region for S3 uploads |
| `AWS_ACCESS_KEY_ID` | No | AWS access key (falls back to local storage) |
| `AWS_SECRET_ACCESS_KEY` | No | AWS secret key |
| `AWS_S3_BUCKET` | No | S3 bucket name |
| `RESEND_API_KEY` | No | Resend API key for emails |
| `EMAIL_FROM` | No | From address for outgoing emails |
| `DODO_PAYMENTS_API_KEY` | No | Dodo Payments key (for premium subscriptions) |
| `DODO_PAYMENTS_WEBHOOK_KEY` | No | Dodo webhook verification key |
| `GROQ_API_KEY` | No | Groq API key (alternative AI provider) |
| `OPENROUTER_API_KEY` | No | OpenRouter key (alternative AI provider) |
| `CODESTRAL_API_KEY` | No | Codestral/Mistral key (alternative AI provider) |
| `CLAUDE_API` | No | Anthropic Claude API key (alternative AI provider) |
| `JUDGE0_RAPIDAPI_KEY_1` | No | Judge0 key for code execution |
| `EXTERNAL_JOB_API_KEY` | No | API key for external job ingest endpoint |

> Only `DATABASE_URL`, `JWT_SECRET`, `GOOGLE_CLIENT_ID`, `GEMINI_API_KEY`, and `ALLOWED_ORIGINS` are required to run the app locally. Other services degrade gracefully.

### Client (`client/.env`, or root `.env` — only `VITE_*` vars are exposed to Vite)

| Variable | Required | Description |
|----------|----------|-------------|
| `VITE_GOOGLE_CLIENT_ID` | Yes | Same Google OAuth client ID as server |
| `VITE_DODO_MODE` | No | `test_mode` or `live` (default: `test_mode`) |

---

## Project Structure

```
InternHack/
├── docker-compose.yml        # Postgres + API + client (dev, hot reload)
├── .env.example              # Compose + combined env documentation
├── client/                   # React frontend (Vite)
│   ├── src/
│   │   ├── components/       # Shared UI components
│   │   ├── lib/              # Utilities, stores, types, axios config
│   │   └── module/           # Feature modules
│   │       ├── auth/         # Login, register, OAuth
│   │       ├── student/      # Student dashboard, jobs, applications, learning
│   │       ├── recruiter/    # Recruiter dashboard, job management
│   │       └── admin/        # Admin panel, moderation
│   └── public/               # Static assets
│
├── server/                   # Express backend
│   ├── src/
│   │   ├── module/           # Feature modules (routes → controller → service)
│   │   │   ├── auth/         # Authentication
│   │   │   ├── student/      # Student APIs
│   │   │   ├── job/          # Job CRUD
│   │   │   ├── recruiter/    # Recruiter APIs
│   │   │   ├── admin/        # Admin APIs
│   │   │   ├── ats/          # ATS resume scoring
│   │   │   ├── job-agent/    # AI chat agent
│   │   │   ├── company/      # Company explorer
│   │   │   ├── dsa/          # DSA problems
│   │   │   ├── aptitude/     # Aptitude questions
│   │   │   └── ...           # More modules
│   │   ├── middleware/       # Auth, role, rate-limit, usage-limit
│   │   ├── database/        # Prisma schema, seeds, config
│   │   ├── utils/            # Email, logger, S3, templates
│   │   └── index.ts          # Express app entry point
│   └── package.json
│
└── .claude/                  # AI assistant context
    ├── CLAUDE.md             # Project instructions
    └── REPO_MAP.md           # Detailed module map
```

> 📊 **Database Schema:** For a visual overview of all models and their relationships, see [docs/database-schema.md](./docs/database-schema.md).

### Module Pattern (Server)

Every backend feature follows: **routes** → **controller** → **service**

```
module/
├── <name>.routes.ts        # Express router, middleware chain
├── <name>.controller.ts    # Request/response handling
├── <name>.service.ts       # Business logic, DB queries
└── <name>.validation.ts    # Zod schemas for input validation
```

---

## API Overview

| Prefix | Module | Auth |
|--------|--------|------|
| `/api/auth` | Login, Register, Google OAuth, OTP | Public |
| `/api/jobs` | Job browsing and search | Public |
| `/api/student` | Applications, profile, external job apply | Student |
| `/api/recruiter` | Job management, hiring rounds, candidates | Recruiter |
| `/api/admin` | Platform management, moderation | Admin |
| `/api/ats` | ATS resume scoring | Student |
| `/api/job-agent` | AI chat for job discovery | Student |
| `/api/companies` | Company explorer, reviews | Public / Student |
| `/api/dsa` | DSA problems and progress | Public / Student |
| `/api/aptitude` | Aptitude questions and progress | Public / Student |
| `/api/external-jobs` | Curated external listings | Public |
| `/api/upload` | File uploads (resumes, images) | Authenticated |
| `/api/payments` | Subscription checkout, webhooks | Student |
| `/api/blog` | Blog posts | Public / Admin |

---

## Production Build

```bash
# Server
cd server && npm run build && npm start

# Client
cd client && npm run build
# Outputs to client/dist/, serve with any static host
```

---

## Contributing

We welcome contributions! See **[CONTRIBUTING.md](CONTRIBUTING.md)** for the full guide on:
- Setting up your development environment
- Understanding the codebase architecture
- Making your first pull request
- Code style and conventions

---

## Contributors  

A huge thanks to all the amazing contributors who helped make **InternHack** better 🚀✨  

<div align="center">
  <a href="https://github.com/Sachinchaurasiya360/InternHack/graphs/contributors">
    <img src="https://contrib.rocks/image?repo=Sachinchaurasiya360/InternHack" alt="Contributors" />
  </a>
</div>

<br/><br/>

## Project Support

<div align="center">

[![Stars](https://img.shields.io/github/stars/Sachinchaurasiya360/InternHack?style=social)](https://github.com/Sachinchaurasiya360/InternHack/stargazers)
&nbsp;&nbsp;
[![Forks](https://img.shields.io/github/forks/Sachinchaurasiya360/InternHack?style=social)](https://github.com/Sachinchaurasiya360/InternHack/network/members)

</div>

## License

This project is open source. See [LICENSE](LICENSE) for details.

---

Built with care by the InternHack team.
