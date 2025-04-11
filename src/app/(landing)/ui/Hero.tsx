"use client";

import { useEffect, useState } from "react";

export const Hero = () => {
  const [stars, setStars] = useState<
    {
      top: number;
      left: number;
      size: number;
      delay: number;
    }[]
  >([]);

  useEffect(() => {
    const newStars = Array.from({ length: 150 }, () => ({
      top: Math.random() * 100,
      size: 2 + Math.random() * 4,
      left: Math.random() * 100,
      delay: Math.random() * 5,
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="relative h-[calc(100vh-64px)] flex justify-center items-center overflow-hidden bg-black text-white">
      {stars.map((star, idx) => (
        <div
          key={idx}
          className="absolute bg-white/50 animate-twinkle"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
            filter: "blur(0px)",
            boxShadow: `0 0 5px rgba(255, 255, 255, 0.8)`,
            transitionProperty: "all",
            transitionDuration: "3s",
          }}
        />
      ))}

      <h1 className="text-4xl font-semibold text-center z-10">
        The Swift Framework to Control Robots
      </h1>
    </div>
  );
};
