import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router";
import { Search, X } from "lucide-react";

import openSourceData from "./data/open-source-guide.json";
import gitData from "./data/git-cheatsheet.json";
import gsocData from "./data/gsoc-proposal-guide.json";
import cicdData from "./data/cicd-guide.json";
import codebaseData from "./data/codebase-guide.json";
import communicationData from "./data/communication-templates.json";

interface Step {
  id: string;
  title: string;
  description: string;
}

interface SearchResult {
  guideName: string;
  guidePath: string;
  stepTitle: string;
  stepId: string;
}

const GUIDES = [
  { name: "First PR Roadmap", path: "/student/opensource/first-pr", steps: openSourceData.openSourceRoadmap as Step[] },
  { name: "Git for Open Source", path: "/student/opensource/git-guide", steps: gitData.gitCheatsheet as Step[] },
  { name: "GSoC Proposal Guide", path: "/student/opensource/gsoc-proposal", steps: gsocData.gsocProposalRoadmap as Step[] },
  { name: "CI/CD Basics", path: "/student/opensource/cicd", steps: cicdData.cicdGuide as Step[] },
  { name: "Read a Codebase", path: "/student/opensource/read-codebase", steps: codebaseData.codebaseGuide as Step[] },
  { name: "Communication Templates", path: "/student/opensource/communication", steps: communicationData.communicationGuide as Step[] },
];

export function GuideSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navigate = useNavigate();

  const search = useCallback((q: string) => {
    if (!q.trim()) { setResults([]); setIsOpen(false); return; }
    const lower = q.toLowerCase();
    const found: SearchResult[] = [];
    for (const guide of GUIDES) {
      for (const step of guide.steps) {
        if (step.title.toLowerCase().includes(lower) || step.description.toLowerCase().includes(lower)) {
          found.push({ guideName: guide.name, guidePath: guide.path, stepTitle: step.title, stepId: step.id });
        }
      }
    }
    setResults(found);
    setIsOpen(found.length > 0);
    setActiveIndex(0);
  }, []);

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => search(query), 200);
    return () => { if (debounceRef.current) clearTimeout(debounceRef.current); };
  }, [query, search]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") { setQuery(""); setResults([]); setIsOpen(false); }
    if (e.key === "ArrowDown") { e.preventDefault(); setActiveIndex((i) => Math.min(i + 1, results.length - 1)); }
    if (e.key === "ArrowUp") { e.preventDefault(); setActiveIndex((i) => Math.max(i - 1, 0)); }
    if (e.key === "Enter" && results[activeIndex]) {
      navigate(`${results[activeIndex].guidePath}#${results[activeIndex].stepId}`);
      setQuery(""); setResults([]); setIsOpen(false);
    }
  };

  const handleSelect = (result: SearchResult) => {
    navigate(`${result.guidePath}#${result.stepId}`);
    setQuery(""); setResults([]); setIsOpen(false);
  };

  return (
    <div className="relative mb-6">
      <div className="flex items-center gap-2 border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 rounded-lg px-3 py-2 focus-within:border-lime-400 dark:focus-within:border-lime-400 transition-colors">
        <Search className="w-4 h-4 text-stone-400 shrink-0" />
        <input
          ref={inputRef}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search guides… try 'rebase' or 'upstream'"
          className="flex-1 bg-transparent text-sm text-stone-900 dark:text-stone-50 placeholder-stone-400 outline-none"
          aria-label="Search open source guides"
          aria-expanded={isOpen}
          aria-autocomplete="list"
          role="combobox"
        />
        {query && (
          <button onClick={() => { setQuery(""); setResults([]); setIsOpen(false); inputRef.current?.focus(); }} aria-label="Clear search">
            <X className="w-4 h-4 text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 transition-colors" />
          </button>
        )}
      </div>

      {isOpen && (
        <ul
          role="listbox"
          className="absolute z-50 mt-1 w-full max-h-72 overflow-y-auto rounded-lg border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 shadow-xl"
        >
          {results.map((result, i) => (
            <li
              key={`${result.guidePath}-${result.stepId}`}
              role="option"
              aria-selected={i === activeIndex}
              onClick={() => handleSelect(result)}
              onMouseEnter={() => setActiveIndex(i)}
              className={`flex flex-col gap-0.5 px-4 py-3 cursor-pointer border-b border-stone-100 dark:border-white/5 last:border-0 transition-colors ${
                i === activeIndex ? "bg-stone-50 dark:bg-stone-800" : "hover:bg-stone-50 dark:hover:bg-stone-800"
              }`}
            >
              <span className="text-[10px] font-mono uppercase tracking-widest text-lime-600 dark:text-lime-400">{result.guideName}</span>
              <span className="text-sm font-semibold text-stone-900 dark:text-stone-50">{result.stepTitle}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
