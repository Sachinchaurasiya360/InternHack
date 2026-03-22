import { useCallback } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { python } from "@codemirror/lang-python";
import { cpp } from "@codemirror/lang-cpp";
import { java } from "@codemirror/lang-java";
import { keymap } from "@codemirror/view";
import { Play, Loader2 } from "lucide-react";
import type { DsaLanguage } from "../../../../lib/types";

const LANG_EXTENSIONS = { python: python(), cpp: cpp(), java: java() };
const LANG_LABELS: Record<DsaLanguage, string> = { python: "Python 3", cpp: "C++ 17", java: "Java" };

interface Props {
  value: string;
  onChange: (value: string) => void;
  onRun: () => void;
  language: DsaLanguage;
  onLanguageChange: (lang: DsaLanguage) => void;
  isRunning: boolean;
  runsUsed?: number;
  runsLimit?: number;
}

export function DsaCodeEditor({ value, onChange, onRun, language, onLanguageChange, isRunning, runsUsed, runsLimit }: Props) {
  const runKeymap = keymap.of([
    {
      key: "Mod-Enter",
      run: () => { onRun(); return true; },
    },
  ]);

  const handleChange = useCallback((val: string) => onChange(val), [onChange]);

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between px-3 py-2 bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700">
        <select
          value={language}
          onChange={(e) => onLanguageChange(e.target.value as DsaLanguage)}
          className="text-sm font-medium bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-2.5 py-1.5 text-gray-900 dark:text-white"
        >
          {(Object.keys(LANG_LABELS) as DsaLanguage[]).map((lang) => (
            <option key={lang} value={lang}>{LANG_LABELS[lang]}</option>
          ))}
        </select>

        <div className="flex items-center gap-3">
          {runsLimit != null && runsUsed != null && (
            <span className="text-xs text-gray-400 dark:text-gray-500">
              {runsLimit - runsUsed} runs left
            </span>
          )}
          <button
            onClick={onRun}
            disabled={isRunning || !value.trim()}
            className="flex items-center gap-1.5 px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-400 text-white text-sm font-medium rounded-lg transition-colors"
          >
            {isRunning ? (
              <><Loader2 className="w-3.5 h-3.5 animate-spin" /> Running...</>
            ) : (
              <><Play className="w-3.5 h-3.5" /> Run</>
            )}
          </button>
        </div>
      </div>

      {/* Editor */}
      <div className="flex-1 min-h-0 overflow-hidden">
        <CodeMirror
          value={value}
          onChange={handleChange}
          extensions={[LANG_EXTENSIONS[language], runKeymap]}
          theme="dark"
          height="100%"
          basicSetup={{
            lineNumbers: true,
            foldGutter: true,
            autocompletion: true,
            bracketMatching: true,
            highlightActiveLine: true,
          }}
          className="h-full text-sm [&_.cm-editor]:h-full [&_.cm-scroller]:h-full"
        />
      </div>
    </div>
  );
}
