import { Canvas } from '@react-three/fiber'
import { MeshTransmissionMaterial, OrbitControls, Stage } from '@react-three/drei'

export default function ThreeScene() {

    const materialProps = {
        thickness: 0.2,
        roughness: 0.7,
        transmission: 0.75,
        backside: false,
    }

  return (
    <Canvas camera={{ position: [3, 3, 3], fov: 90 }} style={{ width: '100%', height: '400px' }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} />
      {/* <Stage adjustCamera={false} intensity={0.5} shadows="contact"> */}
        <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="hotpink" />
        </mesh>
        <mesh position={[-2.5, 0, 0]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={[1,0,0]} transparent={true} opacity={0.5} />
        </mesh>
        <mesh position={[2.5, 0, 0]}>
            <boxGeometry args={[1, 1, 1]} />
            <MeshTransmissionMaterial {...materialProps} />
        </mesh>
        {/* </Stage> */}

      <OrbitControls />
    </Canvas>
  )
}