'use client'

import React from 'react'
import Image from 'next/image'

const WhyZuget = () => {
  return (
    <section
      className='flex flex-col gap-y-6 py-10 px-4 text-gray-900'
      aria-labelledby='why-zuget-title'
    >
      {/* Heading */}
      <header className='text-center'>
        <h2
          id='why-zuget-title'
          className='text-pink-500 text-lg lg:text-3xl font-semibold'
        >
          Why zuget
        </h2>
        <p className='font-extrabold text-white text-lg md:text-xl lg:text-2xl pt-2'>
          The Future of Fashion. Delivered Fast.
        </p>
      </header>

      {/* Content with Image and Text */}
      <div className='flex lg:justify-between gap-x-6 w-full lg:px-10 lg:gap-x-12 lg:pt-4'>
        <Image
          src='/Rectangle 2315 (1).png'
          alt="zuget's local boutique stock showcase"
          width={112}
          height={112}
          className='w-28 lg:w-64 h-auto rounded-lg object-cover'
          priority
        />

        <section className='flex flex-col gap-y-3 md:flex-1 text-white '>
          <p className='font-bold text-lg lg:text-4xl'>Nearby Stores :</p>
          <p className='capitalize text-base md:text-lg lg:text-2xl leading-relaxed'>
            Real stock from trusted local boutiques — no fake listings, no
            delays
          </p>
          <button
            type='button'
            className='mt-2 p-2 bg-pink-400 border border-pink-600 rounded-lg w-32 text-white font-semibold hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-1 transition'
          >
            View More
          </button>
        </section>
      </div>
    </section>
  )
}

export default WhyZuget
