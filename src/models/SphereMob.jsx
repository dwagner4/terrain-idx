import { InstancedRigidBodies } from "@react-three/rapier"
import { useRef, useState, useEffect } from "react"
import { Color } from 'three'


const SphereMob = ( props ) => {


    const number = 10


    const mob = useRef()
    const spheres = useRef()

    const [ insts, setInsts] = useState( [])

    
    for(let i = 0; i < number; i++) {
        const next = { 
            key: i, 
            position: [(Math.random() * 3) - 1.5, i + 1, (Math.random() * 3) - 1.5], 
            rotation: [ 0,0,0 ], 
            scale: 0.1, 
            restitution: 0.5
        }
        insts.push(next)
    }

    useEffect(() => {
        if (spheres.current) {
          for (let i = 0; i < number; i++) {
            spheres.current.setColorAt(i, new Color(Math.random() * 0xffffff));
          }
          spheres.current.instanceColor.needsUpdate = true;
        }
      }, []);


    return (
        <InstancedRigidBodies 
            ref={mob} 
            instances={insts}
        >
            <instancedMesh 
                ref={spheres} 
                args={[null, null, number]}    //[geometry, material, count]
                onClick={(evt) => {
                    console.log("fuck you", mob.current, evt)
                    mob.current[evt.instanceId].applyImpulse(
                      {
                        x: 0,
                        y: 2,
                        z: 0
                      },
                      true
                    );
                  }}
            >  
                <meshStandardMaterial/>
                <sphereGeometry args={[3]} />
            </instancedMesh>
        </InstancedRigidBodies>
    )
} 

export {SphereMob}