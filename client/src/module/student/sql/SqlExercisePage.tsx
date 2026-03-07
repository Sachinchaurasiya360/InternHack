import { useState, useEffect, useCallback, useMemo } from "react";
import { useParams, Link, useLocation, useNavigate } from "react-router";
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

function getProgress(): Record<string, { solved: boolean; code: string }> {
  try {
    return JSON.parse(localStorage.getItem("sql-progress") || "{}");
  } catch {
    return {};
  }
}

function saveProgress(id: string, solved: boolean, code: string) {
  const progress = getProgress();
  progress[id] = { solved, code };
  localStorage.setItem("sql-progress", JSON.stringify(progress));
}

const DIFF_BADGE: Record<string, string> = {
  Easy: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400",
  Medium: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-400",
  Hard: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400",
};

export default function SqlExercisePage() {
  const { sectionSlug, exerciseId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const isStudentRoute = location.pathname.startsWith("/student");
  const basePath = isStudentRoute ? "/student/sql" : "/sql";

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
  const [showHints, setShowHints] = useState(0); // how many hints to show
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
    const saved = getProgress();
    const savedEntry = saved[exercise.id];
    setCode(savedEntry?.code || exercise.starterCode);
    setSolved(!!savedEntry?.solved);

    load();
  }, [exercise?.id, section?.id]);

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
        saveProgress(exercise.id, true, code);
      } else {
        saveProgress(exercise.id, false, code);
      }
    }

    // Reload dataset in case user ran DML
    if (/^\s*(INSERT|UPDATE|DELETE|DROP|CREATE|ALTER)/i.test(code.trim())) {
      const datasetSql = datasets[exercise.dataset];
      if (datasetSql) {
        await sqlEngine.resetDataset(exercise.dataset, datasetSql);
      }
    }
  }, [code, exercise, dbReady]);

  const handleReset = useCallback(() => {
    if (!exercise) return;
    setCode(exercise.starterCode);
    setResult(null);
    setValidation(null);
    setShowHints(0);
    setShowExpected(false);
  }, [exercise]);

  // Section exercise list view
  if (!exerciseId && section) {
    const progress = getProgress();
    return (
      <div className="max-w-4xl mx-auto">
        <SEO title={section.title} noIndex />
        <div className="mb-6">
          <Link
            to={basePath}
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-3"
          >
            <ArrowLeft className="w-4 h-4" />
            SQL Practice
          </Link>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{section.title}</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{section.description}</p>
        </div>

        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden divide-y divide-gray-100 dark:divide-gray-800">
          {sectionExercises.map((ex, i) => {
            const isSolved = progress[ex.id]?.solved;
            return (
              <Link
                key={ex.id}
                to={`${basePath}/${sectionSlug}/${ex.id}`}
                className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
              >
                <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0">
                  {isSolved ? (
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                  ) : (
                    <span className="w-6 h-6 rounded-full border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center text-gray-400 text-xs">
                      {i + 1}
                    </span>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <span className={`text-sm font-medium ${isSolved ? "text-gray-400 dark:text-gray-500" : "text-gray-900 dark:text-white"}`}>
                    {ex.title}
                  </span>
                  <div className="flex items-center gap-2 mt-0.5">
                    {ex.concepts.slice(0, 3).map((c) => (
                      <span key={c} className="text-[10px] px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${DIFF_BADGE[ex.difficulty]}`}>
                  {ex.difficulty}
                </span>
                <ChevronRight className="w-4 h-4 text-gray-400 shrink-0" />
              </Link>
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
    <div className="max-w-5xl mx-auto">
      <SEO title={exercise.title} noIndex />

      {/* Header */}
      <div className="mb-4">
        <Link
          to={`${basePath}/${sectionSlug}`}
          className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-2"
        >
          <ArrowLeft className="w-4 h-4" />
          {section.title}
        </Link>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">
              {currentIndex + 1}. {exercise.title}
            </h1>
            <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${DIFF_BADGE[exercise.difficulty]}`}>
              {exercise.difficulty}
            </span>
            {solved && <CheckCircle2 className="w-5 h-5 text-green-500" />}
          </div>

          {/* Nav arrows */}
          <div className="flex items-center gap-1">
            {prevExercise && (
              <button
                onClick={() => navigate(`${basePath}/${sectionSlug}/${prevExercise.id}`)}
                className="p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                title="Previous"
              >
                <ChevronLeft className="w-4 h-4 text-gray-500" />
              </button>
            )}
            <span className="text-xs text-gray-400 px-1">
              {currentIndex + 1}/{sectionExercises.length}
            </span>
            {nextExercise && (
              <button
                onClick={() => navigate(`${basePath}/${sectionSlug}/${nextExercise.id}`)}
                className="p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                title="Next"
              >
                <ChevronRight className="w-4 h-4 text-gray-500" />
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-4">
        <div className="space-y-4">
          {/* Description */}
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-4">
            <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-line">
              {exercise.description}
            </p>
            <div className="flex items-center gap-2 mt-3">
              {exercise.concepts.map((c) => (
                <span key={c} className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 font-medium">
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Editor */}
          <SqlEditor
            value={code}
            onChange={setCode}
            onRun={handleRun}
            disabled={!dbReady}
          />

          {/* Action buttons */}
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
              Reset
            </button>

            <button
              onClick={() => setShowHints((h) => Math.min(h + 1, exercise.hints.length))}
              disabled={showHints >= exercise.hints.length}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 hover:bg-amber-100 dark:hover:bg-amber-900/40 disabled:opacity-40 rounded-md transition-colors"
            >
              <Lightbulb className="w-3 h-3" />
              Hint ({showHints}/{exercise.hints.length})
            </button>

            <button
              onClick={() => setShowExpected((s) => !s)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/40 rounded-md transition-colors"
            >
              {showExpected ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
              {showExpected ? "Hide" : "Show"} Expected
            </button>

            <button
              onClick={() => setShowSchema((s) => !s)}
              className="lg:hidden inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md transition-colors"
            >
              <Database className="w-3 h-3" />
              Schema
            </button>

            <button
              onClick={() => {
                setCode(exercise.solution);
              }}
              className="ml-auto inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 rounded-md transition-colors"
            >
              Show Solution
            </button>
          </div>

          {/* Hints */}
          {showHints > 0 && (
            <div className="space-y-2">
              {exercise.hints.slice(0, showHints).map((hint, i) => (
                <div key={i} className="flex items-start gap-2 p-3 bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800 rounded-lg">
                  <Lightbulb className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                  <p className="text-sm text-amber-800 dark:text-amber-300">{hint}</p>
                </div>
              ))}
            </div>
          )}

          {/* Results */}
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-4">
            <SqlResultTable
              result={result}
              validation={validation}
              showExpected={showExpected}
              expectedOutput={
                showExpected && result
                  ? undefined // We compute on-the-fly by running the solution
                  : undefined
              }
            />
          </div>

          {/* Navigation */}
          {(validation?.correct || solved) && nextExercise && (
            <div className="flex justify-end">
              <button
                onClick={() => navigate(`${basePath}/${sectionSlug}/${nextExercise.id}`)}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
              >
                Next Exercise
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {/* Schema panel (desktop sidebar) */}
        <div className="hidden lg:block">
          <div className="sticky top-4">
            <SqlSchemaPanel tables={schema} onClose={() => {}} />
          </div>
        </div>

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
