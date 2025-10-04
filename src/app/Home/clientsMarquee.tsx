"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ClientsMarquee() {
  const clients = [
    "/logo.webp",
    "/logo.webp",
    "/logo.webp",
    "/logo.webp",
    "/logo.webp",
    "/logo.webp",
  ];

  const repeatedClients = [...clients, ...clients];

  return (
    <section className="w-full py-12 overflow-hidden relative"
      style={{
        background: "linear-gradient(to bottom, #fef3c7 0%, #fff9f0 50%, #87ceeb 100%)"
        // Top: soft warm lime/yellow (matches solar section)
        // Middle: smooth transition
        // Bottom: sky blue
      }}
    >
      {/* Gradient mask edges for horizontal marquee */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-transparent to-white/0" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-transparent to-white/0" />
      </div>

      {/* First row */}
      <motion.div
        className="flex gap-12 items-center mb-6"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        {repeatedClients.map((logo, idx) => (
          <div
            key={`row1-${idx}`}
            className="flex-shrink-0 w-32 h-20 sm:w-40 sm:h-24 flex items-center justify-center"
          >
            <Image
              src={logo}
              alt={`Client ${idx + 1}`}
              width={160}
              height={96}
              className="object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </motion.div>

      {/* Second row moving opposite */}
      <motion.div
        className="flex gap-12 items-center mt-6"
        animate={{ x: ["-50%", "0%"] }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
      >
        {repeatedClients.map((logo, idx) => (
          <div
            key={`row2-${idx}`}
            className="flex-shrink-0 w-32 h-20 sm:w-40 sm:h-24 flex items-center justify-center"
          >
            <Image
              src={logo}
              alt={`Client ${idx + 1}`}
              width={160}
              height={96}
              className="object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
}
