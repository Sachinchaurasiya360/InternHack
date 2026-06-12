import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  BrainCircuit,
  Bookmark,
  Trash2,
  ChevronDown,
  Loader2,
  AlertCircle,
  RefreshCw,
} from "lucide-react";
import { useCoachStore } from "./stores/coach.store";
import {
  saveCoachAdvice,
  fetchSavedAdvice,
  deleteCoachAdvice,
} from "./api/coach.api";
import type { SavedAdvice } from "./api/coach.api";
import toast from "../../../components/ui/toast";

// ── Simple markdown renderer (bold, headings, bullets, code) ──
function renderMarkdown(md: string) {
  return md.split("\n").map((line, i) => {
    const trimmed = line.trimStart();

    // Heading
    if (trimmed.startsWith("### "))
      return (
        <h4
          key={i}
          className="text-sm font-bold text-stone-900 dark:text-stone-50 mt-4 mb-1"
        >
          {formatInline(trimmed.slice(4))}
        </h4>
      );
    if (trimmed.startsWith("## "))
      return (
        <h3
          key={i}
          className="text-base font-bold text-stone-900 dark:text-stone-50 mt-5 mb-1"
        >
          {formatInline(trimmed.slice(3))}
        </h3>
      );
    if (trimmed.startsWith("# "))
      return (
        <h2
          key={i}
          className="text-lg font-bold text-stone-900 dark:text-stone-50 mt-5 mb-2"
        >
          {formatInline(trimmed.slice(2))}
        </h2>
      );

    // Bullet
    if (trimmed.startsWith("- ") || trimmed.startsWith("* "))
      return (
        <li
          key={i}
          className="text-sm text-stone-600 dark:text-stone-400 ml-4 list-disc leading-relaxed"
        >
          {formatInline(trimmed.slice(2))}
        </li>
      );

    // Numbered
    const numbered = trimmed.match(/^(\d+)\.\s(.*)/);
    if (numbered)
      return (
        <li
          key={i}
          className="text-sm text-stone-600 dark:text-stone-400 ml-4 list-decimal leading-relaxed"
        >
          {formatInline(numbered[2]!)}
        </li>
      );

    // Empty
    if (!trimmed) return <div key={i} className="h-2" />;

    // Paragraph
    return (
      <p
        key={i}
        className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed"
      >
        {formatInline(line)}
      </p>
    );
  });
}

function formatInline(text: string) {
  // Bold: **text**
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**"))
      return (
        <strong key={i} className="font-semibold text-stone-900 dark:text-stone-100">
          {part.slice(2, -2)}
        </strong>
      );
    if (part.startsWith("`") && part.endsWith("`"))
      return (
        <code
          key={i}
          className="px-1 py-0.5 rounded bg-stone-100 dark:bg-stone-800 text-xs font-mono text-stone-700 dark:text-stone-300"
        >
          {part.slice(1, -1)}
        </code>
      );
    return part;
  });
}

// ── Saved Advice Drawer ──
function SavedAdviceSection() {
  const [expanded, setExpanded] = useState(false);
  const [items, setItems] = useState<SavedAdvice[]>([]);
  const [loading, setLoading] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const data = await fetchSavedAdvice();
      setItems(data);
    } catch {
      toast.error("Failed to load saved advice");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (expanded && items.length === 0) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      void load();
    }
  }, [expanded, items.length, load]);

  const handleDelete = async (id: number) => {
    try {
      await deleteCoachAdvice(id);
      setItems((prev) => prev.filter((a) => a.id !== id));
      toast.success("Advice deleted");
    } catch {
      toast.error("Failed to delete");
    }
  };

  return (
    <div className="border-t border-stone-200 dark:border-white/10">
      <button
        onClick={() => setExpanded((p) => !p)}
        className="w-full flex items-center justify-between px-4 py-3 text-xs font-mono uppercase tracking-widest text-stone-500 hover:text-stone-700 dark:hover:text-stone-300 transition-colors bg-transparent border-0 cursor-pointer"
      >
        <span className="flex items-center gap-2">
          <Bookmark className="w-3.5 h-3.5" />
          Saved Advice ({items.length})
        </span>
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform ${expanded ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            {loading && (
              <div className="flex items-center justify-center py-6">
                <Loader2 className="w-4 h-4 animate-spin text-stone-400" />
              </div>
            )}

            {!loading && items.length === 0 && (
              <p className="text-xs text-stone-400 px-4 pb-4">
                No saved advice yet. Click "Save this advice" after receiving a
                suggestion.
              </p>
            )}

            {items.map((item) => (
              <div
                key={item.id}
                className="px-4 py-3 border-t border-stone-100 dark:border-white/5 group"
              >
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h5 className="text-xs font-semibold text-stone-900 dark:text-stone-100 truncate">
                    {item.title}
                  </h5>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="p-1 rounded-sm text-stone-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors opacity-0 group-hover:opacity-100 bg-transparent border-0 cursor-pointer shrink-0"
                    title="Delete"
                  >
                    <Trash2 className="w-3 h-3" />
                  </button>
                </div>
                <p className="text-xs text-stone-500 line-clamp-3 leading-relaxed">
                  {item.content.slice(0, 200)}
                  {item.content.length > 200 ? "…" : ""}
                </p>
                <span className="text-[10px] text-stone-400 mt-1 block">
                  {new Date(item.createdAt).toLocaleDateString()}
                </span>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Main Coach Panel ──
export default function ContributionCoachPanel() {
  const {
    isOpen,
    isLoading,
    advice,
    error,
    currentTrigger,
    pendingPayload,
    close,
    consumePayload,
    clearAdvice,
    fetchSuggestion,
  } = useCoachStore();

  const contentRef = useRef<HTMLDivElement>(null);
  const [saving, setSaving] = useState(false);

  const isFetchingBus = useRef(false);

  // Consume pending payload — fetch suggestion
  useEffect(() => {
    if (!pendingPayload || isFetchingBus.current) return;

    const payload = pendingPayload;
    // Immediately clear so no other component (or local re-render) captures it
    consumePayload();
    isFetchingBus.current = true;

    void fetchSuggestion(payload).finally(() => {
      isFetchingBus.current = false;
    });

    return () => {
      isFetchingBus.current = false;
    };
  }, [pendingPayload, consumePayload, fetchSuggestion]);

  // Auto-scroll as advice arrives
  useEffect(() => {
    if (advice && contentRef.current) {
      contentRef.current.scrollTop = contentRef.current.scrollHeight;
    }
  }, [advice]);

  const handleSave = async () => {
    if (!advice) return;
    setSaving(true);
    try {
      await saveCoachAdvice({
        content: advice,
        trigger: currentTrigger ?? "MANUAL",
      });
      toast.success("Advice saved!");
    } catch {
      toast.error("Failed to save advice");
    } finally {
      setSaving(false);
    }
  };

  const handleRetry = () => {
    if (!currentTrigger) return;
    clearAdvice();
    const payload = {
      trigger: currentTrigger,
      context: {}, // Note: Context might be thin on retry unless we persist it
    };
    void fetchSuggestion(payload);
  };

  const triggerLabel: Record<string, string> = {
    FIRST_PR_COMPLETE: "First PR Roadmap Complete",
    REPO_BOOKMARKED: "Repo Bookmarked",
    GITHUB_CONNECTED: "GitHub Connected",
    INACTIVITY: "Welcome Back",
    MANUAL: "Coach Advice",
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop — mobile */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-stone-950/40 z-40 lg:hidden"
            onClick={close}
          />

          {/* Panel */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            className="fixed top-0 right-0 h-screen w-full max-w-sm bg-white dark:bg-stone-950 border-l border-stone-200 dark:border-white/10 z-50 flex flex-col shadow-2xl shadow-stone-900/10 dark:shadow-stone-950/50"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-stone-200 dark:border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-md bg-stone-900 dark:bg-stone-50 flex items-center justify-center">
                  <BrainCircuit className="w-4 h-4 text-lime-400 dark:text-stone-900" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-stone-900 dark:text-stone-50 leading-tight">
                    Contribution Coach
                  </h2>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-stone-400">
                    AI-powered guidance
                  </p>
                </div>
              </div>
              <button
                onClick={close}
                className="p-1.5 rounded-md text-stone-500 hover:text-stone-900 dark:hover:text-stone-50 hover:bg-stone-100 dark:hover:bg-stone-900 transition-colors border-0 bg-transparent cursor-pointer"
                aria-label="Close coach panel"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Trigger badge */}
            {currentTrigger && (
              <div className="px-4 pt-3">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-lime-400/10 border border-lime-400/20 text-xs font-semibold text-lime-700 dark:text-lime-400">
                  {triggerLabel[currentTrigger] ?? "Coach Advice"}
                </span>
              </div>
            )}

            {/* Content */}
            <div
              ref={contentRef}
              className="flex-1 overflow-y-auto px-4 py-4 space-y-1"
            >
              {isLoading && !advice && (
                <div className="flex flex-col items-center justify-center h-full gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-md bg-stone-900 dark:bg-stone-50 flex items-center justify-center">
                      <BrainCircuit className="w-5 h-5 text-lime-400 dark:text-stone-900" />
                    </div>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute -inset-1 rounded-md border-2 border-transparent border-t-lime-400/40"
                    />
                  </div>
                  <p className="text-sm text-stone-500 font-medium">
                    Analyzing your profile…
                  </p>
                  <p className="text-xs text-stone-400">
                    Building personalized recommendations
                  </p>
                </div>
              )}

              {error && (
                <div className="flex flex-col items-center justify-center h-full gap-3">
                  <div className="w-10 h-10 rounded-md bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 flex items-center justify-center">
                    <AlertCircle className="w-5 h-5 text-red-500" />
                  </div>
                  <p className="text-sm text-stone-600 dark:text-stone-400 text-center">
                    {error}
                  </p>
                  <button
                    onClick={handleRetry}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-stone-100 dark:bg-stone-900 text-xs font-semibold text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-800 transition-colors border-0 cursor-pointer"
                  >
                    <RefreshCw className="w-3 h-3" />
                    Retry
                  </button>
                </div>
              )}

              {advice && !error && (
                <div className="space-y-0.5">{renderMarkdown(advice)}</div>
              )}

              {!isLoading && !advice && !error && (
                <div className="flex flex-col items-center justify-center h-full gap-3 text-center">
                  <div className="w-10 h-10 rounded-md bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-white/10 flex items-center justify-center">
                    <BrainCircuit className="w-5 h-5 text-stone-400" />
                  </div>
                  <p className="text-sm text-stone-500 font-medium">
                    Your AI Contribution Coach
                  </p>
                  <p className="text-xs text-stone-400 max-w-[240px]">
                    Complete guides, bookmark repos, or connect GitHub to get
                    personalized guidance.
                  </p>
                </div>
              )}
            </div>

            {/* Actions */}
            {advice && !error && (
              <div className="px-4 py-3 border-t border-stone-200 dark:border-white/10 flex items-center gap-2">
                <button
                  onClick={handleSave}
                  disabled={saving}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-lime-400 text-stone-950 text-sm font-bold hover:bg-lime-300 transition-colors border-0 cursor-pointer disabled:opacity-50"
                >
                  {saving ? (
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  ) : (
                    <Bookmark className="w-3.5 h-3.5" />
                  )}
                  Save this advice
                </button>
                <button
                  onClick={handleRetry}
                  className="p-2 rounded-md text-stone-500 hover:text-stone-900 dark:hover:text-stone-50 hover:bg-stone-100 dark:hover:bg-stone-900 transition-colors border-0 bg-transparent cursor-pointer"
                  title="Get new suggestion"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* Saved advice section */}
            <SavedAdviceSection />
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
