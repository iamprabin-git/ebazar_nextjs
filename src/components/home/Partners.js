"use client";
import React, { useRef } from 'react';
import {  FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import sponsors from '@/constants/sponsers';
import Image from 'next/image';


function Partners() {
      const sponsorsSwiperRef = useRef(null);
  return (
    <section className="py-8 bg-gray-100">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4 dark:text-slate-900">Our Sponsers List</h2>
        <div className="container mx-auto px-4">
          <Swiper
            ref={sponsorsSwiperRef}
            modules={[Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={2}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: '.sponsors-slider-next',
              prevEl: '.sponsors-slider-prev',
            }}
            className="py-4"
          >
            {sponsors.map((sponsor) => (
              <SwiperSlide key={sponsor.id}>
                <div className="flex items-center justify-center h-25 grayscale hover:grayscale-0 transition-all duration-300">
                  <Image
                    src={sponsor.logo} 
                    alt={sponsor.name} 
                    height={500}
                    width={500}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex justify-center mt-4 space-x-4">
            <button 
              className="sponsors-slider-prev bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition duration-300 dark:bg-slate-700 dark:hover:bg-slate-600"
              onClick={() => sponsorsSwiperRef.current?.swiper.slidePrev()}
            >
              <FiChevronLeft />
            </button>
            <button 
              className="sponsors-slider-next bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition duration-300 dark:bg-slate-700 dark:hover:bg-slate-600"
              onClick={() => sponsorsSwiperRef.current?.swiper.slideNext()}
            >
              <FiChevronRight />
            </button>
          </div>
        </div>
      </section>
  )
}

export default Partners;
