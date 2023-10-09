
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Box, Sphere } from '@react-three/drei';

function App() {
  return (
    <div className="App">
      <Canvas camera={{ position: [0, 0, 5] }}>
        {/* Box Object */}
        <Box position={[-1.5, 0, 0]}>
          <meshStandardMaterial color="red" />
        </Box>

        {/* Sphere Object */}
        <Sphere position={[1.5, 0, 0]}>
          <meshStandardMaterial color="blue" />
        </Sphere>

        {/* Basic Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 5, 5]} />
      </Canvas>
    </div>
  );
}

export default App;
