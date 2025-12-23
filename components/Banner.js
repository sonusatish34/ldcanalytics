"use client";

import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <section
      style={{ backgroundImage: "url('/bgimg.PNG')", backgroundSize: '100%',objectFit:'cover', backgroundRepeat: 'no-repeat' }}
      className="flex pt-6 h-full flex-col md:flex-row justify-end items-center lg:pl-32 pl-28  text-gray-900 "
      aria-label="Fashion delivery advertisement"
    >
      {/* Text Content */}
      <div className="flex flex-col lg:gap-y-10 xs:p-2 xs justify-end lg:pr-24 space-y-6 text-center md:text-left lg:pb-56 lg:pt-12 ">
        <div>
          <p className="text-lg md:text-4xl lg:text-5xl font-bold leading-snug text-white">
            Your City's <span className=" px-">Fashion.</span>
          </p>
          <p className="text-lg md:text-xl lg:text-4xl text-white font-semibold mt-2 lg:pt-8">
            Delivered in{" "}
            <span className="bg-green-400 px-2 py-1 rounded-md text-white">
              10 Min
            </span>
          </p>
        </div>

        {/* App Store Icons */}
        <div className="flex lg:gap-x-12 gap-x-6 ">
          <Image
            src="/huokkk.png"
            alt="Fashion banner showcasing latest collection"
            width={500}
            height={500}
            className="w-12 md:w-32 lg:w-[150px] rounded-lg  h-auto object-contain transition-transform duration-300 hover:scale-105"
            priority
          />
          <div className="flex flex-col justify-center md:justify-start gap-4 ">
            <Link
              href=""
              aria-label="Download on the App Store"
              className="focus:outline-none focus:ring-2 focus:ring-green-400 rounded lg:hover:scale-105"
            >
              <Image
                src="/appstore-icon.webp"
                alt="App Store icon"
                width={140}
                height={45}
                className="w-20 md:w-32 h-auto"
                priority
              />
            </Link>
            <Link
              href="https://play.google.com/store/apps/details?id=com.zuget.customer_app"
              aria-label="Get it on Google Play"
              className="focus:outline-none focus:ring-2 focus:ring-green-400 rounded lg:hover:scale-105"
            >
              <Image
                src="/playstore-icon.webp"
                alt="Play Store icon"
                width={140}
                height={45}
                className="w-20 md:w-32 h-auto"
                priority
              />
            </Link>

          </div>
        </div>
    
      </div>

      {/* <div className="mt-8 md:mt-0 md:ml-8">
        <Image
          src="/homebanner.webp"
          alt="Fashion banner showcasing latest collection"
          width={500}
          height={500}
          className="w-64 md:w-96 lg:w-[300px] h-auto object-contain transition-transform duration-300 hover:scale-105"
          priority
        />
      </div> */}

    </section>
  );
}
