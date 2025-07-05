// src/app/font/[slug]/page.js
"use client";

import { useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import ImageGallery from '@/components/ImageGallery';
import LicenseSelector from '@/components/LicenseSelector';
import ProductCard from '@/components/ProductCard';
import Button from '@/components/Button';
import FileIcon from '@/components/icons/FileIcon';
import ArchiveIcon from '@/components/icons/ArchiveIcon';

// Data contoh untuk satu font. Nanti ini akan datang dari database.
const fontData = {
  name: 'Grande Amstera',
  author: 'operatype.co',
  mainImage: '/product-previews/grande-amstera-main.jpg',
  galleryImages: [
    { src: '/product-previews/grande-amstera-1.jpg' }, { src: '/product-previews/grande-amstera-2.jpg' },
    { src: '/product-previews/grande-amstera-3.jpg' }, { src: '/product-previews/grande-amstera-4.jpg' },
    { src: '/product-previews/grande-amstera-5.jpg' }, { src: '/product-previews/grande-amstera-6.jpg' },
    { src: '/product-previews/grande-amstera-7.jpg' }, { src: '/product-previews/grande-amstera-8.jpg' },
    { src: '/product-previews/grande-amstera-9.jpg' }, { src: '/product-previews/grande-amstera-10.jpg' },
    { src: '/product-previews/grande-amstera-11.jpg' }, { src: '/product-previews/grande-amstera-12.jpg' },
    { src: '/product-previews/grande-amstera-13.jpg' }, { src: '/product-previews/grande-amstera-14.jpg' },
  ],
  licenses: [
    { id: 'desktop', name: 'Desktop License', price: 19 },
    { id: 'business', name: 'Business License', price: 99, popular: true },
    { id: 'corporate', name: 'Corporate License', price: 299 },
  ],
  fileTypes: "Grande Amstera OTF, TTF, WOFF",
  fileSize: "612.35 KB",
  about: "Grande Amstera - A New Modern Elegant Script Font, from Operatype, perfect for any project like: logos, branding projects, homewares designs, product packaging, mugs, quotes, posters, shopping bags, t-shirts, book covers, business cards, invitation cards, greeting cards, labels, photography, watermarks, special events and all your other luxury projects that require a premium taste.",
  supportedLanguages: "The font includes support for 65 languages; Afrikaans, Albanian, Asu, Basque, Bemba, Bena, Breton, Catalan, Chiga, Cornish, Danish, Dutch, English, Faroese, Filipino, French, Friulian, Galician, German, Gusii, Indonesian, Irish, Italian, Kabuverdianu, Kalenjin, Kinyarwanda, Luo, Luxembourg, Luyia, Machame, Makhuwa-Meetto, Makonde, Malagasy, Manx, Morisyen, North Ndebele, Norwegian Bokmål, Nynorsk, Norwegian, Nyankole, Oromo, Portuguese, Quechua, Romansh, Rombo, Rundi, Rwa, Samburu, Sango, Sangu, Scottish Gaelic, Sena, Shambala, Shona, Soga, Somali, Spanish, Swahili, Swedish, Swiss, German, Taita, Teso, Uzbek (Latin), Volapük, Vunjo, Zulu.",
  productInfo: {
    features: ["Uppercase & Lowercase", "Number & Punctuation", "Multilingual Support", "Ligatures, Alternates & Swashes", "PUA Encoded"],
    styles: ["Regular"],
    tags: ["Luxury", "Elegant", "Branding", "Wedding"],
  },
  glyphs_image_url: "/product-previews/grande-amstera-glyphs.jpg"
};

const similarFonts = [
    { name: 'Battesa Royales', slug: 'battesa-royales', desc: 'A Modern Handwritten Script', price: '$15.00', imageUrl: '/placeholder-image.jpg' },
    { name: 'Pullwist', slug: 'pullwist', desc: 'A Modern Handwritten Script', price: '$15.00', imageUrl: '/placeholder-image.jpg' },
    { name: 'Santuary Portrait', slug: 'santuary-portrait', desc: 'A Modern Handwritten Script', price: '$15.00', imageUrl: '/placeholder-image.jpg' },
    { name: 'Flower Blossom', slug: 'flower-blossom', desc: 'A Beautiful Handwritten Font', price: '$15.00', imageUrl: '/placeholder-image.jpg' },
];


export default function ProductDetailPage() {
  const [previewText, setPreviewText] = useState("Type Here");

  return (
    <div className="bg-white">
      <div className="container mx-auto max-w-[1748px] px-6 py-12">
        {/* SECTION UTAMA: GALERI & PANEL AKSI */}
        <section className="grid md:grid-cols-[minmax(0,_1116px)_1fr] gap-12">
          
          {/* Kolom Kiri: Galeri Gambar */}
          <div className="sticky top-28">
            <ImageGallery 
              mainImage={fontData.mainImage} 
              galleryImages={fontData.galleryImages} 
            />
          </div>

          {/* Kolom Kanan: Panel Aksi */}
          <div className="flex flex-col">
            <div className='mb-6'>
              <h1 className="text-[26px] font-medium text-[#3F3F3F]">{fontData.name}</h1>
              <div className="mt-2">
                <span className="bg-[#C8705C] text-white text-[14px] font-light w-[145px] h-[27px] flex items-center justify-center rounded-[21px]">
                  by {fontData.author}
                </span>
              </div>
            </div>
            
            <LicenseSelector licenses={fontData.licenses} />
          </div>
        </section>

        {/* SECTION FONT PREVIEWER */}
        <section className="mt-24">
          <div className="flex justify-between items-center border border-gray-300 rounded-full p-2">
            <select className="appearance-none bg-transparent py-2 px-4 outline-none">
              <option>The quick brown fox...</option>
            </select>
            <input type="range" min="12" max="120" defaultValue="38" className="w-full mx-4" />
            <span className="text-gray-500 whitespace-nowrap">38 px</span>
            <input 
              type="text"
              placeholder="Type Here"
              onChange={(e) => setPreviewText(e.target.value || "Type Here")}
              className="w-1/3 text-right bg-transparent py-2 px-4 outline-none"
            />
          </div>
          <div 
            className="mt-8 text-7xl text-center break-words text-[#3F3F3F]"
          >
            {previewText}
          </div>
        </section>

        {/* SECTION ABOUT, INFO, & GLYPHS */}
        <section className="mt-24 grid md:grid-cols-[2fr_1fr] gap-16">
          {/* Kolom Kiri: About & Glyphs */}
          <div className="space-y-16">
            <div>
              <h2 className="text-3xl font-medium text-[#3F3F3F]">About The Product</h2>
              <div className="w-[103px] h-1 bg-[#C8705C] my-6"></div>
              <p className="text-gray-600 font-light leading-relaxed">{fontData.about}</p>
              <p className="text-gray-600 font-light leading-relaxed mt-4">{fontData.supportedLanguages}</p>
            </div>
            <div>
              <h2 className="text-3xl font-medium text-[#3F3F3F]">Glyph</h2>
              <div className="w-[103px] h-1 bg-[#C8705C] my-6"></div>
              <div className="relative w-full h-auto">
                <Image src={fontData.glyphs_image_url} alt={`Glyphs for ${fontData.name}`} width={800} height={500} className="mx-auto rounded-lg" />
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Sidebar Informasi */}
          <div className="sticky top-28">
            <div className="border p-6 rounded-2xl">
              <h3 className="text-2xl font-medium text-[#3F3F3F]">Product Information</h3>
              <div className="mt-6 space-y-4 text-gray-600 font-light">
                <div className="flex items-center gap-x-3">
                  <FileIcon className="w-5 h-5 flex-shrink-0" />
                  <span>{fontData.fileTypes}</span>
                </div>
                <div className="flex items-center gap-x-3">
                  <ArchiveIcon className="w-5 h-5 flex-shrink-0" />
                  <span>{fontData.fileSize}</span>
                </div>
              </div>
              <div className="w-full h-px bg-gray-200 my-6"></div>
              <div>
                <h4 className="font-medium text-[#3F3F3F] mb-3">Features</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-600 font-light">
                  {fontData.productInfo.features.map(item => <li key={item}>{item}</li>)}
                </ul>
              </div>
              <div className="w-full h-px bg-gray-200 my-6"></div>
              <div>
                <h4 className="font-medium text-[#3F3F3F] mb-3">Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {fontData.productInfo.tags.map(tag => (
                    <span key={tag} className="bg-gray-100 text-gray-600 text-sm px-3 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* YOU MIGHT ALSO LIKE */}
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