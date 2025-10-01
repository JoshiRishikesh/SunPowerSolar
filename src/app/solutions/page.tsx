"use client";

import React from 'react';
import { Home, Building, Target, Zap, Sun, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const BRAND_PRIMARY_DARK = '#193f88';
const BRAND_ACCENT_LIGHT = '#fdcc14';
const BRAND_GRAY_LIGHT = '#f3f4f6';

interface Solution {
    title: string;
    icon: React.ElementType;
    summary: string;
    features: string[];
    color: string;
}

const solarSolutions: Solution[] = [
    {
        title: 'Residential Solar Power',
        icon: Home,
        summary: 'Maximize your home\'s energy independence and reduce monthly utility bills with a custom-designed rooftop system.',
        features: [
            'Seamless Rooftop Integration',
            'Full Battery Backup Options',
            'Smart Monitoring (App Control)',
            '25-Year Production Guarantee',
        ],
        color: 'bg-green-600',
    },
    {
        title: 'Commercial & Industrial',
        icon: Building,
        summary: 'Turn your business\'s unused roof space into a major revenue-saving asset with high-capacity solar arrays.',
        features: [
            'Immediate ROI & Tax Credits',
            'Large Flat Roof Mounting',
            'Custom Shading Management',
            'Low-Profile, High-Durability Panels',
        ],
        color: 'bg-red-600',
    },
    {
        title: 'Specialty & Off-Grid Systems',
        icon: Target,
        summary: 'For unique needs—from solar carports to remote ranch installations—we provide tailored energy solutions.',
        features: [
            'Ground-Mount Arrays (Fixed & Tracking)',
            'Solar Carport Structures',
            'Remote/Off-Grid Power Systems',
            'Agricultural Power Solutions',
        ],
        color: 'bg-orange-600',
    },
];

const SolutionCard: React.FC<{ solution: Solution }> = ({ solution }) => (
    <motion.div
        className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.5 }}
    >
        <div className="flex items-center mb-4">
            <div 
                className={`p-4 rounded-xl flex items-center justify-center`}
                style={{ backgroundColor: BRAND_ACCENT_LIGHT }}
            >
                <solution.icon className="w-8 h-8" style={{ color: BRAND_PRIMARY_DARK }} />
            </div>
            <h3 className="text-2xl font-bold ml-4" style={{ color: BRAND_PRIMARY_DARK }}>
                {solution.title}
            </h3>
        </div>
        
        <p className="text-gray-600 mb-6 flex-grow">{solution.summary}</p>

        <div className="space-y-2">
            {solution.features.map((feature, index) => (
                <div key={index} className="flex items-center text-sm font-medium text-gray-700">
                    <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" style={{ color: BRAND_ACCENT_LIGHT }} />
                    <span>{feature}</span>
                </div>
            ))}
        </div>

        <motion.button 
            whileHover={{ scale: 1.03 }}
            className="mt-8 py-3 w-full text-center rounded-xl font-semibold text-white shadow-md"
            style={{ backgroundColor: BRAND_PRIMARY_DARK }}
        >
            Learn More
        </motion.button>
    </motion.div>
);

export default function SolutionsPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            
            {/* Hero Section */}
            <header className="py-24 sm:py-32 bg-gray-50 border-b-4 border-yellow-400 relative overflow-hidden">
                <motion.div
                    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                >
                    <Zap className="w-14 h-14 mx-auto mb-6 animate-bounce" style={{ color: BRAND_ACCENT_LIGHT }} />
                    <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4" style={{ color: BRAND_PRIMARY_DARK }}>
                        Tailored Solar Solutions for Every Need
                    </h1>
                    <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Whether you are a homeowner, small business, or industrial facility, we design optimized solar energy systems for maximum savings and reliable power.
                    </p>
                </motion.div>
            </header>

            {/* Solutions Grid */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-3" style={{ color: BRAND_PRIMARY_DARK }}>
                            Our Core Offerings
                        </h2>
                        <p className="text-lg text-gray-500">
                            Explore the perfect solar fit for your property type.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {solarSolutions.map((solution) => (
                            <SolutionCard key={solution.title} solution={solution} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action Footer */}
            <section className="py-20" style={{ backgroundColor: BRAND_PRIMARY_DARK }}>
                <motion.div
                    className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="md:text-left">
                            <h3 className="text-3xl font-extrabold text-white">
                                Ready to Go Solar?
                            </h3>
                            <p className="text-white/80 mt-2 text-lg">
                                Get a free, no-obligation assessment and quote today.
                            </p>
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center justify-center px-8 py-3 border-4 border-white text-base font-bold rounded-full shadow-lg transition duration-300"
                            style={{ backgroundColor: BRAND_ACCENT_LIGHT, color: BRAND_PRIMARY_DARK }}
                        >
                            <Sun className="w-5 h-5 mr-2" />
                            Get Your Free Quote
                        </motion.button>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}
