// src/app/(admin)/dashboard/partners/page.js
import { supabase } from '@/lib/supabaseClient';
import Link from 'next/link'; // Pastikan Link diimpor
import DeletePartnerButton from '@/components/DeletePartnerButton';

async function getPartners() {
    // ... (fungsi ini tidak berubah)
    const { data, error } = await supabase.from('partners').select('*').order('name', { ascending: true });
    if (error) { console.error('Error fetching partners:', error); return []; }
    return data;
}

export default async function ManagePartnersPage({ searchParams }) {
    const partners = await getPartners();
    const message = searchParams.message;

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">Manage Partners</h1>
                    <div className="w-24 h-1 bg-[#C8705C] mt-2"></div>
                </div>
                {/* --- PERUBAHAN DI SINI --- */}
                <Link href="/dashboard/partners/new" className="bg-[#C8705C] text-white px-4 py-2 rounded-md hover:bg-opacity-90">
                    Add New Partner
                </Link>
                {/* ------------------------- */}
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
                            <th className="p-4 text-sm font-semibold text-gray-600">Partner Name</th>
                            <th className="p-4 text-sm font-semibold text-gray-600">Description</th>
                            <th className="p-4 text-sm font-semibold text-gray-600">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {partners.map(partner => (
                            <tr key={partner.id} className="border-b hover:bg-gray-50">
                                <td className="p-4 text-[#3F3F3F] font-medium">{partner.name}</td>
                                <td className="p-4 text-[#3F3F3F] truncate max-w-sm">{partner.description}</td>
                                <td className="p-4 space-x-2">
                                    <button className="text-sm text-blue-600 hover:underline">Edit</button>
                                    <DeletePartnerButton partnerId={partner.id} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}