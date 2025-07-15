// src/app/(main)/partners/[slug]/page.js
import { supabase } from '@/lib/supabaseClient';
import { notFound } from 'next/navigation';

import ProductCard from "@/components/ProductCard";
import SearchIcon from "@/components/icons/SearchIcon";
import DropdownIcon from "@/components/icons/DropdownIcon";
import Pagination from "@/components/Pagination";

// Fungsi untuk mengambil data partner DAN font-font yang terhubung
async function getPartnerData(slug) {
  const { data, error } = await supabase
    .from('partners')
    .select(`
      *,
      fonts ( * )
    `)
    .eq('slug', slug)
    .single();

  if (error) {
    console.error("Error fetching partner data:", error);
    notFound(); // Tampilkan halaman 404 jika partner tidak ditemukan
  }

  return data;
}

export default async function PartnerDetailPage({ params }) {
  const partner = await getPartnerData(params.slug);

  const categories = ["Script", "Signature", "Handwritten", "Display"];
  const sortOptions = [
    "Sort by: Popularity",
    "Sort by: Newest",
    "Sort by: Price (Low to High)",
    "Sort by: Price (High to Low)",
    "Sort by: Name (A-Z)",
    "Sort by: Name (Z-A)"
  ];

  return (
    <div className="bg-[#f9f9f9]">
      <div className="container mx-auto max-w-[1748px] px-6 py-16">
        
        <div className="text-center mb-16">
          {/* Tampilkan nama partner dari database */}
          <h1 className="text-[48px] font-medium text-[#3F3F3F]">{partner.name}</h1>
          <div className="w-[103px] h-1 bg-[#C8705C] mx-auto my-6"></div>
          {/* Tampilkan deskripsi partner dari database */}
          <p className="mt-4 text-[18px] font-light text-[#3F3F3F] max-w-lg mx-auto">
            {partner.description}
          </p>
        </div>

        {/* Panel Filter & Sortir */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
          <div className="w-full md:w-auto flex flex-col sm:flex-row items-center gap-4">
            
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

        <div className="w-full h-px bg-[#9c9c9c] mb-16"></div>

        {/* Grid Font (menampilkan font dari partner) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 place-items-center">
          {partner.fonts && partner.fonts.length > 0 ? (
            partner.fonts.map((font) => (
              <ProductCard 
                key={font.id}
                fontName={font.name}
                description={font.desc}
                price={font.price}
                imageUrl={font.imageUrl}
                slug={font.slug}
              />
            ))
          ) : (
            <p className="col-span-4 text-center text-gray-500">No fonts found for this partner.</p>
          )}
        </div>

        <div className="mt-20 flex justify-center">
          <Pagination />
        </div>

      </div>
    </div>
  );
}