import { useCallback } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

interface NodeEditorProps {
  value: string;
  height?: string;
}

export default function NodeEditor({ value, height = "180px" }: NodeEditorProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [value]);

  return (
    <div className="relative bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl overflow-hidden">
      <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100 dark:border-gray-800">
        <span className="text-xs font-semibold text-gray-600 dark:text-gray-400">Node.js</span>
        <button
          onClick={handleCopy}
          className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-colors"
        >
          {copied ? <Check className="w-3 h-3 text-green-500" /> : <Copy className="w-3 h-3" />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <CodeMirror
        value={value}
        editable={false}
        extensions={[javascript()]}
        theme="dark"
        height={height}
        basicSetup={{
          lineNumbers: true,
          foldGutter: false,
          autocompletion: false,
          bracketMatching: true,
          highlightActiveLine: false,
        }}
        className="text-sm"
      />
    </div>
  );
}
