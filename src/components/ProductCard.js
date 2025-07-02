// src/components/ProductCard.js
import Image from "next/image";
import Button from "./Button";

// Komponen ini akan menerima data untuk setiap font melalui props
const ProductCard = ({ fontName, description, price, imageUrl }) => {
  return (
    <div>
      {/* Gambar Produk */}
      <div className="relative w-[307px] h-[204px] rounded-[15px] bg-gray-200 overflow-hidden">
        {/* Jika Anda punya gambar, gunakan Image, jika tidak, ini akan jadi placeholder abu-abu */}
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={`Mockup for ${fontName}`}
            fill
            style={{ objectFit: 'cover' }}
          />
        )}
      </div>

      {/* Info di Bawah Gambar */}
      <div className="mt-4 px-1">
        <h3 className="font-medium text-[22px] text-[#3F3F3F]">{fontName}</h3>
        <p className="font-light text-[18px] text-gray-500">{description}</p>
        
        {/* Bagian Aksi (Tombol & Harga) */}
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