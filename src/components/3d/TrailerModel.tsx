"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Mesh } from "three";
import { TrailerData } from "@/data/trailers";

interface Props {
  trailer: TrailerData;
}

export function TrailerModel({ trailer }: Props) {
  const meshRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2;
    }
  });

  // Tạo một hình khối placeholder dựa trên loại rơ moóc
  const isTanker = trailer.type.includes("Tanker");
  const isLowboy = trailer.type.includes("Lowboy");

  return (
    <group>
      {isTanker ? (
        <mesh ref={meshRef}>
          <cylinderGeometry args={[1, 1, 4, 32]} />
          <meshStandardMaterial
            color="#8b0000"
            metalness={0.9}
            roughness={0.2}
          />
        </mesh>
      ) : isLowboy ? (
        <mesh ref={meshRef} position={[0, -0.5, 0]}>
          <boxGeometry args={[4, 0.2, 1.5]} />
          <meshStandardMaterial
            color="#1e3a63"
            metalness={0.85}
            roughness={0.25}
          />
        </mesh>
      ) : (
        <mesh ref={meshRef}>
          <boxGeometry args={[4, 0.5, 1.2]} />
          <meshStandardMaterial
            color="#1e3a63"
            metalness={0.9}
            roughness={0.25}
          />
        </mesh>
      )}
      <mesh position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#0b1a30" transparent opacity={0.4} />
      </mesh>
    </group>
  );
}
