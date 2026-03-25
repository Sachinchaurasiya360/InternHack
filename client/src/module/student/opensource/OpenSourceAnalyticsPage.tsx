import { useState, useMemo } from "react";
import { Link } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import {
  BarChart3,
  AlertCircle,
  Filter,
  X,
  Maximize2
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
import type { GSoCOrganization, GSoCStats } from "../../../lib/types";

// ─── Theme ──────────────────────────────────────────────────────
const CHART_COLORS = [
  "#6366f1", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6",
  "#0ea5e9", "#f97316", "#22c55e", "#ec4899", "#06b6d4",
  "#d946ef", "#84cc16",
];

const CATEGORY_COLORS: Record<string, string> = {
  "Science and medicine": "#10b981",
  "Security": "#ef4444",
  "End user applications": "#0ea5e9",
  "Programming languages": "#8b5cf6",
  "Development tools": "#6366f1",
  "Media": "#f59e0b",
  "Operating systems": "#6b7280",
  "Data": "#06b6d4",
  "Infrastructure and cloud": "#0284c7",
  "Web": "#818cf8",
  "Social and communication": "#ec4899",
  "Other": "#9ca3af",
};

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.4 } }),
};

const tooltipStyle = {
  contentStyle: { background: "#fff", border: "1px solid #e5e7eb", borderRadius: "0.75rem", color: "#1f2937", fontSize: "0.8rem", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" },
  itemStyle: { color: "#374151" },
};

// ─── Custom Tooltip ─────────────────────────────────────────────
function CustomTooltip({ active, payload, label }: { active?: boolean; payload?: { value: number; name?: string }[]; label?: string }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white border border-gray-200 rounded-xl px-3 py-2 text-xs text-gray-700 shadow-lg">
      {label && <p className="font-semibold text-gray-900 mb-1">{label}</p>}
      {payload.map((p, i) => (
        <p key={i}>{p.name ?? ""}: <span className="font-bold text-gray-900">{typeof p.value === "number" ? p.value.toLocaleString() : p.value}</span></p>
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
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-3 sm:inset-6 md:inset-12 lg:inset-20 z-50 bg-white rounded-2xl border border-gray-200 shadow-2xl flex flex-col overflow-hidden"
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 shrink-0">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                <p className="text-xs text-gray-500">{subtitle}</p>
              </div>
              <button onClick={onClose} className="w-9 h-9 rounded-xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
                <X className="w-4 h-4 text-gray-600" />
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
function ChartCard({ title, subtitle, index, children, expandedChildren, className = "" }: { title: string; subtitle: string; index: number; children: React.ReactNode; expandedChildren?: React.ReactNode; className?: string }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <motion.div
        custom={index}
        variants={cardVariant}
        initial="hidden"
        animate="visible"
        className={`bg-white rounded-2xl border border-gray-200 p-6 shadow-sm group hover:border-indigo-200 hover:shadow-md transition-all ${className}`}
      >
        <div className="flex items-start justify-between mb-0.5">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <button
            onClick={(e) => { e.stopPropagation(); setExpanded(true); }}
            className="w-8 h-8 rounded-lg bg-gray-50 hover:bg-indigo-50 flex items-center justify-center transition-colors shrink-0"
            title="Expand chart"
          >
            <Maximize2 className="w-4 h-4 text-gray-400 group-hover:text-indigo-500 transition-colors" />
          </button>
        </div>
        <p className="text-xs text-gray-500 mb-4">{subtitle}</p>
        {children}
      </motion.div>
      <ChartModal open={expanded} onClose={() => setExpanded(false)} title={title} subtitle={subtitle}>
        {expandedChildren ?? children}
      </ChartModal>
    </>
  );
}

const selectClass = "text-sm bg-white border border-gray-300 rounded-lg px-3 py-1.5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500 min-w-[130px]";

// ─── Page ───────────────────────────────────────────────────────
export default function OpenSourceAnalyticsPage() {
  const [selectedOrgs, setSelectedOrgs] = useState<number[]>([]);
  const [filterYear, setFilterYear] = useState<string>("ALL");
  const [filterCategory, setFilterCategory] = useState<string>("ALL");
  const [filterTech, setFilterTech] = useState<string>("ALL");

  // Fetch stats (aggregated)
  const { data: stats } = useQuery<GSoCStats>({
    queryKey: queryKeys.gsoc.stats(),
    queryFn: () => api.get("/gsoc/stats").then((r) => r.data),
    staleTime: Infinity,
  });

  // Fetch all orgs (paginated)
  const { data: orgsData, isLoading, isError } = useQuery({
    queryKey: [...queryKeys.gsoc.list(), "analytics-all"],
    queryFn: async () => {
      const all: GSoCOrganization[] = [];
      let page = 1;
      const limit = 100;
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

  const allOrgs = orgsData ?? [];

  // ─── Derive filter options ──────────────────────────────────
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

  // ─── Apply filters ─────────────────────────────────────────
  const orgs = useMemo(() => {
    return allOrgs.filter((o) => {
      if (filterYear !== "ALL" && !o.yearsParticipated.includes(Number(filterYear))) return false;
      if (filterCategory !== "ALL" && o.category !== filterCategory) return false;
      if (filterTech !== "ALL" && !o.technologies.includes(filterTech)) return false;
      return true;
    });
  }, [allOrgs, filterYear, filterCategory, filterTech]);

  const hasActiveFilter = filterYear !== "ALL" || filterCategory !== "ALL" || filterTech !== "ALL";

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
      fill: CATEGORY_COLORS[o.category] || "#6366f1",
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

  // ─── Loading / Error ────────────────────────────────────────
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <LoadingScreen />
      </div>
    );
  }

  if (isError || allOrgs.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center gap-3 text-gray-500">
        <AlertCircle className="w-10 h-10" />
        <p>No data available for analytics.</p>
        <Link to="/student/opensource" className="text-indigo-600 hover:underline text-sm">Back to repos</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-2">
        <div className="flex items-center gap-3 mb-2">
          <BarChart3 className="w-7 h-7 text-indigo-600" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Open Source Analytics</h1>
            <p className="text-sm text-gray-500">
              {orgs.length} of {allOrgs.length} organizations
              {hasActiveFilter && " (filtered)"}
              {stats && ` \u00b7 ${stats.years.length} years \u00b7 ${stats.technologies.length} technologies`}
            </p>
          </div>
        </div>
      </div>

      {/* ── Filters ──────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="bg-white rounded-2xl border border-gray-200 px-5 py-3.5 shadow-sm">
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-1.5 text-gray-500 mr-1">
              <Filter className="w-4 h-4" />
              <span className="text-sm font-semibold">Filters</span>
            </div>

            <select className={selectClass} value={filterYear} onChange={(e) => setFilterYear(e.target.value)}>
              <option value="ALL">All Years</option>
              {years.map((y) => <option key={y} value={y}>{y}</option>)}
            </select>

            <select className={selectClass} value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)}>
              <option value="ALL">All Categories</option>
              {categories.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>

            <select className={selectClass} value={filterTech} onChange={(e) => setFilterTech(e.target.value)}>
              <option value="ALL">All Technologies</option>
              {technologies.slice(0, 50).map((t) => <option key={t} value={t}>{t}</option>)}
            </select>

            {hasActiveFilter && (
              <button onClick={clearFilters} className="text-xs text-indigo-600 hover:text-indigo-800 font-medium flex items-center gap-1 ml-auto">
                <X className="w-3.5 h-3.5" /> Clear
              </button>
            )}
          </div>
        </div>
      </div>

      {/* No results */}
      {orgs.length === 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center shadow-sm">
            <AlertCircle className="w-8 h-8 text-gray-400 mx-auto mb-2" />
            <p className="text-gray-500 text-sm">No organizations match these filters.</p>
            <button onClick={clearFilters} className="mt-2 text-sm text-indigo-600 hover:underline">Clear filters</button>
          </div>
        </div>
      )}

      {/* Charts */}
      {orgs.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* 1 - Category Distribution (Pie) */}
          <ChartCard title="Category Distribution" subtitle="Organizations grouped by category" index={0}
            expandedChildren={
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={categoryData} cx="50%" cy="50%" innerRadius="25%" outerRadius="45%" dataKey="value" paddingAngle={2} stroke="#fff" strokeWidth={2}>
                    {categoryData.map((d, i) => <Cell key={i} fill={d.fill} />)}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                  <Legend formatter={(v) => <span className="text-sm text-gray-600">{v}</span>} />
                </PieChart>
              </ResponsiveContainer>
            }
          >
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={categoryData} cx="50%" cy="50%" innerRadius={60} outerRadius={105} dataKey="value" paddingAngle={2} stroke="#fff" strokeWidth={2}>
                  {categoryData.map((d, i) => <Cell key={i} fill={d.fill} />)}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <Legend formatter={(v) => <span className="text-xs text-gray-600">{v}</span>} wrapperStyle={{ fontSize: 11 }} />
              </PieChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* 2 - Year-wise Participation Trend (Line) */}
          <ChartCard title="Year-wise Participation" subtitle="Number of organizations participating each year" index={1}
            expandedChildren={
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={yearTrendData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="year" tick={{ fill: "#374151", fontSize: 13 }} />
                  <YAxis tick={{ fill: "#6b7280", fontSize: 13 }} />
                  <Tooltip {...tooltipStyle} />
                  <Line type="monotone" dataKey="count" stroke="#6366f1" strokeWidth={3} dot={{ r: 5, fill: "#6366f1" }} activeDot={{ r: 7 }} name="Organizations" />
                </LineChart>
              </ResponsiveContainer>
            }
          >
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={yearTrendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="year" tick={{ fill: "#374151", fontSize: 12 }} />
                <YAxis tick={{ fill: "#6b7280", fontSize: 12 }} />
                <Tooltip {...tooltipStyle} />
                <Line type="monotone" dataKey="count" stroke="#6366f1" strokeWidth={2.5} dot={{ r: 4, fill: "#6366f1" }} activeDot={{ r: 6 }} name="Organizations" />
              </LineChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* 3 - Top Technologies (Horizontal Bar) */}
          <ChartCard title="Top Technologies" subtitle="Most popular technologies across organizations" index={2}
            expandedChildren={
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={techData} layout="vertical" margin={{ left: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis type="number" tick={{ fill: "#6b7280", fontSize: 13 }} />
                  <YAxis dataKey="name" type="category" tick={{ fill: "#374151", fontSize: 13 }} width={100} />
                  <Tooltip {...tooltipStyle} />
                  <Bar dataKey="count" radius={[0, 6, 6, 0]}>
                    {techData.map((_, i) => <Cell key={i} fill={CHART_COLORS[i % CHART_COLORS.length]} />)}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            }
          >
            <ResponsiveContainer width="100%" height={340}>
              <BarChart data={techData} layout="vertical" margin={{ left: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis type="number" tick={{ fill: "#6b7280", fontSize: 12 }} />
                <YAxis dataKey="name" type="category" tick={{ fill: "#374151", fontSize: 11 }} width={90} />
                <Tooltip {...tooltipStyle} />
                <Bar dataKey="count" radius={[0, 6, 6, 0]}>
                  {techData.map((_, i) => <Cell key={i} fill={CHART_COLORS[i % CHART_COLORS.length]} />)}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* 4 - Top Topics */}
          <ChartCard title="Top Topics" subtitle="Most common topics across organizations" index={3}
            expandedChildren={
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={topicData} layout="vertical" margin={{ left: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis type="number" tick={{ fill: "#6b7280", fontSize: 13 }} />
                  <YAxis dataKey="name" type="category" tick={{ fill: "#374151", fontSize: 13 }} width={120} />
                  <Tooltip {...tooltipStyle} />
                  <Bar dataKey="count" radius={[0, 6, 6, 0]}>
                    {topicData.map((_, i) => <Cell key={i} fill={CHART_COLORS[(i + 4) % CHART_COLORS.length]} />)}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            }
          >
            <ResponsiveContainer width="100%" height={340}>
              <BarChart data={topicData} layout="vertical" margin={{ left: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis type="number" tick={{ fill: "#6b7280", fontSize: 12 }} />
                <YAxis dataKey="name" type="category" tick={{ fill: "#374151", fontSize: 11 }} width={110} />
                <Tooltip {...tooltipStyle} />
                <Bar dataKey="count" radius={[0, 6, 6, 0]}>
                  {topicData.map((_, i) => <Cell key={i} fill={CHART_COLORS[(i + 4) % CHART_COLORS.length]} />)}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* 5 - Top Orgs by Projects */}
          <ChartCard title="Top Organizations by Projects" subtitle="Organizations with the most GSoC projects" index={4}
            expandedChildren={
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={topProjectsData} margin={{ left: 10 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="name" tick={{ fill: "#6b7280", fontSize: 11 }} angle={-35} textAnchor="end" height={80} />
                  <YAxis tick={{ fill: "#6b7280", fontSize: 13 }} />
                  <Tooltip {...tooltipStyle} />
                  <Bar dataKey="projects" radius={[6, 6, 0, 0]}>
                    {topProjectsData.map((d, i) => <Cell key={i} fill={d.fill} />)}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            }
          >
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={topProjectsData} margin={{ left: 10 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="name" tick={{ fill: "#6b7280", fontSize: 9 }} angle={-35} textAnchor="end" height={70} />
                <YAxis tick={{ fill: "#6b7280", fontSize: 12 }} />
                <Tooltip {...tooltipStyle} />
                <Bar dataKey="projects" radius={[6, 6, 0, 0]}>
                  {topProjectsData.map((d, i) => <Cell key={i} fill={d.fill} />)}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* 6 - Years Active Distribution */}
          <ChartCard title="Longevity Distribution" subtitle="How many years organizations have been in GSoC" index={5}
            expandedChildren={
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={yearCountData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="yearsActive" tick={{ fill: "#374151", fontSize: 13 }} />
                  <YAxis tick={{ fill: "#6b7280", fontSize: 13 }} />
                  <Tooltip {...tooltipStyle} />
                  <Bar dataKey="count" fill="#10b981" radius={[6, 6, 0, 0]} name="Organizations" />
                </BarChart>
              </ResponsiveContainer>
            }
          >
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={yearCountData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="yearsActive" tick={{ fill: "#374151", fontSize: 12 }} />
                <YAxis tick={{ fill: "#6b7280", fontSize: 12 }} />
                <Tooltip {...tooltipStyle} />
                <Bar dataKey="count" fill="#10b981" radius={[6, 6, 0, 0]} name="Organizations" />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* 7 - Org Comparison Radar */}
          <ChartCard title="Organization Comparison" subtitle="Select 2-4 organizations to compare" index={6} className="lg:col-span-2">
            <div className="flex flex-wrap gap-1.5 mb-4 max-h-24 overflow-y-auto">
              {orgs.slice(0, 60).map((o) => (
                <button
                  key={o.id}
                  onClick={() => toggleOrg(o.id)}
                  className={`text-xs px-2.5 py-1 rounded-full border transition-colors ${
                    selectedOrgs.includes(o.id)
                      ? "bg-indigo-600 border-indigo-600 text-white"
                      : "bg-gray-100 border-gray-300 text-gray-600 hover:border-indigo-400"
                  }`}
                >
                  {o.name}
                </button>
              ))}
              {orgs.length > 60 && <span className="text-xs text-gray-400 py-1">+{orgs.length - 60} more</span>}
            </div>

            {selectedOrgs.length >= 2 ? (
              <div className="max-w-xl mx-auto">
                <ResponsiveContainer width="100%" height={320}>
                  <RadarChart data={radarData}>
                    <PolarGrid stroke="#d1d5db" />
                    <PolarAngleAxis dataKey="axis" tick={{ fill: "#374151", fontSize: 12 }} />
                    <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fill: "#9ca3af", fontSize: 10 }} />
                    {orgs.filter((o) => selectedOrgs.includes(o.id)).map((o, i) => (
                      <Radar key={o.id} name={o.name} dataKey={o.name} stroke={CHART_COLORS[i]} fill={CHART_COLORS[i]} fillOpacity={0.15} />
                    ))}
                    <Legend formatter={(v) => <span className="text-xs text-gray-600">{v}</span>} />
                    <Tooltip {...tooltipStyle} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            ) : (
              <div className="flex items-center justify-center h-40 text-gray-400 text-sm">
                Select at least 2 organizations to compare
              </div>
            )}
          </ChartCard>
        </div>
      )}
    </div>
  );
}
