import { useState } from "react";
import { Plus, ChevronDown, ChevronUp, Trash2, ArrowUp, ArrowDown } from "lucide-react";
import { DynamicFieldBuilder } from "../../../components/DynamicFieldBuilder";
import type { CustomFieldDefinition } from "../../../lib/types";

interface RoundInput {
  name: string;
  description: string;
  instructions: string;
  customFields: CustomFieldDefinition[];
  evaluationCriteria: { id: string; criterion: string; maxScore: number }[];
}

interface RoundsManagerProps {
  rounds: RoundInput[];
  onChange: (rounds: RoundInput[]) => void;
}

export function RoundsManager({ rounds, onChange }: RoundsManagerProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const addRound = () => {
    onChange([...rounds, {
      name: "",
      description: "",
      instructions: "",
      customFields: [],
      evaluationCriteria: [],
    }]);
    setExpandedIndex(rounds.length);
  };

  const updateRound = (index: number, updates: Partial<RoundInput>) => {
    onChange(rounds.map((r, i) => (i === index ? { ...r, ...updates } : r)));
  };

  const removeRound = (index: number) => {
    onChange(rounds.filter((_, i) => i !== index));
    if (expandedIndex === index) setExpandedIndex(null);
  };

  const moveRound = (index: number, direction: "up" | "down") => {
    const newIndex = direction === "up" ? index - 1 : index + 1;
    if (newIndex < 0 || newIndex >= rounds.length) return;
    const newRounds = [...rounds];
    [newRounds[index], newRounds[newIndex]] = [newRounds[newIndex]!, newRounds[index]!];
    onChange(newRounds);
    setExpandedIndex(newIndex);
  };

  const addCriterion = (roundIndex: number) => {
    const round = rounds[roundIndex]!;
    updateRound(roundIndex, {
      evaluationCriteria: [...round.evaluationCriteria, { id: crypto.randomUUID(), criterion: "", maxScore: 10 }],
    });
  };

  const updateCriterion = (roundIndex: number, critIndex: number, updates: Partial<{ criterion: string; maxScore: number }>) => {
    const round = rounds[roundIndex]!;
    const criteria = round.evaluationCriteria.map((c, i) => (i === critIndex ? { ...c, ...updates } : c));
    updateRound(roundIndex, { evaluationCriteria: criteria });
  };

  const removeCriterion = (roundIndex: number, critIndex: number) => {
    const round = rounds[roundIndex]!;
    updateRound(roundIndex, { evaluationCriteria: round.evaluationCriteria.filter((_, i) => i !== critIndex) });
  };

  return (
    <div className="space-y-3">
      {rounds.map((round, index) => (
        <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
          <div
            className="flex items-center gap-3 px-4 py-3 bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors"
            onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
          >
            <div className="flex flex-col">
              <button type="button" onClick={(e) => { e.stopPropagation(); moveRound(index, "up"); }} disabled={index === 0}
                className="text-gray-400 hover:text-gray-600 disabled:opacity-30"><ArrowUp className="w-3 h-3" /></button>
              <button type="button" onClick={(e) => { e.stopPropagation(); moveRound(index, "down"); }} disabled={index === rounds.length - 1}
                className="text-gray-400 hover:text-gray-600 disabled:opacity-30"><ArrowDown className="w-3 h-3" /></button>
            </div>
            <span className="text-xs font-bold text-gray-400 w-8">R{index + 1}</span>
            <span className="flex-1 font-medium text-sm">{round.name || "Untitled Round"}</span>
            {expandedIndex === index ? <ChevronUp className="w-4 h-4 text-gray-400" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
            <button type="button" onClick={(e) => { e.stopPropagation(); removeRound(index); }}
              className="p-1 text-red-400 hover:text-red-600"><Trash2 className="w-4 h-4" /></button>
          </div>

          {expandedIndex === index && (
            <div className="p-4 space-y-4 border-t border-gray-200">
              <div className="grid grid-cols-1 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Round Name</label>
                  <input type="text" value={round.name} onChange={(e) => updateRound(index, { name: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20"
                    placeholder="e.g. Resume Screening, Technical Assessment" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Description</label>
                  <textarea value={round.description} onChange={(e) => updateRound(index, { description: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20"
                    placeholder="Brief description of this round" rows={2} />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Instructions for Candidates</label>
                  <textarea value={round.instructions} onChange={(e) => updateRound(index, { instructions: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20"
                    placeholder="Instructions candidates will see for this round" rows={2} />
                </div>
              </div>

              {/* Custom Fields for this Round */}
              <div>
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Round Fields</h4>
                <DynamicFieldBuilder fields={round.customFields} onChange={(fields) => updateRound(index, { customFields: fields })} />
              </div>

              {/* Evaluation Criteria */}
              <div>
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Evaluation Criteria</h4>
                <div className="space-y-2">
                  {round.evaluationCriteria.map((crit, ci) => (
                    <div key={crit.id} className="flex items-center gap-2">
                      <input type="text" value={crit.criterion} onChange={(e) => updateCriterion(index, ci, { criterion: e.target.value })}
                        className="flex-1 px-3 py-1.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20"
                        placeholder="e.g. Communication Skills" />
                      <input type="number" value={crit.maxScore} onChange={(e) => updateCriterion(index, ci, { maxScore: Number(e.target.value) })}
                        className="w-20 px-3 py-1.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20"
                        placeholder="Max" min={1} />
                      <button type="button" onClick={() => removeCriterion(index, ci)} className="p-1 text-red-400 hover:text-red-600">
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                  <button type="button" onClick={() => addCriterion(index)}
                    className="text-xs text-gray-500 hover:text-black flex items-center gap-1">
                    <Plus className="w-3 h-3" /> Add Criterion
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}

      <button type="button" onClick={addRound}
        className="w-full py-3 border-2 border-dashed border-gray-300 rounded-lg text-sm text-gray-500 hover:border-black hover:text-black transition-colors flex items-center justify-center gap-2">
        <Plus className="w-4 h-4" /> Add Hiring Round
      </button>
    </div>
  );
}
