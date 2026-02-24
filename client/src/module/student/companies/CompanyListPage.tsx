import { useState, useEffect, useCallback, useMemo } from "react";
import { Link, useSearchParams } from "react-router";
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
} from "lucide-react";
import { SEO } from "../../../components/SEO";
import { Navbar } from "../../../components/Navbar";
import { Footer } from "../../../components/Footer";
import api from "../../../lib/axios";
import type { Company, CityCount, Pagination } from "../../../lib/types";
import { ycCompaniesData, YC_BATCHES } from "./ycCompaniesData";
import type { YCCompany } from "./ycCompaniesData";

const SIZE_LABELS: Record<string, string> = {
  STARTUP: "Startup",
  SMALL: "Small",
  MEDIUM: "Medium",
  LARGE: "Large",
  ENTERPRISE: "Enterprise",
};

const STATUS_COLORS: Record<string, string> = {
  Active: "bg-emerald-50 text-emerald-700",
  Acquired: "bg-blue-50 text-blue-700",
  Public: "bg-purple-50 text-purple-700",
};

function CompanyCard({ company }: { company: Company }) {
  return (
    <Link
      to={`/companies/${company.slug}`}
      className="block bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-5 no-underline"
    >
      <div className="flex items-start gap-4">
        {company.logo ? (
          <img
            src={`http://localhost:3000${company.logo}`}
            alt={company.name}
            className="w-14 h-14 rounded-lg object-cover border border-gray-100"
          />
        ) : (
          <div className="w-14 h-14 rounded-lg bg-gray-100 flex items-center justify-center shrink-0">
            <Building2 className="w-6 h-6 text-gray-400" />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="text-base font-semibold text-gray-900 truncate">
              {company.name}
            </h3>
            {company.hiringStatus && (
              <span className="px-2 py-0.5 bg-green-50 text-green-700 text-xs font-medium rounded-full shrink-0">
                Hiring
              </span>
            )}
          </div>
          <div className="flex items-center gap-3 mt-1 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              {company.city}
            </span>
            <span>{company.industry}</span>
          </div>
        </div>
      </div>

      <p className="mt-3 text-sm text-gray-600 line-clamp-2">
        {company.description}
      </p>

      <div className="mt-3 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          <span className="text-sm font-medium text-gray-700">
            {company.avgRating > 0 ? company.avgRating.toFixed(1) : "New"}
          </span>
          {company.reviewCount > 0 && (
            <span className="text-xs text-gray-400">
              ({company.reviewCount})
            </span>
          )}
        </div>
        <span className="text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded-full">
          {SIZE_LABELS[company.size] ?? company.size}
        </span>
      </div>

      {company.technologies.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {company.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 bg-blue-50 text-blue-700 text-xs rounded-full"
            >
              {tech}
            </span>
          ))}
          {company.technologies.length > 4 && (
            <span className="px-2 py-0.5 bg-gray-50 text-gray-500 text-xs rounded-full">
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
    <div className="block bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all p-5 group">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center shrink-0">
            <span className="text-orange-600 font-bold text-sm">
              {company.name.charAt(0)}
            </span>
          </div>
          <div className="min-w-0">
            <h4 className="text-sm font-semibold text-gray-900 truncate">
              {company.name}
            </h4>
            <p className="text-xs text-gray-400">{company.industry}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className="px-2 py-0.5 bg-orange-50 text-orange-700 text-[10px] font-bold rounded-full border border-orange-100">
            {company.batch}
          </span>
          <span
            className={`px-2 py-0.5 text-[10px] font-medium rounded-full ${STATUS_COLORS[company.status] ?? "bg-gray-50 text-gray-600"}`}
          >
            {company.status}
          </span>
        </div>
      </div>

      <p className="text-sm text-gray-600 line-clamp-2 mb-3">
        {company.description}
      </p>

      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-1">
          {company.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 bg-gray-50 text-gray-500 text-[10px] rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
        <a
          href={company.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-orange-500 transition-colors"
          onClick={(e) => e.stopPropagation()}
          title="Visit website"
        >
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
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

  // YC filters
  const [ycSearch, setYcSearch] = useState("");
  const [ycBatch, setYcBatch] = useState("All");

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

  // Filtered YC companies
  const filteredYC = useMemo(() => {
    let list = [...ycCompaniesData];
    if (ycBatch !== "All") {
      list = list.filter((c) => c.batch === ycBatch);
    }
    if (ycSearch.trim()) {
      const q = ycSearch.toLowerCase();
      list = list.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.description.toLowerCase().includes(q) ||
          c.industry.toLowerCase().includes(q) ||
          c.tags.some((t) => t.toLowerCase().includes(q)),
      );
    }
    return list;
  }, [ycSearch, ycBatch]);

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-8 pt-24">
        <SEO
          title="Explore Companies"
          description="Discover companies hiring on InternHack. Browse by industry, size, and location. Read reviews, see tech stacks, and find your ideal workplace."
          keywords="company explorer, companies hiring, company reviews, tech companies, startup jobs, company directory, workplace reviews"
        />
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
            <Building2 className="w-8 h-8" />
            Explore Companies
          </h1>
          <p className="text-gray-500 mt-2">
            Discover companies across cities, read reviews, and connect with key
            people
          </p>
        </div>

        {/* ── Tabs ─────────────────────────────────────── */}
        <div className="mb-6 flex items-center gap-1 bg-gray-100 rounded-xl p-1 w-fit">
          <button
            onClick={() => setActiveTab("all")}
            className={`flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-medium transition-all ${
              activeTab === "all"
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            <Building2 className="w-4 h-4" />
            All Companies
          </button>
          <button
            onClick={() => setActiveTab("yc")}
            className={`flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-medium transition-all ${
              activeTab === "yc"
                ? "bg-white text-orange-700 shadow-sm"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            <Rocket className="w-4 h-4" />
            YC Companies
            <span className="px-1.5 py-0.5 bg-orange-50 text-orange-600 text-[10px] font-bold rounded-full border border-orange-100">
              {ycCompaniesData.length}
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
                        ? "bg-black text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
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
                          ? "bg-black text-white"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
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
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => updateParam("search", e.target.value)}
                  placeholder="Search companies by name or industry..."
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black/10"
                />
              </div>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`flex items-center gap-2 px-4 py-2.5 border rounded-lg text-sm font-medium transition-colors ${
                  showFilters
                    ? "border-black bg-black text-white"
                    : "border-gray-200 text-gray-600 hover:bg-gray-50"
                }`}
              >
                <Filter className="w-4 h-4" />
                Filters
              </button>
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-1 px-3 py-2.5 text-sm text-red-600 hover:bg-red-50 rounded-lg"
                >
                  <X className="w-4 h-4" /> Clear
                </button>
              )}
            </div>

            {/* Filter Panel */}
            {showFilters && (
              <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm mb-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1">
                    Industry
                  </label>
                  <input
                    type="text"
                    value={industry}
                    onChange={(e) => updateParam("industry", e.target.value)}
                    placeholder="e.g. Technology"
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black/10"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1">
                    Company Size
                  </label>
                  <select
                    value={size}
                    onChange={(e) => updateParam("size", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black/10"
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
                  <label className="block text-xs font-medium text-gray-500 mb-1">
                    Hiring Status
                  </label>
                  <select
                    value={hiring}
                    onChange={(e) => updateParam("hiring", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black/10"
                  >
                    <option value="">All</option>
                    <option value="true">Hiring Now</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1">
                    Min Rating
                  </label>
                  <select
                    value={minRating}
                    onChange={(e) => updateParam("minRating", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black/10"
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
                <Loader2 className="w-6 h-6 animate-spin text-gray-400" />
              </div>
            ) : companies.length === 0 ? (
              <div className="text-center py-20">
                <Users className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-600">
                  No companies found
                </h3>
                <p className="text-sm text-gray-400 mt-1">
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
                            ? "bg-black text-white"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
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
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  value={ycSearch}
                  onChange={(e) => setYcSearch(e.target.value)}
                  placeholder="Search YC companies..."
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-300"
                />
              </div>

              {/* Batch dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors">
                  <Rocket className="w-4 h-4" />
                  Batch:{" "}
                  <span className="font-medium text-gray-900">{ycBatch}</span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
                <div className="absolute left-0 top-full z-20 mt-1 hidden min-w-[160px] max-h-[240px] overflow-y-auto rounded-xl border border-gray-100 bg-white p-1 shadow-xl group-hover:block">
                  {YC_BATCHES.map((batch) => (
                    <button
                      key={batch}
                      onClick={() => setYcBatch(batch)}
                      className={`block w-full rounded-lg px-3 py-2 text-left text-sm transition ${
                        ycBatch === batch
                          ? "bg-orange-50 text-orange-700 font-medium"
                          : "text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      {batch}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* YC Results */}
            {filteredYC.length === 0 ? (
              <div className="text-center py-16 bg-gray-50 rounded-xl">
                <Building2 className="w-10 h-10 text-gray-300 mx-auto mb-3" />
                <p className="text-sm text-gray-500">
                  No YC companies match your search
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredYC.map((company) => (
                  <YCCard key={company.name} company={company} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}
