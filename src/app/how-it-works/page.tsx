"use client";

import React from 'react';
import { MessageCircle, DraftingCompass, HardHat, Zap, CheckCircle } from 'lucide-react';

// Define Brand Colors (Consistent with other components)
const BRAND_PRIMARY_NAVY = '#193f88'; // Deep Navy Blue
const BRAND_ACCENT_LIGHT = '#fdcc14'; // Bright Yellow/Gold
const BRAND_GREEN_SUBTLE = '#e6ffed'; // Subtle Green Background Color

// Define the steps for the "How It Works" process
const steps = [
    {
        number: 1,
        title: "Initial Consultation & Assessment",
        description: "We start with a quick chat to understand your energy consumption, goals, and budget. We then perform a virtual assessment of your property to check solar feasibility.",
        icon: MessageCircle,
    },
    {
        number: 2,
        title: "Custom Design & Quote",
        description: "Our engineers create a customized solar array design tailored to your roof and sunlight exposure. You receive a detailed, fixed-price proposal covering all equipment and labor.",
        icon: DraftingCompass,
    },
    {
        number: 3,
        title: "Installation & Permitting",
        description: "Once approved, our certified installation team handles all local permitting. We then install your panels, inverter, and mounting system efficiently and professionally.",
        icon: HardHat,
    },
    {
        number: 4,
        title: "Activation & Monitoring",
        description: "After local utility inspection, your system is activated and connected to the grid! You gain access to our monitoring dashboard to watch your savings grow in real time.",
        icon: Zap,
    },
];

// --- Sub-Component for a Single Step Card ---
interface StepCardProps {
    step: typeof steps[0];
}

const StepCard: React.FC<StepCardProps> = ({ step }) => {
    const Icon = step.icon;

    return (
        <div className="flex flex-col md:flex-row p-6 bg-white rounded-3xl shadow-xl transition duration-300 hover:shadow-2xl h-full">
            
            {/* Step Number and Icon */}
            <div className="flex flex-shrink-0 md:flex-col md:w-32 items-center md:items-start mb-4 md:mb-0 md:mr-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full font-extrabold text-white text-2xl mb-3"
                    style={{ backgroundColor: BRAND_PRIMARY_NAVY }}
                >
                    {step.number}
                </div>
                <Icon className="w-8 h-8 md:w-10 md:h-10 text-gray-700" style={{ color: BRAND_ACCENT_LIGHT }} />
            </div>

            {/* Content */}
            <div className="flex-1 border-l-2 md:border-l-0 md:border-t-2 border-gray-100 pl-6 pt-0 md:pt-3 md:pl-0">
                <h2 className="text-2xl font-bold mb-3" style={{ color: BRAND_PRIMARY_NAVY }}>
                    {step.title}
                </h2>
                <p className="text-gray-600 text-lg">
                    {step.description}
                </p>
            </div>
        </div>
    );
}

// --- Main How It Works Page Component ---
export default function HowItWorksPage() {
    return (
        <div className="min-h-screen font-sans">
            {/* Hero Section */}
            <header className="py-20 sm:py-28 text-center" style={{ backgroundColor: BRAND_PRIMARY_NAVY }}>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <CheckCircle className="w-12 h-12 mx-auto mb-4 text-white" style={{ color: BRAND_ACCENT_LIGHT }} />
                    <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-4">
                        The Solar Journey, Simplified
                    </h1>
                    <p className="mt-4 text-xl text-white/80 max-w-2xl mx-auto">
                        Switching to solar power is easier than you think. Follow our four-step process to energy independence.
                    </p>
                </div>
            </header>

            {/* Process Section - Uses subtle green background */}
            <section className="py-16 md:py-24" style={{ backgroundColor: BRAND_GREEN_SUBTLE }}>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                    {/* The Grid for Steps */}
                    <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
                        {steps.map((step) => (
                            <StepCard key={step.number} step={step} />
                        ))}
                    </div>

                    {/* Final CTA Area */}
                    <div className="text-center mt-20 p-8 rounded-2xl mx-auto max-w-4xl"
                        style={{ backgroundColor: BRAND_PRIMARY_NAVY, boxShadow: `0 10px 25px -5px ${BRAND_PRIMARY_NAVY}40` }}
                    >
                        <h3 className="text-3xl font-bold text-white mb-4">Ready to Start Step 1?</h3>
                        <p className="text-xl text-white/90 mb-6">
                            Schedule your free, no-obligation assessment with one of our solar specialists today.
                        </p>
                        <a 
                            href="/contact" 
                            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-lg font-bold rounded-xl text-gray-800 transition duration-300 transform hover:scale-[1.05] shadow-lg"
                            style={{ backgroundColor: BRAND_ACCENT_LIGHT }}
                        >
                            Book a Consultation
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
