import React from 'react';
import Image from 'next/image';

const HowItWorks = () => {
  const steps = [
    "Find Premium Styles Near You",
    "See Fit Instantly With AI",
    "Delivery In Under 30 Mins",
    "Keep What You Love",
  ];

  return (
    <section
      aria-labelledby="how-it-works-heading"
      className=" mx-auto px-4 py-10 md:py-14 lg:py-20 lg:px-10  rounded-xl shadow-md"
    >
      <header className="text-center mb-10">
        <p className="text-pink-500 text-sm sm:text-base md:text-lg lg:text-5xl font-medium tracking-wide">
          How It Works
        </p>
        <h2
          id="how-it-works-heading"
          className="text-black font-bold text-lg sm:text-2xl md:text-3xl lg:text-4xl mt-2 lg:mt-4"
        >
          See It. Try It. Get It.
        </h2>
      </header>

      <div className="flex justify-between lg:justify-center items-center gap-4 md:gap-12 px-4 md:px-8">
        <ol className="relative border-l-2 border-pink-200 pl-2 w-full md:w-1/2 last:border-l-0" role="list">

          {steps.map((step, index) => (
            <li
              key={index}
              className="mb-6 last:mb-0 flex items-start group focus-within:ring-2 focus-within:ring-pink-300"
            >
              <span
                className="absolute -left-5 flex items-center justify-center h-8 w-8 md:h-10 md:w-10 rounded-full bg-pink-100 border border-pink-400 text-pink-900 font-semibold text-sm md:text-base"
                aria-hidden="true"
              >
                {index + 1}
              </span>
              <span className="ml-4 mt-2 text-black lg:mt-0 lg:ml-8 lg:mb-8  text-xs lg:text-3xl leading-snug">
                {step}
              </span>
            </li>
          ))}
        </ol>

        <figure className="w-48 sm:w-64 md:w-72 lg:w-80 xl:w-96">
          <Image
            src="/dropsoon.png"
            alt="Woman trying on fashion items using AI preview"
            width={500}
            height={500}
            className="w-full h-auto rounded-lg object-contain"
            priority
          />
        </figure>
      </div>
    </section>
  );
};

export default HowItWorks;
