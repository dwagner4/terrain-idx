import { InstancedRigidBodies } from "@react-three/rapier"
import { useRef, useState } from "react"


const SphereMob = ( props ) => {


    const number = 10

    const mob = useRef()
    const spheres = useRef()

    const [ insts, setInsts] = useState( [])

    
    for(let i = 0; i < number; i++) {
        const next = { 
            key: i, 
            position: [(Math.random() * 3) - 1.5, (Math.random() * 3) + 1, (Math.random() * 3) - 1.5], 
            rotation: [ 0,0,0 ], 
            scale: 0.1 
        }
        insts.push(next)
    }


    return (
        <InstancedRigidBodies ref={mob} instances={insts}>
            <instancedMesh ref={spheres} args={[null, null, number]}>  // [geometry, material, count]
                <meshStandardMaterial/>
                <sphereGeometry args={[3]} />
            </instancedMesh>
        </InstancedRigidBodies>
    )
} 

export {SphereMob}