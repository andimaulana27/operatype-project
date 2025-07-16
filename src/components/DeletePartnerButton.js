// src/components/DeletePartnerButton.js
"use client";

import { useFormStatus } from 'react-dom';
import { deletePartner } from "@/app/(admin)/dashboard/partners/actions";

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <button 
            type="submit"
            disabled={pending}
            className="text-sm text-red-600 hover:underline disabled:text-gray-400 disabled:cursor-not-allowed"
        >
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