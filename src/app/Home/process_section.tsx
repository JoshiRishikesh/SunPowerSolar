"use client";

import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, LayoutGrid, Zap } from "lucide-react";

const BRAND_PRIMARY_DARK = "#193f88";
const BRAND_ACCENT_LIGHT = "#fdcc14";

const processSteps = [
  {
    icon: Lightbulb,
    title: "1. Consultation & Custom Design",
    description:
      "We begin with a thorough, zero-pressure assessment of your home and energy needs. Our engineers design a bespoke system guaranteed to maximize production and savings.",
  },
  {
    icon: LayoutGrid,
    title: "2. Permitting & Installation",
    description:
      "Our certified, local team handles all permits and paperwork. We ensure a seamless, high-quality installation using only top-tier components, done right the first time.",
  },
  {
    icon: Zap,
    title: "3. Activation & Energy Freedom",
    description:
      "Once installed and inspected, the system is turned on. You immediately begin generating clean power, eliminating reliance on rising utility rates, and enjoying permanent savings.",
  },
];

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="relative bg-gradient-to-b from-white via-gray-50 to-[#f8fafc]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2
            className="text-4xl sm:text-5xl font-extrabold tracking-tight"
            style={{ color: BRAND_PRIMARY_DARK }}
          >
            Our Simplified 3-Step Solar Process
          </h2>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            High-end solar doesn’t have to be complicated. We manage everything
            from start to finish with unmatched precision and clarity.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative grid grid-cols-1 gap-14 lg:grid-cols-3 lg:gap-12">
          <div className="hidden lg:block absolute inset-x-0 top-[12%] h-1 bg-gradient-to-r from-transparent via-yellow-400/70 to-transparent rounded-full"></div>

          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: index * 0.2,
              }}
              viewport={{ once: false, amount: 0.3 }}
            >
              {/* Step Icon */}
              <div
                className="w-20 h-20 flex items-center justify-center rounded-full text-white text-2xl font-bold mb-8 shadow-lg relative z-10
                bg-gradient-to-br from-yellow-400 to-yellow-300 ring-4 ring-white"
              >
                <step.icon
                  className="w-10 h-10"
                  style={{ color: BRAND_PRIMARY_DARK }}
                />
              </div>

              {/* Card */}
              <motion.div
                className="relative bg-white/90 backdrop-blur-lg p-10 pt-6 rounded-2xl shadow-xl border border-gray-200 cursor-pointer"
                whileHover={{
                  scale: 1.02,
                  boxShadow:
                    "0 15px 35px rgba(0, 0, 0, 0.2)", // subtle shadow lift
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ color: BRAND_PRIMARY_DARK }}
                >
                  {step.title}
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Full-Width Decorative Image */}
      <div className="w-full relative overflow-hidden">
        <motion.img
          src="/home.webp"
          alt="Solar installation on a modern home"
          className="w-full h-auto object-cover"
          initial={{ opacity: 0, scale: 1.02 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src =
              "https://placehold.co/1920x400/193f88/fdcc14/png?text=Solar+Installation+Design";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-yellow-400/20 via-transparent to-transparent pointer-events-none"></div>
      </div>
    </section>
  );
}
