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
    desc: "10 steps from zero to your first merged PR",
  },
  {
    to: "/student/opensource/gsoc",
    icon: Trophy,
    title: "GSoC Repos",
    desc: "Organisations accepted into Google Summer of Code",
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
    desc: "Deadlines for GSoC, LFX, MLH, Outreachy",
  },
  {
    to: "/student/opensource/read-codebase",
    icon: BookOpen,
    title: "Read a Codebase",
    desc: "Understand unfamiliar code like a senior",
  },
  {
    to: "/student/opensource/git-guide",
    icon: GitBranch,
    title: "Git for Open Source",
    desc: "Fork to PR workflow with copy, paste commands",
  },
  {
    to: "/student/opensource/communication",
    icon: MessageSquare,
    title: "Communication Templates",
    desc: "Issues, PRs, reviews and bug reports",
  },
  {
    to: "/student/opensource/cicd",
    icon: Settings,
    title: "CI / CD Basics",
    desc: "Fix lint, test and build errors",
  },
];

export const GuidanceCards = React.memo(function GuidanceCards() {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-2 mb-3">
        <div className="h-1 w-1 bg-lime-400"></div>
        <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
          guides / play it like a senior
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-stone-200 dark:border-white/10">
        {GUIDANCE_CARDS.map((card, i) => (
          <motion.div
            key={card.to}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 + Math.min(i, 6) * 0.04, duration: 0.35 }}
          >
            <Link
              to={card.to}
              className="group relative flex flex-col gap-3 p-4 h-full bg-white dark:bg-stone-900 border-r border-b border-stone-200 dark:border-white/10 no-underline hover:bg-stone-900 dark:hover:bg-stone-50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 group-hover:text-lime-400">
                  / {String(i + 1).padStart(2, "0")}
                </span>
                <div className="w-8 h-8 rounded-md bg-stone-100 dark:bg-white/5 group-hover:bg-white/10 dark:group-hover:bg-stone-900/10 flex items-center justify-center transition-colors">
                  <card.icon className="w-4 h-4 text-stone-700 dark:text-stone-300 group-hover:text-lime-400" aria-hidden />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-sm font-bold tracking-tight text-stone-900 dark:text-stone-50 group-hover:text-stone-50 dark:group-hover:text-stone-900">
                  {card.title}
                </p>
                <p className="text-xs text-stone-600 dark:text-stone-400 group-hover:text-stone-300 dark:group-hover:text-stone-700 line-clamp-2">
                  {card.desc}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
});
