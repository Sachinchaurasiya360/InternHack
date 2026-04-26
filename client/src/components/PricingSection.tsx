import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Crown, X } from "lucide-react";
import { useNavigate } from "react-router";
import { useAuthStore } from "../lib/auth.store";
import NumberFlow from "@number-flow/react";
import { cn } from "@/lib/utils";

type BillingPlan = "monthly" | "annually";

interface PlanData {
  id: string;
  title: string;
  desc: string;
  monthlyPrice: number;
  annuallyPrice: number;
  priceSuffix: string;
  features: { text: string; included: boolean }[];
  buttonText: string;
  highlighted?: boolean;
  badge?: { text: string; icon: typeof Crown; color: string; shadow: string };
  onAction: () => void;
  checkColor: string;
  btnClass: string;
}

export function PricingSection() {
  const navigate = useNavigate();
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  const [billPlan, setBillPlan] = useState<BillingPlan>("monthly");

  const handleGetPro = () => {
    navigate(isAuthenticated ? "/student/checkout" : "/login");
  };

  const plans: PlanData[] = [
    {
      id: "free",
      title: "Free",
      desc: "Get started with essential features",
      monthlyPrice: 0,
      annuallyPrice: 0,
      priceSuffix: "/forever",
      features: [
        { text: "Browse job listings", included: true },
        { text: "Basic career roadmaps", included: true },
        { text: "1 ATS resume scan per day", included: true },
        { text: "Company explorer", included: true },
        { text: "Core subject interview prep", included: false },
        { text: "Unlimited ATS scans", included: false },
        { text: "Mini projects & exercises", included: false },
        { text: "Priority job recommendations", included: false },
      ],
      buttonText: "Sign Up Free",
      onAction: () => navigate("/register"),
      checkColor: "text-stone-500 dark:text-stone-400",
      btnClass:
        "bg-stone-100 dark:bg-white/10 text-stone-900 dark:text-white/90 hover:bg-stone-200 dark:hover:bg-white/15 border border-stone-200 dark:border-white/10",
    },
    {
      id: "pro",
      title: "Pro",
      desc: "Full access to all premium features",
      monthlyPrice: 249,
      annuallyPrice: 2999,
      priceSuffix: "",
      features: [
        { text: "Everything in Free plan", included: true },
        { text: "Unlimited ATS scans & AI tips", included: true },
        { text: "LaTeX resume editor & cover letters", included: true },
        { text: "Full DSA, SQL & aptitude practice", included: true },
        { text: "Proctored skill verification tests", included: true },
        { text: "Career roadmaps with progress tracking", included: true },
        { text: "Open source tools & GSoC guides", included: true },
        { text: "Priority job recommendations", included: true },
      ],
      buttonText: "Get Pro",
      highlighted: true,
      badge: {
        text: "Recommended",
        icon: Crown,
        color: "bg-lime-400 text-stone-950",
        shadow: "shadow-lime-400/30",
      },
      onAction: handleGetPro,
      checkColor: "text-lime-600 dark:text-lime-400",
      btnClass: "bg-stone-900 dark:bg-white text-white dark:text-stone-900 hover:bg-stone-800 dark:hover:bg-stone-100",
    },
  ];

  return (
    <section className="relative py-24 md:py-32 bg-stone-50 dark:bg-stone-950 border-t border-stone-200 dark:border-white/10">
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-500 mb-6">
            <span className="h-1.5 w-1.5 bg-lime-400" />
            pricing
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-none">
            Free to start.{" "}
            <span className="text-stone-400 dark:text-stone-600">
              ₹249 to win.
            </span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-stone-600 dark:text-stone-400 max-w-xl mx-auto leading-relaxed">
            Use the core stack forever for zero. Unlock the AI-heavy workflows
            when you are ready to sprint.
          </p>
        </motion.div>

        {/* Billing toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="flex items-center justify-center gap-4 mb-14"
        >
          <span
            className={cn(
              "text-sm font-medium transition-colors",
              billPlan === "monthly" ? "text-gray-900 dark:text-white" : "text-gray-400 dark:text-white/40"
            )}
          >
            Monthly
          </span>
          <button
            onClick={() =>
              setBillPlan((p) => (p === "monthly" ? "annually" : "monthly"))
            }
            role="switch"
            aria-checked={billPlan === "annually"}
            aria-label="Toggle billing frequency"
            className={cn(
              "relative w-12 h-6 rounded-full transition-colors cursor-pointer border-0",
              billPlan === "annually"
                ? "bg-lime-400"
                : "bg-stone-300 dark:bg-white/20"
            )}
          >
            <span
              className={cn(
                "absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition-transform duration-300",
                billPlan === "annually" && "translate-x-6"
              )}
            />
          </button>
          <span
            className={cn(
              "text-sm font-medium transition-colors",
              billPlan === "annually" ? "text-gray-900 dark:text-white" : "text-gray-400 dark:text-white/40"
            )}
          >
            Annually
            <span className="ml-1.5 text-xs text-emerald-400 font-semibold">
              Save 25%
            </span>
          </span>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <motion.div
                whileHover={{ y: -4 }}
                className={cn(
                  "relative rounded-2xl h-full flex flex-col transition-all",
                  plan.highlighted
                    ? "border-2 border-lime-400/50 shadow-2xl shadow-lime-400/10 bg-white dark:bg-stone-900"
                    : "border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900"
                )}
              >
                {plan.highlighted && (
                  <div className="absolute top-1/2 inset-x-0 mx-auto h-12 w-full bg-lime-400/40 rounded-2xl blur-3xl -z-10" />
                )}

                {/* Badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
                    <span
                      className={cn(
                        "inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-white text-xs font-semibold shadow-lg",
                        plan.badge.color,
                        plan.badge.shadow
                      )}
                    >
                      <plan.badge.icon className="w-3.5 h-3.5" />
                      {plan.badge.text}
                    </span>
                  </div>
                )}

                {/* Header + Price */}
                <div className="p-6 md:p-8 pb-0">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                    {plan.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-white/40 mb-4">{plan.desc}</p>

                  <div className="flex items-baseline gap-1 mb-2">
                    {plan.id === "free" ? (
                      <>
                        <span className="text-sm font-medium text-gray-400 dark:text-white/40">
                          ₹
                        </span>
                        <span className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
                          0
                        </span>
                        <span className="text-sm font-medium text-gray-400 dark:text-white/40">
                          /forever
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
                          <NumberFlow
                            value={
                              billPlan === "monthly"
                                ? plan.monthlyPrice
                                : plan.annuallyPrice
                            }
                            format={{
                              style: "currency",
                              currency: "INR",
                              minimumFractionDigits: 0,
                              maximumFractionDigits: 0,
                            }}
                          />
                        </span>
                        <AnimatePresence mode="wait">
                          <motion.span
                            key={billPlan}
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -10, opacity: 0 }}
                            transition={{ duration: 0.15 }}
                            className="text-sm font-medium text-gray-400 dark:text-white/40"
                          >
                            /{billPlan === "monthly" ? "mo" : "yr"}
                          </motion.span>
                        </AnimatePresence>
                      </>
                    )}
                  </div>
                </div>

                {/* Button + billing note */}
                <div className="px-6 md:px-8 pt-4 pb-2">
                  <button
                    onClick={plan.onAction}
                    className={cn(
                      "block w-full text-center py-3.5 px-6 rounded-xl text-sm font-semibold transition-all cursor-pointer border-0",
                      plan.btnClass
                    )}
                  >
                    {plan.buttonText}
                  </button>
                  {plan.id !== "free" && (
                    <div className="h-7 overflow-hidden w-full">
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={billPlan}
                          initial={{ y: 16, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -16, opacity: 0 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="text-xs text-center text-gray-400 dark:text-white/30 mt-2 block"
                        >
                          {billPlan === "monthly"
                            ? "Billed monthly"
                            : "Billed in one annual payment"}
                        </motion.span>
                      </AnimatePresence>
                    </div>
                  )}
                </div>

                {/* Features */}
                <div className="px-6 md:px-8 pt-4 pb-8 flex-1">
                  <span className="text-xs font-medium text-gray-500 dark:text-white/50 uppercase tracking-wider mb-3 block">
                    Includes
                  </span>
                  <ul className="space-y-2.5">
                    {plan.features.map((f) => (
                      <li key={f.text} className="flex items-start gap-2.5">
                        {f.included ? (
                          <Check
                            className={cn(
                              "w-4 h-4 mt-0.5 shrink-0",
                              plan.checkColor
                            )}
                          />
                        ) : (
                          <X className="w-4 h-4 mt-0.5 shrink-0 text-gray-300 dark:text-white/20" />
                        )}
                        <span
                          className={cn(
                            "text-sm",
                            f.included ? "text-gray-600 dark:text-white/60" : "text-gray-300 dark:text-white/25"
                          )}
                        >
                          {f.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
