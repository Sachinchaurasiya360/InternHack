import { CheckCircle2, XCircle, Clock, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";             // Fix 3: project Button
import type { QueryResult } from "../lib/sql-engine";
import type { ValidationResult } from "../lib/query-validator";

interface SqlResultTableProps {
  result: QueryResult | null;
  validation: ValidationResult | null;
  showExpected: boolean;
  expectedOutput?: { columns: string[]; rows: (string | number | null)[][] };
}

export default function SqlResultTable({ result, validation, showExpected, expectedOutput }: SqlResultTableProps) {
  // ── CSV Download ──────────────────────────────────────────────────────────

  // Fix 2: shared escaper applied to BOTH headers and data cells
  const escapeCSV = (value: string) => `"${value.replace(/"/g, '""')}"`;

  const handleDownloadCSV = () => {
    if (!result || result.error || result.columns.length === 0) return;

    // Fix 2: headers now go through escapeCSV
    const headers = result.columns.map(col => escapeCSV(col)).join(',');

    const csvRows = result.rows.map(row =>
      row.map(cell => {
        if (cell === null || cell === undefined) return '""';
        const s = typeof cell === 'object' ? JSON.stringify(cell) : String(cell);
        return escapeCSV(s);                                 // Fix 2: reuses same escaper
      }).join(',')
    );

    // Fix 4: CRLF line endings per RFC 4180
    const csv = [headers, ...csvRows].join('\r\n');

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');

    a.href = url;
    a.download = `results_${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // ─────────────────────────────────────────────────────────────────────────

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

        {/* Right side: CSV download + timing */}
        <div className="flex items-center gap-2">
          {/* Fix 3: uses project Button component instead of raw <button> */}
          {!result.error && result.rowCount > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleDownloadCSV}
              title="Download results as CSV"
              className="h-6 px-2 text-[10px] font-mono uppercase tracking-widest gap-1.5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-3 h-3"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              CSV
            </Button>
          )}

          <div className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-widest text-stone-400 dark:text-stone-500 tabular-nums">
            <Clock className="w-3 h-3" />
            {result.timeMs}ms
          </div>
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