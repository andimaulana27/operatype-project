// src/app/(main)/page.js
import { supabase } from '@/lib/supabaseClient'; 
import Button from "@/components/Button";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import StyleCard from "@/components/StyleCard";
import ChecklistIcon from "@/components/icons/ChecklistIcon";
import HeroCarousel from '@/components/HeroCarousel'; // Impor komponen baru kita

// Fungsi untuk mengambil data font dari Supabase
async function getFonts(limit = 8) {
  const { data, error } = await supabase
    .from('fonts')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(limit);

  if (error) {
    console.error('Error fetching fonts:', error);
    return [];
  }
  return data;
}

// Fungsi untuk mengambil font dengan tag 'Bestseller'
async function getCuratedFonts() {
    const { data, error } = await supabase
    .from('fonts')
    .select('*')
    .eq('tag', 'Bestseller') 
    .limit(4);

  if (error) {
    console.error('Error fetching curated fonts:', error);
    return [];
  }
  return data;
}

export default async function Home() {
  const featuredFonts = await getFonts(8);
  const curatedFonts = await getCuratedFonts();
  
  const styleCategories = [
    { title: 'Elegant & Wedding', href: '/fonts?category=elegant', imageUrl: '/styles/style-elegant.jpg' },
    { title: 'Casual & Handwritten', href: '/fonts?category=casual', imageUrl: '/styles/style-casual.jpg' },
    { title: 'Modern & Bold', href: '/fonts?category=modern', imageUrl: '/styles/style-modern.jpg' },
  ];

  const instagramPosts = [
    { src: '/instagram/post-1.jpg', alt: 'Instagram Post 1' },
    { src: '/instagram/post-2.jpg', alt: 'Instagram Post 2' },
    { src: '/instagram/post-3.jpg', alt: 'Instagram Post 3' },
    { src: '/instagram/post-4.jpg', alt: 'Instagram Post 4' },
    { src: '/instagram/post-5.jpg', alt: 'Instagram Post 5' },
  ];

  return (
    <main className="bg-[#f9f9f9]">
      {/* HERO SECTION - TEKS */}
      <section className="container mx-auto max-w-[1748px] px-6 text-center pt-16 pb-12">
        <div className="flex flex-col items-center">
          <p className="font-light text-[16px] tracking-widest text-[#3F3F3F] uppercase">
            THE ART OF SCRIPT FONTS
          </p>
          <h1 className="mt-4 font-medium text-[74px] text-[#3F3F3F] max-w-4xl">
            Elevate Your Designs
          </h1>
          <p className="mt-6 max-w-2xl font-light text-[18px] text-gray-500">
            A curated library of high-quality, versatile script fonts complete with full character sets and commercial licenses, ready for any project.
          </p>
        </div>
        <div className="mt-10 flex justify-center items-center gap-x-4">
          <Button href="/fonts" variant="primary" className="w-[207px] h-[54px] text-[18px] flex items-center justify-center">Browse All Fonts</Button>
          <Button href="/about" variant="secondary" className="w-[207px] h-[54px] text-[18px] flex items-center justify-center">Our Story</Button>
        </div>
      </section>

      {/* HERO SECTION - CAROUSEL (Sekarang menggunakan komponen terpisah) */}
      <HeroCarousel />

      {/* FEATURED COLLECTION SECTION */}
      <section className="w-full bg-[#F2F2F2] py-20">
        <div className="container mx-auto max-w-[1748px] px-6">
          <div className="text-center mb-16">
            <h2 className="text-[38px] font-medium text-[#3F3F3F]">Our Featured Collection</h2>
            <div className="w-[103px] h-1 bg-[#C8705C] mx-auto my-6"></div>
            <p className="text-[18px] font-light text-gray-500 max-w-2xl mx-auto">
              The newest and most exciting additions to our font library.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 place-items-center">
            {featuredFonts.map((font) => (
              <ProductCard 
                key={font.id}
                fontName={font.name}
                description={font.desc}
                price={font.price}
                imageUrl={font.imageUrl}
                slug={font.slug}
              />
            ))}
          </div>
          <div className="mt-16 flex justify-center">
            <Button href="/fonts" variant="primary" className="w-[207px] h-[54px] text-[18px] flex items-center justify-center">
              Browse All Fonts
            </Button>
          </div>
        </div>
      </section>

      {/* CURATED SELECTIONS SECTION */}
      <section className="w-full bg-[#f9f9f9] py-20">
        <div className="container mx-auto max-w-[1748px] px-6">
          <div className="text-center mb-16">
            <h2 className="text-[38px] font-medium text-[#3F3F3F]">Curated Selections</h2>
            <div className="w-[103px] h-1 bg-[#C8705C] mx-auto my-6"></div>
            <p className="text-[18px] font-light text-gray-500 max-w-2xl mx-auto">
              Our community&apos;s most loved bestsellers.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 place-items-center">
            {curatedFonts.map((font) => (
              <ProductCard 
                key={font.id}
                fontName={font.name}
                description={font.desc}
                price={font.price}
                imageUrl={font.imageUrl}
                slug={font.slug}
                tagText={font.tag}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* FIND YOUR PERFECT STYLE SECTION */}
      <section className="w-full bg-[#F2F2F2] py-20">
        <div className="container mx-auto max-w-[1748px] px-6">
          <div className="text-center mb-16">
            <h2 className="text-[38px] font-medium text-[#3F3F3F]">Find Your Perfect Style</h2>
            <div className="w-[103px] h-1 bg-[#C8705C] mx-auto my-6"></div>
            <p className="text-[18px] font-light text-gray-500 max-w-2xl mx-auto">
              From elegant fonts to modern sans-serifs, browse our collection by the mood you want to create.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {styleCategories.map((category) => (
              <StyleCard 
                key={category.title}
                title={category.title}
                imageUrl={category.imageUrl}
                href={category.href}
              />
            ))}
          </div>
        </div>
      </section>

      {/* LICENSING WITH CONFIDENCE SECTION */}
      <section className="w-full bg-[#f9f9f9] py-24">
        <div className="container mx-auto max-w-[1748px] px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col">
              <h2 className="text-4xl font-medium text-[#3F3F3F]">Licensing with Confidence</h2>
              <div className="w-[103px] h-1 bg-[#C8705C] my-6"></div>
              <p className="text-[18px] font-light text-gray-500">
                The Right Rights for Your Vision.
              </p>
              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-x-4">
                  <ChecklistIcon className="w-8 h-8 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-[#3F3F3F] text-lg">For Individuals & Brands</h4>
                    <p className="text-gray-500 font-light mt-1">
                      Perfect for your portfolio, client work, social media, and commercial products.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-x-4">
                  <ChecklistIcon className="w-8 h-8 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-[#3F3F3F] text-lg">For Enterprise & Special Projects</h4>
                    <p className="text-gray-500 font-light mt-1">
                      For use in apps, games, or broadcast television, we provide tailored solutions.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 flex gap-x-2">
                <Button href="/license" variant="primary" className="w-[250px] h-[48px] text-[16px] flex items-center justify-center">
                  Explore All Licenses
                </Button>
                <Button href="/contact" variant="secondary" className="w-[270px] h-[48px] text-[16px] flex items-center justify-center">
                  Request a Custom License
                </Button>
              </div>

            </div>
            <div>
              <Image 
                src="/license-composite.jpg"
                alt="License mockup collage" 
                width={809} 
                height={535} 
                className="rounded-2xl object-cover" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* INSTAGRAM SECTION */}
      <section className="w-full bg-[#F2F2F2] py-20">
        <div className="container mx-auto max-w-[1748px] px-6">
          <div className="text-center mb-16">
            <h2 className="text-[38px] font-medium text-[#3F3F3F]">Join Our Creative Community</h2>
            <div className="w-[103px] h-1 bg-[#C8705C] mx-auto my-6"></div>
            <p className="text-[18px] font-light text-gray-500 max-w-2xl mx-auto">
              Follow us @operatype.co on Instagram for daily design inspiration, new font previews, and behind-the-scenes.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {instagramPosts.map((post) => (
              <a href="https://www.instagram.com/operatype.co/" target="_blank" rel="noopener noreferrer" key={post.src} className="block overflow-hidden rounded-2xl group">
                <Image 
                  src={post.src} 
                  alt={post.alt}
                  width={300}
                  height={300}
                  className="w-full aspect-square object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
              </a>
            ))}
          </div>
          <div className="mt-16 flex justify-center">
            <Button href="https://www.instagram.com/operatype.co/" variant="primary" className="w-[233px] h-[54px] text-[18px] font-medium flex items-center justify-center">
              Follow on Instagram
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}