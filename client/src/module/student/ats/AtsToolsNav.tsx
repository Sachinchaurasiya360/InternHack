import { Link, useLocation } from "react-router";
import { motion } from "framer-motion";
import {
  ScanSearch,
  Wand2,
  PenTool,
  Code2,
  Mail,
  History,
  ChevronRight,
} from "lucide-react";

const ALL_TOOLS = [
  { icon: ScanSearch, title: "ATS Score", desc: "Analyze your resume", to: "/student/ats/score" },
  { icon: Wand2, title: "AI Resume", desc: "Generate with AI", to: "/student/ats/resume-generator" },
  { icon: PenTool, title: "Resume Builder", desc: "Build with templates", to: "/student/ats/templates" },
  { icon: Code2, title: "LaTeX Editor", desc: "Write in LaTeX", to: "/student/ats/latex-editor" },
  { icon: Mail, title: "Cover Letter", desc: "AI-generated letters", to: "/student/ats/cover-letter" },
  { icon: History, title: "Score History", desc: "Past analyses", to: "/student/ats/history" },
];

export default function AtsToolsNav({ delay = 0.1 }: { delay?: number }) {
  const { pathname } = useLocation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="grid grid-cols-2 lg:grid-cols-3 gap-3 mb-10"
    >
      {ALL_TOOLS.map((tool, i) => {
        const isActive = pathname === tool.to;
        return (
          <motion.div
            key={tool.to}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: delay + i * 0.06, duration: 0.4 }}
          >
            <Link
              to={tool.to}
              className={`group flex items-center gap-3 p-4 rounded-2xl border-2 transition-all duration-300 no-underline ${
                isActive
                  ? "bg-gray-50 dark:bg-gray-800 border-gray-950 dark:border-white shadow-sm"
                  : "bg-white dark:bg-gray-900 border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50"
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-gray-950 dark:bg-white flex items-center justify-center shrink-0">
                <tool.icon className="w-4.5 h-4.5 text-white dark:text-gray-950" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-950 dark:text-white truncate">
                  {tool.title}
                </p>
                <p className="text-[11px] text-gray-400 dark:text-gray-500 truncate">
                  {tool.desc}
                </p>
              </div>
              {!isActive && (
                <ChevronRight className="w-4 h-4 text-gray-300 dark:text-gray-600 group-hover:text-gray-500 dark:group-hover:text-gray-400 transition-colors shrink-0" />
              )}
            </Link>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
