import { useState, useEffect, useCallback } from "react";
import { LoadingScreen } from "../../../components/LoadingScreen";
import { PaginationControls } from "../../../components/ui/PaginationControls";
import { Link, useSearchParams, useLocation } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import {
  Search,
  MapPin,
  Building2,
  Filter,
  Star,
  Users,
  X,
  Rocket,
  ExternalLink,
  ChevronDown,
  Lock,
  GraduationCap,
  Mail,
  BookOpen,
} from "lucide-react";
import { SEO } from "../../../components/SEO";
import { canonicalUrl } from "../../../lib/seo.utils";
import { Navbar } from "../../../components/Navbar";
import { Footer } from "../../../components/Footer";
import EmailCampaignTab from "./EmailCampaignTab";
import api, { SERVER_URL } from "../../../lib/axios";
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
      className="block bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50 hover:border-gray-200 dark:hover:border-gray-700 transition-all duration-300 p-5 no-underline"
    >
      <div className="flex items-start gap-4">
        {company.logo ? (
          <img
            src={company.logo.startsWith('http') ? company.logo : `${SERVER_URL}${company.logo}`}
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
    <Link to={`/yc/${company.slug}`} className="block bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50 hover:border-orange-200 dark:hover:border-orange-800 transition-all duration-300 p-5 group no-underline">
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
              {company.industry || company.subindustry || "-"}
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
        {company.oneLiner || "-"}
      </p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 text-xs text-gray-400 dark:text-gray-500">
          {company.allLocations && (
            <span className="flex items-center gap-1 truncate max-w-40">
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
    </Link>
  );
}

// ─── Professor types ──────────────────────────────────────
interface Professor {
  id: number;
  collegeName: string;
  collegeType: string;
  department: string;
  name: string;
  areaOfInterest: string | null;
  email: string | null;
}

interface ProfessorStats {
  total: number;
  colleges: { name: string; count: number }[];
  departments: { name: string; count: number }[];
}

function ProfessorCard({ professor }: { professor: Professor }) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50 hover:border-indigo-200 dark:hover:border-indigo-800 transition-all duration-300 p-5">
      <div className="flex items-start gap-3">
        <div className="w-11 h-11 rounded-lg bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center shrink-0">
          <span className="text-indigo-600 dark:text-indigo-400 font-bold text-sm">
            {professor.name.charAt(0)}
          </span>
        </div>
        <div className="min-w-0 flex-1">
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white truncate">
            {professor.name}
          </h4>
          <p className="text-xs text-gray-500 dark:text-gray-500 truncate">
            {professor.collegeName}
          </p>
        </div>
      </div>

      <div className="mt-3 flex items-center gap-1.5 text-xs text-indigo-600 dark:text-indigo-400">
        <BookOpen className="w-3 h-3 shrink-0" />
        <span className="truncate">{professor.department}</span>
      </div>

      {professor.areaOfInterest && (
        <p className="mt-2 text-xs text-gray-500 dark:text-gray-400 line-clamp-2">
          {professor.areaOfInterest}
        </p>
      )}

      {professor.email && (
        <a
          href={`mailto:${professor.email}`}
          className="mt-3 flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors truncate"
          onClick={(e) => e.stopPropagation()}
        >
          <Mail className="w-3 h-3 shrink-0" />
          {professor.email}
        </a>
      )}
    </div>
  );
}

// ─── HR Contact types ─────────────────────────────────────
interface HRContact {
  id: number;
  name: string;
  email: string | null;
  company: string | null;
  designation: string | null;
  linkedinUrl: string | null;
}

interface HRContactStats {
  total: number;
  companies: { name: string; count: number }[];
}

function HRContactCard({ contact }: { contact: HRContact }) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50 hover:border-teal-200 dark:hover:border-teal-800 transition-all duration-300 p-5">
      <div className="flex items-start gap-3">
        <div className="w-11 h-11 rounded-lg bg-teal-50 dark:bg-teal-900/30 flex items-center justify-center shrink-0">
          <span className="text-teal-600 dark:text-teal-400 font-bold text-sm">
            {contact.name.charAt(0)}
          </span>
        </div>
        <div className="min-w-0 flex-1">
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white truncate">
            {contact.name}
          </h4>
          {contact.designation && (
            <p className="text-xs text-gray-500 dark:text-gray-500 truncate">
              {contact.designation}
            </p>
          )}
        </div>
      </div>
      {contact.company && (
        <div className="mt-3 flex items-center gap-1.5 text-xs text-teal-600 dark:text-teal-400">
          <Building2 className="w-3 h-3 shrink-0" />
          <span className="truncate">{contact.company}</span>
        </div>
      )}
      <div className="mt-3 flex items-center gap-3">
        {contact.linkedinUrl && (
          <a href={contact.linkedinUrl} target="_blank" rel="noopener noreferrer"
            className="text-xs text-gray-400 hover:text-blue-600 transition-colors"
            onClick={(e) => e.stopPropagation()}>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
        {contact.email && (
          <a href={`mailto:${contact.email}`}
            className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500 hover:text-teal-600 dark:hover:text-teal-400 transition-colors truncate"
            onClick={(e) => e.stopPropagation()}>
            <Mail className="w-3 h-3 shrink-0" />
            {contact.email}
          </a>
        )}
      </div>
    </div>
  );
}

// ─── Tab type ─────────────────────────────────────────────
type Tab = "all" | "yc" | "professors" | "hr" | "email";

export default function CompanyListPage() {
  const isInsideLayout = useLocation().pathname.startsWith("/student/");
  const [searchParams, setSearchParams] = useSearchParams();
  const [companies, setCompanies] = useState<Company[]>([]);
  const [cities, setCities] = useState<CityCount[]>([]);
  const [pagination, setPagination] = useState<Pagination | null>(null);
  const [loading, setLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);
  const [cityLimited, setCityLimited] = useState(false);
  const [totalUnlimited, setTotalUnlimited] = useState(0);

  // Active tab
  const [activeTab, setActiveTab] = useState<Tab>("all");

  // YC filters (local state, debounced before query)
  const [ycSearchInput, setYcSearchInput] = useState("");
  const [ycSearch, setYcSearch] = useState("");
  const [ycBatch, setYcBatch] = useState("");
  const [ycIndustry, setYcIndustry] = useState("");
  const [ycPage, setYcPage] = useState(1);

  // Professor filters (local state)
  const [profSearchInput, setProfSearchInput] = useState("");
  const [profSearch, setProfSearch] = useState("");
  const [profCollege, setProfCollege] = useState("");
  const [profDepartment, setProfDepartment] = useState("");
  const [profPage, setProfPage] = useState(1);

  // Debounce YC search
  useEffect(() => {
    const timer = setTimeout(() => {
      setYcSearch(ycSearchInput);
      setYcPage(1);
    }, 400);
    return () => clearTimeout(timer);
  }, [ycSearchInput]);

  // HR contact filters (local state)
  const [hrSearchInput, setHrSearchInput] = useState("");
  const [hrSearch, setHrSearch] = useState("");
  const [hrCompany, setHrCompany] = useState("");
  const [hrPage, setHrPage] = useState(1);

  // Debounce professor search
  useEffect(() => {
    const timer = setTimeout(() => {
      setProfSearch(profSearchInput);
      setProfPage(1);
    }, 400);
    return () => clearTimeout(timer);
  }, [profSearchInput]);

  // Debounce HR search
  useEffect(() => {
    const timer = setTimeout(() => {
      setHrSearch(hrSearchInput);
      setHrPage(1);
    }, 400);
    return () => clearTimeout(timer);
  }, [hrSearchInput]);

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
      setCityLimited(!!res.data.limited);
      setTotalUnlimited(res.data.totalUnlimited || 0);
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

  // ── Professor Stats query ──
  const { data: profStats } = useQuery<ProfessorStats>({
    queryKey: queryKeys.professors.stats(),
    queryFn: () => api.get("/professors/stats").then((r) => r.data),
    staleTime: 5 * 60 * 1000,
  });

  // ── Professor list query ──
  const profQueryParams: Record<string, string | number> = { page: profPage, limit: 24 };
  if (profSearch) profQueryParams["search"] = profSearch;
  if (profCollege) profQueryParams["college"] = profCollege;
  if (profDepartment) profQueryParams["department"] = profDepartment;

  const { data: profData, isLoading: profLoading } = useQuery<{
    professors: Professor[];
    pagination: Pagination;
    premiumRequired?: boolean;
  }>({
    queryKey: queryKeys.professors.list(profQueryParams),
    queryFn: () => api.get("/professors", { params: profQueryParams }).then((r) => r.data),
    enabled: activeTab === "professors",
  });

  const professors = profData?.professors ?? [];
  const profPagination = profData?.pagination ?? null;

  // ── HR Contact Stats query ──
  const { data: hrStats } = useQuery<HRContactStats>({
    queryKey: queryKeys.hrContacts.stats(),
    queryFn: () => api.get("/hr-contacts/stats").then((r) => r.data),
    staleTime: 5 * 60 * 1000,
  });

  // ── HR Contact list query ──
  const hrQueryParams: Record<string, string | number> = { page: hrPage, limit: 24 };
  if (hrSearch) hrQueryParams["search"] = hrSearch;
  if (hrCompany) hrQueryParams["company"] = hrCompany;

  const { data: hrData, isLoading: hrLoading } = useQuery<{
    contacts: HRContact[];
    pagination: Pagination;
    premiumRequired?: boolean;
  }>({
    queryKey: queryKeys.hrContacts.list(hrQueryParams),
    queryFn: () => api.get("/hr-contacts", { params: hrQueryParams }).then((r) => r.data),
    enabled: activeTab === "hr",
  });

  const hrContacts = hrData?.contacts ?? [];
  const hrPagination = hrData?.pagination ?? null;

  return (
    <div className="relative min-h-screen bg-white/50 dark:bg-gray-950">
      {/* Atmospheric background */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-150 h-150 bg-indigo-100 dark:bg-indigo-900/20 rounded-full blur-3xl opacity-40" />
        <div className="absolute -bottom-32 -left-32 w-125 h-125 bg-slate-100 dark:bg-slate-900/20 rounded-full blur-3xl opacity-40" />
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {!isInsideLayout && <Navbar />}
      <div className="relative max-w-7xl mx-auto px-4 py-8 pt-24 pb-12">
        <SEO
          title="Explore Companies"
          description="Discover companies hiring on InternHack. Browse by industry, size, and location. Read reviews, see tech stacks, and find your ideal workplace."
          keywords="company explorer, companies hiring, company reviews, tech companies, startup jobs, company directory, workplace reviews"
          canonicalUrl={canonicalUrl("/companies")}
        />

        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-8"
        >
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-gray-950 dark:text-white mb-3">
            Explore <span className="text-gradient-accent">Companies</span>
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-500 max-w-xl mx-auto">
            Discover companies across cities, read reviews, and find your ideal workplace
          </p>
        </motion.div>

        {/* ── Tabs ─────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6 flex items-center justify-center"
        >
        <div className="flex items-center gap-1 bg-white dark:bg-gray-900 rounded-xl p-1 border border-gray-100 dark:border-gray-800 shadow-sm overflow-x-auto">
          <button
            onClick={() => setActiveTab("all")}
            className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
              activeTab === "all"
                ? "bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-sm"
                : "text-gray-500 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            }`}
          >
            <Building2 className="w-4 h-4 shrink-0" />
            Companies
          </button>
          <button
            onClick={() => setActiveTab("yc")}
            className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
              activeTab === "yc"
                ? "bg-white dark:bg-gray-900 text-orange-700 dark:text-orange-400 shadow-sm"
                : "text-gray-500 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            }`}
          >
            <Rocket className="w-4 h-4 shrink-0" />
            YC
            <span className="px-1.5 py-0.5 bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-[10px] font-bold rounded-full border border-orange-100 dark:border-orange-800">
              {ycStats?.total ?? "..."}
            </span>
          </button>
          <button
            onClick={() => setActiveTab("professors")}
            className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
              activeTab === "professors"
                ? "bg-white dark:bg-gray-900 text-indigo-700 dark:text-indigo-400 shadow-sm"
                : "text-gray-500 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            }`}
          >
            <GraduationCap className="w-4 h-4 shrink-0" />
            Professors
            <span className="px-1.5 py-0.5 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-[10px] font-bold rounded-full border border-indigo-100 dark:border-indigo-800">
              {profStats?.total ?? "..."}
            </span>
          </button>
          <button
            onClick={() => setActiveTab("hr")}
            className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
              activeTab === "hr"
                ? "bg-white dark:bg-gray-900 text-teal-700 dark:text-teal-400 shadow-sm"
                : "text-gray-500 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            }`}
          >
            <Users className="w-4 h-4 shrink-0" />
            HR Contacts
            <span className="px-1.5 py-0.5 bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 text-[10px] font-bold rounded-full border border-teal-100 dark:border-teal-800">
              {hrStats?.total ?? "..."}
            </span>
          </button>
          <button
            onClick={() => setActiveTab("email")}
            className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
              activeTab === "email"
                ? "bg-white dark:bg-gray-900 text-purple-700 dark:text-purple-400 shadow-sm"
                : "text-gray-500 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            }`}
          >
            <Mail className="w-4 h-4 shrink-0" />
            Email Outreach
          </button>
        </div>
        </motion.div>

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
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex items-center gap-3 mb-6"
            >
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
            </motion.div>

            {/* Filter Panel */}
            {showFilters && (
              <div className="bg-white dark:bg-gray-900 p-5 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm mb-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
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
              <LoadingScreen compact />
            ) : companies.length === 0 ? (
              <div className="flex flex-col items-center justify-center text-center p-14 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200/80 dark:border-gray-800 shadow-sm">
                <div className="w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-2xl flex items-center justify-center mb-5">
                  <Users className="w-9 h-9 text-gray-400" />
                </div>
                <h3 className="text-gray-800 dark:text-gray-200 font-bold text-lg mb-2">
                  No companies found
                </h3>
                <p className="text-gray-400 dark:text-gray-500 text-sm max-w-xs leading-relaxed mx-auto">
                  Try adjusting your search or filters to discover more companies
                </p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {companies.map((company, i) => (
                    <motion.div
                      key={company.id}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.04, duration: 0.35 }}
                    >
                      <CompanyCard company={company} />
                    </motion.div>
                  ))}
                </div>

                {/* Upgrade banner for city-limited results */}
                {cityLimited && selectedCity && (
                  <div className="mt-6 flex items-center gap-3 p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl">
                    <Lock className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-amber-800 dark:text-amber-300">
                        Showing first 20 of {totalUnlimited} companies in {selectedCity}
                      </p>
                      <p className="text-xs text-amber-600 dark:text-amber-400 mt-0.5">
                        Upgrade to Premium to see all companies in this city.
                      </p>
                    </div>
                    <Link
                      to="/student/checkout"
                      className="shrink-0 px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white text-sm font-medium rounded-lg transition-colors no-underline"
                    >
                      Upgrade
                    </Link>
                  </div>
                )}

                {/* Pagination */}
                {pagination && (
                  <PaginationControls
                    currentPage={pagination.page}
                    totalPages={pagination.totalPages}
                    onPageChange={(p) => updateParam("page", String(p))}
                  />
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
                  <span className="font-medium text-gray-900 dark:text-white truncate max-w-25">
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
              <LoadingScreen compact />
            ) : ycCompanies.length === 0 ? (
              <div className="flex flex-col items-center justify-center text-center p-14 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200/80 dark:border-gray-800 shadow-sm">
                <div className="w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-2xl flex items-center justify-center mb-5">
                  <Rocket className="w-9 h-9 text-orange-400" />
                </div>
                <h3 className="text-gray-800 dark:text-gray-200 font-bold text-lg mb-2">
                  No YC companies found
                </h3>
                <p className="text-gray-400 dark:text-gray-500 text-sm max-w-xs leading-relaxed mx-auto">
                  Try adjusting your search or filters
                </p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {ycCompanies.map((company, i) => (
                    <motion.div
                      key={company.id}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.04, duration: 0.35 }}
                    >
                      <YCCard company={company} />
                    </motion.div>
                  ))}
                </div>

                {/* YC Pagination */}
                {ycPagination && (
                  <PaginationControls
                    currentPage={ycPage}
                    totalPages={ycPagination.totalPages}
                    onPageChange={setYcPage}
                  />
                )}
              </>
            )}
          </>
        )}
        {/* ── TAB: IIT Professors ───────────────────── */}
        {activeTab === "professors" && (
          <>
            {/* Professor-specific controls */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500" />
                <input
                  type="text"
                  value={profSearchInput}
                  onChange={(e) => setProfSearchInput(e.target.value)}
                  placeholder="Search professors by name, area of interest..."
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-200 dark:border-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-300 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500"
                />
              </div>

              {/* College dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 dark:border-gray-700 rounded-lg text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <GraduationCap className="w-4 h-4" />
                  College:{" "}
                  <span className="font-medium text-gray-900 dark:text-white truncate max-w-25">
                    {profCollege || "All"}
                  </span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
                <div className="absolute left-0 top-full z-20 mt-1 hidden min-w-[200px] max-h-[280px] overflow-y-auto rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-1 shadow-xl group-hover:block">
                  <button
                    onClick={() => { setProfCollege(""); setProfPage(1); }}
                    className={`block w-full rounded-lg px-3 py-2 text-left text-sm transition ${
                      !profCollege
                        ? "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 font-medium"
                        : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                    }`}
                  >
                    All
                  </button>
                  {(profStats?.colleges ?? []).map((c) => (
                    <button
                      key={c.name}
                      onClick={() => { setProfCollege(c.name); setProfPage(1); }}
                      className={`block w-full rounded-lg px-3 py-2 text-left text-sm transition ${
                        profCollege === c.name
                          ? "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 font-medium"
                          : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                      }`}
                    >
                      {c.name} ({c.count})
                    </button>
                  ))}
                </div>
              </div>

              {/* Department dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 dark:border-gray-700 rounded-lg text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <BookOpen className="w-4 h-4" />
                  Dept:{" "}
                  <span className="font-medium text-gray-900 dark:text-white truncate max-w-25">
                    {profDepartment || "All"}
                  </span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
                <div className="absolute left-0 top-full z-20 mt-1 hidden min-w-[240px] max-h-[280px] overflow-y-auto rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-1 shadow-xl group-hover:block">
                  <button
                    onClick={() => { setProfDepartment(""); setProfPage(1); }}
                    className={`block w-full rounded-lg px-3 py-2 text-left text-sm transition ${
                      !profDepartment
                        ? "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 font-medium"
                        : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                    }`}
                  >
                    All
                  </button>
                  {(profStats?.departments ?? []).map((d) => (
                    <button
                      key={d.name}
                      onClick={() => { setProfDepartment(d.name); setProfPage(1); }}
                      className={`block w-full rounded-lg px-3 py-2 text-left text-sm transition ${
                        profDepartment === d.name
                          ? "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 font-medium"
                          : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                      }`}
                    >
                      {d.name} ({d.count})
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear professor filters */}
              {(profSearch || profCollege || profDepartment) && (
                <button
                  onClick={() => { setProfSearchInput(""); setProfSearch(""); setProfCollege(""); setProfDepartment(""); setProfPage(1); }}
                  className="flex items-center gap-1 px-3 py-2.5 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-lg"
                >
                  <X className="w-4 h-4" /> Clear
                </button>
              )}
            </div>

            {/* Professor Results */}
            {profLoading ? (
              <LoadingScreen compact />
            ) : professors.length === 0 ? (
              <div className="flex flex-col items-center justify-center text-center p-14 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200/80 dark:border-gray-800 shadow-sm">
                <div className="w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-2xl flex items-center justify-center mb-5">
                  <GraduationCap className="w-9 h-9 text-indigo-400" />
                </div>
                <h3 className="text-gray-800 dark:text-gray-200 font-bold text-lg mb-2">
                  No professors found
                </h3>
                <p className="text-gray-400 dark:text-gray-500 text-sm max-w-xs leading-relaxed mx-auto">
                  Try adjusting your search or filters
                </p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {professors.map((prof, i) => (
                    <motion.div
                      key={prof.id}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.04, duration: 0.35 }}
                    >
                      <ProfessorCard professor={prof} />
                    </motion.div>
                  ))}
                </div>

                {/* Premium upgrade banner */}
                {profData?.premiumRequired && (
                  <div className="mt-6 flex items-center gap-3 p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl">
                    <Lock className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-amber-800 dark:text-amber-300">
                        First 100 professors are free
                      </p>
                      <p className="text-xs text-amber-600 dark:text-amber-400 mt-0.5">
                        Upgrade to Premium to access all {profStats?.total ?? 1584} IIT professors.
                      </p>
                    </div>
                    <Link
                      to="/student/checkout"
                      className="shrink-0 px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white text-sm font-medium rounded-lg transition-colors no-underline"
                    >
                      Upgrade
                    </Link>
                  </div>
                )}

                {/* Professor Pagination */}
                {profPagination && (
                  <PaginationControls
                    currentPage={profPage}
                    totalPages={profPagination.totalPages}
                    onPageChange={setProfPage}
                  />
                )}
              </>
            )}
          </>
        )}

        {/* ── TAB: HR Contacts ────────────────────────── */}
        {activeTab === "hr" && (
          <>
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500" />
                <input
                  type="text"
                  value={hrSearchInput}
                  onChange={(e) => setHrSearchInput(e.target.value)}
                  placeholder="Search by name, company, designation..."
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-200 dark:border-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-300 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500"
                />
              </div>

              <div className="relative group">
                <button className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 dark:border-gray-700 rounded-lg text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <Building2 className="w-4 h-4" />
                  Company:{" "}
                  <span className="font-medium text-gray-900 dark:text-white truncate max-w-25">
                    {hrCompany || "All"}
                  </span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
                <div className="absolute left-0 top-full z-20 mt-1 hidden min-w-[200px] max-h-[280px] overflow-y-auto rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-1 shadow-xl group-hover:block">
                  <button
                    onClick={() => { setHrCompany(""); setHrPage(1); }}
                    className={`block w-full rounded-lg px-3 py-2 text-left text-sm transition ${
                      !hrCompany
                        ? "bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400 font-medium"
                        : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                    }`}
                  >
                    All
                  </button>
                  {(hrStats?.companies ?? []).slice(0, 50).map((c) => (
                    <button
                      key={c.name}
                      onClick={() => { setHrCompany(c.name); setHrPage(1); }}
                      className={`block w-full rounded-lg px-3 py-2 text-left text-sm transition ${
                        hrCompany === c.name
                          ? "bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400 font-medium"
                          : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                      }`}
                    >
                      {c.name} ({c.count})
                    </button>
                  ))}
                </div>
              </div>

              {(hrSearch || hrCompany) && (
                <button
                  onClick={() => { setHrSearchInput(""); setHrSearch(""); setHrCompany(""); setHrPage(1); }}
                  className="flex items-center gap-1 px-3 py-2.5 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-lg"
                >
                  <X className="w-4 h-4" /> Clear
                </button>
              )}
            </div>

            {hrLoading ? (
              <LoadingScreen compact />
            ) : hrContacts.length === 0 ? (
              <div className="flex flex-col items-center justify-center text-center p-14 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200/80 dark:border-gray-800 shadow-sm">
                <div className="w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-2xl flex items-center justify-center mb-5">
                  <Users className="w-9 h-9 text-teal-400" />
                </div>
                <h3 className="text-gray-800 dark:text-gray-200 font-bold text-lg mb-2">
                  No HR contacts found
                </h3>
                <p className="text-gray-400 dark:text-gray-500 text-sm max-w-xs leading-relaxed mx-auto">
                  Try adjusting your search or filters
                </p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {hrContacts.map((contact, i) => (
                    <motion.div
                      key={contact.id}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.04, duration: 0.35 }}
                    >
                      <HRContactCard contact={contact} />
                    </motion.div>
                  ))}
                </div>

                {hrData?.premiumRequired && (
                  <div className="mt-6 flex items-center gap-3 p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl">
                    <Lock className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-amber-800 dark:text-amber-300">
                        First 100 contacts are free
                      </p>
                      <p className="text-xs text-amber-600 dark:text-amber-400 mt-0.5">
                        Upgrade to Premium to access all {hrStats?.total ?? 0} HR contacts.
                      </p>
                    </div>
                    <Link
                      to="/student/checkout"
                      className="shrink-0 px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white text-sm font-medium rounded-lg transition-colors no-underline"
                    >
                      Upgrade
                    </Link>
                  </div>
                )}

                {hrPagination && (
                  <PaginationControls
                    currentPage={hrPage}
                    totalPages={hrPagination.totalPages}
                    onPageChange={setHrPage}
                  />
                )}
              </>
            )}
          </>
        )}

        {/* ── TAB: Email Outreach ─────────────────────── */}
        {activeTab === "email" && <EmailCampaignTab />}
      </div>
      {!isInsideLayout && <Footer />}
    </div>
  );
}
