import { Link } from "react-router";
import { motion } from "framer-motion";
import { Code2, Database, ArrowRight, BookOpen, Map, Brain, FileCode2, Palette } from "lucide-react";
import { SEO } from "../../../components/SEO";

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

export default function LearnHubPage() {
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

      {/* Track cards */}
      <div className="space-y-4">
        {TRACKS.map((track, idx) => (
          <motion.div
            key={track.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + idx * 0.08, duration: 0.5 }}
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
