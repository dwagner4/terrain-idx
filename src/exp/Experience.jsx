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
        
        <Sphere position={[ 3, 5, 0]} scale={2}/> 
        

        <Terrain 
          position={[ 0, 0, 0]} 
          hscale={0.5} 
          xdemension={10}
          ydemension={15}
          xsubdivs={20}
          ysubdivs={30}
        /> 

      </Physics>
    </>
  );
};