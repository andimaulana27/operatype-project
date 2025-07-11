"use client";

import ProductCard from "@/components/ProductCard";
import SearchIcon from "@/components/icons/SearchIcon";
import DropdownIcon from "@/components/icons/DropdownIcon";
import Pagination from "@/components/Pagination";

const partnerFonts = [
   {name: 'Battesa Royales', slug: 'battesa-royales', description: 'A Beauty Handwritten Script, from Operatype', price: '$15.00', imageUrl: '/placeholder-image.jpg' },
  { name: 'Pullwist', slug: 'pullwist', description: 'A Modern Handwritten Script, from Operatype', price: '$15.00', imageUrl: '/placeholder-image.jpg' },
  { name: 'Santuary Portrait', slug: 'santuary-portrait', description: 'A Modern Handwritten Font, from Operatype', price: '$15.00', imageUrl: '/placeholder-image.jpg' },
  { name: 'Flower Blossom', slug: 'flower-blossom', description: 'A New Modern Elegant Script Font, from Operatype.co', price: '$15.00', imageUrl: '/placeholder-image.jpg' },
  { name: 'Font Lima', slug: 'font-lima', description: 'Deskripsi singkat font', price: '$18.00', imageUrl: '/placeholder-image.jpg' },
  { name: 'Font Enam', slug: 'font-enam', description: 'Deskripsi singkat font', price: '$18.00', imageUrl: '/placeholder-image.jpg' },
  { name: 'Font Tujuh', slug: 'font-tujuh', description: 'Deskripsi singkat font', price: '$18.00', imageUrl: '/placeholder-image.jpg' },
  { name: 'Font Delapan', slug: 'font-delapan', description: 'Deskripsi singkat font', price: '$18.00', imageUrl: '/placeholder-image.jpg' },
  { name: 'Font Sembilan', slug: 'font-sembilan', description: 'Deskripsi singkat font', price: '$20.00', imageUrl: '/placeholder-image.jpg' },
  { name: 'Font Sepuluh', slug: 'font-sepuluh', description: 'Deskripsi singkat font', price: '$20.00', imageUrl: '/placeholder-image.jpg' },
  { name: 'Font Sebelas', slug: 'font-sebelas', description: 'Deskripsi singkat font', price: '$20.00', imageUrl: '/placeholder-image.jpg' },
  { name: 'Font Dua Belas', slug: 'font-dua-belas', description: 'Deskripsi singkat font', price: '$20.00', imageUrl: '/placeholder-image.jpg' },
  { name: 'Font Tiga Belas', slug: 'font-tiga-belas', description: 'Deskripsi singkat font', price: '$15.00', imageUrl: '/placeholder-image.jpg' },
  { name: 'Font Empat Belas', slug: 'font-empat-belas', description: 'Deskripsi singkat font', price: '$15.00', imageUrl: '/placeholder-image.jpg' },
  { name: 'Font Lima Belas', slug: 'font-lima-belas', description: 'Deskripsi singkat font', price: '$15.00', imageUrl: '/placeholder-image.jpg' },
  { name: 'Font Enam Belas', slug: 'font-enam-belas', description: 'Deskripsi singkat font', price: '$15.00', imageUrl: '/placeholder-image.jpg' },
  { name: 'Font Tujuh Belas', slug: 'font-tujuh-belas', description: 'Deskripsi singkat font', price: '$22.00', imageUrl: '/placeholder-image.jpg' },
  { name: 'Font Delapan Belas', slug: 'font-delapan-belas', description: 'Deskripsi singkat font', price: '$22.00', imageUrl: '/placeholder-image.jpg' },
  { name: 'Font Sembilan Belas', slug: 'font-sembilan-belas', description: 'Deskripsi singkat font', price: '$22.00', imageUrl: '/placeholder-image.jpg' },
  { name: 'Font Dua Puluh', slug: 'font-dua-puluh', description: 'Deskripsi singkat font', price: '$22.00', imageUrl: '/placeholder-image.jpg' },
  { name: 'Font Dua Puluh Satu', slug: 'font-dua-puluh-satu', description: 'Deskripsi singkat font', price: '$19.00', imageUrl: '/placeholder-image.jpg' },
  { name: 'Font Dua Puluh Dua', slug: 'font-dua-puluh-dua', description: 'Deskripsi singkat font', price: '$19.00', imageUrl: '/placeholder-image.jpg' },
  { name: 'Font Dua Puluh Tiga', slug: 'font-dua-puluh-tiga', description: 'Deskripsi singkat font', price: '$19.00', imageUrl: '/placeholder-image.jpg' },
  { name: 'Font Dua Puluh Empat', slug: 'font-dua-puluh-empat', description: 'Deskripsi singkat font', price: '$19.00', imageUrl: '/placeholder-image.jpg' },
  { name: 'Font Dua Puluh Lima', slug: 'font-dua-puluh-lima', description: 'Deskripsi singkat font', price: '$16.00', imageUrl: '/placeholder-image.jpg' },
  { name: 'Font Dua Puluh Enam', slug: 'font-dua-puluh-enam', description: 'Deskripsi singkat font', price: '$16.00', imageUrl: '/placeholder-image.jpg' },
  { name: 'Font Dua Puluh Tujuh', slug: 'font-dua-puluh-tujuh', description: 'Deskripsi singkat font', price: '$16.00', imageUrl: '/placeholder-image.jpg' },
  { name: 'Font Dua Puluh Delapan', slug: 'font-dua-puluh-delapan', description: 'Deskripsi singkat font', price: '$16.00', imageUrl: '/placeholder-image.jpg' },
  { name: 'Font Dua Puluh Sembilan', slug: 'font-dua-puluh-sembilan', description: 'Deskripsi singkat font', price: '$25.00', imageUrl: '/placeholder-image.jpg' },
  { name: 'Font Tiga Puluh', slug: 'font-tiga-puluh', description: 'Deskripsi singkat font', price: '$25.00', imageUrl: '/placeholder-image.jpg' },
  { name: 'Font Tiga Puluh Satu', slug: 'font-tiga-puluh-satu', description: 'Deskripsi singkat font', price: '$25.00', imageUrl: '/placeholder-image.jpg' },
  { name: 'Font Tiga Puluh Dua', slug: 'font-tiga-puluh-dua', description: 'Deskripsi singkat font', price: '$25.00', imageUrl: '/placeholder-image.jpg' },
];

const partnerName = "Brand Partner Name";
const categories = ["Script", "Signature", "Handwritten", "Display"];
const sortOptions = [
  "Sort by: Popularity",
  "Sort by: Newest",
  "Sort by: Price (Low to High)",
  "Sort by: Price (High to Low)",
  "Sort by: Name (A-Z)",
  "Sort by: Name (Z-A)"
];

export default function PartnerDetailPage({ params }) {
  return (
    <div className="bg-[#f9f9f9]">
      <div className="container mx-auto max-w-[1748px] px-6 py-16">
        
        <div className="text-center mb-16">
          <h1 className="text-[48px] font-medium text-[#3F3F3F]">{partnerName}</h1>
          <div className="w-[103px] h-1 bg-[#C8705C] mx-auto my-6"></div>
          <p className="mt-4 text-[18px] font-light text-[#3F3F3F] max-w-lg mx-auto">
            Subheadline brand partner
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
              {sortOptions.map(option => (
                <option key={option}>{option}</option>
              ))}
            </select>
            <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <DropdownIcon className="w-4 h-4 text-[#C8705C]" />
            </span>
          </div>
        </div>

        {/* Garis Pemisah */}
        <div className="w-full h-px bg-[#9c9c9c] mb-16"></div>

        {/* Grid Font */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 place-items-center">
          {partnerFonts.map((font) => (
            <ProductCard 
              key={font.name}
              fontName={font.name}
              description={font.description}
              price={font.price}
              imageUrl={font.imageUrl}
              slug={font.slug}
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
