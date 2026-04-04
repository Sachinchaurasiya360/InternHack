# InternHack — Code Style & UI Skills

## TailwindCSS v4 Rules

### Canonical classes only
- Colors: `bg-indigo-600`, `text-gray-500` (standard palette)
- Gradients: `bg-linear-to-br from-indigo-100 to-violet-100` (NOT `bg-gradient-to-br`)
- Sizing: use scale classes (`text-sm`, `text-lg`, `w-96`) — avoid arbitrary brackets like `text-[17px]`
- Spacing: standard scale (`p-4`, `gap-2.5`, `mb-3`) — brackets OK for calc: `h-[calc(100vh-180px)]`
- Border radius: `rounded-xl`, `rounded-2xl`, `rounded-lg` — NOT `rounded-[12px]`

### Dark mode
- Always include dark variants: `bg-white dark:bg-gray-900`, `text-gray-800 dark:text-gray-200`
- Borders: `border-gray-100 dark:border-gray-800`
- Hover states: `hover:bg-gray-100 dark:hover:bg-gray-700`

## UI Conventions

### No pill badges
Do NOT use `rounded-full` for category/section tag pills above page headings.
Instead, use `mt-6` on the header wrapper for top spacing.

### Icons
- Import from `lucide-react`
- Size: `w-3.5 h-3.5` (small/toolbar), `w-4 h-4` (standard), `w-5 h-5` (emphasis)
- No gradient backgrounds on icons — use flat color: `text-indigo-500`
- Icon containers: `w-7 h-7 rounded-lg bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center`

### Company/entity avatars
First-letter initial in neutral box, NOT generic icon:
```tsx
<div className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
  <span className="text-sm font-bold text-gray-600 dark:text-gray-400">
    {company.name[0]}
  </span>
</div>
```

### Cards
```tsx
<div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm p-4">
```

### Page headers
```tsx
<h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-gray-950 dark:text-white mb-3">
  Page <span className="text-gradient-accent">Title</span>
</h1>
<p className="text-lg text-gray-500 dark:text-gray-500 max-w-xl mx-auto">
  Subtitle text
</p>
```

### Buttons — Use `<Button>` Component
Import from `components/ui/button.tsx` (CVA-based). Do NOT use raw `<button>` with inline Tailwind for new code.

```tsx
import { Button } from "../../components/ui/button";

<Button variant="primary">Save</Button>           // indigo filled
<Button variant="secondary">Cancel</Button>       // gray outlined
<Button variant="mono">Action</Button>             // dark filled
<Button variant="ghost" mode="icon"><X /></Button>  // icon-only
<Button variant="danger">Delete</Button>           // red filled
<Button asChild variant="mono"><Link to="/path">Go</Link></Button> // with router Link
```

- Variants: `primary`, `secondary`, `mono`, `ghost`, `danger`
- Modes: `button` (default), `icon` (square, no padding text), `link` (inline text button)
- Sizes: `sm`, `md`, `lg`
- `asChild` uses Radix Slot to merge props onto child element (e.g. `<Link>`)

### Toolbar pattern
```tsx
<div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm p-4">
  <div className="flex items-center gap-2 flex-wrap">
    {/* buttons here */}
  </div>
</div>
```

## Component Patterns

### Motion (Framer Motion)
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
>
```

### Split pane (editor + preview)
- Use `h-[calc(100vh-Xpx)] min-h-96` on the container
- `min-h-0` on each flex child to allow independent scrolling
- `flex-1 overflow-auto` for the scrollable content area

### Floating panel (chat, modals)
- Mobile: `fixed inset-0 z-50`
- Desktop: `lg:inset-auto lg:right-6 lg:bottom-6 lg:w-96 lg:h-[540px] lg:rounded-2xl`
- Border + shadow: `border border-gray-200 dark:border-gray-800 shadow-2xl`

### Premium gate
```tsx
const isPremium =
  (user?.subscriptionPlan === "MONTHLY" || user?.subscriptionPlan === "YEARLY") &&
  user?.subscriptionStatus === "ACTIVE";
```
Show Lock icon + upsell card for free users.

## Code Quality

### DRY
- No duplicate helpers — extract shared utilities
- Shared animation variants per file (don't repeat `initial/animate/transition`)
- Shared type definitions in `client/src/lib/types.ts`

### Server validation
- Always use Zod schemas in `*.validation.ts`
- Parse with `safeParse()` in controllers
- Return structured errors: `{ message, errors: validation.error.flatten() }`

### Error handling
- Controllers: try/catch with `next(err)` fallback
- Client: Axios error extraction pattern:
```tsx
if (err && typeof err === "object" && "response" in err) {
  const resp = err as { response?: { data?: { message?: string } } };
  msg = resp.response?.data?.message ?? "Something went wrong";
}
```

### React.memo for list items
Wrap list-rendered child components with `React.memo` when they receive stable props:
```tsx
export const MyCard = React.memo(function MyCard({ data }: Props) {
  return <div>...</div>;
});
```
Only apply to components that: (1) are rendered in `.map()` lists, (2) receive primitive or stable object props, (3) don't have frequently-changing internal state.

### SEO on internal pages
All admin and recruiter pages must have `<SEO title="..." noIndex />`. Public-facing pages use full SEO props (title, description, keywords).

### File upload validation
Client-side file uploads must validate size (default 5 MB) and allowed MIME types before sending. See `DynamicFieldRenderer.tsx` FILE_UPLOAD case for the pattern.

### AI response parsing (LaTeX chat)
- Prompt AI with XML tags (`<reply>`, `<latex>`) — NOT JSON (LaTeX backslashes break JSON)
- Parse with greedy regex: `/<latex>([\s\S]*)<\/latex>/`
- Fallback: if `<latex>` tag found but no closing tag, take everything after it
- JSON fallback for backward compat
