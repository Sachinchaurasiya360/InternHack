import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router";
import { motion } from "framer-motion";
import { Plus, Trash2, GripVertical, Building2, Search, Send, Info } from "lucide-react";
import toast from "../../../components/ui/toast";
import { SEO } from "../../../components/SEO";
import api from "../../../lib/axios";
import type {
  InterviewDifficulty,
  InterviewExperienceCompany,
  InterviewOutcome,
  InterviewPrepResource,
  InterviewRound,
  InterviewRoundType,
  InterviewSource,
} from "../../../lib/types";
import { createExperience } from "./interviews-api";

const ROUND_TYPES: { value: InterviewRoundType; label: string }[] = [
  { value: "TECHNICAL", label: "Technical" },
  { value: "CODING", label: "Coding" },
  { value: "DSA", label: "DSA" },
  { value: "SYSTEM_DESIGN", label: "System Design" },
  { value: "HR", label: "HR" },
  { value: "MANAGERIAL", label: "Managerial" },
  { value: "BEHAVIORAL", label: "Behavioral" },
  { value: "APTITUDE", label: "Aptitude" },
  { value: "GD", label: "Group Discussion" },
  { value: "OTHER", label: "Other" },
];

const emptyRound = (): InterviewRound => ({
  name: "",
  type: "TECHNICAL",
  questions: [{ prompt: "" }],
});

const currentYear = new Date().getFullYear();

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-stone-500">
      <span className="h-1.5 w-1.5 bg-lime-400" />
      {children}
    </div>
  );
}

function Field({
  label,
  hint,
  required,
  children,
}: {
  label: string;
  hint?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-1.5">
        {label}
        {required ? <span className="text-lime-600 dark:text-lime-400"> *</span> : null}
      </label>
      {children}
      {hint ? <p className="text-xs text-stone-500 mt-1">{hint}</p> : null}
    </div>
  );
}

const inputClass =
  "w-full px-3 py-2 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md text-sm text-stone-900 dark:text-stone-50 placeholder:text-stone-400 focus:outline-none focus:border-lime-400 transition-colors";

export default function ShareInterviewPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const prefillSlug = searchParams.get("company");

  const [companyQuery, setCompanyQuery] = useState("");
  const [companyResults, setCompanyResults] = useState<InterviewExperienceCompany[]>([]);
  const [selectedCompany, setSelectedCompany] = useState<InterviewExperienceCompany | null>(null);
  const [companyOpen, setCompanyOpen] = useState(false);

  const [role, setRole] = useState("");
  const [experienceYears, setExperienceYears] = useState<number | "">(0);
  const [interviewYear, setInterviewYear] = useState<number>(currentYear);
  const [interviewMonth, setInterviewMonth] = useState<number | "">("");
  const [source, setSource] = useState<InterviewSource>("ON_CAMPUS");
  const [difficulty, setDifficulty] = useState<InterviewDifficulty>("MEDIUM");
  const [outcome, setOutcome] = useState<InterviewOutcome>("PENDING");
  const [offered, setOffered] = useState(false);
  const [ctcLpa, setCtcLpa] = useState<number | "">("");
  const [overallRating, setOverallRating] = useState<number>(3);
  const [tips, setTips] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(true);

  const [rounds, setRounds] = useState<InterviewRound[]>([emptyRound()]);
  const [prepResources, setPrepResources] = useState<InterviewPrepResource[]>([]);

  const [submitting, setSubmitting] = useState(false);

  // Company search with debounce
  useEffect(() => {
    if (!companyQuery.trim() || selectedCompany?.name === companyQuery) {
      setCompanyResults([]);
      return;
    }
    const timer = setTimeout(async () => {
      try {
        const res = await api.get<{ companies: InterviewExperienceCompany[] }>("/companies", {
          params: { search: companyQuery, limit: 8 },
        });
        setCompanyResults(res.data.companies ?? []);
      } catch {
        setCompanyResults([]);
      }
    }, 250);
    return () => clearTimeout(timer);
  }, [companyQuery, selectedCompany]);

  // Prefill company from ?company=slug
  useEffect(() => {
    if (!prefillSlug) return;
    (async () => {
      try {
        const res = await api.get<{ company: InterviewExperienceCompany }>(
          `/companies/${prefillSlug}`,
        );
        if (res.data.company) {
          setSelectedCompany(res.data.company);
          setCompanyQuery(res.data.company.name);
        }
      } catch {
        // silently ignore prefill failures
      }
    })();
  }, [prefillSlug]);

  const totalRounds = rounds.length;

  const addRound = () => setRounds((prev) => [...prev, emptyRound()]);
  const removeRound = (i: number) =>
    setRounds((prev) => (prev.length > 1 ? prev.filter((_, idx) => idx !== i) : prev));
  const updateRound = <K extends keyof InterviewRound>(
    i: number,
    key: K,
    value: InterviewRound[K],
  ) => {
    setRounds((prev) => prev.map((r, idx) => (idx === i ? { ...r, [key]: value } : r)));
  };
  const addQuestion = (roundIdx: number) =>
    setRounds((prev) =>
      prev.map((r, i) =>
        i === roundIdx ? { ...r, questions: [...r.questions, { prompt: "" }] } : r,
      ),
    );
  const updateQuestion = (
    roundIdx: number,
    qIdx: number,
    key: "prompt" | "topic" | "difficulty",
    value: string,
  ) =>
    setRounds((prev) =>
      prev.map((r, i) =>
        i === roundIdx
          ? {
              ...r,
              questions: r.questions.map((q, j) =>
                j === qIdx ? { ...q, [key]: value || undefined } : q,
              ),
            }
          : r,
      ),
    );
  const removeQuestion = (roundIdx: number, qIdx: number) =>
    setRounds((prev) =>
      prev.map((r, i) =>
        i === roundIdx
          ? {
              ...r,
              questions:
                r.questions.length > 1 ? r.questions.filter((_, j) => j !== qIdx) : r.questions,
            }
          : r,
      ),
    );

  const addResource = () =>
    setPrepResources((prev) => [...prev, { type: "article", title: "", url: "" }]);
  const updateResource = <K extends keyof InterviewPrepResource>(
    i: number,
    key: K,
    value: InterviewPrepResource[K],
  ) =>
    setPrepResources((prev) => prev.map((r, idx) => (idx === i ? { ...r, [key]: value } : r)));
  const removeResource = (i: number) =>
    setPrepResources((prev) => prev.filter((_, idx) => idx !== i));

  const canSubmit = useMemo(() => {
    if (!selectedCompany) return false;
    if (!role.trim()) return false;
    if (!interviewYear) return false;
    for (const r of rounds) {
      if (!r.name.trim()) return false;
      if (r.questions.length === 0) return false;
      for (const q of r.questions) if (!q.prompt.trim()) return false;
    }
    return true;
  }, [selectedCompany, role, interviewYear, rounds]);

  const submit = async () => {
    if (!canSubmit || !selectedCompany) {
      toast.error("Fill in the company, role, and at least one round with a question");
      return;
    }
    setSubmitting(true);
    try {
      const payload = {
        companyId: selectedCompany.id,
        role: role.trim(),
        experienceYears: experienceYears === "" ? undefined : Number(experienceYears),
        interviewYear,
        interviewMonth: interviewMonth === "" ? undefined : Number(interviewMonth),
        source,
        difficulty,
        outcome,
        offered,
        ctcLpa: ctcLpa === "" ? undefined : Number(ctcLpa),
        totalRounds,
        overallRating,
        rounds: rounds.map((r) => ({
          ...r,
          questions: r.questions.filter((q) => q.prompt.trim().length > 0),
        })),
        tips: tips.trim() || undefined,
        prepResources: prepResources.filter((p) => p.title.trim()),
        isAnonymous,
      };
      await createExperience(payload);
      toast.success("Experience submitted for review, thank you!");
      navigate("/student/interviews");
    } catch (err) {
      const message =
        err instanceof Error && "response" in err
          ? (err as { response?: { data?: { message?: string } } }).response?.data?.message
          : undefined;
      toast.error(message ?? "Failed to submit, please try again");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="pb-16">
      <SEO title="Share interview experience" noIndex />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 mt-6"
      >
        <Kicker>contribute / interview experience</Kicker>
        <h1 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-none">
          Share your story.
        </h1>
        <p className="mt-3 text-sm text-stone-500 max-w-xl">
          Help juniors who'll interview at {selectedCompany?.name ?? "this company"} next year. Your submission goes to moderation before it's public. Anonymous by default.
        </p>
      </motion.div>

      <div className="space-y-6">
        {/* Company + basics */}
        <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-6">
          <h2 className="text-sm font-semibold text-stone-900 dark:text-stone-50 mb-4">
            1. Company & role
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field label="Company" required hint="Search existing companies">
              <div className="relative">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                  <input
                    type="text"
                    value={companyQuery}
                    onFocus={() => setCompanyOpen(true)}
                    onChange={(e) => {
                      setCompanyQuery(e.target.value);
                      setSelectedCompany(null);
                      setCompanyOpen(true);
                    }}
                    placeholder="e.g. Razorpay"
                    className={`${inputClass} pl-9`}
                  />
                </div>
                {companyOpen && companyResults.length > 0 ? (
                  <div className="absolute z-10 left-0 right-0 mt-1 max-h-64 overflow-y-auto bg-white dark:bg-stone-950 border border-stone-200 dark:border-white/10 rounded-md shadow-lg">
                    {companyResults.map((c) => (
                      <button
                        key={c.id}
                        type="button"
                        onClick={() => {
                          setSelectedCompany(c);
                          setCompanyQuery(c.name);
                          setCompanyOpen(false);
                        }}
                        className="w-full flex items-center gap-3 px-3 py-2 text-left text-sm hover:bg-stone-50 dark:hover:bg-stone-900 transition-colors cursor-pointer border-0 bg-transparent"
                      >
                        <div className="w-8 h-8 rounded-md bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-white/10 flex items-center justify-center shrink-0 text-xs font-bold text-stone-700 dark:text-stone-300">
                          {c.logo ? (
                            <img src={c.logo} alt="" className="w-full h-full object-cover rounded-md" />
                          ) : (
                            c.name.charAt(0).toUpperCase()
                          )}
                        </div>
                        <div className="min-w-0">
                          <div className="text-stone-900 dark:text-stone-50 font-medium truncate">
                            {c.name}
                          </div>
                          <div className="text-xs text-stone-500 truncate">
                            {c.city} · {c.industry}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                ) : null}
              </div>
              {selectedCompany ? (
                <p className="text-xs text-lime-700 dark:text-lime-400 mt-1.5 flex items-center gap-1">
                  <Building2 className="w-3 h-3" /> Selected: {selectedCompany.name}
                </p>
              ) : null}
              {!selectedCompany && companyQuery && companyResults.length === 0 ? (
                <p className="text-xs text-stone-500 mt-1.5">
                  Not listed?{" "}
                  <Link to="/student/companies/add" className="underline">
                    Add company first
                  </Link>
                </p>
              ) : null}
            </Field>

            <Field label="Role" required hint="e.g. SDE Intern, ML Engineer">
              <input
                type="text"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                placeholder="SDE Intern"
                className={inputClass}
              />
            </Field>

            <Field label="Interview year" required>
              <input
                type="number"
                min={2000}
                max={currentYear + 1}
                value={interviewYear}
                onChange={(e) => setInterviewYear(Number(e.target.value))}
                className={inputClass}
              />
            </Field>

            <Field label="Interview month">
              <select
                value={interviewMonth}
                onChange={(e) =>
                  setInterviewMonth(e.target.value === "" ? "" : Number(e.target.value))
                }
                className={inputClass}
              >
                <option value="">Any</option>
                {[
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                  "Sep",
                  "Oct",
                  "Nov",
                  "Dec",
                ].map((m, i) => (
                  <option key={m} value={i + 1}>
                    {m}
                  </option>
                ))}
              </select>
            </Field>

            <Field label="Experience (years)" hint="0 for interns / freshers">
              <input
                type="number"
                min={0}
                max={30}
                value={experienceYears}
                onChange={(e) =>
                  setExperienceYears(e.target.value === "" ? "" : Number(e.target.value))
                }
                className={inputClass}
              />
            </Field>

            <Field label="Source">
              <select
                value={source}
                onChange={(e) => setSource(e.target.value as InterviewSource)}
                className={inputClass}
              >
                <option value="ON_CAMPUS">On-campus</option>
                <option value="OFF_CAMPUS">Off-campus</option>
                <option value="REFERRAL">Referral</option>
                <option value="LINKEDIN">LinkedIn</option>
                <option value="PORTAL">Portal (Naukri, Instahyre)</option>
                <option value="OTHER">Other</option>
              </select>
            </Field>
          </div>
        </div>

        {/* Outcome */}
        <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-6">
          <h2 className="text-sm font-semibold text-stone-900 dark:text-stone-50 mb-4">
            2. Outcome
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field label="Difficulty">
              <select
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value as InterviewDifficulty)}
                className={inputClass}
              >
                <option value="EASY">Easy</option>
                <option value="MEDIUM">Medium</option>
                <option value="HARD">Hard</option>
              </select>
            </Field>
            <Field label="Outcome">
              <select
                value={outcome}
                onChange={(e) => setOutcome(e.target.value as InterviewOutcome)}
                className={inputClass}
              >
                <option value="SELECTED">Selected</option>
                <option value="REJECTED">Rejected</option>
                <option value="WITHDRAWN">Withdrawn</option>
                <option value="PENDING">Pending / in progress</option>
                <option value="GHOSTED">Ghosted</option>
              </select>
            </Field>
            <Field label="Overall rating (1-5)">
              <div className="flex gap-1.5">
                {[1, 2, 3, 4, 5].map((n) => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => setOverallRating(n)}
                    className={`w-10 h-10 rounded-md text-sm font-bold border transition-colors cursor-pointer ${
                      n <= overallRating
                        ? "bg-lime-400 border-lime-400 text-stone-900"
                        : "bg-transparent border-stone-200 dark:border-white/10 text-stone-400 hover:border-stone-400"
                    }`}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </Field>
            <Field label="CTC / Stipend (LPA)" hint="Optional, helps freshers benchmark">
              <input
                type="number"
                min={0}
                step="0.5"
                value={ctcLpa}
                onChange={(e) => setCtcLpa(e.target.value === "" ? "" : Number(e.target.value))}
                placeholder="e.g. 12"
                className={inputClass}
              />
            </Field>
            <div className="flex items-center gap-2 pt-6">
              <input
                id="offered"
                type="checkbox"
                checked={offered}
                onChange={(e) => setOffered(e.target.checked)}
                className="w-4 h-4 rounded bg-white dark:bg-stone-900 border border-stone-300 dark:border-white/20"
              />
              <label
                htmlFor="offered"
                className="text-sm text-stone-700 dark:text-stone-300 cursor-pointer"
              >
                Received an offer
              </label>
            </div>
          </div>
        </div>

        {/* Rounds */}
        <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold text-stone-900 dark:text-stone-50">
              3. Rounds ({totalRounds})
            </h2>
            <button
              type="button"
              onClick={addRound}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 rounded-md text-xs font-semibold hover:opacity-90 transition-opacity cursor-pointer border-0"
            >
              <Plus className="w-3.5 h-3.5" /> Add round
            </button>
          </div>

          <div className="space-y-4">
            {rounds.map((r, i) => (
              <div
                key={i}
                className="border border-stone-200 dark:border-white/10 rounded-md p-4 bg-stone-50 dark:bg-stone-950"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2 text-stone-500">
                    <GripVertical className="w-4 h-4" />
                    <span className="text-[10px] font-mono uppercase tracking-widest">
                      Round {i + 1}
                    </span>
                  </div>
                  {rounds.length > 1 ? (
                    <button
                      type="button"
                      onClick={() => removeRound(i)}
                      className="p-1 text-stone-400 hover:text-red-500 transition-colors cursor-pointer bg-transparent border-0"
                      title="Remove round"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  ) : null}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
                  <Field label="Round name" required>
                    <input
                      type="text"
                      value={r.name}
                      onChange={(e) => updateRound(i, "name", e.target.value)}
                      placeholder="e.g. Technical Round 1"
                      className={inputClass}
                    />
                  </Field>
                  <Field label="Type">
                    <select
                      value={r.type}
                      onChange={(e) => updateRound(i, "type", e.target.value as InterviewRoundType)}
                      className={inputClass}
                    >
                      {ROUND_TYPES.map((t) => (
                        <option key={t.value} value={t.value}>
                          {t.label}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Duration (mins)">
                    <input
                      type="number"
                      min={1}
                      max={480}
                      value={r.durationMins ?? ""}
                      onChange={(e) =>
                        updateRound(
                          i,
                          "durationMins",
                          e.target.value === "" ? undefined : Number(e.target.value),
                        )
                      }
                      placeholder="60"
                      className={inputClass}
                    />
                  </Field>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-[10px] font-mono uppercase tracking-widest text-stone-500">
                      Questions ({r.questions.length})
                    </label>
                    <button
                      type="button"
                      onClick={() => addQuestion(i)}
                      className="text-xs text-lime-700 dark:text-lime-400 hover:underline cursor-pointer bg-transparent border-0"
                    >
                      + Add question
                    </button>
                  </div>
                  <div className="space-y-2">
                    {r.questions.map((q, j) => (
                      <div
                        key={j}
                        className="grid grid-cols-1 md:grid-cols-[1fr_140px_120px_40px] gap-2"
                      >
                        <input
                          type="text"
                          value={q.prompt}
                          onChange={(e) => updateQuestion(i, j, "prompt", e.target.value)}
                          placeholder="e.g. Find the longest increasing subsequence"
                          className={inputClass}
                        />
                        <input
                          type="text"
                          value={q.topic ?? ""}
                          onChange={(e) => updateQuestion(i, j, "topic", e.target.value)}
                          placeholder="Topic"
                          className={inputClass}
                        />
                        <select
                          value={q.difficulty ?? ""}
                          onChange={(e) => updateQuestion(i, j, "difficulty", e.target.value)}
                          className={inputClass}
                        >
                          <option value="">Difficulty</option>
                          <option value="EASY">Easy</option>
                          <option value="MEDIUM">Medium</option>
                          <option value="HARD">Hard</option>
                        </select>
                        <button
                          type="button"
                          onClick={() => removeQuestion(i, j)}
                          disabled={r.questions.length === 1}
                          className="flex items-center justify-center text-stone-400 hover:text-red-500 disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer bg-transparent border-0"
                          title="Remove question"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-3">
                  <Field label="Notes for this round">
                    <textarea
                      value={r.notes ?? ""}
                      onChange={(e) => updateRound(i, "notes", e.target.value)}
                      rows={2}
                      placeholder="Anything about the format, interviewer vibe, what they focused on..."
                      className={`${inputClass} resize-y`}
                    />
                  </Field>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tips + Resources */}
        <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-6">
          <h2 className="text-sm font-semibold text-stone-900 dark:text-stone-50 mb-4">
            4. Tips & preparation
          </h2>
          <div className="space-y-4">
            <Field label="Tips for future candidates" hint="What would you tell your past self?">
              <textarea
                value={tips}
                onChange={(e) => setTips(e.target.value)}
                rows={4}
                placeholder="Practice DSA on LeetCode, focus on system design for senior roles..."
                className={`${inputClass} resize-y`}
              />
            </Field>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-[10px] font-mono uppercase tracking-widest text-stone-500">
                  Prep resources ({prepResources.length})
                </label>
                <button
                  type="button"
                  onClick={addResource}
                  className="text-xs text-lime-700 dark:text-lime-400 hover:underline cursor-pointer bg-transparent border-0"
                >
                  + Add resource
                </button>
              </div>
              <div className="space-y-2">
                {prepResources.map((p, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-1 md:grid-cols-[120px_1fr_1fr_40px] gap-2"
                  >
                    <select
                      value={p.type}
                      onChange={(e) =>
                        updateResource(i, "type", e.target.value as InterviewPrepResource["type"])
                      }
                      className={inputClass}
                    >
                      <option value="article">Article</option>
                      <option value="book">Book</option>
                      <option value="course">Course</option>
                      <option value="other">Other</option>
                    </select>
                    <input
                      type="text"
                      value={p.title}
                      onChange={(e) => updateResource(i, "title", e.target.value)}
                      placeholder="Title"
                      className={inputClass}
                    />
                    <input
                      type="url"
                      value={p.url ?? ""}
                      onChange={(e) => updateResource(i, "url", e.target.value)}
                      placeholder="https://..."
                      className={inputClass}
                    />
                    <button
                      type="button"
                      onClick={() => removeResource(i)}
                      className="flex items-center justify-center text-stone-400 hover:text-red-500 transition-colors cursor-pointer bg-transparent border-0"
                      title="Remove"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Anonymity + Submit */}
        <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-6">
          <div className="flex items-start gap-3 mb-4 p-3 bg-stone-100 dark:bg-stone-950 rounded-md">
            <Info className="w-4 h-4 text-stone-500 shrink-0 mt-0.5" />
            <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
              Don't share NDA-protected content, confidential problems you signed a form for, or anything that could violate your agreement. Questions, rounds, and difficulty are fine to share.
            </p>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <input
              id="anonymous"
              type="checkbox"
              checked={isAnonymous}
              onChange={(e) => setIsAnonymous(e.target.checked)}
              className="w-4 h-4 rounded bg-white dark:bg-stone-900 border border-stone-300 dark:border-white/20"
            />
            <label
              htmlFor="anonymous"
              className="text-sm text-stone-700 dark:text-stone-300 cursor-pointer"
            >
              Post anonymously (your college stays visible, your name is hidden)
            </label>
          </div>

          <button
            type="button"
            onClick={submit}
            disabled={!canSubmit || submitting}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-lime-400 hover:bg-lime-500 text-stone-900 rounded-md text-sm font-semibold transition-colors border-0 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <Send className="w-4 h-4" />
            {submitting ? "Submitting..." : "Submit for review"}
          </button>
          <p className="text-xs text-stone-500 mt-2">
            Your submission goes into moderation. You'll see it on your profile once approved.
          </p>
        </div>
      </div>
    </div>
  );
}
