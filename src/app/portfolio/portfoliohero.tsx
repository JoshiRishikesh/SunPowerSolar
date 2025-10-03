"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const BRAND_PRIMARY_DARK = '#193f88'; // Deep Navy Blue
const BRAND_ACCENT_LIGHT = '#fdcc14'; // Gold/Yellow

export default function PortfolioHero() {
    return (
        <section className="relative overflow-hidden pt-24 pb-20 md:pt-40 md:pb-28 lg:pt-52 lg:pb-40 min-h-[70vh] flex items-center bg-gray-900">
            
            {/* Background with Subtle Movement */}
            <div className="absolute inset-0 animate-slowZoom">
                <Image
                    src="/carousal1.webp"
                    alt="Collage of solar panel installations"
                    fill // <- ADD THIS
                    priority // <- ADD THIS (for LCP)
                    className="absolute inset-0 w-full h-full object-cover opacity-70" 
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/90"></div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
                
                {/* Pre-title */}
                <motion.p
                    className="text-lg font-semibold uppercase tracking-[0.25em] mb-5 drop-shadow-md"
                    style={{ color: BRAND_ACCENT_LIGHT }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false, amount: 0.3 }}
                >
                    Project Gallery
                </motion.p>

                {/* Headline */}
                <motion.h1
                    className="text-5xl sm:text-6xl lg:text-8xl font-extrabold tracking-tighter max-w-5xl mx-auto leading-tight text-white drop-shadow-2xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: false, amount: 0.3 }}
                >
                    Witness Our{" "}
                    <span 
                        className="relative text-transparent bg-clip-text"
                        style={{ 
                            backgroundImage: `linear-gradient(90deg, ${BRAND_ACCENT_LIGHT}, #ffb347, ${BRAND_ACCENT_LIGHT})`,
                            WebkitBackgroundClip: 'text',
                            backgroundSize: '200% auto',
                            animation: 'shine 6s linear infinite'
                        }}
                    >
                        Proven Track Record
                    </span>{" "}
                    of Excellence
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    className="mt-8 text-xl text-gray-200/90 max-w-3xl mx-auto drop-shadow-lg leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    viewport={{ once: false, amount: 0.3 }}
                >
                    Explore our most successful solar installations across homes and businesses — 
                    a testament to unmatched craftsmanship, innovation, and performance.
                </motion.p>

                {/* CTA Button */}
                <motion.div
                    className="mt-12 flex justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <Link 
                        href="/contact" 
                        className="px-10 py-4 text-lg font-semibold rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center group"
                        style={{ 
                            backgroundImage: `linear-gradient(90deg, ${BRAND_ACCENT_LIGHT}, #ffb347)`,
                            color: BRAND_PRIMARY_DARK
                        }}
                    >
                        Start Your Project Consultation
                        <ArrowRight className="w-6 h-6 ml-3 transition-transform duration-300 group-hover:translate-x-2" />
                    </Link>
                </motion.div>
            </div>

            {/* Decorative Bottom Wave Divider */}
            <svg 
                className="absolute bottom-0 left-0 w-full h-20 text-white"
                viewBox="0 0 1440 100" 
                preserveAspectRatio="none"
            >
                <path 
                    d="M0,0 C480,100 960,0 1440,100 L1440,0 L0,0 Z" 
                    fill="white"
                ></path>
            </svg>

            {/* Animations */}
            <style jsx>{`
                @keyframes shine {
                    0% { background-position: 0% 50%; }
                    100% { background-position: 200% 50%; }
                }
                @keyframes slowZoom {
                    0% { transform: scale(1); }
                    100% { transform: scale(1.05); }
                }
                .animate-slowZoom img {
                    animation: slowZoom 20s ease-in-out infinite alternate;
                }
            `}</style>
        </section>
    );
}
