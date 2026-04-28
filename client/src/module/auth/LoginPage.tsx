import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router";
import { motion } from "framer-motion";
import { Eye, EyeOff, ArrowRight } from "lucide-react";
import api from "../../lib/axios";
import { useAuthStore } from "../../lib/auth.store";
import { SEO } from "../../components/SEO";
import { GoogleAuthButton } from "../../components/GoogleAuthButton";

export default function LoginPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const returnTo = searchParams.get("from");
  const login = useAuthStore((s) => s.login);
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGoogleSuccess = async (accessToken: string) => {
    setError("");
    setLoading(true);
    try {
      const { data } = await api.post("/auth/google", { accessToken });
      login(data.user);
      if (returnTo) {
        navigate(returnTo);
      } else if (data.user.role === "ADMIN") {
        navigate("/admin");
      } else if (data.user.role === "RECRUITER") {
        navigate("/recruiters");
      } else {
        navigate("/student/applications");
      }
    } catch (err: unknown) {
      const error = err as { response?: { data?: { message?: string } } };
      setError(error.response?.data?.message || "Google sign-in failed");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const { data } = await api.post("/auth/login", form);
      login(data.user);
      if (returnTo) {
        navigate(returnTo);
      } else if (data.user.role === "ADMIN") {
        navigate("/admin");
      } else if (data.user.role === "RECRUITER") {
        navigate("/recruiters");
      } else {
        navigate("/student/applications");
      }
    } catch (err: unknown) {
      const error = err as { response?: { data?: { message?: string; requiresVerification?: boolean; email?: string } } };
      if (error.response?.data?.requiresVerification && error.response?.data?.email) {
        navigate(`/verify-email?email=${encodeURIComponent(error.response.data.email)}`);
        return;
      }
      setError(error.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-50">
      <SEO
        title="Login"
        description="Sign in to InternHack to browse jobs, track applications, score your resume with AI, and connect with recruiters."
        keywords="login, sign in, InternHack, student login, recruiter login"
      />

      <AuthPromoPanel
        kicker="for students / new grads"
        headline={
          <>
            Welcome back.{" "}
            <span className="text-stone-500">
              Let's land the next one.
            </span>
          </>
        }
        sub="Your applications, resume scores, and saved roles are right where you left them. Jump back in and keep the streak going."
        stats={[
          { value: "300", suffix: "+", label: "interview q's" },
          { value: "11", suffix: "", label: "coding tracks" },
          { value: "14", suffix: "t", label: "templates" },
        ]}
      />

      <div className="relative flex items-start lg:items-center justify-center px-6 pt-24 pb-12 lg:py-0">
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
            sign in
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-none">
            Welcome back.
          </h1>
          <p className="mt-3 text-sm text-stone-600 dark:text-stone-400">
            Sign in to pick up where you left off.
          </p>

          <div className="mt-8 space-y-5">
            {error && (
              <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md text-sm text-red-600 dark:text-red-400">
                {error}
              </div>
            )}

            <GoogleAuthButton
              label="Continue with Google"
              onAccessToken={handleGoogleSuccess}
              onError={() => setError("Google sign-in failed")}
              disabled={loading}
            />

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
              <FormField label="Email">
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 border border-stone-300 dark:border-white/10 rounded-md focus:outline-none focus:border-lime-400 transition-colors bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-50 placeholder-stone-400 dark:placeholder-stone-600 text-sm"
                  placeholder="you@example.com"
                  required
                />
              </FormField>

              <FormField
                label="Password"
                right={
                  <Link
                    to="/forgot-password"
                    className="text-xs font-mono text-stone-500 hover:text-stone-900 dark:hover:text-stone-50 no-underline"
                  >
                    forgot?
                  </Link>
                }
              >
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    className="w-full px-4 py-3 border border-stone-300 dark:border-white/10 rounded-md focus:outline-none focus:border-lime-400 transition-colors pr-10 bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-50 placeholder-stone-400 dark:placeholder-stone-600 text-sm"
                    placeholder="Your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
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
                {loading ? "Signing in..." : "Sign in"}
                {!loading && (
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                )}
              </button>
            </form>

            <div className="pt-4 space-y-2">
              <p className="text-sm text-stone-600 dark:text-stone-400">
                Don't have an account?{" "}
                <Link
                  to={returnTo ? `/register?from=${encodeURIComponent(returnTo)}` : "/register"}
                  className="text-stone-900 dark:text-stone-50 font-bold border-b border-stone-900 dark:border-stone-50 pb-0.5 no-underline"
                >
                  Sign up
                </Link>
              </p>
              <p className="text-xs font-mono text-stone-500">
                hiring talent?{" "}
                <Link to="/recruiter/login" className="hover:text-stone-900 dark:hover:text-stone-50 no-underline">
                  sign in as recruiter
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

function AuthPromoPanel({
  kicker,
  headline,
  sub,
  stats,
}: {
  kicker: string;
  headline: React.ReactNode;
  sub: string;
  stats: { value: string; suffix: string; label: string }[];
}) {
  return (
    <div className="hidden lg:flex relative flex-col justify-between p-12 xl:p-16 bg-stone-900 overflow-hidden">
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

      <div className="relative">
        <Link to="/" className="inline-flex items-center gap-2.5 no-underline">
          <div className="relative">
            <img src="/logo.png" alt="InternHack" className="h-8 w-8 rounded-md object-contain" />
            <span className="absolute -bottom-0.5 -right-0.5 h-1.5 w-1.5 bg-lime-400" />
          </div>
          <span className="text-base font-bold tracking-tight text-stone-50">
            InternHack
          </span>
        </Link>
      </div>

      <div className="relative max-w-lg">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-400"
        >
          <motion.span
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1.5 bg-lime-400"
          />
          {kicker}
        </motion.div>
        <h2 className="mt-6 text-4xl xl:text-5xl font-bold tracking-tight text-stone-50 leading-none">
          {headline}
        </h2>
        <p className="mt-6 text-base text-stone-400 leading-relaxed">{sub}</p>

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
      </div>

      <div className="relative text-xs font-mono text-stone-500">
        free for students. always.
      </div>
    </div>
  );
}
