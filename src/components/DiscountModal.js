// src/components/DiscountModal.js
"use client";

import { useState, useTransition } from 'react';
import { applyDiscountToFonts } from '@/app/(admin)/dashboard/fonts/actions';

export default function DiscountModal({ discounts, selectedFonts, onClose, showNotification }) {
    const [selectedDiscount, setSelectedDiscount] = useState('');
    const [isPending, startTransition] = useTransition();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!selectedDiscount) {
            alert('Please select a discount option.');
            return;
        }

        startTransition(async () => {
            const formData = new FormData();
            formData.append('font_ids', JSON.stringify(Array.from(selectedFonts)));
            formData.append('discount_id', selectedDiscount);
            
            const result = await applyDiscountToFonts(formData);
            
            if (result.error) {
                showNotification(`Error: ${result.error}`, true);
            } else {
                showNotification(result.message || 'Action completed successfully.');
            }
            onClose(); // Tutup modal setelah selesai
        });
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Apply Discount</h2>
                <p className="text-sm text-gray-600 mb-4">
                    Select a discount to apply to the <span className="font-bold">{selectedFonts.size}</span> selected font(s). 
                    Choosing "No Discount" will remove any existing discounts from these fonts.
                </p>
                <form onSubmit={handleSubmit}>
                    <select
                        value={selectedDiscount}
                        onChange={(e) => setSelectedDiscount(e.target.value)}
                        className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:ring-[#C8705C] focus:border-[#C8705C]"
                    >
                        <option value="" disabled>-- Select a discount --</option>
                        <option value="none">No Discount</option>
                        {discounts.map(d => (
                            <option key={d.id} value={d.id}>{d.name} ({d.percent_off}%)</option>
                        ))}
                    </select>
                    <div className="flex justify-end gap-4">
                        <button type="button" onClick={onClose} className="px-4 py-2 rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200">
                            Cancel
                        </button>
                        <button 
                            type="submit" 
                            disabled={isPending || !selectedDiscount}
                            className="px-4 py-2 rounded-md text-white bg-[#C8705C] hover:bg-opacity-90 disabled:bg-gray-400"
                        >
                            {isPending ? 'Applying...' : 'Apply Discount'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}