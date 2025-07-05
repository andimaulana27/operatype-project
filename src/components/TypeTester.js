// src/components/TypeTester.js
"use client";
import { useState } from 'react';

const TypeTester = () => {
  const [previewText, setPreviewText] = useState("Type Here");
  const [fontSize, setFontSize] = useState(38);

  return (
    <section className="mt-24">
      <div className="flex justify-between items-center border border-gray-300 rounded-full p-2">
        <select className="appearance-none bg-transparent py-2 px-4 outline-none text-sm text-gray-600">
          <option>The quick brown fox...</option>
          <option>Custom Text</option>
        </select>
        <input 
          type="range" 
          min="12" 
          max="120" 
          value={fontSize}
          onChange={(e) => setFontSize(e.target.value)}
          className="w-full mx-6" 
          // Styling slider bisa lebih kompleks dan butuh CSS kustom jika ingin persis
        />
        <span className="text-gray-500 whitespace-nowrap text-sm">{fontSize} px</span>
        <input 
          type="text"
          placeholder="Type Here"
          onChange={(e) => setPreviewText(e.target.value || "Type Here")}
          className="w-1/3 text-right bg-transparent py-2 px-4 outline-none"
        />
      </div>
      <div className="w-full h-px bg-[#9C9C9C] my-8"></div>
      <div 
        className="text-7xl text-center break-words text-[#3F3F3F]"
        style={{ fontSize: `${fontSize}px` }} 
      >
        {previewText}
      </div>
      <div className="w-full h-px bg-[#9C9C9C] mt-8"></div>
    </section>
  );
};

export default TypeTester;