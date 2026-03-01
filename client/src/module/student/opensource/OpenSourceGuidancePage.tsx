import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  Circle,
  ChevronDown,
  ExternalLink,
  BookOpen,
  Terminal,
  Lightbulb,
  ArrowLeft,
  Trophy,
  GitBranch,
  Copy,
  Check,
} from "lucide-react";
import { Link } from "react-router";

// ─── Types ────────────────────────────────────────────────────
interface Resource {
  title: string;
  url: string;
  type: "doc" | "video" | "tool" | "article" | "interactive";
}

interface StepData {
  id: string;
  number: string;
  title: string;
  overview: string;
  details: string[];
  commands: { label: string; code: string }[];
  resources: Resource[];
  tips: string[];
}

// ─── Step Data ────────────────────────────────────────────────
const STEPS: StepData[] = [
  {
    id: "fork",
    number: "01",
    title: "Fork the Repository",
    overview:
      "Forking creates a personal copy of any public repository under your own GitHub account. This lets you freely experiment without affecting the original project.",
    details: [
      "Navigate to the repository page on GitHub.",
      "Click the Fork button at the top-right corner of the page.",
      "Select your GitHub account as the destination.",
      "GitHub copies the entire repo — all branches, history, and files — into your account.",
      "After forking, set up the upstream remote so you can pull in future changes from the original project.",
      "Always check if the repo has a CONTRIBUTING.md or CONTRIBUTORS.md file — this is your guide.",
    ],
    commands: [
      {
        label: "Add the original repo as 'upstream' after cloning",
        code: "git remote add upstream https://github.com/ORIGINAL-OWNER/REPO-NAME.git",
      },
      {
        label: "Verify your remotes (should show origin + upstream)",
        code: "git remote -v",
      },
    ],
    resources: [
      { title: "GitHub Docs: Fork a Repository", url: "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo", type: "doc" },
      { title: "First Contributions — Beginner's Practice Repo", url: "https://github.com/firstcontributions/first-contributions", type: "tool" },
      { title: "FreeCodeCamp: Beginner's Guide to Contributing", url: "https://www.freecodecamp.org/news/how-to-contribute-to-open-source-projects-beginners-guide/", type: "article" },
      { title: "GitHub Docs: Working with Forks", url: "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks", type: "doc" },
    ],
    tips: [
      "Star the repository to bookmark it — it signals interest to maintainers.",
      "Check the Issues tab and Discussions before forking to understand the project's current priorities.",
      "If the repo has a CONTRIBUTING.md, read it entirely before writing a single line of code.",
    ],
  },
  {
    id: "clone",
    number: "02",
    title: "Clone Locally",
    overview:
      "Cloning downloads your forked repository to your local machine so you can work on it with your preferred editor, run tests, and build the project.",
    details: [
      "Copy your fork's URL from GitHub (HTTPS or SSH — SSH is recommended for frequent contributors).",
      "Run git clone to download the repo to your machine.",
      "cd into the project directory.",
      "Immediately add the upstream remote pointing to the original repository.",
      "Install dependencies according to the project's README (npm install, pip install, etc.).",
      "Set up your editor — look for .editorconfig, .eslintrc, or similar config files and install recommended extensions.",
    ],
    commands: [
      {
        label: "Clone your fork (HTTPS)",
        code: "git clone https://github.com/YOUR-USERNAME/REPO-NAME.git",
      },
      {
        label: "Clone your fork (SSH — recommended)",
        code: "git clone git@github.com:YOUR-USERNAME/REPO-NAME.git",
      },
      {
        label: "Enter the directory",
        code: "cd REPO-NAME",
      },
      {
        label: "Add upstream remote",
        code: "git remote add upstream https://github.com/ORIGINAL-OWNER/REPO-NAME.git",
      },
      {
        label: "Verify both remotes exist",
        code: "git remote -v",
      },
    ],
    resources: [
      { title: "Git Clone Documentation", url: "https://git-scm.com/docs/git-clone", type: "doc" },
      { title: "GitHub: Setting up SSH Keys", url: "https://docs.github.com/en/authentication/connecting-to-github-with-ssh", type: "doc" },
      { title: "GitHub Desktop (GUI alternative)", url: "https://desktop.github.com", type: "tool" },
      { title: "Pro Git Book — Free Online", url: "https://git-scm.com/book/en/v2", type: "doc" },
    ],
    tips: [
      "Prefer SSH over HTTPS for cloning — you won't need to enter your password on every push.",
      "After cloning, immediately run the project locally to confirm it builds before you change anything.",
      "Read the README completely — build steps, environment variables, and test commands are all there.",
    ],
  },
  {
    id: "branch",
    number: "03",
    title: "Create a Branch",
    overview:
      "Always work on a dedicated branch — never commit directly to main. Branches isolate your changes, making PRs clean and easy to review.",
    details: [
      "Before creating a branch, sync your local main with upstream to start from the latest code.",
      "Use a descriptive branch name that signals what the change does.",
      "Follow the naming convention the project uses — check existing branches on GitHub.",
      "Common prefixes: feat/ for new features, fix/ for bug fixes, docs/ for documentation, chore/ for maintenance.",
      "Keep one concern per branch — don't mix a feature and a bug fix in the same PR.",
      "Push the branch to your fork early with git push -u origin BRANCH to set the tracking remote.",
    ],
    commands: [
      {
        label: "Sync your local main with upstream first",
        code: "git fetch upstream && git checkout main && git merge upstream/main",
      },
      {
        label: "Create and switch to a new branch",
        code: "git checkout -b feat/your-feature-name",
      },
      {
        label: "Or use the newer switch command",
        code: "git switch -c fix/issue-123-null-pointer",
      },
      {
        label: "Push branch to your fork and set upstream tracking",
        code: "git push -u origin feat/your-feature-name",
      },
      {
        label: "List all branches",
        code: "git branch -a",
      },
    ],
    resources: [
      { title: "Git Branching — Pro Git Book", url: "https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell", type: "doc" },
      { title: "Learn Git Branching (Interactive)", url: "https://learngitbranching.js.org", type: "interactive" },
      { title: "A Successful Git Branching Model (Git Flow)", url: "https://nvie.com/posts/a-successful-git-branching-model/", type: "article" },
      { title: "Atlassian: Git Branch Tutorial", url: "https://www.atlassian.com/git/tutorials/using-branches", type: "article" },
    ],
    tips: [
      "Branch names should be hyphen-separated and lowercase: fix/login-null-check not Fix/LoginNullCheck.",
      "Never force-push to a shared branch — it rewrites history and confuses collaborators.",
      "Delete merged branches regularly: git branch -d feat/old-feature keeps your repo tidy.",
    ],
  },
  {
    id: "changes",
    number: "04",
    title: "Make Your Changes",
    overview:
      "This is where you write code — but before touching anything, understand the codebase structure, coding conventions, and what's expected in the PR.",
    details: [
      "Read the CONTRIBUTING.md entirely. Missing this step is the #1 reason PRs get rejected.",
      "Run the existing tests before making any change — confirm the baseline is passing.",
      "Understand the area of code you're modifying. Trace the call chain from entry point to the affected function.",
      "Follow the existing code style — indentation, naming, comment style. Don't 'improve' unrelated code.",
      "Keep changes minimal and focused. One PR = one concern.",
      "Write or update tests if the project requires it. Check if there's a tests/ or __tests__/ directory.",
      "Run linters / formatters before committing (npm run lint, cargo fmt, black ., etc.).",
    ],
    commands: [
      {
        label: "Run existing tests before you change anything",
        code: "npm test   # or: pytest, cargo test, go test ./...",
      },
      {
        label: "Run the linter",
        code: "npm run lint   # or: eslint ., flake8 ., cargo clippy",
      },
      {
        label: "Auto-format code",
        code: "npm run format   # or: prettier --write ., black ., rustfmt",
      },
    ],
    resources: [
      { title: "How to Read an Existing Codebase", url: "https://www.freecodecamp.org/news/how-to-understand-any-codebase/", type: "article" },
      { title: "CONTRIBUTING.md Template", url: "https://contributing.md", type: "tool" },
      { title: "Google Engineering Practices: Code Review", url: "https://google.github.io/eng-practices/review/", type: "article" },
      { title: "Conventional Commits Spec", url: "https://www.conventionalcommits.org", type: "doc" },
    ],
    tips: [
      "Smaller PRs are reviewed faster. If your fix touches 10+ files, consider splitting it.",
      "If you spot unrelated bugs while working, don't fix them in the same PR — open a separate issue.",
      "Comment your own code changes if the logic is non-obvious — this makes the review much smoother.",
    ],
  },
  {
    id: "commit",
    number: "05",
    title: "Commit & Push",
    overview:
      "Good commits tell a story. Write clear, atomic commit messages that explain the why — not just the what. Then push your branch to your fork.",
    details: [
      "Use git add -p (patch mode) to stage only the relevant changes — avoid git add . for large diffs.",
      "Write commit messages in the imperative mood: 'fix: handle null input' not 'fixed null input'.",
      "Follow Conventional Commits if the project uses it: feat:, fix:, docs:, chore:, test:, refactor:.",
      "Keep the subject line under 72 characters.",
      "Use the body to explain why the change was needed, not what the diff shows.",
      "Push frequently — it backs up your work and lets maintainers see progress if you share the branch.",
    ],
    commands: [
      {
        label: "Stage changes interactively (recommended)",
        code: "git add -p",
      },
      {
        label: "Stage specific files",
        code: "git add src/utils/parser.ts tests/parser.test.ts",
      },
      {
        label: "Commit with a conventional message",
        code: 'git commit -m "fix: handle null input in parseUser() function"',
      },
      {
        label: "Commit with a body",
        code: 'git commit -m "feat: add retry logic to API client" -m "The client previously threw immediately on network errors.\nThis adds exponential backoff with a max of 3 retries.\nFixes #142"',
      },
      {
        label: "Push to your fork",
        code: "git push origin feat/your-branch-name",
      },
      {
        label: "Amend the last commit (before pushing)",
        code: 'git commit --amend -m "fix: corrected message"',
      },
    ],
    resources: [
      { title: "Conventional Commits Specification", url: "https://www.conventionalcommits.org/en/v1.0.0/", type: "doc" },
      { title: "How to Write a Good Commit Message", url: "https://cbea.ms/git-commit/", type: "article" },
      { title: "Git Add -p: Stage Chunks Interactively", url: "https://git-scm.com/docs/git-add#Documentation/git-add.txt--p", type: "doc" },
      { title: "Semantic Versioning", url: "https://semver.org", type: "doc" },
    ],
    tips: [
      "Never commit .env files, secrets, or large binary files. Add them to .gitignore first.",
      "If you committed something wrong, git reset --soft HEAD~1 undoes the commit but keeps the changes staged.",
      "One commit per logical change is ideal — it makes reverting specific issues trivial.",
    ],
  },
  {
    id: "pr",
    number: "06",
    title: "Open a Pull Request",
    overview:
      "A pull request is your formal proposal to merge changes into the original project. A well-written PR description dramatically increases your chances of getting merged quickly.",
    details: [
      "Go to your fork on GitHub — a banner usually appears: 'Compare & pull request'. Click it.",
      "Set the base repository to the original project and base branch to main (or develop).",
      "Write a clear title that follows the project's convention (check other merged PRs for examples).",
      "Fill in the PR template if one exists (GitHub auto-populates it from .github/pull_request_template.md).",
      "Reference the issue your PR addresses with 'Fixes #123' or 'Closes #123' in the description.",
      "Describe what changed, why it was needed, and how you tested it.",
      "Add screenshots or a screen recording if your PR touches the UI.",
      "Mark as Draft if it's still work-in-progress — this signals maintainers not to review yet.",
    ],
    commands: [
      {
        label: "Push your branch before opening the PR",
        code: "git push origin feat/your-branch-name",
      },
      {
        label: "Create PR via GitHub CLI (optional)",
        code: 'gh pr create --title "feat: add retry logic" --body "Fixes #142\n\n## What changed\n- Added retry with exponential backoff\n\n## Testing\n- Ran npm test, all passing"',
      },
    ],
    resources: [
      { title: "GitHub Docs: Creating a Pull Request", url: "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request", type: "doc" },
      { title: "How to Write an Excellent Pull Request", url: "https://www.atlassian.com/blog/git/written-unwritten-guide-pull-requests", type: "article" },
      { title: "GitHub CLI: gh pr create", url: "https://cli.github.com/manual/gh_pr_create", type: "tool" },
      { title: "Anatomy of a Perfect PR", url: "https://opensource.com/article/19/7/create-pull-request-github", type: "article" },
    ],
    tips: [
      "Keep PRs under ~400 lines changed — large PRs are harder to review and take weeks to merge.",
      "Self-review your diff on GitHub before requesting review — catch typos and debug code left behind.",
      "Never open a PR without running all tests locally first.",
    ],
  },
  {
    id: "review",
    number: "07",
    title: "Address Review Feedback",
    overview:
      "Code review is a collaboration, not a critique. Maintainers will often request changes — respond professionally, update your branch, and re-request review.",
    details: [
      "Read every comment carefully. Understand what the reviewer is asking before making changes.",
      "Reply to all comments — even just 'Done ✓' so reviewers know each point was addressed.",
      "Push changes to the same branch — your PR auto-updates. Never open a new PR.",
      "If you disagree with feedback, explain your reasoning calmly and ask for clarification.",
      "After updating, use 'Resolve conversation' on GitHub for comments you've addressed.",
      "If the review asks for significant restructuring, it's okay to ask: 'Should I do this in a separate PR?'",
      "Re-request review once all comments are addressed — reviewers don't get notified otherwise.",
    ],
    commands: [
      {
        label: "Commit your review fixes and push",
        code: 'git add . && git commit -m "refactor: address review feedback" && git push origin feat/branch',
      },
      {
        label: "Squash fixup commits interactively (optional, if project prefers clean history)",
        code: "git rebase -i HEAD~3",
      },
      {
        label: "Fetch latest changes from upstream and rebase if needed",
        code: "git fetch upstream && git rebase upstream/main",
      },
    ],
    resources: [
      { title: "How to Respond to Code Review Comments", url: "https://www.freecodecamp.org/news/responding-to-code-reviews/", type: "article" },
      { title: "Git Rebase Interactive Tutorial", url: "https://git-scm.com/docs/git-rebase#_interactive_mode", type: "doc" },
      { title: "Squashing Commits with Rebase", url: "https://www.atlassian.com/git/tutorials/rewriting-history/git-rebase", type: "article" },
      { title: "GitHub Docs: Incorporating Feedback", url: "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/incorporating-feedback-in-your-pull-request", type: "doc" },
    ],
    tips: [
      "Never force-push to your PR branch if a maintainer has left comments — it collapses the conversation thread.",
      "Be patient. Popular repos can take weeks or months to review. Follow up politely after 2 weeks of silence.",
      "Responding quickly to reviews dramatically increases your merge speed.",
    ],
  },
  {
    id: "merged",
    number: "08",
    title: "Get Merged",
    overview:
      "Your PR is approved and merged — congratulations! Now clean up, update your fork, and build on your momentum with the next contribution.",
    details: [
      "Once merged, GitHub offers to delete your branch — do it to keep your fork clean.",
      "Sync your local main with upstream to pull in your merged changes.",
      "Update your fork's main on GitHub: git push origin main.",
      "Add the contribution to your GitHub profile, resume, and LinkedIn.",
      "Look for a harder issue in the same repo — maintainers love returning contributors.",
      "Write about your experience on Dev.to or LinkedIn — it builds your personal brand.",
      "If you're interested in GSoC, this is when to start researching organizations and writing proposals.",
    ],
    commands: [
      {
        label: "Fetch and sync your local main with upstream",
        code: "git fetch upstream && git checkout main && git merge upstream/main",
      },
      {
        label: "Push updated main to your fork",
        code: "git push origin main",
      },
      {
        label: "Delete the merged branch locally",
        code: "git branch -d feat/your-merged-branch",
      },
      {
        label: "Delete the branch on your fork remotely",
        code: "git push origin --delete feat/your-merged-branch",
      },
    ],
    resources: [
      { title: "How to Build an Open Source Portfolio", url: "https://dev.to/msaaddev/how-to-build-an-impressive-open-source-portfolio-1h37", type: "article" },
      { title: "GSoC Proposal Writing Guide", url: "https://google.github.io/gsocguides/student/writing-a-proposal", type: "doc" },
      { title: "Good First Issues — Find Your Next Contribution", url: "https://goodfirstissue.dev", type: "tool" },
      { title: "Up for Grabs — Curated Beginner Issues", url: "https://up-for-grabs.net", type: "tool" },
    ],
    tips: [
      "Your first merged PR is the hardest. The second one is significantly easier.",
      "Mention merged PRs on your resume with the repo name, PR link, and a one-line summary of what you changed.",
      "Contributing to the same project repeatedly makes you a 'regular contributor' — maintainers notice this.",
    ],
  },
];

// ─── Resource Library ────────────────────────────────────────
const RESOURCE_LIBRARY = [
  {
    category: "Git & GitHub",
    color: "bg-gray-900",
    items: [
      { title: "Pro Git Book (Free)", url: "https://git-scm.com/book/en/v2", desc: "The definitive free Git reference book" },
      { title: "Learn Git Branching", url: "https://learngitbranching.js.org", desc: "Interactive visual Git tutorial" },
      { title: "GitHub Skills", url: "https://skills.github.com", desc: "Official interactive GitHub learning paths" },
      { title: "Oh My Git!", url: "https://ohmygit.org", desc: "Open source game to learn Git" },
    ],
  },
  {
    category: "Finding Projects",
    color: "bg-emerald-600",
    items: [
      { title: "Good First Issue", url: "https://goodfirstissue.dev", desc: "Curated beginner-friendly issues" },
      { title: "Up for Grabs", url: "https://up-for-grabs.net", desc: "Tasks for new contributors" },
      { title: "CodeTriage", url: "https://www.codetriage.com", desc: "Open source issues delivered to inbox" },
      { title: "First Timers Only", url: "https://www.firsttimersonly.com", desc: "Issues reserved for first-timers" },
    ],
  },
  {
    category: "Programs & Fellowships",
    color: "bg-amber-600",
    items: [
      { title: "Google Summer of Code", url: "https://summerofcode.withgoogle.com", desc: "Stipend-based 10-week program" },
      { title: "LFX Mentorship", url: "https://mentorship.lfx.linuxfoundation.org", desc: "Linux Foundation mentorship" },
      { title: "MLH Fellowship", url: "https://fellowship.mlh.io", desc: "12-week internship alternative" },
      { title: "Outreachy", url: "https://outreachy.org", desc: "Paid internships for underrepresented groups" },
    ],
  },
  {
    category: "Community & Mentorship",
    color: "bg-indigo-600",
    items: [
      { title: "Dev.to #opensource", url: "https://dev.to/t/opensource", desc: "Articles and stories from contributors" },
      { title: "GitHub Discussions", url: "https://github.com", desc: "Q&A directly in the repos you use" },
      { title: "r/opensource", url: "https://reddit.com/r/opensource", desc: "Community discussion forum" },
      { title: "Open Source Friday", url: "https://opensourcefriday.com", desc: "Encourage contributing every Friday" },
    ],
  },
];

// ─── Type Badge ──────────────────────────────────────────────
const TYPE_STYLES: Record<string, string> = {
  doc: "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  video: "bg-rose-50 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400",
  tool: "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
  article: "bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  interactive: "bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
};

// ─── Code Block ──────────────────────────────────────────────
function CodeBlock({ code, label }: { code: string; label: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="rounded-xl overflow-hidden border border-gray-800 bg-gray-950">
      <div className="flex items-center justify-between px-4 py-2 bg-gray-900 border-b border-gray-800">
        <span className="text-[11px] text-gray-400 font-mono">{label}</span>
        <button
          onClick={copy}
          className="flex items-center gap-1.5 text-[11px] text-gray-400 hover:text-white transition-colors"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="px-4 py-3 text-sm text-emerald-400 font-mono overflow-x-auto whitespace-pre-wrap break-all leading-relaxed">
        {code}
      </pre>
    </div>
  );
}

// ─── Main Page ───────────────────────────────────────────────
export default function OpenSourceGuidancePage() {
  const [completed, setCompleted] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem("os-guidance-completed");
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch {
      return new Set();
    }
  });
  const [activeStep, setActiveStep] = useState<string>(STEPS[0].id);
  const [expandedSection, setExpandedSection] = useState<Record<string, boolean>>({});
  const stepRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const progress = Math.round((completed.size / STEPS.length) * 100);

  const toggleCompleted = (id: string) => {
    setCompleted((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      localStorage.setItem("os-guidance-completed", JSON.stringify([...next]));
      return next;
    });
  };

  const toggleSection = (key: string) => {
    setExpandedSection((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Update active step based on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveStep(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    Object.values(stepRefs.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToStep = (id: string) => {
    stepRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* ── Back Link ─────────────────────────────────────── */}
      <Link
        to="/student/opensource"
        className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors mb-6 no-underline"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Open Source
      </Link>

      {/* ── Hero ─────────────────────────────────────────── */}
      <div className="relative rounded-2xl bg-gray-950 overflow-hidden mb-8 p-8 md:p-10">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-purple-500/20 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-indigo-500/20 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "28px 28px",
            }}
          />
        </div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-white leading-tight">Open Source Guidance</h1>
              <p className="text-sm text-gray-400 mt-0.5">8 steps from fork to merged pull request</p>
            </div>
          </div>

          {/* Progress */}
          <div className="mt-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-400">
                {completed.size} of {STEPS.length} steps completed
              </span>
              <span className="text-lg font-bold text-white">{progress}%</span>
            </div>
            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── Body: Sidebar + Steps ─────────────────────────── */}
      <div className="flex gap-6 items-start">
        {/* ── Sticky Sidebar (desktop) ── */}
        <aside className="hidden lg:block sticky top-24 w-56 shrink-0">
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-4 shadow-sm">
            <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-3">Steps</p>
            <nav className="space-y-1">
              {STEPS.map((step) => {
                const done = completed.has(step.id);
                const isActive = activeStep === step.id;
                return (
                  <button
                    key={step.id}
                    onClick={() => scrollToStep(step.id)}
                    className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-left transition-all ${
                      isActive
                        ? "bg-gray-950 dark:bg-white text-white dark:text-gray-950"
                        : "hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400"
                    }`}
                  >
                    <span className={`shrink-0 transition-colors ${done ? "text-emerald-500" : isActive ? "text-gray-400" : "text-gray-300"}`}>
                      {done ? <CheckCircle2 className="w-4 h-4" /> : <Circle className="w-4 h-4" />}
                    </span>
                    <span className="text-xs font-medium leading-tight truncate">{step.title}</span>
                  </button>
                );
              })}
            </nav>

            {/* Progress summary */}
            <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-800 dark:border-gray-800">
              <div className="flex items-center justify-between text-xs text-gray-400 dark:text-gray-500 mb-1.5">
                <span>Progress</span>
                <span className="font-semibold text-gray-700 dark:text-gray-300">{progress}%</span>
              </div>
              <div className="h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.4 }}
                />
              </div>
              {progress === 100 && (
                <div className="mt-3 flex items-center gap-1.5 text-xs text-emerald-600 font-medium">
                  <Trophy className="w-3.5 h-3.5" />
                  All steps complete!
                </div>
              )}
            </div>
          </div>
        </aside>

        {/* ── Steps Content ── */}
        <div className="flex-1 min-w-0 space-y-6">
          {STEPS.map((step, idx) => {
            const done = completed.has(step.id);
            const detailsKey = `details-${step.id}`;
            const commandsKey = `commands-${step.id}`;
            const resourcesKey = `resources-${step.id}`;
            const tipsKey = `tips-${step.id}`;

            return (
              <div
                key={step.id}
                id={step.id}
                ref={(el) => { stepRefs.current[step.id] = el; }}
                className={`rounded-2xl border transition-all ${
                  done ? "border-emerald-200 dark:border-emerald-700 bg-emerald-50/30 dark:bg-emerald-900/20" : "border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900"
                } shadow-sm overflow-hidden`}
              >
                {/* Step Header */}
                <div className="p-5 md:p-6">
                  <div className="flex items-start gap-4">
                    {/* Check Button */}
                    <button
                      onClick={() => toggleCompleted(step.id)}
                      className={`w-10 h-10 rounded-xl border-2 flex items-center justify-center shrink-0 transition-all mt-0.5 ${
                        done
                          ? "border-emerald-500 bg-emerald-500 text-white"
                          : "border-gray-200 dark:border-gray-700 hover:border-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 text-gray-300 dark:text-gray-600"
                      }`}
                      title={done ? "Mark as incomplete" : "Mark as complete"}
                    >
                      {done ? (
                        <CheckCircle2 className="w-5 h-5" />
                      ) : (
                        <span className="text-xs font-bold text-gray-400">{idx + 1}</span>
                      )}
                    </button>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className="text-xs font-bold text-gray-300">Step {step.number}</span>
                        {done && (
                          <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-[10px] font-semibold rounded-full">
                            Completed
                          </span>
                        )}
                      </div>
                      <h2 className={`text-lg font-bold mt-0.5 ${done ? "text-emerald-800 dark:text-emerald-400" : "text-gray-900 dark:text-white"}`}>
                        {step.title}
                      </h2>
                      <p className="text-sm text-gray-500 mt-1.5 leading-relaxed">{step.overview}</p>
                    </div>
                  </div>

                  {/* Quick jump line */}
                  <div className="flex flex-wrap gap-2 mt-4 ml-14">
                    {[
                      { key: detailsKey, icon: <BookOpen className="w-3 h-3" />, label: "Details" },
                      { key: commandsKey, icon: <Terminal className="w-3 h-3" />, label: `Commands (${step.commands.length})` },
                      { key: resourcesKey, icon: <ExternalLink className="w-3 h-3" />, label: `Resources (${step.resources.length})` },
                      { key: tipsKey, icon: <Lightbulb className="w-3 h-3" />, label: `Tips (${step.tips.length})` },
                    ].map((s) => (
                      <button
                        key={s.key}
                        onClick={() => toggleSection(s.key)}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all border ${
                          expandedSection[s.key]
                            ? "bg-gray-950 dark:bg-white text-white dark:text-gray-950 border-gray-900 dark:border-gray-200"
                            : "bg-gray-50 dark:bg-gray-800 text-gray-500 border-gray-100 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-700 dark:hover:text-gray-300"
                        }`}
                      >
                        {s.icon}
                        {s.label}
                        <ChevronDown
                          className={`w-3 h-3 transition-transform ${expandedSection[s.key] ? "rotate-180" : ""}`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* ── Expandable: Detailed Steps ── */}
                <AnimatePresence initial={false}>
                  {expandedSection[detailsKey] && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 md:px-6 pb-5 border-t border-gray-100 dark:border-gray-800">
                        <div className="pt-4 space-y-3">
                          {step.details.map((detail, i) => (
                            <div key={i} className="flex gap-3">
                              <span className="w-5 h-5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                                {i + 1}
                              </span>
                              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{detail}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* ── Expandable: Commands ── */}
                <AnimatePresence initial={false}>
                  {expandedSection[commandsKey] && step.commands.length > 0 && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 md:px-6 pb-5 border-t border-gray-100 dark:border-gray-800">
                        <div className="flex items-center gap-2 pt-4 mb-3">
                          <Terminal className="w-4 h-4 text-gray-400" />
                          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                            Terminal Commands
                          </span>
                        </div>
                        <div className="space-y-3">
                          {step.commands.map((cmd, i) => (
                            <CodeBlock key={i} code={cmd.code} label={cmd.label} />
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* ── Expandable: Resources ── */}
                <AnimatePresence initial={false}>
                  {expandedSection[resourcesKey] && step.resources.length > 0 && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 md:px-6 pb-5 border-t border-gray-100 dark:border-gray-800">
                        <div className="flex items-center gap-2 pt-4 mb-3">
                          <ExternalLink className="w-4 h-4 text-gray-400" />
                          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                            Resources
                          </span>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {step.resources.map((res, i) => (
                            <a
                              key={i}
                              href={res.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:bg-white dark:hover:bg-gray-700 hover:shadow-sm transition-all no-underline group"
                            >
                              <span className={`px-2 py-0.5 text-[10px] font-semibold rounded-md shrink-0 mt-0.5 capitalize ${TYPE_STYLES[res.type] ?? "bg-gray-50 text-gray-600"}`}>
                                {res.type}
                              </span>
                              <span className="text-sm text-gray-700 dark:text-gray-300 font-medium leading-tight group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                                {res.title}
                              </span>
                              <ExternalLink className="w-3.5 h-3.5 text-gray-300 group-hover:text-gray-500 ml-auto shrink-0 mt-0.5" />
                            </a>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* ── Expandable: Tips ── */}
                <AnimatePresence initial={false}>
                  {expandedSection[tipsKey] && step.tips.length > 0 && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 md:px-6 pb-5 border-t border-gray-100 dark:border-gray-800">
                        <div className="flex items-center gap-2 pt-4 mb-3">
                          <Lightbulb className="w-4 h-4 text-amber-500" />
                          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                            Pro Tips
                          </span>
                        </div>
                        <div className="space-y-2">
                          {step.tips.map((tip, i) => (
                            <div
                              key={i}
                              className="flex gap-3 p-3.5 rounded-xl bg-amber-50 dark:bg-amber-900/30 border border-amber-100 dark:border-amber-800"
                            >
                              <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                              <p className="text-sm text-amber-800 dark:text-amber-300 leading-relaxed">{tip}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}

          {/* ── Completion Banner ── */}
          <AnimatePresence>
            {progress === 100 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 p-6 text-center shadow-lg"
              >
                <Trophy className="w-10 h-10 text-white mx-auto mb-3" />
                <h3 className="text-xl font-bold text-white mb-1">You've completed the Open Source Guidance!</h3>
                <p className="text-emerald-100 text-sm max-w-md mx-auto">
                  You now have everything you need to contribute to open-source. Browse curated repositories below and make your first PR.
                </p>
                <Link
                  to="/student/opensource"
                  className="inline-flex items-center gap-2 mt-4 px-6 py-2.5 bg-white text-emerald-700 text-sm font-semibold rounded-xl hover:bg-emerald-50 transition-colors no-underline"
                >
                  <GitBranch className="w-4 h-4" />
                  Browse Repositories
                </Link>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── Resource Library ── */}
          <div className="rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm overflow-hidden">
            <div className="p-5 md:p-6 border-b border-gray-100">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">Resource Library</h2>
              <p className="text-sm text-gray-500 mt-1">
                Curated links organized by category — everything you need to go from beginner to contributor.
              </p>
            </div>
            <div className="p-5 md:p-6 grid md:grid-cols-2 gap-5">
              {RESOURCE_LIBRARY.map((category) => (
                <div key={category.category}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`w-2.5 h-2.5 rounded-full ${category.color}`} />
                    <h3 className="text-sm font-bold text-gray-800 dark:text-gray-200">{category.category}</h3>
                  </div>
                  <div className="space-y-2">
                    {category.items.map((item) => (
                      <a
                        key={item.title}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-sm transition-all no-underline group"
                      >
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 truncate group-hover:text-gray-950 dark:group-hover:text-white transition-colors">
                            {item.title}
                          </p>
                          <p className="text-xs text-gray-400 mt-0.5">{item.desc}</p>
                        </div>
                        <ExternalLink className="w-3.5 h-3.5 text-gray-300 group-hover:text-gray-500 shrink-0 mt-0.5" />
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
