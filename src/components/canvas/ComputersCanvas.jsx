import  { Suspense, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, OrbitControls, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'
import PropTypes from 'prop-types'
import { useRef } from 'react'
import { MathUtils } from 'three'

const { lerp } = MathUtils
const DAMPING = 0.03

const Computers = ({ isMobail }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  const [scale, setScale] = useState(1)
  const ref = useRef()
  const targetRotationY = useRef(0)
  const currentRotationY = useRef(0)
 

  useFrame(() => {
    const scrollTop = window.scrollY || window.pageYOffset
    const maxScroll = document.body.scrollHeight - window.innerHeight
    const scrollProgress = maxScroll > 0 ? scrollTop / maxScroll : 0

   
    targetRotationY.current = scrollProgress * Math.PI 
 
    currentRotationY.current = lerp(currentRotationY.current, targetRotationY.current, DAMPING)
    if (ref.current) {
      ref.current.rotation.y = currentRotationY.current
    }
  })

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
  }, [])

  return (
    <Float 
      speed={2}
      rotationIntensity={0}
      floatIntensity={1}
    >
    <mesh>
      <hemisphereLight intensity={0.7} groundColor="black" />
      <pointLight 
      intensity={1} 
      distance={3}
      decay={1}
      />
      <directionalLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1.2}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        ref={ref}
        object={computer.scene}
        position={isMobail ? [0, -4.2, -.5] : [0, -2.8, -1.3]}
        rotation={[-0.01, -0.2, 0]}
        scale={scale}
      />
    </mesh>
    </Float>
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
      frameloop="always"
      shadows
      camera={{ position: [20, 5, -2], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense
        fallback={<CanvasLoader />}
      >
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enableDamping 
          dampingFactor={DAMPING}
        />
        <Computers isMobail={isMobail} />
      </Suspense>
    </Canvas>
  )
}
export default ComputersCanvas