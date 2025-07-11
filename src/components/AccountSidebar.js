// src/components/AccountSidebar.js
import Link from 'next/link';

const AccountSidebar = ({ user }) => {
  const menuItems = [
    { name: 'Edit Profile', href: '/account/edit-profile' },
    { name: 'Change Password', href: '/account/change-password' },
    { name: 'Logout', href: '/logout' },
  ];

  return (
    <div className="w-full">
      <h2 className="text-2xl font-medium text-[#3F3F3F]">Account Details</h2>
      <div className="mt-6">
        <p className="text-lg font-medium text-[#3F3F3F]">{user.name}</p>
        <p className="text-sm font-light text-gray-500">{user.email}</p>
      </div>
      <div className="mt-8 space-y-4">
        {menuItems.map((item) => (
          <div key={item.name} className="border-b border-gray-200 pb-4">
            <Link href={item.href} className="text-base font-light text-[#3F3F3F] hover:text-[#C8705C]">
              {item.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccountSidebar;