// src/app/(admin)/dashboard/fonts/new/page.js
import { createFont } from '../actions';
import { supabase } from '@/lib/supabaseClient';

async function getPartners() {
    const { data, error } = await supabase.from('partners').select('id, name').order('name');
    if (error) {
        console.error('Error fetching partners for dropdown:', error);
        return [];
    }
    return data;
}

// === PERBAIKAN SEBENARNYA ADA DI BARIS INI ===
export default async function NewFontPage({ searchParams }) {
    const partners = await getPartners();
    // Kita baca 'message' langsung dari searchParams.
    const message = searchParams.message;
// ===============================================

    const inputStyle = "mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#C8705C] focus:border-[#C8705C] text-[#3F3F3F]";
    const labelStyle = "block text-sm font-medium text-gray-700";
    const sectionTitleStyle = "text-lg font-semibold text-gray-800 border-b pb-2 mb-4";
    const fileInputStyle = "block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#f2f2f2] file:text-[#C8705C] hover:file:bg-red-100";

    return (
        <div>
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800">Add New Font</h1>
                <div className="w-24 h-1 bg-[#C8705C] mt-2"></div>
            </div>
            
            {message && (
                 <div className={`mb-4 p-4 rounded-md text-sm ${message.startsWith('Error') ? 'bg-red-100 text-red-800 border-red-200' : 'bg-green-100 text-green-800 border-green-200'}`}>
                    {/* Pesan error sekarang akan lebih bersih */}
                    {decodeURIComponent(message.replace(/\+/g, ' '))}
                </div>
            )}

            <form action={createFont} encType="multipart/form-data" className="bg-white p-8 rounded-lg shadow-md space-y-8">
                
                {/* Sisanya sama persis, tidak perlu diubah */}
                <div className="space-y-6">
                    <div>
                        <label htmlFor="name" className={labelStyle}>Font Name</label>
                        <input type="text" name="name" id="name" required className={inputStyle} />
                    </div>
                    <div>
                        <label htmlFor="slug" className={labelStyle}>Slug</label>
                        <input type="text" name="slug" id="slug" required className={inputStyle} placeholder="e.g., grande-amstera"/>
                    </div>
                    <div>
                        <label htmlFor="description" className={labelStyle}>Description</label>
                        <textarea name="description" id="description" rows="3" required className={inputStyle}></textarea>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="category" className={labelStyle}>Category</label>
                            <select name="category" id="category" required className={inputStyle}>
                                <option value="">Select a category</option>
                                <option value="Script">Script</option>
                                <option value="Signature">Signature</option>
                                <option value="Handwritten">Handwritten</option>
                                <option value="Display">Display</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="partner_id" className={labelStyle}>Partner (Optional)</label>
                            <select name="partner_id" id="partner_id" className={inputStyle}>
                                <option value="">Select a partner</option>
                                {partners.map(partner => (
                                    <option key={partner.id} value={partner.id}>{partner.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="tag" className={labelStyle}>Tag (Optional)</label>
                        <input type="text" name="tag" id="tag" className={inputStyle} placeholder="e.g., Bestseller, New, Popular" />
                    </div>
                </div>
                <div>
                    <h2 className={sectionTitleStyle}>Licensing</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                            <label htmlFor="price_desktop" className={labelStyle}>Desktop License Price</label>
                            <input type="number" name="price_desktop" id="price_desktop" required step="0.01" className={inputStyle} placeholder="e.g., 19.00" />
                        </div>
                        <div>
                            <label htmlFor="price_business" className={labelStyle}>Business License Price</label>
                            <input type="number" name="price_business" id="price_business" step="0.01" className={inputStyle} placeholder="e.g., 99.00" />
                        </div>
                        <div>
                            <label htmlFor="price_corporate" className={labelStyle}>Corporate License Price</label>
                            <input type="number" name="price_corporate" id="price_corporate" step="0.01" className={inputStyle} placeholder="e.g., 299.00" />
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className={sectionTitleStyle}>Files & Images</h2>
                    <div className="space-y-6">
                         <div>
                            <label htmlFor="main_image" className={labelStyle}>Main Preview Image (Required)</label>
                            <input type="file" name="main_image" id="main_image" required className={fileInputStyle} accept="image/png, image/jpeg, image/gif" />
                        </div>
                        <div>
                            <label htmlFor="gallery_images" className={labelStyle}>Gallery Images (Max 15)</label>
                            <input type="file" name="gallery_images" id="gallery_images" multiple className={fileInputStyle} accept="image/png, image/jpeg, image/gif" />
                        </div>
                        <div>
                            <label htmlFor="font_file_regular" className={labelStyle}>Font Display File (Regular .otf or .ttf - Required)</label>
                            <input type="file" name="font_file_regular" id="font_file_regular" required className={fileInputStyle} accept=".otf,.ttf" />
                        </div>
                         <div>
                            <label htmlFor="font_file_italic" className={labelStyle}>Font Display File (Italic .otf or .ttf - Optional)</label>
                            <input type="file" name="font_file_italic" id="font_file_italic" className={fileInputStyle} accept=".otf,.ttf" />
                        </div>
                        <div>
                            <label htmlFor="font_zip" className={labelStyle}>Downloadable Customer File (.zip - Required)</label>
                            <input type="file" name="font_zip" id="font_zip" required className={fileInputStyle} accept=".zip" />
                        </div>
                    </div>
                </div>
                <div className="hidden">
                     <label htmlFor="glyph_characters" className={labelStyle}>Glyph Characters</label>
                     <textarea name="glyph_characters" id="glyph_characters" readOnly></textarea>
                </div>
                <div>
                    <button type="submit" className="w-full bg-[#C8705C] text-white py-3 px-4 rounded-md shadow-sm hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C8705C] font-semibold">
                        Save Font
                    </button>
                </div>
            </form>
        </div>
    );
}