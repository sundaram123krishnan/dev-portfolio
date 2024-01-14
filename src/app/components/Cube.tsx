"use client";

import { Canvas } from "@react-three/fiber";
import { useState, Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import Scene from "./Scene";
import "../globals.css";

export default function Cube() {
  return (
    <div className="mt-48">
      <Canvas>
        <ambientLight />
        <OrbitControls />
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
