// src/components/StyleCard.js
import Image from "next/image";
import Link from "next/link";

const StyleCard = ({ title, imageUrl, href }) => {
  return (
    <Link href={href} className="group block">
      {/* Wadah Gambar */}
      <div className="overflow-hidden rounded-2xl">
        <Image
          src={imageUrl}
          alt={`Style category: ${title}`}
          width={400}
          height={400}
          className="w-full aspect-[4/3] object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
      </div>
      {/* Teks Judul di Bawah Gambar */}
      <p className="mt-4 text-center text-lg font-medium text-[#3F3F3F] transition-colors group-hover:text-[#C8705C]">
        {title}
      </p>
    </Link>
  );
};

export default StyleCard;