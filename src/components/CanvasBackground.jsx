import React, { useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float } from "@react-three/drei";

const StarryBackground = () => {
  const ref = useRef();
  
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Stars
        ref={ref}
        radius={50}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
    </group>
  );
};

const AbstractShapes = () => {
  return (
    <>
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2} floatingRange={[-0.5, 0.5]}>
        <mesh position={[-5, 2, -10]}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial color="#8245ec" wireframe />
        </mesh>
      </Float>
      
      <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5} floatingRange={[-0.5, 0.5]}>
        <mesh position={[6, -3, -15]}>
          <torusGeometry args={[1, 0.4, 16, 100]} />
          <meshStandardMaterial color="#ec458e" wireframe />
        </mesh>
      </Float>
      
      <Float speed={1} rotationIntensity={0.5} floatIntensity={1} floatingRange={[-1, 1]}>
        <mesh position={[-7, -5, -20]}>
          <icosahedronGeometry args={[2, 0]} />
          <meshStandardMaterial color="#45ec82" wireframe />
        </mesh>
      </Float>
    </>
  );
}

const CanvasBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <StarryBackground />
          <AbstractShapes />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default CanvasBackground;
