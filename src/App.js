import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useEffect, useState } from 'react';
import Car from './components/Car';

export default function App() {
  const [color, setColor] = useState('#0022ff'); // Default color: Red
  const [plateNumber, setPlateNumber] = useState('BMW-001'); // Default plate

  useEffect(() => {
    console.log('Selected Color:', color);
    console.log('Car Plate:', plateNumber);
  }, [color, plateNumber]);

  return (
    <div style={{ width: '100vw', height: '100vh', background: '#828282' }}>
      {/* Control Panel */}
      <div
        style={{
          zIndex: 1,
          position: 'absolute',
          top: 20,
          left: 20,
          background: '#333',
          padding: '15px 20px',
          borderRadius: '12px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '10px',
          color: '#fff',
        }}
      >
        <h3 style={{ margin: 0, fontSize: '14px' }}>Car Customization</h3>

        {/* Color Picker */}
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          style={{
            width: '60px',
            height: '60px',
            border: 'none',
            background: 'none',
            cursor: 'pointer',
          }}
        />

        {/* Number Plate Input */}
      </div>

      {/* 3D Scene */}
      <Canvas camera={{ position: [0, 2, 5] }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} intensity={1} />
        <Car color={color} plateNumber={plateNumber} />
        <OrbitControls />
      </Canvas>
    </div>
  );
}
