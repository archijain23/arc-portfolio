import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import * as THREE from "three";
import { Target, Zap } from "lucide-react";

const FloatingShape = ({
  position,
  color,
  geometry,
}: {
  position: [number, number, number];
  color: string;
  geometry: THREE.BufferGeometry;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.8) * 0.3;
      meshRef.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.6) * 0.4;
      meshRef.current.rotation.z =
        Math.cos(state.clock.elapsedTime * 0.4) * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position} geometry={geometry}>
        <meshStandardMaterial color={color} metalness={0.3} roughness={0.4} />
      </mesh>
    </Float>
  );
};

const CrystalSphere = ({
  position,
}: {
  position: [number, number, number];
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.8} floatIntensity={3}>
      <mesh ref={meshRef} position={position}>
        <icosahedronGeometry args={[0.8, 0]} />
        <meshStandardMaterial
          color="#3B82F6"
          metalness={0.8}
          roughness={0.2}
          transparent
          opacity={0.8}
        />
      </mesh>
    </Float>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1.2} color="#3B82F6" />
      <pointLight position={[-10, -10, -10]} intensity={0.8} color="#60A5FA" />
      <spotLight
        position={[0, 15, 0]}
        intensity={1}
        angle={0.3}
        penumbra={0.5}
        color="#93C5FD"
      />

      {/* Crystal spheres */}
      <CrystalSphere position={[-4, 1, -1]} />
      <CrystalSphere position={[4, -2, 1]} />

      {/* Dynamic geometric shapes */}
      <FloatingShape
        position={[-2, 3, 0]}
        color="#1E40AF"
        geometry={new THREE.OctahedronGeometry(0.6)}
      />
      <FloatingShape
        position={[3, 2, -2]}
        color="#3B82F6"
        geometry={new THREE.TetrahedronGeometry(0.7)}
      />
      <FloatingShape
        position={[0, -3, 1]}
        color="#60A5FA"
        geometry={new THREE.TorusGeometry(0.5, 0.2, 16, 100)}
      />
      <FloatingShape
        position={[-3, -1, 2]}
        color="#93C5FD"
        geometry={new THREE.ConeGeometry(0.4, 0.8, 8)}
      />
      <FloatingShape
        position={[2, 0, -1]}
        color="#DBEAFE"
        geometry={new THREE.CylinderGeometry(0.3, 0.3, 0.8, 6)}
      />
    </>
  );
};

const Hero3D = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900">
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 6], fov: 75 }}>
          <Scene />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.4}
          />
        </Canvas>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <div className="flex justify-center items-center mb-4 space-x-4">
            <Target className="text-blue-400" size={48} />
            <h1 className="text-6xl md:text-8xl font-bold">
              <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-blue-200 bg-clip-text text-transparent">
                Archi Jain
              </span>
            </h1>
            <Zap className="text-blue-300" size={48} />
          </div>
          <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light">
            Full-Stack Developer, Digital Innovator & Machine Learning
            Enthusiast
          </p>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Crafting cutting-edge web solutions with passion and precision.
            Combining technical expertise with creative vision to build the
            future of digital experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#projects">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full font-semibold hover:scale-105 transition-transform shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                <Target size={20} />
                <span>View My Work</span>
              </button>
            </a>
            <a href="/resume.pdf" download>
              <button className="px-8 py-4 border-2 border-blue-500 text-blue-400 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                Download CV
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero3D;
