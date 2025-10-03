"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";

// Timing constants
const STAGE_HELLO = 0;
const STAGE_WELCOME = 1;
const STAGE_LOGO = 2;
const STAGE_FADE_OUT = 3;

const HELLO_DURATION = 800;
const WELCOME_DURATION = 1500;
const LOGO_DURATION = 1200;
const FADE_OUT_DURATION = 800;

export default function Preloader({ onFinish }: { onFinish?: () => void }) {
  const [currentStage, setCurrentStage] = useState(STAGE_HELLO);

  const handleFinish = useCallback(() => {
    setCurrentStage(STAGE_FADE_OUT);
    setTimeout(() => onFinish?.(), FADE_OUT_DURATION);
  }, [onFinish]);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (currentStage === STAGE_HELLO) timer = setTimeout(() => setCurrentStage(STAGE_WELCOME), HELLO_DURATION);
    else if (currentStage === STAGE_WELCOME) timer = setTimeout(() => setCurrentStage(STAGE_LOGO), WELCOME_DURATION);
    else if (currentStage === STAGE_LOGO) timer = setTimeout(() => handleFinish(), LOGO_DURATION);

    return () => clearTimeout(timer);
  }, [currentStage, handleFinish]);

  const fadeOutOpacity = currentStage === STAGE_FADE_OUT ? 0 : 1;
  const isHelloVisible = currentStage === STAGE_HELLO;
  const isWelcomeVisible = currentStage >= STAGE_WELCOME && currentStage < STAGE_FADE_OUT;
  const isLogoVisible = currentStage >= STAGE_LOGO && currentStage < STAGE_FADE_OUT;

  const welcomeShiftClass = currentStage === STAGE_LOGO ? "translate-y-[-70px] scale-[0.9]" : "translate-y-0 scale-100";
  const logoShiftClass = currentStage === STAGE_LOGO ? "translate-y-0 opacity-100 animate-bounce-slow" : "translate-y-20 opacity-0";

  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center z-50 transition-opacity`}
      style={{
        opacity: fadeOutOpacity,
        transitionDuration: `${FADE_OUT_DURATION}ms`,
        background: 'linear-gradient(135deg, #FFF7E0 0%, #FFE066 50%, #FFD700 100%)'
      }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute w-[200%] h-[200%] bg-gradient-radial from-yellow-200 via-yellow-300 to-yellow-400 opacity-20 animate-spin-slow"></div>
        <div className="absolute w-full h-full bg-[url('/dots.svg')] bg-repeat opacity-10 animate-pulse-slow"></div>
      </div>

      {/* Logo Glow */}
      <div
        className={`absolute w-[350px] h-[350px] rounded-full bg-yellow-400/40 blur-3xl transition-all duration-1000 z-10 
          ${isLogoVisible ? "opacity-100 scale-100 animate-ping-slow" : "opacity-0 scale-75"}`}
      />

      {/* Hello */}
      <h1
        className={`absolute text-6xl font-bold font-sans transition-opacity duration-300 z-30 text-gray-900`}
        style={{ textShadow: "0 0 3px rgba(0,0,0,0.2), 0 2px 4px rgba(0,0,0,0.3)" }}
      >
        {isHelloVisible ? "Hello" : ""}
      </h1>

      {/* Welcome & Logo */}
      <div className="flex flex-col items-center justify-center z-20">
        <h1
          className={`text-2xl sm:text-4xl font-extrabold font-sans uppercase tracking-wide
            transition-all duration-700 ease-out 
            ${isWelcomeVisible ? "opacity-100 animate-gradient-text" : "opacity-0"}
            ${welcomeShiftClass}`}
          style={{
            color: "#1a1a1a", // dark text for light bg
            textShadow: "1px 1px 2px rgba(0,0,0,0.2), 2px 2px 4px rgba(0,0,0,0.2)",
          }}
        >
          Welcome to Sun Power Solar
        </h1>

        <div className={`mt-4 transition-all duration-700 ease-out ${isLogoVisible ? "delay-300" : ""} ${logoShiftClass}`}>
          <Image src="/logo.webp" alt="Sun Power Solar" width={150} height={150} />
        </div>
      </div>

      {/* Tailwind Keyframes */}
      <style jsx>{`
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes ping-slow {
          0%,100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.1); opacity: 1; }
        }
        @keyframes bounce-slow {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes pulse-slow {
          0%,100% { opacity: 0.05; }
          50% { opacity: 0.15; }
        }
        @keyframes gradient-text {
          0%,100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-spin-slow { animation: spin-slow 30s linear infinite; }
        .animate-ping-slow { animation: ping-slow 2s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounce-slow 2s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        .animate-gradient-text { background-size: 200% auto; animation: gradient-text 3s linear infinite; }
      `}</style>
    </div>
  );
}
