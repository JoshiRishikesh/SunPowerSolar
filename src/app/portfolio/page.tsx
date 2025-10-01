import React from 'react';
import PortfolioHero from './portfoliohero';
import ProjectCarousel from './projectcarousel';
import TestimonialSection from './testimonialsection';
import ProjectGallery from './projectgallery';
export default function portfolio() {
    return (
        <main>
                        <PortfolioHero />
                        <ProjectCarousel />
                        <TestimonialSection />
                        <ProjectGallery />
                       
                        
                    </main>
    );
}
