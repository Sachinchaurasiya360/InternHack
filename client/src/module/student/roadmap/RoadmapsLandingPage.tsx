import { useEffect, useMemo, useState, type ReactNode } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BookOpen,
  ChevronRight,
  Clock,
  Map as MapIcon,
  Search,
  Users,
  Wand2,
} from "lucide-react";
import { SEO } from "../../../components/SEO";
import { Navbar } from "../../../components/Navbar";
import { useStudentSidebar } from "../../../components/StudentSidebar";
import { canonicalUrl, SITE_URL } from "../../../lib/seo.utils";
import api from "../../../lib/axios";
import { useAuthStore } from "../../../lib/auth.store";
import type { RoadmapListItem, RoadmapEnrollmentListItem } from "../../../lib/types";
import { useSearchParams } from "react-router";
import { useDebounce } from "../../../hooks/useDebounce";
import { X } from "lucide-react";

interface ListResponse {
  roadmaps: RoadmapListItem[];
  pagination: { page: number; limit: number; total: number; totalPages: number };
}

function Chrome({ children, isStudent, sidebarWidth, collapsed, sidebar }: {
  children: ReactNode;
  isStudent: boolean;
  sidebarWidth: number;
  collapsed: boolean;
  sidebar: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950">
      <div className="hidden lg:block">
        <Navbar sidebarOffset={isStudent ? sidebarWidth : 0} />
      </div>
      <div className="lg:hidden"><Navbar /></div>
      {isStudent && sidebar}
      <div
        className={`pt-16 lg:pt-24 transition-all duration-300 ${
          isStudent ? (collapsed ? "lg:ml-18" : "lg:ml-64") : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export default function RoadmapsLandingPage() {
  const { isAuthenticated, user } = useAuthStore();
  const isStudent = isAuthenticated && user?.role === "STUDENT";
  const { collapsed, sidebarWidth, sidebar } = useStudentSidebar();
  const [searchParams, setSearchParams] = useSearchParams();

  const [roadmaps, setRoadmaps] = useState<RoadmapListItem[]>([]);
  const [enrollments, setEnrollments] = useState<RoadmapEnrollmentListItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Filter states from URL
  const [searchInput, setSearchInput] = useState(searchParams.get("search") || "");
  const debouncedSearch = useDebounce(searchInput, 400);
  
  const level = (searchParams.get("level") || "ALL_LEVELS") as any;
  const tag = searchParams.get("tag") || "";
  const category = searchParams.get("category") || "";

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    
    const params: any = { page: 1, limit: 100 };
    if (debouncedSearch) params.search = debouncedSearch;
    if (level && level !== "ALL_LEVELS") params.level = level;
    if (tag) params.tag = tag;
    if (category) params.category = category;

    api.get<ListResponse>("/roadmaps", { params })
      .then((res) => mounted && setRoadmaps(res.data.roadmaps))
      .catch(() => mounted && setError("Could not load roadmaps. Please try again."))
      .finally(() => mounted && setLoading(false));
    return () => { mounted = false; };
  }, [debouncedSearch, level, tag, category]);

  useEffect(() => {
    if (!isStudent) return;
    let mounted = true;
    api.get<{ enrollments: RoadmapEnrollmentListItem[] }>("/roadmaps/me/enrollments")
      .then((res) => mounted && setEnrollments(res.data.enrollments))
      .catch(() => { /* ok */ });
    return () => { mounted = false; };
  }, [isStudent]);

  // Sync search input with URL when typing
  useEffect(() => {
    const newParams = new URLSearchParams(searchParams);
    if (debouncedSearch) newParams.set("search", debouncedSearch);
    else newParams.delete("search");
    
    // Only update if it actually changed to avoid unnecessary history entries
    if (newParams.toString() !== searchParams.toString()) {
      setSearchParams(newParams, { replace: true });
    }
  }, [debouncedSearch, setSearchParams, searchParams]);

  const updateFilter = (key: string, value: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (value && value !== "ALL_LEVELS") {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }
    setSearchParams(newParams, { replace: true });
  };

  const clearFilters = () => {
    setSearchInput("");
    setSearchParams({}, { replace: true });
  };

  // Index of slugs the student is already enrolled in
  const enrolledBySlug = useMemo(() => {
    const map = new Map<string, RoadmapEnrollmentListItem>();
    for (const e of enrollments) map.set(e.roadmap.slug, e);
    return map;
  }, [enrollments]);

  // Secondary client-side filtering for ultra-smooth UX while API loads
  const filtered = useMemo(() => {
    let result = roadmaps;
    const needle = debouncedSearch.trim().toLowerCase();
    
    if (needle) {
      result = result.filter(
        (r) =>
          r.title.toLowerCase().includes(needle) ||
          r.shortDescription.toLowerCase().includes(needle) ||
          r.tags.some((t) => t.toLowerCase().includes(needle)),
      );
    }
    
    if (level && level !== "ALL_LEVELS") {
      result = result.filter(r => r.level === level);
    }
    
    if (tag) {
      result = result.filter(r => r.tags.includes(tag));
    }

    if (category) {
      result = result.filter(r => r.tags.includes(category));
    }
    
    return result;
  }, [roadmaps, debouncedSearch, level, tag, category]);

  const inProgress = filtered.filter((r) => enrolledBySlug.has(r.slug));
  const available = filtered.filter((r) => !enrolledBySlug.has(r.slug));

  // ItemList JSON-LD over the visible (unfiltered) catalogue
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "InternHack Career Roadmaps",
    description: "Free, paced career roadmaps with curated resources, weekly plans, and a personalized PDF on enrollment.",
    itemListElement: roadmaps.map((r, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      url: `${SITE_URL}/roadmaps/${r.slug}`,
      name: r.title,
    })),
  };

  const chromeProps = { isStudent, sidebarWidth, collapsed, sidebar };

  return (
    <Chrome {...chromeProps}>
      <SEO
        title="Career Roadmaps for Developers"
        description="Free, paced learning paths for full-stack, AI engineering, and more. Personalized to your hours per week and exported to a PDF when you enroll."
        canonicalUrl={canonicalUrl("/roadmaps")}
        structuredData={itemListSchema}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        {/* Vertical column gridlines, same atmosphere as the Learn hub */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none opacity-[0.04] dark:opacity-[0.05] z-0"
          style={{
            backgroundImage: "linear-gradient(to right, rgba(120,113,108,0.25) 1px, transparent 1px)",
            backgroundSize: "120px 100%",
          }}
        />

        <div className="relative">
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
                career / roadmaps
              </div>
              <h1 className="mt-4 text-3xl sm:text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-none">
                Stop wandering.{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">Start building.</span>
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                    aria-hidden
                    className="absolute bottom-1 left-0 right-0 h-3 md:h-4 bg-lime-400 origin-left z-0"
                  />
                </span>
              </h1>
              <p className="mt-3 text-sm text-stone-500 max-w-md">
                Curated, paced career paths with hand-picked free resources and a weekly plan tuned to the hours you actually have.
              </p>
            </div>
            <div className="flex items-center gap-x-4 gap-y-2 text-[10px] font-mono uppercase tracking-widest text-stone-500 flex-wrap">
              <span>
                roadmaps
                <span className="text-stone-900 dark:text-stone-50 text-sm font-bold tabular-nums ml-2">
                  {roadmaps.length}
                </span>
              </span>
              {isStudent && (
                <span>
                  enrolled
                  <span className="text-stone-900 dark:text-stone-50 text-sm font-bold tabular-nums ml-2">
                    {enrollments.length}
                  </span>
                </span>
              )}
              <span>
                free
                <span className="text-lime-600 dark:text-lime-500 text-sm font-bold tabular-nums ml-2">100%</span>
              </span>
            </div>
          </motion.div>

          {/* AI generate CTA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.4 }}
            className="mb-8"
          >
            <Link
              to="/roadmaps/generate"
              className="group relative block overflow-hidden bg-stone-950 dark:bg-stone-900 text-stone-50 rounded-md p-5 sm:p-6 no-underline border border-white/10 hover:border-lime-400/40 transition-colors"
            >
              <motion.div
                aria-hidden
                animate={{ x: ["-30%", "130%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-y-0 w-1/3 bg-linear-to-r from-transparent via-lime-400/12 to-transparent pointer-events-none"
              />
              <div className="relative flex items-center gap-4">
                <div className="h-11 w-11 rounded-md bg-lime-400 text-stone-950 flex items-center justify-center shrink-0 group-hover:rotate-3 transition-transform">
                  <Wand2 className="w-5 h-5" strokeWidth={2.5} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-lime-400 mb-1">
                    generate with ai
                  </p>
                  <p className="text-base sm:text-lg font-bold leading-tight">
                    Don't see your path? Build your own.
                  </p>
                  <p className="text-xs sm:text-sm text-stone-400 mt-1 leading-relaxed">
                    Answer a few questions. We'll draft a custom roadmap with curated free resources, a weekly plan, and a PDF.
                  </p>
                </div>
                <ArrowUpRight className="w-5 h-5 shrink-0 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
          </motion.div>

          {/* Search & Filters */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="mb-10 space-y-6"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" aria-hidden />
              <input
                type="text"
                placeholder="Search roadmaps by title, tech, or keywords..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                aria-label="Search roadmaps"
                className="w-full pl-11 pr-12 py-4 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400/20 focus:border-lime-400 transition-all text-base text-stone-900 dark:text-stone-50 placeholder-stone-400 dark:placeholder-stone-600 shadow-sm"
              />
              {searchInput && (
                <button
                  onClick={() => setSearchInput("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-1 text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="flex flex-col gap-4">
              {/* Category Filters */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400 mr-2">Category:</span>
                {["Frontend", "Backend", "Fullstack", "AI", "Mobile", "DevOps", "Blockchain"].map((cat) => (
                  <FilterChip
                    key={cat}
                    label={cat}
                    active={category === cat}
                    onClick={() => updateFilter("category", category === cat ? "" : cat)}
                  />
                ))}
              </div>

              {/* Tags Filters */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400 mr-2">Tags:</span>
                {["React", "Node.js", "Python", "System Design", "AWS", "SQL"].map((t) => (
                  <FilterChip
                    key={t}
                    label={t}
                    active={tag === t}
                    onClick={() => updateFilter("tag", tag === t ? "" : t)}
                  />
                ))}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4">
                {/* Level Filters */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400 mr-2">Level:</span>
                  {["ALL_LEVELS", "BEGINNER", "INTERMEDIATE", "ADVANCED"].map((l) => (
                    <FilterChip
                      key={l}
                      label={l.replace("_", " ")}
                      active={level === l}
                      onClick={() => updateFilter("level", l)}
                    />
                  ))}
                </div>

                {(searchInput || tag || category || (level && level !== "ALL_LEVELS")) && (
                  <button
                    onClick={clearFilters}
                    className="text-[10px] font-mono uppercase tracking-widest text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-500/10 px-2 py-1 rounded transition-all cursor-pointer flex items-center gap-1"
                  >
                    <X className="w-3 h-3" />
                    Clear all filters
                  </button>
                )}
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-stone-200 dark:border-white/5">
              <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
                {loading ? "Updating results..." : (
                  <>
                    Showing <span className="text-stone-900 dark:text-stone-50 font-bold">{filtered.length}</span> roadmap{filtered.length === 1 ? "" : "s"}
                    {(searchInput || tag || category || level !== "ALL_LEVELS") && " matching filters"}
                  </>
                )}
              </p>
            </div>
          </motion.div>

          {/* Sections */}
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-44 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md animate-pulse"
                />
              ))}
            </div>
          ) : error ? (
            <div className="py-20 text-center border border-dashed border-stone-300 dark:border-white/10 rounded-md">
              <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
            </div>
          ) : filtered.length === 0 ? (
            <div className="py-20 text-center border border-dashed border-stone-300 dark:border-white/10 rounded-md">
              <p className="text-sm text-stone-600 dark:text-stone-400">No roadmaps match your search.</p>
              <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mt-2">
                try a different keyword
              </p>
            </div>
          ) : (
            <>
              {inProgress.length > 0 && (
                <RoadmapSection
                  label="in progress"
                  title="Pick up where you left off"
                  count={inProgress.length}
                >
                  {inProgress.map((r, idx) => (
                    <RoadmapCard
                      key={r.id}
                      roadmap={r}
                      index={idx}
                      enrollment={enrolledBySlug.get(r.slug)}
                    />
                  ))}
                </RoadmapSection>
              )}

              <RoadmapSection
                label={inProgress.length > 0 ? "explore more" : "all roadmaps"}
                title={inProgress.length > 0 ? "More paths to explore" : "Career paths"}
                count={available.length}
                className={inProgress.length > 0 ? "mt-14" : ""}
              >
                {available.map((r, idx) => (
                  <RoadmapCard key={r.id} roadmap={r} index={idx} />
                ))}
              </RoadmapSection>

              {/* Footer hint */}
              {isStudent && enrollments.length > 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mt-14 flex justify-center"
                >
                  <Link
                    to="/student/roadmaps"
                    className="inline-flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 hover:border-lime-400 dark:hover:border-lime-600 rounded-md text-xs font-mono uppercase tracking-widest text-stone-600 dark:text-stone-400 hover:text-stone-950 dark:hover:text-stone-50 transition-colors no-underline"
                  >
                    <MapIcon className="w-3.5 h-3.5 text-lime-500" />
                    open my dashboard
                    <ChevronRight className="w-3 h-3" />
                  </Link>
                </motion.div>
              )}
            </>
          )}
        </div>
      </div>
    </Chrome>
  );
}

// ── Subcomponents ─────────────────────────────────────────────────────────
function RoadmapSection({
  label, title, count, className = "", children,
}: {
  label: string;
  title: string;
  count: number;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section className={className}>
      <div className="flex items-end justify-between gap-4 mb-6 flex-wrap">
        <div className="min-w-0">
          <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-stone-500">
            <span className="h-1 w-1 bg-lime-400" />
            section / {label}
          </div>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
            {title}
          </h2>
        </div>
        <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 hidden sm:block">
          {count} roadmap{count === 1 ? "" : "s"}
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {children}
      </div>
    </section>
  );
}

function RoadmapCard({
  roadmap, index, enrollment,
}: {
  roadmap: RoadmapListItem;
  index: number;
  enrollment?: RoadmapEnrollmentListItem | undefined;
}) {
  const MAX_STAGGER = 8;
  const delay = 0.05 + Math.min(index, MAX_STAGGER) * 0.04;
  const isEnrolled = !!enrollment;

  let percentComplete = 0;
  if (enrollment && roadmap.topicCount > 0) {
    const completed = enrollment.topicProgress.filter((p) => p.status === "COMPLETED").length;
    percentComplete = Math.round((completed / roadmap.topicCount) * 100);
  }

  const href = isEnrolled ? `/learn/roadmaps/${roadmap.slug}` : `/roadmaps/${roadmap.slug}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
    >
      <Link
        to={href}
        className="group relative flex flex-col bg-white dark:bg-stone-900 p-5 rounded-md border border-stone-200 dark:border-white/10 hover:border-stone-400 dark:hover:border-white/30 transition-colors h-full no-underline"
      >
        <span className="absolute top-4 right-4 text-[10px] font-mono uppercase tracking-widest text-stone-500 inline-flex items-center gap-1.5">
          <span className="h-1 w-1 bg-lime-400" />
          {isEnrolled ? "enrolled" : "free"}
        </span>

        <div className="flex items-start gap-3 mb-3 pr-20">
          <div
            className="w-10 h-10 rounded-md bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-white/10 flex items-center justify-center shrink-0"
            aria-hidden
          >
            <MapIcon className="w-5 h-5 text-lime-600 dark:text-lime-500" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-bold tracking-tight text-stone-900 dark:text-stone-50 line-clamp-1 leading-tight group-hover:text-lime-700 dark:group-hover:text-lime-400 transition-colors">
              {roadmap.title}
            </h3>
            <span className="text-xs font-mono uppercase tracking-widest text-stone-500 mt-0.5 block truncate">
              {roadmap.level.replace("_", " ").toLowerCase()}
            </span>
          </div>
        </div>

        <p className="text-sm text-stone-600 dark:text-stone-400 line-clamp-2 mb-4 leading-relaxed">
          {roadmap.shortDescription}
        </p>

        {/* Progress bar for enrolled */}
        {isEnrolled && (
          <div className="mb-4">
            <div className="flex items-baseline justify-between mb-1.5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">progress</span>
              <span className="text-[10px] font-mono font-bold text-stone-900 dark:text-stone-50 tabular-nums">{percentComplete}%</span>
            </div>
            <div className="h-1 w-full bg-stone-100 dark:bg-stone-800 overflow-hidden rounded-full">
              <motion.div
                className="h-full bg-lime-500"
                initial={{ width: 0 }}
                animate={{ width: `${percentComplete}%` }}
                transition={{ duration: 0.6, delay: delay + 0.1 }}
              />
            </div>
          </div>
        )}

        <div className="mt-auto flex items-center justify-between pt-3 border-t border-stone-100 dark:border-white/5">
          <div className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-widest text-stone-500">
            <span className="inline-flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {roadmap.estimatedHours}h
            </span>
            <span className="inline-flex items-center gap-1">
              <BookOpen className="w-3 h-3" />
              {roadmap.topicCount}
            </span>
            {roadmap.enrolledCount > 0 && (
              <span className="inline-flex items-center gap-1">
                <Users className="w-3 h-3" />
                {roadmap.enrolledCount}
              </span>
            )}
          </div>
          <ArrowUpRight
            className="w-4 h-4 text-stone-400 group-hover:text-lime-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
            aria-hidden
          />
        </div>
      </Link>
    </motion.div>
  );
}

function FilterChip({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest transition-all ${
        active
          ? "bg-lime-400 text-stone-950 font-bold border border-lime-500 shadow-sm"
          : "bg-white dark:bg-stone-900 text-stone-500 hover:text-stone-900 dark:hover:text-stone-300 border border-stone-200 dark:border-white/10"
      }`}
    >
      {label}
    </button>
  );
}
