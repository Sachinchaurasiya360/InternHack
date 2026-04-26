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
      <div className="bg-stone-50 dark:bg-stone-950 min-h-[calc(100vh-4rem)] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-md h-8 w-8 border-b-2 border-lime-500 mx-auto mb-3" />
          <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
            / loading sql engine
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-stone-50 dark:bg-stone-950 min-h-[calc(100vh-4rem)]">
      <SEO
        title="SQL Playground, Run SQL Queries Online"
        description="Free online SQL playground. Write and execute SQL queries in your browser with instant results."
        keywords="SQL playground, online SQL editor, run SQL queries, SQL sandbox"
        canonicalUrl={canonicalUrl("/learn/sql/playground")}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8">
        {/* Editorial header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <div className="h-1 w-1 bg-lime-400"></div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
              sql / playground
            </span>
          </div>
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <div className="min-w-0">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-50 mb-1.5">
                Query freely.
              </h1>
              <p className="text-sm text-stone-600 dark:text-stone-400 max-w-2xl">
                Pre-loaded tables, instant results, any query. Ctrl+Enter to run.
              </p>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <button
                type="button"
                onClick={() => setShowHistory(!showHistory)}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-md text-[10px] font-mono uppercase tracking-widest text-stone-700 dark:text-stone-300 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 hover:border-stone-400 dark:hover:border-white/25 transition-colors cursor-pointer"
              >
                <Clock className="w-3 h-3" />
                history
                {history.length > 0 && (
                  <span className="text-lime-600 dark:text-lime-400 tabular-nums">/ {history.length}</span>
                )}
              </button>
              <button
                type="button"
                onClick={handleResetAll}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-md text-[10px] font-mono uppercase tracking-widest text-rose-700 dark:text-rose-400 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 hover:border-rose-300 dark:hover:border-rose-900/50 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                reset
              </button>
            </div>
          </div>
        </div>

<div className="flex flex-col gap-4">
          {/* Browser (moved below editor+results via order-last) */}
          <div className="order-last">
            <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md overflow-hidden">
              {/* Kicker strip header */}
              <div className="flex items-center gap-2 px-4 py-2.5 bg-stone-50 dark:bg-stone-950/40 border-b border-stone-200 dark:border-white/10">
                <div className="h-1 w-1 bg-lime-400"></div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
                  browser
                </span>
              </div>

              {/* Tab toggle */}
              <div className="flex border-b border-stone-200 dark:border-white/10">
                {(["tables", "datasets"] as const).map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setSidebarSection(tab)}
                    className={`flex-1 px-3 py-2 text-[10px] font-mono uppercase tracking-widest transition-colors cursor-pointer ${
                      sidebarSection === tab
                        ? "bg-stone-900 dark:bg-stone-50 text-lime-400"
                        : "text-stone-500 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-white/5"
                    }`}
                  >
                    / {tab}
                  </button>
                ))}
              </div>

              {sidebarSection === "tables" && (
                <div className="p-2 space-y-0.5 max-h-[calc(100vh-380px)] overflow-y-auto">
                  {schema.length === 0 && (
                    <p className="text-[11px] font-mono uppercase tracking-widest text-stone-400 dark:text-stone-500 p-3 text-center">
                      / no tables loaded
                    </p>
                  )}
                  {schema.map((table) => (
                    <div key={table.name}>
                      <div className="flex items-center">
                        <button
                          type="button"
                          onClick={() => toggleTable(table.name)}
                          className="flex-1 flex items-center gap-1.5 px-2 py-1.5 rounded-md hover:bg-stone-50 dark:hover:bg-white/5 transition-colors cursor-pointer text-left"
                        >
                          {expandedTables.has(table.name) ? (
                            <ChevronDown className="w-3 h-3 text-stone-400 shrink-0" />
                          ) : (
                            <ChevronRight className="w-3 h-3 text-stone-400 shrink-0" />
                          )}
                          <Table className="w-3.5 h-3.5 text-lime-600 dark:text-lime-400 shrink-0" />
                          <span className="text-xs font-mono text-stone-700 dark:text-stone-300">{table.name}</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => previewTable(table.name)}
                          title="Preview data"
                          className="w-6 h-6 rounded-md flex items-center justify-center text-lime-600 dark:text-lime-400 hover:bg-stone-100 dark:hover:bg-white/5 transition-colors cursor-pointer mr-1"
                        >
                          <Play className="w-3 h-3" />
                        </button>
                      </div>
                      {expandedTables.has(table.name) && (
                        <div className="ml-6 space-y-px mb-1.5">
                          {table.columns.map((col) => (
                            <button
                              type="button"
                              key={col.name}
                              onClick={() => setCode((prev) => prev + col.name)}
                              title="Click to insert column name"
                              className="w-full flex items-center gap-2 px-2.5 py-1 cursor-pointer hover:bg-stone-50 dark:hover:bg-white/5 rounded-md transition-colors text-left"
                            >
                              <span className="text-[11px] text-stone-600 dark:text-stone-400 font-mono">{col.name}</span>
                              <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400 dark:text-stone-500 ml-auto">
                                {col.type || "text"}
                              </span>
                            </button>
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
                        type="button"
                        onClick={() => handleLoadDataset(name)}
                        className="w-full flex items-center gap-2.5 px-2 py-1.5 rounded-md hover:bg-stone-50 dark:hover:bg-white/5 transition-colors cursor-pointer group text-left"
                      >
                        <Database className="w-3.5 h-3.5 text-stone-400 dark:text-stone-500 group-hover:text-lime-600 dark:group-hover:text-lime-400 shrink-0 transition-colors" />
                        <span className="text-xs font-mono text-stone-600 dark:text-stone-400 group-hover:text-stone-900 dark:group-hover:text-stone-50 transition-colors flex-1">
                          {DATASET_LABELS[name] || name}
                        </span>
                        {isLoaded && (
                          <span className="text-[9px] font-mono uppercase tracking-widest px-1.5 py-0.5 rounded-md bg-stone-900 dark:bg-stone-50 text-lime-400">
                            loaded
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Editor + Results row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Editor */}
          <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md overflow-hidden min-w-0 flex flex-col lg:h-[calc(100vh-320px)] lg:min-h-125">
              <div className="flex items-center justify-between gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-stone-50 dark:bg-stone-950/40 border-b border-stone-200 dark:border-white/10 min-w-0">
                <div className="flex items-center gap-2 min-w-0">
                  <div className="h-1 w-1 bg-lime-400 shrink-0"></div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 truncate">
                    editor
                  </span>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400 dark:text-stone-500 hidden lg:block">
                    ctrl+enter
                  </span>
                  <button
                    type="button"
                    onClick={handleRun}
                    className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-md text-[11px] font-bold text-stone-950 bg-lime-400 hover:bg-lime-300 transition-colors cursor-pointer"
                  >
                    <Play className="w-3 h-3" />
                    Run
                  </button>
                </div>
              </div>
              <div className="flex-1 min-h-0 overflow-auto">
                <CodeMirror
                  value={code}
                  onChange={setCode}
                  extensions={[sql({ dialect: SQLite }), runKeymap]}
                  theme="dark"
                  height="100%"
                  minHeight="180px"
                  basicSetup={{
                    lineNumbers: true,
                    foldGutter: false,
                    autocompletion: true,
                    bracketMatching: true,
                    highlightActiveLine: true,
                  }}
                  className="text-sm h-full"
                />
              </div>
            </div>

          {/* Results area (right column on lg) */}
          <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md overflow-hidden flex flex-col min-h-50 min-w-0 lg:h-[calc(100vh-320px)] lg:min-h-125">
              <div className="flex items-center gap-2 px-4 py-2.5 bg-stone-50 dark:bg-stone-950/40 border-b border-stone-200 dark:border-white/10">
                <div className="h-1 w-1 bg-lime-400"></div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
                  results
                </span>
                {results.length > 0 && (
                  <button
                    type="button"
                    onClick={() => { setResults([]); setActiveTab(0); }}
                    title="Clear all results"
                    className="ml-auto w-6 h-6 rounded-md flex items-center justify-center text-stone-400 hover:text-rose-500 hover:bg-stone-100 dark:hover:bg-white/5 transition-colors cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Result tabs */}
              {results.length > 0 ? (
                <div className="flex items-center border-b border-stone-200 dark:border-white/10 px-2 overflow-x-auto">
                  {results.map((r, i) => {
                    const isActive = i === activeTab;
                    return (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setActiveTab(i)}
                        className={`inline-flex items-center gap-1.5 whitespace-nowrap px-3 py-2 text-[10px] font-mono uppercase tracking-widest transition-colors cursor-pointer ${
                          isActive
                            ? "text-stone-900 dark:text-stone-50 border-b-2 border-lime-400"
                            : "text-stone-400 dark:text-stone-500 border-b-2 border-transparent hover:text-stone-700 dark:hover:text-stone-300"
                        }`}
                      >
                        {r.error && <AlertTriangle className="w-3 h-3 text-rose-500" />}
                        / result {String(i + 1).padStart(2, "0")}
                        <span className="text-stone-400 dark:text-stone-600 tabular-nums">({r.rowCount})</span>
                      </button>
                    );
                  })}
                </div>
              ) : (
                <div className="flex-1 flex items-center justify-center p-8">
                  <div className="text-center">
                    <Database className="w-10 h-10 mx-auto mb-3 text-stone-300 dark:text-stone-700" />
                    <p className="text-[11px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
                      / run a query to see results
                    </p>
                    <p className="text-[10px] font-mono uppercase tracking-widest text-stone-400 dark:text-stone-600 mt-1.5">
                      pre-loaded / world / nobel / football / movie / school
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
                        <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-rose-600 dark:text-rose-400">
                          <AlertTriangle className="w-3 h-3" />
                          / error
                        </span>
                      ) : (
                        <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 tabular-nums">
                          / {results[activeTab].rowCount} rows
                        </span>
                      )}
                    </div>
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-widest text-stone-400 dark:text-stone-500 tabular-nums">
                      <Clock className="w-3 h-3" />
                      {results[activeTab].timeMs}ms
                    </span>
                  </div>

                  {/* Error */}
                  {results[activeTab].error && (
                    <div className="p-4 bg-white dark:bg-stone-900 border border-rose-200 dark:border-rose-900/40 rounded-md">
                      <pre className="text-sm text-rose-700 dark:text-rose-300 whitespace-pre-wrap font-mono">
                        {results[activeTab].error}
                      </pre>
                    </div>
                  )}

                  {/* Table */}
                  {!results[activeTab].error && results[activeTab].columns.length > 0 && (
                    <div className="border border-stone-200 dark:border-white/10 rounded-md overflow-hidden">
                      <div className="overflow-x-auto max-h-[min(calc(100vh-520px),70vh)] min-h-40">
                        <table className="w-full text-sm">
                          <thead className="sticky top-0">
                            <tr className="bg-stone-50 dark:bg-stone-950/40">
                              <th className="px-3 py-2 text-left text-[10px] font-mono uppercase tracking-widest text-stone-400 dark:text-stone-500 border-b border-r border-stone-200 dark:border-white/10 w-10 tabular-nums">
                                #
                              </th>
                              {results[activeTab].columns.map((col, i) => (
                                <th
                                  key={i}
                                  className="px-3 py-2 text-left text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 whitespace-nowrap border-b border-stone-200 dark:border-white/10"
                                >
                                  {col}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {results[activeTab].rows.slice(0, 200).map((row, i) => (
                              <tr
                                key={i}
                                className="border-b border-stone-100 dark:border-white/5 last:border-0 hover:bg-stone-50/50 dark:hover:bg-white/5 transition-colors"
                              >
                                <td className="px-3 py-1.5 text-[10px] font-mono text-stone-400 border-r border-stone-100 dark:border-white/5 tabular-nums">
                                  {i + 1}
                                </td>
                                {row.map((cell, j) => (
                                  <td
                                    key={j}
                                    className="px-3 py-1.5 text-stone-700 dark:text-stone-300 whitespace-nowrap font-mono text-xs"
                                  >
                                    {cell === null ? (
                                      <span className="text-stone-300 dark:text-stone-600 italic">NULL</span>
                                    ) : (
                                      String(cell)
                                    )}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                        {results[activeTab].rows.length > 200 && (
                          <div className="px-3 py-2 text-[10px] font-mono uppercase tracking-widest text-stone-400 text-center bg-stone-50 dark:bg-stone-950/40 border-t border-stone-200 dark:border-white/10 tabular-nums">
                            / showing 200 of {results[activeTab].rows.length} rows
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {!results[activeTab].error && results[activeTab].columns.length === 0 && (
                    <div className="text-center py-8 text-[10px] font-mono uppercase tracking-widest text-stone-400 dark:text-stone-500">
                      / query executed, no rows returned
                    </div>
                  )}
                </div>
              )}
          </div>
          </div>
        </div>
      </div>

      {/* History overlay */}
      {showHistory && (
        <div
          className="fixed inset-0 z-50 bg-stone-950/60 flex items-center justify-center p-4"
          onClick={() => setShowHistory(false)}
        >
          <div
            className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md w-full max-w-2xl max-h-[70vh] overflow-hidden shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-3 bg-stone-50 dark:bg-stone-950/40 border-b border-stone-200 dark:border-white/10">
              <div className="flex items-center gap-2">
                <div className="h-1 w-1 bg-lime-400"></div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
                  history / {history.length} queries
                </span>
              </div>
              <button
                type="button"
                onClick={() => setShowHistory(false)}
                className="w-6 h-6 rounded-md flex items-center justify-center text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-white/5 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="overflow-y-auto max-h-[calc(70vh-56px)] divide-y divide-stone-100 dark:divide-white/5">
              {history.length === 0 && (
                <div className="text-center py-12 text-[10px] font-mono uppercase tracking-widest text-stone-400 dark:text-stone-500">
                  / no queries yet
                </div>
              )}
              {history.map((h, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => { setCode(h.query); setShowHistory(false); }}
                  className="w-full text-left px-5 py-4 hover:bg-stone-50 dark:hover:bg-white/5 transition-colors cursor-pointer group flex flex-col items-start"
                >
                  <pre className="text-xs font-mono text-stone-700 dark:text-stone-300 whitespace-pre-wrap line-clamp-3 group-hover:text-stone-900 dark:group-hover:text-stone-50 transition-colors">
                    {h.query}
                  </pre>
                  <div className="flex items-center gap-3 mt-2 text-[10px] font-mono uppercase tracking-widest tabular-nums">
                    {h.error ? (
                      <span className="text-rose-600 dark:text-rose-400">/ error</span>
                    ) : (
                      <span className="text-stone-500 dark:text-stone-400">/ {h.rows} rows</span>
                    )}
                    <span className="h-1 w-1 bg-stone-300 dark:bg-stone-700" />
                    <span className="text-stone-400 dark:text-stone-500">{h.time}ms</span>
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
