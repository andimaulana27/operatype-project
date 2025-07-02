// src/app/page.js
"use client";

import Button from "@/components/Button";
import Image from "next/image";

// 1. Impor komponen Swiper (EffectFade dihapus)
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

// 2. Impor CSS Swiper
import 'swiper/css';
import 'swiper/css/navigation';


export default function Home() {
  const carouselImages = [
    '/hero-carousel/slide-1.jpg',
    '/hero-carousel/slide-2.jpg',
    '/hero-carousel/slide-3.jpg',
    '/hero-carousel/slide-4.jpg',
  ];

  return (
    <>
      {/* Bagian teks tetap di dalam container agar tidak terlalu lebar */}
      <section className="container mx-auto max-w-[1748px] px-6 text-center pt-16 pb-12">
        <div className="flex flex-col items-center">
          <p className="font-light text-[16px] tracking-widest text-[#3F3F3F] uppercase">
            THE ART OF SCRIPT FONTS
          </p>
          <h1 className="mt-4 font-medium text-[74px] text-[#3F3F3F] max-w-4xl">
            Elevate Your Designs
          </h1>
          <p className="mt-6 max-w-2xl font-light text-[18px] text-gray-500">
            A curated library of high-quality, versatile script fonts complete with full character sets and commercial licenses, ready for any project.
          </p>
        </div>

        <div className="mt-10 flex justify-center items-center gap-x-4">
          <Button href="/fonts" variant="primary" className="w-[207px] h-[54px] text-[18px] flex items-center justify-center">Browse All Fonts</Button>
          <Button href="/about" variant="secondary" className="w-[207px] h-[54px] text-[18px] flex items-center justify-center">Our Story</Button>
        </div>
      </section>

      {/* Bagian Carousel sekarang di luar container untuk efek full-width */}
      <section className="w-full mt-16 h-[605px]">
        <Swiper
          // 3. Efek 'fade' dihapus, modulnya juga dihapus
          modules={[Autoplay, Navigation]}
          navigation // Menambahkan tombol navigasi panah kiri-kanan
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          className="w-full h-full" // Swiper mengisi penuh section
        >
          {carouselImages.map((src, index) => (
            <SwiperSlide key={index}>
              <Image
                src={src}
                alt={`Hero slide ${index + 1}`}
                fill // Menggunakan 'fill' agar gambar mengisi SwiperSlide
                style={{ objectFit: 'cover' }} // Membuat gambar menutupi area tanpa distorsi
                priority={index === 0}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Section selanjutnya akan kita tambahkan di bawah sini */}
    </>
  );
}