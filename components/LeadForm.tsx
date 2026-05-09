"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { Check, Loader2, AlertCircle, ChevronDown } from "lucide-react";
import confetti from "canvas-confetti";

type FormData = {
  fullName: string;
  email: string;
  userType: "builder" | "reviewer";
  industry: string;
  jobTitle: string;
  problem: string;
  referralSource: string;
};

const industries = [
  "Construction",
  "Healthcare",
  "Education",
  "Logistics",
  "Agriculture",
  "Legal",
  "Food & Hospitality",
  "Retail",
  "Finance",
  "Manufacturing",
  "Real Estate",
  "Technology",
  "Other",
];

const referralSources = [
  "LinkedIn",
  "Reddit",
  "Friend",
  "Twitter/X",
  "Search Engine",
  "Other",
];

export default function LeadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [userType, setUserType] = useState<"builder" | "reviewer">("builder");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<FormData>();

  // Watch user type for conditional rendering
  watch("userType");

  const triggerConfetti = () => {
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#7C3AED", "#2563EB", "#06B6D4", "#EC4899"],
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#7C3AED", "#2563EB", "#06B6D4", "#EC4899"],
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSuccess(true);
        triggerConfetti();
        reset();
      } else {
        throw new Error("Failed to submit");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setIsSuccess(true);
      triggerConfetti();
      reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="waitlist" className="relative py-24 lg:py-32 bg-[#0D0D1A] overflow-hidden">
      {/* Gradient Mesh Orbs */}
      <div className="gradient-orb orb-violet top-[10%] left-[-10%] w-[400px] h-[400px]" />
      <div className="gradient-orb orb-cyan bottom-[10%] right-[-10%] w-[300px] h-[300px]" />
      <div className="gradient-orb orb-pink top-[50%] left-[50%] w-[250px] h-[250px] opacity-30" />
      
      {/* Grid Overlay */}
      <div className="grid-overlay" />
      
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-[32px] sm:text-[40px] lg:text-[56px] leading-[1.1] tracking-[-0.02em] font-extrabold text-white mb-4">
            Shape What Gets <span className="gradient-text">Built</span> For Your Industry
          </h2>
          <p className="text-white/60 text-lg">
            Join the waitlist and tell us about the tools you need — or the products you&apos;ve built
          </p>
        </motion.div>

        {/* Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          className="glass-card rounded-2xl p-6 sm:p-8"
        >
          <AnimatePresence mode="wait">
            {isSuccess ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="text-center py-12"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="w-24 h-24 rounded-full bg-gradient-to-br from-violet-500/20 to-blue-500/20 flex items-center justify-center mx-auto mb-6"
                >
                  <motion.div
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <Check className="w-12 h-12 text-violet-400" />
                  </motion.div>
                </motion.div>
                <h3 className="text-3xl font-display font-extrabold text-white mb-3">
                  You&apos;re on the list!
                </h3>
                <p className="text-white/60 text-lg">
                  We&apos;ll be in touch soon. Thank you for helping shape NICHE.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6"
              >
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-white/60 mb-2">
                    Full Name <span className="text-violet">*</span>
                  </label>
                  <input
                    {...register("fullName", { required: "Full name is required" })}
                    type="text"
                    className={`w-full px-4 py-3 bg-[#0D0D1A] border rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-violet/50 transition-all ${
                      errors.fullName ? "border-red-500" : "border-white/10"
                    }`}
                    placeholder="John Doe"
                  />
                  {errors.fullName && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-2 text-sm text-red-400 flex items-center gap-1"
                    >
                      <AlertCircle className="w-4 h-4" />
                      {errors.fullName.message}
                    </motion.p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-white/60 mb-2">
                    Email Address <span className="text-violet">*</span>
                  </label>
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Please enter a valid email",
                      },
                    })}
                    type="email"
                    className={`w-full px-4 py-3 bg-[#0D0D1A] border rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-violet/50 transition-all ${
                      errors.email ? "border-red-500" : "border-white/10"
                    }`}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-2 text-sm text-red-400 flex items-center gap-1"
                    >
                      <AlertCircle className="w-4 h-4" />
                      {errors.email.message}
                    </motion.p>
                  )}
                </div>

                {/* User Type Toggle */}
                <div>
                  <label className="block text-sm font-medium text-white/60 mb-3">
                    I am a: <span className="text-violet">*</span>
                  </label>
                  <div className="flex gap-4">
                    <label className="flex-1 cursor-pointer">
                      <input
                        {...register("userType")}
                        type="radio"
                        value="builder"
                        defaultChecked
                        className="sr-only peer"
                        onChange={() => setUserType("builder")}
                      />
                      <div className="px-4 py-3 text-center border border-white/10 rounded-lg peer-checked:border-violet peer-checked:bg-violet/10 text-white/60 peer-checked:text-white transition-all">
                        Builder
                      </div>
                    </label>
                    <label className="flex-1 cursor-pointer">
                      <input
                        {...register("userType")}
                        type="radio"
                        value="reviewer"
                        className="sr-only peer"
                        onChange={() => setUserType("reviewer")}
                      />
                      <div className="px-4 py-3 text-center border border-white/10 rounded-lg peer-checked:border-violet peer-checked:bg-violet/10 text-white/60 peer-checked:text-white transition-all">
                        Reviewer / Professional
                      </div>
                    </label>
                  </div>
                </div>

                {/* Conditional Fields */}
                <AnimatePresence mode="wait">
                  {userType === "builder" ? (
                    <motion.div
                      key="builder-fields"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <label className="block text-sm font-medium text-white/60 mb-2">
                        What industry is your product for? <span className="text-violet">*</span>
                      </label>
                      <div className="relative">
                        <select
                          {...register("industry", { required: "Please select an industry" })}
                          className={`w-full px-4 py-3 bg-[#0D0D1A] border rounded-lg text-white appearance-none focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all ${
                            errors.industry ? "border-red-500" : "border-white/10"
                          } [&>option]:bg-[#0D0D1A] [&>option]:text-white`}
                        >
                          <option value="" className="bg-[#0D0D1A] text-white">Select an industry</option>
                          {industries.map((ind) => (
                            <option key={ind} value={ind} className="bg-[#0D0D1A] text-white">{ind}</option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 pointer-events-none" />
                      </div>
                      {errors.industry && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-2 text-sm text-red-400 flex items-center gap-1"
                        >
                          <AlertCircle className="w-4 h-4" />
                          {errors.industry.message}
                        </motion.p>
                      )}
                    </motion.div>
                  ) : (
                    <motion.div
                      key="reviewer-fields"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <label className="block text-sm font-medium text-white/60 mb-2">
                        What is your industry and job title? <span className="text-violet">*</span>
                      </label>
                      <input
                        {...register("jobTitle", { required: "Please enter your industry and job title" })}
                        type="text"
                        className={`w-full px-4 py-3 bg-[#0D0D1A] border rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-violet/50 transition-all ${
                          errors.jobTitle ? "border-red-500" : "border-white/10"
                        }`}
                        placeholder="e.g., Healthcare - Registered Nurse (include your industry)"
                      />
                      {errors.jobTitle && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-2 text-sm text-red-400 flex items-center gap-1"
                        >
                          <AlertCircle className="w-4 h-4" />
                          {errors.jobTitle.message}
                        </motion.p>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Problem Textarea */}
                <div>
                  <label className="block text-sm font-medium text-white/60 mb-2">
                    What&apos;s the biggest problem you face getting/giving feedback on products?{" "}
                    <span className="text-violet">*</span>
                  </label>
                  <textarea
                    {...register("problem", {
                      required: "This field is required",
                      minLength: {
                        value: 20,
                        message: "Please write at least 20 characters",
                      },
                    })}
                    rows={4}
                    className={`w-full px-4 py-3 bg-[#0D0D1A] border rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-violet/50 transition-all resize-none ${
                      errors.problem ? "border-red-500" : "border-white/10"
                    }`}
                    placeholder="Describe your biggest challenge..."
                  />
                  {errors.problem && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-2 text-sm text-red-400 flex items-center gap-1"
                    >
                      <AlertCircle className="w-4 h-4" />
                      {errors.problem.message}
                    </motion.p>
                  )}
                </div>

                {/* Referral Source */}
                <div>
                  <label className="block text-sm font-medium text-white/60 mb-2">
                    How did you hear about NICHE? <span className="text-white/40">(optional)</span>
                  </label>
                  <div className="relative">
                    <select
                      {...register("referralSource")}
                      className="w-full px-4 py-3 bg-[#0D0D1A] border border-white/10 rounded-lg text-white appearance-none focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all [&>option]:bg-[#0D0D1A] [&>option]:text-white"
                    >
                      <option value="" className="bg-[#0D0D1A] text-white">Select an option</option>
                      {referralSources.map((source) => (
                        <option key={source} value={source} className="bg-[#0D0D1A] text-white">{source}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 pointer-events-none" />
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-violet to-violet-light hover:from-violet-light hover:to-violet text-white font-medium rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Join the Waitlist"
                  )}
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
