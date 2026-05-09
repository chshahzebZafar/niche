"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 2000, suffix: "+", label: "Verified Professionals" },
  { value: 500, suffix: "+", label: "Products Submitted" },
  { value: 15, suffix: "+", label: "Industries Covered" },
];

const industries = [
  "Construction", "Healthcare", "Education", "Logistics", "Agriculture",
  "Legal", "Finance", "Manufacturing", "Real Estate", "Retail"
];

function CountUp({ end, suffix, duration = 2000 }: { end: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

const avatars = [
  { bg: "bg-violet-500", initials: "JD" },
  { bg: "bg-cyan-500", initials: "MK" },
  { bg: "bg-pink-500", initials: "AL" },
];

export default function SocialProof() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden gradient-section">
      {/* Shimmer overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent w-[200%] animate-gradient-shimmer" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-[32px] sm:text-[40px] lg:text-[56px] leading-[1.1] tracking-[-0.02em] font-extrabold text-white mb-4">
            Built on Real Professional <span className="text-cyan-300">Credibility</span>
          </h2>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center"
            >
              <div className="text-[72px] sm:text-[96px] lg:text-[120px] font-display font-extrabold text-white leading-none mb-2">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-lg text-white/80 font-medium">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Avatars */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex justify-center mb-12"
        >
          <div className="flex -space-x-3">
            {avatars.map((avatar, i) => (
              <div
                key={i}
                className={`w-14 h-14 rounded-full ${avatar.bg} border-4 border-white/20 flex items-center justify-center text-white font-bold text-lg`}
              >
                {avatar.initials}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Industry Ticker */}
        <div className="overflow-hidden py-4 border-t border-b border-white/10">
          <div className="ticker flex whitespace-nowrap">
            {[...industries, ...industries].map((industry, i) => (
              <span key={i} className="text-xl text-white/60 mx-8 font-medium">
                {industry} <span className="text-white/30">·</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
