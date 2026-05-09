import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Stripe Color System
        violet: {
          DEFAULT: "#7C3AED",
          light: "#8B5CF6",
          dark: "#6D28D9",
        },
        accent: {
          DEFAULT: "#7C3AED",
          blue: "#2563EB",
          cyan: "#06B6D4",
          pink: "#EC4899",
        },
        // Section Backgrounds
        hero: "#0D0D1A",
        "dark-slate": "#0F172A",
        "soft-gray": "#F8FAFC",
        footer: "#0A0A0F",
        // Text
        "text-dark": "#0F172A",
        "text-muted": "#64748B",
      },
      fontFamily: {
        display: ["var(--font-display)", "Plus Jakarta Sans", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "DM Sans", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "float": "floatStripe 3s ease-in-out infinite",
        "orb-float-1": "orbFloat1 15s ease-in-out infinite",
        "orb-float-2": "orbFloat2 12s ease-in-out infinite",
        "orb-float-3": "orbFloat3 18s ease-in-out infinite",
        "orb-float-4": "orbFloat4 10s ease-in-out infinite",
        "ticker": "ticker 30s linear infinite",
        "shimmer": "shimmer 3s infinite",
        "gradient-shimmer": "gradientShimmer 8s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(50px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        floatStripe: {
          "0%, 100%": { transform: "translateY(-12px)" },
          "50%": { transform: "translateY(12px)" },
        },
        orbFloat1: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "25%": { transform: "translate(50px, -50px) scale(1.1)" },
          "50%": { transform: "translate(0, -100px) scale(1)" },
          "75%": { transform: "translate(-50px, -50px) scale(0.9)" },
        },
        orbFloat2: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(-80px, 60px) scale(1.15)" },
          "66%": { transform: "translate(40px, -40px) scale(0.95)" },
        },
        orbFloat3: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(60px, 80px) scale(1.2)" },
        },
        orbFloat4: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "25%": { transform: "translate(-40px, -60px) scale(1.1)" },
          "75%": { transform: "translate(60px, 40px) scale(0.9)" },
        },
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        gradientShimmer: {
          "0%, 100%": { transform: "translateX(-100%)" },
          "50%": { transform: "translateX(100%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
