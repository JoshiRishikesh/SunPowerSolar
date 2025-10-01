"use client";

import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const BRAND_PRIMARY_DARK = '#193f88'; // Deep Navy Blue
const BRAND_ACCENT_LIGHT = '#fdcc14'; // Bright Yellow/Gold

const testimonials = [
    {
        id: 1,
        name: 'The Rodriguez Family',
        location: 'Phoenix, AZ',
        quote: "The installation was seamless, and the team was professional and informative every step of the way. We cut our energy bill by 75% in the first month! Highly recommend this solar company.",
        rating: 5,
    },
    {
        id: 2,
        name: 'TechSolutions Inc.',
        location: 'San Jose, CA (Commercial Client)',
        quote: "Their commercial solution was meticulously planned and executed with zero disruption to our business operations. The return on investment calculation was spot-on, and we've hit all our sustainability targets.",
        rating: 5,
    },
    {
        id: 3,
        name: 'Sarah K.',
        location: 'Austin, TX',
        quote: "We added battery storage, and it saved us during a recent power outage. The peace of mind alone is worth it. Fantastic local service and incredible support after the install.",
        rating: 5,
    },
];

const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex items-center space-x-0.5">
        {[...Array(5)].map((_, i) => (
            <Star
                key={i}
                className="w-5 h-5 fill-current drop-shadow-sm"
                style={{ color: i < rating ? BRAND_ACCENT_LIGHT : '#ccc' }}
            />
        ))}
    </div>
);

export default function TestimonialSection() {
    return (
        <section className="py-20 md:py-32 bg-gray-50 relative overflow-hidden">
            {/* Subtle background accent */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="bg-gradient-to-tr from-yellow-100 via-white to-blue-50 opacity-20 w-full h-full"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl" style={{ color: BRAND_PRIMARY_DARK }}>
                        Hear It From Our Clients
                    </h2>
                    <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                        Trusted by homeowners and businesses to deliver reliable, long-lasting solar solutions.
                    </p>
                </motion.div>

                {/* Testimonials Grid */}
                <div className="grid gap-12 lg:grid-cols-3">
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={t.id}
                            className="bg-white p-8 rounded-3xl shadow-xl transition duration-500 hover:shadow-2xl flex flex-col justify-between border-4 border-transparent hover:border-gradient-to-r hover:from-yellow-400 hover:via-yellow-300 hover:to-yellow-400"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            <div>
                                {/* Rating */}
                                <div className="mb-4">
                                    <StarRating rating={t.rating} />
                                </div>

                                {/* Quote */}
                                <p className="text-lg italic text-gray-700 leading-relaxed mb-6">
                                    “{t.quote}”
                                </p>
                            </div>

                            {/* Client Info */}
                            <div>
                                <p className="text-xl font-bold" style={{ color: BRAND_PRIMARY_DARK }}>
                                    {t.name}
                                </p>
                                <p className="text-base text-gray-500 mt-1">
                                    {t.location}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Line */}
                <div className="mt-16 text-center">
                    <motion.a 
                        href="/contact"
                        className="text-lg font-semibold hover:underline"
                        style={{ color: BRAND_PRIMARY_DARK }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        Read more success stories →
                    </motion.a>
                </div>
            </div>
        </section>
    );
}
