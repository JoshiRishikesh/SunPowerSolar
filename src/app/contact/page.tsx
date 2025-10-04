"use client";

import React from "react";
import { Phone, MessageCircle, Zap, Building, Home, LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

// Brand Colors
const BRAND_PRIMARY_NAVY = "#193f88";
const BRAND_ACCENT_LIGHT = "#fdcc14";
const BRAND_GREEN_SUBTLE = "#e6ffed";
const BUTTON_GRADIENT =
  "linear-gradient(to right, #14532d 50%, #0a3d29 100%)";

// Contact Numbers
const contactNumbers = {
  sales: "9326004793",
  service: "8208108473",
};

// Pre-written WhatsApp Messages
const whatsappMessages = {
  sales: `Hello GreenTech Solar Team,%0A
My name is [Your Name], and I am interested in exploring solar solutions for my residential property.%0A%0A
Could you please provide me with more details about installation, pricing, and available options?%0A
You may also reach me at [Your Contact Number] for a quick discussion.%0A%0A
Thank you, looking forward to your assistance.`,

  service: `Hello GreenTech Solar Support,%0A
My name is [Your Name], and I would like to request assistance regarding solar solutions for my commercial property / service support for an existing installation.%0A%0A
Please let me know the process and next steps.%0A
You can also reach me at [Your Contact Number].%0A%0A
Thank you for your support.`
};

// Helper to build WhatsApp link
const getWhatsAppLink = (number: string, message: string) => {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
};

interface ContactCardProps {
  title: string;
  number: string;
  icon: LucideIcon; // Updated type for Lucide icons
  message: string;
}

const ContactCard: React.FC<ContactCardProps> = ({
  title,
  number,
  icon: Icon,
  message,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-3xl shadow-xl p-8 border-t-8 flex flex-col items-center text-center transition-all duration-500 hover:shadow-3xl h-full"
      style={{ borderColor: BRAND_ACCENT_LIGHT }}
    >
      <div
        className="p-4 rounded-full mb-4 shadow-md"
        style={{ backgroundColor: BRAND_PRIMARY_NAVY }}
      >
        <Icon className="w-8 h-8 text-white" />
      </div>

      <h3
        className="text-2xl font-extrabold mb-6"
        style={{ color: BRAND_PRIMARY_NAVY }}
      >
        {title}
      </h3>

      {/* CALL Section */}
      <div className="w-full mb-6">
        <p className="text-lg font-semibold text-gray-700 mb-3">
          Call Our Experts
        </p>
        <motion.a
          whileHover={{ scale: 1.05 }}
          href={`tel:${number}`}
          className="flex items-center justify-center p-3 rounded-xl font-bold text-lg text-white shadow-lg"
          style={{ backgroundImage: BUTTON_GRADIENT }}
        >
          <Phone className="w-5 h-5 mr-3" />
          {number}
        </motion.a>
      </div>

      {/* WhatsApp Section */}
      <div className="w-full border-t border-gray-100 pt-6">
        <p className="text-lg font-semibold text-gray-700 mb-3">
          Connect via WhatsApp
        </p>
        <motion.a
          whileHover={{ scale: 1.05 }}
          href={getWhatsAppLink(number, message)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center p-3 rounded-xl font-bold text-lg text-gray-800 transition duration-300 shadow-md border-2"
          style={{
            borderColor: BRAND_ACCENT_LIGHT,
            backgroundColor: BRAND_ACCENT_LIGHT,
          }}
        >
          <MessageCircle className="w-5 h-5 mr-3" />
          Chat Now
        </motion.a>
      </div>
    </motion.div>
  );
};

export default function ContactPage() {
  return (
    <div className="min-h-screen font-sans">
      {/* Hero Section */}
      <header
        className="py-20 sm:py-28 text-center relative overflow-hidden"
        style={{ backgroundColor: BRAND_PRIMARY_NAVY }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <Zap
            className="w-14 h-14 mx-auto mb-6 text-white animate-pulse"
            style={{ color: BRAND_ACCENT_LIGHT }}
          />
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-4">
            Get In Touch
          </h1>
          <p className="mt-4 text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Speak directly with our team for immediate solar inquiries, support,
            or site assessments.
          </p>
        </motion.div>
      </header>

      {/* Contact Cards */}
      <section
        className="py-20 relative"
        style={{ backgroundColor: BRAND_GREEN_SUBTLE }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <ContactCard
              title="Sales & Residential Inquiries"
              number={contactNumbers.sales}
              icon={Home}
              message={whatsappMessages.sales}
            />
            <ContactCard
              title="Commercial & Service Support"
              number={contactNumbers.service}
              icon={Building}
              message={whatsappMessages.service}
            />
          </div>

          <p className="mt-12 text-center text-sm text-gray-500 italic">
            All calls and WhatsApp messages are handled by our dedicated solar
            specialists during business hours.
          </p>
        </motion.div>
      </section>
    </div>
  );
}
