import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, ContactShadows } from "@react-three/drei";
import Earth from "../public/Earth.jsx";

const App = () => {
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
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
      </Canvas>
    </>
  );
};

export default App;
