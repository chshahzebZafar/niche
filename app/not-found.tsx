"use client";

import Link from "next/link";
import { Diamond, ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0D0D1A] text-white flex items-center justify-center relative overflow-hidden">
      {/* Gradient Orbs Background */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] rounded-full bg-violet-600/30 blur-[80px] animate-orb-float-1" />
      <div className="absolute bottom-[-50px] right-[20%] w-[300px] h-[300px] rounded-full bg-blue-600/20 blur-[80px] animate-orb-float-2" />
      <div className="absolute top-[30%] right-[-50px] w-[250px] h-[250px] rounded-full bg-cyan-500/20 blur-[80px] animate-orb-float-3" />
      
      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        {/* 404 Number */}
        <h1 className="font-display text-[120px] sm:text-[180px] lg:text-[220px] font-extrabold leading-none mb-4">
          <span className="gradient-text">404</span>
        </h1>

        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <Diamond className="w-8 h-8 text-violet-500" />
          <span className="font-display text-2xl font-bold">NICHE</span>
        </div>

        {/* Message */}
        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
          Page Not Found
        </h2>
        <p className="text-white/60 text-lg max-w-md mx-auto mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-600 to-blue-600 text-white font-semibold rounded-lg hover:scale-105 transition-transform"
            style={{ boxShadow: "0 4px 20px rgba(124, 58, 237, 0.4)" }}
          >
            <Home className="w-5 h-5" />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 px-6 py-3 bg-transparent border border-white/30 text-white font-semibold rounded-lg hover:bg-white/5 hover:border-white transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="mt-12 flex items-center justify-center gap-8 text-white/20 text-sm">
          <span>Construction</span>
          <span>·</span>
          <span>Healthcare</span>
          <span>·</span>
          <span>Education</span>
          <span>·</span>
          <span>Tech</span>
        </div>
      </div>
    </div>
  );
}
