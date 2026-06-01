import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
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
import {
  RecommendationCard,
  type WeakArea,
} from "./components/RecommendationCard";
import api from "../../../lib/axios";

const CATEGORY_DESCRIPTION: Record<TrackCategory, string> = {
  practice: "Curated questions, animated lessons, and roadmaps to ace placements.",
  frontend: "HTML, CSS, JavaScript, TypeScript, and React — from basics to interview-ready.",
  backend: "Node, Python, Django, FastAPI, and Flask for full-stack mastery.",
  data: "SQL, NumPy, Pandas, and ML basics for data-heavy roles.",
  web3: "Smart contracts, DeFi, and blockchain from first principles.",
};

export default function LearnHubPage() {
  const [search, setSearch] = useState("");

  const { data: recData, isLoading: loadingRecs } = useQuery<{ weakAreas: WeakArea[] }>({
    queryKey: ["learn-recommendations"],
    queryFn: () => api.get<{ weakAreas: WeakArea[] }>("/student/recommendations").then((r) => r.data),
    staleTime: 30 * 60 * 1000,
    retry: false,
  });
  const weakAreas = recData?.weakAreas ?? [];

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
    return CATEGORY_ORDER.map((cat) => ({
      category: cat,
      tracks: byCategory.get(cat) ?? [],
    })).filter((g) => g.tracks.length > 0);
  }, [search]);

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

      {/* Recommended for you */}
      {!loadingRecs && weakAreas.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="mb-14 p-6 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md"
        >
          <div className="flex items-center justify-between gap-4 mb-5">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-lime-400" />
              <span className="text-xs font-mono uppercase tracking-widest text-stone-500">
                recommended for you
              </span>
            </div>
            <span className="text-xs font-mono uppercase tracking-widest text-stone-400">
              {weakAreas.length} area{weakAreas.length !== 1 ? "s" : ""} to strengthen
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {weakAreas.slice(0, 6).map((area, i) => (
              <RecommendationCard
                key={`${area.type}-${area.topic}-${i}`}
                area={area}
                index={i}
              />
            ))}
          </div>
        </motion.section>
      )}

      {/* Search */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-12"
      >
        <div className="relative">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400"
            aria-hidden
          />
          <input
            type="text"
            placeholder="Search tracks..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search learning tracks"
            className="w-full pl-11 pr-4 py-3 bg-white dark:bg-stone-900 border border-stone-300 dark:border-white/10 rounded-md focus:outline-none focus:border-lime-400 transition-colors text-sm text-stone-900 dark:text-stone-50 placeholder-stone-400 dark:placeholder-stone-600"
          />
        </div>
        {search && (
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
                  <TrackCard key={track.id} track={track} index={idx} />
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
