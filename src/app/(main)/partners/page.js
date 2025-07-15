// src/app/(main)/partners/page.js
import { supabase } from '@/lib/supabaseClient'; // Impor konektor Supabase
import PartnerCard from '@/components/PartnerCard';

// Fungsi untuk mengambil data partners dari Supabase
async function getPartners() {
  const { data, error } = await supabase
    .from('partners')
    .select('*')
    .order('name', { ascending: true });

  if (error) {
    console.error('Error fetching partners:', error);
    return [];
  }
  return data;
}

export default async function PartnersPage() {
  const partners = await getPartners(); // Ambil data dari database

  return (
    <div className="bg-[#f9f9f9]">
      <div className="container mx-auto max-w-[1748px] px-6 py-16">
        
        <div className="text-center mb-16">
          <h1 className="text-[48px] font-medium text-[#3F3F3F]">Our Partners</h1>
          <div className="w-[103px] h-1 bg-[#C8705C] mx-auto my-6"></div>
          <p className="mt-4 text-[18px] font-light text-[#3F3F3F] max-w-lg mx-auto">
            Meet the talented designers and foundries we are proud to collaborate with.
          </p>
        </div>

        {/* Grid untuk menampilkan semua PartnerCard secara dinamis */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map(partner => (
            <PartnerCard 
              key={partner.id} // Gunakan id dari database
              name={partner.name}
              description={partner.description}
              imageUrl={partner.imageUrl}
              slug={partner.slug}
            />
          ))}
        </div>

      </div>
    </div>
  );
}