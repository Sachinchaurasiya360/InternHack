# Learning Hub Revamp Plan

## Your question: JSON vs Markdown/README, which is better?

Short answer: **keep JSON as the source of truth, but render rich content inside it.** Do not migrate wholesale to `.md` files. Here is why.

### Why raw markdown is NOT the right move
Current lesson files (e.g. [html-fundamentals.json](client/src/module/student/html/data/lessons/html-fundamentals.json)) are structured records with typed fields: `id`, `sectionId`, `orderIndex`, `difficulty`, `isInterviewQuestion`, `concepts`, `content.explanation`, `content.codeExamples[]`, `notes`, `commonPitfalls`, etc. The app relies on this shape for:

1. Progress tracking per `id`
2. Filtering (interview questions, difficulty, concepts)
3. Ordering via `orderIndex`
4. Rendering code examples with separate `code`, `output`, `explanation` blocks
5. Future features like search, bookmarking, quizzes, XP

Raw markdown throws all of that away. You would have to parse frontmatter and custom fences back out of the `.md`, which is strictly worse than just reading a field. Markdown is great for prose, bad for structured learning content.

### The real problem
The real problem is not the format, it is that **the `explanation` field is one giant wall of text** rendered as plain paragraphs. Whether that text lives in JSON or MD, it still looks boring. The fix is on the render side.

### Recommended approach: hybrid
- Keep the JSON schema.
- Allow the `explanation` field (and notes, pitfalls) to contain **markdown + custom directives**. Render it with `react-markdown` + `remark-gfm` + `rehype-highlight`.
- Add new optional fields to the JSON schema for rich blocks: `diagrams`, `flowcharts`, `interactiveDemos`, `quiz`, `visualizations`.
- Render each block with a dedicated component.

This gives you the "write like markdown" ergonomics for authors, and the structured metadata for the app.

---

## Phase 1: Make existing content visually engaging

### 1.1 Markdown rendering inside lessons
- Install `react-markdown`, `remark-gfm`, `rehype-highlight`, `rehype-raw`.
- Create [LessonContent.tsx](client/src/components/learn/LessonContent.tsx) that accepts the `content` object and renders explanation as markdown.
- Support GitHub-style tables, task lists, callouts (`> [!NOTE]`, `> [!WARNING]`).
- Style with Tailwind `prose` equivalent (use `@tailwindcss/typography` or hand-rolled since we are on TW v4).

### 1.2 Diagrams and flowcharts (Mermaid)
- Install `mermaid`.
- Add a `Mermaid` renderer that lazy-loads and renders any ` ```mermaid ` code fence.
- Add an optional `diagrams: [{ title, mermaid }]` array to the lesson JSON. Example use cases:
  - HTML rendering pipeline: `Browser -> HTTP -> Server -> HTML -> DOM -> CSSOM -> Render Tree -> Paint`
  - React lifecycle
  - Express middleware chain
  - SQL query execution order

### 1.3 Charts (Recharts, already likely in deps)
- Add optional `charts: [{ type: 'bar'|'line'|'pie', title, data }]` to JSON.
- Useful for: time complexity comparisons, language popularity, framework benchmarks, aptitude answer distributions.

### 1.4 Syntax-highlighted code with tabs
- Upgrade `codeExamples` rendering to use Shiki or `rehype-highlight` with a copy button, line numbers, and a tabs UI when a lesson has multiple examples.
- Add a "Run" button for JS/HTML/CSS examples via Sandpack (`@codesandbox/sandpack-react`). Instant interactive playground, zero backend.

### 1.5 Callout cards
- Replace the plain `notes` and `commonPitfalls` lists with colored callout cards (info, warning, tip, danger). Icon + border, not pill badges (per CLAUDE.md rules).

---

## Phase 2: New interactive features

### 2.1 Inline quizzes per lesson
- Add `quiz: [{ question, options[], correctIndex, explanation }]` to JSON.
- Render as a card after the lesson. Track correct/incorrect per user in localStorage first, then persist to server.
- Award XP for first-try correct answers.

### 2.2 Flashcards (spaced repetition lite)
- Auto-generate flashcards from the `concepts` array + a new `definitions` map.
- Simple SM-2 style review queue. Daily review streak.

### 2.3 Progress, XP and streaks
- Per-lesson progress: `not-started | in-progress | completed`.
- Daily streak counter on the Learning Hub landing page.
- XP bar, level up, badges for: "Finished HTML track", "10-day streak", "50 interview questions answered".

### 2.4 TCS / exam question bank
- Create [examData/](client/src/module/student/aptitude/data/exams/) with folders per exam: `tcs-nqt`, `infosys`, `wipro`, `accenture`, `capgemini`, `cognizant`.
- Each JSON file: `{ exam, year, section, questions: [{ id, type, question, options, correctIndex, explanation, difficulty, topic }] }`.
- New route `/student/exam-prep/:exam` with:
  - Topic-wise practice
  - Timed full mock tests with section timers matching real patterns (e.g. TCS NQT: Numerical 25m, Verbal 25m, Reasoning 25m, Coding 45m)
  - Score report with topic breakdown
  - Leaderboard (optional)
- Mark questions with `isInterviewQuestion: true` to reuse the existing filter on the Learning Hub.

### 2.5 Daily challenge
- One curated question per day on the Learning Hub home. MCQ, code, or debug-the-snippet. Mixed across tracks.
- "Maintain your streak" CTA.

### 2.6 Code playground lessons
- For JS / Python / SQL: embed Sandpack or Pyodide or sql.js so the learner can edit and run the example in place.
- Add `playground: { language, starter, solution, tests }` to JSON. Auto-grade with tests.

### 2.7 Visual concept maps
- Each track gets a clickable concept-map landing page (React Flow). Nodes are lessons, edges are prerequisites. Clearly shows progress (completed nodes turn green).
- Install `reactflow`.

### 2.8 AI tutor per lesson
- "Ask about this lesson" button. Sends lesson content + user question to Gemini (`gemini-2.5-flash-lite` per CLAUDE.md). Server endpoint under `learn-chat/` module mirroring the existing module pattern.
- Rate-limit via `usageLimit` middleware, reuse an existing UsageAction (per CLAUDE.md: do not add new enum values).

### 2.9 Notes and bookmarks
- Per-user notes per lesson, stored server-side. Bookmark important lessons. Export notes as markdown.

### 2.10 Community answers on interview questions
- For lessons where `isInterviewQuestion: true`, let students post their own answers, upvote, and see a "top answer". Moderated by admin.

---

## Phase 3: Engagement and retention

- **Weekly learning digest email** using the existing broadcast email infra (recent commits show it exists).
- **Certificates** on track completion, PDF generated server-side, shareable link.
- **Study groups**: students join a track cohort, shared progress wall.
- **Compare with friends**: opt-in progress sharing.
- **Push notifications** via web push for daily challenge and streak reminders.

---

## Proposed JSON schema additions (non-breaking)

```ts
type LessonContent = {
  explanation: string;           // now: markdown, not plain text
  codeExamples?: CodeExample[];
  notes?: string[];
  commonPitfalls?: string[];

  // NEW optional blocks
  diagrams?: { title: string; mermaid: string; caption?: string }[];
  charts?: { title: string; type: "bar" | "line" | "pie"; data: any }[];
  quiz?: { question: string; options: string[]; correctIndex: number; explanation: string }[];
  playground?: { language: "js" | "html" | "python" | "sql"; starter: string; solution?: string; tests?: string };
  keyTakeaways?: string[];       // rendered as a highlighted summary card
  furtherReading?: { title: string; url: string }[];
};
```

All new fields optional, so existing lessons keep working.

---

## Implementation order (recommended)

1. Markdown rendering + callouts + code copy button. Biggest visual win, smallest effort.
2. Mermaid diagrams. Add 2-3 diagrams to HTML and JS fundamentals as proof.
3. Inline quiz component + quiz data for one track.
4. Sandpack playground for JS basics.
5. XP, streak, daily challenge on the Learning Hub home.
6. TCS / company exam module.
7. React Flow concept maps per track.
8. AI tutor endpoint.
9. Flashcards and spaced repetition.
10. Certificates and weekly digest.

---

## Files that will change

- [client/src/module/student/learn/LearnHubPage.tsx](client/src/module/student/learn/LearnHubPage.tsx): add daily challenge, streak, XP widgets.
- New: [client/src/components/learn/](client/src/components/learn/) folder with `LessonContent.tsx`, `Mermaid.tsx`, `Quiz.tsx`, `Playground.tsx`, `Callout.tsx`, `ConceptMap.tsx`.
- Each track's lesson renderer page (e.g. [DataAnalyticsLessonsPage.tsx](client/src/module/student/data-analytics/DataAnalyticsLessonsPage.tsx)) swaps its current text renderer for `<LessonContent content={lesson.content} />`.
- New server module: `server/src/modules/learn-progress/` for XP, streaks, bookmarks, notes. Follows the routes/controller/service/validation pattern from CLAUDE.md.
- New server module: `server/src/modules/learn-chat/` for AI tutor.
- Prisma: new models `LessonProgress`, `LessonNote`, `LessonBookmark`, `QuizAttempt`, `DailyChallenge`, `UserStreak`. Confirm before creating migrations (per CLAUDE.md).

---

## TL;DR

Do not convert JSON to markdown files. Instead, let the `explanation` field contain markdown, render it richly, and add optional structured fields for diagrams, quizzes, playgrounds, and charts. Then layer on gamification (XP, streaks, daily challenge), a TCS/company exam bank, an AI tutor, and React Flow concept maps. That is what will actually bring students back, not a file-format swap.
