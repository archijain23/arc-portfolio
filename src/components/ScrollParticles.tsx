import React, { useEffect, useRef, useState } from "react";

const ScrollParticles = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [balls, setBalls] = useState(
    Array.from({ length: 7 }).map((_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 4,
      vy: Math.random() * 2,
      size: 40 + Math.random() * 20,
      rotation: 0,
      rotationSpeed: (Math.random() - 0.5) * 2,
      bouncing: false,
    }))
  );

  useEffect(() => {
    let animationFrame: number;
    const gravity = 0.4;
    const bounceFactor = 0.7;
    const friction = 0.99;

    const animate = () => {
      setBalls((prevBalls) =>
        prevBalls.map((ball) => {
          let { x, y, vx, vy, rotation, rotationSpeed, size } = ball;

          vy += gravity;
          x += vx;
          y += vy;

          // Bounce off floor
          if (y + size > window.innerHeight) {
            y = window.innerHeight - size;
            vy *= -bounceFactor;
            vx *= friction;
          }

          // Bounce off top
          if (y < 0) {
            y = 0;
            vy *= -bounceFactor;
          }

          // Reflect off sides
          if (x < 0) {
            x = 0;
            vx *= -1;
          } else if (x + size > window.innerWidth) {
            x = window.innerWidth - size;
            vx *= -1;
          }

          rotation = (rotation + rotationSpeed) % 360;

          return { ...ball, x, y, vx, vy, rotation };
        })
      );

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const handleHover = (id: number) => {
    setBalls((prevBalls) =>
      prevBalls.map((ball) =>
        ball.id === id ? { ...ball, vy: -12, bouncing: true } : ball
      )
    );

    // Reset animation class after a short delay
    setTimeout(() => {
      setBalls((prevBalls) =>
        prevBalls.map((ball) =>
          ball.id === id ? { ...ball, bouncing: false } : ball
        )
      );
    }, 300);
  };

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-10 overflow-hidden" // removed pointer-events-none
    >
      {balls.map((ball) => (
        <img
          key={ball.id}
          src="/basketball.png"
          alt="Basketball"
          className={`absolute object-contain drop-shadow-lg cursor-pointer ${
            ball.bouncing ? "animate-bounce-pop" : ""
          }`}
          style={{
            width: `${ball.size}px`,
            height: `${ball.size}px`,
            left: `${ball.x}px`,
            top: `${ball.y}px`,
            transform: `rotate(${ball.rotation}deg)`,
            transition: "none",
          }}
          onMouseEnter={() => handleHover(ball.id)}
        />
      ))}
    </div>
  );
};

export default ScrollParticles;
