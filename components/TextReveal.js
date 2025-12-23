"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TextReveal({ children }) {
    
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { y: 80, opacity: 0 },   // start below + invisible
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 85%",     // triggers on scroll
          once: true,           // runs only first time
        },
      }
    );
  }, []);

  return (
    <div ref={textRef}>
      {children}
    </div>
  );
}
