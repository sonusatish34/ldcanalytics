"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
gsap.registerPlugin(Flip);

export default function LoaderFLIP({ onComplete }) {
  const floatingLogoRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const headerLogo = document.querySelector("#header-logo");

    gsap.set(headerLogo, { opacity: 0 });

    const timer = setTimeout(() => {
      const floatingLogo = floatingLogoRef.current;

      // Capture state before moving
      const state = Flip.getState(floatingLogo);

      // Move floating logo into header
      headerLogo.parentNode.appendChild(floatingLogo);

      // Run FLIP animation
      Flip.from(state, {
        duration: 1.4,
        ease: "power3.inOut",
        onComplete: () => {
          gsap.to(headerLogo, {
            opacity: 1,
            duration: 0.3,
          });

          floatingLogo.remove();

          // 🔥 THIS IS WHAT YOU WERE MISSING:
          // fade out and remove the overlay background
          gsap.to(overlayRef.current, {
            opacity: 0,
            duration: 0.4,
            onComplete: () => {
              onComplete(); // remove loader fully
            }
          });
        },
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 bg-white z-[9999] flex items-center justify-center"
    >
      <h1
        ref={floatingLogoRef}
        className="text-white text-6xl md:text-7xl font-extrabold tracking-wide"
      >
        ZuGet
      </h1>
    </div>
  );
}
