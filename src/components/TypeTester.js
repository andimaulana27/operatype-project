// src/components/TypeTester.js
"use client";
import { useState } from 'react';
import DropdownIcon from './icons/DropdownIcon';

// Terima props baru: fontStyles
const TypeTester = ({ fontStyles }) => {
  const [fontSize, setFontSize] = useState(72);
  const [previewText, setPreviewText] = useState("The quick brown fox jumps over the lazy dog");
  // State untuk menyimpan style yang aktif (misal: 'regular')
  const [activeStyle, setActiveStyle] = useState('regular'); 
  
  const presets = ["The quick brown fox jumps over the lazy dog", "Handgloves", "Calligraphy", "Operatype"];

  const handlePresetChange = (e) => {
    setPreviewText(e.target.value);
  };
  
  // Ambil nama font-family yang sesuai dari objek fontStyles
  const activeFontFamily = fontStyles[activeStyle]?.name || fontStyles.regular.name;

  return (
    <div className="w-full mt-16">
      <div className="flex justify-between items-center gap-8 mb-4">
        <h2 className="text-xl font-medium text-[#3F3F3F] whitespace-nowrap">Type Tester</h2>
        <div className="flex items-center w-full gap-4">
          <input 
            type="range" 
            min="12" 
            max="150" 
            value={fontSize}
            onChange={(e) => setFontSize(e.target.value)}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            style={{ 
              background: `linear-gradient(to right, #C8705C 0%, #C8705C ${((fontSize - 12) / (150 - 12)) * 100}%, #EFEFEF ${((fontSize - 12) / (150 - 12)) * 100}%, #EFEFEF 100%)` 
            }}
          />
          <span className="text-gray-500 whitespace-nowrap text-lg w-20 text-right">{fontSize} px</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Dropdown untuk preset teks */}
        <div className="relative md:col-span-1">
          <select
            value={previewText}
            onChange={handlePresetChange}
            className="truncate w-full h-14 bg-white border border-gray-300 rounded-full appearance-none pl-6 pr-12 text-[#3F3F3F] font-light outline-none focus:ring-1 focus:ring-[#C8705C]"
          >
            {presets.map(p => <option key={p} value={p}>{p}</option>)}
          </select>
          <div className="absolute inset-y-0 right-6 flex items-center pointer-events-none">
            <DropdownIcon className="w-4 h-4 text-[#C8705C]" />
          </div>
        </div>

        {/* Dropdown untuk style font (Regular/Italic) */}
        {/* Hanya muncul jika ada lebih dari 1 style */}
        {Object.keys(fontStyles).length > 1 && (
            <div className="relative md:col-span-1">
              <select
                value={activeStyle}
                onChange={(e) => setActiveStyle(e.target.value)}
                className="capitalize w-full h-14 bg-white border border-gray-300 rounded-full appearance-none pl-6 pr-12 text-[#3F3F3F] font-light outline-none focus:ring-1 focus:ring-[#C8705C]"
              >
                {Object.keys(fontStyles).map(styleKey => (
                    <option key={styleKey} value={styleKey} className="capitalize">{styleKey}</option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-6 flex items-center pointer-events-none">
                <DropdownIcon className="w-4 h-4 text-[#C8705C]" />
              </div>
            </div>
        )}

        {/* Input teks preview */}
        <div className={Object.keys(fontStyles).length > 1 ? "md:col-span-2" : "md:col-span-3"}>
          <input 
            type="text"
            value={previewText}
            onChange={(e) => setPreviewText(e.target.value)}
            className="w-full h-14 bg-white border border-gray-300 rounded-full py-2 px-5 text-lg outline-none focus:ring-1 focus:ring-[#C8705C] font-light text-[#3F3F3F] placeholder:text-[#9C9C9C]"
            placeholder="Type Here"
            style={{ fontFamily: activeFontFamily }}
          />
        </div>
      </div>
      
      <div className="w-full h-px bg-gray-300 my-8"></div>
      
      <div 
        className="mt-8 text-center break-words text-[#3F3F3F] min-h-[150px] flex justify-center items-center"
        style={{ fontSize: `${fontSize}px`, fontFamily: activeFontFamily }}
      >
        {previewText || "Type Here"}
      </div>
      
      <div className="w-full h-px bg-gray-300 mt-8"></div>
    </div>
  );
};

export default TypeTester;