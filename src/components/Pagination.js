// src/components/Pagination.js
import DropdownIcon from "./icons/DropdownIcon";

const Pagination = () => {
  return (
    <div className="flex justify-center items-center space-x-2">
      {/* Tombol Previous dengan margin kanan 12 (3rem) */}
      <button className="w-10 h-10 flex items-center justify-center border border-[#3F3F3F] rounded-full hover:bg-gray-100 transition-colors mr-12">
        <DropdownIcon className="w-4 h-4 text-[#3F3F3F] transform rotate-90" />
      </button>

      {/* Nomor Halaman */}
      <button className="w-10 h-10 flex items-center justify-center bg-[#FF7C5E] text-white rounded-lg font-medium">1</button>
      <button className="w-10 h-10 flex items-center justify-center text-[#3F3F3F] hover:bg-gray-100 rounded-lg">2</button>
      <button className="w-10 h-10 flex items-center justify-center text-[#3F3F3F] hover:bg-gray-100 rounded-lg">3</button>
      <span className="text-[#3F3F3F] px-2">...</span>
      <button className="w-10 h-10 flex items-center justify-center text-[#3F3F3F] hover:bg-gray-100 rounded-lg">27</button>

      {/* Tombol Next dengan margin kiri 12 (3rem) */}
      <button className="w-10 h-10 flex items-center justify-center bg-[#C8705C] rounded-full hover:bg-[#FF7C5E] transition-colors ml-12">
        <DropdownIcon className="w-4 h-4 text-white transform -rotate-90" />
      </button>
    </div>
  );
};

export default Pagination;