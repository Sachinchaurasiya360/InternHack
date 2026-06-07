import { useState, useEffect, useRef, useCallback } from "react";
import { Navigate, useNavigate } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  Wand2,
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
  Map,
  Briefcase,
  Loader2,
  Code2,
  Database,
  Brain,
  ShieldCheck,
  GitPullRequest,
  Award,
  Crown,
} from "lucide-react";
import { DodoPayments } from "dodopayments-checkout";
import api from "../../../lib/axios";
import { useAuthStore } from "../../../lib/auth.store";
import { SEO } from "../../../components/SEO";

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
      "Open source repo discovery (paginated)",
      "GSoC org browser",
      "First PR & Git guides",
      "3 repo suggestions / month",
      "Community access",
    ],
  },
  {
    key: "pro",
    name: "Pro",
    price: 249,
    yearlyPrice: 2499,
    badge: "Most Popular",
    description: "Unlock every tool to stand out and land your dream internship.",
    icon: <Rocket className="w-5 h-5" />,
    highlighted: true,
    features: [
      "Everything in Free",
      "Unlimited job applications",
      "Unlimited ATS scans & AI tips",
      "LaTeX resume editor & cover letters",
      "Full DSA practice (all topics, companies, patterns)",
      "SQL practice environment",
      "Aptitude practice (topic-wise + company-wise)",
      "Proctored skill verification tests",
      "Career roadmaps with progress tracking",
      "Open source full analytics & contribution trends",
      "GSoC proposal builder & program tracker",
      "Unlimited repo suggestions",
      "OSS portfolio page with custom URL",
      "Good first issues live feed (unlimited)",
      "Streak freeze tokens",
      "Weekly digest email",
      "Priority leaderboard placement",
      "Certificate with verified badge URL",
      "Advanced company search (YC + local)",
      "Public shareable profile",
      "Priority application badge",
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
  { q: "Is there a student discount?", a: "Our Pro plan is already priced for students at just ₹249/month. We also offer additional discounts for verified .edu email addresses." },
  { q: "What payment methods do you accept?", a: "We accept all major credit/debit cards, UPI, net banking, and popular wallets through our secure payment partner." },
  { q: "Can I upgrade or downgrade later?", a: "Absolutely. You can switch plans at any time from your profile settings. Prorated adjustments apply automatically." },
];

const HOW_IT_WORKS = [
  { step: "01", title: "Choose your plan", desc: "Pick monthly or yearly billing. Yearly saves you 25%." },
  { step: "02", title: "Pay securely", desc: "Cards, UPI, net banking, all options supported." },
  { step: "03", title: "Unlock everything instantly", desc: "All Pro features activate immediately after payment." },
];

const FEATURE_TILES = [
  { icon: <ScanSearch className="w-4 h-4" />, label: "Unlimited ATS Scans" },
  { icon: <Briefcase className="w-4 h-4" />, label: "Unlimited Apply" },
  { icon: <FileText className="w-4 h-4" />, label: "LaTeX Resume Editor" },
  { icon: <Wand2 className="w-4 h-4" />, label: "AI Cover Letter" },
  { icon: <Code2 className="w-4 h-4" />, label: "Full DSA Practice" },
  { icon: <Database className="w-4 h-4" />, label: "SQL Practice" },
  { icon: <Brain className="w-4 h-4" />, label: "Aptitude Practice" },
  { icon: <ShieldCheck className="w-4 h-4" />, label: "Skill Verification" },
  { icon: <GitPullRequest className="w-4 h-4" />, label: "OSS Analytics" },
  { icon: <Map className="w-4 h-4" />, label: "Career Roadmaps" },
  { icon: <Award className="w-4 h-4" />, label: "Grant Alerts" },
  { icon: <Building2 className="w-4 h-4" />, label: "YC Company Search" },
  { icon: <Star className="w-4 h-4" />, label: "Leaderboard Boost" },
  { icon: <Crown className="w-4 h-4" />, label: "Verified Certificate" },
];

export default function CheckoutPage() {
  const { user, setUser } = useAuthStore();
  const navigate = useNavigate();

  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [loading, setLoading] = useState<PlanKey | null>(null);
  const [paymentStatus, setPaymentStatus] = useState<"success" | "failed" | null>(null);
  const dodoInitialized = useRef(false);

  const pollSubscription = useCallback(async () => {
    for (let i = 0; i < 10; i++) {
      await new Promise((r) => setTimeout(r, 2000));
      try {
        const { data } = await api.get("/auth/me");
        const profile = data.user ?? data;
        if (profile.subscriptionStatus === "ACTIVE" && profile.subscriptionPlan !== "FREE") {
          if (user) {
            setUser({
              ...user,
              subscriptionPlan: profile.subscriptionPlan,
              subscriptionStatus: profile.subscriptionStatus,
              subscriptionEndDate: profile.subscriptionEndDate,
            });
          }
          navigate("/student/dashboard", { replace: true });
          return;
        }
      } catch {
        // ignore polling errors
      }
    }
  }, [user, setUser, navigate]);

  useEffect(() => {
    if (dodoInitialized.current) return;
    dodoInitialized.current = true;

    const mode = import.meta.env.VITE_DODO_MODE === "live" ? "live" : "test";

    DodoPayments.Initialize({
      mode,
      displayType: "overlay",
      onEvent: (event) => {
        if (event.event_type === "checkout.status") {
          const status = (event.data?.message as { status?: string })?.status;
          if (status === "succeeded") {
            setPaymentStatus("success");
            setLoading(null);
            pollSubscription();
          } else if (status === "failed") {
            setPaymentStatus("failed");
            setLoading(null);
          }
        }
        if (event.event_type === "checkout.closed") {
          DodoPayments.Checkout.close();
          setLoading(null);
        }
      },
    });
  }, [pollSubscription]);

  useEffect(() => {
    return () => {
      DodoPayments.Checkout.close();
    };
  }, []);

  if (user?.subscriptionStatus === "ACTIVE" && user.subscriptionPlan !== "FREE") {
    return <Navigate to="/student/profile" replace />;
  }

  const handleSelectPlan = async (planKey: PlanKey) => {
    if (planKey === "free") return;

    setLoading(planKey);
    setPaymentStatus(null);

    try {
      const { data } = await api.post("/payments/create-checkout", { plan: planKey, billing });

      if (!data.checkoutUrl) throw new Error("No checkout URL returned");

      DodoPayments.Checkout.open({ checkoutUrl: data.checkoutUrl });
    } catch {
      setPaymentStatus("failed");
      setLoading(null);
    }
  };

  return (
    <div className="relative pb-16">
      <SEO title="Upgrade to Pro" noIndex />

      {/* Background */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-160 h-160 bg-lime-100 dark:bg-lime-900/10 rounded-full blur-3xl opacity-30" />
        <div className="absolute -bottom-40 -left-40 w-140 h-140 bg-stone-100 dark:bg-stone-900/30 rounded-full blur-3xl opacity-40" />
      </div>

      {/* Payment status banner */}
      <AnimatePresence>
        {paymentStatus && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            className={`mb-6 px-4 py-3 rounded-md border text-[11px] font-mono uppercase tracking-widest text-center ${
              paymentStatus === "success"
                ? "bg-lime-50 dark:bg-lime-900/20 border-lime-300 dark:border-lime-700 text-lime-800 dark:text-lime-400"
                : "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-red-700 dark:text-red-400"
            }`}
          >
            {paymentStatus === "success"
              ? "Payment successful — your subscription is now active"
              : "Payment failed. Please try again or contact support."}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-12 mt-6"
      >
        <p className="text-[10px] font-mono uppercase tracking-widest text-stone-400 dark:text-stone-500 mb-3">
          / pricing
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-stone-950 dark:text-white mb-3">
          One plan.{" "}
          <span className="text-lime-500 dark:text-lime-400">Everything unlocked.</span>
        </h1>
        <p className="text-base text-stone-500 dark:text-stone-400 max-w-lg mx-auto mb-8">
          Unlimited ATS scans, DSA practice, skill tests, AI tools, and more — for less than a coffee a week.
        </p>

        {/* Billing toggle */}
        <div className="inline-flex items-center gap-0.5 bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-1">
          <button
            onClick={() => setBilling("monthly")}
            className={`px-5 py-2 rounded text-sm font-medium transition-all ${
              billing === "monthly"
                ? "bg-stone-950 dark:bg-white text-white dark:text-stone-950 shadow-sm"
                : "text-stone-500 dark:text-stone-400 hover:text-stone-700 dark:hover:text-stone-200"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBilling("yearly")}
            className={`px-5 py-2 rounded text-sm font-medium transition-all flex items-center gap-2 ${
              billing === "yearly"
                ? "bg-stone-950 dark:bg-white text-white dark:text-stone-950 shadow-sm"
                : "text-stone-500 dark:text-stone-400 hover:text-stone-700 dark:hover:text-stone-200"
            }`}
          >
            Yearly
            <span className="px-1.5 py-0.5 bg-lime-400 text-stone-950 text-[10px] font-bold rounded-sm tracking-wide">
              -25%
            </span>
          </button>
        </div>
      </motion.div>

      {/* Pricing cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-20 max-w-3xl mx-auto">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.key}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.1 }}
            className={`relative rounded-md border p-6 transition-all ${
              plan.highlighted
                ? "bg-stone-950 dark:bg-stone-950 border-stone-700 dark:border-white/20"
                : "bg-white dark:bg-stone-900 border-stone-200 dark:border-white/10 hover:border-stone-300 dark:hover:border-white/20"
            }`}
          >
            {/* Badge */}
            {plan.badge && (
              <div className="absolute -top-3 left-6">
                <span className="px-2.5 py-1 text-[10px] font-bold font-mono uppercase tracking-widest rounded-sm bg-lime-400 text-stone-950">
                  {plan.badge}
                </span>
              </div>
            )}

            {/* Icon + name */}
            <div className="flex items-center gap-3 mb-5">
              <div className={`w-9 h-9 rounded-sm flex items-center justify-center ${
                plan.highlighted
                  ? "bg-lime-400 text-stone-950"
                  : "bg-stone-100 dark:bg-stone-800 text-stone-500 dark:text-stone-400"
              }`}>
                {plan.icon}
              </div>
              <h3 className={`text-lg font-bold ${plan.highlighted ? "text-white" : "text-stone-900 dark:text-white"}`}>
                {plan.name}
              </h3>
            </div>

            {/* Price */}
            <div className="mb-5">
              <div className="flex items-baseline gap-1">
                <span className={`text-5xl font-bold tabular-nums ${plan.highlighted ? "text-white" : "text-stone-950 dark:text-white"}`}>
                  {plan.price === 0 ? "₹0" : `₹${billing === "monthly" ? plan.price : plan.yearlyPrice}`}
                </span>
                {plan.price > 0 && (
                  <span className={`text-sm ${plan.highlighted ? "text-stone-400" : "text-stone-400"}`}>
                    /{billing === "monthly" ? "mo" : "yr"}
                  </span>
                )}
              </div>
              {billing === "yearly" && plan.price > 0 && (
                <p className="text-xs text-lime-400 mt-1 font-medium">
                  Save ₹{plan.price * 12 - plan.yearlyPrice} vs monthly
                </p>
              )}
            </div>

            <p className={`text-sm mb-6 leading-relaxed ${plan.highlighted ? "text-stone-400" : "text-stone-500 dark:text-stone-400"}`}>
              {plan.description}
            </p>

            {/* CTA */}
            <button
              onClick={() => handleSelectPlan(plan.key)}
              disabled={loading !== null}
              className={`w-full py-2.5 rounded-sm text-sm font-bold transition-all flex items-center justify-center gap-2 mb-6 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer ${
                plan.highlighted
                  ? "bg-lime-400 text-stone-950 hover:bg-lime-300"
                  : "bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700"
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
                <li key={f} className={`flex items-start gap-2.5 text-sm ${plan.highlighted ? "text-stone-300" : "text-stone-600 dark:text-stone-400"}`}>
                  <Check className={`w-4 h-4 shrink-0 mt-0.5 ${plan.highlighted ? "text-lime-400" : "text-stone-400 dark:text-stone-500"}`} />
                  {f}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* How it works */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <p className="text-[10px] font-mono uppercase tracking-widest text-stone-400 dark:text-stone-500 mb-6 text-center">
          / how it works
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-3xl mx-auto">
          {HOW_IT_WORKS.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-white dark:bg-stone-900 rounded-md border border-stone-200 dark:border-white/10 p-5"
            >
              <p className="text-[10px] font-mono text-lime-500 dark:text-lime-400 mb-3 tracking-widest">
                {item.step}
              </p>
              <h3 className="text-sm font-bold text-stone-900 dark:text-white mb-1">{item.title}</h3>
              <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Feature tiles */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <div className="text-center mb-8">
          <p className="text-[10px] font-mono uppercase tracking-widest text-stone-400 dark:text-stone-500 mb-2">
            / what you unlock
          </p>
          <h2 className="text-2xl font-bold text-stone-950 dark:text-white">Everything in Pro</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 max-w-4xl mx-auto">
          {FEATURE_TILES.map((item) => (
            <div
              key={item.label}
              className="rounded-md border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 p-4 flex items-center gap-3 hover:border-stone-300 dark:hover:border-white/20 transition-colors"
            >
              <div className="w-8 h-8 rounded-sm bg-lime-50 dark:bg-lime-400/10 text-lime-600 dark:text-lime-400 flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <p className="text-xs font-medium text-stone-700 dark:text-stone-300 leading-snug">{item.label}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Testimonials */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <div className="text-center mb-8">
          <p className="text-[10px] font-mono uppercase tracking-widest text-stone-400 dark:text-stone-500 mb-2">
            / students
          </p>
          <h2 className="text-2xl font-bold text-stone-950 dark:text-white">Loved by students</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-3 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-white dark:bg-stone-900 rounded-md border border-stone-200 dark:border-white/10 p-5"
            >
              <div className="flex items-center gap-0.5 mb-3">
                {Array(5).fill(0).map((_, j) => (
                  <Star key={j} className="w-3 h-3 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-sm text-stone-600 dark:text-stone-400 mb-4 leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-sm bg-stone-950 dark:bg-white text-white dark:text-stone-900 flex items-center justify-center text-xs font-bold shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-stone-900 dark:text-white">{t.name}</p>
                  <p className="text-xs text-stone-400 dark:text-stone-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Trust badges */}
      <div className="flex flex-wrap items-center justify-center gap-6 mb-16">
        {[
          { icon: <Shield className="w-3.5 h-3.5" />, text: "SSL Encrypted" },
          { icon: <Lock className="w-3.5 h-3.5" />, text: "Secure Payments" },
          { icon: <CreditCard className="w-3.5 h-3.5" />, text: "Dodo Payments" },
        ].map((badge) => (
          <div key={badge.text} className="flex items-center gap-1.5 text-xs font-mono text-stone-400 dark:text-stone-500">
            {badge.icon}
            {badge.text}
          </div>
        ))}
      </div>

      {/* FAQ */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto mb-20"
      >
        <div className="text-center mb-8">
          <p className="text-[10px] font-mono uppercase tracking-widest text-stone-400 dark:text-stone-500 mb-2">
            / faq
          </p>
          <h2 className="text-2xl font-bold text-stone-950 dark:text-white">Common questions</h2>
        </div>

        <div className="divide-y divide-stone-200 dark:divide-white/10 border border-stone-200 dark:border-white/10 rounded-md overflow-hidden">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white dark:bg-stone-900">
              <button
                onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left text-sm font-medium text-stone-900 dark:text-white hover:bg-stone-50 dark:hover:bg-stone-800/50 transition-colors cursor-pointer"
              >
                {faq.q}
                <ChevronDown
                  className={`w-4 h-4 text-stone-400 shrink-0 transition-transform ${expandedFaq === i ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {expandedFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-4 text-sm text-stone-500 dark:text-stone-400 leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative rounded-md bg-stone-950 dark:bg-stone-950 border border-stone-800 p-8 md:p-12 text-center overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-lime-400/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-lime-400/5 blur-3xl" />
        </div>
        <div className="relative z-10">
          <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-3">/ get started</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Ready to supercharge your career?
          </h2>
          <p className="text-stone-400 text-sm max-w-md mx-auto mb-7">
            Join thousands of students using InternHack to land internships, build portfolios, and grow their careers.
          </p>
          <button
            onClick={() => handleSelectPlan("pro")}
            disabled={loading !== null}
            className="inline-flex items-center gap-2 px-7 py-3 bg-lime-400 text-stone-950 font-bold rounded-sm hover:bg-lime-300 transition-colors text-sm disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
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
