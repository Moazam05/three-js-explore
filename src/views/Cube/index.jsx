import { Canvas } from "@react-three/fiber";
import ThreeElement from "./components/ThreeElement";

const Cube = () => {
  return (
    <>
      <Canvas>
        <ThreeElement />
      </Canvas>
    </>
  );
};

export default Cube;
