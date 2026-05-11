# Contributing to InternHack

Thanks for your interest in contributing! InternHack is a full-stack career platform and we welcome contributions of all kinds, bug fixes, new features, docs, and design improvements.

This guide walks you through everything from setting up the project to submitting your first PR.

> 💬 **Join our WhatsApp community:** [Contributors Group](https://chat.whatsapp.com/DeUn3AeowvAJedw60Mt1EN)
>
> Hop in to discuss ideas, ask for guidance on a PR, get unstuck, share what you're working on, or just get to know the other contributors. Whether you're picking up your first `good first issue` or shipping a major feature, it's the fastest way to get a response and meet the people building InternHack with you.

---

## Table of Contents

- [Before You Start](#before-you-start)
- [Development Setup](#development-setup)
- [Understanding the Codebase](#understanding-the-codebase)
- [Making Changes](#making-changes)
- [Code Style Guide](#code-style-guide)
- [Submitting a Pull Request](#submitting-a-pull-request)
- [What to Contribute](#what-to-contribute)
- [Need Help?](#need-help)

---

## Before You Start

1. **Read the README**, Understand what InternHack does and the tech stack
2. **Browse existing issues**, Look for `good first issue` or `help wanted` labels
3. **Check open PRs**, Make sure no one else is already working on the same thing
4. **Use the app**, Visit [internhack.xyz](https://www.internhack.xyz) to understand user flows before touching code

---

## Development Setup

### Prerequisites

| Tool | Version | Purpose |
|------|---------|---------|
| Node.js | 18+ | Runtime |
| npm | 9+ | Package manager |
| PostgreSQL | 14+ | Database |
| Git | 2.30+ | Version control |

You'll also need:
- A **Google Cloud Console** project for OAuth (client ID)
- A **Gemini API key** ([free at aistudio.google.com](https://aistudio.google.com/apikey))

### Step 1: Fork and clone

```bash
# Fork the repo on GitHub, then:
git clone https://github.com/Sachinchaurasiya360/InternHack
cd InternHack
```

### Step 2: Set up environment variables

```bash
# Server environment
cp server/.env.example server/.env

# Client environment
cp client/.env.example client/.env
```

Open `server/.env` and fill in the **required** values:

```env
DATABASE_URL=postgresql://user:password@localhost:5432/internhack
JWT_SECRET=any-random-string-at-least-64-chars-long
GOOGLE_CLIENT_ID=your-google-oauth-client-id
GEMINI_API_KEY=your-gemini-api-key
ALLOWED_ORIGINS=http://localhost:5173
```

Open `client/.env` and fill in:

```env
VITE_GOOGLE_CLIENT_ID=your-google-oauth-client-id
```

> **Note:** Only the variables above are required. Features like S3 uploads, payments, email, and code execution will degrade gracefully without their keys.

### Step 3: Install dependencies

```bash
# Install server dependencies
cd server && npm install

# Install client dependencies (in a new terminal)
cd client && npm install
```

### Step 4: Set up the database

Prisma config lives at `server/src/database/prisma.config.ts`, so **run all Prisma commands from `server/src/database/`**:

```bash
cd server/src/database

# Generate the Prisma client
npx prisma generate

# Push the schema to your database (creates all tables)
npx prisma db push
```

### Step 5: Seed data (optional but recommended)

```bash
cd server

# Seed everything, users, DSA, aptitude, companies, badges, skill tests,
# hackathons, open-source repos, gov internships, and blog posts
npm run seed

# Or seed only an admin + recruiter account
# (set ADMIN_EMAIL and ADMIN_PASSWORD in .env first)
npm run seed:admin
```

> The unified seed script lives at `server/src/database/seeds/seed.ts`. It is idempotent, you can run it multiple times without creating duplicates. Default login for all seeded users is `Test@1234`.
>
> Seeded accounts:
> | Email | Role |
> |---|---|
> | `admin@internhack.xyz` | Admin |
> | `recruiter@internhack.xyz` | Recruiter |
> | `aarav@example.com` | Student |
> | `priya@example.com` | Student |
> | `rohan@example.com` | Student |
> | `sneha@example.com` | Student |
> | `arjun@example.com` | Student |

### Step 6: Start the dev servers

```bash
# Terminal 1, Backend (port 3000)
cd server && npm run dev

# Terminal 2, Frontend (port 5173)
cd client && npm run dev
```

Open **http://localhost:5173**, you're ready to develop!

---

## Understanding the Codebase

### High-level architecture

```
User (Browser)
  │
  ├── React Frontend (Vite, port 5173)
  │     └── Zustand stores, React Query, React Router
  │
  └── Express API (port 3000)
        ├── Middleware (auth, role, rate-limit, validation)
        ├── Modules (routes → controller → service)
        ├── Prisma ORM → PostgreSQL
        └── External APIs (Gemini, S3, Resend, etc.)
```

### Server module pattern

Every backend feature follows the same structure:

```
server/src/module/<name>/
├── <name>.routes.ts          # Route definitions + middleware
├── <name>.controller.ts      # Request handling, calls service
├── <name>.service.ts         # Business logic, DB queries
└── <name>.validation.ts      # Zod schemas for input validation
```

**To trace a feature:** Start at the route file, follow the controller method, then the service method. Validation schemas show you exactly what inputs are expected.

### Client module pattern

```
client/src/module/<area>/
├── <PageName>.tsx            # Page components
└── components/               # Page-specific sub-components
```

Shared components live in `client/src/components/`. State management uses Zustand (`lib/*.store.ts`) and data fetching uses React Query.

### Key files to read first

| File | What it tells you |
|------|-------------------|
| `server/src/index.ts` | All API routes, middleware order, CORS setup |
| `client/src/App.tsx` | All frontend routes and lazy-loaded pages |
| `server/src/database/prisma/schema/base.prisma` | Core database models |
| `client/src/lib/types.ts` | Client-side TypeScript interfaces |
| `.claude/REPO_MAP.md` | Detailed map of every module and file |

### How to trace a feature end-to-end

Let's say you want to understand how "Apply to Job" works:

1. **Client route**, Find the page in `App.tsx` → `JobDetailPage`
2. **API call**, In the page component, look for `api.post("/student/jobs/:id/apply")`
3. **Server route**, `server/src/module/student/student.routes.ts` → find the POST route
4. **Controller**, `student.controller.ts` → `applyToJob()` method
5. **Service**, `student.service.ts` → `applyToJob()`, the actual business logic
6. **Database**, Check `application` model in `base.prisma`

This pattern works for every feature.

---

## Making Changes

### Branch naming

```
feat/short-description     # New features
fix/short-description      # Bug fixes
docs/short-description     # Documentation
refactor/short-description # Code improvements
```

### Workflow

```bash
# Create a branch from main
git checkout main
git pull origin main
git checkout -b feat/your-feature-name

# Make your changes, then:
git add <specific-files>
git commit -m "feat: short description of what and why"

# Push and open a PR
git push origin feat/your-feature-name
```

### Adding a new API endpoint

1. Create or update `<name>.routes.ts`, define the route with middleware
2. Create or update `<name>.controller.ts`, handle request/response
3. Create or update `<name>.service.ts`, write the business logic
4. Create or update `<name>.validation.ts`, add Zod schemas
5. Register routes in `server/src/index.ts` if it's a new module

### Adding a new client page

1. Create the page component in `client/src/module/<area>/<PageName>.tsx`
2. Add a lazy import in `client/src/App.tsx`
3. Add the route in the appropriate route group (public / student / recruiter / admin)

### Modifying the database

1. Edit the schema in `server/src/database/prisma/schema/`
2. Run `npx prisma generate` from `server/src/database/`
3. Run `npx prisma db push` to apply changes
4. **Do not** create migrations without discussing first, we use `db push` for development

---

## Code Style Guide

### TypeScript

- Strict mode is enabled on both client and server
- Use Zod for all server-side input validation
- Use proper types, avoid `any` where possible

### TailwindCSS (v4)

- Use canonical TailwindCSS v4 class names
- Use `bg-linear-to-*` instead of `bg-gradient-*`
- Don't use arbitrary values like `text-[17px]`, use the standard scale
- No gradient backgrounds on icons, use flat colors

### UI conventions

- Company avatars: first-letter initial in a neutral box, not a generic icon
- No pill badges (`rounded-full`) above page headings
- Dark mode support on all new components

### Commit messages

Use conventional commits:

```
feat: add external job pagination
fix: theme toggle not persisting on route change
docs: update contributing guide
refactor: extract email templates to utils
```

Keep messages short (under 72 chars), focused on **what** and **why**.

---

## Submitting a Pull Request

### PR checklist

Before opening a PR, verify:

- [ ] Your code compiles without new TypeScript errors
- [ ] You tested the feature manually in the browser
- [ ] You didn't commit `.env` files, credentials, or `node_modules`
- [ ] You added dark mode support if your change includes UI
- [ ] Database changes use `db push`, not migrations (for now)

### PR format

```markdown
## Summary
- Brief description of what changed and why

## Changes
- List of specific changes

## How to test
- Steps to test this PR locally

## Screenshots (if UI changes)
- Before/after screenshots
```

### Review process

1. Open a PR against `main`
2. Fill in the PR template
3. A maintainer will review within a few hour
4. Address feedback, push updates to the same branch
5. Once approved, a maintainer will merge

---

## What to Contribute

### Good first issues

Look for issues labeled `good first issue`, these are scoped, well-defined tasks suitable for newcomers.

### Ideas for contributions

- **Bug fixes**, Found something broken? Fix it!
- **UI improvements**, Better responsive behavior, accessibility, animations
- **New learning content**, DSA problems, aptitude questions, skill test questions
- **Documentation**, Improve code comments, API docs, or this guide
- **Performance**, Optimize slow queries, reduce bundle size, add caching
- **Testing**, Add unit or integration tests (we currently have minimal coverage)
- **Accessibility**, Improve keyboard navigation, screen reader support, ARIA labels
- **i18n**, Help internationalize the platform for non-English speakers

### Areas where we especially need help

| Area | Description |
|------|-------------|
| Testing | Unit tests for services, integration tests for API routes |
| Accessibility | ARIA labels, keyboard navigation, contrast ratios |
| Mobile UX | Improve experience on smaller screens |
| Documentation | API docs, inline code comments |
| SEO | Meta tags, structured data, sitemap improvements |

---

## Need Help?

- **Read the codebase guide**, [internhack.xyz/student/opensource/read-codebase](https://www.internhack.xyz/student/opensource/read-codebase) has a step-by-step approach to understanding unfamiliar codebases
- **Check `.claude/REPO_MAP.md`**, Detailed map of every module, route, and component
- **Open a discussion**, Ask questions in GitHub Discussions
- **Open an issue**, If you're unsure about something, ask before building

---

Thank you for contributing to InternHack! Every contribution, no matter how small, helps students find better career opportunities.
