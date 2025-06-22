
import React, { useEffect, useState } from 'react';

const ScrollParticles = () => {
  const [scrollY, setScrollY] = useState(0);
  const [particles, setParticles] = useState([
    { id: 1, x: 15, y: 200, size: 8, shape: 'circle', speed: 0.4, rotation: 0 },
    { id: 2, x: 85, y: 400, size: 12, shape: 'triangle', speed: 0.3, rotation: 45 },
    { id: 3, x: 25, y: 600, size: 10, shape: 'square', speed: 0.5, rotation: 90 },
    { id: 4, x: 75, y: 800, size: 6, shape: 'circle', speed: 0.6, rotation: 135 },
    { id: 5, x: 50, y: 1000, size: 14, shape: 'hexagon', speed: 0.2, rotation: 0 },
    { id: 6, x: 90, y: 1200, size: 9, shape: 'triangle', speed: 0.45, rotation: 180 },
    { id: 7, x: 10, y: 1400, size: 11, shape: 'square', speed: 0.35, rotation: 270 },
  ]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderShape = (particle: any) => {
    const baseClasses = "absolute transition-all duration-300 ease-out";
    const offsetY = scrollY * particle.speed + particle.y;
    const floatY = Math.sin((scrollY + particle.id * 100) * 0.01) * 30;
    const sideFloat = Math.cos((scrollY + particle.id * 150) * 0.008) * 40;
    const rotation = (scrollY * 0.3 + particle.rotation) % 360;

    const style = {
      left: `${particle.x + sideFloat}%`,
      top: `${offsetY + floatY}px`,
      transform: `rotate(${rotation}deg)`,
      width: `${particle.size * 4}px`,
      height: `${particle.size * 4}px`,
    };

    switch (particle.shape) {
      case 'circle':
        return (
          <div
            key={particle.id}
            className={`${baseClasses} rounded-full bg-gradient-to-br from-blue-400/60 to-blue-600/40 shadow-lg backdrop-blur-sm`}
            style={style}
          />
        );
      case 'triangle':
        return (
          <div
            key={particle.id}
            className={`${baseClasses} bg-gradient-to-br from-cyan-400/60 to-cyan-600/40 shadow-lg backdrop-blur-sm`}
            style={{
              ...style,
              clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
            }}
          />
        );
      case 'square':
        return (
          <div
            key={particle.id}
            className={`${baseClasses} bg-gradient-to-br from-indigo-400/60 to-indigo-600/40 shadow-lg backdrop-blur-sm rounded-sm`}
            style={style}
          />
        );
      case 'hexagon':
        return (
          <div
            key={particle.id}
            className={`${baseClasses} bg-gradient-to-br from-purple-400/60 to-purple-600/40 shadow-lg backdrop-blur-sm`}
            style={{
              ...style,
              clipPath: 'polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)',
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {particles.map(renderShape)}
      
      {/* Add some connecting lines that appear occasionally */}
      <div className="absolute inset-0">
        {particles.slice(0, 3).map((particle, index) => {
          const nextParticle = particles[index + 1];
          if (!nextParticle) return null;
          
          const opacity = Math.sin(scrollY * 0.005 + index) * 0.3 + 0.1;
          
          return (
            <svg key={`line-${index}`} className="absolute inset-0 w-full h-full">
              <line
                x1={`${particle.x}%`}
                y1={`${scrollY * particle.speed + particle.y}px`}
                x2={`${nextParticle.x}%`}
                y2={`${scrollY * nextParticle.speed + nextParticle.y}px`}
                stroke="rgba(59, 130, 246, 0.3)"
                strokeWidth="1"
                opacity={opacity}
                className="transition-opacity duration-500"
              />
            </svg>
          );
        })}
      </div>
    </div>
  );
};

export default ScrollParticles;
