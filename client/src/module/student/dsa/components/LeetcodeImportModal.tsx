import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useQueryClient } from "@tanstack/react-query";
import {
  X, Upload, User, ArrowRight, CheckCircle2, AlertCircle,
  Loader2, FileText, RefreshCw, Download,
} from "lucide-react";
import api from "../../../../lib/axios";
import { queryKeys } from "../../../../lib/query-keys";
import type { LeetcodeImportPreview, LeetcodeImportResult, LeetcodeImportPreviewItem } from "../../../../lib/types";
import { Button } from "../../../../components/ui/button";

// Feature flag — mirrors server env
const IMPORT_ENABLED = import.meta.env["VITE_LEETCODE_IMPORT_ENABLED"] !== "false";

type Method = "username" | "csv";
type Step = "input" | "loading" | "preview" | "success" | "error";

interface Props {
  open: boolean;
  onClose: () => void;
}

const DIFF_COLOR: Record<string, string> = {
  Easy: "text-emerald-500",
  Medium: "text-amber-500",
  Hard: "text-rose-500",
};

export function LeetcodeImportModal({ open, onClose }: Props) {
  const qc = useQueryClient();
  const fileRef = useRef<HTMLInputElement>(null);

  const [method, setMethod] = useState<Method>("username");
  const [step, setStep] = useState<Step>("input");
  const [username, setUsername] = useState("");
  const [csvText, setCsvText] = useState("");
  const [csvFileName, setCsvFileName] = useState("");
  const [preview, setPreview] = useState<LeetcodeImportPreview | null>(null);
  const [result, setResult] = useState<LeetcodeImportResult | null>(null);
  const [errorMsg, setErrorMsg] = useState("");

  function reset() {
    setStep("input");
    setPreview(null);
    setResult(null);
    setErrorMsg("");
    setUsername("");
    setCsvText("");
    setCsvFileName("");
  }

  function handleClose() {
    reset();
    onClose();
  }

  async function handlePreview() {
    setStep("loading");
    setErrorMsg("");
    try {
      let data: LeetcodeImportPreview;
      if (method === "username") {
        const res = await api.post<LeetcodeImportPreview>("/dsa/import/leetcode", { username: username.trim() });
        data = res.data;
      } else {
        const res = await api.post<LeetcodeImportPreview>("/dsa/import/csv", { csvContent: csvText });
        data = res.data;
      }
      setPreview(data);
      setStep("preview");
    } catch (err: unknown) {
      const msg = (err as { response?: { data?: { message?: string } } })?.response?.data?.message ?? "Something went wrong. Please try again.";
      setErrorMsg(msg);
      setStep("error");
    }
  }

  async function handleConfirm() {
    if (!preview) return;
    setStep("loading");
    try {
      const res = await api.post<LeetcodeImportResult>("/dsa/import/confirm", { token: preview.token });
      setResult(res.data);
      setStep("success");
      // Invalidate progress & topics so the heatmap / counters refresh
      await Promise.all([
        qc.invalidateQueries({ queryKey: queryKeys.dsa.progress() }),
        qc.invalidateQueries({ queryKey: queryKeys.dsa.importStatus() }),
        qc.invalidateQueries({ queryKey: ["dsa", "topics"] }),
      ]);
    } catch (err: unknown) {
      const msg = (err as { response?: { data?: { message?: string } } })?.response?.data?.message ?? "Import failed. Please try again.";
      setErrorMsg(msg);
      setStep("error");
    }
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    const isCsv =
      file.type === "text/csv" ||
      file.type === "application/vnd.ms-excel" ||
      file.name.toLowerCase().endsWith(".csv");
    if (!isCsv) {
      setErrorMsg("Please upload a valid CSV file.");
      setStep("error");
      e.target.value = "";
      return;
    }

    const maxBytes = 5 * 1024 * 1024;
    if (file.size > maxBytes) {
      setErrorMsg("CSV must be 5 MB or smaller.");
      setStep("error");
      e.target.value = "";
      return;
    }

    setCsvFileName(file.name);
    const reader = new FileReader();
    reader.onload = (ev) => setCsvText(ev.target?.result as string ?? "");
    reader.readAsText(file);
  }

  const canPreview = method === "username" ? username.trim().length > 0 : csvText.length > 0;

  if (!IMPORT_ENABLED) return null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
          onClick={handleClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.2 }}
            className="relative bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-white/10 shadow-2xl w-full max-w-lg"
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 dark:border-white/10">
              <div>
                <div className="flex items-center gap-2 mb-0.5">
                  <div className="h-1 w-1 bg-lime-400" />
                  <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
                    dsa / import
                  </span>
                </div>
                <h2 className="text-base font-bold text-stone-900 dark:text-stone-50 tracking-tight">
                  Import from LeetCode
                </h2>
              </div>
              <Button
                variant="ghost"
                mode="icon"
                size="sm"
                aria-label="Close import modal"
                onClick={handleClose}
                className="p-1.5 rounded-md text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-white/5 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            {/* Body */}
            <div className="px-6 py-5 space-y-5">

              {/* ── INPUT STEP ── */}
              {(step === "input" || step === "error") && (
                <>
                  {/* Method tabs */}
                  <div className="grid grid-cols-2 gap-2">
                    {(["username", "csv"] as Method[]).map((m) => (
                      <Button
                        key={m}
                        variant={method === m ? "mono" : "outline"}
                        size="md"
                        onClick={() => { setMethod(m); setErrorMsg(""); }}
                        className={`flex items-center justify-center gap-2 py-2.5 rounded-md text-xs font-medium border transition-all cursor-pointer ${
                          method === m
                            ? "bg-stone-900 dark:bg-stone-50 text-white dark:text-stone-900 border-stone-900 dark:border-stone-50"
                            : "text-stone-600 dark:text-stone-400 border-stone-200 dark:border-white/10 hover:border-stone-400 dark:hover:border-white/25 bg-transparent"
                        }`}
                      >
                        {m === "username" ? <User className="w-3.5 h-3.5" /> : <FileText className="w-3.5 h-3.5" />}
                        {m === "username" ? "LeetCode Username" : "CSV Upload"}
                      </Button>
                    ))}
                  </div>

                  {/* Username input */}
                  {method === "username" && (
                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-2">
                        / your leetcode username
                      </label>
                      <input
                        id="lc-username-input"
                        type="text"
                        placeholder="e.g. neal_wu"
                        value={username}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
                        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => e.key === "Enter" && canPreview && handlePreview()}
                        className="w-full px-4 py-2.5 bg-stone-50 dark:bg-stone-800 border border-stone-300 dark:border-white/10 rounded-md text-sm text-stone-900 dark:text-stone-50 placeholder-stone-400 dark:placeholder-stone-600 focus:outline-none focus:border-lime-400 transition-colors"
                      />
                      <p className="mt-2 text-[10px] text-stone-500 dark:text-stone-400">
                        Only public profiles. We import up to 100 recent accepted submissions.
                      </p>
                    </div>
                  )}

                  {/* CSV input */}
                  {method === "csv" && (
                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-2">
                        / upload csv file
                      </label>
                      <Button
                        id="lc-csv-upload-btn"
                        variant="dashed"
                        onClick={() => fileRef.current?.click()}
                        className="w-full flex flex-col items-center justify-center gap-2 py-8 border-2 border-dashed border-stone-300 dark:border-white/10 rounded-md hover:border-lime-400 dark:hover:border-lime-500 transition-colors cursor-pointer bg-stone-50 dark:bg-stone-800 h-auto"
                      >
                        <Upload className="w-6 h-6 text-stone-400" />
                        <span className="text-xs text-stone-600 dark:text-stone-400">
                          {csvFileName ? csvFileName : "Click to choose a CSV file"}
                        </span>
                      </Button>
                      <input ref={fileRef} type="file" accept=".csv,text/csv" className="hidden" onChange={handleFileChange} />
                      <p className="mt-2 text-[10px] text-stone-500 dark:text-stone-400">
                        CSV must have a <code className="font-mono">Slug</code> or <code className="font-mono">Title</code> column.{" "}
                        <a href="https://github.com/arunbhardwaj/leetcode-solutions-exporter" target="_blank" rel="noopener noreferrer" className="text-lime-600 dark:text-lime-400 hover:underline inline-flex items-center gap-1">
                          How to export <Download className="w-3 h-3" />
                        </a>
                      </p>
                    </div>
                  )}

                  {/* Error banner */}
                  {step === "error" && errorMsg && (
                    <div className="flex items-start gap-3 p-3 rounded-md bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800">
                      <AlertCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                      <p className="text-xs text-rose-700 dark:text-rose-300">{errorMsg}</p>
                    </div>
                  )}

                  {/* CTA */}
                  <Button
                    id="lc-preview-btn"
                    variant="mono"
                    onClick={handlePreview}
                    disabled={!canPreview}
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-md text-sm font-semibold bg-stone-900 dark:bg-stone-50 text-white dark:text-stone-900 hover:bg-stone-700 dark:hover:bg-stone-200 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
                  >
                    Preview Import
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </>
              )}

              {/* ── LOADING STEP ── */}
              {step === "loading" && (
                <div className="py-10 flex flex-col items-center gap-4">
                  <Loader2 className="w-8 h-8 text-lime-500 animate-spin" />
                  <div className="text-center">
                    <p className="text-sm font-medium text-stone-900 dark:text-stone-50">
                      {preview ? "Importing your solves…" : "Fetching your LeetCode profile…"}
                    </p>
                    <p className="text-[11px] text-stone-500 dark:text-stone-400 mt-1">
                      {preview ? "Writing to your tracker." : "This can take 5–15 seconds."}
                    </p>
                  </div>
                </div>
              )}

              {/* ── PREVIEW STEP ── */}
              {step === "preview" && preview && (
                <>
                  {/* Stats grid */}
                  <div className="grid grid-cols-3 gap-0 border-t border-l border-stone-200 dark:border-white/10 rounded-md overflow-hidden">
                    {[
                      { label: "matched", value: preview.matched, color: "text-stone-900 dark:text-stone-50" },
                      { label: "new solves", value: preview.newSolves, color: "text-lime-600 dark:text-lime-400" },
                      { label: "unmatched", value: preview.unmatched, color: "text-stone-500 dark:text-stone-400" },
                    ].map((s) => (
                      <div key={s.label} className="flex flex-col gap-0.5 p-3 bg-white dark:bg-stone-800/60 border-r border-b border-stone-200 dark:border-white/10">
                        <span className={`text-xl font-bold tabular-nums ${s.color}`}>{s.value}</span>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">/ {s.label}</span>
                      </div>
                    ))}
                  </div>

                  {preview.newSolves === 0 ? (
                    <div className="flex items-center gap-2 p-3 rounded-md bg-stone-100 dark:bg-white/5 border border-stone-200 dark:border-white/10">
                      <CheckCircle2 className="w-4 h-4 text-lime-500 shrink-0" />
                      <p className="text-xs text-stone-700 dark:text-stone-300">All your solves are already in your tracker.</p>
                    </div>
                  ) : (
                    <>
                      {/* Preview list */}
                      <div>
                        <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-2">
                          / preview ({preview.preview.length} shown)
                        </p>
                        <div className="max-h-44 overflow-y-auto space-y-1 pr-1">
                          {preview.preview.map((item: LeetcodeImportPreviewItem) => (
                            <div key={item.problemId} className="flex items-center gap-3 py-1.5 px-2 rounded-md bg-stone-50 dark:bg-stone-800/50">
                              <span className={`text-[10px] font-mono shrink-0 ${DIFF_COLOR[item.difficulty] ?? "text-stone-400"}`}>
                                {item.difficulty[0]}
                              </span>
                              <span className="text-xs text-stone-700 dark:text-stone-300 truncate flex-1">{item.title}</span>
                              {item.solvedAt && (
                                <span className="text-[10px] font-mono text-stone-400 shrink-0">
                                  {new Date(item.solvedAt).toLocaleDateString()}
                                </span>
                              )}
                            </div>
                          ))}
                        </div>
                        {preview.newSolves > 50 && (
                          <p className="text-[10px] text-stone-400 dark:text-stone-500 mt-1.5">
                            + {preview.newSolves - 50} more problems will be imported
                          </p>
                        )}
                      </div>

                      {preview.unmatched > 0 && (
                        <p className="text-[10px] text-stone-500 dark:text-stone-400">
                          <span className="text-stone-700 dark:text-stone-300">{preview.unmatched} problems</span> couldn't be matched to our catalog. They'll be skipped silently — we're expanding coverage.
                        </p>
                      )}

                      <div className="flex gap-3">
                        <Button
                          variant="outline"
                          onClick={() => setStep("input")}
                          className="flex-1 py-2.5 rounded-md text-sm font-medium border border-stone-200 dark:border-white/10 text-stone-600 dark:text-stone-400 hover:border-stone-400 dark:hover:border-white/25 transition-colors cursor-pointer"
                        >
                          Back
                        </Button>
                        <Button
                          id="lc-confirm-import-btn"
                          variant="primary"
                          onClick={handleConfirm}
                          className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-md text-sm font-semibold bg-lime-500 hover:bg-lime-400 text-stone-950 transition-colors cursor-pointer"
                        >
                          Import {preview.newSolves} problems
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </div>
                    </>
                  )}

                  {preview.newSolves === 0 && (
                    <Button variant="outline" onClick={handleClose} className="w-full py-2.5 rounded-md text-sm font-medium border border-stone-200 dark:border-white/10 text-stone-600 dark:text-stone-400 hover:border-stone-400 transition-colors cursor-pointer">
                      Done
                    </Button>
                  )}
                </>
              )}

              {/* ── SUCCESS STEP ── */}
              {step === "success" && result && (
                <div className="py-6 flex flex-col items-center gap-4 text-center">
                  <div className="w-14 h-14 rounded-xl bg-lime-50 dark:bg-lime-950/30 flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7 text-lime-500" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-stone-900 dark:text-stone-50 tracking-tight">
                      {result.imported} problems imported
                    </p>
                    <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">
                      {result.skipped > 0 && `${result.skipped} already in your tracker. `}
                      Your heatmap and stats are now updated.
                    </p>
                  </div>
                  <div className="flex gap-3 w-full">
                    <Button
                      variant="outline"
                      onClick={() => { reset(); }}
                      className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-md text-xs font-medium border border-stone-200 dark:border-white/10 text-stone-600 dark:text-stone-400 hover:border-stone-400 transition-colors cursor-pointer"
                    >
                      <RefreshCw className="w-3.5 h-3.5" /> Re-import
                    </Button>
                    <Button
                      id="lc-import-done-btn"
                      variant="mono"
                      onClick={handleClose}
                      className="flex-1 py-2.5 rounded-md text-sm font-semibold bg-stone-900 dark:bg-stone-50 text-white dark:text-stone-900 hover:bg-stone-700 dark:hover:bg-stone-200 transition-colors cursor-pointer"
                    >
                      Done
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
