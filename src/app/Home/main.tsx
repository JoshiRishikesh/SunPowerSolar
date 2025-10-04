"use client";

import React from 'react';
// Only import HeroSection now, as all other section-specific logic has been removed.
import HeroSection from './herosection'; 
import BenefitsStatsSection from './benefits_stats';
import ProcessSection from './process_section';
import DifferentiatorsSection from './differentiators_section'; 
import FinalCtaBlock from './cta_block';
import AboutPageContent from './AboutPageContent';
import SolarScrollAnimation from './animation';
import ClientsMarquee from './clientsMarquee';
import ProductsShowcase from './ProductsShowcase';

export default function MainContent() {
    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            <main>
                {/* ========================================
                  SECTION 1: HERO SECTION
                  ========================================
                */}
                <SolarScrollAnimation />
                <ClientsMarquee />
                <ProductsShowcase />
                <HeroSection />
                <BenefitsStatsSection />
                <ProcessSection />
                <DifferentiatorsSection />
                <AboutPageContent />
                <FinalCtaBlock />
            </main>
        </div>
    );
}