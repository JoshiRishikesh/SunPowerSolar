"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function ProductsShowcase() {
  const products = [
    {
      name: "Solar Panel",
      description:
        "High efficiency solar panels to power your home with clean energy.",
      image: "/panel.webp",
    },
    {
      name: "Solar Battery",
      description:
        "Reliable solar battery storage for uninterrupted energy supply.",
      image: "/panel.webp",
    },
    {
      name: "Inverter",
      description:
        "Smart inverters to optimize your solar power usage effectively.",
      image: "/panel.webp",
    },
    {
      name: "LED Lights",
      description:
        "Energy-efficient LED lighting solutions powered by solar energy.",
      image: "/panel.webp",
    },
  ];

  const [selected, setSelected] = useState(0);

  return (
    <section className="w-full py-16 sm:py-24 flex flex-col items-center">

        {/* Products Navbar */}
        <div className="overflow-x-auto w-full mb-12 sm:mb-16">
        <div className="flex gap-4 sm:gap-6 min-w-max px-4 sm:px-0 justify-start sm:justify-center">
            {products.map((product, idx) => (
            <button
                key={idx}
                onClick={() => setSelected(idx)}
                className={`px-4 sm:px-6 py-2 font-semibold rounded-full transition-all duration-300 whitespace-nowrap ${
                selected === idx
                    ? "bg-yellow-400 text-black scale-105 shadow-lg"
                    : "bg-white text-gray-700 hover:bg-yellow-200"
                }`}
            >
                {product.name}
            </button>
            ))}
        </div>
        </div>



      {/* Product Showcase (edge-to-edge, no bg) */}
      <div className="w-full px-2 sm:px-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            className="w-full flex flex-col sm:flex-row items-center gap-8 sm:gap-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            {/* Product Image sliding left to right */}
            <motion.div
              className="w-full sm:w-1/2 flex justify-center cursor-pointer"
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              onClick={() =>
                setSelected((prev) => (prev + 1) % products.length)
              }
            >
              <Image
                src={products[selected].image}
                alt={products[selected].name}
                width={400}
                height={300}
                className="object-contain filter drop-shadow-[0_20px_25px_rgba(0,0,0,0.25)]"
              />
            </motion.div>

            {/* Product Info */}
            <div className="w-full sm:w-1/2 flex flex-col items-center sm:items-start text-center sm:text-left px-2 sm:px-4">
              {/* Heading slides from left */}
              <motion.h2
                key={`heading-${selected}`}
                className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6 text-gray-800 drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)]"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {products[selected].name}
              </motion.h2>

              {/* Description fades from bottom */}
              <motion.p
                key={`desc-${selected}`}
                className="text-gray-700 text-base sm:text-lg drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              >
                {products[selected].description}
              </motion.p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
