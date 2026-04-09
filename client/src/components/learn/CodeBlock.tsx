import { useState, useCallback } from "react";
import { Copy, Check } from "lucide-react";

export type CodeExampleLike = {
  title?: string;
  code: string;
  language?: string;
  output?: string;
  explanation?: string;
};

export function CodeBlock({ example }: { example: CodeExampleLike }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(example.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }, [example.code]);

  return (
    <div className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden my-4 group">
      {(example.title || example.language) && (
        <div className="flex items-center justify-between px-4 py-2 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
            </div>
            <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
              {example.title || example.language}
            </span>
          </div>
          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-1 text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Copy className="w-3.5 h-3.5" />}
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
      )}
      <pre className="p-4 overflow-x-auto bg-gray-950 text-gray-100 text-sm leading-relaxed">
        <code>{example.code}</code>
      </pre>
      {example.output && (
        <div className="px-4 py-2.5 bg-gray-900 border-t border-gray-800">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-500 block mb-1">Output</span>
          <pre className="text-sm text-emerald-400 whitespace-pre-wrap">{example.output}</pre>
        </div>
      )}
      {example.explanation && (
        <div className="px-4 py-3 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-700">
          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{example.explanation}</p>
        </div>
      )}
    </div>
  );
}
