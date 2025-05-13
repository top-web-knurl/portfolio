import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Decal, useTexture, Float} from '@react-three/drei'
import CanvasLoader from '../Loader'
import PropTypes from 'prop-types'

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl])

  return (
    <Float 
      speed={2} 
      rotationIntensity={1.25} 
      floatIntensity={2.15}
    >
      <mesh 
      castShadow 
      receiveShadow 
      scale={2.75}
      >
        <ambientLight
          intensity={0.25}
        />
        <directionalLight
          position={[0, 0, 0.05]}
        />
        <icosahedronGeometry args={[1, 4]} />
        <meshStandardMaterial 
          color="#fff"
          polygonOffset
          polygonOffsetFactor={-4}
          flatShading
        />
        <Decal 
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          flatShading
          map={decal}
        />
      </mesh>
    </Float>
  )
}

Ball.propTypes = {
  imgUrl: PropTypes.string.isRequired
}

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense
        fallback={<CanvasLoader />}
      >
        <OrbitControls
           enableZoom={false}
           enablePan={false}
           onDoubleClick={() => null}
           enableDamping 
           dampingFactor={0.01}
        />
        <Ball imgUrl={icon} />
      </Suspense>
    </Canvas>
  )
}

BallCanvas.propTypes = {
  icon: PropTypes.string.isRequired
}

export default BallCanvas