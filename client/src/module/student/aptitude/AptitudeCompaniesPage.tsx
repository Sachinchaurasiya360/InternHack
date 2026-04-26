import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  CheckCircle2,
  XCircle,
  ChevronLeft,
  ChevronRight,
  Clock,
  Building2,
  ArrowUpRight,
  Send,
} from "lucide-react";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import type { AptitudeCompany, AptitudeCompanyQuestions } from "../../../lib/types";
import { useAuthStore } from "../../../lib/auth.store";
import { SEO } from "../../../components/SEO";
import { canonicalUrl } from "../../../lib/seo.utils";
import { LoadingScreen } from "../../../components/LoadingScreen";
import toast from "@/components/ui/toast";

const COMPANY_LOGOS: Record<string, string> = {
  "TCS": "https://companieslogo.com/img/orig/TCS.NS_BIG-89c50e39.png?t=1740792736",
  "Infosys": "https://companieslogo.com/img/orig/INFY_BIG-9635f314.png",
  "Wipro": "https://companieslogo.com/img/orig/WIT-1453b096.png?t=1739861069",
  "HCL": "https://www.logo.wine/a/logo/HCL_Technologies/HCL_Technologies-Logo.wine.svg",
  "Cognizant": "https://www.logo.wine/a/logo/Cognizant/Cognizant-Logo.wine.svg",
  "Accenture": "https://www.logo.wine/a/logo/Accenture/Accenture-Logo.wine.svg",
  "Capgemini": "https://www.logo.wine/a/logo/Capgemini/Capgemini-Logo.wine.svg",
  "Tech Mahindra": "https://www.logo.wine/a/logo/Tech_Mahindra/Tech_Mahindra-Logo.wine.svg",
  "L&T Infotech": "https://companieslogo.com/img/orig/LTIM.NS_BIG-51ac03d3.png?t=1720244492",
  "Mindtree": "https://companieslogo.com/img/orig/LTIM.NS_BIG-51ac03d3.png?t=1720244492",
  "IBM": "https://www.logo.wine/a/logo/IBM/IBM-Logo.wine.svg",
  "Amazon": "https://www.logo.wine/a/logo/Amazon_(company)/Amazon_(company)-Logo.wine.svg",
  "Google": "https://www.logo.wine/a/logo/Google/Google-Logo.wine.svg",
  "Microsoft": "https://www.logo.wine/a/logo/Microsoft/Microsoft-Logo.wine.svg",
  "Meta": "https://www.logo.wine/a/logo/Meta_Platforms/Meta_Platforms-Logo.wine.svg",
  "Deloitte": "https://www.logo.wine/a/logo/Deloitte/Deloitte-Logo.wine.svg",
  "Flipkart": "https://www.logo.wine/a/logo/Flipkart/Flipkart-Logo.wine.svg",
  "Zoho": "https://www.logo.wine/a/logo/Zoho_Corporation/Zoho_Corporation-Logo.wine.svg",
  "Paytm": "https://www.logo.wine/a/logo/Paytm/Paytm-Logo.wine.svg",
  "Reliance": "https://companieslogo.com/img/orig/RELIANCE.NS_BIG-fca2fa88.png?t=1720244493",
  "Infosys BPM": "https://companieslogo.com/img/orig/INFY_BIG-9635f314.png",
  "Mu Sigma": "https://www.logo.wine/a/logo/Mu_Sigma/Mu_Sigma-Logo.wine.svg",
  "Goldman Sachs": "https://www.logo.wine/a/logo/Goldman_Sachs/Goldman_Sachs-Logo.wine.svg",
  "JP Morgan": "https://www.logo.wine/a/logo/JPMorgan_Chase/JPMorgan_Chase-Logo.wine.svg",
  "Barclays": "https://companieslogo.com/img/orig/BCS_BIG-ebb27c2e.png?t=1720244491",
  "HSBC": "https://www.logo.wine/a/logo/HSBC/HSBC-Logo.wine.svg",
  "Uber": "https://www.logo.wine/a/logo/Uber/Uber-Logo.wine.svg",
  "Oracle": "https://www.logo.wine/a/logo/Oracle_Corporation/Oracle_Corporation-Logo.wine.svg",
  "SAP": "https://www.logo.wine/a/logo/SAP_SE/SAP_SE-Logo.wine.svg",
  "Adobe": "https://www.logo.wine/a/logo/Adobe_Inc./Adobe_Inc.-Logo.wine.svg",
  "Cisco": "https://www.logo.wine/a/logo/Cisco_Systems/Cisco_Systems-Logo.wine.svg",
  "Samsung": "https://www.logo.wine/a/logo/Samsung/Samsung-Logo.wine.svg",
};

function sanitizeHtml(html: string): string {
  return html
    .replace(/<img[^>]*src=["']\/[^"']*["'][^>]*\/?>/gi, "")
    .replace(/<img[^>]*src=["'][^"']*indiabix[^"']*["'][^>]*\/?>/gi, "")
    .replace(/<iframe[^>]*>[\s\S]*?<\/iframe>/gi, "")
    .replace(/Video\s*Explanation[\s\S]*?(?=<\/div>|$)/gi, "")
    .replace(/<a[^>]*(?:youtube|youtu\.be|video)[^>]*>[\s\S]*?<\/a>/gi, "")
    .replace(/\s*style=["'][^"']*["']/gi, "")
    .replace(/<(div|span|p|font)\s*>\s*<\/\1>/gi, "")
    .replace(/<\/?font[^>]*>/gi, "")
    .replace(/\s*class=["'][^"']*["']/gi, "")
    .trim();
}

function Kicker({ label }: { label: string }) {
  return (
    <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-stone-500">
      <span className="h-1 w-1 bg-lime-400" />
      {label}
    </div>
  );
}

export default function AptitudeCompaniesPage() {
  const { user } = useAuthStore();
  const queryClient = useQueryClient();
  const [search, setSearch] = useState("");
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [revealedQuestions, setRevealedQuestions] = useState<Set<number>>(new Set());
  const [failedLogos, setFailedLogos] = useState<Set<string>>(new Set());
  const [currentQ, setCurrentQ] = useState(0);
  const [timeLeft, setTimeLeft] = useState(600);
  const [timerRunning, setTimerRunning] = useState(true);

  const { data: companies, isLoading } = useQuery({
    queryKey: queryKeys.aptitude.companies(),
    queryFn: () => api.get<AptitudeCompany[]>("/aptitude/companies").then((r) => r.data),
  });

  const { data: companyData, isLoading: loadingQuestions } = useQuery({
    queryKey: [...queryKeys.aptitude.company(selectedCompany!), page],
    queryFn: () =>
      api.get<AptitudeCompanyQuestions>(`/aptitude/companies/${encodeURIComponent(selectedCompany!)}?page=${page}&limit=10`).then((r) => r.data),
    enabled: !!selectedCompany,
  });

  useEffect(() => {
    if (!selectedCompany || !timerRunning || !companyData?.questions.length) return;
    const id = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) { setTimerRunning(false); return 0; }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [selectedCompany, timerRunning, companyData?.questions.length]);

  useEffect(() => { setCurrentQ(0); }, [page]);

  const submitMutation = useMutation({
    mutationFn: ({ questionId, answer }: { questionId: number; answer: string }) =>
      api.post<{ correct: boolean; correctAnswer: string; explanation?: string }>(
        `/aptitude/questions/${questionId}/answer`,
        { answer }
      ).then((r) => r.data),
    onSuccess: (data, { questionId }) => {
      setRevealedQuestions((prev) => new Set(prev).add(questionId));
      if (data.correct) toast.success("Correct!");
      else toast.error(`Wrong! Correct answer: ${data.correctAnswer}`);
      queryClient.invalidateQueries({ queryKey: queryKeys.aptitude.company(selectedCompany!) });
      queryClient.invalidateQueries({ queryKey: queryKeys.aptitude.progress() });
    },
  });

  const handleSubmit = (questionId: number) => {
    const answer = selectedAnswers[questionId];
    if (!answer) { toast.error("Select an option"); return; }
    if (!user) { toast.error("Log in to track progress"); return; }
    submitMutation.mutate({ questionId, answer });
  };

  const filtered = companies?.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  const basePath = "/learn/aptitude";

  // Company questions view
  if (selectedCompany) {
    const totalQ = companyData?.questions.length ?? 0;
    const q = companyData?.questions[currentQ];
    const qNum = (page - 1) * 10 + currentQ + 1;
    const isRevealed = q ? (q.answered || revealedQuestions.has(q.id)) : false;
    const selectedAnswer = q ? selectedAnswers[q.id] : undefined;
    const mins = Math.floor(timeLeft / 60);
    const secs = timeLeft % 60;
    const timeStr = `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
    const answeredCount = companyData?.questions.filter((item) => item.answered || revealedQuestions.has(item.id)).length ?? 0;
    const progressPct = totalQ > 0 ? Math.round((answeredCount / totalQ) * 100) : 0;

    return (
      <div className="bg-stone-50 dark:bg-stone-950 min-h-[calc(100vh-4rem)] text-stone-900 dark:text-stone-50">
        <SEO
          title={`${selectedCompany} Aptitude Questions`}
          description={`Practice aptitude questions asked by ${selectedCompany} in placement tests.`}
          keywords={`${selectedCompany} aptitude, ${selectedCompany} placement, aptitude practice`}
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-8 py-8">
          {/* Editorial header */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-2 mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-stone-200 dark:border-white/10 pb-6"
          >
            <div className="min-w-0 flex-1">
              <Kicker label={`learn / aptitude / companies / ${selectedCompany.toLowerCase()}`} />
              <h1 className="mt-3 text-2xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-tight wrap-break-word">
                {selectedCompany}
              </h1>
              <p className="mt-3 text-[10px] font-mono uppercase tracking-widest text-stone-500 tabular-nums">
                {companyData?.total ?? 0} aptitude questions &middot; page {companyData?.page ?? 1} / {companyData?.totalPages ?? 1}
              </p>
            </div>
            <div className="flex items-center gap-x-4 gap-y-2 text-[10px] font-mono uppercase tracking-widest text-stone-500 flex-wrap">
              <span>
                on page
                <span className="text-stone-900 dark:text-stone-50 text-sm font-bold tabular-nums ml-2">
                  {totalQ}
                </span>
              </span>
              <span>
                answered
                <span className="text-stone-900 dark:text-stone-50 text-sm font-bold tabular-nums ml-2">
                  {answeredCount}
                </span>
              </span>
              <button
                onClick={() => {
                  setSelectedCompany(null);
                  setPage(1);
                  setSelectedAnswers({});
                  setRevealedQuestions(new Set());
                  setCurrentQ(0);
                  setTimeLeft(600);
                  setTimerRunning(true);
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-mono uppercase tracking-widest text-stone-900 dark:text-stone-50 border border-stone-300 dark:border-white/15 rounded-md hover:bg-lime-400 hover:border-lime-400 hover:text-stone-900 transition-colors"
              >
                all companies
                <ArrowUpRight className="w-3 h-3" />
              </button>
            </div>
          </motion.div>

          {loadingQuestions ? <LoadingScreen /> : (
            <>
              {/* Progress + timer */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 }}
                className="mb-5 px-5 py-4 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md"
              >
                <div className="flex items-center justify-between gap-4 mb-2.5">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 tabular-nums">
                    question {currentQ + 1} / {totalQ}
                  </span>
                  <span
                    className={`inline-flex items-center gap-1.5 text-xs font-mono font-bold tabular-nums ${
                      timeLeft < 60 ? "text-red-600 dark:text-red-400" : "text-stone-900 dark:text-stone-50"
                    }`}
                  >
                    <Clock className="w-3.5 h-3.5" />
                    {timeStr}
                  </span>
                </div>
                <div className="w-full h-1 bg-stone-100 dark:bg-stone-800 overflow-hidden rounded-sm">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progressPct}%` }}
                    transition={{ duration: 0.5 }}
                    className={`h-full ${answeredCount === totalQ && totalQ > 0 ? "bg-lime-400" : "bg-stone-900 dark:bg-stone-50"}`}
                  />
                </div>
              </motion.div>

              {/* Question number grid */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.08 }}
                className="mb-5 flex flex-wrap gap-1.5"
              >
                {companyData?.questions.map((item, idx) => {
                  const isAnswered = item.answered || revealedQuestions.has(item.id);
                  const isCurrent = idx === currentQ;
                  let tileClass: string;
                  if (isCurrent) {
                    tileClass = "bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 border-stone-900 dark:border-stone-50";
                  } else if (isAnswered) {
                    tileClass = "text-lime-700 dark:text-lime-400 border-lime-300 dark:border-lime-900/60 hover:bg-lime-50 dark:hover:bg-lime-900/20";
                  } else {
                    tileClass = "text-stone-500 border-stone-200 dark:border-white/10 hover:border-stone-400 dark:hover:border-white/30";
                  }
                  return (
                    <button
                      key={item.id}
                      onClick={() => setCurrentQ(idx)}
                      className={`w-9 h-9 rounded-md text-[11px] font-mono font-bold tabular-nums flex items-center justify-center border transition-colors ${tileClass}`}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </button>
                  );
                })}
              </motion.div>

              {/* Question card */}
              <AnimatePresence mode="wait">
                {q && (
                  <motion.div
                    key={q.id}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -16 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className={`bg-white dark:bg-stone-900 rounded-md p-4 sm:p-6 border transition-colors ${
                      isRevealed
                        ? q.correct || (q.correctAnswer && selectedAnswer === q.correctAnswer)
                          ? "border-lime-300 dark:border-lime-900/60"
                          : "border-red-300 dark:border-red-900/60"
                        : "border-stone-200 dark:border-white/10"
                    }`}
                  >
                    <div className="flex items-start gap-3 sm:gap-4 mb-5">
                      <span className="shrink-0 w-9 h-9 rounded-md bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-white/10 flex items-center justify-center text-[11px] font-mono font-bold tabular-nums text-stone-900 dark:text-stone-50">
                        {String(qNum).padStart(2, "0")}
                      </span>
                      <div className="flex-1 min-w-0 pt-1">
                        <div
                          className="text-sm text-stone-800 dark:text-stone-200 leading-relaxed wrap-break-word"
                          dangerouslySetInnerHTML={{ __html: sanitizeHtml(q.question) }}
                        />
                        {q.topicName && (
                          <Link
                            to={`${basePath}/${q.topicSlug}`}
                            className="inline-flex items-center gap-1.5 mt-3 px-2 py-0.5 text-[10px] font-mono uppercase tracking-widest text-stone-600 dark:text-stone-400 border border-stone-200 dark:border-white/10 rounded-md hover:border-lime-400 hover:text-lime-700 dark:hover:text-lime-400 transition-colors no-underline"
                          >
                            {q.topicName}
                          </Link>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2 sm:ml-13">
                      {(["A", "B", "C", "D", ...(q.optionE ? ["E"] : [])] as const).map((letter) => {
                        const optionText = q[`option${letter}` as keyof typeof q] as string;
                        if (!optionText) return null;
                        const isSelected = selectedAnswer === letter;
                        const isCorrectOption = isRevealed && q.correctAnswer === letter;
                        const isWrongSelected = isRevealed && isSelected && q.correctAnswer !== letter;

                        return (
                          <label
                            key={letter}
                            className={`flex items-center gap-3 p-3 rounded-md border transition-colors ${
                              isRevealed ? "cursor-default" : "cursor-pointer"
                            } ${
                              isCorrectOption
                                ? "border-lime-300 dark:border-lime-900/60 bg-lime-50/50 dark:bg-lime-900/10"
                                : isWrongSelected
                                  ? "border-red-300 dark:border-red-900/60 bg-red-50/50 dark:bg-red-900/10"
                                  : isSelected && !isRevealed
                                    ? "border-stone-900 dark:border-stone-50 bg-stone-50 dark:bg-stone-800/50"
                                    : "border-stone-200 dark:border-white/10 hover:border-stone-400 dark:hover:border-white/30"
                            }`}
                          >
                            <input
                              type="radio"
                              name={`q-${q.id}`}
                              value={letter}
                              checked={isSelected}
                              disabled={isRevealed}
                              onChange={() => setSelectedAnswers((prev) => ({ ...prev, [q.id]: letter }))}
                              className="accent-lime-500"
                            />
                            <span className="font-mono text-[11px] uppercase tracking-widest text-stone-500 w-5">
                              {letter}
                            </span>
                            <span className="text-sm text-stone-700 dark:text-stone-300 flex-1">{optionText}</span>
                            {isCorrectOption && <CheckCircle2 className="w-4 h-4 text-lime-500 shrink-0" />}
                            {isWrongSelected && <XCircle className="w-4 h-4 text-red-500 shrink-0" />}
                          </label>
                        );
                      })}
                    </div>

                    <div className="mt-4 sm:ml-13">
                      {!isRevealed ? (
                        <button
                          onClick={() => handleSubmit(q.id)}
                          disabled={!selectedAnswer || submitMutation.isPending}
                          className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono uppercase tracking-widest bg-stone-900 dark:bg-stone-50 border border-stone-900 dark:border-stone-50 text-stone-50 dark:text-stone-900 rounded-md hover:bg-lime-400 hover:border-lime-400 hover:text-stone-900 dark:hover:text-stone-900 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                        >
                          <Send className="w-3.5 h-3.5" />
                          {submitMutation.isPending ? "submitting" : "check answer"}
                        </button>
                      ) : q.explanation ? (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-3"
                        >
                          <div className="mb-2">
                            <Kicker label="explanation" />
                          </div>
                          <div className="bg-stone-50 dark:bg-stone-800/40 border border-stone-200 dark:border-white/10 rounded-md p-4">
                            <div
                              className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed"
                              dangerouslySetInnerHTML={{ __html: sanitizeHtml(q.explanation) }}
                            />
                          </div>
                        </motion.div>
                      ) : null}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex items-center justify-between mt-5"
              >
                <button
                  onClick={() => setCurrentQ((c) => Math.max(0, c - 1))}
                  disabled={currentQ <= 0}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-[11px] font-mono uppercase tracking-widest text-stone-900 dark:text-stone-50 border border-stone-300 dark:border-white/15 rounded-md hover:border-stone-900 dark:hover:border-stone-50 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-3.5 h-3.5" /> previous
                </button>
                <button
                  onClick={() => setCurrentQ((c) => Math.min(totalQ - 1, c + 1))}
                  disabled={currentQ >= totalQ - 1}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-[11px] font-mono uppercase tracking-widest text-stone-900 dark:text-stone-50 border border-stone-300 dark:border-white/15 rounded-md hover:border-stone-900 dark:hover:border-stone-50 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  next <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </motion.div>

              {/* Page-level pagination */}
              {companyData && companyData.totalPages > 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.25 }}
                  className="flex items-center justify-center gap-4 mt-8 pt-5 border-t border-stone-200 dark:border-white/10"
                >
                  <button
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    disabled={page <= 1}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-[11px] font-mono uppercase tracking-widest text-stone-900 dark:text-stone-50 border border-stone-300 dark:border-white/15 rounded-md hover:border-stone-900 dark:hover:border-stone-50 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" /> prev page
                  </button>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 tabular-nums">
                    page {page} / {companyData.totalPages}
                  </span>
                  <button
                    onClick={() => setPage((p) => Math.min(companyData.totalPages, p + 1))}
                    disabled={page >= companyData.totalPages}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-[11px] font-mono uppercase tracking-widest text-stone-900 dark:text-stone-50 border border-stone-300 dark:border-white/15 rounded-md hover:border-stone-900 dark:hover:border-stone-50 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    next page <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </motion.div>
              )}
            </>
          )}
        </div>
      </div>
    );
  }

  // Companies grid
  if (isLoading) return <LoadingScreen />;

  const totalCompanies = companies?.length ?? 0;
  const totalCompanyQuestions = companies?.reduce((s, c) => s + c.count, 0) ?? 0;

  // Difficulty assignment based on question count buckets
  const getDifficulty = (count: number): { label: string; color: string } => {
    if (count >= 500) return { label: "heavy", color: "text-rose-600 dark:text-rose-400" };
    if (count >= 150) return { label: "medium", color: "text-amber-600 dark:text-amber-400" };
    return { label: "light", color: "text-emerald-600 dark:text-emerald-400" };
  };

  return (
    <div className="bg-stone-50 dark:bg-stone-950 min-h-[calc(100vh-4rem)] text-stone-900 dark:text-stone-50">
      <SEO
        title="Aptitude by Company - Placement Questions"
        description="Practice aptitude questions asked by top companies in their placement tests."
        keywords="company aptitude questions, placement test preparation, TCS aptitude, Infosys aptitude"
        canonicalUrl={canonicalUrl("/learn/aptitude/companies")}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-8 py-8">
        {/* Editorial header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-2 mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-stone-200 dark:border-white/10 pb-8"
        >
          <div className="min-w-0">
            <Kicker label="learn / aptitude / companies" />
            <h1 className="mt-4 text-2xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-tight">
              Question banks by{" "}
              <span className="relative inline-block">
                <span className="relative z-10">company.</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                  aria-hidden
                  className="absolute bottom-1 left-0 right-0 h-3 md:h-3 bg-lime-400 origin-left z-0"
                />
              </span>
            </h1>
            <p className="mt-3 text-sm text-stone-500 max-w-xl">
              Practice the exact aptitude rounds top recruiters actually run, curated from real placement drives.
            </p>
          </div>
          <div className="flex items-center gap-x-4 gap-y-2 text-[10px] font-mono uppercase tracking-widest text-stone-500 flex-wrap">
            <span>
              companies
              <span className="text-stone-900 dark:text-stone-50 text-sm font-bold tabular-nums ml-2">
                {totalCompanies}
              </span>
            </span>
            <span>
              questions
              <span className="text-stone-900 dark:text-stone-50 text-sm font-bold tabular-nums ml-2">
                {totalCompanyQuestions.toLocaleString()}
              </span>
            </span>
            <span>
              showing
              <span className="text-stone-900 dark:text-stone-50 text-sm font-bold tabular-nums ml-2">
                {filtered?.length ?? 0}
              </span>
            </span>
          </div>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="mb-8"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            <input
              type="text"
              placeholder="Search companies..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-white dark:bg-stone-900 border border-stone-300 dark:border-white/10 rounded-md focus:outline-none focus:border-lime-400 transition-colors text-sm text-stone-900 dark:text-stone-50 placeholder-stone-400 dark:placeholder-stone-600"
            />
          </div>
        </motion.div>

        {/* Section kicker */}
        <div className="flex items-end justify-between gap-4 mb-6 flex-wrap">
          <div className="min-w-0">
            <Kicker label={`companies / ${search ? "filtered" : "all"}`} />
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
              Pick a recruiter
            </h2>
          </div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 hidden sm:block tabular-nums">
            {filtered?.length ?? 0} result{(filtered?.length ?? 0) === 1 ? "" : "s"}
          </span>
        </div>

        {/* Companies list */}
        {filtered?.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="py-20 text-center border border-dashed border-stone-300 dark:border-white/10 rounded-md"
          >
            <Building2 className="w-8 h-8 text-stone-400 mx-auto mb-3" />
            <p className="text-sm text-stone-600 dark:text-stone-400">No companies found.</p>
            <button
              onClick={() => setSearch("")}
              className="mt-4 inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-mono uppercase tracking-widest text-stone-900 dark:text-stone-50 border border-stone-300 dark:border-white/15 rounded-md hover:bg-lime-400 hover:border-lime-400 hover:text-stone-900 transition-colors"
            >
              clear search
            </button>
          </motion.div>
        ) : (
          <div className="space-y-2.5">
            {filtered?.map((company, idx) => {
              const diff = getDifficulty(company.count);
              return (
                <motion.div
                  key={company.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: Math.min(idx, 12) * 0.03 }}
                >
                  <button
                    onClick={() => { setSelectedCompany(company.name); setPage(1); }}
                    className="group w-full flex items-center gap-4 bg-white dark:bg-stone-900 px-5 py-4 rounded-md border border-stone-200 dark:border-white/10 hover:border-stone-900 dark:hover:border-stone-50 hover:bg-stone-900 dark:hover:bg-stone-50 transition-colors text-left"
                  >
                    <span className="shrink-0 text-[10px] font-mono font-bold tabular-nums text-stone-400 dark:text-stone-600 group-hover:text-lime-400 transition-colors">
                      / {String(idx + 1).padStart(2, "0")}
                    </span>

                    <div className="w-10 h-10 rounded-md bg-stone-100 dark:bg-stone-800 group-hover:bg-stone-800 dark:group-hover:bg-stone-100 border border-stone-200 dark:border-white/10 flex items-center justify-center overflow-hidden shrink-0 transition-colors">
                      {COMPANY_LOGOS[company.name] && !failedLogos.has(company.name) ? (
                        <img
                          src={COMPANY_LOGOS[company.name]}
                          alt={company.name}
                          className="w-6 h-6 object-contain"
                          referrerPolicy="no-referrer"
                          crossOrigin="anonymous"
                          onError={() => setFailedLogos((prev) => new Set(prev).add(company.name))}
                        />
                      ) : (
                        <span className="text-sm font-bold text-stone-700 dark:text-stone-300 group-hover:text-stone-200 dark:group-hover:text-stone-800 transition-colors">
                          {company.name.charAt(0)}
                        </span>
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-bold tracking-tight text-stone-900 dark:text-stone-50 group-hover:text-lime-400 truncate transition-colors">
                        {company.name}
                      </h3>
                      <div className="flex items-center gap-2 mt-1 flex-wrap">
                        <span className={`text-[10px] font-mono uppercase tracking-widest ${diff.color} group-hover:text-lime-400 transition-colors`}>
                          {diff.label}
                        </span>
                        <span className="text-[10px] font-mono text-stone-400 group-hover:text-stone-600 dark:group-hover:text-stone-400 transition-colors">·</span>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 group-hover:text-stone-300 dark:group-hover:text-stone-600 tabular-nums transition-colors">
                          {company.count} questions
                        </span>
                      </div>
                    </div>

                    <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-lime-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all shrink-0" />
                  </button>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
