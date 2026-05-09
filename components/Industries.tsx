"use client";

import { motion } from "framer-motion";
import {
  Building2,
  HeartPulse,
  GraduationCap,
  Truck,
  Wheat,
  Scale,
  Utensils,
  ShoppingCart,
  Banknote,
  Factory,
  Home,
  MoreHorizontal,
} from "lucide-react";

const industries = [
  { icon: Building2, label: "Construction", color: "from-orange-400 to-orange-600" },
  { icon: HeartPulse, label: "Healthcare", color: "from-red-400 to-red-600" },
  { icon: GraduationCap, label: "Education", color: "from-blue-400 to-blue-600" },
  { icon: Truck, label: "Logistics", color: "from-amber-400 to-amber-600" },
  { icon: Wheat, label: "Agriculture", color: "from-green-400 to-green-600" },
  { icon: Scale, label: "Legal", color: "from-slate-400 to-slate-600" },
  { icon: Utensils, label: "Food & Hospitality", color: "from-pink-400 to-pink-600" },
  { icon: ShoppingCart, label: "Retail", color: "from-purple-400 to-purple-600" },
  { icon: Banknote, label: "Finance", color: "from-emerald-400 to-emerald-600" },
  { icon: Factory, label: "Manufacturing", color: "from-gray-400 to-gray-600" },
  { icon: Home, label: "Real Estate", color: "from-cyan-400 to-cyan-600" },
  { icon: MoreHorizontal, label: "More coming soon...", color: "from-violet-400 to-violet-600" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
};

export default function Industries() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#F8FAFC]">
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
            Every Industry. <span className="gradient-text-alt">One Platform.</span>
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Products are reviewed by professionals from the same field — not random internet users
          </p>
        </motion.div>

        {/* Industries Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {industries.map((industry) => (
            <motion.div
              key={industry.label}
              variants={cardVariants}
              whileHover={{ scale: 1.03, y: -6 }}
              className="light-card rounded-xl p-6 cursor-pointer group"
            >
              <div className="flex flex-col items-center text-center gap-3">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${industry.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <industry.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-semibold text-text-dark">
                  {industry.label}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
