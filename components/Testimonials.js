"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const testimonials = [
  {
    text: "Ordered During My Lunch Break — Tried It Virtually, Got It Before My Meeting. Unreal.",
    author: "Aarav S.",
  },
  {
    text: "Amazing service! Support was quick and seamless.",
    author: "Priya R.",
  },
  {
    text: "Zuget makes everything so easy. Highly recommended.",
    author: "Neha M.",
  },
  {
    text: "Ordered During My Lunch Break — Tried It Virtually, Got It Before My Meeting. Unreal.",
    author: "Aarav S.",
  },
  {
    text: "Amazing service! Support was quick and seamless.",
    author: "Priya R.",
  },
  {
    text: "Zuget makes everything so easy. Highly recommended.",
    author: "Neha M.",
  }
];

export default function Testimonials() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className=" mx-auto w-full flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8"
    >
      <header className="text-center lg:mb-10 mb-5">
        <p className="text-pink-500 text-xl lg:text-3xl font-bold">Testimonials</p>
        <h2
          id="testimonials-heading"
          className=" font-bold text-lg sm:text-2xl md:text-3xl lg:text-4xl mt-2 text-black"
        >
          What People Say About <span className="text-pink-500">Zuget</span>
        </h2>
      </header>

      <div className="w-full flex flex-col items-center">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1.1}
          centeredSlides={true}
          pagination={{ clickable: true }}
          spaceBetween={30}
          className="w-full max-w-4xl"
          breakpoints={{
            768: { slidesPerView: 1.6 },
            1024: { slidesPerView: 3 },
          }}
          loop={true}
          aria-label="Customer testimonials slider"
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={idx}>
              {({ isActive }) => (
                <div className="p-5">
                  <article
                    className={`transition-all duration-300 ease-in-out rounded-xl p-6 border bg-[##2A2A2A text-black] h-36 lg:h-52   ${isActive
                      ? "scale-105 shadow-lg border-pink-200"
                      : "scale-95 opacity-70"
                      }`}
                    aria-label={`Testimonial from ${t.author}`}
                  >
                    <blockquote className=" text-sm text-black sm:text-base md:text-lg leading-relaxed">
                      <span className="text-4xl text-pink-400 leading-[0.5] mr-1" aria-hidden="true">“</span>
                      {t.text}
                    </blockquote>
                    <p className="mt-4 text-sm text-black md:text-base font-medium">
                      — {t.author}
                    </p>
                  </article>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
