import React from 'react';
import AboutHero from './AboutHero';
import MissionVisionValues from './MissionVisionValues';
import OurHistoryTimeline from './OurHistoryTimeline';
import TeamLeadership from './TeamLeadership';
import CertificationsAndMetrics from './CertificationsAndMetrics';
import FinalCtaBlock from '../Home/cta_block';



/**
 * A dedicated hero section for the About Us page.
 */
export default function Aboutus() {
    return (
        <main>
                        {/* ========================================
                          SECTION 1: HERO SECTION
                          ========================================
                        */}
                        <AboutHero />
                        <MissionVisionValues />
                        <OurHistoryTimeline />
                        <TeamLeadership />
                        <CertificationsAndMetrics />
                        <FinalCtaBlock />
                        
                    </main>
    );
}
