"use client";

import React, { useEffect, useState, useRef } from 'react';
import { Zap } from 'lucide-react';

const BRAND_ACCENT_LIGHT = '#fdcc14'; // Gold
const BRAND_NATURE_GREEN = '#0e6b50'; // Deep Forest Green

// Animated Counter
const AnimatedCounter = ({ end, duration = 2000, prefix = '', suffix = '' }: { end: number, duration?: number, prefix?: string, suffix?: string }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !hasAnimated.current) {
                hasAnimated.current = true;
                let startTime: number | null = null;

                const step = (timestamp: number) => {
                    if (!startTime) startTime = timestamp;
                    const progress = timestamp - startTime;
                    const percentage = Math.min(progress / duration, 1);
                    const currentValue = percentage === 1 ? end : Math.floor(percentage * end);
                    setCount(currentValue);

                    if (percentage < 1) {
                        window.requestAnimationFrame(step);
                    }
                };

                window.requestAnimationFrame(step);
                observer.unobserve(entry.target);
            }
        }, { threshold: 0.5 });

        if (ref.current) observer.observe(ref.current);

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, [end, duration]);

    return (
        <div ref={ref} className="text-center">
            <p
                className="text-4xl sm:text-5xl font-extrabold mb-2 tracking-tight"
                style={{ color: BRAND_ACCENT_LIGHT }}
            >
                {prefix}{count.toLocaleString()}{suffix}
            </p>
        </div>
    );
};

// Metrics Data
const metrics = [
    { value: 4.8, label: 'Average Customer Rating', suffix: '/5.0', prefix: '⭐' },
    { value: 8.5, label: 'Megawatts Installed', suffix: 'MW' },
    { value: 100, label: 'Percent Local Service', suffix: '%' },
    { value: 25, label: 'Years Power Guaranteed', suffix: '+' },
];

// Certifications
const certifications = [
    { name: 'NABCEP Certified', logoText: 'NABCEP', color: 'from-green-600 to-green-800' },
    { name: 'Better Business Bureau A+', logoText: 'BBB A+', color: 'from-blue-500 to-blue-700' },
    { name: 'Tesla Powerwall Installer', logoText: 'TESLA', color: 'from-red-500 to-red-700' },
    { name: 'Residential Solar Expertise', logoText: 'RESIDENTIAL', color: 'from-gray-700 to-black' },
];

export default function CertificationsAndMetrics() {
    return (
        <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight"
                        style={{ color: BRAND_NATURE_GREEN }}>
                        Our Promise: Certified Excellence, Proven Results
                    </h2>
                    <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                        Trust matters. We back our passion with technical mastery, industry-leading credentials, and a track record of five-star performance.
                    </p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16">
                    {metrics.map((metric, index) => (
                        <div key={index}
                            className="relative p-6 sm:p-8 rounded-2xl bg-white/70 backdrop-blur-sm border border-transparent 
                                       shadow-lg transition duration-300 hover:scale-105"
                            style={{ borderImage: `linear-gradient(90deg, ${BRAND_ACCENT_LIGHT}, ${BRAND_NATURE_GREEN}) 1` }}
                        >
                            <AnimatedCounter end={metric.value} prefix={metric.prefix} suffix={metric.suffix} />
                            <p className="mt-3 text-lg font-semibold uppercase tracking-wide text-center sm:text-left"
                                style={{ color: BRAND_NATURE_GREEN }}>
                                {metric.label}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Certifications */}
                <div className="text-center mb-12 sm:mb-16">
                    <h3 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12" style={{ color: BRAND_NATURE_GREEN }}>
                        Industry Recognition
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
                        {certifications.map((cert, index) => (
                            <div key={index}
                                className="relative p-6 rounded-2xl border border-transparent bg-white/80 backdrop-blur-md 
                                           shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 cursor-pointer flex flex-col items-center"
                                style={{ borderImage: `linear-gradient(135deg, ${BRAND_ACCENT_LIGHT}, ${BRAND_NATURE_GREEN}) 1` }}
                            >
                                <div className={`w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full text-white text-xs sm:text-sm font-black mb-4 
                                               shadow-xl bg-gradient-to-br ${cert.color} border-4 border-white`}>
                                    {cert.logoText}
                                </div>
                                <p className="text-gray-800 font-semibold text-center">{cert.name}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center mt-12 sm:mt-20">
                    <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto mb-6">
                        Ready to partner with a certified leader in clean energy?
                    </p>
                    <a href="/contact"
                        className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full 
                                   bg-gradient-to-r from-yellow-400 to-green-600 text-white shadow-lg 
                                   hover:shadow-xl transition transform hover:scale-105 group"
                    >
                        Check My Eligibility
                        <Zap className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-3 transition-transform duration-300 group-hover:rotate-12" />
                    </a>
                </div>

            </div>
        </section>
    );
}
