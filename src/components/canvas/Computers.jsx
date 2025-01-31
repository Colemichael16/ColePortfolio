import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, useAnimations, PerspectiveCamera } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const { scene, animations } = useGLTF("./desktop_pc/scene.glb");
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    if (actions) {
      console.log(actions); // Log the actions object to the console
      actions["Take 01"].play(); 
    }
  }, [actions]);

  return (
    <mesh>
      <pointLight intensity={1} />
      <primitive
        object={scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [-0.6, -3.5, -1] : [0.3, -3, -1.5]} //0, -3.25, -1.5
        rotation={isMobile ? [0,1,0] : [-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas>
      <Suspense fallback={<CanvasLoader />}>
        <PerspectiveCamera makeDefault position={[1, 0, 2]} />
        <OrbitControls 
          enabled={!isMobile} 
          enableZoom={false} 
          target={[0, 0, 0]} 
          enablePan={false} 
          maxPolarAngle={Math.PI / 2.5} 
          minPolarAngle={Math.PI / 2.8}
        />
        <Computers isMobile={isMobile} />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default ComputersCanvas;