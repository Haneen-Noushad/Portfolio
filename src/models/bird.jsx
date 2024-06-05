import {useRef,useEffect} from 'react'

import birdScene from '../assets/3d/bird.glb'
import { useAnimations, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Bird = () => {
  const {scene,animations}=useGLTF(birdScene);
  const birdRef=useRef();
  const {actions}=useAnimations(animations,birdRef);


  useEffect(()=>{
    actions['Take 001'].play();
  },[]);

  useFrame(({clock,camera})=>{
    birdRef.current.position.y=Math.sin(clock.elapsedTime)*0.2+2;
    
    if(birdRef.current.position.x>camera.position-50){
      birdRef.current.rotation.y=Math.PI;
    }
    else if(birdRef.current.position.x<camera.position-10){
      birdRef.current.rotation.y =0;
    }
    
    if(birdRef.current.rotation.y === 0){
      birdRef.current.position.x += 0.01;
      birdRef.current.position.z -= 0.005;
    }
    else{
      birdRef.current.position.x -= 0.01;
      birdRef.current.position.z += 0.005;
    }
  })

  return (
    <mesh       
      position={[-5,2,1]} 
      scale={[0.002,0.002,0.002]}
      ref={birdRef} 
    >
      <primitive object={scene} />
    </mesh>
  )
}

export default Bird