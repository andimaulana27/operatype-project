// src/components/ProductSidebar.js
import FileIcon from "./icons/FileIcon";
import ArchiveIcon from "./icons/ArchiveIcon";

const ProductSidebar = ({ fontData }) => {
  return (
    <div className="sticky top-28">
        <div className="border p-6 rounded-2xl space-y-6">
            <div>
                <h3 className="text-xl font-medium text-[#3F3F3F]">File Type</h3>
                <div className="flex items-center gap-x-3 mt-3 text-gray-600 font-light">
                    <FileIcon className="w-5 h-5 flex-shrink-0" />
                    <span>{fontData.fileTypes}</span>
                </div>
            </div>

            <div>
                <h3 className="text-xl font-medium text-[#3F3F3F]">File Size</h3>
                <div className="flex items-center gap-x-3 mt-3 text-gray-600 font-light">
                    <ArchiveIcon className="w-5 h-5 flex-shrink-0" />
                    <span>{fontData.fileSize}</span>
                </div>
            </div>

            <div className="w-full h-px bg-gray-200"></div>

            <div>
                <h3 className="text-xl font-medium text-[#3F3F3F]">Product Information</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600 font-light mt-4">
                    {fontData.productInfo.features.map(item => <li key={item}>{item}</li>)}
                </ul>
            </div>
            
            <div className="w-full h-px bg-gray-200"></div>

            <div>
                <h3 className="text-xl font-medium text-[#3F3F3F]">Styles</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600 font-light mt-4">
                    {fontData.productInfo.styles.map(item => <li key={item}>{item}</li>)}
                </ul>
            </div>

            <div className="w-full h-px bg-gray-200"></div>

            <div>
                <h3 className="text-xl font-medium text-[#3F3F3F]">Tags</h3>
                <div className="flex flex-wrap gap-2 mt-4">
                {fontData.productInfo.tags.map(tag => (
                    <span key={tag} className="bg-gray-100 text-gray-600 text-sm px-3 py-1 rounded-full">{tag}</span>
                ))}
                </div>
            </div>
        </div>
    </div>
  );
};

export default ProductSidebar;