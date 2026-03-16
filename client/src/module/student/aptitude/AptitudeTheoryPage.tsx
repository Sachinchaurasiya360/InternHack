import { useState } from "react";
import { useParams, Link, Navigate } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  BookOpen,
  Calculator,
  Lightbulb,
  AlertTriangle,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Zap,
  ListChecks,
  FileText,
  Target,
} from "lucide-react";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import type { AptitudeTopicDetail } from "../../../lib/types";
import { getTopicTheory } from "./data";
import type { Formula, Method, SolvedExample } from "./data";
import { SEO } from "../../../components/SEO";
import { LoadingScreen } from "../../../components/LoadingScreen";

function FormulaCard({ formula }: { formula: Formula }) {
  return (
    <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4 border border-gray-100 dark:border-gray-700/50">
      <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1.5">{formula.name}</p>
      <code className="block text-sm font-mono text-purple-700 dark:text-purple-300 bg-white dark:bg-gray-900 rounded-lg px-3 py-2 border border-purple-100 dark:border-purple-900/50">
        {formula.formula}
      </code>
      {formula.description && (
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">{formula.description}</p>
      )}
    </div>
  );
}

function MethodCard({ method, index }: { method: Method; index: number }) {
  const [open, setOpen] = useState(index === 0);
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-3 px-5 py-4 text-left hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
      >
        <span className="w-7 h-7 rounded-lg bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-xs font-bold text-indigo-600 dark:text-indigo-400 shrink-0">
          {index + 1}
        </span>
        <span className="text-sm font-semibold text-gray-900 dark:text-white flex-1">{method.name}</span>
        <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.25 }}
          className="px-5 pb-4 border-t border-gray-50 dark:border-gray-800"
        >
          <ol className="space-y-2 mt-3">
            {method.steps.map((step, i) => (
              <li key={i} className="flex gap-3 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                <span className="shrink-0 w-5 h-5 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-[10px] font-bold text-gray-500 dark:text-gray-400 mt-0.5">
                  {i + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </motion.div>
      )}
    </div>
  );
}

function ExampleCard({ example, index }: { example: SolvedExample; index: number }) {
  const [showSolution, setShowSolution] = useState(false);
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 overflow-hidden">
      <div className="px-5 py-4">
        <div className="flex items-start gap-3">
          <span className="shrink-0 w-7 h-7 rounded-lg bg-amber-50 dark:bg-amber-900/30 flex items-center justify-center text-xs font-bold text-amber-600 dark:text-amber-400">
            Q{index + 1}
          </span>
          <p className="text-sm text-gray-800 dark:text-gray-200 leading-relaxed flex-1 pt-0.5">{example.problem}</p>
        </div>
        <button
          onClick={() => setShowSolution(!showSolution)}
          className="mt-3 ml-10 inline-flex items-center gap-1.5 text-xs font-semibold text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
        >
          {showSolution ? "Hide Solution" : "Show Solution"}
          <ChevronRight className={`w-3.5 h-3.5 transition-transform duration-200 ${showSolution ? "rotate-90" : ""}`} />
        </button>
      </div>
      {showSolution && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="border-t border-gray-50 dark:border-gray-800 px-5 py-4 bg-gray-50/50 dark:bg-gray-800/30"
        >
          <div className="ml-10 space-y-3">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1.5">Solution</p>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">{example.solution}</p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg px-4 py-2.5 border border-green-200 dark:border-green-800">
              <p className="text-xs font-bold text-green-700 dark:text-green-400">
                Answer: <span className="font-mono">{example.answer}</span>
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

function Section({
  icon: Icon,
  title,
  color,
  delay,
  children,
}: {
  icon: React.ElementType;
  title: string;
  color: string;
  delay: number;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="flex items-center gap-2.5 mb-4">
        <div className={`w-8 h-8 rounded-xl ${color} flex items-center justify-center`}>
          <Icon className="w-4 h-4" />
        </div>
        <h2 className="font-display text-lg font-semibold text-gray-950 dark:text-white">{title}</h2>
      </div>
      {children}
    </motion.div>
  );
}

export default function AptitudeTheoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const theory = slug ? getTopicTheory(slug) : undefined;

  const { data: topic, isLoading } = useQuery({
    queryKey: [...queryKeys.aptitude.topic(slug!), 1],
    queryFn: () =>
      api.get<AptitudeTopicDetail>(`/aptitude/topics/${slug}?page=1&limit=1`).then((r) => r.data),
    enabled: !!slug,
  });

  if (isLoading) return <LoadingScreen />;

  if (slug && !theory) {
    return <Navigate to={`/learn/aptitude/${slug}/practice`} replace />;
  }

  if (!theory) {
    return (
      <div className="max-w-4xl mx-auto text-center py-12">
        <p className="text-gray-500">Topic not found</p>
        <Link to="/learn/aptitude" className="text-indigo-600 hover:underline mt-2 inline-block">
          Back to topics
        </Link>
      </div>
    );
  }

  const basePath = "/learn/aptitude";
  let delay = 0.1;
  const nextDelay = () => { delay += 0.08; return delay; };

  return (
    <div className="relative max-w-4xl mx-auto pb-16">
      <SEO title={`${topic?.name ?? slug} — Learn`} noIndex />

      {/* Atmospheric background */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-150 h-150 bg-linear-to-br from-purple-100 to-violet-100 dark:from-purple-900/20 dark:to-violet-900/20 rounded-full blur-3xl opacity-40" />
        <div className="absolute -bottom-32 -left-32 w-125 h-125 bg-linear-to-tr from-slate-100 to-indigo-100 dark:from-slate-900/20 dark:to-indigo-900/20 rounded-full blur-3xl opacity-40" />
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
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
          <ArrowLeft className="w-4 h-4" /> Back to {topic?.categoryName ?? "Categories"}
        </Link>
        <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-gray-950 dark:text-white mb-2">
          {topic?.name ?? slug}
        </h1>
        {topic?.description && (
          <p className="text-sm text-gray-500 dark:text-gray-500 max-w-lg mx-auto">{topic.description}</p>
        )}
        {topic && (
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-2 tabular-nums">
            {topic.totalQuestions} practice questions available
          </p>
        )}
      </motion.div>

      {/* Content sections */}
      <div className="space-y-10">
        {/* Introduction */}
        <Section icon={BookOpen} title="Introduction" color="bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400" delay={nextDelay()}>
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 px-6 py-5">
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
              {theory.introduction}
            </p>
          </div>
        </Section>

        {/* Key Concepts */}
        {theory.concepts && theory.concepts.length > 0 && (
          <Section icon={Target} title="Key Concepts" color="bg-cyan-50 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400" delay={nextDelay()}>
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 px-6 py-5">
              <ul className="space-y-2.5">
                {theory.concepts.map((c, i) => (
                  <li key={i} className="flex gap-3 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Section>
        )}

        {/* Formulas */}
        {theory.formulas && theory.formulas.length > 0 && (
          <Section icon={Calculator} title="Key Formulas" color="bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400" delay={nextDelay()}>
            <div className="grid gap-3 sm:grid-cols-2">
              {theory.formulas.map((f, i) => (
                <FormulaCard key={i} formula={f} />
              ))}
            </div>
          </Section>
        )}

        {/* Rules */}
        {theory.rules && theory.rules.length > 0 && (
          <Section icon={ListChecks} title="Important Rules" color="bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400" delay={nextDelay()}>
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 px-6 py-5">
              <ol className="space-y-3">
                {theory.rules.map((r, i) => (
                  <li key={i} className="flex gap-3 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    <span className="shrink-0 w-6 h-6 rounded-lg bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-[10px] font-bold text-indigo-600 dark:text-indigo-400 mt-0.5">
                      {i + 1}
                    </span>
                    <span>{r}</span>
                  </li>
                ))}
              </ol>
            </div>
          </Section>
        )}

        {/* Methods / Approach */}
        {theory.methods && theory.methods.length > 0 && (
          <Section icon={FileText} title="Methods & Approach" color="bg-violet-50 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400" delay={nextDelay()}>
            <div className="space-y-3">
              {theory.methods.map((m, i) => (
                <MethodCard key={i} method={m} index={i} />
              ))}
            </div>
          </Section>
        )}

        {/* Quick Tricks */}
        {theory.quickTricks && theory.quickTricks.length > 0 && (
          <Section icon={Zap} title="Quick Tricks & Shortcuts" color="bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400" delay={nextDelay()}>
            <div className="bg-amber-50/50 dark:bg-amber-900/10 rounded-2xl border border-amber-200/50 dark:border-amber-800/30 px-6 py-5">
              <ul className="space-y-3">
                {theory.quickTricks.map((t, i) => (
                  <li key={i} className="flex gap-3 text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
                    <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Section>
        )}

        {/* Solved Examples */}
        {theory.solvedExamples.length > 0 && (
          <Section icon={FileText} title="Solved Examples" color="bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400" delay={nextDelay()}>
            <div className="space-y-3">
              {theory.solvedExamples.map((ex, i) => (
                <ExampleCard key={i} example={ex} index={i} />
              ))}
            </div>
          </Section>
        )}

        {/* Common Mistakes */}
        {theory.commonMistakes && theory.commonMistakes.length > 0 && (
          <Section icon={AlertTriangle} title="Common Mistakes" color="bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400" delay={nextDelay()}>
            <div className="bg-red-50/50 dark:bg-red-900/10 rounded-2xl border border-red-200/50 dark:border-red-800/30 px-6 py-5">
              <ul className="space-y-3">
                {theory.commonMistakes.map((m, i) => (
                  <li key={i} className="flex gap-3 text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
                    <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Section>
        )}

        {/* Key Takeaways */}
        {theory.keyTakeaways.length > 0 && (
          <Section icon={CheckCircle2} title="Key Takeaways" color="bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400" delay={nextDelay()}>
            <div className="bg-emerald-50/50 dark:bg-emerald-900/10 rounded-2xl border border-emerald-200/50 dark:border-emerald-800/30 px-6 py-5">
              <ul className="space-y-2.5">
                {theory.keyTakeaways.map((t, i) => (
                  <li key={i} className="flex gap-3 text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Section>
        )}
      </div>

      {/* Start Practice CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: nextDelay() }}
        className="mt-12 text-center"
      >
        <Link
          to={`${basePath}/${slug}/practice`}
          className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl shadow-lg shadow-purple-200 dark:shadow-purple-900/30 transition-all duration-200 hover:shadow-xl hover:shadow-purple-300 dark:hover:shadow-purple-900/40 no-underline text-sm"
        >
          Start Practice
          <ChevronRight className="w-4 h-4" />
        </Link>
        {topic && (
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-3">
            {topic.totalQuestions} questions available
          </p>
        )}
      </motion.div>
    </div>
  );
}
