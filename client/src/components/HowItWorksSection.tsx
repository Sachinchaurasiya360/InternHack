import { motion } from "framer-motion";
import { UserPlus, Search, FileCheck, Trophy } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Create your account",
    description: "Sign up with email or Google in seconds. Choose your role — student or recruiter.",
  },
  {
    icon: Search,
    title: "Explore opportunities",
    description: "Browse recruiter-posted jobs, external listings, career roadmaps, and companies.",
  },
  {
    icon: FileCheck,
    title: "Score your resume",
    description: "Upload your resume against any job description. AI identifies gaps and suggests fixes.",
  },
  {
    icon: Trophy,
    title: "Land your dream role",
    description: "Apply directly, track applications, and follow guided career paths to level up.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="relative py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50 border border-gray-200 text-xs font-medium text-gray-500 uppercase tracking-wider mb-6">
            How it works
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-gray-950 tracking-tight mb-4">
            Four steps to your
            <br />
            <span className="text-gradient-accent">next opportunity</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-14 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="relative text-center"
            >
              <div className="relative z-10 w-14 h-14 rounded-2xl bg-gray-950 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-gray-950/20">
                <step.icon className="w-6 h-6 text-white" />
                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-indigo-500 text-white text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </div>
              </div>
              <h3 className="font-display text-base font-bold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
