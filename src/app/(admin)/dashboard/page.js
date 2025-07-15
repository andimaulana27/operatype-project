// src/app/(admin)/dashboard/page.js
import { supabase } from '@/lib/supabaseClient';

async function getSummary() {
    const { data: fonts, error: fontsError } = await supabase.from('fonts').select('id');
    const { data: partners, error: partnersError } = await supabase.from('partners').select('id');

    if (fontsError || partnersError) {
        console.error("Error fetching summary:", fontsError || partnersError);
    }
    
    return {
        totalFonts: fonts?.length || 0,
        totalPartners: partners?.length || 0,
    };
}


export default async function DashboardPage() {
    const summary = await getSummary();

    return (
        <div>
            {/* PERUBAHAN DI SINI: Menambahkan gaya headline */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
                <div className="w-24 h-1 bg-[#C8705C] mt-2"></div>
            </div>
            <p className="text-gray-600 -mt-4 mb-8">Welcome to the control panel.</p>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold text-gray-700">Total Fonts</h2>
                    <p className="text-4xl font-bold text-[#C8705C] mt-2">{summary.totalFonts}</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold text-gray-700">Total Partners</h2>
                    <p className="text-4xl font-bold text-[#C8705C] mt-2">{summary.totalPartners}</p>
                </div>
            </div>
        </div>
    );
}