"use client";
import React, { useRef, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';
import heroSlides from "@/constants/heroSlider";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import Image from 'next/image';

function HomepageSlider() {
  const swiperRef = useRef(null);

  // Debug: Log heroSlides data
  useEffect(() => {
    console.log('Hero Slides Data:', heroSlides);
    if (swiperRef.current) {
      console.log('Swiper initialized:', swiperRef.current.swiper);
    }
  }, []);

  return (
    <section className="pt-10 relative" style={{ backgroundColor: '#f5f5f5' }}>
      {/* Debug Container */}
      <div className="debug-info absolute top-0 left-0 z-50 bg-black text-white p-2 text-xs">
        {heroSlides.length === 0 ? 'No slides found' : `${heroSlides.length} slides loaded`}
      </div>

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
          el: '.custom-pagination',
        }}
        navigation={{
          nextEl: '.hero-slider-next',
          prevEl: '.hero-slider-prev',
        }}
        className="h-96 md:h-[500px] w-full bg-red-500" // Temporary bg for visibility
        onInit={(swiper) => console.log('Swiper initialized:', swiper)}
      >
        {heroSlides.length > 0 ? (
          heroSlides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="w-full h-full relative">
                {/* Fallback image if main image fails */}
                <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                  <span className="text-lg">Slide {slide.id}</span>
                </div>
                
                <Image
                  src={slide.image}
                  alt={slide.title || `Slide ${slide.id}`}
                  width={2000}
                  height={1000}
               
                  className="object-cover"
                  priority={slide.id === heroSlides[0].id}
                  sizes="100vw"
                  onError={(e) => {
                    console.error('Image failed to load:', slide.image);
                    e.target.style.display = 'none';
                  }}
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
          ))
        ) : (
          <SwiperSlide>
            <div className="w-full h-full bg-yellow-400 flex items-center justify-center">
              <p className="text-2xl">No slides available</p>
            </div>
          </SwiperSlide>
        )}
      </Swiper>

      {/* Custom Navigation */}
      <button 
        className="hero-slider-prev absolute left-4 top-1/2 z-10 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full transition duration-300"
        aria-label="Previous slide"
      >
        <FiChevronLeft size={24} />
      </button>
      <button 
        className="hero-slider-next absolute right-4 top-1/2 z-10 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full transition duration-300"
        aria-label="Next slide"
      >
        <FiChevronRight size={24} />
      </button>

      {/* Custom Pagination */}
      <div className="custom-pagination absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex gap-2" />
    </section>
  )
}

export default HomepageSlider;