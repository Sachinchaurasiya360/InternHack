"use client";

import { motion } from "framer-motion";
import { Rocket, Briefcase, Trophy, Users, Star } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

export function HeroSection() {
  const stats = [
    { label: "Active Hackathons", value: "50+", icon: Trophy },
    { label: "Job Opportunities", value: "5,000+", icon: Briefcase },
    { label: "Registered Users", value: "10K+", icon: Users },
    { label: "Success Stories", value: "500+", icon: Star },
  ];

  return (
    <motion.section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Geometric background pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-black/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gray-900/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-black/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-black/5 rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="space-y-8"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-2 border border-black/20 rounded-full text-sm text-gray-700 bg-white/50 backdrop-blur-sm"
          >
            <span>Next-Gen Career Platform</span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-6xl md:text-8xl font-bold leading-tight text-black"
          >
            Prepare Practice
            <br />
            <span className="text-black underline decoration-4 underline-offset-8">
              Placed
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto"
          >
            Join the ultimate platform connecting talented developers with
            cutting-edge hackathons and dream career opportunities.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-black text-white text-lg font-semibold hover:bg-gray-800 transition-all flex items-center gap-2 rounded-lg"
            >
              Explore Hackathons
              <Rocket className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-black text-black text-lg font-semibold hover:bg-black hover:text-white transition-all flex items-center gap-2 rounded-lg"
            >
              Find Jobs
              <Briefcase className="w-5 h-5" />
            </motion.button>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
          >
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05, y: -5 }}
                className="border border-black/10 bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg"
              >
                <stat.icon className="w-8 h-8 text-black mx-auto mb-2" />
                <div className="text-3xl font-bold text-black">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-black/30 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 bg-black rounded-full" />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
