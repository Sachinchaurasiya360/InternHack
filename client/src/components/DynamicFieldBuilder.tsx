import { useState } from "react";
import { Plus, Trash2, GripVertical, Upload, Calendar, Hash, Mail, Link } from "lucide-react";
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
        <div key={field.id} className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
          <div
            className="flex items-center gap-3 px-4 py-3 bg-gray-50 dark:bg-gray-800 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            onClick={() => setExpandedId(expandedId === field.id ? null : field.id)}
          >
            <div className="flex flex-col gap-1">
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); moveField(index, "up"); }}
                disabled={index === 0}
                className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 disabled:opacity-30"
              >
                <GripVertical className="w-4 h-4" />
              </button>
            </div>
            <div className="flex-1">
              <span className="font-medium text-sm dark:text-gray-200">
                {field.label || "Untitled Field"}
              </span>
              <span className="ml-2 text-xs text-gray-500 bg-gray-200 dark:bg-gray-700 dark:text-gray-400 px-2 py-0.5 rounded">
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
            <div className="p-4 space-y-3 border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">Label</label>
                  <input
                    type="text"
                    value={field.label}
                    onChange={(e) => updateField(field.id, { label: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20 dark:bg-gray-800 dark:text-white"
                    placeholder="Field label"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">Type</label>
                  <select
                    value={field.fieldType}
                    onChange={(e) => updateField(field.id, { fieldType: e.target.value as FieldType })}
                    className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20 dark:bg-gray-800 dark:text-white"
                  >
                    {FIELD_TYPES.map((t) => (
                      <option key={t.value} value={t.value}>{t.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Placeholder — only for types that accept text input */}
              {!["FILE_UPLOAD", "BOOLEAN", "DATE"].includes(field.fieldType) && (
                <div>
                  <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">Placeholder</label>
                  <input
                    type="text"
                    value={field.placeholder || ""}
                    onChange={(e) => updateField(field.id, { placeholder: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20 dark:bg-gray-800 dark:text-white"
                    placeholder="Placeholder text"
                  />
                </div>
              )}

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={field.required}
                  onChange={(e) => updateField(field.id, { required: e.target.checked })}
                  className="w-4 h-4 rounded border-gray-300 dark:border-gray-600 text-black dark:text-white focus:ring-black dark:focus:ring-white"
                />
                <span className="text-sm text-gray-600 dark:text-gray-400">Required field</span>
              </label>

              {(field.fieldType === "DROPDOWN" || field.fieldType === "MULTI_SELECT") && (
                <OptionsEditor
                  options={field.options || []}
                  onChange={(options) => updateField(field.id, { options })}
                />
              )}

              {/* Preview */}
              <div>
                <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-2">Preview</label>
                <FieldPreview field={field} />
              </div>
            </div>
          )}
        </div>
      ))}

      <button
        type="button"
        onClick={addField}
        className="w-full py-3 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg text-sm text-gray-500 hover:border-black dark:hover:border-white hover:text-black dark:hover:text-white transition-colors flex items-center justify-center gap-2"
      >
        <Plus className="w-4 h-4" />
        Add Custom Field
      </button>
    </div>
  );
}

const inputClass = "w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-400 dark:text-gray-500 cursor-default";

function FieldPreview({ field }: { field: CustomFieldDefinition }) {
  switch (field.fieldType) {
    case "BOOLEAN":
      return (
        <div className="flex gap-2">
          <button type="button" className="flex-1 py-2 text-sm font-medium rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:border-green-500 hover:bg-green-50 dark:hover:bg-green-900/20 hover:text-green-700 dark:hover:text-green-400 transition-colors">
            Yes
          </button>
          <button type="button" className="flex-1 py-2 text-sm font-medium rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:border-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-700 dark:hover:text-red-400 transition-colors">
            No
          </button>
        </div>
      );
    case "FILE_UPLOAD":
      return (
        <div className="flex flex-col items-center gap-2 py-6 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-800">
          <Upload className="w-6 h-6 text-gray-400 dark:text-gray-500" />
          <span className="text-sm text-gray-500 dark:text-gray-400">Click to upload or drag and drop</span>
          <span className="text-xs text-gray-400 dark:text-gray-500">PDF, DOC, DOCX, PNG, JPG (max 5MB)</span>
        </div>
      );
    case "TEXTAREA":
      return <textarea rows={3} disabled placeholder={field.placeholder || "Enter text..."} className={inputClass + " resize-none"} />;
    case "DATE":
      return (
        <div className="relative">
          <input type="date" disabled className={inputClass} />
          <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        </div>
      );
    case "NUMERIC":
      return (
        <div className="relative">
          <input type="number" disabled placeholder={field.placeholder || "Enter number..."} className={inputClass} />
          <Hash className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        </div>
      );
    case "EMAIL":
      return (
        <div className="relative">
          <input type="email" disabled placeholder={field.placeholder || "email@example.com"} className={inputClass} />
          <Mail className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        </div>
      );
    case "URL":
      return (
        <div className="relative">
          <input type="url" disabled placeholder={field.placeholder || "https://..."} className={inputClass} />
          <Link className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        </div>
      );
    case "DROPDOWN":
      return (
        <select disabled className={inputClass}>
          <option>Select an option...</option>
          {(field.options || []).map((opt, i) => <option key={i}>{opt}</option>)}
        </select>
      );
    case "MULTI_SELECT":
      return (
        <div className="flex flex-wrap gap-2 p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-800 min-h-10">
          {(field.options || []).length > 0 ? (
            field.options!.map((opt, i) => (
              <span key={i} className="px-2 py-1 text-xs bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-md">{opt}</span>
            ))
          ) : (
            <span className="text-sm text-gray-400 dark:text-gray-500 p-1">Add options above...</span>
          )}
        </div>
      );
    default:
      return <input type="text" disabled placeholder={field.placeholder || "Enter text..."} className={inputClass} />;
  }
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
      <label className="block text-xs font-medium text-gray-600 dark:text-gray-400">Options</label>
      {options.map((opt, index) => (
        <div key={index} className="flex items-center gap-2">
          <input
            type="text"
            value={opt}
            onChange={(e) => updateOption(index, e.target.value)}
            className="flex-1 px-3 py-1.5 text-sm border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20 dark:bg-gray-800 dark:text-white"
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
        className="text-xs text-gray-500 hover:text-black dark:hover:text-white transition-colors flex items-center gap-1"
      >
        <Plus className="w-3 h-3" />
        Add Option
      </button>
    </div>
  );
}
