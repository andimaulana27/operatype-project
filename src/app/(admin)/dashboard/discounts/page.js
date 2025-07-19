// src/app/(admin)/dashboard/discounts/page.js
import { supabase } from '@/lib/supabaseClient';
import { createDiscount, deleteDiscount } from './actions';
import { TrashIcon, CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';

async function getDiscounts() {
    const { data, error } = await supabase.from('discounts').select('*').order('created_at', { ascending: false });
    if (error) {
        console.error("Error fetching discounts:", error);
        return [];
    }
    return data;
}

export default async function ManageDiscountsPage({ searchParams }) {
    const discounts = await getDiscounts();
    const message = searchParams.message;
    const inputStyle = "mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#C8705C] focus:border-[#C8705C] text-[#3F3F3F]";

    return (
        <div>
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800">Manage Discounts</h1>
                <div className="w-24 h-1 bg-[#C8705C] mt-2"></div>
            </div>

            {message && (
                <div className={`mb-4 p-4 rounded-md text-sm ${message.startsWith('Error') ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
                    {message}
                </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Kolom Kiri: Form Tambah Diskon */}
                <div className="lg:col-span-1">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-lg font-semibold text-gray-700 mb-4">Create New Discount</h2>
                        <form action={createDiscount} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Campaign Name</label>
                                <input type="text" name="name" id="name" required className={inputStyle} placeholder="e.g., Summer Sale" />
                            </div>
                            <div>
                                <label htmlFor="percent_off" className="block text-sm font-medium text-gray-700">Percentage Off (%)</label>
                                <input type="number" name="percent_off" id="percent_off" required className={inputStyle} placeholder="e.g., 20" />
                            </div>
                            <div className="flex items-center">
                                <input id="is_active" name="is_active" type="checkbox" defaultChecked className="h-4 w-4 text-[#C8705C] focus:ring-[#FF7C5E] border-gray-300 rounded" />
                                <label htmlFor="is_active" className="ml-2 block text-sm text-gray-900">Activate this discount</label>
                            </div>
                            <button type="submit" className="w-full bg-[#C8705C] text-white py-2 px-4 rounded-md hover:bg-opacity-90">
                                Create Discount
                            </button>
                        </form>
                    </div>
                </div>

                {/* Kolom Kanan: Tabel Daftar Diskon */}
                <div className="lg:col-span-2">
                    <div className="bg-white p-6 rounded-lg shadow-md overflow-x-auto">
                        <table className="min-w-full text-left">
                            <thead className="border-b">
                                <tr>
                                    <th className="p-4 text-sm font-semibold text-gray-600">Campaign Name</th>
                                    <th className="p-4 text-sm font-semibold text-gray-600 text-center">Discount</th>
                                    <th className="p-4 text-sm font-semibold text-gray-600 text-center">Status</th>
                                    <th className="p-4 text-sm font-semibold text-gray-600">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {discounts.map(discount => (
                                    <tr key={discount.id} className="border-b hover:bg-gray-50">
                                        <td className="p-4 text-[#3F3F3F] font-medium">{discount.name}</td>
                                        <td className="p-4 text-[#3F3F3F] text-center font-semibold">{discount.percent_off}%</td>
                                        <td className="p-4 text-center">
                                            {discount.is_active ? (
                                                <CheckCircleIcon className="w-6 h-6 text-green-500 inline-block" title="Active" />
                                            ) : (
                                                <XCircleIcon className="w-6 h-6 text-gray-400 inline-block" title="Inactive" />
                                            )}
                                        </td>
                                        <td className="p-4">
                                            <form action={deleteDiscount}>
                                                <input type="hidden" name="discount_id" value={discount.id} />
                                                <button type="submit" className="flex items-center gap-1 text-sm text-[#3F3F3F] hover:underline">
                                                    <TrashIcon className="w-4 h-4"/> Delete
                                                </button>
                                            </form>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}