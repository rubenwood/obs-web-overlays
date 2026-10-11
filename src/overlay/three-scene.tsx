import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'

export default function ThreeScene() {
  return (
    <Canvas camera={{ position: [3, 3, 3], fov: 90 }} style={{ width: '100%', height: '400px' }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} />
      <Stage adjustCamera={false} intensity={0.5} shadows="contact">
        <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="hotpink" />
        </mesh>
        </Stage>

      <OrbitControls />
    </Canvas>
  )
}