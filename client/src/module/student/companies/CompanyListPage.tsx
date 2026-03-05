import { useState, useEffect, useCallback } from "react";
import { Link, useSearchParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import {
  Search,
  MapPin,
  Building2,
  Filter,
  Star,
  Users,
  Loader2,
  X,
  Rocket,
  ExternalLink,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { SEO } from "../../../components/SEO";
import { Navbar } from "../../../components/Navbar";
import { Footer } from "../../../components/Footer";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import type {
  Company,
  CityCount,
  Pagination,
  YCCompany,
  YCStats,
} from "../../../lib/types";

const SIZE_LABELS: Record<string, string> = {
  STARTUP: "Startup",
  SMALL: "Small",
  MEDIUM: "Medium",
  LARGE: "Large",
  ENTERPRISE: "Enterprise",
};

const STATUS_COLORS: Record<string, string> = {
  Active: "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
  Acquired: "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  Public: "bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
  Inactive: "bg-gray-50 text-gray-600 dark:bg-gray-800 dark:text-gray-400",
};

function CompanyCard({ company }: { company: Company }) {
  return (
    <Link
      to={`/companies/${company.slug}`}
      className="block bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow p-5 no-underline"
    >
      <div className="flex items-start gap-4">
        {company.logo ? (
          <img
            src={`http://localhost:3000${company.logo}`}
            alt={company.name}
            className="w-14 h-14 rounded-lg object-cover border border-gray-100 dark:border-gray-800"
          />
        ) : (
          <div className="w-14 h-14 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center shrink-0">
            <Building2 className="w-6 h-6 text-gray-400 dark:text-gray-500" />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="text-base font-semibold text-gray-900 dark:text-white truncate">
              {company.name}
            </h3>
            {company.hiringStatus && (
              <span className="px-2 py-0.5 bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400 text-xs font-medium rounded-full shrink-0">
                Hiring
              </span>
            )}
          </div>
          <div className="flex items-center gap-3 mt-1 text-sm text-gray-500 dark:text-gray-500">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              {company.city}
            </span>
            <span>{company.industry}</span>
          </div>
        </div>
      </div>

      <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
        {company.description}
      </p>

      <div className="mt-3 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {company.avgRating > 0 ? company.avgRating.toFixed(1) : "New"}
          </span>
          {company.reviewCount > 0 && (
            <span className="text-xs text-gray-400 dark:text-gray-500">
              ({company.reviewCount})
            </span>
          )}
        </div>
        <span className="text-xs text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-950 px-2 py-1 rounded-full">
          {SIZE_LABELS[company.size] ?? company.size}
        </span>
      </div>

      {company.technologies.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {company.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 text-xs rounded-full"
            >
              {tech}
            </span>
          ))}
          {company.technologies.length > 4 && (
            <span className="px-2 py-0.5 bg-gray-50 dark:bg-gray-950 text-gray-500 dark:text-gray-500 text-xs rounded-full">
              +{company.technologies.length - 4}
            </span>
          )}
        </div>
      )}
    </Link>
  );
}

function YCCard({ company }: { company: YCCompany }) {
  return (
    <div className="block bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all p-5 group">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-3 min-w-0">
          {company.smallLogoUrl ? (
            <img
              src={company.smallLogoUrl}
              alt={company.name}
              className="w-10 h-10 rounded-lg object-contain bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-800"
            />
          ) : (
            <div className="w-10 h-10 rounded-lg bg-orange-50 dark:bg-orange-900/30 flex items-center justify-center shrink-0">
              <span className="text-orange-600 dark:text-orange-400 font-bold text-sm">
                {company.name.charAt(0)}
              </span>
            </div>
          )}
          <div className="min-w-0">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white truncate">
              {company.name}
            </h4>
            <p className="text-xs text-gray-400 dark:text-gray-500">
              {company.industry || company.subindustry || "—"}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          {company.batchShort && (
            <span className="px-2 py-0.5 bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 text-[10px] font-bold rounded-full border border-orange-100 dark:border-orange-800">
              {company.batchShort}
            </span>
          )}
          {company.isHiring && (
            <span className="px-2 py-0.5 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-[10px] font-medium rounded-full">
              Hiring
            </span>
          )}
          {company.status && (
            <span
              className={`px-2 py-0.5 text-[10px] font-medium rounded-full ${STATUS_COLORS[company.status] ?? "bg-gray-50 dark:bg-gray-950 text-gray-600 dark:text-gray-400"}`}
            >
              {company.status}
            </span>
          )}
        </div>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-3">
        {company.oneLiner || "—"}
      </p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 text-xs text-gray-400 dark:text-gray-500">
          {company.allLocations && (
            <span className="flex items-center gap-1 truncate max-w-[160px]">
              <MapPin className="w-3 h-3 shrink-0" />
              {company.allLocations}
            </span>
          )}
          {company.teamSize && (
            <span className="flex items-center gap-1">
              <Users className="w-3 h-3" />
              {company.teamSize}
            </span>
          )}
        </div>
        {company.website && (
          <a
            href={company.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 dark:text-gray-600 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
            onClick={(e) => e.stopPropagation()}
            title="Visit website"
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </div>

      {company.tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1">
          {company.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 bg-gray-50 dark:bg-gray-950 text-gray-500 dark:text-gray-500 text-[10px] rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Tab type ─────────────────────────────────────────────
type Tab = "all" | "yc";

export default function CompanyListPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [companies, setCompanies] = useState<Company[]>([]);
  const [cities, setCities] = useState<CityCount[]>([]);
  const [pagination, setPagination] = useState<Pagination | null>(null);
  const [loading, setLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);

  // Active tab
  const [activeTab, setActiveTab] = useState<Tab>("all");

  // YC filters (local state, debounced before query)
  const [ycSearchInput, setYcSearchInput] = useState("");
  const [ycSearch, setYcSearch] = useState("");
  const [ycBatch, setYcBatch] = useState("");
  const [ycIndustry, setYcIndustry] = useState("");
  const [ycPage, setYcPage] = useState(1);

  // Debounce YC search
  useEffect(() => {
    const timer = setTimeout(() => {
      setYcSearch(ycSearchInput);
      setYcPage(1);
    }, 400);
    return () => clearTimeout(timer);
  }, [ycSearchInput]);

  const selectedCity = searchParams.get("city") || "";
  const search = searchParams.get("search") || "";
  const industry = searchParams.get("industry") || "";
  const size = searchParams.get("size") || "";
  const hiring = searchParams.get("hiring") || "";
  const minRating = searchParams.get("minRating") || "";
  const page = searchParams.get("page") || "1";

  const updateParam = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    if (key !== "page") params.delete("page");
    setSearchParams(params);
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  const fetchCompanies = useCallback(async () => {
    setLoading(true);
    try {
      const params: Record<string, string> = { page };
      if (selectedCity) params["city"] = selectedCity;
      if (search) params["search"] = search;
      if (industry) params["industry"] = industry;
      if (size) params["size"] = size;
      if (hiring) params["hiring"] = hiring;
      if (minRating) params["minRating"] = minRating;

      const res = await api.get("/companies", { params });
      setCompanies(res.data.companies);
      setPagination(res.data.pagination);
    } catch {
      setCompanies([]);
    } finally {
      setLoading(false);
    }
  }, [selectedCity, search, industry, size, hiring, minRating, page]);

  useEffect(() => {
    fetchCompanies();
  }, [fetchCompanies]);

  useEffect(() => {
    api
      .get("/companies/cities")
      .then((res) => setCities(res.data.cities))
      .catch(() => {});
  }, []);

  const hasActiveFilters =
    selectedCity || industry || size || hiring || minRating || search;

  // ── YC Stats query ──
  const { data: ycStats } = useQuery<YCStats>({
    queryKey: queryKeys.yc.stats(),
    queryFn: () => api.get("/yc/stats").then((r) => r.data),
    staleTime: 5 * 60 * 1000,
  });

  // ── YC Companies query ──
  const ycQueryParams: Record<string, string | number> = { page: ycPage, limit: 24 };
  if (ycSearch) ycQueryParams["search"] = ycSearch;
  if (ycBatch) ycQueryParams["batch"] = ycBatch;
  if (ycIndustry) ycQueryParams["industry"] = ycIndustry;

  const { data: ycData, isLoading: ycLoading } = useQuery<{
    companies: YCCompany[];
    pagination: Pagination;
  }>({
    queryKey: queryKeys.yc.list(ycQueryParams),
    queryFn: () => api.get("/yc/companies", { params: ycQueryParams }).then((r) => r.data),
    enabled: activeTab === "yc",
  });

  const ycCompanies = ycData?.companies ?? [];
  const ycPagination = ycData?.pagination ?? null;

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-gray-950">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-8 pt-24">
        <SEO
          title="Explore Companies"
          description="Discover companies hiring on InternHack. Browse by industry, size, and location. Read reviews, see tech stacks, and find your ideal workplace."
          keywords="company explorer, companies hiring, company reviews, tech companies, startup jobs, company directory, workplace reviews"
        />
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
            <Building2 className="w-8 h-8" />
            Explore Companies
          </h1>
          <p className="text-gray-500 dark:text-gray-500 mt-2">
            Discover companies across cities, read reviews, and connect with key
            people
          </p>
        </div>

        {/* ── Tabs ─────────────────────────────────────── */}
        <div className="mb-6 flex items-center gap-1 bg-gray-100 dark:bg-gray-800 rounded-xl p-1 w-fit">
          <button
            onClick={() => setActiveTab("all")}
            className={`flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-medium transition-all ${
              activeTab === "all"
                ? "bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-sm"
                : "text-gray-500 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            }`}
          >
            <Building2 className="w-4 h-4" />
            All Companies
          </button>
          <button
            onClick={() => setActiveTab("yc")}
            className={`flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-medium transition-all ${
              activeTab === "yc"
                ? "bg-white dark:bg-gray-900 text-orange-700 dark:text-orange-400 shadow-sm"
                : "text-gray-500 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            }`}
          >
            <Rocket className="w-4 h-4" />
            YC Companies
            <span className="px-1.5 py-0.5 bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-[10px] font-bold rounded-full border border-orange-100 dark:border-orange-800">
              {ycStats?.total ?? "..."}
            </span>
          </button>
        </div>

        {/* ── TAB: All Companies ─────────────────────── */}
        {activeTab === "all" && (
          <>
            {/* City Chips */}
            {cities.length > 0 && (
              <div className="mb-6">
                <div className="flex items-center gap-2 overflow-x-auto pb-2">
                  <button
                    onClick={() => updateParam("city", "")}
                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                      !selectedCity
                        ? "bg-black dark:bg-white text-white dark:text-gray-950"
                        : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
                    }`}
                  >
                    All Cities
                  </button>
                  {cities.map((c) => (
                    <button
                      key={c.city}
                      onClick={() => updateParam("city", c.city)}
                      className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                        selectedCity === c.city
                          ? "bg-black dark:bg-white text-white dark:text-gray-950"
                          : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
                      }`}
                    >
                      {c.city} ({c.count})
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Search + Filter Bar */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => updateParam("search", e.target.value)}
                  placeholder="Search companies by name or industry..."
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-200 dark:border-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black/10 dark:focus:ring-white/20 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500"
                />
              </div>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`flex items-center gap-2 px-4 py-2.5 border rounded-lg text-sm font-medium transition-colors ${
                  showFilters
                    ? "border-black dark:border-white bg-black dark:bg-white text-white dark:text-gray-950"
                    : "border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                }`}
              >
                <Filter className="w-4 h-4" />
                Filters
              </button>
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-1 px-3 py-2.5 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-lg"
                >
                  <X className="w-4 h-4" /> Clear
                </button>
              )}
            </div>

            {/* Filter Panel */}
            {showFilters && (
              <div className="bg-white dark:bg-gray-900 p-4 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm mb-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-500 dark:text-gray-500 mb-1">
                    Industry
                  </label>
                  <input
                    type="text"
                    value={industry}
                    onChange={(e) => updateParam("industry", e.target.value)}
                    placeholder="e.g. Technology"
                    className="w-full px-3 py-2 border border-gray-200 dark:border-gray-600 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black/10 dark:focus:ring-white/20 dark:bg-gray-800 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500 dark:text-gray-500 mb-1">
                    Company Size
                  </label>
                  <select
                    value={size}
                    onChange={(e) => updateParam("size", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-200 dark:border-gray-600 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black/10 dark:focus:ring-white/20 dark:bg-gray-800 dark:text-white"
                  >
                    <option value="">All Sizes</option>
                    <option value="STARTUP">Startup</option>
                    <option value="SMALL">Small</option>
                    <option value="MEDIUM">Medium</option>
                    <option value="LARGE">Large</option>
                    <option value="ENTERPRISE">Enterprise</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500 dark:text-gray-500 mb-1">
                    Hiring Status
                  </label>
                  <select
                    value={hiring}
                    onChange={(e) => updateParam("hiring", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-200 dark:border-gray-600 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black/10 dark:focus:ring-white/20 dark:bg-gray-800 dark:text-white"
                  >
                    <option value="">All</option>
                    <option value="true">Hiring Now</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500 dark:text-gray-500 mb-1">
                    Min Rating
                  </label>
                  <select
                    value={minRating}
                    onChange={(e) => updateParam("minRating", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-200 dark:border-gray-600 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black/10 dark:focus:ring-white/20 dark:bg-gray-800 dark:text-white"
                  >
                    <option value="">Any</option>
                    <option value="4">4+ Stars</option>
                    <option value="3">3+ Stars</option>
                    <option value="2">2+ Stars</option>
                  </select>
                </div>
              </div>
            )}

            {/* Results */}
            {loading ? (
              <div className="flex items-center justify-center py-20">
                <Loader2 className="w-6 h-6 animate-spin text-gray-400 dark:text-gray-500" />
              </div>
            ) : companies.length === 0 ? (
              <div className="text-center py-20">
                <Users className="w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-600 dark:text-gray-400">
                  No companies found
                </h3>
                <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">
                  Try adjusting your search or filters
                </p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {companies.map((company) => (
                    <CompanyCard key={company.id} company={company} />
                  ))}
                </div>

                {/* Pagination */}
                {pagination && pagination.totalPages > 1 && (
                  <div className="flex items-center justify-center gap-2 mt-8">
                    {Array.from(
                      { length: pagination.totalPages },
                      (_, i) => i + 1,
                    ).map((p) => (
                      <button
                        key={p}
                        onClick={() => updateParam("page", String(p))}
                        className={`w-10 h-10 rounded-lg text-sm font-medium transition-colors ${
                          p === pagination.page
                            ? "bg-black dark:bg-white text-white dark:text-gray-950"
                            : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                )}
              </>
            )}
          </>
        )}

        {/* ── TAB: YC Companies ──────────────────────── */}
        {activeTab === "yc" && (
          <>
            {/* YC-specific controls */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500" />
                <input
                  type="text"
                  value={ycSearchInput}
                  onChange={(e) => setYcSearchInput(e.target.value)}
                  placeholder="Search YC companies..."
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-200 dark:border-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-300 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500"
                />
              </div>

              {/* Batch dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 dark:border-gray-700 rounded-lg text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <Rocket className="w-4 h-4" />
                  Batch:{" "}
                  <span className="font-medium text-gray-900 dark:text-white">
                    {ycBatch || "All"}
                  </span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
                <div className="absolute left-0 top-full z-20 mt-1 hidden min-w-[160px] max-h-[240px] overflow-y-auto rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-1 shadow-xl group-hover:block">
                  <button
                    onClick={() => { setYcBatch(""); setYcPage(1); }}
                    className={`block w-full rounded-lg px-3 py-2 text-left text-sm transition ${
                      !ycBatch
                        ? "bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 font-medium"
                        : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                    }`}
                  >
                    All
                  </button>
                  {(ycStats?.batches ?? []).map((b) => (
                    <button
                      key={b.name}
                      onClick={() => { setYcBatch(b.name); setYcPage(1); }}
                      className={`block w-full rounded-lg px-3 py-2 text-left text-sm transition ${
                        ycBatch === b.name
                          ? "bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 font-medium"
                          : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                      }`}
                    >
                      {b.name} ({b.count})
                    </button>
                  ))}
                </div>
              </div>

              {/* Industry dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 dark:border-gray-700 rounded-lg text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <Filter className="w-4 h-4" />
                  Industry:{" "}
                  <span className="font-medium text-gray-900 dark:text-white truncate max-w-[100px]">
                    {ycIndustry || "All"}
                  </span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
                <div className="absolute left-0 top-full z-20 mt-1 hidden min-w-[200px] max-h-[280px] overflow-y-auto rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-1 shadow-xl group-hover:block">
                  <button
                    onClick={() => { setYcIndustry(""); setYcPage(1); }}
                    className={`block w-full rounded-lg px-3 py-2 text-left text-sm transition ${
                      !ycIndustry
                        ? "bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 font-medium"
                        : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                    }`}
                  >
                    All
                  </button>
                  {(ycStats?.industries ?? []).slice(0, 30).map((ind) => (
                    <button
                      key={ind.name}
                      onClick={() => { setYcIndustry(ind.name); setYcPage(1); }}
                      className={`block w-full rounded-lg px-3 py-2 text-left text-sm transition ${
                        ycIndustry === ind.name
                          ? "bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 font-medium"
                          : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                      }`}
                    >
                      {ind.name} ({ind.count})
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear YC filters */}
              {(ycSearch || ycBatch || ycIndustry) && (
                <button
                  onClick={() => { setYcSearchInput(""); setYcSearch(""); setYcBatch(""); setYcIndustry(""); setYcPage(1); }}
                  className="flex items-center gap-1 px-3 py-2.5 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-lg"
                >
                  <X className="w-4 h-4" /> Clear
                </button>
              )}
            </div>

            {/* YC Results */}
            {ycLoading ? (
              <div className="flex items-center justify-center py-20">
                <Loader2 className="w-6 h-6 animate-spin text-gray-400 dark:text-gray-500" />
              </div>
            ) : ycCompanies.length === 0 ? (
              <div className="text-center py-16 bg-gray-50 dark:bg-gray-950 rounded-xl">
                <Building2 className="w-10 h-10 text-gray-300 dark:text-gray-600 mx-auto mb-3" />
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  No YC companies match your search
                </p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {ycCompanies.map((company) => (
                    <YCCard key={company.id} company={company} />
                  ))}
                </div>

                {/* YC Pagination */}
                {ycPagination && ycPagination.totalPages > 1 && (
                  <div className="flex items-center justify-center gap-3 mt-8">
                    <button
                      onClick={() => setYcPage((p) => Math.max(1, p - 1))}
                      disabled={ycPage <= 1}
                      className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4" /> Prev
                    </button>
                    <span className="text-sm text-gray-500 dark:text-gray-500">
                      Page {ycPagination.page} of {ycPagination.totalPages}
                    </span>
                    <button
                      onClick={() => setYcPage((p) => Math.min(ycPagination.totalPages, p + 1))}
                      disabled={ycPage >= ycPagination.totalPages}
                      className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                    >
                      Next <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </>
            )}
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}
