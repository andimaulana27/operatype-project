// src/components/LicenseSelector.js
"use client";
import { useState, useEffect } from "react";
import Button from "./Button";
import CheckmarkIcon from "./icons/CheckmarkIcon";
import PlusIcon from "./icons/PlusIcon";
import MinusIcon from "./icons/MinusIcon";

const LicenseSelector = ({ licenses, initialPrice }) => {
  const [selected, setSelected] = useState({ desktop: true, business: false, corporate: false });
  const [userCounts, setUserCounts] = useState({ desktop: 1, business: 1, corporate: 1 });
  const [total, setTotal] = useState(initialPrice);

  useEffect(() => {
    let newTotal = 0;
    if (selected.desktop) newTotal += licenses.desktop.price * userCounts.desktop;
    if (selected.business) newTotal += licenses.business.price * userCounts.business;
    if (selected.corporate) newTotal += licenses.corporate.price * userCounts.corporate;
    setTotal(newTotal);
  }, [selected, userCounts, licenses]);

  const handleSelect = (id) => setSelected(prev => ({ ...prev, [id]: !prev[id] }));
  const handleUserCount = (id, amount) => {
    setUserCounts(prev => ({ ...prev, [id]: Math.max(1, prev[id] + amount) }));
  };

  const renderLicenseOption = (id, name, price) => (
    <div key={id} className="py-2">
      <div onClick={() => handleSelect(id)} className="flex justify-between items-center cursor-pointer group p-1">
        <div className="flex items-center space-x-4">
          {/* Checkbox Rounded Square */}
          <div className={`w-6 h-6 border-2 border-[#3F3F3F] rounded-lg flex items-center justify-center transition-colors ${selected[id] ? 'bg-[#C8705C] border-[#C8705C]' : 'bg-transparent'}`}>
            {selected[id] && <CheckmarkIcon className="w-4 h-4 text-white" />}
          </div>
          <span className="text-base font-normal text-[#3F3F3F]">{name}</span>
        </div>
        <span className="text-base font-medium text-[#C8705C]">${price.toFixed(2)}</span>
      </div>
      {/* Number of Users Pill Box */}
      {selected[id] && (
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
      <Button href="#" variant="primary" className="w-full h-[60px] text-lg flex items-center justify-center rounded-full">
        Add to Cart
      </Button>
    </div>
  );
};

export default LicenseSelector;