import { useEffect, useRef, useMemo } from 'react';
import { useGLTF, Text } from '@react-three/drei';
import { MeshStandardMaterial } from 'three';

export default function Car({ color, plateNumber }) {
  const { scene } = useGLTF('/models/bmw_m5_cs.glb');
  const carRef = useRef();

  // Memoized material to avoid unnecessary re-creation
  const carMaterial = useMemo(
    () => new MeshStandardMaterial({ color }),
    [color],
  );

  useEffect(() => {
    if (!scene) return;

    scene.traverse((obj) => {
      if (obj.isMesh && obj.name.includes('Object_22')) {
        // Clone material so it only applies to this car part
        obj.material = carMaterial;
      }
    });
  }, [color, scene, carMaterial]);

  return (
    <group ref={carRef}>
      <primitive object={scene} />
    </group>
  );
}
