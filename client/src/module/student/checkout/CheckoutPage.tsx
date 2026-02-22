import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  Sparkles,
  Zap,
  Crown,
  Shield,
  Rocket,
  ArrowRight,
  Star,
  Gift,
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
} from "lucide-react";
import api from "../../../lib/axios";
import { useAuthStore } from "../../../lib/auth.store";

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
type PlanKey = "free" | "pro" | "premium";

interface Plan {
  key: PlanKey;
  name: string;
  price: number;
  yearlyPrice: number;
  badge?: string;
  description: string;
  gradient: string;
  iconGradient: string;
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
    gradient: "from-gray-50 to-gray-100",
    iconGradient: "from-gray-600 to-gray-700",
    icon: <Zap className="w-5 h-5" />,
    features: [
      "Browse all public jobs",
      "5 job applications / month",
      "Basic ATS score (3 scans / month)",
      "Career path exploration",
      "View company profiles",
      "Community access",
    ],
  },
  {
    key: "pro",
    name: "Pro",
    price: 469,
    yearlyPrice: 3769,
    badge: "Most Popular",
    description: "Unlock powerful tools to stand out and land your dream internship.",
    gradient: "from-purple-50 to-indigo-50",
    iconGradient: "from-purple-600 to-indigo-600",
    icon: <Rocket className="w-5 h-5" />,
    highlighted: true,
    features: [
      "Everything in Free",
      "Unlimited job applications",
      "Unlimited ATS scans",
      "AI resume improvement tips",
      "Priority application badge",
      "Advanced company search & filters",
      "Open source repo recommendations",
      "Grant deadline notifications",
      "Score history & tracking",
      "Email support",
    ],
  },
  {
    key: "premium",
    name: "Premium",
    price: 969,
    yearlyPrice: 7769,
    badge: "Best Value",
    description: "The ultimate career toolkit for serious job seekers and builders.",
    gradient: "from-amber-50 to-orange-50",
    iconGradient: "from-amber-600 to-orange-600",
    icon: <Crown className="w-5 h-5" />,
    features: [
      "Everything in Pro",
      "1-on-1 career mentorship sessions",
      "AI cover letter generator",
      "Resume templates library",
      "Company insider insights",
      "Interview prep AI assistant",
      "GSoC proposal review",
      "Priority recruiter visibility",
      "Direct company referrals",
      "Dedicated support channel",
    ],
  },
];

const testimonials = [
  { name: "Priya S.", role: "SDE Intern @ Google", text: "The ATS scanner helped me optimize my resume. Got 3 interview calls within a week!", avatar: "P" },
  { name: "Rahul M.", role: "Contributor @ CNCF", text: "Open source discovery feature led me to my first GSoC project. The guidance was invaluable.", avatar: "R" },
  { name: "Ananya K.", role: "Frontend Intern @ Razorpay", text: "Pro plan was the best investment. Unlimited ATS scans literally changed my resume game.", avatar: "A" },
];

const faqs = [
  { q: "Can I cancel anytime?", a: "Yes! You can cancel your subscription at any time. You'll retain access until the end of your billing period." },
  { q: "Is there a student discount?", a: "Our Pro plan is already priced for students. We also offer additional discounts for verified .edu email addresses." },
  { q: "What payment methods do you accept?", a: "We accept all major credit/debit cards, UPI, net banking, and popular wallets through Razorpay." },
  { q: "Can I upgrade or downgrade later?", a: "Absolutely. You can switch plans at any time from your profile settings. Prorated adjustments apply automatically." },
  { q: "Do you offer refunds?", a: "We offer a full refund within the first 7 days if you're not satisfied. No questions asked." },
];

// ─── Component ────────────────────────────────────────────────
export default function CheckoutPage() {
  const { user } = useAuthStore();
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
        description: `${planKey.charAt(0).toUpperCase() + planKey.slice(1)} Plan — ${billing}`,
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
            await api.post("/payments/verify", {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            });
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
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* ── Payment Status Banner ──────────────────── */}
      <AnimatePresence>
        {paymentStatus && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`mb-6 p-4 rounded-xl border text-sm font-medium text-center ${
              paymentStatus === "success"
                ? "bg-emerald-50 border-emerald-200 text-emerald-700"
                : "bg-red-50 border-red-200 text-red-700"
            }`}
          >
            {paymentStatus === "success"
              ? "🎉 Payment successful! Your subscription is now active."
              : "❌ Payment failed. Please try again or contact support."}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Hero ───────────────────────────────────── */}
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-100 text-sm text-purple-700 font-medium mb-6"
        >
          <Sparkles className="w-4 h-4" />
          Upgrade your career toolkit
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-950 tracking-tight mb-4"
        >
          Choose Your{" "}
          <span className="bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
            Plan
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-500 text-lg max-w-xl mx-auto mb-8"
        >
          Unlock unlimited ATS scans, AI-powered insights, priority visibility, and more.
        </motion.p>

        {/* Billing Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="inline-flex items-center gap-1 bg-gray-100 rounded-xl p-1"
        >
          <button
            onClick={() => setBilling("monthly")}
            className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${
              billing === "monthly"
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBilling("yearly")}
            className={`px-5 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
              billing === "yearly"
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Yearly
            <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 text-[10px] font-bold rounded-full border border-emerald-100">
              Save 33%
            </span>
          </button>
        </motion.div>
      </div>

      {/* ── Pricing Cards ─────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-20">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.key}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + i * 0.1 }}
            className={`relative rounded-2xl border p-6 md:p-7 transition-all ${
              plan.highlighted
                ? "border-purple-200 bg-white shadow-lg shadow-purple-100/50 ring-1 ring-purple-100 scale-[1.02]"
                : "border-gray-100 bg-white shadow-sm hover:shadow-md hover:border-gray-200"
            }`}
          >
            {/* Badge */}
            {plan.badge && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className={`px-3 py-1 text-[11px] font-bold uppercase tracking-wider rounded-full shadow-md text-white ${
                  plan.key === "pro"
                    ? "bg-gradient-to-r from-purple-600 to-indigo-600"
                    : "bg-gradient-to-r from-amber-500 to-orange-500"
                }`}>
                  {plan.badge}
                </span>
              </div>
            )}

            {/* Icon + Name */}
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${plan.iconGradient} flex items-center justify-center shadow-sm`}>
                <span className="text-white">{plan.icon}</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">{plan.name}</h3>
              </div>
            </div>

            {/* Price */}
            <div className="mb-4">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-gray-950">
                  {plan.price === 0 ? "Free" : `₹${billing === "monthly" ? plan.price : plan.yearlyPrice}`}
                </span>
                {plan.price > 0 && (
                  <span className="text-sm text-gray-400">
                    /{billing === "monthly" ? "mo" : "yr"}
                  </span>
                )}
              </div>
              {billing === "yearly" && plan.price > 0 && (
                <p className="text-xs text-emerald-600 mt-1 font-medium">
                  Save ₹{plan.price * 12 - plan.yearlyPrice}/year
                </p>
              )}
            </div>

            <p className="text-sm text-gray-500 mb-6 leading-relaxed">{plan.description}</p>

            {/* CTA */}
            <button
              onClick={() => handleSelectPlan(plan.key)}
              disabled={loading !== null}
              className={`w-full py-3 rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-2 mb-6 disabled:opacity-60 disabled:cursor-not-allowed ${
                plan.highlighted
                  ? "bg-gray-950 text-white hover:bg-gray-800 shadow-lg shadow-gray-950/10"
                  : plan.key === "premium"
                    ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600 shadow-lg shadow-amber-200/50"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {loading === plan.key ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : plan.price === 0 ? (
                "Current Plan"
              ) : (
                <>
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            {/* Feature list */}
            <ul className="space-y-2.5">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-gray-600">
                  <Check className={`w-4 h-4 shrink-0 mt-0.5 ${
                    plan.highlighted ? "text-purple-500" : plan.key === "premium" ? "text-amber-500" : "text-gray-400"
                  }`} />
                  {f}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* ── What's Included Breakdown ──────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-950 mb-2">What you unlock with Pro</h2>
          <p className="text-gray-500 text-sm">Tools designed to give you an unfair advantage</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {[
            { icon: <ScanSearch className="w-5 h-5" />, label: "Unlimited ATS", color: "text-purple-600 bg-purple-50" },
            { icon: <Briefcase className="w-5 h-5" />, label: "Unlimited Apply", color: "text-blue-600 bg-blue-50" },
            { icon: <FileText className="w-5 h-5" />, label: "AI Resume Tips", color: "text-emerald-600 bg-emerald-50" },
            { icon: <Building2 className="w-5 h-5" />, label: "Company Search", color: "text-amber-600 bg-amber-50" },
            { icon: <Globe className="w-5 h-5" />, label: "OS Repo Picks", color: "text-indigo-600 bg-indigo-50" },
            { icon: <Map className="w-5 h-5" />, label: "Grant Alerts", color: "text-pink-600 bg-pink-50" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-gray-100 bg-white p-4 text-center hover:shadow-md hover:border-gray-200 transition-all"
            >
              <div className={`w-10 h-10 rounded-lg ${item.color} flex items-center justify-center mx-auto mb-2`}>
                {item.icon}
              </div>
              <p className="text-xs font-medium text-gray-700">{item.label}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── Testimonials ──────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-950 mb-2">Loved by students</h2>
          <p className="text-gray-500 text-sm">See what our users have to say</p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm"
            >
              <div className="flex items-center gap-1 mb-3">
                {Array(5).fill(0).map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 text-white flex items-center justify-center text-sm font-bold">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.role}</p>
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
          { icon: <Gift className="w-4 h-4" />, text: "7-Day Money Back" },
        ].map((badge) => (
          <div key={badge.text} className="flex items-center gap-2 text-xs text-gray-400 font-medium">
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
          <h2 className="text-2xl font-bold text-gray-950 mb-2">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-xl border border-gray-100 bg-white overflow-hidden"
            >
              <button
                onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left text-sm font-medium text-gray-900 hover:bg-gray-50 transition-colors"
              >
                {faq.q}
                <ChevronDown
                  className={`w-4 h-4 text-gray-400 shrink-0 transition-transform ${
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
                    <p className="px-5 pb-4 text-sm text-gray-500 leading-relaxed">{faq.a}</p>
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
        className="relative rounded-3xl bg-gray-950 p-8 md:p-12 text-center overflow-hidden mb-8"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-purple-500/20 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-indigo-500/20 blur-3xl" />
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
