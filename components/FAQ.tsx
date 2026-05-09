"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is NICHE free to use?",
    answer: "Yes. Completely free for builders to submit products and for professionals to create reviewer profiles. We'll introduce optional paid features for enhanced visibility later.",
  },
  {
    question: "How do you verify that reviewers are real professionals?",
    answer: "Reviewers select their industry and job title during signup. We cross-reference with LinkedIn profiles and our review quality scoring system detects suspicious patterns. Verified professionals who connect their LinkedIn get a verification badge.",
  },
  {
    question: "What kind of products can I submit?",
    answer: "Any app, tool, software, service, or product at any stage — from idea to live. As long as it's built for a specific industry, it belongs on NICHE.",
  },
  {
    question: "I'm not a developer — can I still use NICHE?",
    answer: "Absolutely. If you're building any product for an industry — even a physical tool, a service, or a workflow — NICHE is for you.",
  },
  {
    question: "How is NICHE different from asking on Reddit or LinkedIn?",
    answer: "Reddit and LinkedIn give you random opinions. NICHE gives you structured, verified feedback from professionals who actually work in your target industry — and it lives permanently on your public profile as proof.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-24 lg:py-32 bg-dark-slate">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-[32px] sm:text-[40px] lg:text-[56px] leading-[1.1] tracking-[-0.02em] font-extrabold text-white mb-4">
            Common <span className="gradient-text">Questions</span>
          </h2>
        </motion.div>

        {/* FAQ List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="glass-card rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/[0.02] transition-colors group"
              >
                <span className="font-display font-semibold text-white pr-4 group-hover:text-violet-300 transition-colors">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-5 h-5 text-white/40 flex-shrink-0" />
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <div className="px-6 pb-5">
                      <p className="text-white/60 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
