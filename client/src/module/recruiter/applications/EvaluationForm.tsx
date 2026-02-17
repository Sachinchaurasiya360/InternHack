import { useState } from "react";
import api from "../../../lib/axios";
import type { EvaluationCriterion } from "../../../lib/types";

interface EvaluationFormProps {
  applicationId: number;
  roundId: number;
  criteria: EvaluationCriterion[];
  onComplete: () => void;
}

export function EvaluationForm({ applicationId, roundId, criteria, onComplete }: EvaluationFormProps) {
  const [scores, setScores] = useState<Record<string, { score: number; comment: string }>>(
    Object.fromEntries(criteria.map((c) => [c.id, { score: 0, comment: "" }]))
  );
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await api.put(`/recruiter/applications/${applicationId}/rounds/${roundId}/evaluate`, {
        evaluationScores: scores,
        recruiterNotes: notes,
      });
      onComplete();
    } catch {
      alert("Failed to save evaluation");
    } finally {
      setLoading(false);
    }
  };

  if (criteria.length === 0) {
    return (
      <div className="space-y-3">
        <p className="text-sm text-gray-500">No evaluation criteria defined for this round.</p>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
          <textarea value={notes} onChange={(e) => setNotes(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" rows={3} placeholder="Add evaluation notes..." />
        </div>
        <button onClick={handleSubmit} disabled={loading}
          className="px-4 py-2 bg-black text-white text-sm font-semibold rounded-lg hover:bg-gray-800 disabled:opacity-50">
          {loading ? "Saving..." : "Save Notes"}
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {criteria.map((crit) => (
        <div key={crit.id} className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-gray-700">{crit.criterion}</label>
            <span className="text-xs text-gray-400">Max: {crit.maxScore}</span>
          </div>
          <div className="flex items-center gap-3">
            <input
              type="range"
              min={0}
              max={crit.maxScore}
              value={scores[crit.id]?.score || 0}
              onChange={(e) => setScores({ ...scores, [crit.id]: { ...scores[crit.id]!, score: Number(e.target.value) } })}
              className="flex-1"
            />
            <span className="text-sm font-bold w-10 text-right">{scores[crit.id]?.score || 0}</span>
          </div>
          <input
            type="text"
            value={scores[crit.id]?.comment || ""}
            onChange={(e) => setScores({ ...scores, [crit.id]: { ...scores[crit.id]!, comment: e.target.value } })}
            className="w-full px-3 py-1.5 text-xs border border-gray-200 rounded-lg"
            placeholder="Comment (optional)"
          />
        </div>
      ))}

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Overall Notes</label>
        <textarea value={notes} onChange={(e) => setNotes(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" rows={2} placeholder="Add notes..." />
      </div>

      <button onClick={handleSubmit} disabled={loading}
        className="px-4 py-2 bg-black text-white text-sm font-semibold rounded-lg hover:bg-gray-800 disabled:opacity-50">
        {loading ? "Saving..." : "Save Evaluation"}
      </button>
    </div>
  );
}
