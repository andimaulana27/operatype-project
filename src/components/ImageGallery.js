// src/components/ImageGallery.js
"use client";
import { useState } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

// Impor CSS Swiper
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const ImageGallery = ({ mainImage, galleryImages }) => {
  // Gabungkan gambar utama dengan galeri untuk thumbnail
  const allImages = [mainImage, ...galleryImages.map(img => img.src)];
  
  // State untuk sinkronisasi antara galeri utama dan thumbnail
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="w-full">
      {/* Main Preview - Ukuran 1019x744 diterapkan melalui aspect-ratio */}
      <div className="relative w-full aspect-[1019/679] rounded-2xl overflow-hidden bg-gray-100">
        <Swiper
            modules={[FreeMode, Thumbs]}
            spaceBetween={10}
            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
            className="w-full h-full"
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
          spaceBetween={16} // Jarak antar thumbnail 16px
          slidesPerView={'auto'} // Tampilkan thumbnail sebanyak mungkin
          freeMode={true}
          watchSlidesProgress={true}
          className="h-[122px] hide-scrollbar" // Terapkan class untuk sembunyikan scrollbar
        >
          {allImages.map((imgSrc, index) => (
            <SwiperSlide 
              key={index} 
              style={{ width: '182px' }} // Atur lebar setiap thumbnail
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