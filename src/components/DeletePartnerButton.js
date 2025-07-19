// src/components/DeletePartnerButton.js
"use client";

import { useFormStatus } from 'react-dom';
import { deletePartner } from "@/app/(admin)/dashboard/partners/actions";
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

export default function DeletePartnerButton({ partnerId }) {
    const handleDelete = (e) => {
        if (!confirm('Are you sure you want to delete this partner?')) {
            e.preventDefault();
        }
    };

    return (
        <form action={deletePartner} onSubmit={handleDelete} className="inline-block">
            <input type="hidden" name="partner_id" value={partnerId} />
            <SubmitButton />
        </form>
    );
}