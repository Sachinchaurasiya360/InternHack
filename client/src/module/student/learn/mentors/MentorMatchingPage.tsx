import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Bell, Users, ArrowUpRight } from "lucide-react";
import { SEO } from "../../../../components/SEO";
import { canonicalUrl } from "../../../../lib/seo.utils";
import toast from "../../../../components/ui/toast";
import { Kicker } from "../../../../../components/ui/Kicker";

export default function MentorMatchingPage() {
  const [email, setEmail] = useState("");

  const handleNotify = () => {
    if (!email.trim()) {
      toast.error("Enter your email to get notified");
      return;
    }
    toast.success("We'll notify you when mentors are available!");
    setEmail("");
  };

  return (
    <div className="bg-stone-50 dark:bg-stone-950 min-h-[calc(100vh-4rem)]">
      <SEO
        title="Mentor Matching — Coming Soon"
        description="Connect with experienced mentors from top tech companies. We're onboarding mentors — check back soon."
        canonicalUrl={canonicalUrl("/learn/mentors")}
      />

      <div className="max-w-3xl mx-auto px-3 sm:px-8 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center"
        >
          <Kicker className="mb-6">learn / mentors</Kicker>

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-none mb-6">
            Mentor Matching{" "}
            <span className="text-lime-500">— Coming Soon</span>
          </h1>

          <p className="text-sm text-stone-600 dark:text-stone-400 max-w-xl mx-auto mb-12 leading-relaxed">
            Connect with experienced engineers from top companies for 1:1 guidance on
            DSA, system design, career strategy, and interview prep.
            We're onboarding mentors — check back soon.
          </p>

          {/* Disabled search bar as placeholder UI */}
          <div className="relative max-w-md mx-auto mb-12">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-300 dark:text-stone-600" />
            <input
              type="text"
              placeholder="Search by name, skill, or company..."
              disabled
              className="w-full pl-11 pr-4 py-3 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md text-sm text-stone-400 dark:text-stone-600 placeholder-stone-300 dark:placeholder-stone-700 cursor-not-allowed"
            />
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-12">
            <span className="flex-1 h-px bg-stone-200 dark:bg-white/10" />
            <span className="text-xs font-mono uppercase tracking-widest text-stone-400">join the waitlist</span>
            <span className="flex-1 h-px bg-stone-200 dark:bg-white/10" />
          </div>

          {/* Waitlist form */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-white dark:bg-stone-900 border border-stone-300 dark:border-white/10 rounded-md focus:outline-none focus:border-lime-400 transition-colors text-sm text-stone-900 dark:text-stone-50 placeholder-stone-400 dark:placeholder-stone-600"
            />
            <button
              onClick={handleNotify}
              className="inline-flex items-center gap-2 px-5 py-3 bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 rounded-md hover:bg-lime-400 hover:text-stone-900 transition-colors text-sm font-medium whitespace-nowrap border-0 cursor-pointer"
            >
              <Bell className="w-4 h-4" />
              Notify Me
            </button>
          </div>
          <p className="text-xs text-stone-400 mt-3">
            No spam. We'll email you once mentors are live.
          </p>
        </motion.div>

        {/* Features preview */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {[
            { icon: Users, title: "1:1 Mentorship", desc: "Personalized guidance from experienced engineers" },
            { icon: Bell, title: "Smart Matching", desc: "Get paired with mentors that match your goals" },
            { icon: ArrowUpRight, title: "Flexible Scheduling", desc: "Book sessions that fit your calendar" },
          ].map((feature) => (
            <div
              key={feature.title}
              className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-5 text-center"
            >
              <div className="w-10 h-10 rounded-md bg-lime-100 dark:bg-lime-900/20 border border-lime-300 dark:border-lime-800 flex items-center justify-center mx-auto mb-3">
                <feature.icon className="w-5 h-5 text-lime-600 dark:text-lime-400" />
              </div>
              <h3 className="text-sm font-bold text-stone-900 dark:text-stone-50 mb-1">{feature.title}</h3>
              <p className="text-xs text-stone-500 dark:text-stone-400">{feature.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
