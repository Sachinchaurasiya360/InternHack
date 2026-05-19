import React from "react";
import { FormFieldError } from "./FormFieldError";

interface FormFieldProps {
  label?: string;
  error?: string | null;
  children: React.ReactNode;
  required?: boolean;
  helperText?: string;
  className?: string;
}

/**
 * FormField - Wrapper component for consistent form field layout
 *
 * Combines label, input, error message, and helper text in a consistent structure.
 * This component enforces consistent styling and layout across all forms.
 *
 * Features:
 * - Label with required indicator
 * - Accessibility attributes (htmlFor, aria-describedby)
 * - Optional helper text below input
 * - Error message display with FormFieldError
 * - Consistent spacing using Tailwind
 *
 * Usage:
 * ```tsx
 * <FormField label="Email" error={errors.email} required>
 *   <input
 *     type="email"
 *     value={email}
 *     onChange={(e) => setEmail(e.target.value)}
 *     className="w-full px-3 py-2 border rounded"
 *   />
 * </FormField>
 * ```
 */
export const FormField = React.memo(function FormField({
  label,
  error,
  children,
  required = false,
  helperText,
  className = "",
}: FormFieldProps) {
  const fieldId = React.useId();
  const errorId = error ? `${fieldId}-error` : undefined;
  const helperId = helperText ? `${fieldId}-helper` : undefined;

  // Inject aria-describedby and aria-invalid into child input
  const childWithAttrs = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      const describedBy = [errorId, helperId].filter(Boolean).join(" ");
      return React.cloneElement(child, {
        id: fieldId,
        ...(describedBy && { "aria-describedby": describedBy }),
        ...(error && { "aria-invalid": "true" }),
      } as any);
    }
    return child;
  });

  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && (
        <label htmlFor={fieldId} className="text-sm font-medium text-gray-900 dark:text-gray-100">
          {label}
          {required && <span className="ml-1 text-red-600 dark:text-red-400">*</span>}
        </label>
      )}

      {childWithAttrs}

      {helperText && !error && (
        <p id={helperId} className="text-xs text-gray-500 dark:text-gray-400">
          {helperText}
        </p>
      )}

      <FormFieldError error={error} id={errorId} />
    </div>
  );
});

FormField.displayName = "FormField";
