import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search, ExternalLink, Trophy, ChevronDown, X, ArrowLeft,
  Code2, Globe, Calendar, Layers, Tag, ChevronLeft, ChevronRight,
  Users, Mail, MessageSquare, Lightbulb, BookOpen,
} from "lucide-react";
import { Link } from "react-router";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import { LoadingScreen } from "../../../components/LoadingScreen";
import type { GSoCOrganization, GSoCStats } from "../../../lib/types";

// ─── Styles ──────────────────────────────────────────────────────
const CATEGORY_COLORS: Record<string, string> = {
  "Science and medicine": "bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  "Security": "bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  "End user applications": "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  "Programming languages": "bg-violet-50 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400",
  "Development tools": "bg-slate-50 text-slate-700 dark:bg-slate-900/30 dark:text-slate-400",
  "Media": "bg-yellow-50 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
  "Operating systems": "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300",
  "Other": "bg-gray-50 text-gray-600 dark:bg-gray-800 dark:text-gray-400",
  "Data": "bg-teal-50 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400",
  "Infrastructure and cloud": "bg-sky-50 text-sky-700 dark:bg-sky-900/30 dark:text-sky-400",
  "Web": "bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400",
  "Social and communication": "bg-pink-50 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400",
  "Artificial Intelligence": "bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
};

// ─── Modal ──────────────────────────────────────────────────────
function GSoCOrgModal({ org, onClose }: { org: GSoCOrganization; onClose: () => void }) {
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const years = [...org.yearsParticipated].sort((a, b) => b - a);
  const activeYear = selectedYear || (years[0] ? String(years[0]) : null);
  const yearData = activeYear && org.projectsData ? org.projectsData[activeYear] : null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm" onClick={onClose}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        transition={{ duration: 0.18 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-2xl max-h-[85vh] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-800 overflow-hidden flex flex-col"
      >
        {/* Header */}
        <div className="flex items-start justify-between p-6 pb-4 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 border-b border-amber-100 dark:border-amber-800 shrink-0">
          <div className="flex items-center gap-4 min-w-0">
            {org.imageUrl ? (
              <img src={org.imageUrl} alt={org.name} className="w-12 h-12 rounded-xl object-contain border border-amber-200 dark:border-amber-700 bg-white p-1" />
            ) : (
              <div className="w-12 h-12 rounded-xl bg-white dark:bg-gray-800 border border-amber-200 dark:border-amber-700 flex items-center justify-center shrink-0 shadow-sm">
                <span className="text-amber-600 font-bold text-xl">{org.name.charAt(0)}</span>
              </div>
            )}
            <div className="min-w-0">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">{org.name}</h3>
              <div className="flex items-center gap-2 mt-1 flex-wrap">
                <span className={`px-2 py-0.5 text-[10px] font-medium rounded-full ${CATEGORY_COLORS[org.category] ?? "bg-gray-50 text-gray-600"}`}>{org.category}</span>
                <span className="text-[10px] text-gray-500">{org.totalProjects} projects across {years.length} years</span>
              </div>
            </div>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-lg text-gray-400 hover:bg-white dark:hover:bg-gray-700 hover:text-gray-700 dark:hover:text-gray-300 transition-colors shrink-0 ml-2">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5 overflow-y-auto flex-1">
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{org.description}</p>

          {/* Technologies */}
          {org.technologies.length > 0 && (
            <div>
              <div className="flex items-center gap-1.5 mb-2">
                <Layers className="w-3.5 h-3.5 text-blue-500" />
                <span className="text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">Technologies</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {org.technologies.map((t) => (
                  <span key={t} className="px-2.5 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-medium rounded-lg border border-blue-100 dark:border-blue-800">{t}</span>
                ))}
              </div>
            </div>
          )}

          {/* Topics */}
          {org.topics.length > 0 && (
            <div>
              <div className="flex items-center gap-1.5 mb-2">
                <Tag className="w-3.5 h-3.5 text-gray-400" />
                <span className="text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">Topics</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {org.topics.map((t) => (
                  <span key={t} className="px-2 py-0.5 bg-gray-50 dark:bg-gray-800 text-gray-500 text-xs rounded-full border border-gray-100 dark:border-gray-700">#{t}</span>
                ))}
              </div>
            </div>
          )}

          {/* Projects by Year */}
          {org.projectsData && years.length > 0 && (
            <div>
              <div className="flex items-center gap-1.5 mb-2">
                <Calendar className="w-3.5 h-3.5 text-amber-500" />
                <span className="text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">Projects by Year</span>
              </div>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {years.map((y) => (
                  <button
                    key={y}
                    onClick={() => setSelectedYear(String(y))}
                    className={`px-2.5 py-1 text-xs font-semibold rounded-full border transition-colors ${
                      String(y) === activeYear
                        ? "bg-amber-500 text-white border-amber-500"
                        : "bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 border-amber-100 dark:border-amber-800 hover:bg-amber-100 dark:hover:bg-amber-900/50"
                    }`}
                  >
                    {y} ({org.projectsData![String(y)]?.num_projects || 0})
                  </button>
                ))}
              </div>

              {/* Project list */}
              {yearData?.projects && yearData.projects.length > 0 && (
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {yearData.projects.map((p, i) => (
                    <div key={i} className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700">
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <h5 className="text-xs font-semibold text-gray-900 dark:text-white">{p.title}</h5>
                          <p className="text-[11px] text-gray-500 mt-0.5">
                            <Users className="w-3 h-3 inline mr-1" />{p.student_name}
                          </p>
                        </div>
                        {p.code_url && (
                          <a href={p.code_url} target="_blank" rel="noopener noreferrer" className="shrink-0 text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
                            <Code2 className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                      {p.short_description && (
                        <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">{p.short_description}</p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Links */}
          <div className="flex flex-wrap gap-2 text-xs">
            {org.contactEmail && (
              <a href={org.contactEmail} className="inline-flex items-center gap-1 px-2.5 py-1 bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-lg border border-gray-100 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 no-underline transition-colors">
                <Mail className="w-3 h-3" /> Contact
              </a>
            )}
            {org.mailingList && (
              <a href={org.mailingList} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-2.5 py-1 bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-lg border border-gray-100 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 no-underline transition-colors">
                <MessageSquare className="w-3 h-3" /> Mailing List
              </a>
            )}
            {org.ideasUrl && (
              <a href={org.ideasUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-2.5 py-1 bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-lg border border-gray-100 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 no-underline transition-colors">
                <Lightbulb className="w-3 h-3" /> Project Ideas
              </a>
            )}
            {org.guideUrl && (
              <a href={org.guideUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-2.5 py-1 bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-lg border border-gray-100 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 no-underline transition-colors">
                <BookOpen className="w-3 h-3" /> Contributor Guide
              </a>
            )}
          </div>

          {/* CTAs */}
          <div className="pt-2 border-t border-gray-100 dark:border-gray-800 flex gap-3">
            <a
              href={org.url} target="_blank" rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gray-950 dark:bg-white text-white dark:text-gray-950 text-sm font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors no-underline"
            >
              <Globe className="w-4 h-4" />
              Website
              <ExternalLink className="w-3 h-3 opacity-70" />
            </a>
            <a
              href="https://summerofcode.withgoogle.com" target="_blank" rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-amber-50 dark:bg-amber-900/30 text-amber-800 dark:text-amber-400 text-sm font-semibold hover:bg-amber-100 dark:hover:bg-amber-900/50 transition-colors no-underline border border-amber-200 dark:border-amber-700"
            >
              <Trophy className="w-4 h-4" />
              GSoC Page
              <ExternalLink className="w-3 h-3 opacity-70" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// ─── Card ────────────────────────────────────────────────────────
function GSoCOrgCard({ org, onClick }: { org: GSoCOrganization; onClick: () => void }) {
  const years = [...org.yearsParticipated].sort((a, b) => b - a);
  return (
    <button
      onClick={onClick}
      className="text-left w-full bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md hover:border-amber-200 dark:hover:border-amber-700 transition-all p-5 group"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-3 min-w-0">
          {org.imageUrl ? (
            <img src={org.imageUrl} alt={org.name} className="w-10 h-10 rounded-lg object-contain border border-gray-100 dark:border-gray-700 bg-white p-0.5" />
          ) : (
            <div className="w-10 h-10 rounded-lg bg-amber-50 dark:bg-amber-900/30 border border-amber-100 dark:border-amber-800 flex items-center justify-center shrink-0">
              <span className="text-amber-600 font-bold text-sm">{org.name.charAt(0)}</span>
            </div>
          )}
          <div className="min-w-0">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white truncate group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">{org.name}</h4>
            <span className={`inline-block mt-0.5 px-1.5 py-0.5 text-[10px] font-medium rounded ${CATEGORY_COLORS[org.category] ?? "bg-gray-50 text-gray-500"}`}>{org.category}</span>
          </div>
        </div>
        <span className="px-2 py-0.5 text-[10px] font-semibold rounded-full bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 border border-amber-100 dark:border-amber-800 shrink-0">
          {org.totalProjects} projects
        </span>
      </div>

      <p className="text-xs text-gray-500 line-clamp-2 mb-3 leading-relaxed">{org.description}</p>

      {/* Tech chips */}
      <div className="flex flex-wrap gap-1 mb-3">
        {org.technologies.slice(0, 4).map((t) => (
          <span key={t} className="px-1.5 py-0.5 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[10px] font-medium rounded">{t}</span>
        ))}
        {org.technologies.length > 4 && (
          <span className="px-1.5 py-0.5 bg-gray-50 dark:bg-gray-800 text-gray-400 dark:text-gray-500 text-[10px] rounded">+{org.technologies.length - 4}</span>
        )}
      </div>

      {/* Year pills */}
      <div className="flex items-center justify-between">
        <div className="flex gap-1">
          {years.slice(0, 4).map((y) => (
            <span key={y} className="px-1.5 py-0.5 bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 text-[10px] font-bold rounded">{y}</span>
          ))}
          {years.length > 4 && (
            <span className="px-1.5 py-0.5 bg-gray-50 dark:bg-gray-800 text-gray-400 dark:text-gray-500 text-[10px] rounded">+{years.length - 4}</span>
          )}
        </div>
        <ExternalLink className="w-3.5 h-3.5 text-gray-300 group-hover:text-amber-500 transition-colors" />
      </div>
    </button>
  );
}

// ─── Filter Dropdown ─────────────────────────────────────────────
function FilterDropdown({
  label, icon, value, options, onChange,
}: { label: string; icon: React.ReactNode; value: string; options: string[]; onChange: (v: string) => void }) {
  return (
    <div className="relative group">
      <button className="flex items-center gap-2 px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors bg-white dark:bg-gray-900">
        {icon}
        <span className="hidden sm:inline text-xs text-gray-400 dark:text-gray-500">{label}:</span>
        <span className="font-medium text-gray-900 dark:text-white text-xs truncate max-w-[100px]">{value}</span>
        <ChevronDown className="w-3.5 h-3.5 opacity-50" />
      </button>
      <div className="absolute left-0 top-full z-20 mt-1 hidden min-w-[180px] max-h-[260px] overflow-y-auto rounded-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 p-1 shadow-xl group-hover:block">
        {options.map((opt) => (
          <button
            key={opt} onClick={() => onChange(opt)}
            className={`block w-full rounded-lg px-3 py-2 text-left text-xs transition ${value === opt ? "bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 font-medium" : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"}`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────
export default function GSoCReposPage() {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTech, setSelectedTech] = useState("All");
  const [selectedYear, setSelectedYear] = useState("All");
  const [page, setPage] = useState(1);
  const [selectedOrg, setSelectedOrg] = useState<GSoCOrganization | null>(null);
  const limit = 18;

  // Debounce search
  const [timer, setTimer] = useState<ReturnType<typeof setTimeout> | null>(null);
  const handleSearch = (val: string) => {
    setSearch(val);
    if (timer) clearTimeout(timer);
    setTimer(setTimeout(() => { setDebouncedSearch(val); setPage(1); }, 400));
  };

  // Fetch stats for filter options
  const { data: stats } = useQuery<GSoCStats>({
    queryKey: queryKeys.gsoc.stats(),
    queryFn: () => api.get("/gsoc/stats").then((r) => r.data),
    staleTime: Infinity,
  });

  // Build query params
  const params: Record<string, string | number> = { page, limit };
  if (debouncedSearch) params["search"] = debouncedSearch;
  if (selectedCategory !== "All") params["category"] = selectedCategory;
  if (selectedTech !== "All") params["technology"] = selectedTech;
  if (selectedYear !== "All") params["year"] = parseInt(selectedYear);

  // Fetch organizations
  const { data, isLoading } = useQuery({
    queryKey: queryKeys.gsoc.list(params),
    queryFn: () => api.get("/gsoc/organizations", { params }).then((r) => r.data),
  });

  const organizations: GSoCOrganization[] = data?.organizations ?? [];
  const pagination = data?.pagination ?? { page: 1, total: 0, totalPages: 1 };

  // Fetch full org detail when modal opens
  const { data: detailData } = useQuery({
    queryKey: queryKeys.gsoc.detail(selectedOrg?.slug ?? ""),
    queryFn: () => api.get(`/gsoc/organizations/${selectedOrg!.slug}`).then((r) => r.data),
    enabled: !!selectedOrg,
  });

  const detailOrg: GSoCOrganization | null = detailData?.organization ?? selectedOrg;

  // Filter options from stats
  const categoryOptions = ["All", ...(stats?.categories.map((c) => c.name) ?? [])];
  const yearOptions = ["All", ...(stats?.years.map((y) => String(y.year)) ?? [])];
  const techOptions = ["All", ...(stats?.technologies.slice(0, 30).map((t) => t.name) ?? [])];

  const clearFilters = () => {
    setSearch(""); setDebouncedSearch(""); setSelectedCategory("All"); setSelectedTech("All"); setSelectedYear("All"); setPage(1);
  };

  const hasFilters = debouncedSearch || selectedCategory !== "All" || selectedTech !== "All" || selectedYear !== "All";

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <Link
        to="/student/opensource"
        className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white mb-6 no-underline transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Open Source
      </Link>

      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 dark:from-amber-950/30 dark:via-orange-950/20 dark:to-yellow-950/20 border border-amber-100 dark:border-amber-800 mb-8 p-8">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-amber-200/30 dark:from-amber-700/20 to-transparent rounded-bl-full pointer-events-none" />
        <div className="relative">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center shadow-lg">
              <Trophy className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">GSoC Organizations</h1>
              <p className="text-sm text-amber-700 dark:text-amber-400">Google Summer of Code - {stats?.total ?? "520"}+ accepted organizations</p>
            </div>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 max-w-2xl mb-6 leading-relaxed">
            Browse every organization that has been accepted into Google Summer of Code from 2016 to 2026. Find the right org, explore their past projects, and start contributing early.
          </p>
          {/* Stats */}
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Organizations", value: stats?.total ?? "-" },
              { label: "Categories", value: stats?.categories.length ?? "-" },
              { label: "Years", value: "2016–2026" },
              { label: "Technologies", value: stats?.technologies.length ?? "-" },
            ].map((s) => (
              <div key={s.label} className="bg-white/70 dark:bg-gray-900/70 rounded-xl px-4 py-2 border border-amber-100 dark:border-amber-800">
                <p className="text-lg font-bold text-gray-900 dark:text-white leading-none">{s.value}</p>
                <p className="text-[11px] text-gray-500 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter bar */}
      <div className="flex flex-col sm:flex-row gap-3 mb-5">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text" value={search} onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search organizations, technologies, topics…"
            className="w-full pl-9 pr-4 py-2.5 border border-gray-200 dark:border-gray-600 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-300 bg-white dark:bg-gray-800 dark:text-white dark:placeholder-gray-500"
          />
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <FilterDropdown label="Category" icon={<Globe className="w-3.5 h-3.5" />}
            value={selectedCategory} options={categoryOptions} onChange={(v) => { setSelectedCategory(v); setPage(1); }} />
          <FilterDropdown label="Year" icon={<Calendar className="w-3.5 h-3.5" />}
            value={selectedYear} options={yearOptions} onChange={(v) => { setSelectedYear(v); setPage(1); }} />
          <FilterDropdown label="Tech" icon={<Code2 className="w-3.5 h-3.5" />}
            value={selectedTech} options={techOptions} onChange={(v) => { setSelectedTech(v); setPage(1); }} />
          {hasFilters && (
            <button
              onClick={clearFilters}
              className="flex items-center gap-1 px-3 py-2 text-xs text-gray-500 hover:text-gray-900 dark:hover:text-white bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors border border-gray-200 dark:border-gray-700"
            >
              <X className="w-3.5 h-3.5" />
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Result count */}
      <p className="text-sm text-gray-400 mb-5">
        Showing <span className="font-semibold text-gray-900 dark:text-white">{organizations.length}</span> of {pagination.total} organizations
        {pagination.totalPages > 1 && <span> - page {pagination.page} of {pagination.totalPages}</span>}
      </p>

      {/* Grid */}
      {isLoading ? (
        <LoadingScreen />
      ) : organizations.length === 0 ? (
        <div className="text-center py-16 bg-gray-50 dark:bg-gray-950 rounded-2xl">
          <Trophy className="w-10 h-10 text-gray-200 dark:text-gray-700 mx-auto mb-3" />
          <p className="text-sm text-gray-500 font-medium">No organizations match your filters</p>
          <p className="text-xs text-gray-400 mt-1">Try adjusting or clearing your filters</p>
        </div>
      ) : (
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {organizations.map((org) => (
              <motion.div
                key={org.id} layout
                initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.2 }}
              >
                <GSoCOrgCard org={org} onClick={() => setSelectedOrg(org)} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}

      {/* Pagination */}
      {pagination.totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-8">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 disabled:opacity-30 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          {Array.from({ length: Math.min(5, pagination.totalPages) }, (_, i) => {
            const start = Math.max(1, Math.min(page - 2, pagination.totalPages - 4));
            const p = start + i;
            if (p > pagination.totalPages) return null;
            return (
              <button
                key={p} onClick={() => setPage(p)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  p === page
                    ? "bg-amber-500 text-white"
                    : "border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                }`}
              >
                {p}
              </button>
            );
          })}
          <button
            onClick={() => setPage((p) => Math.min(pagination.totalPages, p + 1))}
            disabled={page === pagination.totalPages}
            className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 disabled:opacity-30 transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Tip banner */}
      <div className="mt-8 p-5 rounded-2xl bg-amber-50 dark:bg-amber-900/30 border border-amber-100 dark:border-amber-800">
        <div className="flex items-start gap-3">
          <Trophy className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-amber-900 dark:text-amber-300">Pro Tip: Contribute Before Applying</p>
            <p className="text-xs text-amber-700 dark:text-amber-400 mt-1 leading-relaxed">
              The best GSoC proposals come from students who have already submitted small PRs to the org. Visit the org website, find a <code className="bg-amber-100 dark:bg-amber-800 px-1 rounded text-xs">good first issue</code>, and submit a fix before the application window opens (Jan–Mar each year).
            </p>
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {detailOrg && selectedOrg && (
          <GSoCOrgModal org={detailOrg} onClose={() => setSelectedOrg(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}
