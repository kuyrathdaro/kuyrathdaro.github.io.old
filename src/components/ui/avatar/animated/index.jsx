import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Model from "../../../../utils/animated-avatar-model";

const AnimatedAvatar = () => {
  return (
    <Canvas
      camera={{ position: [-2, 0, 8], fov: 15 }}
      style={{
        width: "350px",
        height: "500px"
      }}
    >
      <ambientLight intensity={1.25} />
      <ambientLight intensity={0.1} />
      <directionalLight intensity={0.4} />
      <Suspense fallback={null}>
        <Model position={[0.025, -0.9, 0]} />
      </Suspense>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default AnimatedAvatar;
