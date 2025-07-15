// src/app/fonts/page.js
import { supabase } from '@/lib/supabaseClient'; // Impor konektor supabase kita

import ProductCard from "@/components/ProductCard";
import SearchIcon from "@/components/icons/SearchIcon";
import DropdownIcon from "@/components/icons/DropdownIcon";
import Pagination from "@/components/Pagination";

// Fungsi untuk mengambil data dari Supabase
async function getFonts() {
  const { data, error } = await supabase
    .from('fonts') // dari tabel 'fonts'
    .select('*')   // ambil semua kolom
    .order('created_at', { ascending: false }); // urutkan berdasarkan terbaru

  if (error) {
    console.error('Error fetching fonts:', error);
    return [];
  }

  return data;
}

// Ubah komponen menjadi 'async' untuk bisa menunggu data dari database
export default async function AllFontsPage() {
  const allFonts = await getFonts(); // Panggil fungsi untuk mengambil data
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
              key={font.id} // Gunakan id dari database sebagai key
              fontName={font.name}
              description={font.desc}
              price={font.price}
              imageUrl={font.imageUrl}
              tagText={font.tag}
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