# InternHack, Claude Code Instructions

## Project Overview
InternHack is a full-stack internship/career platform for students with AI-powered tools, learning modules, and recruiter features.

## Quick Start
- **Server:** `cd server && npm run dev` (runs `tsx watch src/index.ts`)
- **Client:** `cd client && npm run dev` (Vite on port 5173)
- **Migrations:** Must run from `server/src/database/`, that's where `prisma.config.ts` lives

## Repo Map
**Always read `.claude/REPO_MAP.md` before any editing task.** It maps every module, route, model, and component.

## Stack
- **Client:** React 18 + Vite 7 + TailwindCSS 4 + React Router 7 + Framer Motion + Zustand + React Query
- **Server:** Express 5 + TypeScript 5 + Prisma 7 + PostgreSQL
- **AI:** Google Gemini (`gemini-2.5-flash-lite`)
- **Auth:** JWT in `Authorization: Bearer <token>` header; Zustand auth store on client
- **Payments:** dodo payment
- **Storage:** AWS S3 with local fallback

## Code Style Rules

### TailwindCSS v4
- Use canonical TW v4 classes only
- No `bg-gradient-*` shorthand, use `bg-linear-to-*` instead
- No arbitrary bracket sizes like `text-[17px]`, use standard scale classes
- No gradient backgrounds on icons, use flat color or bare colored icons

### UI Conventions
- **No pill badges**, do not use `rounded-full` category/section tag pills above page headings. Use `mt-6` on the header wrapper for top spacing instead
- Company avatars: first-letter initial in neutral box, not generic icon
- DRY: no duplicate helpers, shared animation variants per file

### TypeScript
- Strict mode enabled on both client and server
- Use Zod for all server-side validation (see `*.validation.ts` files)
- Client types mirror server models in `client/src/lib/types.ts`

### Module Pattern (Server)
Every server module follows: `<name>.routes.ts` → `<name>.controller.ts` → `<name>.service.ts`
- Routes: Express router with middleware chain (auth, role, usage-limit, validation)
- Controller: Handles request/response, calls service, formats errors
- Service: Business logic, DB queries, external API calls

### Premium Gating Pattern
For premium-only features (see `latex-chat.controller.ts`):
```typescript
const user = await prisma.user.findUnique({
  where: { id: req.user.id },
  select: { subscriptionPlan: true, subscriptionStatus: true },
});
const isPremium =
  (user.subscriptionPlan === "MONTHLY" || user.subscriptionPlan === "YEARLY") &&
  user.subscriptionStatus === "ACTIVE";
```

### Usage Limits
Daily usage limits are enforced via `usageLimit(action)` middleware.
Actions: `ATS_SCORE`, `COVER_LETTER`, `GENERATE_RESUME`, `JOB_APPLICATION`, `MOCK_INTERVIEW`
Config in `server/src/config/usage-limits.ts`.

## Key Patterns

### Adding a New API Endpoint
1. Create/update `*.routes.ts` with Express router
2. Create/update `*.controller.ts` with request handling
3. Create/update `*.service.ts` with business logic
4. Create/update `*.validation.ts` with Zod schemas
5. Register routes in `server/src/index.ts`

### Adding a New Client Page
1. Create page component in `client/src/module/<area>/<PageName>.tsx`
2. Add lazy import in `client/src/App.tsx`
3. Add route in the appropriate route group (public/student/recruiter/admin)

### AI Integration (Gemini)
- Use `GoogleGenerativeAI` from `@google/generative-ai`
- Model: `gemini-2.5-flash-lite`
- For structured responses with LaTeX content, use XML tags (`<reply>`, `<latex>`) instead of JSON
- Always handle parse failures with fallbacks

### Button Component
Use the reusable `Button` from `client/src/components/ui/button.tsx` (CVA-based) for all new buttons.
- Variants: `primary`, `secondary`, `mono`, `ghost`, `danger`
- Modes: `button` (default), `icon`, `link`
- Sizes: `sm`, `md`, `lg`
- Supports `asChild` (Radix Slot) for composing with `<Link>` or other elements
- Import: `import { Button } from "../../components/ui/button"`

### SEO on Internal Pages
All admin and recruiter pages must include `<SEO title="Page Title" noIndex />`. Public pages use full SEO props.

### File Upload Validation
`DynamicFieldRenderer.tsx` validates file uploads client-side (size ≤ 5 MB, allowed types). Follow this pattern for any new file upload UI.

### React.memo Convention
Wrap list-rendered child components (cards, badges, list items) with `React.memo` when they receive stable props and don't have internal state that changes frequently. Use named function form:
```tsx
export const MyCard = React.memo(function MyCard({ data }: Props) { ... });
```

### Repo Request Approval Flow
Students can suggest repos via `POST /api/opensource/requests`. Admin reviews at `/admin/repo-requests`. On approval, the repo is auto-created and the student gets an email. Routes are in `opensource.routes.ts`, `/requests/*` routes must appear BEFORE `/:id` to avoid route conflicts.

## Do NOT
- Create Prisma migrations without confirming, run from `server/src/database/`
- Use `bg-gradient-*` in TailwindCSS, use `bg-linear-to-*`
- Add `rounded-full` pill badges above headings
- Fabricate new UsageAction enum values, reuse existing ones to avoid migrations
- Push to remote without explicit permission
