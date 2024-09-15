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
    <mesh ref={globeRef}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial
        map={new THREE.TextureLoader().load("/2k_earth_daymap.jpg")}
      />
    </mesh>
  );
};

const GlobeScene = () => {
  return (
    <Canvas style={{ height: "50%", width: "60%"}}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <directionalLight position={[-5, -5, -5]} intensity={0.5} />
      <SpinningGlobe />
      <OrbitControls  />
    </Canvas>
  );
};

export default GlobeScene;
