import { Link } from "react-router";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SEO } from "../components/SEO";

const QUICK_LINKS = [
  { to: "/jobs", label: "Browse jobs", hint: "live listings" },
  { to: "/learn", label: "Learning hub", hint: "11 tracks" },
  { to: "/learn/dsa", label: "DSA practice", hint: "problems" },
  { to: "/ats-score", label: "ATS score", hint: "ai grader" },
  { to: "/blog", label: "Blog", hint: "guides" },
  { to: "/for-recruiters", label: "Recruiters", hint: "hiring" },
];

export default function NotFoundPage() {
  return (
    <>
      <SEO
        title="Page Not Found - InternHack"
        description="The page you're looking for doesn't exist."
        noIndex
      />

      <div className="relative min-h-screen bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-50 overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none opacity-[0.08] dark:opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(120,113,108,0.08) 1px, transparent 1px)",
            backgroundSize: "120px 100%",
          }}
        />

        <Link
          to="/"
          className="absolute top-6 left-6 z-10 flex items-center gap-2 text-sm no-underline text-stone-500 hover:text-stone-900 dark:hover:text-stone-50 transition-colors"
        >
          <div className="relative">
            <img src="/logo.png" alt="InternHack" className="h-7 w-7 rounded-md object-contain" />
            <span className="absolute -bottom-0.5 -right-0.5 h-1.5 w-1.5 bg-lime-400" />
          </div>
          <span className="font-bold text-stone-900 dark:text-stone-50">InternHack</span>
        </Link>

        <div className="relative z-10 min-h-screen flex items-center px-6 py-20">
          <div className="w-full max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-500"
              >
                <motion.span
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                  className="h-1.5 w-1.5 bg-lime-400"
                />
                error / 404
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="mt-6 text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight leading-none text-stone-900 dark:text-stone-50"
              >
                Page not{" "}
                <span className="text-stone-400 dark:text-stone-600">found.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.12 }}
                className="mt-6 max-w-lg text-base md:text-lg text-stone-600 dark:text-stone-400 leading-relaxed"
              >
                The URL you followed is dead, private, or has been reshuffled. No drama. Pick a door below and keep going.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.18 }}
                className="mt-10 flex flex-wrap items-center gap-3"
              >
                <Link
                  to="/"
                  className="group inline-flex items-center gap-2 px-6 py-3.5 bg-lime-400 text-stone-950 rounded-md text-sm font-bold hover:bg-lime-300 transition-colors no-underline"
                >
                  Back to home
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link
                  to="/jobs"
                  className="inline-flex items-center gap-2 px-6 py-3.5 border border-stone-300 dark:border-white/10 text-stone-900 dark:text-stone-50 rounded-md text-sm font-bold hover:border-stone-900 dark:hover:border-stone-50 transition-colors no-underline"
                >
                  Browse jobs
                </Link>
              </motion.div>
            </div>

            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.22 }}
                className="relative border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 rounded-xl overflow-hidden"
              >
                <div className="flex items-center justify-between px-5 py-3 border-b border-stone-200 dark:border-white/10">
                  <span className="text-xs font-mono uppercase tracking-widest text-stone-500">
                    try one of these
                  </span>
                  <span className="h-1.5 w-1.5 bg-lime-400" />
                </div>
                <ul className="divide-y divide-stone-200 dark:divide-white/10">
                  {QUICK_LINKS.map((link) => (
                    <li key={link.to}>
                      <Link
                        to={link.to}
                        className="group flex items-center justify-between px-5 py-4 no-underline hover:bg-stone-50 dark:hover:bg-stone-800/40 transition-colors"
                      >
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-stone-900 dark:text-stone-50">
                            {link.label}
                          </span>
                          <span className="text-xs font-mono uppercase tracking-widest text-stone-500 mt-0.5">
                            {link.hint}
                          </span>
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-lime-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-6 right-6 z-10 flex items-center justify-between text-xs font-mono text-stone-500">
          <span>status / 404</span>
          <span className="hidden sm:inline">prepare. practice. placed.</span>
        </div>
      </div>
    </>
  );
}
