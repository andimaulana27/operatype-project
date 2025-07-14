// src/app/(main)/font/[slug]/page.js
"use client"; 

import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import ImageGallery from "@/components/ImageGallery";
import LicenseSelector from "@/components/LicenseSelector";
import TypeTester from "@/components/TypeTester";
import ProductSidebar from "@/components/ProductSidebar";
import GlyphGrid from "@/components/GlyphGrid";
import Button from "@/components/Button";

// DATA CONTOH
const fontData = {
  name: 'Grande Amstera',
  author: 'operatype.co',
  mainImage: '/product-previews/grande-amstera-main.jpg',
  galleryImages: [
    '/product-previews/thumb-1.jpg', '/product-previews/thumb-2.jpg', '/product-previews/thumb-3.jpg', 
    '/product-previews/thumb-4.jpg', '/product-previews/thumb-5.jpg', '/product-previews/thumb-6.jpg',
    '/product-previews/thumb-1.jpg', '/product-previews/thumb-2.jpg', '/product-previews/thumb-3.jpg',
    '/product-previews/thumb-4.jpg', '/product-previews/thumb-5.jpg', '/product-previews/thumb-6.jpg',
    '/product-previews/thumb-1.jpg', '/product-previews/thumb-2.jpg', '/product-previews/thumb-3.jpg',
  ],
  licenses: {
    desktop: { price: 19.00 },
    business: { price: 99.00 },
    corporate: { price: 299.00 },
  },
  fileTypes: "Grande Amstera OTF, TTF, WOFF",
  fileSize: "612.35 KB",
  about: "Grande Amstera - A New Modern Elegant Script Font, from Operatype, perfect for any project like: logos, branding projects, homewares designs, product packaging, mugs, quotes, posters, shopping bags, t-shirts, book covers, business cards, invitation cards, greeting cards, labels, photography, watermarks, special events and all your other luxury projects that require a premium taste.",
  glyphs: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()".split(''),
  productInfo: {
    features: ["Uppercase & Lowercase", "Number & Punctuation", "Multilingual Support", "Ligatures, Alternates & Swashes", "PUA Encoded"],
    styles: ["Regular"],
    tags: ["Luxury", "Elegant", "Branding", "Wedding"],
  },
};

const similarFonts = [
    { name: 'Royales Horizon', slug: 'royales-horizon', description: 'Elegant Handwritten Script', price: '$15.00', imageUrl: '/placeholder-image.jpg' },
    { name: 'Grande Amstera', slug: 'grande-amstera', description: 'A New Modern Elegant Script', price: '$15.00', imageUrl: '/placeholder-image.jpg' },
    { name: 'Romantic Essentials', slug: 'romantic-essentials', description: 'A Beautiful Handwritten Font', price: '$15.00', imageUrl: '/placeholder-image.jpg' },
    { name: 'Brookside Pasture', slug: 'brookside-pasture', description: 'A Beautiful Handwritten Font', price: '$15.00', imageUrl: '/placeholder-image.jpg' },
];


export default function ProductDetailPage({ params }) {
  if (!fontData) {
    return <div>Font not found</div>;
  }

  return (
    <div className="bg-[#f9f9f9]">
      <div className="container mx-auto max-w-[1748px] px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-12 gap-y-8">

          {/* Kolom Kiri */}
          <div className="lg:col-span-2 flex flex-col">
            <ImageGallery mainImage={fontData.mainImage} galleryImages={fontData.galleryImages} />
            <TypeTester />
            <div className="mt-16">
              <h2 className="text-xl font-medium text-[#3F3F3F]">About The Product</h2>
              <div className="w-[103px] h-1 bg-[#C8705C] my-4"></div>
              <p className="text-gray-600 font-light leading-relaxed">{fontData.about}</p>
            </div>
            <div className="mt-16">
              <h2 className="text-xl font-medium text-[#3F3F3F]">Glyph</h2>
              <div className="w-[103px] h-1 bg-[#C8705C] my-4"></div>
              <GlyphGrid characters={fontData.glyphs} />
            </div>
          </div>

          {/* Kolom Kanan (Sidebar) */}
          <div className="sticky top-28 h-fit">
            <h1 className="text-4xl font-medium text-[#3F3F3F]">{fontData.name}</h1>
            <div className="mt-4">
              <span className="bg-[#C8705C] text-white text-[14px] font-light w-[134px] h-[27px] flex items-center justify-center rounded-full">
                by {fontData.author}
              </span>
            </div>
            <div className="my-6 h-px bg-gray-300"></div>
            {fontData.licenses && (
              <LicenseSelector
                licenses={fontData.licenses}
                product={fontData}
              />
            )}

            {/* PERUBAHAN DI SINI: Kartu Penawaran Kustom */}
            <div className="mt-6 border border-dashed border-[#C8705C] rounded-2xl p-6 text-center">
                <h3 className="text-lg font-medium text-[#3F3F3F]">Need a custom font or license?</h3>
                <p className="text-sm font-light text-gray-500 mt-2">
                    Contact us and we will be happy to help you with your custom license needs.
                </p>
                <Button 
                    href="/contact" 
                    variant="secondary" 
                    className="mt-4 w-full h-12 text-sm flex items-center justify-center rounded-full"
                >
                    Contact Us
                </Button>
            </div>

            <ProductSidebar
              fileTypes={fontData.fileTypes}
              fileSize={fontData.fileSize}
              features={fontData.productInfo.features}
              styles={fontData.productInfo.styles}
              tags={fontData.productInfo.tags}
            />
          </div>
        </div>

        <section className="mt-24">
            <div className="text-left mb-8">
                <h2 className="text-2xl font-medium text-[#3F3F3F]">You May Also Like</h2>
                <div className="w-[103px] h-1 bg-[#C8705C] mt-4"></div>
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