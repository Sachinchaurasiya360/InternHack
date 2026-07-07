import { useMemo, useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { Search, ArrowUpRight, ArrowUpDown } from "lucide-react";
import { SEO } from "../../../components/SEO";
import { canonicalUrl, SITE_URL } from "../../../lib/seo.utils";
import { itemListSchema, breadcrumbSchema } from "../../../lib/structured-data";
import {
  TRACKS,
  CATEGORY_LABEL,
  CATEGORY_ORDER,
  type TrackCategory,
} from "./tracks";
import { TrackCard } from "./TrackCard";
import { Button } from "../../../components/ui/button";
import { EditorialDropdown } from "../../../components/ui/EditorialDropdown";
import { useTrackProgress } from "./useTrackProgress";

const CATEGORY_DESCRIPTION: Record<TrackCategory, string> = {
  practice: "Curated questions, animated lessons, and roadmaps to ace placements.",
  frontend: "HTML, CSS, JavaScript, TypeScript, and React — from basics to interview-ready.",
  backend: "Node, Python, Django, FastAPI, and Flask for full-stack mastery.",
  data: "SQL, NumPy, Pandas, and ML basics for data-heavy roles.",
  web3: "Smart contracts, DeFi, and blockchain from first principles.",
};

function getCompletedTrackIds(): string[] {
  const completed: string[] = [];
  const trackIds = TRACKS.map((t) => t.id);
  for (const id of trackIds) {
    try {
      const raw = localStorage.getItem(`${id}-progress`);
      if (!raw) continue;
      const progress = JSON.parse(raw);
      const values = Object.values(progress) as { completed?: boolean }[];
      if (values.length > 0 && values.every((v) => v?.completed)) completed.push(id);
    } catch {
      // ignore
    }
  }
  return completed;
}

export default function LearnHubPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<TrackCategory | "All">("All");
  const [activeDifficulty, setActiveDifficulty] = useState("All");
  const [sortBy, setSortBy] = useState("popular");
  const { progressMap } = useTrackProgress();
  const completedTrackIds = useMemo(() => getCompletedTrackIds(), []);
const grouped = useMemo(() => {
    let filtered = TRACKS;

    const needle = search.trim().toLowerCase();
    if (needle) {
      filtered = filtered.filter(
        (t) =>
          t.title.toLowerCase().includes(needle) ||
          t.description.toLowerCase().includes(needle) ||
          t.tags?.some((tag) => tag.toLowerCase().includes(needle))
      );
    }

    if (activeCategory !== "All") {
      filtered = filtered.filter((t) => t.category === activeCategory);
    }

    if (activeDifficulty !== "All") {
      filtered = filtered.filter(
        (t) => t.difficulty?.toLowerCase() === activeDifficulty.toLowerCase()
      );
    }

    filtered = [...filtered].sort((a, b) => {
      if (sortBy === "alphabetical") {
        return a.title.localeCompare(b.title);
      } else if (sortBy === "recent") {
        return new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime();
      } else {
        return (b.enrolledStudents || 0) - (a.enrolledStudents || 0);
      }
    });

    const byCategory = new Map<TrackCategory, typeof TRACKS>();
    for (const t of filtered) {
      if (!byCategory.has(t.category)) byCategory.set(t.category, []);
      byCategory.get(t.category)!.push(t);
    }
    
    return CATEGORY_ORDER.map((cat) => ({
      category: cat,
      tracks: byCategory.get(cat) ?? [],
    })).filter((g) => g.tracks.length > 0);
  }, [search, activeCategory, activeDifficulty, sortBy]);

  const totalTracks = TRACKS.length;
  const totalShown = grouped.reduce((sum, g) => sum + g.tracks.length, 0);

  return (
    <div className="relative text-stone-900 dark:text-stone-50 pb-16">
      <SEO
        title="Learning Hub - Free Programming Tutorials"
        description="Curated questions and study material by Google, Amazon, and Meta engineers. Learn JavaScript, Python, React, DSA, SQL, and more."
        keywords="learn programming, free coding tutorials, JavaScript tutorial, Python tutorial, React tutorial, web development, DSA practice"
        canonicalUrl={canonicalUrl("/learn")}
        structuredData={[
          itemListSchema(
            TRACKS.map((t) => ({
              name: t.title,
              url: `${SITE_URL}/learn/${t.path}`,
              description: t.description,
            })),
          ),
          breadcrumbSchema([
            { name: "Home", url: SITE_URL },
            { name: "Learn", url: `${SITE_URL}/learn` },
          ]),
        ]}
      />

      {/* Editorial header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mt-6 mb-10 flex flex-wrap items-end justify-between gap-4 border-b border-stone-200 dark:border-white/10 pb-8"
      >
        <div className="min-w-0">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-500">
            <span className="h-1.5 w-1.5 bg-lime-400" />
            learn / hub
          </div>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-none">
            Study that{" "}
            <span className="relative inline-block">
              <span className="relative z-10">ships.</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                aria-hidden
                className="absolute bottom-1 left-0 right-0 h-3 md:h-4 bg-lime-400 origin-left z-0"
              />
            </span>
          </h1>
          <p className="mt-3 text-sm text-stone-500 max-w-xl">
            Lessons, question banks, and practice tracks assembled by engineers from Google, Amazon,
            and Meta — paced for placement season.
          </p>
        </div>
        <div className="flex flex-col items-end gap-2 text-xs font-mono uppercase tracking-widest text-stone-500">
          <span>
            tracks{" "}
            <span className="text-stone-900 dark:text-stone-50 text-sm font-bold tabular-nums ml-1">
              {totalTracks}
            </span>
          </span>
          <span>
            categories{" "}
            <span className="text-stone-900 dark:text-stone-50 text-sm font-bold tabular-nums ml-1">
              {CATEGORY_ORDER.length}
            </span>
          </span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-6 space-y-3"
      >
        <Link
          to="/learn/placement-prep"
          className="group flex items-center justify-between bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md px-5 py-4 hover:border-lime-400 dark:hover:border-lime-400 transition-colors no-underline"
        >
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-md bg-lime-100 dark:bg-lime-900/20 border border-lime-300 dark:border-lime-800/50 flex items-center justify-center shrink-0">
              <span className="text-sm font-bold text-lime-700 dark:text-lime-400">P</span>
            </div>
            <div className="min-w-0">
              <p className="text-sm font-bold text-stone-900 dark:text-stone-50 group-hover:text-lime-700 dark:group-hover:text-lime-400 transition-colors">
                Placement Prep Plans
              </p>
              <p className="text-xs text-stone-500 dark:text-stone-400 truncate">
                Structured 30, 60, and 90-day learning schedules utilizing DSA, Aptitude, Core & Mock Exams
              </p>
            </div>
          </div>
          <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-lime-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all shrink-0" />
        </Link>
      </motion.div>

      {/* Search & Filters */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-12 space-y-4"
      >
        <div className="relative">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400"
            aria-hidden
          />
          <input
            type="text"
            placeholder="Search tracks, skills, or keywords..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search learning tracks"
            className="w-full pl-11 pr-4 py-3 bg-white dark:bg-stone-900 border border-stone-300 dark:border-white/10 rounded-md focus:outline-none focus:border-lime-400 transition-colors text-sm text-stone-900 dark:text-stone-50 placeholder-stone-400 dark:placeholder-stone-600"
          />
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            
            {/* Category Tabs */}
            <div className="flex flex-wrap items-center gap-1 bg-stone-100 dark:bg-stone-800 p-1 rounded-md">
              <Button
                onClick={() => setActiveCategory("All")}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${activeCategory === "All" ? "bg-white dark:bg-stone-700 shadow-sm text-stone-900 dark:text-white" : "bg-transparent border-transparent text-stone-500 hover:bg-transparent hover:text-stone-700 dark:hover:text-stone-300"}`}
              >
                All
              </Button>
              {CATEGORY_ORDER.map((cat) => (
                <Button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md capitalize transition-all ${activeCategory === cat ? "bg-white dark:bg-stone-700 shadow-sm text-stone-900 dark:text-white" : "bg-transparent border-transparent text-stone-500 hover:bg-transparent hover:text-stone-700 dark:hover:text-stone-300"}`}
                >
                  {CATEGORY_LABEL[cat] || cat}
                </Button>
              ))}
            </div>

            {/* Difficulty Chips */}
            <div className="flex items-center gap-2">
              {["All", "Beginner", "Intermediate", "Advanced"].map((level) => (
              <Button
                key={level}
                onClick={() => setActiveDifficulty(level)}
                className={`px-3 py-1 text-xs font-medium rounded-md border transition-colors ${activeDifficulty === level ? "bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 border-stone-900 dark:border-stone-100" : "bg-transparent text-stone-500 border-stone-300 dark:border-stone-700 hover:border-stone-400"}`}
              >
                {level}
              </Button>
              ))}
            </div>
          </div>

          {/* Sort Dropdown */}
          <div className="shrink-0">
            <EditorialDropdown
              icon={<ArrowUpDown className="w-3.5 h-3.5" />}
              label="sort by"
              value={sortBy}
              onChange={setSortBy}
              options={[
                { value: "popular", label: "Most Popular" },
                { value: "alphabetical", label: "Alphabetical" },
                { value: "recent", label: "Recently Added" },
              ]}
            />
          </div>
        </div>

        {(search || activeCategory !== "All" || activeDifficulty !== "All") && (
          <p className="mt-2 text-xs font-mono uppercase tracking-widest text-stone-500">
            {totalShown} match{totalShown === 1 ? "" : "es"}
          </p>
        )}
      </motion.div>

      {/* Grouped tracks */}
      {grouped.length === 0 ? (
        <div className="py-20 text-center border border-dashed border-stone-300 dark:border-white/10 rounded-md">
          <p className="text-sm text-stone-600 dark:text-stone-400">
            No tracks match your search.
          </p>
          <p className="text-xs font-mono uppercase tracking-widest text-stone-500 mt-2">
            try a different keyword
          </p>
        </div>
      ) : (
        <div className="space-y-16">
          {grouped.map((group, gi) => (
            <section key={group.category}>
              {/* Category header */}
              <div className={`flex items-end justify-between gap-4 flex-wrap mb-6 ${gi > 0 ? "pt-4 border-t border-stone-200 dark:border-white/10" : ""}`}>
                <div className="min-w-0">
                  <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-500">
                    <span className="h-1 w-1 bg-lime-400" />
                    {String(gi + 1).padStart(2, "0")} / {String(group.category)}
                  </div>
                  <h2 className="mt-2 text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
                    {CATEGORY_LABEL[group.category]}
                  </h2>
                  <p className="mt-1 text-sm text-stone-500 max-w-lg">
                    {CATEGORY_DESCRIPTION[group.category]}
                  </p>
                </div>
                <span className="text-xs font-mono uppercase tracking-widest text-stone-400 shrink-0">
                  {group.tracks.length} track{group.tracks.length !== 1 ? "s" : ""}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.tracks.map((track, idx) => (
                  <TrackCard key={track.id} track={track} index={idx} completedTrackIds={completedTrackIds} progress={progressMap[track.id]} />
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
