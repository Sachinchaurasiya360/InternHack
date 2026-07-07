import { useEffect, useMemo, useState, type ReactNode } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BookOpen,
  Clock,
  Download,
  Filter,
  Loader2,
  Map as MapIcon,
  Search,
  Sparkles,
  Tag,
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
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../../lib/query-keys";
import { GridBackground } from "../../../components/ui/GridBackground";
import { EditorialDropdown } from "../../../components/ui/EditorialDropdown";
import { Button } from "../../../components/ui/button";
import { ConfirmDialog } from "../../../components/ui/ConfirmDialog";
import toast from "../../../components/ui/toast";

const CATEGORY_OPTIONS = ["Frontend", "Backend", "Fullstack", "AI", "Mobile", "DevOps", "Blockchain"];
const TAG_OPTIONS = ["React", "Node.js", "Python", "System Design", "AWS", "SQL"];
const LEVEL_OPTIONS = ["ALL_LEVELS", "BEGINNER", "INTERMEDIATE", "ADVANCED"];


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
  const queryClient = useQueryClient();

  const [downloadingId, setDownloadingId] = useState<number | null>(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [selectedRoadmapId, setSelectedRoadmapId] = useState<number | null>(null);

  // Filter states from URL
  const [searchInput, setSearchInput] = useState(searchParams.get("search") || "");
  const debouncedSearch = useDebounce(searchInput, 400);
  
  const level = searchParams.get("level") || "ALL_LEVELS";
  const tag = searchParams.get("tag") || "";
  const category = searchParams.get("category") || "";

  const params: Record<string, string | number> = { page: 1, limit: 50 };
  if (debouncedSearch) params.search = debouncedSearch;
  if (level && level !== "ALL_LEVELS") params.level = level;
  if (tag) params.tag = tag;
  if (category) params.category = category;

  const { data: roadmapsData, isLoading: roadmapsLoading, error: roadmapsError } = useQuery({
    queryKey: queryKeys.roadmaps.list(params),
    queryFn: () => api.get<ListResponse>("/roadmaps", { params }).then(res => res.data),
    staleTime: 10 * 60 * 1000,
  });

  const { data: enrollmentsData, isError: enrollmentsError } = useQuery({
    queryKey: queryKeys.roadmaps.enrollments(),
    queryFn: () => api.get<{ enrollments: RoadmapEnrollmentListItem[] }>("/roadmaps/me/enrollments").then(res => res.data),
    enabled: isStudent,
    staleTime: 5 * 60 * 1000,
  });

  const { data: communityData } = useQuery({
    queryKey: queryKeys.roadmaps.community(),
    queryFn: () => api.get<{ roadmaps: RoadmapListItem[] }>("/roadmaps/community").then(res => res.data),
    staleTime: 5 * 60 * 1000,
  });

  const roadmaps = useMemo(() => roadmapsData?.roadmaps || [], [roadmapsData]);
  const enrollments = useMemo(() => {
    if (enrollmentsError) return []; // Fallback to empty but we'll show error below
    return enrollmentsData?.enrollments || [];
  }, [enrollmentsData, enrollmentsError]);
  const completedEnrollments = useMemo(
    () =>
      enrollments.filter((e) =>
        e.topicProgress.length > 0 &&
        e.topicProgress.every((p) => p.status === "COMPLETED")
      ),
    [enrollments]
  );
  const completedCount = completedEnrollments.length;
  const loading = roadmapsLoading;
  const error = (roadmapsError || (isStudent && enrollmentsError)) ? "Could not load roadmaps. Please try again." : null;

  const selectedEnrollment = enrollments.find((e) => e.id === selectedRoadmapId);

  const downloadPdf = async (id: number, slug: string) => {
    setDownloadingId(id);
    try {
      const res = await api.get(`/roadmaps/me/enrollments/${id}/pdf`, {
        responseType: "blob",
      });
      const url = URL.createObjectURL(res.data as Blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${slug}-roadmap.pdf`;
      a.click();
      URL.revokeObjectURL(url);
      toast.success("PDF downloaded successfully");
    } catch {
      toast.error("PDF generation failed. Please try again.");
    } finally {
      setDownloadingId(null);
    }
  };

  const handleLeaveClick = (roadmapId: number) => {
    setSelectedRoadmapId(roadmapId);
    setDeleteDialogOpen(true);
  };

  const handleLeaveConfirm = async () => {
    try {
      setIsDeleting(true);
      const res = await api.delete(`/roadmaps/me/enrollments/${selectedRoadmapId}`);
      if (res.status === 204) {
        toast.success("Roadmap left successfully!");
        await queryClient.invalidateQueries({ queryKey: queryKeys.roadmaps.enrollments() });
      } else {
        toast.error("Failed to leave roadmap. Please try again.");
      }
    } catch {
      toast.error("Failed to leave roadmap. Please try again.");
    } finally {
      setIsDeleting(false);
      setDeleteDialogOpen(false);
      setSelectedRoadmapId(null);
    }
  };

  const handleLeaveClose = () => {
    setDeleteDialogOpen(false);
    setSelectedRoadmapId(null);
  };

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

  // Set of enrolled slugs for fast lookup
  const enrolledSlugs = useMemo(
    () => new Set(enrollments.map((e) => e.roadmap.slug)),
    [enrollments],
  );

  // Secondary client-side filtering for ultra-smooth UX while API loads
  const filtered = useMemo(() => {
    let result = roadmaps.filter((r) => {
      const enrollment = enrollments.find((e) => e.roadmap.slug === r.slug);
      if (!enrollment) return true;
      const isCompleted = enrollment.topicProgress.length > 0 && enrollment.topicProgress.every((p) => p.status === "COMPLETED");
      return !isCompleted;
    });

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
      result = result.filter(r =>
        r.tags.map(t => t.toLowerCase()).includes(tag.toLowerCase())
      );
    }
    if (category) {
      result = result.filter(r =>
        r.tags.map(t => t.toLowerCase()).includes(category.toLowerCase())
      );
    }
    
    return result;
  }, [roadmaps, enrollments, debouncedSearch, level, tag, category]);

  // "In progress" is built directly from enrollments so AI-generated roadmaps
  // (isPublished: false) are included even though they're absent from the
  // public catalogue. Apply the same text/level/tag filters where possible.
  const inProgressEnrollments = useMemo(() => {
    const needle = debouncedSearch.trim().toLowerCase();
    return enrollments.filter((e) => {
      const isCompleted = e.topicProgress.length > 0 && e.topicProgress.every((p) => p.status === "COMPLETED");
      if (isCompleted) return false;
      const r = e.roadmap;
      if (needle) {
        const matchesText =
          r.title.toLowerCase().includes(needle) ||
          r.shortDescription.toLowerCase().includes(needle) ||
          (r.tags ?? []).some((t) => t.toLowerCase().includes(needle));
        if (!matchesText) return false;
      }
      if (level && level !== "ALL_LEVELS" && r.level && r.level !== level) return false;
      if (tag && !(r.tags ?? []).map(t => t.toLowerCase()).includes(tag.toLowerCase())) return false;
      if (category && !(r.tags ?? []).map(t => t.toLowerCase()).includes(category.toLowerCase())) return false;
      return true;
    });
  }, [enrollments, debouncedSearch, level, tag, category]);

  // "Available" = public catalogue minus already-enrolled slugs
  const available = useMemo(
    () => filtered.filter((r) => !enrolledSlugs.has(r.slug)),
    [filtered, enrolledSlugs],
  );

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
        <GridBackground />

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
                <>
                <span>
                  enrolled
                  <span className="text-stone-900 dark:text-stone-50 text-sm font-bold tabular-nums ml-2">
                    {enrollments.length}
                  </span>
                </span>
                <span>
                  completed
                  <span className="text-lime-600 dark:text-lime-500 text-sm font-bold tabular-nums ml-2">
                    {completedCount}
                  </span>
                </span>
                </>
              )}
              <span>
                free
                <span className="text-lime-600 dark:text-lime-500 text-sm font-bold tabular-nums ml-2">100%</span>
              </span>
            </div>
          </motion.div>

          {/* Certificates CTA */}
          {isStudent && completedCount > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-6"
            >
              <Link
                to="/learn/roadmaps/certificates"
                className="group relative block overflow-hidden bg-lime-400 text-stone-950 rounded-md p-5 sm:p-6 no-underline border border-lime-500 hover:bg-lime-300 transition-colors"
              >
                <div className="relative flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-[0.2em] mb-1">
                      certificates
                    </p>

                    <p className="text-lg font-bold leading-tight">
                      View all certificates
                    </p>

                    <p className="text-sm mt-1 opacity-80">
                      Browse and share your completed roadmap certificates.
                    </p>
                  </div>

                  <ArrowUpRight
                    className="w-5 h-5 shrink-0 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"
                    aria-hidden="true"
                  />
                </div>
              </Link>
            </motion.div>
          )}

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
                <ArrowUpRight className="w-5 h-5 shrink-0 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
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
                  aria-label="Clear search"
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-1 text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 transition-colors"
                >
                  <X className="w-4 h-4" aria-hidden="true" />
                </button>
              )}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filter roadmaps">
                <EditorialDropdown
                  icon={<Filter className="w-3.5 h-3.5" />}
                  label="category"
                  value={category}
                  onChange={(v) => updateFilter("category", v)}
                  options={[
                    { value: "", label: "All categories" },
                    ...CATEGORY_OPTIONS.map((cat) => ({ value: cat, label: cat })),
                  ]}
                />
                <EditorialDropdown
                  icon={<Tag className="w-3.5 h-3.5" />}
                  label="tag"
                  value={tag}
                  onChange={(v) => updateFilter("tag", v)}
                  options={[
                    { value: "", label: "All tags" },
                    ...TAG_OPTIONS.map((t) => ({ value: t, label: t })),
                  ]}
                />
                <EditorialDropdown
                  icon={<BarChart3 className="w-3.5 h-3.5" />}
                  label="level"
                  value={level}
                  onChange={(v) => updateFilter("level", v)}
                  options={LEVEL_OPTIONS.map((l) => ({
                    value: l,
                    label:
                      l === "ALL_LEVELS"
                        ? "All levels"
                        : l.charAt(0) + l.slice(1).toLowerCase(),
                  }))}
                />
              </div>

              {(searchInput || tag || category || (level && level !== "ALL_LEVELS")) && (
                <button
                  onClick={clearFilters}
                  aria-label="Clear all filters"
                  className="text-[10px] font-mono uppercase tracking-widest text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-500/10 px-2 py-1 rounded transition-all cursor-pointer flex items-center gap-1"
                >
                  <X className="w-3 h-3" aria-hidden="true" />
                  Clear all filters
                </button>
              )}
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-stone-200 dark:border-white/5">
              <p
                aria-live="polite"
                aria-atomic="true"
                className="text-[10px] font-mono uppercase tracking-widest text-stone-500"
              >
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
              {inProgressEnrollments.length > 0 && (
                <RoadmapSection
                  label="in progress"
                  title="Pick up where you left off"
                  count={inProgressEnrollments.length}
                >
                  {inProgressEnrollments.map((e, idx) => (
                    <EnrollmentCard
                      key={e.id}
                      enrollment={e}
                      index={idx}
                      downloading={downloadingId === e.id}
                      onDownload={() => downloadPdf(e.id, e.roadmap.slug)}
                      onLeaveClick={() => handleLeaveClick(e.id)}
                    />
                  ))}
                </RoadmapSection>
              )}

              <RoadmapSection
                label={inProgressEnrollments.length > 0 ? "explore more" : "all roadmaps"}
                title={inProgressEnrollments.length > 0 ? "More paths to explore" : "Career paths"}
                count={available.length}
                className={inProgressEnrollments.length > 0 ? "mt-14" : ""}
              >
                {available.map((r, idx) => (
                  <RoadmapCard key={r.id} roadmap={r} index={idx} />
                ))}
              </RoadmapSection>

              {communityData && communityData.roadmaps.length > 0 && (
                <RoadmapSection
                  label="community"
                  title="Made by the community"
                  count={communityData.roadmaps.length}
                  className="mt-14"
                >
                  {communityData.roadmaps.map((r, idx) => (
                    <CommunityRoadmapCard key={r.id} roadmap={r} index={idx} />
                  ))}
                </RoadmapSection>
              )}
            </>
          )}
        </div>
      </div>

      <ConfirmDialog
        open={deleteDialogOpen}
        title="Leave Roadmap?"
        confirmLabel="Yes, leave"
        cancelLabel="No"
        confirmVariant="danger"
        loading={isDeleting}
        onCancel={handleLeaveClose}
        onConfirm={handleLeaveConfirm}
      >
        {selectedEnrollment && (
          <div className="space-y-4">
            <p className="text-sm text-stone-600 dark:text-stone-400">
              <strong className="font-semibold text-stone-900 dark:text-white">
                Leaving "{selectedEnrollment.roadmap.title}" will permanently erase all saved progress and topic completion data.
              </strong>
            </p>
            <p className="text-sm text-stone-600 dark:text-stone-400">
              Are you sure you want to leave this roadmap?
            </p>
          </div>
        )}
      </ConfirmDialog>
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
    <section className={className} aria-label={title}>
      <div className="flex items-end justify-between gap-4 mb-6 flex-wrap">
        <div className="min-w-0">
          <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-stone-500" aria-hidden="true">
            <span className="h-1 w-1 bg-lime-400" />
            section / {label}
          </div>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
            {title}
          </h2>
        </div>
        <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 hidden sm:block" aria-hidden="true">
          {count} roadmap{count === 1 ? "" : "s"}
        </span>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0 m-0">
        {children}
      </ul>
    </section>
  );
}

/**
 * Card for roadmaps the user is enrolled in (including AI-generated ones that
 * are not in the public catalogue). Reads directly from the enrollment object.
 */
function EnrollmentCard({
  enrollment,
  index,
  downloading,
  onDownload,
  onLeaveClick,
}: {
  enrollment: RoadmapEnrollmentListItem;
  index: number;
  downloading: boolean;
  onDownload: () => void;
  onLeaveClick: () => void;
}) {
  const MAX_STAGGER = 8;
  const delay = 0.05 + Math.min(index, MAX_STAGGER) * 0.04;
  const r = enrollment.roadmap;
  const isAi = r.isAiGenerated ?? false;

  const completed = enrollment.topicProgress.filter((p) => p.status === "COMPLETED").length;
  const percentComplete =
    r.topicCount > 0 ? Math.round((completed / r.topicCount) * 100) : 0;

  return (
    <li>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.4 }}
        className="relative flex flex-col bg-white dark:bg-stone-900 p-5 rounded-md border border-stone-200 dark:border-white/10 hover:border-stone-400 dark:hover:border-white/30 transition-colors h-full"
      >
        {/* Top-right badge */}
        <span
          className="absolute top-4 right-4 text-[10px] font-mono uppercase tracking-widest text-stone-500 inline-flex items-center gap-1.5"
          aria-hidden="true"
        >
          {isAi ? (
            <>
              <Sparkles className="w-3 h-3 text-lime-500" />
              ai · enrolled
            </>
          ) : (
            <>
              <span className="h-1 w-1 bg-lime-400" />
              enrolled
            </>
          )}
        </span>

        <Link
          to={`/learn/roadmaps/${r.slug}`}
          aria-label={`${r.title}, enrolled, ${percentComplete}% complete`}
          className="group block no-underline rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:ring-offset-2"
        >
          <div className="flex items-start gap-3 mb-3 pr-24">
            <div
              className="w-10 h-10 rounded-md bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-white/10 flex items-center justify-center shrink-0"
              aria-hidden="true"
            >
              {isAi ? (
                <Sparkles className="w-5 h-5 text-lime-500" />
              ) : (
                <MapIcon className="w-5 h-5 text-lime-600 dark:text-lime-500" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-base font-bold tracking-tight text-stone-900 dark:text-stone-50 line-clamp-1 leading-tight group-hover:text-lime-700 dark:group-hover:text-lime-400 transition-colors">
                {r.title}
              </h3>
              <span className="text-xs font-mono uppercase tracking-widest text-stone-500 mt-0.5 block truncate">
                {r.level ? r.level.replace("_", " ").toLowerCase() : "custom"}
              </span>
            </div>
          </div>

          <p className="text-sm text-stone-600 dark:text-stone-400 line-clamp-2 mb-4 leading-relaxed">
            {r.shortDescription}
          </p>

          {/* Progress bar */}
          <div className="mb-4">
            <div className="flex items-baseline justify-between mb-1.5" aria-hidden="true">
              <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">progress</span>
              <span className="text-[10px] font-mono font-bold text-stone-900 dark:text-stone-50 tabular-nums">
                {percentComplete}%
              </span>
            </div>
            <div
              role="progressbar"
              aria-valuenow={percentComplete}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={`${r.title} progress`}
              className="h-1 w-full bg-stone-100 dark:bg-stone-800 overflow-hidden rounded-full"
            >
              <motion.div
                className="h-full bg-lime-500"
                initial={{ width: 0 }}
                animate={{ width: `${percentComplete}%` }}
                transition={{ duration: 0.6, delay: delay + 0.1 }}
              />
            </div>
          </div>
        </Link>

        <div className="mt-auto pt-3 border-t border-stone-100 dark:border-white/5">
          <div className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-3">
            <span className="inline-flex items-center gap-1">
              <Clock className="w-3 h-3" aria-hidden="true" />
              <span>{r.estimatedHours}h</span>
            </span>
            <span className="inline-flex items-center gap-1">
              <BookOpen className="w-3 h-3" aria-hidden="true" />
              <span>{r.topicCount} topics</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Button asChild variant="mono" size="sm">
              <Link to={`/learn/roadmaps/${r.slug}`}>
                Resume
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={onDownload}
              disabled={downloading}
              aria-label={downloading ? `Downloading PDF for ${r.title}` : `Download PDF for ${r.title}`}
            >
              {downloading ? (
                <Loader2 className="w-3.5 h-3.5 animate-spin" aria-hidden="true" />
              ) : (
                <Download className="w-3.5 h-3.5" aria-hidden="true" />
              )}
              PDF
            </Button>
            <Button
              variant="destructive"
              size="sm"
              onClick={onLeaveClick}
              className="ml-auto"
              aria-label={`Leave ${r.title} roadmap`}
            >
              Leave
            </Button>
          </div>
        </div>
      </motion.div>
    </li>
  );
}

/** Card for public (non-enrolled) roadmaps in the catalogue. */
function RoadmapCard({
  roadmap,
  index,
}: {
  roadmap: RoadmapListItem;
  index: number;
}) {
  const MAX_STAGGER = 8;
  const delay = 0.05 + Math.min(index, MAX_STAGGER) * 0.04;

  return (
    <li>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.4 }}
      >
        <Link
          to={`/roadmaps/${roadmap.slug}`}
          aria-label={roadmap.title}
          className="group relative flex flex-col bg-white dark:bg-stone-900 p-5 rounded-md border border-stone-200 dark:border-white/10 hover:border-stone-400 dark:hover:border-white/30 transition-colors h-full no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:ring-offset-2"
        >
          <span className="absolute top-4 right-4 text-[10px] font-mono uppercase tracking-widest text-stone-500 inline-flex items-center gap-1.5" aria-hidden="true">
            <span className="h-1 w-1 bg-lime-400" />
            free
          </span>

          <div className="flex items-start gap-3 mb-3 pr-20">
            <div
              className="w-10 h-10 rounded-md bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-white/10 flex items-center justify-center shrink-0"
              aria-hidden="true"
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

          <div className="mt-auto flex items-center justify-between pt-3 border-t border-stone-100 dark:border-white/5">
            <div className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-widest text-stone-500">
              <span className="inline-flex items-center gap-1">
                <Clock className="w-3 h-3" aria-hidden="true" />
                <span>{roadmap.estimatedHours}h</span>
              </span>
              <span className="inline-flex items-center gap-1">
                <BookOpen className="w-3 h-3" aria-hidden="true" />
                <span>{roadmap.topicCount} topics</span>
              </span>
              {roadmap.enrolledCount > 0 && (
                <span className="inline-flex items-center gap-1">
                  <Users className="w-3 h-3" aria-hidden="true" />
                  <span>{roadmap.enrolledCount} enrolled</span>
                </span>
              )}
            </div>
            <ArrowUpRight
              className="w-4 h-4 text-stone-400 group-hover:text-lime-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
              aria-hidden="true"
            />
          </div>
        </Link>
      </motion.div>
    </li>
  );
}

function CommunityRoadmapCard({
  roadmap,
  index,
}: {
  roadmap: RoadmapListItem;
  index: number;
}) {
  const MAX_STAGGER = 8;
  const delay = 0.05 + Math.min(index, MAX_STAGGER) * 0.04;

  return (
    <li>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.4 }}
      >
        <Link
          to={`/roadmaps/${roadmap.slug}`}
          aria-label={roadmap.title}
          className="group relative flex flex-col bg-white dark:bg-stone-900 p-5 rounded-md border border-stone-200 dark:border-white/10 hover:border-stone-400 dark:hover:border-white/30 transition-colors h-full no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:ring-offset-2"
        >
          <span className="absolute top-4 right-4 text-[10px] font-mono uppercase tracking-widest text-stone-500 inline-flex items-center gap-1.5" aria-hidden="true">
            <span className="h-1 w-1 bg-lime-400" />
            ai
          </span>

          <div className="flex items-start gap-3 mb-3 pr-16">
            <div
              className="w-10 h-10 rounded-md bg-lime-50 dark:bg-lime-900/20 border border-lime-200 dark:border-lime-800/40 flex items-center justify-center shrink-0"
              aria-hidden="true"
            >
              <Wand2 className="w-5 h-5 text-lime-600 dark:text-lime-500" />
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

          <div className="mt-auto flex items-center justify-between pt-3 border-t border-stone-100 dark:border-white/5">
            <div className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-widest text-stone-500">
              <span className="inline-flex items-center gap-1">
                <Clock className="w-3 h-3" aria-hidden="true" />
                <span>{roadmap.estimatedHours}h</span>
              </span>
              <span className="inline-flex items-center gap-1">
                <BookOpen className="w-3 h-3" aria-hidden="true" />
                <span>{roadmap.topicCount} topics</span>
              </span>
              {roadmap.creatorName && (
                <span className="inline-flex items-center gap-1">
                  <Users className="w-3 h-3" aria-hidden="true" />
                  <span className="truncate max-w-24">{roadmap.creatorName}</span>
                </span>
              )}
            </div>
            <ArrowUpRight
              className="w-4 h-4 text-stone-400 group-hover:text-lime-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
              aria-hidden="true"
            />
          </div>
        </Link>
      </motion.div>
    </li>
  );
}
