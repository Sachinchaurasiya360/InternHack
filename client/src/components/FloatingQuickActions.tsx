import { useState } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  X,
  Upload,
  Map,
  Briefcase,
  Globe,
  MessageSquareText,
  ShieldCheck,
} from "lucide-react";

const quickActions = [
  {
    label: "Upload Resume",
    to: "/student/ats/score",
    icon: Upload,
  },
  {
    label: "Generate AI Roadmap",
    to: "/roadmaps/generate",
    icon: Map,
  },
  {
    label: "Browse Jobs",
    to: "/student/jobs",
    icon: Briefcase,
  },
  {
    label: "Open Source Hub",
    to: "/student/opensource",
    icon: Globe,
  },
  {
    label: "Interview Prep",
    to: "/learn/interview",
    icon: MessageSquareText,
  },
  {
    label: "Skill Verification",
    to: "/student/skill-verification",
    icon: ShieldCheck,
  },
];

export function FloatingQuickActions() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="flex flex-col items-end gap-2"
          >
            {quickActions.map((action, index) => {
              const Icon = action.icon;

              return (
                <motion.div
                  key={action.to}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 16 }}
                  transition={{ delay: index * 0.03 }}
                >
                  <Link
                    to={action.to}
                    onClick={() => setOpen(false)}
                    className="group flex items-center gap-3 rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-medium text-stone-700 shadow-lg no-underline transition-all hover:-translate-y-0.5 hover:bg-stone-50 hover:text-stone-950 dark:border-white/10 dark:bg-stone-900 dark:text-stone-200 dark:hover:bg-stone-800 dark:hover:text-white"
                  >
                    <span className="hidden sm:inline whitespace-nowrap">
                      {action.label}
                    </span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 transition-colors group-hover:bg-indigo-100 dark:bg-indigo-500/10 dark:text-indigo-300">
                      <Icon className="h-4 w-4" />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? "Close quick actions" : "Open quick actions"}
        aria-expanded={open}
        className="flex h-14 w-14 items-center justify-center rounded-full border border-indigo-400/40 bg-indigo-600 text-white shadow-xl shadow-indigo-600/25 transition-all hover:scale-105 hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:focus:ring-indigo-500/40"
      >
        {open ? <X className="h-6 w-6" /> : <Plus className="h-6 w-6" />}
      </button>
    </div>
  );
}