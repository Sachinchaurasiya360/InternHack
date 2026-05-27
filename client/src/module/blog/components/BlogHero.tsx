import { motion } from "framer-motion";
import { Search } from "lucide-react";

interface BlogHeroProps {
  search: string;
  setSearch: (value: string) => void;
}

export default function BlogHero({
  search,
  setSearch,
}: BlogHeroProps) {
  return (
    <section className="relative overflow-hidden bg-stone-50 dark:bg-stone-950 border-b border-stone-200 dark:border-white/10 px-6 pt-32 pb-14 md:pt-40 md:pb-20">
      {/* Vertical line background — light mode */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none dark:hidden"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(23,23,23,0.04) 1px, transparent 1px)",
          backgroundSize: "140px 100%",
        }}
      />
      {/* Vertical line background — dark mode */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none hidden dark:block"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "140px 100%",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Kicker — pulsing lime dot + mono uppercase */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-500"
        >
          <motion.span
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1.5 bg-lime-400"
          />
          insights, career growth & tech trends
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.6 }}
          className="mt-8 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none text-stone-900 dark:text-stone-50"
        >
          Explore the
          <br />
          <span className="relative inline-block align-baseline">
            <span className="relative z-10">InternHack Blog.</span>
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.9, ease: "easeOut" }}
              aria-hidden
              className="absolute bottom-1 left-0 right-0 h-3 md:h-4 bg-lime-400 origin-left z-0"
            />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-8 text-base md:text-lg text-stone-600 dark:text-stone-400 leading-relaxed max-w-2xl mx-auto"
        >
          Discover interview tips, resume strategies, salary guides,
          career advice, and the latest trends shaping the tech industry.
        </motion.p>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28, duration: 0.5 }}
          className="mt-10 max-w-2xl mx-auto"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" aria-hidden />

            <input
              type="text"
              placeholder="Search articles, topics, tags..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Search blog articles"
              className="w-full pl-11 pr-4 py-3 bg-white dark:bg-stone-900 border border-stone-300 dark:border-white/10 rounded-md focus:outline-none focus:border-lime-400 transition-colors text-sm text-stone-900 dark:text-stone-50 placeholder-stone-400 dark:placeholder-stone-600"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}