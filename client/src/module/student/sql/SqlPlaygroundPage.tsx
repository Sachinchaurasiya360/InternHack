import { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router";
import {
  ArrowLeft,
  Database,
  Play,
  RotateCcw,
  ChevronDown,
  ChevronRight,
  Table,
  Clock,
  AlertTriangle,
  Trash2,
} from "lucide-react";
import CodeMirror from "@uiw/react-codemirror";
import { sql, SQLite } from "@codemirror/lang-sql";
import { keymap } from "@codemirror/view";
import { sqlEngine } from "./lib/sql-engine";
import type { QueryResult, TableInfo } from "./lib/sql-engine";
import { datasets } from "./data/datasets";
import { SEO } from "../../../components/SEO";

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
  { label: "Show all countries", query: "SELECT * FROM world LIMIT 10;" },
  { label: "Countries by population", query: "SELECT name, population FROM world ORDER BY population DESC LIMIT 10;" },
  { label: "Nobel winners 2020+", query: "SELECT * FROM nobel WHERE yr >= 2020 ORDER BY yr;" },
  { label: "Count by continent", query: "SELECT continent, COUNT(*) as count FROM world GROUP BY continent ORDER BY count DESC;" },
  { label: "Large GDP countries", query: "SELECT name, gdp FROM world WHERE gdp > 1000000000000 ORDER BY gdp DESC;" },
];

export default function SqlPlaygroundPage() {
  const location = useLocation();
  const isStudentRoute = location.pathname.startsWith("/student");
  const backPath = isStudentRoute ? "/student/sql" : "/sql";

  const [code, setCode] = useState("SELECT name, continent, population\nFROM world\nORDER BY population DESC\nLIMIT 10;");
  const [results, setResults] = useState<QueryResult[]>([]);
  const [schema, setSchema] = useState<TableInfo[]>([]);
  const [expandedTables, setExpandedTables] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState(0);
  const [history, setHistory] = useState<{ query: string; time: number; rows: number; error?: string }[]>([]);
  const [showHistory, setShowHistory] = useState(false);

  // Initialize DB with preloaded datasets
  useEffect(() => {
    const init = async () => {
      for (const name of PRELOADED_DATASETS) {
        if (datasets[name]) {
          await sqlEngine.loadDataset(name, datasets[name]);
        }
      }
      setSchema(sqlEngine.getSchema());
      setLoading(false);
      // Expand first table by default
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
    // Refresh schema in case tables were created/dropped
    setSchema(sqlEngine.getSchema());
  }, [code, results.length]);

  const handleLoadDataset = useCallback(async (name: string) => {
    if (datasets[name]) {
      await sqlEngine.loadDataset(name, datasets[name]);
      setSchema(sqlEngine.getSchema());
    }
  }, []);

  const handleResetAll = useCallback(async () => {
    // Drop all tables and reload preloaded datasets
    const tables = sqlEngine.getSchema();
    for (const t of tables) {
      try {
        await sqlEngine.execute(`DROP TABLE IF EXISTS "${t.name}"`);
      } catch { /* ignore */ }
    }
    // Clear loaded state and reload
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
    <div className="max-w-[1400px] mx-auto">
      <SEO title="SQL Playground" noIndex />

      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <Link to={backPath} className="p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
            <ArrowLeft className="w-4 h-4 text-gray-500" />
          </Link>
          <Database className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">SQL Playground</h1>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowHistory(!showHistory)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md transition-colors"
          >
            <Clock className="w-3 h-3" />
            History ({history.length})
          </button>
          <button
            onClick={handleResetAll}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 hover:bg-red-100 dark:hover:bg-red-900/40 rounded-md transition-colors"
          >
            <RotateCcw className="w-3 h-3" />
            Reset DB
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-4 h-[calc(100vh-200px)]">
        {/* Left sidebar: Schema + Datasets */}
        <div className="flex flex-col gap-3 overflow-y-auto">
          {/* Schema */}
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
            <div className="px-3 py-2 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50">
              <span className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">Tables</span>
            </div>
            <div className="p-2 space-y-0.5 max-h-[300px] overflow-y-auto">
              {schema.map((table) => (
                <div key={table.name}>
                  <div className="flex items-center">
                    <button
                      onClick={() => toggleTable(table.name)}
                      className="flex-1 flex items-center gap-1.5 px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 text-left"
                    >
                      {expandedTables.has(table.name) ? (
                        <ChevronDown className="w-3 h-3 text-gray-400 shrink-0" />
                      ) : (
                        <ChevronRight className="w-3 h-3 text-gray-400 shrink-0" />
                      )}
                      <Table className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                      <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{table.name}</span>
                    </button>
                    <button
                      onClick={() => previewTable(table.name)}
                      className="p-1 rounded hover:bg-blue-100 dark:hover:bg-blue-900/30 text-blue-500 text-[10px] font-medium mr-1"
                      title="Preview data"
                    >
                      <Play className="w-3 h-3" />
                    </button>
                  </div>
                  {expandedTables.has(table.name) && (
                    <div className="ml-6 space-y-0.5 mb-1">
                      {table.columns.map((col) => (
                        <div
                          key={col.name}
                          className="flex items-center gap-2 px-2 py-0.5 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded"
                          onClick={() => setCode((prev) => prev + col.name)}
                          title="Click to insert column name"
                        >
                          <span className="text-xs text-gray-600 dark:text-gray-400 font-mono">{col.name}</span>
                          <span className="text-[10px] text-gray-400 dark:text-gray-500 uppercase ml-auto">{col.type || "TEXT"}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Load more datasets */}
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
            <div className="px-3 py-2 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50">
              <span className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">Load Dataset</span>
            </div>
            <div className="p-2 space-y-1">
              {Object.keys(datasets).map((name) => (
                <button
                  key={name}
                  onClick={() => handleLoadDataset(name)}
                  className="w-full flex items-center gap-2 px-2 py-1.5 rounded text-left hover:bg-gray-100 dark:hover:bg-gray-800 text-xs text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <Database className="w-3 h-3 text-gray-400 shrink-0" />
                  {DATASET_LABELS[name] || name}
                </button>
              ))}
            </div>
          </div>

          {/* Quick queries */}
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
            <div className="px-3 py-2 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50">
              <span className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">Quick Queries</span>
            </div>
            <div className="p-2 space-y-1">
              {SAMPLE_QUERIES.map((sq, i) => (
                <button
                  key={i}
                  onClick={() => setCode(sq.query)}
                  className="w-full px-2 py-1.5 rounded text-left hover:bg-gray-100 dark:hover:bg-gray-800 text-xs text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  {sq.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Editor + Results */}
        <div className="flex flex-col gap-3 min-h-0">
          {/* Editor */}
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden shrink-0">
            <div className="flex items-center justify-between px-3 py-1.5 bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700">
              <span className="text-xs font-medium text-gray-500 dark:text-gray-400">SQL Editor</span>
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-gray-400 dark:text-gray-500">Ctrl+Enter to run</span>
                <button
                  onClick={handleRun}
                  className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-white bg-green-600 hover:bg-green-700 rounded-md transition-colors"
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
              height="200px"
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
          <div className="flex-1 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden flex flex-col min-h-0">
            {/* Result tabs */}
            {results.length > 0 && (
              <div className="flex items-center border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 overflow-x-auto">
                {results.map((r, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTab(i)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium whitespace-nowrap border-b-2 transition-colors ${
                      i === activeTab
                        ? "border-blue-500 text-blue-600 dark:text-blue-400"
                        : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                    }`}
                  >
                    {r.error ? (
                      <AlertTriangle className="w-3 h-3 text-red-500" />
                    ) : null}
                    Result {i + 1}
                    <span className="text-[10px] text-gray-400">({r.rowCount})</span>
                  </button>
                ))}
                <button
                  onClick={() => { setResults([]); setActiveTab(0); }}
                  className="ml-auto p-1.5 text-gray-400 hover:text-red-500 shrink-0 mr-1"
                  title="Clear all results"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

            {/* Active result */}
            <div className="flex-1 overflow-auto">
              {results.length === 0 ? (
                <div className="flex items-center justify-center h-full text-gray-400 dark:text-gray-500 text-sm p-8">
                  <div className="text-center">
                    <Database className="w-8 h-8 mx-auto mb-2 opacity-30" />
                    <p>Run a query to see results here</p>
                    <p className="text-xs mt-1">Tables are pre-loaded with world, nobel, football, movie, and school data</p>
                  </div>
                </div>
              ) : results[activeTab] ? (
                <div className="p-3">
                  {/* Status bar */}
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      {results[activeTab].error ? (
                        <span className="text-xs text-red-600 dark:text-red-400">Error</span>
                      ) : (
                        <span className="text-xs text-gray-500">{results[activeTab].rowCount} rows returned</span>
                      )}
                    </div>
                    <div className="flex items-center gap-1 text-[10px] text-gray-400">
                      <Clock className="w-3 h-3" />
                      {results[activeTab].timeMs}ms
                    </div>
                  </div>

                  {/* Error */}
                  {results[activeTab].error && (
                    <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                      <pre className="text-sm text-red-700 dark:text-red-300 whitespace-pre-wrap font-mono">
                        {results[activeTab].error}
                      </pre>
                    </div>
                  )}

                  {/* Table */}
                  {!results[activeTab].error && results[activeTab].columns.length > 0 && (
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                      <div className="overflow-x-auto max-h-[calc(100vh-480px)]">
                        <table className="w-full text-sm">
                          <thead className="sticky top-0">
                            <tr className="bg-gray-100 dark:bg-gray-800">
                              <th className="px-2 py-1.5 text-left text-[10px] font-bold text-gray-400 dark:text-gray-500 border-b border-r border-gray-200 dark:border-gray-700 w-8">#</th>
                              {results[activeTab].columns.map((col, i) => (
                                <th key={i} className="px-3 py-1.5 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 whitespace-nowrap border-b border-gray-200 dark:border-gray-700">
                                  {col}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {results[activeTab].rows.slice(0, 200).map((row, i) => (
                              <tr key={i} className="border-b border-gray-100 dark:border-gray-800 last:border-0 hover:bg-blue-50/50 dark:hover:bg-blue-900/10">
                                <td className="px-2 py-1 text-[10px] text-gray-400 border-r border-gray-100 dark:border-gray-800 font-mono">{i + 1}</td>
                                {row.map((cell, j) => (
                                  <td key={j} className="px-3 py-1 text-gray-700 dark:text-gray-300 whitespace-nowrap font-mono text-xs">
                                    {cell === null ? <span className="text-gray-400 italic">NULL</span> : String(cell)}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                        {results[activeTab].rows.length > 200 && (
                          <div className="px-3 py-2 text-xs text-gray-400 text-center bg-gray-50 dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-700">
                            Showing 200 of {results[activeTab].rows.length} rows
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {!results[activeTab].error && results[activeTab].columns.length === 0 && (
                    <div className="text-center py-6 text-xs text-gray-400">
                      Query executed successfully (no rows returned)
                    </div>
                  )}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      {/* History overlay */}
      {showHistory && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4" onClick={() => setShowHistory(false)}>
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl w-full max-w-2xl max-h-[70vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-800">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Query History</h3>
              <button onClick={() => setShowHistory(false)} className="text-gray-400 hover:text-gray-600 text-sm">Close</button>
            </div>
            <div className="overflow-y-auto max-h-[60vh] divide-y divide-gray-100 dark:divide-gray-800">
              {history.length === 0 && (
                <div className="text-center py-8 text-gray-400 text-sm">No queries yet</div>
              )}
              {history.map((h, i) => (
                <button
                  key={i}
                  onClick={() => { setCode(h.query); setShowHistory(false); }}
                  className="w-full text-left px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                >
                  <pre className="text-xs font-mono text-gray-700 dark:text-gray-300 whitespace-pre-wrap line-clamp-3">{h.query}</pre>
                  <div className="flex items-center gap-3 mt-1.5">
                    {h.error ? (
                      <span className="text-[10px] text-red-500">Error</span>
                    ) : (
                      <span className="text-[10px] text-gray-400">{h.rows} rows</span>
                    )}
                    <span className="text-[10px] text-gray-400">{h.time}ms</span>
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
