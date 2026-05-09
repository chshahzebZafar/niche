"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const platforms = ["NICHE", "Product Hunt", "Trustpilot", "G2"];

const features = [
  {
    name: "Reviewers are verified professionals in your industry",
    niche: true,
    productHunt: false,
    trustpilot: false,
    g2: false,
  },
  {
    name: "Built for early stage products (idea to beta)",
    niche: true,
    productHunt: true,
    trustpilot: false,
    g2: false,
  },
  {
    name: "Free for indie builders",
    niche: true,
    productHunt: true,
    trustpilot: false,
    g2: false,
  },
  {
    name: "Structured feedback by category",
    niche: true,
    productHunt: false,
    trustpilot: false,
    g2: true,
  },
  {
    name: "Embeddable review widget",
    niche: true,
    productHunt: false,
    trustpilot: true,
    g2: true,
  },
  {
    name: "Public reviewer professional profile",
    niche: true,
    productHunt: false,
    trustpilot: false,
    g2: false,
  },
];

export default function Comparison() {
  return (
    <section className="relative py-24 lg:py-32 bg-white">
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
            Not Another <span className="gradient-text">Generic</span> Review Platform
          </h2>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          className="overflow-x-auto"
        >
          <table className="w-full min-w-[800px]">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-4 px-4 text-text-muted font-medium">Feature</th>
                {platforms.map((platform) => (
                  <th
                    key={platform}
                    className={`text-center py-4 px-4 font-display text-lg font-bold ${
                      platform === "NICHE" ? "text-violet-600" : "text-text-dark"
                    }`}
                  >
                    {platform}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <motion.tr
                  key={feature.name}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors"
                >
                  <td className="py-4 px-4 text-text-dark font-medium">{feature.name}</td>
                  <td className="py-4 px-4 text-center">
                    {feature.niche ? (
                      <div className="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center mx-auto">
                        <Check className="w-5 h-5 text-violet-600" />
                      </div>
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mx-auto">
                        <X className="w-5 h-5 text-gray-400" />
                      </div>
                    )}
                  </td>
                  <td className="py-4 px-4 text-center">
                    {feature.productHunt ? (
                      <Check className="w-5 h-5 text-gray-500 mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-gray-300 mx-auto" />
                    )}
                  </td>
                  <td className="py-4 px-4 text-center">
                    {feature.trustpilot ? (
                      <Check className="w-5 h-5 text-gray-500 mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-gray-300 mx-auto" />
                    )}
                  </td>
                  <td className="py-4 px-4 text-center">
                    {feature.g2 ? (
                      <Check className="w-5 h-5 text-gray-500 mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-gray-300 mx-auto" />
                    )}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
