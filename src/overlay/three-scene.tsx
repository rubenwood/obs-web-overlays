import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

export default function ThreeScene() {
  return (
    <Canvas camera={{ position: [3, 3, 3], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} />

      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="hotpink" />
      </mesh>

      <OrbitControls />
    </Canvas>
  )
}