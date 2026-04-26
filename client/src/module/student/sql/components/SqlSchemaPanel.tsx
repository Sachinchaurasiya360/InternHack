import { useState } from "react";
import { Table, ChevronDown, ChevronRight, X } from "lucide-react";
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
    <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 dark:bg-stone-950/40 border-b border-stone-200 dark:border-white/10">
        <div className="flex items-center gap-2">
          <div className="h-1 w-1 bg-lime-400"></div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
            schema / {tables.length} tables
          </span>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="w-6 h-6 rounded-md flex items-center justify-center text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-white/5 transition-colors cursor-pointer"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="p-2 max-h-80 overflow-y-auto space-y-0.5">
        {tables.length === 0 && (
          <p className="text-[11px] font-mono uppercase tracking-widest text-stone-400 dark:text-stone-500 p-3 text-center">
            / no tables loaded
          </p>
        )}
        {tables.map((table) => (
          <div key={table.name}>
            <button
              type="button"
              onClick={() => toggle(table.name)}
              className="w-full flex items-center gap-1.5 px-2 py-1.5 rounded-md hover:bg-stone-50 dark:hover:bg-white/5 transition-colors cursor-pointer"
            >
              {expanded.has(table.name) ? (
                <ChevronDown className="w-3 h-3 text-stone-400 shrink-0" />
              ) : (
                <ChevronRight className="w-3 h-3 text-stone-400 shrink-0" />
              )}
              <Table className="w-3.5 h-3.5 text-lime-600 dark:text-lime-400 shrink-0" />
              <span className="text-xs font-mono text-stone-700 dark:text-stone-300">{table.name}</span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400 dark:text-stone-500 ml-auto tabular-nums">
                / {table.columns.length}
              </span>
            </button>

            {expanded.has(table.name) && (
              <div className="ml-6 mt-0.5 mb-1.5 space-y-px">
                {table.columns.map((col) => (
                  <div
                    key={col.name}
                    className="flex items-center gap-2 px-2 py-1"
                  >
                    <span className="text-[11px] text-stone-600 dark:text-stone-400 font-mono">{col.name}</span>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400 dark:text-stone-500 ml-auto">
                      {col.type || "text"}
                    </span>
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
