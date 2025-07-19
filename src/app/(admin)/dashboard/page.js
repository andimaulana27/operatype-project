// src/app/(admin)/dashboard/page.js
import { supabase } from '@/lib/supabaseClient';
import { ChartBarIcon, BanknotesIcon, DocumentTextIcon, UsersIcon } from '@heroicons/react/24/outline';
import DropdownIcon from '@/components/icons/DropdownIcon';

// Fungsi untuk mengambil data dashboard (tidak ada perubahan)
async function getDashboardData() {
    const { count: totalFonts, error: fontsError } = await supabase
        .from('fonts')
        .select('*', { count: 'exact', head: true });

    const { count: totalPartners, error: partnersError } = await supabase
        .from('partners')
        .select('*', { count: 'exact', head: true });

    if (fontsError || partnersError) {
        console.error("Error fetching summary:", fontsError || partnersError);
    }
    
    const monthlyEarnings = 1250.75;
    const bestSellingFonts = [
        { name: 'Grande Amstera', sales: 152 },
        { name: 'Royales Horizon', sales: 131 },
        { name: 'Butterfly Friends', sales: 110 },
        { name: 'Flower Blossom', sales: 98 },
        { name: 'Artfully Stylish', sales: 85 },
    ];
    const salesLast7Days = [
        { day: 'Mon', sales: 15 },
        { day: 'Tue', sales: 25 },
        { day: 'Wed', sales: 45 },
        { day: 'Thu', sales: 30 },
        { day: 'Fri', sales: 60 },
        { day: 'Sat', sales: 75 },
        { day: 'Sun', sales: 50 },
    ];

    return {
        totalFonts: totalFonts || 0,
        totalPartners: totalPartners || 0,
        monthlyEarnings,
        bestSellingFonts,
        salesLast7Days,
    };
}

export default async function DashboardPage() {
    const data = await getDashboardData();
    // Bulatkan nilai maks ke kelipatan 10 terdekat untuk skala yang lebih rapi
    const maxSales = Math.ceil(Math.max(...data.salesLast7Days.map(d => d.sales), 1) / 10) * 10;

    return (
        <div>
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
                <div className="w-24 h-1 bg-[#C8705C] mt-2"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-lg font-semibold text-gray-700 flex items-center"><BanknotesIcon className="w-6 h-6 mr-2 text-gray-400"/>Monthly Earnings</h2>
                    <p className="text-4xl font-bold text-[#C8705C] mt-2">${data.monthlyEarnings.toFixed(2)}</p>
                    <div className="relative mt-2">
                        <select className="appearance-none text-xs w-full p-2 pr-8 border border-gray-300 rounded-md bg-gray-50 text-[#3F3F3F] hover:border-gray-400 focus:outline-none focus:ring-1 focus:ring-[#C8705C]">
                            <option>This Month</option>
                            <option>Today</option>
                            <option>Last 7 Days</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                            <DropdownIcon className="w-3 h-3 text-[#C8705C]" />
                        </div>
                    </div>
                </div>
                 <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-lg font-semibold text-gray-700 flex items-center"><DocumentTextIcon className="w-6 h-6 mr-2 text-gray-400"/>Total Fonts</h2>
                    <p className="text-4xl font-bold text-[#C8705C] mt-2">{data.totalFonts}</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-lg font-semibold text-gray-700 flex items-center"><UsersIcon className="w-6 h-6 mr-2 text-gray-400"/>Total Partners</h2>
                    <p className="text-4xl font-bold text-[#C8705C] mt-2">{data.totalPartners}</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* --- PERBAIKAN TOTAL PADA KARTU GRAFIK --- */}
                <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md min-h-[400px] flex flex-col">
                    <h2 className="text-lg font-semibold text-gray-700">Sales Analytics (Last 7 Days)</h2>
                    <div className="flex-grow w-full flex mt-4">
                        {/* Sumbu Y (Kiri) */}
                        <div className="flex flex-col justify-between text-xs text-gray-400 pr-4">
                            <span>{maxSales}</span>
                            <span>{maxSales * 0.75}</span>
                            <span>{maxSales * 0.5}</span>
                            <span>{maxSales * 0.25}</span>
                            <span>0</span>
                        </div>
                        {/* Area Grafik (Tengah) */}
                        <div className="flex-grow w-full flex flex-col">
                            <div className="relative flex-grow w-full flex items-end justify-around">
                                {/* Garis Bantu (Grid Lines) */}
                                { [0.25, 0.5, 0.75, 1].map(val => (
                                    <div key={val} className="absolute w-full border-t border-gray-100" style={{bottom: `${val*100}%`}}></div>
                                )) }
                                {/* Bar Chart */}
                                {data.salesLast7Days.map((item) => (
                                    <div key={item.day} className="relative w-8" style={{ height: `${(item.sales / maxSales) * 100}%` }}>
                                        <div className="absolute bottom-0 w-full h-full bg-[#C8705C] rounded-t-md hover:bg-[#FF7C5E] transition-colors" title={`${item.sales} sales`}></div>
                                        <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-xs font-semibold text-gray-600">{item.sales}</span>
                                    </div>
                                ))}
                            </div>
                             {/* Sumbu X (Bawah) */}
                            <div className="w-full flex justify-around text-center mt-2 border-t border-gray-200 pt-2">
                                {data.salesLast7Days.map((item) => (
                                    <span key={item.day} className="text-xs font-medium text-gray-500 w-12">{item.day}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-1 bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-lg font-semibold text-gray-700">Top 5 Best Selling Fonts</h2>
                    <ol className="mt-4 space-y-3 list-decimal list-inside">
                        {data.bestSellingFonts.map((font, index) => (
                            <li key={index} className="text-gray-600 flex justify-between items-center text-sm border-b pb-2">
                                <span>{font.name}</span>
                                <span className="font-medium text-gray-800">{font.sales} sales</span>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    );
}