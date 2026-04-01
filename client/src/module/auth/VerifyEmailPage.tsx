import { useState, useRef, useEffect, useCallback } from "react";
import { Link, useNavigate, useSearchParams } from "react-router";
import { motion } from "framer-motion";
import toast from "@/components/ui/toast";
import api from "../../lib/axios";
import { useAuthStore } from "../../lib/auth.store";
import { Navbar } from "../../components/Navbar";
import { SEO } from "../../components/SEO";

export default function VerifyEmailPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email") || "";
  const login = useAuthStore((s) => s.login);

  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [resendCooldown, setResendCooldown] = useState(60);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Countdown timer for resend
  useEffect(() => {
    if (resendCooldown <= 0) return;
    const timer = setInterval(() => {
      setResendCooldown((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [resendCooldown]);

  // Auto-focus first input on mount
  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleVerify = useCallback(
    async (code: string) => {
      if (code.length !== 6 || loading) return;
      setError("");
      setLoading(true);
      try {
        const { data } = await api.post("/auth/verify-email", { email, otp: code });
        login(data.user);
        toast.success("Email verified successfully!");
        if (data.user.role === "RECRUITER") {
          navigate("/recruiters");
        } else {
          navigate("/student/applications");
        }
      } catch (err: unknown) {
        const error = err as { response?: { data?: { message?: string } } };
        setError(error.response?.data?.message || "Verification failed");
      } finally {
        setLoading(false);
      }
    },
    [email, loading, login, navigate]
  );

  const handleChange = (index: number, value: string) => {
    // Only allow digits
    const digit = value.replace(/\D/g, "").slice(-1);
    const newOtp = [...otp];
    newOtp[index] = digit;
    setOtp(newOtp);

    // Auto-focus next box
    if (digit && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    // Auto-submit when all 6 digits filled
    const code = newOtp.join("");
    if (code.length === 6 && newOtp.every((d) => d !== "")) {
      handleVerify(code);
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    if (!pasted) return;
    const newOtp = [...otp];
    for (let i = 0; i < 6; i++) {
      newOtp[i] = pasted[i] || "";
    }
    setOtp(newOtp);

    // Focus last filled input or the next empty one
    const focusIndex = Math.min(pasted.length, 5);
    inputRefs.current[focusIndex]?.focus();

    // Auto-submit if all 6 digits pasted
    if (pasted.length === 6) {
      handleVerify(pasted);
    }
  };

  const handleResend = async () => {
    if (resendCooldown > 0) return;
    setError("");
    try {
      await api.post("/auth/resend-otp", { email });
      toast.success("Verification code resent!");
      setResendCooldown(60);
      setOtp(["", "", "", "", "", ""]);
      inputRefs.current[0]?.focus();
    } catch (err: unknown) {
      const error = err as { response?: { data?: { message?: string } } };
      setError(error.response?.data?.message || "Failed to resend code");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-950">
      <SEO
        title="Verify Email"
        description="Verify your email address to activate your InternHack account."
        keywords="verify email, OTP, InternHack, email verification"
      />
      <Navbar />
      <div className="flex-1 flex items-center justify-center px-4 pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold mt-6 text-gray-900 dark:text-white">Verify Your Email</h1>
            <p className="text-gray-500 dark:text-gray-500 mt-1">
              We've sent a 6-digit code to
            </p>
            {email && (
              <p className="text-sm font-medium text-gray-900 dark:text-white mt-1">{email}</p>
            )}
          </div>

          <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 space-y-6">
            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-600">
                {error}
              </div>
            )}

            {/* OTP Input Boxes */}
            <div className="flex justify-center gap-3" onPaste={handlePaste}>
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => { inputRefs.current[index] = el; }}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  disabled={loading}
                  className="w-10 h-12 sm:w-12 sm:h-14 text-center text-lg sm:text-xl font-semibold border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20 focus:border-black dark:focus:border-white transition-colors bg-white dark:bg-gray-800 text-gray-900 dark:text-white disabled:opacity-50"
                />
              ))}
            </div>

            {/* Loading state */}
            {loading && (
              <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                Verifying...
              </p>
            )}

            {/* Resend Code */}
            <div className="text-center">
              <p className="text-sm text-gray-500 dark:text-gray-500">
                Didn't receive the code?{" "}
                {resendCooldown > 0 ? (
                  <span className="text-gray-400 dark:text-gray-600">
                    Resend in {resendCooldown}s
                  </span>
                ) : (
                  <button
                    type="button"
                    onClick={handleResend}
                    className="text-black dark:text-white font-medium hover:underline"
                  >
                    Resend Code
                  </button>
                )}
              </p>
            </div>

            <p className="text-center text-sm text-gray-500 dark:text-gray-500">
              Wrong email?{" "}
              <Link to="/register" className="text-black dark:text-white font-medium hover:underline">
                Go back
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
