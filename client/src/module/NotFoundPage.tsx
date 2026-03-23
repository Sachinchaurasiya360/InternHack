import { Link, useLocation } from "react-router";
import { motion } from "framer-motion";
import { ArrowLeft, Home } from "lucide-react";
import { SEO } from "../components/SEO";

export default function NotFoundPage() {
  const location = useLocation();

  return (
    <>
      <SEO title="Page Not Found - InternHack" description="The page you're looking for doesn't exist." />

      <div className="min-h-screen bg-white dark:bg-gray-950 flex items-center justify-center px-4">
        {/* Background grid */}
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
          <div className="absolute -top-32 -right-32 w-150 h-150 bg-linear-to-br from-indigo-100 to-cyan-100 dark:from-indigo-900/15 dark:to-cyan-900/15 rounded-full blur-3xl opacity-40" />
          <div className="absolute -bottom-32 -left-32 w-125 h-125 bg-linear-to-tr from-slate-100 to-violet-100 dark:from-slate-900/15 dark:to-violet-900/15 rounded-full blur-3xl opacity-40" />
          <div
            className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
            style={{
              backgroundImage: "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-md"
        >
          {/* 404 number */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6"
          >
            <span className="font-display text-8xl sm:text-9xl font-bold tracking-tighter bg-linear-to-br from-gray-900 via-gray-700 to-gray-400 dark:from-white dark:via-gray-300 dark:to-gray-600 bg-clip-text text-transparent select-none">
              404
            </span>
          </motion.div>

          <h1 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3">
            Page not found
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mb-2 text-sm leading-relaxed">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-500 font-mono mb-8 break-all">
            {location.pathname}
          </p>

          <div className="flex items-center justify-center gap-3">
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium border border-gray-200 dark:border-gray-800 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Go back
            </button>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
            >
              <Home className="w-4 h-4" />
              Home
            </Link>
          </div>

          {/* Helpful links */}
          <div className="mt-12 pt-8 border-t border-gray-100 dark:border-gray-800/80">
            <p className="text-xs font-medium text-gray-400 dark:text-gray-500 mb-4">Popular pages</p>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {[
                { to: "/jobs", label: "Browse Jobs" },
                { to: "/learn", label: "Learn" },
                { to: "/learn/dsa", label: "DSA Practice" },
                { to: "/ats-score", label: "ATS Score" },
                { to: "/blog", label: "Blog" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="px-3 py-1.5 text-xs font-medium bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
