import { useMemo } from "react";
import { Link, useLocation } from "react-router";
import { Database, CheckCircle2, ChevronRight, ArrowLeft, Terminal } from "lucide-react";
import { sections, exercises } from "./data/exercises";
import { SEO } from "../../../components/SEO";

function getProgress(): Record<string, { solved: boolean }> {
  try {
    return JSON.parse(localStorage.getItem("sql-progress") || "{}");
  } catch {
    return {};
  }
}

const DIFFICULTY_COLOR: Record<string, string> = {
  Easy: "text-green-600 dark:text-green-400",
  Medium: "text-yellow-600 dark:text-yellow-400",
  Hard: "text-red-600 dark:text-red-400",
};

const SECTION_ICONS: Record<number, string> = {
  0: "S", 1: "N", 2: "W", 3: "P", 4: "SS", 5: "AG",
  6: "J", 7: "J+", 8: "0", 9: "W", 10: "SJ", 11: "D", 12: "M",
};

export default function SqlPracticePage() {
  const location = useLocation();
  const isStudentRoute = location.pathname.startsWith("/student");
  const backLink = isStudentRoute ? "/student/dsa" : "/dsa";

  const progress = useMemo(() => getProgress(), []);

  const sectionStats = useMemo(() => {
    return sections.map((section) => {
      const sectionExercises = exercises.filter((e) => e.sectionId === section.id);
      const solved = sectionExercises.filter((e) => progress[e.id]?.solved).length;
      const total = sectionExercises.length;
      const difficulties = [...new Set(sectionExercises.map((e) => e.difficulty))];
      return { ...section, solved, total, difficulties };
    });
  }, [progress]);

  const totalSolved = Object.values(progress).filter((p) => p.solved).length;
  const totalExercises = exercises.length;

  return (
    <div className="max-w-4xl mx-auto">
      <SEO title="SQL Practice" noIndex />

      <div className="mb-6">
        <Link to={backLink} className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-3">
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center">
            <Database className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">SQL Practice</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Interactive SQL exercises — runs entirely in your browser
            </p>
          </div>
        </div>
      </div>

      {/* Playground card */}
      <Link
        to={`${isStudentRoute ? "/student/sql" : "/sql"}/playground`}
        className="flex items-center gap-4 p-4 mb-4 bg-linear-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border border-emerald-200 dark:border-emerald-800 rounded-xl hover:shadow-md transition-all group"
      >
        <div className="w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center shrink-0">
          <Terminal className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
            SQL Playground
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
            Open editor with pre-loaded tables — write any query and see results instantly
          </p>
        </div>
        <ChevronRight className="w-4 h-4 text-gray-400 shrink-0" />
      </Link>

      {/* Overall progress */}
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-4 mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Overall Progress</span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {totalSolved}/{totalExercises} exercises
          </span>
        </div>
        <div className="w-full h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-500 rounded-full transition-all duration-500"
            style={{ width: `${totalExercises > 0 ? (totalSolved / totalExercises) * 100 : 0}%` }}
          />
        </div>
      </div>

      {/* Section list */}
      <div className="space-y-3">
        {sectionStats.map((section, idx) => {
          const pct = section.total > 0 ? (section.solved / section.total) * 100 : 0;
          const basePath = isStudentRoute ? "/student/sql" : "/sql";

          return (
            <Link
              key={section.id}
              to={`${basePath}/${section.id}`}
              className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-sm transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-sm shrink-0">
                {SECTION_ICONS[idx] ?? idx}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate">
                    {section.title}
                  </h3>
                  {pct === 100 && section.total > 0 && (
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                  )}
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 truncate">
                  {section.description}
                </p>
                <div className="flex items-center gap-3 mt-1.5">
                  <div className="flex-1 max-w-48 h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-500 rounded-full transition-all"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <span className="text-[11px] text-gray-400 dark:text-gray-500">
                    {section.solved}/{section.total}
                  </span>
                  {section.difficulties.map((d) => (
                    <span key={d} className={`text-[10px] font-medium ${DIFFICULTY_COLOR[d]}`}>{d}</span>
                  ))}
                </div>
              </div>

              <ChevronRight className="w-4 h-4 text-gray-400 dark:text-gray-600 shrink-0" />
            </Link>
          );
        })}
      </div>

      {/* Info */}
      <div className="mt-6 p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
        <p className="text-xs text-blue-700 dark:text-blue-300">
          Powered by SQLite (WebAssembly). All queries run locally in your browser — no data leaves your machine. Progress is saved automatically.
        </p>
      </div>
    </div>
  );
}
