// src/components/PartnerCard.js
import Image from 'next/image';
import Link from 'next/link';

const PartnerCard = ({ name, description, imageUrl, slug }) => {
  return (
    <Link href={`/partners/${slug}`} className="group block w-full max-w-sm mx-auto text-center">
      
      {/* PERBAIKAN DI SINI: Menghapus bg-gray-100 */}
      <div className="relative w-full aspect-video rounded-2xl overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
        <Image
          src={imageUrl || "/partner-placeholder.png"}
          alt={`Logo for ${name}`}
          fill
          style={{ objectFit: 'contain', padding: '2rem' }} // 'contain' agar logo tidak terpotong
          className="transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
      </div>

      <div className="mt-4">
        <h3 className="text-2xl font-medium text-[#3F3F3F] group-hover:text-[#C8705C] transition-colors">
          {name}
        </h3>
        <p className="text-base font-light text-gray-500 mt-2">
          {description}
        </p>
        <div className="mt-4">
          <p className="text-sm font-medium text-[#C8705C] group-hover:underline">
            View Fonts →
          </p>
        </div>
      </div>
    </Link>
  );
};

export default PartnerCard;