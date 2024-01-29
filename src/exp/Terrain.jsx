import * as THREE from "three";
import { HeightfieldCollider, RigidBody } from '@react-three/rapier'

export const Terrain = ({position, hscale, xdemension, ydemension, xsubdivs, ysubdivs }) => {

    // utility function to transpose vertex from a rotated plane to the Rapier HeightfieldCollider
    const transposePointPlaneToCollider = (idx, xdem, ydem) => {
        const xpos =  idx % xdem
        const ypos = Math.floor( idx / xdem )
        const colliderIdx = ydem * xpos + ypos
        return colliderIdx
    }

    // make a flat plane and rotate it
    const mat = new THREE.MeshStandardMaterial({
        // wireframe: true,
        color: 'yellow'
    })

    const geom = new THREE.PlaneGeometry( xdemension, ydemension, xsubdivs, ysubdivs ).rotateX(-Math.PI/2)

    //adjust Y randomly in plane geometry
    const pos = geom.getAttribute('position')
    const heights = new Float32Array(pos.count)
    for( let i=0; i<pos.count; i++ ) {
        const h = Math.random() * hscale
        pos.setY(i, h)
    }

    // fix the normals
    geom.computeVertexNormals();

    const mesh = new THREE.Mesh( geom, mat)

    // calculate the heights array for the HeightfieldCollider
    for( let i=0; i<pos.count; i++ ) {
        const nextValue = pos.getY(i)
        const newClliderIdx = transposePointPlaneToCollider(i, xsubdivs + 1, ysubdivs + 1 )
        // console.log(nextValue)
        heights[ newClliderIdx ] = nextValue
    }

    const scaleR = new THREE.Vector3(xdemension, 1, ydemension)

    return (
        <RigidBody colliders={ false }>
            <HeightfieldCollider args={[ ysubdivs, xsubdivs, heights, scaleR ]} />
            <primitive object={mesh} position={[0,0,0]} />
        </RigidBody>
    )
}