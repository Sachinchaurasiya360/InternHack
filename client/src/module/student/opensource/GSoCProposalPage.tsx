import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2, Circle, ArrowLeft, Award, ChevronDown, ChevronUp,
  Copy, Check, ExternalLink, BookOpen, Lightbulb, Link2,
  Trophy, AlertTriangle, FileText, Users, Calendar,
} from "lucide-react";
import { Link } from "react-router";

// ─── Types ─────────────────────────────────────────────────────
interface Resource {
  title: string;
  url: string;
  type: "article" | "tool" | "video" | "docs" | "example";
}

interface Step {
  id: string;
  number: number;
  title: string;
  description: string;
  details: string[];
  tips: string[];
  mistakes: string[];
  resources: Resource[];
}

// ─── Steps Data ─────────────────────────────────────────────────
const STEPS: Step[] = [
  {
    id: "choose-project",
    number: 1,
    title: "Choose Your Organization Strategically",
    description: "Your org choice determines 80% of your outcome. The best project isn't the most popular - it's the one where your skills match, mentors are responsive, and competition is manageable.",
    details: [
      "Browse accepted orgs at summerofcode.withgoogle.com. The list drops in January each year. Start early - waiting until March puts you weeks behind serious applicants.",
      "Read each org's Ideas List carefully. These aren't suggestions - they're mentor-approved project specs that someone specifically wants built. Proposing within the Ideas List is significantly easier than pitching your own idea.",
      "Match honestly. If the project needs Rust and you've written 200 lines of Rust, that's not a match. You should already be comfortable in the required stack - GSoC is for building, not learning a new language.",
      "Check the org's GitHub pulse: when was the last commit? How fast are PRs reviewed? If the last merged PR was 3 months ago, your proposal will collect dust.",
      "Orgs that have participated in 3+ GSoC cycles have experienced mentors who know how to guide students. First-time orgs are riskier - their mentoring process is unproven.",
      "You can submit up to 3 proposals. Focus on 2 strong proposals to 2 different orgs. Spreading across 5+ orgs produces 5 mediocre proposals instead of 2 excellent ones.",
      "Check the GSoC archive for each org's selection rate. Some orgs accept 2 students from 200 applicants. Others accept 8 from 30. The math matters.",
    ],
    tips: [
      "Pick a project that solves a problem you've personally hit. If you've filed a bug report or wished for a feature, your proposal will write itself - you already understand the user's pain.",
      "Mid-tier orgs (100-500 GitHub stars, 3-5 GSoC slots) have the best acceptance odds. Google's own projects, Mozilla, and LLVM get 500+ applications for 10 slots. A well-maintained library with 50 applicants for 5 slots is a much better bet.",
      "Reach out to last year's accepted GSoC students for the org. They'll tell you what the mentor is like, how reviews work, and what the real expectations are. Most are happy to help.",
    ],
    mistakes: [
      "Applying to a project requiring skills you plan to learn during the program - mentors can tell, and they'll pick someone who's already productive.",
      "Choosing based purely on stipend amount or brand prestige. The $6,600 stipend doesn't matter if you're rejected from all 3 proposals.",
      "Submitting 5+ proposals - each one gets weaker. Two polished proposals beat five rushed ones every single time.",
    ],
    resources: [
      { title: "GSoC Organization List (current year)", url: "https://summerofcode.withgoogle.com/programs/2024/organizations", type: "tool" },
      { title: "GSoC Archive - past projects and acceptance data", url: "https://summerofcode.withgoogle.com/archive", type: "tool" },
      { title: "Getting Started with GSoC (OpenEMR)", url: "https://www.openemr.org/blog/getting-started-gsoc", type: "article" },
    ],
  },
  {
    id: "pre-contributions",
    number: 2,
    title: "Ship Code Before You Write a Word",
    description: "A merged PR is worth more than 10 pages of proposal text. Mentors choose contributors they've already seen ship code - not strangers who claim they can.",
    details: [
      "Start contributing 6-8 weeks before the application deadline. This is not optional - applicants with zero contributions are rejected 90%+ of the time.",
      "Your first contribution should be small: fix a typo in docs, resolve a 'good first issue', or add a missing test. The goal is to prove you can navigate the codebase, follow the contribution process, and communicate with maintainers.",
      "Your second contribution should be meaningful: a real bug fix, a small feature, or a non-trivial documentation improvement. This demonstrates actual technical ability.",
      "Getting even one commit merged by a mentor before applying gives you a massive advantage. It means someone on the team has already vouched for your code quality.",
      "Contribute to the specific module your proposal targets. If you're proposing to improve the HTTP client, fix a bug in the HTTP client. This proves you've already explored the relevant code.",
      "If your PR isn't merged yet, include it in your proposal anyway - link the draft and note it's under review. Showing work-in-progress is still vastly better than showing nothing.",
      "Even a thoughtful, well-researched comment on a complex issue demonstrates understanding. Not every contribution needs to be a PR.",
    ],
    tips: [
      "Mentors track contributors months before applications open. If they've seen your name in PRs since December, you're already on their mental shortlist by March.",
      "Open a draft PR early, ask for feedback, then iterate. This mirrors how you'll work during GSoC. Mentors see this pattern and think 'this person knows how to collaborate.'",
      "Quality over quantity. One well-crafted PR that touches the project's core logic impresses more than 10 typo fixes in README files.",
    ],
    mistakes: [
      "Submitting a proposal with zero prior contributions to the org. This is the single most common reason for rejection.",
      "Only fixing typos. Docs contributions show you care, but they don't prove you can write the code your proposal promises.",
      "Making contributions to a different org than the one you're applying to. Your contributions need to be in the repo you're proposing to work on.",
    ],
    resources: [
      { title: "Good First Issues Finder", url: "https://goodfirstissue.dev", type: "tool" },
      { title: "GSoC Student Guide - Getting Started", url: "https://google.github.io/gsocguides/student/", type: "docs" },
    ],
  },
  {
    id: "contact-mentors",
    number: 3,
    title: "Talk to Mentors Before You Apply",
    description: "Most accepted GSoC students have spoken with their mentor before submitting. Not a cold email - a real technical conversation that shows you've already engaged with the code.",
    details: [
      "Find the org's communication channel: most use IRC, Slack, Discord, Matrix, or a mailing list. Join it. Read 2 weeks of message history before saying anything.",
      "Introduce yourself briefly: your name, university, what you're studying, and which project idea interests you. Keep it to 3-4 sentences, not a biography.",
      "Your first message should include a specific technical question that proves you've looked at the code. Not 'how do I get started?' - something like 'I'm looking at the rate limiter in src/middleware/rate.ts. The current sliding window implementation doesn't handle distributed deployments. Would you be open to a proposal that adds Redis-backed rate limiting?'",
      "Attend any office hours or video calls the org runs for prospective students. Being present and asking one smart question puts you ahead of 95% of applicants who never show up.",
      "Stay visible throughout the application period. Drop in once a week with a progress update on your contributions or a thoughtful comment on a discussion. Not spam - just consistent engagement.",
      "Ask if you can share a draft proposal with the mentor before the deadline. Many will review it and give direct feedback on scope, timeline, and technical approach.",
    ],
    tips: [
      "Mentors are volunteers with full-time jobs. Be concise, specific, and respectful of their time. A 3-sentence message gets a response. A 3-paragraph introduction gets skipped.",
      "If a mentor responds enthusiastically to your question - asking follow-ups, suggesting approaches - that's a strong signal they want you to apply. Double down on that project.",
      "Ask: 'What would make this proposal stand out to you?' Mentors will often tell you exactly what they're looking for.",
    ],
    mistakes: [
      "Sending a private DM before introducing yourself publicly. This feels like going behind the community's back.",
      "Asking 'can you explain the codebase to me?' Do your own research first. Mentors want to see self-directed learners.",
      "Going silent after one exchange and only reappearing when you submit. Mentors notice - and it signals low engagement.",
    ],
    resources: [
      { title: "GSoC Guides - Contacting Mentors", url: "https://google.github.io/gsocguides/student/making-first-contact", type: "docs" },
      { title: "How to Ask Smart Questions (ESR)", url: "http://www.catb.org/esr/faqs/smart-questions.html", type: "article" },
    ],
  },
  {
    id: "research-codebase",
    number: 4,
    title: "Know the Code Better Than Other Applicants",
    description: "Clone the repo, build it locally, read the code your proposal touches, and study past GSoC projects. If you can't run the project, you can't contribute to it.",
    details: [
      "Clone the repo and get it running locally. This is pass/fail - if you can't build the project, your proposal is theoretical, and mentors know it.",
      "Read the code in the specific area your proposal targets. Trace the data flow from the entry point through the modules you'll modify. Name specific files and functions in your proposal.",
      "Read past GSoC project reports for this org. The archive shows what was completed, what was abandoned, and why. You might unknowingly propose something that was already tried and failed.",
      "Read open issues and recent PRs in your target area. This tells you what the current pain points are and what solutions have already been discussed.",
      "Identify the 3 hardest technical challenges in your project. Address each one in your proposal with a specific approach. This is where most applicants fall short - they describe what they'll build but not how they'll solve the hard parts.",
      "Understand the testing framework. Your proposal should include a testing plan: what tests you'll write, what coverage you're targeting, which edge cases matter.",
    ],
    tips: [
      "Use GitHub's code search or Sourcegraph to navigate large codebases quickly. Reading code in your IDE is better, but search tools help you find the right starting point.",
      "If the org has architectural decision records (ADR) or design docs, read them. They explain why the code is structured the way it is - and this context prevents you from proposing something that contradicts existing design decisions.",
    ],
    mistakes: [
      "Writing a proposal without ever running the project locally. Mentors test for this by asking follow-up questions about the build process.",
      "Proposing an approach that conflicts with the existing architecture without acknowledging the tradeoff. This signals you didn't read the code.",
      "Ignoring past GSoC projects. If a similar project was attempted last year and only reached 60% completion, your timeline had better account for the complexity that tripped up the previous student.",
    ],
    resources: [
      { title: "GSoC Archive - past project reports", url: "https://summerofcode.withgoogle.com/archive", type: "tool" },
      { title: "Sourcegraph - code search across repositories", url: "https://sourcegraph.com", type: "tool" },
    ],
  },
  {
    id: "structure-proposal",
    number: 5,
    title: "Structure Your Proposal Like a Professional",
    description: "A winning proposal has a clear architecture: abstract, concrete deliverables, detailed implementation plan, weekly timeline, and evidence of your ability. Every section matters - don't skip any.",
    details: [
      "Title: Be specific. Not 'Improve XYZ' but 'Add async pipeline support to XYZ CLI for 3x throughput on large datasets'. The title should tell a mentor exactly what you'll build.",
      "Abstract (150-200 words): Problem statement in 2 sentences, your solution in 3 sentences, expected impact in 1 sentence. Zero fluff. A mentor should understand your entire project from this paragraph alone.",
      "Deliverables: List 3-5 concrete, testable outcomes. Split into Primary (must ship by final evaluation) and Stretch (if time permits). Each deliverable should be independently verifiable - 'Add async support' is vague. 'Implement async pipeline runner with concurrent task execution, benchmarked at 3x throughput for datasets >100MB' is testable.",
      "Implementation Plan: This is where most proposals fail. Describe your technical approach at the code level. Which modules will you modify? What data structures will you use? What's the API surface? Include a diagram if it helps.",
      "Weekly Timeline: Every week from community bonding through final evaluation, with specific milestones. See Step 6 for details.",
      "About Me: University, year, relevant courses, past projects, GitHub, and every contribution you've made to this org. Link your PRs directly.",
      "Availability: Hours per week, exam schedule, part-time job hours. Be honest - mentors respect realistic schedules over ambitious promises.",
    ],
    tips: [
      "Show your proposal to a senior student or past GSoC participant before submitting. Fresh eyes catch gaps in logic, unclear explanations, and missing sections.",
      "Use formatting: headers, bullets, tables, code blocks. A wall of text gets skimmed. A well-structured proposal gets read carefully.",
      "The Implementation Plan is the make-or-break section. If your proposal spends 2 pages on 'About Me' and 3 sentences on implementation, it will be rejected.",
    ],
    mistakes: [
      "Writing a 10-page proposal with only 2 sentences about actual implementation. Mentors are evaluating your technical plan, not your autobiography.",
      "Listing deliverables like 'Improve performance' without measurable targets. How will the mentor know if you succeeded?",
      "Copying the org's project idea description word-for-word. The Ideas List describes the problem - your proposal should describe your solution.",
    ],
    resources: [
      { title: "GSoC Student Guide - Writing a Proposal", url: "https://google.github.io/gsocguides/student/writing-a-proposal", type: "docs" },
      { title: "GSoC Proposal Tips (Kushal Das)", url: "https://kushaldas.in/posts/the-google-summer-of-code-tips.html", type: "article" },
      { title: "Real Accepted GSoC Proposals on GitHub", url: "https://github.com/skalnik/gsoc-proposal-examples", type: "example" },
    ],
  },
  {
    id: "write-timeline",
    number: 6,
    title: "Build a Timeline That Proves You Understand the Work",
    description: "Your timeline is a credibility test. A vague timeline ('Week 1-4: implement features') screams inexperience. A detailed, realistic one - with buffer weeks and testing phases - signals maturity.",
    details: [
      "Community Bonding (3 weeks before coding): Don't treat this as vacation. Set up your full dev environment, finalize design with your mentor, read remaining codebase areas, and create a detailed technical spec.",
      "Break the 12 coding weeks into named phases, not just 'Week 1: start coding'. Phase 1: Core infrastructure (Weeks 1-4). Phase 2: Feature implementation (Weeks 5-8). Phase 3: Testing, docs, polish (Weeks 9-12).",
      "Align milestones with evaluations. At midterm, your mentor needs to evaluate something concrete. Plan your most demonstrable deliverable for Week 6, not Week 12.",
      "Include at least 1 buffer week. You will encounter unexpected complexity, build failures, upstream changes, or mentor feedback that requires rethinking. A timeline with zero slack is a timeline that will slip.",
      "Each week should answer one question: 'What specific, testable output exists at the end of this week?' Not 'work on feature X' - 'HTTP client retry logic implemented with exponential backoff, unit tests passing, PR opened for review.'",
      "Account for time outside coding: documentation, test writing, code review cycles, and weekly sync calls with your mentor. These eat 30-40% of your time.",
      "If you have exams in June or a part-time job, show reduced hours for those weeks. Mentors prefer honest 20-hour weeks over fake 40-hour weeks that produce no output.",
    ],
    tips: [
      "Use a table format: Week | Deliverable | Notes. It's scannable and forces precision.",
      "Over-estimate time for tasks involving legacy code or unfamiliar APIs. They always take 2-3x longer than you think.",
      "Mention when you'll share progress updates (weekly blog post, Monday standup messages, etc.). Mentors love proactive communicators.",
    ],
    mistakes: [
      "A 12-week timeline with 4 total bullet points. This tells the mentor you haven't thought through the work.",
      "Packing all major features into weeks 10-12. If Week 10 slips, everything collapses.",
      "No concrete deliverable at midterm evaluation. Your mentor needs to assess 'substantial progress' - give them something demonstrable by Week 6.",
    ],
    resources: [
      { title: "GSoC Timeline & Evaluation Schedule", url: "https://developers.google.com/open-source/gsoc/timeline", type: "docs" },
      { title: "Example Timeline Template (SymPy)", url: "https://github.com/sympy/sympy/wiki/GSoC-2023-Application-Template", type: "example" },
    ],
  },
  {
    id: "demonstrate-ability",
    number: 7,
    title: "Show Evidence, Not Promises",
    description: "Every claim in your proposal needs proof. Don't say 'I'm skilled in Python' - link a Python project. Don't say 'I can build this' - show a merged PR that proves it.",
    details: [
      "Link every PR you've submitted to this org. Make it effortless for mentors to verify: 'PR #234: Fixed race condition in session handler - merged, 3 files changed.'",
      "If you've built something relevant (side project, class project, internship work), link the GitHub repo and describe it in 2-3 sentences. Focus on what's similar to the proposed GSoC work.",
      "Include a short code snippet or architecture sketch if it illustrates your approach to the hardest technical challenge in your proposal. This shows you've already started thinking at the code level.",
      "Don't just claim you understand the codebase - demonstrate it: 'After studying the request pipeline in src/core/pipeline.ts, I identified that the current synchronous approach blocks on I/O at line 147. My proposal replaces this with an async iterator pattern using...'",
      "List your technical skills honestly. Use a table: Skill | Level (Expert / Intermediate / Beginner). Mentors appreciate honesty over padding.",
      "If you've done relevant research (benchmarked alternatives, read academic papers, compared implementations), mention it. Depth of understanding separates accepted applicants from rejected ones.",
    ],
    tips: [
      "One merged PR in the org's repo is worth more than 10 lines of 'I'm passionate about open source' in your proposal. Mentors evaluate code, not enthusiasm.",
      "If you don't have prior contributions yet, start NOW. A PR opened this week and merged before the deadline is still a powerful signal.",
    ],
    mistakes: [
      "Listing technologies on your resume that you've only used in a tutorial. Mentors will ask follow-up questions - if you can't answer, trust collapses.",
      "Saying 'I learn fast' as a substitute for evidence. Everyone says this. No one believes it without proof.",
      "Not linking to your GitHub or any code at all. If a mentor can't see your code, they'll assume you can't write it.",
    ],
    resources: [
      { title: "Building an Open Source Portfolio", url: "https://opensource.guide/how-to-contribute/#your-profile-readme", type: "article" },
    ],
  },
  {
    id: "review-submit",
    number: 8,
    title: "Get Feedback, Refine, and Submit Early",
    description: "Share a draft with your mentor 7-10 days before the deadline. Incorporate their feedback. Proofread. Submit 48 hours early - the portal crashes every year on deadline day.",
    details: [
      "Share a Google Doc or PDF draft with your mentor at least one week before the deadline. Ask three specific questions: 'Is the scope right? Is the timeline realistic? Am I missing any technical considerations?'",
      "Incorporate mentor feedback seriously. If they say the scope is too ambitious, cut features - don't argue. They've seen dozens of proposals and know what's achievable in 12 weeks.",
      "Do multiple revision cycles. A proposal that goes through 3 drafts is dramatically stronger than a first draft submitted at midnight.",
      "Read your proposal aloud. Awkward sentences, vague claims, and logical gaps become obvious when you hear them. If a sentence doesn't add value, delete it.",
      "Check every link. Broken links to your GitHub, PR references, or resources make you look careless.",
      "Submit 24-48 hours before the deadline. The GSoC submission portal consistently crashes under load in the final hours. Don't gamble your application on server uptime.",
      "After submitting, you can still edit until the deadline closes. Use this window to polish - but don't make major structural changes after your mentor reviewed the draft.",
      "Once submitted, wait. Don't message mentors asking 'will I be selected?' Results are announced on a specific date - check the GSoC timeline.",
    ],
    tips: [
      "Ask a friend (even non-technical) to read it. If they can't follow the structure or understand what you're building after reading the abstract, your proposal needs clarity work.",
      "Some orgs post their evaluation rubric or proposal template. If they do, follow it exactly. Deviating from a rubric means reviewers have to hunt for information instead of finding it where expected.",
    ],
    mistakes: [
      "Submitting 5 minutes before deadline. Every year, students lose their spot because the portal went down or their session expired. Don't be that student.",
      "Ignoring mentor feedback and submitting the original draft. If a mentor took time to review your proposal, not incorporating their input is a clear signal you won't listen during the program either.",
      "Assuming the mentor will privately tell you if you're selected. They won't - wait for the official results announcement.",
    ],
    resources: [
      { title: "GSoC Contributor Portal", url: "https://summerofcode.withgoogle.com", type: "tool" },
      { title: "GSoC Student Guide - Final Steps", url: "https://google.github.io/gsocguides/student/", type: "docs" },
    ],
  },
];

const COMMON_MISTAKES = [
  { title: "Zero contributions before applying", desc: "This alone accounts for most rejections. Mentors won't bet 12 weeks of their time on someone who hasn't proven they can write code in the project." },
  { title: "Vague deliverables", desc: "'Improve performance' is not testable. 'Reduce parse latency by 40% for inputs >1MB, measured with project benchmarks' is. If your mentor can't verify completion, it's not a deliverable." },
  { title: "Copy-pasting the Ideas List", desc: "The Ideas List describes the problem. Your proposal should describe your solution - in your own words, with your own technical analysis." },
  { title: "Fantasy timeline", desc: "12 weeks feels like a lot until you account for design review, code review cycles, testing, documentation, and the week you'll lose to a build system migration upstream." },
  { title: "All bio, no implementation", desc: "2 pages about yourself and 3 sentences about the technical approach is backwards. Mentors care about how you'll build it, not where you went to school." },
  { title: "Applying to 5+ orgs", desc: "Each additional proposal dilutes the others. Two strong, deeply researched proposals beat five superficial ones. Quality wins." },
  { title: "No testing plan", desc: "Every feature needs tests. If you don't describe how you'll verify your work, mentors assume you'll ship untested code." },
  { title: "Ignoring community bonding", desc: "The 3 weeks before coding are for design alignment, environment setup, and building rapport with your mentor. Treating them as vacation means you start Week 1 unprepared." },
];

const STORAGE_KEY = "gsoc-proposal-roadmap-completed";

const PROPOSAL_TEMPLATE = `# GSoC Proposal: [Project Title - be specific, not generic]

## Personal Information
- **Name:** [Full Name]
- **Email:** [your@email.com]
- **GitHub:** [github.com/yourusername]
- **University:** [University, Year, Degree Program]
- **Time Zone:** [e.g., UTC+5:30]
- **Prior contributions to [Org Name]:**
  - PR #123: [Short description - merged/under review]
  - Issue #456: [Comment/investigation you did]

---

## Abstract (150–200 words)
[
  Describe the problem clearly in 1–2 sentences.
  Summarize your proposed solution in 2–3 sentences.
  State the expected impact (who benefits, by how much).
  Keep it jargon-free enough for a non-expert to understand.
]

---

## Motivation & Background
[Why does this problem matter? What are users experiencing today?
Reference specific GitHub issues or community discussions.]

---

## Project Goals & Deliverables

### Primary Deliverables (must be complete by final evaluation)
- [ ] **Deliverable 1:** [Feature/fix with measurable success criteria]
- [ ] **Deliverable 2:** [...]
- [ ] **Deliverable 3:** [...]

### Stretch Goals (if time permits)
- [ ] **Stretch 1:** [...]

---

## Technical Implementation Plan

### Architecture Overview
[Describe your high-level approach. What design pattern will you use?
Which existing modules does this interact with?]

### Implementation Details

**Phase 1 - [Name] (Weeks 1–4)**
[Describe specific changes to specific files/functions]

**Phase 2 - [Name] (Weeks 5–8)**
[...]

**Phase 3 - Testing & Polish (Weeks 9–12)**
[Testing plan, documentation, code review iterations]

---

## Weekly Timeline

| Week | Dates | Deliverable / Milestone |
|------|-------|------------------------|
| Community Bonding | May 1–26 | Set up dev env, read codebase, finalize design with mentor |
| Week 1 | May 27 | [Specific task] |
| Week 2 | Jun 3  | [Specific task] |
| Week 3 | Jun 10 | [Specific task] |
| Week 4 | Jun 17 | [Specific task] |
| Week 5 | Jun 24 | [Specific task] |
| Week 6 | Jul 1  | [Specific task] |
| Midterm | Jul 14 | **Evaluation point - [what is complete]** |
| Week 7 | Jul 15 | [Specific task] |
| Week 8 | Jul 22 | [Specific task] |
| Week 9 | Jul 29 | [Specific task - buffer if needed] |
| Week 10 | Aug 5 | [Specific task] |
| Week 11 | Aug 12 | Testing, documentation, cleanup |
| Week 12 | Aug 19 | Final review, mentor sign-off |
| Final | Aug 25 | **Final evaluation - all deliverables complete** |

---

## Testing Plan
[How will you test each deliverable? Unit tests, integration tests,
benchmarks? Which testing framework does the project use?]

---

## Documentation Plan
[Which docs will you write/update? README, API docs, tutorials?]

---

## About Me

[2–3 paragraphs: who you are, your background, why open source matters
to you, and why this specific project excites you.]

### Technical Skills
| Skill | Level |
|-------|-------|
| [Language] | Expert / Intermediate / Beginner |
| [Framework] | ... |

### Relevant Experience
- [Past project / internship / research with brief description]
- [Relevant coursework]

### Why [Org Name] & This Project?
[Be specific - reference a conversation with a mentor, a bug you hit
using this software, or a feature you wish existed.]

---

## Availability
- **Weekly hours:** [30–40 hours]
- **Other commitments:** [e.g., exams in May, part-time job X hrs/wk]
- **Post-GSoC plans:** Continue contributing to [org], especially [area]`;

// ─── Copy Button ─────────────────────────────────────────────────
function CopyButton({ text, label = "Copy" }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={copy}
      className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
    >
      {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
      {copied ? "Copied!" : label}
    </button>
  );
}

// ─── Step Card ───────────────────────────────────────────────────
function StepCard({ step, completed, onToggle }: { step: Step; completed: boolean; onToggle: () => void }) {
  const [expanded, setExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState<"details" | "tips" | "mistakes" | "resources">("details");

  const tabs = [
    { id: "details" as const, label: "Details", icon: <BookOpen className="w-3 h-3" />, show: true },
    { id: "tips" as const, label: "Tips", icon: <Lightbulb className="w-3 h-3" />, show: step.tips.length > 0 },
    { id: "mistakes" as const, label: "Mistakes", icon: <AlertTriangle className="w-3 h-3" />, show: step.mistakes.length > 0 },
    { id: "resources" as const, label: "Resources", icon: <Link2 className="w-3 h-3" />, show: step.resources.length > 0 },
  ].filter((t) => t.show);

  return (
    <div className={`rounded-2xl border transition-all ${completed ? "bg-amber-50 border-amber-200 dark:bg-amber-900/10 dark:border-amber-800" : "bg-white dark:bg-gray-900 border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 hover:shadow-sm"}`}>
      {/* Header */}
      <div className="flex items-start gap-4 p-5">
        <button
          onClick={onToggle}
          className={`shrink-0 mt-0.5 transition-all ${completed ? "text-amber-500 scale-110" : "text-gray-300 dark:text-gray-600 hover:text-amber-400"}`}
        >
          {completed ? <CheckCircle2 className="w-6 h-6" /> : <Circle className="w-6 h-6" />}
        </button>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3">
            <div>
              <span className={`text-xs font-bold ${completed ? "text-amber-600 dark:text-amber-400" : "text-gray-400"}`}>Step {step.number}</span>
              <h3 className={`text-base font-bold leading-tight ${completed ? "text-amber-800 dark:text-amber-300 line-through decoration-amber-400" : "text-gray-900 dark:text-white"}`}>
                {step.title}
              </h3>
            </div>
            <button
              onClick={() => setExpanded(!expanded)}
              className="shrink-0 p-1.5 rounded-lg text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
            >
              {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
          <p className={`text-sm mt-1.5 leading-relaxed ${completed ? "text-amber-700 dark:text-amber-400" : "text-gray-500"}`}>
            {step.description}
          </p>
        </div>
      </div>

      {/* Expandable content */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden"
          >
            <div className="border-t border-gray-100 dark:border-gray-800 mx-5" />
            {/* Tabs */}
            <div className="flex gap-1 p-4 pb-0 flex-wrap">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    activeTab === tab.id ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900" : "text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="p-5 pt-4">
              {activeTab === "details" && (
                <ul className="space-y-2">
                  {step.details.map((d, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600 dark:text-gray-400">
                      <span className="w-5 h-5 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                      {d}
                    </li>
                  ))}
                </ul>
              )}

              {activeTab === "tips" && (
                <div className="space-y-3">
                  {step.tips.map((tip, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-800">
                      <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <p className="text-sm text-amber-900 dark:text-amber-300 leading-relaxed">{tip}</p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "mistakes" && (
                <div className="space-y-3">
                  {step.mistakes.map((m, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800">
                      <AlertTriangle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <p className="text-sm text-red-800 dark:text-red-300 leading-relaxed">{m}</p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "resources" && (
                <div className="space-y-2">
                  {step.resources.map((r, i) => (
                    <a
                      key={i}
                      href={r.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600 hover:bg-white dark:hover:bg-gray-700 no-underline group transition-all"
                    >
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">{r.title}</p>
                        <p className="text-xs text-gray-400 capitalize">{r.type}</p>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-gray-300 group-hover:text-amber-500 shrink-0" />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────
export default function GSoCProposalPage() {
  const [completed, setCompleted] = useState<Set<string>>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? new Set(JSON.parse(stored)) : new Set();
    } catch {
      return new Set();
    }
  });
  const [showTemplate, setShowTemplate] = useState(false);

  const saveCompleted = useCallback((next: Set<string>) => {
    setCompleted(next);
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify([...next])); } catch { /* ignore */ }
  }, []);

  const toggle = (id: string) => {
    const next = new Set(completed);
    next.has(id) ? next.delete(id) : next.add(id);
    saveCompleted(next);
  };

  const pct = Math.round((completed.size / STEPS.length) * 100);
  const allDone = completed.size === STEPS.length;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <Link to="/student/opensource" className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-6 no-underline transition-colors">
        <ArrowLeft className="w-4 h-4" />
        Open Source
      </Link>

      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-800 mb-8 p-8">
        <div className="absolute top-0 right-0 w-56 h-56 bg-orange-200/20 dark:bg-orange-900/10 rounded-bl-full pointer-events-none" />
        <div className="relative">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-red-500 flex items-center justify-center shadow-lg">
              <Award className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">How to Write a Winning GSoC Proposal</h1>
              <p className="text-sm text-red-600 dark:text-red-400">The 8 things that separate accepted applicants from rejected ones</p>
            </div>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 max-w-2xl mb-5 leading-relaxed">
            Every year, ~7,000 students apply to GSoC. Around 1,200 get selected. The difference isn't coding ability - it's proposal quality, prior contributions, and mentor engagement. This guide covers what actually matters, based on patterns from accepted and rejected proposals.
          </p>

          {/* Key stats */}
          <div className="flex flex-wrap gap-3 mb-5">
            {[
              { icon: <Users className="w-3.5 h-3.5" />, label: "~7,000 applicants/year" },
              { icon: <Trophy className="w-3.5 h-3.5" />, label: "~1,200 selected (~17%)" },
              { icon: <Calendar className="w-3.5 h-3.5" />, label: "Apps open: Jan–Mar" },
              { icon: <Award className="w-3.5 h-3.5" />, label: "$1,500 – $6,600 stipend" },
            ].map((s) => (
              <span key={s.label} className="flex items-center gap-1.5 px-3 py-1.5 bg-white/70 dark:bg-gray-800/50 rounded-xl border border-red-100 dark:border-red-800 text-xs text-gray-700 dark:text-gray-300">
                <span className="text-red-500">{s.icon}</span>
                {s.label}
              </span>
            ))}
          </div>

          {/* Progress */}
          <div className="flex items-center gap-4">
            <div className="flex-1 max-w-md">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-medium text-gray-600 dark:text-gray-400">{completed.size} of {STEPS.length} steps reviewed</span>
                <span className="text-sm font-bold text-red-600 dark:text-red-400">{pct}%</span>
              </div>
              <div className="h-2 bg-white/60 dark:bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-red-400 dark:bg-red-500 rounded-full"
                  animate={{ width: `${pct}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>
            {completed.size > 0 && (
              <button onClick={() => saveCompleted(new Set())} className="text-xs text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
                Reset
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Completion banner */}
      <AnimatePresence>
        {allDone && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="mb-6 p-5 rounded-2xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 flex items-center gap-4"
          >
            <Trophy className="w-8 h-8 text-amber-500 shrink-0" />
            <div>
              <p className="text-base font-bold text-amber-900 dark:text-amber-300">You've reviewed the complete guide!</p>
              <p className="text-sm text-amber-700 dark:text-amber-400 mt-0.5">Grab the proposal template below, start writing, and share a draft with your mentor at least 7 days before the deadline.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Steps */}
      <div className="space-y-3 mb-12">
        {STEPS.map((step) => (
          <StepCard
            key={step.id}
            step={step}
            completed={completed.has(step.id)}
            onToggle={() => toggle(step.id)}
          />
        ))}
      </div>

      {/* Common Mistakes Summary */}
      <section className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <AlertTriangle className="w-5 h-5 text-red-500" />
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">8 Most Common Rejection Reasons</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-3">
          {COMMON_MISTAKES.map((m, i) => (
            <div key={i} className="flex items-start gap-3 p-4 bg-red-50 dark:bg-red-900/20 rounded-xl border border-red-100 dark:border-red-800">
              <span className="w-5 h-5 rounded-full bg-red-200 dark:bg-red-800 text-red-800 dark:text-red-300 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
              <div>
                <p className="text-sm font-semibold text-red-900 dark:text-red-300">{m.title}</p>
                <p className="text-xs text-red-700 dark:text-red-400 mt-0.5 leading-relaxed">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Proposal Template */}
      <section className="mb-10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">Proposal Template</h2>
          </div>
          <div className="flex gap-2">
            <CopyButton text={PROPOSAL_TEMPLATE} label="Copy Template" />
            <button
              onClick={() => setShowTemplate(!showTemplate)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors border border-gray-200 dark:border-gray-700"
            >
              {showTemplate ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              {showTemplate ? "Hide" : "Preview"}
            </button>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-800 mb-3">
          <p className="text-sm text-amber-800 dark:text-amber-300 leading-relaxed">
            <strong>How to use:</strong> Copy this template, paste it into Google Docs or your org's submission format, and fill in every section. Share the draft with your mentor before submitting. Replace every <code className="bg-amber-200 dark:bg-amber-800 px-1 rounded text-xs">[placeholder]</code> with your specific details.
          </p>
        </div>

        <AnimatePresence>
          {showTemplate && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="relative bg-gray-950 rounded-2xl overflow-hidden">
                <div className="flex items-center justify-between px-4 py-2.5 border-b border-gray-800">
                  <span className="text-xs text-gray-400 font-mono">gsoc-proposal-template.md</span>
                  <CopyButton text={PROPOSAL_TEMPLATE} />
                </div>
                <pre className="p-5 text-xs text-gray-300 font-mono leading-relaxed overflow-x-auto whitespace-pre-wrap">
                  {PROPOSAL_TEMPLATE}
                </pre>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Key Resources */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <BookOpen className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">Essential Resources</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              title: "Official GSoC Resources",
              color: "bg-red-50 dark:bg-red-900/10 border-red-100 dark:border-red-800",
              header: "text-red-800 dark:text-red-300",
              items: [
                { label: "GSoC Student Guide", url: "https://google.github.io/gsocguides/student/", desc: "Official proposal & timeline guide" },
                { label: "GSoC FAQ", url: "https://developers.google.com/open-source/gsoc/faq", desc: "Official program FAQ" },
                { label: "GSoC Archive", url: "https://summerofcode.withgoogle.com/archive", desc: "Browse past accepted proposals" },
                { label: "GSoC Timeline", url: "https://developers.google.com/open-source/gsoc/timeline", desc: "Official dates each year" },
              ],
            },
            {
              title: "Accepted Proposal Examples",
              color: "bg-amber-50 dark:bg-amber-900/10 border-amber-100 dark:border-amber-800",
              header: "text-amber-800 dark:text-amber-300",
              items: [
                { label: "Sample GSoC Proposals (GitHub)", url: "https://github.com/skalnik/gsoc-proposal-examples", desc: "Real accepted proposals" },
                { label: "Sympy Proposal Template", url: "https://github.com/sympy/sympy/wiki/GSoC-2023-Application-Template", desc: "Well-structured template" },
                { label: "GNOME Application Guide", url: "https://wiki.gnome.org/Outreach/SummerOfCode/Students", desc: "GNOME's proposal tips" },
                { label: "Wikimedia GSoC Guide", url: "https://www.mediawiki.org/wiki/Google_Summer_of_Code/Participants", desc: "Wikimedia's student guide" },
              ],
            },
            {
              title: "Community & Advice",
              color: "bg-orange-50 dark:bg-orange-900/10 border-orange-100 dark:border-orange-800",
              header: "text-orange-800 dark:text-orange-300",
              items: [
                { label: "Reddit r/gsoc", url: "https://reddit.com/r/gsoc", desc: "Student Q&A and experiences" },
                { label: "Dev.to GSoC tag", url: "https://dev.to/t/gsoc", desc: "Student blogs and tips" },
                { label: "GSoC Slack Community", url: "https://gsoc-slack.herokuapp.com", desc: "Connect with past participants" },
                { label: "OpenEMR GSoC Tips", url: "https://www.openemr.org/blog/getting-started-gsoc", desc: "Practical org-specific advice" },
              ],
            },
          ].map((cat) => (
            <div key={cat.title} className={`rounded-2xl border p-5 ${cat.color}`}>
              <h3 className={`text-sm font-bold mb-4 ${cat.header}`}>{cat.title}</h3>
              <div className="space-y-3">
                {cat.items.map((item) => (
                  <a
                    key={item.label}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-2 group no-underline"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-gray-900 dark:text-gray-200 group-hover:underline leading-tight">{item.label}</p>
                      <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5">{item.desc}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom tip */}
      <div className="mt-8 p-5 rounded-2xl bg-amber-50 dark:bg-amber-900/10 border border-amber-100 dark:border-amber-800">
        <div className="flex items-start gap-3">
          <Trophy className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-amber-900 dark:text-amber-300">The single most important thing you can do right now</p>
            <p className="text-xs text-amber-700 dark:text-amber-400 mt-1 leading-relaxed">
              Find one GSoC org whose codebase interests you, clone their repo, get it running locally, and submit one small pull request. Not next month - this week. That single merged PR is worth more than any amount of proposal polish. Mentors choose contributors they've seen ship code, not strangers with good writing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
