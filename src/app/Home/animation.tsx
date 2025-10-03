"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { TextureLoader, Color } from "three";
import { useRef, useMemo, Suspense, useState } from "react";
import type { Mesh, Group } from "three";
import Link from "next/link";
import Preloader from "@/components/preloader";


// 3D Solar System component
function SolarSystem() {
  const sunRef = useRef<Mesh>(null!);
  const earthRef = useRef<Mesh>(null!);
  const earthOrbitRef = useRef<Group>(null!);

  const sunTexture = useMemo(() => new TextureLoader().load("/sun.webp"), []);
  const earthTexture = useMemo(() => new TextureLoader().load("/earth.webp"), []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (sunRef.current) sunRef.current.rotation.y = t * 0.05;
    if (earthOrbitRef.current) earthOrbitRef.current.rotation.y = t * 0.5;
    if (earthRef.current) earthRef.current.rotation.y = t * 1;
  });

  return (
    <>
      <Stars radius={80} depth={50} count={5000} factor={4} fade />

      <mesh ref={sunRef} position={[0, 0, 0]}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshBasicMaterial map={sunTexture} toneMapped={false} />
        <pointLight intensity={100} distance={50} decay={2} color={"#ffffff"} />
      </mesh>

      <group ref={earthOrbitRef}>
        <mesh ref={earthRef} position={[5, 0, 0]}>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial map={earthTexture} />
        </mesh>
      </group>

      <ambientLight intensity={0.1} />
    </>
  );
}

// Main Hero section
export default function HeroSolarSystem() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="w-full h-screen relative overflow-hidden">
      {!loaded && <Preloader onFinish={() => setLoaded(true)} />}

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

      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 z-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Power Your World with Sun Power Solar
        </h1>
        <p className="text-xl md:text-2xl mb-6 drop-shadow-md">
          Harness the sun&apos;s energy for a brighter, sustainable future.
        </p>
        <Link href="/contact">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-lg shadow-lg transition-all">
            Connect With Us
          </button>
        </Link>
      </div>

      {/* Scrollable content */}
      <div className="h-screen flex items-center justify-center bg-gray-900 text-white text-2xl">
        <p>Scroll down to explore our solar solutions...</p>
      </div>
    </div>
  );
}
