import { useCallback } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { sql, SQLite } from "@codemirror/lang-sql";
import { keymap } from "@codemirror/view";
import { Play } from "lucide-react";

interface SqlEditorProps {
  value: string;
  onChange: (value: string) => void;
  onRun: () => void;
  disabled?: boolean;
}

export default function SqlEditor({ value, onChange, onRun, disabled }: SqlEditorProps) {
  const runKeymap = keymap.of([
    {
      key: "Ctrl-Enter",
      mac: "Cmd-Enter",
      run: () => {
        onRun();
        return true;
      },
    },
  ]);

  const handleChange = useCallback((val: string) => onChange(val), [onChange]);

  return (
    <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 dark:bg-stone-950/40 border-b border-stone-200 dark:border-white/10">
        <div className="flex items-center gap-2 min-w-0">
          <div className="h-1 w-1 bg-lime-400 shrink-0"></div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
            sql editor
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400 dark:text-stone-500 hidden sm:block">
            ctrl+enter
          </span>
          <button
            type="button"
            onClick={onRun}
            disabled={disabled}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[11px] font-bold text-stone-950 bg-lime-400 hover:bg-lime-300 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Play className="w-3 h-3" />
            Run
          </button>
        </div>
      </div>
      <CodeMirror
        value={value}
        onChange={handleChange}
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
  );
}
