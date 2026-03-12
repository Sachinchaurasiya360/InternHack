import { useState, type KeyboardEvent } from "react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ArrowLeft, X, Plus } from "lucide-react";
import toast from "react-hot-toast";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import { useAuthStore } from "../../../lib/auth.store";
import type { CampusDrive } from "../../../lib/types";

interface DriveFormData {
  title: string;
  description: string;
  company: string;
  targetColleges: string[];
  eligibleBranches: string[];
  minCGPA: string;
  eligibleGraduationYears: string[];
  registrationDeadline: string;
  driveDate: string;
}

export default function CreateDrivePage() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const user = useAuthStore((s) => s.user);

  const [form, setForm] = useState<DriveFormData>({
    title: "",
    description: "",
    company: user?.company || "",
    targetColleges: [],
    eligibleBranches: [],
    minCGPA: "",
    eligibleGraduationYears: [],
    registrationDeadline: "",
    driveDate: "",
  });

  const [collegeInput, setCollegeInput] = useState("");
  const [branchInput, setBranchInput] = useState("");
  const [yearInput, setYearInput] = useState("");

  const createMutation = useMutation({
    mutationFn: async (data: DriveFormData) => {
      const body = {
        title: data.title,
        description: data.description,
        company: data.company,
        targetColleges: data.targetColleges,
        eligibleBranches: data.eligibleBranches,
        minCGPA: data.minCGPA ? parseFloat(data.minCGPA) : undefined,
        eligibleGraduationYears: data.eligibleGraduationYears.map(Number),
        registrationDeadline: new Date(data.registrationDeadline).toISOString(),
        driveDate: data.driveDate
          ? new Date(data.driveDate).toISOString()
          : undefined,
        jobIds: [],
      };
      const res = await api.post("/campus-drives/", body);
      return res.data as { drive: CampusDrive };
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.campusDrives.recruiter(),
      });
      toast.success("Campus drive created successfully");
      navigate(`/recruiters/campus-drives/${data.drive.id}`);
    },
    onError: (err: unknown) => {
      const error = err as {
        response?: {
          data?: {
            message?: string;
            errors?: { fieldErrors?: Record<string, string[]> };
          };
        };
      };
      const fieldErrors = error.response?.data?.errors?.fieldErrors;
      if (fieldErrors && Object.keys(fieldErrors).length > 0) {
        const messages = Object.entries(fieldErrors)
          .map(
            ([field, msgs]) =>
              `${field}: ${(msgs as string[]).join(", ")}`,
          )
          .join("; ");
        toast.error(messages);
      } else {
        toast.error(
          error.response?.data?.message || "Failed to create campus drive",
        );
      }
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title.trim()) return toast.error("Title is required");
    if (!form.description.trim()) return toast.error("Description is required");
    if (!form.company.trim()) return toast.error("Company is required");
    if (!form.registrationDeadline)
      return toast.error("Registration deadline is required");
    createMutation.mutate(form);
  };

  const addTag = (
    field: "targetColleges" | "eligibleBranches" | "eligibleGraduationYears",
    value: string,
    setter: (v: string) => void,
  ) => {
    const items = value
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
    if (items.length === 0) return;

    const existing = new Set(form[field]);
    const newItems = items.filter((item) => !existing.has(item));
    if (newItems.length > 0) {
      setForm({ ...form, [field]: [...form[field], ...newItems] });
    }
    setter("");
  };

  const removeTag = (
    field: "targetColleges" | "eligibleBranches" | "eligibleGraduationYears",
    index: number,
  ) => {
    setForm({ ...form, [field]: form[field].filter((_, i) => i !== index) });
  };

  const handleTagKeyDown = (
    e: KeyboardEvent<HTMLInputElement>,
    field: "targetColleges" | "eligibleBranches" | "eligibleGraduationYears",
    value: string,
    setter: (v: string) => void,
  ) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addTag(field, value, setter);
    }
  };

  const inputClass =
    "w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20 focus:border-black dark:focus:border-white dark:bg-gray-800 dark:text-white text-sm";
  const labelClass =
    "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1";

  return (
    <div className="max-w-3xl mx-auto">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500 hover:text-black dark:hover:text-white mb-4 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Back
      </button>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Create Campus Drive
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Info */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm space-y-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Basic Information
            </h2>

            <div>
              <label className={labelClass}>
                Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                className={inputClass}
                placeholder="e.g. TCS Campus Placement Drive 2026"
              />
            </div>

            <div>
              <label className={labelClass}>
                Description <span className="text-red-500">*</span>
              </label>
              <textarea
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
                className={`${inputClass} min-h-28 resize-y`}
                placeholder="Describe the campus drive, roles offered, packages, and process..."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>
                  Company <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={form.company}
                  onChange={(e) =>
                    setForm({ ...form, company: e.target.value })
                  }
                  className={inputClass}
                  placeholder="Your company name"
                />
              </div>
              <div>
                <label className={labelClass}>
                  Min CGPA
                </label>
                <input
                  type="number"
                  value={form.minCGPA}
                  onChange={(e) =>
                    setForm({ ...form, minCGPA: e.target.value })
                  }
                  className={inputClass}
                  placeholder="e.g. 7.0"
                  min="0"
                  max="10"
                  step="0.1"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>
                  Registration Deadline <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  value={form.registrationDeadline}
                  onChange={(e) =>
                    setForm({ ...form, registrationDeadline: e.target.value })
                  }
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Drive Date</label>
                <input
                  type="date"
                  value={form.driveDate}
                  onChange={(e) =>
                    setForm({ ...form, driveDate: e.target.value })
                  }
                  className={inputClass}
                />
              </div>
            </div>
          </div>

          {/* Target Colleges */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm space-y-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
              Target Colleges
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              Leave empty to open the drive to all colleges. Type college names
              and press Enter or comma to add.
            </p>

            <div className="flex gap-2">
              <input
                type="text"
                value={collegeInput}
                onChange={(e) => setCollegeInput(e.target.value)}
                onKeyDown={(e) =>
                  handleTagKeyDown(
                    e,
                    "targetColleges",
                    collegeInput,
                    setCollegeInput,
                  )
                }
                className={`${inputClass} flex-1`}
                placeholder="e.g. IIT Bombay, COEP Pune"
              />
              <button
                type="button"
                onClick={() =>
                  addTag("targetColleges", collegeInput, setCollegeInput)
                }
                className="px-3 py-2.5 bg-gray-100 dark:bg-gray-800 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <Plus className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              </button>
            </div>

            {form.targetColleges.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {form.targetColleges.map((college, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400 rounded-lg text-sm font-medium"
                  >
                    {college}
                    <button
                      type="button"
                      onClick={() => removeTag("targetColleges", i)}
                      className="hover:text-purple-900 dark:hover:text-purple-200 transition-colors"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Eligibility */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm space-y-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
              Eligibility Criteria
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              Define which branches and graduation years are eligible
            </p>

            {/* Branches */}
            <div>
              <label className={labelClass}>Eligible Branches</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={branchInput}
                  onChange={(e) => setBranchInput(e.target.value)}
                  onKeyDown={(e) =>
                    handleTagKeyDown(
                      e,
                      "eligibleBranches",
                      branchInput,
                      setBranchInput,
                    )
                  }
                  className={`${inputClass} flex-1`}
                  placeholder="e.g. Computer Science, IT, Electronics"
                />
                <button
                  type="button"
                  onClick={() =>
                    addTag("eligibleBranches", branchInput, setBranchInput)
                  }
                  className="px-3 py-2.5 bg-gray-100 dark:bg-gray-800 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  <Plus className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                </button>
              </div>
              {form.eligibleBranches.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {form.eligibleBranches.map((branch, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-400 rounded-lg text-sm font-medium"
                    >
                      {branch}
                      <button
                        type="button"
                        onClick={() => removeTag("eligibleBranches", i)}
                        className="hover:text-indigo-900 dark:hover:text-indigo-200 transition-colors"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Graduation Years */}
            <div>
              <label className={labelClass}>Eligible Graduation Years</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={yearInput}
                  onChange={(e) => setYearInput(e.target.value)}
                  onKeyDown={(e) =>
                    handleTagKeyDown(
                      e,
                      "eligibleGraduationYears",
                      yearInput,
                      setYearInput,
                    )
                  }
                  className={`${inputClass} flex-1`}
                  placeholder="e.g. 2026, 2027"
                />
                <button
                  type="button"
                  onClick={() =>
                    addTag(
                      "eligibleGraduationYears",
                      yearInput,
                      setYearInput,
                    )
                  }
                  className="px-3 py-2.5 bg-gray-100 dark:bg-gray-800 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  <Plus className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                </button>
              </div>
              {form.eligibleGraduationYears.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {form.eligibleGraduationYears.map((year, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 rounded-lg text-sm font-medium"
                    >
                      {year}
                      <button
                        type="button"
                        onClick={() =>
                          removeTag("eligibleGraduationYears", i)
                        }
                        className="hover:text-amber-900 dark:hover:text-amber-200 transition-colors"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Submit */}
          <div className="flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="px-5 py-2.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={createMutation.isPending}
              className="px-6 py-2.5 bg-black dark:bg-white text-white dark:text-gray-950 text-sm font-semibold rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors disabled:opacity-50"
            >
              {createMutation.isPending ? "Creating..." : "Create Campus Drive"}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
