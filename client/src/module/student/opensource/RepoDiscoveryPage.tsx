import { useState, useMemo } from "react";
import { Link, useNavigate } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Star,
  GitFork,
  CircleDot,
  ExternalLink,
  X,
  ChevronDown,
  TrendingUp,
  Filter,
  Code2,
  Sparkles,
  Globe,
  Flame,
  ArrowUpRight,
  BookOpen,
  Trophy,
  GraduationCap,
  GitPullRequest,
  MessagesSquare,
  CheckCircle2,
  Clock,
  DollarSign,
  ChevronRight,
  Users,
  ArrowRight,
  Award,
} from "lucide-react";
import {
  reposData,
  REPO_DOMAINS,
  DIFFICULTY_OPTIONS,
  SORT_OPTIONS,
  LANGUAGE_COLORS,
} from "./reposData";
import type { OpenSourceRepo } from "./reposData";

// ─── Helpers ────────────────────────────────────────────────────
function formatCount(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(1).replace(/\.0$/, "")}k`;
  return String(n);
}

function difficultyBadge(d: OpenSourceRepo["difficulty"]) {
  const map = {
    BEGINNER: { label: "Beginner", cls: "bg-emerald-50 text-emerald-700 ring-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-400 dark:ring-emerald-700" },
    INTERMEDIATE: { label: "Intermediate", cls: "bg-amber-50 text-amber-700 ring-amber-200 dark:bg-amber-900/30 dark:text-amber-400 dark:ring-amber-700" },
    ADVANCED: { label: "Advanced", cls: "bg-rose-50 text-rose-700 ring-rose-200 dark:bg-rose-900/30 dark:text-rose-400 dark:ring-rose-700" },
  };
  return map[d];
}

// ─── Guidance Section Data ──────────────────────────────────────
const GUIDANCE_SECTIONS = [
  {
    id: "guidance",
    icon: <BookOpen className="w-5 h-5" />,
    title: "Open Source Guidance",
    subtitle: "Step-by-step contribution workflows",
    gradient: "from-purple-500 to-violet-600",
    lightBg: "bg-purple-50",
    lightText: "text-purple-700",
    ring: "ring-purple-200",
    content: {
      type: "steps" as const,
      description: "Learn every stage of contributing to open-source projects — from understanding the codebase to getting your PR merged.",
      items: [
        { step: "01", title: "Fork the Repository", desc: "Click 'Fork' on GitHub to create your personal copy of the project under your account." },
        { step: "02", title: "Clone Locally", desc: "Run git clone <your-fork-url> to download the repo to your machine and set upstream remote." },
        { step: "03", title: "Create a Branch", desc: "Always branch off main — use git checkout -b feat/your-change. Never commit directly to main." },
        { step: "04", title: "Make Your Changes", desc: "Read CONTRIBUTING.md first. Follow code style, write tests if needed, and keep changes focused." },
        { step: "05", title: "Commit & Push", desc: "Write a clear commit message (e.g. 'fix: handle null input in parser') and push your branch." },
        { step: "06", title: "Open a Pull Request", desc: "Describe what you changed and why. Reference the issue number (Fixes #123). Be responsive to review." },
        { step: "07", title: "Address Review Feedback", desc: "Maintainers may request changes. Update your branch — the PR auto-updates. Stay patient and polite." },
        { step: "08", title: "Get Merged 🎉", desc: "Once approved your PR is merged. Congratulations — you're an open-source contributor!" },
      ],
    },
  },
  {
    id: "gsoc",
    icon: <Trophy className="w-5 h-5" />,
    title: "GSoC Selected Repos",
    subtitle: "Repositories accepted into Google Summer of Code",
    gradient: "from-amber-500 to-orange-500",
    lightBg: "bg-amber-50",
    lightText: "text-amber-700",
    ring: "ring-amber-200",
    content: {
      type: "orgs" as const,
      description: "These organizations have been accepted into Google Summer of Code. Start contributing before applications open to strengthen your proposal.",
      items: [
        { name: "TensorFlow", lang: "Python / C++", domain: "AI & Machine Learning", url: "https://github.com/tensorflow/tensorflow" },
        { name: "CNCF", lang: "Go", domain: "Cloud Native / Kubernetes", url: "https://github.com/cncf" },
        { name: "Apache Software Foundation", lang: "Java / Python", domain: "Big Data & Web", url: "https://github.com/apache" },
        { name: "Mozilla", lang: "Rust / JavaScript", domain: "Browser & Web", url: "https://github.com/mozilla" },
        { name: "OpenCV", lang: "C++ / Python", domain: "Computer Vision", url: "https://github.com/opencv/opencv" },
        { name: "Django", lang: "Python", domain: "Web Framework", url: "https://github.com/django/django" },
        { name: "FOSSASIA", lang: "Python / JS", domain: "Community & Education", url: "https://github.com/fossasia" },
        { name: "PostgreSQL", lang: "C / SQL", domain: "Database", url: "https://github.com/postgres/postgres" },
        { name: "Jenkins", lang: "Java", domain: "CI/CD & DevOps", url: "https://github.com/jenkinsci" },
        { name: "NumFOCUS", lang: "Python", domain: "Data Science & Scientific", url: "https://github.com/numfocus" },
        { name: "Git", lang: "C / Shell", domain: "Developer Tools", url: "https://github.com/git/git" },
        { name: "KDE", lang: "C++ / QML", domain: "Desktop & Graphics", url: "https://github.com/KDE" },
      ],
    },
  },
  {
    id: "gsocproposal",
    icon: <Award className="w-5 h-5" />,
    title: "GSoC Proposal Guide",
    subtitle: "Write a winning GSoC proposal step by step",
    gradient: "from-red-500 to-orange-600",
    lightBg: "bg-red-50",
    lightText: "text-red-600",
    ring: "ring-red-200",
    content: {
      type: "steps" as const,
      description: "Follow this 8-step guide to write a proposal that gets selected.",
      items: [
        { step: "01", title: "Choose the Right Project", desc: "Pick a project matching your skills from the org's Ideas List. Quality over quantity." },
        { step: "02", title: "Make Pre-Application Contributions", desc: "Submit at least one merged PR to the org before applying. This is the #1 differentiator." },
        { step: "03", title: "Contact Mentors Early", desc: "Introduce yourself on the org's channel and ask one specific, well-researched question." },
        { step: "04", title: "Research the Codebase", desc: "Run the project locally, read related code, and study past GSoC projects for this org." },
        { step: "05", title: "Structure Your Proposal", desc: "Abstract → Deliverables → Implementation Plan → Weekly Timeline → About Me." },
        { step: "06", title: "Write a Realistic Timeline", desc: "Week-by-week milestones aligned to midterm and final evaluations. Include buffer weeks." },
        { step: "07", title: "Demonstrate Your Ability", desc: "Link all merged PRs. Include relevant code. Be specific about what you've studied." },
        { step: "08", title: "Get Mentor Feedback & Submit", desc: "Share a draft 7–10 days before the deadline. Incorporate feedback. Submit early." },
      ],
    },
  },
  {
    id: "programs",
    icon: <GraduationCap className="w-5 h-5" />,
    title: "Program Tracker",
    subtitle: "Deadlines for GSoC, LFX, MLH, Outreachy & more",
    gradient: "from-emerald-500 to-teal-600",
    lightBg: "bg-emerald-50",
    lightText: "text-emerald-700",
    ring: "ring-emerald-200",
    content: {
      type: "programs" as const,
      description: "Track application windows, contribution periods, and stipends for 20+ open-source programs worldwide.",
      items: [
        { name: "Google Summer of Code", short: "GSoC", window: "Jan – Mar (apps)", stipend: "$1,500 – $6,600", status: "Annual", color: "bg-red-50 text-red-700", url: "https://summerofcode.withgoogle.com" },
        { name: "LFX Mentorship", short: "LFX", window: "3 cohorts / year", stipend: "$3,000 – $6,600", status: "Ongoing", color: "bg-blue-50 text-blue-700", url: "https://mentorship.lfx.linuxfoundation.org" },
        { name: "MLH Fellowship", short: "MLH", window: "Spring / Summer / Fall", stipend: "$5,000 – $6,000", status: "3 batches", color: "bg-indigo-50 text-indigo-700", url: "https://fellowship.mlh.io" },
        { name: "Outreachy", short: "Outreachy", window: "May & Dec cohorts", stipend: "$7,000", status: "Diversity-focused", color: "bg-teal-50 text-teal-700", url: "https://outreachy.org" },
        { name: "Hacktoberfest", short: "Hacktoberfest", window: "October (every year)", stipend: "Swag rewards", status: "Annual", color: "bg-orange-50 text-orange-700", url: "https://hacktoberfest.com" },
        { name: "GirlScript SoC", short: "GSSoC", window: "Mar – May (India)", stipend: "Certificates + swag", status: "Annual", color: "bg-pink-50 text-pink-700", url: "https://gssoc.girlscript.tech" },
        { name: "Season of Docs", short: "GSoD", window: "Feb – Apr (apps)", stipend: "$5,000 – $15,000", status: "Annual", color: "bg-amber-50 text-amber-700", url: "https://developers.google.com/season-of-docs" },
        { name: "Rails Girls SoC", short: "RGSoC", window: "Mar – Jul", stipend: "$1,500/month", status: "Annual", color: "bg-rose-50 text-rose-700", url: "https://railsgirlssummerofcode.org" },
      ],
    },
  },
  {
    id: "firstpr",
    icon: <GitPullRequest className="w-5 h-5" />,
    title: "First PR Roadmap",
    subtitle: "Guided checklist to land your first pull request",
    gradient: "from-pink-500 to-rose-600",
    lightBg: "bg-pink-50",
    lightText: "text-pink-700",
    ring: "ring-pink-200",
    content: {
      type: "checklist" as const,
      description: "Follow this proven roadmap to go from zero to your first merged pull request. Check off each step as you go.",
      items: [
        { label: "Set up Git & GitHub account", detail: "Install Git, configure your name/email, and create a free GitHub account if you haven't already." },
        { label: "Learn Git basics", detail: "Understand clone, branch, commit, push, pull. Free resource: learngitbranching.js.org" },
        { label: "Pick a beginner-friendly repo", detail: "Use the Curated Repos section below. Look for repos with a CONTRIBUTING.md and active issues." },
        { label: "Read CONTRIBUTING.md", detail: "Every project has contributing guidelines. Follow them exactly — wrong format = auto-rejected PR." },
        { label: "Find a 'good first issue'", detail: "Search GitHub issues filtered by label:\"good first issue\" or label:\"beginner friendly\"." },
        { label: "Comment on the issue", detail: "Ask to be assigned the issue. This prevents duplicate work and shows you're active." },
        { label: "Fork → clone → branch", detail: "Fork the repo, clone your fork, then create a feature branch: git checkout -b fix/issue-123" },
        { label: "Make your fix & test it", detail: "Small, focused changes are best. Run existing tests and add new ones if the project requires it." },
        { label: "Write a clear commit message", detail: "Use conventional commits: fix: handle empty input in parseUser() — makes the diff reviewable." },
        { label: "Open the pull request", detail: "Fill in the PR template, reference the issue (Closes #123), and keep the description concise." },
        { label: "Respond to review comments", detail: "Maintainers may ask for changes. Update the same branch — avoid creating new PRs." },
        { label: "Get merged & celebrate 🎉", detail: "Add it to your portfolio and resume. Repeat with a harder issue!" },
      ],
    },
  },
  {
    id: "community",
    icon: <MessagesSquare className="w-5 h-5" />,
    title: "Community & Mentorship",
    subtitle: "Connect with maintainers and fellow contributors",
    gradient: "from-indigo-500 to-blue-600",
    lightBg: "bg-indigo-50",
    lightText: "text-indigo-700",
    ring: "ring-indigo-200",
    content: {
      type: "community" as const,
      description: "You don't have to contribute alone. Join thriving communities, find mentors, and get code reviews from experienced developers.",
      items: [
        { platform: "GitHub Discussions", desc: "Most modern OSS repos have Discussions enabled — the best place to ask questions and propose ideas.", icon: "💬", url: "https://github.com" },
        { platform: "Dev.to", desc: "Thousands of posts on open-source journeys, first PR stories, GSoC tips, and program experiences.", icon: "📝", url: "https://dev.to/t/opensource" },
        { platform: "OSS Discord Servers", desc: "Projects like Supabase, Appwrite, and Cal.com have active Discord servers — join and start chatting.", icon: "🎮", url: "https://discord.com" },
        { platform: "Reddit r/opensource", desc: "Community for sharing contributions, asking questions, and discussing OSS trends.", icon: "🤖", url: "https://reddit.com/r/opensource" },
        { platform: "Twitter / X #OpenSource", desc: "Follow maintainers, stay updated on new programs, and connect with the contributor community.", icon: "🐦", url: "https://twitter.com/search?q=%23opensource" },
        { platform: "First Timers Only", desc: "Issues specifically reserved for people making their very first open-source contribution.", icon: "🌱", url: "https://www.firsttimersonly.com" },
      ],
    },
  },
] as const;

type GuidanceSection = typeof GUIDANCE_SECTIONS[number];

// ─── Guidance Panel Content ──────────────────────────────────────
function GuidancePanelContent({ section }: { section: GuidanceSection }) {
  const [checked, setChecked] = useState<Set<number>>(new Set());

  const toggle = (i: number) =>
    setChecked((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });

  const c = section.content;

  if (c.type === "steps") {
    return (
      <div>
        <p className="text-sm text-gray-500 mb-6 leading-relaxed max-w-2xl">{c.description}</p>
        <div className="grid sm:grid-cols-2 gap-3">
          {c.items.map((item, i) => (
            <div key={i} className="flex gap-3 p-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:border-purple-200 dark:hover:border-purple-700 hover:shadow-sm transition-all">
              <span className="text-xs font-bold text-purple-400 mt-0.5 shrink-0 w-6">{item.step}</span>
              <div>
                <p className="text-sm font-semibold text-gray-900 dark:text-white mb-0.5">{item.title}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (c.type === "tips") {
    return (
      <div>
        <p className="text-sm text-gray-500 mb-6 leading-relaxed max-w-2xl">{c.description}</p>
        <div className="grid sm:grid-cols-2 gap-3">
          {c.items.map((item, i) => (
            <div key={i} className="flex gap-3 p-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-700 hover:shadow-sm transition-all">
              <span className="text-xl shrink-0 leading-none mt-0.5">{item.icon}</span>
              <div>
                <p className="text-sm font-semibold text-gray-900 dark:text-white mb-0.5">{item.title}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center gap-2 text-sm text-blue-600 font-medium">
          <ArrowRight className="w-4 h-4" />
          <span>Scroll down to browse the full repository catalogue</span>
        </div>
      </div>
    );
  }

  if (c.type === "orgs") {
    return (
      <div>
        <p className="text-sm text-gray-500 mb-6 leading-relaxed max-w-2xl">{c.description}</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {c.items.map((org, i) => (
            <a
              key={i}
              href={org.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3.5 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:border-amber-300 dark:hover:border-amber-600 hover:shadow-md transition-all no-underline group"
            >
              <div className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-100 flex items-center justify-center shrink-0 font-bold text-amber-600 text-sm group-hover:scale-110 transition-transform">
                {org.name[0]}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">{org.name}</p>
                <p className="text-[11px] text-gray-400 dark:text-gray-500 truncate">{org.domain}</p>
                <p className="text-[10px] text-amber-600 font-medium">{org.lang}</p>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-gray-300 group-hover:text-amber-500 shrink-0" />
            </a>
          ))}
        </div>
      </div>
    );
  }

  if (c.type === "programs") {
    return (
      <div>
        <p className="text-sm text-gray-500 mb-6 leading-relaxed max-w-2xl">{c.description}</p>
        <div className="space-y-3">
          {c.items.map((prog, i) => (
            <a
              key={i}
              href={prog.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:border-emerald-300 dark:hover:border-emerald-600 hover:shadow-md transition-all no-underline group"
            >
              <span className={`px-2.5 py-1 rounded-lg text-xs font-bold ${prog.color} shrink-0`}>{prog.short}</span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900 dark:text-white">{prog.name}</p>
                <div className="flex items-center gap-4 mt-0.5">
                  <span className="flex items-center gap-1 text-[11px] text-gray-400">
                    <Clock className="w-3 h-3" />{prog.window}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] text-emerald-600 font-medium">
                    <DollarSign className="w-3 h-3" />{prog.stipend}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-[10px] text-gray-400">{prog.status}</span>
                <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-emerald-500" />
              </div>
            </a>
          ))}
        </div>
      </div>
    );
  }

  if (c.type === "checklist") {
    const pct = Math.round((checked.size / c.items.length) * 100);
    return (
      <div>
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm text-gray-500 leading-relaxed max-w-xl">{c.description}</p>
          <div className="shrink-0 ml-4 text-right">
            <span className="text-2xl font-bold text-pink-600">{pct}%</span>
            <p className="text-[11px] text-gray-400">complete</p>
          </div>
        </div>
        {/* Progress bar */}
        <div className="h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full mb-5 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-pink-500 to-rose-500 rounded-full"
            animate={{ width: `${pct}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>
        <div className="space-y-2">
          {c.items.map((item, i) => (
            <button
              key={i}
              onClick={() => toggle(i)}
              className={`w-full flex items-start gap-3 p-3.5 rounded-xl border text-left transition-all ${
                checked.has(i)
                  ? "bg-pink-50 border-pink-200 dark:bg-pink-900/20 dark:border-pink-700"
                  : "bg-white dark:bg-gray-900 border-gray-100 dark:border-gray-800 hover:border-pink-200 dark:hover:border-pink-700 hover:bg-pink-50/30 dark:hover:bg-pink-900/10"
              }`}
            >
              <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 transition-colors ${checked.has(i) ? "text-pink-500" : "text-gray-300"}`} />
              <div>
                <p className={`text-sm font-medium transition-colors ${checked.has(i) ? "text-pink-700 dark:text-pink-400 line-through" : "text-gray-900 dark:text-white"}`}>
                  {item.label}
                </p>
                <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{item.detail}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (c.type === "community") {
    return (
      <div>
        <p className="text-sm text-gray-500 mb-6 leading-relaxed max-w-2xl">{c.description}</p>
        <div className="grid sm:grid-cols-2 gap-3">
          {c.items.map((item, i) => (
            <a
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-3 p-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:border-indigo-300 dark:hover:border-indigo-600 hover:shadow-md transition-all no-underline group"
            >
              <span className="text-2xl shrink-0 leading-none">{item.icon}</span>
              <div>
                <p className="text-sm font-semibold text-gray-900 dark:text-white mb-0.5 group-hover:text-indigo-700 dark:group-hover:text-indigo-400 transition-colors">{item.platform}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-gray-200 group-hover:text-indigo-400 mt-0.5 ml-auto shrink-0" />
            </a>
          ))}
        </div>
        <div className="mt-5 p-4 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800">
          <div className="flex items-center gap-2 mb-1">
            <Users className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <span className="text-sm font-semibold text-indigo-900 dark:text-indigo-300">Find a Mentor</span>
          </div>
          <p className="text-xs text-indigo-700 dark:text-indigo-400 leading-relaxed">
            Many GSoC and LFX mentors are active on GitHub Discussions and X. Comment thoughtfully on issues, submit small PRs, and reach out professionally — that's how contributors get noticed.
          </p>
        </div>
      </div>
    );
  }

  return null;
}

// Sections with dedicated pages — clicking these navigates instead of expanding inline
const SECTION_PAGE_LINKS: Record<string, string> = {
  guidance: "/student/opensource/guidance",
  gsoc: "/student/opensource/gsoc",
  gsocproposal: "/student/opensource/gsoc-proposal",
  programs: "/student/opensource/programs",
  firstpr: "/student/opensource/first-pr",
};

// ─── Guidance Section ────────────────────────────────────────────
function OpenSourceGuidanceSection() {
  const navigate = useNavigate();
  const [activeId, setActiveId] = useState<string | null>(null);
  const activeSection = GUIDANCE_SECTIONS.find((s) => s.id === activeId) ?? null;

  return (
    <section className="mb-8">
      {/* Header */}
      <div className="flex items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-900 dark:text-white leading-none">Open Source Guidance</h2>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">Click a card to explore — guides, programs, roadmaps, and community</p>
          </div>
        </div>
        <Link
          to="/student/opensource/guidance"
          className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-purple-700 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/30 hover:bg-purple-100 dark:hover:bg-purple-900/50 rounded-lg transition-colors no-underline shrink-0"
        >
          Full Guide
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Feature tiles */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3">
        {GUIDANCE_SECTIONS.map((section) => {
          const isActive = activeId === section.id;
          return (
            <motion.button
              key={section.id}
              onClick={() => {
                const link = SECTION_PAGE_LINKS[section.id];
                if (link) navigate(link);
                else setActiveId(isActive ? null : section.id);
              }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className={`relative text-left p-4 rounded-2xl border transition-all ${
                isActive
                  ? `bg-gradient-to-br ${section.gradient} text-white border-transparent shadow-lg`
                  : "bg-white dark:bg-gray-900 border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 hover:shadow-md"
              }`}
            >
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center mb-3 transition-all ${
                isActive ? "bg-white/20" : `${section.lightBg}`
              }`}>
                <span className={isActive ? "text-white" : section.lightText}>{section.icon}</span>
              </div>
              <p className={`text-xs font-bold leading-tight mb-1 ${isActive ? "text-white" : "text-gray-900 dark:text-white"}`}>
                {section.title}
              </p>
              <p className={`text-[10px] leading-tight ${isActive ? "text-white/75" : "text-gray-400 dark:text-gray-500"}`}>
                {section.subtitle}
              </p>
              {isActive && (
                <div className="absolute top-2.5 right-2.5">
                  <X className="w-3.5 h-3.5 text-white/70" />
                </div>
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Expanded panel */}
      <AnimatePresence>
        {activeSection && (
          <motion.div
            key={activeSection.id}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="mt-3 rounded-2xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 p-5 md:p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${activeSection.gradient} flex items-center justify-center shadow-sm`}>
                  <span className="text-white">{activeSection.icon}</span>
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900 dark:text-white">{activeSection.title}</h3>
                  <p className="text-xs text-gray-400 dark:text-gray-500">{activeSection.subtitle}</p>
                </div>
              </div>
              <GuidancePanelContent section={activeSection} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

// ─── Component ──────────────────────────────────────────────────
export default function RepoDiscoveryPage() {
  // State
  const [search, setSearch] = useState("");
  const [selectedDomain, setSelectedDomain] = useState("ALL");
  const [selectedDifficulty, setSelectedDifficulty] = useState("ALL");
  const [sortKey, setSortKey] = useState("stars");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedRepo, setSelectedRepo] = useState<OpenSourceRepo | null>(null);

  // Derived data
  const filtered = useMemo(() => {
    let list = [...reposData];

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (r) =>
          r.name.toLowerCase().includes(q) ||
          r.owner.toLowerCase().includes(q) ||
          r.description.toLowerCase().includes(q) ||
          r.tags.some((t) => t.toLowerCase().includes(q)) ||
          r.language.toLowerCase().includes(q)
      );
    }

    if (selectedDomain !== "ALL") {
      list = list.filter((r) => r.domain === selectedDomain);
    }

    if (selectedDifficulty !== "ALL") {
      list = list.filter((r) => r.difficulty === selectedDifficulty);
    }

    const sortOpt = SORT_OPTIONS.find((s) => s.key === sortKey) ?? SORT_OPTIONS[0];
    list.sort((a, b) => {
      const av = a[sortOpt.key as keyof OpenSourceRepo];
      const bv = b[sortOpt.key as keyof OpenSourceRepo];
      if (typeof av === "number" && typeof bv === "number") {
        return sortOpt.order === "desc" ? bv - av : av - bv;
      }
      return sortOpt.order === "desc"
        ? String(bv).localeCompare(String(av))
        : String(av).localeCompare(String(bv));
    });

    return list;
  }, [search, selectedDomain, selectedDifficulty, sortKey]);

  const stats = useMemo(() => {
    const totalStars = reposData.reduce((s, r) => s + r.stars, 0);
    const trendingCount = reposData.filter((r) => r.trending).length;
    return {
      totalRepos: reposData.length,
      totalStars: formatCount(totalStars),
      trendingCount,
      languages: [...new Set(reposData.map((r) => r.language))].length,
    };
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* ── Hero ────────────────────────────────────────────── */}
      <section className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm mb-8">
        {/* Subtle gradient blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-purple-50 to-indigo-50 opacity-60 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-[350px] h-[350px] rounded-full bg-gradient-to-tr from-cyan-50 to-emerald-50 opacity-60 blur-3xl" />
        </div>

        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div className="relative z-10 py-12 px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-200 dark:border-purple-700 bg-purple-50 dark:bg-purple-900/30 px-4 py-1.5 text-sm text-purple-700 dark:text-purple-400">
              <Sparkles className="w-4 h-4 text-purple-500" />
              Open Source Discovery
            </div>
            <h1 className="mb-3 font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-gray-950 dark:text-white">
              Discover &amp; Contribute
            </h1>
            <p className="mx-auto mb-6 max-w-2xl text-base text-gray-500 leading-relaxed">
              Find beginner-friendly open-source projects, explore trending repositories, and make your first contribution today.
            </p>

            {/* Stat pills */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-3"
            >
              {[
                { icon: <Code2 size={14} />, label: `${stats.totalRepos} Repos` },
                { icon: <Star size={14} />, label: `${stats.totalStars} Stars` },
                { icon: <Flame size={14} />, label: `${stats.trendingCount} Trending` },
                { icon: <Globe size={14} />, label: `${stats.languages} Languages` },
              ].map((s) => (
                <span
                  key={s.label}
                  className="flex items-center gap-1.5 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-1 text-xs text-gray-600 dark:text-gray-400 shadow-sm"
                >
                  {s.icon}
                  {s.label}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Open Source Guidance ────────────────────────────── */}
      <OpenSourceGuidanceSection />

      {/* ── Search + Controls ───────────────────────────────── */}
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        {/* Search bar */}
        <div className="relative flex-1 max-w-xl">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search repos, languages, tags…"
            className="w-full rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 py-2.5 pl-10 pr-4 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 outline-none transition shadow-sm focus:border-purple-300 focus:ring-2 focus:ring-purple-500/20"
          />
        </div>

        <div className="flex items-center gap-3">
          {/* Filter toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm transition ${
              showFilters
                ? "border-purple-300 bg-purple-50 text-purple-700 dark:border-purple-600 dark:bg-purple-900/30 dark:text-purple-400"
                : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-sm"
            }`}
          >
            <Filter size={16} />
            Filters
          </button>

          {/* Sort dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2.5 text-sm text-gray-600 dark:text-gray-300 transition shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700">
              <TrendingUp size={16} />
              {SORT_OPTIONS.find((s) => s.key === sortKey)?.label ?? "Sort"}
              <ChevronDown size={14} />
            </button>
            <div className="absolute right-0 top-full z-20 mt-1 hidden min-w-[180px] rounded-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 p-1 shadow-xl group-hover:block">
              {SORT_OPTIONS.map((opt) => (
                <button
                  key={opt.key}
                  onClick={() => setSortKey(opt.key)}
                  className={`block w-full rounded-lg px-3 py-2 text-left text-sm transition ${
                    sortKey === opt.key
                      ? "bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 font-medium"
                      : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Filter bar ─────────────────────────────────────── */}
      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="mb-6 overflow-hidden"
          >
            <div className="rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-5 shadow-sm">
              {/* Domain chips */}
              <div className="mb-4">
                <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Domain</p>
                <div className="flex flex-wrap gap-2">
                  {REPO_DOMAINS.map((d) => (
                    <button
                      key={d.key}
                      onClick={() => setSelectedDomain(d.key)}
                      className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition ${
                        selectedDomain === d.key
                          ? "bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 ring-1 ring-purple-200 dark:ring-purple-700"
                          : "bg-gray-50 dark:bg-gray-800 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-700 dark:hover:text-gray-300"
                      }`}
                    >
                      <span>{d.icon}</span>
                      {d.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Difficulty */}
              <div>
                <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Difficulty</p>
                <div className="flex flex-wrap gap-2">
                  {DIFFICULTY_OPTIONS.map((d) => (
                    <button
                      key={d.key}
                      onClick={() => setSelectedDifficulty(d.key)}
                      className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
                        selectedDifficulty === d.key
                          ? "bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 ring-1 ring-purple-200 dark:ring-purple-700"
                          : "bg-gray-50 dark:bg-gray-800 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-700 dark:hover:text-gray-300"
                      }`}
                    >
                      {d.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Results count ──────────────────────────────────── */}
      <p className="mb-6 text-sm text-gray-400">
        Showing <span className="text-gray-900 dark:text-white font-medium">{filtered.length}</span> of {reposData.length} repositories
      </p>

      {/* ── Cards grid ─────────────────────────────────────── */}
      {filtered.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center justify-center py-24 text-center"
        >
          <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-gray-50 dark:bg-gray-800">
            <Search size={32} className="text-gray-300 dark:text-gray-600" />
          </div>
          <h3 className="mb-2 text-lg font-semibold text-gray-700 dark:text-gray-300">No repositories found</h3>
          <p className="max-w-md text-sm text-gray-400">
            Try adjusting your search or filters to discover more projects.
          </p>
        </motion.div>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((repo, i) => (
              <motion.div
                layout
                key={repo.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: i * 0.04, duration: 0.35 }}
                onClick={() => setSelectedRepo(repo)}
                className="group relative cursor-pointer rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-5 shadow-sm transition-all hover:shadow-md hover:border-purple-200 dark:hover:border-purple-700"
              >
                {/* Trending badge */}
                {repo.trending && (
                  <div className="absolute -top-2.5 right-4 flex items-center gap-1 rounded-full bg-gradient-to-r from-orange-500 to-rose-500 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-md">
                    <Flame size={10} />
                    Trending
                  </div>
                )}

                {/* Header */}
                <div className="mb-3 flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-50 to-indigo-50 text-lg font-bold text-purple-600 border border-purple-100">
                    {repo.owner[0].toUpperCase()}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="truncate text-base font-semibold text-gray-900 dark:text-white group-hover:text-purple-700 dark:group-hover:text-purple-400 transition-colors">
                      {repo.owner}/<span className="text-purple-600">{repo.name}</span>
                    </h3>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span
                        className="inline-block h-2.5 w-2.5 rounded-full"
                        style={{ backgroundColor: LANGUAGE_COLORS[repo.language] ?? "#888" }}
                      />
                      <span className="text-xs text-gray-500">{repo.language}</span>
                      <span className={`ml-auto rounded-full px-2 py-0.5 text-[10px] font-medium ring-1 ${difficultyBadge(repo.difficulty).cls}`}>
                        {difficultyBadge(repo.difficulty).label}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="mb-4 line-clamp-2 text-sm text-gray-500">
                  {repo.description}
                </p>

                {/* Tags */}
                <div className="mb-4 flex flex-wrap gap-1.5">
                  {repo.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-gray-50 dark:bg-gray-800 px-2 py-0.5 text-[10px] text-gray-500"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Stats bar */}
                <div className="flex items-center gap-4 border-t border-gray-50 dark:border-gray-800 pt-3 text-xs text-gray-400">
                  <span className="flex items-center gap-1">
                    <Star size={13} className="text-amber-500" />
                    {formatCount(repo.stars)}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork size={13} className="text-cyan-500" />
                    {formatCount(repo.forks)}
                  </span>
                  <span className="flex items-center gap-1">
                    <CircleDot size={13} className="text-emerald-500" />
                    {formatCount(repo.openIssues)} issues
                  </span>
                  <ArrowUpRight
                    size={14}
                    className="ml-auto text-gray-300 transition group-hover:text-purple-500"
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}

      {/* ── Detail Modal ─────────────────────────────────────── */}
      <AnimatePresence>
        {selectedRepo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm p-4"
            onClick={() => setSelectedRepo(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-6 shadow-2xl md:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={() => setSelectedRepo(null)}
                className="absolute right-4 top-4 rounded-full bg-gray-50 dark:bg-gray-800 p-2 text-gray-400 transition hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-700 dark:hover:text-gray-300"
              >
                <X size={18} />
              </button>

              {/* Header */}
              <div className="mb-6 flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-50 to-indigo-50 text-2xl font-bold text-purple-600 border border-purple-100">
                  {selectedRepo.owner[0].toUpperCase()}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                    {selectedRepo.owner}/{selectedRepo.name}
                  </h2>
                  <div className="mt-1 flex flex-wrap items-center gap-2">
                    <span
                      className="inline-block h-3 w-3 rounded-full"
                      style={{ backgroundColor: LANGUAGE_COLORS[selectedRepo.language] ?? "#888" }}
                    />
                    <span className="text-sm text-gray-500">{selectedRepo.language}</span>
                    <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ${difficultyBadge(selectedRepo.difficulty).cls}`}>
                      {difficultyBadge(selectedRepo.difficulty).label}
                    </span>
                    {selectedRepo.trending && (
                      <span className="flex items-center gap-1 rounded-full bg-gradient-to-r from-orange-500 to-rose-500 px-2 py-0.5 text-[10px] font-bold uppercase text-white">
                        <Flame size={10} /> Trending
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="mb-6 text-sm leading-relaxed text-gray-600">
                {selectedRepo.description}
              </p>

              {/* Stats */}
              <div className="mb-6 grid grid-cols-3 gap-3">
                {[
                  { label: "Stars", value: formatCount(selectedRepo.stars), icon: <Star size={16} className="text-amber-500" /> },
                  { label: "Forks", value: formatCount(selectedRepo.forks), icon: <GitFork size={16} className="text-cyan-500" /> },
                  { label: "Open Issues", value: formatCount(selectedRepo.openIssues), icon: <CircleDot size={16} className="text-emerald-500" /> },
                ].map((s) => (
                  <div key={s.label} className="rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800 p-3 text-center">
                    <div className="flex items-center justify-center gap-1.5 mb-1">{s.icon}<span className="text-lg font-bold text-gray-900 dark:text-white">{s.value}</span></div>
                    <p className="text-[10px] uppercase tracking-wider text-gray-400">{s.label}</p>
                  </div>
                ))}
              </div>

              {/* Tech Stack */}
              {selectedRepo.techStack.length > 0 && (
                <div className="mb-5">
                  <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-400">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedRepo.techStack.map((t) => (
                      <span key={t} className="rounded-lg bg-purple-50 dark:bg-purple-900/30 px-2.5 py-1 text-xs text-purple-700 dark:text-purple-400 ring-1 ring-purple-100 dark:ring-purple-700">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Issue Types */}
              {selectedRepo.issueTypes.length > 0 && (
                <div className="mb-5">
                  <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-400">Issue Labels</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedRepo.issueTypes.map((t) => (
                      <span key={t} className="rounded-lg bg-emerald-50 dark:bg-emerald-900/30 px-2.5 py-1 text-xs text-emerald-700 dark:text-emerald-400 ring-1 ring-emerald-100 dark:ring-emerald-700">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Highlights */}
              {selectedRepo.highlights.length > 0 && (
                <div className="mb-6">
                  <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-400">Why Contribute?</h4>
                  <ul className="space-y-1.5">
                    {selectedRepo.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <Sparkles size={14} className="mt-0.5 shrink-0 text-purple-500" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tags */}
              <div className="mb-6">
                <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-400">Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedRepo.tags.map((tag) => (
                    <span key={tag} className="rounded-md bg-gray-50 dark:bg-gray-800 px-2.5 py-1 text-xs text-gray-500">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <a
                href={selectedRepo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gray-950 dark:bg-white py-3 text-sm font-semibold text-white dark:text-gray-950 transition hover:bg-gray-800 dark:hover:bg-gray-200 no-underline"
              >
                <ExternalLink size={16} />
                View on GitHub
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
