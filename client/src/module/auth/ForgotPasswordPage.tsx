import React, { useState, useRef, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, EyeOff, Check, X } from "lucide-react";
import toast from "@/components/ui/toast";
import api from "../../lib/axios";
import { Navbar } from "../../components/Navbar";
import { SEO } from "../../components/SEO";

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

export default function ForgotPasswordPage() {
  const navigate = useNavigate();

  const [step, setStep] = useState<1 | 2>(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Focus first OTP input when entering step 2
  useEffect(() => {
    if (step === 2) {
      inputRefs.current[0]?.focus();
    }
  }, [step]);

  const handleSendCode = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await api.post("/auth/forgot-password", { email });
      toast.success("Reset code sent to your email!");
      setStep(2);
    } catch (err: unknown) {
      const error = err as { response?: { data?: { message?: string } } };
      setError(error.response?.data?.message || "Failed to send reset code");
    } finally {
      setLoading(false);
    }
  };

  const handleOtpChange = (index: number, value: string) => {
    const digit = value.replace(/\D/g, "").slice(-1);
    const newOtp = [...otp];
    newOtp[index] = digit;
    setOtp(newOtp);

    if (digit && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleOtpPaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    if (!pasted) return;
    const newOtp = [...otp];
    for (let i = 0; i < 6; i++) {
      newOtp[i] = pasted[i] || "";
    }
    setOtp(newOtp);
    const focusIndex = Math.min(pasted.length, 5);
    inputRefs.current[focusIndex]?.focus();
  };

  const handleResetPassword = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setError("");

      const code = otp.join("");
      if (code.length !== 6) {
        setError("Please enter the complete 6-digit code");
        return;
      }
      if (newPassword.length < 8) {
        setError("Password must be at least 8 characters");
        return;
      }
      if (!/[A-Z]/.test(newPassword)) {
        setError("Password must contain at least one uppercase letter");
        return;
      }
      if (!/[a-z]/.test(newPassword)) {
        setError("Password must contain at least one lowercase letter");
        return;
      }
      if (!/[0-9]/.test(newPassword)) {
        setError("Password must contain at least one number");
        return;
      }
      if (!/[\W_]/.test(newPassword)) {
        setError("Password must contain at least one special character");
        return;
      }
      if (newPassword !== confirmPassword) {
        setError("Passwords do not match");
        return;
      }

      setLoading(true);
      try {
        await api.post("/auth/reset-password", { email, otp: code, newPassword });
        toast.success("Password reset successfully! Please sign in.");
        navigate("/login");
      } catch (err: unknown) {
        const error = err as { response?: { data?: { message?: string } } };
        setError(error.response?.data?.message || "Failed to reset password");
      } finally {
        setLoading(false);
      }
    },
    [otp, newPassword, confirmPassword, email, navigate]
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-950">
      <SEO
        title="Forgot Password"
        description="Reset your InternHack password. Enter your email to receive a reset code."
        noIndex
      />
      <Navbar />
      <div className="flex-1 flex items-center justify-center px-4 pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold mt-6 text-gray-900 dark:text-white">
              {step === 1 ? "Forgot Password" : "Reset Password"}
            </h1>
            <p className="text-gray-500 dark:text-gray-500 mt-1">
              {step === 1
                ? "Enter your email to receive a reset code"
                : "Enter the code and your new password"}
            </p>
            {step === 2 && email && (
              <p className="text-sm font-medium text-gray-900 dark:text-white mt-1">{email}</p>
            )}
          </div>

          {step === 1 ? (
            <form
              onSubmit={handleSendCode}
              className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 space-y-5"
            >
              {error && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-600">
                  {error}
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20 focus:border-black transition-colors bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-black text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed dark:bg-white dark:text-gray-950 dark:hover:bg-gray-200"
              >
                {loading ? "Sending..." : "Send Reset Code"}
              </motion.button>

              <p className="text-center text-sm text-gray-500 dark:text-gray-500">
                Remember your password?{" "}
                <Link to="/login" className="text-black dark:text-white font-medium hover:underline">
                  Sign in
                </Link>
              </p>
            </form>
          ) : (
            <form
              onSubmit={handleResetPassword}
              className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 space-y-5"
            >
              {error && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-600">
                  {error}
                </div>
              )}

              {/* OTP Input Boxes */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Verification Code
                </label>
                <div className="flex justify-center gap-3" onPaste={handleOtpPaste}>
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      ref={(el) => { inputRefs.current[index] = el; }}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      onKeyDown={(e) => handleOtpKeyDown(index, e)}
                      disabled={loading}
                      aria-label={`Verification code digit ${index + 1}`}
                      className="w-10 h-12 sm:w-12 sm:h-14 text-center text-lg sm:text-xl font-semibold border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20 focus:border-black dark:focus:border-white transition-colors bg-white dark:bg-gray-800 text-gray-900 dark:text-white disabled:opacity-50"
                    />
                  ))}
                </div>
              </div>

              {/* New Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  New Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20 focus:border-black transition-colors pr-10 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                    placeholder="Min. 8 chars (A-Z, a-z, 0-9, symbol)"
                    required
                    minLength={8}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                <div id="password-strength">
                  <AnimatePresence>
                    {newPassword && (
                      <PasswordStrengthIndicator password={newPassword} />
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20 focus:border-black transition-colors pr-10 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                    placeholder="Re-enter your password"
                    required
                    minLength={8}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  >
                    {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-black text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed dark:bg-white dark:text-gray-950 dark:hover:bg-gray-200"
              >
                {loading ? "Resetting..." : "Reset Password"}
              </motion.button>

              <p className="text-center text-sm text-gray-500 dark:text-gray-500">
                <button
                  type="button"
                  onClick={() => {
                    setStep(1);
                    setOtp(["", "", "", "", "", ""]);
                    setNewPassword("");
                    setConfirmPassword("");
                    setError("");
                  }}
                  className="text-black dark:text-white font-medium hover:underline"
                >
                  Try a different email
                </button>
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}
