"use client";

import React from "react";
import { motion } from "framer-motion";

const BRAND_PRIMARY_DARK = "#193f88"; // Deep Navy Blue
const BRAND_ACCENT_LIGHT = "#fdcc14"; // Bright Yellow/Gold

type AnimatedCounterProps = {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  maxFontPx?: number;
  minFontPx?: number;
};

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  duration = 1600,
  prefix = "",
  suffix = "",
  maxFontPx = 64,
  minFontPx = 16,
}) => {
  const [count, setCount] = React.useState<number>(0);
  const wrapperRef = React.useRef<HTMLDivElement | null>(null);
  const [fontPx, setFontPx] = React.useState<number>(maxFontPx);

  React.useEffect(() => {
    const computeFont = () => {
      const node = wrapperRef.current;
      if (!node) return;
      const available = Math.max(40, node.clientWidth - 32);
      const rawText = `${prefix}${end}${suffix}`;
      const chars = Math.max(1, rawText.length);
      const estimated = Math.floor((available / chars) * 0.9);
      setFontPx(Math.max(minFontPx, Math.min(maxFontPx, estimated)));
    };
    computeFont();
    window.addEventListener("resize", computeFont);
    return () => window.removeEventListener("resize", computeFont);
  }, [end, prefix, suffix, maxFontPx, minFontPx]);

  React.useEffect(() => {
    let start: number | null = null;
    let rafId = 0;

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const progress = Math.min(1, elapsed / duration);
      setCount(Math.floor(progress * end));
      if (progress < 1) rafId = window.requestAnimationFrame(step);
      else setCount(end);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        if (e?.isIntersecting) {
          rafId = window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );

    if (wrapperRef.current) observer.observe(wrapperRef.current);

    return () => {
      window.cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, [end, duration]);

  return (
    <div ref={wrapperRef} className="w-full flex justify-center items-center">
      <div
        className="whitespace-nowrap overflow-hidden"
        style={{
          fontSize: `${fontPx}px`,
          lineHeight: 1,
          fontWeight: 800,
          color: BRAND_ACCENT_LIGHT,
          letterSpacing: "-0.01em",
        }}
      >
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </div>
    </div>
  );
};

const stats = [
  { value: 620, label: "Homes Solarized", suffix: "+" },
  { value: 15, label: "Years of Experience", suffix: "+" },
  { value: 1200000, label: "Savings Generated", prefix: "₹" },
];

export default function BenefitsStatsSection() {
  return (
    <section
      className="py-20 md:py-28"
      style={{ backgroundColor: BRAND_PRIMARY_DARK }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
            A Foundation Built on{" "}
            <span style={{ color: BRAND_ACCENT_LIGHT }}>Results & Trust</span>
          </h2>
          <p className="mt-3 text-sm md:text-base text-gray-200 max-w-2xl mx-auto">
            Our track record speaks for itself. Reliable, high-performing solar
            systems that deliver measurable savings and long-term peace of mind.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              className="relative p-6 md:p-8 rounded-2xl border border-white/8 bg-white/4 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.45)] overflow-hidden flex flex-col items-center justify-center cursor-pointer"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: idx * 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
              whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
            >
              {/* Top accent band */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1 rounded-b-full"
                style={{ backgroundColor: BRAND_ACCENT_LIGHT, opacity: 0.95 }}
              />

              {/* Number */}
              <div className="w-full flex-1 flex items-center justify-center">
                <AnimatedCounter
                  end={stat.value}
                  prefix={stat.prefix ?? ""}
                  suffix={stat.suffix ?? ""}
                  maxFontPx={72}
                  minFontPx={18}
                />
              </div>

              {/* Label */}
              <div className="mt-4 text-center">
                <p
                  className="text-sm md:text-base font-semibold uppercase tracking-wider"
                  style={{ color: BRAND_ACCENT_LIGHT }}
                >
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
