import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2, Circle, ArrowLeft, GitPullRequest, ChevronDown,
  Copy, Check, ExternalLink, BookOpen, Terminal, Lightbulb, Link2, Trophy,
} from "lucide-react";
import { Link } from "react-router";
import { SEO } from "../../../components/SEO";

// ─── Types ─────────────────────────────────────────────────────
interface Resource {
  title: string;
  url: string;
  type: "article" | "tool" | "video" | "docs" | "interactive";
}

interface Command {
  label: string;
  code: string;
}

interface Step {
  id: string;
  number: number;
  title: string;
  description: string;
  details: string[];
  commands: Command[];
  resources: Resource[];
  tips: string[];
}

// ─── Data ──────────────────────────────────────────────────────
const STEPS: Step[] = [
  {
    id: "setup",
    number: 1,
    title: "Set Up Git & GitHub",
    description: "Install Git, configure your identity, and create a GitHub account. These are the foundational tools for every open source contribution.",
    details: [
      "Download Git from git-scm.com/downloads and follow the installer.",
      "Set your name and email — this information is embedded in every commit you make.",
      "Create a free GitHub account if you don't have one yet.",
      "Generate an SSH key so you don't have to type your password on every push.",
      "Add your SSH public key to GitHub under Settings → SSH and GPG keys.",
    ],
    commands: [
      { label: "Set your Git username", code: "git config --global user.name \"Your Name\"" },
      { label: "Set your Git email", code: "git config --global user.email \"you@example.com\"" },
      { label: "Set default branch to main", code: "git config --global init.defaultBranch main" },
      { label: "Generate an SSH key", code: "ssh-keygen -t ed25519 -C \"you@example.com\"" },
      { label: "Copy SSH public key to clipboard", code: "cat ~/.ssh/id_ed25519.pub" },
      { label: "Test your GitHub SSH connection", code: "ssh -T git@github.com" },
    ],
    resources: [
      { title: "Official Git Download", url: "https://git-scm.com/downloads", type: "tool" },
      { title: "GitHub Docs: Setup Guide", url: "https://docs.github.com/en/get-started/quickstart/set-up-git", type: "docs" },
      { title: "Generating a new SSH key (GitHub)", url: "https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent", type: "docs" },
    ],
    tips: [
      "Use your real name for commits — maintainers prefer it, and it builds your public identity.",
      "Set VS Code (or your editor) as the default Git editor: git config --global core.editor \"code --wait\"",
    ],
  },
  {
    id: "git-basics",
    number: 2,
    title: "Learn Git Fundamentals",
    description: "Understand the core Git workflow: clone, branch, add, commit, push, and pull. You don't need to know everything — just the essentials for contributing.",
    details: [
      "clone: Download a remote repo to your local machine.",
      "branch: Create an isolated copy of the codebase for your changes.",
      "add: Stage specific file changes to be included in the next commit.",
      "commit: Save a snapshot of your staged changes with a message.",
      "push: Upload your local commits to the remote repository.",
      "pull: Download and merge the latest remote changes into your local branch.",
      "merge & rebase: Integrate changes from one branch into another.",
    ],
    commands: [
      { label: "Clone a repository", code: "git clone https://github.com/owner/repo.git" },
      { label: "Check current status", code: "git status" },
      { label: "See changes you made", code: "git diff" },
      { label: "Stage all changed files", code: "git add ." },
      { label: "Stage a specific file", code: "git add path/to/file.js" },
      { label: "Commit with a message", code: "git commit -m \"fix: correct null check in parseUser\"" },
      { label: "Push branch to remote", code: "git push origin your-branch-name" },
      { label: "Pull latest changes", code: "git pull upstream main" },
      { label: "View commit history", code: "git log --oneline" },
    ],
    resources: [
      { title: "Learn Git Branching (interactive)", url: "https://learngitbranching.js.org", type: "interactive" },
      { title: "GitHub Git Cheatsheet", url: "https://education.github.com/git-cheat-sheet-education.pdf", type: "docs" },
      { title: "Pro Git Book (free)", url: "https://git-scm.com/book/en/v2", type: "article" },
      { title: "Oh My Git! (visual game)", url: "https://ohmygit.org", type: "interactive" },
    ],
    tips: [
      "Commit early and often. Small, focused commits are easier to review.",
      "Use git log --oneline --graph to visualize your branch history.",
      "Never force-push to main in a shared repo — it rewrites history for everyone.",
    ],
  },
  {
    id: "find-project",
    number: 3,
    title: "Choose Your First Project",
    description: "Pick a repo that matches your skill level and interests. The best first project is one you've actually used, or one with a strong beginner-support culture.",
    details: [
      "Look for repos with a CONTRIBUTING.md — it means the maintainers care about new contributors.",
      "Check the issue tracker: more than 50 open issues usually means an active project.",
      "Look for 'good first issue', 'help wanted', or 'beginner friendly' labels on issues.",
      "Check the last commit date — avoid repos that haven't been updated in 6+ months.",
      "Read recent merged PRs to understand the review style and codebase conventions.",
      "Start with a project in a language you already know — open source is hard enough without learning the language too.",
    ],
    commands: [
      { label: "Search GitHub for good first issues", code: "https://github.com/search?q=label%3A%22good+first+issue%22&type=issues&state=open" },
      { label: "Clone the repo you want to contribute to", code: "git clone https://github.com/owner/repo.git\ncd repo" },
      { label: "Read the project's contributing guide", code: "cat CONTRIBUTING.md" },
    ],
    resources: [
      { title: "Good First Issue", url: "https://goodfirstissue.dev", type: "tool" },
      { title: "Up For Grabs", url: "https://up-for-grabs.net", type: "tool" },
      { title: "First Timers Only", url: "https://www.firsttimersonly.com", type: "tool" },
      { title: "CodeTriage — issues by language", url: "https://www.codetriage.com", type: "tool" },
      { title: "GitHub Explore Trending", url: "https://github.com/explore", type: "tool" },
    ],
    tips: [
      "Pick an issue you can fix end-to-end without help — if you can't understand the problem, pick a different issue.",
      "Your first contribution can be documentation! Fixing a typo or improving a README is a real contribution.",
    ],
  },
  {
    id: "read-docs",
    number: 4,
    title: "Read the Contributing Guide",
    description: "Every serious open source project has a CONTRIBUTING.md. Read it thoroughly before writing a single line of code — skipping this step is the #1 reason PRs get rejected.",
    details: [
      "CONTRIBUTING.md explains how to set up the development environment.",
      "It specifies the branch naming conventions (e.g., feat/, fix/, docs/).",
      "It defines the commit message format — many projects use Conventional Commits.",
      "It outlines the testing requirements: do you need to add tests? Run lint?",
      "It links to the Code of Conduct — follow it, even in small things.",
      "Some projects also have a DEVELOPMENT.md or docs/contributing/ folder with additional detail.",
    ],
    commands: [
      { label: "Install project dependencies", code: "npm install\n# or\npip install -r requirements.txt\n# or\ngo mod tidy" },
      { label: "Run the test suite to verify your setup", code: "npm test\n# or\npytest\n# or\ngo test ./..." },
      { label: "Run the linter before committing", code: "npm run lint\n# or\npre-commit run --all-files" },
    ],
    resources: [
      { title: "Conventional Commits Spec", url: "https://www.conventionalcommits.org", type: "docs" },
      { title: "How to Contribute to Open Source (opensource.guide)", url: "https://opensource.guide/how-to-contribute/", type: "article" },
      { title: "The Art of Writing a Good PR", url: "https://github.blog/developer-skills/github/how-to-write-the-perfect-pull-request/", type: "article" },
    ],
    tips: [
      "If CONTRIBUTING.md doesn't exist, look for documentation in the wiki or docs/ folder.",
      "Run the test suite on the unchanged codebase first — if it already fails, you have a setup problem, not a code problem.",
    ],
  },
  {
    id: "find-issue",
    number: 5,
    title: "Find a Good First Issue",
    description: "Scan the issue tracker for issues labeled 'good first issue'. Read the issue thread completely before claiming it — someone may have already started.",
    details: [
      "Filter by label: good first issue, help wanted, or beginner-friendly.",
      "Read the entire issue thread including all comments — the solution might already be partially discussed.",
      "Check if someone is already assigned or has left a comment saying they're working on it.",
      "If unclear, leave a comment asking clarifying questions before starting.",
      "Prefer issues with a clear scope — avoid 'refactor everything' or 'improve performance' with no specifics.",
    ],
    commands: [
      { label: "GitHub search: good first issues", code: "# In the repo, go to Issues → Labels → \"good first issue\"" },
      { label: "GitHub CLI: list issues with label", code: "gh issue list --label \"good first issue\" --state open" },
    ],
    resources: [
      { title: "GitHub Issues Documentation", url: "https://docs.github.com/en/issues/tracking-your-work-with-issues/about-issues", type: "docs" },
      { title: "GitHub CLI Guide", url: "https://cli.github.com/manual/gh_issue_list", type: "docs" },
      { title: "Issuehub.io — filter issues by language", url: "https://issuehub.pro", type: "tool" },
    ],
    tips: [
      "Prioritize issues that are less than 30 days old — they're more likely to still be relevant.",
      "Read 2-3 merged PRs that fixed similar issues to understand the expected solution pattern.",
    ],
  },
  {
    id: "comment-assign",
    number: 6,
    title: "Comment & Get Assigned",
    description: "Before coding, leave a comment on the issue saying you'd like to work on it. Ask to be assigned. This prevents duplicate work and shows maintainers you're engaged.",
    details: [
      "A simple 'I'd like to work on this issue. Could I get assigned?' is enough.",
      "If the issue is ambiguous, ask clarifying questions in your comment.",
      "Wait for maintainer confirmation before starting — some projects have strict assignment policies.",
      "If no response in 48-72 hours, it's usually fine to proceed (note this in your PR).",
      "Don't submit a PR without first being assigned on active projects — it wastes your time.",
    ],
    commands: [
      { label: "GitHub CLI: comment on an issue", code: "gh issue comment 123 --body \"I'd like to work on this. Could I be assigned?\"" },
    ],
    resources: [
      { title: "How to Comment Professionally on Issues", url: "https://opensource.guide/how-to-contribute/#how-to-submit-a-contribution", type: "article" },
    ],
    tips: [
      "A good comment demonstrates you've read and understood the issue — briefly summarize your proposed approach.",
      "For high-traffic repos, maintainers receive many 'assign me' requests. Stand out by proposing your solution approach in the comment.",
    ],
  },
  {
    id: "fork-clone",
    number: 7,
    title: "Fork, Clone & Set Upstream",
    description: "Fork the repo to your GitHub account, clone your fork locally, and add the original repo as 'upstream' so you can pull future changes.",
    details: [
      "Click 'Fork' on the GitHub repo page to create your personal copy.",
      "Clone your fork (not the original) — you have write access to your fork.",
      "Add the original repo as 'upstream' remote to pull future maintainer changes.",
      "Keep your fork's main branch in sync with upstream before starting any new work.",
    ],
    commands: [
      { label: "Clone your fork", code: "git clone git@github.com:YOUR-USERNAME/repo-name.git\ncd repo-name" },
      { label: "Add upstream remote", code: "git remote add upstream https://github.com/original-owner/repo-name.git" },
      { label: "Verify remotes are set up correctly", code: "git remote -v" },
      { label: "Fetch upstream changes", code: "git fetch upstream" },
      { label: "Sync your local main with upstream", code: "git checkout main\ngit merge upstream/main" },
    ],
    resources: [
      { title: "GitHub Docs: Fork a Repo", url: "https://docs.github.com/en/get-started/quickstart/fork-a-repo", type: "docs" },
      { title: "Syncing a Fork (GitHub Docs)", url: "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork", type: "docs" },
    ],
    tips: [
      "Always pull from upstream/main (the original repo), not origin/main (your fork).",
      "Run git remote -v after setup — you should see both 'origin' (your fork) and 'upstream' (original) listed.",
    ],
  },
  {
    id: "create-branch",
    number: 8,
    title: "Create a Feature Branch",
    description: "Never commit directly to main. Always create a descriptive branch for each issue you're working on. Branch names should be short but meaningful.",
    details: [
      "Branch from the latest main (after syncing with upstream).",
      "Use a naming convention that includes the issue number and a brief description.",
      "Common patterns: fix/issue-123-null-check, feat/add-dark-mode, docs/update-readme.",
      "One issue = one branch. Don't bundle multiple fixes into one branch.",
    ],
    commands: [
      { label: "Create and switch to a new branch", code: "git checkout -b fix/issue-123-null-check" },
      { label: "List all local branches", code: "git branch" },
      { label: "Switch between branches", code: "git checkout main" },
      { label: "Delete a branch (after merging)", code: "git branch -d fix/issue-123-null-check" },
    ],
    resources: [
      { title: "Git Branching Explained", url: "https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell", type: "docs" },
      { title: "Interactive Branch Visualization", url: "https://learngitbranching.js.org", type: "interactive" },
    ],
    tips: [
      "Lowercase, hyphen-separated branch names are convention (no spaces, no uppercase).",
      "If you're on main by mistake and already have uncommitted changes, use git stash before switching.",
    ],
  },
  {
    id: "make-changes",
    number: 9,
    title: "Make Your Changes",
    description: "Write focused, minimal code that solves only the reported issue. Read the codebase before writing — understand patterns and conventions in use.",
    details: [
      "Read at least 5-10 related files before writing any code — context is everything.",
      "Match the existing code style, indentation, and naming conventions exactly.",
      "Minimize the diff — change only what's necessary. Unrelated cleanups belong in a separate PR.",
      "Add or update tests if the project requires them (most do).",
      "If you're unsure about an approach, comment on the issue asking for guidance.",
      "Test your change manually before committing.",
    ],
    commands: [
      { label: "Run tests after your change", code: "npm test -- --watch\n# or\npytest tests/ -v\n# or\ngo test ./..." },
      { label: "Check for lint errors", code: "npm run lint\n# or\nflake8 .\n# or\ngolangci-lint run" },
      { label: "Preview your diff before staging", code: "git diff" },
    ],
    resources: [
      { title: "How to Read a Codebase", url: "https://blog.pragmaticengineer.com/a-comment-on-the-pull-request-review/", type: "article" },
      { title: "Writing Testable Code", url: "https://testing.googleblog.com", type: "article" },
    ],
    tips: [
      "Use your IDE's 'Go to Definition' to trace how functions are called before modifying them.",
      "If the fix requires a large refactor — don't. Fix the specific issue and note the larger concern in the PR description.",
    ],
  },
  {
    id: "commit",
    number: 10,
    title: "Write a Clear Commit Message",
    description: "A good commit message explains WHY a change was made, not just what changed. Use Conventional Commits format if the project requires it.",
    details: [
      "Format: <type>(<scope>): <short description>",
      "Types: fix, feat, docs, style, refactor, test, chore.",
      "Keep the subject line under 72 characters.",
      "Add a blank line between subject and body if you need to explain more.",
      "Reference the issue number: 'Fixes #123' or 'Closes #456' in the commit or PR body.",
    ],
    commands: [
      { label: "Stage specific files", code: "git add src/utils/parser.js\ngit add tests/parser.test.js" },
      { label: "Commit with a conventional message", code: "git commit -m \"fix(parser): handle null input in parseUser function\n\nPreviously, parseUser() threw an uncaught TypeError when the\ninput object had a null 'name' field. Added early return guard.\n\nFixes #123\"" },
      { label: "Amend last commit (before pushing only)", code: "git commit --amend" },
      { label: "View your commit in detail", code: "git show" },
    ],
    resources: [
      { title: "Conventional Commits", url: "https://www.conventionalcommits.org/en/v1.0.0/", type: "docs" },
      { title: "How to Write a Commit Message (Chris Beams)", url: "https://cbea.ms/git-commit/", type: "article" },
    ],
    tips: [
      "Don't use messages like 'fix bug' or 'update code' — be specific.",
      "If you're fixing a bug, briefly describe the root cause in the commit body.",
    ],
  },
  {
    id: "push-pr",
    number: 11,
    title: "Push & Open a Pull Request",
    description: "Push your branch to your fork and open a PR against the original repo. Fill in the PR template carefully — a well-written PR description dramatically improves merge speed.",
    details: [
      "Push your branch to your fork (origin), not upstream.",
      "Go to GitHub and click 'Compare & pull request'.",
      "Fill in the PR template completely — don't leave sections blank.",
      "Link the issue in the PR body using 'Closes #123' or 'Fixes #456'.",
      "Keep the PR focused — one issue per PR.",
      "Add screenshots or test output if it helps reviewers understand the change.",
      "Mark as Draft if it's not ready for review yet.",
    ],
    commands: [
      { label: "Push your branch to your fork", code: "git push origin fix/issue-123-null-check" },
      { label: "Open a PR via GitHub CLI", code: "gh pr create --title \"fix(parser): handle null in parseUser\" --body \"Closes #123\n\n## Changes\n- Added null guard in parseUser()\n- Added test case for null input\"" },
      { label: "Check your PR status", code: "gh pr status" },
    ],
    resources: [
      { title: "About Pull Requests (GitHub Docs)", url: "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests", type: "docs" },
      { title: "GitHub CLI pr create", url: "https://cli.github.com/manual/gh_pr_create", type: "docs" },
      { title: "How to Write a Perfect Pull Request (GitHub Blog)", url: "https://github.blog/developer-skills/github/how-to-write-the-perfect-pull-request/", type: "article" },
    ],
    tips: [
      "Run the tests one more time right before pushing — CI failures delay your PR.",
      "Check the PR against the base branch on GitHub before submitting — look at the 'Files changed' tab.",
    ],
  },
  {
    id: "review",
    number: 12,
    title: "Respond to Review & Get Merged",
    description: "Maintainers will leave review comments. Respond professionally, make requested changes on the same branch, and push — the PR updates automatically.",
    details: [
      "Respond to all review comments — even if just to say 'Done' or 'Fixed in the latest commit'.",
      "Make changes on the same branch and push — the PR updates automatically.",
      "Don't create a new PR for review changes — that's a red flag for maintainers.",
      "If you disagree with a review comment, explain your reasoning politely — maintainers respect thoughtful pushback.",
      "After making changes, leave a comment summarizing what you updated.",
      "Once merged, delete your branch to keep your fork clean.",
      "Celebrate and add it to your portfolio!",
    ],
    commands: [
      { label: "Pull upstream changes if branch is behind", code: "git fetch upstream\ngit rebase upstream/main" },
      { label: "Push updated branch (after making review changes)", code: "git push origin fix/issue-123-null-check" },
      { label: "Force-push if you rebased (with caution)", code: "git push --force-with-lease origin fix/issue-123-null-check" },
      { label: "Delete remote branch after merge", code: "git push origin --delete fix/issue-123-null-check" },
      { label: "Delete local branch after merge", code: "git branch -d fix/issue-123-null-check" },
    ],
    resources: [
      { title: "How to Handle Code Review Comments", url: "https://mtlynch.io/code-review-love/", type: "article" },
      { title: "Git Rebase Explained", url: "https://git-scm.com/book/en/v2/Git-Branching-Rebasing", type: "docs" },
    ],
    tips: [
      "Use git push --force-with-lease instead of --force when rebasing — it's safer and won't overwrite someone else's changes.",
      "Keep reviewing merged PRs in the project to learn how senior contributors write code.",
    ],
  },
];

const RESOURCE_LIBRARY = [
  {
    category: "Interactive Learning",
    items: [
      { title: "Learn Git Branching", url: "https://learngitbranching.js.org", desc: "Visual, interactive Git exercises in your browser" },
      { title: "Oh My Git!", url: "https://ohmygit.org", desc: "A game that teaches Git concepts visually" },
      { title: "GitHub Skills", url: "https://skills.github.com", desc: "Official GitHub interactive courses" },
    ],
  },
  {
    category: "Finding Projects",
    items: [
      { title: "Good First Issue", url: "https://goodfirstissue.dev", desc: "Curated easy issues from popular repos" },
      { title: "Up For Grabs", url: "https://up-for-grabs.net", desc: "Issues specifically for new contributors" },
      { title: "First Timers Only", url: "https://www.firsttimersonly.com", desc: "Issues reserved for absolute first contributions" },
      { title: "CodeTriage", url: "https://www.codetriage.com", desc: "Open source issues delivered to your inbox" },
    ],
  },
  {
    category: "Reference & Docs",
    items: [
      { title: "Pro Git Book (free)", url: "https://git-scm.com/book/en/v2", desc: "Comprehensive free book on Git" },
      { title: "Conventional Commits", url: "https://www.conventionalcommits.org", desc: "Commit message specification" },
      { title: "opensource.guide", url: "https://opensource.guide", desc: "How to contribute to open source (by GitHub)" },
      { title: "GitHub Docs", url: "https://docs.github.com", desc: "Official GitHub platform documentation" },
    ],
  },
  {
    category: "Community",
    items: [
      { title: "Dev.to #opensource", url: "https://dev.to/t/opensource", desc: "Articles and first-PR stories" },
      { title: "Reddit r/opensource", url: "https://reddit.com/r/opensource", desc: "Q&A and open source discussions" },
      { title: "GitHub Discussions", url: "https://github.com", desc: "Ask questions directly in project repos" },
    ],
  },
];

const STORAGE_KEY = "first-pr-roadmap-completed";

// ─── Code Block ──────────────────────────────────────────────────
function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };
  return (
    <div className="relative group bg-gray-950 dark:bg-gray-950 rounded-xl overflow-hidden">
      <pre className="text-xs text-gray-200 p-3 pr-10 overflow-x-auto leading-relaxed font-mono">{code}</pre>
      <button
        onClick={copy}
        className="absolute top-2 right-2 p-1.5 rounded-md bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white transition-colors opacity-0 group-hover:opacity-100"
      >
        {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
      </button>
    </div>
  );
}

// ─── Step Card ───────────────────────────────────────────────────
function StepCard({
  step, completed, onToggle, index,
}: { step: Step; completed: boolean; onToggle: () => void; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState<"details" | "commands" | "resources" | "tips">("details");

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 + index * 0.03 }}
      id={`step-${step.id}`}
      className={`bg-white dark:bg-gray-900 border rounded-2xl overflow-hidden transition-all duration-300 ${
        completed
          ? "border-green-200 dark:border-green-800 hover:shadow-xl hover:shadow-green-100/50 dark:hover:shadow-green-900/20"
          : "border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50"
      }`}
    >
      {/* Header */}
      <div
        className="flex items-center gap-4 px-5 py-4 cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <button
          onClick={(e) => { e.stopPropagation(); onToggle(); }}
          className="shrink-0"
        >
          {completed ? (
            <CheckCircle2 className="w-5 h-5 text-green-500" />
          ) : (
            <Circle className="w-5 h-5 text-gray-300 dark:text-gray-600 hover:text-gray-400 dark:hover:text-gray-500 transition-colors" />
          )}
        </button>

        <div className="flex-1 min-w-0">
          <span className={`text-sm font-medium ${
            completed
              ? "text-gray-400 dark:text-gray-500 line-through"
              : "text-gray-950 dark:text-white"
          }`}>
            {step.title}
          </span>
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5 line-clamp-1">
            {step.description}
          </p>
        </div>

        <span className={`text-xs font-bold shrink-0 ${
          completed ? "text-green-500" : "text-gray-400 dark:text-gray-500"
        }`}>
          {step.number}/12
        </span>

        <ChevronDown className={`w-4 h-4 text-gray-400 dark:text-gray-500 shrink-0 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`} />
      </div>

      {/* Expanded content */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 space-y-4">
              <div className="border-t border-gray-100 dark:border-gray-800 pt-4" />

              {/* Tabs */}
              <div className="flex items-center gap-2 bg-gray-50 dark:bg-gray-800/50 rounded-xl p-1">
                {(["details", "commands", "resources", "tips"] as const).filter((tab) => {
                  if (tab === "commands") return step.commands.length > 0;
                  if (tab === "resources") return step.resources.length > 0;
                  if (tab === "tips") return step.tips.length > 0;
                  return true;
                }).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      activeTab === tab
                        ? "bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-sm"
                        : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                    }`}
                  >
                    {tab === "details" && <BookOpen className="w-3 h-3" />}
                    {tab === "commands" && <Terminal className="w-3 h-3" />}
                    {tab === "resources" && <Link2 className="w-3 h-3" />}
                    {tab === "tips" && <Lightbulb className="w-3 h-3" />}
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>

              {/* Tab content */}
              {activeTab === "details" && (
                <ul className="space-y-2">
                  {step.details.map((d, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600 dark:text-gray-400">
                      <span className="w-5 h-5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                      {d}
                    </li>
                  ))}
                </ul>
              )}

              {activeTab === "commands" && (
                <div className="space-y-3">
                  {step.commands.map((cmd, i) => (
                    <div key={i}>
                      <p className="text-xs font-medium text-gray-600 dark:text-gray-400 mb-1.5">{cmd.label}</p>
                      <CodeBlock code={cmd.code} />
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
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 no-underline group transition-all"
                    >
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{r.title}</p>
                        <p className="text-xs text-gray-400 dark:text-gray-500 capitalize">{r.type}</p>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-gray-300 dark:text-gray-600 group-hover:text-indigo-500 shrink-0" />
                    </a>
                  ))}
                </div>
              )}

              {activeTab === "tips" && (
                <div className="space-y-2">
                  {step.tips.map((tip, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-800">
                      <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{tip}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── Page ────────────────────────────────────────────────────────
export default function FirstPRRoadmapPage() {
  const [completed, setCompleted] = useState<Set<string>>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? new Set(JSON.parse(stored)) : new Set();
    } catch {
      return new Set();
    }
  });

  const saveCompleted = useCallback((next: Set<string>) => {
    setCompleted(next);
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify([...next])); } catch { /* ignore */ }
  }, []);

  const toggle = (id: string) => {
    const next = new Set(completed);
    next.has(id) ? next.delete(id) : next.add(id);
    saveCompleted(next);
  };

  const resetAll = () => saveCompleted(new Set());

  const pct = Math.round((completed.size / STEPS.length) * 100);
  const allDone = completed.size === STEPS.length;

  return (
    <div className="relative pb-12">
      <SEO title="First PR Roadmap — Open Source" noIndex />

      {/* Atmospheric background */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-150 h-150 bg-indigo-100 dark:bg-indigo-900/20 rounded-full blur-3xl opacity-40" />
        <div className="absolute -bottom-32 -left-32 w-125 h-125 bg-slate-100 dark:bg-slate-900/20 rounded-full blur-3xl opacity-40" />
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-10 mt-6"
      >
        <Link to="/student/opensource" className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors mb-4 no-underline">
          <ArrowLeft className="w-4 h-4" />
          Open Source
        </Link>

        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-gray-950 dark:text-white mb-3">
          First PR <span className="text-gradient-accent">Roadmap</span>
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-500 max-w-lg mx-auto">
          12 steps from zero to your first merged pull request
        </p>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="grid grid-cols-3 gap-4 mb-8"
      >
        {[
          { icon: GitPullRequest, value: STEPS.length, label: "Steps", iconColor: "text-indigo-500" },
          { icon: CheckCircle2, value: completed.size, label: "Completed", iconColor: "text-green-500" },
          { icon: Trophy, value: `${pct}%`, label: "Progress", iconColor: "text-amber-500" },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
            className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-5 text-center"
          >
            <stat.icon className={`w-6 h-6 ${stat.iconColor} mx-auto mb-3`} />
            <p className="font-display text-2xl font-bold text-gray-950 dark:text-white">{stat.value}</p>
            <p className="text-xs text-gray-400 dark:text-gray-500 font-medium mt-0.5">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Progress bar */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.15 }}
        className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-5 mb-8"
      >
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Overall Progress</span>
          <div className="flex items-center gap-3">
            {completed.size > 0 && (
              <button onClick={resetAll} className="text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                Reset
              </button>
            )}
            <span className="text-sm font-semibold text-gray-900 dark:text-white">
              {completed.size} / {STEPS.length} ({pct}%)
            </span>
          </div>
        </div>
        <div className="w-full h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${pct}%` }}
            transition={{ duration: 0.6 }}
            className={`h-full rounded-full ${pct === 100 ? "bg-green-500" : "bg-indigo-500"}`}
          />
        </div>
      </motion.div>

      {/* Completion banner */}
      <AnimatePresence>
        {allDone && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="mb-8 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl p-5 flex items-center gap-4"
          >
            <Trophy className="w-8 h-8 text-green-500 shrink-0" />
            <div>
              <p className="text-base font-bold text-green-900 dark:text-green-300">You're an open source contributor!</p>
              <p className="text-sm text-green-700 dark:text-green-400 mt-0.5">You've completed all 12 steps. Share your first PR on LinkedIn and add it to your resume!</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Steps */}
      <div className="space-y-2 mb-12">
        {STEPS.map((step, i) => (
          <StepCard
            key={step.id}
            step={step}
            completed={completed.has(step.id)}
            onToggle={() => toggle(step.id)}
            index={i}
          />
        ))}
      </div>

      {/* Resource Library */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mb-8"
      >
        <h2 className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-4">
          Resource Library
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {RESOURCE_LIBRARY.map((cat) => (
            <div key={cat.category} className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-5">
              <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-4">{cat.category}</h3>
              <div className="space-y-2.5">
                {cat.items.map((item) => (
                  <a
                    key={item.title}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 group no-underline"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-gray-300 dark:text-gray-600 group-hover:text-indigo-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-tight">{item.title}</p>
                      <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{item.desc}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Quick Command Reference */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35 }}
      >
        <h2 className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-4">
          Quick Command Reference
        </h2>
        <div className="bg-gray-950 rounded-2xl p-6 overflow-x-auto">
          <p className="text-xs text-gray-500 mb-4 font-mono">// Complete workflow: fork &rarr; fix &rarr; PR</p>
          <div className="space-y-1">
            {[
              "git clone git@github.com:YOU/repo.git && cd repo",
              "git remote add upstream https://github.com/original/repo.git",
              "git fetch upstream && git merge upstream/main",
              "git checkout -b fix/issue-123-your-fix",
              "# ... make your changes ...",
              "git add path/to/changed/file.js",
              'git commit -m "fix(scope): describe your fix\\n\\nCloses #123"',
              "git push origin fix/issue-123-your-fix",
              "# Open PR on GitHub and fill in the template",
              "# After review comments: make changes, then:",
              "git add . && git commit -m \"address review: refactor null check\"",
              "git push origin fix/issue-123-your-fix  # PR updates automatically",
            ].map((line, i) => (
              <p key={i} className={`text-xs font-mono ${line.startsWith("#") ? "text-gray-500" : "text-emerald-400"}`}>
                {line}
              </p>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
