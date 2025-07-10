// src/components/GlyphGrid.js
"use client";
import { useState } from 'react';
import Button from './Button';

const GlyphGrid = ({ characters }) => {
  const [showAll, setShowAll] = useState(false);
  const displayedChars = showAll ? characters : characters.slice(0, 48);

  return (
    <div>
      <div className="relative">
        <div className="grid grid-cols-8 sm:grid-cols-10 md:grid-cols-12 lg:grid-cols-15 gap-2">
          {displayedChars.map((char, index) => (
            <div 
              key={index} 
              // PERBAIKAN DI SINI: Mengubah bg-gray-50 menjadi bg-transparent
              className="flex items-center justify-center w-full aspect-square border border-gray-300 rounded-lg bg-transparent text-3xl text-[#3F3F3F] select-all"
            >
              {char}
            </div>
          ))}
        </div>
        {!showAll && characters.length > 48 && (
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
        )}
      </div>
      
      {!showAll && characters.length > 48 && (
        <div className="flex justify-center mt-8">
          <Button 
            onClick={() => setShowAll(true)} 
            variant="primary" 
            className="w-[215px] h-[56px] text-base flex items-center justify-center rounded-full"
          >
            View More
          </Button>
        </div>
      )}
    </div>
  );
};

export default GlyphGrid;