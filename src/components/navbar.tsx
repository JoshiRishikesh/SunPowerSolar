"use client"; // <-- ADD THIS LINE

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // Using Lucide for clean icons
import Image from 'next/image';

// Define the navigation links
const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Contact', href: '/contact' },
];

// Define the Brand Colors for precise use
const BRAND_PRIMARY_DARK = '#193f88'; // Majority Color (Dark Blue)
const BRAND_ACCENT_LIGHT = '#fdcc14'; // Accent Color (Bright Yellow/Gold)

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Toggle for the mobile menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        // 1. Header now uses a Light Background (White)
        <header 
            className="sticky top-0 z-50 shadow-lg border-b bg-white" 
            style={{ borderColor: '#e5e7eb' }} // Light gray border
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* 1. Logo/Brand Name with Image */}
                    <div className="flex-shrink-0">
                        <Link 
                            href="/" 
                            className="flex items-center tracking-wider group text-gray-900" 
                            style={{ color: BRAND_PRIMARY_DARK }} // Enforce dark blue text for the whole logo link
                        >
                            {/* Custom Image Logo (REPLACE THIS PATH) */}
                            <Image
                                src="/logo.webp" // <-- REPLACE THIS WITH YOUR LOGO'S ACTUAL PATH
                                alt="Sun Power Solar Company Logo"
                                width={32} // Adjusted size for Navbar
                                height={32} // Adjusted size for Navbar
                                className="w-8 h-8 mr-3 object-contain transition-transform duration-300 group-hover:scale-110" 
                            />
                            {/* Text part of the logo, using the exact Accent color hex */}
                            <span className="text-3xl font-serif font-extrabold">
                                Sun<span style={{ color: BRAND_ACCENT_LIGHT }}>Power</span>
                            </span>
                        </Link>
                    </div>

                    {/* 2. Desktop Navigation Links */}
                    <nav className="hidden lg:flex space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                // Links are now dark text by default, hovering to the Accent color
                                className="text-gray-700 transition duration-300 text-lg font-medium tracking-wide"
                                style={{ color: BRAND_PRIMARY_DARK }} // Base color is dark blue
                                onMouseEnter={(e) => e.currentTarget.style.color = BRAND_ACCENT_LIGHT}
                                onMouseLeave={(e) => e.currentTarget.style.color = BRAND_PRIMARY_DARK}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* 3. Desktop CTA Button (Gold Accent for high conversion) */}
                    <div className="hidden lg:block">
                        <Link
                            href="/contact"
                            // CTA button remains Gold BG and Dark Blue Text (Good Contrast)
                            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-semibold rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
                            style={{ backgroundColor: BRAND_ACCENT_LIGHT, color: BRAND_PRIMARY_DARK }} // Gold BG, Blue Text
                        >
                            Free Site Survey
                        </Link>
                    </div>

                    {/* 4. Mobile Menu Button */}
                    <div className="lg:hidden">
                        <button
                            onClick={toggleMenu}
                            // Using a standard Tailwind color (yellow-500) for the focus ring to avoid the linter warning
                            className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500"
                            // Button icon is now dark blue. Removed the problematic inline style.
                            style={{ color: BRAND_PRIMARY_DARK }} 
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMenuOpen ? (
                                <X className="h-7 w-7" aria-hidden="true" />
                            ) : (
                                <Menu className="h-7 w-7" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* 5. Mobile Menu Panel (Hidden by default, slides in) */}
            <div className={`lg:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <div 
                    // Mobile panel uses the Dark Primary color for a strong contrast drop-down
                    className="px-2 pt-2 pb-3 space-y-2 sm:px-3 text-white"
                    style={{ backgroundColor: BRAND_PRIMARY_DARK }} 
                >
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setIsMenuOpen(false)} // Close menu on click
                            // Links are light on dark background, hovering to the Accent color
                            className="block px-3 py-2 rounded-md text-base font-medium text-white transition duration-300 hover:bg-white/10"
                            onMouseEnter={(e) => e.currentTarget.style.color = BRAND_ACCENT_LIGHT}
                            onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
                            style={{ color: 'white' }}
                        >
                            {item.name}
                        </Link>
                    ))}
                    {/* Mobile CTA */}
                    <Link
                            href="/contact"
                            onClick={() => setIsMenuOpen(false)}
                            className="block text-center w-full px-3 py-3 rounded-lg text-base font-semibold transition duration-300 mt-4"
                            style={{ backgroundColor: BRAND_ACCENT_LIGHT, color: BRAND_PRIMARY_DARK }} // Gold BG, Blue Text
                        >
                            Get a Free Estimate
                        </Link>
                </div>
            </div>
        </header>
    );
}
