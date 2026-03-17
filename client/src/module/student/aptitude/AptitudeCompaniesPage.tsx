import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Search, CheckCircle2, XCircle, ChevronLeft, ChevronRight, Clock, Building2, BookOpen, TrendingUp, ArrowRight } from "lucide-react";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import type { AptitudeCompany, AptitudeCompanyQuestions } from "../../../lib/types";
import { useAuthStore } from "../../../lib/auth.store";
import { SEO } from "../../../components/SEO";
import { canonicalUrl } from "../../../lib/seo.utils";
import { LoadingScreen } from "../../../components/LoadingScreen";
import toast from "react-hot-toast";

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

  // ── Company questions view ──
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

    return (
      <div className="relative max-w-4xl mx-auto pb-12">
        <SEO
          title={`${selectedCompany} Aptitude Questions`}
          description={`Practice aptitude questions asked by ${selectedCompany} in placement tests.`}
          keywords={`${selectedCompany} aptitude, ${selectedCompany} placement, aptitude practice`}
        />

        {/* Atmospheric background */}
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
          <div className="absolute -top-32 -right-32 w-150 h-150 bg-linear-to-br from-purple-100 to-violet-100 dark:from-purple-900/20 dark:to-violet-900/20 rounded-full blur-3xl opacity-40" />
          <div className="absolute -bottom-32 -left-32 w-125 h-125 bg-linear-to-tr from-slate-100 to-indigo-100 dark:from-slate-900/20 dark:to-indigo-900/20 rounded-full blur-3xl opacity-40" />
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
          className="text-center mb-8 mt-6"
        >
          <button
            onClick={() => { setSelectedCompany(null); setPage(1); setSelectedAnswers({}); setRevealedQuestions(new Set()); setCurrentQ(0); setTimeLeft(600); setTimerRunning(true); }}
            className="inline-flex items-center gap-1.5 text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 text-sm mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to companies
          </button>
          <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-gray-950 dark:text-white mb-2">
            {selectedCompany}
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-500 tabular-nums">
            {companyData?.total ?? 0} aptitude questions &middot; Page {companyData?.page ?? 1} of {companyData?.totalPages ?? 1}
          </p>
        </motion.div>

        {loadingQuestions ? <LoadingScreen /> : (
          <>
            {/* Timer + progress bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 px-5 py-4 mb-5 shadow-sm"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold text-gray-900 dark:text-white tabular-nums">
                  Question {currentQ + 1} of {totalQ}
                </span>
                <div className={`flex items-center gap-1.5 text-sm font-mono font-bold tabular-nums ${timeLeft < 60 ? "text-red-500" : "text-gray-600 dark:text-gray-400"}`}>
                  <Clock className="w-4 h-4" />
                  {timeStr}
                </div>
              </div>
              <div className="w-full h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${totalQ > 0 ? Math.round((answeredCount / totalQ) * 100) : 0}%` }}
                  transition={{ duration: 0.5 }}
                  className={`h-full rounded-full ${answeredCount === totalQ && totalQ > 0 ? "bg-green-500" : "bg-purple-500"}`}
                />
              </div>
            </motion.div>

            {/* Question number pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex flex-wrap gap-2 mb-5"
            >
              {companyData?.questions.map((item, idx) => {
                const isAnswered = item.answered || revealedQuestions.has(item.id);
                const isCurrent = idx === currentQ;
                return (
                  <button
                    key={item.id}
                    onClick={() => setCurrentQ(idx)}
                    className={`w-9 h-9 rounded-xl text-xs font-bold flex items-center justify-center transition-all duration-200 ${
                      isCurrent
                        ? "bg-purple-600 text-white shadow-lg shadow-purple-200 dark:shadow-purple-900/30"
                        : isAnswered
                        ? "bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 border border-green-200 dark:border-green-800"
                        : "bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700"
                    }`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </motion.div>

            {/* Single question card */}
            <AnimatePresence mode="wait">
              {q && (
                <motion.div
                  key={q.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className={`bg-white dark:bg-gray-900 rounded-2xl shadow-sm p-6 border ${
                    isRevealed
                      ? q.correct || (q.correctAnswer && selectedAnswer === q.correctAnswer)
                        ? "border-green-200 dark:border-green-800"
                        : "border-red-200 dark:border-red-800"
                      : "border-gray-100 dark:border-gray-800"
                  }`}
                >
                  <div className="flex gap-3 mb-5">
                    <span className="shrink-0 w-8 h-8 rounded-xl bg-purple-50 dark:bg-purple-900/30 flex items-center justify-center text-xs font-bold text-purple-600 dark:text-purple-400">
                      {qNum}
                    </span>
                    <div className="flex-1 pt-1">
                      <div
                        className="text-sm text-gray-800 dark:text-gray-200 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: sanitizeHtml(q.question) }}
                      />
                      {q.topicName && (
                        <Link
                          to={`${basePath}/${q.topicSlug}`}
                          className="inline-block mt-2 text-[10px] font-medium px-2 py-0.5 bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-md hover:underline"
                        >
                          {q.topicName}
                        </Link>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2.5 ml-11">
                    {(["A", "B", "C", "D", ...(q.optionE ? ["E"] : [])] as const).map((letter) => {
                      const optionText = q[`option${letter}` as keyof typeof q] as string;
                      if (!optionText) return null;
                      const isSelected = selectedAnswer === letter;
                      const isCorrectOption = isRevealed && q.correctAnswer === letter;
                      const isWrongSelected = isRevealed && isSelected && q.correctAnswer !== letter;

                      return (
                        <label
                          key={letter}
                          className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all duration-200 border ${
                            isCorrectOption
                              ? "border-green-200 bg-green-50 dark:bg-green-900/20 dark:border-green-800"
                              : isWrongSelected
                              ? "border-red-200 bg-red-50 dark:bg-red-900/20 dark:border-red-800"
                              : isSelected
                              ? "border-purple-200 bg-purple-50 dark:bg-purple-900/20 dark:border-purple-800"
                              : "border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:border-gray-200 dark:hover:border-gray-700"
                          }`}
                        >
                          <input
                            type="radio"
                            name={`q-${q.id}`}
                            value={letter}
                            checked={isSelected}
                            disabled={isRevealed}
                            onChange={() => setSelectedAnswers((prev) => ({ ...prev, [q.id]: letter }))}
                            className="accent-purple-600"
                          />
                          <span className="font-semibold text-xs text-gray-400 dark:text-gray-500 w-4">{letter}.</span>
                          <span className="text-sm text-gray-700 dark:text-gray-300 flex-1">{optionText}</span>
                          {isCorrectOption && <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />}
                          {isWrongSelected && <XCircle className="w-4 h-4 text-red-500 shrink-0" />}
                        </label>
                      );
                    })}
                  </div>

                  <div className="ml-11 mt-4">
                    {!isRevealed ? (
                      <button
                        onClick={() => handleSubmit(q.id)}
                        disabled={!selectedAnswer || submitMutation.isPending}
                        className="px-5 py-2 text-sm font-semibold text-white bg-purple-600 hover:bg-purple-700 disabled:opacity-50 rounded-xl transition-colors shadow-sm"
                      >
                        {submitMutation.isPending ? "Submitting..." : "Check Answer"}
                      </button>
                    ) : q.explanation ? (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-3 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl"
                      >
                        <p className="text-xs font-bold text-blue-700 dark:text-blue-400 mb-1.5">Explanation</p>
                        <div
                          className="text-xs text-blue-800 dark:text-blue-300 leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: sanitizeHtml(q.explanation) }}
                        />
                      </motion.div>
                    ) : null}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Previous / Next */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex items-center justify-between mt-5"
            >
              <button
                onClick={() => setCurrentQ((c) => Math.max(0, c - 1))}
                disabled={currentQ <= 0}
                className="flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl disabled:opacity-40 hover:border-gray-300 dark:hover:border-gray-700 transition-colors shadow-sm"
              >
                <ChevronLeft className="w-4 h-4" /> Previous
              </button>
              <button
                onClick={() => setCurrentQ((c) => Math.min(totalQ - 1, c + 1))}
                disabled={currentQ >= totalQ - 1}
                className="flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl disabled:opacity-40 hover:border-gray-300 dark:hover:border-gray-700 transition-colors shadow-sm"
              >
                Next <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>

            {/* Page-level pagination */}
            {companyData && companyData.totalPages > 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                className="flex items-center justify-center gap-3 mt-8 pt-5 border-t border-gray-100 dark:border-gray-800"
              >
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page <= 1}
                  className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl disabled:opacity-40 hover:border-gray-300 dark:hover:border-gray-700 transition-colors shadow-sm"
                >
                  <ChevronLeft className="w-4 h-4" /> Prev Page
                </button>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400 tabular-nums">
                  Page {page} / {companyData.totalPages}
                </span>
                <button
                  onClick={() => setPage((p) => Math.min(companyData.totalPages, p + 1))}
                  disabled={page >= companyData.totalPages}
                  className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl disabled:opacity-40 hover:border-gray-300 dark:hover:border-gray-700 transition-colors shadow-sm"
                >
                  Next Page <ChevronRight className="w-4 h-4" />
                </button>
              </motion.div>
            )}
          </>
        )}
      </div>
    );
  }

  // ── Companies grid ──
  if (isLoading) return <LoadingScreen />;

  const totalCompanies = companies?.length ?? 0;
  const totalCompanyQuestions = companies?.reduce((s, c) => s + c.count, 0) ?? 0;

  return (
    <div className="relative pb-12">
      <SEO
        title="Aptitude by Company - Placement Questions"
        description="Practice aptitude questions asked by top companies in their placement tests."
        keywords="company aptitude questions, placement test preparation, TCS aptitude, Infosys aptitude"
        canonicalUrl={canonicalUrl("/learn/aptitude/companies")}
      />

      {/* Atmospheric background */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-150 h-150 bg-linear-to-br from-purple-100 to-violet-100 dark:from-purple-900/20 dark:to-violet-900/20 rounded-full blur-3xl opacity-40" />
        <div className="absolute -bottom-32 -left-32 w-125 h-125 bg-linear-to-tr from-slate-100 to-indigo-100 dark:from-slate-900/20 dark:to-indigo-900/20 rounded-full blur-3xl opacity-40" />
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
        <Link
          to={basePath}
          className="inline-flex items-center gap-1.5 text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 text-sm mb-6 no-underline transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Aptitude
        </Link>
        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-gray-950 dark:text-white mb-3">
          Company <span className="text-gradient-accent">Questions</span>
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-500 max-w-md mx-auto">
          Practice aptitude questions asked by top companies
        </p>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="grid grid-cols-3 gap-4 mb-8"
      >
        {[
          { icon: Building2, value: totalCompanies, label: "Companies", iconColor: "text-blue-500" },
          { icon: BookOpen, value: totalCompanyQuestions, label: "Questions", iconColor: "text-purple-500" },
          { icon: TrendingUp, value: filtered?.length ?? 0, label: "Showing", iconColor: "text-emerald-500" },
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

      {/* Search */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="mb-8"
      >
        <div className="bg-white dark:bg-gray-900 p-3 rounded-2xl border border-gray-200/80 dark:border-gray-800 shadow-lg shadow-black/4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search companies..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border-0 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all dark:text-white dark:placeholder-gray-500"
            />
          </div>
        </div>
      </motion.div>

      {/* Companies list - full-width cards like categories page */}
      <div className="space-y-3">
        {filtered?.map((company, idx) => (
          <motion.div
            key={company.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + idx * 0.04 }}
          >
            <button
              onClick={() => { setSelectedCompany(company.name); setPage(1); }}
              className="group w-full flex items-center gap-5 bg-white dark:bg-gray-900 px-6 py-5 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50 transition-all duration-300 text-left"
            >
              <div className="w-12 h-12 rounded-xl bg-gray-50 dark:bg-gray-800 flex items-center justify-center overflow-hidden border border-gray-100 dark:border-gray-700 shrink-0">
                {COMPANY_LOGOS[company.name] && !failedLogos.has(company.name) ? (
                  <img
                    src={COMPANY_LOGOS[company.name]}
                    alt={company.name}
                    className="w-7 h-7 object-contain"
                    referrerPolicy="no-referrer"
                    crossOrigin="anonymous"
                    onError={() => setFailedLogos((prev) => new Set(prev).add(company.name))}
                  />
                ) : (
                  <span className="text-base font-bold text-gray-600 dark:text-gray-300">
                    {company.name.charAt(0)}
                  </span>
                )}
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="text-base font-semibold text-gray-950 dark:text-white truncate mb-1">
                  {company.name}
                </h3>
                <div className="flex items-center gap-3 text-[11px] text-gray-400 dark:text-gray-500 font-medium">
                  <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-gray-500 dark:text-gray-400 tabular-nums">
                    {company.count} questions
                  </span>
                </div>
              </div>

              <ArrowRight className="w-5 h-5 text-gray-300 dark:text-gray-600 group-hover:text-gray-500 dark:group-hover:text-gray-400 group-hover:translate-x-0.5 transition-all shrink-0" />
            </button>
          </motion.div>
        ))}
      </div>

      {filtered?.length === 0 && !isLoading && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-20 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800"
        >
          <Building2 className="w-10 h-10 text-gray-300 dark:text-gray-600 mx-auto mb-3" />
          <p className="text-gray-500 dark:text-gray-400">No companies found</p>
          <button onClick={() => setSearch("")} className="text-sm text-purple-600 dark:text-purple-400 mt-2 hover:underline">
            Clear search
          </button>
        </motion.div>
      )}
    </div>
  );
}
