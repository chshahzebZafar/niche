"use client";

import { motion } from "framer-motion";
import { ChevronDown, Star, BadgeCheck } from "lucide-react";

// Floating Review Card Component
const FloatingCard = ({
  className,
  delay = 0,
  rotation = 0,
  children,
}: {
  className?: string;
  delay?: number;
  rotation?: number;
  children: React.ReactNode;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8, y: 50 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ delay: 0.9 + delay, duration: 0.6, type: "spring", stiffness: 100 }}
    className={`absolute glass-card rounded-xl p-4 ${className}`}
    style={{ ["--rotation" as string]: `${rotation}deg` }}
  >
    <div className="float-card" style={{ ["--duration" as string]: `${3 + delay}s` }}>
      {children}
    </div>
  </motion.div>
);

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0D0D1A]">
      {/* Gradient Mesh Orbs */}
      <div className="gradient-orb orb-violet top-[-100px] left-[-100px]" />
      <div className="gradient-orb orb-blue bottom-[-50px] right-[20%]" />
      <div className="gradient-orb orb-cyan top-[30%] right-[-50px]" />
      <div className="gradient-orb orb-pink bottom-[20%] left-[30%]" />
      
      {/* Grid Overlay */}
      <div className="grid-overlay" />
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 items-center">
          
          {/* Left Side - Content (60%) */}
          <div className="lg:col-span-3">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/80">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Now accepting founding reviewers
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="font-display text-[44px] sm:text-[56px] lg:text-[80px] leading-[1.1] tracking-[-0.03em] font-extrabold text-white mb-6"
            >
              Get Feedback From People Who Actually{" "}
              <span className="gradient-text">Live In Your Industry</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="text-lg sm:text-xl text-white/60 max-w-xl mb-8 font-body"
            >
              Stop guessing if your product works. Get structured reviews from verified
              construction workers, nurses, engineers, teachers — the real professionals
              your product is built for.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="flex flex-col sm:flex-row items-start gap-4 mb-8"
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection("#waitlist")}
                className="relative overflow-hidden px-7 py-3.5 bg-gradient-to-r from-violet-600 to-blue-600 text-white font-semibold rounded-lg text-base"
                style={{ boxShadow: "0 4px 20px rgba(124, 58, 237, 0.4)" }}
              >
                <span className="relative z-10">Submit Your Product</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: ["-200%", "200%"] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03, borderColor: "white", backgroundColor: "rgba(255,255,255,0.08)" }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection("#waitlist")}
                className="px-7 py-3.5 bg-transparent border-[1.5px] border-white/30 text-white font-semibold rounded-lg text-base transition-all duration-300"
              >
                Join as Reviewer
              </motion.button>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="flex items-center gap-4"
            >
              <div className="flex -space-x-2">
                {[
                  { bg: "bg-violet-500", initials: "JD" },
                  { bg: "bg-emerald-500", initials: "MK" },
                  { bg: "bg-blue-500", initials: "AL" },
                  { bg: "bg-cyan-500", initials: "SR" },
                  { bg: "bg-pink-500", initials: "TP" },
                ].map((avatar, i) => (
                  <div
                    key={i}
                    className={`w-10 h-10 rounded-full ${avatar.bg} border-2 border-[#0D0D1A] flex items-center justify-center text-xs text-white font-bold`}
                  >
                    {avatar.initials}
                  </div>
                ))}
              </div>
              <p className="text-sm text-white/50">
                <span className="text-white font-semibold">200+</span> builders and professionals on the waitlist
              </p>
            </motion.div>
          </div>

          {/* Right Side - Floating Cards (40%) */}
          <div className="lg:col-span-2 relative h-[400px] lg:h-[500px] hidden lg:block">
            {/* Card 1 - Top Left */}
            <FloatingCard
              className="top-0 left-0 w-64"
              delay={0}
              rotation={-8}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">
                  JM
                </div>
                <div>
                  <p className="text-sm text-white font-semibold">James M.</p>
                  <p className="text-xs text-emerald-400 flex items-center gap-1">
                    <BadgeCheck className="w-3 h-3" />
                    Site Manager
                  </p>
                </div>
              </div>
              <div className="flex gap-0.5 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-violet-500 text-violet-500" />
                ))}
              </div>
              <p className="text-sm text-white/60">
                &ldquo;Finally a construction app that understands site workflows...&rdquo;
              </p>
            </FloatingCard>

            {/* Card 2 - Center */}
            <FloatingCard
              className="top-[35%] left-[10%] w-60"
              delay={0.5}
              rotation={3}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">
                  SM
                </div>
                <div>
                  <p className="text-sm text-white font-semibold">Sarah M.</p>
                  <p className="text-xs text-emerald-400">ICU Nurse, 8 yrs</p>
                </div>
              </div>
              <div className="flex gap-0.5 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-violet-500 text-violet-500" />
                ))}
              </div>
              <p className="text-sm text-white/60">
                &ldquo;This healthcare tool actually gets clinical needs...&rdquo;
              </p>
            </FloatingCard>

            {/* Card 3 - Bottom Right */}
            <FloatingCard
              className="bottom-[5%] right-0 w-64"
              delay={1}
              rotation={-3}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-600 to-slate-500 flex items-center justify-center text-white text-sm font-bold">
                  AR
                </div>
                <div>
                  <p className="text-sm text-white font-semibold">Ahmad R.</p>
                  <p className="text-xs text-emerald-400 flex items-center gap-1">
                    <BadgeCheck className="w-3 h-3" />
                    Civil Engineer
                  </p>
                </div>
              </div>
              <div className="flex gap-0.5 mb-2">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-violet-500 text-violet-500" />
                ))}
                <Star className="w-4 h-4 text-white/20" />
              </div>
              <p className="text-sm text-white/60">
                &ldquo;Great engineering app for structural calculations.&rdquo;
              </p>
            </FloatingCard>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <button
          onClick={() => scrollToSection("#problem")}
          className="p-2 text-white/40 hover:text-white transition-colors"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </button>
      </motion.div>
    </section>
  );
}
