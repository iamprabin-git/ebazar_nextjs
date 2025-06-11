"use client";
import React, {  useRef } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';
import heroSlides from "@/constants/heroSlider";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';



function HomepageSlider() {
    const swiperRef = useRef(null);
  return (
    <section className="pt-10 relative">
        <Swiper
          ref={swiperRef}
          modules={[Autoplay, Navigation, Pagination, EffectFade]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={{
            nextEl: '.hero-slider-next',
            prevEl: '.hero-slider-prev',
          }}
          className="h-96 md:h-[500px]"
        >
          {heroSlides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center">
                  <div className="container mx-auto px-4 text-white">
                    <h1 className="text-4xl md:text-6xl font-bold mb-2">{slide.title}</h1>
                    <p className="text-xl md:text-2xl mb-6">{slide.subtitle}</p>
                    <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full font-medium transition duration-300">
                      {slide.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Custom Navigation Arrows */}
        <button 
          className="hero-slider-prev absolute left-4 top-1/2 z-10 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full transition duration-300"
          onClick={() => swiperRef.current?.swiper.slidePrev()}
        >
          <FiChevronLeft size={24} />
        </button>
        <button 
          className="hero-slider-next absolute right-4 top-1/2 z-10 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full transition duration-300"
          onClick={() => swiperRef.current?.swiper.slideNext()}
        >
          <FiChevronRight size={24} />
        </button>
      </section>
  )
}

export default HomepageSlider;
