"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, Users2, FileText, UserCircle, Search, Award } from "lucide-react";

const tabs = [
  { id: "builders", label: "For Builders" },
  { id: "reviewers", label: "For Reviewers" },
];

const builderSteps = [
  {
    icon: Upload,
    number: "01",
    title: "Submit Your Product",
    description: "Add your app, describe who it's for, what stage it's at",
  },
  {
    icon: Users2,
    number: "02",
    title: "Get Matched With Professionals",
    description: "Industry-verified professionals in your target field discover and try your product",
  },
  {
    icon: FileText,
    number: "03",
    title: "Receive Structured Public Feedback",
    description: "Get detailed reviews with ratings by category. Share your profile link as proof of real-world validation.",
  },
];

const reviewerSteps = [
  {
    icon: UserCircle,
    number: "01",
    title: "Create Your Expert Profile",
    description: "Select your industry, job title, years of experience",
  },
  {
    icon: Search,
    number: "02",
    title: "Discover Products Built For Your World",
    description: "Browse submissions from your specific industry",
  },
  {
    icon: Award,
    number: "03",
    title: "Build Your Professional Reputation",
    description: "Your public reviews become a credibility profile. Share it on LinkedIn.",
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

const stepVariants = {
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

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState("builders");
  const steps = activeTab === "builders" ? builderSteps : reviewerSteps;

  return (
    <section id="builders" className="relative py-24 lg:py-32 bg-dark-slate section-diagonal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-[32px] sm:text-[40px] lg:text-[56px] leading-[1.1] tracking-[-0.02em] font-extrabold text-white mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Simple steps to connect builders with industry professionals
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex p-1 bg-white/5 rounded-xl border border-white/10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-6 py-3 text-sm font-semibold rounded-lg transition-all duration-300 ${
                  activeTab === tab.id
                    ? "text-white"
                    : "text-white/50 hover:text-white"
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTabHowItWorks"
                    className="absolute inset-0 bg-gradient-to-r from-violet-600 to-blue-600 rounded-lg"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Steps */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: -20 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                variants={stepVariants}
                className="relative"
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px bg-gradient-to-r from-violet-500/30 to-transparent" />
                )}
                
                <div className="glass-card rounded-2xl p-8 h-full cursor-pointer">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/20 to-blue-500/20 flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-violet-400" />
                    </div>
                    <span className="text-4xl font-display font-extrabold text-white/10">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-xl font-display font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
