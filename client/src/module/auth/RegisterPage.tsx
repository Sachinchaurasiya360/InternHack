import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router";
import { motion } from "framer-motion";
import { Eye, EyeOff, ArrowRight } from "lucide-react";
import api from "../../lib/axios";
import { useAuthStore } from "../../lib/auth.store";
import { SEO } from "../../components/SEO";
import { GoogleAuthButton } from "../../components/GoogleAuthButton";

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
  const returnTo = searchParams.get("from");
  const initialRole = searchParams.get("role") === "RECRUITER" ? "RECRUITER" : "STUDENT";
  const [role, setRole] = useState<"STUDENT" | "RECRUITER">(initialRole);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    company: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

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
    setLoading(true);

    if (role === "RECRUITER" && isPersonalEmail(form.email)) {
      setError("Please use your company email. Personal email addresses (Gmail, Yahoo, etc.) are not allowed for recruiter accounts.");
      setLoading(false);
      return;
    }

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
    } catch (err: unknown) {
      const error = err as { response?: { data?: { message?: string } } };
      setError(error.response?.data?.message || "Registration failed");
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
        keywords="register, sign up, create account, InternHack, student registration, recruiter registration"
      />

      <AuthPromoPanel
        isRecruiter={isRecruiter}
      />

      <div className="relative flex items-center justify-center px-6 py-16 lg:py-0">
        <Link
          to="/"
          className="absolute top-6 left-6 flex items-center gap-2 text-sm no-underline text-stone-500 hover:text-stone-900 dark:hover:text-stone-50 transition-colors"
        >
          <div className="relative">
            <img src="/logo.png" alt="InternHack" className="h-7 w-7 rounded-md object-contain" />
            <span className="absolute -bottom-0.5 -right-0.5 h-1.5 w-1.5 bg-lime-400" />
          </div>
          <span className="font-bold text-stone-900 dark:text-stone-50">InternHack</span>
        </Link>

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

            <form onSubmit={handleSubmit} className="space-y-4">
              <FormField label="Full name">
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 border border-stone-300 dark:border-white/10 rounded-md focus:outline-none focus:border-lime-400 transition-colors bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-50 placeholder-stone-400 dark:placeholder-stone-600 text-sm"
                  placeholder="Jane Doe"
                  required
                />
              </FormField>

              <FormField label={isRecruiter ? "Company email" : "Email"}>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 border border-stone-300 dark:border-white/10 rounded-md focus:outline-none focus:border-lime-400 transition-colors bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-50 placeholder-stone-400 dark:placeholder-stone-600 text-sm"
                  placeholder={isRecruiter ? "you@company.com" : "you@example.com"}
                  required
                />
                {isRecruiter && (
                  <p className="mt-1.5 text-xs font-mono text-amber-600 dark:text-amber-400">
                    no personal gmail, yahoo, or outlook.
                  </p>
                )}
              </FormField>

              {isRecruiter && (
                <FormField label="Company">
                  <input
                    type="text"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="w-full px-4 py-3 border border-stone-300 dark:border-white/10 rounded-md focus:outline-none focus:border-lime-400 transition-colors bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-50 placeholder-stone-400 dark:placeholder-stone-600 text-sm"
                    placeholder="Your company name"
                    required
                  />
                </FormField>
              )}

              <FormField label="Password">
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    className="w-full px-4 py-3 border border-stone-300 dark:border-white/10 rounded-md focus:outline-none focus:border-lime-400 transition-colors pr-10 bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-50 placeholder-stone-400 dark:placeholder-stone-600 text-sm"
                    placeholder="Min. 6 characters"
                    required
                    minLength={6}
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
  children,
}: {
  label: string;
  right?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <label className="text-xs font-mono uppercase tracking-widest text-stone-500">
          {label}
        </label>
        {right}
      </div>
      {children}
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
    <div className="hidden lg:flex relative flex-col justify-center p-12 xl:p-16 bg-stone-900 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "120px 100%",
        }}
      />

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
