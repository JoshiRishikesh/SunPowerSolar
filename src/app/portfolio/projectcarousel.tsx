"use client";

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const BRAND_PRIMARY_DARK = '#193f88';
const BRAND_ACCENT_LIGHT = '#fdcc14';

const projects = [
    {
        id: 1,
        category: 'Residential',
        name: 'The Riverdale Estate',
        image: 'https://placehold.co/800x600/193f88/fdcc14?text=Residential+Solar+12+kW',
        stats: '12 kW System, 100% Energy Offset',
        summary: 'A custom-engineered 12 kW rooftop installation powering a large suburban home, achieving zero monthly utility expenses.',
        details: 'Features Tesla Powerwall integration for maximum night-time use and reliable backup power. The installation used all-black Tier 1 panels for a high-end, seamless aesthetic that preserved curb appeal.',
    },
    {
        id: 2,
        category: 'Commercial',
        name: 'TechHub Office Complex',
        image: 'https://placehold.co/800x600/0e6b50/fdcc14?text=Commercial+Solar+150+kW',
        stats: '150 kW System, $40k Annual Savings',
        summary: 'A massive 150 kW system across three rooftops, drastically reducing operational costs and meeting corporate sustainability goals for a mid-sized technology firm.',
        details: 'This project required complex structural engineering and custom racking solutions to handle varying roof angles. It includes advanced remote monitoring for proactive maintenance and performance tracking to ensure maximum ROI.',
    },
    {
        id: 3,
        category: 'Battery Storage',
        name: 'Coastal Storm Resilience',
        image: 'https://placehold.co/800x600/fdcc14/193f88?text=Industrial+Battery+Backup',
        stats: '5-Day Off-Grid Capacity, 3 Batteries',
        summary: 'Installation of multiple industrial-grade battery units, providing five days of off-grid power stability during severe weather events in a high-risk coastal area.',
        details: 'Designed specifically for high-wind environments and regulatory compliance, the system ensures continuous operation of critical home services (HVAC, communication, security) independent of the main grid.',
    },
    {
        id: 4,
        category: 'Residential',
        name: 'The Modern Farmhouse',
        image: 'https://placehold.co/800x600/3d5c9c/fdcc14?text=Farmhouse+Ground+Mount',
        stats: '18 kW System, Ground Mount',
        summary: 'An 18kW ground-mount system optimized for efficiency on large acreage, complementing the property’s rustic aesthetic.',
        details: 'The system uses bi-facial panels to capture reflected light, maximizing energy harvest. The ground mount design allows for easy maintenance and panel tilt adjustments for seasonal optimization.',
    },
];

export default function ProjectCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [expandedId, setExpandedId] = useState<number | null>(null);

    const totalSlides = projects.length;

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
        setExpandedId(null);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
        setExpandedId(null);
    };

    const toggleExpand = (id: number) => {
        setExpandedId(expandedId === id ? null : id);
    };

    const currentProject = projects[currentSlide];
    const isExpanded = expandedId === currentProject.id;

    return (
        <section className="py-20 md:py-32 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <h2 
                        className="text-4xl font-extrabold tracking-tight sm:text-5xl" 
                        style={{ color: BRAND_PRIMARY_DARK }}
                    >
                        Our Featured Projects
                    </h2>
                    <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                        A curated look at our signature installations that showcase our range and expertise.
                    </p>
                </motion.div>

                {/* Carousel */}
                <div className="relative">

                    {/* Nav Buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/80 rounded-full shadow-xl hover:scale-110 transition-transform hidden md:block"
                        style={{ color: BRAND_PRIMARY_DARK, marginLeft: '-3rem' }}
                    >
                        <ChevronLeft className="w-8 h-8" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/80 rounded-full shadow-xl hover:scale-110 transition-transform hidden md:block"
                        style={{ color: BRAND_PRIMARY_DARK, marginRight: '-3rem' }}
                    >
                        <ChevronRight className="w-8 h-8" />
                    </button>

                    {/* Card with Motion Animation */}
                    <motion.div
                        key={currentProject.id}
                        className="mx-auto max-w-4xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        <div 
                            className="bg-white rounded-3xl overflow-hidden flex flex-col lg:flex-row border-4 border-transparent bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 p-1 shadow-2xl transition-all duration-500 hover:scale-[1.01]"
                        >
                            <div className="lg:w-1/2 overflow-hidden rounded-2xl">
                                <motion.img
                                    src={currentProject.image}
                                    alt={`Image of ${currentProject.name}`}
                                    className="w-full h-72 lg:h-full object-cover transition-transform duration-500 hover:scale-105"
                                    initial={{ scale: 1.05 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                />
                            </div>
                            <div className="lg:w-1/2 p-8 flex flex-col justify-between bg-white rounded-2xl -mt-1 lg:-mt-0">
                                <div>
                                    <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: BRAND_ACCENT_LIGHT }}>
                                        {currentProject.category}
                                    </p>
                                    <h3 className="text-3xl font-bold mb-3" style={{ color: BRAND_PRIMARY_DARK }}>
                                        {currentProject.name}
                                    </h3>
                                    <p className="text-xl font-medium mb-4 text-gray-700" style={{ color: BRAND_PRIMARY_DARK }}>
                                        {currentProject.stats}
                                    </p>
                                    <p className="text-gray-600 leading-relaxed">{currentProject.summary}</p>

                                    {/* Expandable Details */}
                                    <motion.div
                                        animate={{ maxHeight: isExpanded ? 384 : 0, opacity: isExpanded ? 1 : 0 }}
                                        transition={{ duration: 0.5 }}
                                        className="overflow-hidden mt-4 pt-4 border-t"
                                        style={{ borderColor: BRAND_ACCENT_LIGHT }}
                                    >
                                        <p className="text-gray-700 italic">{currentProject.details}</p>
                                    </motion.div>
                                </div>

                                {/* Read More Button */}
                                <div className="mt-6">
                                    <button
                                        onClick={() => toggleExpand(currentProject.id)}
                                        className="inline-flex items-center text-base font-semibold transition duration-300 transform hover:scale-[1.03] group"
                                        style={{ color: BRAND_ACCENT_LIGHT }}
                                    >
                                        {isExpanded ? 'Hide Full Details' : 'Read Full Case Study'}
                                        <Zap className={`w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1 ${isExpanded ? 'rotate-180' : ''}`} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Mobile Dots */}
                    <div className="flex justify-center space-x-2 mt-8 md:hidden">
                        {projects.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'scale-125 bg-yellow-400' : 'bg-gray-300 hover:bg-gray-400'}`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
