import { useState, useCallback, useMemo, memo } from "react";
import { useQuery, useMutation, useQueryClient, keepPreviousData } from "@tanstack/react-query";
import { Link } from "react-router";
import {
  ArrowRight, Building2, CheckCircle2, Circle,
  ChevronLeft, ChevronRight, ExternalLink,
  BookOpen, TrendingUp, Search, Bookmark, BookmarkCheck,
  StickyNote, ChevronDown, Lightbulb,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import toast from "@/components/ui/toast";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import type { DsaCompany, DsaPaginatedProblems, DsaCompanyProblem, DsaCompanyTrackStats } from "../../../lib/types";
import { useAuthStore } from "../../../lib/auth.store";
import { SEO } from "../../../components/SEO";
import { canonicalUrl } from "../../../lib/seo.utils";
import { LoadingScreen } from "../../../components/LoadingScreen";
import { sanitizeHtml, cleanHint } from "../../../lib/sanitize";
import { Button } from "../../../components/ui/button";
import { DIFF_COLOR } from "../../../lib/difficulty-styles";

/* ── Company tier classification ─────────────────────────────────────── */

type CompanyTier =
  | "FAANG+"
  | "PRODUCT_BASED"
  | "BIG_TECH"
  | "STARTUPS"
  | "SERVICE_BASED"
  | "OTHERS";

const TIER_LABELS: Record<CompanyTier, string> = {
  "FAANG+": "FAANG+",
  PRODUCT_BASED: "Product Based",
  BIG_TECH: "Big Tech",
  STARTUPS: "Startups",
  SERVICE_BASED: "Service Based",
  OTHERS: "Others",
};

const TIER_ORDER: CompanyTier[] = [
  "FAANG+",
  "PRODUCT_BASED",
  "BIG_TECH",
  "STARTUPS",
  "SERVICE_BASED",
  "OTHERS",
];

/** FAANG+ (lowercased). */
const FAANG_PLUS = new Set([
  "google", "amazon", "apple", "meta", "facebook", "microsoft", "netflix",
]);

/** Product Based companies (lowercased). */
const PRODUCT_BASED_COS = new Set([
  "atlassian", "bloomberg", "flipkart", "goldman sachs", "linkedin", "adobe",
  "airbnb", "uber", "spotify", "stripe", "reddit", "twitter", "pinterest", "shopify",
]);

/** Big Tech beyond FAANG (lowercased). */
const BIG_TECH_COS = new Set([
  "nvidia", "tesla", "openai", "ibm", "oracle", "samsung", "qualcomm", "intel", "salesforce", "cisco",
]);

/** Startups (lowercased). */
const STARTUPS_COS = new Set([
  "ola", "paytm", "groww", "zerodha", "nykaa", "udaan", "lenskart", "rapido", "slice", "bharatpe", "urban company"
]);

/** Service Based / IT Services & Consulting (lowercased). */
const SERVICE_BASED_COS = new Set([
  "tcs", "infosys", "wipro", "cognizant", "accenture", "capgemini", "hcl", "deloitte",
]);

function getCompanyTier(name: string): CompanyTier {
  const key = name.toLowerCase().trim();
  if (FAANG_PLUS.has(key)) return "FAANG+";
  if (PRODUCT_BASED_COS.has(key)) return "PRODUCT_BASED";
  if (BIG_TECH_COS.has(key)) return "BIG_TECH";
  if (STARTUPS_COS.has(key)) return "STARTUPS";
  if (SERVICE_BASED_COS.has(key)) return "SERVICE_BASED";
  return "OTHERS";
}

/* ── Featured questions per tier ─────────────────────────────────────── */

interface FeaturedQuestion {
  title: string;
  slug: string;
  difficulty: string;
  companies: string[];
}

const FEATURED_QUESTIONS: FeaturedQuestion[] = [
  { title: "Two Sum", slug: "two-sum", difficulty: "Easy", companies: ["Google", "Amazon", "Meta"] },
  { title: "LRU Cache", slug: "lru-cache", difficulty: "Medium", companies: ["Amazon", "Microsoft", "Meta"] },
  { title: "Merge K Sorted Lists", slug: "merge-k-sorted-lists", difficulty: "Hard", companies: ["Google", "Meta", "Apple"] },
  { title: "Median of Two Sorted Arrays", slug: "median-of-two-sorted-arrays", difficulty: "Hard", companies: ["Google", "Amazon", "Microsoft"] },
  { title: "Group Anagrams", slug: "group-anagrams", difficulty: "Medium", companies: ["Flipkart", "Uber", "Spotify"] },
  { title: "Longest Substring Without Repeating Characters", slug: "longest-substring-without-repeating-characters", difficulty: "Medium", companies: ["LinkedIn", "Airbnb", "Stripe"] },
  { title: "Word Break", slug: "word-break", difficulty: "Medium", companies: ["Reddit", "Shopify", "Pinterest"] },
  { title: "Clone Graph", slug: "clone-graph", difficulty: "Medium", companies: ["Twitter", "Uber", "Flipkart"] },
  { title: "Design HashMap", slug: "design-hashmap", difficulty: "Easy", companies: ["Oracle", "Salesforce", "Adobe"] },
  { title: "Number of Islands", slug: "number-of-islands", difficulty: "Medium", companies: ["Samsung", "IBM", "Cisco"] },
  { title: "Course Schedule", slug: "course-schedule", difficulty: "Medium", companies: ["Adobe", "Nvidia"] },
  { title: "Serialize and Deserialize Binary Tree", slug: "serialize-and-deserialize-binary-tree", difficulty: "Hard", companies: ["Oracle", "Samsung", "Qualcomm"] },
  { title: "Valid Parentheses", slug: "valid-parentheses", difficulty: "Easy", companies: ["Ola", "Groww", "Zerodha"] },
  { title: "Maximum Subarray", slug: "maximum-subarray", difficulty: "Medium", companies: ["Paytm", "Nykaa", "Udaan"] },
  { title: "Reverse Linked List", slug: "reverse-linked-list", difficulty: "Easy", companies: ["Lenskart", "Rapido", "Slice"] },
  { title: "Binary Tree Level Order Traversal", slug: "binary-tree-level-order-traversal", difficulty: "Medium", companies: ["Urban Company", "BharatPe", "Groww"] },
  { title: "Fibonacci Number", slug: "fibonacci-number", difficulty: "Easy", companies: ["TCS", "Infosys", "Wipro"] },
  { title: "Palindrome Linked List", slug: "palindrome-linked-list", difficulty: "Easy", companies: ["Cognizant", "Accenture", "Capgemini"] },
  { title: "Best Time to Buy and Sell Stock", slug: "best-time-to-buy-and-sell-stock", difficulty: "Easy", companies: ["TCS", "Infosys", "HCL"] },
  { title: "Rotate Array", slug: "rotate-array", difficulty: "Medium", companies: ["Wipro", "Accenture", "Deloitte"] },
  { title: "Contains Duplicate", slug: "contains-duplicate", difficulty: "Easy", companies: [] },
  { title: "Move Zeroes", slug: "move-zeroes", difficulty: "Easy", companies: [] },
  { title: "3Sum", slug: "3sum", difficulty: "Medium", companies: [] },
];

function getTierFeaturedQuestions(tier: CompanyTier): FeaturedQuestion[] {
  return FEATURED_QUESTIONS.filter((q) => {
    if (q.companies.length === 0) {
      return tier === "OTHERS";
    }
    return q.companies.some((company) => getCompanyTier(company) === tier);
  });
}

const FeaturedQuestionCard = memo(function FeaturedQuestionCard({ q }: { q: FeaturedQuestion }) {
  return (
    <Link
      to={`/learn/dsa/problem/${q.slug}`}
      className="group block bg-white dark:bg-stone-900 px-4 py-3 rounded-md border border-stone-200 dark:border-white/10 hover:border-stone-400 dark:hover:border-white/25 transition-colors no-underline"
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <span className={`text-[10px] font-mono uppercase tracking-widest ${DIFF_COLOR[q.difficulty] || "text-stone-500"}`}>
              / {q.difficulty.toLowerCase()}
            </span>
            <span className="text-[10px] font-mono text-stone-400 dark:text-stone-500 uppercase tracking-wider">
              • popular question
            </span>
          </div>
          <h4 className="text-sm font-bold text-stone-900 dark:text-stone-50 group-hover:text-lime-700 dark:group-hover:text-lime-400 transition-colors truncate">
            {q.title}
          </h4>
          {q.companies && q.companies.length > 0 && (
            <p className="text-[10px] font-mono text-stone-500 dark:text-stone-400 mt-1 truncate">
              Asked by: {q.companies.join(", ")}
            </p>
          )}
        </div>
        <ArrowRight className="w-4 h-4 text-stone-400 dark:text-stone-500 group-hover:text-lime-600 dark:group-hover:text-lime-400 group-hover:translate-x-0.5 transition-all shrink-0" />
      </div>
    </Link>
  );
});

function TierFeaturedQuestions({ tier, search }: { tier: CompanyTier; search?: string }) {
  const questions = useMemo(() => {
    let q = getTierFeaturedQuestions(tier);
    if (search) {
      const s = search.toLowerCase();
      q = q.filter(x => x.companies.some(c => c.toLowerCase().includes(s)));
    }
    return q;
  }, [tier, search]);
  if (!questions || questions.length === 0) return null;

  return (
    <div className="space-y-2 mb-4">
      {questions.map((q) => (
        <FeaturedQuestionCard key={q.slug} q={q} />
      ))}
    </div>
  );
}

function CompanyInitial({ name }: { name: string }) {
  return (
    <div className="w-11 h-11 rounded-md bg-stone-100 dark:bg-white/5 border border-stone-200 dark:border-white/10 flex items-center justify-center">
      <span className="text-base font-bold text-stone-700 dark:text-stone-300 uppercase">
        {name.charAt(0)}
      </span>
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

export default function DsaCompaniesPage() {
  const { user } = useAuthStore();
  const queryClient = useQueryClient();
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [companySearch, setCompanySearch] = useState("");
  const [tierFilter, setTierFilter] = useState<CompanyTier | "ALL">("ALL");
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [expandedNotes, setExpandedNotes] = useState<Set<number>>(new Set());
  const [noteValues, setNoteValues] = useState<Record<number, string>>({});
  const [savingNotes, setSavingNotes] = useState<Set<number>>(new Set());

  const { data: companies = [], isPending: companiesLoading } = useQuery({
    queryKey: queryKeys.dsa.companies(),
    queryFn: () => api.get<DsaCompany[]>("/dsa/companies").then((r) => r.data),
    staleTime: 15 * 24 * 60 * 60 * 1000,
    retry: 1,
  });

  const { data: problemData, isLoading: problemsLoading } = useQuery({
    queryKey: queryKeys.dsa.company(selectedCompany!, page),
    queryFn: () => api.get<DsaPaginatedProblems>(`/dsa/companies/${selectedCompany}?page=${page}&limit=50`).then((r) => r.data),
    enabled: !!selectedCompany,
    placeholderData: keepPreviousData,
    staleTime: 15 * 24 * 60 * 60 * 1000,
  });

  const { data: trackStats } = useQuery({
    queryKey: queryKeys.dsa.companyTrackStats(selectedCompany!),
    queryFn: () => api.get<DsaCompanyTrackStats>(`/dsa/companies/${selectedCompany}/track-stats`).then((r) => r.data),
    enabled: !!selectedCompany,
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
      if (selectedCompany) {
        queryClient.invalidateQueries({ queryKey: queryKeys.dsa.companyTrackStats(selectedCompany) });
      }
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

  const filteredCompanies = useMemo(() => {
    return companies.filter((c) => {
      if (companySearch && !c.name.toLowerCase().includes(companySearch.toLowerCase())) return false;
      if (tierFilter !== "ALL" && getCompanyTier(c.name) !== tierFilter) return false;
      return true;
    });
  }, [companies, companySearch, tierFilter]);

  /** Group filtered companies by tier, sorted by count desc within each tier. */
  const groupedCompanies = useMemo(() => {
    const groups: Record<CompanyTier, typeof filteredCompanies> = {
      "FAANG+": [],
      PRODUCT_BASED: [],
      BIG_TECH: [],
      STARTUPS: [],
      SERVICE_BASED: [],
      OTHERS: [],
    };
    for (const c of filteredCompanies) {
      groups[getCompanyTier(c.name)].push(c);
    }
    // Sort each tier by problem count descending
    for (const tier of TIER_ORDER) {
      groups[tier].sort((a, b) => b.count - a.count);
    }
    return groups;
  }, [filteredCompanies]);

  const filteredFeatured = useMemo(() => {
    if (!companySearch) return FEATURED_QUESTIONS;
    const s = companySearch.toLowerCase();
    return FEATURED_QUESTIONS.filter((q) => 
      q.companies.some((c) => c.toLowerCase().includes(s))
    );
  }, [companySearch]);

  const hasFeaturedMatches = useMemo(() => {
    if (tierFilter === "ALL") return filteredFeatured.length > 0;
    const s = companySearch.toLowerCase();
    return getTierFeaturedQuestions(tierFilter).some(q => 
      !companySearch || q.companies.some(c => c.toLowerCase().includes(s))
    );
  }, [companySearch, tierFilter, filteredFeatured]);

  if (companiesLoading && companies.length === 0) return <LoadingScreen />;

  // Global stats — always the same regardless of selected tier
  const uniqueCompanyNames = new Set<string>();
  for (const c of companies) uniqueCompanyNames.add(c.name.toLowerCase());
  for (const q of FEATURED_QUESTIONS) {
    for (const co of q.companies) uniqueCompanyNames.add(co.toLowerCase());
  }

  const totalCompanies = uniqueCompanyNames.size;
  const totalCompanyProblems = companies.reduce((s, c) => s + c.count, 0) + FEATURED_QUESTIONS.length;
  const avgPerCompany = totalCompanies > 0 ? Math.round(totalCompanyProblems / totalCompanies) : 0;

  return (
    <div className="bg-stone-50 dark:bg-stone-950 min-h-[calc(100vh-4rem)]">
      <SEO
        title="DSA by Company, Interview Questions"
        description="Practice DSA problems asked by top tech companies like Google, Amazon, Meta, and Microsoft."
        keywords="company interview questions, Google DSA, Amazon interview, tech interview problems"
        canonicalUrl={canonicalUrl("/learn/dsa/companies")}
      />

      <div className="max-w-4xl mx-auto px-3 sm:px-8 py-8">
        {!selectedCompany ? (
          <>
            {/* Editorial header */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-8"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="h-1 w-1 bg-lime-400"></div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
                  dsa / companies
                </span>
              </div>
              <div className="flex items-end justify-between gap-4 flex-wrap">
                <div className="min-w-0 flex-1">
                  <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-50 mb-1.5">
                    Practice what they ask.
                  </h1>
                  <p className="text-sm text-stone-600 dark:text-stone-400 max-w-2xl">
                    Problems sourced from interviews at top tech companies, ranked by frequency.
                  </p>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 flex-wrap">
                  <span>
                    <span className="text-stone-900 dark:text-stone-50 tabular-nums">{totalCompanies}</span>
                    <span className="text-stone-400 dark:text-stone-600"> companies</span>
                  </span>
                  <span className="h-1 w-1 bg-stone-300 dark:bg-stone-700" />
                  <span>
                    <span className="text-stone-900 dark:text-stone-50 tabular-nums">{totalCompanyProblems}</span>
                    <span className="text-stone-400 dark:text-stone-600"> problems</span>
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Stats strip */}
            {companies.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-0 border-t border-l border-stone-200 dark:border-white/10 mb-6"
              >
                {[
                  { icon: Building2, value: totalCompanies, label: "companies" },
                  { icon: BookOpen, value: totalCompanyProblems, label: "problems" },
                  { icon: TrendingUp, value: avgPerCompany, label: "avg / company" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-start gap-3 p-3 sm:p-4 bg-white dark:bg-stone-900 border-r border-b border-stone-200 dark:border-white/10"
                  >
                    <div className="w-8 h-8 rounded-md bg-stone-100 dark:bg-white/5 flex items-center justify-center shrink-0">
                      <stat.icon className="w-4 h-4 text-lime-600 dark:text-lime-400" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-xl font-bold tracking-tight text-stone-900 dark:text-stone-50 tabular-nums">
                        {stat.value}
                      </span>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 truncate">
                        / {stat.label}
                      </span>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* Search */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="relative mb-6"
            >
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
              <input
                type="text"
                placeholder="Search companies..."
                value={companySearch}
                onChange={(e) => setCompanySearch(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-white dark:bg-stone-900 border border-stone-300 dark:border-white/10 rounded-md focus:outline-none focus:border-lime-400 transition-colors text-sm text-stone-900 dark:text-stone-50 placeholder-stone-400 dark:placeholder-stone-600"
              />
            </motion.div>

            {/* Tier filter chips */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 }}
              className="flex items-center gap-2 flex-wrap mb-6"
            >
              {(["ALL", ...TIER_ORDER] as const).map((tier) => {
                const isActive = tierFilter === tier;
                const label = tier === "ALL" ? "All" : TIER_LABELS[tier];
                return (
                  <Button
                    key={tier}
                    variant={isActive ? "mono" : "outline"}
                    size="sm"
                    onClick={() => setTierFilter(tier)}
                    className={`font-mono uppercase tracking-widest text-[11px] ${isActive ? "text-lime-400 dark:text-stone-900" : "text-stone-600 dark:text-stone-400"}`}
                  >
                    {label}
                  </Button>
                );
              })}
            </motion.div>

            {/* Section header (only when viewing ALL – tier sections have their own) */}
            {tierFilter === "ALL" && (
              <div className="flex items-center gap-2 mb-3">
                <div className="h-1 w-1 bg-lime-400"></div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
                  companies / {totalCompanies}
                </span>
              </div>
            )}

            {filteredCompanies.length === 0 && companySearch && !hasFeaturedMatches && (
              <div className="py-20 text-center border border-dashed border-stone-300 dark:border-white/10 rounded-md">
                <Building2 className="w-8 h-8 text-stone-400 mx-auto mb-3" />
                <p className="text-sm text-stone-600 dark:text-stone-400">No companies found.</p>
                <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mt-2">
                  try a different search term
                </p>
              </div>
            )}

            {/* Unified Featured questions list (only shown when viewing "ALL") */}
            {tierFilter === "ALL" && filteredFeatured.length > 0 && (
              <div className="space-y-2 mb-8">
                {filteredFeatured.map((q) => (
                  <FeaturedQuestionCard key={q.slug} q={q} />
                ))}
              </div>
            )}

            {/* Grouped company sections */}
            <div className="space-y-8">
              {TIER_ORDER.filter(
                (tier) => tierFilter === "ALL" || tierFilter === tier,
              ).map((tier) => {
                const group = groupedCompanies[tier];

                const tierFeatured = getTierFeaturedQuestions(tier);
                const tierCompanyNames = new Set<string>();
                for (const c of group) tierCompanyNames.add(c.name.toLowerCase());
                for (const q of tierFeatured) {
                  for (const co of q.companies) {
                    if (getCompanyTier(co) === tier) tierCompanyNames.add(co.toLowerCase());
                  }
                }
                const tierCompanyCount = tierCompanyNames.size;

                // In ALL view, hide tiers with no companies to display
                if (tierFilter === "ALL" && group.length === 0) return null;

                return (
                  <section key={tier}>
                    {/* Tier section header */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="h-1 w-1 bg-lime-400"></div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
                        {TIER_LABELS[tier]} / {tierCompanyCount}
                      </span>
                    </div>

                    {/* Featured questions for this tier */}
                    {tierFilter !== "ALL" && <TierFeaturedQuestions tier={tier} search={companySearch} />}

                    <div className="space-y-2">
                      {group.map((company, i) => {
                        const num = String(i + 1).padStart(2, "0");
                        return (
                          <motion.button
                            key={company.name}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: Math.min(i, 20) * 0.02 }}
                            onClick={() => { setSelectedCompany(company.name); setPage(1); }}
                            className="group w-full flex items-center gap-3 sm:gap-4 bg-white dark:bg-stone-900 px-3 sm:px-5 py-3 sm:py-4 rounded-md border border-stone-200 dark:border-white/10 hover:border-stone-400 dark:hover:border-white/25 transition-colors text-left"
                          >
                            <div className="flex flex-col items-center gap-1 shrink-0">
                              <CompanyInitial name={company.name} />
                              <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400 dark:text-stone-500">
                                / {num}
                              </span>
                            </div>

                            <div className="flex-1 min-w-0">
                              <h3 className="text-sm font-bold tracking-tight text-stone-900 dark:text-stone-50 capitalize truncate group-hover:text-lime-700 dark:group-hover:text-lime-400 transition-colors">
                                {company.name}
                              </h3>
                              <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 tabular-nums mt-1 block">
                                {company.count} problems
                              </span>
                              {user && (
                                <div className="mt-2 flex items-center gap-2">
                                  <div className="flex-1 h-1 bg-stone-200 dark:bg-stone-700 rounded-full overflow-hidden">
                                    <div
                                      className="h-full bg-lime-500 rounded-full transition-all duration-500"
                                      style={{ width: `${Math.round((company.solved / company.count) * 100)}%` }}
                                    />
                                  </div>
                                  <span className="text-[10px] font-mono tabular-nums text-stone-500 dark:text-stone-400">
                                    {company.solved}/{company.count}
                                  </span>
                                </div>
                              )}
                            </div>

                            <ArrowRight className="w-4 h-4 text-stone-400 dark:text-stone-500 group-hover:text-lime-600 dark:group-hover:text-lime-400 group-hover:translate-x-0.5 transition-all shrink-0" />
                          </motion.button>
                        );
                      })}

                      {/* Small empty state for when a tier has no companies and no featured questions */}
                      {group.length === 0 && !companySearch && (getTierFeaturedQuestions(tier).length === 0) && (
                        <div className="px-4 py-3 bg-stone-50 dark:bg-white/[0.02] border border-stone-200 dark:border-white/10 rounded-md text-center">
                          <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
                            No companies added to this tier yet
                          </span>
                        </div>
                      )}
                    </div>
                  </section>
                );
              })}
            </div>
          </>
        ) : (
          <>
            {/* Editorial header for company detail */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-8"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="h-1 w-1 bg-lime-400"></div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
                  dsa / companies
                </span>
              </div>
              <div className="flex items-end justify-between gap-4 flex-wrap">
                <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                  <CompanyInitial name={selectedCompany} />
                  <div className="min-w-0 flex-1">
                    <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-50 capitalize mb-1.5 wrap-break-word">
                      {selectedCompany}
                    </h1>
                    {trackStats && (
                      <div className="space-y-2">
                        <div className="flex items-center gap-3 text-sm">
                          <span className="tabular-nums text-stone-900 dark:text-stone-50 font-bold">{trackStats.solved}</span>
                          <span className="text-stone-500 dark:text-stone-400">/</span>
                          <span className="tabular-nums text-stone-600 dark:text-stone-400">{trackStats.total}</span>
                          <span className="text-stone-400 dark:text-stone-500">solved</span>
                        </div>
                        <div className="flex gap-3 text-xs">
                          {Object.entries(trackStats.difficultyBreakdown).map(([diff, data]) => {
                            const color =
                              diff === "Easy" ? "text-emerald-600 dark:text-emerald-400" :
                              diff === "Medium" ? "text-amber-600 dark:text-amber-400" :
                              "text-red-600 dark:text-red-400";
                            return (
                              <span key={diff} className={`${color} tabular-nums`}>
                                {diff}: {data.solved}/{data.total}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <button
                  onClick={() => { setSelectedCompany(null); setPage(1); }}
                  className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 hover:text-lime-600 dark:hover:text-lime-400 transition-colors cursor-pointer shrink-0"
                >
                  all companies /
                </button>
              </div>
            </motion.div>

            {problemsLoading && !problemData ? (
              <div className="space-y-2">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="h-16 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md animate-pulse" />
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
                      transition={{ delay: Math.min(idx, 10) * 0.02 }}
                      className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md overflow-hidden hover:border-stone-400 dark:hover:border-white/25 transition-colors"
                    >
                      <div
                        className="flex items-center gap-2 sm:gap-3 px-3 py-3 sm:px-5 sm:py-4 cursor-pointer"
                        onClick={() => setExpandedId(isExpanded ? null : problem.id)}
                      >
                        {user && (
                          <Button
                            variant="ghost"
                            mode="icon"
                            size="sm"
                            onClick={(e) => { e.stopPropagation(); toggleMutation.mutate(problem.id); }}
                            className="shrink-0"
                          >
                            {problem.solved ? (
                              <CheckCircle2 className="w-5 h-5 text-lime-500" />
                            ) : (
                              <Circle className="w-5 h-5 text-stone-300 dark:text-stone-600 hover:text-stone-400 dark:hover:text-stone-500 transition-colors" />
                            )}
                          </Button>
                        )}

                        <div className="flex-1 min-w-0">
                          <Link
                            to={`/learn/dsa/problem/${problem.slug}`}
                            onClick={(e) => e.stopPropagation()}
                            className={`text-sm font-bold tracking-tight no-underline hover:underline wrap-break-word ${problem.solved ? "text-stone-400 dark:text-stone-500 line-through" : "text-stone-900 dark:text-stone-50"}`}
                          >
                            {problem.title}
                          </Link>
                          <div className="flex items-center gap-1.5 mt-1 flex-wrap">
                            <span className={`text-[10px] font-mono uppercase tracking-widest ${DIFF_COLOR[problem.difficulty] || "text-stone-500"}`}>
                              / {problem.difficulty.toLowerCase()}
                            </span>
                            {problem.acceptanceRate && (
                              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-md bg-stone-100 dark:bg-white/5 text-stone-600 dark:text-stone-400 tabular-nums">
                                {problem.acceptanceRate}
                              </span>
                            )}
                            {problem.tags.slice(0, 2).map((tag) => (
                              <span key={tag} className="text-[10px] font-mono px-1.5 py-0.5 rounded-md bg-stone-100 dark:bg-white/5 text-stone-600 dark:text-stone-400">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {problem.leetcodeUrl && (
                          <a
                            href={problem.leetcodeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="w-7 h-7 rounded-md bg-stone-100 dark:bg-white/5 hidden sm:flex items-center justify-center text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-50 hover:bg-stone-200 dark:hover:bg-white/10 transition-colors shrink-0 no-underline"
                            title="LeetCode"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}

                        {user && (
                          <Button
                            variant="ghost"
                            mode="icon"
                            size="sm"
                            onClick={(e) => { e.stopPropagation(); bookmarkMutation.mutate(problem.id); }}
                            className="shrink-0"
                          >
                            {problem.bookmarked ? (
                              <BookmarkCheck className="w-4 h-4 text-lime-500" />
                            ) : (
                              <Bookmark className="w-4 h-4 text-stone-300 dark:text-stone-600 hover:text-stone-400 dark:hover:text-stone-500 transition-colors" />
                            )}
                          </Button>
                        )}

                        <ChevronDown className={`w-4 h-4 text-stone-400 dark:text-stone-500 shrink-0 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`} />
                      </div>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="px-3 sm:px-5 pb-4 space-y-3 border-t border-stone-200 dark:border-white/10 pt-4">
                              {problem.hints.length > 0 && (
                                <div className="bg-stone-50 dark:bg-white/5 border border-stone-200 dark:border-white/10 rounded-md p-4">
                                  <div className="flex items-center gap-2 mb-2">
                                    <Lightbulb className="w-3.5 h-3.5 text-lime-600 dark:text-lime-400" />
                                    <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
                                      / {problem.hints.length === 1 ? "hint" : `hints (${problem.hints.length})`}
                                    </span>
                                  </div>
                                  <div className="space-y-2">
                                    {problem.hints.map((hint, i) => (
                                      <div key={i} className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed flex gap-1">
                                        {problem.hints.length > 1 && <span className="font-mono font-medium text-stone-500 dark:text-stone-400 shrink-0">{i + 1}.</span>}
                                        <span dangerouslySetInnerHTML={{ __html: sanitizeHtml(cleanHint(hint)) }} />
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {links.length > 0 && (
                                <div className="flex items-center gap-2 flex-wrap">
                                  {links.map((link) => (
                                    <a
                                      key={link.href}
                                      href={link.href}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-stone-100 dark:bg-white/5 text-stone-600 dark:text-stone-400 rounded-md text-[10px] font-mono uppercase tracking-widest hover:bg-stone-200 dark:hover:bg-white/10 hover:text-stone-900 dark:hover:text-stone-50 transition-colors no-underline"
                                    >
                                      <ExternalLink className="w-3 h-3" />
                                      {link.label}
                                    </a>
                                  ))}
                                  <Link
                                    to={`/learn/dsa/problem/${problem.slug}`}
                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-stone-900 dark:bg-stone-50 text-lime-400 rounded-md text-[10px] font-mono uppercase tracking-widest hover:opacity-90 transition-opacity no-underline"
                                  >
                                    view details
                                  </Link>
                                </div>
                              )}

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
                                        className="w-full px-4 py-3 text-sm border border-stone-300 dark:border-white/10 rounded-md bg-stone-50 dark:bg-white/5 text-stone-900 dark:text-stone-50 placeholder-stone-400 dark:placeholder-stone-600 focus:outline-none focus:border-lime-400 transition-colors resize-none"
                                      />
                                      <div className="flex items-center justify-between mt-1.5">
                                        <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400 dark:text-stone-500">
                                          {savingNotes.has(problem.id) ? "saving..." : "auto-saves on close"}
                                        </span>
                                        <Button
                                          variant="ghost"
                                          mode="link"
                                          onClick={() => toggleNotes(problem.id, problem.notes)}
                                          className="text-[10px] font-mono uppercase tracking-widest text-stone-400 hover:text-stone-600 dark:text-stone-500 dark:hover:text-stone-300"
                                        >
                                          close notes
                                        </Button>
                                      </div>
                                    </div>
                                  ) : (
                                    <button
                                      onClick={() => toggleNotes(problem.id, problem.notes)}
                                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-stone-100 dark:bg-white/5 text-stone-600 dark:text-stone-400 rounded-md text-[10px] font-mono uppercase tracking-widest hover:bg-stone-200 dark:hover:bg-white/10 hover:text-stone-900 dark:hover:text-stone-50 transition-colors cursor-pointer"
                                    >
                                      <StickyNote className="w-3 h-3" />
                                      {problem.notes ? "view notes" : "add notes"}
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
                  <div className="py-20 text-center border border-dashed border-stone-300 dark:border-white/10 rounded-md">
                    <Building2 className="w-8 h-8 text-stone-400 mx-auto mb-3" />
                    <p className="text-sm text-stone-600 dark:text-stone-400">No problems found for this company.</p>
                  </div>
                )}
              </div>
            )}

            {problemData && problemData.totalPages > 1 && (
              <div className="flex items-center justify-center gap-3 mt-8 flex-wrap">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page <= 1}
                  className="rounded-md border border-stone-300 dark:border-white/10"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Prev
                </Button>
                <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 tabular-nums">
                  page {page} / {problemData.totalPages}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setPage((p) => Math.min(problemData.totalPages, p + 1))}
                  disabled={page >= problemData.totalPages}
                  className="rounded-md border border-stone-300 dark:border-white/10"
                >
                  Next
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
