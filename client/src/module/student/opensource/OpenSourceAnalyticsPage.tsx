import { useState, useMemo } from "react";
import { Link } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import { OssContributionHeatmap } from "../../../components/OssContributionHeatmap";
import {
  AlertCircle,
  Filter,
  X,
  Maximize2,
  Download,
  ChevronDown,
  ArrowLeft,
  BarChart3,
} from "lucide-react";
import { LoadingScreen } from "../../../components/LoadingScreen";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
  LineChart,
  Line,
} from "recharts";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import { Button } from "../../../components/ui/button";
import { SEO } from "../../../components/SEO";
import type {
  GSoCOrganization,
  GSoCStats,
  OpenSourceContributionTrendResponse,
} from "../../../lib/types";

// ─── Theme ──────────────────────────────────────────────────────
const CHART_COLORS = [
  "#a3e635", "#65a30d", "#4d7c0f", "#84cc16", "#bef264",
  "#d9f99d", "#3f6212", "#86efac", "#6ee7b7", "#34d399",
  "#6366f1", "#8b5cf6",
];

const CATEGORY_COLORS: Record<string, string> = {
  "Science and medicine": "#a3e635",
  "Security": "#ef4444",
  "End user applications": "#65a30d",
  "Programming languages": "#8b5cf6",
  "Development tools": "#6366f1",
  "Media": "#d9f99d",
  "Operating systems": "#6b7280",
  "Data": "#84cc16",
  "Infrastructure and cloud": "#4d7c0f",
  "Web": "#bef264",
  "Social and communication": "#86efac",
  "Other": "#9ca3af",
};

const tooltipStyle = {
  contentStyle: {
    background: "#1c1917",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "0.375rem",
    color: "#e7e5e4",
    fontSize: "0.75rem",
    boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
  },
  itemStyle: { color: "#d6d3d1" },
};

// ─── Custom Tooltip ─────────────────────────────────────────────
function CustomTooltip({ active, payload, label }: { active?: boolean; payload?: { value: number; name?: string }[]; label?: string }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-stone-900 border border-white/10 rounded-md px-3 py-2 text-xs text-stone-300 shadow-xl">
      {label && <p className="font-semibold text-stone-50 mb-1">{label}</p>}
      {payload.map((p, i) => (
        <p key={i}>{p.name ?? ""}: <span className="font-bold text-lime-400">{typeof p.value === "number" ? p.value.toLocaleString() : p.value}</span></p>
      ))}
    </div>
  );
}

// ─── Chart Modal ────────────────────────────────────────────────
function ChartModal({ open, onClose, title, subtitle, children }: { open: boolean; onClose: () => void; title: string; subtitle: string; children: React.ReactNode }) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-stone-950/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-3 sm:inset-6 md:inset-12 lg:inset-20 z-50 bg-stone-900 rounded-md border border-white/10 shadow-2xl flex flex-col overflow-hidden"
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 shrink-0">
              <div>
                <div className="flex items-center gap-1.5 mb-0.5">
                  <div className="h-1 w-1 bg-lime-400" />
                  <p className="text-[10px] font-mono uppercase tracking-widest text-stone-400">{subtitle}</p>
                </div>
                <h3 className="text-base font-bold text-stone-50">{title}</h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="w-8 h-8 rounded-md flex items-center justify-center text-stone-400 hover:bg-white/5 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="flex-1 p-5 overflow-auto min-h-0">
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// ─── Chart Card ─────────────────────────────────────────────────
function ChartCard({ title, subtitle, index, children, expandedChildren, className = "" }: {
  title: string;
  subtitle: string;
  index: number;
  children: React.ReactNode;
  expandedChildren?: React.ReactNode;
  className?: string;
}) {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.06, duration: 0.4 }}
        className={`bg-white dark:bg-stone-900 rounded-md border border-stone-200 dark:border-white/10 p-5 group ${className}`}
      >
        <div className="flex items-start justify-between mb-1">
          <div>
            <div className="flex items-center gap-1.5 mb-0.5">
              <div className="h-1 w-1 bg-lime-400" />
              <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">{subtitle}</p>
            </div>
            <h3 className="text-sm font-bold text-stone-900 dark:text-stone-50">{title}</h3>
          </div>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); setExpanded(true); }}
            className="w-7 h-7 rounded-md flex items-center justify-center text-stone-400 dark:text-stone-500 hover:bg-stone-100 dark:hover:bg-white/5 hover:text-stone-700 dark:hover:text-lime-400 transition-colors cursor-pointer"
            title="Expand chart"
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </button>
        </div>
        <div className="mt-4">{children}</div>
      </motion.div>
      <ChartModal open={expanded} onClose={() => setExpanded(false)} title={title} subtitle={subtitle}>
        {expandedChildren ?? children}
      </ChartModal>
    </>
  );
}

function TrendSkeleton() {
  return (
    <div className="animate-pulse space-y-4">
      <div className="flex items-end gap-3 h-64">
        {[42, 68, 58, 88, 54, 76].map((height, index) => (
          <div key={index} className="flex-1 flex flex-col items-center gap-2">
            <div className="w-full rounded-t-xl bg-stone-100 dark:bg-stone-800" style={{ height: `${height}%` }} />
            <div className="h-3 w-14 rounded-full bg-stone-100 dark:bg-stone-800" />
          </div>
        ))}
      </div>
      <div className="h-4 w-48 rounded-full bg-stone-100 dark:bg-stone-800" />
    </div>
  );
}

function TrendEmptyState({
  message,
  showButton = false,
}: {
  message: string;
  showButton?: boolean;
}) {
  return (
    <div className="flex h-64 flex-col items-center justify-center rounded-md border border-dashed border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-stone-900 px-6 text-center">
      <BarChart3 className="w-10 h-10 text-lime-500 mb-3" />

      <p className="text-base font-semibold text-stone-900 dark:text-stone-50">
        No contributions tracked yet
      </p>

      <p className="mt-2 max-w-sm text-sm text-stone-500 dark:text-stone-400">
        {message}
      </p>

      {showButton && (
        <Link to="/student/opensource">
          <Button className="mt-4">
            Discover Repositories
          </Button>
        </Link>
      )}
    </div>
  );
}

// ─── Page ───────────────────────────────────────────────────────
export default function OpenSourceAnalyticsPage() {
  const [selectedOrgs, setSelectedOrgs] = useState<number[]>([]);
  const [filterYear, setFilterYear] = useState<string>("ALL");
  const [filterCategory, setFilterCategory] = useState<string>("ALL");
  const [filterTech, setFilterTech] = useState<string>("ALL");
  const [showFilters, setShowFilters] = useState(false);

  const { data: stats } = useQuery<GSoCStats>({
    queryKey: queryKeys.gsoc.stats(),
    queryFn: () => api.get("/gsoc/stats").then((r) => r.data),
    staleTime: Infinity,
  });

  const { data: orgsData, isLoading } = useQuery({
    queryKey: [...queryKeys.gsoc.list(), "analytics-all"],
    queryFn: async () => {
      const all: GSoCOrganization[] = [];
      let page = 1;
      const limit = 50;
      while (true) {
        const res = await api.get("/gsoc/organizations", { params: { limit, page } });
        const batch = res.data.organizations as GSoCOrganization[];
        all.push(...batch);
        const totalPages = res.data.pagination?.totalPages ?? 1;
        if (page >= totalPages) break;
        page++;
      }
      return all;
    },
    staleTime: 5 * 60 * 1000,
  });

  const { data: contributionTrendData, isLoading: trendIsLoading, isError: trendIsError } = useQuery<OpenSourceContributionTrendResponse>({
    queryKey: queryKeys.opensource.trend(),
    queryFn: () => api.get("/opensource/analytics/trend").then((r) => r.data),
    staleTime: 5 * 60 * 1000,
  });

  const allOrgs = useMemo(() => orgsData ?? [], [orgsData]);
  const contributionTrend = contributionTrendData?.trend ?? [];
  const contributionTotal = contributionTrendData?.total ?? 0;
  const hasContributionActivity = contributionTrend.some((entry) => entry.count > 0);
  const showContributionEmptyState =
  contributionTotal === 0 &&
  contributionTrend.length > 0 &&
  contributionTrend.every((entry) => entry.count === 0);

  const handleExportCSV = () => {
    if (!contributionTrend || contributionTrend.length === 0) return;

    const header = "Month,Label,Contributions";
    const rows = contributionTrend.map(m => `${m.month},${m.label},${m.count}`);
    const csv = [header, ...rows].join("\n");

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "my-oss-contributions.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const years = useMemo(() => {
    const set = new Set<number>();
    allOrgs.forEach((o) => o.yearsParticipated.forEach((y) => set.add(y)));
    return Array.from(set).sort((a, b) => b - a);
  }, [allOrgs]);

  const categories = useMemo(() => {
    const set = new Set<string>();
    allOrgs.forEach((o) => set.add(o.category));
    return Array.from(set).sort();
  }, [allOrgs]);

  const technologies = useMemo(() => {
    const counts: Record<string, number> = {};
    allOrgs.forEach((o) => o.technologies.forEach((t) => { counts[t] = (counts[t] || 0) + 1; }));
    return Object.entries(counts).sort((a, b) => b[1] - a[1]).map(([name]) => name);
  }, [allOrgs]);

  const orgs = useMemo(() => {
    return allOrgs.filter((o) => {
      if (filterYear !== "ALL" && !o.yearsParticipated.includes(Number(filterYear))) return false;
      if (filterCategory !== "ALL" && o.category !== filterCategory) return false;
      if (filterTech !== "ALL" && !o.technologies.includes(filterTech)) return false;
      return true;
    });
  }, [allOrgs, filterYear, filterCategory, filterTech]);

  const hasActiveFilter = filterYear !== "ALL" || filterCategory !== "ALL" || filterTech !== "ALL";
  const activeFilterCount = (filterYear !== "ALL" ? 1 : 0) + (filterCategory !== "ALL" ? 1 : 0) + (filterTech !== "ALL" ? 1 : 0);

  const clearFilters = () => {
    setFilterYear("ALL");
    setFilterCategory("ALL");
    setFilterTech("ALL");
  };

  // ─── Chart data ─────────────────────────────────────────────
  const categoryData = useMemo(() => {
    const counts: Record<string, number> = {};
    orgs.forEach((o) => { counts[o.category] = (counts[o.category] || 0) + 1; });
    return Object.entries(counts)
      .map(([name, value]) => ({ name, value, fill: CATEGORY_COLORS[name] || "#6b7280" }))
      .sort((a, b) => b.value - a.value);
  }, [orgs]);

  const yearTrendData = useMemo(() => {
    const counts: Record<number, number> = {};
    orgs.forEach((o) => o.yearsParticipated.forEach((y) => { counts[y] = (counts[y] || 0) + 1; }));
    return Object.entries(counts)
      .map(([year, count]) => ({ year, count }))
      .sort((a, b) => a.year.localeCompare(b.year));
  }, [orgs]);

  const techData = useMemo(() => {
    const counts: Record<string, number> = {};
    orgs.forEach((o) => o.technologies.forEach((t) => { counts[t] = (counts[t] || 0) + 1; }));
    return Object.entries(counts)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 15);
  }, [orgs]);

  const topicData = useMemo(() => {
    const counts: Record<string, number> = {};
    orgs.forEach((o) => o.topics.forEach((t) => { counts[t] = (counts[t] || 0) + 1; }));
    return Object.entries(counts)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 15);
  }, [orgs]);

  const topProjectsData = useMemo(() =>
    [...orgs].sort((a, b) => b.totalProjects - a.totalProjects).slice(0, 10).map((o) => ({
      name: o.name.length > 20 ? o.name.slice(0, 18) + "..." : o.name,
      projects: o.totalProjects,
      fill: CATEGORY_COLORS[o.category] || "#84cc16",
    })), [orgs]);

  const yearCountData = useMemo(() => {
    const counts: Record<number, number> = {};
    orgs.forEach((o) => { counts[o.yearsParticipated.length] = (counts[o.yearsParticipated.length] || 0) + 1; });
    return Object.entries(counts)
      .map(([yearsActive, count]) => ({ yearsActive: `${yearsActive} yr${Number(yearsActive) > 1 ? "s" : ""}`, count }))
      .sort((a, b) => a.yearsActive.localeCompare(b.yearsActive));
  }, [orgs]);

  const radarData = useMemo(() => {
    if (selectedOrgs.length === 0) return [];
    const selected = orgs.filter((o) => selectedOrgs.includes(o.id));
    if (selected.length === 0) return [];
    const maxProjects = Math.max(...orgs.map((o) => o.totalProjects), 1);
    const maxYears = Math.max(...orgs.map((o) => o.yearsParticipated.length), 1);
    const maxTech = Math.max(...orgs.map((o) => o.technologies.length), 1);
    const maxTopics = Math.max(...orgs.map((o) => o.topics.length), 1);
    const axes = ["Projects", "Years Active", "Technologies", "Topics"];
    return axes.map((axis) => {
      const entry: Record<string, string | number> = { axis };
      selected.forEach((o) => {
        let val = 0;
        if (axis === "Projects") val = (o.totalProjects / maxProjects) * 100;
        else if (axis === "Years Active") val = (o.yearsParticipated.length / maxYears) * 100;
        else if (axis === "Technologies") val = (o.technologies.length / maxTech) * 100;
        else if (axis === "Topics") val = (o.topics.length / maxTopics) * 100;
        entry[o.name] = Math.round(val);
      });
      return entry;
    });
  }, [orgs, selectedOrgs]);

  const toggleOrg = (id: number) => {
    setSelectedOrgs((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : prev.length >= 4 ? prev : [...prev, id]
    );
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  // Empty state: student has zero contributions
  if (!trendIsLoading && !trendIsError && contributionTotal === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 text-center">
        <div className="bg-indigo-50 rounded-full p-6 mb-5">
          <BarChart3 className="w-12 h-12 text-indigo-400" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">
          No contributions tracked yet
        </h2>
        <p className="text-gray-500 max-w-md mb-8">
          Submit a repo suggestion and get it approved to start tracking
          your open source journey.
        </p>
        <Link
          to="/student/opensource"
          className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-indigo-700 transition-colors"
        >
          Discover Repositories →
        </Link>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950">
      <SEO title="Open Source Analytics" noIndex />

      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-8">

        {/* Editorial header */}
        <div className="mb-8">
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-50 mb-1.5 leading-tight">
                Open Source Analytics
              </h1>
              <p className="text-sm text-stone-600 dark:text-stone-400">
                {allOrgs.length > 0
                  ? `${orgs.length} of ${allOrgs.length} GSoC organizations${hasActiveFilter ? " (filtered)" : ""}${stats ? ` · ${stats.years.length} years · ${stats.technologies.length} technologies` : ""}`
                  : "Your contribution activity and open source stats."
                }
              </p>
            </div>
            <Link
              to="/student/opensource"
              className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-50 transition-colors no-underline"
            >
              <ArrowLeft className="w-3 h-3" />
              back to repos
            </Link>
          </div>
        </div>

        {/* ── Contribution Heatmap ─────────────────────────────── */}
        <div className="mb-8">
          <div className="flex items-center gap-1.5 mb-3">
            <div className="h-1 w-1 bg-lime-400" />
            <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
              your contributions
            </p>
          </div>
          <OssContributionHeatmap />

          <div className="mt-3 flex items-center gap-3">
            <button
              onClick={handleExportCSV}
              disabled={trendIsLoading || !contributionTrend || contributionTrend.length === 0}
              className="border border-stone-200 dark:border-white/10 text-xs font-mono uppercase tracking-widest px-3 py-2 rounded-md hover:border-stone-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors inline-flex items-center gap-1.5 text-stone-600 dark:text-stone-400 bg-white dark:bg-stone-900 shadow-sm cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              Export CSV
            </button>
          </div>
        </div>

        {/* ── Monthly Contribution Activity ────────────────── */}
        <div className="mb-8">
          <ChartCard
            title="Monthly Contribution Activity"
            subtitle={
              trendIsLoading
                ? "loading your approved open source contribution history"
                : `approved repo requests in the last 6 months${contributionTotal ? ` · ${contributionTotal} total` : ""}`
            }
            index={0}
            expandedChildren={
              trendIsLoading ? (
                <TrendSkeleton />
              ) : trendIsError ? (
                <TrendEmptyState message="We could not load your contribution trend right now. Try again in a moment." />
              ) : showContributionEmptyState ? (
                <TrendEmptyState
                  message="Submit a repo suggestion and get it approved to start tracking your open source journey."
                  showButton
                />
              ) : hasContributionActivity ? (
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={contributionTrend} margin={{ left: 8, right: 8 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(120,113,108,0.15)" />
                    <XAxis dataKey="label" tick={{ fill: "#78716c", fontSize: 12 }} />
                    <YAxis allowDecimals={false} tick={{ fill: "#78716c", fontSize: 12 }} />
                    <Tooltip {...tooltipStyle} />
                    <Bar dataKey="count" fill="#a3e635" radius={[4, 4, 0, 0]} name="Approved contributions" />
                  </BarChart>
                </ResponsiveContainer>
              ) : (
                <TrendEmptyState
                  message="Submit a repo suggestion and get it approved to start tracking your open source journey."
                  showButton
                />
              )
            }
          >
            {trendIsLoading ? (
              <TrendSkeleton />
            ) : hasContributionActivity ? (
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={contributionTrend} margin={{ left: 8, right: 8 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(120,113,108,0.15)" />
                  <XAxis dataKey="label" tick={{ fill: "#78716c", fontSize: 12 }} />
                  <YAxis allowDecimals={false} tick={{ fill: "#78716c", fontSize: 12 }} />
                  <Tooltip {...tooltipStyle} />
                  <Bar dataKey="count" fill="#a3e635" radius={[4, 4, 0, 0]} name="Approved contributions" />
                </BarChart>
              </ResponsiveContainer>
            ) : trendIsError ? (
              <TrendEmptyState
                message="We could not load your contribution trend right now. Try again in a moment."
              />
            ) : (
              <TrendEmptyState
                message="Submit a repo suggestion and get it approved to start tracking your open source journey."
                showButton
              />
            )}
          </ChartCard>
        </div>

          {/* Contributions by Domain */}
          {(trendIsLoading || (contributionTrendData?.domains && contributionTrendData.domains.length > 0) || (contributionTrendData && contributionTrendData.total === 0)) && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.06, duration: 0.4 }}
              className="mb-8 bg-white dark:bg-stone-900 rounded-md border border-stone-200 dark:border-white/10 p-5"
            >
              <div className="flex items-center gap-1.5 mb-4">
                <div className="h-1 w-1 bg-lime-400" />
                <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
                  contributions / by domain
                </span>
              </div>

              {trendIsLoading ? (
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center gap-3 animate-pulse">
                      <div className="w-24 h-3 bg-stone-100 dark:bg-stone-800 rounded" />
                      <div className="flex-1 h-2 bg-stone-100 dark:bg-stone-800 rounded-sm" />
                      <div className="w-6 h-3 bg-stone-100 dark:bg-stone-800 rounded" />
                    </div>
                  ))}
                </div>
              ) : contributionTrendData?.domains && contributionTrendData.domains.length > 0 ? (
                <div className="space-y-3.5">
                  {(() => {
                    const domains = contributionTrendData.domains;
                    const maxCount = Math.max(...domains.map(d => d.count), 1);
                    return domains.map(({ domain, count }) => {
                      const pct = Math.round((count / maxCount) * 100);
                      return (
                        <div key={domain} className="flex items-center gap-3 group">
                          <span className="text-xs font-medium text-stone-600 dark:text-stone-400 w-24 shrink-0 truncate group-hover:text-stone-900 dark:group-hover:text-stone-50 transition-colors">
                            {domain}
                          </span>
                          <div className="flex-1 bg-stone-100 dark:bg-stone-800 rounded-sm h-2 relative overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${pct}%` }}
                              transition={{ duration: 1, ease: "easeOut" }}
                              className="absolute inset-y-0 left-0 bg-lime-400 rounded-sm"
                            />
                          </div>
                          <span className="text-xs font-mono text-stone-500 w-6 text-right shrink-0">
                            {count}
                          </span>
                        </div>
                      );
                    });
                  })()}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <p className="text-xs text-stone-400 italic">
                    No domain data yet — get your first contribution approved to see your breakdown.
                  </p>
                </div>
              )}
            </motion.div>
          )}

        {/* Only show GSoC section if data exists */}
        {allOrgs.length > 0 && (
          <>
            {/* ── Filters ─────────────────────────────────────── */}
            <div className="mb-6">
              <div className="flex flex-wrap items-center gap-2">
                {/* Filter toggle */}
                <button
                  type="button"
                  onClick={() => setShowFilters(!showFilters)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-bold border transition-colors cursor-pointer ${
                    activeFilterCount > 0
                      ? "bg-lime-400 text-stone-950 border-lime-400 hover:bg-lime-300"
                      : "bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-300 border-stone-200 dark:border-white/10 hover:border-stone-400 dark:hover:border-white/25"
                  }`}
                >
                  <Filter className="w-3 h-3" />
                  Filters
                  {activeFilterCount > 0 && (
                    <span className="inline-flex items-center justify-center h-4 min-w-4 px-1 rounded-md bg-stone-950 text-lime-400 text-[10px] font-mono">
                      {activeFilterCount}
                    </span>
                  )}
                  <ChevronDown className={`w-3 h-3 transition-transform ${showFilters ? "rotate-180" : ""}`} />
                </button>

                {hasActiveFilter && (
                  <button
                    type="button"
                    onClick={clearFilters}
                    className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-50 transition-colors bg-transparent border-0 cursor-pointer"
                  >
                    / clear all
                  </button>
                )}
              </div>

              <AnimatePresence>
                {showFilters && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="flex flex-wrap gap-4 mt-3 p-4 bg-white dark:bg-stone-900 rounded-md border border-stone-200 dark:border-white/10">
                      <div>
                        <label className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-1.5 block">Year</label>
                        <select
                          value={filterYear}
                          onChange={(e) => setFilterYear(e.target.value)}
                          className="px-3 py-2 rounded-md text-sm border border-stone-200 dark:border-white/15 bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-100 focus:outline-none"
                        >
                          <option value="ALL">All Years</option>
                          {years.map((y) => <option key={y} value={y}>{y}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-1.5 block">Category</label>
                        <select
                          value={filterCategory}
                          onChange={(e) => setFilterCategory(e.target.value)}
                          className="px-3 py-2 rounded-md text-sm border border-stone-200 dark:border-white/15 bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-100 focus:outline-none"
                        >
                          <option value="ALL">All Categories</option>
                          {categories.map((c) => <option key={c} value={c}>{c}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-1.5 block">Technology</label>
                        <select
                          value={filterTech}
                          onChange={(e) => setFilterTech(e.target.value)}
                          className="px-3 py-2 rounded-md text-sm border border-stone-200 dark:border-white/15 bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-100 focus:outline-none"
                        >
                          <option value="ALL">All Technologies</option>
                          {technologies.slice(0, 50).map((t) => <option key={t} value={t}>{t}</option>)}
                        </select>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* ── Results label ───────────────────────────────── */}
            <div className="mb-4">
              <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
                <span className="text-stone-900 dark:text-stone-50">{orgs.length}</span>
                {" "}organization{orgs.length !== 1 ? "s" : ""}
                {hasActiveFilter && " (filtered)"}
              </p>
            </div>

            {/* ── No results ──────────────────────────────────── */}
            {orgs.length === 0 && (
              <div className="text-center py-16 bg-white dark:bg-stone-900 rounded-md border border-stone-200 dark:border-white/10">
                <div className="w-12 h-12 rounded-md bg-stone-100 dark:bg-white/5 flex items-center justify-center mx-auto mb-3">
                  <AlertCircle className="w-5 h-5 text-stone-400 dark:text-stone-500" />
                </div>
                <h3 className="text-base font-bold text-stone-900 dark:text-stone-50 mb-1">No organizations found</h3>
                <p className="text-sm text-stone-500 dark:text-stone-400">Try adjusting or clearing your filters.</p>
                <button
                  type="button"
                  onClick={clearFilters}
                  className="mt-3 text-[10px] font-mono uppercase tracking-widest text-lime-600 dark:text-lime-400 hover:underline cursor-pointer bg-transparent border-0"
                >
                  / clear filters
                </button>
              </div>
            )}

            {/* ── Charts grid ─────────────────────────────────── */}
            {orgs.length > 0 && (
              <>
                <div className="flex items-center gap-1.5 mb-4">
                  <div className="h-1 w-1 bg-lime-400" />
                  <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
                    gsoc organization charts
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-stone-200 dark:bg-white/10 border border-stone-200 dark:border-white/10 rounded-md overflow-hidden mb-6">

                  {/* 1 - Category Distribution (Pie) */}
                  <ChartCard title="Category Distribution" subtitle="organizations by category" index={0}
                    expandedChildren={
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie data={categoryData} cx="50%" cy="50%" innerRadius="25%" outerRadius="45%" dataKey="value" paddingAngle={2} stroke="none">
                            {categoryData.map((d, i) => <Cell key={i} fill={d.fill} />)}
                          </Pie>
                          <Tooltip content={<CustomTooltip />} />
                          <Legend formatter={(v) => <span className="text-sm text-stone-400">{v}</span>} />
                        </PieChart>
                      </ResponsiveContainer>
                    }
                  >
                    <ResponsiveContainer width="100%" height={260}>
                      <PieChart>
                        <Pie data={categoryData} cx="50%" cy="50%" innerRadius={55} outerRadius={95} dataKey="value" paddingAngle={2} stroke="none">
                          {categoryData.map((d, i) => <Cell key={i} fill={d.fill} />)}
                        </Pie>
                        <Tooltip content={<CustomTooltip />} />
                        <Legend formatter={(v) => <span className="text-xs text-stone-500 dark:text-stone-400">{v}</span>} wrapperStyle={{ fontSize: 10 }} />
                      </PieChart>
                    </ResponsiveContainer>
                  </ChartCard>

                  {/* 2 - Year Trend (Line) */}
                  <ChartCard title="Year-wise Participation" subtitle="organizations per year" index={1}
                    expandedChildren={
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={yearTrendData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                          <XAxis dataKey="year" tick={{ fill: "#78716c", fontSize: 12 }} />
                          <YAxis tick={{ fill: "#78716c", fontSize: 12 }} />
                          <Tooltip {...tooltipStyle} />
                          <Line type="monotone" dataKey="count" stroke="#a3e635" strokeWidth={2.5} dot={{ r: 4, fill: "#a3e635" }} activeDot={{ r: 6 }} name="Organizations" />
                        </LineChart>
                      </ResponsiveContainer>
                    }
                  >
                    <ResponsiveContainer width="100%" height={260}>
                      <LineChart data={yearTrendData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(120,113,108,0.15)" />
                        <XAxis dataKey="year" tick={{ fill: "#78716c", fontSize: 11 }} />
                        <YAxis tick={{ fill: "#78716c", fontSize: 11 }} />
                        <Tooltip {...tooltipStyle} />
                        <Line type="monotone" dataKey="count" stroke="#a3e635" strokeWidth={2} dot={{ r: 3, fill: "#a3e635" }} activeDot={{ r: 5 }} name="Organizations" />
                      </LineChart>
                    </ResponsiveContainer>
                  </ChartCard>

                  {/* 3 - Top Technologies */}
                  <ChartCard title="Top Technologies" subtitle="most common across orgs" index={2}
                    expandedChildren={
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={techData} layout="vertical" margin={{ left: 20 }}>
                          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                          <XAxis type="number" tick={{ fill: "#78716c", fontSize: 12 }} />
                          <YAxis dataKey="name" type="category" tick={{ fill: "#d6d3d1", fontSize: 12 }} width={100} />
                          <Tooltip {...tooltipStyle} />
                          <Bar dataKey="count" radius={[0, 4, 4, 0]}>
                            {techData.map((_, i) => <Cell key={i} fill={CHART_COLORS[i % CHART_COLORS.length]} />)}
                          </Bar>
                        </BarChart>
                      </ResponsiveContainer>
                    }
                  >
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={techData} layout="vertical" margin={{ left: 20 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(120,113,108,0.15)" />
                        <XAxis type="number" tick={{ fill: "#78716c", fontSize: 10 }} />
                        <YAxis dataKey="name" type="category" tick={{ fill: "#78716c", fontSize: 10 }} width={80} />
                        <Tooltip {...tooltipStyle} />
                        <Bar dataKey="count" radius={[0, 4, 4, 0]}>
                          {techData.map((_, i) => <Cell key={i} fill={CHART_COLORS[i % CHART_COLORS.length]} />)}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </ChartCard>

                  {/* 4 - Top Topics */}
                  <ChartCard title="Top Topics" subtitle="most common topics" index={3}
                    expandedChildren={
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={topicData} layout="vertical" margin={{ left: 20 }}>
                          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                          <XAxis type="number" tick={{ fill: "#78716c", fontSize: 12 }} />
                          <YAxis dataKey="name" type="category" tick={{ fill: "#d6d3d1", fontSize: 12 }} width={120} />
                          <Tooltip {...tooltipStyle} />
                          <Bar dataKey="count" radius={[0, 4, 4, 0]}>
                            {topicData.map((_, i) => <Cell key={i} fill={CHART_COLORS[(i + 4) % CHART_COLORS.length]} />)}
                          </Bar>
                        </BarChart>
                      </ResponsiveContainer>
                    }
                  >
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={topicData} layout="vertical" margin={{ left: 20 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(120,113,108,0.15)" />
                        <XAxis type="number" tick={{ fill: "#78716c", fontSize: 10 }} />
                        <YAxis dataKey="name" type="category" tick={{ fill: "#78716c", fontSize: 10 }} width={100} />
                        <Tooltip {...tooltipStyle} />
                        <Bar dataKey="count" radius={[0, 4, 4, 0]}>
                          {topicData.map((_, i) => <Cell key={i} fill={CHART_COLORS[(i + 4) % CHART_COLORS.length]} />)}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </ChartCard>

                  {/* 5 - Top Orgs by Projects */}
                  <ChartCard title="Top Organizations by Projects" subtitle="most gsoc projects" index={4}
                    expandedChildren={
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={topProjectsData} margin={{ left: 10 }}>
                          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                          <XAxis dataKey="name" tick={{ fill: "#78716c", fontSize: 11 }} angle={-35} textAnchor="end" height={80} />
                          <YAxis tick={{ fill: "#78716c", fontSize: 12 }} />
                          <Tooltip {...tooltipStyle} />
                          <Bar dataKey="projects" radius={[4, 4, 0, 0]}>
                            {topProjectsData.map((d, i) => <Cell key={i} fill={d.fill} />)}
                          </Bar>
                        </BarChart>
                      </ResponsiveContainer>
                    }
                  >
                    <ResponsiveContainer width="100%" height={260}>
                      <BarChart data={topProjectsData} margin={{ left: 10 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(120,113,108,0.15)" />
                        <XAxis dataKey="name" tick={{ fill: "#78716c", fontSize: 9 }} angle={-35} textAnchor="end" height={65} />
                        <YAxis tick={{ fill: "#78716c", fontSize: 11 }} />
                        <Tooltip {...tooltipStyle} />
                        <Bar dataKey="projects" radius={[4, 4, 0, 0]}>
                          {topProjectsData.map((d, i) => <Cell key={i} fill={d.fill} />)}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </ChartCard>

                  {/* 6 - Longevity Distribution */}
                  <ChartCard title="Longevity Distribution" subtitle="years active in gsoc" index={5}
                    expandedChildren={
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={yearCountData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                          <XAxis dataKey="yearsActive" tick={{ fill: "#78716c", fontSize: 12 }} />
                          <YAxis tick={{ fill: "#78716c", fontSize: 12 }} />
                          <Tooltip {...tooltipStyle} />
                          <Bar dataKey="count" fill="#a3e635" radius={[4, 4, 0, 0]} name="Organizations" />
                        </BarChart>
                      </ResponsiveContainer>
                    }
                  >
                    <ResponsiveContainer width="100%" height={260}>
                      <BarChart data={yearCountData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(120,113,108,0.15)" />
                        <XAxis dataKey="yearsActive" tick={{ fill: "#78716c", fontSize: 11 }} />
                        <YAxis tick={{ fill: "#78716c", fontSize: 11 }} />
                        <Tooltip {...tooltipStyle} />
                        <Bar dataKey="count" fill="#a3e635" radius={[4, 4, 0, 0]} name="Organizations" />
                      </BarChart>
                    </ResponsiveContainer>
                  </ChartCard>
                </div>

                {/* 7 - Org Comparison Radar — full width */}
                <div className="bg-white dark:bg-stone-900 rounded-md border border-stone-200 dark:border-white/10 p-5">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <div className="h-1 w-1 bg-lime-400" />
                    <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">comparison</p>
                  </div>
                  <h3 className="text-sm font-bold text-stone-900 dark:text-stone-50 mb-4">Organization Comparison</h3>
                  <div className="flex flex-wrap gap-1.5 mb-5 max-h-24 overflow-y-auto">
                    {orgs.slice(0, 60).map((o) => (
                      <button
                        key={o.id}
                        type="button"
                        onClick={() => toggleOrg(o.id)}
                        className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold border transition-colors cursor-pointer ${
                          selectedOrgs.includes(o.id)
                            ? "bg-lime-400 text-stone-950 border-lime-400"
                            : "bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-300 border-stone-200 dark:border-white/10 hover:border-stone-400 dark:hover:border-white/25"
                        }`}
                      >
                        {o.name}
                      </button>
                    ))}
                    {orgs.length > 60 && <span className="text-xs text-stone-400 dark:text-stone-500 py-1">+{orgs.length - 60} more</span>}
                  </div>

                  {selectedOrgs.length >= 2 ? (
                    <div className="max-w-xl mx-auto">
                      <ResponsiveContainer width="100%" height={300}>
                        <RadarChart data={radarData}>
                          <PolarGrid stroke="rgba(120,113,108,0.2)" />
                          <PolarAngleAxis dataKey="axis" tick={{ fill: "#78716c", fontSize: 12 }} />
                          <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fill: "#78716c", fontSize: 10 }} />
                          {orgs.filter((o) => selectedOrgs.includes(o.id)).map((o, i) => (
                            <Radar key={o.id} name={o.name} dataKey={o.name} stroke={CHART_COLORS[i]} fill={CHART_COLORS[i]} fillOpacity={0.15} />
                          ))}
                          <Legend formatter={(v) => <span className="text-xs text-stone-500 dark:text-stone-400">{v}</span>} />
                          <Tooltip {...tooltipStyle} />
                        </RadarChart>
                      </ResponsiveContainer>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-32 text-stone-400 dark:text-stone-500 text-sm">
                      Select at least 2 organizations to compare
                    </div>
                  )}
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}
