import React, { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'

const Computers = ({ isMobail }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobail ? .6 : 0.75}
        position={isMobail ? [0, -4.2, -1] : [0, -3.75, -1.5]}
        rotation={[-0.01, -0.2, 0]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobail, setIsMobail] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width:767px');

    setIsMobail(mediaQuery.matches);

    const handnleMediaQueryChange = (event) => {
      setIsMobail(event.matches);
    }

    mediaQuery.addEventListener('change', handnleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handnleMediaQueryChange);

    }
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense
        fallback={<CanvasLoader />}
      >
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobail={isMobail} />
      </Suspense>
    </Canvas>
  )
}
export default ComputersCanvas