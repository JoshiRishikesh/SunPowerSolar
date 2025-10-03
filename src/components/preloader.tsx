"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Preloader({ onFinish }: { onFinish?: () => void }) {
  const [step, setStep] = useState(0); // 0: Hello, 1: Welcome, 2: Logo, 3: FadeOut
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // FIX: Changed 'let timers' to 'const timers' to satisfy prefer-const rule.
    // Since only methods like push() are called on the array, the reference itself is not reassigned.
    const timers: NodeJS.Timeout[] = [];

    // Step 0: Hello dots
    if (step === 0) {
      timers.push(
        setTimeout(() => setStep(1), 2000) // give Hello enough time to fade in/out
      );
    }

    // Step 1: Welcome text
    if (step === 1) {
      timers.push(
        setTimeout(() => setStep(2), 2500) // smooth delay before Logo
      );
    }

    // Step 2: Logo
    if (step === 2) {
      timers.push(
        setTimeout(() => {
          setFadeOut(true); // start fade out
          timers.push(
            setTimeout(() => onFinish?.(), 1200) // smooth fade out
          );
        }, 2500)
      );
    }

    // Cleanup: Clear all timers when the component unmounts or step changes
    return () => timers.forEach(clearTimeout);
  }, [step, onFinish]);

  const shadowStyle = {
    // Using a template literal for textShadow for potential color interpolation if needed
    textShadow: `
      2px 2px 6px rgba(25,63,136,0.6),
      4px 4px 12px rgba(253,204,20,0.5),
      8px 8px 16px rgba(25,63,136,0.4)
    `,
  };

  return (
    <AnimatePresence>
      {!fadeOut && (
        <motion.div
          className="fixed inset-0 flex flex-col items-center justify-center z-50 bg-gradient-to-br from-yellow-100 via-yellow-200 to-yellow-300 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          {/* Hello with cinematic dots */}
          {step === 0 && (
            <motion.h1
              className="text-4xl sm:text-6xl font-extrabold text-center mb-4 text-gray-900"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              style={shadowStyle}
            >
              Hello
              <span className="inline-flex ml-1">
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    className="inline-block"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{
                      duration: 0.6,
                      repeat: Infinity,
                      repeatDelay: 0.2,
                      delay: i * 0.4,
                      ease: "easeInOut",
                    }}
                  >
                    .
                  </motion.span>
                ))}
              </span>
            </motion.h1>
          )}

          {/* Welcome Text cinematic reveal */}
          {step === 1 && (
            <motion.h1
              className="text-3xl sm:text-5xl font-extrabold text-center leading-snug"
              initial={{ opacity: 0, y: 60, scale: 0.8, letterSpacing: "-0.1em" }}
              animate={{ opacity: 1, y: 0, scale: 1, letterSpacing: "0.05em" }}
              exit={{ opacity: 0, y: -40, scale: 0.9 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              style={shadowStyle}
            >
              Welcome to <br /> Sun Power Solar!
            </motion.h1>
          )}

          {/* Logo cinematic pop */}
          {step === 2 && (
            <motion.div
              className="mt-6 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            >
              <Image
                src="/logo.webp"
                alt="Sun Power Solar"
                width={120}
                height={120}
                className="sm:w-[150px] sm:h-[150px]"
              />
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}