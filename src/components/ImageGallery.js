// src/components/ImageGallery.js
"use client";
import { useState } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from 'swiper/react';
// PERUBAHAN DI SINI: 'Navigation' dihapus dari import
import { FreeMode, Thumbs } from 'swiper/modules';

// Impor CSS Swiper
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
// 'swiper/css/navigation' tidak perlu diimpor di sini lagi

const ImageGallery = ({ mainImage, galleryImages }) => {
  const allImages = [mainImage, ...galleryImages.map(img => img.src)];
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="w-full">
      {/* Main Preview */}
      <div className="relative w-full h-[679px] rounded-2xl overflow-hidden bg-gray-100">
        <Swiper
            // PERUBAHAN DI SINI: 'Navigation' dihapus dari modules
            modules={[FreeMode, Thumbs]}
            spaceBetween={10}
            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
            className="w-full h-full"
            // PERUBAHAN DI SINI: Properti 'navigation' dihapus
        >
            {allImages.map((imgSrc, index) => (
                <SwiperSlide key={index}>
                    <Image 
                        src={imgSrc} 
                        alt={`Main product preview ${index + 1}`} 
                        fill 
                        style={{ objectFit: 'cover' }} 
                        priority={index === 0}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
      </div>
      
      {/* Sub Previews (Thumbnails) */}
      <div className="mt-4">
        <Swiper
          onSwiper={setThumbsSwiper}
          modules={[FreeMode, Thumbs]}
          loop={false}
          spaceBetween={16}
          slidesPerView={'auto'}
          freeMode={true}
          watchSlidesProgress={true}
          className="h-[122px]"
        >
          {allImages.map((imgSrc, index) => (
            <SwiperSlide 
              key={index} 
              style={{ width: '182px' }}
              className="transition-opacity duration-300 opacity-50 hover:opacity-100 [&.swiper-slide-thumb-active]:opacity-100"
            >
              <div className="relative w-full h-full rounded-lg overflow-hidden cursor-pointer">
                <Image 
                  src={imgSrc} 
                  alt={`Thumbnail ${index + 1}`} 
                  fill 
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ImageGallery;