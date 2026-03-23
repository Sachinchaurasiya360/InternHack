import { useState, useEffect, useCallback } from "react";
import {
  Database,
  Play,
  RotateCcw,
  ChevronDown,
  ChevronRight,
  Table,
  Clock,
  AlertTriangle,
  Trash2,
  Zap,
  X,
} from "lucide-react";
import CodeMirror from "@uiw/react-codemirror";
import { sql, SQLite } from "@codemirror/lang-sql";
import { keymap } from "@codemirror/view";
import { sqlEngine } from "./lib/sql-engine";
import type { QueryResult, TableInfo } from "./lib/sql-engine";
import { datasets } from "./data/datasets";
import { SEO } from "../../../components/SEO";
import { canonicalUrl } from "../../../lib/seo.utils";

const PRELOADED_DATASETS = ["world", "nobel", "football", "movie", "school"];

const DATASET_LABELS: Record<string, string> = {
  world: "World Countries",
  nobel: "Nobel Prizes",
  football: "Euro 2012 Football",
  movie: "Movies & Actors",
  school: "Teachers & Departments",
  transport: "Edinburgh Buses",
  election: "UK Elections",
};

const SAMPLE_QUERIES = [
  { label: "All countries", query: "SELECT * FROM world LIMIT 10;" },
  { label: "Top population", query: "SELECT name, population FROM world ORDER BY population DESC LIMIT 10;" },
  { label: "Nobel 2020+", query: "SELECT * FROM nobel WHERE yr >= 2020 ORDER BY yr;" },
  { label: "By continent", query: "SELECT continent, COUNT(*) as count FROM world GROUP BY continent ORDER BY count DESC;" },
  { label: "High GDP", query: "SELECT name, gdp FROM world WHERE gdp > 1000000000000 ORDER BY gdp DESC;" },
];

export default function SqlPlaygroundPage() {
  const [code, setCode] = useState("SELECT name, continent, population\nFROM world\nORDER BY population DESC\nLIMIT 10;");
  const [results, setResults] = useState<QueryResult[]>([]);
  const [schema, setSchema] = useState<TableInfo[]>([]);
  const [expandedTables, setExpandedTables] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState(0);
  const [history, setHistory] = useState<{ query: string; time: number; rows: number; error?: string }[]>([]);
  const [showHistory, setShowHistory] = useState(false);
  const [sidebarSection, setSidebarSection] = useState<"tables" | "datasets">("tables");

  useEffect(() => {
    const init = async () => {
      for (const name of PRELOADED_DATASETS) {
        if (datasets[name]) {
          await sqlEngine.loadDataset(name, datasets[name]);
        }
      }
      setSchema(sqlEngine.getSchema());
      setLoading(false);
      const tables = sqlEngine.getSchema();
      if (tables.length > 0) {
        setExpandedTables(new Set([tables[0].name]));
      }
    };
    init();
  }, []);

  const handleRun = useCallback(async () => {
    if (!code.trim()) return;
    const queryResult = await sqlEngine.execute(code);
    setResults((prev) => [...prev, queryResult]);
    setActiveTab(results.length);
    setHistory((prev) => [
      { query: code.trim(), time: queryResult.timeMs, rows: queryResult.rowCount, error: queryResult.error },
      ...prev,
    ].slice(0, 50));
    setSchema(sqlEngine.getSchema());
  }, [code, results.length]);

  const handleLoadDataset = useCallback(async (name: string) => {
    if (datasets[name]) {
      await sqlEngine.loadDataset(name, datasets[name]);
      setSchema(sqlEngine.getSchema());
    }
  }, []);

  const handleResetAll = useCallback(async () => {
    const tables = sqlEngine.getSchema();
    for (const t of tables) {
      try {
        await sqlEngine.execute(`DROP TABLE IF EXISTS "${t.name}"`);
      } catch { /* ignore */ }
    }
    for (const name of PRELOADED_DATASETS) {
      if (datasets[name]) {
        await sqlEngine.resetDataset(name, datasets[name]);
      }
    }
    setSchema(sqlEngine.getSchema());
    setResults([]);
    setActiveTab(0);
  }, []);

  const toggleTable = (name: string) => {
    setExpandedTables((prev) => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });
  };

  const previewTable = useCallback(async (tableName: string) => {
    setCode(`SELECT * FROM ${tableName} LIMIT 20;`);
    const queryResult = await sqlEngine.execute(`SELECT * FROM ${tableName} LIMIT 20;`);
    setResults((prev) => [...prev, queryResult]);
    setActiveTab(results.length);
  }, [results.length]);

  const runKeymap = keymap.of([
    { key: "Ctrl-Enter", mac: "Cmd-Enter", run: () => { handleRun(); return true; } },
  ]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-3" />
          <p className="text-sm text-gray-500 dark:text-gray-400">Loading SQL engine...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative max-w-[1400px] mx-auto pb-8">
      <SEO
        title="SQL Playground - Run SQL Queries Online"
        description="Free online SQL playground. Write and execute SQL queries in your browser with instant results."
        keywords="SQL playground, online SQL editor, run SQL queries, SQL sandbox"
        canonicalUrl={canonicalUrl("/learn/sql/playground")}
      />

      {/* Atmospheric background */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-150 h-150 bg-linear-to-br from-emerald-100 to-cyan-100 dark:from-emerald-900/20 dark:to-cyan-900/20 rounded-full blur-3xl opacity-40" />
        <div className="absolute -bottom-32 -left-32 w-125 h-125 bg-linear-to-tr from-slate-100 to-blue-100 dark:from-slate-900/20 dark:to-blue-900/20 rounded-full blur-3xl opacity-40" />
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <div>
            <h1 className="text-xl font-bold text-gray-950 dark:text-white tracking-tight">
              SQL <span className="text-gradient-accent">Playground</span>
            </h1>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">Write queries against pre-loaded datasets</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowHistory(!showHistory)}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 rounded-xl shadow-sm transition-colors"
          >
            <Clock className="w-3.5 h-3.5" />
            History
            {history.length > 0 && (
              <span className="ml-0.5 px-1.5 py-0.5 text-[10px] font-semibold bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded-md tabular-nums">
                {history.length}
              </span>
            )}
          </button>
          <button
            onClick={handleResetAll}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-red-600 dark:text-red-400 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-red-200 dark:hover:border-red-800 rounded-xl shadow-sm transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reset
          </button>
        </div>
      </div>

      {/* Quick queries row */}
      <div className="flex items-center gap-2 mb-4 overflow-x-auto pb-1">
        <span className="text-[11px] font-medium text-gray-400 dark:text-gray-500 shrink-0 mr-1">
          <Zap className="w-3 h-3 inline -mt-0.5" /> Quick:
        </span>
        {SAMPLE_QUERIES.map((sq, i) => (
          <button
            key={i}
            onClick={() => setCode(sq.query)}
            className="shrink-0 px-3 py-1.5 text-[11px] font-medium text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-gray-300 dark:hover:border-gray-700 hover:text-gray-700 dark:hover:text-gray-300 shadow-sm transition-colors"
          >
            {sq.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-4">
        {/* Left sidebar */}
        <div className="space-y-3">
          {/* Sidebar tab toggle */}
          <div className="bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 rounded-2xl shadow-sm overflow-hidden">
            <div className="flex border-b border-gray-100 dark:border-gray-800">
              {(["tables", "datasets"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setSidebarSection(tab)}
                  className={`flex-1 px-3 py-2.5 text-xs font-semibold transition-colors ${
                    sidebarSection === tab
                      ? "text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-800/60"
                      : "text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-400"
                  }`}
                >
                  {tab === "tables" ? "Tables" : "Datasets"}
                </button>
              ))}
            </div>

            {sidebarSection === "tables" && (
              <div className="p-2 space-y-0.5 max-h-[calc(100vh-380px)] overflow-y-auto">
                {schema.length === 0 && (
                  <p className="text-xs text-gray-400 dark:text-gray-500 p-3 text-center">No tables loaded</p>
                )}
                {schema.map((table) => (
                  <div key={table.name}>
                    <div className="flex items-center">
                      <button
                        onClick={() => toggleTable(table.name)}
                        className="flex-1 flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/60 text-left transition-colors"
                      >
                        {expandedTables.has(table.name) ? (
                          <ChevronDown className="w-3 h-3 text-gray-400 shrink-0" />
                        ) : (
                          <ChevronRight className="w-3 h-3 text-gray-400 shrink-0" />
                        )}
                        <Table className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{table.name}</span>
                      </button>
                      <button
                        onClick={() => previewTable(table.name)}
                        className="p-1 rounded-md hover:bg-emerald-50 dark:hover:bg-emerald-900/20 text-emerald-500 mr-1"
                        title="Preview data"
                      >
                        <Play className="w-3 h-3" />
                      </button>
                    </div>
                    {expandedTables.has(table.name) && (
                      <div className="ml-6 space-y-px mb-1.5">
                        {table.columns.map((col) => (
                          <div
                            key={col.name}
                            className="flex items-center gap-2 px-2.5 py-1 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-md transition-colors"
                            onClick={() => setCode((prev) => prev + col.name)}
                            title="Click to insert column name"
                          >
                            <span className="text-[11px] text-gray-600 dark:text-gray-400 font-mono">{col.name}</span>
                            <span className="text-[10px] text-gray-400 dark:text-gray-500 uppercase ml-auto font-medium">{col.type || "TEXT"}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {sidebarSection === "datasets" && (
              <div className="p-2 space-y-0.5">
                {Object.keys(datasets).map((name) => {
                  const isLoaded = schema.some((t) => t.name === name);
                  return (
                    <button
                      key={name}
                      onClick={() => handleLoadDataset(name)}
                      className="w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-left hover:bg-gray-50 dark:hover:bg-gray-800/60 transition-colors group"
                    >
                      <Database className="w-3.5 h-3.5 text-gray-400 dark:text-gray-500 group-hover:text-emerald-500 shrink-0 transition-colors" />
                      <span className="text-xs font-medium text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors flex-1">
                        {DATASET_LABELS[name] || name}
                      </span>
                      {isLoaded && (
                        <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400">
                          Loaded
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Right: Editor + Results */}
        <div className="flex flex-col gap-4 min-h-0">
          {/* Editor */}
          <div className="bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 rounded-2xl shadow-sm overflow-hidden shrink-0">
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-gray-100 dark:border-gray-800">
              <span className="text-xs font-semibold text-gray-600 dark:text-gray-400">Editor</span>
              <div className="flex items-center gap-3">
                <span className="text-[10px] text-gray-400 dark:text-gray-500 font-medium hidden sm:block">
                  Ctrl+Enter to run
                </span>
                <button
                  onClick={handleRun}
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-colors shadow-sm"
                >
                  <Play className="w-3 h-3" />
                  Run
                </button>
              </div>
            </div>
            <CodeMirror
              value={code}
              onChange={setCode}
              extensions={[sql({ dialect: SQLite }), runKeymap]}
              theme="dark"
              height="180px"
              basicSetup={{
                lineNumbers: true,
                foldGutter: false,
                autocompletion: true,
                bracketMatching: true,
                highlightActiveLine: true,
              }}
              className="text-sm"
            />
          </div>

          {/* Results area */}
          <div className="flex-1 bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 rounded-2xl shadow-sm overflow-hidden flex flex-col min-h-[200px]">
            {/* Result tabs */}
            {results.length > 0 ? (
              <div className="flex items-center border-b border-gray-100 dark:border-gray-800 px-2 overflow-x-auto">
                {results.map((r, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTab(i)}
                    className={`flex items-center gap-1.5 px-3 py-2.5 text-xs font-medium whitespace-nowrap border-b-2 transition-colors ${
                      i === activeTab
                        ? "border-emerald-500 text-emerald-600 dark:text-emerald-400"
                        : "border-transparent text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-400"
                    }`}
                  >
                    {r.error && <AlertTriangle className="w-3 h-3 text-red-500" />}
                    Result {i + 1}
                    <span className="text-[10px] text-gray-400 tabular-nums">({r.rowCount})</span>
                  </button>
                ))}
                <button
                  onClick={() => { setResults([]); setActiveTab(0); }}
                  className="ml-auto p-2 text-gray-300 dark:text-gray-600 hover:text-red-500 shrink-0 transition-colors"
                  title="Clear all results"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <div className="flex-1 flex items-center justify-center text-gray-400 dark:text-gray-500 p-8">
                <div className="text-center">
                  <Database className="w-10 h-10 mx-auto mb-3 opacity-20" />
                  <p className="text-sm font-medium text-gray-400 dark:text-gray-500">Run a query to see results</p>
                  <p className="text-xs text-gray-300 dark:text-gray-600 mt-1">
                    Pre-loaded: world, nobel, football, movie, school
                  </p>
                </div>
              </div>
            )}

            {/* Active result */}
            {results.length > 0 && results[activeTab] && (
              <div className="flex-1 overflow-auto p-4">
                {/* Status bar */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    {results[activeTab].error ? (
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 px-2.5 py-1 rounded-lg">
                        <AlertTriangle className="w-3 h-3" /> Error
                      </span>
                    ) : (
                      <span className="text-xs text-gray-500 dark:text-gray-400 font-medium tabular-nums">
                        {results[activeTab].rowCount} rows returned
                      </span>
                    )}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] text-gray-400 dark:text-gray-500 font-medium tabular-nums">
                    <Clock className="w-3 h-3" />
                    {results[activeTab].timeMs}ms
                  </span>
                </div>

                {/* Error */}
                {results[activeTab].error && (
                  <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
                    <pre className="text-sm text-red-700 dark:text-red-300 whitespace-pre-wrap font-mono">
                      {results[activeTab].error}
                    </pre>
                  </div>
                )}

                {/* Table */}
                {!results[activeTab].error && results[activeTab].columns.length > 0 && (
                  <div className="border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
                    <div className="overflow-x-auto max-h-[calc(100vh-520px)]">
                      <table className="w-full text-sm">
                        <thead className="sticky top-0">
                          <tr className="bg-gray-50 dark:bg-gray-800/60">
                            <th className="px-3 py-2 text-left text-[10px] font-bold text-gray-400 dark:text-gray-500 border-b border-r border-gray-200 dark:border-gray-800 w-10 tabular-nums">#</th>
                            {results[activeTab].columns.map((col, i) => (
                              <th key={i} className="px-3 py-2 text-left text-[11px] font-semibold text-gray-600 dark:text-gray-300 whitespace-nowrap border-b border-gray-200 dark:border-gray-800 uppercase tracking-wide">
                                {col}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {results[activeTab].rows.slice(0, 200).map((row, i) => (
                            <tr key={i} className="border-b border-gray-100 dark:border-gray-800/60 last:border-0 hover:bg-gray-50/50 dark:hover:bg-gray-800/20 transition-colors">
                              <td className="px-3 py-1.5 text-[10px] text-gray-400 border-r border-gray-100 dark:border-gray-800/60 font-mono tabular-nums">{i + 1}</td>
                              {row.map((cell, j) => (
                                <td key={j} className="px-3 py-1.5 text-gray-700 dark:text-gray-300 whitespace-nowrap font-mono text-xs">
                                  {cell === null ? <span className="text-gray-300 dark:text-gray-600 italic">NULL</span> : String(cell)}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      {results[activeTab].rows.length > 200 && (
                        <div className="px-3 py-2 text-xs text-gray-400 text-center bg-gray-50 dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-800">
                          Showing 200 of {results[activeTab].rows.length} rows
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {!results[activeTab].error && results[activeTab].columns.length === 0 && (
                  <div className="text-center py-8 text-xs text-gray-400 dark:text-gray-500">
                    Query executed successfully (no rows returned)
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* History overlay */}
      {showHistory && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setShowHistory(false)}>
          <div
            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl w-full max-w-2xl max-h-[70vh] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 dark:border-gray-800">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                  <Clock className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900 dark:text-white">Query History</h3>
                  <p className="text-[11px] text-gray-400 dark:text-gray-500">{history.length} queries</p>
                </div>
              </div>
              <button
                onClick={() => setShowHistory(false)}
                className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <X className="w-4 h-4 text-gray-400" />
              </button>
            </div>
            <div className="overflow-y-auto max-h-[calc(70vh-72px)] divide-y divide-gray-100 dark:divide-gray-800">
              {history.length === 0 && (
                <div className="text-center py-12 text-gray-400 dark:text-gray-500 text-sm">No queries yet</div>
              )}
              {history.map((h, i) => (
                <button
                  key={i}
                  onClick={() => { setCode(h.query); setShowHistory(false); }}
                  className="w-full text-left px-5 py-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors group"
                >
                  <pre className="text-xs font-mono text-gray-700 dark:text-gray-300 whitespace-pre-wrap line-clamp-3 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">{h.query}</pre>
                  <div className="flex items-center gap-3 mt-2">
                    {h.error ? (
                      <span className="text-[10px] font-medium text-red-500 bg-red-50 dark:bg-red-900/20 px-2 py-0.5 rounded-md">Error</span>
                    ) : (
                      <span className="text-[10px] font-medium text-gray-400 tabular-nums">{h.rows} rows</span>
                    )}
                    <span className="text-[10px] font-medium text-gray-400 tabular-nums">{h.time}ms</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
