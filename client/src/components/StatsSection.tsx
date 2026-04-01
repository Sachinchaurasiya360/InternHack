import { motion } from "framer-motion";
import { Users, Briefcase, Map, Building2 } from "lucide-react";

const items = [
  {
    icon: Users,
    value: "25,000+",
    label: "Students",
    accent: "from-indigo-500/12 to-transparent",
  },
  {
    icon: Briefcase,
    value: "150+",
    label: "Active Jobs",
    accent: "from-emerald-500/12 to-transparent",
  },
  {
    icon: Map,
    value: "8+",
    label: "Career Roadmaps",
    accent: "from-amber-500/12 to-transparent",
  },
  {
    icon: Building2,
    value: "60+",
    label: "Companies",
    accent: "from-rose-500/12 to-transparent",
  },
];

export function StatsSection() {
  return (
    <section className="relative py-16 bg-white dark:bg-[#030303] overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-indigo-500/5 via-transparent to-rose-500/5 blur-3xl dark:block hidden" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white/80 px-5 py-6 text-center shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg group-hover:shadow-gray-200/60 dark:border-white/10 dark:bg-white/[0.03] dark:group-hover:shadow-white/5">
                <div className={`absolute inset-0 bg-linear-to-br ${item.accent} opacity-80`} />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-gray-950 dark:bg-white flex items-center justify-center mx-auto mb-3 shadow-sm">
                    <item.icon className="w-5 h-5 text-white dark:text-gray-950" />
                  </div>
                  <div className="font-display text-3xl font-bold text-gray-950 dark:text-white mb-1">
                    {item.value}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-white/40 font-medium">{item.label}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
