import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, ContactShadows } from "@react-three/drei";
import EarthModel from "../../../public/EarthModel";
import { Html } from "@react-three/drei"; // Import Html from drei for overlaying HTML elements in 3D space

const Loading = () => {
  return (
    <Html center>
      <div style={{ color: "white", fontSize: "30px" }}>Loading...</div>
    </Html>
  );
};

const Earth = () => {
  return (
    <>
      <Canvas>
        <ambientLight />
        <OrbitControls />
        <Environment preset="sunset" />
        <ContactShadows
          position={[0, -2.5, 0]}
          opacity={0.5}
          scale={50}
          blur={1}
          far={10}
          resolution={256}
          color="#000000"
        />
        <Suspense fallback={<Loading />}>
          <EarthModel />
        </Suspense>
      </Canvas>
    </>
  );
};

export default Earth;
