// src/components/SimpleHeader.js
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { LockClosedIcon } from "@heroicons/react/24/solid";

const SimpleHeader = () => {
  const pathname = usePathname();

  const isCartPage = pathname === "/cart";
  const isLoginPage = pathname === "/login";

  return (
    <header className="bg-[#f9f9f9] sticky top-0 z-50">
      <div className="container mx-auto max-w-[1748px] border-b border-[#3F3F3F]">
        <div className="flex justify-between items-center h-20 px-15">
          {/* Logo kiri */}
          <Link href="/" aria-label="Back to Homepage">
            <Image
              src="/logo.svg"
              alt="Operatype.co Logo"
              width={143}
              height={60}
              priority
            />
          </Link>

          {/* Konten kanan */}
          <div className="flex items-center space-x-2">
            {isCartPage && (
              <>
                <LockClosedIcon className="w-5 h-5 text-[#C8705C]" />
                <span className="text-[#3F3F3F] text-sm font-medium">
                  Secure Checkout
                </span>
              </>
            )}
            {isLoginPage && (
              <span className="text-[#3F3F3F] text-sm font-medium">
                Login to Operatype.co
              </span>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default SimpleHeader;
