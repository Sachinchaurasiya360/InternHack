import { useState } from "react";
import { Plus, Trash2, GripVertical } from "lucide-react";
import type { CustomFieldDefinition, FieldType } from "../lib/types";

interface DynamicFieldBuilderProps {
  fields: CustomFieldDefinition[];
  onChange: (fields: CustomFieldDefinition[]) => void;
}

const FIELD_TYPES: { value: FieldType; label: string }[] = [
  { value: "TEXT", label: "Text Input" },
  { value: "TEXTAREA", label: "Text Area" },
  { value: "DROPDOWN", label: "Dropdown" },
  { value: "MULTI_SELECT", label: "Multi Select" },
  { value: "FILE_UPLOAD", label: "File Upload" },
  { value: "BOOLEAN", label: "Yes/No" },
  { value: "NUMERIC", label: "Number" },
  { value: "DATE", label: "Date" },
  { value: "EMAIL", label: "Email" },
  { value: "URL", label: "URL" },
];

export function DynamicFieldBuilder({ fields, onChange }: DynamicFieldBuilderProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const addField = () => {
    const newField: CustomFieldDefinition = {
      id: crypto.randomUUID(),
      label: "",
      fieldType: "TEXT",
      required: false,
      placeholder: "",
      options: [],
    };
    onChange([...fields, newField]);
    setExpandedId(newField.id);
  };

  const updateField = (id: string, updates: Partial<CustomFieldDefinition>) => {
    onChange(fields.map((f) => (f.id === id ? { ...f, ...updates } : f)));
  };

  const removeField = (id: string) => {
    onChange(fields.filter((f) => f.id !== id));
    if (expandedId === id) setExpandedId(null);
  };

  const moveField = (index: number, direction: "up" | "down") => {
    const newIndex = direction === "up" ? index - 1 : index + 1;
    if (newIndex < 0 || newIndex >= fields.length) return;
    const newFields = [...fields];
    [newFields[index], newFields[newIndex]] = [newFields[newIndex]!, newFields[index]!];
    onChange(newFields);
  };

  return (
    <div className="space-y-3">
      {fields.map((field, index) => (
        <div key={field.id} className="border border-gray-200 rounded-lg overflow-hidden">
          <div
            className="flex items-center gap-3 px-4 py-3 bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors"
            onClick={() => setExpandedId(expandedId === field.id ? null : field.id)}
          >
            <div className="flex flex-col gap-1">
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); moveField(index, "up"); }}
                disabled={index === 0}
                className="text-gray-400 hover:text-gray-600 disabled:opacity-30"
              >
                <GripVertical className="w-4 h-4" />
              </button>
            </div>
            <div className="flex-1">
              <span className="font-medium text-sm">
                {field.label || "Untitled Field"}
              </span>
              <span className="ml-2 text-xs text-gray-500 bg-gray-200 px-2 py-0.5 rounded">
                {FIELD_TYPES.find((t) => t.value === field.fieldType)?.label}
              </span>
              {field.required && (
                <span className="ml-2 text-xs text-red-500">Required</span>
              )}
            </div>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); removeField(field.id); }}
              className="p-1 text-red-400 hover:text-red-600 transition-colors"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>

          {expandedId === field.id && (
            <div className="p-4 space-y-3 border-t border-gray-200">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Label</label>
                  <input
                    type="text"
                    value={field.label}
                    onChange={(e) => updateField(field.id, { label: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20"
                    placeholder="Field label"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Type</label>
                  <select
                    value={field.fieldType}
                    onChange={(e) => updateField(field.id, { fieldType: e.target.value as FieldType })}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20"
                  >
                    {FIELD_TYPES.map((t) => (
                      <option key={t.value} value={t.value}>{t.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">Placeholder</label>
                <input
                  type="text"
                  value={field.placeholder || ""}
                  onChange={(e) => updateField(field.id, { placeholder: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20"
                  placeholder="Placeholder text"
                />
              </div>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={field.required}
                  onChange={(e) => updateField(field.id, { required: e.target.checked })}
                  className="w-4 h-4 rounded border-gray-300 text-black focus:ring-black"
                />
                <span className="text-sm text-gray-600">Required field</span>
              </label>

              {(field.fieldType === "DROPDOWN" || field.fieldType === "MULTI_SELECT") && (
                <OptionsEditor
                  options={field.options || []}
                  onChange={(options) => updateField(field.id, { options })}
                />
              )}
            </div>
          )}
        </div>
      ))}

      <button
        type="button"
        onClick={addField}
        className="w-full py-3 border-2 border-dashed border-gray-300 rounded-lg text-sm text-gray-500 hover:border-black hover:text-black transition-colors flex items-center justify-center gap-2"
      >
        <Plus className="w-4 h-4" />
        Add Custom Field
      </button>
    </div>
  );
}

function OptionsEditor({ options, onChange }: { options: string[]; onChange: (options: string[]) => void }) {
  const addOption = () => onChange([...options, ""]);
  const updateOption = (index: number, value: string) => {
    const updated = [...options];
    updated[index] = value;
    onChange(updated);
  };
  const removeOption = (index: number) => onChange(options.filter((_, i) => i !== index));

  return (
    <div className="space-y-2">
      <label className="block text-xs font-medium text-gray-600">Options</label>
      {options.map((opt, index) => (
        <div key={index} className="flex items-center gap-2">
          <input
            type="text"
            value={opt}
            onChange={(e) => updateOption(index, e.target.value)}
            className="flex-1 px-3 py-1.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20"
            placeholder={`Option ${index + 1}`}
          />
          <button
            type="button"
            onClick={() => removeOption(index)}
            className="p-1 text-red-400 hover:text-red-600"
          >
            <Trash2 className="w-3 h-3" />
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={addOption}
        className="text-xs text-gray-500 hover:text-black transition-colors flex items-center gap-1"
      >
        <Plus className="w-3 h-3" />
        Add Option
      </button>
    </div>
  );
}
