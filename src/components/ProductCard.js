// src/components/ProductCard.js
import Image from "next/image";
import Button from "./Button";

const ProductCard = ({ fontName, description, price, imageUrl, tagText }) => {
  return (
    <div className="group rounded-[15px] p-4 hover:-translate-y-2 transition-transform duration-300 ease-in-out w-full">
      
      <div className="relative w-full aspect-[308/205] rounded-[15px] bg-gray-200 overflow-hidden shadow-md group-hover:shadow-xl transition-shadow duration-300">
        <Image
          src={imageUrl || "/placeholder-image.jpg"}
          alt={`Mockup for ${fontName}`}
          fill
          style={{ objectFit: 'cover' }}
          className="transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
      </div>

      <div className="mt-4 px-1">
        {/* ========================================================== */}
        {/* PERUBAHAN UTAMA DI SINI                                    */}
        {/* ========================================================== */}
        <div className="flex justify-between items-center">
          <h3 className="font-medium text-[22px] text-[#3F3F3F]">{fontName}</h3>
          {tagText && (
            <span className="border border-orange-500 text-orange-600 text-xs font-light px-3 py-1 rounded-full">
              {tagText}
            </span>
          )}
        </div>
        
        <p className="font-light text-[18px] text-gray-500 mt-1">{description}</p>
        
        <div className="mt-4 flex justify-between items-center">
          <Button href="#" variant="primary" className="w-[123px] h-[32px] text-[12px] flex items-center justify-center">
            View Detail
          </Button>
          <p className="font-medium text-[24px] text-[#C8705C]">{price}</p>
        </div>
      </div>
    </div>
  );
};  

export default ProductCard;