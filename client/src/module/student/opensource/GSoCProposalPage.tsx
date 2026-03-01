import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2, Circle, ArrowLeft, Award, ChevronDown, ChevronUp,
  Copy, Check, ExternalLink, BookOpen, Terminal, Lightbulb, Link2,
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
    title: "Choose the Right Project & Organization",
    description: "The project you choose is the single biggest factor in your GSoC success. Pick something you genuinely care about and can realistically complete in 12 weeks.",
    details: [
      "Browse the list of accepted organizations at summerofcode.withgoogle.com (published Dec–Jan each year).",
      "Read each org's 'Ideas List' — these are mentor-approved project ideas they want built.",
      "Match the project's required skills with your actual skill level, not your aspirational level.",
      "Prefer orgs that have participated in multiple past GSoC years — they have experienced mentors.",
      "Check the org's GitHub: an active repo (recent commits, quick PR reviews) means responsive mentors.",
      "You can propose your own idea outside the Ideas List — this requires even stronger mentor buy-in, so contact them early.",
      "Apply to 2–3 orgs max to write strong, focused proposals (not 10 rushed ones).",
    ],
    tips: [
      "Pick a project that solves a problem you've actually encountered — your motivation will shine through in the proposal.",
      "Check last year's selected projects on the GSoC archive. Orgs often run similar projects again.",
      "Avoid the most popular projects (Linux kernel, large AI orgs) for your first GSoC — competition is brutal.",
    ],
    mistakes: [
      "Applying to projects that require skills you don't have yet.",
      "Choosing a project only because of the stipend, with no genuine interest.",
      "Applying to 10+ orgs with generic, copy-pasted proposals.",
    ],
    resources: [
      { title: "GSoC Organization List", url: "https://summerofcode.withgoogle.com/programs/2024/organizations", type: "tool" },
      { title: "GSoC Archive (past accepted projects)", url: "https://summerofcode.withgoogle.com/archive", type: "tool" },
      { title: "How to Choose a GSoC Project (OpenEMR blog)", url: "https://www.openemr.org/blog/getting-started-gsoc", type: "article" },
    ],
  },
  {
    id: "pre-contributions",
    number: 2,
    title: "Make Pre-Application Contributions",
    description: "The single most impactful thing you can do before writing your proposal is to submit a merged pull request to the organization. It proves you can contribute — and gets you noticed by mentors.",
    details: [
      "Start contributing to the org's GitHub at least 4–8 weeks before the application deadline.",
      "Fix a bug, improve documentation, add a test, or resolve a 'good first issue'.",
      "Small, clean, merged PRs are more valuable than large unmerged ones.",
      "Getting even one commit merged by a mentor before submitting is a major competitive advantage.",
      "Reference your merged PRs in your proposal — concrete evidence beats claims.",
      "If your PR isn't merged yet, it's still worth including — show the draft and say it's under review.",
      "Even a thoughtful, well-researched comment on a complex issue demonstrates your understanding.",
    ],
    tips: [
      "Don't wait until March to contribute. Mentors notice contributors who've been active since December/January.",
      "Focus on the specific sub-module your proposal will improve — show you understand the code you'll change.",
      "Open a draft PR, ask for early feedback, and iterate — this is how real contributors work.",
    ],
    mistakes: [
      "Submitting a proposal with zero prior contributions to the org.",
      "Opening trivial PRs (only fixing typos) without any code contributions.",
      "Making contributions to a different org than the one you're applying to.",
    ],
    resources: [
      { title: "Good First Issues Finder", url: "https://goodfirstissue.dev", type: "tool" },
      { title: "GSoC Student Guide — Getting Started", url: "https://google.github.io/gsocguides/student/", type: "docs" },
    ],
  },
  {
    id: "contact-mentors",
    number: 3,
    title: "Contact Mentors Early & Ask Smart Questions",
    description: "Most accepted GSoC students have talked with their mentor before submitting. Introduce yourself on the project's communication channel and ask one specific, well-researched question.",
    details: [
      "Find the org's communication channel: most use IRC, Slack, Discord, or a mailing list.",
      "Read at least 2 weeks of message history before asking anything.",
      "Introduce yourself briefly: name, university, skills, and which project idea interests you.",
      "Ask one specific technical question that shows you've already looked at the code.",
      "Bad question: 'How do I get started?' — Good question: 'I'm looking at issue #456 in the parser module. I noticed the null check is missing in parseUser() — would a guard clause or a try/catch be the preferred approach here?'",
      "Attend any office hours or video calls the org runs for prospective GSoC students.",
      "Keep in touch throughout the application period — not just once, but not spam either.",
    ],
    tips: [
      "Mentors are volunteers. Be concise, professional, and respect their time.",
      "If a mentor responds enthusiastically to your question, that's a green light — they want you to apply.",
      "Ask if you can share a draft proposal with the mentor before the final deadline.",
    ],
    mistakes: [
      "Sending a private DM to a mentor before introducing yourself publicly.",
      "Asking 'Can you explain the entire codebase to me?' — do your own research first.",
      "Going silent after one exchange and only reappearing at submission time.",
    ],
    resources: [
      { title: "GSoC Guides — Contacting Mentors", url: "https://google.github.io/gsocguides/student/making-first-contact", type: "docs" },
      { title: "How to Ask Smart Questions (ESR)", url: "http://www.catb.org/esr/faqs/smart-questions.html", type: "article" },
    ],
  },
  {
    id: "research-codebase",
    number: 4,
    title: "Research the Codebase & Past GSoC Projects",
    description: "Before writing a word of your proposal, spend time in the codebase understanding the current architecture, existing limitations, and how your project fits into the bigger picture.",
    details: [
      "Clone the repo and get it running locally — if you can't build it, you can't contribute.",
      "Read the existing code in the area your project touches. Understand the data flow.",
      "Read past GSoC project reports for this org on the GSoC archive — see what worked and what was incomplete.",
      "Read open issues and recent PRs to understand current pain points and ongoing discussions.",
      "Identify the specific files and functions your changes will modify — name them in your proposal.",
      "Understand the testing framework — your proposal should include a testing plan.",
      "Ask yourself: 'What are the 3 hardest technical challenges in this project?' — address each in your proposal.",
    ],
    tips: [
      "Use tools like sourcegraph.com or GitHub's code search to navigate large codebases quickly.",
      "Read the architectural decision records (ADR) or design docs if the org has them — they explain why the code is structured the way it is.",
    ],
    mistakes: [
      "Writing a proposal without ever running the project locally.",
      "Proposing an approach that conflicts with the existing architecture (without justification).",
      "Ignoring past GSoC projects — you may unknowingly propose something that was already tried and abandoned.",
    ],
    resources: [
      { title: "GSoC Archive — past project reports", url: "https://summerofcode.withgoogle.com/archive", type: "tool" },
      { title: "Sourcegraph — code search", url: "https://sourcegraph.com", type: "tool" },
    ],
  },
  {
    id: "structure-proposal",
    number: 5,
    title: "Structure Your Proposal Correctly",
    description: "A winning GSoC proposal has a clear structure: abstract, deliverables, implementation plan, weekly timeline, and an 'about me' section. Never skip any of these.",
    details: [
      "Title: Specific and descriptive — not 'Improve XYZ' but 'Add async support to XYZ HTTP client for 3× throughput improvement'.",
      "Abstract (150–200 words): Problem statement → your solution → expected impact. No fluff.",
      "Project Goals: 3–5 concrete, testable deliverables. Split into Primary (must-have) and Stretch (nice-to-have).",
      "Implementation Plan: Describe your technical approach in detail. Mention specific files, APIs, and algorithms.",
      "Weekly Timeline: Every single week from community bonding through final evaluation, with specific milestones.",
      "About Me: University, graduation year, relevant courses, past projects, GitHub profile, and all prior contributions to this org.",
      "Why This Org & Project: Be specific about why you're the right person for this exact project.",
      "Availability: Hours per week, any exams or commitments during the coding period.",
    ],
    tips: [
      "Show your proposal to a senior student or mentor before submitting for feedback.",
      "Use formatting (headers, bullets, tables) — dense walls of text get skimmed, not read.",
      "The Implementation Plan is where most proposals fail. Be specific, not vague.",
    ],
    mistakes: [
      "Writing a 10-page proposal with only 2 sentences about the actual implementation.",
      "Listing deliverables like 'Improve performance' without specific, measurable targets.",
      "Copying the org's project idea description verbatim — show your own thinking.",
    ],
    resources: [
      { title: "GSoC Student Guide — Writing a Proposal", url: "https://google.github.io/gsocguides/student/writing-a-proposal", type: "docs" },
      { title: "GSoC Proposal Tips (Kushal Das, Python)", url: "https://kushaldas.in/posts/the-google-summer-of-code-tips.html", type: "article" },
      { title: "Sample Accepted GSoC Proposals (GitHub)", url: "https://github.com/skalnik/gsoc-proposal-examples", type: "example" },
    ],
  },
  {
    id: "write-timeline",
    number: 6,
    title: "Write a Realistic Weekly Timeline",
    description: "Mentors read your timeline to assess whether you understand the project's complexity. A vague timeline signals inexperience. A detailed, realistic one signals credibility.",
    details: [
      "Community Bonding (3 weeks before coding): Set up dev environment, finalize design with mentor, read remaining codebase.",
      "Break the 12 coding weeks into named milestones, not just 'Week 1: start coding'.",
      "Align milestones to the midterm and final evaluations — show what's done at each checkpoint.",
      "Include at least 1 buffer week for unexpected complexity or review delays.",
      "Each week entry should answer: 'What specific code/feature/test will exist by end of this week?'",
      "Don't plan 40+ hours/week if you have exams in June — be honest, mentors respect realistic schedules.",
      "Include time for writing documentation and tests — not just feature code.",
    ],
    tips: [
      "Table format works well for timelines: Week | Deliverable | Notes.",
      "Over-estimate time for tasks involving understanding legacy code — it always takes longer.",
      "Mention when you'll share progress updates with your mentor (weekly sync calls, blog posts, etc.).",
    ],
    mistakes: [
      "A 12-week timeline with 4 total bullet points.",
      "Planning all major work in the last 3 weeks.",
      "Not aligning deliverables with the midterm evaluation — mentors need to evaluate something concrete.",
    ],
    resources: [
      { title: "GSoC Timeline & Evaluation Schedule", url: "https://developers.google.com/open-source/gsoc/timeline", type: "docs" },
      { title: "Example GSoC Timeline (Sympy wiki)", url: "https://github.com/sympy/sympy/wiki/GSoC-2023-Application-Template", type: "example" },
    ],
  },
  {
    id: "demonstrate-ability",
    number: 7,
    title: "Demonstrate Your Technical Ability",
    description: "The proposal must convince mentors that you can actually build what you're proposing. Use evidence, not promises.",
    details: [
      "Link every merged PR you've made to this org — make it easy for mentors to verify.",
      "If you built something relevant (a side project, a class project), link to the GitHub repo and briefly describe it.",
      "Include a short code snippet if it illustrates your approach to a technical challenge in the proposal.",
      "Describe your understanding of the technical problem — don't just say 'I will fix X', explain how and why your approach works.",
      "If you've read and understood a complex part of the codebase, mention it specifically: 'After studying the parser in src/lang/parser.py, I propose...'",
      "List languages, frameworks, and tools relevant to the project with honest self-assessment (Expert / Intermediate / Beginner).",
    ],
    tips: [
      "A single merged PR in the org's repo is worth 10 lines of 'I'm passionate about open source' in your proposal.",
      "If you've done relevant research (benchmarking alternatives, reading academic papers), mention it — it shows depth.",
    ],
    mistakes: [
      "Listing technologies on your resume without any evidence you've used them.",
      "Saying 'I learn fast' as a substitute for actual experience.",
      "Not linking to your GitHub or any code samples.",
    ],
    resources: [
      { title: "How to Build a Portfolio for GSoC", url: "https://opensource.guide/how-to-contribute/#your-profile-readme", type: "article" },
    ],
  },
  {
    id: "review-submit",
    number: 8,
    title: "Get Mentor Feedback & Submit Before the Deadline",
    description: "Share a draft of your proposal with your mentor at least 7–10 days before the deadline. Incorporate their feedback, proofread carefully, and submit early.",
    details: [
      "Share a Google Doc or PDF draft with your mentor and ask for specific feedback.",
      "Ask: 'Is my timeline realistic? Are there technical details I've missed? Is the scope appropriate?'",
      "Revise based on mentor feedback — multiple revision cycles are normal.",
      "Read your proposal aloud — awkward phrasing becomes obvious this way.",
      "Check every link you've included is working.",
      "Submit 24–48 hours early — the GSoC portal gets heavy traffic near the deadline.",
      "After submitting, you can still edit until the deadline closes — keep refining.",
      "Don't spam mentors asking if you'll be selected. Wait for the results announcement.",
    ],
    tips: [
      "Peer review: ask a friend (even non-technical) to read it. If they can't follow the structure, something is wrong.",
      "Some orgs post proposal templates or evaluation criteria — follow them exactly.",
    ],
    mistakes: [
      "Submitting 5 minutes before the deadline — technical issues can cost you the spot.",
      "Not incorporating mentor feedback and submitting the original draft.",
      "Assuming the mentor will privately tell you if you're selected — wait for official results.",
    ],
    resources: [
      { title: "GSoC Contributor Application Portal", url: "https://summerofcode.withgoogle.com", type: "tool" },
      { title: "GSoC Student Guide — Final Steps", url: "https://google.github.io/gsocguides/student/", type: "docs" },
    ],
  },
];

const COMMON_MISTAKES = [
  { title: "Zero contributions before applying", desc: "The most common reason for rejection. Mentors can't evaluate you without seeing your code." },
  { title: "Vague deliverables", desc: "'Improve performance' is not a deliverable. 'Reduce parse time by 30% for inputs >1MB, measured via benchmarks' is." },
  { title: "Copy-pasting the project idea verbatim", desc: "Proposals that mirror the Ideas List word-for-word show no original thinking. Restate the problem in your own words." },
  { title: "Unrealistic timeline", desc: "12 weeks of coding sounds like a lot — it isn't. Each feature needs design, coding, testing, review, and documentation." },
  { title: "Weak 'About Me' section", desc: "Generic statements like 'I am passionate about open source' don't help. Link concrete projects, courses, and contributions." },
  { title: "Applying to too many orgs", desc: "8 rushed proposals beat 1 strong one? No. 2 strong proposals beat 8 weak ones every time." },
  { title: "No testing plan", desc: "Every feature needs tests. If you don't mention how you'll test your work, mentors assume you won't." },
  { title: "Ignoring community bonding period", desc: "The 3 weeks before coding starts are for design review, setup, and aligning with mentors — don't treat them as vacation." },
];

const TYPE_ICONS: Record<Resource["type"], string> = {
  article: "📄", tool: "🔧", video: "🎬", docs: "📚", example: "💡",
};

const STORAGE_KEY = "gsoc-proposal-roadmap-completed";

const PROPOSAL_TEMPLATE = `# GSoC Proposal: [Project Title — be specific]

## Personal Information
- **Name:** [Full Name]
- **Email:** [your@email.com]
- **GitHub:** [github.com/yourusername]
- **University:** [University, Year, Degree Program]
- **Time Zone:** [e.g., UTC+5:30]
- **Prior contributions to [Org Name]:**
  - PR #123: [Short description — merged/under review]
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

**Phase 1 — [Name] (Weeks 1–4)**
[Describe specific changes to specific files/functions]

**Phase 2 — [Name] (Weeks 5–8)**
[...]

**Phase 3 — Testing & Polish (Weeks 9–12)**
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
| Midterm | Jul 14 | **Evaluation point — [what is complete]** |
| Week 7 | Jul 15 | [Specific task] |
| Week 8 | Jul 22 | [Specific task] |
| Week 9 | Jul 29 | [Specific task — buffer if needed] |
| Week 10 | Aug 5 | [Specific task] |
| Week 11 | Aug 12 | Testing, documentation, cleanup |
| Week 12 | Aug 19 | Final review, mentor sign-off |
| Final | Aug 25 | **Final evaluation — all deliverables complete** |

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
[Be specific — reference a conversation with a mentor, a bug you hit
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
    <div className={`rounded-2xl border transition-all ${completed ? "bg-amber-50 border-amber-200" : "bg-white border-gray-100 hover:border-gray-200 hover:shadow-sm"}`}>
      {/* Header */}
      <div className="flex items-start gap-4 p-5">
        <button
          onClick={onToggle}
          className={`shrink-0 mt-0.5 transition-all ${completed ? "text-amber-500 scale-110" : "text-gray-300 hover:text-amber-400"}`}
        >
          {completed ? <CheckCircle2 className="w-6 h-6" /> : <Circle className="w-6 h-6" />}
        </button>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3">
            <div>
              <span className={`text-xs font-bold ${completed ? "text-amber-600" : "text-gray-400"}`}>Step {step.number}</span>
              <h3 className={`text-base font-bold leading-tight ${completed ? "text-amber-800 line-through decoration-amber-400" : "text-gray-900"}`}>
                {step.title}
              </h3>
            </div>
            <button
              onClick={() => setExpanded(!expanded)}
              className="shrink-0 p-1.5 rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition-colors"
            >
              {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
          <p className={`text-sm mt-1.5 leading-relaxed ${completed ? "text-amber-700" : "text-gray-500"}`}>
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
            <div className="border-t border-gray-100 mx-5" />
            {/* Tabs */}
            <div className="flex gap-1 p-4 pb-0 flex-wrap">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    activeTab === tab.id ? "bg-gray-900 text-white" : "text-gray-500 hover:bg-gray-100"
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
                    <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-700 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                      {d}
                    </li>
                  ))}
                </ul>
              )}

              {activeTab === "tips" && (
                <div className="space-y-3">
                  {step.tips.map((tip, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-amber-50 border border-amber-100">
                      <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <p className="text-sm text-amber-900 leading-relaxed">{tip}</p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "mistakes" && (
                <div className="space-y-3">
                  {step.mistakes.map((m, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-red-50 border border-red-100">
                      <AlertTriangle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <p className="text-sm text-red-800 leading-relaxed">{m}</p>
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
                      className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100 hover:border-gray-200 hover:bg-white no-underline group transition-all"
                    >
                      <span className="text-lg">{TYPE_ICONS[r.type]}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-gray-900 group-hover:text-amber-700 transition-colors">{r.title}</p>
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
      <Link to="/student/opensource" className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 mb-6 no-underline transition-colors">
        <ArrowLeft className="w-4 h-4" />
        Open Source
      </Link>

      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-50 via-orange-50 to-amber-50 border border-red-100 mb-8 p-8">
        <div className="absolute top-0 right-0 w-56 h-56 bg-gradient-to-bl from-orange-200/30 to-transparent rounded-bl-full pointer-events-none" />
        <div className="relative">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-red-500 flex items-center justify-center shadow-lg">
              <Award className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">How to Write a GSoC Proposal</h1>
              <p className="text-sm text-red-600">8-step guide to writing a winning Google Summer of Code proposal</p>
            </div>
          </div>
          <p className="text-sm text-gray-600 max-w-2xl mb-5 leading-relaxed">
            Thousands of students apply to GSoC each year. The ones who get selected aren't always the best coders — they write the clearest proposals with the most evidence of their ability. This guide covers every step, with common mistakes to avoid.
          </p>

          {/* Key stats */}
          <div className="flex flex-wrap gap-3 mb-5">
            {[
              { icon: <Users className="w-3.5 h-3.5" />, label: "~7,000 applicants/year" },
              { icon: <Trophy className="w-3.5 h-3.5" />, label: "~1,200 selected" },
              { icon: <Calendar className="w-3.5 h-3.5" />, label: "Application: Jan–Mar" },
              { icon: <Award className="w-3.5 h-3.5" />, label: "$1,500 – $6,600 stipend" },
            ].map((s) => (
              <span key={s.label} className="flex items-center gap-1.5 px-3 py-1.5 bg-white/70 rounded-xl border border-red-100 text-xs text-gray-700">
                <span className="text-red-500">{s.icon}</span>
                {s.label}
              </span>
            ))}
          </div>

          {/* Progress */}
          <div className="flex items-center gap-4">
            <div className="flex-1 max-w-md">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-medium text-gray-600">{completed.size} of {STEPS.length} steps reviewed</span>
                <span className="text-sm font-bold text-red-600">{pct}%</span>
              </div>
              <div className="h-2 bg-white/60 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-red-400 to-orange-500 rounded-full"
                  animate={{ width: `${pct}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>
            {completed.size > 0 && (
              <button onClick={() => saveCompleted(new Set())} className="text-xs text-gray-400 hover:text-gray-700 transition-colors">
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
            className="mb-6 p-5 rounded-2xl bg-amber-50 border border-amber-200 flex items-center gap-4"
          >
            <Trophy className="w-8 h-8 text-amber-500 shrink-0" />
            <div>
              <p className="text-base font-bold text-amber-900">You're ready to write your proposal!</p>
              <p className="text-sm text-amber-700 mt-0.5">Scroll down to use the proposal template. Share a draft with your mentor at least 7 days before the deadline.</p>
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
          <h2 className="text-lg font-bold text-gray-900">8 Most Common Rejection Reasons</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-3">
          {COMMON_MISTAKES.map((m, i) => (
            <div key={i} className="flex items-start gap-3 p-4 bg-red-50 rounded-xl border border-red-100">
              <span className="w-5 h-5 rounded-full bg-red-200 text-red-800 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
              <div>
                <p className="text-sm font-semibold text-red-900">{m.title}</p>
                <p className="text-xs text-red-700 mt-0.5 leading-relaxed">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Proposal Template */}
      <section className="mb-10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-gray-600" />
            <h2 className="text-lg font-bold text-gray-900">Proposal Template</h2>
          </div>
          <div className="flex gap-2">
            <CopyButton text={PROPOSAL_TEMPLATE} label="Copy Template" />
            <button
              onClick={() => setShowTemplate(!showTemplate)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-600 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors border border-gray-200"
            >
              {showTemplate ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              {showTemplate ? "Hide" : "Preview"}
            </button>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-amber-50 border border-amber-100 mb-3">
          <p className="text-sm text-amber-800 leading-relaxed">
            <strong>How to use:</strong> Copy this template, paste it into Google Docs or your org's submission format, and fill in every section. Share the draft with your mentor before submitting. Replace every <code className="bg-amber-200 px-1 rounded text-xs">[placeholder]</code> with your specific details.
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
          <BookOpen className="w-5 h-5 text-gray-600" />
          <h2 className="text-lg font-bold text-gray-900">Essential Resources</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              title: "Official GSoC Resources",
              color: "bg-red-50 border-red-100",
              header: "text-red-800",
              items: [
                { label: "GSoC Student Guide", url: "https://google.github.io/gsocguides/student/", desc: "Official proposal & timeline guide" },
                { label: "GSoC FAQ", url: "https://developers.google.com/open-source/gsoc/faq", desc: "Official program FAQ" },
                { label: "GSoC Archive", url: "https://summerofcode.withgoogle.com/archive", desc: "Browse past accepted proposals" },
                { label: "GSoC Timeline", url: "https://developers.google.com/open-source/gsoc/timeline", desc: "Official dates each year" },
              ],
            },
            {
              title: "Accepted Proposal Examples",
              color: "bg-amber-50 border-amber-100",
              header: "text-amber-800",
              items: [
                { label: "Sample GSoC Proposals (GitHub)", url: "https://github.com/skalnik/gsoc-proposal-examples", desc: "Real accepted proposals" },
                { label: "Sympy Proposal Template", url: "https://github.com/sympy/sympy/wiki/GSoC-2023-Application-Template", desc: "Well-structured template" },
                { label: "GNOME Application Guide", url: "https://wiki.gnome.org/Outreach/SummerOfCode/Students", desc: "GNOME's proposal tips" },
                { label: "Wikimedia GSoC Guide", url: "https://www.mediawiki.org/wiki/Google_Summer_of_Code/Participants", desc: "Wikimedia's student guide" },
              ],
            },
            {
              title: "Community & Advice",
              color: "bg-orange-50 border-orange-100",
              header: "text-orange-800",
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
                    <ExternalLink className="w-3.5 h-3.5 text-gray-400 group-hover:text-gray-700 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-gray-900 group-hover:underline leading-tight">{item.label}</p>
                      <p className="text-[11px] text-gray-500 mt-0.5">{item.desc}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom tip */}
      <div className="mt-8 p-5 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-100">
        <div className="flex items-start gap-3">
          <Trophy className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-amber-900">The #1 thing you can do right now</p>
            <p className="text-xs text-amber-700 mt-1 leading-relaxed">
              Find one GSoC org whose codebase interests you, clone their repo, get it running locally, and submit one small pull request. Not next month — this week. That single merged PR is worth more than any amount of proposal polish.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
