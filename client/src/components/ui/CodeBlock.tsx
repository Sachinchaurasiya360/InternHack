import { useState, useCallback, useEffect } from "react";
import { Copy, Check } from "lucide-react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import markup from "react-syntax-highlighter/dist/esm/languages/prism/markup";
import css from "react-syntax-highlighter/dist/esm/languages/prism/css";
import javascript from "react-syntax-highlighter/dist/esm/languages/prism/javascript";
import typescript from "react-syntax-highlighter/dist/esm/languages/prism/typescript";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import tsx from "react-syntax-highlighter/dist/esm/languages/prism/tsx";
import python from "react-syntax-highlighter/dist/esm/languages/prism/python";
import bash from "react-syntax-highlighter/dist/esm/languages/prism/bash";
import solidity from "react-syntax-highlighter/dist/esm/languages/prism/solidity";
import json from "react-syntax-highlighter/dist/esm/languages/prism/json";
import sql from "react-syntax-highlighter/dist/esm/languages/prism/sql";
import { vscDarkPlus, prism } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useThemeStore } from "../../lib/theme.store";
import { Button } from "./button";

SyntaxHighlighter.registerLanguage("markup", markup);
SyntaxHighlighter.registerLanguage("html", markup);
SyntaxHighlighter.registerLanguage("xml", markup);
SyntaxHighlighter.registerLanguage("css", css);
SyntaxHighlighter.registerLanguage("javascript", javascript);
SyntaxHighlighter.registerLanguage("js", javascript);
SyntaxHighlighter.registerLanguage("typescript", typescript);
SyntaxHighlighter.registerLanguage("ts", typescript);
SyntaxHighlighter.registerLanguage("jsx", jsx);
SyntaxHighlighter.registerLanguage("tsx", tsx);
SyntaxHighlighter.registerLanguage("python", python);
SyntaxHighlighter.registerLanguage("py", python);
SyntaxHighlighter.registerLanguage("bash", bash);
SyntaxHighlighter.registerLanguage("sh", bash);
SyntaxHighlighter.registerLanguage("solidity", solidity);
SyntaxHighlighter.registerLanguage("sol", solidity);
SyntaxHighlighter.registerLanguage("json", json);
SyntaxHighlighter.registerLanguage("sql", sql);

export interface CodeExample {
  title: string;
  code: string;
  output?: string;
  explanation?: string;
}

interface CodeBlockProps {
  code?: string;
  label?: string;
  example?: CodeExample;
  language?: string;
}

export function CodeBlock({ code, label, example, language = "javascript" }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const theme = useThemeStore((s) => s.theme);

  // Extract code and title/label from either prop format
  const activeCode = example ? example.code : (code || "");
  const activeTitle = example ? example.title : (label || "");
  const activeOutput = example?.output;
  const activeExplanation = example?.explanation;

  useEffect(() => {
    if (!copied) return;
    const timeout = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timeout);
  }, [copied]);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(activeCode);
      setCopied(true);
    } catch (err) {
      console.error("Failed to copy code: ", err);
    }
  }, [activeCode]);

  // Choose the syntax highlighting theme
  const syntaxTheme = theme === "dark" ? vscDarkPlus : prism;

  return (
    <div className="rounded-md border border-stone-200 dark:border-white/10 overflow-hidden bg-white dark:bg-stone-900">
      {/* Code block header */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 dark:bg-stone-950/40 border-b border-stone-200 dark:border-white/10">
        <div className="flex items-center gap-2 min-w-0">
          <div className="h-1 w-1 bg-lime-400 shrink-0"></div>
          <span className="text-xs font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 truncate">
            {activeTitle}
          </span>
        </div>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={handleCopy}
          aria-label={copied ? "Code copied" : "Copy code to clipboard"}
          className="font-mono uppercase tracking-widest text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-50 shrink-0"
        >
          {copied ? <Check className="w-3 h-3 text-lime-500" /> : <Copy className="w-3 h-3" />}
          {copied ? "copied" : "copy"}
        </Button>
      </div>

      {/* Syntax Highlighting Container */}
      <div className={`p-4 overflow-x-auto text-sm leading-relaxed border-0 ${
        theme === "dark" 
          ? "bg-stone-950 text-stone-100" 
          : "bg-stone-50 text-stone-900"
      }`}>
        <SyntaxHighlighter
          language={language}
          style={syntaxTheme}
          customStyle={{
            background: "transparent",
            padding: 0,
            margin: 0,
            fontSize: "inherit",
            fontFamily: "inherit",
            lineHeight: "inherit",
          }}
          codeTagProps={{
            style: {
              background: "transparent",
              fontFamily: "inherit",
            }
          }}
        >
          {activeCode}
        </SyntaxHighlighter>
      </div>

      {/* Optional Output */}
      {activeOutput && (
        <div className="px-4 py-2.5 bg-stone-50 dark:bg-stone-950/40 border-t border-stone-200 dark:border-white/10">
          <span className="text-xs font-mono uppercase tracking-widest text-stone-500 block mb-1">output</span>
          <pre className="text-sm text-lime-600 dark:text-lime-400 whitespace-pre-wrap font-mono">{activeOutput}</pre>
        </div>
      )}

      {/* Optional Explanation */}
      {activeExplanation && (
        <div className="px-4 py-3 bg-stone-50 dark:bg-stone-950/40 border-t border-stone-200 dark:border-white/10">
          <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">{activeExplanation}</p>
        </div>
      )}
    </div>
  );
}
