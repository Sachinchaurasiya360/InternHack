import { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import api from "../../../lib/axios";
import { DynamicFieldBuilder } from "../../../components/DynamicFieldBuilder";
import { RoundsManager } from "../rounds/RoundsManager";
import type { CustomFieldDefinition } from "../../../lib/types";

interface RoundInput {
  name: string;
  description: string;
  instructions: string;
  customFields: CustomFieldDefinition[];
  evaluationCriteria: { id: string; criterion: string; maxScore: number }[];
}

const STEPS = ["Basic Info", "Custom Fields", "Hiring Rounds", "Review"];

export default function CreateJobPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    title: "",
    description: "",
    location: "",
    salary: "",
    company: "",
    deadline: "",
    tags: "",
  });

  const [customFields, setCustomFields] = useState<CustomFieldDefinition[]>([]);
  const [rounds, setRounds] = useState<RoundInput[]>([]);

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

      // Create rounds
      for (let i = 0; i < rounds.length; i++) {
        const round = rounds[i]!;
        await api.post(`/recruiter/jobs/${jobId}/rounds`, {
          name: round.name,
          description: round.description,
          orderIndex: i,
          instructions: round.instructions,
          customFields: round.customFields,
          evaluationCriteria: round.evaluationCriteria,
        });
      }

      navigate("/recruiters/jobs");
    } catch (err: unknown) {
      const error = err as { response?: { data?: { message?: string } } };
      setError(error.response?.data?.message || "Failed to create job");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Create Job Posting</h1>

      {/* Step Indicator */}
      <div className="flex items-center gap-2 mb-8">
        {STEPS.map((s, i) => (
          <div key={s} className="flex items-center gap-2">
            <button
              onClick={() => setStep(i)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                i === step ? "bg-black text-white" : i < step ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"
              }`}
            >
              {i < step ? <Check className="w-3 h-3" /> : null}
              {s}
            </button>
            {i < STEPS.length - 1 && <div className="w-8 h-px bg-gray-300" />}
          </div>
        ))}
      </div>

      {error && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-600 mb-4">{error}</div>
      )}

      {/* Step 0: Basic Info */}
      {step === 0 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white p-6 rounded-xl border border-gray-100 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
            <input
              type="text"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black"
              placeholder="e.g. Frontend Developer Intern"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black min-h-[120px]"
              placeholder="Describe the role, responsibilities, and requirements..."
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
              <input
                type="text"
                value={form.location}
                onChange={(e) => setForm({ ...form, location: e.target.value })}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/20"
                placeholder="e.g. Remote, Bangalore"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Salary</label>
              <input
                type="text"
                value={form.salary}
                onChange={(e) => setForm({ ...form, salary: e.target.value })}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/20"
                placeholder="e.g. 15k-25k/month"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
              <input
                type="text"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/20"
                placeholder="Your company name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Deadline</label>
              <input
                type="date"
                value={form.deadline}
                onChange={(e) => setForm({ ...form, deadline: e.target.value })}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/20"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Tags (comma-separated)</label>
            <input
              type="text"
              value={form.tags}
              onChange={(e) => setForm({ ...form, tags: e.target.value })}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/20"
              placeholder="e.g. React, TypeScript, Remote"
            />
          </div>
        </motion.div>
      )}

      {/* Step 1: Custom Fields */}
      {step === 1 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white p-6 rounded-xl border border-gray-100">
          <h2 className="text-lg font-semibold mb-1">Custom Application Fields</h2>
          <p className="text-sm text-gray-500 mb-4">Define additional fields students must fill when applying</p>
          <DynamicFieldBuilder fields={customFields} onChange={setCustomFields} />
        </motion.div>
      )}

      {/* Step 2: Rounds */}
      {step === 2 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white p-6 rounded-xl border border-gray-100">
          <h2 className="text-lg font-semibold mb-1">Hiring Rounds</h2>
          <p className="text-sm text-gray-500 mb-4">Define the stages of your hiring process</p>
          <RoundsManager rounds={rounds} onChange={setRounds} />
        </motion.div>
      )}

      {/* Step 3: Review */}
      {step === 3 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white p-6 rounded-xl border border-gray-100 space-y-4">
          <h2 className="text-lg font-semibold mb-4">Review Job Posting</h2>
          <div className="space-y-3">
            <ReviewItem label="Title" value={form.title} />
            <ReviewItem label="Description" value={form.description} />
            <ReviewItem label="Location" value={form.location} />
            <ReviewItem label="Salary" value={form.salary} />
            <ReviewItem label="Company" value={form.company} />
            <ReviewItem label="Deadline" value={form.deadline || "No deadline"} />
            <ReviewItem label="Tags" value={form.tags || "None"} />
            <ReviewItem label="Custom Fields" value={`${customFields.length} field(s)`} />
            <ReviewItem label="Hiring Rounds" value={`${rounds.length} round(s)`} />
            {rounds.map((r, i) => (
              <div key={i} className="ml-4 text-sm text-gray-600">
                Round {i + 1}: {r.name} ({r.customFields.length} fields, {r.evaluationCriteria.length} criteria)
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Navigation */}
      <div className="flex items-center justify-between mt-6">
        <button
          onClick={() => setStep(Math.max(0, step - 1))}
          disabled={step === 0}
          className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-gray-600 hover:text-black disabled:opacity-30 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Previous
        </button>

        {step < STEPS.length - 1 ? (
          <button
            onClick={() => setStep(step + 1)}
            className="flex items-center gap-2 px-6 py-2.5 bg-black text-white text-sm font-semibold rounded-xl hover:bg-gray-800 transition-colors"
          >
            Next
            <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="flex items-center gap-2 px-6 py-2.5 bg-black text-white text-sm font-semibold rounded-xl hover:bg-gray-800 transition-colors disabled:opacity-50"
          >
            {loading ? "Creating..." : "Create Job"}
            <Check className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}

function ReviewItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="text-sm font-medium text-gray-500 w-32 shrink-0">{label}:</span>
      <span className="text-sm text-gray-900">{value}</span>
    </div>
  );
}
