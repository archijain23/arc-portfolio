
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import * as THREE from 'three';

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

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      
      {/* Floating geometric shapes */}
      <FloatingShape 
        position={[-3, 2, 0]} 
        color="#8B5CF6" 
        geometry={new THREE.OctahedronGeometry(0.5)} 
      />
      <FloatingShape 
        position={[3, -1, 0]} 
        color="#EC4899" 
        geometry={new THREE.TetrahedronGeometry(0.6)} 
      />
      <FloatingShape 
        position={[0, 3, -2]} 
        color="#06B6D4" 
        geometry={new THREE.IcosahedronGeometry(0.4)} 
      />
      <FloatingShape 
        position={[-2, -2, 1]} 
        color="#F59E0B" 
        geometry={new THREE.DodecahedronGeometry(0.3)} 
      />
    </>
  );
};

const Hero3D = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <Scene />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Archi Jain
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-4 font-light">
            Full-Stack Developer & Network Engineer
          </p>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Passionate about creating innovative web solutions and marine conservation technologies. 
            Currently pursuing B.Tech in Computer Science with expertise in Machine Learning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:scale-105 transition-transform shadow-lg hover:shadow-xl">
              View My Work
            </button>
            <button className="px-8 py-4 border-2 border-purple-600 text-purple-600 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-colors">
              Download CV
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero3D;
