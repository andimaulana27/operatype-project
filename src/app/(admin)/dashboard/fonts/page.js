// src/app/(admin)/dashboard/fonts/page.js
export const dynamic = 'force-dynamic';
import { supabase } from '@/lib/supabaseClient';
import Link from 'next/link';
import DeleteFontButton from '@/components/DeleteFontButton'; // Impor komponen baru

async function getFonts() {
    const { data, error } = await supabase
        .from('fonts')
        .select('*')
        .order('created_at', { ascending: false });
    if (error) { console.error('Error fetching fonts:', error); return []; }
    return data;
}

export default async function ManageFontsPage({ searchParams }) {
    const fonts = await getFonts();
    const message = searchParams.message;

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">Manage Fonts</h1>
                    <div className="w-24 h-1 bg-[#C8705C] mt-2"></div>
                </div>
                <Link href="/dashboard/fonts/new" className="bg-[#C8705C] text-white px-4 py-2 rounded-md hover:bg-opacity-90">
                    Add New Font
                </Link>
            </div>
            
            {message && (
                <div className={`mb-4 p-4 rounded-md ${message.startsWith('Error') ? 'bg-red-100 text-red-800 border-red-200' : 'bg-green-100 text-green-800 border-green-200'}`}>
                    {message}
                </div>
            )}

            <div className="bg-white p-6 rounded-lg shadow-md">
                <table className="min-w-full text-left">
                    <thead className="border-b">
                        <tr>
                            <th className="p-4 text-sm font-semibold text-gray-600">Name</th>
                            <th className="p-4 text-sm font-semibold text-gray-600">Price</th>
                            <th className="p-4 text-sm font-semibold text-gray-600">Tag</th>
                            <th className="p-4 text-sm font-semibold text-gray-600">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {fonts.map(font => (
                            <tr key={font.id} className="border-b hover:bg-gray-50">
                                <td className="p-4 text-[#3F3F3F] font-medium">{font.name}</td>
                                <td className="p-4 text-[#3F3F3F]">{font.price}</td>
                                <td className="p-4">
                                    {font.tag && <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">{font.tag}</span>}
                                </td>
                                <td className="p-4 space-x-2">
                                    <button className="text-sm text-blue-600 hover:underline">Edit</button>
                                    
                                    {/* PERUBAHAN DI SINI: Gunakan komponen DeleteFontButton */}
                                    <DeleteFontButton fontId={font.id} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}