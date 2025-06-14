"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import heroSlides from "@/constants/heroSlider";

function HomepageSlider() {
  const swiperRef = useRef(null);

  return (
    <section className="relative pt-10">
      <Swiper
        ref={swiperRef}
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        loop
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        pagination={{ clickable: true, el: ".custom-pagination" }}
        navigation={{ nextEl: ".hero-slider-next", prevEl: ".hero-slider-prev" }}
        className="h-96 md:h-[500px] w-full"
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-96 md:h-[500px]">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={slide.id === 1}
                className="object-cover"
              />
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

      {/* Arrows */}
      <button className="hero-slider-prev absolute left-4 top-1/2 z-10 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full">
        <FiChevronLeft size={24} />
      </button>
      <button className="hero-slider-next absolute right-4 top-1/2 z-10 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full">
        <FiChevronRight size={24} />
      </button>

      {/* Pagination */}
      <div className="custom-pagination absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex gap-2" />
    </section>
  );
}

export default HomepageSlider;



