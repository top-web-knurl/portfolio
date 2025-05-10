import  { Suspense, useEffect, useState } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'
import PropTypes from 'prop-types'


const Computers = ({ isMobail }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  const { viewport } = useThree()
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const updateScale = () => {
      let newScale

      if (window.innerWidth < 768) {
        newScale = Math.max(0.3, Math.min(0.75, (window.innerWidth * 0.75) / 1000))
      } else {
        newScale = 0.75
      }

      setScale(newScale)
    }

    updateScale()
    window.addEventListener('resize', updateScale)

    return () => window.removeEventListener('resize', updateScale)
  }, [viewport.factor])

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <directionalLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobail ? scale : 0.75}
        position={isMobail ? [0, -4.2, -.5] : [0, -3.75, -1.5]}
        rotation={[-0.01, -0.2, 0]}
      />
    </mesh>
  )
}

Computers.propTypes = {
  isMobail: PropTypes.bool
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