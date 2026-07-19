import React, { useState, useEffect, useRef, useCallback } from "react";
import { StickyNote, Loader2, Check, AlertTriangle, Save } from "lucide-react";
import { Button } from "../ui/button";
import api from "@/lib/axios";
import toast from "@/components/ui/toast";

interface NotesPanelProps {
  contentType: "DSA_PROBLEM" | "ROADMAP_TOPIC" | "INTERVIEW_QUESTION" | "APTITUDE_QUESTION";
  contentId: string | number;
  className?: string;
}

export const NotesPanel = React.memo(function NotesPanel({
  contentType,
  contentId,
  className = "",
}: NotesPanelProps) {
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const initialLoadRef = useRef(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const noteRef = useRef(note);
  const abortControllerRef = useRef<AbortController | null>(null);
  const lastSavedRef = useRef("");

  useEffect(() => {
    noteRef.current = note;
  }, [note]);

  useEffect(() => {
    let active = true;
    const loadNote = async () => {
      setLoading(true);
      setError(null);
      try {
        const { data } = await api.get(`/notes/${contentType}/${contentId}`);
        if (active) {
          const loaded = data.note?.note ?? "";
          setNote(loaded);
          lastSavedRef.current = loaded;
          setSaveStatus("idle");
          initialLoadRef.current = false;
        }
      } catch (err: unknown) {
        if (active) {
          const status =
            typeof err === "object" &&
            err !== null &&
            "response" in err &&
            typeof (err as { response?: unknown }).response === "object" &&
            (err as { response?: unknown }).response !== null
              ? (err as { response: { status?: number } }).response.status
              : undefined;
          if (status === 404) {
            setNote("");
            lastSavedRef.current = "";
            initialLoadRef.current = false;
          } else {
            setError("Failed to load notes.");
          }
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    };

    loadNote();
    return () => {
      active = false;
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [contentType, contentId]);

  const handleSave = useCallback(async (valueToSave: string) => {
    if (valueToSave === lastSavedRef.current) {
      setSaveStatus("idle");
      return;
    }

    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    const controller = new AbortController();
    abortControllerRef.current = controller;

    setSaving(true);
    setSaveStatus("saving");
    setError(null);
    try {
      await api.put(
        `/notes/${contentType}/${contentId}`,
        { note: valueToSave },
        { signal: controller.signal }
      );
      if (abortControllerRef.current === controller) {
        lastSavedRef.current = valueToSave;
        setSaveStatus("saved");
      }
    } catch (err: unknown) {
      if (
        typeof err === "object" &&
        err !== null &&
        "name" in err &&
        ((err as { name?: string }).name === "CanceledError" || (err as { name?: string }).name === "AbortError")
      ) {
        return;
      }
      if (abortControllerRef.current === controller) {
        setSaveStatus("error");
        setError("Failed to save note.");
        toast.error("Failed to save note.");
      }
    } finally {
      if (abortControllerRef.current === controller) {
        setSaving(false);
      }
    }
  }, [contentType, contentId]);

  useEffect(() => {
    if (loading || initialLoadRef.current) return;

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    setSaveStatus("idle");

    timeoutRef.current = setTimeout(() => {
      handleSave(noteRef.current);
    }, 1000);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [note, handleSave, loading]);

  const triggerManualSave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    handleSave(note);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8 bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-lg">
        <Loader2 className="w-5 h-5 text-stone-500 animate-spin mr-2" />
        <span className="text-sm text-stone-500 font-mono">Loading notes...</span>
      </div>
    );
  }

  return (
    <div className={`flex flex-col bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-lg overflow-hidden ${className}`}>
      <div className="flex items-center justify-between px-4 py-3 border-b border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-stone-900/50">
        <div className="flex items-center gap-2">
          <StickyNote className="w-4 h-4 text-lime-500" />
          <span className="text-xs font-mono uppercase tracking-wider text-stone-700 dark:text-stone-300 font-semibold">
            My Notes
          </span>
        </div>

        <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest">
          {saveStatus === "saving" && (
            <span className="flex items-center gap-1 text-amber-500">
              <Loader2 className="w-3 h-3 animate-spin" /> saving
            </span>
          )}
          {saveStatus === "saved" && (
            <span className="flex items-center gap-1 text-lime-500">
              <Check className="w-3 h-3" /> saved
            </span>
          )}
          {saveStatus === "error" && (
            <span className="flex items-center gap-1 text-red-500">
              <AlertTriangle className="w-3 h-3" /> error
            </span>
          )}
        </div>
      </div>

      <div className="relative flex-1 min-h-[120px]">
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          maxLength={4000}
          onBlur={triggerManualSave}
          placeholder="Add your personal notes, key takeaways, or solutions here... (autosaves)"
          className="w-full h-full min-h-[120px] p-4 text-sm bg-transparent border-0 outline-hidden resize-y focus:ring-0 text-stone-800 dark:text-stone-200 placeholder-stone-400 dark:placeholder-stone-500 leading-relaxed font-sans"
        />
      </div>

      <div className="flex items-center justify-between px-4 py-2 border-t border-stone-200 dark:border-white/10 bg-stone-50/50 dark:bg-stone-900/20 text-xs font-mono text-stone-500">
        <span className={note.length >= 4000 ? "text-red-500 font-semibold" : note.length >= 3600 ? "text-amber-500" : "text-stone-500"}>
          {note.length} / 4000 characters
        </span>
        <Button
          size="sm"
          variant="outline"
          onClick={triggerManualSave}
          disabled={saving}
          className="text-xs h-6 px-2 font-mono uppercase tracking-wider"
        >
          {saving ? (
            <Loader2 className="w-2.5 h-2.5 animate-spin mr-1" />
          ) : (
            <Save className="w-2.5 h-2.5 mr-1" />
          )}
          Save
        </Button>
      </div>

      {error && (
        <div className="px-4 py-2 bg-red-50 dark:bg-red-950/20 border-t border-red-200 dark:border-red-900/40 text-xs text-red-600 dark:text-red-400 font-mono">
          {error}
        </div>
      )}
    </div>
  );
});
