// src/components/DeleteFontButton.js
"use client"; // Tandai sebagai Client Component

import { deleteFont } from "@/app/(admin)/dashboard/fonts/actions";

export default function DeleteFontButton({ fontId }) {
    
    const handleDelete = (e) => {
        if (!confirm('Are you sure you want to delete this font?')) {
            e.preventDefault();
        }
    };

    return (
        <form action={deleteFont} onSubmit={handleDelete} className="inline-block">
            <input type="hidden" name="font_id" value={fontId} />
            <button 
                type="submit"
                className="text-sm text-red-600 hover:underline"
            >
                Delete
            </button>
        </form>
    );
}