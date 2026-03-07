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
      <div className="text-center py-8 text-gray-400 dark:text-gray-500 text-sm">
        Run your query to see results
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {/* Status bar */}
      <div className="flex items-center justify-between px-3 py-2 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
        <div className="flex items-center gap-2">
          {result.error ? (
            <>
              <AlertTriangle className="w-4 h-4 text-red-500" />
              <span className="text-sm text-red-600 dark:text-red-400">Error</span>
            </>
          ) : validation?.correct ? (
            <>
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span className="text-sm text-green-600 dark:text-green-400">{validation.message}</span>
            </>
          ) : validation ? (
            <>
              <XCircle className="w-4 h-4 text-yellow-500" />
              <span className="text-sm text-yellow-600 dark:text-yellow-400">{validation.message}</span>
            </>
          ) : (
            <span className="text-sm text-gray-500">{result.rowCount} rows returned</span>
          )}
        </div>
        <div className="flex items-center gap-1 text-xs text-gray-400">
          <Clock className="w-3 h-3" />
          {result.timeMs}ms
        </div>
      </div>

      {/* Error display */}
      {result.error && (
        <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
          <pre className="text-sm text-red-700 dark:text-red-300 whitespace-pre-wrap font-mono">{result.error}</pre>
        </div>
      )}

      {/* Results grid */}
      {!result.error && (
        <div className={showExpected && expectedOutput ? "grid grid-cols-2 gap-3" : ""}>
          {/* User output */}
          <div>
            {showExpected && expectedOutput && (
              <h4 className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1.5">Your Output</h4>
            )}
            <ResultTable columns={result.columns} rows={result.rows} highlight={validation && !validation.correct ? "error" : validation?.correct ? "success" : undefined} />
          </div>

          {/* Expected output */}
          {showExpected && expectedOutput && (
            <div>
              <h4 className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1.5">Expected Output</h4>
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
    return <div className="text-sm text-gray-400 py-4 text-center">No results</div>;
  }

  const borderColor = highlight === "success"
    ? "border-green-300 dark:border-green-700"
    : highlight === "error"
      ? "border-yellow-300 dark:border-yellow-700"
      : "border-gray-200 dark:border-gray-700";

  return (
    <div className={`border ${borderColor} rounded-lg overflow-hidden`}>
      <div className="overflow-x-auto max-h-64">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              {columns.map((col, i) => (
                <th key={i} className="px-3 py-1.5 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 whitespace-nowrap border-b border-gray-200 dark:border-gray-700">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.slice(0, 100).map((row, i) => (
              <tr key={i} className="border-b border-gray-100 dark:border-gray-800 last:border-0 hover:bg-gray-50 dark:hover:bg-gray-800/30">
                {row.map((cell, j) => (
                  <td key={j} className="px-3 py-1.5 text-gray-700 dark:text-gray-300 whitespace-nowrap font-mono text-xs">
                    {cell === null ? <span className="text-gray-400 italic">NULL</span> : String(cell)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        {rows.length > 100 && (
          <div className="px-3 py-2 text-xs text-gray-400 text-center bg-gray-50 dark:bg-gray-800/50">
            Showing 100 of {rows.length} rows
          </div>
        )}
      </div>
    </div>
  );
}
