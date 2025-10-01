import React from 'react';
import { Target, Eye, Handshake, Shield } from 'lucide-react';

const BRAND_ACCENT_LIGHT = '#fdcc14'; // Gold
const BRAND_NATURE_GREEN = '#0e6b50'; // Deep Forest Green

const pillars = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To accelerate the transition to sustainable energy by providing reliable, high-efficiency solar solutions and achieving zero-emissions power for every home we touch.",
    color: BRAND_NATURE_GREEN,
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To be recognized as the leading local provider of clean energy, setting the standard for quality installation, long-term savings, and customer service excellence in the industry.",
    color: BRAND_ACCENT_LIGHT,
  },
  {
    icon: Handshake,
    title: "Our Core Values",
    description:
      "Integrity, Quality Craftsmanship, and Customer-Centricity. We commit to transparency in pricing and delivering on our industry-leading 25-year performance warranty.",
    color: BRAND_NATURE_GREEN,
  },
];

export default function MissionVisionValues() {
  return (
    <section className="relative py-24 sm:py-32 bg-gradient-to-b from-white via-green-50 to-white">
      {/* Light radial glow background */}
      <div className="absolute inset-0 bg-gradient-radial from-green-100/40 via-transparent to-transparent opacity-80 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl sm:text-5xl font-extrabold tracking-tight"
            style={{ color: BRAND_NATURE_GREEN }}
          >
            Our Pillars of Sustainability
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            We are defined by our commitment to quality, integrity, and a future
            powered entirely by the sun.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="relative bg-white/90 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-gray-100 transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl"
              style={{ borderTop: `6px solid ${pillar.color}` }}
            >
              {/* Icon circle */}
              <div
                className="p-5 rounded-full mb-6 shadow-lg mx-auto flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${pillar.color}, ${pillar.color === BRAND_ACCENT_LIGHT ? '#fff8d6' : '#178f68'})`,
                }}
              >
                <pillar.icon
                  className="w-8 h-8"
                  style={{
                    color:
                      pillar.color === BRAND_ACCENT_LIGHT
                        ? BRAND_NATURE_GREEN
                        : 'white',
                  }}
                />
              </div>

              <h3
                className="text-2xl font-bold mb-3 tracking-wide"
                style={{ color: BRAND_NATURE_GREEN }}
              >
                {pillar.title}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl"
            style={{
              background: `linear-gradient(90deg, ${BRAND_ACCENT_LIGHT}, #ffe36f)`,
              color: BRAND_NATURE_GREEN,
            }}
          >
            See Our Commitment in Action
            <Shield className="w-5 h-5 ml-3 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
