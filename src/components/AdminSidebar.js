// src/components/AdminSidebar.js
import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '@/context/AuthContext';
import { 
    ChartBarIcon, 
    DocumentTextIcon, 
    UsersIcon, 
    ArrowRightOnRectangleIcon,
    ShoppingCartIcon,
    UserGroupIcon,
    TagIcon, // <-- Impor ikon untuk diskon
} from '@heroicons/react/24/outline';


const AdminSidebar = () => {
    const { logout } = useAuth();

    return (
        <aside className="w-64 bg-white flex flex-col border-r">
            
            <div className="p-6 flex justify-center items-center">
                <Link href="/" aria-label="Back to Homepage">
                    <Image
                      src="/logo.svg"
                      alt="Operatype.co Logo"
                      width={120}
                      height={50}
                    />
                </Link>
            </div>
            
            <div className="w-full h-px bg-gray-200"></div>

            <nav className="flex-1 px-4 py-6 space-y-2">
                <Link href="/dashboard" className="flex items-center px-4 py-2 rounded-md text-gray-700 hover:bg-[#C8705C] hover:text-white group">
                    <ChartBarIcon className="w-5 h-5 mr-3 text-gray-500 group-hover:text-white" />
                    Dashboard
                </Link>
                <Link href="/dashboard/fonts" className="flex items-center px-4 py-2 rounded-md text-gray-700 hover:bg-[#C8705C] hover:text-white group">
                    <DocumentTextIcon className="w-5 h-5 mr-3 text-gray-500 group-hover:text-white" />
                    Manage Fonts
                </Link>
                <Link href="/dashboard/partners" className="flex items-center px-4 py-2 rounded-md text-gray-700 hover:bg-[#C8705C] hover:text-white group">
                    <UsersIcon className="w-5 h-5 mr-3 text-gray-500 group-hover:text-white" />
                    Manage Partners
                </Link>
                {/* --- PERUBAHAN DI SINI --- */}
                <Link href="/dashboard/discounts" className="flex items-center px-4 py-2 rounded-md text-gray-700 hover:bg-[#C8705C] hover:text-white group">
                    <TagIcon className="w-5 h-5 mr-3 text-gray-500 group-hover:text-white" />
                    Manage Discounts
                </Link>

                <div className="border-t border-gray-200 pt-4 mt-4 space-y-2">
                     <Link href="/dashboard/orders" className="flex items-center px-4 py-2 rounded-md text-gray-700 hover:bg-[#C8705C] hover:text-white group">
                        <ShoppingCartIcon className="w-5 h-5 mr-3 text-gray-500 group-hover:text-white" />
                        Manage Orders
                    </Link>
                    <Link href="/dashboard/users" className="flex items-center px-4 py-2 rounded-md text-gray-700 hover:bg-[#C8705C] hover:text-white group">
                        <UserGroupIcon className="w-5 h-5 mr-3 text-gray-500 group-hover:text-white" />
                        Manage Users
                    </Link>
                </div>
            </nav>

            <div className="p-4 border-t border-gray-200">
                <button 
                    onClick={logout}
                    className="w-full text-left flex items-center px-4 py-2 rounded-md text-red-600 hover:bg-red-100 group"
                >
                    <ArrowRightOnRectangleIcon className="w-5 h-5 mr-3 text-red-500 group-hover:text-red-600" />
                    Logout
                </button>
            </div>
        </aside>
    );
};

export default AdminSidebar;