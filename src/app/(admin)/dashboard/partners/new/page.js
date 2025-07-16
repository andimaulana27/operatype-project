// src/app/(admin)/dashboard/partners/new/page.js
import { createPartner } from '../actions'; // Kita akan buat fungsi ini selanjutnya

export default function NewPartnerPage() {
    const inputStyle = "mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#C8705C] focus:border-[#C8705C] text-[#3F3F3F] placeholder:text-[#9c9c9c]";

    return (
        <div>
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800">Add New Partner</h1>
                <div className="w-24 h-1 bg-[#C8705C] mt-2"></div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
                <form action={createPartner} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Partner Name</label>
                        <input type="text" name="name" id="name" required className={inputStyle} />
                    </div>

                    <div>
                        <label htmlFor="slug" className="block text-sm font-medium text-gray-700">Slug</label>
                        <input type="text" name="slug" id="slug" required className={inputStyle} placeholder="e.g., creative-foundry" />
                    </div>

                    <div>
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                        <textarea name="description" id="description" rows="3" required className={inputStyle}></textarea>
                    </div>

                    <div>
                        <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">Logo Image URL</label>
                        <input type="text" name="imageUrl" id="imageUrl" required className={inputStyle} defaultValue="/partner-placeholder.png" />
                    </div>

                    <div>
                        <button type="submit" className="w-full bg-[#C8705C] text-white py-3 px-4 rounded-md shadow-sm hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C8705C]">
                            Save Partner
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}