import { useState } from "react";
import { DynamicFieldBuilder } from "../../../components/DynamicFieldBuilder";
import { AssessmentBuilder } from "./AssessmentBuilder";
import { Plus, Trash2, ToggleLeft, ToggleRight } from "lucide-react";
import type { CustomFieldDefinition, AssessmentQuestion } from "../../../lib/types";

interface RoundFormData {
  name: string;
  description: string;
  instructions: string;
  customFields: CustomFieldDefinition[];
  evaluationCriteria: { id: string; criterion: string; maxScore: number }[];
  assessmentQuestions: AssessmentQuestion[];
  timeLimitSecs: number | null;
  autoGrade: boolean;
}

interface RoundFormProps {
  initialData?: RoundFormData;
  onSubmit: (data: RoundFormData) => void;
  onCancel: () => void;
  loading?: boolean;
}

export function RoundForm({ initialData, onSubmit, onCancel, loading }: RoundFormProps) {
  const [form, setForm] = useState<RoundFormData>(initialData || {
    name: "",
    description: "",
    instructions: "",
    customFields: [],
    evaluationCriteria: [],
    assessmentQuestions: [],
    timeLimitSecs: null,
    autoGrade: false,
  });

  const assessmentMode = form.assessmentQuestions.length > 0 || form.autoGrade;

  const toggleAssessmentMode = () => {
    if (assessmentMode) {
      setForm({ ...form, assessmentQuestions: [], timeLimitSecs: null, autoGrade: false });
    } else {
      setForm({ ...form, autoGrade: true });
    }
  };

  const addCriterion = () => {
    setForm({ ...form, evaluationCriteria: [...form.evaluationCriteria, { id: crypto.randomUUID(), criterion: "", maxScore: 10 }] });
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Round Name</label>
        <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20 dark:bg-gray-800 dark:text-white"
          placeholder="e.g. Technical Interview" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Description</label>
        <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20 dark:bg-gray-800 dark:text-white" rows={2} />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Instructions</label>
        <textarea value={form.instructions} onChange={(e) => setForm({ ...form, instructions: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20 dark:bg-gray-800 dark:text-white" rows={2} />
      </div>

      <div>
        <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Custom Fields</h4>
        <DynamicFieldBuilder fields={form.customFields} onChange={(fields) => setForm({ ...form, customFields: fields })} />
      </div>

      {/* Assessment Mode Toggle */}
      <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">Assessment Mode</h4>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-0.5">Add auto-graded MCQ questions to this round</p>
          </div>
          <button type="button" onClick={toggleAssessmentMode} className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
            {assessmentMode ? <ToggleRight className="w-8 h-8 text-indigo-600 dark:text-indigo-400" /> : <ToggleLeft className="w-8 h-8" />}
          </button>
        </div>

        {assessmentMode && (
          <>
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">Time Limit (minutes)</label>
                <input type="number" min={1} placeholder="No limit"
                  value={form.timeLimitSecs ? Math.round(form.timeLimitSecs / 60) : ""}
                  onChange={(e) => {
                    const mins = e.target.value ? Number(e.target.value) : null;
                    setForm({ ...form, timeLimitSecs: mins ? mins * 60 : null });
                  }}
                  className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20 dark:bg-gray-800 dark:text-white" />
              </div>
              <label className="flex items-center gap-2 cursor-pointer mt-5">
                <input type="checkbox" checked={form.autoGrade}
                  onChange={(e) => setForm({ ...form, autoGrade: e.target.checked })}
                  className="accent-black dark:accent-white" />
                <span className="text-sm text-gray-700 dark:text-gray-300">Auto-grade</span>
              </label>
            </div>

            <AssessmentBuilder
              questions={form.assessmentQuestions}
              onChange={(questions) => setForm({ ...form, assessmentQuestions: questions })}
            />
          </>
        )}
      </div>

      <div>
        <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Evaluation Criteria</h4>
        {form.evaluationCriteria.map((crit, i) => (
          <div key={crit.id} className="flex items-center gap-2 mb-2">
            <input type="text" value={crit.criterion}
              onChange={(e) => {
                const criteria = [...form.evaluationCriteria];
                criteria[i] = { ...criteria[i]!, criterion: e.target.value };
                setForm({ ...form, evaluationCriteria: criteria });
              }}
              className="flex-1 px-3 py-1.5 text-sm border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-800 dark:text-white" placeholder="Criterion" />
            <input type="number" value={crit.maxScore}
              onChange={(e) => {
                const criteria = [...form.evaluationCriteria];
                criteria[i] = { ...criteria[i]!, maxScore: Number(e.target.value) };
                setForm({ ...form, evaluationCriteria: criteria });
              }}
              className="w-20 px-3 py-1.5 text-sm border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-800 dark:text-white" min={1} />
            <button type="button" onClick={() => setForm({ ...form, evaluationCriteria: form.evaluationCriteria.filter((_, idx) => idx !== i) })}
              className="p-1 text-red-400 hover:text-red-600"><Trash2 className="w-3 h-3" /></button>
          </div>
        ))}
        <button type="button" onClick={addCriterion} className="text-xs text-gray-500 dark:text-gray-500 hover:text-black dark:hover:text-white flex items-center gap-1">
          <Plus className="w-3 h-3" /> Add Criterion
        </button>
      </div>

      <div className="flex items-center gap-3 pt-2">
        <button onClick={() => onSubmit(form)} disabled={loading}
          className="px-4 py-2 bg-black dark:bg-white text-white dark:text-gray-950 text-sm font-semibold rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 disabled:opacity-50">
          {loading ? "Saving..." : "Save Round"}
        </button>
        <button onClick={onCancel} className="px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">Cancel</button>
      </div>
    </div>
  );
}
