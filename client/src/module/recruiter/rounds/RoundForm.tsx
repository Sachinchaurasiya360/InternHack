import { useState } from "react";
import { DynamicFieldBuilder } from "../../../components/DynamicFieldBuilder";
import { Plus, Trash2 } from "lucide-react";
import type { CustomFieldDefinition } from "../../../lib/types";

interface RoundFormData {
  name: string;
  description: string;
  instructions: string;
  customFields: CustomFieldDefinition[];
  evaluationCriteria: { id: string; criterion: string; maxScore: number }[];
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
  });

  const addCriterion = () => {
    setForm({ ...form, evaluationCriteria: [...form.evaluationCriteria, { id: crypto.randomUUID(), criterion: "", maxScore: 10 }] });
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Round Name</label>
        <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20"
          placeholder="e.g. Technical Interview" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
        <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20" rows={2} />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Instructions</label>
        <textarea value={form.instructions} onChange={(e) => setForm({ ...form, instructions: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20" rows={2} />
      </div>

      <div>
        <h4 className="text-sm font-medium text-gray-700 mb-2">Custom Fields</h4>
        <DynamicFieldBuilder fields={form.customFields} onChange={(fields) => setForm({ ...form, customFields: fields })} />
      </div>

      <div>
        <h4 className="text-sm font-medium text-gray-700 mb-2">Evaluation Criteria</h4>
        {form.evaluationCriteria.map((crit, i) => (
          <div key={crit.id} className="flex items-center gap-2 mb-2">
            <input type="text" value={crit.criterion}
              onChange={(e) => {
                const criteria = [...form.evaluationCriteria];
                criteria[i] = { ...criteria[i]!, criterion: e.target.value };
                setForm({ ...form, evaluationCriteria: criteria });
              }}
              className="flex-1 px-3 py-1.5 text-sm border border-gray-300 rounded-lg" placeholder="Criterion" />
            <input type="number" value={crit.maxScore}
              onChange={(e) => {
                const criteria = [...form.evaluationCriteria];
                criteria[i] = { ...criteria[i]!, maxScore: Number(e.target.value) };
                setForm({ ...form, evaluationCriteria: criteria });
              }}
              className="w-20 px-3 py-1.5 text-sm border border-gray-300 rounded-lg" min={1} />
            <button type="button" onClick={() => setForm({ ...form, evaluationCriteria: form.evaluationCriteria.filter((_, idx) => idx !== i) })}
              className="p-1 text-red-400 hover:text-red-600"><Trash2 className="w-3 h-3" /></button>
          </div>
        ))}
        <button type="button" onClick={addCriterion} className="text-xs text-gray-500 hover:text-black flex items-center gap-1">
          <Plus className="w-3 h-3" /> Add Criterion
        </button>
      </div>

      <div className="flex items-center gap-3 pt-2">
        <button onClick={() => onSubmit(form)} disabled={loading}
          className="px-4 py-2 bg-black text-white text-sm font-semibold rounded-lg hover:bg-gray-800 disabled:opacity-50">
          {loading ? "Saving..." : "Save Round"}
        </button>
        <button onClick={onCancel} className="px-4 py-2 text-sm text-gray-600 hover:text-black">Cancel</button>
      </div>
    </div>
  );
}
