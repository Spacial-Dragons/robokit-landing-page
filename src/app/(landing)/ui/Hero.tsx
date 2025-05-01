"use client";

import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const Hero = () => {
  const { theme } = useTheme();

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
    <div className="relative h-[calc(100vh-64px)] flex flex-col gap-10 justify-center items-center overflow-hidden bg-background p-5">
      {stars.map((star, idx) => (
        <div
          key={idx}
          className="absolute bg-foreground/50 animate-twinkle"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
            filter: "blur(0px)",
            boxShadow:
              theme === "dark"
                ? `0 0 5px rgba(255, 255, 255, 0.8)`
                : `0 0 5px rgba(0, 0, 0, 0.8)`,
            transitionProperty: "all",
            transitionDuration: "3s",
          }}
        />
      ))}

      <h1 className="text-6xl font-semibold text-center z-10">
        The Swift Framework to control Robots
      </h1>

      <div className="flex gap-4">
        <Button size="lg" className="">
          Documentation
        </Button>

        <Button variant="outline" size="lg">
          <Github /> Source code
        </Button>
      </div>
    </div>
  );
};
