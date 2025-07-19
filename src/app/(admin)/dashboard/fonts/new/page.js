// src/app/(admin)/dashboard/fonts/new/page.js
export const dynamic = 'force-dynamic';

import { createFont } from '../actions';
import NewFontForm from '@/components/NewFontForm';
import { createClient } from '@/lib/supabase/server';

async function getFormData() {
    const supabase = createClient();
    const { data: partners, error: partnerError } = await supabase.from('partners').select('id, name');
    
    if (partnerError) {
        console.error("Error fetching partners for form:", partnerError.message);
    }
    
    const categories = ["Script", "Signature", "Handwritten", "Display", "Sans Serif", "Serif"];

    return { partners: partners || [], categories };
}

export default async function NewFontPage() {
    const { partners, categories } = await getFormData();

    // PERBAIKAN DI SINI:
    // Kirim server action 'createFont' sebagai prop ke komponen form
    return <NewFontForm partners={partners} categories={categories} formAction={createFont} />;
}