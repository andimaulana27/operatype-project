// src/app/(admin)/dashboard/partners/actions.js
'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

// FUNGSI BARU UNTUK MENAMBAH PARTNER
export async function createPartner(formData) {
    const supabase = createClient();

    const newPartner = {
        name: formData.get('name'),
        slug: formData.get('slug'),
        description: formData.get('description'),
        imageUrl: formData.get('imageUrl'),
    };

    const { error } = await supabase.from('partners').insert(newPartner);

    if (error) {
        console.error('Error creating partner:', error);
        return redirect(`/dashboard/partners/new?message=Error: Could not add partner. ${error.message}`);
    }

    revalidatePath('/dashboard/partners');
    redirect('/dashboard/partners?message=Partner added successfully!');
}


// FUNGSI LAMA UNTUK MENGHAPUS PARTNER (TETAP ADA)
export async function deletePartner(formData) {
    const supabase = createClient()
    const partnerId = formData.get('partner_id');

    if (!partnerId) {
        return redirect('/dashboard/partners?message=Error: Partner ID is missing.');
    }

    const { error } = await supabase
        .from('partners')
        .delete()
        .eq('id', partnerId);

    if (error) {
        console.error('Error deleting partner:', error);
        return redirect(`/dashboard/partners?message=Error: Could not delete partner. ${error.message}`);
    }

    revalidatePath('/dashboard/partners');
    redirect('/dashboard/partners?message=Partner deleted successfully!');
}