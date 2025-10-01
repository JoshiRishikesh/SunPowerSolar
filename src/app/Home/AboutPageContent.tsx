"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BRAND_PRIMARY_DARK: string = "#193f88"; 
const BRAND_ACCENT_LIGHT: string = "#fdcc14"; 

const AboutUsSection: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const shortText: string =
    "Founded over a decade ago, our company was built on the core principle of making solar energy accessible, reliable, and beautiful. We saw a gap in the market for a premium solar experience—one that combined top-tier, efficient black-on-black panels with unparalleled local engineering expertise and a genuine commitment to customer satisfaction. We are locally owned, nationally certified, and solely focused on quality over volume.";

  const longText: string =
    "Our commitment goes beyond installation. Every system we design is optimized not just for today's consumption, but for tomorrow's potential needs, including EV charging and battery storage integration. Unlike national chains that rely on third-party subcontractors, our team of seasoned, in-house solar engineers and master electricians manages every phase of the project, ensuring flawless execution and a seamless process. This dedication to quality control allows us to confidently offer an industry-leading 25-year warranty on both equipment and workmanship. Choosing us means partnering with a team dedicated to honesty, transparency, and a cleaner, more affordable future for your home.";

  const displayLength: string = isExpanded ? shortText + " " + longText : shortText;

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28">
      <div className="lg:flex lg:gap-20 items-center">
        {/* Text Content */}
        <motion.div
          className="lg:w-3/5 space-y-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <p
            className="text-sm font-semibold uppercase tracking-[0.15em]"
            style={{ color: BRAND_ACCENT_LIGHT }}
          >
            Our Story
          </p>
          <h2
            className="text-4xl md:text-5xl font-extrabold leading-tight"
            style={{ color: BRAND_PRIMARY_DARK }}
          >
            Pioneering Premium Solar Solutions
          </h2>

          {/* Animated Text */}
          <AnimatePresence>
            <motion.p
              key={isExpanded ? "expanded" : "collapsed"}
              className="text-lg md:text-xl text-gray-700 leading-relaxed overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {displayLength}
              {!isExpanded && "..."}
            </motion.p>
          </AnimatePresence>

          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex px-8 py-3 rounded-full font-semibold text-base shadow-lg transition-transform duration-300 hover:scale-[1.05]"
            style={{
              backgroundColor: BRAND_ACCENT_LIGHT,
              color: BRAND_PRIMARY_DARK,
              boxShadow: `0 8px 20px rgba(253, 204, 20, 0.4)`,
            }}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.98 }}
          >
            {isExpanded ? "Read Less" : "Read More"}
          </motion.button>
        </motion.div>

        {/* Logo / Image */}
        <motion.div
          className="lg:w-2/5 mt-12 lg:mt-0 flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="relative">
            <motion.img
              src="/logo.webp"
              alt="Sun Power Solar Company Logo"
              className="rounded-2xl shadow-2xl border-4 object-contain"
              style={{ borderColor: BRAND_ACCENT_LIGHT }}
              animate={{ width: isExpanded ? 384 : 320, height: isExpanded ? 384 : 320 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              whileHover={{ scale: 1.05 }}
            />

            {/* Decorative Accent Circle */}
            <div
              className="absolute -z-10 rounded-full blur-2xl opacity-40"
              style={{
                width: "120%",
                height: "120%",
                background: `radial-gradient(circle at center, ${BRAND_ACCENT_LIGHT}, transparent 70%)`,
                top: "-10%",
                left: "-10%",
              }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const AboutPageContent: React.FC = () => {
  return (
    <section id="about-page" className="bg-white">
      <AboutUsSection />
    </section>
  );
};

export default AboutPageContent;
