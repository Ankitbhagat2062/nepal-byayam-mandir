'use client';

import React from "react";

export function RevealRoot({ children }: { children: React.ReactNode }) {
  "use client";
  React.useEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal='true']")
    );

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("reveal-in");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.16 }
    );

    for (const el of els) io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style jsx>{`
        .reveal-base {
          opacity: 0;
          transform: translateY(20px);
          transition-property: opacity, transform;
          transition-duration: 1100ms;
          transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
          will-change: opacity, transform;
        }
        .reveal-in {
          opacity: 1;
          transform: translateY(0px);
        }
      `}</style>
      {children}
    </>
  );
}