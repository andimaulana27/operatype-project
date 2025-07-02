// src/app/page.js
"use client";

import Button from "@/components/Button";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import ProductCard from "@/components/ProductCard";

// Impor CSS Swiper
import 'swiper/css';
import 'swiper/css/navigation';

export default function Home() {
  const carouselImages = [
    '/hero-carousel/slide-1.jpg',
    '/hero-carousel/slide-2.jpg',
    '/hero-carousel/slide-3.jpg',
  ];

  // Data contoh untuk kartu produk
  const featuredFonts = [
    { name: 'Battesa Royales', desc: 'A Modern Handwritten Script', price: '$15.00' },
    { name: 'Pullwist', desc: 'A Modern Handwritten Script', price: '$15.00' },
    { name: 'Santuary Portrait', desc: 'A Modern Handwritten Script', price: '$15.00' },
    { name: 'Flower Blossom', desc: 'A Beautiful Handwritten Font', price: '$15.00' },
    { name: 'Royales Horizon', desc: 'Elegant Handwritten Script', price: '$15.00' },
    { name: 'Grande Amstera', desc: 'A New Modern Elegant Script', price: '$15.00' },
    { name: 'Romantic Essentials', desc: 'A Beautiful Handwritten Font', price: '$15.00' },
    { name: 'Brookside Pasture', desc: 'A Beautiful Handwritten Font', price: '$15.00' },
  ];

  return (
    <>
      {/* ========================================================== */}
      {/* HERO SECTION - BAGIAN TEKS                                 */}
      {/* ========================================================== */}
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

      {/* ========================================================== */}
      {/* HERO SECTION - BAGIAN CAROUSEL GAMBAR                      */}
      {/* ========================================================== */}
      <section className="w-full mt-16 h-[605px]">
        <Swiper
          modules={[Autoplay, Navigation]}
          navigation
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

      {/* ========================================================== */}
      {/* FEATURED COLLECTION SECTION (DENGAN PERBAIKAN)           */}
      {/* ========================================================== */}
      <section className="w-full bg-[#F2F2F2] py-20">
        <div className="container mx-auto max-w-[1748px] px-6">
          {/* Judul Section */}
          <div className="text-center mb-16">
            <h2 className="text-[38px] font-medium text-[#3F3F3F]">Our Featured Collection</h2>
            
            {/* Garis pemisah sekarang di antara Judul dan Subjudul */}
            <div className="w-[103px] h-1 bg-[#C8705C] mx-auto my-6"></div>
            
            <p className="text-[18px] font-light text-gray-500 max-w-2xl mx-auto">
              A curated selection of our most popular and newest script fonts, handpicked for you.
            </p>
          </div>

          {/* Grid Produk menggunakan komponen ProductCard */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 place-items-center">
            {featuredFonts.map((font, index) => (
              <ProductCard 
                key={index}
                fontName={font.name}
                description={font.desc}
                price={font.price}
                imageUrl={null}
              />
            ))}
          </div>

          {/* Tombol Lihat Semua sekarang di tengah dengan flexbox */}
          <div className="mt-16 flex justify-center">
              <Button href="/fonts" variant="primary" className="w-[207px] h-[54px] text-[18px] flex items-center justify-center">
                  Browse All Fonts
              </Button>
          </div>
        </div>
      </section>
    </>
  );
}