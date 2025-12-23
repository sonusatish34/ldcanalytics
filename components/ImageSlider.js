// components/WomensWearSwiper.js
"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules'; // Import Swiper modules

const WomensWearSwiper = () => {
  function curriedVolume(length) {
    return function(name)
    {
      return name + length
    }
  }
  // console.log(curriedVolume(18989)('jsjs'),'kkkk');
  
  return (
    <div className="womens-wear">
      <h2>Women's Wear</h2>
      <p>
        Explore stylish women's clothing with our smart Try-On Feature.
        Instantly preview outfits, check the fit, and see which designs match
        your style before visiting the store. Fashion that feels personal, modern,
        and made for you.
      </p>

      {/* Swiper component */}
      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="womens-wear-swiper"
      >
        <SwiperSlide>
          <img src="/bgimg.PNG" alt="item 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/bgimg.PNG" alt="item 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/bgimg.PNG" alt="item 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/bgimg.PNG" alt="item 4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/bgimg.PNG" alt="item 5" />
        </SwiperSlide>
      </Swiper>

      <button className="explore-more-btn">
        Explore More
      </button>
    </div>
  );
};

export default WomensWearSwiper
