import { Canvas } from "@react-three/fiber";
import {
  Environment,
  GizmoHelper,
  GizmoViewport,
  OrbitControls,
  PivotControls,
  Stage,
  useTexture,
} from "@react-three/drei";
import * as THREE from "three";

function FrostedCube(props: any) {
  const normalMap = useTexture("/normal.jpg");
  normalMap.wrapS = normalMap.wrapT = THREE.RepeatWrapping;

  return (
    <mesh {...props}>
      <boxGeometry args={[3, 3, 3]} />
      <meshPhysicalMaterial
        // NO transmission, so the stream shows through via alpha
        transparent
        opacity={0.65}
        color="#ffffff"
        roughness={1.6}
        metalness={0}
        clearcoat={0.5}
        clearcoatRoughness={0.1}
        normalMap={normalMap}
        normalScale={[1, 1]}
        clearcoatNormalMap={normalMap}
        clearcoatNormalScale={[0.3, 0.3]}
        envMapIntensity={1.5}
        depthWrite={false}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

export default function ThreeScene() {
  return (
    <Canvas
      camera={{ position: [3, 3, 3], fov: 90 }}
      style={{ width: "100%", height: "400px" }}
    >
      {/* <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} /> */}
      <Stage adjustCamera={false} intensity={0.5} shadows="contact">
        <PivotControls scale={2}>
          <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="hotpink" />
          </mesh>
          <mesh position={[-2.5, 0, 0]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial
              color={[1, 0, 0]}
              transparent={true}
              opacity={0.5}
            />
          </mesh>
          {/* <mesh position={[2.5, 0, 0]}>
            <boxGeometry args={[1, 1, 1]} />
            <MeshTransmissionMaterial {...materialProps} />
        </mesh> */}
          <FrostedCube position={[2.5, 0, 0]} />
          <Environment preset="city" />
        </PivotControls>
      </Stage>

      <GizmoHelper alignment="bottom-right" margin={[75, 75]}>
        <GizmoViewport labelColor="white" />
      </GizmoHelper>
      <OrbitControls makeDefault />
    </Canvas>
  );
}
