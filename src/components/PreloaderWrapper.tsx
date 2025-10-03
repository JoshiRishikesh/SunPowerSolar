// src/components/PreloaderWrapper.tsx
"use client";

import { useState, useEffect } from 'react';
import Preloader from './preloader'; // Assuming preloader.tsx is in the same directory

export default function PreloaderWrapper({ children }: { children: React.ReactNode }) {
  const [isPreloading, setIsPreloading] = useState(true);
  const [sessionHasLoaded, setSessionHasLoaded] = useState(false);

  useEffect(() => {
    // 1. Check Session Storage on mount
    if (typeof window !== 'undefined') {
      const loadedFlag = sessionStorage.getItem('appHasLoaded');
      if (loadedFlag === 'true') {
        // If flag exists, skip the preloader
        setSessionHasLoaded(true);
        setIsPreloading(false);
      }
    }
  }, []);

  const handlePreloaderFinish = () => {
    // 2. Hide preloader after animation is done
    setIsPreloading(false);
    // 3. Set the session flag so it doesn't run on the next page load
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('appHasLoaded', 'true');
    }
  };

  // If we need to show the preloader, return only the Preloader component
  if (isPreloading && !sessionHasLoaded) {
    return <Preloader onFinish={handlePreloaderFinish} />;
  }

  // Once loading is complete or skipped, render the main content
  return <>{children}</>;
}