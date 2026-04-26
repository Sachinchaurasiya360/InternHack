import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { X, Loader2, CheckCircle2 } from "lucide-react";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import type { RepoDomain, RepoDifficulty } from "../../../lib/types";
import { REPO_DOMAINS, DIFFICULTY_OPTIONS } from "./reposData";
import { parseGithubRepoUrl } from "./_shared/repo-utils";
import { getInputCls } from "../../../components/ui/form";
import { Button } from "../../../components/ui/button";

interface SuggestRepoForm {
  name: string;
  owner: string;
  description: string;
  language: string;
  url: string;
  domain: RepoDomain;
  difficulty: RepoDifficulty;
  techStack: string;
  tags: string;
  reason: string;
}

const INITIAL_FORM: SuggestRepoForm = {
  name: "",
  owner: "",
  description: "",
  language: "",
  url: "",
  domain: "WEB",
  difficulty: "BEGINNER",
  techStack: "",
  tags: "",
  reason: "",
};

const inputCls = getInputCls("purple");

interface SuggestRepoModalProps {
  open: boolean;
  onClose: () => void;
}

export function SuggestRepoModal({ open, onClose }: SuggestRepoModalProps) {
  const [form, setForm] = useState<SuggestRepoForm>(INITIAL_FORM);
  const [success, setSuccess] = useState(false);
  const [urlError, setUrlError] = useState<string | null>(null);
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (data: SuggestRepoForm) => {
      const payload = {
        ...data,
        techStack: data.techStack.split(",").map((s) => s.trim()).filter(Boolean),
        tags: data.tags.split(",").map((s) => s.trim()).filter(Boolean),
      };
      return api.post("/opensource/requests", payload);
    },
    onSuccess: () => {
      setSuccess(true);
      queryClient.invalidateQueries({ queryKey: queryKeys.opensource.myRequests() });
      setTimeout(() => {
        setSuccess(false);
        setForm(INITIAL_FORM);
        onClose();
      }, 2000);
    },
  });

  const set =
    (key: keyof SuggestRepoForm) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setForm((f) => {
      const next = { ...f, url: value };
      // Auto-populate owner/name from a well-formed GitHub URL, but never
      // overwrite fields the user has already filled in manually.
      const parsed = parseGithubRepoUrl(value);
      if (parsed) {
        if (!f.owner.trim()) next.owner = parsed.owner;
        if (!f.name.trim()) next.name = parsed.name;
      }
      return next;
    });
    if (!value.trim()) {
      setUrlError(null);
    } else {
      setUrlError(parseGithubRepoUrl(value) ? null : "Must be a https://github.com/owner/repo URL");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = parseGithubRepoUrl(form.url);
    if (!parsed) {
      setUrlError("Must be a https://github.com/owner/repo URL");
      return;
    }
    setUrlError(null);
    mutation.mutate(form);
  };

  if (!open) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: "spring", duration: 0.4 }}
        className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-lg max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 px-6 py-4 rounded-t-2xl flex items-center justify-between z-10">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">Suggest a Repository</h2>
          <Button
            variant="ghost"
            mode="icon"
            onClick={onClose}
            aria-label="Close"
          >
            <X className="w-4 h-4 text-gray-500" aria-hidden />
          </Button>
        </div>

        {success ? (
          <div className="px-6 py-12 text-center">
            <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto mb-3" aria-hidden />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Request Submitted!</h3>
            <p className="text-sm text-gray-500">You'll receive an email once it's reviewed.</p>
          </div>
        ) : (
          <form className="px-6 py-5 space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-medium text-gray-600 dark:text-gray-400 mb-1 block">Owner / Org *</label>
                <input required className={inputCls} placeholder="e.g. facebook" value={form.owner} onChange={set("owner")} />
              </div>
              <div>
                <label className="text-xs font-medium text-gray-600 dark:text-gray-400 mb-1 block">Repo Name *</label>
                <input required className={inputCls} placeholder="e.g. react" value={form.name} onChange={set("name")} />
              </div>
            </div>

            <div>
              <label className="text-xs font-medium text-gray-600 dark:text-gray-400 mb-1 block">GitHub URL *</label>
              <input
                required
                type="url"
                className={`${inputCls} ${urlError ? "border-red-300 dark:border-red-700 focus:ring-red-500/20 focus:border-red-400" : ""}`}
                placeholder="https://github.com/owner/repo"
                value={form.url}
                onChange={handleUrlChange}
                aria-invalid={!!urlError}
                aria-describedby={urlError ? "suggest-url-error" : undefined}
              />
              {urlError && (
                <p id="suggest-url-error" className="mt-1 text-xs text-red-500">
                  {urlError}
                </p>
              )}
            </div>

            <div>
              <label className="text-xs font-medium text-gray-600 dark:text-gray-400 mb-1 block">Description *</label>
              <textarea required rows={2} className={inputCls} placeholder="What does this project do?" value={form.description} onChange={set("description")} />
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="text-xs font-medium text-gray-600 dark:text-gray-400 mb-1 block">Language *</label>
                <input required className={inputCls} placeholder="TypeScript" value={form.language} onChange={set("language")} />
              </div>
              <div>
                <label className="text-xs font-medium text-gray-600 dark:text-gray-400 mb-1 block">Domain</label>
                <select className={inputCls} value={form.domain} onChange={set("domain")}>
                  {REPO_DOMAINS.filter((d) => d.key !== "ALL").map((d) => (
                    <option key={d.key} value={d.key}>
                      {d.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-xs font-medium text-gray-600 dark:text-gray-400 mb-1 block">Difficulty</label>
                <select className={inputCls} value={form.difficulty} onChange={set("difficulty")}>
                  {DIFFICULTY_OPTIONS.filter((d) => d.key !== "ALL").map((d) => (
                    <option key={d.key} value={d.key}>
                      {d.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="text-xs font-medium text-gray-600 dark:text-gray-400 mb-1 block">
                Tech Stack <span className="text-gray-400">(comma-separated)</span>
              </label>
              <input className={inputCls} placeholder="React, Node.js, PostgreSQL" value={form.techStack} onChange={set("techStack")} />
            </div>

            <div>
              <label className="text-xs font-medium text-gray-600 dark:text-gray-400 mb-1 block">
                Tags <span className="text-gray-400">(comma-separated)</span>
              </label>
              <input className={inputCls} placeholder="backend, api, self-hosted" value={form.tags} onChange={set("tags")} />
            </div>

            <div>
              <label className="text-xs font-medium text-gray-600 dark:text-gray-400 mb-1 block">Why should this repo be listed? *</label>
              <textarea required rows={2} className={inputCls} placeholder="Great for beginners, active community..." value={form.reason} onChange={set("reason")} />
            </div>

            {mutation.isError && (
              <p className="text-sm text-red-500">
                {(mutation.error as { response?: { data?: { message?: string } } })?.response?.data?.message ||
                  "Failed to submit. Please try again."}
              </p>
            )}

            <Button
              type="submit"
              variant="mono"
              size="lg"
              disabled={mutation.isPending}
              className="w-full rounded-xl"
            >
              {mutation.isPending ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" aria-hidden />
                  Submitting...
                </>
              ) : (
                "Submit Request"
              )}
            </Button>
          </form>
        )}
      </motion.div>
    </motion.div>
  );
}
