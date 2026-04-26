import { useState } from "react";
import { useParams, Link, Navigate } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  ChevronDown,
  ArrowUpRight,
  Lightbulb,
  CheckCircle2,
} from "lucide-react";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import type { AptitudeTopicDetail } from "../../../lib/types";
import { getTopicTheory } from "./data";
import type { Formula, Method, SolvedExample } from "./data";
import { SEO } from "../../../components/SEO";
import { canonicalUrl, SITE_URL } from "../../../lib/seo.utils";
import { breadcrumbSchema } from "../../../lib/structured-data";
import { LoadingScreen } from "../../../components/LoadingScreen";

function Kicker({ label }: { label: string }) {
  return (
    <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-stone-500">
      <span className="h-1 w-1 bg-lime-400" />
      {label}
    </div>
  );
}

function FormulaCard({ formula }: { formula: Formula }) {
  return (
    <div className="bg-stone-50 dark:bg-stone-800/40 border border-stone-200 dark:border-white/10 rounded-md p-4">
      <p className="text-sm font-bold text-stone-900 dark:text-stone-50 mb-2">{formula.name}</p>
      <code className="block text-sm font-mono text-stone-900 dark:text-stone-50 bg-white dark:bg-stone-900 rounded-md px-3 py-2 border border-stone-200 dark:border-white/10 overflow-x-auto whitespace-pre">
        {formula.formula}
      </code>
      {formula.description && (
        <p className="text-xs text-stone-500 dark:text-stone-400 mt-2 leading-relaxed">{formula.description}</p>
      )}
    </div>
  );
}

function MethodCard({ method, index }: { method: Method; index: number }) {
  const [open, setOpen] = useState(index === 0);
  return (
    <div className="bg-white dark:bg-stone-900 rounded-md border border-stone-200 dark:border-white/10 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-3 px-5 py-4 text-left hover:bg-stone-50 dark:hover:bg-stone-800/50 transition-colors"
      >
        <span className="shrink-0 w-8 h-8 rounded-md bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-white/10 flex items-center justify-center text-[11px] font-mono font-bold tabular-nums text-stone-900 dark:text-stone-50">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="text-sm font-bold text-stone-900 dark:text-stone-50 flex-1">{method.name}</span>
        <ChevronDown className={`w-4 h-4 text-stone-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.25 }}
          className="px-5 pb-4 border-t border-stone-200 dark:border-white/10"
        >
          <ol className="space-y-2 mt-3">
            {method.steps.map((step, i) => (
              <li key={i} className="flex gap-3 text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                <span className="shrink-0 text-[10px] font-mono font-bold tabular-nums text-stone-500 mt-1 w-6">
                  {String(i + 1).padStart(2, "0")}
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
    <div className="bg-white dark:bg-stone-900 rounded-md border border-stone-200 dark:border-white/10 overflow-hidden">
      <div className="px-5 py-4">
        <div className="flex items-start gap-3">
          <span className="shrink-0 w-8 h-8 rounded-md bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-white/10 flex items-center justify-center text-[11px] font-mono font-bold tabular-nums text-stone-900 dark:text-stone-50">
            Q{String(index + 1).padStart(2, "0")}
          </span>
          <p className="text-sm text-stone-800 dark:text-stone-200 leading-relaxed flex-1 pt-1">{example.problem}</p>
        </div>
        <button
          onClick={() => setShowSolution(!showSolution)}
          className="mt-3 ml-0 sm:ml-11 inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-mono uppercase tracking-widest text-stone-900 dark:text-stone-50 border border-stone-300 dark:border-white/15 rounded-md hover:bg-lime-400 hover:border-lime-400 hover:text-stone-900 transition-colors"
        >
          {showSolution ? "hide solution" : "show solution"}
          <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${showSolution ? "rotate-180" : ""}`} />
        </button>
      </div>
      {showSolution && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="border-t border-stone-200 dark:border-white/10 px-5 py-4 bg-stone-50 dark:bg-stone-800/40"
        >
          <div className="ml-0 sm:ml-11 space-y-3">
            <div>
              <Kicker label="solution" />
              <p className="mt-2 text-sm text-stone-700 dark:text-stone-300 leading-relaxed whitespace-pre-line">
                {example.solution}
              </p>
            </div>
            <div className="bg-white dark:bg-stone-900 rounded-md px-4 py-2.5 border border-stone-200 dark:border-white/10">
              <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">answer</span>
              <span className="ml-2 font-mono text-sm font-bold text-stone-900 dark:text-stone-50">{example.answer}</span>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

function TheorySection({
  kicker,
  title,
  delay,
  children,
}: {
  kicker: string;
  title: string;
  delay: number;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
    >
      <div className="mb-4">
        <Kicker label={kicker} />
        <h2 className="mt-2 text-xl sm:text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
          {title}
        </h2>
      </div>
      {children}
    </motion.section>
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
      <div className="bg-stone-50 dark:bg-stone-950 min-h-[calc(100vh-4rem)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 py-20 text-center">
          <p className="text-sm text-stone-600 dark:text-stone-400">Topic not found.</p>
          <Link
            to="/learn/aptitude"
            className="mt-4 inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-mono uppercase tracking-widest text-stone-900 dark:text-stone-50 border border-stone-300 dark:border-white/15 rounded-md hover:bg-lime-400 hover:border-lime-400 hover:text-stone-900 transition-colors no-underline"
          >
            browse topics <ArrowUpRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    );
  }

  const basePath = "/learn/aptitude";
  let delay = 0.05;
  const nextDelay = () => { delay += 0.06; return delay; };

  const sectionCount =
    (theory.concepts?.length ? 1 : 0) +
    (theory.formulas?.length ? 1 : 0) +
    (theory.rules?.length ? 1 : 0) +
    (theory.methods?.length ? 1 : 0) +
    (theory.quickTricks?.length ? 1 : 0) +
    (theory.solvedExamples.length ? 1 : 0) +
    (theory.commonMistakes?.length ? 1 : 0) +
    (theory.keyTakeaways.length ? 1 : 0) +
    1; // introduction

  return (
    <div className="bg-stone-50 dark:bg-stone-950 min-h-[calc(100vh-4rem)] text-stone-900 dark:text-stone-50">
      <SEO
        title={`${topic?.name ?? slug} - Aptitude Theory & Formulas`}
        description={`Learn ${topic?.name ?? slug} concepts, formulas, and shortcuts for aptitude exams.`}
        keywords={`${topic?.name ?? slug}, aptitude theory, formulas, shortcuts`}
        canonicalUrl={canonicalUrl(`/learn/aptitude/${slug}`)}
        structuredData={[
          breadcrumbSchema([
            { name: "Home", url: SITE_URL },
            { name: "Learn", url: `${SITE_URL}/learn` },
            { name: "Aptitude", url: `${SITE_URL}/learn/aptitude` },
            { name: topic?.name ?? String(slug), url: `${SITE_URL}/learn/aptitude/${slug}` },
          ]),
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-8 py-8">
        {/* Editorial header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-2 mb-10 flex flex-wrap items-end justify-between gap-4 border-b border-stone-200 dark:border-white/10 pb-8"
        >
          <div className="min-w-0 flex-1">
            <Kicker label={`learn / aptitude / ${slug} / theory`} />
            <h1 className="mt-3 text-2xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-tight wrap-break-word">
              {topic?.name ?? slug}
            </h1>
            {topic?.description && (
              <p className="mt-3 text-sm text-stone-500 max-w-xl">{topic.description}</p>
            )}
          </div>
          <div className="flex items-center gap-x-4 gap-y-2 text-[10px] font-mono uppercase tracking-widest text-stone-500 flex-wrap">
            <span>
              sections
              <span className="text-stone-900 dark:text-stone-50 text-sm font-bold tabular-nums ml-2">
                {sectionCount}
              </span>
            </span>
            {topic && (
              <span>
                questions
                <span className="text-stone-900 dark:text-stone-50 text-sm font-bold tabular-nums ml-2">
                  {topic.totalQuestions}
                </span>
              </span>
            )}
          </div>
        </motion.div>

        {/* Content sections */}
        <div className="space-y-10">
          {/* Introduction */}
          <TheorySection kicker="01 / introduction" title="Introduction" delay={nextDelay()}>
            <div className="bg-white dark:bg-stone-900 rounded-md border border-stone-200 dark:border-white/10 px-6 py-5">
              <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed whitespace-pre-line">
                {theory.introduction}
              </p>
            </div>
          </TheorySection>

          {/* Key Concepts */}
          {theory.concepts && theory.concepts.length > 0 && (
            <TheorySection kicker="02 / key concepts" title="Key concepts" delay={nextDelay()}>
              <div className="bg-white dark:bg-stone-900 rounded-md border border-stone-200 dark:border-white/10 px-6 py-5">
                <ul className="space-y-2.5">
                  {theory.concepts.map((c, i) => (
                    <li key={i} className="flex gap-3 text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                      <span className="shrink-0 text-[10px] font-mono font-bold tabular-nums text-stone-500 mt-1 w-6">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TheorySection>
          )}

          {/* Formulas */}
          {theory.formulas && theory.formulas.length > 0 && (
            <TheorySection kicker="03 / formulas" title="Key formulas" delay={nextDelay()}>
              <div className="grid gap-3 sm:grid-cols-2">
                {theory.formulas.map((f, i) => (
                  <FormulaCard key={i} formula={f} />
                ))}
              </div>
            </TheorySection>
          )}

          {/* Rules */}
          {theory.rules && theory.rules.length > 0 && (
            <TheorySection kicker="04 / rules" title="Important rules" delay={nextDelay()}>
              <div className="bg-white dark:bg-stone-900 rounded-md border border-stone-200 dark:border-white/10 px-6 py-5">
                <ol className="space-y-3">
                  {theory.rules.map((r, i) => (
                    <li key={i} className="flex gap-3 text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                      <span className="shrink-0 w-7 h-7 rounded-md bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-white/10 flex items-center justify-center text-[10px] font-mono font-bold tabular-nums text-stone-900 dark:text-stone-50">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="pt-1">{r}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </TheorySection>
          )}

          {/* Methods / Approach */}
          {theory.methods && theory.methods.length > 0 && (
            <TheorySection kicker="05 / methods" title="Methods & approach" delay={nextDelay()}>
              <div className="space-y-3">
                {theory.methods.map((m, i) => (
                  <MethodCard key={i} method={m} index={i} />
                ))}
              </div>
            </TheorySection>
          )}

          {/* Quick Tricks */}
          {theory.quickTricks && theory.quickTricks.length > 0 && (
            <TheorySection kicker="06 / shortcuts" title="Quick tricks & shortcuts" delay={nextDelay()}>
              <div className="bg-white dark:bg-stone-900 rounded-md border border-stone-200 dark:border-white/10 px-6 py-5">
                <ul className="space-y-3">
                  {theory.quickTricks.map((t, i) => (
                    <li key={i} className="flex gap-3 text-sm text-stone-800 dark:text-stone-200 leading-relaxed">
                      <Lightbulb className="w-4 h-4 text-lime-500 shrink-0 mt-0.5" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TheorySection>
          )}

          {/* Solved Examples */}
          {theory.solvedExamples.length > 0 && (
            <TheorySection kicker="07 / worked examples" title="Solved examples" delay={nextDelay()}>
              <div className="space-y-3">
                {theory.solvedExamples.map((ex, i) => (
                  <ExampleCard key={i} example={ex} index={i} />
                ))}
              </div>
            </TheorySection>
          )}

          {/* Common Mistakes */}
          {theory.commonMistakes && theory.commonMistakes.length > 0 && (
            <TheorySection kicker="08 / pitfalls" title="Common mistakes" delay={nextDelay()}>
              <div className="bg-white dark:bg-stone-900 rounded-md border border-stone-200 dark:border-white/10 px-6 py-5">
                <ul className="space-y-3">
                  {theory.commonMistakes.map((m, i) => (
                    <li key={i} className="flex gap-3 text-sm text-stone-800 dark:text-stone-200 leading-relaxed">
                      <AlertTriangle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TheorySection>
          )}

          {/* Key Takeaways */}
          {theory.keyTakeaways.length > 0 && (
            <TheorySection kicker="09 / takeaways" title="Key takeaways" delay={nextDelay()}>
              <div className="bg-white dark:bg-stone-900 rounded-md border border-stone-200 dark:border-white/10 px-6 py-5">
                <ul className="space-y-2.5">
                  {theory.keyTakeaways.map((t, i) => (
                    <li key={i} className="flex gap-3 text-sm text-stone-800 dark:text-stone-200 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-lime-500 shrink-0 mt-0.5" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TheorySection>
          )}
        </div>

        {/* Start Practice CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: nextDelay() }}
          className="mt-12 pt-8 border-t border-stone-200 dark:border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
        >
          <div>
            <Kicker label="ready to practice" />
            <p className="mt-2 text-sm text-stone-600 dark:text-stone-400">
              Apply what you just read to real placement questions.
            </p>
          </div>
          <Link
            to={`${basePath}/${slug}/practice`}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-mono uppercase tracking-widest bg-stone-900 dark:bg-stone-50 border border-stone-900 dark:border-stone-50 text-stone-50 dark:text-stone-900 rounded-md hover:bg-lime-400 hover:border-lime-400 hover:text-stone-900 dark:hover:text-stone-900 transition-colors no-underline"
          >
            start practice
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
