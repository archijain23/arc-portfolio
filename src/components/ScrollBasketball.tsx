
import React, { useEffect, useState } from "react";

const ScrollBasketball = () => {
  const [scrollY, setScrollY] = useState(0);
  const [basketballs, setBasketballs] = useState([
    { id: 1, x: 20, y: 100, delay: 0 },
    { id: 2, x: 80, y: 300, delay: 0.5 },
    { id: 3, x: 90, y: 500, delay: 1 },
    { id: 4, x: 10, y: 700, delay: 1.5 },
    { id: 5, x: 85, y: 900, delay: 2 },
  ]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {basketballs.map((ball) => {
        const offsetY = scrollY * 0.3 + ball.y;
        const bounceY = Math.sin((scrollY + ball.delay * 100) * 0.02) * 20;
        const sideFloat = Math.sin((scrollY + ball.delay * 150) * 0.01) * 30;

        return (
          <div
            key={ball.id}
            className="absolute transition-all duration-200 ease-out"
            style={{
              left: `${ball.x + sideFloat}%`,
              top: `${offsetY + bounceY}px`,
              transform: `rotate(${scrollY * 0.5 + ball.delay * 45}deg)`,
            }}
          >
            <img
              src="/arc-portfolio/basketball.png"
              alt="Basketball"
              className="w-12 h-12 object-contain"
            />
          </div>
        );
      })}
    </div>
  );
};

export default ScrollBasketball;
