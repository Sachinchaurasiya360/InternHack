import { motion } from "framer-motion";
import { Check, Sparkles, Crown, X } from "lucide-react";
import { useNavigate } from "react-router";
import { useAuthStore } from "../lib/auth.store";

const freePlanFeatures = [
  { text: "Browse job listings", included: true },
  { text: "Basic career roadmaps", included: true },
  { text: "1 ATS resume scan per day", included: true },
  { text: "Company explorer", included: true },
  { text: "Core subject interview prep", included: false },
  { text: "Unlimited ATS scans", included: false },
  { text: "Mini projects & exercises", included: false },
  { text: "Priority job recommendations", included: false },
];

const proPlanFeatures = [
  { text: "Everything in Free plan", included: true },
  { text: "Unlimited ATS resume scans", included: true },
  { text: "All career roadmaps with progress tracking", included: true },
  { text: "Core subject interview preparation", included: true },
  { text: "Mini projects & practice exercises", included: true },
  { text: "Priority job recommendations", included: true },
  { text: "Ad-free experience", included: true },
  { text: "Early access to new features", included: true },
];

export function PricingSection() {
  const navigate = useNavigate();
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);

  const handleGetPro = () => {
    if (isAuthenticated) {
      navigate("/student/checkout");
    } else {
      navigate("/login");
    }
  };

  return (
    <section className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-linear-to-br from-indigo-50 to-violet-50 rounded-full blur-3xl opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50 border border-gray-200 text-xs font-medium text-gray-500 uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            Pricing
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-gray-950 tracking-tight mb-4">
            Invest in your
            <br />
            <span className="text-gradient-accent">career growth</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Unlock premium features to accelerate your placement preparation and stand out from the crowd.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Free Plan */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              whileHover={{ y: -4 }}
              className="relative rounded-2xl p-8 h-full flex flex-col bg-white border border-gray-200 hover:border-gray-300 hover:shadow-xl hover:shadow-gray-200/50 transition-all"
            >
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-1">Free</h3>
                <p className="text-sm text-gray-500">Get started with essential features</p>
              </div>

              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-sm font-medium text-gray-500">₹</span>
                <span className="text-5xl font-bold tracking-tight text-gray-950">0</span>
                <span className="text-sm font-medium text-gray-500">/forever</span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {freePlanFeatures.map((feature) => (
                  <li key={feature.text} className="flex items-start gap-3">
                    {feature.included ? (
                      <Check className="w-4 h-4 mt-0.5 shrink-0 text-green-500" />
                    ) : (
                      <X className="w-4 h-4 mt-0.5 shrink-0 text-gray-300" />
                    )}
                    <span className={`text-sm ${feature.included ? "text-gray-600" : "text-gray-400"}`}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => navigate("/register")}
                className="block w-full text-center py-3.5 px-6 rounded-xl text-sm font-semibold transition-all bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-pointer border-0"
              >
                Sign Up Free
              </button>
            </motion.div>
          </motion.div>

          {/* Pro Monthly Plan */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <motion.div
              whileHover={{ y: -4 }}
              className="relative rounded-2xl p-8 h-full flex flex-col bg-gray-950 text-white border-2 border-gray-800 shadow-2xl shadow-gray-950/20 transition-all"
            >
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-indigo-500 text-white text-xs font-semibold shadow-lg shadow-indigo-500/30">
                  <Crown className="w-3.5 h-3.5" />
                  Recommended
                </span>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-bold text-white mb-1">Pro</h3>
                <p className="text-sm text-gray-400">Full access to all premium features</p>
              </div>

              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-sm font-medium text-gray-400">₹</span>
                <span className="text-5xl font-bold tracking-tight text-white">333</span>
                <span className="text-sm font-medium text-gray-400">/month</span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {proPlanFeatures.map((feature) => (
                  <li key={feature.text} className="flex items-start gap-3">
                    <Check className="w-4 h-4 mt-0.5 shrink-0 text-indigo-400" />
                    <span className="text-sm text-gray-300">{feature.text}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={handleGetPro}
                className="block w-full text-center py-3.5 px-6 rounded-xl text-sm font-semibold transition-all bg-white text-gray-950 hover:bg-gray-100 cursor-pointer border-0"
              >
                Get Pro
              </button>
            </motion.div>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-sm text-gray-400 mt-8"
        >
          No hidden fees. Cancel anytime. All prices inclusive of GST.
        </motion.p>
      </div>
    </section>
  );
}
