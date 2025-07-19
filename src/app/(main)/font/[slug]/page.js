// src/app/(main)/font/[slug]/page.js
import { supabase } from '@/lib/supabaseClient';
import { notFound } from 'next/navigation';

import ProductCard from "@/components/ProductCard";
import ImageGallery from "@/components/ImageGallery";
import LicenseSelector from "@/components/LicenseSelector";
import TypeTester from "@/components/TypeTester";
import ProductSidebar from "@/components/ProductSidebar";
import GlyphGrid from "@/components/GlyphGrid";
import Button from "@/components/Button";

// Fungsi untuk mengambil data font berdasarkan slug
async function getFontBySlug(slug) {
  const { data, error } = await supabase
    .from('fonts')
    .select('*, partners(name)')
    .eq('slug', slug)
    .single();

  if (error && error.code !== 'PGRST116') {
    console.error('Error fetching font:', error);
  }

  if (!data) {
    notFound();
  }

  return data;
}

// Data fallback untuk bagian yang mungkin belum dinamis
const fallbackData = {
  about: "A New Modern Elegant Script Font, perfect for any project like: logos, branding projects, homewares designs, product packaging, mugs, quotes, posters, shopping bags, t-shirts, book covers, business cards, invitation cards, greeting cards, labels, photography, watermarks, special events and all your other luxury projects that require a premium taste.",
  productInfo: {
    features: ["Uppercase & Lowercase", "Number & Punctuation", "Multilingual Support", "Ligatures, Alternates & Swashes", "PUA Encoded"],
    styles: ["Regular"],
    tags: ["Luxury", "Elegant", "Branding", "Wedding"],
  },
   similarFonts: [
    { name: 'Royales Horizon', slug: 'royales-horizon', description: 'Elegant Handwritten Script', price: '$15.00', imageUrl: '/placeholder-image.jpg' },
    { name: 'Grande Amstera', slug: 'grande-amstera', description: 'A New Modern Elegant Script', price: '$15.00', imageUrl: '/placeholder-image.jpg' },
    { name: 'Romantic Essentials', slug: 'romantic-essentials', description: 'A Beautiful Handwritten Font', price: '$15.00', imageUrl: '/placeholder-image.jpg' },
    { name: 'Brookside Pasture', slug: 'brookside-pasture', description: 'A Beautiful Handwritten Font', price: '$15.00', imageUrl: '/placeholder-image.jpg' },
  ]
};

export default async function ProductDetailPage({ params }) {
  const fontData = await getFontBySlug(params.slug);

  const licenses = {
    desktop: { price: fontData.price_desktop || 0 },
    business: { price: fontData.price_business || 0 },
    corporate: { price: fontData.price_corporate || 0 },
  };

  // Membuat objek styles font yang tersedia secara dinamis
  const fontStyles = {
    regular: {
      name: `font-${fontData.slug}-regular`,
      url: fontData.font_file_url_regular
    }
  };

  if (fontData.font_file_url_italic) {
    fontStyles.italic = {
      name: `font-${fontData.slug}-italic`,
      url: fontData.font_file_url_italic,
      style: 'italic'
    };
  }
  
  // (Anda bisa menambahkan 'bold' di sini dengan cara yang sama di masa depan)

  return (
    <>
      {/* Secara dinamis membuat @font-face untuk setiap style yang ada */}
      <style jsx global>{`
        ${Object.values(fontStyles).map(font => `
          @font-face {
            font-family: '${font.name}';
            src: url('${font.url}');
            ${font.style ? `font-style: ${font.style};` : ''}
            font-display: swap;
          }
        `).join('')}
      `}</style>
      
      <div className="bg-[#f9f9f9]">
        <div className="container mx-auto max-w-[1748px] px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-12 gap-y-8">

            {/* Kolom Kiri */}
            <div className="lg:col-span-2 flex flex-col">
              <ImageGallery 
                  mainImage={fontData.main_image_url || '/placeholder-image.jpg'} 
                  galleryImages={fontData.gallery_image_urls || []} 
              />
              {/* Kirim objek fontStyles ke TypeTester */}
              <TypeTester fontStyles={fontStyles} />
              
              <div className="mt-16">
                <h2 className="text-xl font-medium text-[#3F3F3F]">About The Product</h2>
                <div className="w-[103px] h-1 bg-[#C8705C] my-4"></div>
                <p className="text-gray-600 font-light leading-relaxed">{fontData.desc || fallbackData.about}</p>
              </div>
              <div className="mt-16">
                <h2 className="text-xl font-medium text-[#3F3F3F]">Glyph</h2>
                <div className="w-[103px] h-1 bg-[#C8705C] my-4"></div>
                {/* Glyph grid tetap menggunakan font regular */}
                <GlyphGrid 
                  fontFamily={fontStyles.regular.name} 
                  characters={(fontData.glyph_characters || 'abcdefghijklmnopqrstuvwxyz').split('')} 
                />
              </div>
            </div>

            {/* Kolom Kanan (Sidebar) */}
            <div className="sticky top-28 h-fit">
              <h1 className="text-4xl font-medium text-[#3F3F3F]">{fontData.name}</h1>
              <div className="mt-4">
                <span className="bg-[#C8705C] text-white text-[14px] font-light w-auto px-4 h-[27px] flex items-center justify-center rounded-full">
                  by {fontData.partners?.name || 'operatype.co'}
                </span>
              </div>
              <div className="my-6 h-px bg-gray-300"></div>
              
              <LicenseSelector
                  licenses={licenses}
                  product={fontData}
              />

              <div className="mt-6 border border-dashed border-[#C8705C] rounded-2xl p-6 text-center">
                  <h3 className="text-lg font-medium text-[#3F3F3F]">Need a custom font or license?</h3>
                  <p className="text-sm font-light text-gray-500 mt-2">Contact us and we will be happy to help you with your custom license needs.</p>
                  <Button href="/contact" variant="secondary" className="mt-4 w-full h-12 text-sm flex items-center justify-center rounded-full">Contact Us</Button>
              </div>

              <ProductSidebar
                fileTypes={"OTF, TTF, WOFF"}
                fileSize={"-"}
                features={fallbackData.productInfo.features}
                styles={fallbackData.productInfo.styles}
                tags={fallbackData.productInfo.tags}
              />
            </div>
          </div>

          <section className="mt-24">
              <div className="text-left mb-8">
                  <h2 className="text-2xl font-medium text-[#3F3F3F]">You May Also Like</h2>
                  <div className="w-[103px] h-1 bg-[#C8705C] mt-4"></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 place-items-center">
                  {fallbackData.similarFonts.map((font) => (<ProductCard key={font.name} {...font} />))}
              </div>
          </section>
        </div>
      </div>
    </>
  );
}