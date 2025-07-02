// src/components/Footer.js

import Link from 'next/link';
import Image from 'next/image';
import InstagramIcon from './icons/InstagramIcon';
import BehanceIcon from './icons/BehanceIcon';
import DribbbleIcon from './icons/DribbbleIcon';
import PinterestIcon from './icons/PinterestIcon';

const Footer = () => {
  return (
    <footer className="bg-[#f9f9f9] mt-24 font-light text-[18px] text-[#3F3F3F]">
      <div className="container mx-auto px-6 py-12 max-w-[1748px]">
        {/* PERUBAHAN UTAMA: dari 'grid' menjadi 'flex' untuk distribusi yang rata */}
        <div className="flex flex-col md:flex-row justify-between gap-x-8 gap-y-12">
          
          {/* Kolom 1: Logo, Deskripsi, & Pembayaran */}
          <div className="flex flex-col justify-between md:w-1/4">
            <div>
              <Link href="/" aria-label="Back to Homepage">
                <Image 
                  src="/logo.svg"
                  alt="Operatype.co Logo"
                  width={143}
                  height={60}
                />
              </Link>
              <p className="mt-12">
                Crafting high quality fonts with passion and precision.
              </p>
            </div>
            <div className="pt-4 mt-8">
              <h5 className="font-medium mb-3 text-[18px] text-[#C8705C]">Secure Payments</h5>
              <Image
                src="/icons/paypal.svg"
                alt="PayPal Accepted"
                width={120}
                height={32}
              />
            </div>
          </div>

          {/* Kolom 2: Sitemap */}
          <div className="w-full sm:w-auto">
            <h4 className="font-medium text-[#C8705C] text-[22px] mb-12">Sitemap</h4>
            <div className="flex flex-col space-y-4">
              <Link href="/fonts" className="hover:font-normal hover:text-[#C8705C] transition-all">All Fonts</Link>
              <Link href="/about" className="block hover:font-normal hover:text-[#C8705C] transition-all">Our Story</Link>
              <Link href="/license" className="block hover:font-normal hover:text-[#C8705C] transition-all">License</Link>
              <Link href="/contact" className="block hover:font-normal hover:text-[#C8705C] transition-all">Contact</Link>
            </div>
          </div>

          {/* Kolom 3: Connect */}
          <div className="w-full sm:w-auto">
            <h4 className="font-medium text-[#C8705C] text-[22px] mb-12">Connect</h4>
            <div className="flex flex-col space-y-3">
              <a href="#" className="inline-flex items-center group hover:text-[#C8705C]">
                <InstagramIcon className="w-5 h-5 text-gray-500 transition-colors group-hover:text-[#C8705C]" />
                <span className="ml-3 transition-all group-hover:font-normal">Instagram</span>
              </a>
              <a href="#" className="inline-flex items-center group hover:text-[#C8705C]">
                <BehanceIcon className="w-5 h-5 text-gray-500 transition-colors group-hover:text-[#C8705C]" />
                <span className="ml-3 transition-all group-hover:font-normal">Behance</span>
              </a>
              <a href="#" className="inline-flex items-center group hover:text-[#C8705C]">
                <DribbbleIcon className="w-5 h-5 text-gray-500 transition-colors group-hover:text-[#C8705C]" />
                <span className="ml-3 transition-all group-hover:font-normal">Dribbble</span>
              </a>
              <a href="#" className="inline-flex items-center group hover:text-[#C8705C]">
                <PinterestIcon className="w-5 h-5 text-gray-500 transition-colors group-hover:text-[#C8705C]" />
                <span className="ml-3 transition-all group-hover:font-normal">Pinterest</span>
              </a>
            </div>
          </div>

          {/* Kolom 4: Newsletter */}
          <div className="w-full sm:w-auto md:w-1/4">
            <h4 className="font-medium text-[#C8705C] text-[22px] mb-12">Join Our Newsletter</h4>
            <p>Get updates on new fonts, special offers, and freebies.</p>
            <div className="flex flex-col items-start mt-12 space-y-4">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="bg-transparent border-b border-gray-400 py-2 w-full focus:border-[#C8705C] outline-none transition-colors font-light text-[14px] placeholder:text-[#9C9C9C]" 
              />
              <button className="bg-[#C8705C] text-white py-2 px-6 rounded-full hover:bg-[#FF7C5E] transition-colors duration-300 text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        {/* Baris Copyright & Legal */}
        <div className="mt-12 pt-8 border-t border-[#3F3F3F]">
          <div className="flex flex-col sm:flex-row justify-between items-center text-[18px] font-normal text-[#3F3F3F]">
            <p className="order-2 sm:order-1 mt-4 sm:mt-0">© 2025 operatype.co. All Rights Reserved.</p>
            <div className="order-1 sm:order-2 space-x-6">
                <Link href="/terms" className="hover:font-normal hover:text-[#C8705C]">Terms of Service</Link>
                <Link href="/privacy" className="hover:font-normal hover:text-[#C8705C]">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;