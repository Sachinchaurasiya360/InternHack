import { useState, useCallback } from "react";
import { useQuery, useMutation, useQueryClient, keepPreviousData } from "@tanstack/react-query";
import { Link } from "react-router";
import {
  ArrowLeft, ArrowRight, Building2, CheckCircle2, Circle,
  ChevronLeft, ChevronRight as ChevronRightIcon, ExternalLink,
  BookOpen, TrendingUp, Search, Bookmark, BookmarkCheck,
  StickyNote, ChevronDown, Lightbulb,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import type { DsaCompany, DsaPaginatedProblems, DsaCompanyProblem } from "../../../lib/types";
import { useAuthStore } from "../../../lib/auth.store";
import { SEO } from "../../../components/SEO";
import { canonicalUrl } from "../../../lib/seo.utils";
import { LoadingScreen } from "../../../components/LoadingScreen";

const DIFF_TEXT: Record<string, string> = {
  Easy: "text-green-600 dark:text-green-400",
  Medium: "text-yellow-600 dark:text-yellow-400",
  Hard: "text-red-600 dark:text-red-400",
};

const COMPANY_DOMAINS: Record<string, string> = {
  google: "google.com", amazon: "amazon.com", meta: "meta.com", facebook: "meta.com",
  microsoft: "microsoft.com", apple: "apple.com", netflix: "netflix.com",
  uber: "uber.com", airbnb: "airbnb.com", twitter: "x.com", x: "x.com",
  linkedin: "linkedin.com", adobe: "adobe.com", oracle: "oracle.com",
  salesforce: "salesforce.com", walmart: "walmart.com", bloomberg: "bloomberg.com",
  spotify: "spotify.com", stripe: "stripe.com", snap: "snap.com", snapchat: "snap.com",
  tiktok: "tiktok.com", bytedance: "bytedance.com", yahoo: "yahoo.com",
  flipkart: "flipkart.com", paytm: "paytm.com", swiggy: "swiggy.com",
  zomato: "zomato.com", phonepe: "phonepe.com", razorpay: "razorpay.com",
  intuit: "intuit.com", vmware: "vmware.com", cisco: "cisco.com",
  samsung: "samsung.com", intel: "intel.com", nvidia: "nvidia.com",
  paypal: "paypal.com", ibm: "ibm.com", tesla: "tesla.com",
  atlassian: "atlassian.com", shopify: "shopify.com", twilio: "twilio.com",
  databricks: "databricks.com", palantir: "palantir.com", snowflake: "snowflake.com",
  coinbase: "coinbase.com", robinhood: "robinhood.com", doordash: "doordash.com",
  lyft: "lyft.com", pinterest: "pinterest.com", reddit: "reddit.com",
  dropbox: "dropbox.com", slack: "slack.com", zoom: "zoom.us",
  qualcomm: "qualcomm.com", tcs: "tcs.com", infosys: "infosys.com",
  wipro: "wipro.com", hcl: "hcltech.com", accenture: "accenture.com",
  jpmorgan: "jpmorgan.com", "goldman sachs": "goldmansachs.com",
  "morgan stanley": "morganstanley.com", "de shaw": "deshaw.com",
  "deutsche bank": "db.com", barclays: "barclays.com", citi: "citi.com",
};

function CompanyLogo({ name }: { name: string }) {
  const [failed, setFailed] = useState(false);
  const domain = COMPANY_DOMAINS[name.toLowerCase()];

  if (!domain || failed) {
    return (
      <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
        <span className="text-lg font-bold text-gray-500 dark:text-gray-400 uppercase">
          {name.charAt(0)}
        </span>
      </div>
    );
  }

  return (
    <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center overflow-hidden">
      <img
        src={`https://www.google.com/s2/favicons?domain=${domain}&sz=128`}
        alt={name}
        className="w-7 h-7 object-contain"
        onError={() => setFailed(true)}
        loading="lazy"
      />
    </div>
  );
}

function externalLinks(p: DsaCompanyProblem) {
  const links: { href: string; label: string }[] = [];
  if (p.leetcodeUrl) links.push({ href: p.leetcodeUrl, label: "LeetCode" });
  if (p.gfgUrl) links.push({ href: p.gfgUrl, label: "GFG" });
  if (p.hackerrankUrl) links.push({ href: p.hackerrankUrl, label: "HackerRank" });
  if (p.codechefUrl) links.push({ href: p.codechefUrl, label: "CodeChef" });
  if (p.articleUrl) links.push({ href: p.articleUrl, label: "Article" });
  if (p.videoUrl) links.push({ href: p.videoUrl, label: "Video" });
  return links;
}

function cleanHint(html: string): string {
  return html
    .replace(/<div[^>]*>/gi, "")
    .replace(/<\/div>/gi, "")
    .replace(/<code>/gi, "<code class='px-1.5 py-0.5 bg-gray-200 dark:bg-gray-700 rounded text-sm font-mono'>");
}

export default function DsaCompaniesPage() {
  const { user } = useAuthStore();
  const queryClient = useQueryClient();
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [companySearch, setCompanySearch] = useState("");
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [expandedNotes, setExpandedNotes] = useState<Set<number>>(new Set());
  const [noteValues, setNoteValues] = useState<Record<number, string>>({});
  const [savingNotes, setSavingNotes] = useState<Set<number>>(new Set());

  const { data: companies, isLoading } = useQuery({
    queryKey: queryKeys.dsa.companies(),
    queryFn: () => api.get<DsaCompany[]>("/dsa/companies").then((r) => r.data),
    staleTime: 15 * 24 * 60 * 60 * 1000,
  });

  const { data: problemData, isLoading: problemsLoading } = useQuery({
    queryKey: queryKeys.dsa.company(selectedCompany!, page),
    queryFn: () => api.get<DsaPaginatedProblems>(`/dsa/companies/${selectedCompany}?page=${page}&limit=50`).then((r) => r.data),
    enabled: !!selectedCompany,
    placeholderData: keepPreviousData,
    staleTime: 15 * 24 * 60 * 60 * 1000,
  });

  const toggleMutation = useMutation({
    mutationFn: (problemId: number) =>
      api.post<{ problemId: number; solved: boolean }>(`/dsa/problems/${problemId}/toggle`).then((r) => r.data),
    onMutate: async (problemId) => {
      const key = queryKeys.dsa.company(selectedCompany!, page);
      await queryClient.cancelQueries({ queryKey: key });
      const prev = queryClient.getQueryData<DsaPaginatedProblems>(key);
      if (prev) {
        queryClient.setQueryData(key, {
          ...prev,
          problems: prev.problems.map((p) =>
            p.id === problemId ? { ...p, solved: !p.solved } : p,
          ),
        });
      }
      return { prev };
    },
    onError: (_err, _problemId, context) => {
      if (context?.prev) queryClient.setQueryData(queryKeys.dsa.company(selectedCompany!, page), context.prev);
      toast.error("Failed to update progress");
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.dsa.progress() });
    },
  });

  const bookmarkMutation = useMutation({
    mutationFn: (problemId: number) =>
      api.post<{ problemId: number; bookmarked: boolean }>(`/dsa/problems/${problemId}/bookmark`).then((r) => r.data),
    onMutate: async (problemId) => {
      const key = queryKeys.dsa.company(selectedCompany!, page);
      await queryClient.cancelQueries({ queryKey: key });
      const prev = queryClient.getQueryData<DsaPaginatedProblems>(key);
      if (prev) {
        queryClient.setQueryData(key, {
          ...prev,
          problems: prev.problems.map((p) =>
            p.id === problemId ? { ...p, bookmarked: !p.bookmarked } : p,
          ),
        });
      }
      return { prev };
    },
    onError: (_err, _problemId, context) => {
      if (context?.prev) queryClient.setQueryData(queryKeys.dsa.company(selectedCompany!, page), context.prev);
      toast.error("Failed to update bookmark");
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.dsa.bookmarks() });
    },
  });

  const saveNotes = useCallback(async (problemId: number, notes: string) => {
    setSavingNotes((prev) => new Set(prev).add(problemId));
    try {
      await api.put(`/dsa/problems/${problemId}/notes`, { notes });
      const key = queryKeys.dsa.company(selectedCompany!, page);
      const prev = queryClient.getQueryData<DsaPaginatedProblems>(key);
      if (prev) {
        queryClient.setQueryData(key, {
          ...prev,
          problems: prev.problems.map((p) =>
            p.id === problemId ? { ...p, notes: notes.trim() || null } : p,
          ),
        });
      }
    } catch {
      toast.error("Failed to save notes");
    } finally {
      setSavingNotes((prev) => {
        const next = new Set(prev);
        next.delete(problemId);
        return next;
      });
    }
  }, [queryClient, selectedCompany, page]);

  const toggleNotes = (problemId: number, currentNotes: string | null | undefined) => {
    setExpandedNotes((prev) => {
      const next = new Set(prev);
      if (next.has(problemId)) {
        next.delete(problemId);
        const val = noteValues[problemId];
        if (val !== undefined && val !== (currentNotes ?? "")) saveNotes(problemId, val);
      } else {
        next.add(problemId);
        setNoteValues((prev) => ({ ...prev, [problemId]: currentNotes ?? "" }));
      }
      return next;
    });
  };

  const filteredCompanies = companies?.filter((c) =>
    !companySearch || c.name.toLowerCase().includes(companySearch.toLowerCase())
  );

  if (isLoading) return <LoadingScreen />;

  return (
    <div className="relative pb-12">
      <SEO
        title="DSA by Company - Interview Questions"
        description="Practice DSA problems asked by top tech companies like Google, Amazon, Meta, and Microsoft."
        keywords="company interview questions, Google DSA, Amazon interview, tech interview problems"
        canonicalUrl={canonicalUrl("/learn/dsa/companies")}
      />

      {/* Atmospheric background */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-150 h-150 bg-linear-to-br from-indigo-100 to-cyan-100 dark:from-indigo-900/20 dark:to-cyan-900/20 rounded-full blur-3xl opacity-40" />
        <div className="absolute -bottom-32 -left-32 w-125 h-125 bg-linear-to-tr from-slate-100 to-violet-100 dark:from-slate-900/20 dark:to-violet-900/20 rounded-full blur-3xl opacity-40" />
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-10 mt-6"
      >
        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-gray-950 dark:text-white mb-3">
          Company-wise <span className="text-gradient-accent">Problems</span>
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-500 max-w-md mx-auto">
          Practice problems asked by top companies
        </p>
      </motion.div>

      {/* Stats */}
      {companies && companies.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8"
        >
          {[
            { icon: Building2, value: companies.length, label: "Companies", iconColor: "text-indigo-500" },
            { icon: BookOpen, value: companies.reduce((s, c) => s + c.count, 0), label: "Problems", iconColor: "text-violet-500" },
            { icon: TrendingUp, value: Math.round(companies.reduce((s, c) => s + c.count, 0) / companies.length), label: "Avg / Company", iconColor: "text-emerald-500" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
              className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-5 text-center"
            >
              <stat.icon className={`w-6 h-6 ${stat.iconColor} mx-auto mb-3`} />
              <p className="font-display text-2xl font-bold text-gray-950 dark:text-white">{stat.value}</p>
              <p className="text-xs text-gray-400 dark:text-gray-500 font-medium mt-0.5">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      )}

      {!selectedCompany ? (
        /* Company Grid */
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {/* Search */}
          <div className="relative max-w-sm mb-6">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500" />
            <input
              type="text"
              placeholder="Search companies..."
              value={companySearch}
              onChange={(e) => setCompanySearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-sm border border-gray-100 dark:border-gray-800 rounded-2xl bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-950/10 dark:focus:ring-white/10 transition-all"
            />
          </div>

          <div className="space-y-3">
            {filteredCompanies?.map((company, i) => (
              <motion.button
                key={company.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + Math.min(i, 20) * 0.02 }}
                onClick={() => { setSelectedCompany(company.name); setPage(1); }}
                className="group w-full flex items-center gap-5 bg-white dark:bg-gray-900 px-6 py-5 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50 transition-all duration-300 text-left"
              >
                <CompanyLogo name={company.name} />

                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold text-gray-950 dark:text-white capitalize truncate">
                    {company.name}
                  </h3>
                  <div className="flex items-center gap-3 mt-1 text-[11px] text-gray-400 dark:text-gray-500 font-medium">
                    <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-gray-500 dark:text-gray-400">
                      {company.count} problems
                    </span>
                  </div>
                </div>

                <ArrowRight className="w-5 h-5 text-gray-300 dark:text-gray-600 group-hover:text-gray-500 dark:group-hover:text-gray-400 group-hover:translate-x-0.5 transition-all shrink-0" />
              </motion.button>
            ))}

            {filteredCompanies?.length === 0 && (
              <div className="text-center py-20 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800">
                <Building2 className="w-10 h-10 text-indigo-500 mx-auto mb-4" />
                <h3 className="font-display text-lg font-bold text-gray-950 dark:text-white mb-2">No companies found</h3>
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  {companySearch ? "No companies match your search." : "Company data is not available yet."}
                </p>
              </div>
            )}
          </div>
        </motion.div>
      ) : (
        /* Problem List */
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <button
            onClick={() => { setSelectedCompany(null); setPage(1); }}
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            All Companies
          </button>

          <h2 className="text-xl font-bold text-gray-950 dark:text-white capitalize mb-4">
            {selectedCompany}
            {!problemsLoading && <span className="text-gray-400 dark:text-gray-500 font-normal text-base ml-2">({problemData?.total ?? 0} problems)</span>}
          </h2>

          {problemsLoading && !problemData ? (
            <div className="space-y-2">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-gray-100 dark:bg-gray-800 animate-pulse shrink-0" />
                    <div className="flex-1 space-y-2">
                      <div className="h-4 bg-gray-100 dark:bg-gray-800 rounded-lg animate-pulse w-3/4" />
                      <div className="h-3 bg-gray-100 dark:bg-gray-800 rounded-lg animate-pulse w-1/3" />
                    </div>
                    <div className="h-4 w-12 bg-gray-100 dark:bg-gray-800 rounded animate-pulse shrink-0" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
          <div className="space-y-2">
            {problemData?.problems.map((problem, idx) => {
              const isExpanded = expandedId === problem.id;
              const links = externalLinks(problem);

              return (
                <motion.div
                  key={problem.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.02 }}
                  className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl overflow-hidden hover:border-gray-200 dark:hover:border-gray-700 hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50 transition-all duration-300"
                >
                  {/* Problem row */}
                  <div
                    className="flex items-center gap-3 px-5 py-4 cursor-pointer"
                    onClick={() => setExpandedId(isExpanded ? null : problem.id)}
                  >
                    {/* Checkbox */}
                    {user && (
                      <button
                        onClick={(e) => { e.stopPropagation(); toggleMutation.mutate(problem.id); }}
                        className="shrink-0"
                      >
                        {problem.solved ? (
                          <CheckCircle2 className="w-5 h-5 text-green-500" />
                        ) : (
                          <Circle className="w-5 h-5 text-gray-300 dark:text-gray-600 hover:text-gray-400 dark:hover:text-gray-500 transition-colors" />
                        )}
                      </button>
                    )}

                    {/* Title */}
                    <div className="flex-1 min-w-0">
                      <Link
                        to={`/learn/dsa/problem/${problem.slug}`}
                        onClick={(e) => e.stopPropagation()}
                        className={`text-sm font-medium no-underline hover:underline ${problem.solved ? "text-gray-400 dark:text-gray-500 line-through" : "text-gray-950 dark:text-white"}`}
                      >
                        {problem.title}
                      </Link>
                      <div className="flex items-center gap-1.5 mt-1 flex-wrap">
                        {problem.acceptanceRate && (
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                            {problem.acceptanceRate}
                          </span>
                        )}
                        {problem.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className="text-[10px] px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Difficulty */}
                    <span className={`text-xs font-semibold shrink-0 ${DIFF_TEXT[problem.difficulty] || "text-gray-500"}`}>
                      {problem.difficulty}
                    </span>

                    {/* LeetCode link */}
                    {problem.leetcodeUrl && (
                      <a
                        href={problem.leetcodeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="w-7 h-7 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors shrink-0 no-underline"
                        title="LeetCode"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}

                    {/* Bookmark */}
                    {user && (
                      <button
                        onClick={(e) => { e.stopPropagation(); bookmarkMutation.mutate(problem.id); }}
                        className="shrink-0"
                      >
                        {problem.bookmarked ? (
                          <BookmarkCheck className="w-4 h-4 text-amber-500" />
                        ) : (
                          <Bookmark className="w-4 h-4 text-gray-300 dark:text-gray-600 hover:text-gray-400 dark:hover:text-gray-500 transition-colors" />
                        )}
                      </button>
                    )}

                    <ChevronDown className={`w-4 h-4 text-gray-400 dark:text-gray-500 shrink-0 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`} />
                  </div>

                  {/* Expanded dropdown */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-4 space-y-3">
                          {/* Hints */}
                          {problem.hints.length > 0 && (
                            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl p-4">
                              <div className="flex items-center gap-2 mb-2">
                                <Lightbulb className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                                <span className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                                  {problem.hints.length === 1 ? "Hint" : `Hints (${problem.hints.length})`}
                                </span>
                              </div>
                              <div className="space-y-2">
                                {problem.hints.map((hint, i) => (
                                  <div key={i} className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed flex gap-1">
                                    {problem.hints.length > 1 && <span className="font-medium text-gray-500 dark:text-gray-400 shrink-0">{i + 1}.</span>}
                                    <span dangerouslySetInnerHTML={{ __html: cleanHint(hint) }} />
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* External links */}
                          {links.length > 0 && (
                            <div className="flex items-center gap-2 flex-wrap">
                              {links.map((link) => (
                                <a
                                  key={link.href}
                                  href={link.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-lg text-xs font-medium hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white transition-colors no-underline"
                                >
                                  <ExternalLink className="w-3 h-3" />
                                  {link.label}
                                </a>
                              ))}
                              <Link
                                to={`/learn/dsa/problem/${problem.slug}`}
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 rounded-lg text-xs font-medium hover:bg-indigo-100 dark:hover:bg-indigo-900/40 transition-colors no-underline"
                              >
                                View Details
                              </Link>
                            </div>
                          )}

                          {/* Notes */}
                          {user && (
                            <div>
                              {expandedNotes.has(problem.id) ? (
                                <div>
                                  <textarea
                                    value={noteValues[problem.id] ?? ""}
                                    onChange={(e) => setNoteValues((prev) => ({ ...prev, [problem.id]: e.target.value }))}
                                    onBlur={() => {
                                      const val = noteValues[problem.id];
                                      if (val !== undefined && val !== (problem.notes ?? "")) saveNotes(problem.id, val);
                                    }}
                                    placeholder="Add your notes here..."
                                    rows={3}
                                    className="w-full px-4 py-3 text-sm border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50/50 dark:bg-gray-800/50 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-950/10 dark:focus:ring-white/10 focus:border-gray-300 dark:focus:border-gray-600 transition-all resize-none"
                                  />
                                  <div className="flex items-center justify-between mt-1.5">
                                    <span className="text-[11px] text-gray-400 dark:text-gray-500">
                                      {savingNotes.has(problem.id) ? "Saving..." : "Auto-saves on close"}
                                    </span>
                                    <button
                                      onClick={() => toggleNotes(problem.id, problem.notes)}
                                      className="text-[11px] text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors"
                                    >
                                      Close notes
                                    </button>
                                  </div>
                                </div>
                              ) : (
                                <button
                                  onClick={() => toggleNotes(problem.id, problem.notes)}
                                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded-lg text-xs font-medium hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white transition-colors"
                                >
                                  <StickyNote className="w-3 h-3" />
                                  {problem.notes ? "View notes" : "Add notes"}
                                </button>
                              )}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}

            {problemData?.problems.length === 0 && (
              <div className="text-center py-20 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800">
                <Building2 className="w-10 h-10 text-gray-400 mx-auto mb-4" />
                <h3 className="font-display text-lg font-bold text-gray-950 dark:text-white mb-2">No problems found</h3>
                <p className="text-sm text-gray-500 dark:text-gray-500">No problems found for this company.</p>
              </div>
            )}
          </div>
          )}

          {/* Pagination */}
          {problemData && problemData.totalPages > 1 && (
            <div className="flex items-center justify-center gap-3 mt-8">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page <= 1}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                Prev
              </button>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Page {page} of {problemData.totalPages}
              </span>
              <button
                onClick={() => setPage((p) => Math.min(problemData.totalPages, p + 1))}
                disabled={page >= problemData.totalPages}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                Next
                <ChevronRightIcon className="w-4 h-4" />
              </button>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
}
