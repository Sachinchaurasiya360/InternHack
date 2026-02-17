import type { CustomFieldDefinition } from "../lib/types";

interface DynamicFieldRendererProps {
  fields: CustomFieldDefinition[];
  values: Record<string, unknown>;
  onChange: (fieldId: string, value: unknown) => void;
  disabled?: boolean;
}

export function DynamicFieldRenderer({ fields, values, onChange, disabled }: DynamicFieldRendererProps) {
  return (
    <div className="space-y-4">
      {fields.map((field) => (
        <div key={field.id}>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {field.label}
            {field.required && <span className="text-red-500 ml-1">*</span>}
          </label>
          {renderField(field, values[field.id], (val) => onChange(field.id, val), disabled)}
        </div>
      ))}
    </div>
  );
}

function renderField(
  field: CustomFieldDefinition,
  value: unknown,
  onChange: (val: unknown) => void,
  disabled?: boolean,
) {
  const baseInputClass =
    "w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed";

  switch (field.fieldType) {
    case "TEXT":
    case "EMAIL":
    case "URL":
      return (
        <input
          type={field.fieldType === "EMAIL" ? "email" : field.fieldType === "URL" ? "url" : "text"}
          value={(value as string) || ""}
          onChange={(e) => onChange(e.target.value)}
          placeholder={field.placeholder}
          disabled={disabled}
          className={baseInputClass}
          required={field.required}
        />
      );

    case "TEXTAREA":
      return (
        <textarea
          value={(value as string) || ""}
          onChange={(e) => onChange(e.target.value)}
          placeholder={field.placeholder}
          disabled={disabled}
          className={`${baseInputClass} min-h-[100px] resize-y`}
          maxLength={field.validation?.maxLength}
          required={field.required}
        />
      );

    case "NUMERIC":
      return (
        <input
          type="number"
          value={(value as number) ?? ""}
          onChange={(e) => onChange(e.target.value ? Number(e.target.value) : "")}
          placeholder={field.placeholder}
          disabled={disabled}
          className={baseInputClass}
          min={field.validation?.min}
          max={field.validation?.max}
          required={field.required}
        />
      );

    case "DATE":
      return (
        <input
          type="date"
          value={(value as string) || ""}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          className={baseInputClass}
          required={field.required}
        />
      );

    case "BOOLEAN":
      return (
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={!!value}
            onChange={(e) => onChange(e.target.checked)}
            disabled={disabled}
            className="w-4 h-4 rounded border-gray-300 text-black focus:ring-black"
          />
          <span className="text-sm text-gray-600">{field.placeholder || "Yes"}</span>
        </label>
      );

    case "DROPDOWN":
      return (
        <select
          value={(value as string) || ""}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          className={baseInputClass}
          required={field.required}
        >
          <option value="">{field.placeholder || "Select an option"}</option>
          {field.options?.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      );

    case "MULTI_SELECT":
      return (
        <div className="space-y-2">
          {field.options?.map((opt) => (
            <label key={opt} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={Array.isArray(value) && value.includes(opt)}
                onChange={(e) => {
                  const current = Array.isArray(value) ? value : [];
                  if (e.target.checked) {
                    onChange([...current, opt]);
                  } else {
                    onChange(current.filter((v: string) => v !== opt));
                  }
                }}
                disabled={disabled}
                className="w-4 h-4 rounded border-gray-300 text-black focus:ring-black"
              />
              <span className="text-sm text-gray-600">{opt}</span>
            </label>
          ))}
        </div>
      );

    case "FILE_UPLOAD":
      return (
        <div>
          <input
            type="file"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) onChange(file.name);
            }}
            disabled={disabled}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-black file:text-white hover:file:bg-gray-800 file:cursor-pointer"
            accept={field.validation?.allowedTypes?.join(",")}
          />
          {value && <p className="mt-1 text-sm text-gray-500">Current: {value as string}</p>}
        </div>
      );

    default:
      return (
        <input
          type="text"
          value={(value as string) || ""}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          className={baseInputClass}
        />
      );
  }
}
