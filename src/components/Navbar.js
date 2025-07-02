// src/components/Navbar.js
"use client";

import Link from 'next/link';
import Image from 'next/image';
import CartIcon from './icons/CartIcon';
import UserIcon from './icons/UserIcon';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'All Fonts', href: '/fonts' },
    { name: 'Partners', href: '/partners' },
    { name: 'About', href: '/about' },
    { name: 'License', href: '/license' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-[#f9f9f9] sticky top-0 z-50">
      <div className="container mx-auto max-w-[1748px] border-b border-[#3F3F3F]">
        <div className="flex justify-between items-center h-20 px-15">
          
          <Link href="/" aria-label="Back to Homepage">
            <Image
              src="/logo.svg"
              alt="Operatype.co Logo"
              width={143}
              height={60}
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className={`
                    group relative py-2 transition-colors duration-[450ms] ease-in text-[16px]
                    ${isActive 
                      ? 'font-medium text-[#C8705C]' 
                      : 'font-light text-[#9C9C9C] hover:text-[#3F3F3F] hover:font-medium'
                    }
                  `}
                >
                  {link.name}
                  <span 
                    className={`
                      absolute left-0 -bottom-1 block h-0.5 bg-[#C8705C] transition-all duration-[450ms] ease-in
                      ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}
                    `} // <-- KEMBALI KE VERSI INI
                  ></span>
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center space-x-5">
            <Link href="/cart" aria-label="Shopping Cart" className="text-[#3F3F3F] hover:text-[#C8705C] transition-colors">
              <CartIcon className="w-[26px] h-[26px]" />
            </Link>
            
            <div className="h-6 w-px bg-[#C8705C]"></div>

            <Link href="/login" aria-label="Login or a personal account" className="text-[#3F3F3F] hover:text-[#C8705C] transition-colors">
              <UserIcon className="w-[26px] h-[26px]" />
            </Link>
          </div>

          <div className="md:hidden">
             {/* Placeholder untuk Hamburger Menu */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;