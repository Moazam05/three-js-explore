import { Canvas } from "@react-three/fiber";
import { MathUtils } from "three";

const Cube = () => {
  return (
    <Canvas>
      <directionalLight position={[5, 5, 5]} />
      <mesh rotation={[MathUtils.degToRad(45), MathUtils.degToRad(45), 0]}>
        <boxGeometry />
        <meshStandardMaterial color="red" />
      </mesh>
    </Canvas>
  );
};

export default Cube;
