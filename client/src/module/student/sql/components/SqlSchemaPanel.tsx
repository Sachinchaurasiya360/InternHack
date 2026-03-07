import { useState } from "react";
import { Database, Table, ChevronDown, ChevronRight, X } from "lucide-react";
import type { TableInfo } from "../lib/sql-engine";

interface SqlSchemaPanelProps {
  tables: TableInfo[];
  onClose: () => void;
}

export default function SqlSchemaPanel({ tables, onClose }: SqlSchemaPanelProps) {
  const [expanded, setExpanded] = useState<Set<string>>(new Set(tables.map((t) => t.name)));

  const toggle = (name: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });
  };

  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
      <div className="flex items-center justify-between px-3 py-2 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50">
        <div className="flex items-center gap-2">
          <Database className="w-4 h-4 text-indigo-500" />
          <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Schema</span>
        </div>
        <button onClick={onClose} className="p-0.5 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
          <X className="w-3.5 h-3.5 text-gray-400" />
        </button>
      </div>

      <div className="p-2 max-h-80 overflow-y-auto space-y-1">
        {tables.length === 0 && (
          <p className="text-xs text-gray-400 p-2">No tables loaded</p>
        )}
        {tables.map((table) => (
          <div key={table.name}>
            <button
              onClick={() => toggle(table.name)}
              className="w-full flex items-center gap-1.5 px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 text-left"
            >
              {expanded.has(table.name) ? (
                <ChevronDown className="w-3 h-3 text-gray-400 shrink-0" />
              ) : (
                <ChevronRight className="w-3 h-3 text-gray-400 shrink-0" />
              )}
              <Table className="w-3.5 h-3.5 text-blue-500 shrink-0" />
              <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{table.name}</span>
              <span className="text-[10px] text-gray-400 ml-auto">{table.columns.length} cols</span>
            </button>

            {expanded.has(table.name) && (
              <div className="ml-6 mt-0.5 space-y-0.5">
                {table.columns.map((col) => (
                  <div key={col.name} className="flex items-center gap-2 px-2 py-0.5">
                    <span className="text-xs text-gray-600 dark:text-gray-400 font-mono">{col.name}</span>
                    <span className="text-[10px] text-gray-400 dark:text-gray-500 uppercase">{col.type || "TEXT"}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
