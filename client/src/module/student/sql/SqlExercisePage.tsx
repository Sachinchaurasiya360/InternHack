import { useState, useEffect, useCallback, useMemo } from "react";
import { useParams, Link, useNavigate, Navigate } from "react-router";
import { motion } from "framer-motion";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Lightbulb,
  RotateCcw,
  Eye,
  EyeOff,
  Database,
  CheckCircle2,
  ArrowRight,
  BookOpen,
  TrendingUp,
} from "lucide-react";
import { sections, exercises } from "./data/exercises";
import { datasets } from "./data/datasets";
import { sqlEngine } from "./lib/sql-engine";
import type { QueryResult } from "./lib/sql-engine";
import { validateResult } from "./lib/query-validator";
import type { ValidationResult } from "./lib/query-validator";
import SqlEditor from "./components/SqlEditor";
import SqlResultTable from "./components/SqlResultTable";
import SqlSchemaPanel from "./components/SqlSchemaPanel";
import type { TableInfo } from "./lib/sql-engine";
import { SEO } from "../../../components/SEO";
import { canonicalUrl } from "../../../lib/seo.utils";
import { useAuthStore } from "../../../lib/auth.store";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";

type SqlProgress = Record<string, { solved: boolean; code: string | null }>;

function getLocalProgress(): SqlProgress {
  try {
    return JSON.parse(localStorage.getItem("sql-progress") || "{}");
  } catch {
    return {};
  }
}

function saveLocalProgress(id: string, solved: boolean, code: string) {
  const progress = getLocalProgress();
  progress[id] = { solved, code };
  localStorage.setItem("sql-progress", JSON.stringify(progress));
}

function useSqlProgress() {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  const queryClient = useQueryClient();

  const { data: serverProgress } = useQuery<SqlProgress>({
    queryKey: queryKeys.sql.progress(),
    queryFn: async () => (await api.get("/sql/progress")).data,
    enabled: isAuthenticated,
    staleTime: 5 * 60 * 1000,
  });

  const mutation = useMutation({
    mutationFn: (vars: { exerciseId: string; solved: boolean; code: string }) =>
      api.post("/sql/progress", vars),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: queryKeys.sql.progress() }),
  });

  const progress: SqlProgress = isAuthenticated ? (serverProgress ?? {}) : getLocalProgress();

  const save = useCallback(
    (id: string, solved: boolean, code: string) => {
      if (isAuthenticated) {
        mutation.mutate({ exerciseId: id, solved, code });
      } else {
        saveLocalProgress(id, solved, code);
      }
    },
    [isAuthenticated, mutation]
  );

  return { progress, save };
}

const DIFF_BADGE: Record<string, string> = {
  Easy: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400",
  Medium: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-400",
  Hard: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400",
};

export default function SqlExercisePage() {
  const { sectionSlug, exerciseId } = useParams();
  const navigate = useNavigate();
  const basePath = "/learn/sql";

  const { progress, save } = useSqlProgress();

  const section = sections.find((s) => s.id === sectionSlug);
  const sectionExercises = useMemo(
    () => exercises.filter((e) => e.sectionId === sectionSlug),
    [sectionSlug]
  );

  // If no exerciseId, show the section exercise list
  const exercise = exerciseId
    ? sectionExercises.find((e) => e.id === exerciseId)
    : null;

  const currentIndex = exercise
    ? sectionExercises.findIndex((e) => e.id === exercise.id)
    : -1;
  const prevExercise = currentIndex > 0 ? sectionExercises[currentIndex - 1] : null;
  const nextExercise =
    currentIndex < sectionExercises.length - 1
      ? sectionExercises[currentIndex + 1]
      : null;

  const [code, setCode] = useState("");
  const [result, setResult] = useState<QueryResult | null>(null);
  const [validation, setValidation] = useState<ValidationResult | null>(null);
  const [showExpected, setShowExpected] = useState(false);
  const [showHints, setShowHints] = useState(0);
  const [showSchema, setShowSchema] = useState(false);
  const [schema, setSchema] = useState<TableInfo[]>([]);
  const [dbReady, setDbReady] = useState(false);
  const [solved, setSolved] = useState(false);

  // Load database and exercise
  useEffect(() => {
    if (!exercise || !section) return;

    const load = async () => {
      const datasetSql = datasets[exercise.dataset];
      if (datasetSql) {
        await sqlEngine.resetDataset(exercise.dataset, datasetSql);
      }
      setSchema(sqlEngine.getSchema());
      setDbReady(true);
    };

    setDbReady(false);
    setResult(null);
    setValidation(null);
    setShowHints(0);
    setShowExpected(false);

    // Restore saved code or use starter
    const savedEntry = progress[exercise.id];
    setCode(savedEntry?.code || exercise.starterCode);
    setSolved(!!savedEntry?.solved);

    load();
  }, [exercise?.id, section?.id, progress]);

  const handleRun = useCallback(async () => {
    if (!exercise || !dbReady) return;

    const queryResult = await sqlEngine.execute(code);
    setResult(queryResult);

    // Run solution to get expected output
    const expectedResult = await sqlEngine.execute(exercise.solution);
    if (!expectedResult.error) {
      const v = validateResult(queryResult, {
        columns: expectedResult.columns,
        rows: expectedResult.rows,
      });
      setValidation(v);

      if (v.correct) {
        setSolved(true);
        save(exercise.id, true, code);
      } else {
        save(exercise.id, false, code);
      }
    }

    // Reload dataset in case user ran DML
    if (/^\s*(INSERT|UPDATE|DELETE|DROP|CREATE|ALTER)/i.test(code.trim())) {
      const datasetSql = datasets[exercise.dataset];
      if (datasetSql) {
        await sqlEngine.resetDataset(exercise.dataset, datasetSql);
      }
    }
  }, [code, exercise, dbReady, save]);

  const handleReset = useCallback(() => {
    if (!exercise) return;
    setCode(exercise.starterCode);
    setResult(null);
    setValidation(null);
    setShowHints(0);
    setShowExpected(false);
  }, [exercise]);

  // Redirect if section is locked (index >= 5 and not authenticated)
  const sectionIndex = sections.findIndex((s) => s.id === sectionSlug);
  const isSqlAuthenticated = useAuthStore((s) => s.isAuthenticated);
  if (sectionIndex >= 5 && !isSqlAuthenticated) {
    return <Navigate to={basePath} replace />;
  }

  // Section exercise list view
  if (!exerciseId && section) {
    const solvedCount = sectionExercises.filter((e) => progress[e.id]?.solved).length;
    const pct = sectionExercises.length > 0 ? Math.round((solvedCount / sectionExercises.length) * 100) : 0;

    return (
      <div className="relative pb-12">
        <SEO
          title={`${section.title} - SQL Exercises`}
          description={`Practice ${section.title} SQL exercises with an interactive editor.`}
          canonicalUrl={canonicalUrl(`/learn/sql/${sectionSlug}`)}
        />

        {/* Atmospheric background */}
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
          <div className="absolute -top-32 -right-32 w-150 h-150 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-40" />
          <div className="absolute -bottom-32 -left-32 w-125 h-125 bg-slate-100 dark:bg-slate-900/20 rounded-full blur-3xl opacity-40" />
          <div
            className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
            style={{
              backgroundImage: "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
        </div>

        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            to={basePath}
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-6 no-underline"
          >
            <ArrowLeft className="w-4 h-4" />
            SQL Practice
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-8"
        >
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-gray-950 dark:text-white mb-3">
            {section.title}
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-500 max-w-xl mx-auto">
            {section.description}
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
            { icon: BookOpen, value: sectionExercises.length, label: "Exercises", iconColor: "text-blue-500" },
            { icon: TrendingUp, value: solvedCount, label: "Solved", iconColor: "text-violet-500" },
            { icon: CheckCircle2, value: `${pct}%`, label: "Complete", iconColor: "text-emerald-500" },
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

        {/* Exercise list */}
        <div className="space-y-3">
          {sectionExercises.map((ex, i) => {
            const isSolved = progress[ex.id]?.solved;
            return (
              <motion.div
                key={ex.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.04 }}
              >
                <Link
                  to={`${basePath}/${sectionSlug}/${ex.id}`}
                  className="group flex items-center gap-4 bg-white dark:bg-gray-900 px-5 py-4 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50 transition-all duration-300 no-underline"
                >
                  <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0">
                    {isSolved ? (
                      <CheckCircle2 className="w-6 h-6 text-green-500" />
                    ) : (
                      <span className="w-8 h-8 rounded-full border-2 border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-400 dark:text-gray-500 text-sm font-semibold">
                        {i + 1}
                      </span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`text-sm font-semibold mb-1 ${isSolved ? "text-gray-400 dark:text-gray-500 line-through" : "text-gray-900 dark:text-white"}`}>
                      {ex.title}
                    </p>
                    <div className="flex items-center gap-1.5 flex-wrap">
                      {ex.concepts.slice(0, 4).map((c) => (
                        <span key={c} className="text-[10px] px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 font-medium">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full shrink-0 ${DIFF_BADGE[ex.difficulty]}`}>
                    {ex.difficulty}
                  </span>
                  <ArrowRight className="w-4 h-4 text-gray-300 dark:text-gray-600 group-hover:text-gray-500 dark:group-hover:text-gray-400 group-hover:translate-x-0.5 transition-all shrink-0" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    );
  }

  if (!exercise || !section) {
    return (
      <div className="max-w-4xl mx-auto text-center py-12">
        <p className="text-gray-500">Exercise not found</p>
        <Link to={basePath} className="text-blue-500 hover:underline text-sm mt-2 inline-block">
          Back to SQL Practice
        </Link>
      </div>
    );
  }

  return (
    <div className="relative pb-12">
      <SEO
        title={`${exercise.title} - SQL Exercise`}
        description={`Solve the ${exercise.title} SQL exercise with instant feedback.`}
        canonicalUrl={canonicalUrl(`/learn/sql/${sectionSlug}/${exerciseId}`)}
      />

      {/* Atmospheric background */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-150 h-150 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-40" />
        <div className="absolute -bottom-32 -left-32 w-125 h-125 bg-indigo-100 dark:bg-indigo-900/20 rounded-full blur-3xl opacity-40" />
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
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="mb-6"
      >
        <Link
          to={`${basePath}/${sectionSlug}`}
          className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-4 no-underline transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          {section.title}
        </Link>

        <div className="flex items-center justify-between bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 px-6 py-4">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
              <span className="text-sm font-bold text-blue-600 dark:text-blue-400">{currentIndex + 1}</span>
            </div>
            <div className="min-w-0">
              <h1 className="font-display text-xl font-bold text-gray-950 dark:text-white truncate">
                {exercise.title}
              </h1>
              <div className="flex items-center gap-2 mt-1">
                <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${DIFF_BADGE[exercise.difficulty]}`}>
                  {exercise.difficulty}
                </span>
                {solved && (
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-green-600 dark:text-green-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Solved
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Nav arrows */}
          <div className="flex items-center gap-1 shrink-0">
            <button
              onClick={() => prevExercise && navigate(`${basePath}/${sectionSlug}/${prevExercise.id}`)}
              disabled={!prevExercise}
              className="p-2 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-30 transition-colors"
              title="Previous"
            >
              <ChevronLeft className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            </button>
            <span className="text-xs text-gray-400 dark:text-gray-500 px-2 font-medium tabular-nums">
              {currentIndex + 1} / {sectionExercises.length}
            </span>
            <button
              onClick={() => nextExercise && navigate(`${basePath}/${sectionSlug}/${nextExercise.id}`)}
              disabled={!nextExercise}
              className="p-2 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-30 transition-colors"
              title="Next"
            >
              <ChevronRight className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            </button>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-5">
        <div className="space-y-5">
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-5"
          >
            <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-line leading-relaxed">
              {exercise.description}
            </p>
            <div className="flex items-center gap-2 mt-4 flex-wrap">
              {exercise.concepts.map((c) => (
                <span key={c} className="text-[10px] px-2.5 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 font-medium">
                  {c}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Editor */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            <SqlEditor
              value={code}
              onChange={setCode}
              onRun={handleRun}
              disabled={!dbReady}
            />
          </motion.div>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex items-center gap-2 flex-wrap"
          >
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset
            </button>

            <button
              onClick={() => setShowHints((h) => Math.min(h + 1, exercise.hints.length))}
              disabled={showHints >= exercise.hints.length}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-amber-600 dark:text-amber-400 bg-white dark:bg-gray-900 border border-amber-200 dark:border-amber-800 hover:bg-amber-50 dark:hover:bg-amber-900/20 disabled:opacity-40 rounded-xl transition-colors"
            >
              <Lightbulb className="w-3.5 h-3.5" />
              Hint ({showHints}/{exercise.hints.length})
            </button>

            <button
              onClick={() => setShowExpected((s) => !s)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-blue-600 dark:text-blue-400 bg-white dark:bg-gray-900 border border-blue-200 dark:border-blue-800 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-xl transition-colors"
            >
              {showExpected ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
              {showExpected ? "Hide" : "Show"} Expected
            </button>

            <button
              onClick={() => setShowSchema((s) => !s)}
              className="lg:hidden inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl transition-colors"
            >
              <Database className="w-3.5 h-3.5" />
              Schema
            </button>

            <button
              onClick={() => setCode(exercise.solution)}
              className="ml-auto inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 rounded-xl transition-colors"
            >
              <Eye className="w-3.5 h-3.5" />
              Solution
            </button>
          </motion.div>

          {/* Hints */}
          {showHints > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-2"
            >
              {exercise.hints.slice(0, showHints).map((hint, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800 rounded-xl">
                  <Lightbulb className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                  <p className="text-sm text-amber-800 dark:text-amber-300">{hint}</p>
                </div>
              ))}
            </motion.div>
          )}

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-5"
          >
            <SqlResultTable
              result={result}
              validation={validation}
              showExpected={showExpected}
              expectedOutput={
                showExpected && result
                  ? undefined
                  : undefined
              }
            />
          </motion.div>

          {/* Navigation */}
          {(validation?.correct || solved) && nextExercise && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-end"
            >
              <button
                onClick={() => navigate(`${basePath}/${sectionSlug}/${nextExercise.id}`)}
                className="group inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-gray-950 dark:bg-white dark:text-gray-950 hover:bg-gray-800 dark:hover:bg-gray-100 rounded-xl transition-colors"
              >
                Next Exercise
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </motion.div>
          )}
        </div>

        {/* Schema panel (desktop sidebar) */}
        <motion.div
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="hidden lg:block"
        >
          <div className="sticky top-4">
            <SqlSchemaPanel tables={schema} onClose={() => {}} />
          </div>
        </motion.div>

        {/* Schema panel (mobile overlay) */}
        {showSchema && (
          <div className="lg:hidden fixed inset-0 z-50 bg-black/40 flex items-end sm:items-center justify-center p-4">
            <div className="w-full max-w-sm">
              <SqlSchemaPanel tables={schema} onClose={() => setShowSchema(false)} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
