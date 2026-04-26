import { useState, useEffect, useCallback, useMemo } from "react";
import { useParams, Link, useNavigate, Navigate } from "react-router";
import { motion } from "framer-motion";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
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

const DIFF_COLOR: Record<string, string> = {
  Easy: "text-emerald-600 dark:text-emerald-400",
  Medium: "text-amber-600 dark:text-amber-400",
  Hard: "text-rose-600 dark:text-rose-400",
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
    const sectionNum = sectionIndex >= 0 ? String(sectionIndex + 1).padStart(2, "0") : "00";

    return (
      <div className="bg-stone-50 dark:bg-stone-950 min-h-[calc(100vh-4rem)]">
        <SEO
          title={`${section.title}, SQL Exercises`}
          description={`Practice ${section.title} SQL exercises with an interactive editor.`}
          canonicalUrl={canonicalUrl(`/learn/sql/${sectionSlug}`)}
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-8">
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
                sql / section {sectionNum}
              </span>
            </div>
            <div className="flex items-end justify-between gap-4 flex-wrap">
              <div className="min-w-0">
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-50 mb-1.5">
                  {section.title}
                </h1>
                <p className="text-sm text-stone-600 dark:text-stone-400 max-w-2xl">
                  {section.description}
                </p>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 flex-wrap">
                <span>
                  <span className="text-stone-900 dark:text-stone-50">{solvedCount}</span>
                  <span className="text-stone-400 dark:text-stone-600"> / {sectionExercises.length} solved</span>
                </span>
                <span className="h-1 w-1 bg-stone-300 dark:bg-stone-700" />
                <span className="text-lime-600 dark:text-lime-400">{pct}% complete</span>
              </div>
            </div>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-0 border-t border-l border-stone-200 dark:border-white/10 mb-8"
          >
            {[
              { icon: BookOpen, value: sectionExercises.length, label: "exercises" },
              { icon: TrendingUp, value: solvedCount, label: "solved" },
              { icon: CheckCircle2, value: `${pct}%`, label: "complete" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex items-start gap-3 p-4 bg-white dark:bg-stone-900 border-r border-b border-stone-200 dark:border-white/10"
              >
                <div className="w-8 h-8 rounded-md bg-stone-100 dark:bg-white/5 flex items-center justify-center shrink-0">
                  <stat.icon className="w-4 h-4 text-lime-600 dark:text-lime-400" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
                    {stat.value}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
                    / {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>

          <div className="flex items-center gap-2 mb-3">
            <div className="h-1 w-1 bg-lime-400"></div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
              exercises / {sectionExercises.length}
            </span>
          </div>

          {/* Exercise list */}
          <div className="space-y-2">
            {sectionExercises.map((ex, i) => {
              const isSolved = progress[ex.id]?.solved;
              const exNum = String(i + 1).padStart(2, "0");

              return (
                <motion.div
                  key={ex.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.03 }}
                >
                  <Link
                    to={`${basePath}/${sectionSlug}/${ex.id}`}
                    className="group flex items-center gap-4 bg-white dark:bg-stone-900 px-5 py-4 rounded-md border border-stone-200 dark:border-white/10 hover:border-stone-400 dark:hover:border-white/25 transition-colors no-underline"
                  >
                    <div className="flex flex-col items-center gap-1.5 shrink-0 w-14">
                      <div
                        className={`w-14 h-14 rounded-md flex items-center justify-center ${
                          isSolved
                            ? "bg-stone-900 dark:bg-stone-50 text-lime-400"
                            : "bg-stone-100 dark:bg-white/5 text-stone-500 dark:text-stone-400"
                        }`}
                      >
                        {isSolved ? (
                          <CheckCircle2 className="w-5 h-5" />
                        ) : (
                          <span className="text-sm font-mono font-bold">{exNum}</span>
                        )}
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400 dark:text-stone-500">
                        / {exNum}
                      </span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <h3
                          className={`text-base font-bold tracking-tight truncate ${
                            isSolved
                              ? "text-stone-400 dark:text-stone-500 line-through"
                              : "text-stone-900 dark:text-stone-50"
                          }`}
                        >
                          {ex.title}
                        </h3>
                        {isSolved && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-widest px-1.5 py-0.5 rounded-md bg-stone-900 dark:bg-stone-50 text-lime-400">
                            <CheckCircle2 className="w-3 h-3" />
                            solved
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 flex-wrap">
                        <span className={DIFF_COLOR[ex.difficulty]}>/ {ex.difficulty.toLowerCase()}</span>
                        {ex.concepts.slice(0, 4).map((c) => (
                          <span key={c} className="inline-flex items-center gap-1.5">
                            <span className="h-1 w-1 bg-stone-300 dark:bg-stone-700" />
                            <span>{c}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    <ArrowRight className="w-4 h-4 text-stone-400 dark:text-stone-500 group-hover:text-lime-600 dark:group-hover:text-lime-400 group-hover:translate-x-0.5 transition-all shrink-0" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  if (!exercise || !section) {
    return (
      <div className="bg-stone-50 dark:bg-stone-950 min-h-[calc(100vh-4rem)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-16 text-center">
          <p className="text-sm text-stone-500 dark:text-stone-400">Exercise not found.</p>
          <Link
            to={basePath}
            className="inline-block mt-3 text-[10px] font-mono uppercase tracking-widest text-lime-600 dark:text-lime-400 hover:underline"
          >
            / return to sql practice
          </Link>
        </div>
      </div>
    );
  }

  const exerciseNum = String(currentIndex + 1).padStart(2, "0");
  const sectionNum = sectionIndex >= 0 ? String(sectionIndex + 1).padStart(2, "0") : "00";
  const progressPct = sectionExercises.length > 0
    ? Math.round(((currentIndex + 1) / sectionExercises.length) * 100)
    : 0;

  return (
    <div className="bg-stone-50 dark:bg-stone-950 min-h-[calc(100vh-4rem)]">
      <SEO
        title={`${exercise.title}, SQL Exercise`}
        description={`Solve the ${exercise.title} SQL exercise with instant feedback.`}
        canonicalUrl={canonicalUrl(`/learn/sql/${sectionSlug}/${exerciseId}`)}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-8">
        {/* Editorial header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-6"
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="h-1 w-1 bg-lime-400"></div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
              sql / section {sectionNum} / exercise {exerciseNum}
            </span>
          </div>
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <div className="min-w-0 flex-1">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-50 mb-1.5 wrap-break-word">
                {exercise.title}
              </h1>
              <div className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 flex-wrap">
                <span className={DIFF_COLOR[exercise.difficulty]}>/ {exercise.difficulty.toLowerCase()}</span>
                {solved && (
                  <>
                    <span className="h-1 w-1 bg-stone-300 dark:bg-stone-700" />
                    <span className="inline-flex items-center gap-1 text-lime-600 dark:text-lime-400">
                      <CheckCircle2 className="w-3 h-3" />
                      solved
                    </span>
                  </>
                )}
              </div>
            </div>

            {/* Prev/next controls */}
            <div className="flex items-center gap-1 shrink-0">
              <button
                type="button"
                onClick={() => prevExercise && navigate(`${basePath}/${sectionSlug}/${prevExercise.id}`)}
                disabled={!prevExercise}
                title="Previous"
                className="w-8 h-8 rounded-md flex items-center justify-center bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 text-stone-700 dark:text-stone-300 hover:border-stone-400 dark:hover:border-white/25 transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 px-2 tabular-nums">
                <span className="text-stone-900 dark:text-stone-50">{currentIndex + 1}</span>
                <span className="text-stone-400 dark:text-stone-600"> / {sectionExercises.length}</span>
              </span>
              <button
                type="button"
                onClick={() => nextExercise && navigate(`${basePath}/${sectionSlug}/${nextExercise.id}`)}
                disabled={!nextExercise}
                title="Next"
                className="w-8 h-8 rounded-md flex items-center justify-center bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 text-stone-700 dark:text-stone-300 hover:border-stone-400 dark:hover:border-white/25 transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Section progress bar */}
          <div className="mt-4 w-full h-0.5 bg-stone-200 dark:bg-white/10 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progressPct}%` }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="h-full bg-lime-400"
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-5">
          <div className="space-y-5">
            {/* Problem description */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md overflow-hidden"
            >
              <div className="flex items-center gap-2 px-4 py-2.5 bg-stone-50 dark:bg-stone-950/40 border-b border-stone-200 dark:border-white/10">
                <div className="h-1 w-1 bg-lime-400"></div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
                  problem
                </span>
              </div>
              <div className="p-5">
                <p className="text-sm text-stone-700 dark:text-stone-300 whitespace-pre-line leading-relaxed">
                  {exercise.description}
                </p>
                {exercise.concepts.length > 0 && (
                  <div className="flex items-center gap-1.5 mt-4 flex-wrap">
                    {exercise.concepts.map((c) => (
                      <span
                        key={c}
                        className="text-[10px] font-mono px-1.5 py-0.5 rounded-md bg-stone-100 dark:bg-white/5 text-stone-600 dark:text-stone-400"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>

            {/* Editor */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
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
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex items-center gap-2 flex-wrap"
            >
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-md text-[10px] font-mono uppercase tracking-widest text-stone-700 dark:text-stone-300 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 hover:bg-stone-50 dark:hover:bg-white/5 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                reset
              </button>

              <button
                type="button"
                onClick={() => setShowHints((h) => Math.min(h + 1, exercise.hints.length))}
                disabled={showHints >= exercise.hints.length}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-md text-[10px] font-mono uppercase tracking-widest text-amber-700 dark:text-amber-300 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 hover:bg-stone-50 dark:hover:bg-white/5 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Lightbulb className="w-3 h-3" />
                hint {showHints}/{exercise.hints.length}
              </button>

              <button
                type="button"
                onClick={() => setShowExpected((s) => !s)}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-md text-[10px] font-mono uppercase tracking-widest text-stone-700 dark:text-stone-300 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 hover:bg-stone-50 dark:hover:bg-white/5 transition-colors cursor-pointer"
              >
                {showExpected ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
                {showExpected ? "hide expected" : "show expected"}
              </button>

              <button
                type="button"
                onClick={() => setShowSchema((s) => !s)}
                className="lg:hidden inline-flex items-center gap-1.5 px-3 py-2 rounded-md text-[10px] font-mono uppercase tracking-widest text-stone-700 dark:text-stone-300 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 hover:bg-stone-50 dark:hover:bg-white/5 transition-colors cursor-pointer"
              >
                <Database className="w-3 h-3" />
                schema
              </button>

              <button
                type="button"
                onClick={() => setCode(exercise.solution)}
                className="ml-auto inline-flex items-center gap-1.5 px-3 py-2 rounded-md text-[10px] font-mono uppercase tracking-widest text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-50 hover:bg-stone-100 dark:hover:bg-white/5 transition-colors cursor-pointer"
              >
                <Eye className="w-3 h-3" />
                solution
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
                  <div
                    key={i}
                    className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md overflow-hidden"
                  >
                    <div className="flex items-center gap-2 px-4 py-2 bg-stone-50 dark:bg-stone-950/40 border-b border-stone-200 dark:border-white/10">
                      <div className="h-1 w-1 bg-amber-400"></div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
                        hint / {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="flex items-start gap-3 px-4 py-3">
                      <Lightbulb className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                      <p className="text-sm text-stone-700 dark:text-stone-300">{hint}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md overflow-hidden"
            >
              <div className="flex items-center gap-2 px-4 py-2.5 bg-stone-50 dark:bg-stone-950/40 border-b border-stone-200 dark:border-white/10">
                <div className="h-1 w-1 bg-lime-400"></div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
                  results
                </span>
              </div>
              <div className="p-5">
                <SqlResultTable
                  result={result}
                  validation={validation}
                  showExpected={showExpected}
                  expectedOutput={undefined}
                />
              </div>
            </motion.div>

            {/* Next exercise CTA */}
            {(validation?.correct || solved) && nextExercise && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex justify-end"
              >
                <button
                  type="button"
                  onClick={() => navigate(`${basePath}/${sectionSlug}/${nextExercise.id}`)}
                  className="group inline-flex items-center gap-1.5 px-4 py-2 rounded-md text-xs font-bold text-stone-950 bg-lime-400 hover:bg-lime-300 transition-colors cursor-pointer"
                >
                  Next exercise
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </motion.div>
            )}
          </div>

          {/* Schema panel (desktop sidebar) */}
          <motion.div
            initial={{ opacity: 0, x: 12 }}
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
            <div
              className="lg:hidden fixed inset-0 z-50 bg-stone-950/60 flex items-end sm:items-center justify-center p-4"
              onClick={() => setShowSchema(false)}
            >
              <div className="w-full max-w-sm" onClick={(e) => e.stopPropagation()}>
                <SqlSchemaPanel tables={schema} onClose={() => setShowSchema(false)} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
