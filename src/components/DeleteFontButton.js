// src/components/DeleteFontButton.js
"use client";

import { useFormStatus } from 'react-dom';
import { deleteFont } from "@/app/(admin)/dashboard/fonts/actions";

// Komponen terpisah untuk tombol agar bisa menggunakan useFormStatus
function SubmitButton() {
    const { pending } = useFormStatus();
    
    return (
        <button 
            type="submit"
            disabled={pending} // Tombol dinonaktifkan saat form sedang diproses
            className="text-sm text-red-600 hover:underline disabled:text-gray-400 disabled:cursor-not-allowed"
        >
            {pending ? 'Deleting...' : 'Delete'}
        </button>
    );
}

export default function DeleteFontButton({ fontId }) {
    
    const handleDelete = (e) => {
        if (!confirm('Are you sure you want to delete this font? This action cannot be undone.')) {
            e.preventDefault();
        }
    };

    return (
        <form action={deleteFont} onSubmit={handleDelete} className="inline-block">
            <input type="hidden" name="font_id" value={fontId} />
            <SubmitButton />
        </form>
    );
}