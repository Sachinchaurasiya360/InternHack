import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { SEO } from "../../../components/SEO";
import { canonicalUrl } from "../../../lib/seo.utils";
import { TRACKS, CATEGORY_LABEL, CATEGORY_ORDER, type TrackCategory } from "./tracks";
import { TrackCard } from "./TrackCard";

export default function LearnHubPage() {
  const [search, setSearch] = useState("");

  const grouped = useMemo(() => {
    const needle = search.trim().toLowerCase();
    const filtered = needle
      ? TRACKS.filter(
          (t) =>
            t.title.toLowerCase().includes(needle) ||
            t.description.toLowerCase().includes(needle),
        )
      : TRACKS;

    const byCategory = new Map<TrackCategory, typeof TRACKS>();
    for (const t of filtered) {
      if (!byCategory.has(t.category)) byCategory.set(t.category, []);
      byCategory.get(t.category)!.push(t);
    }
    return CATEGORY_ORDER
      .map((cat) => ({ category: cat, tracks: byCategory.get(cat) ?? [] }))
      .filter((g) => g.tracks.length > 0);
  }, [search]);

  return (
    <div className="relative pb-12">
      <SEO
        title="Learning Hub - Free Programming Tutorials"
        description="Curated questions and study material by Google, Amazon, and Meta engineers. Learn JavaScript, Python, React, DSA, SQL, and more."
        keywords="learn programming, free coding tutorials, JavaScript tutorial, Python tutorial, React tutorial, web development, DSA practice"
        canonicalUrl={canonicalUrl("/learn")}
      />

      {/* Atmospheric background */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden" aria-hidden>
        <div className="absolute -top-32 -right-32 w-150 h-150 bg-linear-to-br from-violet-100 to-indigo-100 dark:from-violet-900/20 dark:to-indigo-900/20 rounded-full blur-3xl opacity-40" />
        <div className="absolute -bottom-32 -left-32 w-125 h-125 bg-linear-to-tr from-slate-100 to-blue-100 dark:from-slate-900/20 dark:to-blue-900/20 rounded-full blur-3xl opacity-40" />
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-8 mt-6"
      >
        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-gray-950 dark:text-white mb-3">
          Learning <span className="text-gradient-accent">Hub</span>
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-500 max-w-xl mx-auto">
          Curated questions and study material crafted by engineers from Google, Amazon, and Meta
        </p>
      </motion.div>

      {/* Search */}
      <div className="relative max-w-md mx-auto mb-10">
        <Search
          className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500"
          aria-hidden
        />
        <input
          type="text"
          placeholder="Search tracks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Search learning tracks"
          className="w-full pl-10 pr-4 py-2.5 text-sm border border-gray-100 dark:border-gray-800 rounded-2xl bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-950/10 dark:focus:ring-white/10 transition-all"
        />
      </div>

      {/* Grouped tracks */}
      {grouped.length === 0 ? (
        <div className="text-center py-16 text-sm text-gray-500 dark:text-gray-400">
          No tracks match your search.
        </div>
      ) : (
        grouped.map((group, gi) => (
          <section key={group.category} className={gi === 0 ? "" : "mt-12"}>
            <h2 className="text-2xl font-bold text-gray-950 dark:text-white mb-6">
              {CATEGORY_LABEL[group.category]}
            </h2>
            <div className="space-y-4">
              {group.tracks.map((track, idx) => (
                <TrackCard key={track.id} track={track} index={idx} />
              ))}
            </div>
          </section>
        ))
      )}
    </div>
  );
}
