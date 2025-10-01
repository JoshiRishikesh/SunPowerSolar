"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, TrendingUp, Handshake, Sun } from "lucide-react";

const BRAND_PRIMARY_DARK = "#193f88";
const BRAND_ACCENT_LIGHT = "#fdcc14";

const features = [
  {
    icon: ShieldCheck,
    title: "Industry-Leading 25-Year Warranty",
    description:
      "We back our installation and materials with an unparalleled 25-year comprehensive warranty, guaranteeing your peace of mind and long-term performance.",
    color: BRAND_PRIMARY_DARK,
  },
  {
    icon: TrendingUp,
    title: "Optimized for Maximum Home Value",
    description:
      "Our certified systems use premium components that significantly increase your property’s resale value and appeal to energy-conscious buyers.",
    color: BRAND_PRIMARY_DARK,
  },
  {
    icon: Handshake,
    title: "Local, Trusted, and Certified Team",
    description:
      "You work directly with local, experienced solar engineers, not subcontractors. We provide personalized service and support from consultation to activation.",
    color: BRAND_PRIMARY_DARK,
  },
  {
    icon: Sun,
    title: "Tier-One Black Panel Aesthetics",
    description:
      "We exclusively use sleek, all-black solar panels that blend seamlessly with your roofline, ensuring high performance without compromising your home’s aesthetic.",
    color: BRAND_PRIMARY_DARK,
  },
];

export default function DifferentiatorsSection() {
  return (
    <section
      id="differentiators"
      className="py-20 md:py-32 bg-gray-100 relative overflow-hidden"
    >
      {/* Background bubbles omitted for brevity */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <p
            className="text-sm font-semibold uppercase tracking-wider mb-2"
            style={{ color: BRAND_ACCENT_LIGHT }}
          >
            Our Commitment to Excellence
          </p>
          <h2
            className="text-4xl font-extrabold tracking-tight sm:text-5xl"
            style={{ color: BRAND_PRIMARY_DARK }}
          >
            The Premium Difference. Why Choose Us?
          </h2>
          <div
            className="w-16 h-1 mx-auto mt-6 rounded-full"
            style={{ backgroundColor: BRAND_PRIMARY_DARK }}
          ></div>
          <p className="mt-4 text-xl text-gray-700 max-w-3xl mx-auto">
            We don't just install solar; we engineer financial and environmental
            certainty for your future with guaranteed quality.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card bg-white p-8 rounded-xl shadow-2xl relative z-10 overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
                delay: index * 0.2,
              }}
              viewport={{ once: false, amount: 0.3 }}
              whileHover={{ scale: 1.03 }}
            >
              {/* Gold Accent Icon Circle */}
              <motion.div
                className="icon-circle p-4 inline-block rounded-full mb-6"
                style={{ backgroundColor: BRAND_ACCENT_LIGHT }}
                whileHover={{ scale: 1.1, boxShadow: "0 4px 20px rgba(253,204,20,0.6)" }}
                transition={{ duration: 0.3 }}
              >
                <feature.icon
                  className="w-8 h-8"
                  style={{ color: BRAND_PRIMARY_DARK }}
                />
              </motion.div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-3" style={{ color: feature.color }}>
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600">{feature.description}</p>

              {/* Gold line reveal on hover */}
              <div
                className="absolute bottom-0 left-0 h-1 w-full transform -translate-x-full transition-transform duration-500 group-hover:translate-x-0"
                style={{ backgroundColor: BRAND_ACCENT_LIGHT }}
              ></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
