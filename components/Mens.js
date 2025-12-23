"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-cards";
import "swiper/css/effect-creative";
// import "swiper/css/autoplay";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";

// Styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import TextReveal from "./TextReveal";

const images = [
    "/mens/mens1.jpg",
    "/mens/mens2.jpg",
    "/mens/mens3.jpg",
    "/mens/mens5.jpg",
    "/mens/mens3.jpg",
    "/mens/mens4.jpg",
    "/mens/mens5.jpg",
    "/mens/mens3.jpg"
];

export default function Mens() {
    return (
        <div className="bg-white py-16 min-h-[350px] relative">
            <div className="text-center mb-10">
                <p className="text-pink-500 text-xl lg:text-3xl font-bold">Mens</p>
                <TextReveal>
                    <h2 className="text-black text-sm lg:text-lg mt-1 max-w-5xl mx-auto">

                        Discover men’s clothing with a smart Try-On Feature. Instantly preview how shirts, tees, trousers, and ethnic wear look on you before stepping into the store. Style made simple and personal.
                    </h2>
                </TextReveal>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">

                {/* Custom Prev Arrow */}
                <button
                    className="custommens-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 
                               bg-white text-black rounded-full w-10 h-10 flex items-center
                                cursor-pointer p-4 shadow-lg 
                               hover:bg-pink-400 hover:text-white transition"
                >
                    ❮
                </button>

                {/* Custom Next Arrow */}
                <button
                    className="custommens-next absolute right-0 top-1/2 -translate-y-1/2 z-10 
                               bg-white text-black rounded-full w-10 h-10 flex items-center
                                cursor-pointer p-4 shadow-lg 
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
                        nextEl: ".custommens-next",
                        prevEl: ".custommens-prev",
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
