"use client";

import React from "react";
import { Leaf } from "lucide-react";
import { motion } from "framer-motion";

// Brand Colors
const BRAND_ACCENT_LIGHT = "#fdcc14"; // Gold
const BRAND_NATURE_GREEN = "#0e6b50"; // Deep Forest Green

export default function AboutHero() {
  return (
    <section
      className="relative overflow-hidden py-28 md:py-40 lg:py-52 text-white"
      style={{
        background: `linear-gradient(135deg, ${BRAND_NATURE_GREEN} 0%, #14532d 50%, #0a3d29 100%)`,
      }}
    >
      {/* Decorative background accents */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1.5 }}
      >
        {/* Radial gradient glow - yellow */}
        <motion.div
          className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full opacity-30 blur-3xl"
          style={{
            background: `radial-gradient(circle, ${BRAND_ACCENT_LIGHT}, transparent 70%)`,
          }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Radial gradient glow - green */}
        <motion.div
          className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full opacity-20 blur-2xl"
          style={{
            background: "radial-gradient(circle, #22c55e, transparent 70%)",
          }}
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1 }}
      >
        {/* Icon + Motto */}
        <motion.div
          className="flex items-center justify-center space-x-3 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Leaf className="w-10 h-10" style={{ color: BRAND_ACCENT_LIGHT }} />
          <p
            className="text-lg font-semibold uppercase tracking-[0.2em]"
            style={{ color: BRAND_ACCENT_LIGHT }}
          >
            Our Green Commitment
          </p>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-5xl mx-auto leading-tight drop-shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Pioneering a{" "}
          <span style={{ color: BRAND_ACCENT_LIGHT }}>Sustainable Future</span>,  
          One Installation at a Time
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mt-6 text-xl md:text-2xl text-gray-100/90 max-w-3xl mx-auto leading-relaxed font-light"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          We believe in permanent energy independence. Learn about the people,
          principles, and passion driving our mission to deliver premium solar
          solutions.
        </motion.p>
      </motion.div>

      {/* Wavy Divider */}
      <motion.svg
        className="absolute bottom-0 left-0 w-full h-auto text-white"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        style={{ height: "90px" }}
        aria-hidden="true"
        initial={{ y: 10 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
      >
        <path
          d="M1440 0L0 0V50C360 80 720 80 1080 50C1440 20 1440 0 1440 0Z"
          fill="#F9FAFB"
        ></path>
      </motion.svg>
    </section>
  );
}
