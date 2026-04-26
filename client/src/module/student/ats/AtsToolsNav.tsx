import { Link, useLocation } from "react-router";
import { motion } from "framer-motion";
import {
  ScanSearch,
  Wand2,
  PenTool,
  Code2,
  Mail,
  ArrowUpRight,
} from "lucide-react";

const ALL_TOOLS = [
  { key: "01", icon: ScanSearch, title: "ATS Score", desc: "Analyze your resume", to: "/student/ats/score" },
  { key: "02", icon: Wand2, title: "AI Resume", desc: "Generate with AI", to: "/student/ats/resume-generator" },
  { key: "03", icon: PenTool, title: "Resume Builder", desc: "Build with templates", to: "/student/ats/templates" },
  { key: "04", icon: Code2, title: "LaTeX Editor", desc: "Write in LaTeX", to: "/student/ats/latex-editor" },
  { key: "05", icon: Mail, title: "Cover Letter", desc: "AI-generated letters", to: "/student/ats/cover-letter" },
];

export default function AtsToolsNav({ delay = 0.1 }: { delay?: number }) {
  const { pathname } = useLocation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="mb-10"
    >
      <div className="flex items-center gap-2 mb-3 text-[10px] font-mono uppercase tracking-widest text-stone-500">
        <span className="h-1 w-1 bg-lime-400" />
        resume toolkit
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-stone-200 dark:bg-white/10 border border-stone-200 dark:border-white/10 rounded-md overflow-hidden">
        {ALL_TOOLS.map((tool, i) => {
          const isActive = pathname === tool.to;
          const Icon = tool.icon;
          return (
            <motion.div
              key={tool.to}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: delay + i * 0.05, duration: 0.35 }}
            >
              <Link
                to={tool.to}
                className={`group relative flex flex-col gap-2 p-4 h-full no-underline transition-colors ${
                  isActive
                    ? "bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900"
                    : "bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-50 hover:bg-stone-50 dark:hover:bg-stone-950/60"
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <span
                    className={`text-[10px] font-mono uppercase tracking-widest ${
                      isActive
                        ? "text-lime-400"
                        : "text-stone-500"
                    }`}
                  >
                    / {tool.key}
                  </span>
                  <ArrowUpRight
                    className={`w-3.5 h-3.5 shrink-0 transition-all ${
                      isActive
                        ? "text-lime-400"
                        : "text-stone-300 dark:text-white/20 group-hover:text-stone-900 dark:group-hover:text-stone-50 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    }`}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Icon
                    className={`w-4 h-4 shrink-0 ${
                      isActive ? "text-lime-400" : "text-stone-500"
                    }`}
                  />
                  <p className="text-sm font-bold truncate">{tool.title}</p>
                </div>
                <p
                  className={`text-[11px] truncate ${
                    isActive
                      ? "text-stone-300 dark:text-stone-600"
                      : "text-stone-500"
                  }`}
                >
                  {tool.desc}
                </p>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
