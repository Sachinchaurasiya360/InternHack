import { useState } from "react";
import { Navigate } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  Sparkles,
  Zap,
  Shield,
  Rocket,
  ArrowRight,
  Star,
  CreditCard,
  Lock,
  ChevronDown,
  FileText,
  ScanSearch,
  Building2,
  Globe,
  Map,
  Briefcase,
  Loader2,
  Code2,
  Database,
  Brain,
  ShieldCheck,
  GitPullRequest,
  Award,
} from "lucide-react";
import api from "../../../lib/axios";
import { useAuthStore } from "../../../lib/auth.store";
import { SEO } from "../../../components/SEO";

// ─── Razorpay type declaration ────────────────────────────────
declare global {
  interface Window {
    Razorpay: new (options: Record<string, unknown>) => {
      open: () => void;
      on: (event: string, handler: (response: unknown) => void) => void;
    };
  }
}

// ─── Load Razorpay script ─────────────────────────────────────
function loadRazorpayScript(): Promise<boolean> {
  return new Promise((resolve) => {
    if (document.getElementById("razorpay-script")) {
      resolve(true);
      return;
    }
    const script = document.createElement("script");
    script.id = "razorpay-script";
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

// ─── Plan Data ────────────────────────────────────────────────
type PlanKey = "free" | "pro";

interface Plan {
  key: PlanKey;
  name: string;
  price: number;
  yearlyPrice: number;
  badge?: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  highlighted?: boolean;
}

const plans: Plan[] = [
  {
    key: "free",
    name: "Free",
    price: 0,
    yearlyPrice: 0,
    description: "Get started with the essentials to explore your career path.",
    icon: <Zap className="w-5 h-5" />,
    features: [
      "Browse all public jobs",
      "5 job applications / month",
      "Basic ATS score (3 scans / month)",
      "Career path exploration",
      "View company profiles",
      "DSA practice (limited topics)",
      "Community access",
    ],
  },
  {
    key: "pro",
    name: "Pro",
    price: 333,
    yearlyPrice: 2999,
    badge: "Most Popular",
    description: "Unlock every tool to stand out and land your dream internship.",
    icon: <Rocket className="w-5 h-5" />,
    highlighted: true,
    features: [
      "Everything in Free",
      "Unlimited job applications",
      "Unlimited ATS scans & AI tips",
      "LaTeX resume editor",
      "AI cover letter generator",
      "Full DSA practice (all topics, companies, patterns)",
      "SQL practice environment",
      "Aptitude practice (topic-wise + company-wise)",
      "Proctored skill verification tests",
      "Open source repo discovery & analytics",
      "First PR roadmap & GSoC guides",
      "Career roadmaps with progress tracking",
      "Grant & scholarship alerts",
      "Advanced company search (YC + local)",
      "Public shareable profile",
      "Priority application badge",
      "Score history & tracking",
      "Email support",
    ],
  },
];

const testimonials = [
  { name: "Priya S.", role: "SDE Intern @ Google", text: "The ATS scanner helped me optimize my resume. Got 3 interview calls within a week!", avatar: "P" },
  { name: "Rahul M.", role: "Contributor @ CNCF", text: "Open source discovery feature led me to my first GSoC project. The guidance was invaluable.", avatar: "R" },
  { name: "Ananya K.", role: "Frontend Intern @ Razorpay", text: "Pro plan was the best investment. The DSA practice and skill tests helped me crack interviews.", avatar: "A" },
];

const faqs = [
  { q: "Can I cancel anytime?", a: "Yes! You can cancel your subscription at any time. You'll retain access until the end of your billing period." },
  { q: "Is there a student discount?", a: "Our Pro plan is already priced for students at just ₹333/month. We also offer additional discounts for verified .edu email addresses." },
  { q: "What payment methods do you accept?", a: "We accept all major credit/debit cards, UPI, net banking, and popular wallets through Razorpay." },
  { q: "Can I upgrade or downgrade later?", a: "Absolutely. You can switch plans at any time from your profile settings. Prorated adjustments apply automatically." },
];

// ─── How it works steps ───────────────────────────────────────
const HOW_IT_WORKS = [
  {
    step: "1",
    title: "Choose your plan",
    desc: "Pick monthly or yearly billing. Yearly saves you 25%.",
  },
  {
    step: "2",
    title: "Pay securely via Razorpay",
    desc: "UPI, cards, net banking - all options supported.",
  },
  {
    step: "3",
    title: "Unlock everything instantly",
    desc: "All Pro features activate immediately after payment.",
  },
];

// ─── Component ────────────────────────────────────────────────
export default function CheckoutPage() {
  const { user, setUser } = useAuthStore();

  // Redirect premium users - they already have an active subscription
  if (user?.subscriptionStatus === "ACTIVE" && user.subscriptionPlan !== "FREE") {
    return <Navigate to="/student/profile" replace />;
  }

  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [loading, setLoading] = useState<PlanKey | null>(null);
  const [paymentStatus, setPaymentStatus] = useState<"success" | "failed" | null>(null);

  const handleSelectPlan = async (planKey: PlanKey) => {
    if (planKey === "free") return;

    setLoading(planKey);
    setPaymentStatus(null);

    try {
      // 1. Load Razorpay script
      const scriptLoaded = await loadRazorpayScript();
      if (!scriptLoaded) {
        throw new Error("Failed to load Razorpay. Check your internet connection.");
      }

      // 2. Create order on backend
      const { data } = await api.post("/payments/create-order", {
        plan: planKey,
        billing,
      });

      // 3. Open Razorpay checkout
      const options = {
        key: data.keyId,
        amount: data.amount,
        currency: data.currency,
        name: "InternHack",
        description: `${planKey.charAt(0).toUpperCase() + planKey.slice(1)} Plan - ${billing}`,
        order_id: data.orderId,
        prefill: {
          name: user?.name || "",
          email: user?.email || "",
        },
        theme: {
          color: "#111827",
        },
        handler: async (response: { razorpay_order_id: string; razorpay_payment_id: string; razorpay_signature: string }) => {
          try {
            // 4. Verify payment on backend
            const { data: verifyData } = await api.post("/payments/verify", {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            });
            // 5. Update auth store with new subscription info
            if (verifyData.subscription && user) {
              setUser({
                ...user,
                subscriptionPlan: verifyData.subscription.subscriptionPlan,
                subscriptionStatus: verifyData.subscription.subscriptionStatus,
                subscriptionEndDate: verifyData.subscription.subscriptionEndDate,
              });
            }
            setPaymentStatus("success");
          } catch {
            setPaymentStatus("failed");
          } finally {
            setLoading(null);
          }
        },
        modal: {
          ondismiss: () => {
            setLoading(null);
          },
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.on("payment.failed", () => {
        setPaymentStatus("failed");
        setLoading(null);
      });
      rzp.open();
    } catch {
      setPaymentStatus("failed");
      setLoading(null);
    }
  };

  return (
    <div className="relative pb-12">
      <SEO title="Upgrade to Pro" noIndex />

      {/* Atmospheric background */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-150 h-150 bg-indigo-100 dark:bg-indigo-900/20 rounded-full blur-3xl opacity-40" />
        <div className="absolute -bottom-32 -left-32 w-125 h-125 bg-slate-100 dark:bg-slate-900/20 rounded-full blur-3xl opacity-40" />
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* ── Payment Status Banner ──────────────────── */}
      <AnimatePresence>
        {paymentStatus && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`mb-6 p-4 rounded-2xl border text-sm font-medium text-center ${
              paymentStatus === "success"
                ? "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 text-green-700 dark:text-green-400"
                : "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-red-700 dark:text-red-400"
            }`}
          >
            {paymentStatus === "success"
              ? "Payment successful! Your subscription is now active."
              : "Payment failed. Please try again or contact support."}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Hero ───────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-10 mt-6"
      >
        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-gray-950 dark:text-white mb-3">
          Upgrade to <span className="text-gradient-accent">Pro</span>
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-500 max-w-xl mx-auto mb-8">
          Unlock unlimited ATS scans, DSA practice, skill tests, AI tools, and more.
        </p>

        {/* Billing Toggle */}
        <div className="inline-flex items-center gap-1 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-1.5">
          <button
            onClick={() => setBilling("monthly")}
            className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
              billing === "monthly"
                ? "bg-gray-950 dark:bg-white text-white dark:text-gray-950 shadow-sm"
                : "text-gray-500 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBilling("yearly")}
            className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all flex items-center gap-2 ${
              billing === "yearly"
                ? "bg-gray-950 dark:bg-white text-white dark:text-gray-950 shadow-sm"
                : "text-gray-500 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            }`}
          >
            Yearly
            <span className="px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-[10px] font-bold rounded-full">
              Save 25%
            </span>
          </button>
        </div>
      </motion.div>

      {/* ── Pricing Cards ─────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16 max-w-3xl mx-auto">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.key}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + i * 0.1 }}
            className={`relative bg-white dark:bg-gray-900 rounded-2xl border p-6 md:p-7 transition-all ${
              plan.highlighted
                ? "border-indigo-200 dark:border-indigo-800 shadow-lg shadow-indigo-100/50 dark:shadow-indigo-900/20 ring-1 ring-indigo-100 dark:ring-indigo-800"
                : "border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md hover:border-gray-200 dark:hover:border-gray-700"
            }`}
          >
            {/* Badge */}
            {plan.badge && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider rounded-full shadow-md bg-gray-950 dark:bg-white text-white dark:text-gray-950">
                  {plan.badge}
                </span>
              </div>
            )}

            {/* Icon + Name */}
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                plan.highlighted
                  ? "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400"
              }`}>
                {plan.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">{plan.name}</h3>
            </div>

            {/* Price */}
            <div className="mb-4">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-gray-950 dark:text-white">
                  {plan.price === 0 ? "Free" : `₹${billing === "monthly" ? plan.price : plan.yearlyPrice}`}
                </span>
                {plan.price > 0 && (
                  <span className="text-sm text-gray-400 dark:text-gray-500">
                    /{billing === "monthly" ? "mo" : "yr"}
                  </span>
                )}
              </div>
              {billing === "yearly" && plan.price > 0 && (
                <p className="text-xs text-green-600 dark:text-green-400 mt-1 font-medium">
                  Save ₹{plan.price * 12 - plan.yearlyPrice}/year
                </p>
              )}
            </div>

            <p className="text-sm text-gray-500 dark:text-gray-500 mb-6 leading-relaxed">{plan.description}</p>

            {/* CTA */}
            <button
              onClick={() => handleSelectPlan(plan.key)}
              disabled={loading !== null}
              className={`w-full py-3 rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-2 mb-6 disabled:opacity-60 disabled:cursor-not-allowed ${
                plan.highlighted
                  ? "bg-gray-950 dark:bg-white text-white dark:text-gray-950 hover:bg-gray-800 dark:hover:bg-gray-200 shadow-lg shadow-gray-950/10 dark:shadow-white/10"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {loading === plan.key ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : plan.price === 0 ? (
                "Current Plan"
              ) : (
                <>
                  Get Pro
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            {/* Feature list */}
            <ul className="space-y-2.5">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-gray-600 dark:text-gray-400">
                  <Check className={`w-4 h-4 shrink-0 mt-0.5 ${
                    plan.highlighted ? "text-indigo-500" : "text-gray-400 dark:text-gray-500"
                  }`} />
                  {f}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* ── How It Works (Guidance) ─────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-6 text-center">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {HOW_IT_WORKS.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-5 text-center"
            >
              <div className="w-10 h-10 rounded-full bg-gray-950 dark:bg-white text-white dark:text-gray-950 flex items-center justify-center text-sm font-bold mx-auto mb-3">
                {item.step}
              </div>
              <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-1">{item.title}</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ── What's Included Breakdown ──────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-950 dark:text-white mb-2">What you unlock with Pro</h2>
          <p className="text-gray-500 dark:text-gray-500 text-sm">Tools designed to give you an unfair advantage</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-w-4xl mx-auto">
          {[
            { icon: <ScanSearch className="w-5 h-5" />, label: "Unlimited ATS Scans", color: "text-purple-600 bg-purple-50 dark:text-purple-400 dark:bg-purple-900/30" },
            { icon: <Briefcase className="w-5 h-5" />, label: "Unlimited Apply", color: "text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-900/30" },
            { icon: <FileText className="w-5 h-5" />, label: "LaTeX Resume Editor", color: "text-emerald-600 bg-emerald-50 dark:text-emerald-400 dark:bg-emerald-900/30" },
            { icon: <Sparkles className="w-5 h-5" />, label: "AI Cover Letter", color: "text-violet-600 bg-violet-50 dark:text-violet-400 dark:bg-violet-900/30" },
            { icon: <Code2 className="w-5 h-5" />, label: "Full DSA Practice", color: "text-cyan-600 bg-cyan-50 dark:text-cyan-400 dark:bg-cyan-900/30" },
            { icon: <Database className="w-5 h-5" />, label: "SQL Practice", color: "text-orange-600 bg-orange-50 dark:text-orange-400 dark:bg-orange-900/30" },
            { icon: <Brain className="w-5 h-5" />, label: "Aptitude Practice", color: "text-rose-600 bg-rose-50 dark:text-rose-400 dark:bg-rose-900/30" },
            { icon: <ShieldCheck className="w-5 h-5" />, label: "Skill Verification", color: "text-teal-600 bg-teal-50 dark:text-teal-400 dark:bg-teal-900/30" },
            { icon: <GitPullRequest className="w-5 h-5" />, label: "Open Source Tools", color: "text-pink-600 bg-pink-50 dark:text-pink-400 dark:bg-pink-900/30" },
            { icon: <Map className="w-5 h-5" />, label: "Career Roadmaps", color: "text-amber-600 bg-amber-50 dark:text-amber-400 dark:bg-amber-900/30" },
            { icon: <Award className="w-5 h-5" />, label: "Grant Alerts", color: "text-indigo-600 bg-indigo-50 dark:text-indigo-400 dark:bg-indigo-900/30" },
            { icon: <Building2 className="w-5 h-5" />, label: "YC Company Search", color: "text-gray-600 bg-gray-100 dark:text-gray-400 dark:bg-gray-800" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-4 text-center hover:shadow-md hover:border-gray-200 dark:hover:border-gray-700 transition-all"
            >
              <div className={`w-10 h-10 rounded-xl ${item.color} flex items-center justify-center mx-auto mb-2`}>
                {item.icon}
              </div>
              <p className="text-xs font-medium text-gray-700 dark:text-gray-300">{item.label}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── Testimonials ──────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-950 dark:text-white mb-2">Loved by students</h2>
          <p className="text-gray-500 dark:text-gray-500 text-sm">See what our users have to say</p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-6 shadow-sm"
            >
              <div className="flex items-center gap-1 mb-3">
                {Array(5).fill(0).map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 flex items-center justify-center text-sm font-bold">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">{t.name}</p>
                  <p className="text-xs text-gray-400 dark:text-gray-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ── Trust Badges ──────────────────────────── */}
      <div className="flex flex-wrap items-center justify-center gap-6 mb-16">
        {[
          { icon: <Shield className="w-4 h-4" />, text: "SSL Encrypted" },
          { icon: <Lock className="w-4 h-4" />, text: "Secure Payments" },
          { icon: <CreditCard className="w-4 h-4" />, text: "Razorpay Powered" },
        ].map((badge) => (
          <div key={badge.text} className="flex items-center gap-2 text-xs text-gray-400 dark:text-gray-500 font-medium">
            {badge.icon}
            {badge.text}
          </div>
        ))}
      </div>

      {/* ── FAQ ────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto mb-16"
      >
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-950 dark:text-white mb-2">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden"
            >
              <button
                onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left text-sm font-medium text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                {faq.q}
                <ChevronDown
                  className={`w-4 h-4 text-gray-400 dark:text-gray-500 shrink-0 transition-transform ${
                    expandedFaq === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {expandedFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-4 text-sm text-gray-500 dark:text-gray-500 leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── Bottom CTA ────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative rounded-2xl bg-gray-950 dark:bg-gray-900 border border-gray-800 p-8 md:p-12 text-center overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-indigo-500/20 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-violet-500/20 blur-3xl" />
        </div>
        <div className="relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Ready to supercharge your career?
          </h2>
          <p className="text-gray-400 text-sm max-w-md mx-auto mb-6">
            Join thousands of students using InternHack to land internships, build portfolios, and grow their careers.
          </p>
          <button
            onClick={() => handleSelectPlan("pro")}
            disabled={loading !== null}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-gray-950 font-semibold rounded-xl hover:bg-gray-100 transition-all shadow-lg text-sm disabled:opacity-60"
          >
            {loading === "pro" ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <>
                Get Pro Now
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </motion.div>
    </div>
  );
}
