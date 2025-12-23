"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";

// Styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const images = [
    "/womens/womens1.jpg",
    "/womens/womens2.jpg",
    "/womens/womens3.jpg",
    "/womens/womens4.jpg",
    "/womens/womens5.jpg",
    "/womens/womens3.jpg"
];

export default function Womens() {
    return (
        <div className="bg-white pb-16 min-h-[350px] relative">
            <div className="text-center mb-10">
                <p className="text-pink-500 text-xl lg:text-3xl font-bold">Womens</p>
                <h2 className="text-black text-sm lg:text-lg mt-1 max-w-5xl mx-auto">
                    Explore stylish women’s clothing with our smart Try-On Feature. Instantly preview outfits, check the fit, and see which designs match your style before visiting the store. Fashion that feels personal, modern, and made for you.
                </h2>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
                {/* Custom Prev Arrow */}
                <button
                    className="customwom-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 
                               bg-white text-black rounded-full w-10 h-10 flex items-center cursor-pointer p-4 shadow-lg 
                               hover:bg-pink-400 hover:text-white transition"
                >
                    ❮
                </button>

                {/* Custom Next Arrow */}
                <button
                    className="customwom-next absolute right-0 top-1/2  -translate-y-1/2 z-10 
                               bg-white text-black rounded-full w-10 h-10 flex items-center cursor-pointer p-4 shadow-lg 
                               hover:bg-pink-400 hover:text-white transition"
                >
                    ❯
                </button>

                <Swiper
                    modules={[EffectCoverflow, Navigation, Autoplay]}
                    effect="coverflow"
                    centeredSlides={true}
                    loop={true}
                    navigation={{
                        nextEl: ".customwom-next",
                        prevEl: ".customwom-prev",
                    }}
                    slidesPerView={3}
                    autoplay={{ delay: 3500 }}
                    coverflowEffect={{
                        rotate: 30,
                        stretch: 0,
                        depth: 100,
                        modifier: 2,
                        slideShadows: true,
                    }}
                    breakpoints={{
                        1280: { slidesPerView: 3 },
                        768: { slidesPerView: 2 },
                        464: { slidesPerView: 1 },
                    }}
                    className="pb-10"
                >
                    {images.map((src, idx) => (
                        <SwiperSlide key={idx}>
                            <div className=" overflow-hidden">
                                <Image
                                    src={src}
                                    alt={`mens product ${idx + 1}`}
                                    width={300}
                                    height={400}
                                    className="object-cover rounded-xs"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
