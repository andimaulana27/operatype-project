// src/app/(admin)/dashboard/fonts/actions.js
'use server'

import { supabase } from '@/lib/supabaseClient';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createFont(formData) {
    const newFont = {
        name: formData.get('name'),
        slug: formData.get('slug'),
        desc: formData.get('desc'),
        price: formData.get('price'),
        tag: formData.get('tag') || null, 
        imageUrl: formData.get('imageUrl'),
    };
    const { error } = await supabase.from('fonts').insert([newFont]);
    if (error) {
        console.error('Error creating font:', error);
        return redirect('/dashboard/fonts/new?message=Error: Could not add font. Check console for details.');
    }
    revalidatePath('/dashboard/fonts');
    redirect('/dashboard/fonts?message=Font added successfully!');
}

export async function deleteFont(formData) {
    const fontId = formData.get('font_id');

    if (!fontId) {
        return;
    }

    const { error } = await supabase
        .from('fonts')
        .delete()
        .eq('id', fontId); // Gunakan .eq() untuk mencocokkan id

    if (error) {
        console.error('Error deleting font:', error);
        return;
    }

    revalidatePath('/dashboard/fonts');
}