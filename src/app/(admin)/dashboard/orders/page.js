// src/app/(admin)/dashboard/orders/page.js
import { ArrowDownTrayIcon, FunnelIcon } from '@heroicons/react/24/outline';

// Data dummy untuk pesanan
const dummyOrders = [
    { id: 'ORD-2025-0717-001', customer: 'John Doe', email: 'john.doe@example.com', items: 3, total: 57.00, status: 'Completed', date: '2025-07-17' },
    { id: 'ORD-2025-0717-002', customer: 'Jane Smith', email: 'jane.smith@example.com', items: 1, total: 19.00, status: 'Completed', date: '2025-07-17' },
    { id: 'ORD-2025-0716-001', customer: 'Michael Bay', email: 'michael.bay@example.com', items: 2, total: 118.00, status: 'Completed', date: '2025-07-16' },
    { id: 'ORD-2025-0715-001', customer: 'Sarah Connor', email: 'sarah.connor@example.com', items: 1, total: 99.00, status: 'Completed', date: '2025-07-15' },
    { id: 'ORD-2025-0714-001', customer: 'Peter Parker', email: 'peter.parker@example.com', items: 5, total: 255.00, status: 'Completed', date: '2025-07-14' },
];

// Fungsi untuk mendapatkan warna status
const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
        case 'completed': return 'bg-green-100 text-green-800';
        case 'pending': return 'bg-yellow-100 text-yellow-800';
        case 'failed': return 'bg-red-100 text-red-800';
        default: return 'bg-gray-100 text-gray-800';
    }
};

export default function ManageOrdersPage() {
    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">Manage Orders</h1>
                    <div className="w-24 h-1 bg-[#C8705C] mt-2"></div>
                </div>
                <div className="flex items-center gap-2">
                    <button className="flex items-center gap-2 bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 text-sm">
                        <FunnelIcon className="w-4 h-4"/>
                        Filter
                    </button>
                    <button className="flex items-center gap-2 bg-[#3F3F3F] text-white px-4 py-2 rounded-md hover:bg-opacity-90 text-sm">
                        <ArrowDownTrayIcon className="w-4 h-4"/>
                        Export CSV
                    </button>
                </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md overflow-x-auto">
                <table className="min-w-full text-left">
                    <thead className="border-b">
                        <tr>
                            <th className="p-4 text-sm font-semibold text-gray-600">Order ID</th>
                            <th className="p-4 text-sm font-semibold text-gray-600">Customer</th>
                            <th className="p-4 text-sm font-semibold text-gray-600">Date</th>
                            <th className="p-4 text-sm font-semibold text-gray-600 text-center">Items</th>
                            <th className="p-4 text-sm font-semibold text-gray-600 text-right">Total</th>
                            <th className="p-4 text-sm font-semibold text-gray-600 text-center">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dummyOrders.map(order => (
                            <tr key={order.id} className="border-b hover:bg-gray-50">
                                <td className="p-4 text-[#3F3F3F] font-mono text-xs">{order.id}</td>
                                <td className="p-4 text-[#3F3F3F]">
                                    <div className="font-medium">{order.customer}</div>
                                    <div className="text-xs text-gray-500">{order.email}</div>
                                </td>
                                <td className="p-4 text-gray-600 text-sm">{order.date}</td>
                                <td className="p-4 text-gray-600 text-sm text-center">{order.items}</td>
                                <td className="p-4 text-[#3F3F3F] font-medium text-right">${order.total.toFixed(2)}</td>
                                <td className="p-4 text-center">
                                    <span className={`px-2.5 py-1 text-xs font-medium rounded-full ${getStatusColor(order.status)}`}>
                                        {order.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}