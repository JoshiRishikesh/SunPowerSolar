"use client";

import React from "react";
import { Briefcase, Wrench, Users, Star } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const BRAND_ACCENT_LIGHT = "#fdcc14"; // Gold
const BRAND_NATURE_GREEN = "#0e6b50"; // Deep Forest Green

const teamMembers = [
  {
    name: "Shivaji Chavan",
    role: "Founder & CEO",
    bio: "With over 20 years in renewable energy, Elara drives our strategic vision, ensuring every decision aligns with our goal of permanent energy independence for clients.",
    icon: Briefcase,
    imageUrl: "/team/shivaji.webp",
  },
  {
    name: "Chandrakant Gore",
    role: "Lead Solar Engineer",
    bio: "Rhys holds a PhD in Photovoltaic Systems and leads our design team, specializing in optimizing panel placement for maximum long-term efficiency and output.",
    icon: Wrench,
    imageUrl: "/team/chandu.webp",
  },
  {
    name: "Jada Chen",
    role: "Director of Customer Success",
    bio: "Jada ensures our client experience is seamless from quote to activation. She is the voice of our customers, maintaining our 5-star service rating.",
    icon: Users,
    imageUrl: "/team/shivaji.webp",
  },
  {
    name: "Marcus Bell",
    role: "Installation & Quality Manager",
    bio: "Marcus manages all on-site operations. His focus on rigorous quality checks ensures our installations meet and exceed the 25-year warranty standards.",
    icon: Star,
    imageUrl: "/team/chandu.webp",
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="rounded-xl p-[2px] bg-gradient-to-r from-[#0e6b50] to-[#fdcc14] shadow-xl"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8, type: "spring", stiffness: 250, damping: 20 }}
            >
              <div className="bg-white p-6 rounded-xl flex flex-col items-center text-center h-full relative overflow-hidden">
                
                {/* Profile Image with cinematic blur */}
                <div
                  className="relative mb-6 w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border-4 shadow-2xl flex items-center justify-center"
                  style={{ borderColor: BRAND_ACCENT_LIGHT }}
                >
                  <Image
                    src={member.imageUrl}
                    alt={`Profile of ${member.name}`}
                    fill
                    className="object-cover rounded-full grayscale hover:grayscale-0 transition duration-500 z-10"
                  />
                  <div className="absolute inset-0 rounded-full bg-yellow-200/30 blur-3xl z-0"></div>
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
            </motion.div>
          ))}
        </div>

        {/* Final Call to Action */}
        <div className="text-center mt-16">
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-6">
            Ready to work with the best team in local solar?
          </p>
          <motion.a
            href="/contact"
            className="inline-flex flex-col sm:flex-row items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border border-transparent text-lg font-semibold rounded-full shadow-xl transition-transform duration-300 ease-in-out gap-2 sm:gap-3"
            style={{ backgroundColor: BRAND_ACCENT_LIGHT, color: BRAND_NATURE_GREEN }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ type: "spring", stiffness: 250, damping: 20 }}
          >
            Schedule a Consultation
            <ArrowRight className="w-5 h-5 sm:ml-3 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.a>
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
