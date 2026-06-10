import React, { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, EyeOff, ArrowRight, Check, X } from "lucide-react";
import api from "../../lib/axios";
import { useAuthStore } from "../../lib/auth.store";
import { SEO } from "../../components/SEO";
import { GoogleAuthButton } from "../../components/GoogleAuthButton";

const PASSWORD_CRITERIA = [
  { id: "length",    label: "At least 8 characters",  test: (p: string) => p.length >= 8 },
  { id: "uppercase", label: "One uppercase letter",    test: (p: string) => /[A-Z]/.test(p) },
  { id: "lowercase", label: "One lowercase letter",    test: (p: string) => /[a-z]/.test(p) },
  { id: "number",    label: "One number",              test: (p: string) => /[0-9]/.test(p) },
  { id: "special",   label: "One special character",  test: (p: string) => /[\W_]/.test(p) },
] as const;

type StrengthLevel = 0 | 1 | 2 | 3 | 4 | 5;

function getPasswordStrength(password: string): StrengthLevel {
  if (!password) return 0;
  const passed = PASSWORD_CRITERIA.filter((c) => c.test(password)).length;
  return passed as StrengthLevel;
}

const STRENGTH_META: Record<
  StrengthLevel,
  { label: string; segmentClass: string; labelClass: string }
> = {
  0: { label: "",       segmentClass: "bg-stone-200 dark:bg-stone-700", labelClass: "" },
  1: { label: "Weak",   segmentClass: "bg-red-500",                     labelClass: "text-red-500" },
  2: { label: "Weak",   segmentClass: "bg-red-500",                     labelClass: "text-red-500" },
  3: { label: "Fair",   segmentClass: "bg-amber-400",                   labelClass: "text-amber-500" },
  4: { label: "Good",   segmentClass: "bg-lime-400",                    labelClass: "text-lime-600 dark:text-lime-400" },
  5: { label: "Strong", segmentClass: "bg-lime-400",                    labelClass: "text-lime-600 dark:text-lime-400" },
};
  

const PasswordStrengthIndicator = React.memo(function PasswordStrengthIndicator({
  password,
}: {
  password: string;
}) {
  const strength = getPasswordStrength(password);
  const meta = STRENGTH_META[strength];

  if (!password) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -4 }}
      transition={{ duration: 0.2 }}
      className="mt-2 space-y-2"
      aria-live="polite"
    >
      {/* Strength bar */}
      <div className="flex items-center gap-2">
        <div className="flex gap-1 flex-1">
          {([1, 2, 3, 4, 5] as StrengthLevel[]).map((level) => (
            <motion.div
              key={level}
              className="h-1 flex-1 rounded-sm overflow-hidden bg-stone-200 dark:bg-stone-700"
            >
              <motion.div
                className={`h-full ${
                  strength >= level ? meta.segmentClass : ""
                }`}
                initial={{ width: "0%" }}
                animate={{ width: strength >= level ? "100%" : "0%" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </motion.div>
          ))}
        </div>
        <AnimatePresence mode="wait">
          {meta.label && (
            <motion.span
              key={meta.label}
              initial={{ opacity: 0, x: 4 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -4 }}
              transition={{ duration: 0.2 }}
              className={`text-xs font-mono font-bold w-12 text-right ${meta.labelClass}`}
            >
              {meta.label}
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      {/* Criteria checklist */}
      <ul className="space-y-1" aria-label="Password requirements">
        {PASSWORD_CRITERIA.map((criterion) => {
          const passed = criterion.test(password);
          return (
            <li
              key={criterion.id}
              className="flex items-center gap-1.5 text-xs font-mono"
            >
              <span
                className={`flex items-center justify-center w-3.5 h-3.5 ${
                  passed ? "text-lime-600 dark:text-lime-400" : "text-stone-400"
                }`}
              >
                {passed ? (
                  <Check className="w-3.5 h-3.5" strokeWidth={3} />
                ) : (
                  <X className="w-3.5 h-3.5" strokeWidth={3} />
                )}
              </span>
              <span
                className={`transition-colors ${
                  passed
                    ? "text-stone-600 dark:text-stone-400"
                    : "text-stone-400 dark:text-stone-600"
                }`}
              >
                {criterion.label}
              </span>
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
});

const PERSONAL_EMAIL_DOMAINS = [
  "gmail.com", "yahoo.com", "yahoo.in", "hotmail.com", "outlook.com",
  "live.com", "aol.com", "icloud.com", "mail.com", "protonmail.com",
  "zoho.com", "yandex.com", "gmx.com", "rediffmail.com",
];

function isPersonalEmail(email: string) {
  const domain = email.split("@")[1]?.toLowerCase();
  return domain ? PERSONAL_EMAIL_DOMAINS.includes(domain) : false;
}

export default function RegisterPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const login = useAuthStore((s) => s.login);
  const rawReturnTo = searchParams.get("from");
  const returnTo = rawReturnTo && /^\/(?!\/)/.test(rawReturnTo) ? rawReturnTo : null;
  const initialRole = searchParams.get("role") === "RECRUITER" ? "RECRUITER" : "STUDENT";
  const [role, setRole] = useState<"STUDENT" | "RECRUITER">(initialRole);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    company: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  // Validation functions
  const validateName = (name: string): string => {
    if (!name.trim()) return "Name is required";
    if (name.trim().length < 2) return "Name must be at least 2 characters long";
    if (!/^[A-Za-zÀ-ÿ' -]+$/.test(name)) return "Name may contain only letters, spaces, apostrophes, and hyphens";
    return "";
  };

  const validateEmail = (email: string, userRole: string): string => {
    if (!email.trim()) return "Email is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "Invalid email address";
    if (userRole === "RECRUITER" && isPersonalEmail(email)) {
      return "Please use your company email. Personal email addresses (Gmail, Yahoo, etc.) are not allowed for recruiter accounts.";
    }
    return "";
  };

  const validatePassword = (password: string): string => {
    if (!password) return "Password is required";
    if (password.length < 8) return "Password must be at least 8 characters";
    if (!/[A-Z]/.test(password)) return "Password must contain at least one uppercase letter";
    if (!/[a-z]/.test(password)) return "Password must contain at least one lowercase letter";
    if (!/[0-9]/.test(password)) return "Password must contain at least one number";
    if (!/[\W_]/.test(password)) return "Password must contain at least one special character";
    return "";
  };

  const validateConfirmPassword = (password: string, confirmPassword: string): string => {
    if (!confirmPassword) return "Please confirm your password";
    if (password !== confirmPassword) return "Passwords do not match";
    return "";
  };

  const handleFieldChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    
    // Real-time validation
    const newErrors = { ...fieldErrors };
    if (field === "name") {
      const nameError = validateName(value);
      if (nameError) {
        newErrors.name = nameError;
      } else {
        delete newErrors.name;
      }
    } else if (field === "email") {
      const emailError = validateEmail(value, role);
      if (emailError) {
        newErrors.email = emailError;
      } else {
        delete newErrors.email;
      }
    } else if (field === "password") {
      const passwordError = validatePassword(value);
      if (passwordError) {
        newErrors.password = passwordError;
      } else {
        delete newErrors.password;
      }
      if (form.confirmPassword) {
        const confirmPasswordError = validateConfirmPassword(value, form.confirmPassword);
        if (confirmPasswordError) {
          newErrors.confirmPassword = confirmPasswordError;
        } else {
          delete newErrors.confirmPassword;
        }
      }
    } else if (field === "confirmPassword") {
      const confirmPasswordError = validateConfirmPassword(form.password, value);
      if (confirmPasswordError) {
        newErrors.confirmPassword = confirmPasswordError;
      } else {
        delete newErrors.confirmPassword;
      }
    }
    setFieldErrors(newErrors);
  };

  const redirectAfterAuth = (userRole: string) => {
    if (returnTo) {
      navigate(returnTo);
    } else if (userRole === "RECRUITER") {
      navigate("/recruiters");
    } else {
      navigate("/student/applications");
    }
  };

  const handleGoogleSuccess = async (accessToken: string) => {
    setError("");
    setLoading(true);
    try {
      const { data } = await api.post("/auth/google", { accessToken, role });
      login(data.user);
      redirectAfterAuth(data.user.role);
    } catch (err: unknown) {
      const error = err as { response?: { data?: { message?: string } } };
      setError(error.response?.data?.message || "Google sign-up failed");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setFieldErrors({});
    
    // Validate all fields
    const newErrors: Record<string, string> = {};
    const nameError = validateName(form.name);
    const emailError = validateEmail(form.email, role);
    const passwordError = validatePassword(form.password);
    const confirmPasswordError = validateConfirmPassword(form.password, form.confirmPassword);

    if (nameError) newErrors.name = nameError;
    if (emailError) newErrors.email = emailError;
    if (passwordError) newErrors.password = passwordError;
    if (confirmPasswordError) newErrors.confirmPassword = confirmPasswordError;
    
    if (Object.keys(newErrors).length > 0) {
      setFieldErrors(newErrors);
      return;
    }

    setLoading(true);

    try {
      const payload: Record<string, string> = { name: form.name, email: form.email, password: form.password, role };
      if (role === "RECRUITER" && form.company) payload.company = form.company;
      const { data } = await api.post("/auth/register", payload);
      if (!data.user.isVerified) {
        navigate(`/verify-email?email=${encodeURIComponent(form.email)}`);
      } else {
        login(data.user);
        redirectAfterAuth(data.user.role);
      }
    }  catch (err: unknown) {
      const error = err as {
        response?: {
          data?: {
            message?: string;
            errors?: {
              fieldErrors?: Record<string, string[]>;
            };
          };
        };
      };

      // Handle field-level errors from backend
      const backendFieldErrors = error.response?.data?.errors?.fieldErrors;
      if (backendFieldErrors && typeof backendFieldErrors === "object") {
        const fieldErrorsObj: Record<string, string> = {};
        for (const [field, messages] of Object.entries(backendFieldErrors)) {
          if (Array.isArray(messages) && messages.length > 0) {
            fieldErrorsObj[field] = messages[0];
          }
        }
        if (Object.keys(fieldErrorsObj).length > 0) {
          setFieldErrors(fieldErrorsObj);
          return;
        }
      }

      const backendMessage = error.response?.data?.message || "Registration failed";
      setError(backendMessage);
    } finally {
      setLoading(false);
    }
  };

  const isRecruiter = role === "RECRUITER";

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-50">
      <SEO
        title="Create Account"
        description="Join InternHack for free. Create a student or recruiter account to access AI-powered career tools, job listings, and career roadmaps."
        noIndex
      />

      <AuthPromoPanel
        isRecruiter={isRecruiter}
      />

      <div className="flex items-center justify-center px-6 py-12 lg:py-0">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-md"
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-500 mb-5">
            <span className="h-1.5 w-1.5 bg-lime-400" />
            create account
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-none">
            Create an account.
          </h1>
          <p className="mt-3 text-sm text-stone-600 dark:text-stone-400">
            Join InternHack. Takes a minute.
          </p>

          <div className="mt-8 space-y-5">
            {error && (
              <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md text-sm text-red-600 dark:text-red-400">
                {error}
              </div>
            )}

            <div>
              <label className="block text-xs font-mono uppercase tracking-widest text-stone-500 mb-1.5">
                I am a
              </label>
              <div className="grid grid-cols-2 gap-0 border border-stone-300 dark:border-white/10 rounded-md overflow-hidden">
                <button
                  type="button"
                  onClick={() => setRole("STUDENT")}
                  className={`py-2.5 text-sm font-bold transition-colors border-0 cursor-pointer ${role === "STUDENT"
                    ? "bg-lime-400 text-stone-950"
                    : "bg-white dark:bg-stone-900 text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-50"
                    }`}
                >
                  Student
                </button>
                <button
                  type="button"
                  onClick={() => setRole("RECRUITER")}
                  className={`py-2.5 text-sm font-bold transition-colors border-0 cursor-pointer border-l border-stone-300 dark:border-white/10 ${role === "RECRUITER"
                    ? "bg-lime-400 text-stone-950"
                    : "bg-white dark:bg-stone-900 text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-50"
                    }`}
                >
                  Recruiter
                </button>
              </div>
            </div>

            <GoogleAuthButton
              label={isRecruiter ? "Sign up with Google Workspace" : "Continue with Google"}
              onAccessToken={handleGoogleSuccess}
              onError={() => setError("Google sign-up failed")}
              disabled={loading}
            />
            {isRecruiter && (
              <p className="text-xs font-mono text-amber-600 dark:text-amber-400">
                only company google workspace accounts are accepted.
              </p>
            )}

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-stone-200 dark:border-white/10" />
              </div>
              <div className="relative flex justify-center">
                <span className="bg-stone-50 dark:bg-stone-950 px-3 text-xs font-mono uppercase tracking-widest text-stone-500">
                  or with email
                </span>
              </div>
            </div>

            <form noValidate onSubmit={handleSubmit} className="space-y-4">
              <FormField label="Full name" error={fieldErrors.name} fieldName="name">
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => handleFieldChange("name", e.target.value)}
                  aria-invalid={!!fieldErrors.name}
                  aria-describedby={fieldErrors.name ? "error-name" : undefined}
                  className={`w-full px-4 py-3 border rounded-md focus:outline-none transition-colors bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-50 placeholder-stone-400 dark:placeholder-stone-600 text-sm ${
                    fieldErrors.name
                      ? "border-red-300 dark:border-red-800 focus:border-red-400"
                      : "border-stone-300 dark:border-white/10 focus:border-lime-400"
                  }`}
                  placeholder="Jane Doe"
                />
              </FormField>

              <FormField label={isRecruiter ? "Company email" : "Email"} error={fieldErrors.email} fieldName="email">
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => handleFieldChange("email", e.target.value)}
                  aria-invalid={!!fieldErrors.email}
                  aria-describedby={fieldErrors.email ? "error-email" : undefined}
                  className={`w-full px-4 py-3 border rounded-md focus:outline-none transition-colors bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-50 placeholder-stone-400 dark:placeholder-stone-600 text-sm ${
                    fieldErrors.email
                      ? "border-red-300 dark:border-red-800 focus:border-red-400"
                      : "border-stone-300 dark:border-white/10 focus:border-lime-400"
                  }`}
                  placeholder={isRecruiter ? "you@company.com" : "you@example.com"}
                />
                {!fieldErrors.email && isRecruiter && (
                  <p className="mt-1.5 text-xs font-mono text-amber-600 dark:text-amber-400">
                    no personal gmail, yahoo, or outlook.
                  </p>
                )}
              </FormField>

              {isRecruiter && (
                <FormField label="Company" fieldName="company">
                  <input
                    type="text"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="w-full px-4 py-3 border border-stone-300 dark:border-white/10 rounded-md focus:outline-none focus:border-lime-400 transition-colors bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-50 placeholder-stone-400 dark:placeholder-stone-600 text-sm"
                    placeholder="Your company name"
                  />
                </FormField>
              )}

              <FormField label="Password" error={fieldErrors.password} fieldName="password">
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={form.password}
                    onChange={(e) => handleFieldChange("password", e.target.value)}
                    aria-invalid={!!fieldErrors.password}
                    aria-describedby={fieldErrors.password ? "error-password password-strength" : "password-strength"}
                    className={`w-full px-4 py-3 border rounded-md focus:outline-none transition-colors pr-10 bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-50 placeholder-stone-400 dark:placeholder-stone-600 text-sm ${
                      fieldErrors.password
                        ? "border-red-300 dark:border-red-800 focus:border-red-400"
                        : "border-stone-300 dark:border-white/10 focus:border-lime-400"
                    }`}
                    placeholder="Min. 8 chars (A-Z, a-z, 0-9, symbol)"
                    minLength={8}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-500 hover:text-stone-900 dark:hover:text-stone-50 bg-transparent border-0 cursor-pointer"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                <div id="password-strength">
                  <AnimatePresence>
                    {form.password && (
                      <PasswordStrengthIndicator password={form.password} />
                    )}
                  </AnimatePresence>
                </div>
              </FormField>

              <FormField label="Confirm Password" error={fieldErrors.confirmPassword} fieldName="confirmPassword">
                <input
                  type={showPassword ? "text" : "password"}
                  value={form.confirmPassword}
                  onChange={(e) => handleFieldChange("confirmPassword", e.target.value)}
                  aria-invalid={!!fieldErrors.confirmPassword}
                  aria-describedby={fieldErrors.confirmPassword ? "error-confirmPassword" : undefined}
                  className={`w-full px-4 py-3 border rounded-md focus:outline-none transition-colors bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-50 placeholder-stone-400 dark:placeholder-stone-600 text-sm ${
                    fieldErrors.confirmPassword
                      ? "border-red-300 dark:border-red-800 focus:border-red-400"
                      : "border-stone-300 dark:border-white/10 focus:border-lime-400"
                  }`}
                  placeholder="Confirm your password"
                />
              </FormField>

              <button
                type="submit"
                disabled={loading}
                className="group w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-lime-400 text-stone-950 rounded-md text-sm font-bold hover:bg-lime-300 transition-colors cursor-pointer border-0 disabled:opacity-50"
              >
                {loading ? "Creating account..." : "Create account"}
                {!loading && (
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                )}
              </button>
            </form>

            <div className="pt-4">
              <p className="text-sm text-stone-600 dark:text-stone-400">
                Already have an account?{" "}
                <Link
                  to={returnTo ? `/login?from=${encodeURIComponent(returnTo)}` : "/login"}
                  className="text-stone-900 dark:text-stone-50 font-bold border-b border-stone-900 dark:border-stone-50 pb-0.5 no-underline"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function FormField({
  label,
  right,
  error,
  fieldName,
  children,
}: {
  label: string;
  right?: React.ReactNode;
  error?: string;
  fieldName?: string;
  children: React.ReactNode;
}) {
  const errorId = fieldName ? `error-${fieldName}` : undefined;
  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <label className="text-xs font-mono uppercase tracking-widest text-stone-500">
          {label}
        </label>
        {right}
      </div>
      {children}
      {error && (
        <p id={errorId} className="mt-1.5 text-xs text-red-600 dark:text-red-400 font-medium">
          {error}
        </p>
      )}
    </div>
  );
}

function AuthPromoPanel({ isRecruiter }: { isRecruiter: boolean }) {
  const studentStats = [
    { value: "300", suffix: "+", label: "interview q's" },
    { value: "11", suffix: "", label: "coding tracks" },
    { value: "14", suffix: "", label: "resume templates" },
  ];
  const recruiterStats = [
    { value: "7", suffix: "d", label: "free trial" },
    { value: "14", suffix: "/14", label: "hr modules" },
    { value: "10", suffix: "m", label: "to first post" },
  ];
  const stats = isRecruiter ? recruiterStats : studentStats;

  return (
    <div className="hidden lg:flex relative flex-col justify-between px-12 xl:px-16 pt-8 pb-12 xl:pb-16 bg-stone-900 overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none opacity-[0.06] auth-promo-dots" />
      <div aria-hidden className="absolute inset-0 pointer-events-none auth-promo-lines" />

      <div className="relative mb-auto">
        <Link to="/" className="inline-flex items-center gap-2.5 no-underline">
          <div className="relative">
            <img src="/logo.png" alt="InternHack" className="h-8 w-8 rounded-md object-contain" />
            <span className="absolute -bottom-0.5 -right-0.5 h-1.5 w-1.5 bg-lime-400" />
          </div>
          <span className="text-base font-bold tracking-tight text-stone-50">InternHack</span>
        </Link>
      </div>
      <div className="relative max-w-lg">
        <motion.div
          key={isRecruiter ? "r" : "s"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-400"
        >
          <motion.span
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1.5 bg-lime-400"
          />
          {isRecruiter ? "start hiring in 10 minutes" : "for students / new grads"}
        </motion.div>
        <motion.h2
          key={isRecruiter ? "rh" : "sh"}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-6 text-4xl xl:text-5xl font-bold tracking-tight text-stone-50 leading-none"
        >
          {isRecruiter ? (
            <>
              Your first hire.{" "}
              <span className="text-stone-500">Live by tomorrow.</span>
            </>
          ) : (
            <>
              Build the resume.{" "}
              <span className="text-stone-500">Land the offer.</span>
            </>
          )}
        </motion.h2>
        <p className="mt-6 text-base text-stone-400 leading-relaxed">
          {isRecruiter
            ? "Spin up a recruiter workspace, post a role, and see ranked candidates inside the day. Seven days on the house, no card required."
            : "AI ATS scorer, LaTeX builder, 11 coding tracks, 300+ interview questions, and a direct line to recruiters. All free for students."}
        </p>

        <div className="mt-12 grid grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-xl overflow-hidden">
          {stats.map((s) => (
            <div key={s.label} className="bg-stone-900 p-5">
              <div className="text-2xl xl:text-3xl font-bold tracking-tight text-stone-50 tabular-nums">
                {s.value}
                {s.suffix && <span className="text-lime-400">{s.suffix}</span>}
              </div>
              <div className="mt-1 text-xs font-mono uppercase tracking-widest text-stone-500">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 relative text-xs font-mono text-stone-500">
          {isRecruiter
            ? "no card required. cancel any time."
            : "free for students. always."}
        </div>
      </div>
    </div>
  );
}
