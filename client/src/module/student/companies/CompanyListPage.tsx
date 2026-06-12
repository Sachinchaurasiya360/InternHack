import React, { useState, useEffect } from "react";
import { LoadingScreen } from "../../../components/LoadingScreen";
import { PaginationControls } from "../../../components/ui/PaginationControls";
import { Link, useSearchParams, useLocation } from "react-router";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
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
  ArrowUpRight,
  Plus,
  MessageCircle,
  Clock,
} from "lucide-react";
import { SEO } from "../../../components/SEO";
import { canonicalUrl } from "../../../lib/seo.utils";
import { Navbar } from "../../../components/Navbar";
import { Footer } from "../../../components/Footer";
import { ResultCount } from "../../../components/ui/ResultCount";
import api, { SERVER_URL } from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import { cn } from "@/lib/utils";
import type {
  Company,
  CityCount,
  Pagination,
  YCCompany,
  YCStats,
  InterviewCompanyListItem,
  InterviewCompanyListResponse,
} from "../../../lib/types";
import { listInterviewCompanies } from "../interviews/interviews-api";
import { GridBackground } from "../../../components/ui/GridBackground";


const SIZE_LABELS: Record<string, string> = {
  STARTUP: "Startup",
  SMALL: "Small",
  MEDIUM: "Medium",
  LARGE: "Large",
  ENTERPRISE: "Enterprise",
};

// ─── Shared editorial atoms ────────────────────────────
const cardBase =
  "group relative flex flex-col bg-white dark:bg-stone-900 p-5 rounded-md border border-stone-200 dark:border-white/10 hover:border-stone-400 dark:hover:border-white/30 transition-colors h-full no-underline";

function EditorialLabel({ children }: { children: React.ReactNode }) {
  return (
    <GridBackground />

      <div className="relative max-w-6xl mx-auto px-6 pt-8 pb-20">
        {/* Editorial header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-6 mb-10 flex flex-wrap items-end justify-between gap-4 border-b border-stone-200 dark:border-white/10 pb-8"
        >
          <div>
            <EditorialLabel>browse / companies</EditorialLabel>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-none">
              The people and places{" "}
              <span className="relative inline-block">
                <span className="relative z-10">hiring.</span>
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
              Partner companies, YC startups, and professors. One directory to map your next move.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[10px] font-mono uppercase tracking-widest text-stone-500">
            {typeof pagination?.total === "number" && (
              <span>
                companies{" "}
                <span className="text-stone-900 dark:text-stone-50 text-sm font-bold tabular-nums ml-1">
                  {pagination.total}
                </span>
              </span>
            )}
            {typeof ycStats?.total === "number" && (
              <span>
                yc{" "}
                <span className="text-stone-900 dark:text-stone-50 text-sm font-bold tabular-nums ml-1">
                  {ycStats.total}
                </span>
              </span>
            )}
            {typeof profStats?.total === "number" && (
              <span>
                profs{" "}
                <span className="text-stone-900 dark:text-stone-50 text-sm font-bold tabular-nums ml-1">
                  {profStats.total}
                </span>
              </span>
            )}
          </div>
        </motion.div>

        {/* Contribute strip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="mb-8"
        >
          <Link
            to={isInsideLayout ? "/student/companies/add" : "/companies/add"}
            className="group flex items-center gap-4 px-5 py-4 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md hover:border-stone-400 dark:hover:border-white/30 transition-colors no-underline"
          >
            <div className="w-9 h-9 rounded-md bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-white/10 flex items-center justify-center shrink-0">
              <Plus className="w-4 h-4 text-stone-600 dark:text-stone-400" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-stone-900 dark:text-stone-50">
                Add a company to the directory
              </p>
              <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mt-0.5">
                help the community / earn contributor points
              </p>
            </div>
            <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-lime-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all shrink-0" />
          </Link>
        </motion.div>

        {/* Tabs (underline style) */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8 border-b border-stone-200 dark:border-white/10"
        >
          <div className="flex items-center gap-0 overflow-x-auto -mb-px">
            {tabs.map((t) => {
              const active = activeTab === t.key;
              return (
                <button
                  key={t.key}
                  onClick={() => setActiveTab(t.key)}
                  className={cn(
                    "inline-flex items-center gap-2 px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors cursor-pointer",
                    active
                      ? "border-lime-400 text-stone-900 dark:text-stone-50"
                      : "border-transparent text-stone-500 hover:text-stone-900 dark:hover:text-stone-50"
                  )}
                >
                  <span
                    className={
                      active ? "text-stone-900 dark:text-stone-50" : "text-stone-400"
                    }
                  >
                    {t.icon}
                  </span>
                  {t.label}
                  {typeof t.count !== "undefined" && (
                    <span
                      className={cn(
                        "text-[10px] font-mono tabular-nums",
                        active ? "text-stone-400" : "text-stone-400"
                      )}
                    >
                      {t.count ?? "..."}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* ── TAB: All Companies ───────────────────────── */}
        {activeTab === "all" && (
          <>
            {/* City filter row */}
            {cities.length > 0 && (
              <div className="mb-6">
                <div className="flex items-center gap-2 overflow-x-auto pb-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mr-1 shrink-0">
                    city /
                  </span>
                  <button
                    onClick={() => updateParam("city", "")}
                    className={cn(
                      "px-3 py-1.5 rounded-md text-xs font-medium border transition-colors whitespace-nowrap cursor-pointer",
                      !selectedCity
                        ? "bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 border-stone-900 dark:border-stone-50"
                        : "bg-transparent text-stone-600 dark:text-stone-400 border-stone-300 dark:border-white/10 hover:border-stone-500 dark:hover:border-white/30 hover:text-stone-900 dark:hover:text-stone-50"
                    )}
                  >
                    All
                  </button>
                  {cities.map((c) => (
                    <button
                      key={c.city}
                      onClick={() => updateParam("city", c.city)}
                      className={cn(
                        "px-3 py-1.5 rounded-md text-xs font-medium border transition-colors whitespace-nowrap cursor-pointer",
                        selectedCity === c.city
                          ? "bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 border-stone-900 dark:border-stone-50"
                          : "bg-transparent text-stone-600 dark:text-stone-400 border-stone-300 dark:border-white/10 hover:border-stone-500 dark:hover:border-white/30 hover:text-stone-900 dark:hover:text-stone-50"
                      )}
                    >
                      {c.city}{" "}
                      <span
                        className={cn(
                          "font-mono text-[10px] ml-1",
                          selectedCity === c.city
                            ? "text-stone-300 dark:text-stone-500"
                            : "text-stone-400"
                        )}
                      >
                        {c.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Search + filter toggle */}
            <div className="flex flex-col sm:flex-row gap-2 mb-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => updateParam("search", e.target.value)}
                  placeholder="Search by name or industry..."
                  className="w-full pl-11 pr-4 py-3 bg-white dark:bg-stone-900 border border-stone-300 dark:border-white/10 rounded-md focus:outline-none focus:border-lime-400 transition-colors text-sm text-stone-900 dark:text-stone-50 placeholder-stone-400 dark:placeholder-stone-600"
                />
              </div>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={cn(
                  "inline-flex items-center justify-center gap-2 px-4 h-12 sm:h-auto rounded-md text-sm font-medium border transition-colors cursor-pointer",
                  showFilters
                    ? "bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 border-stone-900 dark:border-stone-50"
                    : "bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-300 border-stone-300 dark:border-white/10 hover:border-stone-500 dark:hover:border-white/30"
                )}
              >
                <Filter className="w-4 h-4" />
                Filters
              </button>
              <AnimatePresence>
                {hasActiveFilters && (
                  <motion.button
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.15 }}
                    onClick={clearFilters}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md text-xs font-mono uppercase tracking-widest text-stone-500 hover:text-red-500 transition-colors border-0 bg-transparent cursor-pointer"
                  >
                    <X className="w-3 h-3" /> clear
                  </motion.button>
                )}
              </AnimatePresence>
            </div>

            {/* Filter panel */}
            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden mb-6"
                >
                  <div className="bg-white dark:bg-stone-900 p-5 rounded-md border border-stone-200 dark:border-white/10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-2">
                        industry
                      </label>
                      <input
                        type="text"
                        value={industry}
                        onChange={(e) => updateParam("industry", e.target.value)}
                        placeholder="e.g. Technology"
                        className="w-full px-3 py-2 bg-white dark:bg-stone-950 border border-stone-300 dark:border-white/10 rounded-md text-sm focus:outline-none focus:border-lime-400 dark:text-stone-50"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-2">
                        company size
                      </label>
                      <select
                        value={size}
                        onChange={(e) => updateParam("size", e.target.value)}
                        className="w-full px-3 py-2 bg-white dark:bg-stone-950 border border-stone-300 dark:border-white/10 rounded-md text-sm focus:outline-none focus:border-lime-400 dark:text-stone-50"
                      >
                        <option value="">All sizes</option>
                        <option value="STARTUP">Startup</option>
                        <option value="SMALL">Small</option>
                        <option value="MEDIUM">Medium</option>
                        <option value="LARGE">Large</option>
                        <option value="ENTERPRISE">Enterprise</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-2">
                        hiring status
                      </label>
                      <select
                        value={hiring}
                        onChange={(e) => updateParam("hiring", e.target.value)}
                        className="w-full px-3 py-2 bg-white dark:bg-stone-950 border border-stone-300 dark:border-white/10 rounded-md text-sm focus:outline-none focus:border-lime-400 dark:text-stone-50"
                      >
                        <option value="">All</option>
                        <option value="true">Hiring now</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-2">
                        min rating
                      </label>
                      <select
                        value={minRating}
                        onChange={(e) => updateParam("minRating", e.target.value)}
                        className="w-full px-3 py-2 bg-white dark:bg-stone-950 border border-stone-300 dark:border-white/10 rounded-md text-sm focus:outline-none focus:border-lime-400 dark:text-stone-50"
                      >
                        <option value="">Any</option>
                        <option value="4">4+ stars</option>
                        <option value="3">3+ stars</option>
                        <option value="2">2+ stars</option>
                      </select>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Results */}
            {loading ? (
              <LoadingScreen compact />
            ) : companies.length === 0 ? (
              <>
                {pagination && <ResultCount currentCount={companies.length} totalCount={pagination.total} />}
                <EmptyState
                  icon={<Building2 className="w-5 h-5" />}
                  title="No companies found"
                  hint="try different search criteria"
                />
              </>
            ) : (
              <>
                {pagination && <ResultCount currentCount={companies.length} totalCount={pagination.total} />}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {companies.map((company, i) => (
                    <motion.div
                      key={company.id}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.03, duration: 0.3 }}
                    >
                     <CompanyCard company={company} insideLayout={isInsideLayout} />

                    </motion.div>
                  ))}
                </div>

                {cityLimited && selectedCity && (
                  <UpgradeBanner
                    title={`Showing first 20 of ${totalUnlimited} companies in ${selectedCity}`}
                    subtitle="upgrade to premium / see every company in this city"
                  />
                )}

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

        {/* ── TAB: YC ──────────────────────────────────── */}
        {activeTab === "yc" && (
          <>
            <div className="flex flex-col sm:flex-row gap-2 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                <input
                  type="text"
                  value={ycSearchInput}
                  onChange={(e) => setYcSearchInput(e.target.value)}
                  placeholder="Search YC companies..."
                  className="w-full pl-11 pr-4 py-3 bg-white dark:bg-stone-900 border border-stone-300 dark:border-white/10 rounded-md focus:outline-none focus:border-lime-400 transition-colors text-sm text-stone-900 dark:text-stone-50 placeholder-stone-400 dark:placeholder-stone-600"
                />
              </div>
              <EditorialDropdown
                icon={<Rocket className="w-3.5 h-3.5" />}
                label="batch"
                value={ycBatch}
                onChange={(v) => {
                  setYcBatch(v);
                  setYcPage(1);
                }}
                options={[
                  { value: "", label: "All" },
                  ...(ycStats?.batches ?? []).map((b) => ({
                    value: b.name,
                    label: b.name,
                    count: b.count,
                  })),
                ]}
              />
              <EditorialDropdown
                icon={<Filter className="w-3.5 h-3.5" />}
                label="industry"
                value={ycIndustry}
                onChange={(v) => {
                  setYcIndustry(v);
                  setYcPage(1);
                }}
                options={[
                  { value: "", label: "All" },
                  ...(ycStats?.industries ?? []).slice(0, 30).map((ind) => ({
                    value: ind.name,
                    label: ind.name,
                    count: ind.count,
                  })),
                ]}
              />
              <button
                type="button"
                onClick={() => {
                  setYcHiring((prev) => !prev);
                  setYcPage(1);
                }}
                className={cn(
                  "inline-flex items-center gap-2 h-10 px-3 rounded-md text-xs font-mono uppercase tracking-widest border transition-colors cursor-pointer shrink-0",
                  ycHiring
                    ? "bg-lime-500 text-stone-900 border-lime-500"
                    : "bg-white dark:bg-stone-900 text-stone-600 dark:text-stone-400 border-stone-300 dark:border-white/10 hover:border-stone-500 dark:hover:border-white/30"
                )}
              >
                <span className={cn("h-1.5 w-1.5 rounded-none", ycHiring ? "bg-stone-900" : "bg-lime-500")} />
                hiring
              </button>
              {(ycSearch || ycBatch || ycIndustry || ycHiring) && (
                <button
                  onClick={() => {
                    setYcSearchInput("");
                    setYcSearch("");
                    setYcBatch("");
                    setYcIndustry("");
                    setYcHiring(false);
                    setYcPage(1);
                  }}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md text-xs font-mono uppercase tracking-widest text-stone-500 hover:text-red-500 transition-colors border-0 bg-transparent cursor-pointer"
                >
                  <X className="w-3 h-3" /> clear
                </button>
              )}
            </div>

            {ycLoading ? (
              <Spinner />
            ) : ycCompanies.length === 0 ? (
              <>
                {ycPagination && <ResultCount currentCount={ycCompanies.length} totalCount={ycPagination.total} />}
                <EmptyState
                  icon={<Rocket className="w-5 h-5" />}
                  title="No YC companies found"
                  hint="try different search criteria"
                />
              </>
            ) : (
              <>
                {ycPagination && <ResultCount currentCount={ycCompanies.length} totalCount={ycPagination.total} />}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {ycCompanies.map((company, i) => (
                    <motion.div
                      key={company.id}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.03, duration: 0.3 }}
                    >
                     <YCCard company={company} insideLayout={isInsideLayout} />
                    </motion.div>
                  ))}
                </div>
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

        {/* ── TAB: Professors ──────────────────────────── */}
        {activeTab === "professors" && (
          <>
            <div className="flex flex-col sm:flex-row gap-2 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                <input
                  type="text"
                  value={profSearchInput}
                  onChange={(e) => setProfSearchInput(e.target.value)}
                  placeholder="Search by name, area of interest..."
                  className="w-full pl-11 pr-4 py-3 bg-white dark:bg-stone-900 border border-stone-300 dark:border-white/10 rounded-md focus:outline-none focus:border-lime-400 transition-colors text-sm text-stone-900 dark:text-stone-50 placeholder-stone-400 dark:placeholder-stone-600"
                />
              </div>
              <EditorialDropdown
                icon={<GraduationCap className="w-3.5 h-3.5" />}
                label="college"
                value={profCollege}
                onChange={(v) => {
                  setProfCollege(v);
                  setProfPage(1);
                }}
                options={[
                  { value: "", label: "All" },
                  ...(profStats?.colleges ?? []).map((c) => ({
                    value: c.name,
                    label: c.name,
                    count: c.count,
                  })),
                ]}
              />
              <EditorialDropdown
                icon={<BookOpen className="w-3.5 h-3.5" />}
                label="dept"
                value={profDepartment}
                onChange={(v) => {
                  setProfDepartment(v);
                  setProfPage(1);
                }}
                options={[
                  { value: "", label: "All" },
                  ...(profStats?.departments ?? []).map((d) => ({
                    value: d.name,
                    label: d.name,
                    count: d.count,
                  })),
                ]}
              />
              {(profSearch || profCollege || profDepartment) && (
                <button
                  onClick={() => {
                    setProfSearchInput("");
                    setProfSearch("");
                    setProfCollege("");
                    setProfDepartment("");
                    setProfPage(1);
                  }}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md text-xs font-mono uppercase tracking-widest text-stone-500 hover:text-red-500 transition-colors border-0 bg-transparent cursor-pointer"
                >
                  <X className="w-3 h-3" /> clear
                </button>
              )}
            </div>

            {profLoading ? (
              <Spinner />
            ) : professors.length === 0 ? (
              <>
                {profPagination && <ResultCount currentCount={professors.length} totalCount={profPagination.total} />}
                <EmptyState
                  icon={<GraduationCap className="w-5 h-5" />}
                  title="No professors found"
                  hint="try different search criteria"
                />
              </>
            ) : (
              <>
                {profPagination && <ResultCount currentCount={professors.length} totalCount={profPagination.total} />}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {professors.map((prof, i) => (
                    <motion.div
                      key={prof.id}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.03, duration: 0.3 }}
                    >
                      <ProfessorCard professor={prof} />
                    </motion.div>
                  ))}
                </div>

                {profData?.premiumRequired && (
                  <UpgradeBanner
                    title="First 100 professors are free"
                    subtitle={`upgrade to premium / unlock all ${profStats?.total ?? 1584} iit professors`}
                  />
                )}

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

        {/* ── TAB: Interview Experiences ───────────────── */}
        {activeTab === "interviews" && (
          <>
            {/* Intro strip with "Share yours" CTA */}
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-5 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md">
              <div className="min-w-0">
                <p className="text-sm font-bold text-stone-900 dark:text-stone-50">
                  Real interviews, real reviews
                </p>
                <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mt-1">
                  rounds, questions, ratings, work culture / earn a contributor badge when you share
                </p>
              </div>
              <Link
                to={isInsideLayout ? "/student/interviews/share" : "/student/interviews/share"}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-lime-400 hover:bg-lime-500 text-stone-900 rounded-md text-sm font-semibold transition-colors no-underline shrink-0"
              >
                <Plus className="w-4 h-4" />
                Share experience
              </Link>
            </div>

            {/* Search */}
            <div className="flex flex-col sm:flex-row gap-2 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                <input
                  type="text"
                  value={interviewSearchInput}
                  onChange={(e) => setInterviewSearchInput(e.target.value)}
                  placeholder="Search by company..."
                  className="w-full pl-11 pr-4 py-3 bg-white dark:bg-stone-900 border border-stone-300 dark:border-white/10 rounded-md focus:outline-none focus:border-lime-400 transition-colors text-sm text-stone-900 dark:text-stone-50 placeholder-stone-400 dark:placeholder-stone-600"
                />
              </div>
              {interviewSearch && (
                <button
                  onClick={() => {
                    setInterviewSearchInput("");
                    setInterviewSearch("");
                    setInterviewPage(1);
                  }}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md text-xs font-mono uppercase tracking-widest text-stone-500 hover:text-red-500 transition-colors border-0 bg-transparent cursor-pointer"
                >
                  <X className="w-3 h-3" /> clear
                </button>
              )}
            </div>

            {interviewLoading ? (
              <Spinner />
            ) : interviewCompanies.length === 0 ? (
              <>
                {interviewPagination && <ResultCount currentCount={interviewCompanies.length} totalCount={interviewPagination.total} />}
                <EmptyState
                  icon={<MessageCircle className="w-5 h-5" />}
                  title="No interview experiences yet"
                  hint="be the first to share, earn a badge"
                />
              </>
            ) : (
              <>
                {interviewPagination && <ResultCount currentCount={interviewCompanies.length} totalCount={interviewPagination.total} />}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {interviewCompanies.map((company, i) => (
                    <motion.div
                      key={company.id}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.03, duration: 0.3 }}
                    >
                      <InterviewCompanyCard company={company} insideLayout={isInsideLayout} />
                    </motion.div>
                  ))}
                </div>

                {interviewPagination && interviewPagination.totalPages > 1 && (
                  <PaginationControls
                    currentPage={interviewPage}
                    totalPages={interviewPagination.totalPages}
                    onPageChange={setInterviewPage}
                  />
                )}
              </>
            )}
          </>
        )}

      </div>
      {!isInsideLayout && <Footer />}
    </div>
  );
}
