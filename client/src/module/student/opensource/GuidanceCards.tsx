import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import {
  GitPullRequest,
  Trophy,
  Award,
  GraduationCap,
  BookOpen,
  GitBranch,
  MessageSquare,
  Settings,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";

interface GuidanceCard {
  to: string;
  icon: LucideIcon;
  title: string;
  desc: string;
}

const GUIDANCE_CARDS: GuidanceCard[] = [
  {
    to: "/student/opensource/first-pr",
    icon: GitPullRequest,
    title: "Your First Contribution",
    desc: "10-step guide from zero to your first merged pull request",
  },
  {
    to: "/student/opensource/gsoc",
    icon: Trophy,
    title: "GSoC Repos",
    desc: "Organizations accepted into Google Summer of Code",
  },
  {
    to: "/student/opensource/gsoc-proposal",
    icon: Award,
    title: "GSoC Proposal Guide",
    desc: "Write a winning proposal in 8 steps",
  },
  {
    to: "/student/opensource/programs",
    icon: GraduationCap,
    title: "Program Tracker",
    desc: "Deadlines for GSoC, LFX, MLH, Outreachy & more",
  },
  {
    to: "/student/opensource/read-codebase",
    icon: BookOpen,
    title: "Read a Codebase",
    desc: "Senior engineer's guide to understanding unfamiliar code",
  },
  {
    to: "/student/opensource/git-guide",
    icon: GitBranch,
    title: "Git for Open Source",
    desc: "Fork-to-PR workflow with copy-paste commands",
  },
  {
    to: "/student/opensource/communication",
    icon: MessageSquare,
    title: "Communication Templates",
    desc: "Templates for issues, PRs, reviews & bug reports",
  },
  {
    to: "/student/opensource/cicd",
    icon: Settings,
    title: "CI/CD Basics",
    desc: "Fix lint errors, test failures & build errors",
  },
];

export const GuidanceCards = React.memo(function GuidanceCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10">
      {GUIDANCE_CARDS.map((card, i) => (
        <motion.div
          key={card.to}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 + Math.min(i, 6) * 0.06, duration: 0.4 }}
        >
          <Link
            to={card.to}
            className="group flex items-center gap-3 p-4 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-lg hover:shadow-gray-100 dark:hover:shadow-gray-900 transition-all duration-300 no-underline"
          >
            <div
              className="w-10 h-10 rounded-xl bg-gray-950 dark:bg-white flex items-center justify-center shrink-0"
              aria-hidden
            >
              <card.icon className="w-4.5 h-4.5 text-white dark:text-gray-950" aria-hidden />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-950 dark:text-white truncate">{card.title}</p>
              <p className="text-[11px] text-gray-400 dark:text-gray-500 truncate">{card.desc}</p>
            </div>
            <ChevronRight
              className="w-4 h-4 text-gray-300 dark:text-gray-600 group-hover:text-gray-500 dark:group-hover:text-gray-400 transition-colors shrink-0"
              aria-hidden
            />
          </Link>
        </motion.div>
      ))}
    </div>
  );
});
