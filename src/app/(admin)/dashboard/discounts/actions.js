// src/app/(admin)/dashboard/discounts/actions.js
'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

// Fungsi untuk membuat diskon baru
export async function createDiscount(formData) {
    const supabase = createClient();

    const newDiscount = {
        name: formData.get('name'),
        percent_off: formData.get('percent_off'),
        is_active: formData.get('is_active') === 'on' ? true : false,
    };

    const { error } = await supabase.from('discounts').insert(newDiscount);

    if (error) {
        console.error('Error creating discount:', error);
        return redirect(`/dashboard/discounts?message=Error: Could not create discount. ${error.message}`);
    }

    revalidatePath('/dashboard/discounts');
    redirect('/dashboard/discounts?message=Discount created successfully!');
}

// Fungsi untuk menghapus diskon
export async function deleteDiscount(formData) {
    const supabase = createClient();
    const discountId = formData.get('discount_id');

    if (!discountId) {
        return redirect('/dashboard/discounts?message=Error: Discount ID is missing.');
    }

    const { error } = await supabase.from('discounts').delete().eq('id', discountId);

    if (error) {
        console.error('Error deleting discount:', error);
        return redirect(`/dashboard/discounts?message=Error: Could not delete discount. ${error.message}`);
    }

    revalidatePath('/dashboard/discounts');
    redirect('/dashboard/discounts?message=Discount deleted successfully!');
}