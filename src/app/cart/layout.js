// src/app/cart/layout.js
import Link from 'next/link';
import Image from 'next/image';
import { LockClosedIcon } from '@heroicons/react/24/outline';

export default function CheckoutLayout({ children }) {
  return (
    // PERBAIKAN 1: Background utama diatur di sini
    <div className="bg-[#f9f9f9] min-h-screen flex flex-col">
      {/* PERBAIKAN 2: Struktur header disamakan dengan Navbar.js */}
      <header className="bg-[#f9f9f9]">
        {/* Kontainer untuk membatasi lebar dan memberi garis bawah */}
        <div className="container mx-auto max-w-[1748px] border-b border-[#3F3F3F]">
          <div className="flex justify-between items-center h-20 px-6">
            <Link href="/" aria-label="Back to Homepage">
              <Image
                src="/logo.svg"
                alt="Operatype.co Logo"
                width={143}
                height={60}
                priority
              />
            </Link>
            <div className="flex items-center gap-2 text-sm text-gray-500">
                <LockClosedIcon className="w-4 h-4" />
                <span>Secure Checkout</span>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      {/* Footer juga disamakan background-nya */}
      <footer className="bg-[#f9f9f9]">
        <div className="container mx-auto max-w-[1748px] px-6 py-8 text-center border-t">
          <div className="space-x-6 text-sm text-gray-500">
            <Link href="/terms" className="hover:text-[#C8705C]">Terms of Service</Link>
            <Link href="/privacy" className="hover:text-[#C8705C]">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}