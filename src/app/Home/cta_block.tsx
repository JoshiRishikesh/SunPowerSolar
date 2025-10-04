"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const BRAND_PRIMARY_DARK = '#193f88';
const BRAND_GREEN = '#28a745';

export default function FinalCtaBlock() {
    return (
        <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
            {/* Animated Background Glows */}
            <motion.div 
                className="absolute -top-32 -left-32 w-72 h-72 sm:w-96 sm:h-96 rounded-full opacity-40 blur-3xl"
                style={{ background: `radial-gradient(circle, ${BRAND_GREEN}, #6a5acd)` }}
                animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div 
                className="absolute -bottom-32 -right-32 w-72 h-72 sm:w-[500px] sm:h-[500px] rounded-full opacity-30 blur-3xl"
                style={{ background: `radial-gradient(circle, ${BRAND_PRIMARY_DARK}, ${BRAND_GREEN})` }}
                animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
                transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div 
                className="absolute top-16 right-1/4 w-60 h-60 sm:w-72 sm:h-72 rounded-full opacity-25 blur-2xl"
                style={{ background: `radial-gradient(circle, #ff4d6d, ${BRAND_GREEN})` }}
                animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
                transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Main Card */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div 
                    className="bg-white rounded-3xl p-8 sm:p-12 md:p-16 text-center shadow-[0_20px_60px_rgba(0,0,0,0.3)] relative overflow-hidden"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                >
                    {/* Heading */}
                    <motion.h2
                        className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug sm:leading-tight max-w-3xl mx-auto"
                        style={{ 
                            background: 'linear-gradient(90deg, #fdcc14, #28a745, #6a5acd)', 
                            WebkitBackgroundClip: 'text', 
                            color: 'transparent' 
                        }}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        Ready to Claim Your Energy Independence?
                    </motion.h2>

                    {/* Subtext */}
                    <motion.p 
                        className="mt-4 sm:mt-6 text-lg sm:text-xl md:text-2xl font-medium text-gray-800"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                    >
                        It takes less than 60 seconds to see how much you can save. Get your personalized quote today.
                    </motion.p>

                    {/* CTA Button */}
                    <motion.div 
                        className="mt-6 sm:mt-8 flex justify-center"
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <motion.a
                            href="/contact"
                            className="flex items-center gap-3 sm:gap-4 px-8 sm:px-12 py-3 sm:py-5 text-lg sm:text-2xl font-bold rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.4)] border-2 bg-gradient-to-r from-[#28a745] via-[#fdcc14] to-[#6a5acd] text-white hover:scale-105 hover:shadow-[0_15px_40px_rgba(0,0,0,0.5)] transition-all"
                            whileHover={{ scale: 1.05, boxShadow: '0 15px 50px rgba(0,0,0,0.5)' }}
                            whileTap={{ scale: 0.97 }}
                        >
                            Start Your Savings Journey
                            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
