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
    title: "Set Up Your Tools",
    description: "You need three things: Git installed locally, a GitHub account, and SSH keys configured. This takes 15 minutes and you only do it once.",
    details: [
      "Install Git from git-scm.com - on macOS you likely already have it. Run 'git --version' to check.",
      "Set your name and email in Git. This isn't just config - these get permanently baked into every commit you make, so use your real name.",
      "Create a GitHub account if you don't have one. Pick a professional username - recruiters and maintainers will see it.",
      "Set up SSH keys. Yes, right now. HTTPS works but you'll get tired of typing your password on every push. SSH is a one-time setup that saves you hundreds of password prompts.",
      "Test your connection with 'ssh -T git@github.com'. If you see 'Hi username!', you're good.",
      "Set your default editor. If you use VS Code: git config --global core.editor \"code --wait\". This saves you from getting stuck in vim during a rebase.",
    ],
    commands: [
      { label: "Set your Git identity", code: "git config --global user.name \"Your Name\"\ngit config --global user.email \"you@example.com\"" },
      { label: "Set default branch name to main", code: "git config --global init.defaultBranch main" },
      { label: "Generate SSH key (ed25519 is the modern standard)", code: "ssh-keygen -t ed25519 -C \"you@example.com\"" },
      { label: "Copy your public key, then add it at GitHub → Settings → SSH Keys", code: "cat ~/.ssh/id_ed25519.pub" },
      { label: "Test your SSH connection to GitHub", code: "ssh -T git@github.com" },
    ],
    resources: [
      { title: "Git Downloads", url: "https://git-scm.com/downloads", type: "tool" },
      { title: "GitHub SSH Setup Guide", url: "https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent", type: "docs" },
      { title: "GitHub Skills - Intro Course", url: "https://skills.github.com", type: "interactive" },
    ],
    tips: [
      "Use your real name, not a handle. Maintainers reviewing your PR see your commit author - 'John Doe' gets more trust than 'xX_coder_Xx'.",
      "If SSH setup feels intimidating, use GitHub Desktop for your first few contributions. You can always switch to CLI later.",
    ],
  },
  {
    id: "git-basics",
    number: 2,
    title: "Learn the 7 Commands You Actually Need",
    description: "Git has hundreds of commands. For your first contribution, you need exactly seven: clone, branch, add, commit, push, pull, and status. Everything else can wait.",
    details: [
      "git clone - Downloads a remote repo to your machine. You'll do this once per project.",
      "git status - Your best friend. Run it constantly. It tells you what's changed, what's staged, and what branch you're on.",
      "git add - Stages specific files for commit. Avoid 'git add .' until you know what you're doing - it stages everything including files you didn't mean to change.",
      "git commit - Saves a snapshot of your staged changes. Think of it as a save point in a game.",
      "git push - Uploads your commits to GitHub. Nothing is visible to others until you push.",
      "git pull - Downloads and merges the latest changes from the remote. Run this before starting new work.",
      "git branch / git checkout -b - Creates and switches between branches. You'll create one branch per issue you work on.",
    ],
    commands: [
      { label: "Clone a repository", code: "git clone git@github.com:owner/repo.git\ncd repo" },
      { label: "Check what's going on (run this constantly)", code: "git status" },
      { label: "See exactly what you changed", code: "git diff" },
      { label: "Stage a specific file", code: "git add src/utils/parser.js" },
      { label: "Commit with a descriptive message", code: "git commit -m \"fix: handle null input in parseUser\"" },
      { label: "Push your branch to GitHub", code: "git push origin your-branch-name" },
      { label: "Pull latest changes from upstream", code: "git pull upstream main" },
    ],
    resources: [
      { title: "Learn Git Branching - best interactive tutorial", url: "https://learngitbranching.js.org", type: "interactive" },
      { title: "Oh My Git! - learn Git through a game", url: "https://ohmygit.org", type: "interactive" },
      { title: "Git Cheat Sheet (PDF)", url: "https://education.github.com/git-cheat-sheet-education.pdf", type: "docs" },
      { title: "Pro Git Book - free, comprehensive reference", url: "https://git-scm.com/book/en/v2", type: "article" },
    ],
    tips: [
      "Run 'git status' before and after every command. It's impossible to break things if you always know the current state.",
      "Don't try to learn rebase, cherry-pick, or bisect yet. You won't need them for months. The 7 commands above cover 95% of contribution work.",
      "If you mess something up, don't panic. Git almost never deletes data. Google the error message - someone has had the exact same problem.",
    ],
  },
  {
    id: "find-project",
    number: 3,
    title: "Find a Project Worth Contributing To",
    description: "The best first project isn't the most popular one - it's one you've actually used, in a language you already know, with maintainers who actively help newcomers.",
    details: [
      "Start with software you use daily. If you use VS Code, Tailwind, React, or any open source tool - that's your best candidate. You already understand what it does.",
      "Check for a CONTRIBUTING.md file. Its existence means the maintainers have invested time into welcoming new contributors. No CONTRIBUTING.md? Move on.",
      "Look at recent activity: when was the last commit? Are PRs being reviewed? A repo with no activity in 6 months means your PR will sit unreviewed forever.",
      "Check the issue tracker for 'good first issue' or 'help wanted' labels. If a project has these labels, they're actively inviting new contributors.",
      "Read 2-3 recently merged PRs. This shows you the code style, review culture, and what kind of changes get accepted.",
      "Avoid massive, competitive projects for your first PR (Linux kernel, Kubernetes, TensorFlow). Start with mid-size projects (1k-20k stars) where maintainers have time for newcomers.",
      "Your first contribution can be documentation - fixing a typo, improving a README, or adding a code comment. It's a real contribution and a great way to understand the review process.",
    ],
    commands: [
      { label: "Search GitHub for beginner-friendly issues", code: "# Visit: github.com/search?q=label:\"good+first+issue\"+state:open" },
      { label: "Use GitHub CLI to find issues in a specific repo", code: "gh issue list --label \"good first issue\" --state open" },
    ],
    resources: [
      { title: "Good First Issue - curated beginner issues", url: "https://goodfirstissue.dev", type: "tool" },
      { title: "Up For Grabs - tasks for new contributors", url: "https://up-for-grabs.net", type: "tool" },
      { title: "First Timers Only - issues reserved for first PRs", url: "https://www.firsttimersonly.com", type: "tool" },
      { title: "CodeTriage - open source issues in your inbox", url: "https://www.codetriage.com", type: "tool" },
      { title: "First Contributions - practice repo for your first PR", url: "https://github.com/firstcontributions/first-contributions", type: "tool" },
      { title: "GitHub Explore - trending repos", url: "https://github.com/explore", type: "tool" },
    ],
    tips: [
      "If you can't understand the issue description after reading it twice, pick a different issue. Your first PR should be something you can solve end-to-end.",
      "The 'first-contributions' repo on GitHub lets you practice the entire fork-clone-branch-PR workflow in 5 minutes with zero risk. Do this first if you've never opened a PR before.",
      "Language matters. Don't try to learn Rust AND open source contribution at the same time. Use a language you already write confidently.",
    ],
  },
  {
    id: "read-docs",
    number: 4,
    title: "Read the Rules Before You Code",
    description: "Every project has its own conventions - branch naming, commit format, test requirements, lint rules. Skipping CONTRIBUTING.md is the #1 reason first PRs get rejected.",
    details: [
      "Open CONTRIBUTING.md and read every word. It tells you how to set up the dev environment, name branches, format commits, and run tests.",
      "Install dependencies and run the project locally. If you can't build it, you can't contribute to it. This also confirms your dev environment is set up correctly.",
      "Run the existing test suite on the unchanged codebase. If tests already fail, you have a setup problem - not a code problem.",
      "Check if the project uses Conventional Commits (feat:, fix:, docs:). Many do, and using the wrong format gets your PR flagged immediately.",
      "Look for a .editorconfig, .eslintrc, or .prettierrc. Install the matching editor extensions so your code matches the project style automatically.",
      "Some projects also have DEVELOPMENT.md or a docs/contributing/ folder with more detail. Check for those too.",
    ],
    commands: [
      { label: "Install dependencies (pick the one for your project)", code: "npm install\n# or: pip install -r requirements.txt\n# or: go mod tidy\n# or: cargo build" },
      { label: "Run the test suite to verify your setup", code: "npm test\n# or: pytest\n# or: go test ./...\n# or: cargo test" },
      { label: "Run the linter to check code style", code: "npm run lint\n# or: flake8 .\n# or: golangci-lint run" },
    ],
    resources: [
      { title: "Conventional Commits - the standard most projects use", url: "https://www.conventionalcommits.org", type: "docs" },
      { title: "How to Contribute to Open Source (GitHub's official guide)", url: "https://opensource.guide/how-to-contribute/", type: "article" },
    ],
    tips: [
      "If CONTRIBUTING.md doesn't exist, look at recent merged PRs to reverse-engineer the conventions. How are branches named? What do commit messages look like?",
      "Run tests BEFORE making any changes. This is your baseline. If tests pass now and fail after your change, you know your code broke something.",
    ],
  },
  {
    id: "claim-issue",
    number: 5,
    title: "Pick an Issue and Claim It",
    description: "Don't just start coding. Find an issue, read the entire thread, check if someone else is working on it, then leave a comment asking to be assigned.",
    details: [
      "Filter by labels: 'good first issue', 'help wanted', 'beginner-friendly'. These are explicitly marked for newcomers.",
      "Read the entire issue thread - all comments, not just the description. The solution approach might already be discussed, or someone might have started and abandoned it.",
      "Check if someone is already assigned. If they are, find a different issue. If someone commented 'I'll work on this' but there's been no activity for 2+ weeks, it's usually safe to ask.",
      "Leave a clear comment: 'I'd like to work on this. Here's my approach: [brief plan]. Could I be assigned?' This shows you've thought about it.",
      "Wait for maintainer response before starting. On active projects, this usually takes 24-48 hours. If no response in 72 hours, it's generally fine to proceed - mention the silence in your PR.",
      "For high-traffic repos, standing out matters. Don't just say 'assign me' - briefly describe your proposed solution. Maintainers assign contributors who demonstrate understanding.",
    ],
    commands: [
      { label: "List beginner-friendly issues in a repo (GitHub CLI)", code: "gh issue list --label \"good first issue\" --state open" },
      { label: "Comment on an issue to claim it", code: "gh issue comment 123 --body \"I'd like to work on this. My approach: [brief plan]. Could I be assigned?\"" },
    ],
    resources: [
      { title: "GitHub Issues Documentation", url: "https://docs.github.com/en/issues/tracking-your-work-with-issues/about-issues", type: "docs" },
      { title: "IssueHub - filter issues by language and label", url: "https://issuehub.pro", type: "tool" },
    ],
    tips: [
      "Prioritize issues less than 30 days old - older issues are more likely to be stale or already partially solved.",
      "Read 2-3 merged PRs that fixed similar issues. This shows you the expected solution pattern, file locations, and test requirements.",
      "Never submit a surprise PR on an active project. Claiming first prevents duplicate work and builds trust with maintainers.",
    ],
  },
  {
    id: "fork-clone",
    number: 6,
    title: "Fork, Clone, and Set Up Your Workspace",
    description: "Fork the repo to your GitHub account, clone your fork locally, and add the original repo as 'upstream'. This three-step setup is the foundation for every contribution.",
    details: [
      "Click 'Fork' on the GitHub repo page. This creates a personal copy under your account - you have full write access to your fork.",
      "Clone your fork (not the original repo) to your machine. You'll push changes to your fork, then open a PR from your fork to the original.",
      "Add the original repo as 'upstream' remote. This lets you pull future changes from the maintainers to keep your fork in sync.",
      "Run 'git remote -v' to verify: you should see 'origin' pointing to your fork and 'upstream' pointing to the original repo.",
      "Sync your main branch with upstream before starting any work. This ensures you're building on the latest code.",
      "Install the project's dependencies, then build and run it locally. Fix any setup issues before writing code.",
    ],
    commands: [
      { label: "Clone your fork (SSH - recommended)", code: "git clone git@github.com:YOUR-USERNAME/repo-name.git\ncd repo-name" },
      { label: "Add the original repo as upstream", code: "git remote add upstream https://github.com/original-owner/repo-name.git" },
      { label: "Verify your remotes are correct", code: "git remote -v\n# origin → your fork\n# upstream → original repo" },
      { label: "Sync your local main with upstream", code: "git fetch upstream\ngit checkout main\ngit merge upstream/main" },
    ],
    resources: [
      { title: "GitHub: How to Fork a Repo", url: "https://docs.github.com/en/get-started/quickstart/fork-a-repo", type: "docs" },
      { title: "Syncing a Fork with Upstream", url: "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork", type: "docs" },
    ],
    tips: [
      "Always pull from upstream/main (the original), not origin/main (your fork). Your fork's main can fall behind - upstream is the source of truth.",
      "Run 'git remote -v' right after setup. If 'upstream' is missing, everything downstream will break. Verify now, save debugging later.",
    ],
  },
  {
    id: "branch-and-code",
    number: 7,
    title: "Create a Branch and Write Your Fix",
    description: "Never work on main. Create a descriptive branch, make focused changes, and keep your diff as small as possible. The best first PR is a boring one.",
    details: [
      "Branch from the latest main (after syncing with upstream). This avoids merge conflicts later.",
      "Use a naming convention: fix/issue-123-null-check, feat/add-dark-mode, docs/update-readme. Include the issue number when there is one.",
      "One issue = one branch = one PR. Don't bundle multiple fixes together - it makes review harder and delays merging.",
      "Before writing code, read at least 5-10 related files. Understand the patterns, naming conventions, and coding style already in use.",
      "Match the existing code style exactly - indentation, naming, comment style. Don't 'improve' unrelated code. Unrelated cleanups belong in a separate PR.",
      "Keep your diff minimal. Change only what's necessary to solve the issue. A 20-line PR gets merged in a day. A 500-line PR sits for weeks.",
      "Run tests after your changes. Run the linter. If either fails, fix it before committing.",
    ],
    commands: [
      { label: "Create and switch to a new branch", code: "git checkout -b fix/issue-123-null-check" },
      { label: "Run tests after making your changes", code: "npm test\n# or: pytest -v\n# or: go test ./..." },
      { label: "Run the linter before committing", code: "npm run lint\n# or: flake8 .\n# or: cargo clippy" },
      { label: "Preview your changes before staging", code: "git diff" },
    ],
    resources: [
      { title: "Git Branching Explained", url: "https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell", type: "docs" },
      { title: "Learn Git Branching (interactive)", url: "https://learngitbranching.js.org", type: "interactive" },
    ],
    tips: [
      "Lowercase, hyphen-separated branch names are the convention. No spaces, no uppercase: fix/login-null-check not Fix/LoginNullCheck.",
      "Use your IDE's 'Go to Definition' to trace how functions are called before modifying them. Context prevents mistakes.",
      "If the fix requires a large refactor - stop. Fix the specific issue and mention the larger concern in your PR description. Maintainers appreciate restraint.",
    ],
  },
  {
    id: "commit",
    number: 8,
    title: "Write Commits That Tell a Story",
    description: "A good commit message explains why a change was made, not what the diff shows. Use Conventional Commits format if the project requires it. Reference the issue number.",
    details: [
      "Commit format: type(scope): short description. Types: fix, feat, docs, style, refactor, test, chore.",
      "Keep the subject line under 72 characters. If you need to explain more, add a blank line then a body paragraph.",
      "Write in imperative mood: 'fix: handle null input' not 'fixed: handles null inputs'. Imagine your message completing the sentence 'This commit will...'",
      "Reference the issue: 'Fixes #123' or 'Closes #456' in the commit body or PR description. GitHub auto-closes the issue when your PR merges.",
      "Stage files individually with 'git add path/to/file.js', not 'git add .'. This forces you to review what you're committing.",
      "Never commit .env files, credentials, API keys, or large binary files. Add them to .gitignore before your first commit.",
    ],
    commands: [
      { label: "Stage specific files (always preferred over git add .)", code: "git add src/utils/parser.js\ngit add tests/parser.test.js" },
      { label: "Commit with a conventional message", code: "git commit -m \"fix(parser): handle null input in parseUser()\n\nPreviously threw TypeError when 'name' field was null.\nAdded early return guard.\n\nFixes #123\"" },
      { label: "View your commit to verify it looks right", code: "git show" },
      { label: "Amend last commit (only if you haven't pushed yet)", code: "git commit --amend" },
    ],
    resources: [
      { title: "Conventional Commits Spec", url: "https://www.conventionalcommits.org/en/v1.0.0/", type: "docs" },
      { title: "How to Write a Git Commit Message (Chris Beams)", url: "https://cbea.ms/git-commit/", type: "article" },
    ],
    tips: [
      "Bad: 'fix bug'. Good: 'fix(auth): prevent crash when session token is expired'. Be specific - your future self will thank you.",
      "One commit per logical change. If you fixed a bug AND added a feature, that's two commits. This makes reverting specific changes trivial.",
    ],
  },
  {
    id: "push-pr",
    number: 9,
    title: "Push and Open Your Pull Request",
    description: "Push your branch to your fork, then open a PR against the original repo. The PR description matters as much as the code - a clear description dramatically speeds up review.",
    details: [
      "Push your branch to your fork (origin), not upstream. You don't have write access to the original repo.",
      "Go to GitHub - you'll see a 'Compare & pull request' banner. Click it.",
      "Write a clear PR title following the project's convention. Check existing merged PRs for the expected format.",
      "Fill in the PR template completely. If there's no template, include: what changed, why, how you tested it, and which issue it closes.",
      "Link the issue: write 'Closes #123' or 'Fixes #456' in the PR body. This auto-closes the issue when merged.",
      "Add screenshots or test output if your change affects the UI or behavior. Show, don't tell.",
      "Mark as Draft if it's not ready for review. This signals maintainers to wait and prevents premature review feedback.",
      "Run the test suite one final time right before pushing. CI failures delay your PR and make a bad first impression.",
    ],
    commands: [
      { label: "Push your branch to your fork", code: "git push origin fix/issue-123-null-check" },
      { label: "Open a PR via GitHub CLI (optional)", code: "gh pr create --title \"fix(parser): handle null in parseUser\" --body \"Closes #123\n\n## Changes\n- Added null guard in parseUser()\n- Added test case for null input\n\n## Testing\n- All existing tests pass\n- Added new test for null edge case\"" },
      { label: "Check your PR status", code: "gh pr status" },
    ],
    resources: [
      { title: "About Pull Requests (GitHub Docs)", url: "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests", type: "docs" },
      { title: "How to Write the Perfect Pull Request (GitHub Blog)", url: "https://github.blog/developer-skills/github/how-to-write-the-perfect-pull-request/", type: "article" },
    ],
    tips: [
      "Self-review your diff on GitHub before requesting review. Click the 'Files changed' tab and read every line. You'll catch typos, debug logs, and formatting issues.",
      "PRs under 200 lines changed get reviewed in hours. PRs over 500 lines take weeks. Keep it focused.",
    ],
  },
  {
    id: "review",
    number: 10,
    title: "Handle Review and Get Merged",
    description: "Maintainers will leave comments on your code. Respond to all of them, make changes on the same branch, and push - the PR updates automatically. Be patient, professional, and persistent.",
    details: [
      "Read every review comment carefully. Understand what the reviewer is asking before making changes.",
      "Reply to all comments - even a simple 'Fixed in latest commit' or 'Good point, updated'. This shows you're engaged.",
      "Make changes on the same branch and push. The PR updates automatically. Never create a new PR for review changes.",
      "If you disagree with feedback, explain your reasoning respectfully. Good maintainers appreciate thoughtful pushback backed by evidence.",
      "After addressing all comments, leave a summary comment: 'Updated - addressed all feedback. Ready for re-review.' Maintainers don't get notified otherwise.",
      "Be patient. Popular repos can take days or weeks to review. If there's no response after 2 weeks, leave a polite follow-up comment.",
      "Once merged, delete your branch (GitHub offers a button). Sync your local main with upstream. Celebrate - you're an open source contributor now.",
      "Add this contribution to your resume and LinkedIn. Link the PR directly. Hiring managers notice open source contributors.",
    ],
    commands: [
      { label: "Make review changes and push (PR updates automatically)", code: "git add .\ngit commit -m \"refactor: address review feedback\"\ngit push origin fix/issue-123-null-check" },
      { label: "Rebase on upstream if your branch is behind", code: "git fetch upstream\ngit rebase upstream/main" },
      { label: "Force-push after rebase (use --force-with-lease, never --force)", code: "git push --force-with-lease origin fix/issue-123-null-check" },
      { label: "After merge: sync and clean up", code: "git checkout main\ngit pull upstream main\ngit push origin main\ngit branch -d fix/issue-123-null-check" },
    ],
    resources: [
      { title: "How to Handle Code Review Comments", url: "https://mtlynch.io/code-review-love/", type: "article" },
      { title: "Git Rebase Explained", url: "https://git-scm.com/book/en/v2/Git-Branching-Rebasing", type: "docs" },
      { title: "Build Your Open Source Portfolio", url: "https://dev.to/msaaddev/how-to-build-an-impressive-open-source-portfolio-1h37", type: "article" },
    ],
    tips: [
      "Use --force-with-lease instead of --force when rebasing. It's safer - it won't overwrite someone else's changes if they pushed to your branch.",
      "Your first merged PR is the hardest. The second one is 10x easier because you already know the workflow. Keep going.",
      "Contributing to the same project repeatedly makes you a 'regular contributor'. Maintainers notice this and start fast-tracking your reviews.",
    ],
  },
];

const RESOURCE_LIBRARY = [
  {
    category: "Interactive Learning",
    items: [
      { title: "Learn Git Branching", url: "https://learngitbranching.js.org", desc: "Visual, interactive Git exercises - the best way to build muscle memory" },
      { title: "Oh My Git!", url: "https://ohmygit.org", desc: "Open source game that teaches Git concepts through gameplay" },
      { title: "GitHub Skills", url: "https://skills.github.com", desc: "Official interactive courses directly from GitHub" },
      { title: "First Contributions", url: "https://github.com/firstcontributions/first-contributions", desc: "Practice the entire PR workflow in 5 minutes with zero risk" },
    ],
  },
  {
    category: "Finding Projects",
    items: [
      { title: "Good First Issue", url: "https://goodfirstissue.dev", desc: "Curated beginner issues from popular, active repositories" },
      { title: "Up For Grabs", url: "https://up-for-grabs.net", desc: "Issues specifically tagged for new contributors" },
      { title: "First Timers Only", url: "https://www.firsttimersonly.com", desc: "Issues reserved exclusively for your first-ever contribution" },
      { title: "CodeTriage", url: "https://www.codetriage.com", desc: "Get open source issues delivered to your inbox daily" },
    ],
  },
  {
    category: "References",
    items: [
      { title: "Pro Git Book (free)", url: "https://git-scm.com/book/en/v2", desc: "The comprehensive, free reference for everything Git" },
      { title: "Conventional Commits", url: "https://www.conventionalcommits.org", desc: "The commit message format most projects expect" },
      { title: "opensource.guide", url: "https://opensource.guide", desc: "GitHub's official guide to open source contribution" },
    ],
  },
  {
    category: "Programs & Community",
    items: [
      { title: "Google Summer of Code", url: "https://summerofcode.withgoogle.com", desc: "Stipend-based 12-week open source program" },
      { title: "LFX Mentorship", url: "https://mentorship.lfx.linuxfoundation.org", desc: "Linux Foundation paid mentorship program" },
      { title: "MLH Fellowship", url: "https://fellowship.mlh.io", desc: "12-week open source internship alternative" },
      { title: "Outreachy", url: "https://outreachy.org", desc: "Paid internships for underrepresented groups in tech" },
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
          {step.number}/{STEPS.length}
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
      <SEO title="Your First Contribution - Open Source" noIndex />

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
          Your First <span className="text-gradient-accent">Contribution</span>
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-500 max-w-lg mx-auto">
          10 steps from zero to your first merged pull request - no fluff, just what works
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
              <p className="text-sm text-green-700 dark:text-green-400 mt-0.5">You've completed all 10 steps. Add your first PR to your resume, share it on LinkedIn, and find your next issue.</p>
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
          <p className="text-xs text-gray-500 mb-4 font-mono">// The complete workflow: fork &rarr; fix &rarr; merge</p>
          <div className="space-y-1">
            {[
              "git clone git@github.com:YOU/repo.git && cd repo",
              "git remote add upstream https://github.com/original/repo.git",
              "git fetch upstream && git merge upstream/main",
              "git checkout -b fix/issue-123-your-fix",
              "# ... make your changes, run tests, run linter ...",
              "git add src/path/to/changed-file.js",
              'git commit -m "fix(scope): describe your fix\\n\\nCloses #123"',
              "git push origin fix/issue-123-your-fix",
              "# Open PR on GitHub → fill in template → link the issue",
              "# After review: make changes on same branch, then push again",
              "git add . && git commit -m \"refactor: address review feedback\"",
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
