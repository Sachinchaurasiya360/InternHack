/**
 * Form Field Components - Usage Examples
 *
 * This file demonstrates how to use the FormFieldError and FormField
 * components for consistent form validation and error display across InternHack.
 */

// ============================================================================
// BASIC USAGE: FormFieldError (for custom layouts)
// ============================================================================

import { FormFieldError } from "@/components/ui/FormFieldError";
import { FormField } from "@/components/ui/FormField";
import { getInputCls } from "@/components/ui/form";

/**
 * Example 1: Using FormFieldError standalone
 *
 * Use when you have a custom layout or need fine-grained control
 */
export function CustomFormExample() {
  const [errors, setErrors] = React.useState<{ email?: string }>({});

  return (
    <div>
      <input type="email" className={getInputCls()} />
      <FormFieldError error={errors.email} />
    </div>
  );
}

// ============================================================================
// RECOMMENDED: FormField wrapper (consistent UX)
// ============================================================================

/**
 * Example 2: Using FormField wrapper
 *
 * Recommended approach. Handles label, error, helper text, and accessibility.
 */
export function ConsistentFormExample() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = React.useState<Record<string, string>>({});

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, name: value }));

    // Clear error when user starts typing
    if (errors.name) {
      setErrors((prev) => ({ ...prev, name: "" }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!formData.email.includes("@")) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Submit form data
    console.log("Form data:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <FormField label="Full Name" error={errors.name} required>
        <input
          type="text"
          value={formData.name}
          onChange={handleNameChange}
          placeholder="John Doe"
          className={getInputCls()}
        />
      </FormField>

      <FormField label="Email" error={errors.email} required helperText="We'll never share your email">
        <input
          type="email"
          value={formData.email}
          onChange={(e) => {
            setFormData((prev) => ({ ...prev, email: e.target.value }));
            if (errors.email) setErrors((prev) => ({ ...prev, email: "" }));
          }}
          placeholder="you@example.com"
          className={getInputCls()}
        />
      </FormField>

      <FormField
        label="Password"
        error={errors.password}
        required
        helperText="Must be at least 8 characters"
      >
        <input
          type="password"
          value={formData.password}
          onChange={(e) => {
            setFormData((prev) => ({ ...prev, password: e.target.value }));
            if (errors.password) setErrors((prev) => ({ ...prev, password: "" }));
          }}
          placeholder="••••••••"
          className={getInputCls()}
        />
      </FormField>

      <button
        type="submit"
        disabled={Object.values(errors).some((e) => e)}
        className="w-full px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 disabled:opacity-50"
      >
        Sign Up
      </button>
    </form>
  );
}

// ============================================================================
// MIGRATION GUIDE: Converting existing forms
// ============================================================================

/**
 * Example 3: Before and After - Converting a custom form to use FormField
 *
 * BEFORE:
 * ```tsx
 * <div>
 *   <label htmlFor="email">Email</label>
 *   <input id="email" type="email" />
 *   {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
 * </div>
 * ```
 *
 * AFTER:
 * ```tsx
 * <FormField label="Email" error={errors.email} required>
 *   <input type="email" className={getInputCls()} />
 * </FormField>
 * ```
 *
 * Benefits:
 * - Consistent styling and spacing
 * - Automatic accessibility attributes (aria-describedby, aria-invalid)
 * - Required indicator (*) automatically added
 * - Helper text support
 * - Dark mode support built-in
 */

// ============================================================================
// ACCESSIBILITY & BEST PRACTICES
// ============================================================================

/**
 * FormField and FormFieldError components provide:
 *
 * ✅ WCAG 2.1 Compliance
 *   - Proper label associations with htmlFor
 *   - ARIA attributes (aria-describedby, aria-invalid)
 *   - Role="alert" for error messages
 *   - Dark mode support
 *
 * ✅ UX Best Practices
 *   - Consistent error styling across all forms
 *   - Color not the only indicator (has icon-like text)
 *   - Helper text for guidance
 *   - Required indicators
 *   - Smooth transitions
 *
 * ✅ Developer Experience
 *   - Simple API (just pass error prop)
 *   - TypeScript support
 *   - Memoized to prevent unnecessary re-renders
 * ✅ Performance
 *   - Memoized components (React.memo)
 *   - Only renders when error changes
 *   - No unnecessary DOM updates
 */

export { FormFieldError, FormField };
