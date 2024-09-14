import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const SpinningGlobe = () => {
  const globeRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.03;
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
    <Canvas style={{ height: "50%"}}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 5]} />
      <SpinningGlobe />
    </Canvas>
  );
};

export default GlobeScene;
