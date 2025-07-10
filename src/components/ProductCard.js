// src/components/ProductCard.js
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const ProductCard = ({ fontName, description, price, imageUrl, slug }) => {
  return (
    <div className="group w-full max-w-sm mx-auto transition-all duration-300 hover:-translate-y-1">
      {/* Gambar Produk */}
      <Link href={`/font/${slug || 'sample-font'}`}>
        <div className="relative w-full aspect-[308/205] rounded-2xl bg-gray-200 overflow-hidden shadow-md group-hover:shadow-lg transition-shadow">
          <Image
            src={imageUrl || "/placeholder-image.jpg"}
            alt={`Mockup for ${fontName}`}
            fill
            style={{ objectFit: 'cover' }}
            className="transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
        </div>
      </Link>
      
      {/* Konten di Bawah Gambar */}
      <div className="mt-4 px-1">
        {/* Nama & Deskripsi Font */}
        <div>
          <h3 className="font-medium text-[22px] text-[#3F3F3F] group-hover:text-[#C8705C] transition-colors truncate">
            {fontName || "Font Name"}
          </h3>
          <p className="font-light text-sm text-gray-500 mt-1 truncate">
            {description || "Font description"}
          </p>
        </div>
        
        {/* Tombol & Harga */}
        <div className="mt-4 flex justify-between items-center">
          <Button 
            href={`/font/${slug || 'sample-font'}`} 
            variant="primary" 
            className="h-10 text-sm flex items-center justify-center px-6 rounded-full"
          >
            View Detail
          </Button>
          <p className="font-medium text-2xl text-[#C8705C]">{price || "$0.00"}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;