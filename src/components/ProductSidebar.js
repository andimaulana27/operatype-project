// src/components/ProductSidebar.js
import FileIcon from './icons/FileIcon';
import ArchiveIcon from './icons/ArchiveIcon';

// Komponen untuk menampilkan informasi produk di sidebar
const ProductSidebar = ({ fileTypes, fileSize, features, styles, tags }) => {
  return (
    <div className="mt-8">
      {/* File Info */}
      <div className="space-y-4 text-gray-600 font-light">
        <div>
          <h3 className="font-medium text-[#3F3F3F]">File Type</h3>
          <p className="text-sm">{fileTypes}</p>
        </div>
        <div>
          <h3 className="font-medium text-[#3F3F3F]">File Size</h3>
          <p className="text-sm">{fileSize}</p>
        </div>
      </div>
      
      <div className="w-full h-px bg-gray-300 my-6"></div>

      {/* Product Info */}
      <div>
        <h3 className="text-xl font-medium text-[#3F3F3F] mb-3">Product Information</h3>
        <ul className="list-disc list-inside space-y-2 text-[#3F3F3F] font-light">
          {features.map(item => <li key={item}>{item}</li>)}
        </ul>
      </div>

      <div className="w-full h-px bg-gray-300 my-6"></div>

      {/* Styles */}
      <div>
        <h3 className="font-medium text-[#3F3F3F] mb-3">Styles</h3>
        <div className="flex flex-wrap gap-2">
          {styles.map(tag => (
            <span key={tag} className="bg-gray-100 text-[#3F3F3F] text-sm font-light px-3 py-1 rounded-full">{tag}</span>
          ))}
        </div>
      </div>
      
      <div className="w-full h-px bg-gray-300 my-6"></div>

      {/* Tags */}
      <div>
        <h3 className="font-medium text-[#3F3F3F] mb-3">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <span key={tag} className="bg-gray-100 text-[#3F3F3F] text-sm font-light px-3 py-1 rounded-full">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSidebar;