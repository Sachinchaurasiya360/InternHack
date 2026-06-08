import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Play, Loader2, Terminal, AlertTriangle, RotateCcw } from "lucide-react";
import { Button } from "./ui/button";
import api from "../lib/axios";

const LANGUAGES = [
  { value: "python", label: "Python" },
  { value: "cpp", label: "C++" },
  { value: "java", label: "Java" },
  { value: "javascript", label: "JavaScript" },
  { value: "typescript", label: "TypeScript" },
  { value: "go", label: "Go" },
  { value: "rust", label: "Rust" },
  { value: "ruby", label: "Ruby" },
  { value: "swift", label: "Swift" },
  { value: "kotlin", label: "Kotlin" },
  { value: "php", label: "PHP" },
  { value: "csharp", label: "C#" },
  { value: "scala", label: "Scala" },
  { value: "r", label: "R" },
];

interface ExecuteResult {
  stdout: string;
  stderr: string;
  compileOutput: string;
  status: string;
  time: string | null;
  memory: number | null;
}

export default function LessonCodeRunner() {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("python");
  const [stdin, setStdin] = useState("");

  const mutation = useMutation({
    mutationFn: (body: { language: string; code: string; stdin?: string }) =>
      api.post("/learn/execute", body).then((r) => r.data as ExecuteResult),
  });

  const output = mutation.data;

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div className="px-4 py-3 border-b border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-gray-500" />
          <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">Code Runner</span>
        </div>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="px-2 py-1 text-xs border border-gray-200 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-lime-500/20"
        >
          {LANGUAGES.map((l) => (
            <option key={l.value} value={l.value}>{l.label}</option>
          ))}
        </select>
      </div>

      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Write your code here..."
        rows={10}
        className="w-full px-4 py-3 text-sm font-mono border-0 border-b border-gray-100 dark:border-gray-800 focus:outline-none focus:ring-0 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-600 resize-y"
      />

      <div className="px-4 py-2 border-b border-gray-100 dark:border-gray-800">
        <label className="block text-[10px] font-semibold text-gray-400 mb-1">stdin (optional)</label>
        <input
          type="text"
          value={stdin}
          onChange={(e) => setStdin(e.target.value)}
          placeholder="Input for your program..."
          className="w-full px-2 py-1.5 text-xs font-mono border border-gray-200 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500/20 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 placeholder-gray-400"
        />
      </div>

      <div className="px-4 py-2.5 flex items-center justify-between bg-gray-50 dark:bg-gray-900/50">
        <span className="text-[10px] text-gray-400">
          Runs via Judge0 — {mutation.isPending ? "executing..." : `${code.split("\n").length} lines`}
        </span>
        <Button
          variant="primary"
          size="sm"
          onClick={() => mutation.mutate({ language, code, stdin: stdin || undefined })}
          disabled={mutation.isPending || !code.trim()}
        >
          {mutation.isPending ? (
            <><Loader2 className="w-3 h-3 mr-1.5 animate-spin" /> Running</>
          ) : (
            <><Play className="w-3 h-3 mr-1.5" /> Run</>
          )}
        </Button>
      </div>

      {mutation.isError && (
        <div className="px-4 py-3 bg-red-50 dark:bg-red-900/20 border-t border-red-100 dark:border-red-800">
          <div className="flex items-center gap-1.5 text-xs text-red-600 dark:text-red-400">
            <AlertTriangle className="w-3 h-3" />
            Failed to execute code
          </div>
        </div>
      )}

      {output && (
        <div className="px-4 py-3 border-t border-gray-100 dark:border-gray-800 space-y-2">
          <div className="flex items-center gap-2 text-[10px] text-gray-400">
            <span>Status: {output.status}</span>
            {output.time && <span>Time: {output.time}s</span>}
            {output.memory !== null && <span>Memory: {output.memory} KB</span>}
          </div>

          {output.compileOutput && (
            <div>
              <p className="text-[10px] font-semibold text-amber-600 mb-1">Compile Output</p>
              <pre className="text-xs font-mono bg-gray-50 dark:bg-gray-800 rounded-lg p-3 overflow-x-auto text-gray-700 dark:text-gray-300 whitespace-pre-wrap">{output.compileOutput}</pre>
            </div>
          )}

          {output.stdout && (
            <div>
              <p className="text-[10px] font-semibold text-gray-500 mb-1">Output</p>
              <pre className="text-xs font-mono bg-gray-50 dark:bg-gray-800 rounded-lg p-3 overflow-x-auto text-gray-700 dark:text-gray-300 whitespace-pre-wrap">{output.stdout}</pre>
            </div>
          )}

          {output.stderr && (
            <div>
              <p className="text-[10px] font-semibold text-red-500 mb-1">Stderr</p>
              <pre className="text-xs font-mono bg-red-50 dark:bg-red-900/20 rounded-lg p-3 overflow-x-auto text-red-600 dark:text-red-400 whitespace-pre-wrap">{output.stderr}</pre>
            </div>
          )}

          {!output.stdout && !output.stderr && !output.compileOutput && (
            <p className="text-xs text-gray-400 italic">No output</p>
          )}

          <div className="flex justify-end pt-1">
            <Button variant="ghost" size="sm" onClick={() => mutation.reset()}>
              <RotateCcw className="w-3 h-3 mr-1" /> Clear
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
