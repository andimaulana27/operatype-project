// src/components/CustomDropdown.js
"use client";
import { useState, useRef, useEffect } from 'react';
import DropdownIcon from './icons/DropdownIcon';

const CustomDropdown = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const dropdownRef = useRef(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  // Menutup dropdown jika klik di luar komponen
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="relative w-[131px]" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full h-[35px] flex items-center justify-between bg-transparent py-1 px-5 border rounded-full text-[14px] font-light transition-colors ${isOpen ? 'border-[#C8705C]' : 'border-[#3F3F3F]'} text-[#3F3F3F]`}
      >
        <span>{selectedOption}</span>
        <DropdownIcon className={`w-4 h-4 text-[#C8705C] transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-2 bg-white rounded-md shadow-lg border border-gray-200">
          <ul className="py-1">
            {options.map((option, index) => (
              <li
                key={index}
                onClick={() => handleOptionClick(option)}
                className="px-4 py-2 text-sm text-[#3F3F3F] hover:bg-gray-100 cursor-pointer"
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;