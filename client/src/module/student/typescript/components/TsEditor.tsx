import { useCallback } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { keymap } from "@codemirror/view";
import { Play } from "lucide-react";

interface TsEditorProps {
  value: string;
  onChange: (value: string) => void;
  onRun: () => void;
  disabled?: boolean;
  height?: string;
}

export default function TsEditor({ value, onChange, onRun, disabled, height = "180px" }: TsEditorProps) {
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
    <div className="relative bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl overflow-hidden">
      <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100 dark:border-gray-800">
        <span className="text-xs font-semibold text-gray-600 dark:text-gray-400">TypeScript</span>
        <div className="flex items-center gap-3">
          <span className="text-[10px] text-gray-400 dark:text-gray-500 font-medium hidden sm:inline">
            Ctrl+Enter to run
          </span>
          <button
            onClick={onRun}
            disabled={disabled}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-white bg-gray-950 dark:bg-white dark:text-gray-950 hover:bg-gray-800 dark:hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl transition-colors"
          >
            <Play className="w-3 h-3" />
            Run
          </button>
        </div>
      </div>
      <CodeMirror
        value={value}
        onChange={handleChange}
        extensions={[javascript({ typescript: true }), runKeymap]}
        theme="dark"
        height={height}
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
