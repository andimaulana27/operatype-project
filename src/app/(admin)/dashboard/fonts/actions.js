// src/app/(admin)/dashboard/fonts/actions.js
'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

function createSlug(text) {
    if (!text) return '';
    return text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
}

export async function createFont(formData) {
    const supabase = createClient();
    const fontName = formData.get('name');
    const slug = createSlug(fontName);
    const fontDataObject = {
        name: fontName, slug,
        desc: formData.get('desc'),
        price: formData.get('price_desktop'),
        price_desktop: formData.get('price_desktop'),
        price_business: formData.get('price_business'),
        price_corporate: formData.get('price_corporate'),
        category: formData.get('category'),
        partner_id: formData.get('partner_id') || null,
        tag: formData.get('tag') || null,
        glyph_characters: formData.get('glyph_characters'),
    };
    const uploadFile = async (file, folder) => {
        if (!file || file.size === 0) return { publicUrl: null, error: null };
        const filePath = `${folder}/${slug}-${Date.now()}-${file.name}`;
        const { data, error } = await supabase.storage.from('products').upload(filePath, file, { upsert: true });
        if (error) return { publicUrl: null, error };
        const { data: { publicUrl } } = supabase.storage.from('products').getPublicUrl(data.path);
        return { publicUrl, error: null };
    };
    const filesToUpload = [
        { file: formData.get('font_file_regular'), folder: 'font-display', key: 'font_file_url_regular' },
        { file: formData.get('font_file_italic'), folder: 'font-display', key: 'font_file_url_italic' },
        { file: formData.get('font_zip'), folder: 'font-files', key: 'font_zip_url' },
        { file: formData.get('main_image'), folder: 'font-previews', key: 'main_image_url' },
    ];
    for (const item of filesToUpload) {
        const { publicUrl, error } = await uploadFile(item.file, item.folder);
        if (error) return redirect(`/dashboard/fonts/new?message=Error uploading ${item.file.name}: ${error.message}`);
        if (publicUrl) fontDataObject[item.key] = publicUrl;
        if (item.key === 'main_image_url') fontDataObject.imageUrl = publicUrl;
    }
    const galleryImageFiles = formData.getAll('gallery_images');
    if (galleryImageFiles && galleryImageFiles.length > 0 && galleryImageFiles[0].size > 0) {
        const galleryUrls = [];
        for (const file of galleryImageFiles) {
            const { publicUrl, error } = await uploadFile(file, 'font-previews');
            if (error) return redirect(`/dashboard/fonts/new?message=Error uploading gallery image ${file.name}: ${error.message}`);
            if (publicUrl) galleryUrls.push(publicUrl);
        }
        fontDataObject.gallery_image_urls = galleryUrls;
    }
    const { data: newFontData, error: insertError } = await supabase.from('fonts').insert(fontDataObject).select().single();
    if (insertError) {
        return redirect(`/dashboard/fonts/new?message=Error: Could not add font. ${insertError.message}`);
    }
    revalidatePath('/dashboard/fonts');
    revalidatePath(`/font/${newFontData.slug}`);
    revalidatePath('/fonts');
    redirect('/dashboard/fonts?message=Font added successfully!');
}

export async function deleteFont(formData) {
    const supabase = createClient();
    const fontId = formData.get('font_id');
    if (!fontId) return redirect('/dashboard/fonts?message=Error: Font ID is missing.');
    const { data: fontData, error: fetchError } = await supabase.from('fonts').select('slug').eq('id', fontId).single();
    if (fetchError) return redirect(`/dashboard/fonts?message=Error: Could not find font. ${fetchError.message}`);
    const { error: deleteError } = await supabase.from('fonts').delete().eq('id', fontId);
    if (deleteError) return redirect(`/dashboard/fonts?message=Error: Could not delete font. ${deleteError.message}`);
    revalidatePath('/dashboard/fonts');
    if (fontData) revalidatePath(`/font/${fontData.slug}`);
    revalidatePath('/fonts');
    redirect('/dashboard/fonts?message=Font deleted successfully!');
}

// --- FUNGSI BARU UNTUK MENERAPKAN DISKON ---
export async function applyDiscountToFonts(formData) {
    const supabase = createClient();
    const fontIds = JSON.parse(formData.get('font_ids'));
    const discountId = formData.get('discount_id');

    if (!fontIds || fontIds.length === 0 || !discountId) {
        return { error: 'Missing font IDs or discount ID.' };
    }
    const { error: deleteError } = await supabase
        .from('font_discounts')
        .delete()
        .in('font_id', fontIds);
    if (deleteError) {
        console.error('Error clearing old discounts:', deleteError);
        return { error: `Failed to clear old discounts: ${deleteError.message}` };
    }
    if (discountId === 'none') {
        revalidatePath('/dashboard/fonts');
        return { success: true, message: 'Discounts removed successfully.' };
    }
    const newDiscountLinks = fontIds.map(fontId => ({
        font_id: fontId,
        discount_id: discountId,
    }));
    const { error: insertError } = await supabase
        .from('font_discounts')
        .insert(newDiscountLinks);
    if (insertError) {
        console.error('Error applying new discount:', insertError);
        return { error: `Failed to apply new discount: ${insertError.message}` };
    }
    revalidatePath('/dashboard/fonts');
    return { success: true, message: 'Discount applied successfully.' };
}