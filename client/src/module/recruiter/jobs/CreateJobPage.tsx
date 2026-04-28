import { useMemo, useState } from "react";
import { useNavigate, Link } from "react-router";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, AlertCircle, Briefcase, FileSpreadsheet, Layers, Eye } from "lucide-react";
import api from "../../../lib/axios";
import { useAuthStore } from "../../../lib/auth.store";
import { DynamicFieldBuilder } from "../../../components/DynamicFieldBuilder";
import { RoundsManager } from "../rounds/RoundsManager";
import type { CustomFieldDefinition } from "../../../lib/types";
import { SEO } from "../../../components/SEO";
import { Button } from "../../../components/ui/button";

interface RoundInput {
  name: string;
  description: string;
  instructions: string;
  activateAt: string;
  customFields: CustomFieldDefinition[];
  evaluationCriteria: { id: string; criterion: string; maxScore: number }[];
}

type StepKey = "basics" | "fields" | "rounds" | "review";

const STEPS: { key: StepKey; label: string; icon: React.ComponentType<{ className?: string }>; caption: string }[] = [
  { key: "basics", label: "Basics", icon: Briefcase, caption: "Title, location, deadline" },
  { key: "fields", label: "Fields", icon: FileSpreadsheet, caption: "Extra info you need from candidates" },
  { key: "rounds", label: "Rounds", icon: Layers, caption: "Stages of your hiring process" },
  { key: "review", label: "Review", icon: Eye, caption: "Confirm and publish" },
];

export default function CreateJobPage() {
  const navigate = useNavigate();
  const user = useAuthStore((s) => s.user);
  const [stepIdx, setStepIdx] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    title: "",
    description: "",
    location: "",
    salary: "",
    company: user?.company || "",
    deadline: "",
    tags: "",
  });

  const [customFields, setCustomFields] = useState<CustomFieldDefinition[]>([]);
  const [rounds, setRounds] = useState<RoundInput[]>([]);

  const currentStep = STEPS[stepIdx]!;

  const basicsComplete = useMemo(
    () => form.title.trim().length > 0 && form.description.trim().length > 0,
    [form.title, form.description],
  );
  const canAdvance = stepIdx === 0 ? basicsComplete : true;

  const handleSubmit = async () => {
    setError("");
    setLoading(true);

    try {
      const { data } = await api.post("/jobs", {
        title: form.title,
        description: form.description,
        location: form.location,
        salary: form.salary,
        company: form.company,
        deadline: form.deadline ? new Date(form.deadline).toISOString() : undefined,
        tags: form.tags.split(",").map((t) => t.trim()).filter(Boolean),
        customFields,
        status: "DRAFT",
      });

      const jobId = data.job.id;

      for (let i = 0; i < rounds.length; i++) {
        const round = rounds[i]!;
        await api.post(`/recruiter/jobs/${jobId}/rounds`, {
          name: round.name,
          description: round.description,
          orderIndex: i,
          instructions: round.instructions,
          customFields: round.customFields,
          evaluationCriteria: round.evaluationCriteria,
          activateAt: round.activateAt ? new Date(round.activateAt).toISOString() : null,
        });
      }

      navigate("/recruiters/jobs");
    } catch (err: unknown) {
      const error = err as { response?: { data?: { message?: string; errors?: { fieldErrors?: Record<string, string[]> } } } };
      const fieldErrors = error.response?.data?.errors?.fieldErrors;
      if (fieldErrors && Object.keys(fieldErrors).length > 0) {
        const messages = Object.entries(fieldErrors)
          .map(([field, msgs]) => `${field}: ${(msgs as string[]).join(", ")}`)
          .join("; ");
        setError(messages);
      } else {
        setError(error.response?.data?.message || "Failed to create job");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative text-stone-900 dark:text-stone-50">
      <SEO title="Create Job" noIndex />

      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.04] dark:opacity-[0.05] z-0"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(120,113,108,0.25) 1px, transparent 1px)",
          backgroundSize: "120px 100%",
        }}
      />

      <div className="relative max-w-4xl mx-auto">
        {/* Editorial header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-6 mb-8"
        >
          <Link
            to="/recruiters/jobs"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-500 hover:text-stone-900 dark:hover:text-stone-50 no-underline mb-4 transition-colors"
          >
            <ArrowLeft className="w-3 h-3" />
            my jobs
          </Link>
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-500">
            <span className="h-1.5 w-1.5 bg-lime-400" />
            recruiter / new posting
          </div>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-none">
            Post a{" "}
            <span className="relative inline-block">
              <span className="relative z-10">new role.</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                aria-hidden
                className="absolute bottom-1 left-0 right-0 h-3 md:h-4 bg-lime-400 origin-left z-0"
              />
            </span>
          </h1>
          <p className="mt-3 text-sm text-stone-500 max-w-xl">
            Walk through the basics, collect the extra info you need from candidates, and define your hiring rounds. The job saves as a draft, publish it from My Jobs when you're ready.
          </p>
        </motion.div>

        {/* Stepper */}
        <motion.ol
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8"
        >
          {STEPS.map((s, i) => {
            const isCurrent = i === stepIdx;
            const isDone = i < stepIdx;
            return (
              <li key={s.key}>
                <button
                  type="button"
                  onClick={() => setStepIdx(i)}
                  className={`group w-full text-left p-4 rounded-md border transition-colors cursor-pointer bg-white dark:bg-stone-900 ${
                    isCurrent
                      ? "border-stone-900 dark:border-stone-50"
                      : "border-stone-200 dark:border-white/10 hover:border-stone-300 dark:hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400 tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {isDone && (
                      <span className="inline-flex items-center justify-center w-4 h-4 bg-lime-400 text-stone-900 rounded-sm">
                        <Check className="w-3 h-3" strokeWidth={3} />
                      </span>
                    )}
                    {isCurrent && <span className="h-1 w-1 bg-lime-400" />}
                  </div>
                  <div className="flex items-center gap-2">
                    <s.icon className={`w-4 h-4 shrink-0 ${isCurrent || isDone ? "text-stone-900 dark:text-stone-50" : "text-stone-400"}`} />
                    <span className={`text-sm font-bold ${isCurrent || isDone ? "text-stone-900 dark:text-stone-50" : "text-stone-500"}`}>
                      {s.label}
                    </span>
                  </div>
                  <p className="text-[11px] text-stone-500 mt-1 leading-relaxed">{s.caption}</p>
                </button>
              </li>
            );
          })}
        </motion.ol>

        {/* Error */}
        {error && (
          <div className="mb-6 flex items-start gap-3 p-4 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/50 rounded-md">
            <AlertCircle className="w-4 h-4 text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
            <p className="text-sm text-red-700 dark:text-red-400">{error}</p>
          </div>
        )}

        {/* Step Content */}
        <motion.section
          key={currentStep.key}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md"
        >
          {/* Section header */}
          <div className="px-6 py-5 border-b border-stone-200 dark:border-white/10">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-500">
              <span className="h-1.5 w-1.5 bg-lime-400" />
              step {stepIdx + 1} / {STEPS.length}
            </div>
            <h2 className="mt-2 text-xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
              {stepIdx === 0 && "The basics"}
              {stepIdx === 1 && "Custom application fields"}
              {stepIdx === 2 && "Hiring rounds"}
              {stepIdx === 3 && "Review and create"}
            </h2>
            <p className="text-sm text-stone-500 mt-1">{currentStep.caption}</p>
          </div>

          <div className="p-6">
            {currentStep.key === "basics" && (
              <div className="space-y-5">
                <Field
                  label="Job title"
                  required
                  htmlFor="title"
                  hint="What candidates will see first."
                >
                  <input
                    id="title"
                    type="text"
                    value={form.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                    placeholder="e.g. Frontend Developer Intern"
                    className={inputClass()}
                  />
                </Field>

                <Field
                  label="Description"
                  required
                  htmlFor="description"
                  hint="Responsibilities, requirements, the kind of person you're looking for."
                >
                  <textarea
                    id="description"
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                    placeholder="Describe the role..."
                    className={`${inputClass()} min-h-40 resize-y`}
                  />
                </Field>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field label="Location" htmlFor="location">
                    <input
                      id="location"
                      type="text"
                      value={form.location}
                      onChange={(e) => setForm({ ...form, location: e.target.value })}
                      placeholder="Remote, Bangalore"
                      className={inputClass()}
                    />
                  </Field>
                  <Field label="Salary" htmlFor="salary">
                    <input
                      id="salary"
                      type="text"
                      value={form.salary}
                      onChange={(e) => setForm({ ...form, salary: e.target.value })}
                      placeholder="15k-25k / month"
                      className={inputClass()}
                    />
                  </Field>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field label="Company" htmlFor="company">
                    <input
                      id="company"
                      type="text"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      placeholder="Your company name"
                      className={inputClass()}
                    />
                  </Field>
                  <Field label="Application deadline" htmlFor="deadline">
                    <input
                      id="deadline"
                      type="date"
                      value={form.deadline}
                      onChange={(e) => setForm({ ...form, deadline: e.target.value })}
                      className={inputClass()}
                    />
                  </Field>
                </div>

                <Field label="Tags" htmlFor="tags" hint="Comma-separated. Helps candidates find you.">
                  <input
                    id="tags"
                    type="text"
                    value={form.tags}
                    onChange={(e) => setForm({ ...form, tags: e.target.value })}
                    placeholder="React, TypeScript, Remote"
                    className={inputClass()}
                  />
                </Field>
              </div>
            )}

            {currentStep.key === "fields" && (
              <DynamicFieldBuilder fields={customFields} onChange={setCustomFields} />
            )}

            {currentStep.key === "rounds" && (
              <RoundsManager rounds={rounds} onChange={setRounds} />
            )}

            {currentStep.key === "review" && (
              <div className="space-y-1">
                <ReviewItem label="Title" value={form.title || ","} />
                <ReviewItem label="Company" value={form.company || ","} />
                <ReviewItem label="Location" value={form.location || ","} />
                <ReviewItem label="Salary" value={form.salary || ","} />
                <ReviewItem label="Deadline" value={form.deadline || "No deadline"} />
                <ReviewItem label="Tags" value={form.tags || "None"} />
                <ReviewItem
                  label="Description"
                  value={form.description ? `${form.description.slice(0, 140)}${form.description.length > 140 ? "…" : ""}` : ","}
                />
                <ReviewItem label="Custom fields" value={`${customFields.length} field${customFields.length === 1 ? "" : "s"}`} />
                <ReviewItem label="Hiring rounds" value={`${rounds.length} round${rounds.length === 1 ? "" : "s"}`} />

                {rounds.length > 0 && (
                  <ul className="mt-4 pt-4 border-t border-stone-200 dark:border-white/10 space-y-2">
                    {rounds.map((r, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm">
                        <span className="text-[10px] font-mono tabular-nums text-stone-400 w-6">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-stone-900 dark:text-stone-50 font-medium">{r.name || "Untitled round"}</span>
                        <span className="text-[11px] font-mono uppercase tracking-widest text-stone-500">
                          {r.customFields.length} fields · {r.evaluationCriteria.length} criteria
                        </span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-5 pt-5 border-t border-stone-200 dark:border-white/10 text-xs text-stone-500">
                  The job will be saved as a <span className="font-mono uppercase tracking-widest text-stone-700 dark:text-stone-300">draft</span>. Publish it from <Link to="/recruiters/jobs" className="text-stone-900 dark:text-stone-50 underline decoration-lime-400 decoration-2 underline-offset-4">My Jobs</Link> when you're ready.
                </div>
              </div>
            )}
          </div>
        </motion.section>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-6 mb-12">
          <Button
            variant="ghost"
            size="md"
            onClick={() => setStepIdx(Math.max(0, stepIdx - 1))}
            disabled={stepIdx === 0}
          >
            <ArrowLeft className="w-4 h-4" />
            Previous
          </Button>

          {stepIdx < STEPS.length - 1 ? (
            <Button
              variant="primary"
              size="md"
              onClick={() => setStepIdx(stepIdx + 1)}
              disabled={!canAdvance}
            >
              Next
              <ArrowRight className="w-4 h-4" />
            </Button>
          ) : (
            <Button
              variant="primary"
              size="md"
              onClick={handleSubmit}
              disabled={loading || !basicsComplete}
            >
              {loading ? "Creating..." : "Create job"}
              <Check className="w-4 h-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

function inputClass() {
  return "w-full px-3 py-2.5 bg-white dark:bg-stone-950 border border-stone-200 dark:border-white/10 rounded-md text-sm text-stone-900 dark:text-stone-50 placeholder:text-stone-400 focus:outline-none focus:border-stone-400 dark:focus:border-white/30 transition-colors";
}

function Field({
  label,
  required,
  htmlFor,
  hint,
  children,
}: {
  label: string;
  required?: boolean;
  htmlFor?: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="block text-xs font-mono uppercase tracking-widest text-stone-500 mb-2"
      >
        {label}
        {required && <span className="text-lime-500 ml-1">*</span>}
      </label>
      {children}
      {hint && <p className="text-xs text-stone-400 mt-1.5">{hint}</p>}
    </div>
  );
}

function ReviewItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start gap-4 py-2">
      <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 w-36 shrink-0 pt-1">
        {label}
      </span>
      <span className="text-sm text-stone-900 dark:text-stone-50 min-w-0 flex-1">{value}</span>
    </div>
  );
}
