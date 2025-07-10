// src/components/ImageGallery.js
"use client";
import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Thumbs } from 'swiper/modules';

// Import CSS Swiper
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';

// Komponen ini akan mengelola galeri gambar
const ImageGallery = ({ mainImage, galleryImages }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="w-full">
      {/* Gambar Utama */}
      <Swiper
        modules={[FreeMode, Thumbs]}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        className="w-full aspect-[1019/679] rounded-2xl overflow-hidden bg-gray-100 shadow-md"
      >
        {[mainImage, ...galleryImages].map((imgSrc, index) => (
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
      
      {/* Galeri Thumbnail */}
      <div className="mt-4">
        <Swiper
          onSwiper={setThumbsSwiper}
          modules={[FreeMode, Thumbs]}
          loop={false}
          spaceBetween={16}
          slidesPerView={'auto'} // Memungkinkan scroll horizontal
          freeMode={true}
          watchSlidesProgress={true}
          className="h-[122px] hide-scrollbar" // Terapkan class untuk sembunyikan scrollbar
        >
          {[mainImage, ...galleryImages].map((imgSrc, index) => (
            // Poin 1: Ukuran submain/thumbnail 182x122
            <SwiperSlide 
              key={index} 
              style={{ width: '182px', height: '122px' }} 
              className="transition-opacity duration-300 opacity-50 hover:opacity-100 [&.swiper-slide-thumb-active]:opacity-100 cursor-pointer"
            >
              <div className="relative w-full h-full rounded-lg overflow-hidden">
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