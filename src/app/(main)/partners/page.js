// src/app/partners/page.js
import PartnerCard from '@/components/PartnerCard';

// Data contoh untuk partner, nanti bisa diambil dari database
const partners = [
  { 
    name: 'Brand Partner Name', 
    slug: 'brand-partner-name', 
    description: 'A brief description about this partner foundry and the style of fonts they create.',
    imageUrl: '/partner-logos/partner-1.png' // Pastikan path ini benar dan filenya ada
  },
  { 
    name: 'Foundry B', 
    slug: 'foundry-b', 
    description: 'Specializing in modern and minimalist sans-serif fonts for branding projects.',
    imageUrl: '/partner-logos/partner-2.png' 
  },
  { 
    name: 'Collaborator C', 
    slug: 'collaborator-c', 
    description: 'Handcrafted script and signature fonts with a personal, elegant touch.',
    imageUrl: '/partner-logos/partner-3.png'
  },
  { 
    name: 'Designer D', 
    slug: 'designer-d', 
    description: 'Experimental and unique display fonts for headlines and posters.',
    imageUrl: '/partner-logos/partner-3.png'
  },
    { 
    name: 'Studio E', 
    slug: 'studio-e', 
    description: 'A brief description about this partner foundry and the style of fonts they create.',
    imageUrl: '/partner-logos/partner-1.png'
  },
  { 
    name: 'Artisan Fonts F', 
    slug: 'artisan-fonts-f', 
    description: 'Specializing in modern and minimalist sans-serif fonts for branding projects.',
    imageUrl: '/partner-logos/partner-2.png' 
  },
];

export default function PartnersPage() {
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

        {/* Grid untuk menampilkan semua PartnerCard */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map(partner => (
            <PartnerCard 
              key={partner.slug}
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
