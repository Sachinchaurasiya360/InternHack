import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router";
import { Search, Briefcase, FileText, BookOpen, Code, Terminal, User, Laptop, GraduationCap, Award, GitPullRequest } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

type CommandItem = {
  id: string;
  name: string;
  path: string;
  icon: React.ElementType;
  group: string;
};

const COMMANDS: CommandItem[] = [
  // Applications & Jobs
  { id: "apps", name: "My Applications", path: "/student/applications", icon: Briefcase, group: "Career" },
  { id: "jobs", name: "Browse Jobs", path: "/student/jobs", icon: Search, group: "Career" },
  { id: "internships", name: "Gov Internships", path: "/student/internships", icon: GraduationCap, group: "Career" },
  { id: "companies", name: "Companies", path: "/student/companies", icon: Laptop, group: "Career" },
  
  // ATS Tools
  { id: "ats-gen", name: "Resume Generator", path: "/student/ats/resume-generator", icon: FileText, group: "ATS Tools" },
  { id: "ats-score", name: "ATS Score Checker", path: "/student/ats/score", icon: Award, group: "ATS Tools" },
  { id: "ats-cover", name: "Cover Letter Generator", path: "/student/ats/cover-letter", icon: FileText, group: "ATS Tools" },
  
  // Learning
  { id: "learn-dsa", name: "Learn DSA", path: "/learn/dsa", icon: Code, group: "Learning" },
  { id: "learn-sysdesign", name: "System Design", path: "/learn/system-design", icon: Laptop, group: "Learning" },
  { id: "learn-aptitude", name: "Aptitude Prep", path: "/learn/aptitude", icon: BookOpen, group: "Learning" },
  { id: "learn-sql", name: "SQL Practice", path: "/learn/sql", icon: Terminal, group: "Learning" },
  { id: "learn-js", name: "JavaScript Mastery", path: "/learn/javascript", icon: Code, group: "Learning" },
  { id: "learn-react", name: "React Mastery", path: "/learn/react", icon: Code, group: "Learning" },
  { id: "learn-python", name: "Python Mastery", path: "/learn/python", icon: Code, group: "Learning" },

  // Open Source
  { id: "os-dash", name: "Open Source Dashboard", path: "/student/opensource", icon: GitPullRequest, group: "Open Source" },
  { id: "os-discover", name: "Discover Repos", path: "/student/opensource/discover", icon: Search, group: "Open Source" },
  { id: "os-gsoc", name: "GSoC Tracker", path: "/student/opensource/gsoc", icon: Award, group: "Open Source" },
  
  // General
  { id: "mock-interview", name: "Mock Interviews", path: "/student/mock-interview", icon: User, group: "General" },
  { id: "skills", name: "Skill Verification", path: "/student/skill-verification", icon: Award, group: "General" },
  { id: "ai-agent", name: "Job AI Agent", path: "/student/ai-agent", icon: Terminal, group: "General" },
  { id: "profile", name: "My Profile", path: "/student/profile", icon: User, group: "General" },
];

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Filter items
  const filteredCommands = COMMANDS.filter((cmd) => 
    cmd.name.toLowerCase().includes(query.toLowerCase()) || 
    cmd.group.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  // Handle keyboard navigation inside palette
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filteredCommands.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % filteredCommands.length);
    } else if (e.key === "Enter" && filteredCommands.length > 0) {
      e.preventDefault();
      handleSelect(filteredCommands[selectedIndex].path);
    } else if (e.key === "Escape") {
      e.preventDefault();
      setIsOpen(false);
    }
  };

  const handleSelect = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  // Scroll into view logic
  useEffect(() => {
    if (listRef.current) {
      const activeElement = listRef.current.querySelector('[aria-selected="true"]');
      if (activeElement) {
        activeElement.scrollIntoView({ block: "nearest" });
      }
    }
  }, [selectedIndex]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-[10vh] sm:pt-[15vh]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-stone-900/40 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
          className="relative w-full max-w-lg mx-4 bg-white dark:bg-stone-900 rounded-xl shadow-2xl border border-stone-200 dark:border-stone-800 overflow-hidden flex flex-col max-h-[80vh]"
        >
          <div className="flex items-center px-4 py-3 border-b border-stone-200 dark:border-stone-800">
            <Search className="w-5 h-5 text-stone-400 mr-3 shrink-0" />
            <input
              ref={inputRef}
              className="flex-1 bg-transparent border-none outline-none text-stone-900 dark:text-stone-100 placeholder:text-stone-400 text-[15px]"
              placeholder="Type a command or search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <div className="flex items-center gap-1 text-[10px] font-medium text-stone-400 ml-3 shrink-0">
              <span className="bg-stone-100 dark:bg-stone-800 px-1.5 py-0.5 rounded border border-stone-200 dark:border-stone-700">ESC</span>
              <span>to close</span>
            </div>
          </div>

          <div 
            ref={listRef}
            className="flex-1 overflow-y-auto p-2 scrollbar-thin scrollbar-thumb-stone-200 dark:scrollbar-thumb-stone-700"
          >
            {filteredCommands.length === 0 ? (
              <div className="py-14 text-center text-sm text-stone-500">
                No results found.
              </div>
            ) : (
              <div className="space-y-1 text-[14px]">
                {filteredCommands.map((cmd, idx) => {
                  const isSelected = idx === selectedIndex;
                  const Icon = cmd.icon;
                  // Group heading logic (simple, assuming commands are sorted by group mostly)
                  const prevCmd = filteredCommands[idx - 1];
                  const showGroup = !prevCmd || prevCmd.group !== cmd.group;

                  return (
                    <React.Fragment key={cmd.id}>
                      {showGroup && (
                        <div className="px-3 py-2 text-[11px] font-semibold text-stone-500 uppercase tracking-wider mt-2 first:mt-0">
                          {cmd.group}
                        </div>
                      )}
                      <button
                        onClick={() => handleSelect(cmd.path)}
                        aria-selected={isSelected}
                        className={`w-full flex items-center px-3 py-2.5 rounded-lg text-left transition-colors ${
                          isSelected 
                            ? "bg-stone-100 dark:bg-stone-800 text-stone-900 dark:text-stone-50" 
                            : "text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-800/50"
                        }`}
                        onMouseEnter={() => setSelectedIndex(idx)}
                      >
                        <Icon className={`w-4 h-4 mr-3 ${isSelected ? "text-stone-900 dark:text-stone-50" : "text-stone-400"}`} />
                        <span>{cmd.name}</span>
                        {isSelected && (
                          <span className="ml-auto text-[10px] text-stone-400 font-medium">↵</span>
                        )}
                      </button>
                    </React.Fragment>
                  );
                })}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
