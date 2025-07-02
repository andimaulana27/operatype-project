// src/components/Navbar.js

import Link from 'next/link';
import Image from 'next/image';
import Button from './Button';
import CartIcon from '@/../public/icons/cart.svg';
import UserIcon from '@/../public/icons/user.svg';

const Navbar = () => {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'All Fonts', href: '/fonts' },
    { name: 'Partners', href: '/partners' },
    { name: 'About', href: '/about' },
    { name: 'License', href: '/license' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          
          {/* Kolom Kiri: Logo */}
          <Link href="/">
            <Image 
              src="/logo.svg" 
              alt="Operatype.co Logo" 
              width={150} 
              height={40} 
            />
          </Link>

          {/* Kolom Tengah: Menu Navigasi dengan Animasi */}
          <nav className="hidden md:flex space-x-6"> {/* Spasi sedikit dikurangi */}
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="group relative text-gray-600 hover:text-[#C8705C] transition-colors duration-300">
                {link.name}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#C8705C] group-hover:w-full transition-all duration-350 ease-in"></span>
              </Link>
            ))}
          </nav>

          {/* Kolom Kanan: Tombol & Ikon */}
          <div className="flex items-center space-x-4">
            <Button href="/login" variant="secondary">Login</Button>
            <Button href="/register" variant="primary">Register</Button>
            <Link href="/cart" className="text-gray-600 hover:text-[#C8705C]">
              <CartIcon className="w-6 h-6" />
            </Link>
            <Link href="/account" className="text-gray-600 hover:text-[#C8705C]">
              <UserIcon className="w-6 h-6" />
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;