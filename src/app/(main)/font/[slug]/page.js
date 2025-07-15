// src/app/(main)/font/[slug]/page.js
import { supabase } from '@/lib/supabaseClient'; // Impor konektor Supabase
import { notFound } from 'next/navigation';

import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import ImageGallery from "@/components/ImageGallery";
import LicenseSelector from "@/components/LicenseSelector";
import TypeTester from "@/components/TypeTester";
import ProductSidebar from "@/components/ProductSidebar";
import GlyphGrid from "@/components/GlyphGrid";
import Button from "@/components/Button";

// --- DATA CONTOH SEKARANG DIAMBIL DARI DATABASE ---

// Fungsi untuk mengambil data satu font berdasarkan slug
async function getFontBySlug(slug) {
  const { data, error } = await supabase
    .from('fonts')
    .select('*')
    .eq('slug', slug) // Cari baris yang slug-nya cocok
    .single(); // Ambil hanya satu hasil

  if (error && error.code !== 'PGRST116') { // Abaikan error 'PGRST116' (no rows found)
    console.error('Error fetching font:', error);
  }

  if (!data) {
    notFound(); // Jika tidak ada data, tampilkan halaman 404
  }

  return data;
}

// Data dummy untuk lisensi & info lainnya (nanti bisa dipindah ke database juga)
const staticFontDetails = {
  author: 'operatype.co',
  mainImage: '/product-previews/grande-amstera-main.jpg',
  galleryImages: [
    '/product-previews/thumb-1.jpg', '/product-previews/thumb-2.jpg', '/product-previews/thumb-3.jpg', 
    '/product-previews/thumb-4.jpg', '/product-previews/thumb-5.jpg', '/product-previews/thumb-6.jpg',
  ],
  licenses: {
    desktop: { price: 19.00 },
    business: { price: 99.00 },
    corporate: { price: 299.00 },
  },
  fileTypes: "OTF, TTF, WOFF",
  fileSize: "612.35 KB",
  about: "A New Modern Elegant Script Font, from Operatype, perfect for any project like: logos, branding projects, homewares designs, product packaging, mugs, quotes, posters, shopping bags, t-shirts, book covers, business cards, invitation cards, greeting cards, labels, photography, watermarks, special events and all your other luxury projects that require a premium taste.",
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

// Ubah komponen menjadi 'async'
export default async function ProductDetailPage({ params }) {
  const fontData = await getFontBySlug(params.slug);

  // Gabungkan data dinamis dari Supabase dengan data statis untuk detail lainnya
  const displayData = {
    ...staticFontDetails, // Ambil detail statis
    ...fontData,          // Timpa dengan data dinamis (nama, desc, dll)
  };

  return (
    <div className="bg-[#f9f9f9]">
      <div className="container mx-auto max-w-[1748px] px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-12 gap-y-8">

          {/* Kolom Kiri */}
          <div className="lg:col-span-2 flex flex-col">
            <ImageGallery mainImage={displayData.mainImage} galleryImages={displayData.galleryImages} />
            <TypeTester />
            <div className="mt-16">
              <h2 className="text-xl font-medium text-[#3F3F3F]">About The Product</h2>
              <div className="w-[103px] h-1 bg-[#C8705C] my-4"></div>
              <p className="text-gray-600 font-light leading-relaxed">{displayData.about}</p>
            </div>
            <div className="mt-16">
              <h2 className="text-xl font-medium text-[#3F3F3F]">Glyph</h2>
              <div className="w-[103px] h-1 bg-[#C8705C] my-4"></div>
              <GlyphGrid characters={displayData.glyphs} />
            </div>
          </div>

          {/* Kolom Kanan (Sidebar) */}
          <div className="sticky top-28 h-fit">
            <h1 className="text-4xl font-medium text-[#3F3F3F]">{displayData.name}</h1>
            <div className="mt-4">
              <span className="bg-[#C8705C] text-white text-[14px] font-light w-[134px] h-[27px] flex items-center justify-center rounded-full">
                by {displayData.author}
              </span>
            </div>
            <div className="my-6 h-px bg-gray-300"></div>
            {displayData.licenses && (
              <LicenseSelector
                licenses={displayData.licenses}
                product={displayData}
              />
            )}

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
              fileTypes={displayData.fileTypes}
              fileSize={displayData.fileSize}
              features={displayData.productInfo.features}
              styles={displayData.productInfo.styles}
              tags={displayData.productInfo.tags}
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