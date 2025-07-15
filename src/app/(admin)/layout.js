// src/app/(admin)/layout.js
"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import AdminSidebar from "@/components/AdminSidebar";

export default function AdminLayout({ children }) {
    const { isAdmin, loading } = useAuth(); // Kita hanya butuh isAdmin dan loading
    const router = useRouter();

    // Selama loading, tampilkan pesan
    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen bg-gray-100">
                <p>Verifying access...</p>
            </div>
        );
    }

    // Setelah loading selesai, jika bukan admin, tendang!
    if (!isAdmin) {
        // Cukup panggil router.push sekali
        if (typeof window !== 'undefined') {
            router.push('/');
        }
        return null; // Tampilkan kosong selagi redirect
    }

    // Jika admin, tampilkan layout
    return (
        <div className="flex min-h-screen bg-gray-100">
            <AdminSidebar />
            <main className="flex-1 p-8">
                {children}
            </main>
        </div>
    );
}