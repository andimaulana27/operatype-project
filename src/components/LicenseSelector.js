// src/components/LicenseSelector.js
"use client";
import { useState, useEffect } from "react";
import Button from "./Button";
import CheckmarkIcon from "./icons/CheckmarkIcon";
import PlusIcon from "./icons/PlusIcon";
import MinusIcon from "./icons/MinusIcon";
import { useCart } from "@/context/CartContext";

const LicenseSelector = ({ licenses, product }) => { 
  const { addToCart } = useCart();

  // State untuk lisensi yang dipilih. Defaultnya 'desktop' terpilih.
  const [selectedLicenses, setSelectedLicenses] = useState({ desktop: true });
  const [userCounts, setUserCounts] = useState({ desktop: 1, business: 1, corporate: 1 });
  
  // PERBAIKAN: Inisialisasi 'total' berdasarkan lisensi default yang terpilih.
  const [total, setTotal] = useState(licenses.desktop?.price || 0);

  // Hitung ulang total setiap kali pilihan lisensi atau jumlah pengguna berubah.
  useEffect(() => {
    let newTotal = 0;
    // Iterasi melalui semua lisensi yang tersedia (desktop, business, etc.)
    Object.keys(licenses).forEach(licenseKey => {
      // Jika lisensi ini ada di state 'selectedLicenses' dan nilainya true
      if (selectedLicenses[licenseKey]) {
        newTotal += licenses[licenseKey].price * userCounts[licenseKey];
      }
    });
    setTotal(newTotal);
  }, [selectedLicenses, userCounts, licenses]);

  const handleSelect = (id) => {
    setSelectedLicenses(prev => ({ ...prev, [id]: !prev[id] }));
  };
  
  const handleUserCount = (id, amount) => {
    setUserCounts(prev => ({ ...prev, [id]: Math.max(1, prev[id] + amount) }));
  };
  
  const handleAddToCart = () => {
    let itemsAdded = 0;
    // Iterasi melalui lisensi yang dipilih
    Object.keys(selectedLicenses).forEach(licenseKey => {
      if (selectedLicenses[licenseKey]) {
        const licenseData = {
            name: `${licenseKey.charAt(0).toUpperCase() + licenseKey.slice(1)} License`,
            price: licenses[licenseKey].price // Ini adalah harga satuan
        };
        const quantity = userCounts[licenseKey];
        
        // Panggil addToCart untuk setiap lisensi yang dipilih
        addToCart(product, licenseData, quantity);
        itemsAdded++;
      }
    });

    if (itemsAdded === 0) {
        alert("Please select at least one license.");
    }
  };

  const renderLicenseOption = (id, name, price) => (
    <div key={id} className="py-2">
      <div onClick={() => handleSelect(id)} className="flex justify-between items-center cursor-pointer group p-1">
        <div className="flex items-center space-x-4">
          <div className={`w-6 h-6 border-2 border-[#3F3F3F] rounded-lg flex items-center justify-center transition-colors ${selectedLicenses[id] ? 'bg-[#C8705C] border-[#C8705C]' : 'bg-transparent'}`}>
            {selectedLicenses[id] && <CheckmarkIcon className="w-4 h-4 text-white" />}
          </div>
          <span className="text-base font-normal text-[#3F3F3F]">{name}</span>
        </div>
        <span className="text-base font-medium text-[#C8705C]">${price.toFixed(2)}</span>
      </div>
      {selectedLicenses[id] && (
        <div className="mt-3 w-full h-14 border border-gray-300 rounded-full flex items-center justify-between px-6">
          <p className="text-base font-light text-[#3F3F3F]">Number of Users: {userCounts[id]}</p>
          <div className="flex items-center space-x-3">
            <button onClick={() => handleUserCount(id, -1)} className="text-[#3F3F3F] hover:text-[#C8705C]"><MinusIcon className="w-3 h-3" /></button>
            <div className="h-4 w-px bg-gray-300"></div>
            <button onClick={() => handleUserCount(id, 1)} className="text-[#C8705C] hover:text-[#FF7C5E]"><PlusIcon className="w-3 h-3" /></button>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="w-full">
      <h2 className="text-xl font-medium text-[#C8705C]">Choose Your License</h2>
      <div className="w-full h-px bg-gray-300 my-4"></div>
      <div className="space-y-2">
        {renderLicenseOption('desktop', 'Desktop License', licenses.desktop.price)}
        {renderLicenseOption('business', 'Business License', licenses.business.price)}
        {renderLicenseOption('corporate', 'Corporate License', licenses.corporate.price)}
      </div>
      <div className="w-full h-px bg-gray-300 my-4"></div>
      <div className="flex justify-between items-center my-6">
        <span className="text-xl font-normal text-[#3F3F3F]">Total</span>
        <span className="text-2xl font-medium text-[#C8705C]">${total.toFixed(2)}</span>
      </div>
      <button 
        onClick={handleAddToCart}
        disabled={total === 0}
        className="w-full h-[60px] text-lg flex items-center justify-center rounded-full bg-[#C8705C] text-white hover:bg-[#FF7C5E] transition-all duration-350 ease-in disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default LicenseSelector;
