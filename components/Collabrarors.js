"use client";


// import { Navigation, Pagination, Autoplay } from "swiper/modules";
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
import TextReveal from "./TextReveal";
// Styles

const images = [
  "/store.png",
  "/store2.png",
  "/store.png",
  "/store.png",
  "/store.png",
  "/store.png",
  "/store2.png",
  "/store2.png",
  "/store.png"
];

export default function Mens() {
  return (
    <div>

      <Image
        src={'/offer1.png'}
        alt="new cha"
        width={1000}
        height={1000}
        className="h-[200px] lg:h-screen lg:w-screen"
      />
      <div className="bg-white pt-10 pb-16 min-h-[350px]">
        <div className="text-center mb-10">
          <p className="text-pink-500 text-xl lg:text-xl font-bold"> Our Collabrators</p>
          <TextReveal>

            <h2 className="text-black text-sm mt-1 max-w-xl mx-auto lg:text-3xl">
              10 Minuets Stores Near You
            </h2>
          </TextReveal>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
          {/* Swiper Slider */}
          {/* Custom Prev Arrow */}
          <button
            className="customcoll-prev absolute left-1/5 top-1/2 -translate-y-1/2 z-10 
                               bg-white/40 text-black rounded-full w-10 h-10 flex items-center
                                cursor-pointer p-4 shadow-lg 
                               hover:bg-white/50 transition"
          >
            ❮
          </button>

          {/* Custom Next Arrow */}
          <button
            className="customcoll-next absolute right-1/5 top-1/2 -translate-y-1/2 z-10 
                               bg-white/40 text-black rounded-full w-10 h-10 flex items-center
                                cursor-pointer p-4 shadow-lg 
                               hover:bg-white/50 transition"
          >
            ❯
          </button>
          <Swiper
            modules={[EffectCoverflow, Autoplay, Navigation]}
            effect="coverflow"
            centeredSlides={true}
            loop={true}
            navigation={{
              nextEl: ".customcoll-next",
              prevEl: ".customcoll-prev",
            }}
            slidesPerView={2}
            autoplay={false}
            coverflowEffect={{
              rotate: 25,
              stretch: 20,
              depth: 200,
              modifier: 1.5,
              slideShadows: false,
            }}
            breakpoints={{
              1280: { slidesPerView: 3 },
              768: { slidesPerView: 2 },
              464: { slidesPerView: 1 },
            }}
          >

            {images.map((src, idx) => (
              <SwiperSlide key={idx}>
                <div className="rounded-xl overflow-hidden">
                  <Image
                    src={src}
                    alt={`mens product ${idx + 1}`}
                    width={300}
                    height={400}
                    className="obje rounded-xl lg:h-96 h-52"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
