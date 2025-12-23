"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ImageReveal({ src, alt, width, height }) {
    const imageRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            imageRef.current,
            {
                x: 100,        // start from right
                opacity: 0,
            },
            {
                x: 0,
                opacity: 1,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: imageRef.current,
                    start: "top 85%",
                    once: true,
                },
            }
        );
    }, []);

    return (
        <div ref={imageRef}>
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                className="w-12 md:w-32 lg:w-[150px] rounded-lg  h-auto object-contain transition-transform duration-300 hover:scale-105"
                priority
            />
        </div>
    );
}
