// src/components/HeroCarousel.js
"use client"; // <- Tandai sebagai Client Component

import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; 

// Impor CSS Swiper
import 'swiper/css';
import 'swiper/css/navigation';

const HeroCarousel = () => {
  const carouselImages = [
    '/hero-carousel/slide-1.jpg',
    '/hero-carousel/slide-2.jpg',
    '/hero-carousel/slide-3.jpg',
    '/hero-carousel/slide-4.jpg',
  ];

  return (
    <section className="w-full mt-16 h-[605px]">
        <Swiper
          modules={[Autoplay]} 
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          className="w-full h-full"
        >
          {carouselImages.map((src, index) => (
            <SwiperSlide key={index}>
              <Image
                src={src}
                alt={`Hero slide ${index + 1}`}
                fill
                style={{ objectFit: 'cover' }}
                priority={index === 0}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
  );
};

export default HeroCarousel;