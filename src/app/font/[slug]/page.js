// src/app/font/[slug]/page.js
"use client";

import { useState } from 'react';
import Image from "next/image";
import Button from "@/components/Button";
import ChecklistIcon from "@/components/icons/ChecklistIcon";
import ProductCard from '@/components/ProductCard';
import Link from 'next/link'; // <-- PERBAIKAN: TAMBAHKAN IMPORT INI

// Data contoh untuk satu font. Nanti ini akan datang dari database.
const fontData = {
  name: 'Grande Amstera',
  author: 'operatype.co',
  heroImage: '/product-previews/grande-amstera-main.jpg',
  galleryImages: [
    { src: '/product-previews/grande-amstera-1.jpg' },
    { src: '/product-previews/grande-amstera-2.jpg' },
    { src: '/product-previews/grande-amstera-3.jpg' },
  ],
  licenses: [
    { id: 'desktop', name: 'Desktop License', price: 19, description: 'For freelancers and individuals.' },
    { id: 'business', name: 'Business License', price: 99, description: 'For small teams and web use.', popular: true },
    { id: 'corporate', name: 'Corporate License', price: 299, description: 'For large organizations.' },
  ],
  about: "Grande Amstera is a new modern and elegant script font from Operatype, perfect for any project like logos, branding, homewares, product packaging, mugs, quotes, posters, shopping bags, t-shirts, book covers, business cards, and all your other luxury projects that require a premium taste.",
  glyphs_image_url: "/product-previews/grande-amstera-glyphs.jpg"
};

const similarFonts = [
    { name: 'Battesa Royales', slug: 'battesa-royales', desc: 'A Modern Handwritten Script', price: '$15.00', imageUrl: '/placeholder-image.jpg' },
    { name: 'Pullwist', slug: 'pullwist', desc: 'A Modern Handwritten Script', price: '$15.00', imageUrl: '/placeholder-image.jpg' },
    { name: 'Santuary Portrait', slug: 'santuary-portrait', desc: 'A Modern Handwritten Script', price: '$15.00', imageUrl: '/placeholder-image.jpg' },
    { name: 'Flower Blossom', slug: 'flower-blossom', desc: 'A Beautiful Handwritten Font', price: '$15.00', imageUrl: '/placeholder-image.jpg' },
];

export default function ProductDetailPage() {
  const [selectedLicense, setSelectedLicense] = useState(
    fontData.licenses.find(l => l.popular) || fontData.licenses[0]
  );
  const [previewText, setPreviewText] = useState("The quick brown fox jumps over the lazy dog");

  return (
    <div className="bg-white">
      <div className="container mx-auto max-w-[1748px] px-6 py-12">
        {/* SECTION UTAMA: GALERI & PANEL AKSI */}
        <section className="grid md:grid-cols-2 gap-16 items-start">
          
          {/* Kolom Kiri: Galeri Gambar */}
          <div className="space-y-4 sticky top-28">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
              <Image src={fontData.heroImage} alt={`${fontData.name} hero image`} fill style={{objectFit: 'cover'}} priority />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {fontData.galleryImages.map((img, index) => (
                <div key={index} className="relative w-full aspect-video rounded-xl overflow-hidden">
                  <Image src={img.src} alt={`${fontData.name} gallery image ${index+1}`} fill style={{objectFit: 'cover'}} />
                </div>
              ))}
            </div>
          </div>

          {/* Kolom Kanan: Panel Aksi */}
          <div>
            <h1 className="text-5xl font-medium text-[#3F3F3F]">{fontData.name}</h1>
            <p className="text-lg font-light mt-2">by <Link href="/partners" className="text-[#C8705C] hover:underline">{fontData.author}</Link></p>
            
            <div className="my-8">
              <h2 className="font-medium text-lg mb-4 text-[#3F3F3F]">Choose Your License</h2>
              <div className="space-y-3">
                {fontData.licenses.map(license => (
                  <div 
                    key={license.id}
                    onClick={() => setSelectedLicense(license)}
                    className={`border p-4 rounded-lg cursor-pointer transition-all ${selectedLicense.id === license.id ? 'border-[#C8705C] ring-2 ring-[#C8705C]/50' : 'border-gray-200 bg-gray-50 hover:border-gray-400'}`}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="font-medium text-[#3F3F3F]">{license.name}</span>
                        <p className="text-sm text-gray-500 font-light">{license.description}</p>
                      </div>
                      <span className="text-lg font-medium text-[#3F3F3F]">${license.price.toFixed(2)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
              <span className="font-medium text-[#3F3F3F]">Total</span>
              <span className="text-3xl font-bold text-[#3F3F3F]">${selectedLicense.price.toFixed(2)}</span>
            </div>

            <div className="mt-6">
              <Button href="#" variant="primary" className="w-full h-14 text-lg flex items-center justify-center">Add to Cart</Button>
            </div>
            
            <div className="mt-6">
                <div className="flex items-start gap-x-3">
                    <ChecklistIcon className="w-6 h-6 flex-shrink-0 text-[#C8705C]" />
                    <p className="text-sm text-gray-500">For use in apps, games, or broadcast television, please request a custom license.</p>
                </div>
            </div>
          </div>
        </section>

        {/* SECTION FONT PREVIEWER */}
        <section className="mt-24 py-16 bg-[#F2F2F2] rounded-2xl">
          <h2 className="text-3xl font-medium text-center text-[#3F3F3F]">Live Font Preview</h2>
          <div className="mt-8 max-w-4xl mx-auto">
            <input 
              type="text"
              defaultValue={previewText}
              onChange={(e) => setPreviewText(e.target.value)}
              className="w-full text-center text-lg p-3 bg-white/50 border border-gray-300 rounded-full outline-none focus:ring-1 focus:ring-[#C8705C] focus:border-[#C8705C]"
            />
            <div 
              className="mt-8 text-6xl text-center break-words" 
            >
              {previewText}
            </div>
          </div>
        </section>

        {/* SECTION ABOUT & GLYPHS */}
        <section className="mt-24">
            <div className="text-center">
                <h2 className="text-3xl font-medium text-[#3F3F3F]">About & Glyphs</h2>
                <div className="w-[103px] h-1 bg-[#C8705C] mx-auto my-6"></div>
            </div>
            <p className="max-w-4xl mx-auto text-center text-lg font-light text-gray-600">
                {fontData.about}
            </p>
            <div className="mt-16">
                <Image src={fontData.glyphs_image_url} alt={`Glyphs for ${fontData.name}`} width={1200} height={800} className="mx-auto rounded-lg" />
            </div>
        </section>

        {/* SECTION YOU MIGHT ALSO LIKE */}
        <section className="mt-24">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-medium text-[#3F3F3F]">You Might Also Like</h2>
                <div className="w-[103px] h-1 bg-[#C8705C] mx-auto my-6"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 place-items-center">
                {similarFonts.map((font) => (
                    <ProductCard key={font.name} {...font} />
                ))}
            </div>
        </section>

      </div>
    </div>
  );
}