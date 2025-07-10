// src/app/fonts/page.js
"use client";

import Button from "@/components/Button";
import ProductCard from "@/components/ProductCard";
import SearchIcon from "@/components/icons/SearchIcon";
import DropdownIcon from "@/components/icons/DropdownIcon";
import Pagination from "@/components/Pagination";

// Data contoh untuk semua font (32 item untuk simulasi 8 baris)
// Setiap item sekarang memiliki 'slug' untuk link dinamis
const allFonts = [
  { name: 'Battesa Royales', slug: 'battesa-royales', desc: 'A Modern Handwritten Script', price: '$15.00', imageUrl: '/placeholder-image.jpg' },
  { name: 'Pullwist', slug: 'pullwist', desc: 'A Modern Handwritten Script', price: '$15.00', imageUrl: '/placeholder-image.jpg' },
  { name: 'Santuary Portrait', slug: 'santuary-portrait', desc: 'A Modern Handwritten Script', price: '$15.00', imageUrl: '/placeholder-image.jpg' },
  { name: 'Flower Blossom', slug: 'flower-blossom', desc: 'A Beautiful Handwritten Font', price: '$15.00', imageUrl: '/placeholder-image.jpg' },
  { name: 'Aetheria', slug: 'aetheria', desc: 'A Dreamy & Ethereal Script', price: '$19.00', imageUrl: '/placeholder-image.jpg' },
  { name: 'Cobalt Bold', slug: 'cobalt-bold', desc: 'A Strong Display Sans', price: '$22.00', imageUrl: '/placeholder-image.jpg' },
  { name: 'Paperheart', slug: 'paperheart', desc: 'A Delicate Handwritten Note Font', price: '$15.00', imageUrl: '/placeholder-image.jpg' },
  { name: 'Solstice', slug: 'solstice', desc: 'A Warm and Friendly Script', price: '$18.00', imageUrl: '/placeholder-image.jpg' },
  { name: 'Royales Horizon', slug: 'royales-horizon', desc: 'Elegant Handwritten Script', price: '$15.00', tag: 'Bestseller', imageUrl: '/placeholder-image.jpg' },
  { name: 'Grande Amstera', slug: 'grande-amstera', desc: 'A New Modern Elegant Script', price: '$15.00', tag: 'Bestseller', imageUrl: '/placeholder-image.jpg' },
  { name: 'Romantic Essentials', slug: 'romantic-essentials', desc: 'A Beautiful Handwritten Font', price: '$15.00', tag: 'Bestseller', imageUrl: '/placeholder-image.jpg' },
  { name: 'Brookside Pasture', slug: 'brookside-pasture', desc: 'A Beautiful Handwritten Font', price: '$15.00', tag: 'Bestseller', imageUrl: '/placeholder-image.jpg' },
  { name: 'Font Thirteen', slug: 'font-thirteen', desc: 'Deskripsi singkat', price: '$15.00', imageUrl: '/placeholder-image.jpg' },
  { name: 'Font Fourteen', slug: 'font-fourteen', desc: 'Deskripsi singkat', price: '$15.00', imageUrl: '/placeholder-image.jpg' },
  { name: 'Font Fifteen', slug: 'font-fifteen', desc: 'Deskripsi singkat', price: '$15.00', imageUrl: '/placeholder-image.jpg' },
  { name: 'Font Sixteen', slug: 'font-sixteen', desc: 'Deskripsi singkat', price: '$15.00', imageUrl: '/placeholder-image.jpg' },
  { name: 'Font Seventeen', slug: 'font-seventeen', desc: 'Deskripsi singkat', price: '$15.00', imageUrl: '/placeholder-image.jpg' },
  { name: 'Font Eighteen', slug: 'font-eighteen', desc: 'Deskripsi singkat', price: '$15.00', imageUrl: '/placeholder-image.jpg' },
  { name: 'Font Nineteen', slug: 'font-nineteen', desc: 'Deskripsi singkat', price: '$15.00', imageUrl: '/placeholder-image.jpg' },
  { name: 'Font Twenty', slug: 'font-twenty', desc: 'Deskripsi singkat', price: '$15.00', imageUrl: '/placeholder-image.jpg' },
  { name: 'Font Twenty-One', slug: 'font-twenty-one', desc: 'Deskripsi singkat', price: '$15.00', imageUrl: '/placeholder-image.jpg' },
  { name: 'Font Twenty-Two', slug: 'font-twenty-two', desc: 'Deskripsi singkat', price: '$15.00', imageUrl: '/placeholder-image.jpg' },
  { name: 'Font Twenty-Three', slug: 'font-twenty-three', desc: 'Deskripsi singkat', price: '$15.00', imageUrl: '/placeholder-image.jpg' },
  { name: 'Font Twenty-Four', slug: 'font-twenty-four', desc: 'Deskripsi singkat', price: '$15.00', imageUrl: '/placeholder-image.jpg' },
  { name: 'Font Twenty-Five', slug: 'font-twenty-five', desc: 'Deskripsi singkat', price: '$15.00', imageUrl: '/placeholder-image.jpg' },
  { name: 'Font Twenty-Six', slug: 'font-twenty-six', desc: 'Deskripsi singkat', price: '$15.00', imageUrl: '/placeholder-image.jpg' },
  { name: 'Font Twenty-Seven', slug: 'font-twenty-seven', desc: 'Deskripsi singkat', price: '$15.00', imageUrl: '/placeholder-image.jpg' },
  { name: 'Font Twenty-Eight', slug: 'font-twenty-eight', desc: 'Deskripsi singkat', price: '$15.00', imageUrl: '/placeholder-image.jpg' },
  { name: 'Font Twenty-Nine', slug: 'font-twenty-nine', desc: 'Deskripsi singkat', price: '$15.00', imageUrl: '/placeholder-image.jpg' },
  { name: 'Font Thirty', slug: 'font-thirty', desc: 'Deskripsi singkat', price: '$15.00', imageUrl: '/placeholder-image.jpg' },
  { name: 'Font Thirty-One', slug: 'font-thirty-one', desc: 'Deskripsi singkat', price: '$15.00', imageUrl: '/placeholder-image.jpg' },
  { name: 'Font Thirty-Two', slug: 'font-thirty-two', desc: 'Deskripsi singkat', price: '$15.00', imageUrl: '/placeholder-image.jpg' },
];

export default function AllFontsPage() {
  const categories = ["Script", "Signature", "Handwritten", "Display"];

  return (
    <div className="bg-[#f9f9f9]">
      <div className="container mx-auto max-w-[1748px] px-6 py-16">
        
        {/* Judul Halaman */}
        <div className="text-center mb-16">
          <h1 className="text-[48px] font-medium text-[#3F3F3F]">Our Font Collection</h1>
          <div className="w-[103px] h-1 bg-[#C8705C] mx-auto my-6"></div>
          <p className="mt-4 text-[18px] font-light text-[#3F3F3F] max-w-lg mx-auto">
            Browse, filter, and find the perfect font for your next creative masterpiece.
          </p>
        </div>

        {/* Panel Filter & Sortir */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
          <div className="w-full md:w-auto flex flex-col sm:flex-row items-center gap-4">
            {/* Field Search */}
            <div className="relative">
              <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <SearchIcon className="w-5 h-5 text-[#C8705C]" />
              </span>
              <input 
                type="text" 
                placeholder="Search font by name..." 
                className="w-[281px] h-[35px] bg-transparent border border-[#3F3F3F] rounded-full pl-5 pr-12 py-3 text-[14px] font-light text-[#3F3F3F] placeholder:text-[#9C9C9C] focus:ring-1 focus:ring-[#C8705C] focus:border-[#C8705C] outline-none hover:border-[#C8705C]"
              />
            </div>
            {/* Field Category */}
            <div className="relative">
              <select className="appearance-none w-[131px] h-[35px] bg-transparent py-1 px-5 border border-[#3F3F3F] rounded-full text-[14px] font-light text-[#3F3F3F] focus:ring-1 focus:ring-[#C8705C] focus:border-[#C8705C] outline-none hover:border-[#C8705C]">
                <option>Category</option>
                {categories.map(cat => <option key={cat}>{cat}</option>)}
              </select>
              <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <DropdownIcon className="w-4 h-4 text-[#C8705C]" />
              </span>
            </div>
          </div>
          {/* Field Sort by */}
          <div className="w-full md:w-auto relative">
            <select className="appearance-none w-[191px] h-[35px] bg-transparent py-1 px-5 border border-[#3F3F3F] rounded-full text-[14px] font-light text-[#3F3F3F] focus:ring-1 focus:ring-[#C8705C] focus:border-[#C8705C] outline-none hover:border-[#C8705C]">
              <option>Sort by: Popularity</option>
              <option>Sort by: Newest</option>
              <option>Sort by: Price (Low to High)</option>
              <option>Sort by: Price (High to Low)</option>
              <option>Sort by: Name (A-Z)</option>
              <option>Sort by: Name (Z-A)</option>
            </select>
            <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <DropdownIcon className="w-4 h-4 text-[#C8705C]" />
            </span>
          </div>
        </div>

        {/* Garis Pemisah */}
        <div className="w-full h-px bg-[#9c9c9c] mb-16"></div>

        {/* Grid Produk */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 place-items-center">
          {allFonts.map((font) => (
            <ProductCard 
              key={font.name}
              fontName={font.name}
              description={font.desc}
              price={font.price}
              imageUrl={font.imageUrl}
              tagText={font.tag}
              slug={font.slug} // Mengirim slug ke ProductCard
            />
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-20 flex justify-center">
          <Pagination />
        </div>

      </div>
    </div>
  );
}