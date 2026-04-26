import { CheckCircle2, XCircle, Clock, AlertTriangle } from "lucide-react";
import type { QueryResult } from "../lib/sql-engine";
import type { ValidationResult } from "../lib/query-validator";

interface SqlResultTableProps {
  result: QueryResult | null;
  validation: ValidationResult | null;
  showExpected: boolean;
  expectedOutput?: { columns: string[]; rows: (string | number | null)[][] };
}

export default function SqlResultTable({ result, validation, showExpected, expectedOutput }: SqlResultTableProps) {
  if (!result) {
    return (
      <div className="text-center py-8 text-[11px] font-mono uppercase tracking-widest text-stone-400 dark:text-stone-500">
        / run your query to see results
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {/* Status bar */}
      <div className="flex items-center justify-between px-3 py-2 bg-stone-50 dark:bg-stone-950/40 border border-stone-200 dark:border-white/10 rounded-md">
        <div className="flex items-center gap-2">
          {result.error ? (
            <>
              <AlertTriangle className="w-3.5 h-3.5 text-rose-500" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-rose-600 dark:text-rose-400">
                / error
              </span>
            </>
          ) : validation?.correct ? (
            <>
              <CheckCircle2 className="w-3.5 h-3.5 text-lime-500" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-lime-600 dark:text-lime-400">
                / {validation.message}
              </span>
            </>
          ) : validation ? (
            <>
              <XCircle className="w-3.5 h-3.5 text-amber-500" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-amber-600 dark:text-amber-400">
                / {validation.message}
              </span>
            </>
          ) : (
            <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 tabular-nums">
              / {result.rowCount} rows
            </span>
          )}
        </div>
        <div className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-widest text-stone-400 dark:text-stone-500 tabular-nums">
          <Clock className="w-3 h-3" />
          {result.timeMs}ms
        </div>
      </div>

      {/* Error display */}
      {result.error && (
        <div className="p-3 bg-white dark:bg-stone-900 border border-rose-200 dark:border-rose-900/40 rounded-md">
          <pre className="text-sm text-rose-700 dark:text-rose-300 whitespace-pre-wrap font-mono">{result.error}</pre>
        </div>
      )}

      {/* Results grid */}
      {!result.error && (
        <div className={showExpected && expectedOutput ? "grid grid-cols-1 md:grid-cols-2 gap-3" : ""}>
          {/* User output */}
          <div className="space-y-2">
            {showExpected && expectedOutput && (
              <div className="flex items-center gap-2">
                <div className="h-1 w-1 bg-lime-400"></div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
                  your output
                </span>
              </div>
            )}
            <ResultTable
              columns={result.columns}
              rows={result.rows}
              highlight={validation && !validation.correct ? "error" : validation?.correct ? "success" : undefined}
            />
          </div>

          {/* Expected output */}
          {showExpected && expectedOutput && (
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="h-1 w-1 bg-stone-400 dark:bg-stone-600"></div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
                  expected output
                </span>
              </div>
              <ResultTable columns={expectedOutput.columns} rows={expectedOutput.rows} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function ResultTable({
  columns,
  rows,
  highlight,
}: {
  columns: string[];
  rows: (string | number | null)[][];
  highlight?: "success" | "error";
}) {
  if (columns.length === 0) {
    return (
      <div className="text-[11px] font-mono uppercase tracking-widest text-stone-400 dark:text-stone-500 py-4 text-center">
        / no results
      </div>
    );
  }

  const borderColor = highlight === "success"
    ? "border-lime-300 dark:border-lime-900/50"
    : highlight === "error"
      ? "border-amber-300 dark:border-amber-900/50"
      : "border-stone-200 dark:border-white/10";

  return (
    <div className={`border ${borderColor} rounded-md overflow-hidden bg-white dark:bg-stone-900`}>
      <div className="overflow-x-auto max-h-64">
        <table className="w-full text-sm">
          <thead className="sticky top-0">
            <tr className="bg-stone-50 dark:bg-stone-950/40">
              {columns.map((col, i) => (
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
            {rows.slice(0, 100).map((row, i) => (
              <tr
                key={i}
                className="border-b border-stone-100 dark:border-white/5 last:border-0 hover:bg-stone-50/50 dark:hover:bg-white/5 transition-colors"
              >
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
        {rows.length > 100 && (
          <div className="px-3 py-2 text-[10px] font-mono uppercase tracking-widest text-stone-400 dark:text-stone-500 text-center bg-stone-50 dark:bg-stone-950/40 border-t border-stone-200 dark:border-white/10 tabular-nums">
            / showing 100 of {rows.length} rows
          </div>
        )}
      </div>
    </div>
  );
}
