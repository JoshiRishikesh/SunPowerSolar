"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Zap, ArrowRight } from 'lucide-react';
import { motion } from "framer-motion";
import Image from 'next/image';

// Brand colors
const BRAND_PRIMARY_DARK = '#193f88';
const BRAND_ACCENT_LIGHT = '#fdcc14';

const imageSources = [
  "/carousal1.webp",
  "/carousal2.webp",
  "/carousal3.webp",
];

const transitionInterval = 5000;

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageSources.length);
    }, transitionInterval);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 bg-gray-900 min-h-[60vh] md:min-h-[70vh] flex items-center">
      
      {/* Carousel */}
      <div className="absolute inset-0">
          {imageSources.map((src, index) => (
            <Image
          key={index}
          src={src}
          alt={`Premium modern home with solar panels, view ${index + 1}`}
          fill // <--- REQUIRED FIX: Use 'fill' because the image is absolutely positioned to cover its parent
          priority={index === 0} // <--- Optional but recommended for LCP on the first image
          className={`
          absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out
          ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}
          `}
          />
          ))}
        </div>


      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="text-center">
          
          {/* Headline with entrance animation */}
            <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }} // 👈 plays every time it enters view
            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tighter max-w-4xl mx-auto leading-tight text-white drop-shadow-xl"
            >
            Unlock <span style={{ color: BRAND_ACCENT_LIGHT }}>Permanent Energy Freedom</span> and Financial Independence
            </motion.h1>

          {/* Subtitle with delay */}
            <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
            className="mt-6 text-xl text-gray-200 max-w-3xl mx-auto drop-shadow-lg"
            >
            We engineer custom solar solutions that eliminate utility bills, boost your home value, and protect you from rising energy costs. Start saving today.
            </motion.p>

          {/* CTA Buttons */}
            <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: false, amount: 0.3 }}
            className="mt-10 flex justify-center space-x-4"
            >
            <Link
              href="/contact"
              className="px-8 py-3 text-lg font-semibold rounded-full shadow-xl flex items-center cursor-pointer relative overflow-hidden group"
              style={{
                backgroundColor: BRAND_ACCENT_LIGHT,
                color: BRAND_PRIMARY_DARK,
                boxShadow: `0 4px 20px rgba(253, 204, 20, 0.6)`,
              }}
            >
              Contact Us
              <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/how-it-works"
              className="px-8 py-3 text-lg font-semibold rounded-full transition duration-300 hover:bg-white/10 flex items-center border-2 text-white cursor-pointer"
              style={{
                borderColor: "rgba(255, 255, 255, 0.4)",
              }}
            >
              <Zap className="w-5 h-5 mr-2 animate-pulse" />
              How It Works
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
