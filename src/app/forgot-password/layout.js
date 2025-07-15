// src/app/forgot-password/layout.js
import Link from 'next/link';
import SimpleHeader from "@/components/SimpleHeader";
import Footer from '@/components/Footer';

export default function ForgotPasswordLayout({ children }) {
  return (
    <>
      <SimpleHeader />
      <main>{children}</main>
      <footer className="bg-[#f9f9f9]">
        <div className="container mx-auto max-w-[1748px] px-6 py-8 text-center border-t">
          <div className="space-x-6 text-sm text-gray-500">
            <Link href="/terms" className="hover:text-[#C8705C]">Terms of Service</Link>
            <Link href="/privacy" className="hover:text-[#C8705C]">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </>
  );
}