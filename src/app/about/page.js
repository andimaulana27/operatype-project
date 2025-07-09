// src/app/about/page.js
import Image from 'next/image';
import Button from '@/components/Button';

export default function AboutPage() {
  return (
    <div className="bg-[#f9f9f9]">
      <div className="container mx-auto max-w-[1748px] px-6">
        
        {/* SECTION 1: HERO - The Story Behind Every Stroke */}
        <section className="py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-10 items-center">
            {/* Kolom Kiri: Gambar dengan Pembungkus DIV */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-[787px] h-[499px] rounded-2xl overflow-hidden shadow-sm bg-gray-200">
                <Image
                  src="/about-hero.png" // GANTI DENGAN PATH GAMBAR ANDA
                  alt="Workspace with notebook and pen"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Kolom Kanan: Teks */}
            <div className="flex flex-col justify-center">
              <h1 className="text-[72px] font-medium text-[#3F3F3F] leading-tight">
                The Story Behind Every Stroke
              </h1>
              <div className="w-[103px] h-1 bg-[#C8705C] my-6"></div>
              <p className="text-[18px] font-light text-[#3F3F3F] leading-relaxed mb-8">
                We are Operatype, a collective of designers dedicated to crafting high-quality fonts.
              </p>
              <div>
                <h2 className="text-[28px] font-medium text-[#3F3F3F] mb-3">Our Value</h2>
                <div className="w-[103px] h-1 bg-[#C8705C] mb-6"></div>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
                  <p className="text-[18px] font-light text-[#3F3F3F]">Passion for Precision</p>
                  <div className="h-[45.5px] w-[2px] bg-[#C8705C]"></div>
                  <p className="text-[18px] font-light text-[#3F3F3F]">Artistry in Every Font</p>
                  <div className="h-[45.5px] w-[2px] bg-[#C8705C]"></div>
                  <p className="text-[18px] font-light text-[#3F3F3F]">Empowering Creators</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: OUR STORY - TANPA BACKGROUND PUTIH */}
        <section className="mb-16 sm:mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-10 items-center">
            {/* Kolom Kiri: Teks */}
            <div className="lg:order-1">
              <h2 className="text-[28px] font-medium text-[#3F3F3F] leading-snug">
                Our Story
              </h2>
              <div className="w-[103px] h-1 bg-[#C8705C] my-6"></div>
              <div className="space-y-5 text-[18px] font-light text-[#3F3F3F] leading-relaxed">
                <p>
                  We’ve all been there: you find a high quality font, you purchase it for a project, and then the frustration begins. Awkward letter connections, a limited character set, no multilingual support. A stylish typography tool becomes a technical headache. We knew there had to be a better way.
                </p>
                <p>
                  Operatype.co was founded on a simple, pragmatic mission: to create stunningly stylish typography that just works, flawlessly. We combine our love for artistic calligraphy with a rigorous focus on technical excellence. This means every font is fully-featured, extensively tested, and designed to be intuitive for any creator.
                </p>
              </div>
              <div className="mt-8">
                <Button 
                  href="/fonts" 
                  variant="primary" 
                  className="w-[243px] h-[50px] text-[18px] font-medium flex items-center justify-center"
                >
                  Explore The Collection
                </Button>
              </div>
            </div>

            {/* Kolom Kanan: Gambar dengan Pembungkus DIV */}
            <div className="flex justify-center lg:justify-end lg:order-2">
              <div className="relative w-[787px] h-[499px] rounded-2xl overflow-hidden shadow-sm bg-gray-200">
                <Image
                  src="/about-story.png" // GANTI DENGAN PATH GAMBAR ANDA
                  alt="Hand writing 'operatype.co'"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
      </div>
    </div>
  );
}