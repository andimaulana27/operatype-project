// src/app/(admin)/dashboard/fonts/new/page.js
import { createFont } from '../actions';

export default function NewFontPage() {
    // Definisikan style untuk input agar tidak berulang
    const inputStyle = "mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#C8705C] focus:border-[#C8705C] text-[#3F3F3F] placeholder:text-[#9c9c9c]";

    return (
        <div>
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800">Add New Font</h1>
                <div className="w-24 h-1 bg-[#C8705C] mt-2"></div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
                <form action={createFont} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Font Name</label>
                        <input type="text" name="name" id="name" required className={inputStyle} />
                    </div>

                    <div>
                        <label htmlFor="slug" className="block text-sm font-medium text-gray-700">Slug</label>
                        <input type="text" name="slug" id="slug" required className={inputStyle} placeholder="e.g., battesa-royales" />
                    </div>

                    <div>
                        <label htmlFor="desc" className="block text-sm font-medium text-gray-700">Description</label>
                        <textarea name="desc" id="desc" rows="3" required className={inputStyle}></textarea>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
                            <input type="text" name="price" id="price" required className={inputStyle} placeholder="e.g., $15.00" />
                        </div>
                        <div>
                            <label htmlFor="tag" className="block text-sm font-medium text-gray-700">Tag (Optional)</label>
                            <input type="text" name="tag" id="tag" className={inputStyle} placeholder="e.g., Bestseller" />
                        </div>
                    </div>

                     <div>
                        <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">Image URL</label>
                        <input type="text" name="imageUrl" id="imageUrl" required className={inputStyle} defaultValue="/placeholder-image.jpg" />
                    </div>

                    <div>
                        <button type="submit" className="w-full bg-[#C8705C] text-white py-3 px-4 rounded-md shadow-sm hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C8705C]">
                            Save Font
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}