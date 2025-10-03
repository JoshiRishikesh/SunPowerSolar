"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { TextureLoader, Color } from "three";
import { useRef, useMemo, Suspense, useState } from "react";
import type { Mesh, Group, MeshStandardMaterial, MeshBasicMaterial } from "three";
import Link from "next/link";
import { motion } from "framer-motion";

// 3D Solar System component
function SolarSystem() {
  const sunRef = useRef<Mesh>(null!);
  const earthRef = useRef<Mesh>(null!);
  const earthOrbitRef = useRef<Group>(null!);
  const [opacity, setOpacity] = useState(0);

  const sunTexture = useMemo(() => new TextureLoader().load("/sun.webp"), []);
  const earthTexture = useMemo(() => new TextureLoader().load("/earth.webp"), []);

  // Animate rotation + fade in
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    if (sunRef.current) sunRef.current.rotation.y = t * 0.05;
    if (earthOrbitRef.current) earthOrbitRef.current.rotation.y = t * 0.5;
    if (earthRef.current) earthRef.current.rotation.y = t * 1;

    // Smooth fade in for 2 seconds
    if (opacity < 1) {
      setOpacity((prev) => Math.min(prev + 0.01, 1));
    }

    // Apply opacity to materials
    if (sunRef.current) {
      (sunRef.current.material as MeshBasicMaterial).opacity = opacity;
    }
    if (earthRef.current) {
      (earthRef.current.material as MeshStandardMaterial).opacity = opacity;
    }
  });

  return (
    <>
      <Stars radius={80} depth={50} count={5000} factor={4} fade />

      {/* Sun */}
      <mesh ref={sunRef} position={[0, 0, 0]}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshBasicMaterial
          map={sunTexture}
          toneMapped={false}
          transparent
          opacity={0}
        />
        <pointLight intensity={100} distance={50} decay={2} color={"#ffffff"} />
      </mesh>

      {/* Earth + Orbit */}
      <group ref={earthOrbitRef}>
        <mesh ref={earthRef} position={[5, 0, 0]}>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial
            map={earthTexture}
            transparent
            opacity={0}
          />
        </mesh>
      </group>

      <ambientLight intensity={0.1} />
    </>
  );
}

// Main Hero section
export default function HeroSolarSystem() {
  return (
    <div className="w-full h-screen relative overflow-hidden">
      <Suspense fallback={null}>
        <Canvas
          camera={{ position: [0, 2, 12], fov: 50 }}
          style={{ width: "100%", height: "100%" }}
          className="bg-black"
          onCreated={({ scene }) => {
            scene.background = new Color(0x000000);
          }}
        >
          <SolarSystem />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            rotateSpeed={0.3}
          />
        </Canvas>
      </Suspense>

      {/* Overlay Text with Framer Motion Fade */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1.2 }}
        >
          Power Your World with Sun Power Solar
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl mb-6 drop-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1.2 }}
        >
          Harness the sun&apos;s energy for a brighter, sustainable future.
        </motion.p>
        <Link href="/contact">
          <motion.button
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-lg shadow-lg transition-all"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            Connect With Us
          </motion.button>
        </Link>
      </motion.div>

      {/* Scrollable content with fade */}
      <motion.div
        className="h-screen flex items-center justify-center bg-gray-900 text-white text-2xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      >
        <p>Scroll down to explore our solar solutions...</p>
      </motion.div>
    </div>
  );
}
