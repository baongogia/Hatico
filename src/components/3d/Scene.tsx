"use client";

import { memo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import { TrailerModel } from "./TrailerModel";
import { TrailerData } from "@/data/trailers";

interface Props {
  trailer: TrailerData;
}

export const Scene = memo(function Scene({ trailer }: Props) {
  if (trailer.sketchfabUrl) {
    return (
      <div className="w-full h-full flex items-center justify-end bg-[#040812] pl-0 md:pl-[10%] lg:pl-[20%]">
        <iframe
          title={trailer.name}
          className="w-full h-full border-0"
          src={trailer.sketchfabUrl}
          allowFullScreen
          allow="autoplay; fullscreen; xr-spatial-tracking"
        ></iframe>
      </div>
    );
  }

  return (
    <div className="w-full h-full min-h-[500px] lg:min-h-screen">
      <Canvas
        camera={{ position: [6, 2, 8], fov: 45 }}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          powerPreference: "high-performance",
          alpha: true,
          stencil: false,
          depth: true,
        }}
      >
        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 10, 5]} intensity={2} castShadow />

        <TrailerModel trailer={trailer} />

        <ContactShadows
          resolution={1024}
          scale={20}
          blur={1.5}
          opacity={0.8}
          far={10}
          color="#000000"
        />
        <OrbitControls
          enablePan={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2}
          minDistance={8}
          maxDistance={14}
          target={[1.5, 0, 0]}
        />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
});
