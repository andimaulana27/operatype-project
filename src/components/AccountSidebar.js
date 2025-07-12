// src/components/AccountSidebar.js
import Link from 'next/link';
// 1. Import ikon yang dibutuhkan dari heroicons
import {
  PencilSquareIcon,
  KeyIcon,
  ArrowLeftOnRectangleIcon
} from '@heroicons/react/24/outline';

// Terima prop onLogout
const AccountSidebar = ({ user, onLogout }) => {
  // 2. Tambahkan properti icon ke setiap item menu
  const menuItems = [
    { name: 'Edit Profile', href: '/account/edit-profile', icon: PencilSquareIcon },
    { name: 'Change Password', href: '/account/change-password', icon: KeyIcon },
  ];

  return (
    <div className="w-full">
      <h2 className="text-2xl font-medium text-[#3F3F3F]">Account Details</h2>
      <div className="mt-6">
        <p className="text-lg font-medium text-[#3F3F3F]">{user?.name}</p>
        <p className="text-sm font-light text-gray-500">{user?.email}</p>
      </div>
      <div className="mt-8 space-y-4">
        {menuItems.map((item) => {
          const Icon = item.icon; // Ambil komponen ikon
          return (
            <div key={item.name} className="border-b border-gray-200 pb-4">
              <Link href={item.href} className="flex items-center text-base font-light text-[#3F3F3F] hover:text-[#C8705C] group">
                <Icon className="w-5 h-5 mr-3 text-gray-400 group-hover:text-[#C8705C]" />
                <span>{item.name}</span>
              </Link>
            </div>
          );
        })}
        {/* Tombol Logout dibuat terpisah dengan ikonnya */}
        <div className="border-b border-gray-200 pb-4">
          <button 
            onClick={onLogout} 
            className="flex items-center text-base font-light text-red-500 hover:underline group"
          >
            <ArrowLeftOnRectangleIcon className="w-5 h-5 mr-3 text-red-400 group-hover:text-red-500" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountSidebar;
