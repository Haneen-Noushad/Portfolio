import {Suspense, useState} from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader';
import Island from '../models/island';
import Sky from '../models/sky'
import Bird from '../models/bird';
import Plane from '../models/plane';
import HomeInfo from '../components/HomeInfo';

{/* <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        POPUP
      </div> */}

const Home = () => {
  const [isRotating,setIsRotating] = useState(false);

  const[currentStage,setCurrentStage] = useState(1);

  const adjustIslandForScreenSize = () =>{
    let screenScale = null;
    let screenPosition =[0,-6.5,-50];
    let rotation = [0.1,4.7,0];

    if(window.innerWidth < 768) {
      screenScale = [0.9,0.9,0.9];
    }
    else{
      screenScale = [1,1,1];
    }
    return [screenScale,screenPosition,rotation]
  }

    const adjustPlaneForScreenSize = () =>{
      let screenScale, screenPosition;      
  
      if(window.innerWidth < 768) {
        screenScale = [1.5,1.5,1.5];
        screenPosition = [0,-1.5,1];
      }
      else{
        screenScale = [3,3,3];
        screenPosition = [0,-3.5,-3];
      }
      return [screenScale,screenPosition]
    }

  const [islandScale,islandPosition, islandRotation] = adjustIslandForScreenSize();
  const [planeScale,planePosition] = adjustPlaneForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div> 
      <Canvas 
        className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 
          'cursor-grab'}`}
        camera={{near:0.1,far:1000}}
      >
        <Suspense fallback={<Loader />}> 
          <directionalLight position={[1,1,1]} intensity={[2]}/>                     
          <ambientLight intensity={0.5} />
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" />
          
          <Bird />
          <Sky 
            isRotating={isRotating}
            scale
          />
          <Island 
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Plane
            position={planePosition}
            scale={planeScale}
            isRotating={isRotating}
            rotation={[0,8,0]}
          />
          

        </Suspense>
      </Canvas>


    </section>
  )
}

export default Home