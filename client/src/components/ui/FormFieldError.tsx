import React from "react";

interface FormFieldErrorProps {
  error?: string | null;
  className?: string;
  id?: string;
}

/**
 * FormFieldError - Reusable component for displaying field-level validation errors
 *
 * This component provides a consistent way to display validation errors across all forms.
 * It handles:
 * - Conditional rendering (only shows if error exists)
 * - Consistent styling with Tailwind
 * - Accessibility with proper ARIA attributes (role="alert", id for aria-describedby)
 * - Smooth transitions for better UX
 *
 * Usage:
 * ```tsx
 * <FormFieldError error={errors.email} id="email-error" />
 * ```
 */
export const FormFieldError = React.memo(function FormFieldError({
  error,
  className = "",
  id,
}: FormFieldErrorProps) {
  if (!error) return null;

  return (
    <div
      role="alert"
      id={id}
      className={`mt-1 text-sm font-medium text-red-600 dark:text-red-400 ${className}`}
    >
      {error}
    </div>
  );
});

FormFieldError.displayName = "FormFieldError";
