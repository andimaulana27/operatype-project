// src/components/DeleteFontButton.js
"use client";

import { useFormStatus } from 'react-dom';
import { deleteFont } from "@/app/(admin)/dashboard/fonts/actions";
import { TrashIcon } from '@heroicons/react/24/outline'; // Impor ikon

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        // PERUBAHAN DI SINI: Ubah warna teks
        <button type="submit" disabled={pending} className="flex items-center gap-1 text-sm text-[#3F3F3F] hover:underline disabled:text-gray-400 disabled:cursor-not-allowed">
            <TrashIcon className="w-4 h-4" />
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