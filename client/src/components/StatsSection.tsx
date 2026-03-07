import { motion } from "framer-motion";
import { Users, Briefcase, Map, Building2 } from "lucide-react";

const items = [
  { icon: Users, value: "2,500+", label: "Students" },
  { icon: Briefcase, value: "150+", label: "Active Jobs" },
  { icon: Map, value: "8+", label: "Career Roadmaps" },
  { icon: Building2, value: "60+", label: "Companies" },
];

export function StatsSection() {
  return (
    <section className="relative py-16 bg-white dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="text-center"
            >
              <div className="w-12 h-12 rounded-2xl bg-gray-950 dark:bg-white flex items-center justify-center mx-auto mb-3">
                <item.icon className="w-5 h-5 text-white dark:text-gray-950" />
              </div>
              <div className="font-display text-3xl font-bold text-gray-950 dark:text-white mb-1">
                {item.value}
              </div>
              <div className="text-sm text-gray-400 dark:text-gray-500 font-medium">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
