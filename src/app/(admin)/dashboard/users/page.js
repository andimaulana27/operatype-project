// src/app/(admin)/dashboard/users/page.js
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

// Data dummy untuk pengguna
const dummyUsers = [
    { id: 'usr-001', name: 'Andi Maulana', email: 'andimaula1227@gmail.com', role: 'Admin', joined: '2025-07-10' },
    { id: 'usr-002', name: 'John Doe', email: 'john.doe@example.com', role: 'Customer', joined: '2025-07-17' },
    { id: 'usr-003', name: 'Jane Smith', email: 'jane.smith@example.com', role: 'Customer', joined: '2025-07-17' },
    { id: 'usr-004', name: 'Michael Bay', email: 'michael.bay@example.com', role: 'Customer', joined: '2025-07-16' },
    { id: 'usr-005', name: 'Sarah Connor', email: 'sarah.connor@example.com', role: 'Customer', joined: '2025-07-15' },
    { id: 'usr-006', name: 'Peter Parker', email: 'peter.parker@example.com', role: 'Customer', joined: '2025-07-14' },
];

const getRoleColor = (role) => {
    switch (role.toLowerCase()) {
        case 'admin': return 'bg-purple-100 text-purple-800';
        case 'customer': return 'bg-sky-100 text-sky-800';
        default: return 'bg-gray-100 text-gray-800';
    }
};

export default function ManageUsersPage() {
    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">Manage Users</h1>
                    <div className="w-24 h-1 bg-[#C8705C] mt-2"></div>
                </div>
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search by name or email..."
                        className="w-72 border border-gray-300 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-1 focus:ring-[#C8705C]"
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <MagnifyingGlassIcon className="w-5 h-5 text-gray-400"/>
                    </div>
                </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md overflow-x-auto">
                <table className="min-w-full text-left">
                    <thead className="border-b">
                        <tr>
                            <th className="p-4 text-sm font-semibold text-gray-600">User</th>
                            <th className="p-4 text-sm font-semibold text-gray-600">Role</th>
                            <th className="p-4 text-sm font-semibold text-gray-600">Joined Date</th>
                            <th className="p-4 text-sm font-semibold text-gray-600">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dummyUsers.map(user => (
                            <tr key={user.id} className="border-b hover:bg-gray-50">
                                <td className="p-4 text-[#3F3F3F]">
                                    <div className="font-medium">{user.name}</div>
                                    <div className="text-xs text-gray-500">{user.email}</div>
                                </td>
                                <td className="p-4">
                                     <span className={`px-2.5 py-1 text-xs font-medium rounded-full ${getRoleColor(user.role)}`}>
                                        {user.role}
                                    </span>
                                </td>
                                <td className="p-4 text-gray-600 text-sm">{user.joined}</td>
                                <td className="p-4">
                                    <button className="text-sm text-blue-600 hover:underline">
                                        View Details
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}