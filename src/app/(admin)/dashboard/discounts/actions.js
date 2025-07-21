// src/app/(admin)/dashboard/fonts/actions.js
'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { v4 as uuidv4 } from 'uuid';
import opentype from 'opentype.js'; // Import library yang baru diinstal

// Fungsi helper untuk meng-upload file ke Supabase Storage
async function uploadFile(supabase, file, bucket) {
    if (!file || file.size === 0) return null;

    const fileName = `${uuidv4()}-${file.name}`;
    const { error } = await supabase.storage.from(bucket).upload(fileName, file);
    if (error) throw new Error(`Upload Error (${bucket}): ${error.message}`);
    
    const { data } = supabase.storage.from(bucket).getPublicUrl(fileName);
    return data.publicUrl;
}

// Fungsi untuk mengekstrak glyphs dari buffer file font
function getGlyphCharacters(buffer) {
    try {
        const font = opentype.parse(buffer);
        const glyphs = font.glyphs.glyphs;
        let characters = '';
        for (let i = 0; i < font.numGlyphs; i++) {
            const glyph = glyphs[i];
            if (glyph.unicode) {
                // Hanya ambil karakter yang umum ditampilkan
                if ((glyph.unicode >= 33 && glyph.unicode <= 126) || (glyph.unicode >= 160 && glyph.unicode <= 255)) {
                     characters += String.fromCharCode(glyph.unicode);
                }
            }
        }
        // Pastikan karakter dasar selalu ada jika parsing gagal
        const basicChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
        const finalChars = characters.length > 20 ? characters : basicChars + characters;
        return [...new Set(finalChars.split(''))].join(''); // Hilangkan duplikat
    } catch (err) {
        console.error("Error parsing font file:", err);
        // Fallback jika parsing gagal
        return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    }
}


// Fungsi utama untuk membuat font
export async function createFont(formData) {
    const supabase = createClient();

    // Ambil file dari form
    const mainImageFile = formData.get('main_image');
    const galleryImageFiles = formData.getAll('gallery_images');
    const fontRegularFile = formData.get('font_file_regular');
    const fontItalicFile = formData.get('font_file_italic');
    const fontZipFile = formData.get('font_zip');
    
    let glyphString = '';

    try {
        // Otomatisasi Glyph: Baca file regular font untuk mendapatkan karakternya
        if (fontRegularFile && fontRegularFile.size > 0) {
            const arrayBuffer = await fontRegularFile.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer);
            glyphString = getGlyphCharacters(buffer);
        }

        // Upload semua file secara paralel
        const [
            mainImageUrl,
            fontRegularUrl,
            fontItalicUrl,
            fontZipUrl
        ] = await Promise.all([
            uploadFile(supabase, mainImageFile, 'font-previews'),
            uploadFile(supabase, fontRegularFile, 'font-files'),
            uploadFile(supabase, fontItalicFile, 'font-files'),
            uploadFile(supabase, fontZipFile, 'font-files'),
        ]);
        
        // Upload gallery images
        let galleryImageUrls = [];
        if (galleryImageFiles && galleryImageFiles.length > 0 && galleryImageFiles[0].size > 0) {
            galleryImageUrls = await Promise.all(
                galleryImageFiles.map(file => uploadFile(supabase, file, 'font-previews'))
            );
        }

        // Siapkan data untuk database
        const newFontData = {
            name: formData.get('name'),
            slug: formData.get('slug'),
            desc: formData.get('description'),
            tag: formData.get('tag') || null,
            partner_id: formData.get('partner_id') || null,
            category: formData.get('category'),
            price: formData.get('price_desktop'), // Kolom price utama diisi harga desktop
            price_desktop: formData.get('price_desktop'),
            price_business: formData.get('price_business') || null,
            price_corporate: formData.get('price_corporate') || null,
            main_image_url: mainImageUrl,
            gallery_image_urls: galleryImageUrls.length > 0 ? galleryImageUrls : null,
            font_file_url_regular: fontRegularUrl,
            font_file_url_italic: fontItalicUrl,
            font_zip_url: fontZipUrl,
            glyph_characters: glyphString,
        };
        
        const { data: dbData, error: dbError } = await supabase.from('fonts').insert(newFontData).select().single();
        if (dbError) throw new Error(`Database Insert Error: ${dbError.message}`);
        
        // Revalidasi Path
        revalidatePath('/dashboard/fonts');
        revalidatePath('/fonts');
        if (dbData && dbData.slug) {
            revalidatePath(`/font/${dbData.slug}`);
        }
        
    } catch (error) {
        console.error('Create Font Action Error:', error);
        return redirect(`/dashboard/fonts/new?message=Error: ${error.message}`);
    }

    redirect('/dashboard/fonts?message=Font added successfully!');
}

// Fungsi delete tetap sama
export async function deleteFont(formData) {
    const supabase = createClient();
    const fontId = formData.get('font_id');
    // ... (sisa kode delete sama persis)
    if (!fontId) {
        return redirect('/dashboard/fonts?message=Error: Font ID is missing.');
    }
    const { data: fontData, error: fetchError } = await supabase.from('fonts').select('slug').eq('id', fontId).single();
    if (fetchError) {
        console.error('Error fetching font to delete:', fetchError);
        return redirect(`/dashboard/fonts?message=Error: Could not find font. ${fetchError.message}`);
    }
    const { error: deleteError } = await supabase.from('fonts').delete().eq('id', fontId);
    if (deleteError) {
        console.error('Error deleting font:', deleteError);
        return redirect(`/dashboard/fonts?message=Error: Could not delete font. ${deleteError.message}`);
    }
    revalidatePath('/dashboard/fonts');
    revalidatePath('/fonts');
    if (fontData && fontData.slug) {
      revalidatePath(`/font/${fontData.slug}`);
    }
    redirect('/dashboard/fonts?message=Font deleted successfully!');
}