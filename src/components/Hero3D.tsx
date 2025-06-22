
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import * as THREE from 'three';
import { Basketball, Volleyball } from 'lucide-react';

const FloatingShape = ({ position, color, geometry }: { position: [number, number, number], color: string, geometry: THREE.BufferGeometry }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.2;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    }
  });
  
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position} geometry={geometry}>
        <meshStandardMaterial color={color} />
      </mesh>
    </Float>
  );
};

const BasketballSphere = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.1;
      meshRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.6) * 0.15;
    }
  });
  
  return (
    <Float speed={1.5} rotationIntensity={0.8} floatIntensity={3}>
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial color="#D2691E" roughness={0.8} />
      </mesh>
    </Float>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1.2} color="#FFA500" />
      <pointLight position={[-10, -10, -10]} intensity={0.8} color="#FF6347" />
      <spotLight position={[0, 15, 0]} intensity={1} angle={0.3} penumbra={0.5} color="#FFD700" />
      
      {/* Basketball spheres */}
      <BasketballSphere position={[-4, 1, -1]} />
      <BasketballSphere position={[4, -2, 1]} />
      
      {/* Sporty geometric shapes */}
      <FloatingShape 
        position={[-2, 3, 0]} 
        color="#FF6347" 
        geometry={new THREE.OctahedronGeometry(0.6)} 
      />
      <FloatingShape 
        position={[3, 2, -2]} 
        color="#FFA500" 
        geometry={new THREE.TetrahedronGeometry(0.7)} 
      />
      <FloatingShape 
        position={[0, -3, 1]} 
        color="#FFD700" 
        geometry={new THREE.IcosahedronGeometry(0.5)} 
      />
      <FloatingShape 
        position={[-3, -1, 2]} 
        color="#FF4500" 
        geometry={new THREE.DodecahedronGeometry(0.4)} 
      />
    </>
  );
};

const Hero3D = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 6], fov: 75 }}>
          <Scene />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.3} />
        </Canvas>
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <div className="flex justify-center items-center mb-4 space-x-4">
            <Basketball className="text-orange-600" size={48} />
            <h1 className="text-6xl md:text-8xl font-bold">
              <span className="bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 bg-clip-text text-transparent">
                Archi Jain
              </span>
            </h1>
            <Volleyball className="text-red-600" size={48} />
          </div>
          <p className="text-xl md:text-2xl text-gray-700 mb-4 font-light">
            Full-Stack Developer & Basketball Player
          </p>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Combining athletic discipline with coding excellence. Passionate about creating innovative web solutions 
            and marine conservation technologies while dominating on the basketball court.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full font-semibold hover:scale-105 transition-transform shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
              <Basketball size={20} />
              <span>View My Work</span>
            </button>
            <button className="px-8 py-4 border-2 border-orange-600 text-orange-600 rounded-full font-semibold hover:bg-orange-600 hover:text-white transition-colors">
              Download CV
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-orange-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-orange-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero3D;
