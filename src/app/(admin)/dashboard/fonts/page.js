// src/app/(admin)/dashboard/fonts/page.js
"use client"; // <-- JADIKAN CLIENT COMPONENT

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient'; // Gunakan client-side supabase
import Link from 'next/link';
import Image from 'next/image';
import DeleteFontButton from '@/components/DeleteFontButton';
import DiscountModal from '@/components/DiscountModal'; // Impor modal baru
import { PencilIcon, TagIcon } from '@heroicons/react/24/outline';
import { useSearchParams, useRouter } from 'next/navigation'; // Gunakan hook

// Komponen utama dipindahkan ke dalam client component
function ManageFontsClient({ initialFonts, initialDiscounts }) {
    const [fonts, setFonts] = useState(initialFonts);
    const [discounts, setDiscounts] = useState(initialDiscounts);
    const [selectedFonts, setSelectedFonts] = useState(new Set());
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    // State untuk notifikasi
    const router = useRouter();
    const searchParams = useSearchParams();
    const [notification, setNotification] = useState({ message: '', isError: false, show: false });

    // Tampilkan notifikasi dari URL saat pertama kali load
    useEffect(() => {
        const message = searchParams.get('message');
        if (message) {
            showNotification(message, message.startsWith('Error:'));
            // Hapus query param dari URL tanpa reload
            router.replace('/dashboard/fonts', { scroll: false });
        }
    }, []);

    const showNotification = (message, isError = false) => {
        setNotification({ message, isError, show: true });
        setTimeout(() => setNotification({ message: '', isError: false, show: false }), 5000);
    };

    const handleSelectAll = (e) => {
        if (e.target.checked) {
            setSelectedFonts(new Set(fonts.map(f => f.id)));
        } else {
            setSelectedFonts(new Set());
        }
    };

    const handleSelectOne = (fontId, isChecked) => {
        const newSelection = new Set(selectedFonts);
        if (isChecked) {
            newSelection.add(fontId);
        } else {
            newSelection.delete(fontId);
        }
        setSelectedFonts(newSelection);
    };

    return (
        <div>
            {/* Tampilkan Modal jika isModalOpen true */}
            {isModalOpen && (
                <DiscountModal 
                    discounts={discounts}
                    selectedFonts={selectedFonts}
                    onClose={() => setIsModalOpen(false)}
                    showNotification={showNotification}
                />
            )}

            {/* Tampilkan notifikasi jika show true */}
            {notification.show && (
                 <div className={`fixed top-5 right-5 z-50 p-4 rounded-lg shadow-lg ${notification.isError ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
                    {notification.message}
                </div>
            )}
            
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">Manage Fonts</h1>
                    <div className="w-24 h-1 bg-[#C8705C] mt-2"></div>
                </div>
                {/* Tombol "Apply Discount" akan muncul di sini */}
                <div className="flex items-center gap-4">
                    {selectedFonts.size > 0 && (
                        <button onClick={() => setIsModalOpen(true)} className="flex items-center gap-2 bg-[#3F3F3F] text-white px-4 py-2 rounded-md hover:bg-opacity-90">
                           <TagIcon className="w-5 h-5"/> Apply Discount ({selectedFonts.size})
                        </button>
                    )}
                    <Link href="/dashboard/fonts/new" className="bg-[#C8705C] text-white px-4 py-2 rounded-md hover:bg-opacity-90">
                        Add New Font
                    </Link>
                </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md overflow-x-auto">
                <table className="min-w-full text-left">
                    <thead className="border-b">
                        <tr>
                            <th className="p-4 w-12"><input type="checkbox" onChange={handleSelectAll} checked={selectedFonts.size === fonts.length && fonts.length > 0} /></th>
                            <th className="p-4 text-sm font-semibold text-gray-600">Image</th>
                            <th className="p-4 text-sm font-semibold text-gray-600">Name / Discount</th>
                            <th className="p-4 text-sm font-semibold text-gray-600">Partner</th>
                            <th className="p-4 text-sm font-semibold text-gray-600">Desktop Price</th>
                            <th className="p-4 text-sm font-semibold text-gray-600">Tag</th>
                            <th className="p-4 text-sm font-semibold text-gray-600">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {fonts.map(font => (
                            <tr key={font.id} className="border-b hover:bg-gray-50">
                                <td className="p-4"><input type="checkbox" checked={selectedFonts.has(font.id)} onChange={(e) => handleSelectOne(font.id, e.target.checked)} /></td>
                                <td className="p-4"><div className="relative w-24 h-16 bg-gray-100 rounded-md overflow-hidden"><Image src={font.main_image_url || font.imageUrl || '/placeholder-image.jpg'} alt={`Preview for ${font.name}`} fill style={{ objectFit: 'cover' }} /></div></td>
                                <td className="p-4 text-[#3F3F3F] font-medium align-top">
                                    {font.name}
                                    {font.font_discounts[0]?.discounts && (
                                        <div className="text-xs font-bold text-green-600 mt-1">
                                            {font.font_discounts[0].discounts.name} ({font.font_discounts[0].discounts.percent_off}%)
                                        </div>
                                    )}
                                </td>
                                <td className="p-4 text-[#3F3F3F] align-top">{font.partners ? font.partners.name : <span className="text-gray-400">N/A</span>}</td>
                                <td className="p-4 text-[#3F3F3F] align-top">
                                    {font.font_discounts[0]?.discounts ? (
                                        <div>
                                            <span className="line-through text-gray-400">${font.price_desktop?.toFixed(2)}</span>
                                            <span className="ml-2 font-bold text-red-600">
                                                ${(font.price_desktop * (1 - font.font_discounts[0].discounts.percent_off / 100)).toFixed(2)}
                                            </span>
                                        </div>
                                    ) : (
                                        `$${font.price_desktop?.toFixed(2)}`
                                    )}
                                </td>
                                <td className="p-4 align-top">{font.tag && <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">{font.tag}</span>}</td>
                                <td className="p-4 align-top"><div className="flex items-center gap-4"><button className="flex items-center gap-1 text-sm text-[#C8705C] hover:underline"><PencilIcon className="w-4 h-4"/>Edit</button><DeleteFontButton fontId={font.id} /></div></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

// Wrapper Server Component untuk mengambil data awal
export default function ManageFontsPage() {
    const [fonts, setFonts] = useState([]);
    const [discounts, setDiscounts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const { data: fontData, error: fontError } = await supabase
                .from('fonts')
                .select(`*, partners (name), font_discounts (discounts (*))`)
                .order('created_at', { ascending: false });
            
            const { data: discountData, error: discountError } = await supabase
                .from('discounts')
                .select('*')
                .eq('is_active', true);

            if (fontError || discountError) {
                console.error("Error fetching data:", fontError || discountError);
            } else {
                setFonts(fontData);
                setDiscounts(discountData);
            }
            setLoading(false);
        }
        fetchData();
    }, []);

    if (loading) {
        return <div>Loading data...</div>;
    }

    return <ManageFontsClient initialFonts={fonts} initialDiscounts={discounts} />;
}