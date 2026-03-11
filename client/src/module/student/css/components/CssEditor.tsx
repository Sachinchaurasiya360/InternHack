import { useCallback } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { css } from "@codemirror/lang-css";

interface CssEditorProps {
  value: string;
  onChange: (value: string) => void;
  height?: string;
}

export default function CssEditor({ value, onChange, height = "180px" }: CssEditorProps) {
  const handleChange = useCallback((val: string) => onChange(val), [onChange]);

  return (
    <div className="relative bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl overflow-hidden">
      <div className="px-5 py-3 border-b border-gray-100 dark:border-gray-800">
        <span className="text-xs font-semibold text-gray-600 dark:text-gray-400">CSS</span>
      </div>
      <CodeMirror
        value={value}
        onChange={handleChange}
        extensions={[css()]}
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
