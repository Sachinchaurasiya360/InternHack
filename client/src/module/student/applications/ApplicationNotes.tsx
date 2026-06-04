import { useEffect, useRef, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Pencil } from "lucide-react";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import type { Application, ExternalApplication } from "../../../lib/types";
import { Button } from "../../../components/ui/button";
import { Textarea } from "../../../components/ui/textarea";
import toast from "@/components/ui/toast";

const NOTES_LIMIT = 4000;
const NOTES_WARNING_AT = 3500;

type ApplicationsCache = {
  applications: Application[];
  externalApplications: ExternalApplication[];
};

type ApplicationNotesProps = {
  applicationId: number;
  kind: "internal" | "external";
  notes: string | null;
  progressKeyId?: string | number;
};

export function ApplicationNotes({
  applicationId,
  kind,
  notes,
  progressKeyId,
}: ApplicationNotesProps) {
  const queryClient = useQueryClient();
  const progressQueryKey = progressKeyId
    ? queryKeys.applications.progress(String(progressKeyId))
    : undefined;
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

  const mutation = useMutation({
    mutationFn: async (variables: { notes: string; requestId: number }) => {
      const endpoint =
        kind === "internal"
          ? `/student/applications/${applicationId}/notes`
          : `/student/external-applications/${applicationId}/notes`;
      const res = await api.patch(endpoint, { notes: variables.notes });
      return res.data as { notes: string; updatedAt: string };
    },
    onMutate: async (variables) => {
      await queryClient.cancelQueries({ queryKey: queryKeys.applications.mine() });
      if (kind === "internal" && progressQueryKey) {
        await queryClient.cancelQueries({ queryKey: progressQueryKey });
      }

      const previousMine = queryClient.getQueryData<ApplicationsCache>(queryKeys.applications.mine());
      const previousProgress = progressQueryKey
        ? queryClient.getQueryData<Application>(progressQueryKey)
        : undefined;

      queryClient.setQueryData<ApplicationsCache>(queryKeys.applications.mine(), (old) => {
        if (!old) return old;
        if (kind === "internal") {
          return {
            ...old,
            applications: old.applications.map((app) =>
              app.id === applicationId ? { ...app, studentNotes: variables.notes } : app
            ),
          };
        }
        return {
          ...old,
          externalApplications: old.externalApplications.map((app) =>
            app.id === applicationId ? { ...app, studentNotes: variables.notes } : app
          ),
        };
      });

      if (kind === "internal" && progressQueryKey) {
        queryClient.setQueryData<Application>(progressQueryKey, (old) =>
          old ? { ...old, studentNotes: variables.notes } : old
        );
      }

      return { previousMine, previousProgress };
    },
    onError: (_error, variables, context) => {
      if (variables.requestId !== saveSeqRef.current) return;
      if (context?.previousMine) {
        queryClient.setQueryData(queryKeys.applications.mine(), context.previousMine);
      }
      if (progressQueryKey && context?.previousProgress) {
        queryClient.setQueryData(progressQueryKey, context.previousProgress);
      }
      setValue(lastSavedRef.current);
      toast.error("Failed to save notes");
    },
    onSuccess: (data, variables) => {
      if (variables.requestId !== saveSeqRef.current) return;
      lastSavedRef.current = data.notes;
      if (kind === "internal" && progressQueryKey) {
        queryClient.setQueryData<Application>(progressQueryKey, (old) =>
          old ? { ...old, studentNotes: data.notes, updatedAt: data.updatedAt } : old
        );
      }
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
