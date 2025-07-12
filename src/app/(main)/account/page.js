// src/app/(main)/account/page.js
"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import AccountSidebar from '@/components/AccountSidebar';
import PurchaseHistoryTable from '@/components/PurchaseHistoryTable';

// Hapus data statis purchaseHistory, karena akan dikelola di masa depan
const purchaseHistory = [
    { date: '01/07/2025', product: 'Grande Amstera', license: 'Business License' },
    { date: '01/07/2025', product: 'Royales Horizon', license: 'Desktop License' },
    { date: '01/07/2025', product: 'Artfully Stylish', license: 'Business License' },
    { date: '01/07/2025', product: 'Flower Blossom', license: 'Desktop License' },
    { date: '01/07/2025', product: 'Brookside Pasture', license: 'Corporate License' },
    { date: '01/07/2025', product: 'Santuary Portrait', license: 'Business License' },
    { date: '01/07/2025', product: 'Pullwist', license: 'Desktop License' },
];

export default function MyAccountPage() {
  // 1. Dapatkan data pengguna dan fungsi dari AuthContext
  const { user, isAuthenticated, logout } = useAuth();
  const router = useRouter();

  // 2. Lindungi halaman dari akses tidak sah
  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  // 3. Mencegah "kedipan" konten sebelum redirect
  if (!isAuthenticated) {
    return null; // Atau tampilkan komponen loading
  }

  return (
    // Struktur JSX ini sama persis dengan yang Anda berikan
    <div className="bg-[#f9f9f9]">
      <div className="container mx-auto max-w-[1748px] px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-medium text-[#3F3F3F]">My Account</h1>
          <div className="w-24 h-1 bg-[#C8705C] mx-auto mt-6"></div>
          <p className="mt-4 text-lg font-light text-gray-500">
            {/* 4. Gunakan data pengguna dinamis */}
            Welcome back, {user?.name || 'User'}!
          </p>
          <p className="mt-1 text-base font-light text-gray-500">
            Here you can view your purchase history and re-download your fonts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          <div className="lg:col-span-1 lg:border-r lg:border-gray-200 lg:pr-12">
            {/* 5. Kirim data pengguna dan fungsi logout ke sidebar */}
            <AccountSidebar user={user} onLogout={logout} />
          </div>

          <div className="lg:col-span-3">
            <h2 className="text-2xl font-medium text-[#3F3F3F]">Purchase History</h2>
            
            <div className="mt-6">
              <PurchaseHistoryTable purchases={purchaseHistory} />
            </div>
            
          </div>

        </div>
      </div>
    </div>
  );
}
