// src/components/LicenseSelector.js
"use client";
import { useState, useEffect } from "react";
import Button from "./Button";
import CheckmarkIcon from "./icons/CheckmarkIcon";
import PlusIcon from "./icons/PlusIcon";
import MinusIcon from "./icons/MinusIcon";

const LicenseSelector = ({ licenses }) => {
  const [selected, setSelected] = useState({ desktop: true, business: false, corporate: false });
  const [userCounts, setUserCounts] = useState({ desktop: 1, business: 1, corporate: 1 });
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let newTotal = 0;
    const desktopLicense = licenses.find(l => l.id === 'desktop');
    const businessLicense = licenses.find(l => l.id === 'business');
    const corporateLicense = licenses.find(l => l.id === 'corporate');
    
    if (selected.desktop && desktopLicense) newTotal += desktopLicense.price * userCounts.desktop;
    if (selected.business && businessLicense) newTotal += businessLicense.price * userCounts.business;
    if (selected.corporate && corporateLicense) newTotal += corporateLicense.price * userCounts.corporate;

    setTotal(newTotal);
  }, [selected, userCounts, licenses]);

  const handleSelect = (id) => setSelected(prev => ({ ...prev, [id]: !prev[id] }));
  const handleUserCount = (id, amount) => setUserCounts(prev => ({ ...prev, [id]: Math.max(1, prev[id] + amount) }));

  return (
    <div className="w-full">
      {/* GARIS PEMBATAS BARU DITAMBAHKAN DI SINI */}
      <div className="w-full h-px bg-[#3F3F3F] mb-6"></div>

      <h2 className="text-[32px] font-medium text-[#C8705C]">Choose Your License</h2>
      <div className="w-full h-px bg-[#3F3F3F] my-4"></div>

      <div className="space-y-4">
        {licenses.map(license => (
          <div key={license.id}>
            <div onClick={() => handleSelect(license.id)} className="flex justify-between items-center cursor-pointer group p-2">
              <div className="flex items-center space-x-4">
                <div className={`w-[29px] h-[29px] border border-[#3F3F3F] rounded-[3px] flex items-center justify-center transition-colors ${selected[license.id] ? 'bg-[#C8705C] border-[#C8705C]' : 'bg-transparent'}`}>
                  {selected[license.id] && <CheckmarkIcon className="w-5 h-5 text-white" />}
                </div>
                <span className="text-[20px] font-normal text-[#3F3F3F]">{license.name}</span>
              </div>
              <span className="text-[24px] font-medium text-[#C8705C]">${license.price.toFixed(2)}</span>
            </div>

            {selected[license.id] && (
              <div className="mt-3 w-full h-[72px] border border-[#3F3F3F] rounded-[38px] flex items-center justify-between px-6">
                <p className="text-[20px] font-normal text-[#3F3F3F]">
                  Number of Users : <span className="text-[#C8705C]">{userCounts[license.id]}</span>
                </p>
                <div className="flex items-center space-x-4">
                  <button onClick={() => handleUserCount(license.id, -1)} className="text-[#3F3F3F] transition-transform duration-200 ease-in-out hover:scale-125 active:scale-100"><MinusIcon className="w-[12px] h-[12px]" /></button>
                  <div className="h-6 w-px bg-[#9C9C9C]"></div>
                  <button onClick={() => handleUserCount(license.id, 1)} className="text-[#C8705C] transition-transform duration-200 ease-in-out hover:scale-125 active:scale-100"><PlusIcon className="w-[12px] h-[12px]" /></button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="w-full h-px bg-[#3F3F3F] my-6"></div>
      
      <div className="flex justify-between items-center mb-6">
        <span className="text-[24px] font-normal text-[#3F3F3F]">Total</span>
        <span className="text-[24px] font-medium text-[#C8705C]">${total.toFixed(2)}</span>
      </div>
      <Button href="#" variant="primary" className="w-full h-[72px] text-[18px] flex items-center justify-center">Add to Cart</Button>
    </div>
  );
};

export default LicenseSelector;