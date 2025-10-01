"use client";

import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

// Brand Colors
const BRAND_PRIMARY_DARK = "#193f88";
const BRAND_ACCENT_LIGHT = "#fdcc14";

// Navigation Links
const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Solutions", href: "/solutions" },
];

// Contact Info (Replace with real data)
const contactInfo = {
  email: "info@sunpower.com",
  phone: "+91 9876543210",
  address: "123 Solar Street, Pune, Maharashtra, India",
};

export default function Footer() {
  return (
    <footer className="relative">
      {/* Gradient Top Border */}
      <div
        className="h-2 w-full"
        style={{
          background: `linear-gradient(90deg, ${BRAND_PRIMARY_DARK}, ${BRAND_ACCENT_LIGHT})`,
        }}
      ></div>

      <div className="bg-white text-gray-700 border-t border-gray-200 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b pb-10 border-gray-200">
            {/* Branding */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="col-span-1 md:col-span-2"
            >
              <Link
                href="/"
                className="flex items-center tracking-wider group"
                style={{ color: BRAND_PRIMARY_DARK }}
              >
                <img
                  src="/logo.webp"
                  alt="Sun Power Logo"
                  width={40}
                  height={40}
                  className="w-12 h-12 mr-3 object-contain transition-transform duration-300 group-hover:scale-110"
                />
                <span className="text-4xl font-serif font-extrabold">
                  Sun<span style={{ color: BRAND_ACCENT_LIGHT }}>Power</span>
                </span>
              </Link>
              <p className="mt-5 text-lg font-light max-w-md text-gray-600 leading-relaxed">
                The sun is free, and so is your future energy. Unlock savings,
                sustainability, and independence with tailored solar solutions.
              </p>
              <p className="mt-4 text-sm italic text-gray-500">
                "Experience the Power of the Sun."
              </p>
            </motion.div>

            {/* Sitemap */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3
                className="text-xl font-semibold mb-6 uppercase tracking-wide"
                style={{ color: BRAND_PRIMARY_DARK }}
              >
                Site Map
              </h3>
              <ul className="space-y-3">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="relative inline-block text-gray-600 hover:text-gray-900 transition duration-300 group"
                    >
                      {item.name}
                      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3
                className="text-xl font-semibold mb-6 uppercase tracking-wide"
                style={{ color: BRAND_PRIMARY_DARK }}
              >
                Contact Us
              </h3>
              <div className="space-y-5 text-gray-600">
                <div className="flex items-start">
                  <Mail
                    className="w-6 h-6 mr-3 flex-shrink-0"
                    style={{ color: BRAND_ACCENT_LIGHT }}
                  />
                  <div>
                    <p className="text-sm font-semibold" style={{ color: BRAND_PRIMARY_DARK }}>
                      Email Support
                    </p>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="hover:text-yellow-500 transition-colors"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone
                    className="w-6 h-6 mr-3 flex-shrink-0"
                    style={{ color: BRAND_ACCENT_LIGHT }}
                  />
                  <div>
                    <p className="text-sm font-semibold" style={{ color: BRAND_PRIMARY_DARK }}>
                      Call Us Today
                    </p>
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="hover:text-yellow-500 transition-colors"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin
                    className="w-6 h-6 mr-3 flex-shrink-0"
                    style={{ color: BRAND_ACCENT_LIGHT }}
                  />
                  <div>
                    <p className="text-sm font-semibold" style={{ color: BRAND_PRIMARY_DARK }}>
                      Visit Our Office
                    </p>
                    <p>{contactInfo.address}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Social + Copyright */}
          <div className="mt-10 flex flex-col items-center space-y-6">
            {/* Social Icons */}
            <div className="flex space-x-6">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Facebook className="w-6 h-6 text-gray-500 hover:text-blue-600 transition-colors" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-6 h-6 text-gray-500 hover:text-pink-500 transition-colors" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-6 h-6 text-gray-500 hover:text-blue-800 transition-colors" />
              </a>
            </div>

            <div className="text-center text-sm text-gray-500">
              <p>
                &copy; {new Date().getFullYear()} Sun Power Solar. All Rights Reserved.
              </p>
              <p className="mt-1">
                Designed by{" "}
                <a
                  href="https://www.lupaentertainment.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold hover:text-yellow-500 transition-colors"
                >
                  Lupa Entertainment
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
