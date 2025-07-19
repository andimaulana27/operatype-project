// src/app/(admin)/layout.js
"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter, useSearchParams } from "next/navigation";
import AdminSidebar from "@/components/AdminSidebar";
import { useEffect, useState } from "react";
import { XCircleIcon, CheckCircleIcon } from '@heroicons/react/24/solid';

// Komponen Notifikasi Internal
function Notification() {
    const searchParams = useSearchParams();
    const message = searchParams.get('message');
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (message) {
            setVisible(true);
            const timer = setTimeout(() => {
                setVisible(false);
            }, 5000); // Sembunyikan setelah 5 detik
            return () => clearTimeout(timer);
        }
    }, [message]);

    if (!message || !visible) return null;

    const isError = message.startsWith('Error:');
    const displayMessage = isError ? message.substring(7) : message;

    return (
        <div 
            className={`fixed top-5 right-5 z-50 flex items-center p-4 rounded-lg shadow-lg transition-all duration-300 ${isError ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'} ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
        >
            {isError ? <XCircleIcon className="w-6 h-6 mr-3" /> : <CheckCircleIcon className="w-6 h-6 mr-3" />}
            <span>{displayMessage}</span>
            <button onClick={() => setVisible(false)} className="ml-4 text-xl font-bold">&times;</button>
        </div>
    );
}


export default function AdminLayout({ children }) {
    const { isAdmin, loading } = useAuth();
    const router = useRouter();

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen bg-gray-100">
                <p>Verifying access...</p>
            </div>
        );
    }

    if (!isAdmin) {
        if (typeof window !== 'undefined') {
            router.push('/');
        }
        return null;
    }

    return (
        <div className="flex min-h-screen bg-gray-100">
            <AdminSidebar />
            <main className="flex-1 p-8 relative">
                <Notification />
                {children}
            </main>
        </div>
    );
}