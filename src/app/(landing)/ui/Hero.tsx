"use client";

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
    const newStars = Array.from({ length: 100 }, () => ({
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
            top: `${star.top}%`, // Random Y position from 0 to 100%
            left: `${star.left}%`, // Random X position from 0 to 100%
            width: `${star.size}px`, // Random size for each pixel-art star
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`, // Add delay to stagger the start
            filter: "blur(0px)", // No blur for sharp edges
            boxShadow: `0 0 5px rgba(255, 255, 255, 0.8)`, // Slight glow effect
          }}
        />
      ))}

      <h1 className="text-4xl font-semibold text-center z-10">
        The Swift Framework to Control Robots
      </h1>
    </div>
  );
};
