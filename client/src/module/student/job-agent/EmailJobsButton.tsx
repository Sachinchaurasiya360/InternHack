import React from "react";
import { Check, Loader2, Mail } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { Button } from "../../../components/ui/button";
import api from "../../../lib/axios";
import type { JobFeedMatch } from "../../../lib/types";
import { cn } from "../../../lib/utils";

interface Props {
  jobs: JobFeedMatch["job"][];
  precedingUserPrompt?: string;
}

type EmailJobsResponse = {
  sent: true;
  count: number;
};

function getRetryAfter(error: unknown): number | null {
  const retryAfter = (error as { response?: { data?: { retryAfter?: unknown } } })?.response?.data?.retryAfter;
  return typeof retryAfter === "number" && Number.isFinite(retryAfter) ? Math.max(1, Math.ceil(retryAfter)) : null;
}

export function EmailJobsButton({ jobs, precedingUserPrompt }: Props) {
  const [cooldownUntil, setCooldownUntil] = React.useState<number | null>(null);
  const [remainingSeconds, setRemainingSeconds] = React.useState(0);
  const [sent, setSent] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const sentTimerRef = React.useRef<number | null>(null);

  React.useEffect(() => {
    if (!cooldownUntil) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setRemainingSeconds(0);
      return;
    }

    const update = () => {
      const next = Math.max(0, Math.ceil((cooldownUntil - Date.now()) / 1000));
      setRemainingSeconds(next);
      if (next <= 0) setCooldownUntil(null);
    };

    update();
    const interval = window.setInterval(update, 1000);
    return () => window.clearInterval(interval);
  }, [cooldownUntil]);

  React.useEffect(() => {
    return () => {
      if (sentTimerRef.current !== null) window.clearTimeout(sentTimerRef.current);
    };
  }, []);

  const emailMut = useMutation({
    mutationFn: async () => {
      const payload = {
        jobIds: jobs.map((job) => job.id),
        context: precedingUserPrompt?.trim() || undefined,
      };
      const res = await api.post("/job-agent/email-jobs", payload);
      return res.data as EmailJobsResponse;
    },
    onSuccess: () => {
      setError(null);
      setSent(true);
      setCooldownUntil(Date.now() + 60_000);

      if (sentTimerRef.current !== null) window.clearTimeout(sentTimerRef.current);
      sentTimerRef.current = window.setTimeout(() => {
        setSent(false);
        sentTimerRef.current = null;
      }, 2000);
    },
    onError: (err) => {
      const retryAfter = getRetryAfter(err);
      if (retryAfter !== null) {
        setCooldownUntil(Date.now() + retryAfter * 1000);
        setError(null);
        return;
      }
      setError("Could not send");
    },
  });

  const isCoolingDown = remainingSeconds > 0;
  const disabled = emailMut.isPending || isCoolingDown;
  const title = isCoolingDown ? `Email sent - try again in ${remainingSeconds}s` : "Email me these jobs";
  const label = sent ? "Sent to your email" : isCoolingDown ? `Try again in ${remainingSeconds}s` : "Email me these jobs";
  const Icon = sent ? Check : emailMut.isPending ? Loader2 : Mail;

  return (
    <div className="mt-3 flex flex-wrap items-center gap-2">
      <Button
        type="button"
        variant="outline"
        size="sm"
        onClick={() => {
          if (disabled) return;
          emailMut.mutate();
        }}
        disabled={disabled}
        aria-label={label}
        title={title}
        className={cn(
          "border-stone-200 bg-white text-stone-700 shadow-sm hover:border-stone-300 hover:bg-stone-50 hover:text-stone-950",
          "dark:border-white/10 dark:bg-stone-900 dark:text-stone-300 dark:hover:border-white/20 dark:hover:bg-stone-800 dark:hover:text-stone-50",
          sent && "border-lime-300 bg-lime-50 text-lime-700 dark:border-lime-400/40 dark:bg-lime-950/30 dark:text-lime-300",
        )}
      >
        <Icon className={cn("h-3.5 w-3.5", emailMut.isPending && "animate-spin")} />
        <span className="hidden sm:inline">{label}</span>
      </Button>
      {error && (
        <span className="text-[10px] font-mono uppercase tracking-widest text-red-500 dark:text-red-400">
          {error}
        </span>
      )}
    </div>
  );
}
