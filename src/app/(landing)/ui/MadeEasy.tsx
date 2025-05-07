"use client";

import { useEffect } from "react";

export const MadeEasy = () => {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".auto-blur");

    const updateBlur = () => {
      let closestElement: HTMLElement | null = null;
      let closestDistance = Infinity;

      const viewportCenter = window.innerHeight / 2;

      elements.forEach((el: HTMLElement) => {
        const rect = el.getBoundingClientRect();
        const elCenter = rect.top + rect.height / 2;
        const distance = Math.abs(elCenter - viewportCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestElement = el;
        }
      });

      elements.forEach((el: HTMLElement) => {
        el.classList.remove("blur-in");
      });

      if (closestElement) {
        (closestElement as HTMLElement).classList.add("blur-in");
      }
    };

    updateBlur();
    window.addEventListener("scroll", updateBlur);
    window.addEventListener("resize", updateBlur);

    return () => {
      window.removeEventListener("scroll", updateBlur);
      window.removeEventListener("resize", updateBlur);
    };
  }, []);

  return (
    <div>
      <div className="max-w-7xl mx-auto text-7xl md:text-9xl space-y-4 px-5 min-h-svh flex items-center justify-center">
        <div className="space-y-5">
          <div className="auto-blur text-center">ROBOT</div>
          <div className="auto-blur text-center">CONTROL</div>
          <div className="auto-blur text-center">WITH</div>
          <div className="auto-blur text-center">CLEAR</div>
          <div className="auto-blur text-center">VISION</div>
        </div>
      </div>
    </div>
  );
};
