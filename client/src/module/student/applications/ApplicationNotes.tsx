import { useEffect, useRef, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Pencil } from "lucide-react";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import type { TrackedApplication } from "../../../lib/types";
import { Button } from "../../../components/ui/button";
import { Textarea } from "../../../components/ui/textarea";
import toast from "@/components/ui/toast";

const NOTES_LIMIT = 4000;
const NOTES_WARNING_AT = 3500;

type TrackerCache = {
  applications: TrackedApplication[];
};

type ApplicationNotesProps = {
  // Composite tracker id ("tracked-1" / "legacy-1"), used for cache targeting.
  id: string;
  recordType: TrackedApplication["recordType"];
  numericId: number;
  notes: string | null;
};

export function ApplicationNotes({
  id,
  recordType,
  numericId,
  notes,
}: ApplicationNotesProps) {
  const queryClient = useQueryClient();
  const [value, setValue] = useState(notes ?? "");
  const [isEditing, setIsEditing] = useState(false);
  const [savedVisible, setSavedVisible] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const savedTimerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const lastSavedRef = useRef(notes ?? "");
  const saveSeqRef = useRef(0);

  useEffect(() => {
    const nextNotes = notes ?? "";
    lastSavedRef.current = nextNotes;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (!isEditing) setValue(nextNotes);
  }, [notes, isEditing]);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (savedTimerRef.current) clearTimeout(savedTimerRef.current);
    };
  }, []);

  const listKey = queryKeys.applicationTracker.list();

  const mutation = useMutation({
    mutationFn: async (variables: { notes: string; requestId: number }) => {
      if (recordType === "LEGACY_EXTERNAL") {
        const res = await api.patch(
          `/student/external-applications/${numericId}/notes`,
          { notes: variables.notes },
        );
        return (res.data as { notes: string }).notes;
      }
      const res = await api.patch(`/application-tracker/${numericId}`, {
        notes: variables.notes,
      });
      return (res.data as { application: TrackedApplication }).application.notes;
    },
    onMutate: async (variables) => {
      await queryClient.cancelQueries({ queryKey: listKey });

      const previous = queryClient.getQueryData<TrackerCache>(listKey);

      queryClient.setQueryData<TrackerCache>(listKey, (old) => {
        if (!old) return old;
        return {
          ...old,
          applications: old.applications.map((app) =>
            app.id === id ? { ...app, notes: variables.notes } : app,
          ),
        };
      });

      return { previous };
    },
    onError: (_error, variables, context) => {
      if (variables.requestId !== saveSeqRef.current) return;
      if (context?.previous) {
        queryClient.setQueryData(listKey, context.previous);
      }
      setValue(lastSavedRef.current);
      toast.error("Failed to save notes");
    },
    onSuccess: (savedNotes, variables) => {
      if (variables.requestId !== saveSeqRef.current) return;
      lastSavedRef.current = savedNotes;
      setSavedVisible(true);
      if (savedTimerRef.current) clearTimeout(savedTimerRef.current);
      savedTimerRef.current = setTimeout(() => setSavedVisible(false), 1800);
    },
  });

  const saveNotes = (nextNotes: string) => {
    if (nextNotes === lastSavedRef.current) return;
    saveSeqRef.current += 1;
    mutation.mutate({ notes: nextNotes, requestId: saveSeqRef.current });
  };

  const scheduleSave = (nextNotes: string) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => saveNotes(nextNotes), 800);
  };

  const handleChange = (nextValue: string) => {
    const limitedValue = nextValue.slice(0, NOTES_LIMIT);
    setValue(limitedValue);
    scheduleSave(limitedValue);
  };

  const handleBlur = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    saveNotes(value);
  };

  const charactersLeft = NOTES_LIMIT - value.length;
  const showCounter = value.length >= NOTES_WARNING_AT;
  const hasNotes = value.trim().length > 0;

  return (
    <section className="mt-4 border-t border-stone-200 pt-4 dark:border-white/10">
      <div className="mb-2 flex items-center justify-between gap-3">
        <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
          Private notes
        </div>
        <div className="flex items-center gap-3">
          {showCounter && (
            <span className="text-[10px] font-mono uppercase tracking-widest text-amber-600 dark:text-amber-400">
              {charactersLeft} characters left
            </span>
          )}
          <span className="min-w-10 text-[10px] font-mono uppercase tracking-widest text-lime-600 dark:text-lime-400">
            {mutation.isPending ? "Saving" : savedVisible ? "Saved" : ""}
          </span>
        </div>
      </div>

      {isEditing || !hasNotes ? (
        <Textarea
          value={value}
          maxLength={NOTES_LIMIT}
          rows={4}
          placeholder="Add private notes - only you can see these"
          onChange={(event) => handleChange(event.target.value)}
          onFocus={() => setIsEditing(true)}
          onBlur={handleBlur}
          className="min-h-28 resize-y text-sm"
        />
      ) : (
        <div className="space-y-3">
          <p className="whitespace-pre-wrap text-sm leading-6 text-stone-700 dark:text-stone-300">
            {value}
          </p>
          <Button variant="ghost" size="sm" onClick={() => setIsEditing(true)}>
            <Pencil className="h-4 w-4" />
            Edit
          </Button>
        </div>
      )}
    </section>
  );
}
