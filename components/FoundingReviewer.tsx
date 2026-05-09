"use client";

import { motion } from "framer-motion";
import { Award, Eye, FileText } from "lucide-react";

const benefits = [
  {
    icon: Award,
    title: "Permanent Founding Reviewer Badge",
    description: "on your public profile forever",
  },
  {
    icon: Eye,
    title: "Early Access to Products",
    description: "see new tools before anyone in your industry",
  },
  {
    icon: FileText,
    title: "Your Name in Our Credits",
    description: "listed as someone who helped shape NICHE",
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

const cardVariants = {
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

export default function FoundingReviewer() {
  const scrollToForm = () => {
    const element = document.querySelector("#waitlist");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="reviewers" className="relative py-24 lg:py-32 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-[32px] sm:text-[40px] lg:text-[56px] leading-[1.1] tracking-[-0.02em] font-extrabold text-text-dark mb-4">
            Become a <span className="gradient-text">Founding Reviewer</span>
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Join an exclusive group of professionals shaping the future of industry-specific product development
          </p>
        </motion.div>

        {/* Benefits */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.title}
              variants={cardVariants}
              className="light-card rounded-2xl p-8 text-center cursor-pointer group"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-100 to-blue-100 flex items-center justify-center mx-auto mb-6 group-hover:from-violet-200 group-hover:to-blue-200 transition-all duration-300">
                <benefit.icon className="w-7 h-7 text-violet-600" />
              </div>
              <h3 className="text-xl font-display font-bold text-text-dark mb-2">
                {benefit.title}
              </h3>
              <p className="text-text-muted">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={scrollToForm}
            className="relative overflow-hidden px-8 py-4 bg-gradient-to-r from-violet-600 to-blue-600 text-white font-semibold rounded-lg"
            style={{ boxShadow: "0 4px 20px rgba(124, 58, 237, 0.4)" }}
          >
            <span className="relative z-10">Apply as Founding Reviewer</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
