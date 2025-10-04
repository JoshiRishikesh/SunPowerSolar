"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Sun, Zap } from "lucide-react";

export default function Preloader({ onFinish }: { onFinish?: () => void }) {
  const [fadeOut, setFadeOut] = useState(false);
  const [floatingItems, setFloatingItems] = useState<any[]>([]); // generate only on client

  useEffect(() => {
    // generate particles on client after mount
    const items = Array.from({ length: 8 }).map((_, i) => ({
      size: 6 + Math.random() * 6,
      x: Math.random() * 200 - 100,
      y: Math.random() * 200 - 100,
      icon: i % 2 === 0 ? <Sun size={20} /> : <Zap size={20} />,
      delay: Math.random() * 2,
    }));
    setFloatingItems(items);

    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => onFinish?.(), 800);
    }, 3000); // total duration
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {!fadeOut && floatingItems.length > 0 && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            background: "linear-gradient(135deg, #d9f99d, #bef264, #fcd34d, #fb923c)",
          }}
        >
          {/* Top Heading */}
          <motion.h1
            className="text-4xl sm:text-6xl font-extrabold text-center text-black"
            style={{
              textShadow: "0 0 12px #ffd700, 0 0 24px #ffd700/50",
            }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            Sun Power Solar
          </motion.h1>

          {/* Tagline */}
          <motion.p
            className="mt-2 text-lg sm:text-2xl text-black/80 text-center"
            animate={{ opacity: [0.7, 1, 0.7], y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            Achieve Permanent Energy Freedom
          </motion.p>

          {/* Logo with halo */}
          <div className="relative mt-6 flex items-center justify-center">
            <motion.div
              className="absolute w-[220px] h-[220px] rounded-full border-2 border-yellow-400 opacity-40"
            />
            <Image
              src="/logo.webp"
              alt="Sun Power Solar Logo"
              width={140}
              height={140}
              className="relative z-10 sm:w-[150px] sm:h-[150px]"
            />
            <motion.div
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/60 to-transparent"
              style={{ transform: "skewX(-20deg)" }}
              animate={{ x: ["-150%", "150%"] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />
          </div>

          {/* Floating Icons */}
          {floatingItems.map((item, idx) => (
            <motion.div
              key={idx}
              className="absolute text-yellow-500/80"
              style={{ width: item.size, height: item.size }}
              animate={{
                x: [0, item.x, 0],
                y: [0, item.y, 0],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                repeat: Infinity,
                duration: 4 + Math.random() * 2,
                delay: item.delay,
                ease: "easeInOut",
              }}
            >
              {item.icon}
            </motion.div>
          ))}

          {/* Extra Glow Rings */}
          <motion.div
            className="absolute w-[300px] h-[300px] rounded-full border-2 border-yellow-300 opacity-30"
            animate={{ rotate: [0, 360] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          />
          <motion.div
            className="absolute w-[400px] h-[400px] rounded-full border-2 border-yellow-200 opacity-20"
            animate={{ rotate: [360, 0] }}
            transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
