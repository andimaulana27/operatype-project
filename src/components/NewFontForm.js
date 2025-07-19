// src/components/NewFontForm.js
"use client";

import { useState } from 'react';
import Image from 'next/image';
import { createFont } from '@/app/(admin)/dashboard/fonts/actions';
import { ArrowUpOnSquareIcon, ArchiveBoxIcon, PhotoIcon } from '@heroicons/react/24/outline';
import FileIcon from './icons/FileIcon'; // <-- Impor FileIcon kustom kita

export default function NewFontForm({ partners, categories }) {
    const inputStyle = "mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#C8705C] focus:border-[#C8705C] text-[#3F3F3F] placeholder:text-[#9c9c9c]";
    const labelStyle = "block text-sm font-medium text-gray-700";

    const [mainImagePreview, setMainImagePreview] = useState(null);
    const [galleryPreviews, setGalleryPreviews] = useState([]);
    const [zipFileName, setZipFileName] = useState('');
    const [fontRegularName, setFontRegularName] = useState('');
    const [fontItalicName, setFontItalicName] = useState('');

    const handleFileChange = (e, setFileName) => {
        const file = e.target.files[0];
        setFileName(file ? file.name : '');
    };
    
    const handleMainImageChange = (e) => {
        const file = e.target.files[0];
        setMainImagePreview(file ? URL.createObjectURL(file) : null);
    };

    const handleGalleryImagesChange = (e) => {
        const files = Array.from(e.target.files);
        if (files.length > 15) {
            alert("You can only upload a maximum of 15 gallery images.");
            e.target.value = '';
            setGalleryPreviews([]);
            return;
        }
        setGalleryPreviews(files.map(file => URL.createObjectURL(file)));
    };

    return (
        <div>
             <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800">Add New Font</h1>
                <div className="w-24 h-1 bg-[#C8705C] mt-2"></div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
                <form action={createFont} className="space-y-6">
                    
                    <fieldset className="border p-4 rounded-md">
                        <legend className="text-lg font-medium text-[#C8705C] px-2">Basic Information</legend>
                        <div className="space-y-4 pt-2">
                             <div><label htmlFor="name" className={labelStyle}>Font Name</label><input type="text" name="name" id="name" required className={inputStyle} /></div>
                            <div><label htmlFor="desc" className={labelStyle}>Description</label><textarea name="desc" id="desc" rows="3" required className={inputStyle}></textarea></div>
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div><label htmlFor="category" className={labelStyle}>Category</label><select name="category" id="category" required className={inputStyle}><option value="">Select a category</option>{categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}</select></div>
                                 <div><label htmlFor="partner_id" className={labelStyle}>Partner (Optional)</label><select name="partner_id" id="partner_id" className={inputStyle}><option value="">Select a partner</option>{partners.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}</select></div>
                            </div>
                             <div><label htmlFor="tag" className={labelStyle}>Tag (Optional)</label><input type="text" name="tag" id="tag" className={inputStyle} placeholder="e.g., Bestseller, New, Popular" /></div>
                        </div>
                    </fieldset>

                    <fieldset className="border p-4 rounded-md">
                        <legend className="text-lg font-medium text-[#C8705C] px-2">Licensing</legend>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                            <div><label htmlFor="price_desktop" className={labelStyle}>Desktop License Price</label><input type="number" name="price_desktop" id="price_desktop" step="0.01" required className={inputStyle} placeholder="e.g., 19.00" /></div>
                            <div><label htmlFor="price_business" className={labelStyle}>Business License Price</label><input type="number" name="price_business" id="price_business" step="0.01" required className={inputStyle} placeholder="e.g., 99.00" /></div>
                            <div><label htmlFor="price_corporate" className={labelStyle}>Corporate License Price</label><input type="number" name="price_corporate" id="price_corporate" step="0.01" required className={inputStyle} placeholder="e.g., 299.00" /></div>
                        </div>
                    </fieldset>

                    <fieldset className="border p-4 rounded-md">
                        <legend className="text-lg font-medium text-[#C8705C] px-2">Files & Images</legend>
                        <div className="space-y-6 pt-2">
                            <div>
                                <span className={labelStyle}>Main Preview Image</span>
                                <label htmlFor="main_image" className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 cursor-pointer hover:border-gray-400 transition-colors">
                                    {mainImagePreview ? (
                                        <div className="relative w-full max-w-md h-64"><Image src={mainImagePreview} alt="Main preview" fill style={{objectFit: 'contain'}} /></div>
                                    ) : (
                                        <div className="text-center">
                                            <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                                            <div className="mt-4 flex justify-center text-sm leading-6 text-gray-600">
                                                <span className="relative rounded-md bg-white font-semibold text-[#C8705C] focus-within:outline-none focus-within:ring-2 focus-within:ring-[#C8705C] focus-within:ring-offset-2 hover:text-[#FF7C5E]">Click to upload</span>
                                                <span className="pl-1">or drag and drop</span>
                                            </div>
                                            <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                        </div>
                                    )}
                                </label>
                                <input id="main_image" name="main_image" type="file" className="sr-only" onChange={handleMainImageChange} accept="image/*" required />
                             </div>
                             <div>
                                <span className={labelStyle}>Gallery Images (Max 15)</span>
                                <label htmlFor="gallery_images" className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 cursor-pointer hover:border-gray-400 transition-colors">
                                    {galleryPreviews.length > 0 ? (
                                        <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
                                            {galleryPreviews.map((src, index) => (
                                                <div key={index} className="relative w-24 h-24 rounded-md overflow-hidden"><Image src={src} alt={`Gallery preview ${index + 1}`} fill style={{objectFit: 'cover'}} /></div>
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="text-center">
                                            <ArrowUpOnSquareIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                                            <div className="mt-4 flex justify-center text-sm leading-6 text-gray-600">
                                                <span className="relative rounded-md bg-white font-semibold text-[#C8705C] focus-within:outline-none focus-within:ring-2 focus-within:ring-[#C8705C] focus-within:ring-offset-2 hover:text-[#FF7C5E]">Click to upload</span>
                                                <span className="pl-1">or drag and drop</span>
                                            </div>
                                            <p className="text-xs leading-5 text-gray-600">Up to 15 images</p>
                                        </div>
                                    )}
                                </label>
                                <input id="gallery_images" name="gallery_images" type="file" className="sr-only" onChange={handleGalleryImagesChange} accept="image/*" multiple />
                             </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className={labelStyle}>Font Display File (Regular)</label>
                                    <div className="mt-2 flex items-center justify-between rounded-lg border border-gray-300 px-4 py-3">
                                        {/* PERUBAHAN DI SINI */}
                                        <div className="flex items-center gap-3"><FileIcon className="h-7 w-7 text-gray-400" /><span className="text-sm text-gray-700 truncate">{fontRegularName || 'No file selected'}</span></div>
                                        <label htmlFor="font_file_regular" className="cursor-pointer bg-white border border-gray-300 rounded-md px-3 py-1.5 text-sm font-semibold text-gray-900 hover:bg-gray-50">Choose</label>
                                        <input id="font_file_regular" name="font_file_regular" type="file" className="sr-only" onChange={(e) => handleFileChange(e, setFontRegularName)} accept=".otf,.ttf,.woff,.woff2" required />
                                    </div>
                                </div>
                                <div>
                                    <label className={labelStyle}>Font Display File (Italic)</label>
                                    <div className="mt-2 flex items-center justify-between rounded-lg border border-gray-300 px-4 py-3">
                                        {/* PERUBAHAN DI SINI */}
                                        <div className="flex items-center gap-3"><FileIcon className="h-7 w-7 text-gray-400" /><span className="text-sm text-gray-700 truncate">{fontItalicName || 'No file selected'}</span></div>
                                        <label htmlFor="font_file_italic" className="cursor-pointer bg-white border border-gray-300 rounded-md px-3 py-1.5 text-sm font-semibold text-gray-900 hover:bg-gray-50">Choose</label>
                                        <input id="font_file_italic" name="font_file_italic" type="file" className="sr-only" onChange={(e) => handleFileChange(e, setFontItalicName)} accept=".otf,.ttf,.woff,.woff2" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label className={labelStyle}>Downloadable Font File (ZIP)</label>
                                <div className="mt-2 flex items-center justify-between rounded-lg border border-gray-300 px-4 py-3"><div className="flex items-center"><ArchiveBoxIcon className="h-8 w-8 text-gray-400 mr-3" /><span className="text-sm text-gray-700 truncate">{zipFileName || 'No file selected'}</span></div><label htmlFor="font_zip" className="cursor-pointer bg-white border border-gray-300 rounded-md px-3 py-1.5 text-sm font-semibold text-gray-900 hover:bg-gray-50">Choose</label><input id="font_zip" name="font_zip" type="file" className="sr-only" onChange={(e) => handleFileChange(e, setZipFileName)} accept=".zip" required /></div>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset className="border p-4 rounded-md">
                        <legend className="text-lg font-medium text-[#C8705C] px-2">Glyph Display</legend>
                        <div className="pt-2">
                            <label htmlFor="glyph_characters" className={labelStyle}>Glyph Characters</label>
                            <textarea name="glyph_characters" id="glyph_characters" rows="4" required className={inputStyle} placeholder="Contoh: ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()"></textarea>
                            <p className="text-xs text-gray-500 mt-1">Enter all characters you want to display in the glyph grid, without spaces.</p>
                        </div>
                    </fieldset>
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