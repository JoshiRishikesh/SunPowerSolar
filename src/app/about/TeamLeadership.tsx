"use client";

import React from 'react';
import { Briefcase, Wrench, Users, Star } from 'lucide-react';

const BRAND_ACCENT_LIGHT = '#fdcc14'; // Gold
const BRAND_NATURE_GREEN = '#0e6b50'; // Deep Forest Green

const teamMembers = [
  {
    name: 'Elara Vance',
    role: 'Founder & CEO',
    bio: 'With over 20 years in renewable energy, Elara drives our strategic vision, ensuring every decision aligns with our goal of permanent energy independence for clients.',
    icon: Briefcase,
    imageUrl: 'https://placehold.co/400x400/0e6b50/ffffff?text=E.V.',
  },
  {
    name: 'Dr. Rhys Kaelan',
    role: 'Lead Solar Engineer',
    bio: 'Rhys holds a PhD in Photovoltaic Systems and leads our design team, specializing in optimizing panel placement for maximum long-term efficiency and output.',
    icon: Wrench,
    imageUrl: 'https://placehold.co/400x400/0e6b50/ffffff?text=R.K.',
  },
  {
    name: 'Jada Chen',
    role: 'Director of Customer Success',
    bio: 'Jada ensures our client experience is seamless from quote to activation. She is the voice of our customers, maintaining our 5-star service rating.',
    icon: Users,
    imageUrl: 'https://placehold.co/400x400/0e6b50/ffffff?text=J.C.',
  },
  {
    name: 'Marcus Bell',
    role: 'Installation & Quality Manager',
    bio: 'Marcus manages all on-site operations. His focus on rigorous quality checks ensures our installations meet and exceed the 25-year warranty standards.',
    icon: Star,
    imageUrl: 'https://placehold.co/400x400/0e6b50/ffffff?text=M.B.',
  },
];

export default function TeamLeadership() {
  return (
    <section className="py-24 sm:py-32 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl sm:text-5xl font-extrabold tracking-tight"
            style={{ color: BRAND_NATURE_GREEN }}
          >
            Meet the Dedicated Team
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            We are local experts—certified engineers, installation managers, and customer advocates—driven by a shared passion for sustainable energy.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="rounded-xl p-[2px] bg-gradient-to-r from-[#0e6b50] to-[#fdcc14] hover:scale-[1.03] transition-transform duration-500 shadow-xl"
            >
              <div className="bg-white p-6 rounded-xl flex flex-col items-center text-center h-full">
                
                {/* Profile Image */}
                <div
                  className="mb-6 w-32 h-32 rounded-full overflow-hidden border-4 shadow-md"
                  style={{ borderColor: BRAND_ACCENT_LIGHT }}
                >
                  <img
                    src={member.imageUrl}
                    alt={`Profile of ${member.name}`}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = `https://placehold.co/400x400/0e6b50/ffffff?text=${member.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('.')}`;
                    }}
                  />
                </div>

                {/* Role Icon */}
                <div
                  className="p-3 rounded-full mb-3 shadow-md"
                  style={{ backgroundColor: BRAND_NATURE_GREEN }}
                >
                  <member.icon
                    className="w-5 h-5"
                    style={{ color: BRAND_ACCENT_LIGHT }}
                  />
                </div>

                {/* Name and Title */}
                <h3
                  className="text-2xl font-bold mb-1"
                  style={{ color: BRAND_NATURE_GREEN }}
                >
                  {member.name}
                </h3>
                <p
                  className="text-lg font-semibold mb-4"
                  style={{ color: BRAND_ACCENT_LIGHT }}
                >
                  {member.role}
                </p>

                {/* Bio */}
                <p className="text-gray-600 text-base leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Final Call to Action */}
        <div className="text-center mt-16">
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-6">
            Ready to work with the best team in local solar?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-semibold rounded-full shadow-xl transition duration-300 ease-in-out transform hover:scale-105 group"
            style={{ backgroundColor: BRAND_ACCENT_LIGHT, color: BRAND_NATURE_GREEN }}
          >
            Schedule a Consultation
            <ArrowRight className="w-5 h-5 ml-3 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}

const ArrowRight = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);
