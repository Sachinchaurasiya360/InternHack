import { Link } from "react-router";
import { motion } from "framer-motion";
import { Code2, Database, ArrowRight, BookOpen, Map, Brain, FileCode2, Palette, GraduationCap, Zap, Coffee, Layers, Server, Terminal } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { SEO } from "../../../components/SEO";
import { useAuthStore } from "../../../lib/auth.store";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import type { StudentCareerEnrollment } from "../../../lib/types";

const TRACKS = [
  {
    id: "javascript",
    title: "JavaScript",
    description: "Master every concept from beginner to advanced — closures, async, prototypes, and interview essentials.",
    icon: Code2,
    color: "text-yellow-500",
    bgColor: "bg-yellow-50 dark:bg-yellow-900/30",
    borderHover: "hover:border-yellow-200 dark:hover:border-yellow-800",
    path: "javascript",
    stat: "56 Lessons",
  },
  {
    id: "html",
    title: "HTML",
    description: "Learn HTML from the ground up — elements, forms, semantic markup, accessibility, and interview essentials.",
    icon: FileCode2,
    color: "text-orange-500",
    bgColor: "bg-orange-50 dark:bg-orange-900/30",
    borderHover: "hover:border-orange-200 dark:hover:border-orange-800",
    path: "html",
    stat: "56 Lessons",
  },
  {
    id: "css",
    title: "CSS",
    description: "Master CSS — selectors, flexbox, grid, animations, responsive design, and modern layout techniques.",
    icon: Palette,
    color: "text-blue-500",
    bgColor: "bg-blue-50 dark:bg-blue-900/30",
    borderHover: "hover:border-blue-200 dark:hover:border-blue-800",
    path: "css",
    stat: "57 Lessons",
  },
  {
    id: "typescript",
    title: "TypeScript",
    description: "Type annotations, generics, advanced types, utility types, and TS with React — from basics to interview prep.",
    icon: FileCode2,
    color: "text-cyan-500",
    bgColor: "bg-cyan-50 dark:bg-cyan-900/30",
    borderHover: "hover:border-cyan-200 dark:hover:border-cyan-800",
    path: "typescript",
    stat: "58 Lessons",
  },
  {
    id: "react",
    title: "React",
    description: "Components, hooks, state management, routing, data fetching, and performance — from JSX to interview prep.",
    icon: Code2,
    color: "text-rose-500",
    bgColor: "bg-rose-50 dark:bg-rose-900/30",
    borderHover: "hover:border-rose-200 dark:hover:border-rose-800",
    path: "react",
    stat: "59 Lessons",
  },
  {
    id: "python",
    title: "Python",
    description: "Learn Python from basics to advanced — data structures, OOP, decorators, and interview essentials.",
    icon: Terminal,
    color: "text-sky-500",
    bgColor: "bg-sky-50 dark:bg-sky-900/30",
    borderHover: "hover:border-sky-200 dark:hover:border-sky-800",
    path: "python",
    stat: "59 Lessons",
  },
  {
    id: "fastapi",
    title: "FastAPI",
    description: "Build modern APIs with FastAPI — routing, Pydantic models, dependency injection, auth, and async database integration.",
    icon: Zap,
    color: "text-green-500",
    bgColor: "bg-green-50 dark:bg-green-900/30",
    borderHover: "hover:border-green-200 dark:hover:border-green-800",
    path: "fastapi",
    stat: "40 Lessons",
  },
  {
    id: "flask",
    title: "Flask",
    description: "Master Flask — routing, Jinja2 templates, blueprints, SQLAlchemy, authentication, and REST API development.",
    icon: Coffee,
    color: "text-teal-500",
    bgColor: "bg-teal-50 dark:bg-teal-900/30",
    borderHover: "hover:border-teal-200 dark:hover:border-teal-800",
    path: "flask",
    stat: "40 Lessons",
  },
  {
    id: "django",
    title: "Django",
    description: "Learn Django end-to-end — models, views, templates, admin, DRF, authentication, middleware, and deployment.",
    icon: Layers,
    color: "text-emerald-500",
    bgColor: "bg-emerald-50 dark:bg-emerald-900/30",
    borderHover: "hover:border-emerald-200 dark:hover:border-emerald-800",
    path: "django",
    stat: "40 Lessons",
  },
  {
    id: "nodejs",
    title: "Node.js & Express",
    description: "Server-side JavaScript — Node core, Express, REST APIs, middleware, authentication, and databases.",
    icon: Server,
    color: "text-green-600",
    bgColor: "bg-green-50 dark:bg-green-900/30",
    borderHover: "hover:border-green-200 dark:hover:border-green-800",
    path: "nodejs",
    stat: "56 Lessons",
  },
  {
    id: "sql",
    title: "SQL Practice",
    description: "Interactive SQL exercises that run in your browser — SELECT, JOIN, subqueries, window functions, and more.",
    icon: Database,
    color: "text-blue-500",
    bgColor: "bg-blue-50 dark:bg-blue-900/30",
    borderHover: "hover:border-blue-200 dark:hover:border-blue-800",
    path: "sql",
    stat: "188 Exercises",
  },
  {
    id: "dsa",
    title: "DSA",
    description: "Data structures and algorithms — arrays, trees, graphs, dynamic programming, and company-wise problems.",
    icon: BookOpen,
    color: "text-indigo-500",
    bgColor: "bg-indigo-50 dark:bg-indigo-900/30",
    borderHover: "hover:border-indigo-200 dark:hover:border-indigo-800",
    path: "dsa",
    stat: "Topic-wise",
  },
  {
    id: "aptitude",
    title: "Aptitude",
    description: "Quantitative, logical reasoning, and verbal ability — company-wise question banks and practice sets.",
    icon: Brain,
    color: "text-purple-500",
    bgColor: "bg-purple-50 dark:bg-purple-900/30",
    borderHover: "hover:border-purple-200 dark:hover:border-purple-800",
    path: "aptitude",
    stat: "Topic-wise",
  },
  {
    id: "careers",
    title: "Career Roadmaps",
    description: "Guided career paths with phases, skills, resources, and progress tracking — from beginner to job-ready.",
    icon: Map,
    color: "text-emerald-500",
    bgColor: "bg-emerald-50 dark:bg-emerald-900/30",
    borderHover: "hover:border-emerald-200 dark:hover:border-emerald-800",
    path: "careers",
    stat: "8 Paths",
  },
];

const CATEGORY_RING: Record<string, string> = {
  ENGINEERING: "stroke-blue-500",
  DATA:        "stroke-purple-500",
  DESIGN:      "stroke-pink-500",
  PRODUCT:     "stroke-orange-500",
  MARKETING:   "stroke-green-500",
  DEVOPS:      "stroke-cyan-500",
  SECURITY:    "stroke-red-500",
  OTHER:       "stroke-gray-400",
};

function MiniProgress({ progress, category }: { progress: number; category: string }) {
  const r = 18;
  const circ = 2 * Math.PI * r;
  const offset = circ - (progress / 100) * circ;
  const ringClass = CATEGORY_RING[category] ?? "stroke-gray-400";

  return (
    <div className="relative w-11 h-11 shrink-0">
      <svg className="w-11 h-11 -rotate-90" viewBox="0 0 44 44">
        <circle cx="22" cy="22" r={r} fill="none" stroke="#f3f4f6" className="dark:stroke-gray-700" strokeWidth="3.5" />
        <circle
          cx="22" cy="22" r={r}
          fill="none"
          className={ringClass}
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeDasharray={`${circ}`}
          strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 0.6s ease" }}
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-gray-800 dark:text-gray-200">
        {progress}%
      </span>
    </div>
  );
}

export default function LearnHubPage() {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);

  const { data: enrolledPaths = [] } = useQuery({
    queryKey: queryKeys.careers.myPaths(),
    queryFn: () => api.get("/careers/my-paths").then((res) => res.data.paths as StudentCareerEnrollment[]),
    enabled: isAuthenticated,
  });

  return (
    <div className="relative pb-12">
      <SEO title="Learning Hub" noIndex />

      {/* Atmospheric background */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-150 h-150 bg-linear-to-br from-violet-100 to-indigo-100 dark:from-violet-900/20 dark:to-indigo-900/20 rounded-full blur-3xl opacity-40" />
        <div className="absolute -bottom-32 -left-32 w-125 h-125 bg-linear-to-tr from-slate-100 to-blue-100 dark:from-slate-900/20 dark:to-blue-900/20 rounded-full blur-3xl opacity-40" />
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
        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-gray-950 dark:text-white mb-3">
          Learning <span className="text-gradient-accent">Hub</span>
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-500 max-w-lg mx-auto">
          Choose a track and start building your skills - all free, all curated
        </p>
      </motion.div>

      {/* Registered Courses */}
      {enrolledPaths.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex items-center gap-2.5 mb-4">
            <GraduationCap className="w-5 h-5 text-indigo-500" />
            <h2 className="text-sm font-bold text-gray-950 dark:text-white uppercase tracking-wider">Registered Courses</h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {enrolledPaths.map((path, i) => {
              const isComplete = path.progress === 100;
              return (
                <motion.div
                  key={path.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.05 }}
                >
                  <Link
                    to={`/learn/careers/${path.career.slug}`}
                    className="group flex items-center gap-4 bg-white dark:bg-gray-900 px-5 py-4 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 hover:shadow-lg hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50 transition-all duration-300 no-underline"
                  >
                    <MiniProgress progress={path.progress} category={path.career.category} />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <h3 className="text-sm font-semibold text-gray-950 dark:text-white truncate">{path.career.title}</h3>
                        {isComplete && (
                          <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-green-50 text-green-600 dark:bg-green-900/30 dark:text-green-400 shrink-0">Done</span>
                        )}
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-500">
                        {path.completedSkills}/{path.totalSkills} skills
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-300 dark:text-gray-600 group-hover:text-gray-500 dark:group-hover:text-gray-400 group-hover:translate-x-0.5 transition-all shrink-0" />
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Separator */}
          <div className="mt-8 mb-0 border-t border-gray-200 dark:border-gray-800" />
        </motion.div>
      )}

      {/* Track cards */}
      <div className="space-y-4">
        {TRACKS.map((track, idx) => (
          <motion.div
            key={track.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: (enrolledPaths.length > 0 ? 0.3 : 0.15) + idx * 0.08, duration: 0.5 }}
          >
            <Link
              to={`/learn/${track.path}`}
              className={`group flex items-center gap-5 bg-white dark:bg-gray-900 px-6 py-6 rounded-2xl border border-gray-100 dark:border-gray-800 ${track.borderHover} hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50 transition-all duration-300 no-underline`}
            >
              <div className={`w-14 h-14 rounded-xl ${track.bgColor} flex items-center justify-center shrink-0`}>
                <track.icon className={`w-7 h-7 ${track.color}`} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-lg font-bold text-gray-950 dark:text-white">
                    {track.title}
                  </h3>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                    {track.stat}
                  </span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-500 leading-relaxed">
                  {track.description}
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-300 dark:text-gray-600 group-hover:text-gray-500 dark:group-hover:text-gray-400 group-hover:translate-x-1 transition-all shrink-0" />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
