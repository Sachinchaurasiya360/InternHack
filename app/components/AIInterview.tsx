"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Mic,
  Video,
  MessageSquare,
  BarChart,
  Zap,
  CheckCircle,
} from "lucide-react";

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

export function AIInterview() {
  const features = [
    {
      icon: Video,
      title: "Live Video Analysis",
      description:
        "AI monitors body language, eye contact, and presentation skills in real-time",
    },
    {
      icon: Mic,
      title: "Speech Evaluation",
      description:
        "Get feedback on pace, clarity, filler words, and communication effectiveness",
    },
    {
      icon: MessageSquare,
      title: "Smart Questions",
      description:
        "Adaptive AI asks follow-up questions based on your responses",
    },
    {
      icon: BarChart,
      title: "Detailed Analytics",
      description:
        "Receive comprehensive reports with scores and improvement suggestions",
    },
  ];

  const interviewTypes = [
    {
      type: "Technical Coding",
      duration: "45 min",
      topics: ["Algorithms", "Data Structures", "Problem Solving"],
    },
    {
      type: "System Design",
      duration: "60 min",
      topics: ["Architecture", "Scalability", "Trade-offs"],
    },
    {
      type: "Behavioral",
      duration: "30 min",
      topics: ["Leadership", "Teamwork", "Conflict Resolution"],
    },
    {
      type: "Full Mock Interview",
      duration: "90 min",
      topics: ["All Categories", "Comprehensive Feedback"],
    },
  ];

  const benefits = [
    "Practice anytime, anywhere",
    "Unlimited mock interviews",
    "Instant feedback and scoring",
    "Personalized improvement plans",
    "Track progress over time",
    "Industry-standard questions",
  ];

  return (
    <motion.section
      id="ai-interview"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="py-32 px-6 relative bg-black"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-white/20 text-sm mb-4">
            <Brain className="w-4 h-4 text-white" />
            <span className="text-white">AI-Powered Practice</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white">
            AI Interview{" "}
            <span className="underline decoration-4 underline-offset-8">
              Simulator
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Practice with our advanced AI interviewer that provides real-time
            feedback on your technical and soft skills
          </p>
        </motion.div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              className="border-2 border-white p-6 text-center"
            >
              <feature.icon className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Interview Types & Benefits Split */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Interview Types */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-3xl font-bold text-white mb-8">
              Interview Types
            </h3>
            <div className="space-y-4">
              {interviewTypes.map((interview, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ x: 10 }}
                  className="border-2 border-white p-6 hover:bg-white hover:text-black transition-all group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xl font-bold">{interview.type}</h4>
                    <span className="text-sm px-3 py-1 bg-white text-black group-hover:bg-black group-hover:text-white">
                      {interview.duration}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {interview.topics.map((topic, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 border border-white/20 group-hover:border-black/20"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Benefits */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-3xl font-bold text-white mb-8">
              Why Choose AI Interview?
            </h3>
            <div className="border-2 border-white p-8">
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-6 h-6 text-white shrink-0" />
                    <span className="text-white">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <div className="border-t-2 border-white/20 pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-8 h-8 text-white" />
                  <div>
                    <div className="text-2xl font-bold text-white">4.9/5</div>
                    <div className="text-sm text-gray-400">
                      Average User Rating
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-400">
                  Join 50,000+ candidates who improved their interview skills
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div variants={fadeInUp} className="text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-black text-lg font-semibold hover:bg-gray-200 transition-all inline-flex items-center gap-2"
          >
            Start AI Interview Practice
            <Brain className="w-5 h-5" />
          </motion.button>
          <p className="text-sm text-gray-400 mt-4">
            First 3 sessions free • No credit card required
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
