import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";

const SpinningGlobe = () => {
  const globeRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.02;
    }
  });

  return (
    <mesh ref={globeRef} scale={[2, 2, 2]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial
        map={new THREE.TextureLoader().load("/2k_earth_daymap.jpg")}
      />
    </mesh>
  );
};

const GlobeScene = () => {
  return (
    <Canvas style={{ height: "40%", width: "40%"}}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <directionalLight position={[-5, -5, -5]} intensity={0.5} />
      <SpinningGlobe />
      <OrbitControls  />
    </Canvas>
  );
};

export default GlobeScene;
