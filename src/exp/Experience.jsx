/* Nothing special here, Note the attributes for Cubes */

import { OrbitControls } from "@react-three/drei";
import { Sphere } from '../models/Sphere.jsx'
import { Terrain } from './Terrain.jsx'
import { Physics, RigidBody, } from '@react-three/rapier'

export const Experience = () => {
  
  return (
    <>
      <OrbitControls />
      <directionalLight color="#ffffff" position={[0, 5, 5]} intensity={2} />
      <ambientLight color="#ffdddd" intensity={0.5} />
      <Physics>
        <RigidBody colliders="ball">
          <Sphere position={[ 0, 2, 0]} scale={0.5}/> 
        </RigidBody>

        <Terrain 
          position={[ 0, 0, 0]} 
          scale={10} 
          xdemension={100}
          ydemension={150}
          xsubdivs={100}
          ysubdivs={150}
        /> 

      </Physics>
    </>
  );
};