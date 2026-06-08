import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import {
  History,
  Trash2,
  ChevronDown,
  ChevronUp,
  RotateCcw,
  Loader2,
  Clock,
  Building2,
  Briefcase,
} from "lucide-react";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import toast from "@/components/ui/toast";

interface HistoryItem {
  id: number;
  jobTitle:    string | null;
  companyName: string | null;
  tone:        string;
  excerpt:     string;
  createdAt:   string;
}

interface Props {
  onLoad: (letter: {
    jobTitle:       string;
    companyName:    string;
    jobDescription: string;
    content:        string;
    tone:           string;
    useProfile:     boolean;
    keySkills:      string;
  }) => void;
}

const cardCls =
  "bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md";
const sectionKickerCls =
  "inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-stone-500";

function timeAgo(dateStr: string) {
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins  = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days  = Math.floor(diff / 86400000);
  if (mins  < 1)  return "just now";
  if (mins  < 60) return `${String(mins)}m ago`;
  if (hours < 24) return `${String(hours)}h ago`;
  return `${String(days)}d ago`;
}

export default function CoverLetterHistoryPanel({ onLoad }: Props) {
  const [open,      setOpen]      = useState(false);
  const [loadingId, setLoadingId] = useState<number | null>(null);
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery<{ history: HistoryItem[] }>({
    queryKey: queryKeys.coverLetter.history(),
    queryFn:  () => api.get("/ats/cover-letter/history").then((r) => r.data),
    enabled:  open,
    staleTime: 30_000,
  });

  const deleteMutation = useMutation({
    mutationFn: (id: number) => api.delete(`/ats/cover-letter/history/${String(id)}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.coverLetter.history() });
      toast.success("Deleted");
    },
    onError: () => toast.error("Failed to delete"),
  });

  const handleLoad = async (id: number) => {
    setLoadingId(id);
    try {
      const { data } = await api.get<{
        letter: {
          jobTitle:       string | null;
          companyName:    string | null;
          jobDescription: string;
          content:        string;
          tone:           string;
          useProfile:     boolean;
          keySkills:      string | null;
        };
      }>(`/ats/cover-letter/history/${String(id)}`);

      onLoad({
        jobTitle:       data.letter.jobTitle       ?? "",
        companyName:    data.letter.companyName    ?? "",
        jobDescription: data.letter.jobDescription,
        content:        data.letter.content,
        tone:           data.letter.tone,
        useProfile:     data.letter.useProfile,
        keySkills:      data.letter.keySkills      ?? "",
      });

      toast.success("Loaded — edit and regenerate anytime");
    } catch {
      toast.error("Failed to load letter");
    } finally {
      setLoadingId(null);
    }
  };

  const history = data?.history ?? [];

  return (
    <div className={cardCls}>
      {/* ── Header toggle ── */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-3 px-5 py-3.5 border-b border-stone-200 dark:border-white/10 cursor-pointer bg-transparent text-left"
      >
        <div className="flex flex-col gap-1 min-w-0">
          <span className={sectionKickerCls}>
            <span className="h-1 w-1 bg-lime-400" />
            history
          </span>
          <span className="text-sm font-bold text-stone-900 dark:text-stone-50">
            Past cover letters
          </span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          {history.length > 0 && (
            <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-lime-400 text-stone-950">
              {history.length}
            </span>
          )}
          {open
            ? <ChevronUp   className="w-4 h-4 text-stone-500" />
            : <ChevronDown className="w-4 h-4 text-stone-500" />}
        </div>
      </button>

      {/* ── Content ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden"
          >
            {isLoading ? (
              <div className="flex items-center justify-center py-10">
                <Loader2 className="w-5 h-5 animate-spin text-stone-400" />
              </div>
            ) : history.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-10 text-center px-5">
                <History className="w-8 h-8 text-stone-300 dark:text-stone-700 mb-3" />
                <p className="text-sm font-bold text-stone-900 dark:text-stone-50 mb-1">
                  No letters yet
                </p>
                <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
                  Generated letters auto-save here
                </p>
              </div>
            ) : (
              <div className="divide-y divide-stone-200 dark:divide-white/10">
                {history.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="group px-5 py-4 hover:bg-stone-50 dark:hover:bg-stone-950/40 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          {item.companyName && (
                            <span className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-widest text-stone-500">
                              <Building2 className="w-2.5 h-2.5" />
                              {item.companyName}
                            </span>
                          )}
                          {item.jobTitle && (
                            <span className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-widest text-stone-500">
                              <Briefcase className="w-2.5 h-2.5" />
                              {item.jobTitle}
                            </span>
                          )}
                          {!item.companyName && !item.jobTitle && (
                            <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400">
                              untitled
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-widest text-stone-400">
                            <Clock className="w-2.5 h-2.5" />
                            {timeAgo(item.createdAt)}
                          </span>
                          <span className="h-1 w-1 rounded-full bg-stone-300 dark:bg-stone-700" />
                          <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400">
                            {item.tone}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          type="button"
                          onClick={() => handleLoad(item.id)}
                          disabled={loadingId === item.id}
                          title="Load this letter"
                          className="inline-flex items-center gap-1 px-2 py-1.5 rounded-md text-[10px] font-bold text-stone-700 dark:text-stone-300 bg-transparent border border-stone-300 dark:border-white/15 hover:bg-stone-100 dark:hover:bg-white/5 transition-colors cursor-pointer disabled:opacity-50"
                        >
                          {loadingId === item.id
                            ? <Loader2 className="w-3 h-3 animate-spin" />
                            : <RotateCcw className="w-3 h-3" />}
                          Load
                        </button>
                        <button
                          type="button"
                          onClick={() => deleteMutation.mutate(item.id)}
                          disabled={deleteMutation.isPending}
                          title="Delete"
                          className="inline-flex items-center justify-center w-7 h-7 rounded-md text-stone-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 transition-colors bg-transparent border-0 cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed line-clamp-2">
                      {item.excerpt}…
                    </p>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}