// src/app/(admin)/dashboard/fonts/actions.js
'use server'

import { createClient } from '@/lib/supabase/server' // UBAH: Impor dari path baru
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function createFont(formData) {
    const supabase = createClient() // UBAH: Buat client yang terotentikasi

    const newFont = {
        name: formData.get('name'),
        slug: formData.get('slug'),
        desc: formData.get('desc'),
        price: formData.get('price'),
        tag: formData.get('tag') || null, 
        imageUrl: formData.get('imageUrl'),
    };
    
    // PERBAIKAN: Gunakan 'select()' untuk mendapatkan data yang baru dibuat
    const { data, error } = await supabase.from('fonts').insert(newFont).select().single();

    if (error) {
        console.error('Error creating font:', error);
        // PERBAIKAN: Redirect dengan pesan error yang lebih spesifik
        return redirect(`/dashboard/fonts/new?message=Error: Could not add font. ${error.message}`);
    }
    
    revalidatePath('/dashboard/fonts');
    revalidatePath(`/font/${data.slug}`); // Revalidasi halaman detail font juga
    redirect('/dashboard/fonts?message=Font added successfully!');
}

export async function deleteFont(formData) {
    const supabase = createClient() // UBAH: Buat client yang terotentikasi
    const fontId = formData.get('font_id');

    if (!fontId) {
        console.error('Error: font_id is missing');
        // PERBAIKAN: Redirect dengan pesan error
        return redirect('/dashboard/fonts?message=Error: Font ID is missing.');
    }

    // Ambil dulu data font untuk mendapatkan slug-nya sebelum dihapus
    const { data: fontData, error: fetchError } = await supabase
        .from('fonts')
        .select('slug')
        .eq('id', fontId)
        .single();

    if (fetchError) {
        console.error('Error fetching font to delete:', fetchError);
        return redirect(`/dashboard/fonts?message=Error: Could not find font. ${fetchError.message}`);
    }

    const { error: deleteError } = await supabase
        .from('fonts')
        .delete()
        .eq('id', fontId);

    if (deleteError) {
        console.error('Error deleting font:', deleteError);
        // PERBAIKAN: Redirect dengan pesan error
        return redirect(`/dashboard/fonts?message=Error: Could not delete font. ${deleteError.message}`);
    }

    revalidatePath('/dashboard/fonts');
    revalidatePath(`/font/${fontData.slug}`); // Revalidasi halaman detail yang sudah dihapus
    // PERBAIKAN: Redirect dengan pesan sukses
    redirect('/dashboard/fonts?message=Font deleted successfully!');
}