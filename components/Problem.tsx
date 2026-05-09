"use client";

import { motion } from "framer-motion";
import { Users, DollarSign, ShieldCheck } from "lucide-react";

const problems = [
  {
    icon: Users,
    title: "Generic opinions from people who don't understand your industry",
    description: "Random feedback from non-experts leads to misguided product decisions and wasted development time.",
  },
  {
    icon: DollarSign,
    title: "Too expensive for early-stage builders — G2 and Trustpilot are for big companies",
    description: "Traditional review platforms charge thousands, leaving indie builders without credible social proof.",
  },
  {
    icon: ShieldCheck,
    title: "No way to prove your product works for real professionals",
    description: "Without verified reviews from industry experts, your product lacks the credibility needed to close deals.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
};

export default function Problem() {
  return (
    <section id="problem" className="relative py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-violet-600 tracking-wider uppercase mb-4 block">
            The Problem
          </span>
          <h2 className="font-display text-[32px] sm:text-[40px] lg:text-[56px] leading-[1.1] tracking-[-0.02em] font-extrabold text-text-dark max-w-3xl mx-auto">
            Feedback from the wrong people is worse than no feedback
          </h2>
        </motion.div>

        {/* Problem Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {problems.map((problem) => (
            <motion.div
              key={problem.title}
              variants={itemVariants}
              className="light-card rounded-2xl p-8 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-100 to-blue-100 flex items-center justify-center mb-6 group-hover:from-violet-200 group-hover:to-blue-200 transition-all duration-300">
                <problem.icon className="w-6 h-6 text-violet-600" />
              </div>
              <h3 className="text-xl font-display font-bold text-text-dark mb-4 leading-tight">
                {problem.title}
              </h3>
              <p className="text-text-muted leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
