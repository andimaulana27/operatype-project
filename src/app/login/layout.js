// src/app/login/layout.js
import Link from 'next/link';
import Image from 'next/image';

export default function AuthLayout({ children }) {
  return (
    <div className="bg-[#f9f9f9] min-h-screen flex flex-col">
      <header className="bg-[#f9f9f9] sticky top-0 z-50">
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
            <div className="text-sm text-gray-500">
              <span>Log in to Operatype.co</span>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center">
        {children}
      </main>

      {/* PERBAIKAN: Footer disamakan dengan halaman Cart */}
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