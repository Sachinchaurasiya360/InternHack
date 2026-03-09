import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";
import { ArrowLeft, ArrowRight, Building2, CheckCircle2, ChevronDown, Lightbulb, ExternalLink, BookOpen, TrendingUp } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import type { DsaCompany, DsaCompanyProblem } from "../../../lib/types";
import { useAuthStore } from "../../../lib/auth.store";
import { SEO } from "../../../components/SEO";
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

export default function DsaCompaniesPage() {
  const { user } = useAuthStore();
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const { data: companies, isLoading } = useQuery({
    queryKey: queryKeys.dsa.companies(),
    queryFn: () => api.get<DsaCompany[]>("/dsa/companies").then((r) => r.data),
  });

  const { data: problems } = useQuery({
    queryKey: queryKeys.dsa.company(selectedCompany!),
    queryFn: () => api.get<DsaCompanyProblem[]>(`/dsa/companies/${selectedCompany}`).then((r) => r.data),
    enabled: !!selectedCompany,
  });

  if (isLoading) return <LoadingScreen />;

  return (
    <div className="relative pb-12">
      <SEO title="Company-wise DSA Problems" noIndex />

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
        <Link to="/student/dsa" className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors mb-4 no-underline">
          <ArrowLeft className="w-4 h-4" />
          Back to DSA
        </Link>

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
          className="grid grid-cols-3 gap-4 mb-8"
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
        /* ─── Company Grid ─── */
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="space-y-3"
        >
          {companies?.map((company, i) => (
            <motion.button
              key={company.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.04 }}
              onClick={() => setSelectedCompany(company.name)}
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

          {companies?.length === 0 && (
            <div className="text-center py-20 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800">
              <Building2 className="w-10 h-10 text-indigo-500 mx-auto mb-4" />
              <h3 className="font-display text-lg font-bold text-gray-950 dark:text-white mb-2">No companies found</h3>
              <p className="text-sm text-gray-500 dark:text-gray-500">Company data is not available yet.</p>
            </div>
          )}
        </motion.div>
      ) : (
        /* ─── Problem List ─── */
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <button
            onClick={() => { setSelectedCompany(null); setExpandedId(null); }}
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            All Companies
          </button>

          <h2 className="text-xl font-bold text-gray-950 dark:text-white capitalize mb-4">
            {selectedCompany} <span className="text-gray-400 dark:text-gray-500 font-normal text-base">({problems?.length ?? 0} problems)</span>
          </h2>

          <div className="space-y-2">
            {problems?.map((p, idx) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.03 }}
                className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50 transition-all duration-300"
              >
                <div
                  className="flex items-center gap-3 px-5 py-4 cursor-pointer"
                  onClick={() => setExpandedId(expandedId === p.id ? null : p.id)}
                >
                  {user && (
                    <div className="shrink-0">
                      {p.solved ? (
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                      ) : (
                        <div className="w-5 h-5 rounded-full border-2 border-gray-200 dark:border-gray-700" />
                      )}
                    </div>
                  )}

                  <div className="flex-1 min-w-0">
                    <span className={`text-sm font-medium ${p.solved ? "text-gray-400 dark:text-gray-500 line-through" : "text-gray-950 dark:text-white"}`}>
                      {p.title}
                    </span>
                    <div className="flex items-center gap-2 mt-1">
                      <Link
                        to={`/student/dsa/${p.topicSlug}`}
                        onClick={(e) => e.stopPropagation()}
                        className="text-[11px] text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors no-underline"
                      >
                        {p.topicName}
                      </Link>
                      {p.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="text-[10px] px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <span className={`text-xs font-semibold shrink-0 ${DIFF_TEXT[p.difficulty] || "text-gray-500"}`}>
                    {p.difficulty}
                  </span>

                  {p.leetcodeUrl && (
                    <a href={p.leetcodeUrl} target="_blank" rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="w-7 h-7 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors shrink-0"
                      title="LeetCode"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  <ChevronDown className={`w-4 h-4 text-gray-400 dark:text-gray-500 shrink-0 transition-transform duration-200 ${expandedId === p.id ? "rotate-180" : ""}`} />
                </div>

                <AnimatePresence>
                  {expandedId === p.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-4 pt-1 ml-8">
                        {p.hints ? (
                          <div className="bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl p-4">
                            <div className="flex items-center gap-2 mb-2">
                              <Lightbulb className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                              <span className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide">Hint & Approach</span>
                            </div>
                            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">{p.hints}</p>
                          </div>
                        ) : (
                          <div className="bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl p-4">
                            <p className="text-sm text-gray-500 dark:text-gray-400 italic">No hints available for this problem yet.</p>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}

            {problems?.length === 0 && (
              <div className="text-center py-20 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800">
                <Building2 className="w-10 h-10 text-gray-400 mx-auto mb-4" />
                <h3 className="font-display text-lg font-bold text-gray-950 dark:text-white mb-2">No problems found</h3>
                <p className="text-sm text-gray-500 dark:text-gray-500">No problems found for this company.</p>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </div>
  );
}
